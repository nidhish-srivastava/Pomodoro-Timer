import React, { useEffect, useState } from "react";
import { useTimerHook } from "../context";

const Create = () => {
  const [task, setTask] = useState("");
  const {allData,setAllData} = useTimerHook()


  const createTaskHandler =  () => {
    if(task.trim()==="") return

      const newTask = {
        task : task,
        id : Date.now()
      }
      setAllData([...allData,newTask])
      setTask("")

      window.localStorage.setItem("taskArray",JSON.stringify(allData))
  };

  // useEffect(()=>{

  // },)



 

  return (
    <div className="input-container">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      &nbsp;
      &nbsp;
      <button onClick={createTaskHandler}>Create Task</button>
    </div>
  );
};

export default Create;
