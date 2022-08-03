import React from "react";
import TaskItem from "./TaskItem";
import classes from "./TasksList.module.css";

const TasksList = (props) => {
  return (
    <ul className={classes.tasks_list}>
      {props.items.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          creator={task.creator}
          status={task.status}
          description={task.description}
        />
      ))}
    </ul>
  );
};

export default TasksList;
