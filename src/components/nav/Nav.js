import React from "react";
import {

  Link
} from "react-router-dom";
import { useState } from "react";
import { ReactComponent as CloseMenu } from "./assets/icon-close-menu.svg";
import { ReactComponent as MenuIcon } from "./assets/icon-hamburger.svg";
import { ReactComponent as Logo } from "./assets/logo.svg";
import {ReactComponent as CartIcon} from "./assets/icon-cart.svg"
import OverlayMenu from "../overlay/OverlayMenu";
import classes from "./Nav.module.css"
import Menu from "../menu/Menu";


function Nav() {
  const [menuShows, setMenuShows] = useState(false)
  const [click, setClick] = useState(false);
  const handleClick = () => {setClick(!click); setMenuShows(!menuShows)};
  const closeMobileMenu = () => setClick(false);


  return (
    <header className={classes.header}>

      
      <div className={classes.logoNav}>

         <div className={classes.mobileMenu} onClick={handleClick}>
        {click ? (
          <CloseMenu className={classes.menuIcon} />
        ) : (
          <MenuIcon className={classes.menuIcon} />
        )}
       
       
        
      </div>
        <div className={classes.logoContainer}>
        
          <Link to = {"/"}>  <Logo className={classes.logo}/> </Link>
       
        </div>


<Link to={"/cart/Cart"}> <CartIcon/></Link>

             </div>

             {/* {click && <OverlayMenu />} */}
     
    </header>

 

  );
}

export default Nav;
{/* <Link to={{pathname:"/categories/CategoriesListed", state:{id:props.id}}} className= {classes.shop}>shop</Link>  */}