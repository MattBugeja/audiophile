import classes from "./Landing.module.css";
import { Link } from "react-router-dom";
import typography from "../../components/typography.module.css";
import linkStyle from "../../components/LinkStyles.module.css";
function Landing() {
  return (
    <div className={classes.container}>
      <div className={classes.background}>
        <div
          className={`${typography.alignCenter} ${classes.content} ${typography.alignDesktopLeft}`}
        >
          <p
            className={`${typography.overline} ${typography.white50} ${classes.newProduct}`}
          >
            NEW PRODUCT
          </p>
          <h1 className={`${classes.productName} ${typography.white100}`}>
            XX99 MARKII HEADPHONES
          </h1>
          <p
            className={`${typography.textContent} ${typography.white75} ${classes.description} `}
          >
            {" "}
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <Link
            to={{ pathname: "/product/1" }}
            className={`${typography.link} ${typography.white100}`}
          >
            <div
              className={`${linkStyle.link} ${linkStyle.orange} ${linkStyle.linkLeft}`}
            >
              see product{" "}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
