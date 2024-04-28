import './App.css';
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, CardText } from 'react-bootstrap'

function App() {
  return (
    <div className="App">

      <Navbar />

      <h1>Hello <span class="badge bg-secondary">New</span> </h1>

      <header className="App-header">
        <h2>About Me</h2>
        <Container className="my-4 bg-secondary text-white">
          <CardText>
            mike
          </CardText>
        </Container>

        <h2>Experience</h2>
        <Container className="text-start my-4 bg-secondary text-white">
          Master Student
          <CardText>
            <span className="fs-5">University of Illinois Urbana-Champaign, May 2024 - September 2025</span>
          </CardText>
        </Container>

        <Container className="text-start my-4 bg-secondary text-white">
          Undergraduate Student
          <CardText>
            <span className="fs-5">Oita University, April 2016 - March 2020</span>
          </CardText>
        </Container>

      </header>
    </div>
  );
}

export default App;
