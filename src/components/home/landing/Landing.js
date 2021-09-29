import classes from "./Landing.module.css";
import { Link } from "react-router-dom";
import typography from "../../../components/typography.module.css"
import linkStyle from "../../../components/LinkStyles.module.css"
function Landing() {
  return (
    <div className={classes.container}>
      <div className={`${typography.alignCenter} ${classes.content}`}>
        <p className={`${typography.overline} ${typography.white50} ${classes.newProduct}`} >NEW PRODUCT</p>
        <h1 className={`${classes.product} ${typography.white100}`}>XX99 MARKII HEADPHONES</h1>
        <p className={`${classes.description} ${typography.textContent} ${typography.white75}`}>
          {" "}
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>


        <div className={`${linkStyle.link} ${linkStyle.orange}` }>
        <Link
          to={{pathname:"/productdetails/ProductDetails", state:{id:3}}}
          className={`${typography.link} ${typography.white100}`}

        >
          see product
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
