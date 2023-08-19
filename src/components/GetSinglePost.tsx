import { useTimerContext } from "../context"
import { useNavigate } from "react-router-dom";
import {useState} from 'react'

function GetSinglePost() {
  const {allData,taskId,taskIndex,setAllData} = useTimerContext()
  const navigate = useNavigate()
  const [input,setInput] = useState(allData[taskIndex].task)
  const updateTask = () =>{
    setAllData(
      allData.map(
        (e)=>{
          if(e.id == taskId){
            return {...e,task : input}
          }
          return e
        }
      )
    )
    setInput("")
    navigate("/")
  }
  const deleteTask = () =>{
    const filter = allData.filter(e=>e.id!==taskId)
    setAllData(filter)
    navigate("/")
  }
  return (
    <main className="edit-container">
      <h2 className="edit-label">Edit your Task</h2>
      <div className="single-task-card">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="update-btn" onClick={updateTask}>
          Update
        </button>
        <span className="delete-icon" onClick={deleteTask}>
          <i className="fa-solid fa-trash"></i>
        </span>
      </div>
    </main>
  )
}

export default GetSinglePost