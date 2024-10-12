import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);

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

  

  return <div className="general-orders-div">
 

  {orders.map((item, index)=>{

    return (
        
        <div className="my-orders-div">
            <div className="my-order">
                <div className="my-order-white-line">
            <h2>Order nr.{index + 1 }</h2>
            <div className="my-order-box">
            <div className="cakeInformation-div">
                <div className="cakeInformation-white-line">
            <h3>Cake Information</h3>
            <img src={item.image} alt="cake-img"/>
            <span>ID:{item.cakeId}</span>
            <p>Name: {item.cakeName}</p>
            <p>Category: {item.category}</p>
            <p>Flavor: {item.flavor}</p>
            <p>€ {item.price}</p>
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
            </div>
            </div>
        </div>
       
    )
  })}

  </div>;
}
