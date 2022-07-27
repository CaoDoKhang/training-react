import { useState } from "react";
import Body from "./layout/Body";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";

const dummyData = [
  {
    id: "a1",
    title: "Wake up",
    creator: "Khang",
    status: "new",
    description: "This is a task",
  },
  {
    id: "a2",
    title: "Brush teeth",
    creator: "Tom",
    status: "new",
    description: "This is a task",
  },
  {
    id: "a3",
    title: "Breakfast",
    creator: "Mom",
    status: "new",
    description: "This is a task",
  },
  {
    id: "a4",
    title: "Sleep",
    creator: "Kem",
    status: "new",
    description: "This is a task",
  },
];

function App() {
  const [taskData, setTaskData] = useState(dummyData);
  const onAddTaskHandler = (task) => {
    setTaskData((prevTasks) => [task, ...prevTasks]);
  };

  return (
    <div className="layout">
      <Header onAddTask={onAddTaskHandler} />
      <div className="main">
        <Sidebar />
        <Body items={taskData} />
      </div>
    </div>
  );
}

export default App;
