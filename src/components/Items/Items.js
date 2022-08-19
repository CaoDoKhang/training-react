import React from "react";
import AvailableItem from "./AvailableItem";
import classes from "./Items.module.css";

function Items(props) {
  return (
    <div className={classes.items}>
      <AvailableItem item={props.item} />
    </div>
  );
}

export default Items;
