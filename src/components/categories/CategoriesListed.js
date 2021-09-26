import classes from "./CategoriesListed.module.css";
import data from "../../data.json";
import { useEffect, useState } from "react";
import Categories from "./Categories";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function CategoriesListed(props) {
  const location = useLocation();

  const { id } = location.state;

  const [category, setCategory] = useState(id);

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
      <header className={classes.header}>
        {" "}
        <h1 className={classes.categoryName}>{category}</h1>
      </header>

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

          <Link
            key={data.index}
            to={{
              pathname: "/categories/productdetails/ProductDetails",
              state: { id: data.id },
            }}
            className={classes.btn}
          >
            see product
          </Link>
        </div>
      ))}
    </div>
  );
}
export default CategoriesListed;
