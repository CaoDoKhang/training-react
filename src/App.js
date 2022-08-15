import React, { useEffect, useState } from "react";
import Body from "./layout/Body";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";

function App() {
  const [taskData, setTaskData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/dummy")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTaskData(data);
      });
  }, []);

  const onAddTaskHandler = (task) => {
    setTaskData((prevTasks) => [task, ...prevTasks]);
  };

  const onSaveFilterStatusHandler = (filterStatus) => {
    const filterData = filterStatus;
    console.log(filterData);
  };

  return (
    <div>
      <Header />
      <Sidebar onSaveFilterStatus={onSaveFilterStatusHandler} />
      {taskData && <Body items={taskData} onAddTask={onAddTaskHandler}></Body>}
    </div>
  );
}

export default App;
