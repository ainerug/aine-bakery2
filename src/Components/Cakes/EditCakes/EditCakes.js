import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import { useState, useRef } from "react";
import { useFormik } from "formik";
import { cakeSchema } from "../../../Validation/AddCakeValidation";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function EditCakes() {
  const location = useLocation();
  const id = location.state.id;
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get("http://localhost:8080/cakes/" + id)
      .then((res) => {
        console.log(res.data);
        cakeNameRef.current.value = res.data.cakeName;
        priceRef.current.value = res.data.price;
        flavorRef.current.value = res.data.flavor;
        descriptionRef.current.value = res.data.description;
        setImage(res.data.image);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const editCakes = ()=>{

    const payload = {

        cakeName: cakeNameRef.current.value,
        price: priceRef.current.value,
        flavor: flavorRef.current.value,
        description: descriptionRef.current.value,
        image:image
    }; axios.patch("http://localhost:8080/cakes/" + id, payload).then((res)=>{
        console.log(res);
        NotificationManager.success("Cake has been edited!");
    }).catch((e)=>{
        console.log(e);
        NotificationManager.error("Something went wrong!");
    })
  }

  const goBack = () =>{
    navigate("/cakes");
  }

  const deleteCake = () =>{
    axios.delete("http://localhost:8080/cakes/" + id).then((res)=>{
        console.log(res)
        NotificationManager.success("Cake has been deleted!");
    }).catch((e)=>{
        console.log(e);
        NotificationManager.error("Something went wrong!");
    })
  }


  const [selectedOption, setSelectedOption] = useState(null);
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

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
    onSubmit: () => {},
  });



  return (
    <div>
      <div>
        <div
          className="section-title position-relative text-center mx-auto mb-5 pb-3"
          style={{ maxWidth: "600px" }}
        >
          <h2 className="text-primary font-secondary">Cakes</h2>
          <h1 className="display-4 text-uppercase">Edit Cake</h1>
        </div>
        <div className="addCake-form">
          <NotificationContainer />
          <h2>Edit Cake: </h2>
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
            <button className="btn-primary btn" type="submit">
              Add Cake
            </button>
            <button className="btn-primary btn" type="submit" onClick={editCakes}>
              Edit Cake
            </button>
            <button className="btn-primary btn" type="submit" onClick={deleteCake}>
              Delete
            </button>
            <button className="btn-primary btn" type="submit" onClick={goBack}>
              Back
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
