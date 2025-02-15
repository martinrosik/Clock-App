import { useState, useEffect } from "react";

import Button from './Button.jsx'

function Clock() {

    const [time, setTime] = useState(new Date())
    const [timeFormat, setTimeFormat] = useState(false)

    const hour = time.getHours();
    const displayHour = hour % 12 || 12; 
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    const isAm = hour < 12;
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="clock-wrapper">
            <div className="clock"> 
                <h1>Current time:</h1>
                <p>{timeFormat ? displayHour : hour}:{minutes}:{seconds} {isAm ? "AM" : "PM"}</p>
            </div>
            <Button timeFormat={timeFormat}
                    setTimeFormat={setTimeFormat}

            /> 
        </div>    
    )
}

export default Clock;
