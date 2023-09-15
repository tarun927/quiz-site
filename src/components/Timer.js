import { useEffect, useRef, useState } from "react";

const Timer = ({second,afterTimer}) => {
    const[seconds,setSeconds] = useState(second);
    const timerId = useRef(0)

    useEffect(()=>{
        if(seconds!==0){
            clearTimeout(timerId.current)
            timerId.current = setTimeout(()=>{
                setSeconds(seconds-1);
          },1000)
        }else{
            afterTimer();
        }
    },[seconds])
  return <div className="timer">{seconds}</div>;
};

export default Timer;
