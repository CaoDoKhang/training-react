import React from "react";
import TaskItem from "./TaskItem";
import "./TasksList.css";

const TasksList = (props) => {
  return (
    <ul className="tasks-list">
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
