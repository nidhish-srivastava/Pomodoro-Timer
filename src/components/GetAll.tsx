import { useTimerContext } from "../context";
import { useNavigate } from "react-router-dom";

function GetAll() {
  const { allData, setTaskId, setTaskIndex } = useTimerContext();
  const navigate = useNavigate();
  const getPostHandler = (taskId : number, taskIndex : number) => {
    setTaskId(taskId);
    setTaskIndex(taskIndex);
    navigate("/edit");
  };
  return (
    <main className="task-container">
      {allData.map((e, i) => {
        return (
          <div className="task-card" key={i}>
            <div className="task">{e.task}</div>
            <span className="open-icon" onClick={() => getPostHandler(e.id, i)}>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </div>
        );
      })}
    </main>
  );
}

export default GetAll;
