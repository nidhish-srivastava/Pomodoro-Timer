import { createContext, useContext,useState } from "react";


const TimerContext = createContext()

export const useTimerHook = () => useContext(TimerContext)

export const TimerContextProvider = ({children}) =>{
  const [allData, setAllData] = useState(JSON.parse(localStorage.getItem("taskArray")) || [])
  const [taskId,setTaskId] = useState(0)
  const [taskIndex,setTaskIndex] = useState(0)

    const final = {
        allData,setAllData ,
        taskId,setTaskId,
        taskIndex,setTaskIndex
    }
    return(
        <TimerContext.Provider value={final} >
               {children}
        </TimerContext.Provider>
    )
}