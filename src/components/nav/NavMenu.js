import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as CloseMenu } from "./assets/icon-close-menu.svg";
import { ReactComponent as MenuIcon } from "./assets/icon-hamburger.svg";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as CartIcon } from "./assets/icon-cart.svg";
import OverlayMenu from "../overlay/OverlayMenu";
import classes from "./NavMenu.module.css";
import Menu from "../menu/Menu";
import typography from "../../components/typography.module.css"
// import linkStyle from "/../../components/LinkStyles.module.css"

import Cart from "../cart/Cart";
function NavMenu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const openMobileMenu = () => setMenuIsOpen(!menuIsOpen);
  const closeMobileMenu = () => setMenuIsOpen(false);

  const [cartIsOpen, setCartIsOpen] = useState(false);
  const openCart = () => setCartIsOpen(true);
  const closeCart = () => setCartIsOpen(false); 

  return (
    <header className={classes.header}>
      <nav className={classes.logoNav}>
        <div className={classes.mobileMenu} onClick={openMobileMenu}>
          {menuIsOpen ? (
            <CloseMenu className={classes.menuIcon} />
          ) : (
            <MenuIcon className={classes.menuIcon} />
          )}
          {menuIsOpen && <OverlayMenu />}
        </div>

        <ul
          className={
            menuIsOpen
              ? `${classes.navOptions} ${classes.active}`
              : `${classes.navOptions}`
          }
        >
          <li className={classes.option} onClick={closeMobileMenu}>
            <Menu/>
                 </li>
         
        </ul>

        <div className={classes.logoContainer}>
          <Link to={"/"}>
            {" "}
            <Logo className={classes.logo} />{" "}
          </Link>
        </div>


        <ul className ={classes.navOptionsDesktop}>
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

        

        <div className={classes.cartMenu} >
           <CartIcon className={classes.cartIcon} onClick={openCart} />
    
          
          {cartIsOpen && <OverlayMenu />}
          {cartIsOpen && <Cart close={closeCart}/>}
        </div>


      
     
      </nav>
    </header>

  );
}

export default NavMenu;
