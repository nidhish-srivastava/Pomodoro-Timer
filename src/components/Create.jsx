import { useTimerHook } from "../context";
import { useState } from "react";

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
    };
    
   


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
