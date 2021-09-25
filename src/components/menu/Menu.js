import classes from "./Menu.module.css";
import headphonesImg from "./assets/headphonesImg.png";
import earphonesImg from "./assets/earphonesImg.png";
import speakersImg from "./assets/speakersImg.png"

import Card from "./Card";

function Menu() {
  return (
    <div className={classes.container}>
      <Card source={headphonesImg} productName={"Headphones"} id= {"headphones"}/>
      <Card source={speakersImg} productName={"Speakers"} id= {"speakers"} />
      <Card source={earphonesImg} productName={"Earphones"} id= {"earphones"} />
      </div>
  );
}

export default Menu;
