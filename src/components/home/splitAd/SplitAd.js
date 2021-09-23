import classes from "./SplitAd.module.css";
import bottomImg from "./assets/bottomImg.jpg";

function SplitAd() {
  return (
    <div className={classes.container}>
      <div className={classes.topAd}>
        <h1 className={classes.productName}>zx7 Speaker</h1>

        <button className={classes.btn}>see product</button>
      </div>

      <div className={classes.bottomAd}>
        <div className={classes.imgContainer}>
          <img className={classes.bottomImg} src={bottomImg} />
      </div>

      
      <div className={classes.greyBkGround}>

          <h1 className={classes.bottomAdText}>yx1 earphones</h1>
          <button className={classes.bottomBtn}>see product</button>

      </div>



      </div>
    </div>
  );
}

export default SplitAd;
