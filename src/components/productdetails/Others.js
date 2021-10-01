import classes from "./Others.module.css"
import { Link } from "react-router-dom"
import typography from "../../components/typography.module.css";
import linkStyle from "../../components/LinkStyles.module.css";

function Others(props){

return(

    <div className={classes.othersSection}>

        <div className={classes.imageContainer}><img className={classes.image} src ={props.imgSrcMobile} srcSet = {`${props.imgSrcMobile} 759w, ${props.imgSrcTablet} 1280w, ${props.imgSrcDesktop} 1500w`} alt=""  alt={""}/></div>

        <h5 className = {`${typography.alignCenter} ${classes.productName}`}>{props.productName}</h5>

        <div className = {`${linkStyle.link} ${linkStyle.orange} `}>

               <Link to = {{pathname:"/productdetails/ProductDetails", state:{id:props.id}}} onClick={() => window.location.reload()} className={`${typography.link} ${typography.white100}`}>see product</Link>

               </div>
   
    </div>



)

}

export default Others