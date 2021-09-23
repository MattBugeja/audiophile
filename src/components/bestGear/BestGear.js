import classes from "./BestGear.module.css";
import bestGearImg from "./assets/bestGearImg.jpg";

function BestGear() {
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img className={classes.bestGearImg} src={bestGearImg} />
      </div>

      <div className={classes.textContainer}>
        <h1 className={classes.title}>bringing you the <span className ={classes.best}>best</span>  audio gear</h1>

        <p className={classes.text}>
          Located at the heart of New York City, Audiophile is the premier stor
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and lucury demonstartion rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}

export default BestGear;
