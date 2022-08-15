import React from "react";
// import { Route } from "react-router-dom/cjs/react-router-dom";
import { Route, Routes } from "react-router-dom";
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

  // const filteredNewTask = props.items.filter((task) => task.status === "new");

  return (
    <div className={classes.body}>
      <Routes>
        <Route path="/alltask" element={<Task items={props.items} />} />
        <Route
          path="/add"
          element={<AddTask onSaveTaskData={onSaveTaskDataHandler} />}
        />
      </Routes>
    </div>
  );
};

export default Body;
