export const dateFormat = ( dateObject ) => {
  let hours = dateObject.getHours()
  let minutes = dateObject.getMinutes()
  let seconds = dateObject.getSeconds()

  if (hours < 10) hours = `0${hours}`
  if (minutes < 10) minutes = `0${minutes}`
  if (seconds < 10) seconds = `0${seconds}`

  const localeDateString = dateObject.toLocaleDateString()
  const timeString = `${hours}:${minutes}:${seconds}`
  
  return {
    localeDateString,
    timeString
  }
}