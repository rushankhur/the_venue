import React, { useState, useEffect } from 'react';
import Slide from 'react-reveal/Slide';

const TimeUntil = () => {
    const [deadline] = useState('Dec, 16, 2020');
    const [days, setDays] = useState('0');
    const [hours, setHours] = useState('0');
    const [minutes, setMinutes] = useState('0');
    const [seconds, setSeconds] = useState('0');

    // state = {
    //     deadline: 'Dec, 16, 2020',
    //     days: '0',
    //     hours: '0',
    //     minutes: '0',
    //     seconds: '0'
    // }

    const getTimeUntil = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());

        if(time < 0) {
            console.log('Date passed');
        } else {
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor(time/(1000*60*60*24));

            // ES6 syntax
            // this.setState({
            //     days,
            //     hours,
            //     minutes,
            //     seconds
            // });
            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }
    }

    // componentDidMount() {
    //     setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
    // }

    useEffect(() => {
        setInterval(() => getTimeUntil(deadline), 1000);
    }, [deadline]);
    
    return (
        <Slide left delay={1000}>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event starts in
                </div>
                <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className="countdown_time">
                            {days}
                        </div>
                        <div className="countdown_tag">
                            Days
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            {hours}
                        </div>
                        <div className="countdown_tag">
                            Hs
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            {minutes}
                        </div>
                        <div className="countdown_tag">
                            Min
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            {seconds}
                        </div>
                        <div className="countdown_tag">
                            Sec
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
}

export default TimeUntil;