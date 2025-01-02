import { useState } from "react";

import tasks from "./assets/tasks.json";

function App() {
  const [task, setTask] = useState("");
  const [reason, setReason] = useState("");

  const onButtonClick = (e) => {
    const selectedTask = tasks[Math.floor(Math.random() * tasks.length) + 1];
    console.log(selectedTask);
    setTask(selectedTask.task);
    setReason(selectedTask.reason);
  };

  return (
    <>
      <div>
        <button onClick={onButtonClick}>추천받기</button>
        <div className="task">{task}</div>
        <div className="reason">{reason}</div>
      </div>
    </>
  );
}

export default App;
