import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faEuroSign } from "@fortawesome/free-solid-svg-icons";

export default function AllCakes() {
  const [cake, setCake] = useState([]);
  const [option, setOption] = useState("birthday");

  const getAllCakes = () => {
    axios
      .get("http://localhost:8080/cakes")
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
  }, []);

  return (
    <>
      <div className="tab-container">
        <ul class="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase border-inner p-4 mb-5">
          <li class="nav-item">
            <span class={`nav-link cursor-pointer text-white ${option === "birthday"? "active": null}`} onClick={() => setOption("birthday")}>Birthday</span>
          </li>
          <li class="nav-item">
            <span class={`nav-link cursor-pointer text-white ${option === "wedding"? "active": null}`} onClick={() => setOption("wedding")}>Wedding</span>
          </li>
          <li class="nav-item">
            <span class={`nav-link cursor-pointer text-white ${option === "custom"? "active": null}`} onClick={() => setOption("custom")}>Custom</span>
          </li>
        </ul>
      </div>
      <div className="cakes-container">
        {cake.map((item) => {
          return (
            <div className="cakes">
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
          );
        })}
      </div>
    </>
  );
}
