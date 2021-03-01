import React, { useState, useEffect } from 'react'

const Countdown = ({ date }) => {
  const [{ days, hours, minutes, seconds }, setTime] = useState({})
  const [isBirthday, setBirthday] = useState(false)
  const timeOffsetMoscow = 3
  
  useEffect(() => {
    const intervalID = setInterval(() => {
      if (date !== undefined) {
        const chosenDate = new Date(date)
        const currentDate = new Date()
        const delta = chosenDate.getTime() - currentDate.getTime()

        if (delta - timeOffsetMoscow * 60 * 60 * 1000 <= 0) setBirthday(true)

        console.log(delta - timeOffsetMoscow * 60 * 60 * 1000)

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

  if (isBirthday) return (
    <div className="countdown">
      <span>Happy Birthday, Artyom!</span>
    </div>
  )

  return (
    <div className="countdown">
      { days === 1 ? <span>{days} day</span> : days > 1 ? <span>{days} days</span> : null}
      
      <span>
        { hours < 0 ? <>0{hours+timeOffsetMoscow}</> : hours < 10 ? <>0{hours}</> : <>00</>}:
        { minutes < 10 ? <>0{minutes}</> : <>{minutes}</> }:
        { seconds < 10 ? <>0{seconds}</> : <>{seconds}</> }
      </span>
    </div>
  )
}

export default Countdown
