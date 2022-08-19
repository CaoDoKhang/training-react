import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Button from "../Common/Button";
import Card from "../Common/Card";
import ErrorModal from "../Common/ErrorModal";
import classes from "./AddForm.module.css";

const AddForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredImage, setEnteredImage] = useState("");
  const [error, setError] = useState();
  const [isAddTask, setIsAddTask] = useState(false);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const imageChangeHandler = (event) => {
    setEnteredImage(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const addTaskHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredPrice.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Enter a valid title and creaor (non-empty values).",
      });
      return;
    }

    const itemData = {
      name: enteredName,
      price: enteredPrice,
      image: enteredImage,
      id: Math.random().toString(),
      amount: 1,
    };

    props.onAddItemData(itemData);

    setEnteredName("");
    setEnteredPrice("");
    setEnteredImage("");
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
      {isAddTask && <Navigate to="/products" replace={true} />}
      <div className={classes.input}>
        <form onSubmit={addTaskHandler}>
          <h2>Add New Product</h2>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            onChange={nameChangeHandler}
            value={enteredName}
          />
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="text"
            value={enteredImage}
            onChange={imageChangeHandler}
          />
          <Button className={classes.button} type="submit">
            Add
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
