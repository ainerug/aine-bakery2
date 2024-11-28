import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import { useState, useRef } from "react";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';



export default function EditCakes() {
  const location = useLocation();
  const id = location.state.id;
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get("https://cake-shop-kwrq.onrender.com/cakes/" + id)
      .then((res) => {
        console.log(res.data);
        cakeNameRef.current.value = res.data.cakeName;
        priceRef.current.value = res.data.price;
        flavorRef.current.value = res.data.flavor;
        descriptionRef.current.value = res.data.description;
        setImage(res.data.image);
        setSelectedOption({

          value: res.data.category,
          label: res.data.category
        })
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const editCakes = (e) => {
    e.preventDefault();
    const payload = {
      cakeName: cakeNameRef.current.value,
      price: priceRef.current.value,
      flavor: flavorRef.current.value,
      description: descriptionRef.current.value,
      image: image,
      category: selectedOption.value,
    };
    axios
      .patch("https://cake-shop-kwrq.onrender.com/cakes/" + id, payload)
      .then((res) => {
        console.log(res);
        NotificationManager.success("Cake has been edited!");
        navigate('/cakes')
      })
      .catch((e) => {
        console.log(e);
        NotificationManager.error("Something went wrong!");
      });
  };

  const goBack = () => {
    navigate("/cakes");
  };



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
          <div className="white-line-form">
          <NotificationContainer />
          <h2>Edit Cake: </h2>
          <form onSubmit={editCakes}>
            <input
              type="text"
              name="cakeName"
              placeholder="Cake Name..."
              ref={cakeNameRef}
            />
            <br />
            <br />

            <input
              type="number"
              name="price"
              placeholder="Price..."
              ref={priceRef}
            />
            <br />
            <br />

            <input
              type="text"
              name="flavor"
              placeholder="Flavor..."
              ref={flavorRef}
            />
            <br />
            <br />

            <textarea
              name="description"
              placeholder="Description..."
              ref={descriptionRef}
            />
            <br />
            <br />
            <h3>Choose a Category: </h3>

            <Select
              value={selectedOption}
              onChange={setSelectedOption}
              options={options}
              className="select-menu"
              styles={customStyles}
            />
            <br />
            <br />

            <input
              className="file"
              type="file"
              name="file"
              onChange={(e) => {
                readFile(e);
              }}
            />

            <br />
            <br />
            {image !== "" && <img src={image} alt="cake" width={300} />}
            <br />
            <br />
            <div className="buttons-div">
              <button
                className="btn-primary btn border-inner form-button"
                type="submit"
              >
                Edit Cake
              </button>
              <button
                className="btn-primary btn border-inner form-button"
                type="button"
                onClick={goBack}
              >
                Back
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}
