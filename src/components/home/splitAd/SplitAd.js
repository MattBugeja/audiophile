import classes from "./SplitAd.module.css";
import ImgEarphonesMobile from "./assets/imgEarphones-mobile.jpg";
import ImgEarphonesTablet from "./assets/imgEarphones-tablet.jpg";
import ImgEarphonesDesktop from "./assets/imgEarphones-desktop.jpg";
import { Link } from "react-router-dom";
import typography from "../../../components/typography.module.css";
import linkStyle from "../../../components/LinkStyles.module.css";

function SplitAd() {
  return (
    <div className={classes.container}>
      <div className={classes.topAd}>
        <h4 className={classes.productName}>zx7 Speaker</h4>

        <div className={`${linkStyle.link} ${linkStyle.transparent} ${classes.speakerLinkPositioning}`}>
          <Link
            to={{
              pathname: "/productdetails/ProductDetails",
              state: { id: 5 },
            }}
            className={`${typography.link} ${typography.black}`}
          >
            see product
          </Link>
        </div>
      </div>

      <div className={classes.bottomAd}>
        <div className={classes.imgContainer}>
          <img className={classes.bottomImg} src={ImgEarphonesTablet} srcSet = {`${ImgEarphonesMobile} 759w, ${ImgEarphonesTablet} 1280w, ${ImgEarphonesDesktop} 1500w`} alt="" />
        </div>

        <div className={classes.greyBkGround}>
          <h4 className={classes.bottomAdText}>yx1 earphones</h4>
          <div className={`${linkStyle.link} ${linkStyle.transparent} ${classes.linkPositioning}`}>
            <Link
              to={{
                pathname: "/productdetails/ProductDetails",
                state: { id: 0 },
              }}
              className={`${typography.link} ${typography.black}`}
            >
              see product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplitAd;
