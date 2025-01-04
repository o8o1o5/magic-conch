import { useState } from "react";

import tasks from "../../assets/tasks.json";
import conch from "../../assets/기본소라 2.png";
import write from "../../assets/write.png";

export default function Main() {
  const [task, setTask] = useState("");
  const [reason, setReason] = useState("");

  const onButtonClick = (e) => {
    const selectedTask = tasks[Math.floor(Math.random() * tasks.length)];
    console.log(selectedTask);
    setTask(selectedTask.task);
    setReason(selectedTask.reason);
  };

  return (
    <div className="mt-[95px]">
      <img src={conch} alt="conch" className="mb-[52px]"></img>
      <div className="flex flex-col gap-[5px] pl-[43px] pr-[43px]">
        <div className="ml-[15px] font-[Inter] text-[15px] text-[#422D0F]">
          고민해소라
        </div>
        <div className="flex h-[54px] items-center justify-between rounded-[10px] border border-r-2 border-[#9B8567] pl-[16px] pr-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <div className="font-[Intel] text-[15px] text-[#422D0F]">
            너의 고민을 말해봐소!
          </div>
          <button>
            <img src={write} alt="write" className="h-[24px] w-[24px]"></img>
          </button>
        </div>
      </div>
    </div>
  );
}
