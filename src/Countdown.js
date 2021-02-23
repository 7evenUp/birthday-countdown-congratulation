import React, { useState, useEffect } from 'react'
import { dateFormat } from './utils/DateFormat'

const Countdown = (props) => {
  const [{ timeString, localeDateString }, setTime] = useState("")
  
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(dateFormat(props.date))
      console.log(dateFormat(props.date))
    }, 1000)

    return () => clearInterval(intervalID)
  }, [])

  console.log(props.date)  

  return (
    <div className="countdown">
      <span>{ localeDateString }</span>
      <span>{ timeString }</span>
    </div>
  )
}

export default Countdown
