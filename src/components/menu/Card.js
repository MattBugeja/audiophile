import classes from "./Card.module.css"
import {Link } from "react-router-dom";

function Card(props){

    const id = props.id

    return(   
        
        
        <div className={classes.card}>

        <img className={classes.image} src={props.source}/>

        <h4 className={classes.productName}>{props.productName}</h4>

        <Link to={{pathname:"/categories/CategoriesListed", state:{id:props.id}}} className= {classes.shop}>shop</Link> 
    
    </div>)

}

export default Card

// src/components/categories/CategoriesListed.js