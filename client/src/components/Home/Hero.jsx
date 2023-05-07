import React from "react";
import image from "../../assets/myhero.png";

const Hero = () => {
  return (
    <div style={{ position: "relative" }}>
      <img
        src={image}
        alt="Hero background"
        style={{ width: "100%", height: "88.5vh" }}
      />
      <div
        className="banner"
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0,0,0,0.8)",
          color: "white",
          padding: "1rem",
          width: "80%",
          textAlign: "center",
        }}>
        <h1>Welcome to Our Car Dealership</h1>
        <p>Find your dream car today!</p>
        <form
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            minWidth: "300px",
            justifyContent: "center",
          }}>
          <div className="form-group" style={{ marginRight: "1rem" }}>
            <label htmlFor="make">Make:</label>
            <select className="form-control" id="make">
              <option>BMW</option>
              <option>Mercedes-Benz</option>
              <option>Audi</option>
              <option>Toyota</option>
              <option>Honda</option>
            </select>
          </div>
          <div className="form-group" style={{ marginRight: "1rem" }}>
            <label htmlFor="model">Model:</label>
            <select className="form-control" id="model">
              <option>X5</option>
              <option>GLC</option>
              <option>A4</option>
              <option>Corolla</option>
              <option>Accord</option>
            </select>
          </div>
          <div className="form-group" style={{ marginRight: "1rem" }}>
            <label htmlFor="priceRange">Price Range:</label>
            <select className="form-control" id="priceRange">
              <option>$10,000 - $20,000</option>
              <option>$20,000 - $30,000</option>
              <option>$30,000 - $40,000</option>
              <option>$40,000 - $50,000</option>
              <option>Above $50,000</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
