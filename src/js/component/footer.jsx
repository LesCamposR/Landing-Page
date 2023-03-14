import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              type="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              type="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              type="button"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              type="button"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              type="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              type="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>
        <div className="text-center p-3">
          <span>© 2023 Copyright: </span>
          <a className="text-white" href="https://github.com/LesCamposR">
            LesCampos
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;