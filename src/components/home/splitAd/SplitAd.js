import classes from "./SplitAd.module.css";
import bottomImg from "./assets/bottomImg.jpg";
import { Link } from "react-router-dom";

function SplitAd() {
  return (
    <div className={classes.container}>
      <div className={classes.topAd}>
        <h1 className={classes.productName}>zx7 Speaker</h1>

        <Link to = {{pathname:"./categories/productdetails/ProductDetails", state:{id:5}}} className={classes.btn}>see product</Link>
      </div>

      <div className={classes.bottomAd}>
        <div className={classes.imgContainer}>
          <img className={classes.bottomImg} src={bottomImg} />
      </div>

      
      <div className={classes.greyBkGround}>

          <h1 className={classes.bottomAdText}>yx1 earphones</h1>
          <Link to = {{pathname:"./categories/productdetails/ProductDetails", state:{id:0}}}  className={classes.bottomBtn}>see product</Link>

      </div>



      </div>
    </div>
  );
}

export default SplitAd;
