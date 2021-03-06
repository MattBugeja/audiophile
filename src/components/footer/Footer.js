import classes from "./Footer.module.css";
import Logo from "./assets/logo.svg";
import FacebookIcon from "./assets/icon-facebook.svg";
import InstagramIcon from "./assets/icon-instagram.svg";
import TwitterIcon from "./assets/icon-twitter.svg";
import { Link } from "react-router-dom";
import typography from "../../components/typography.module.css";

function Footer() {
  const menuItems = ["headphones", "speakers", "earphones"];

  return (
    <footer className={classes.footer}>
      <hr />

      <div className={classes.grid}>
        <div className={classes.logoContainer}>
          <img src={Logo} alt="Logo" />
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

            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={{
                    pathname: `/category/` + item,
                  }}
                  onClick={() => {
                    window.location.href = `/category/${item}`;
                  }}
                  className={`${typography.link} ${typography.white100}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className={`${typography.textContent} ${typography.white50} ${classes.text}`}
        >
          Audiophile is an all in one stop to fulfill you audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </div>

        <p
          className={`${typography.textContent} ${typography.white50} ${classes.copyright}`}
        >
          Copyright 2021. All Rights Reserved
        </p>

        <p className={classes.socialMedia}>
          <img src={FacebookIcon} alt="" /> <img src={TwitterIcon} alt="" />{" "}
          <img src={InstagramIcon} alt="" />{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
