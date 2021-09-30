import classes from "./Categories.module.css";
import { useState } from "react";
import typography from "../../components/typography.module.css";

function Categories(props) {
  const [isNewProduct] = useState(props.isNewProduct);

  return (
    <div className={classes.category}>
      <div className={classes.imgContainer}>
        <img
          className={classes.image}
          src={window.location.origin + `${props.image}`}
          srcSet = {window.location.origin + `${props.mobileImage} 759w, ${props.tabletImage} 1280w, ${props.desktopImage} 1500w}`}
          alt = {""}/>
      </div>

     

      <div className={classes.textContainer}>
      {isNewProduct && <div className={`${typography.overline} ${typography.orange} ${classes.newProduct}`}>new product</div>}
        <h2 className={` ${typography.alignCenter}  ${classes.productName}`}>{props.productName}</h2>

        <p className={`${typography.textContent} ${typography.black50}`}>{props.text}</p>

      </div>
    </div>
  );
}

export default Categories;
