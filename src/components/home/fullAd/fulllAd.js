import classes from "./fullAd.module.css"

import { Link } from "react-router-dom"
import typography from "../../../components/typography.module.css"
import linkStyle from "../../../components/LinkStyles.module.css"
import ImgSpeakerMobile from "./assets/ImgSpeaker-mobile.png"
import ImgSpeakerTablet from "./assets/ImgSpeaker-tablet.png"
import ImgSpeakerDesktop from "./assets/ImgSpeaker-desktop.png"

function FullAd(props){

    return(

        <div className={classes.container}> 

        {/* <div className = {classes.background}> */}

        <div className={classes.imgContainer}>

        <img className = {classes.imgSpeaker} src = {ImgSpeakerMobile} srcSet = {` ${ImgSpeakerMobile} 365w, ${ImgSpeakerTablet} 760w, ${ImgSpeakerDesktop} 1280w}`} />       

        </div>

        <div className = {`${typography.alignCenter} ${classes.content}`}>

            <h1 className={`${classes.productName} ${typography.white100}`}>zx9 speaker</h1>
            <p className = {`${classes.description} ${typography.textContent} ${typography.white75}`}>Upgrade to premium speaker that are phenomenally built to deliver truly remarkable sound.</p>

            <div className ={`${linkStyle.link} ${linkStyle.black}`}>
            <Link to = {{pathname:"/productdetails/ProductDetails", state:{id:5}}} className = {`${typography.link} ${typography.white100}`}> see product</Link>
            </div>
        </div>
        
        


        </div>
        // </div>


    )



}

export default FullAd