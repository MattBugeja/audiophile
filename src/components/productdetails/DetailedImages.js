import classes from "./DetailedImages.module.css";
import data from "../../data.json";
import { useState } from "react";



function DetailedImages(props) {
  const [productID] = useState(props.productID)


const image1= {"mobile": data[productID].gallery.first.mobile,
"tablet" : data[productID].gallery.first.tablet,
"desktop" : data[productID].gallery.first.desktop};

const image2= {"mobile":data[productID].gallery.second.mobile,
"tablet" : data[productID].gallery.second.tablet,
"desktop" : data[productID].gallery.second.desktop};

const image3={"mobile" : data[productID].gallery.third.mobile, "tablet": data[productID].gallery.third.mobile,
"desktop" : data[productID].gallery.third.mobile};


  return (
    <div className={classes.container}>

      <div className = {classes.halfImages}>
      <div className={classes.imageHalfContainer}>
        <img className={classes.image} src={image1.mobile}
        
        
        alt={""}/>
       
             </div>
      <div className={classes.imageHalfContainer}>
        <img className={classes.image} src={image2.mobile} alt={""} />
      </div>
      </div>


      <div className={classes.imageFullContainer}>
        <img className={classes.image} src={image3.mobile} alt={""} />
      </div>

    </div>

    
  );
}

export default DetailedImages;
