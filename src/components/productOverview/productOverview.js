import classes from "./productOverview.module.css";
import data from "../../data.json";
import { useState, useEffect } from "react";
import typography from "../../components/typography.module.css";
import linkStyle from "../../components/LinkStyles.module.css";
import PriceAndQuantities from "../productdetails/PriceAndQuantities";
import { Link } from "react-router-dom";

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
    desktop: data[productID].image.desktop,
  };

  const [imgSource, setImgSource] = useState(overviewImgSource);

  useEffect(() => {
    isProductOverview
      ? setImgSource(overviewImgSource)
      : setImgSource(detailedImgSource);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div
        className={
          isProductOverview
            ? `${classes.category}`
            : `${classes.categoryDetailed}`
        }
      >
        <div
          className={
            isProductOverview
              ? `${classes.imgContainer}`
              : `${classes.imgContainerDetailed}`
          }
        >
          <img
            className={classes.image}
            src={window.location.origin + `${imgSource.wide}`}
            srcSet={
              window.location.origin +
              `${imgSource.mobile} 759w, ${imgSource.tablet} 1399w, ${imgSource.desktop} 1400w`
            }
            alt={""}
          />
        </div>

        <div
          className={
            isProductOverview
              ? `${classes.textContainer}`
              : `${classes.textContainerDetailed}`
          }
        >
          {isNewProduct && (
            <div
              className={`${typography.overline} ${typography.orange} ${
                isProductOverview
                  ? `${classes.newProduct}`
                  : `${classes.newProductDetailed}`
              }`}
            >
              new product
            </div>
          )}
          <h2
            className={` ${typography.alignCenter}  ${
              isProductOverview
                ? `${classes.productName}`
                : `${classes.productNameDetailed}`
            }`}
          >
            {data[productID].name}
          </h2>

          <p
            className={`${typography.textContent} ${typography.black50} ${classes.textContentSpacing}`}
          >
            {data[productID].description}
          </p>

          {isProductOverview && (
          
              <Link
           
                to={{
                  pathname:
                    "/productdetails/ProductDetails/" + data[productID].id,
                }}
                className={`${typography.link} ${typography.white100}`}
              >  <div
              className={`${linkStyle.link} ${linkStyle.orange} ${linkStyle.linkLeft}`}
            >
                see product </div>
              </Link>
           
          )}

          {!isProductOverview && <PriceAndQuantities productID={productID} />}
        </div>
      </div>
    </div>
  );
}

export default ProductOverview;
