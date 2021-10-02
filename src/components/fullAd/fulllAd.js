import classes from "./fullAd.module.css"

import { Link } from "react-router-dom"
import typography from "../../components/typography.module.css"
import linkStyle from "../../components/LinkStyles.module.css"
import ImgSpeakerMobile from "./assets/ImgSpeaker-mobile.png"
import ImgSpeakerTablet from "./assets/ImgSpeaker-tablet.png"
import ImgSpeakerDesktop from "./assets/ImgSpeaker-desktop.png"

function FullAd(props){

    return(

        <div className={classes.container}> 

        <div className={classes.imgContainer}>

        <img className = {classes.imgSpeaker} alt = "zx9 speaker" src = {ImgSpeakerMobile} srcSet = {` ${ImgSpeakerMobile} 764w, ${ImgSpeakerTablet} 1399w, ${ImgSpeakerDesktop} 1500w}`} />       

        </div>

        <div className = {`${typography.alignCenter} ${classes.content}`}>

            <h1 className={`${classes.productName} ${typography.white100}`}>zx9 speaker</h1>
            <p className = {`${classes.description} ${typography.textContent} ${typography.white75} ${typography.alignDesktopLeft}`}>Upgrade to premium speaker that are phenomenally built to deliver truly remarkable sound.</p>

            <div className ={`${linkStyle.link} ${linkStyle.black} ${linkStyle.linkLeft}`}>
            <Link to = {{pathname:"/productdetails/ProductDetails", state:{id:5}}} className = {`${typography.link} ${typography.white100}`}> see product</Link>
            </div>
        </div>
        
        


        </div>
        // </div>


    )



}

export default FullAd