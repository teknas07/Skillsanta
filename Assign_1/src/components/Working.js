import React from "react";

export default function Working() {
  return (
    <div>
      <div className="row mt-4">
        <div className="col-3">
          <hr className="hrr"></hr>
        </div>
        <div className="col-6">
          <p className="text-center">WORK EXPERIENCE</p>
        </div>
        <div className="col-3">
          <hr className="hrr"></hr>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">May 2020 - Present</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            <strong>Slack Upskilling Community Manager</strong>
            <br />
            SKILLSANTA
            <br />
            <span className="font-italic">
              Manage Slack channel. Solve doubts of students and Posts quizzes
              and assignment.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
