import CartItemsListed from "../cart/CartItemsListed"
import classes from "./Summary.module.css"

function Summary(){

    const getOrderSummary = localStorage.getItem("orderSummary");
 
    const orderSummary = JSON.parse(getOrderSummary);

    const total = 1000

    function doesNothing (){

        

    }


return(


    <div className = {classes.container}>
        <h1 className={classes.title}>Summary</h1>

        <CartItemsListed orderSummary={orderSummary} total = {total} isSummary = {true} change = {doesNothing}/>


        <button className={classes.btn}>Continue and Pay</button>




    </div>



)



}

export default Summary