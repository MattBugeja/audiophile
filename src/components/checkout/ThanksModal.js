import React from "react";
import classes from "./ThanksModal.module.css";
import successIcon from "./assets/icon-check.svg";
import { Link } from "react-router-dom";
import typography from "../../components/typography.module.css";
import linkStyle from "../../components/LinkStyles.module.css";
import CartItemsListed from "../cart/CartItemsListed";

function Thanks(props) {
  function clearStorage() {
    localStorage.clear();
  }

  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        {" "}
        <img src={successIcon} alt="" />
      </div>
      <h3 className={typography.alignLeft}> Thank you for your order</h3>
      <div
        className={`${classes.text} ${typography.textContent} ${typography.black50}`}
      >
        You will receive an email confirmation shortly.
      </div>
      <div className={classes.background}>
        <CartItemsListed
          orderSummary={props.orderSummary}
          total={props.total}
          isSummary={true}
          isCheckedOut={true}
          detectChange={props.detectChange}
        />
      </div>{" "}
      <Link
        onClick={clearStorage}
        className={`${typography.link} ${typography.white100}`}
        to={"/"}
      >
        <div className={linkStyle.linkWide}> Back to Home</div>
      </Link>
    </div>
  );
}

export default Thanks;
