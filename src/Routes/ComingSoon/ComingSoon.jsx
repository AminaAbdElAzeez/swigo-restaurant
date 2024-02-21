import { useRef } from 'react';
import './ComingSoon.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  const hourRef = useRef();
  const minuteRef = useRef();
  const secondRef = useRef();
  const timeRef = useRef();
  const dateRef = useRef();

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourRef.current.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteRef.current.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondRef.current.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeRef.current.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}` : seconds} ${ampm}`
    dateRef.current.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
  }

  // StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

  useEffect(()=>{
   const interval = setInterval(()=>{
    setTime()
   },1000)
   return () => clearInterval(interval)
  },)

  return (
    <section className='comming-soon'>
      <div className='coming-layer'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <p className='coming-title'>
                coming soon 👀
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <div className="clock-container">
                <div className="clock">
                  <div className="needle hour" ref={hourRef}></div>
                  <div className="needle minute" ref={minuteRef}></div>
                  <div className="needle second" ref={secondRef}></div>
                  <div className="center-point"></div>
                </div>
                <div className="time" ref={timeRef}></div>
                <div className="date" ref={dateRef}></div>
            </div>
            </div>
          </div>
          <div className='row'>
            <Link to='/home' className='coming-btn'> Back to Home</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComingSoon
