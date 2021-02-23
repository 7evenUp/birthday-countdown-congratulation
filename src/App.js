import React, { useState } from 'react'
import Countdown from './Countdown'
import Form from './Form'
import './App.css'

function App() {
  const [isDatePassed, setDatePassed] = useState(false)
  const [date, setDate] = useState()

  return (
    <div className="App">
      {!isDatePassed ? 
        <Form callbacks={{ setDatePassed, setDate }} />
        : 
        <Countdown date={date} />
      }
    </div>
  )
}

export default App;
