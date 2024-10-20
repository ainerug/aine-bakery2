import React, { useState } from "react";
import Image from "../../../img/download.png";
import { useRef } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../../../Validation/SignupValidation";
import axios from "axios";
import { NotificationContainer, NotificationManager } from "react-notifications";

export default function Signup() {
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [newImage, setNewImage] = useState("");

  function readFile(e) {
    let files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      (function (file) {
        var reader = new FileReader();
        reader.onload = () => {
          console.log(reader.result);
          setNewImage(reader.result);
        };
        reader.readAsDataURL(file);
      })(files[i]);
    }
  }

  const initialValues = {
    userName: "",
    email: "",
    password: "",
  };

  const { values, errors, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: () => {
     addUser();
    },
  });

  const addUser = ()=>{

    const payload={

    userName: userNameRef.current.value,
    email: emailRef.current.value,
    password: passwordRef.current.value,
    image: newImage
    }

    axios.post("http://localhost:8080/signup/", payload).then((res)=>{
    console.log(res);
    NotificationManager.success("User has been signed up successfully!")

    }).catch((e)=>{
        console.log(e);
        NotificationManager.error("Something went wrong");
    })

    
  }


  return (
    <div>
      <NotificationContainer/>
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
          <form onSubmit={handleSubmit}>
            {newImage === "" ? (
              <>
                <div className="user-img-container">
                  <img src={Image} alt="profile-pic" />
                </div>
              </>
            ) : (
              <>
                {" "}
                <center>
                  <img src={newImage} className="new-image-container" />
                </center>
              </>
            )}
            <br />
            <br />
            <input type="file"  className="choose-file" onChange={readFile} />
            <br />
            <br />
            <p className="errors-indicators">{errors.userName}</p>
            <input
              type="text"
              name="userName"
              placeholder="Username: "
              ref={userNameRef}
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            <br />
            <p className="errors-indicators">{errors.email}</p>
            <input
              type="email"
              name="email"
              placeholder="Email: "
              ref={emailRef}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            <br />
            <p className="errors-indicators">{errors.password}</p>
            <input
              type="password"
              name="password"
              placeholder="Password: "
              ref={passwordRef}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
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
