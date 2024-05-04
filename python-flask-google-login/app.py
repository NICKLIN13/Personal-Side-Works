import os
import pathlib
import requests
from flask import Flask, session, abort, redirect, request
from config import Config
from google.oauth2 import id_token
from google_auth_oauthlib.flow import Flow
from pip._vendor import cachecontrol
import google.auth.transport.requests


app = Flask("Google Login App")
app.config.from_object(Config)

os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"


default_css = """
<style>
body {
    font-size: 28px;
}
button {
    font-size: 20px;
}
</style>
"""


GOOGLE_CLIENT_ID = "1077916444807-nvbt839onu2arktnfujku36i28kidd19.apps.googleusercontent.com"
client_secrets_file = os.path.join(pathlib.Path(__file__).parent, "client_secret.json")

flow = Flow.from_client_secrets_file(
    client_secrets_file=client_secrets_file,
    scopes=["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email", "openid"],
    redirect_uri="http://127.0.0.1:5000/callback"
)


def login_is_required(function):
    def wrapper(*args, **kwargs):
        if "google_id" not in session:
            return abort(401)  # AUTHORIZATION REQUIRED
        else:
            return function()

    return wrapper


# LOGIN
@app.route("/login")
def login():
    authorization_url, state = flow.authorization_url()
    session["state"] = state
    return redirect(authorization_url)


# CALLBACK
@app.route("/callback")
def callback():
    flow.fetch_token(authorization_response=request.url)

    if not session["state"] == request.args["state"]:
        abort(500)  # STATE DOESN"T MATCH

    credentials = flow.credentials
    request_session = requests.session()
    cached_session = cachecontrol.CacheControl(request_session)
    token_request = google.auth.transport.requests.Request(session=cached_session)

    id_info = id_token.verify_oauth2_token(
        id_token=credentials._id_token,
        request=token_request,
        audience=GOOGLE_CLIENT_ID
    )

    session["google_id"] = id_info.get("sub")
    session["name"] = id_info.get("name")
    return redirect("/protected_area")


# LOGOUT
@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")


# INDEX
@app.route("/")
def index():
    return f"{default_css}Login with Google <a href='/login'><button>Login</button></a>"


# PROTECTED_AREA
@app.route("/protected_area")
@login_is_required
def protected_area():
    return f"{default_css}Hello {session['name']} <br/> Login Succeeded! <br/><br/> <a href='/logout'><button>Logout</button></a>"



if __name__ == "__main__":
    app.run(debug=True)