import React from 'react'
import Timer from './components/Timer'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import GetSinglePost from './components/GetSinglePost'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Timer/>} />
      <Route path='/edit' element = {<GetSinglePost/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App