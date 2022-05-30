import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Timer = () => {
    const percentage = 66;
    return (
        <div className="pomodoro">
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                    // rotation: 0.25,
                    strokeLinecap: 'butt',
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(250, 250, 250)`,
                    textColor: '#FAFAFA',
                    trailColor: 'rgba(250, 250, 250, 0.1)',
                })}
            />
        </div>
    )
}

export default Timer