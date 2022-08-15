import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddTask.module.css";

const AddTask = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredCreator, setEnteredCreator] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [error, setError] = useState();
  const [isAddTask, setIsAddTask] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const creatorChangeHandler = (event) => {
    setEnteredCreator(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const addTaskHandler = (event) => {
    event.preventDefault();
    if (
      enteredTitle.trim().length === 0 ||
      enteredCreator.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Enter a valid title and creaor (non-empty values).",
      });
      return;
    }

    const taskData = {
      title: enteredTitle,
      creator: enteredCreator,
      description: enteredDescription,
    };

    props.onSaveTaskData(taskData);

    setEnteredTitle("");
    setEnteredCreator("");
    setEnteredDescription("");
    setIsAddTask(true);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      {isAddTask && <Navigate to="/alltask" replace={true} />}
      <Card className={classes.input}>
        <form onSubmit={addTaskHandler}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
          <label htmlFor="creator">Creator</label>
          <input
            id="creator"
            type="text"
            value={enteredCreator}
            onChange={creatorChangeHandler}
          />
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            value={enteredDescription}
            onChange={descriptionChangeHandler}
          />
          <Button className={classes.button} type="submit">
            Add
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddTask;
