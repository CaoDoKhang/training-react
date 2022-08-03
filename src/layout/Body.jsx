import React from "react";
import { Route } from "react-router-dom/cjs/react-router-dom";
import AddTask from "../components/AddTask";
import Task from "../components/Task";
import classes from "./Body.module.css";

const Body = (props) => {
  const onSaveTaskDataHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: Math.random().toString(),
      status: "new",
    };
    console.log(taskData);
    props.onAddTask(taskData);
  };
  return (
    <div className={classes.body}>
      <Route path="/task">
        <Task items={props.items} />
      </Route>
      <Route path="/add">
        <AddTask onSaveTaskData={onSaveTaskDataHandler} />
      </Route>
    </div>
  );
};

export default Body;
