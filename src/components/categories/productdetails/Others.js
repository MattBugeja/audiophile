import classes from "./Others.module.css"


function Others(props){

return(

    <div>

        <div className={classes.imageContainer}><img className={classes.image} src ={props.image}/></div>

        <h1 className = {classes.productName}>{props.productName}</h1>

        <button className={classes.btn}>see product</button>

   
    </div>



)

}

export default Others