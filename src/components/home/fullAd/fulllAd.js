import classes from "./fullAd.module.css"
import ImgSpeaker from "./assets/ImgSpeaker.png"
import { Link } from "react-router-dom"
import typography from "../../../components/typography.module.css"
import linkStyle from "../../../components/LinkStyles.module.css"

function FullAd(props){

    return(

        <div className={classes.container}> 

        <div className = {classes.background}>

        <div className={classes.imgContainer}>

        <img className = {classes.imgSpeaker} src = {ImgSpeaker}/>       

        </div>

        <div className = {classes.content}>

            <h1 className={`${classes.productName} ${typography.white100}`}>zx9 speaker</h1>
            <p className = {`${classes.description} ${typography.textContent} ${typography.white75}`}>Upgrade to premium speaker that are phenomenally built to deliver truly remarkable sound.</p>

            <div className ={`${linkStyle.link} ${linkStyle.black}`}>
            <Link to = {{pathname:"./categories/productdetails/ProductDetails", state:{id:5}}} className = {`${typography.link} ${typography.white100}`}> see product</Link>
            </div>
        </div>
        
        


        </div>
        </div>


    )



}

export default FullAd