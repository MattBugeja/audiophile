import CartItem from "./CartItem";
import classes from "./CartItemsListed.module.css";
import typography from "../../components/typography.module.css";
import linkStyle from "../../components/LinkStyles.module.css";
import { useState } from "react";

function CartItemsListed(props) {
  const [isCheckedOut, setIsCheckedOut] = useState(props.isCheckedOut);

  const orderSummary = props.orderSummary;

  return (
    <div>
      {Object.keys(orderSummary).map((item, index) => (
        <div key={index}>
          <CartItem
            orderSummary={orderSummary[item]}
            change={props.change}
            isSummary={props.isSummary}
          />
        </div>
      ))}

      {!isCheckedOut ? (
        <div className={classes.orderTotal}>
          <p
            className={`${classes.total} ${typography.textContent} ${typography.black50}`}
          >
            total
          </p>

          <h6> &#8364; {props.total.toLocaleString()}</h6>
        </div>
      ) : (
        <div className={classes.checkedOutTotal}>
          <p
            className={`${classes.total} ${typography.textContent} ${typography.white50}`}
          >
            total
          </p>

          <h6 className={typography.white100}> &#8364; {props.total.toLocaleString()}</h6>
        </div>
      )}
    </div>
  );
}

export default CartItemsListed;
