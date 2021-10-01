import classes from "./BestGear.module.css";
import bestGearImgMobile from "./assets/bestGearImg-mobile.jpg";
import bestGearImgTablet from "./assets/bestGearImg-tablet.jpg";
import bestGearImgDesktop from "./assets/bestGearImg-desktop.jpg";
import typography from "../../components/typography.module.css";

function BestGear() {
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img className={classes.bestGearImg} src={bestGearImgMobile} srcSet = {`${bestGearImgMobile} 759w, ${bestGearImgTablet} 1280w, ${bestGearImgDesktop} 1500w`} alt="" />
      </div>

      <div className={`${typography.alignCenter} ${classes.textContainer} ${typography.alignDesktopLeft}`}>
        <h2>bringing you the <span className ={typography.orange}>best</span>  audio gear</h2>
<br/><br/>
        <p className={`${typography.textContent} ${typography.black50} ${typography.alignDesktopLeft}`}>
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
