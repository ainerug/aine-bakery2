import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faEuroSign, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { NotificationContainer,NotificationManager } from "react-notifications";
import DeleteModal from "../../Modal/Modal";
import { useReducer } from 'react';


export default function MyCakes() {


    const sellerId = localStorage.getItem("userId");
    const [cakes, setCakes] = useState([]);
    const [update, forceUpdate] = useReducer((x) => x + 1, 0);
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const getData = ()=>{

        axios.get("https://cake-shop-kwrq.onrender.com/mycakes/" + sellerId).then((res)=>{
        console.log(res);
        setCakes(res.data);

        }).catch((e)=>{

            console.log(e);
        })
    }

    useEffect(()=>{

        getData();
    },[])

    const goToEdit = (id)=>{

        navigate("/editcakes", {state: {id:id}});
      }
      const deleteCake = () =>{
        axios.delete("https://cake-shop-kwrq.onrender.com/cakes/" + id).then((res)=>{
            console.log(res)
            NotificationManager.success("Cake has been deleted!");
            closeModal();
            forceUpdate();
        }).catch((e)=>{
            console.log(e);
            NotificationManager.error("Something went wrong!");
        })
      }

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal(id) {
      setId(id);
      setIsOpen(true);
    }
  
  
    function closeModal() {
      setIsOpen(false);
    }

  return (
    <div>
      <div
            className="section-title position-relative text-center mx-auto mb-5 pb-3"
            style={{ maxWidth: "600px" }}
          >
            <h2 className="text-primary font-secondary">Cakes</h2>
            <h1 className="display-4 text-uppercase">My Cakes</h1>
          </div>

      <div className="cakes-container">
      <NotificationContainer/>
     

      {cakes.map((item) => {
          return (
            <div className="cakes">
                
              <div className="cakes-white-line">
              <img src={item.image} alt="cake" />
              <h2>{item.cakeName}</h2>
              <p>
                {" "}
                <FontAwesomeIcon icon={faEuroSign} className="icon-euro" />
                {item.price}
              </p>
              <p>
                {" "}
                <FontAwesomeIcon
                  icon={faBirthdayCake}
                  className="icon-flavor"
                />{" "}
                {item.flavor}
              </p>
              <span>{item.category}</span>
              <div className="icon-container">
                <FontAwesomeIcon icon={faEdit} className="icon-cakes" onClick={()=>{goToEdit(item._id)}}/>
                {/* <FontAwesomeIcon icon={faTrash} className="icon-cakes" onClick={()=>{deleteCake(item._id)}}/> */}
                <FontAwesomeIcon icon={faTrash} className="icon-cakes" onClick={() => {openModal(item._id)}}/>
              </div>

             
              
            
            </div>
            
            </div>
            
          );

        })}



      </div>
      <DeleteModal modalIsOpen={modalIsOpen} deleteCake={deleteCake} closeModal={closeModal}/>
        </div>


)}
