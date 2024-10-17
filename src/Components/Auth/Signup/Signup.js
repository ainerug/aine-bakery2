import React from "react";
import Image from "../../../img/download.png";

export default function Signup() {
  return (
    <div>
      <div
        className="section-title position-relative text-center mx-auto mb-5 pb-3"
        style={{ maxWidth: "600px" }}
      >
        <h2 className="text-primary font-secondary">Cakes</h2>
        <h1 className="display-4 text-uppercase">Sign Up</h1>
      </div>
      <div className="addCake-form">
        <div className="white-line-form">
          <h2>Sign Up: </h2>
          <form onSubmit={() => {}}>
            <div className="user-img-container">
            <img src={Image} alt="profile-pic"/>
            </div>
            <input type="file" />
            <br/>
            <br/>
            <input type="text" name="userName" placeholder="Username: " />
            <br />
            <br />
            <input type="email" name="email" placeholder="Email: " />
            <br />
            <br />
            <input type="password" name="password" placeholder="Password: " />
            <br />
            <br />

            <div className="buttons-div">
              <button className="btn-primary btn border-inner" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
