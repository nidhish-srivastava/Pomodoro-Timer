import React, { useEffect, useState } from "react";
import Create from "./Create";
import GetAll from "./GetAll";
import { useTimerHook } from "../context";

function Timer() {
  const [seconds, setSeconds] = useState("00"); //* Keeping it a string,otherwise if number then,0
  const [minutes, setMinutes] = useState(25);
  const [width, setWidth] = useState(null);
  const [toggleState, setToggleState] = useState(false);
  const [id, setId] = useState(null);
  const [btnText, setBtnText] = useState("Start");
  const { allData } = useTimerHook();
  const [timerOverMessage, setTimerOverMessage] = useState("");
  const [taskAssignState, setTaskAssignState] = useState("");

  const startHandler = () => {
    const intervalId = setInterval(() => {
      setSeconds((e) => e - 1);
    }, 1000);
    setToggleState((e) => !e);
    setBtnText("Pause");
    setId(intervalId);
    setTaskAssignState(() => `Task : ${allData[0]?.task}`);
  };

  if (seconds < 0) {
    setSeconds(59);
    setMinutes((e) => e - 1);
  }

  const styles = {
    width,
  };

  const pauseHandler = () => {
    clearInterval(id);
    setToggleState((e) => !e);
    setBtnText("Start");
  };

  useEffect(() => {
    let per = (seconds / 60) * 100;
    if (per === 0) per = 100;
    setWidth(() => `${per}%`);
  }, [seconds]);

  const restartHandler = () => {
    clearInterval(id);
    setWidth("100%");
    setMinutes(25);
    setBtnText("Start");
    setSeconds("00"); //* Again setting it to string
  };

  useEffect(() => {
    if (minutes == 0 && seconds == "00") {
      console.log("timer over");
      setTimerOverMessage("Timer is over,is your task completed");
      setMinutes(25);
      setSeconds("00");
      clearInterval(id);
    }
  }, [minutes, seconds]);

  return (
    <React.Fragment>
      <div className={ !toggleState ? "timer-parent-component" : "timer-parent-component-2"}>
        <div className="timer-container">
          <div className="timer-bar" style={styles}>
            {/* {seconds === 0 ? 60 : seconds} */}
          </div>
        </div>
        <div className="card">
          {taskAssignState}
          <br />
          {timerOverMessage}
          <h2>25 Minutes Timer</h2>
          <h2>
            Timer = {minutes} : {seconds}
          </h2>
          <div>
            {!toggleState ? (
              <button className="btn" onClick={startHandler}>
                {btnText}
              </button>
            ) : (
              <button className="btn" onClick={pauseHandler}>
                {btnText}
              </button>
            )}
            <button onClick={restartHandler} className="btn">
              Restart
            </button>
          </div>
        </div>
        <Create />
        <GetAll />
        
      </div>
    </React.Fragment>
  );
}

export default Timer;
