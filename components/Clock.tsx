import React, {useEffect, useState} from 'react'

const Clock = () => {
const [time, setTime] = useState(new Date());

useEffect(() => {
    const intervalId = setInterval(() => {
        setTime(new Date());
    }, 1000);

    return  () => {
        clearInterval(intervalId);
    }
}, [])

function formatTime() {
    let hours = time.getHours()
    let minutes = time.getMinutes()

    return `${padZero(hours)}:${padZero(minutes)}`
}


function padZero(number){
    return (number < 10 ? "0" : "") + number
}

  return (
    <div>{formatTime()}</div>
  )
}

export default Clock