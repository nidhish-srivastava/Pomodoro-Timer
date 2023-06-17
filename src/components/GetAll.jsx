import React, { useEffect } from "react";
import { useTimerHook } from "../context";
import {  useNavigate } from "react-router-dom";

const GetAll = () => {
  const {allData,setTaskId,setTaskIndex} = useTimerHook()
  const navigate = useNavigate()
  const getPostHandler = (taskId,taskIndex) =>{
    setTaskId(taskId)
    setTaskIndex(taskIndex)
    navigate('/edit')
 }

 

  return (
    <React.Fragment>
    <main className="task-container">
      {allData.map((e, i) => {
        return (
          <div className="task-card" key={i}>
            <div className="task">
                {e.task}
            </div>
            <span className="open-icon" onClick={()=>getPostHandler(e.id,i)}>
            <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </div>
          )
        })}
    </main>
    </React.Fragment>
  );
};

export default GetAll;
