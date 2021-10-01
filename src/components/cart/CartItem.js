import classes from "./CartItem.module.css";
import { useState, useEffect } from "react";

import typography from "../../components/typography.module.css";
import linkStyle from "../../components/LinkStyles.module.css";

function CartItem(props) {
  const orderSummary = props.orderSummary;
  const [counter, setCounter] = useState(orderSummary.quantity);
  const [isSummary] = useState(props.isSummary)

  function updateOrderAmt() {
    let storedOrderSummary = localStorage.getItem("orderSummary");

    storedOrderSummary = JSON.parse(storedOrderSummary);

    storedOrderSummary[orderSummary["productName"]]["quantity"] = counter;

    localStorage.setItem("orderSummary", JSON.stringify(storedOrderSummary));
  }

  function moveUp() {
    setCounter(counter + 1);
  }

  function moveDown() {
    return counter >= 1 ? setCounter(counter - 1) : null;
  }

  useEffect(() => {
    props.change();
    updateOrderAmt();

  }, [counter]);

  return (
    <div className={classes.itemRow}>
      <div className={classes.imageAndPrice}>
      <div className={classes.imageContainer}>
        <img className={classes.itemImage} src={orderSummary["image"]} alt={""} />
      </div>
      <div className={classes.itemPrice}>
        <h1 className={`${typography.textContent} ${typography.alignLeft} ${classes.itemName}`}>{orderSummary["cartName"]}</h1>
        <p className={`${typography.overline} ${typography.black50} ${typography.alignLeft} ${classes.itemPrice}`}>&#8364; {orderSummary["price"]}</p>
      </div>
      </div>

      {!isSummary && 
      <div className={classes.changeAmount}>
      <button className={classes.signButton} onClick={moveDown}>
        -
      </button>
      <textarea className={classes.quantity} readOnly value={counter}></textarea>
      <button onClick={moveUp} className={classes.signButton}>
        +
      </button>{" "}
      </div>}

      {isSummary && <textarea className={`${typography.textContent} ${typography.alignLeft} ${typography.black50} ${classes.summaryQuantity}`} readOnly value= {`x${counter}`}></textarea>}



    </div>
  );
}

export default CartItem;
