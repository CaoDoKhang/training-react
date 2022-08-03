import React, { useState } from "react";
import Button from "../UI/Button";
import classes from "./TaskItem.module.css";
import Card from "../UI/Card";

const TaskItem = (props) => {
  const upperFirstLetter = (txt) => txt[0].toUpperCase() + txt.slice(1);
  const status = upperFirstLetter(props.status);

  const [btnState, setBtnState] = useState("Start");
  const [statusState, setStatusState] = useState(status);
  const [statusStyle, setStatusStyle] = useState({
    color: "#40c057",
  });

  const changeStateHandler = () => {
    if (btnState === "Start") {
      setBtnState("Done");
      setStatusState("Doing");
      setStatusStyle({
        color: "orange",
      });
    }

    if (btnState === "Done") {
      setBtnState("Renew");
      setStatusState("Done");
      setStatusStyle({ color: "#6741d9" });
    }

    if (btnState === "Renew") {
      setBtnState("Start");
      setStatusState("New");
      setStatusStyle({ color: "#40c057" });
    }
  };

  return (
    <li>
      <Card className={classes.task_item}>
        <div className={classes.task_item__name}>
          <h2>Title: {props.title}</h2>
          <p>Creator: {props.creator}</p>
          <p className={classes.status} style={statusStyle}>
            Status: {statusState}
          </p>
        </div>
        <div className={classes.task_item__description}>
          <h2>
            Description:
            <p>{props.description}</p>
          </h2>
        </div>
        <Button className={classes.button} onClick={changeStateHandler}>
          {btnState}
        </Button>
      </Card>
    </li>
  );
};

export default TaskItem;
