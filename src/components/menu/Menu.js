import classes from "./Menu.module.css";
import headphonesImg from "./assets/headphonesImg.png";
import earphonesImg from "./assets/earphonesImg.png";
import speakersImg from "./assets/speakersImg.png"

import Card from "./Card";

function Menu() {
  return (
    <div className={classes.container}>
      <Card source={headphonesImg} productName={"Headphones"} />
      <Card source={speakersImg} productName={"Speakers"} />
      <Card source={earphonesImg} productName={"Earphones"} />
      </div>
  );
}

export default Menu;
