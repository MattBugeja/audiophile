import Categories from "../Categories";
import classes from "./productDetails.module.css";
import data from "../data.json";
import { useState } from "react";

import DetailedImages from "./DetailedImages";
import Others from "./Others";
import { useLocation } from "react-router";
import { useContext } from "react";
import OrderContext from "../../OrderContext";





function ProductDetails(props) {

const [order,setOrder] = useContext(OrderContext)

const location= useLocation()

const {id} = location.state

const [counter, setCounter] = useState(0)

// const [orderAmount, setOrderAmount] = useState({ 
  
//  0 : 0,

// 1 : 0,

// 2: 0,

// 3:0,

// 4:0,

// 5:0,
// })

const [productID, setProductID] = useState(id);

function moveUp(){
  setCounter(counter + 1)

}

function updateOrderAmt(){


  setOrder((prevState,) => ({ ...prevState, [productID]  : counter }))

  // setOrderAmount(productID)

  console.log(order)


}





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

          <button className = {classes.signButton}>-</button><textarea className={classes.amount} readOnly value = {counter}></textarea><button onClick ={moveUp} className = {classes.signButton}>+</button> <button className={classes.addToCart} onClick ={updateOrderAmt}>Add to Cart</button>
          
          
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

      {data[productID].others.map((other,index) => (
        <Others key = {index} image={other.image.mobile} productName={other.name} id={other.id}/>
      ))}
    </div>
  );
}

export default ProductDetails;
