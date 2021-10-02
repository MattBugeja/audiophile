import Landing from "../landing/Landing"
import FullAd from "../fullAd/fulllAd"
import SplitAd from "../splitAd/SplitAd"
import Menu from "../menu/Menu"
import BestGear from "../bestGear/BestGear"



function Home(){


    return(

        <div>


      <Landing/> 
      <Menu/>
      <FullAd/>
      <SplitAd/>
      <BestGear/>
       </div>



        )
}

export default Home