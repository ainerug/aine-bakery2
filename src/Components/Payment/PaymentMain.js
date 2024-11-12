import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./Payment.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51QGkGxEpMncj86FRVrMiTEq3p3JKkll6JRNhgWMQifr8A6C6Kya5Ayz6CjrkI3VeoOmtHlDB3HQgmCAD6pifVtNp00lzUJwGPr"
);
export default function PaymentMain() {
  const [clientSecret, setClientSecret] = useState("");
  const [dpmCheckerLink, setDpmCheckerLink] = useState("");
  const [order,setOrder] = useState("");

  const location = useLocation();

  const price= location.state.price;
  const orderId = location.state.orderId;
  const cakeId = location.state.cakeId;


  const getData = ()=>{

    axios.get("http://localhost:8080/cakes/" + cakeId).then((res)=>{
      console.log(res);
      setOrder(res.data);

    }).catch((e)=>{
      console.log(e);
    })
  }

  useEffect(()=>{

    getData();
  },[]);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:8080/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt", amount: price * 100 }] }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        // [DEV] For demo purposes only
        setDpmCheckerLink(data.dpmCheckerLink);
      });
  }, []);

  const appearance = {
    theme: "stripe",
  };
  // Enable the skeleton loader UI for optimal loading.
  const loader = "auto";

  return (
    <div className="payment-main">
    <div className="payment-container">
      <h2>Your Total Payment is: €{price} </h2>
      {clientSecret && (
        <Elements
          options={{ clientSecret, appearance, loader }}
          stripe={stripePromise}
        >
          <CheckoutForm orderId={orderId} />
        </Elements>
      )}
    </div>
    <div className="payment-details">
        <h2>Checkout Summary: </h2>
        <div className="checkout-inside">
        <img src={order.image} alt="cake-pic" width={200}/>
        <p> Cake: {order.cakeName}</p>
        <p> Price: ${order.price}</p>
        <p>Category: {order.category}</p>
        <p>Flavor: {order.flavor}</p>
        </div>
        

    </div>
    </div>
  );
}
