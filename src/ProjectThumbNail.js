import React from "react";
import { Link } from "react-router-dom";

function ProjectThumbNail(props) {
  return (
    <div className="projectCard">
      <div className="projectImg">
        <img src={props.src} />
      </div>
      <div className="projectInfo">
        <a href="#" className="projectTitle">
          {" "}
          <h3 className="link-underline-light ">{props.name}</h3>
        </a>
        <p className="projectDesc">{props.description}</p>
        <a className="liveLink" href={props.Link}>Live Link</a>
      </div>
    </div>
  );
}

export default ProjectThumbNail;
