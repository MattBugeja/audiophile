import data from "../../data.json";
import classes from "./Categories.module.css";
import { useState, useEffect } from "react";
import typography from "../../components/typography.module.css";

function Categories(props) {
  const orderAmt = {};
 
  const [counter, setCounter] = useState(0);
  const [productID] = useState(props.productID);
  const [isProductOverview] = useState(props.isProductOverview);

  const overviewImgSource = {
    mobile: data[productID].categoryImage.mobile,
    tablet: data[productID].categoryImage.tablet,
    desktop: data[productID].categoryImage.desktop,
  };

  const detailedImgSource = {
    mobile: data[productID].image.mobile,
    tablet: data[productID].image.tablet,
    desktop: data[productID].image.desktop,
  };

  const [imgSource, setImgSource] = useState(overviewImgSource);

  useEffect(() => {
    isProductOverview
      ? setImgSource(overviewImgSource)
      : setImgSource(detailedImgSource);
  }, []);

  function moveUp() {
    setCounter(counter + 1);
  }

  function moveDown() {
    setCounter(counter - 1);
  }

  function updateOrderAmt() {
    let orderSummary = localStorage.getItem("orderSummary");
    if (orderSummary === null) {
      localStorage.setItem("orderSummary", JSON.stringify(orderAmt));
      orderSummary = localStorage.getItem("orderSummary");
    }
    orderSummary = JSON.parse(orderSummary);
    orderSummary[[data[productID].name]] = {
      id: { productID },
      productName: data[productID].name,
      image: data[productID].cartImage,
      cartName: data[productID].cartName,
      price: data[productID].price,
      quantity: counter,
    };
    localStorage.setItem("orderSummary", JSON.stringify(orderSummary));
  }

  return (
    <div>
    
    </div>
  );
}

export default Categories;
