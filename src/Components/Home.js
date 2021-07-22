import React, { useEffect } from 'react'
import '../Css files/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextyAnim from 'rc-texty';
import about_img from "../Images/1.png";
import img2 from "../Images/2.png";
import img3 from "../Images/3.png";
import vid from "../Images/video1.mp4"
import useWindowHeight from '../Utils/window_height';
import useWindowWidth from '../Utils/window_width';
import FadeIn from 'react-fade-in';

function Home() {
  const width = useWindowWidth()


  return (

    <div>

      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
<Navbar.Brand href="#home"><img src="https://computerclubgs.github.io/logotp.png" width="45" height="45" className="d-inline-block align-top"  alt="React Bootstrap logo"/><Navbar.Brand>COMPUTER CLUB</Navbar.Brand></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link href="#deets" className="nav-spacing">ABOUT US</Nav.Link>
      <Nav.Link  className="nav-spacing"><Members/></Nav.Link>
      <Nav.Link href="#deets" className="nav-spacing">EVENTS</Nav.Link>
      <Nav.Link href="#deets" className="nav-spacing">CONTACT US</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar> */}

      <div className="top-wrapper">
        <video autoPlay loop muted class="video-container">
          <source src={vid} type="video/mp4" />
          <source src={vid} type="video/ogg" />
        </video>
        <div className="cover-text">
          <img alt="logoCC" src="https://computerclubgs.github.io/logotp.png" width="135" height="135.5" />
        </div>
        <div className="container">
          <h2><TextyAnim>COMPUTER CLUB</TextyAnim></h2>
          <h3><TextyAnim>LET'S CREATE THE THINGS TOGETHER</TextyAnim></h3>
          <h4><TextyAnim>Technical Club of CSE Department</TextyAnim></h4>
          <a href="http://sgsits.ac.in" rel="noopener noreferrer" target="_blank"><p><TextyAnim>Shri Govindram Seksaria Institute of Science and Technology,Indore (M.P)</TextyAnim></p></a>
        </div>
      </div>

      <div className="main">
        <div>
          <FadeIn>
            <div className="about-us">
              <img src={about_img} alt=" " id="about-img" style={{ width: width < 500 ? width - width / 10 : "auto" }} />
            </div>
            <div className="content">
              <div className="our-values">
                <img src={img2} alt=" " id="values-img" style={{ width: width < 500 ? width - width / 10 : "auto" }} />
              </div>
              <div className="vision">
                <img src={img3} alt=" " id="vision-img" style={{ width: width < 500 ? width - width / 10 : "auto" }} />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

    </div>
  );
}

export default Home
