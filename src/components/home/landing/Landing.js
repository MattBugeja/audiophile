
import classes from "./Landing.module.css"

function Landing(){


return(

<div className = {classes.container}>

    <div className = {classes.text}>
        <p className={classes.newProduct}>NEW PRODUCT</p>
        <h1 className = {classes.product}>XX99 MARKII HEADPHONES</h1>
        <p className= {classes.description}> Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>

        <button className={classes.btn}>see product</button>
    
    
    </div>

</div>


)

}


export default Landing