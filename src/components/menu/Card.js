import classes from "./Card.module.css";
import { Link } from "react-router-dom";
import typography from "../../components/typography.module.css";

function Card(props) {
  function refresh() {
    window.location.href = `/categories/CategoriesListed/${props.id}`;
  }

  return (
    <div className={`${typography.alignCenter} ${classes.card}`}>
      <img className={classes.image} src={props.source} alt="" />

      <h6 className={classes.productName}>{props.productName}</h6>

      <Link
        to={{
          pathname: "/categories/CategoriesListed/" + props.id,
        }}
        className={`${typography.link} ${typography.black50} ${classes.shop}`}
        onClick={refresh}
      >
        shop
      </Link>
    </div>
  );
}

export default Card;
