import React, { useState, useEffect } from "react";
import cardata from "../../TestData/cardata";
import Car from "./car";

const CarData = () => {
  const [cars, setCars] = useState(cardata);

  if (!cars) {
    return <div>Loading...</div>;
  }

  return (
    <div className="d-flex flex-wrap ">
      {cars.map(({ id, mainImage, make, model, year, fuelType, price }) => (
        <Car
          key={id}
          id={id}
          mainImage={mainImage}
          make={make}
          model={model}
          year={year}
          fuelType={fuelType}
          price={price}
        />
      ))}
    </div>
  );
};

export default CarData;
