import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function AllCakes() {
  const [cake, setCake] = useState([]);
  const [option, setOption] = useState("birthday");
  const navigate = useNavigate();
  const accountType = localStorage.getItem("accountType");


  const getAllCakes = () => {
    axios
      .get("https://cake-shop-kwrq.onrender.com/cakes/category/" + option)
      .then((res) => {
        console.log(res.data);
        setCake(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getAllCakes();
  }, [option]);

  const addCake = () => {
    navigate("/addcakes");
  };

  const orderCake = (id) => {
    navigate("/ordercakes", { state: { id: id } });
  };

  return (
    <>
      <div className="tab-container">
        <div
          className="section-title position-relative text-center mx-auto mb-5 pb-3"
          style={{ maxWidth: "600px" }}
        >
          <h2 className="text-primary font-secondary">Cakes</h2>
          <h1 className="display-4 text-uppercase">Eplore Our Cakes</h1>
        </div>
        <ul className="nav nav-pills d-inline-flex justify-content-center options-toggler text-uppercase border-inner p-4 mb-5">
          <li className="nav-item">
            <span
              className={`nav-link cursor-pointer options-toggler ${
                option === "birthday" ? "active" : " "
              }`}
              onClick={() => setOption("birthday")}
            >
              Birthday
            </span>
          </li>
          <li className="nav-item">
            <span
              className={`nav-link cursor-pointer options-toggler ${
                option === "wedding" ? "active" : " "
              }`}
              onClick={() => setOption("wedding")}
            >
              Wedding
            </span>
          </li>
          <li className="nav-item">
            <span
              className={`nav-link cursor-pointer options-toggler ${
                option === "custom" ? "active" : " "
              }`}
              onClick={() => setOption("custom")}
            >
              Custom
            </span>
          </li>
        </ul>
      </div>
      <div className="cakes-container">
        {cake.map((item) => {
          return (
            <div className="cakes">
              <div className="cakes-white-line">
                <img src={item.image} alt="cake" />
                <h2>{item.cakeName}</h2>
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faEuroSign} className="icon-euro" />
                  {item.price}
                </p>
                <p>
                  {" "}
                  <FontAwesomeIcon
                    icon={faBirthdayCake}
                    className="icon-flavor"
                  />{" "}
                  {item.flavor}
                </p>
                <span>{item.category}</span>
                <div className="icon-container">
                  {accountType === "customer" ? (
                    <>
                      <button
                        className="order-button"
                        onClick={() => {
                          orderCake(item._id);
                        }}
                      >
                        Order
                      </button>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {accountType === "seller" ? (
        <>
          <div className="add-cake">
            <button
              onClick={addCake}
              className="btn-primary btn border-inner form-button addCake-button"
            >
              Add a Cake
            </button>
          </div>
        </>
      ) : null}
    </>
  );
}
