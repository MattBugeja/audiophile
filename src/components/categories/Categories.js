import classes from "./Categories.module.css"
import { useState } from "react"
import { Link } from "react-router-dom"




function Categories(props){

    const [isNewProduct, setIsNewProduct] = useState(props.isNewProduct)

return(

      <div className={classes.category}>

                   
          

            <div className={classes.imgContainer}><img className={classes.image} src = {window.location.origin + `${props.image}`}/></div>
        
        

        {isNewProduct  && <div className = {classes.newProduct}>
            new product
        </div>}

        <div className={classes.textContainer}>

        <h1 className={classes.productName}>{props.productName}</h1>

        <p className = {classes.text}>
            
            {props.text}
                    
        </p>

        {/* <Link to = {{pathname:"/categories/productdetails/ProductDetails", state:{id:props.id}}}   className={classes.btn}>see product</Link> */}

        </div>
        </div>



)

}

export default Categories