import classes from "./fullAd.module.css";

import { Link } from "react-router-dom";
import typography from "../../components/typography.module.css";
import linkStyle from "../../components/LinkStyles.module.css";
import ImgSpeakerMobile from "./assets/ImgSpeaker-mobile.png";
import ImgSpeakerTablet from "./assets/ImgSpeaker-tablet.png";
import ImgSpeakerDesktop from "./assets/ImgSpeaker-desktop.png";

function FullAd(props) {
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>


      <picture>

<source className={classes.image} media="(max-width: 760px)" srcSet={`${ImgSpeakerMobile}`}/>
<source className={classes.image} media="(max-width: 1399px)" srcSet={`${ImgSpeakerTablet}`}/>
<source className={classes.image} media="(max-width: 3000px)" srcSet={`${ImgSpeakerDesktop}`}/>
<img className={classes.image} src={`${ImgSpeakerMobile}`}/>

</picture>

    </div>

      <div className={`${typography.alignCenter} ${classes.content}`}>
        <h1 className={`${classes.productName} ${typography.white100}`}>
          zx9 speaker
        </h1>
        <p
          className={`${classes.description} ${typography.textContent} ${typography.white75} ${typography.alignDesktopLeft}`}
        >
          Upgrade to premium speaker that are phenomenally built to deliver
          truly remarkable sound.
        </p>

        <Link
          to={{ pathname: "/productdetails/ProductDetails/5" }}
          className={`${typography.link} ${typography.white100}`}
        >
          {" "}
          <div
            className={`${linkStyle.link} ${linkStyle.black} ${linkStyle.linkLeft}`}
          >
            see product{" "}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FullAd;
