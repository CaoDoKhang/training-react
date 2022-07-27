import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredCreator, setEnteredCreator] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const creatorChangeHandler = (event) => {
    setEnteredCreator(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const taskData = {
      title: enteredTitle,
      creator: enteredCreator,
      description: enteredDescription,
    };

    props.onSaveTaskData(taskData);

    setEnteredTitle("");
    setEnteredCreator("");
    setEnteredDescription("");
    props.onCancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-task__modal">
        <div className="new-task__controls">
          <div className="new-task__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-task__control">
            <label>Creator</label>
            <input
              type="text"
              value={enteredCreator}
              onChange={creatorChangeHandler}
            />
          </div>
          <div className="new-task__control">
            <label>Description</label>
            <input
              type="text"
              value={enteredDescription}
              onChange={descriptionChangeHandler}
            />
          </div>
        </div>
        <div className="new-task__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Task</button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
