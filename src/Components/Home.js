import React from 'react'
import '../Css files/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
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
    <div className="cover-text">
      <img alt="logoCC" src="https://computerclubgs.github.io/logotp.png" width="135" height="135.5" />
    </div>  
    <div className="container">
      <h2>COMPUTER CLUB</h2>
      <h3>LET'S CREATE THE THINGS TOGETHER</h3>
      <h4>Technical Club of CSE Department</h4>
      <a href="http://sgsits.ac.in" rel="noopener noreferrer" target="_blank"><p>Shri Govindram Seksaria Institute of Science and Technology,Indore (M.P)</p></a>
    </div>
  </div>

  <div className="main">
    <div>
      <div className="news">
        <div className="news-header">News and Updates</div>
        <marquee direction="down" height="265" width="200"  scrollamount="5" behavior="alternate">1. Venturethon<br/>2. Hackathon<br/>3. Game Development</marquee>
      </div>
    </div>
    <div className="content">
      <div className="content-data">
      <div className="content-heading">
      <h4>ABOUT US</h4>
      </div>
      <p>We at Computer Club are a union of people who are technology and coding fanatics. Not just limited to programming, we also facilitate an overall development as an engineer through nurturing tools like internships, workshops, demos and oodles of related activities. Faculty members and students here are all devoted to betterment of logic building and situation handling aspects of an engineer's personality.
      The club acts as a support system for the students to get work experience through practical projects and complete their technical part of personality. It aims at providing work experience starting right from the 1st year, uplifting the technological standard of students, and bringing in the culture of work while you play. Overall, it is a great space for students to learn and implement.</p>
      </div>
      <br/>
      <br/>
      <div className="content-data">   
      <div className="content-heading">
          
       <h4>OUR VALUES</h4>
       </div>
      
      <p>We at Computer Club are a union of people who are technology and coding fanatics. Not just limited to programming, we also facilitate an overall development as an engineer through nurturing tools like internships, workshops, demos and oodles of related activities. Faculty members and students here are all devoted to betterment of logic building and situation handling aspects of an engineer's personality.
      The club acts as a support system for the students to get work experience through practical projects and complete their technical part of personality. It aims at providing work experience starting right from the 1st year, uplifting the technological standard of students, and bringing in the culture of work while you play. Overall, it is a great space for students to learn and implement.</p>
      </div>
      <br/>
      <br/>
      <div className="content-data">
      <div className="content-heading">
      <h4>VISION</h4>
      </div>
      <p>We at Computer Club are a union of people who are technology and coding fanatics. Not just limited to programming, we also facilitate an overall development as an engineer through nurturing tools like internships, workshops, demos and oodles of related activities. Faculty members and students here are all devoted to betterment of logic building and situation handling aspects of an engineer's personality.
      The club acts as a support system for the students to get work experience through practical projects and complete their technical part of personality. It aims at providing work experience starting right from the 1st year, uplifting the technological standard of students, and bringing in the culture of work while you play. Overall, it is a great space for students to learn and implement.</p>
      </div>
    </div>
   </div>
</div>
    );
}

export default Home
