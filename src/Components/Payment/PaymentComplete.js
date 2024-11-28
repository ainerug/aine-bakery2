import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import confirmation from '../../img/confirmation.png'

export default function PaymentComplete() {

    const params = useParams();
    const {orderId} = params;
    const navigate = useNavigate();

        const updatePayment = ()=>{

            axios.patch("https://cake-shop-kwrq.onrender.com/orders/"+ orderId, {isPaid:true}).then((res)=>{
                console.log(res);
                setTimeout(()=>{
                  navigate('/customerorders')
                },2000);
              
            }).catch((e)=>{
                console.log(e);

            })
        }

        useEffect(()=>{

            updatePayment();
        },[]);

  return (

    <div className='confirmation-part'>
      <img src={confirmation} alt="confirmation"/>
      <h1>Payment Successful</h1>
      <p>Redirecting to your orders...</p>
    </div>

  )
}
