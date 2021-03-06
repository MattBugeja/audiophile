import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";
import { useState } from "react";
import Cart from "./components/cart/Cart";
import CategoriesListed from "./components/categories/CategoriesListed";
import Checkout from "./components/checkout/Checkout";
import CounterContext from "./components/contexts/CounterContext";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import NavMenu from "./components/nav/NavMenu";
import ProductDetails from "./components/productdetails/ProductDetails";

function App() {
  const [xx59Counter, setXx59Counter] = useState(0);
  const [xx99MK1Counter, setXx99MK1Counter] = useState(0);
  const [xx99MK2Counter, setXx99MK2Counter] = useState(0);
  const [yx1Counter, setYx1Counter] = useState(0);
  const [zx7Counter, setZx7Counter] = useState(0);
  const [zx9Counter, setZx9Counter] = useState(0);

  const setValue = [
    setXx59Counter,
    setXx99MK1Counter,
    setXx99MK2Counter,
    setYx1Counter,
    setZx7Counter,
    setZx9Counter,
  ];
  const readValue = [
    xx59Counter,
    xx99MK1Counter,
    xx99MK2Counter,
    yx1Counter,
    zx7Counter,
    zx9Counter,
  ];

  return (
    <CounterContext.Provider value={[setValue, readValue]}>
      <Router basename="/">
        <div className="App">
          <ScrollToTop>
            <NavMenu />
            <Switch>
              <Route exact path="/checkout">
                <Checkout />
              </Route>

              <Route path="/product/:id" component={ProductDetails}></Route>

              <Route path="/category:id" component={CategoriesListed}></Route>

              <Route exact path="/" component={Home}></Route>
            </Switch>
          </ScrollToTop>

          <Footer />
        </div>
      </Router>
    </CounterContext.Provider>
  );
}

export default App;
