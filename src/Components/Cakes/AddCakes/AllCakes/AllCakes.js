import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBirthdayCake,faEuroSign} from '@fortawesome/free-solid-svg-icons';

export default function AllCakes() {


    const [cake, setCake] = useState([]);


    const getAllCakes = () =>{

        axios.get("http://localhost:8080/cakes").then((res)=>{
            console.log(res.data);
            setCake(res.data);


        }).catch((e)=>{
            console.log(e);
        })
    }

    useEffect(()=>{

        getAllCakes();
    },[])

  return (
    <div className='cakes-container'>
            
        {cake.map((item)=>{
                return(

                  
                        <div className='cakes'>
                        <img src={item.image} alt="cake"/>
                        <h2>{item.cakeName}</h2>
                        <p> <FontAwesomeIcon icon={faEuroSign} className='icon-euro'/>{item.price}</p>
                        <p> <FontAwesomeIcon icon={faBirthdayCake} className='icon-flavor' /> {item.flavor}</p>
                        <span>{item.category}</span>
                        </div>
                   
                )

        })}
        
      
    </div>
  )
}
