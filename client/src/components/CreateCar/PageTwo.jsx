import React, { useState } from "react";
import { features } from "../../TestData/car";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-router-dom";

const PageTwo = (props) => {
  const { onPrev, onSubmit, formData, setFormData } = props;
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const handleFeatureSelection = (feature) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  const handleNext = (e) => {
    e.preventDefault();
    onNext();
  };
  const handlePrev = (e) => {
    e.preventDefault();
    onPrev();
  };

  return (
    <div className="container section">
      <h4>Select Features</h4>
      <form>
        <div className="form-row">
          {features.map((feature) => (
            <div key={feature.id} className="form-check form-check-adjust mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value={feature.name}
                id={`checkbox-${feature.id}`}
                checked={selectedFeatures.includes(feature)}
                onChange={() => handleFeatureSelection(feature)}
              />
              <label
                className="form-check-label"
                htmlFor={`checkbox-${feature.id}`}>
                {feature.name}
              </label>
            </div>
          ))}
        </div>
        <hr />
        <h5
          className="text-left mb-0 font-small font-weight-bold"
          onClick={handlePrev}>
          <Link to={"/newcar/stepone"}>
            {" "}
            <ChevronLeftIcon /> previous
          </Link>
        </h5>
        <h5
          className="text-right mb-0 font-small font-weight-bold"
          onClick={handleNext}>
          <Link to={"/newcar/stepthree"}>
            Next <ChevronRightIcon />
          </Link>
        </h5>
      </form>
    </div>
  );
};

export default PageTwo;
