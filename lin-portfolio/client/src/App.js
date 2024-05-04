import './App.css';
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap'

function App() {
  return (
    <div className="App">

      <Navbar />
      <h1 style={{ marginTop: '10px' }}>Hello <span className="badge bg-secondary">New</span> </h1>

      <header className="App-header">
        <h2 style={{ marginTop: '20px' }}><b>About Me</b></h2>
        <Container className="my-4 bg-dark text-white" style={{ width: '1000px', height: '500px' }}>
          <div className='d-flex flex-column justify-content-center align-items-center' style={{ marginLeft: '30px'}}>
            <img src="/000.JPG" className="rounded-circle rounded-circle-small" style={{ objectFit: 'cover', objectPosition: 'center left' }} alt="圓形照片"></img>
            <Button className="btn-light" href='https://github.com/NICKLIN13?tab=repositories' style={{ marginTop: '25px', width: '150px'}} target="_blank">GitHub</Button>
            <Button className="btn-light" href='https://www.linkedin.com/in/lily-chang-68988822a/' style={{ marginTop: '15px', width: '150px' }} target="_blank">LinkedIn</Button>
          </div>

          <div className='col-md-7 d-flex flex-column justify-content-center' style={{marginLeft: '80px'}}>
            <h5 className='text-start'><b>Software developer & Master student at UIUC</b></h5>
            <br/>
            <p className='text-start fs-6'>
              I am Yu-Ting Lin, as known as NICK. I have a strong foundation in algorithms and data structures, and I use modern web technologies such as React.js and Node.js to develop projects.
            </p>
          </div>
        </Container>

        <h2><b>Experience</b></h2>
        <Container className="my-4 bg-dark text-white" style={{ width: '1000px', height: '350px'}}>
          <div className='col-md-8 d-flex flex-column justify-content-center'>
            <h5><b>Master of Computer Science</b></h5>
            <h6 style={{ marginTop: '18px' }}>University of Illinois Urbana-Champaign</h6>
            <h6>May 2024 - Expected September 2025</h6>
            <br />
            <ul className='text-start fs-6'>
              <li>First Semester:
                <span className="badge bg-secondary d-inline-block" style={{ marginLeft: '5px'}}>Database Systems</span>
                <span className="badge bg-secondary d-inline-block" style={{ marginLeft: '5px'}}>Data Visualization</span>
                <span className="badge bg-secondary d-inline-block" style={{ marginLeft: '5px'}}>Data Cleaning</span>
              </li>
            </ul>
          </div>
        </Container>

        <Container className="my-4 bg-dark text-white" style={{ width: '1000px', height: '410px'}}>
          <div className='col-md-8 d-flex flex-column justify-content-center'>
            <h5><b>CS-Related Courses</b></h5>
            <h6 style={{ marginTop: '18px' }}>National Taiwan Normal University,</h6>
            <h6 >National Taipei University of Technology</h6>
            <h6>February 2023 - July 2023</h6>
            <ul className='text-start fs-6' style={{ marginTop: '30px' }}>
              <li>Credit Courses:
                <span className="badge bg-secondary d-inline-block" style={{ marginLeft: '5px'}}>Algorithm</span>
                <span className="badge bg-secondary d-inline-block" style={{ marginLeft: '5px'}}>Data Structure</span>
                <span className="badge bg-secondary d-inline-block" style={{ marginLeft: '5px'}}>Object-oriented Programming</span>
                <span className="badge bg-secondary d-inline-block" style={{ marginLeft: '150px'}}>Computer Organization</span>
                <span className="badge bg-secondary d-inline-block" style={{ marginLeft: '5px'}}>Probability and Stastics</span>
              </li>
            </ul>
            <ul className='text-start fs-6'>
              <li>Achieved the highest score in OOP class, securing 99%</li>
              <li style={{ marginTop: '10px' }}>Overall GPA: 4.0/4.0</li>
            </ul>
          </div>
        </Container>


        <Container className="my-4 bg-dark text-white" style={{ width: '1000px', height: '440px'}}>
          <div className='col-md-10 d-flex flex-column justify-content-center'>
            <h5><b>Bachelor of Engineering <br />in Architecture and Mechatronics</b></h5>
            <h6 style={{ marginTop: '18px' }}>Oita University</h6>
            <h6>April 2016 - March 2020</h6>
            <h6 style={{ marginTop: '15px' }}><b>Completed JABEE accredited engineering program with dual 3.5-year Scholarships</b></h6>
            <br />
            <ul className='text-start fs-6'>
              <li>Analyzed the approaches to regional disaster prevention in the symposium</li>
              <li style={{ marginTop: '10px' }}>Utilized LEGO® Blocks to do programming learning and disaster education </li>
              <li style={{ marginTop: '10px' }}>Held a disaster reduction and preparedness workshop / camp</li>
            </ul>
          </div>
        </Container>

      </header>
    </div>
  );
}

export default App;
