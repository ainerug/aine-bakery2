import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faEuroSign, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { NotificationContainer,NotificationManager } from "react-notifications";
import DeleteModal from "../../Modal/Modal";

export default function AllCakes() {
  const [cake, setCake] = useState([]);
  const [option, setOption] = useState("birthday");
  const navigate = useNavigate();
  const accountType = localStorage.getItem("accountType");

  const [update, forceUpdate] = useReducer((x) => x + 1, 0);

  const [id, setId] = useState("");

  const getAllCakes = () => {
    axios
      .get("http://localhost:8080/cakes/category/" + option)
      .then((res) => {
        console.log(res.data);
        setCake(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getAllCakes();
  }, [option, update]);

  const goToEdit = (id)=>{

    navigate("/editcakes", {state: {id:id}});
  }
  const deleteCake = () =>{
    axios.delete("http://localhost:8080/cakes/" + id).then((res)=>{
        console.log(res)
        NotificationManager.success("Cake has been deleted!");
        closeModal();
        forceUpdate();
    }).catch((e)=>{
        console.log(e);
        NotificationManager.error("Something went wrong!");
    })
  }
  
  const addCake=()=>{

    navigate("/addcakes")
  }


  const orderCake=(id)=>{

    navigate("/ordercakes" ,{state: { id: id } });
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
    <>
      <div className="tab-container">
        <NotificationContainer />
      <div
            className="section-title position-relative text-center mx-auto mb-5 pb-3"
            style={{ maxWidth: "600px" }}
          >
            <h2 className="text-primary font-secondary">Cakes</h2>
            <h1 className="display-4 text-uppercase">Eplore Our Cakes</h1>
          </div>
        <ul className="nav nav-pills d-inline-flex justify-content-center options-toggler text-uppercase border-inner p-4 mb-5">
          <li className="nav-item">
            <span className={`nav-link cursor-pointer options-toggler ${option === "birthday"? "active": " "}`} onClick={() => setOption("birthday")}>Birthday</span>
          </li>
          <li className="nav-item">
            <span className={`nav-link cursor-pointer options-toggler ${option === "wedding"? "active": " "}`} onClick={() => setOption("wedding")}>Wedding</span>
          </li>
          <li className="nav-item">
            <span className={`nav-link cursor-pointer options-toggler ${option === "custom"? "active": " "}`} onClick={() => setOption("custom")}>Custom</span>
          </li>
        </ul>
      </div>
      <div className="cakes-container">
        {cake.map((item) => {
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
                <button className="order-button" onClick={()=> {orderCake(item._id)}}>Order</button>
                <FontAwesomeIcon icon={faTrash} className="icon-cakes" onClick={() => {openModal(item._id)}}/>
              </div>

             
              
            
            </div>
            
            </div>
            
          );

        })}
        
      </div>
      {accountType === "seller"? <>
      
      <div className="add-cake"><button  onClick={addCake}className="btn-primary btn border-inner form-button addCake-button">Add a Cake</button></div></>: null
      
      }
      
      

      <DeleteModal modalIsOpen={modalIsOpen} deleteCake={deleteCake} closeModal={closeModal}/>
    </>
  )};