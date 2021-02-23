import React, { useState, useEffect } from 'react'

const Countdown = ({ date }) => {
  const [{ days, hours, minutes, seconds }, setTime] = useState({})
  const timeOffsetMoscow = 3
  
  useEffect(() => {
    const intervalID = setInterval(() => {
      if (date !== undefined) {
        const chosenDate = new Date(date)
        const currentDate = new Date()
        const delta = chosenDate.getTime() - currentDate.getTime()

        const time = {
          days: Math.floor(delta / (1000 * 60 * 60 * 24)),
          hours: Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) - timeOffsetMoscow,
          minutes: Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((delta % (1000 * 60)) / 1000),
        }

        setTime(time)
      }
    }, 1000)

    return () => clearInterval(intervalID)
  }, [date])

  return (
    <div className="countdown">
      { days === 1 ? <span>{days} day</span> : days > 1 ? <span>{days} days</span> : null}
      
      <span>
        { hours < 10 ? <>0{hours}</> : <>{hours}</> }:
        { minutes < 10 ? <>0{minutes}</> : <>{minutes}</> }:
        { seconds < 10 ? <>0{seconds}</> : <>{seconds}</> }
      </span>
    </div>
  )
}

export default Countdown
