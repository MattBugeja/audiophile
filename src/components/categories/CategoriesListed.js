import classes from "./CategoriesListed.module.css";
import data from "./data.json";
import { useEffect, useState } from "react";
import Categories from "./Categories";


function CategoriesListed() {
  const [category, setCategory] = useState("");

  const [dataToDisplay, setDataToDisplay] = useState([]);

  const test = () => {
    console.log(data[0]["category"]);

    const categoryToDisplay = data.filter(
      (array) => array.category === `${category}`
    );

    console.log(categoryToDisplay);

    setDataToDisplay(categoryToDisplay);
  };

  function changeState() {
    setCategory("headphones");
  }

  useEffect(() => {
    test();
  }, [category]);

  return (
    <div>
      <header className={classes.header}>    <h1 className={classes.categoryName}>{category}</h1></header>
  
    

      {dataToDisplay.map((data) => (
        <Categories
          key={data.id}
          isNewProduct={data.new}
          categoryName={data.category}
          image={data.categoryImage.mobile}
          productName={data.name}
          text={data.description}
        />
      ))}
    </div>
  );
}
export default CategoriesListed;

// data.categoryImage.mobile.replace("","")
