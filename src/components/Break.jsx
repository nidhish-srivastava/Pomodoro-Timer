import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Break = () => {
  const [minutes,setMinutes] = useState("5")
  const [seconds,setSeconds] = useState("00")
  const [id,setId] = useState(null)
  const navigate = useNavigate()

  if(seconds<0){
       setSeconds(59)
       setMinutes(e=>e-1)
  }
  useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(e=>e-1)
      }, 1000);
      setId(interval)
  }, [])  // We dont want it to run again if we pass seconds in dependency coz seconds is already changing,we dont need it as depen.

  useEffect(()=>{
     if(minutes==0 && seconds=="00"){
       setMinutes(5)
       setSeconds("00")
       clearInterval(id)
       navigate('/')
     }
  },[minutes,seconds])
  
  return (
    <div className='break-page'>
      <h2>Enjoy your 5 min Break</h2>
      <div className="main-break-timer">
      <div className="break-timer-container">
             {minutes} : {seconds}
      </div>
      </div>

    </div>
  )
}

export default Break