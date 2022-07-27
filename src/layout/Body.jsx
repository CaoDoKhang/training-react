import React from "react";
import Task from "../components/Task/Task";
import "./Body.css";

const Body = (props) => {
  return (
    <div className="body">
      <Task items={props.items} />
    </div>
  );
};

export default Body;
