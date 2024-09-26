import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faEuroSign } from "@fortawesome/free-solid-svg-icons";

export default function AllCakes() {
  const [cake, setCake] = useState([]);
  const [option, setOption] = useState("birthday");

  const getAllCakes = () => {
    axios
      .get("http://localhost:8080/cakes/category/" + option)
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
            <span className={`nav-link cursor-pointer options-toggler ${option === "birthday"? "active": " "}`} onClick={() => setOption("birthday")}>Birthday</span>
          </li>
          <li className="nav-item">
            <span className={`nav-link cursor-pointer options-toggler ${option === "wedding"? "active": " "}`} onClick={() => setOption("wedding")}>Wedding</span>
          </li>
          <li className="nav-item">
            <span className={`nav-link cursor-pointer options-toggler ${option === "custom"? "active": " "}`} onClick={() => setOption("custom")}>Custom</span>
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
            </div>
            </div>
          );
        })}
      </div>
    </>
  )};