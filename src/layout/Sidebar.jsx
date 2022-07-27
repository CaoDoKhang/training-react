import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-actions">
        <button>Add Task</button>
        <button>New Task</button>
        <button>Doing Task</button>
        <button>Done Task</button>
      </div>
    </div>
  );
};

export default Sidebar;
