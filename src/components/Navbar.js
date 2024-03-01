
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';
import React,{useState} from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";


function Navb() {
  const [isMobile,setIsMobile]=useState(false)
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="sticky-top">
        <Container>
          <Navbar.Brand href="#home"className='ml-1'>ANUSKA MITRA</Navbar.Brand>     
          <Nav className={`ml-auto ${isMobile ? 'navLinksMobile' : 'navLinks'}`}>
          {/* <Nav className="ml-auto navLinks"> */}
          <Nav.Link className='homeLink'onClick={()=>setIsMobile(!isMobile)} href="#home" as= {Link} to="home" smooth={true} duration={500}>Home</Nav.Link>
          <Nav.Link className='educationLink' onClick={()=>setIsMobile(!isMobile)} href="#education" as= {Link} to="education" smooth={true} duration={500}>Education</Nav.Link>
          <Nav.Link className='skillLink'onClick={()=>setIsMobile(!isMobile)} href="skill" as= {Link} to="skill" smooth={true} duration={500}>Skills</Nav.Link>
          <Nav.Link className='projectLink' onClick={()=>setIsMobile(!isMobile)}href="#projects" as= {Link} to="projects" smooth={true} duration={500}>Projects</Nav.Link>
          <Nav.Link className='workLink' onClick={()=>setIsMobile(!isMobile)} href="#work" as= {Link} to="work" smooth={true} duration={500}>Work</Nav.Link>
          <Nav.Link className='contactLink'onClick={()=>setIsMobile(!isMobile)} href="#contact" as= {Link}to="contact" smooth={true} duration={500}>Contact</Nav.Link>
         
          </Nav>
          <button className="btn custom-icon" onClick={()=>setIsMobile(!isMobile)}>{!isMobile?<FiAlignJustify />:<RxCross1/>}</button>
        </Container>
      </Navbar>
      
  
    </>
  );
}

export default Navb;
