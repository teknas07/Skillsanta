import React from "react";
import "./App.css";
import Skill from "./components/Skill";
import Education from "./components/Education";
import Working from "./components/Working";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Certificate from "./components/Certificate";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-8 order-sm-1 order-2">
          <h2 className=" text-center">Resume</h2>
          <h5 className="font-weight-normal text-center text-secondary">
            Sanket Khandelwal
          </h5>
          <Skill />
          <Working />
          <Education />
          <Project/>
          <Certificate />
          <Contact />
        </div>
        <div className="col-sm-4 order-1">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;