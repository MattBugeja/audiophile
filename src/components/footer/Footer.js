import classes from "./Footer.module.css";
import Logo from "./assets/logo.svg";
import FacebookIcon from "./assets/icon-facebook.svg";
import InstagramIcon from "./assets/icon-instagram.svg";
import TwitterIcon from "./assets/icon-twitter.svg";
import { Link } from "react-router-dom";
import typography from "../../components/typography.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <hr />
      <div className={classes.logoContainer}>
        <img src={Logo} />
      </div>

      <nav className={`${classes.footerMenu}`}>
        <ul>
          <li>
            <Link
              to={"/"}
              className={`${typography.link} ${typography.white100}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/categories/CategoriesListed",
                state: { id: "headphones" },
              }}
              className={`${typography.link} ${typography.white100}`}
            >
              headphones
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/categories/CategoriesListed",
                state: { id: "speakers" },
              }}
              className={`${typography.link} ${typography.white100}`}
            >
              speakers
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/categories/CategoriesListed",
                state: { id: "earphones" },
              }}
              className={`${typography.link} ${typography.white100}`}
            >
              earphones
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className={`${typography.textContent} ${typography.white50} ${classes.text}`}
      >
        Audiophile is an all in one stop to fulfill you audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we're open 7 days a week.
      </div>

      <div
        className={`${typography.textContent} ${typography.white50} ${classes.copyright}`}
      >
        Copyright 2021. All Rights Reserved
      </div>

      <div className={classes.socialMedia}>
        <img src={FacebookIcon} /> <img src={TwitterIcon} />{" "}
        <img src={InstagramIcon} />{" "}
      </div>
    </footer>
  );
}

export default Footer;
