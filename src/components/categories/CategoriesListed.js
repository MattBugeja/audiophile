import classes from "./CategoriesListed.module.css";
import data from "../../data.json";
import { useEffect, useState } from "react";
import Categories from "./Categories";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import typography from "../../components/typography.module.css";
import linkStyle from "../../components/LinkStyles.module.css";
import Menu from "../menu/Menu";
import BestGear from "../bestGear/BestGear";
import ProductOverview from "../productOverview/productOverview";

function CategoriesListed(props) {
  const location = useLocation();

  const { id } = location.state;

  const [category] = useState(id);

  const [dataToDisplay, setDataToDisplay] = useState([]);

  const filterCategory = () => {
    const categoryToDisplay = data.filter(
      (array) => array.category === `${category}`
    );

    console.log(categoryToDisplay);

    setDataToDisplay(categoryToDisplay);
  };

  useEffect(() => {
    filterCategory();
  }, [category]);

  return (
    <div>
      <h2
        className={`${typography.white100} ${typography.alignCenter} ${classes.categoryName}`}
      >
        {category}
      </h2>

      {dataToDisplay.map((data, index) => (
        <div>
          <ProductOverview
            key={data.id}
            productID={data.id}
            isProductOverview={true}
          />
        </div>
      ))}

      <Menu />
      <BestGear />
    </div>
  );
}
export default CategoriesListed;
