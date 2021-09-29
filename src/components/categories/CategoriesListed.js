import classes from "./CategoriesListed.module.css";
import data from "../../data.json";
import { useEffect, useState } from "react";
import Categories from "./Categories";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import typography from "../../components/typography.module.css";
import linkStyle from "../../components/LinkStyles.module.css";


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
        <h2 className={`${typography.white100} ${classes.categoryName}`}>{category}</h2>

      {dataToDisplay.map((data, index) => (
        <div>
          <Categories
            key={data.id}
            id={data.id}
            isNewProduct={data.new}
            categoryName={data.category}
            image={data.categoryImage.mobile}
            productName={data.name}
            text={data.description}
          />

          <div className = {`${linkStyle.link} ${linkStyle.orange}`}>

          <Link
            key={index}
            to={{
              pathname: "/productdetails/ProductDetails",
              state: { id: data.id },
            }}
            className={`${typography.link} ${typography.white100}`}
          >
            
            see product
          </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CategoriesListed;
