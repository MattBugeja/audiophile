import classes from "./Checkout.module.css";
import { useState } from "react";
import Summary from "./Summary";
import Footer from "../footer/Footer";

function Checkout() {
  const billingDetails = ["Name", "Email Address", "Phone Number"];
  const shippingInfo = ["Your Address", "Zip Code", "City", "Country"];
  const emoneyDetails = ["e-money Number", "e-money PIN"];
  const [isEmoney, setIsEmoney] = useState(false);
  const [isCash, setIsCash] = useState(false);

  function usingEmoney() {
    setIsEmoney(true);
    setIsCash(false);
  }

  function payingCash() {
    setIsEmoney(false);
    setIsCash(true);
  }

  return (
    <div className={classes.container}>
      <div className={classes.formStructure}>
        <h1 className={classes.title}>Checkout</h1>
        <h2 className={classes.sectionName}>Billing Details</h2>

        <form>
          {billingDetails.map((detail, index) => (
            <div>
              <label htmlFor={detail}>{detail}</label>
              <input type="text" name={detail} placeholder={detail} />
            </div>
          ))}

          <h2 className={classes.sectionName}>Shipping Info</h2>
          {shippingInfo.map((detail, index) => (
            <div>
              <label htmlFor={detail}>{detail}</label>

              <input type="text" name={detail} placeholder={detail} />
            </div>
          ))}
        </form>
        <div className={classes.paymentOptions}>
          <h2 className={classes.sectionName}>Payment Details</h2>
          <h3 className={classes.subSection}>Payment Method</h3>

          <button onClick={usingEmoney} className={classes.btn}>
            e-Money
          </button>
          <button onClick={payingCash} className={classes.btn}>
            Cash on Delivery
          </button>
        </div>

        {isEmoney && (
          <div className={classes.emoneyDetails}>
            {emoneyDetails.map((detail, index) => (
              <div>
                <label htmlFor={detail}>{detail}</label>

                <input type="text" name={detail} placeholder={detail} />
              </div>
            ))}
          </div>
        )}

        {isCash && (
          <div className={classes.cashOnDelivery}>
            <h1>payment due on Delivery</h1>
          </div>
        )}
      </div>

      <Summary />
      <Footer />
    </div>
  );
}

export default Checkout;
