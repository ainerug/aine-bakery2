import { useFormik } from 'formik';
import React from 'react'
import axios from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from '../../../Validation/LoginValidation';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default function Login() {

    
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const { values, errors, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: () => {
        addUser();
    },
  });

  const addUser = () => {
    const payload = {
     
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    axios
      .post("http://localhost:8080/login/", payload)
      .then((res) => {
        console.log(res);
        NotificationManager.success("Login successful!");
        localStorage.setItem("userName",res.data.userName);
        localStorage.setItem("email",res.data.email);
        localStorage.setItem("userId",res.data._id);
        navigate('/');
        
      })
      .catch((e) => {
        console.log(e);
        NotificationManager.error("Something went wrong");
      });
  };

  return (
   
      
      <div>
      <NotificationContainer />
      <div
        className="section-title position-relative text-center mx-auto mb-5 pb-3"
        style={{ maxWidth: "600px" }}
      >
        <h2 className="text-primary font-secondary">Cakes</h2>
        <h1 className="display-4 text-uppercase">Login</h1>
      </div>
      <div className="addCake-form">
        <div className="white-line-form">
          <h2>Login: </h2>
          <form onSubmit={handleSubmit}>
       
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
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
 
  )
}
