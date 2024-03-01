import React from "react";

function Education() {
  return (
    <div className="container p-1">
      <div id="education" className="education ">
        <h3 className="pt-5 pb-3">EDUCATIONAL DETATLS </h3>
        <div className="educationDetails">
          <div className="eductionCard">
            <h5>2019-2023</h5>
            <h6>BTech in Electronics and Communication (9.15 CGPA)</h6>
            <h6>Maulana Abul Kalam Azad University of Technology (MAKAUT)</h6>
            <h6>Academy Of Technology</h6>
          </div>
          <div className="eductionCard">
            <h5>2018-2019</h5>
            <h6> Higher Secondary Eduation (77.3%)</h6>
            <h6>West Bengal Council of Higher Secondary Education (WBCHSE)</h6>
            <h6>Tarasundari Balika Vidya Bhaban</h6>
          </div>
          <div className="eductionCard">
            <h5>2016 - 2017</h5>
            <h6>Secondary Eduation (89.4%) </h6>
            <h6>West Bengal Board of Secondary Education (WBBSE)</h6>
            <h6>Tarasundari Balika Vidya Bhaban</h6>
          </div>
        </div>
      </div>
      <div id="skill" className="skill Contaier pt-5">
      <div  className="skills">
        <h2 className="p-2">MY SKILLS</h2>
        <div className="list-group list-group-flush">
          <li className="list-group-item text-light shadow rounded">Java</li>
          <li className="list-group-item text-light shadow rounded">
            HTML-CSS-JavaScript
          </li>
          <li className="list-group-item text-light shadow-lg rounded">
            ReactJs
          </li>
          <li className="list-group-item text-light shadow-lg rounded">
            NodeJs-ExpressJs
          </li>
          <li className="list-group-item text-light shadow-lg rounded">
            MySQL
          </li>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Education;
