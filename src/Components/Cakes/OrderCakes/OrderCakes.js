import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { orderCakeSchema } from "../../../Validation/OrderCakeValidation";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';



export default function OrderCakes() {


  const initialValues = {

      userName: "",
      phoneNumber: null,
      email: "",
      address: "",

  }

  const {values, errors, handleSubmit, handleChange, handleBlur} = useFormik({
    initialValues: initialValues,
    validationSchema: orderCakeSchema,
    onSubmit : () =>{
      orderCake();

    }
  })
  const location = useLocation();
  const id = location.state.id;
  const navigate = useNavigate();
  const [cake, setCake] = useState({});
  const customerId = localStorage.getItem('userId');

  const userNameRef = useRef();
  const phoneNumberRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const cakeIdRef = useRef();

  const getData = () => {
    axios
      .get("http://localhost:8080/cakes/" + id)
      .then((res) => {
        console.log(res.data);
        setCake(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, [id]);

  const orderCake =() => {
    
    const payload = {
      userName: userNameRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      email: emailRef.current.value,
      address: addressRef.current.value,
      cakeId: cake._id,
      sellerId: cake.sellerId,
      customerId 
       
    };
    console.log(payload);
    axios
      .post("http://localhost:8080/orders/", payload)
      .then((res) => {
        console.log(res);
        NotificationManager.success("Your order has been placed successfully!");
        navigate("/payment", {state:{price: cake.price, orderId: res.data._id, cakeId: cake._id}});
      })
      .catch((e) => {
        console.log(e);
        NotificationManager.error("Something went wrong!");
        
      });
  };

  const goBack = () => {
    navigate("/cakes");
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <div
              className="section-title position-relative text-center mx-auto mb-5 pb-3"
              style={{ maxWidth: "600px" }}
            >
              <h2 className="text-primary font-secondary">Cakes</h2>
              <h1 className="display-4 text-uppercase">Order Cake</h1>
            </div>
            <div >
              <div className="orders-div">
                
                    <div className="returned-cake-div">
                      <NotificationContainer/>
                     
                      <div className="cake-white-line">
                      <h2>{cake.cakeName}</h2>
                      <img src={cake.image} alt="cake pic" />
                      <p>  € {cake.price}</p>
                      <p> Flavor: {cake.flavor}</p>
                      <p> Category: {cake.category}</p>
                      <p> {cake.description}</p>
                       
                    </div>
                    </div>
              

                <div className="order-cake-form">
                  
               
                
                  <div className="white-border-line">
                  
                  <h2>Order Cake: </h2>
                  <form onSubmit={handleSubmit}>
                    <p className="form-errors-p">{errors.userName}</p>
                    <input
                      type="text"
                      name="userName"
                      ref={userNameRef}
                      placeholder="Username: "
                      value ={values.cakeName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <br />
                    <br />
                    <p className="form-errors-p">{errors.phoneNumber}</p>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone number: "
                      ref={phoneNumberRef}
                      value = {values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <br />
                    <br />
                    <p className="form-errors-p">{errors.email}</p>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email: "
                      ref={emailRef}
                      value = {values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <br />
                    <br />
                    <p className="form-errors-p">{errors.address}</p>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address:"
                      ref={addressRef}
                      value = {values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                   
                    
                    <br />
                    <br />
                <div className="buttons-div">
                    <button type="submit">Checkout</button>
                    <br />
                    <br />
                    <button type="button" onClick={goBack}>
                      Back
                    </button>
                    </div>
                  </form>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
