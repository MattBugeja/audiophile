import classes from "./Checkout.module.css";
import { useEffect, useState } from "react";
import Summary from "./Summary";
import useForm from "../../utilities/UseForm";
import ValidateInfo from "../../utilities/ValidateInfo";
import typography from "../../components/typography.module.css";
import Thanks from "./ThanksModal";
import { useLocation } from "react-router";
import OverlayModal from "../overlay/OverlayModal";
import FormEntries from "./FormEntries";
import FormPaymentOptions from "./FormPaymentOptions";

function Checkout() {
  const { handleChange, values, handleSubmit, errors, numOfErrors } =
    useForm(ValidateInfo);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const getOrderSummary = localStorage.getItem("orderSummary");
  const orderSummary = JSON.parse(getOrderSummary);
  const location = useLocation();
  const { totalAmount } = location.state;

  function doesNothing() {}
  function submitted() {
    handleSubmit();
    setOrderSubmitted(true);
  }

  useEffect(() => {
    if (orderSubmitted && numOfErrors === 0) {
      setOrderPlaced(true);
    }
    return function cleanup() {
      setOrderSubmitted(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderSubmitted]);

  return (
    <div className={classes.container}>
      <div className={classes.formStructure}>
        <h1 className={classes.title}>Checkout</h1>
        <h2 className={classes.sectionName}>Billing Details</h2>
        <form>
          <FormEntries
            array={"billing details"}
            values={values}
            errors={errors}
            onChange={handleChange}
          />
          <h2 className={classes.sectionName}>Shipping Info</h2>
          <label htmlFor={"address"}>{"Your Address"}</label>
          <input
            type="text"
            name={"address"}
            placeholder={"Enter your Address"}
            value={values.address}
            onChange={handleChange}
          />
          {errors.address && (
            <p className={classes.errorMessage}>{errors.address}</p>
          )}
          <FormEntries
            array={"shipping details"}
            values={values}
            errors={errors}
            onChange={handleChange}
          />
        </form>

        <FormPaymentOptions />
        <Summary />

        <button
          onClick={submitted}
          className={` ${classes.submit} ${typography.link} ${typography.white100} `}
        >
          Continue and Pay{" "}
        </button>
      </div>

      {orderPlaced && <OverlayModal />}
      {orderPlaced && (
        <Thanks
          orderSummary={orderSummary}
          total={totalAmount}
          isSummary={true}
          isCheckedOut={true}
          detectChange={doesNothing}
        />
      )}
    </div>
  );
}

export default Checkout;
