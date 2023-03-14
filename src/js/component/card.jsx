import React from "react";
import Honey from "../../img/Honey.png";

const Card = (props) => {
    return (
      <>
        <div className="col" key={props.key}>
          <div className="card shadow-sm">
            <img
              src={Honey}
              className="bd-placeholder-img card-img-top"
              width="100%"
              height="auto"
            />
  
            <div className="card-body text-center">
              <h5 className="card-title">{props.titulo}</h5>
              <p className="card-text">{props.descripcion}</p>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Card;
  