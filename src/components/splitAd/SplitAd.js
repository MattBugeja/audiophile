import classes from "./SplitAd.module.css";
import ImgEarphonesMobile from "./assets/imgEarphones-mobile.jpg";
import ImgEarphonesTablet from "./assets/imgEarphones-tablet.jpg";
import ImgEarphonesDesktop from "./assets/imgEarphones-desktop.jpg";
import { Link } from "react-router-dom";
import typography from "../../components/typography.module.css";
import linkStyle from "../../components/LinkStyles.module.css";

function SplitAd() {
  return (
    <div className={classes.container}>
      <div className={classes.topAd}>
        <h4 className={classes.productName}>zx7 Speaker</h4>

       
          <Link
            to={{
              pathname: "/productdetails/ProductDetails/5",
            }}
            className={`${typography.link} ${typography.black100}`}
          >
             <div
          className={`${linkStyle.link} ${linkStyle.transparent} ${classes.speakerLinkPositioning}`}
        > see product </div>
          </Link>
        
      </div>

      <div className={classes.bottomAd}>
        <div className={classes.imgContainer}>


        <picture>
            <source
              className={classes.image}
              media="(max-width: 760px)"
              srcSet={ImgEarphonesMobile}
            />
            <source
              className={classes.image}
              media="(max-width: 1399px)"
              srcSet={ImgEarphonesTablet}
            />
            <source
              className={classes.image}
              media="(max-width: 3000px)"
              srcSet={ImgEarphonesDesktop}
            />
            <img
              className={classes.image}
              src={ImgEarphonesMobile}
            />
          </picture>

        </div>

        <div className={classes.greyBkGround}>
          <h4 className={classes.bottomAdText}>yx1 earphones</h4>
         
            <Link
              to={{
                pathname: "/product/0",
              }}
              className={`${typography.link} ${typography.black100}`}
            > <div
            className={`${linkStyle.link} ${linkStyle.transparent} ${classes.linkPositioning}`}
          >   see product </div>
            
            </Link>
        
        </div>
      </div>
    </div>
  );
}

export default SplitAd;
