import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Car = ({ mainImage, make, model, id, year, fuelType, price }) => {
  return (
    <div className="row-md-4 ">
      <div className="card m-3 view overlay" style={{ width: "18.5rem" }}>
        <img
          className="card-img-top rounded-top"
          src={mainImage}
          alt="Card image cap"
        />
        <div className="card-body shadow rounded-bottom ">
          <h5 className="card-title">
            <strong>{make}</strong>
          </h5>
          <hr />
          {/* <p className="card-text">{model}</p> */}

          <p className="card-text">{fuelType}</p>
          <p className="card-text">{price}</p>
          <div className="d-flex flex-wrap flex-row justify-content-between">
            <Link to={`car/${id}`} className="btn btn-primary">
              Purchase{" "}
            </Link>
            <h6 className="card-text">{year}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
