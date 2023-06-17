import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TimerContextProvider } from './context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <TimerContextProvider>
    <App />
    </TimerContextProvider>
)
