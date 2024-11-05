import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import './Payment.css';


const stripePromise = loadStripe("pk_test_51QGkGxEpMncj86FRVrMiTEq3p3JKkll6JRNhgWMQifr8A6C6Kya5Ayz6CjrkI3VeoOmtHlDB3HQgmCAD6pifVtNp00lzUJwGPr");
export default function PaymentMain() {


    const [clientSecret, setClientSecret] = useState("");
  const [dpmCheckerLink, setDpmCheckerLink] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:8080/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt", amount: 1000 }] }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        // [DEV] For demo purposes only
        setDpmCheckerLink(data.dpmCheckerLink);
      });
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  // Enable the skeleton loader UI for optimal loading.
  const loader = 'auto';


  return (
    <div className="payment-container">

{clientSecret && (
          <Elements options={{clientSecret, appearance, loader}} stripe={stripePromise}>
          
              <CheckoutForm dpmCheckerLink={dpmCheckerLink}/>

          
          </Elements>
        )}
      
    </div>
  )
}
