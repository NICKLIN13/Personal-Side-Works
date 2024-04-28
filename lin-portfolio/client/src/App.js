import './App.css';
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, CardText } from 'react-bootstrap'

function App() {
  return (
    <div className="App">

      <Navbar />

      <h1>Hello <span class="badge bg-secondary">New</span> </h1>

      <header className="App-header">
        <Container className="my-4 bg-secondary text-white">
          <CardText>
            About Me <br />mike
          </CardText>
        </Container>
      </header>
    </div>
  );
}

export default App;
