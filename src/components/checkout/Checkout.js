import classes from "./Checkout.module.css";
import { useState } from "react";
import Summary from "./Summary";

function Checkout() {
  const billingDetails = ["Name", "Email Address", "Phone Number"];
  const shippingInfo = ["Zip Code", "City", "Country"];
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
      <div className={classes.desktopRow}>
        <div className={classes.formStructure}>
          <h1 className={classes.title}>Checkout</h1>
          <h2 className={classes.sectionName}>Billing Details</h2>

          <form>
            <div className={classes.wrap}>
              {" "}
              {billingDetails.map((detail, index) => (
                <div className={classes.entry}>
                  <label htmlFor={detail}>{detail}</label>
                  <input type="text" name={detail} placeholder={detail} />
                </div>
              ))}
            </div>

            <h2 className={classes.sectionName}>Shipping Info</h2>
            <label htmlFor={"address"}>{"Your Address"}</label>

            <input type="text" name={"address"} placeholder={"Your Address"} />

            <div className={classes.wrap}>
              {shippingInfo.map((detail, index) => (
                <div className={classes.entry}>
                  <label htmlFor={detail}>{detail}</label>

                  <input type="text" name={detail} placeholder={detail} />
                </div>
              ))}
            </div>
          </form>
          <div className={classes.paymentOptions}>
            <h2 className={classes.sectionName}>Payment Details</h2>{" "}
            <h3 className={classes.subSection}>Payment Method</h3>
            <div className={classes.row}>
              <button onClick={usingEmoney} className={classes.btn}>
                e-Money
              </button>
              <button onClick={payingCash} className={classes.btn}>
                Cash on Delivery
              </button>
            </div>
          </div>

          {isEmoney && (
            <div className={classes.row}>
              {emoneyDetails.map((detail, index) => (
                <div className={classes.emoneyDetail}>
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
      </div>
    </div>
  );
}

export default Checkout;
