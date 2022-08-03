import React from "react";
import classes from "./Task.module.css";
import TasksList from "./TasksList";

const Task = (props) => {
  return (
    <div className={classes.task}>
      <TasksList items={props.items} />
    </div>
  );
};

export default Task;
