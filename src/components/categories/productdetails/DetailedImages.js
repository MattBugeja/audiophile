import classes from "./DetailedImages.module.css";



function DetailedImages(props) {
  return (
    <div>
      <div className={classes.imageHalfContainer}>
        <img className={classes.image} src={props.image1}/>
       
             </div>
      <div className={classes.imageHalfContainer}>
        <img className={classes.image} src={props.image2} />
      </div>


      <div className={classes.imageFullContainer}>
        <img className={classes.image} src={props.image3} />
      </div>

    </div>

    
  );
}

export default DetailedImages;
