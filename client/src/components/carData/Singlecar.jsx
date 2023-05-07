import React, { useState, useEffect } from "react";
import carData from "../../TestData/cardata";
import { useParams } from "react-router-dom";
import { Carousel, Container, Row, Col } from "react-bootstrap";
// import "./Singlecar.css"; // import the CSS file for additional styling

const Singlecar = () => {
  const { id } = useParams();
  const [cars, setCars] = useState(carData);
  const [car, setCar] = useState(null);
  const [carImages, setCarImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const selectedCar = cars.filter((car) => car.id === parseInt(id))[0];
    setCar(selectedCar);
    setCarImages(selectedCar.images);
  }, [id, cars]);

  useEffect(() => {
    const lastIndex = carImages.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, carImages]);

  return (
    <div className="section">
      <Container>
        <Row>
          <Col lg={6} className="bg-light shadow-lg">
            <Carousel activeIndex={index} onSelect={setIndex}>
              {carImages.map((item) => (
                <Carousel.Item key={item.id}>
                  <img
                    className="d-block w-100 "
                    src={item.img}
                    alt={`Slide ${item.id}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col lg={6} className="border">
            <div className="car-info">
              <h2>{car?.make}</h2>
              <h3>{car?.model}</h3>
              <p className="price">{car?.price}</p>
              <p>
                <strong>Year:</strong> {car?.year}
              </p>
              <p>
                <strong>Mileage:</strong> {car?.mileage}
              </p>
              <p>
                <strong>Fuel Type:</strong> {car?.fuelType}
              </p>
              <p>
                <strong>Transmission:</strong> {car?.transmission}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Singlecar;
