import classes from "./Categories.module.css";
import { useState } from "react";

function Categories(props) {
  const [isNewProduct] = useState(props.isNewProduct);

  return (
    <div className={classes.category}>
      <div className={classes.imgContainer}>
        <img
          className={classes.image}
          src={window.location.origin + `${props.image}`} alt = {""}
        />
      </div>

      {isNewProduct && <div className={classes.newProduct}>new product</div>}

      <div className={classes.textContainer}>
        <h1 className={classes.productName}>{props.productName}</h1>

        <p className={classes.text}>{props.text}</p>

      </div>
    </div>
  );
}

export default Categories;
