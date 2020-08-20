import React from "react";

export default function Project() {
  return (
    <div>
      <div className="row mt-4">
        <div className="col-4">
          <hr className="hrr"></hr>
        </div>
        <div className="col-4">
          <p className="text-center">PROJECTS</p>
        </div>
        <div className="col-4">
          <hr className="hrr"></hr>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">TO-DO APPLICATION</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            An application build in Node.js, Express.js and MongoDB. User can
            create, read, update and delete tasks.{" "}
          </p>
        </div>
      </div>


      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">RNEWS</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            It is a news app in Java. It fetches data from Newsapi.org. It shows
            news realted to technology.{" "}
          </p>
        </div>
      </div>


      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">PORTFOLIO</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            This is my personal portfolio site. Built using HTML, CSS,
            JavaScript and Bootstrap4.{" "}
            <a className="font-italic" href="https://ksanket.netlify.app/">
              Link
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
