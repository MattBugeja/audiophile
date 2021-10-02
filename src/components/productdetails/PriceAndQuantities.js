import data from "../../data.json";
import classes from "./PriceAndQuantities.module.css";
import { useState} from "react";
import typography from "../../components/typography.module.css";

function PriceAndQuantities(props) {
  const orderAmt = {};
 
  const [counter, setCounter] = useState(0);
  const [productID] = useState(props.productID);

  function moveUp() {
    setCounter(counter + 1);
  }

  function moveDown() {
    setCounter(counter - 1);
  }

  function updateOrderAmt() {

    if (counter > 0) { 

    let orderSummary = localStorage.getItem("orderSummary");
    if (orderSummary === null) {
      localStorage.setItem("orderSummary", JSON.stringify(orderAmt));
      orderSummary = localStorage.getItem("orderSummary");
    }
    orderSummary = JSON.parse(orderSummary);
    orderSummary[[data[productID].name]] = {
      id: { productID },
      productName: data[productID].name,
      image: data[productID].cartImage,
      cartName: data[productID].cartName,
      price: data[productID].price,
      quantity: counter,
    };
    localStorage.setItem("orderSummary", JSON.stringify(orderSummary));}
  }

  return (
<div className={classes.container}>
            <h6> &#8364; {data[productID].price.toLocaleString()}</h6>

            <div className={classes.orderRow}>
              <div className={classes.adjustQuantity}>
                {" "}
                <button
                  className={classes.signButton}
                  onClick={() => moveDown()}
                >
                  -
                </button>
                <textarea
                  className={classes.quantity}
                  readOnly
                  value={counter}
                ></textarea>
                <button onClick={() => moveUp()} className={classes.signButton}>
                  +
                </button>{" "}
              </div>

              <button
                className={`${typography.link} ${typography.white100} ${classes.addToCart}`}
                onClick={updateOrderAmt}
              >
                Add to Cart
              </button>
            </div>
          </div>
          
        )}


export default PriceAndQuantities;
