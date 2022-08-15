import React, { useState } from "react";
import classes from "./SidebarItem.module.css";

const SidebarItem = (props) => {
  const filterHandler = () => {
    if (props.type === "new") props.onSaveFilter(props.type);
    if (props.type === "doing") props.onSaveFilter(props.type);
    if (props.type === "done") props.onSaveFilter(props.type);
  };
  return (
    <div className={`${classes.sidebar_item} ${props.onSaveFilter}`}>
      <p onClick={filterHandler}>{props.item}</p>
    </div>
  );
};

export default SidebarItem;
