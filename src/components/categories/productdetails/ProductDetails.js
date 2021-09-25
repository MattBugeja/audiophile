import Categories from "../Categories";
import classes from "./productDetails.module.css";
import data from "../data.json";
import { useState } from "react";

import DetailedImages from "./DetailedImages";
import Others from "./Others";
import { useLocation } from "react-router";


function ProductDetails(props) {

const location= useLocation()

const {id} = location.state


  const [productID, setProductID] = useState(id);

  return (
    <div>
      <Categories
        isNewProduct={data[productID].new}
        categoryName={data[productID].category}
        image={data[productID].categoryImage.mobile}
        productName={data[productID].name}
        text={data[productID].description}
      />
      <div className={classes.productDetailsSection}>
        <p>$ {data[productID].price}</p>

        <div>num and add to cart</div>

        <div className={classes.features}>
          <h1 className={classes.title}>features</h1>

          <p className={classes.text}>{data[productID].features}</p>

          <div className={classes.inTheBox}>
            <h1 className={classes.title}>in the box</h1>

            <ul>
              {data[productID].includes.map((included, index) => (
                <li className={classes.whatsIncluded} key={index}>
                  {" "}
                  <span className={classes.quantity}>
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

      <h1 className={classes.title2}>You may also like</h1>

      {data[productID].others.map((other,index) => (
        <Others key = {index} image={other.image.mobile} productName={other.name} id={other.id}/>
      ))}
    </div>
  );
}

export default ProductDetails;
