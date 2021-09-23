import classes from "./fullAd.module.css"
import ImgSpeaker from "./assets/ImgSpeaker.png"

function FullAd(){

    return(

        <div className={classes.container}> 

        <div className = {classes.background}>

        <div className={classes.imgContainer}>

        <img className = {classes.imgSpeaker} src = {ImgSpeaker}/>       

        </div>

        <div className = {classes.text}>

            <h1 className={classes.title}>zx9 speaker</h1>
            <p className = {classes.description}>Upgrade to premium speaker that are phenomenally built to deliver truly remarkable sound.</p>

            <button className = {classes.btn}> see product</button>
        </div>
        
        


        </div>
        </div>


    )



}

export default FullAd