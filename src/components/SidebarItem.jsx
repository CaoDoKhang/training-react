import React from "react";
import classes from "./SidebarItem.module.css";

const SidebarItem = (props) => {
  return (
    <div className={classes.sidebar_item}>
      <p>{props.item}</p>
    </div>
  );
};

export default SidebarItem;
