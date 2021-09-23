import classes from "./Footer.module.css";
import Logo from "./assets/logo.svg";
import FacebookIcon from "./assets/icon-facebook.svg"
import InstagramIcon from "./assets/icon-instagram.svg"
import TwitterIcon from "./assets/icon-twitter.svg"

function Footer() {
  return (
    <div className={classes.footer}>
        <hr/>
      <div className={classes.logoContainer}>
        <img src={Logo} />

        </div>

        <nav>
          <ul>
            <li>
              home
            </li>
            <li>
              headphones
            </li>
            <li>
              speakers
            </li>
            <li>
              earphones
            </li>
          </ul>
        </nav>

        <div className={classes.text}>
          Audiophile is an all in one stop to fulfill you audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
      
      </div>

      <div className = {classes.copyright}>Copyright 2021. All Rights Reserved</div>

      <div className = {classes.socialMedia}><img src = {FacebookIcon}/> <img src={TwitterIcon}/> <img src={InstagramIcon}/> </div>
    </div>
  );
}

export default Footer;
