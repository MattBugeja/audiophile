import './App.css';
import BestGear from './components/bestGear/BestGear';
import Footer from './components/footer/Footer';
import FullAd from './components/home/fullAd/fulllAd';
import Landing from './components/home/landing/Landing';
import SplitAd from './components/home/splitAd/SplitAd';
import InnerMenu from './components/menu/Menu';

function App() {
  return (
    <div className="App">


      <Landing/>
      <InnerMenu/>
      <FullAd/>
      <SplitAd/>
      <BestGear/>
      <Footer/> 

 
    </div>
  );
}

export default App;
