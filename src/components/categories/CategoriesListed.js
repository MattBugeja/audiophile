import classes from "./CategoriesListed.module.css";
import data from "../../data.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import typography from "../../components/typography.module.css";
import Menu from "../menu/Menu";
import BestGear from "../bestGear/BestGear";
import ProductOverview from "../productOverview/productOverview";

function CategoriesListed() {
  let params = useParams();

  const [category] = useState(params.id);

  const [dataToDisplay, setDataToDisplay] = useState([]);

  useEffect(() => {
    const filterCategory = () => {
      const categoryToDisplay = data.filter(
        (array) => array.category === `${category}`
      );
      setDataToDisplay(categoryToDisplay);
    };
    filterCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <div>
      <h2
        className={`${typography.white100} ${typography.alignCenter} ${classes.categoryName}`}
      >
        {category}
      </h2>

      {dataToDisplay.map((data, index) => (
        <div key={data.id}>
          <ProductOverview productID={data.id} isProductOverview={true} />
        </div>
      ))}

      <Menu />
      <BestGear />
    </div>
  );
}
export default CategoriesListed;
