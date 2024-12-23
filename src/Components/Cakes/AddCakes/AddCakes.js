import React, { useRef } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { cakeSchema } from "../../../../src/Validation/AddCakeValidation";
export default function AddCakes() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const sellerId = localStorage.getItem("userId")

  const cakeNameRef = useRef();
  const priceRef = useRef();
  const flavorRef = useRef();
  const descriptionRef = useRef();

  const options = [
    { value: "birthday", label: "Birthday" },
    { value: "wedding", label: "Wedding" },
    { value: "custom", label: "Custom" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#FFF",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#FFF",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#F0AF6A" : "#FFF",
      "&:hover": {
        backgroundColor: "#F0AF6A",
      },
    }),
  };

  function readFile(e) {
    let files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      (function (file) {
        var reader = new FileReader();
        reader.onload = () => {
          console.log(reader.result);
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      })(files[i]);
    }
  }

  const uploadCake = () => {
    if (selectedOption !== null) {
      const payload = {
        cakeName: cakeNameRef.current.value,
        price: priceRef.current.value,
        image: image,
        description: descriptionRef.current.value,
        flavor: flavorRef.current.value,
        category: selectedOption.value,
        sellerId
      };
      axios
        .post("https://cake-shop-kwrq.onrender.com/cakes", payload)
        .then((res) => {
          console.log(res);
          NotificationManager.success("Cake has been uploaded successfully!");
          navigate('/cakes')
        })
        .catch((e) => {
          console.log(e);
          NotificationManager.error("Something went wrong!");
        });
    } else {
      setError("Please select a category!");
    }
  };

  const initialValues = {
    cakeName: "",
    price: null,
    flavor: "",
    description: "",
    file: "",
  };

  const { values, errors, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: initialValues,
    validationSchema: cakeSchema,
    onSubmit: () => {
      uploadCake();
    },
  });

  const goBack = () => {
    navigate("/cakes");
  };

  return (
    <div>
      <div
        className="section-title position-relative text-center mx-auto mb-5 pb-3"
        style={{ maxWidth: "600px" }}
      >
        <h2 className="text-primary font-secondary">Cakes</h2>
        <h1 className="display-4 text-uppercase">Add a Cake</h1>
      </div>
      <div className="addCake-form">
        <div className="white-line-form">
        <NotificationContainer />
        <h2>Add a Cake: </h2>
        <form onSubmit={handleSubmit}>
          <p className="errors">{errors.cakeName}</p>
          <input
            type="text"
            name="cakeName"
            placeholder="Cake Name..."
            value={values.cakeName}
            onChange={handleChange}
            onBlur={handleBlur}
            ref={cakeNameRef}
          />
          <br />
          <br />
          <p className="errors">{errors.price}</p>
          <input
            type="number"
            name="price"
            placeholder="Price..."
            ref={priceRef}
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <br />
          <br />
          <p className="errors">{errors.flavor}</p>
          <input
            type="text"
            name="flavor"
            placeholder="Flavor..."
            ref={flavorRef}
            value={values.flavor}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <br />
          <br />
          <p className="errors">{errors.description}</p>
          <textarea
            name="description"
            placeholder="Description..."
            ref={descriptionRef}
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <br />
          <br />
          <h3>Choose a Category: </h3>
          <p className="errors">{error}</p>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            className="select-menu"
            styles={customStyles}
          />
          <br />
          <br />
          <p className="errors">{errors.file}</p>
          <input
            className="file"
            type="file"
            name="file"
            onChange={(e) => {
              readFile(e);
              handleChange(e);
            }}
            value={values.file}
            onBlur={handleBlur}
          />

          <br />
          <br />
          {image !== "" && <img src={image} alt="cake" width={300} />}
          <br />
          <br />
          <div className="buttons-div">
            <button className="btn-primary btn border-inner" type="submit">
              Add a Cake
            </button>
            <button
              onClick={goBack}
              className="btn-primary btn border-inner"
              type="submit"
            >
              Back
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}
