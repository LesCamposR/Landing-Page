import React from "react";

const Jumbotron = () => {
  return (
    <>
      <section className="py-3 container mt-2">
        <div className="row py-lg-5 bg-light">
          <div className="col-12 mx-auto ms-3">
            <h1 className="display-1">A warm welcoming!</h1>
            <p className="lead me-2">
            What ideas are persistent in your heart and mind?
            Put on the new self, which is being renewed in knowledge in the image of our Creator,
            Therefore as God’s chose people holy, and dearly loved,
            clothe yourselves with compassion, kindness, humility, gentleness, and patience. 
            Bear one another and forgive.
            </p>
            <p className="lead">
              <a href="#" className="btn btn-primary my-2">
                Press!
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jumbotron;