import { useState } from "react"
import { useTimerContext } from "../context"

function Create() {
  const [task,setTask] = useState("")
  const {setAllData} = useTimerContext()

  const createTaskHandler = () =>{
     if(task.trim()=="") return
      const obj = {
       task : task,
       id : Date.now()
      }
      setAllData(e=>[...e,obj])
  }
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
  )
}

export default Create