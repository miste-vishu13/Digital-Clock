 import { useState,useEffect } from "react";
 function Digitalclock()
{
const[time,setTime]=useState(new Date());
useEffect(()=>
    {
        const intervalId=setInterval(()=>
        {
         setTime(new Date());
        },1000);


         return ()=>
    {
        clearInterval(intervalId);
    }

    },[]);

    function padZero(number)
    {
        return(number<10 ? "0":""  +number);
    }

   
function formatTime()
{
    let hours=time.getHours();
    const min =time.getMinutes();
    const sec= time.getSeconds();
    const meredian= hours>=12 ? "PM":"AM";
    hours = hours%12 || 12;

    return `${padZero(hours)}:${padZero(min)}:${padZero(sec)} ${meredian}`
}
function padZero(number)
    {
        return(number<10 ? "0":"" ) +number;
    }

    return (
      <div className="container">
        <div className="clock">
          <span>{formatTime()}</span>
        </div>

      </div>
    );
}
export default Digitalclock