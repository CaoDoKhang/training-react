import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import Button from "../../Common/Button";
import Card from "../../Common/Card";
import classes from "./Item.module.css";

function Item(props) {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: 1,
    });
  };

  const price = `$${Number(props.price).toFixed(2)}`;
  return (
    <li className={classes.item}>
      <Card>
        <img src={props.image} />
        <div className={classes.desbox}>
          <h3>{props.name}</h3>
          <div className={classes.price}>{price}</div>
        </div>
        <div className={classes.action}>
          <Button onClick={addToCartHandler}>Add to cart</Button>
        </div>
      </Card>
    </li>
  );
}

export default Item;
