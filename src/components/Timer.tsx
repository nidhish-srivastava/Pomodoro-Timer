import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Timer() {
  const navigate = useNavigate()
  const [toggleState, setToggleState] = useState(false);
  const [width,setWidth]=  useState("")
  const [id, setId] = useState(0);

  // const [taskAssignState,setTaskAssignState] = useState("")
  const [btnText, setBtnText] = useState("Start");
  const [timerOverMessage,setTimerOverMessage]=  useState("")

  const [seconds,setSeconds] = useState<string | number>("00")
  const [minutes,setMinutes] = useState(25)

  
  const startHandler = () => {
    if(seconds == "00"){
      setMinutes(24)
      setSeconds(59)
    }
    const intervalId = setInterval(() => {
      setSeconds((e) => Number(e) - 1);
    }, 1000);
    setToggleState((e) => !e);
    setBtnText("Pause");
    setId(intervalId);
    // setTaskAssignState(() => `Task : ${allData[0]?.task}`);
  };

  const pauseHandler = () => {
    clearInterval(id);
    setToggleState((e) => !e);
    setBtnText("Start");
  };

  const restartHandler = () => {
    clearInterval(id);
    setWidth("100%");
    setMinutes(25);
    setBtnText("Start");
    setSeconds("00"); //* Again setting it to string
  };

  useEffect(() => {
    let per = (Number(seconds) / 60) * 100;
    if (per === 0) per = 100;
    setWidth(() => `${per}%`);
  }, [seconds]);

  useEffect(() => {
    if (minutes == 0 && seconds == "00") {
      console.log("timer over");
      setTimerOverMessage("Timer is over,is your task completed");
      setMinutes(25);
      setSeconds("00");
      clearInterval(id);
      navigate('/break')
    }
  }, [minutes, seconds]);

  return (
      <div className={ !toggleState ? "timer-parent-component" : "timer-parent-component-2"}>
         <div className="timer-container">
          <div className="timer-bar" style={{width,"marginBottom" : "3rem"}}>
            {/* {seconds === 0 ? 60 : seconds} */}
          </div>
          <div className="card">
          {/* {taskAssignState} */}
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
    </div>
    </div>
  )
}

export default Timer