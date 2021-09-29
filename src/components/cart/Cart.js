import classes from "./Cart.module.css";
import { useState, useEffect } from "react";
import CartItemsListed from "./CartItemsListed";
import { Link } from "react-router-dom";
import typography from "../../components/typography.module.css";
import linkStyle from "../../components/LinkStyles.module.css";

import {ReactComponent as CloseIcon} from "./assets/closeIcon.svg"

function Cart() {
  const getOrderSummary = localStorage.getItem("orderSummary");
  let orderSummary = "";

  if (getOrderSummary !== null) {
    orderSummary = JSON.parse(getOrderSummary);
  }

  const [change, setChange] = useState(0);
  const [total, setTotal] = useState(0);
  const [numOfItems, setNumOfItems] = useState(0);

  function detectChange() {
    setChange(change + 1);
  }

  useEffect(() => {
      setTotal(0);
      Object.keys(orderSummary).map((name) =>
        setTotal(
          (total) =>
            total + orderSummary[name].price * orderSummary[name].quantity
        )
      );
      setNumOfItems(Object.keys(orderSummary).length);
    }, [change]);

  function removeAll() {
     localStorage.clear();
    detectChange();
  }


  return (
    
      <div className={`${typography.alignCenter} ${classes.cartContainer}`}>
        <div className = {typography.alignRight}><CloseIcon/></div>

        <div className={classes.firstRow}>
          <h6>cart ({numOfItems})</h6>
          <button className = {`${typography.textContent} ${typography.black50} ${classes.removeBtn}`} onClick={removeAll}>Remove all</button>
        </div>

        
   
          <CartItemsListed
            orderSummary={orderSummary}
            change={detectChange}
            total={total}
            isSummary={false}
          />
       
       {total > 0 && (<div className= {`${linkStyle.linkWide} ${linkStyle.orange}`}>
<Link className={`${typography.link} ${typography.white100}`} to={{pathname:"/checkout/Checkout", state: {totalAmount: total}}}>Checkout</Link>       
</div> )}

      </div>
   
  );
}

export default Cart;
