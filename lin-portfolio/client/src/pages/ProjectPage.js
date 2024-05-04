import React from 'react'
import '../App.css';
import Navbar from '../components/Navbar'
import { CardText, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectPage() {
  return (
    <div className='App'>
      <Navbar />

      <h1 style={{ marginTop: '10px' }}>My Projects <span class="badge bg-secondary">New</span> </h1>

      <header className='App-header'>

        <h1 className='my-4'>2024</h1>

        <div className='container'>
          <div className="card">
            <div className='card-image'>
              <img src="/Project-Images/IMAGE_To-do-list.png" alt="TodoList App" style={{ width: '286px', height: '256px', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            <div className="card-body">
              <h4>Todo List</h4>
              <div className='text-start fs-6' style={{ marginTop: '9px' }}>
                <span className="badge bg-secondary d-inline-block">NodeJS</span>
                <span className="badge bg-secondary d-inline-block" style={{ marginLeft: '2px'}}>JavaScript(React)</span>
                <span className="badge bg-secondary d-inline-block">MongoDB</span>
                <span className="badge bg-secondary d-inline-block" style={{ marginLeft: '2px'}}>Deployed(CI/CD)</span>
              </div>

              <CardText style={{ marginTop: '15px'}}>
                <ul className="fs-6 text-start">
                  <li>Utilized React.js & Express.js to do the full stack work</li>
                  <li>Integrated MongoDB as a back-end database with RESTful Api</li>
                  <li>Deployed to render.com and acheived CI</li>
                </ul>
              </CardText>
              <Button className='custom-button' href="https://lin-todolist.onrender.com" class="btn btn-primary" target="_blank">Demo</Button>
            </div>
          </div>

          <div className="card">
            <div className='card-image'>
              <img src="/Project-Images/Hangman.png" alt="Hangman Game" style={{ width: '286px', height: '256px', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            <div className="card-body">
              <h4>Hangman</h4>
              <div className='text-start fs-6' style={{ marginTop: '9px' }}>
                <span className="badge bg-secondary d-inline-block">TypeScript(React)</span>
              </div>

              <CardText style={{ marginTop: '15px'}}>
                <ul className="fs-6 text-start">
                  <li>Developed Hangman game using TypeScript</li>
                  <li>Kept users from entering repeated letters</li>
                  <li>Generated a touch keyboard</li>
                </ul>
              </CardText>
              <Button className='custom-button' href="https://github.com/NICKLIN13/Personal-Side-Works/tree/main/hangman-typescript" class="btn btn-primary" target="_blank">GitHub</Button>
            </div>
          </div>

          <div className="card">
            <div className='card-image'>
              <img src="/Project-Images/Login-with-Google.png" alt="Login with Google" style={{ width: '286px', height: '256px', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            <div className="card-body">
              <h4>Login with Google</h4>
              <div className='text-start fs-6' style={{ marginTop: '9px' }}>
                <span className="badge bg-secondary d-inline-block">Python(Flask)</span>
                <span className="badge bg-secondary d-inline-block" style={{ marginLeft: '2px'}}>OAuth 2.0</span>
              </div>



              <CardText style={{ marginTop: '15px'}}>
                <ul className="fs-6 text-start">
                  <li>Integrated Google OAuth 2.0 API</li>
                  <li>Prevented CSRF attacks with id_token</li>
                  <li>Protected specific URLs with decorator</li>
                </ul>
              </CardText>
              <Button className='custom-button' href="#" class="btn btn-primary" target="_blank">GitHub</Button>
            </div>
          </div>


        </div>

      </header>
    </div>
  )
}

export default ProjectPage
