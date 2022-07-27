import React, { useState } from "react";
import TaskForm from "../components/NewTask/TaskForm";
import Search from "../components/Search/Search";
import "./Header.css";

const Header = (props) => {
  const [isCreating, setIsCreating] = useState(false);

  const startCreatingHandler = () => setIsCreating(true);
  const stopCreatingHandler = () => setIsCreating(false);

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
    <div className="header-container">
      {!isCreating && (
        <div className="header">
          <button onClick={startCreatingHandler}>Create New Task</button>
          <Search />
        </div>
      )}
      {isCreating && (
        <div>
          <div className="header">
            <button onClick={startCreatingHandler}>Create New Task</button>
            <Search />
          </div>
          <TaskForm
            onSaveTaskData={onSaveTaskDataHandler}
            onCancel={stopCreatingHandler}
          />
          <div className="overlay"></div>
        </div>
      )}
    </div>
  );
};

export default Header;
