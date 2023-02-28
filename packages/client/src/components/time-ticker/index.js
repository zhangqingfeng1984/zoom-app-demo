import { useEffect, useRef, useState } from "react"

export const TimeTicker = () => {
    const intervalId = useRef();
    const [seconds, setSeconds] = useState(0)
 
    const getSeconds = ()=>{
        return seconds
    }
    useEffect(() => {
        intervalId.current = setInterval(()=>{
            console.log('tick', seconds)
            setSeconds(getSeconds() + 1)
        }, 1000)
    }, 
    // eslint-disable-next-line
    [])

    return (
        <div>Time Elapsed: {seconds}</div>
    )
}