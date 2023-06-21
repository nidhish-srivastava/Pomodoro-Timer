import React, { useState } from "react";
import { useTimerHook } from "../context";
import { useNavigate } from "react-router-dom";

const GetSinglePost = () => {
  const { allData, taskId, taskIndex, setAllData } = useTimerHook();
  const navigate = useNavigate();
  const [input, setInput] = useState(allData[taskIndex].task);

  /*
    //* This function i created,coz there was some wierd thing happening,i.e.,an empty task was created whenever i updated the task(that task had task string inside array,but no id,wierd stuff happening)
    const EmptyTaskDelete = () =>{
      const filter = allData.filter(e=>e.id!="")
      setAllData(filter)
    }*/

  const updateTask = () => {
    /* if(taskId==allData[taskIndex].id){
        setAllData((e)=>{
          return(
            [...e,e[taskIndex].task = input] We shud avoid this,we shud map method,then check that index with some condition(then update it)
            )
        }
        )
        */
    setAllData(
      allData.map((e) => {
        if (e.id == taskId) {
          return { ...e, task: input };
        }
        return e;
      })
    );
    setInput("");
    console.log(allData);
    navigate("/");
    //  EmptyTaskDelete()
  };

  const deleteTask = async () => {
    const filter = () => allData.filter((e) => e.id != taskId);
    setAllData(filter);
    navigate("/");
    console.log("deleted");
  };

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default GetSinglePost;
