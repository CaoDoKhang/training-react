import React from "react";
import Button from "../UI/Button";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={classes.containerHeader}>
      <div>
        <Link to="/add">
          <Button className={classes.button_left}>Create New Task</Button>
        </Link>
      </div>
      <div>
        <input type="text" placeholder="Type something to search" />
        <Button className={classes.button_right}>Search</Button>
      </div>
    </div>
  );
};

export default Header;
