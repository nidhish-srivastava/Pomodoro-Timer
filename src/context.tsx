import { ReactNode, createContext, useContext,useState } from "react";


type TimerContextProviderProps = {
    children : ReactNode
}

type AllData = {
    task : string
    id : number
}

type TimerContextType = {
  taskId : number
  setTaskId : React.Dispatch<React.SetStateAction<number>>
  taskIndex : number
  setTaskIndex : React.Dispatch<React.SetStateAction<number>>
  allData : AllData[]
  setAllData : React.Dispatch<React.SetStateAction<AllData[]>>
}

const TimerContext = createContext({} as TimerContextType)
export const useTimerContext = () => useContext(TimerContext)
export const TimerContextProvider = ({children} : TimerContextProviderProps) =>{

    const [taskId,setTaskId] = useState(0)
    const [allData,setAllData] = useState<AllData[]>([])
    const [taskIndex,setTaskIndex] = useState(0)
  
    return(
        <TimerContext.Provider value={{
            taskId,setTaskId,
            taskIndex,setTaskIndex,
            allData,setAllData
        }}>
            {children}
        </TimerContext.Provider>
    )
}