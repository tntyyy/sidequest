import React, { useState, useEffect } from 'react';
import styles from './TimePicker.module.scss';
import classNames from 'classnames';

type TimePickerProps = {
    onTimeChange: (time: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ onTimeChange }) => {
    const [time, setTime] = useState<string>(
        `${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`
    );
    const [isAM, setIsAM] = useState<boolean>(new Date().getHours() < 12);

    useEffect(() => {
        const currentTime = new Date();
        const currentHours = currentTime.getHours();
        const currentMinutes = currentTime.getMinutes();
        const formattedHours = currentHours > 12 ? currentHours - 12 : currentHours;
        setTime(`${formattedHours.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}`);
        setIsAM(currentHours < 12);
    }, []);

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let { value } = event.target;
        value = value.replace(/[^\d:]/g, '');
        if (value.length > 5) {
            value = value.slice(0, 5);
        }
        if (value.length === 2 && !value.includes(':')) {
            value += ':';
        }
        setTime(value);
    };

    const handleAMClick = () => {
        setIsAM(true);
    };

    const handlePMClick = () => {
        setIsAM(false);
    };

    const handleSubmit = () => {
        const [inputHours, inputMinutes] = time.split(':').map((value) => parseInt(value, 10));
        const selectedTime = new Date();
        const currentHour = selectedTime.getHours();
        const currentMinute = selectedTime.getMinutes();

        if (!isAM && inputHours !== 12) {
            selectedTime.setHours(inputHours + 12);
        } else if (isAM && inputHours === 12) {
            selectedTime.setHours(0);
        } else {
            selectedTime.setHours(inputHours);
        }

        selectedTime.setMinutes(inputMinutes);

        if (
            selectedTime.getHours() > currentHour ||
            (selectedTime.getHours() === currentHour && selectedTime.getMinutes() > currentMinute)
        ) {
            console.log('Selected time is valid:', selectedTime.toLocaleTimeString());
        } else {
            console.log('Selected time is invalid:', selectedTime.toLocaleTimeString());
        }

        onTimeChange(selectedTime.toLocaleTimeString());
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <p className={styles.text}>Time:</p>
                <div className={styles.right}>
                    <input className={styles.input} type="text" value={time} onChange={handleTimeChange} maxLength={5}/>
                    <div className={styles.buttons}>
                        <button className={classNames(styles.btn, {
                            [styles.btn__active]: isAM,
                        })} type="button" onClick={handleAMClick}>
                            AM
                        </button>
                        <button className={classNames(styles.btn, {
                            [styles.btn__active]: !isAM,
                        })} type="button" onClick={handlePMClick}>
                            PM
                        </button>
                    </div>
                </div>
            </div>
            <button className={styles.submit} onClick={handleSubmit}>Ready!</button>
        </div>
    );
};

export default TimePicker;
