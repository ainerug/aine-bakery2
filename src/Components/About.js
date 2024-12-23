import React from "react";
import AboutImage from "../img/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faHeartbeat } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div>
      <div className="container-fluid pt-5">
        <div className="container">
          <div
            className="section-title position-relative text-center mx-auto mb-5 pb-3"
            style={{ maxWidth: "600px" }}
          >
            <h2 className="text-primary font-secondary">About Us</h2>
            <h1 className="display-4 text-uppercase">Welcome To CakeZone</h1>
          </div>
          <div className="row gx-5">
            <div
              className="col-lg-5 mb-5 mb-lg-0"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src={AboutImage}
                  alt="aboutpicture"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 pb-5">
              <h4 className="mb-4">
                Our Specialty Cakes for Every Celebration
              </h4>
              <p className="mb-5">
                At our cake shop, we pride ourselves on creating the perfect
                cakes for every occasion. From delicious birthday cakes to
                elegant wedding cakes, we offer custom-made cakes tailored to
                your tastes. Whether it's a special milestone or just a treat
                for the day, our cakes are made with love and attention to
                detail.
              </p>
              <div className="row g-5">
                <div className="col-sm-6">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4"
                    style={{ width: "90px", height: "90px" }}
                  >
                    <FontAwesomeIcon
                      icon={faHeartbeat}
                      className="fa fa-heartbeat fa-2x text-white"
                    />
                  </div>
                  <h4 className="text-uppercase">100% Healthy</h4>
                  <p className="mb-0">
                    We create fresh, custom cakes for any occasion, using only
                    the finest ingredients. Perfect for birthdays, weddings, and
                    special events.
                  </p>
                </div>
                <div className="col-sm-6">
                  <div
                    class="d-flex align-items-center justify-content-center bg-primary border-inner mb-4"
                    style={{ width: "90px", height: "90px" }}
                  >
                    <FontAwesomeIcon
                      icon={faAward}
                      className="fa fa-award fa-2x text-white"
                    />
                  </div>
                  <h4 className="text-uppercase">Award Winning</h4>
                  <p className="mb-0">
                    Our cakes are crafted with excellence, recognized for their
                    quality and taste. Perfect for every celebration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
