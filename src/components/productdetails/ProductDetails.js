import classes from "./productDetails.module.css";
import data from "../../data.json";
import { useState } from "react";
import DetailedImages from "./DetailedImages";
import Others from "./Others";
import { useLocation } from "react-router";
import typography from "../../components/typography.module.css";
import Menu from "../menu/Menu";
import BestGear from "../bestGear/BestGear";
import ProductOverview from "../productOverview/productOverview";

function ProductDetails(props) {
  const location = useLocation();
  const { id } = location.state;

  const [productID] = useState(id);

  return (
    <div className={classes.container}>
      <ProductOverview
        key={data.id}
        productID={productID}
        isProductOverview={false}
      />

      <div className={classes.productDetailsSection}>
        <div className={classes.features}>
          <h3 className={classes.title}>features</h3>

          <p
            className={`${typography.textContent} ${typography.alignLeft} ${typography.black50} `}
          >
            {data[productID].features}
          </p>

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

      <h3 className={` ${typography.alignCenter} ${classes.title2}`}>
        You may also like
      </h3>

      <section className={classes.others}>

      {data[productID].others.map((other, index) => (
        <Others
          key={index}
          image={other.image.tablet}
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
