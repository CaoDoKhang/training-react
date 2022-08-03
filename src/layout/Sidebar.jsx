import React from "react";
import { Link } from "react-router-dom";
import SidebarItem from "../components/SidebarItem";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <Link style={{ textDecoration: "none" }} to="/task">
        <SidebarItem item="All Task" />
      </Link>
      <SidebarItem item="New Task" />
      <SidebarItem item="Doing Task" />
      <SidebarItem item="Done Task" />
    </div>
  );
};

export default Sidebar;
