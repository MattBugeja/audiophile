import Categories from "../Categories";
import classes from "./productDetails.module.css";
import data from "./../../../data.json";
import { useState } from "react";

import DetailedImages from "./DetailedImages";
import Others from "./Others";
import { useLocation } from "react-router";


function ProductDetails(props) {

  const orderAmt = {

    // "YX1 Wireless Earphones" :{id:0, quantity: 0},
    // "XX59 Headphones" : {id:1, quantity: 0},
    // "XX99 Mark I Headphones": {id:2, quantity: 0},
    // "XX99 Mark II Headphones" : {id:3, quantity: 0},
    // "ZX7 Speaker" : {id:4, quantity: 0},
    // "ZX9 Speaker" : {id:5, quantity: 0},
  }


  const location = useLocation();

  const { id } = location.state;

  const [counter, setCounter] = useState(0);

  const [productID, setProductID] = useState(id);

  function moveUp() {
    setCounter(counter + 1);
  }

  function moveDown() {

   return (counter >= 1 ? setCounter(counter - 1) : null);

  }

  function updateOrderAmt() {

// localStorage.clear()

    
    let orderSummary = localStorage.getItem("orderSummary")

    if (orderSummary === null) 
    {localStorage.setItem("orderSummary", JSON.stringify(orderAmt));
    orderSummary = localStorage.getItem("orderSummary")}


    orderSummary = JSON.parse(orderSummary)

   orderSummary[[data[productID].name]] = { id: productID, image:data[productID].cartImage, cartName: data[productID].cartName,price : data[productID].price, quantity : counter }

    localStorage.setItem("orderSummary", JSON.stringify(orderSummary))

    // console.log(localStorage.getItem("orderSummary")) 
  }

  // localStorage.clear()

  return (
    <div>
      <Categories
        isNewProduct={data[productID].new}
        categoryName={data[productID].category}
        image={data[productID].categoryImage.mobile}
        productName={data[productID].name}
        text={data[productID].description}
      />
      <div className={classes.productDetailsSection}>
        <p>$ {data[productID].price}</p>

        <div className={classes.orderRow}>
          <button className={classes.signButton} onClick={moveDown}>-</button>
          <textarea
            className={classes.amount}
            readOnly
            value={counter}
          ></textarea>
          <button onClick={moveUp} className={classes.signButton}>
            +
          </button>{" "}
          <button className={classes.addToCart} onClick={updateOrderAmt}>
            Add to Cart
          </button>
        </div>

        <div className={classes.features}>
          <h1 className={classes.title}>features</h1>

          <p className={classes.text}>{data[productID].features}</p>

          <div className={classes.inTheBox}>
            <h1 className={classes.title}>in the box</h1>

            <ul>
              {data[productID].includes.map((included, index) => (
                <li className={classes.whatsIncluded} key={index}>
                  {" "}
                  <span className={classes.quantity}>
                    {" "}
                    {included.quantity}x
                  </span>
                  {included.item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <DetailedImages
          image1={data[productID].gallery.first.mobile}
          image2={data[productID].gallery.second.mobile}
          image3={data[productID].gallery.third.mobile}
        />
      </div>

      <h1 className={classes.title2}>You may also like</h1>

      {data[productID].others.map((other, index) => (
        <Others
          key={index}
          image={other.image.mobile}
          productName={other.name}
          id={other.id}
        />
      ))}
    </div>
  );
}

export default ProductDetails;
