import React from "react";
export default function Card() {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="card border-info ml-2 mb-3 d-flex justify-content-center "
        style={{ maxWidth: 250 }}
      >
        <img
          className="card-img-top"
          src="../myAvatar.png"
          alt="Teknas"
        />

        <div className="card-body py-0 mt-2">
          <h6 className="card-text text-center">Sanket</h6>
          <p className="card-subtitle mb-2 text-muted text-center">
            Web Developer
          </p>
        </div>
        <div className="card-footer">
          <div className="col-12 d-flex justify-content-center">
            <a href="https://github.com/teknas07">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/teknas07/">
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
