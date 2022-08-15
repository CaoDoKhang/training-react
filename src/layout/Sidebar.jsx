import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarItem from "../components/SidebarItem";
import classes from "./Sidebar.module.css";

const Sidebar = (props) => {
  const [filtered, setFitered] = useState("all");

  const onSaveFilterHandler = (type) => {
    setFitered(type);
  };

  return (
    <div className={classes.sidebar}>
      <Link style={{ textDecoration: "none" }} to="/alltask">
        <SidebarItem item="All Task" />
      </Link>
      <SidebarItem
        type="new"
        onSaveFilter={onSaveFilterHandler}
        item="New Task"
      />
      <SidebarItem
        type="doing"
        onSaveFilter={onSaveFilterHandler}
        item="Doing Task"
      />
      <SidebarItem
        type="done"
        onSaveFilter={onSaveFilterHandler}
        item="Done Task"
      />
    </div>
  );
};

export default Sidebar;
