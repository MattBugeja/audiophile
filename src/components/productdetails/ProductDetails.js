import classes from "./productDetails.module.css";
import data from "../../data.json";
import { useEffect, useState } from "react";
import DetailedImages from "./DetailedImages";
import Others from "./Others";
import { useParams } from "react-router";
import typography from "../../components/typography.module.css";
import Menu from "../menu/Menu";
import BestGear from "../bestGear/BestGear";
import ProductOverview from "../productOverview/productOverview";

function ProductDetails(props) {
  let params = useParams();

  const [productID] = useState(params.id);

  return (
    <div className={classes.container}>
      <ProductOverview
        key={data.id}
        productID={productID}
        isProductOverview={false}
      />
      <div className={classes.productDetailsSection}>
        <div className={classes.features}>
          <div className={classes.textContent}>
            <h3 className={classes.title}>features</h3>
            <p
              className={`${typography.textContent} ${typography.alignLeft} ${typography.black50} `}
            >
              {data[productID].features}
            </p>
          </div>
          <div className={classes.inTheBox}>
            <h3 className={classes.title}>in the box</h3>
            <div>
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
        </div>

        <DetailedImages productID={productID} />
      </div>

      <h3
        className={` ${typography.alignCenter} ${classes.similarProductsTitle}`}
      >
        You may also like
      </h3>

      <section className={classes.similarProducts}>
        {data[productID].others.map((other, index) => (
          <Others
            key={index}
            image={other.image.mobile}
            imgSrcMobile={other.image.mobile}
            imgSrcTablet={other.image.tablet}
            imgSrcDesktop={other.image.desktop}
            productName={other.name}
            id={other.id}
          />
        ))}
      </section>
      <Menu />
      <BestGear />
    </div>
  );
}

export default ProductDetails;
