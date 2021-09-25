import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import BestGear from "./components/bestGear/BestGear";
import CategoriesListed from "./components/categories/CategoriesListed";
import ProductDetails from "./components/categories/productdetails/ProductDetails";
import Footer from "./components/footer/Footer";
import FullAd from "./components/home/fullAd/fulllAd";
import Home from "./components/home/Home";
import Landing from "./components/home/landing/Landing";
import SplitAd from "./components/home/splitAd/SplitAd";
import Menu from "./components/menu/Menu";
import { ScrollToTop } from "react-router-scroll-to-top";
import OrderContext from "./components/OrderContext";
import { useState } from "react";




function App() {

  const [order, setOrder] = useState({ 
  
  0 : 0,
   
   1 : 0,
   
   2: 0,
   
   3:0,
   
   4:0,
   
   5:0,
   })
  


  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/categories/productdetails/">
              <OrderContext.Provider value = {[order,setOrder]}>
              <ProductDetails />
              </OrderContext.Provider>
            </Route>

            <Route path="/categories/CategoriesListed">
              <CategoriesListed />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ScrollToTop>
        <Menu />
        <BestGear />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
