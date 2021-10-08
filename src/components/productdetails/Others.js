import classes from "./Others.module.css";
import { Link } from "react-router-dom";
import typography from "../../components/typography.module.css";
import linkStyle from "../../components/LinkStyles.module.css";

function Others(props) {
  function refresh() {
    window.location.href = `/productdetails/ProductDetails/${props.id}`;
  }

  return (
    <div className={classes.othersSection}>
      <div className={classes.imageContainer}>

    <picture>

  <source className={classes.image} media="(max-width: 760px)" srcset={`${props.imgSrcMobile}`}/>
  <source className={classes.image} media="(max-width: 1399px)" srcset={`${props.imgSrcTablet}`}/>
  <source className={classes.image} media="(max-width: 3000px)" srcset={`${props.imgSrcDesktop}`}/>
  <img className={classes.image} src={`${props.imgSrcMobile}`}/>

  </picture>

      </div>

      <h5 className={`${typography.alignCenter} ${classes.productName}`}>
        {props.productName}
      </h5>

      <div className={`${linkStyle.link} ${linkStyle.orange} `}>
        <Link
          to={{ pathname: "/productdetails/ProductDetails" + props.id }}
          onClick={refresh}
          className={`${typography.link} ${typography.white100}`}
        >
          see product
        </Link>
      </div>
    </div>
  );
}

export default Others;
