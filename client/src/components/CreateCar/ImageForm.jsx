import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
const ImageForm = () => {
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const handleImageChange = (event) => {
    const newImages = [...event.target.files];
    setImages(newImages);

    // create preview URLs for each new image
    const newPreviewImages = newImages.map((image) =>
      URL.createObjectURL(image)
    );
    setPreviewImages(newPreviewImages);
  };

  const handleImageDelete = (index) => {
    // remove image and preview at the given index
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);

    const newPreviewImages = [...previewImages];
    newPreviewImages.splice(index, 1);
    setPreviewImages(newPreviewImages);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    onPrev();
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // submit form data, including images
    const formData = new FormData();
    images.forEach((image) => {
      formData.append("images[]", image);
    });
  };

  return (
    <div className="section">
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="formImageUpload">
          <Form.Control
            type="file"
            id="imageUpload"
            name="images"
            multiple
            accept="image/*"
            label="Upload Images"
            onChange={handleImageChange}
          />
          {previewImages.map((previewImage, index) => (
            <div
              key={index}
              className="d-inline-block mx-2 my-3 position-relative">
              <img
                src={previewImage}
                alt={`Preview of Image ${index + 1}`}
                height={200}
                width={200}
                className="img-thumbnail"
              />
              <Button
                variant="danger"
                size="sm"
                className="position-absolute top-0 end-0"
                onClick={() => handleImageDelete(index)}>
                <FaTrash />
              </Button>
            </div>
          ))}
        </Form.Group>
        <br />
        <hr />
        <h5
          className="text-left mb-0 font-small font-weight-bold"
          onClick={handlePrev}>
          <Link to={"/newcar/steptwo"}>
            <ChevronLeftIcon />
            Previous
          </Link>
        </h5>
        <h5
          className="text-right mb-0 font-small font-weight-bold"
          onClick={handleFormSubmit}></h5>
        <br />
        <Button className="btn-left " type="submit m-5">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ImageForm;
