import classes from "./BestGear.module.css";
import bestGearImg from "./assets/bestGearImg.jpg";
import typography from "../../components/typography.module.css";

function BestGear() {
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img className={classes.bestGearImg} src={bestGearImg} alt={"man listening to music"} />
      </div>

      <div className={`${typography.alignCenter} ${classes.textContainer}`}>
        <h2>bringing you the <span className ={typography.orange}>best</span>  audio gear</h2>
<br/><br/>
        <p className={`${typography.textContent} ${typography.black50}`}>
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
