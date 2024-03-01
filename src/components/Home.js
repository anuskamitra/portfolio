import React from "react";
import anuskaImage from "./anuska.jpg";
import { Link } from "react-scroll";
import Nav from "react-bootstrap/Nav";


function Home() {
  return (
    <div id="home" className="home">
      <div className="image">
        <div>
          {" "}
          <img src={anuskaImage} alt="Anuska"/>
        </div>
        <h1 className="m-0 text-dark">...</h1>
      </div>

      <div className="about">
        <h2>Hello, I am Anuska Mitra</h2>
        <h6>BTech Graduate of 2023</h6>
        <br />
        <p>
          Seeking a beginner role to enhance and explore my technical knowledge
          where <br /> I can make the best of my potential and contribute to the
          organization's growth.
        </p>
        <div className="p-2 d-flex">
          <div className="m-4">
            <a href="anuskamitra_resume_2024.pdf" target="_blank">
              <button type="button" className="button-resume">
                My Resume
              </button>
            </a>
          </div>
          <div className="m-4 ">
            <Nav.Link
              href="#contact"
              as={Link}
              to="contact"
              smooth={true}
              duration={500}
            >
              <button className="button-contact" type="button">
                Contact Me
              </button>
            </Nav.Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
