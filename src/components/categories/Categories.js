import classes from "./Categories.module.css"
import { useState } from "react"

function Categories(props){

    const [isNewProduct, setIsNewProduct] = useState(props.isNewProduct)

return(

      <div className={classes.component}>

        <header>{props.categoryName}</header>
        
        <img src ={props.image}/>

        {isNewProduct}  && <div className = {classes.NewProduct}>
            new product
        </div>

        <h1>{props.productName}</h1>

        <p className = {classes.text}>
            
            {props.text}
                    
        </p>

        <button className={classes.btn}>see product</button>


    </div>



)

}

export default Categories