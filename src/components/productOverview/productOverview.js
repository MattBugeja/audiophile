import classes from "./productOverview.module.css";
import data from "../../data.json";
import { useState, useEffect } from "react";
import typography from "../../components/typography.module.css";
import PriceAndQuantities from "../productdetails/PriceAndQuantities";

function ProductOverview(props) {
  const [productID] = useState(props.productID);
  const [isNewProduct] = useState(data[productID].new);
  const [isProductOverview] = useState(props.isProductOverview);

  const overviewImgSource = {
    mobile: data[productID].categoryImage.mobile,
    tablet: data[productID].categoryImage.tablet,
    desktop: data[productID].categoryImage.desktop,
  };

  const detailedImgSource = {
    mobile: data[productID].image.mobile,
    tablet: data[productID].image.tablet,
    desktop: data[productID].image.desktop
  };

  const [imgSource, setImgSource] = useState(overviewImgSource);

  useEffect(() => {
    isProductOverview
      ? setImgSource(overviewImgSource)
      : setImgSource(detailedImgSource);
  }, []);

  return (
    <div>
      <div className={isProductOverview ? `${classes.category}` : `${classes.categoryDetailed}`}>
        <div className={isProductOverview ? `${classes.imgContainer}` : `${classes.imgContainerDetailed}`}>
          
            <img
            className={classes.image}
            src={window.location.origin + `${imgSource.tablet}`}
            srcSet={
              window.location.origin +
              `${imgSource.tablet} 759w, ${imgSource.tablet} 1280w, ${imgSource.desktop} 1500w`
            }
            alt={""}
          />
        </div>

        <div className={isProductOverview ? `${classes.textContainer}` : `${classes.textContainerDetailed}`}>
          {isNewProduct && (
            <div
              className={`${typography.overline} ${typography.orange} ${isProductOverview ? `${classes.newProduct}` : `${classes.newProductDetailed}`}`}
            >
              new product
            </div>
          )}
          <h4 className={` ${typography.alignCenter}  ${isProductOverview ? `${classes.productName}` : `${classes.productNameDetailed}`}`}>
            {data[productID].name}
          </h4>

          <p className={`${typography.textContent} ${typography.black50}`}>
            {data[productID].description}
          </p>

          {!isProductOverview && <PriceAndQuantities productID = {productID}/>}

         
        </div>
      </div>
    </div>
  );
}

export default ProductOverview;
