import React from "react";
import {
  features,
  carMakes,
  carSeries,
  bodyTypes,
  wheelTypes,
  fuelTypes,
  mileage,
  gearTypes,
  carAge,
} from "../../TestData/car";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const PageOne = (props) => {
  const { onNext, formData, setFormData } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    onNext();
  };
  return (
    <section className="section">
      <div className="container1">
        <form>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="carMakes">Select Car Make</label>
              <select
                className="form-control"
                id="carMakes "
                // name="cakemake"
                // value={formData.make}
                // onChange={handleChange}
              >
                {carMakes.map((carMake) => (
                  <option key={carMake.id} value={carMake.name}>
                    {carMake.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="carSeries">Select Car Series</label>
              <select
                className="form-control"
                id="carSeries"
                // name="carSeries"
                // value={formData.carSeries}
                // onChange={handleChange}
              >
                {carSeries.map((car) => (
                  <option key={car.id} value={car.name}>
                    {car.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="carMakes">Select year</label>
              <select className="form-control" id="carMakes">
                {Array.from(
                  { length: new Date().getFullYear() - 2000 + 1 },
                  (_, i) => 2000 + i
                ).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="carMakes">Select bodyType</label>
              <select className="form-control" id="carMakes">
                {bodyTypes.map((bodyType) => (
                  <option key={bodyType.id} value={bodyType.name}>
                    {bodyType.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="carMakes">Select cars fuel Type</label>
              <select className="form-control" id="carMakes">
                {fuelTypes.map((car) => (
                  <option key={car.id} value={car.name}>
                    {car.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="wheels ">Enter wheel Type</label>
              <select className="form-control" id="wheels ">
                {wheelTypes.map((car) => (
                  <option key={car.id} value={car.name}>
                    {car.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="gear">Select gear type</label>
                <select className="form-control" id="gear">
                  {gearTypes.map((bodyType) => (
                    <option key={bodyType.id} value={bodyType.name}>
                      {bodyType.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="carMakes">Select mileage</label>
                <select className="form-control" id="carMakes">
                  {mileage.map((car) => (
                    <option key={car.id} value={car.label}>
                      {car.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="color">Enter car color</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="eg : green"
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="price">Enter the selling Price</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ksh ..."
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="location">Enter location</label>
              <input
                type="text"
                className="form-control"
                placeholder="location"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="payment">Enter payment option</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="negotiation">Negotiable status</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="History">Enter history</label>
              <input
                type="text"
                className="form-control"
                placeholder="history"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="payment">car status </label>
              <select className="form-control" id="carMakes">
                {carAge.map((car) => (
                  <option key={car.id} value={car.name}>
                    {car.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <hr />
          <h5
            className="text-left mb-0 font-small font-weight-bold"
            onClick={handleNext}>
            <Link to={"/"}>Cancel</Link>
          </h5>
          <h5
            className="text-right mb-0 font-small font-weight-bold"
            onClick={handleNext}>
            <Link to={"/newcar/steptwo"}>
              Next <ChevronRightIcon />
            </Link>
          </h5>
        </form>
      </div>
    </section>
  );
};

export default PageOne;
