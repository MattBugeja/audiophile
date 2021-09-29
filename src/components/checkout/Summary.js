import CartItemsListed from "../cart/CartItemsListed"
import classes from "./Summary.module.css"
import { useLocation } from "react-router";
import { useState } from "react";
import Thanks from "./ThanksModal";
import OverlayMenu from "../overlay/OverlayMenu";

function Summary(){
    const [orderPlaced, setOrderPlaced] = useState(false)

    const getOrderSummary = localStorage.getItem("orderSummary");
 
    const orderSummary = JSON.parse(getOrderSummary);

    const location = useLocation()

    const {totalAmount} = location.state;
  
    function doesNothing (){

        

    }


    function orderHandler(){

        setOrderPlaced(true)
       



    }





return(


    <div className = {classes.container}>
        <h1 className={classes.title}>Summary</h1>

        <CartItemsListed orderSummary={orderSummary} total = {totalAmount} isSummary = {true} change = {doesNothing}/>


        <button onClick={orderHandler} className={classes.btn}>Continue and Pay </button>

        {orderPlaced && <OverlayMenu/>}

        {orderPlaced && <Thanks orderSummary={orderSummary} total = {totalAmount} isSummary = {true} isCheckedOut = {true} change = {doesNothing}/>
}

    </div>



)



}

export default Summary