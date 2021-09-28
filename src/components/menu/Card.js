import classes from "./Card.module.css";
import { Link } from "react-router-dom";
import typography from "../../components/typography.module.css";

function Card(props) {
  const id = props.id;

  return (
    <div className={classes.card}>
      <img className={classes.image} src={props.source} />

      <h6 className={classes.productName}>{props.productName}</h6>

      <Link
        to={{
          pathname: "/categories/CategoriesListed",
          state: { id: props.id },
        }}
        className={`${typography.link} ${typography.black50} ${classes.shop}`}
      >
        shop
      </Link>
    </div>
  );
}

export default Card;
