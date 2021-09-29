import classes from "./Others.module.css"
import { Link } from "react-router-dom"

function Others(props){

return(

    <div>

        <div className={classes.imageContainer}><img className={classes.image} src ={props.image} alt={""}/></div>

        <h1 className = {classes.productName}>{props.productName}</h1>

               <Link to = {{pathname:"/productdetails/ProductDetails", state:{id:props.id}}} onClick={() => window.location.reload()} className={classes.btn}>see product</Link>


   
    </div>



)

}

export default Others