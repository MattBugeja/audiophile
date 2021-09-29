import CartItem from "./CartItem"
import classes from "./CartItemsListed.module.css"
import typography from "../../components/typography.module.css";
import linkStyle from "../../components/LinkStyles.module.css";

function CartItemsListed(props){

    const orderSummary = props.orderSummary

return(


<div>
{Object.keys(orderSummary).map((item, index) => (
    <div key={index}>
      <CartItem
        orderSummary={orderSummary[item]}
        change={props.change}
        isSummary = {props.isSummary}
      />
    </div>
  ))}

<div className={classes.orderTotal}>
  <p className={`${classes.total} ${typography.textContent} ${typography.black50}`}>total</p>

  <h6>${(props.total).toLocaleString()}</h6>
</div>

</div>

)}

export default CartItemsListed