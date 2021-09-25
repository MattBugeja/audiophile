import classes from "./fullAd.module.css"
import ImgSpeaker from "./assets/ImgSpeaker.png"
import { Link } from "react-router-dom"

function FullAd(props){

    return(

        <div className={classes.container}> 

        <div className = {classes.background}>

        <div className={classes.imgContainer}>

        <img className = {classes.imgSpeaker} src = {ImgSpeaker}/>       

        </div>

        <div className = {classes.text}>

            <h1 className={classes.title}>zx9 speaker</h1>
            <p className = {classes.description}>Upgrade to premium speaker that are phenomenally built to deliver truly remarkable sound.</p>

            <Link to = {{pathname:"./categories/productdetails/ProductDetails", state:{id:5}}} className = {classes.btn}> see product</Link>
        </div>
        
        


        </div>
        </div>


    )



}

export default FullAd