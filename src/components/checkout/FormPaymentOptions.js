import { useState } from "react";
import classes from "./FormPaymentOptions.module.css";

function FormPaymentOptions() {
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
    <div>
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
            <div key={index} className={classes.emoneyDetail}>
              <label htmlFor={detail}>{detail}</label>

              <input
                type="text"
                name={detail}
                placeholder={`Enter your ${detail}`}
              />
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
  );
}

export default FormPaymentOptions;
