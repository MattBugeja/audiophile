import classes from "./Landing.module.css";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <p className={classes.newProduct}>NEW PRODUCT</p>
        <h1 className={classes.product}>XX99 MARKII HEADPHONES</h1>
        <p className={classes.description}>
          {" "}
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>

        <Link
          to={{pathname:"./categories/productdetails/ProductDetails", state:{id:3}}}
          className={classes.btn}

        //   src/components/categories/productdetails/ProductDetails.js
        >
          see product
        </Link>
      </div>
    </div>
  );
}

export default Landing;
