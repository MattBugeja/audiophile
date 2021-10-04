import classes from "./FormEntries.module.css";

function FormEntries(props) {
  const values = props.values;
  const errors = props.errors;

  const billingDetails = ["Name", "Email Address", "Phone Number"];
  const shippingDetails = ["Zip Code", "City", "Country"];

  let array = [];

  if (props.array === "billing details") {
    array = billingDetails;
  } else if (props.array === "shipping details") {
    array = shippingDetails;
  }

  return (
    <div className={classes.wrap}>
      {" "}
      {array.map((detail, index) => (
        <div key={index} className={classes.entry}>
          <label htmlFor={[detail.split(" ")[0].toLowerCase()]}>{detail}</label>
          <input
            type="text"
            name={[detail.split(" ")[0].toLowerCase()]}
            placeholder={`Enter your ${detail}`}
            value={values[detail.split(" ")[0].toLowerCase()]}
            onChange={props.onChange}
          />
          {errors[detail.split(" ")[0].toLowerCase()] && (
            <p className={classes.errorMessage}>
              {errors[detail.split(" ")[0].toLowerCase()]}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default FormEntries;
