import Categories from "../categories/Categories";
import classes from "./productDetails.module.css";
import data from "../../data.json";
import { useState } from "react";
import DetailedImages from "./DetailedImages";
import Others from "./Others";
import { useLocation } from "react-router";
import typography from "../../components/typography.module.css";
import Menu from "../menu/Menu";
import BestGear from "../bestGear/BestGear";

function ProductDetails(props) {
  const orderAmt = {};
  const location = useLocation();
  const { id } = location.state;

  const [productID] = useState(id);

  const [counter, setCounter] = useState(0);

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
      id: productID,
      productName: data[productID].name,
      image: data[productID].cartImage,
      cartName: data[productID].cartName,
      price: data[productID].price,
      quantity: counter,
    };
    localStorage.setItem("orderSummary", JSON.stringify(orderSummary));
  }
  return (
    <div className={classes.container}>
      <Categories
        isNewProduct={data[productID].new}
        categoryName={data[productID].category}
        image={data[productID].image.mobile}
        mobileImage = {data[productID].image.mobile}
        tabletImage = {data[productID].image.tablet}
        desktopImage = {data[productID].image.desktop}
        productName={data[productID].name}
        text={data[productID].description}
      />
      <div className={classes.productDetailsSection}>
        <h6> &#8364; {data[productID].price.toLocaleString()}</h6>

        <div className={classes.orderRow}>

          <div className={classes.adjustQuantity}>          <button className={classes.signButton} onClick={() => moveDown()}>
            -
          </button>
          <textarea
            className={classes.quantity}
            readOnly
            value={counter}
          ></textarea>
          <button onClick={() => moveUp()} className={classes.signButton}>
            +
          </button>{" "}
          </div>

          <button
            className={`${typography.link} ${typography.white100} ${classes.addToCart}`}
            onClick={updateOrderAmt}
          >
            Add to Cart
          </button>
        </div>

        <div className={classes.features}>
          <h3 className={classes.title}>features</h3>

          <p
            className={`${typography.textContent} ${typography.alignLeft} ${typography.black50} `}
          >
            {data[productID].features}
          </p>

          <div className={classes.inTheBox}>
            <h3 className={classes.title}>in the box</h3>

            <ul>
              {data[productID].includes.map((included, index) => (
                <li
                  className={`${typography.textContent} ${typography.black50} ${typography.alignLeft} ${classes.whatsIncluded} `}
                  key={index}
                >
                  {" "}
                  <span className={classes.quantityInBox}>
                    {" "}
                    {included.quantity}x
                  </span>
                  {included.item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <DetailedImages
          image1={data[productID].gallery.first.mobile}
          image2={data[productID].gallery.second.mobile}
          image3={data[productID].gallery.third.mobile}
        />
      </div>

      <h3 className={` ${typography.alignCenter} ${classes.title2}`}>
        You may also like
      </h3>

      {data[productID].others.map((other, index) => (
        <Others
          key={index}
          image={other.image.mobile}
          productName={other.name}
          id={other.id}
        />
      ))}
      <Menu/>
      <BestGear/>
    </div>
  );
}

export default ProductDetails;
