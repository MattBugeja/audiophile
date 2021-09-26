import classes from "./Cart.module.css";
import { useState, useEffect } from "react";
// import {useEffect} from "react"

function Cart() {
  const getOrderSummary = localStorage.getItem("orderSummary");
  const orderSummary = JSON.parse(getOrderSummary);

  const [counter, setCounter] = useState();

  const productName = Object.keys(orderSummary)

  console.log(orderSummary[productName[0]]["quantity"])

 

 const quantities =  productName.map((item) => (orderSummary[productName[productName.indexOf(item)]]["quantity"]))

//  console.log(test)

  return (
    <div className={classes.cartContainer}>
      <div className={classes.firstRow}>
        <h1 className={classes.cart}>
          cart ({Object.keys(orderSummary).length})
        </h1>
        <button>Remove all</button>
      </div>
      {Object.keys(orderSummary).map((item, index) => (

          


        <div key={index} className={classes.itemRow}>
          <div className={classes.imageContainer}>
            <img
              className={classes.itemImage}
              src={orderSummary[item]["image"]}
            />
          </div>
          <div className={classes.itemPrice}>
            <h1 className={classes.itemName}>
              {orderSummary[item]["cartName"]}
            </h1>
            <p>{orderSummary[item]["price"]}</p>
          </div>

     

          <div className={classes.counter}>{quantities[index]}</div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
