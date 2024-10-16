import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import { useNavigate } from "react-router-dom";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get("http://localhost:8080/orders")
      .then(async (res) => {
        console.log(res.data);

        const cakeDataPromise = res.data.map(async (item) => {
          const response = await axios.get(
            "http://localhost:8080/cakes/" + item.cakeId
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
  }, []);

  const deleteOrder = (id) => {
    axios
      .delete("http://localhost:8080/orders/" + id)
      .then((res) => {
        console.log(res);
        NotificationManager.success("Order has been deleted!");
        navigate("/myorders");
      })
      .catch((e) => {
        console.log(e);
        NotificationManager.error("Something went wrong!");
      });
  };

  return (
    <div className="orders-container">
      {orders.map((item, index) => {
        return (
          <div>
           
            <NotificationContainer />
            
            <div className="order-info-div">
            <div className="second-orders-div">
              
            <div className="order-number-id">
            <h2>Order nr.{index + 1}</h2>
            <span>ID:{item.cakeId}</span>
            </div>
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
            

            <div className="userInformation-div">
              <h3>User Information</h3>
              <div className="userInformation-white-line">
                <p>Username: {item.userName}</p>
                <p>Email: {item.email}</p>
                <p>Address: {item.address}</p>
                <p>Phone number: {item.phoneNumber}</p>
              </div>
            </div>
            </div>
            <center>
            <button className="myorders-button" onClick={() => deleteOrder(item.id)}>Delete Order</button>
            </center>
            </div>
            
            </div>
            
          </div>
          
       
        );
      })}
    </div>
  );
}