import classes from "./DetailedImages.module.css";



function DetailedImages(props) {
  return (
    <div>
      <div className={classes.imageHalfContainer}>
        <img className={classes.image} src={props.image1} alt={""}/>
       
             </div>
      <div className={classes.imageHalfContainer}>
        <img className={classes.image} src={props.image2} alt={""} />
      </div>


      <div className={classes.imageFullContainer}>
        <img className={classes.image} src={props.image3} alt={""} />
      </div>

    </div>

    
  );
}

export default DetailedImages;
