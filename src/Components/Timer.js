import React from 'react';
import { useState, useEffect, useParams } from 'react';
import {useNavigate} from "react-router-dom"
import '../App.css';

const Timer = ({duration, onExpire}) => {
    const [time, setTime] = useState(duration);
    const navigate = useNavigate();

    useEffect(() => {
        const timerId = setTimeout(() => {
            setTime(time - 1000);
        }, 1000);

        if(time <= 0){
            // onExpire && onExpire();
            clearTimeout(timerId);
            navigate("/Score")
        }
        if(time <= 0)
        {
            onExpire && onExpire();
            navigate("/NotAttempted")
        }
    }, [time, onExpire]); 



    const getFormattedTime = (milliseconds) => {
        let total_seconds = parseInt(Math.floor(milliseconds / 1000));
        let total_minutes = parseInt(Math.floor(total_seconds / 60));

        let seconds = parseInt(total_seconds % 60)
        let minutes = parseInt(total_minutes % 60)

        return `${minutes}:${seconds}`;


    };
    return(
        <div className='question'>
            ⌛Time left - {getFormattedTime(time)}
        </div>
    )
};

export default Timer;