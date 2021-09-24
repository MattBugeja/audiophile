
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import BestGear from './components/bestGear/BestGear';
import ProductDetails from "./components/categories/productdetails/ProductDetails";
import Footer from './components/footer/Footer';
import FullAd from './components/home/fullAd/fulllAd';
import Home from "./components/home/Home";
import Landing from './components/home/landing/Landing';
import SplitAd from './components/home/splitAd/SplitAd';
import Menu from './components/menu/Menu';


function App() {
  return (

   
    <div className="App">
 <Router>
<Switch>
   

    <Route path="/categories/productdetails/ProductDetails">

      <ProductDetails/>

   </Route>

   <Route path= "/"> 

    <Home/> 


    </Route>

   

     </Switch>
      </Router>
 
    </div>

   
  );
}

export default App;
