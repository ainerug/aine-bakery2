import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export default function PaymentComplete() {

    const params = useParams();
    const {orderId} = params;
    const navigate = useNavigate();

        const updatePayment = ()=>{

            axios.patch("http://localhost:8080/orders/"+ orderId, {isPaid:true}).then((res)=>{
                console.log(res);
                navigate("/customerorders")
            }).catch((e)=>{
                console.log(e);
            })
        }

        useEffect(()=>{

            updatePayment();
        },[]);

  return (
    <div>
      <h1>Payment Successful</h1>
      <p>{orderId}</p>
    </div>
  )
}
