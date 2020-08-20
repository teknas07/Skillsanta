import React from "react";
import "../App.css";

export default function Education() {
  return (
    <div>
      <div className="row mt-4">
        <div className="col-4">
          <hr className="hrr"></hr>
        </div>
        <div className="col-4">
          <p className="text-center">EDUCATION</p>
        </div>
        <div className="col-4">
          <hr className="hrr"></hr>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">2017-2021</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            <strong>AMRITA UNIVERSITY, KOLLAM, India</strong>
            <br />
            B.Tech, Computer Science & Engineering
            <br />
            <span className="font-italic">GPA: 8</span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">2015-2017</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            <strong>P. G. COLLEGE, Chennai, India</strong>
            <br />
            Intermediate
            <br />
            <span className="font-italic">Percentage: 90.8</span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">2015</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            <strong>DELHI PUBLIC SCHOOL, CBE, India</strong>
            <br />
            High School <br />
            <span className="font-italic">CGPA: 8.4</span>
          </p>
        </div>
      </div>
    </div>
  );
}
