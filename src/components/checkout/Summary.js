import CartItemsListed from "../cart/CartItemsListed";
import classes from "./Summary.module.css";
import { useLocation } from "react-router";

function Summary(props) {
  const getOrderSummary = localStorage.getItem("orderSummary");

  const orderSummary = JSON.parse(getOrderSummary);

  const location = useLocation();

  const { totalAmount } = location.state;

  function doesNothing() {}

  return (
    <div className={classes.container}>
      <h6 className={classes.title}>Summary</h6>

      <CartItemsListed
        orderSummary={orderSummary}
        total={totalAmount}
        isSummary={true}
        detectChange={doesNothing}
      />
    </div>
  );
}

export default Summary;
