import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import RejectModal from "../../RejectModal/Modal/RejectModal";

export default function CustomerOrders() {
  const [orders, setOrders] = useState([]);
  const [id, setId] = useState("");
  const [option, setOption] = useState("pending");
  const [update, forceUpdate] = useReducer((x) => x + 1, 0);
  const customerId = localStorage.getItem("userId")

  const getData = () => {
    axios
      .get("https://cake-shop-kwrq.onrender.com/getcustomerorders/" + option + "/" + customerId)
      .then(async (res) => {
        console.log(res.data);

        const cakeDataPromise = res.data.map(async (item) => {
          const response = await axios.get(
            "https://cake-shop-kwrq.onrender.com/cakes/" + item.cakeId
          );
          return response.data;
        });

        console.log(cakeDataPromise);

        const cakeData = await Promise.all(cakeDataPromise);
        const ordersData = res.data;
        console.log(cakeData);

        const allData = [];
        for (let i = 0; i < cakeData.length; i++) {
          allData.push({
            id: ordersData[i]._id,
            address: ordersData[i].address,
            cakeId: ordersData[i].cakeId,
            email: ordersData[i].email,
            phoneNumber: ordersData[i].phoneNumber,
            userName: ordersData[i].userName,
            cakeName: cakeData[i].cakeName,
            category: cakeData[i].category,
            flavor: cakeData[i].flavor,
            image: cakeData[i].image,
            price: cakeData[i].price,
            isPaid: ordersData[i].isPaid
          });
        }

        console.log(allData);
        setOrders(allData);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, [option, update]);

  const updateStatus = (orderStatus, id) => {
    const payload = {
      orderStatus,
    };

    axios
      .patch("https://cake-shop-kwrq.onrender.com/orders/" + id, payload)
      .then((res) => {
        console.log(res);
        NotificationManager.success(
          "Order status has been updated successfully!"
        );
        closeModal();
        forceUpdate();
      })
      .catch((e) => {
        console.log(e);
        NotificationManager.error("Something went wrong");
      });
  };

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
            <h2 className="text-primary font-secondary">Orders</h2>
            <h1 className="display-4 text-uppercase">My Orders</h1>
          </div>
          <div className="orders-toggler">
        <ul className="nav nav-pills d-inline-flex justify-content-center options-toggler text-uppercase border-inner p-4 mb-5">
          <li className="nav-item">
            <span
              className={`nav-link cursor-pointer options-toggler ${
                option === "pending" ? "active" : " "
              }`}
              onClick={() => setOption("pending")}
            >
              Order Requests
            </span>
          </li>
          <li className="nav-item">
            <span
              className={`nav-link cursor-pointer options-toggler ${
                option === "ongoing" ? "active" : " "
              }`}
              onClick={() => setOption("ongoing")}
            >
              Ongoing
            </span>
          </li>
          <li className="nav-item">
            <span
              className={`nav-link cursor-pointer options-toggler ${
                option === "completed" ? "active" : " "
              }`}
              onClick={() => setOption("completed")}
            >
              Completed
            </span>
          </li>
          <li className="nav-item">
            <span
              className={`nav-link cursor-pointer options-toggler ${
                option === "canceled" ? "active" : " "
              }`}
              onClick={() => setOption("canceled")}
            >
              Canceled
            </span>
          </li>
        </ul>
      </div>
    <div className="orders-container">
      {orders.map((item, index) => {
        return (
          <>{item.isPaid && (
            <div>
           
            <NotificationContainer />
            
            <div className="order-info-div">
            <div className="second-orders-div">
            <div className="order-number-id">
            <h2>Order nr.{index + 1}</h2>
            <span>ID:{item.cakeId}</span>
            </div>
              
            <div className="second-orders-div">
            <div className="order-user-box">
            <div className="cake-card">
            <h3>{item.cakeName}</h3>
            <div className="image-description-box">
            <img src={item.image} alt="cake-img" />
            <div>
            <p className="description-list">Category: {item.category}</p>
            <p className="description-list">Flavor: {item.flavor}</p>
            <p className="description-list">€ {item.price}</p>
            </div>
            </div>
            </div>
            </div>
            

            <div className="userInformation-div">
              <h3>Your Information</h3>
              <div className="userInformation-white-line">
                <p>Username: {item.userName}</p>
                <p>Email: {item.email}</p>
                <p>Address: {item.address}</p>
                <p>Phone number: {item.phoneNumber}</p>
              </div>
            </div>
            </div>

            {option === "pending" && (
                    <div>
                    
                      <button
                        className="myorders-button cancel-button"
                        onClick={() => {
                          openModal(item.id)
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  )}

            {option === "ongoing" && (
                    <div>
                    
                      <button
                        className="myorders-button cancel-button"
                        onClick={() => {
                          openModal(item.id)
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  )}
           
            </div>
            
            </div>
            
          </div>
          )}</>
         
          
       
        );
      })}
    </div>
    <RejectModal modalIsOpen={modalIsOpen} updateStatus={()=> updateStatus("canceled", id)} closeModal={closeModal}/>
    </div>
  );
}
