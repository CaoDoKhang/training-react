import React from "react";
import "./Task.css";
import TasksList from "./TasksList";

const Task = (props) => {
  return (
    <div className="task">
      <TasksList items={props.items} />
    </div>
  );
};

export default Task;
