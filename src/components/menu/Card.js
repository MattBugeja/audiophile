import classes from "./Card.module.css"
import { BrowserRouter, Route, Link } from "react-router-dom";

function Card(props){

    return(   
        
        
        <div className={classes.card}>

        <img className={classes.image} src={props.source}/>

        <h4 className={classes.productName}>{props.productName}</h4>

        <a className= {classes.shop} href ="#">shop</a> 
    
    </div>)

}

export default Card