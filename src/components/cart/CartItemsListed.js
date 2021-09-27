import CartItem from "./CartItem"
import classes from "./CartItemsListed.module.css"

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
  <p>total</p>

  <p>${props.total}</p>
</div>

</div>

)}

export default CartItemsListed