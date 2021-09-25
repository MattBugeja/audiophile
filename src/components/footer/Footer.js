import classes from "./Footer.module.css";
import Logo from "./assets/logo.svg";
import FacebookIcon from "./assets/icon-facebook.svg"
import InstagramIcon from "./assets/icon-instagram.svg"
import TwitterIcon from "./assets/icon-twitter.svg"
import { Link } from "react-router-dom";

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
           <Link to ={"/"} className={classes.menuOption}>Home</Link>
            </li>
            <li>
            <Link to={{pathname:"/categories/CategoriesListed", state:{id:"headphones"}}} className={classes.menuOption} >headphones</Link>
            </li>
            <li>
            <Link to={{pathname:"/categories/CategoriesListed", state:{id:"speakers"}}} className={classes.menuOption} >speakers</Link>
            </li>
            <li>
            <Link to={{pathname:"/categories/CategoriesListed", state:{id:"earphones"}}} className={classes.menuOption} >earphones</Link>
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
