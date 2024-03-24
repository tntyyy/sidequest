import styles from './Main.module.scss';
import Link from 'next/link';
import pixelArrow from '../../../../../public/assets/images/pixelArrow.png';
import Image from 'next/image';
import DatePicker from '@/src/components/DatePicker/DatePicker';
import {useEffect, useState} from 'react';
import TimePicker from '@/src/components/TimePicker/TimePicker';
import {useRouter} from 'next/router';
import success from '../../../../../public/assets/icons/success.png';
import error from '../../../../../public/assets/icons/error.png';

export type Value = Date | null;

const formatDateAndTime = (dateString: Date, timeString: string): string => {
    // Парсим строку даты
    const date = new Date(dateString);

    // Разбиваем строку времени
    const [hours, minutes] = timeString.split(':').map(Number);

    // Устанавливаем время
    date.setHours(hours);
    date.setMinutes(minutes);

    // Форматируем дату в ISO формат и возвращаем результат
    return date.toISOString();
};

const Main = () => {
    const router = useRouter();
    const [userIds, setUserIds] = useState<string[]>([]);

    const [isSuccessResponse, setIsSuccessResponse] = useState<boolean | null>(null);

    const [selectedDate, setSelectedDate] = useState<Value>(new Date());

    useEffect(() => {
        const { user_ids } = router.query;
        if (Array.isArray(user_ids)) {
            setUserIds(user_ids);
        } else if (typeof user_ids === 'string') {
            setUserIds([user_ids]);
        }
    }, [router.query]);

    const handleChangeSelectedDate = (date: Value) => {
        setSelectedDate(date);
    };

    const handleSubmit = (time: string) => {
        if (selectedDate) {
            const formatted = formatDateAndTime(selectedDate, time);
            sendData(formatted);
        }
    };

    const sendData = async (date: string) => {
        try {
            const response = await fetch(`https://sidequestclub.xyz/api_upload/calendar?user_ids=${userIds[0]}&user_ids=${userIds[1]}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ date: date }),
            });

            if (response.ok) {
                setIsSuccessResponse(true);
            }
        } catch (error) {
            setIsSuccessResponse(false);
        }
    };

    return (
        <main className={styles.wrapper}>
            <div className={styles.content}>
                <h1 className={styles.title}>Pick a Date and Time</h1>
                <p className={styles.description}>
                    Are you ready for the epic battle? Save the date!
                </p>
                <Link href='https://linktr.ee/SideQuestProject' target={"_blank"} className={styles.link}>Back to the bot</Link>
            </div>
            {isSuccessResponse !== null && (
                <div className={styles.state}>
                    <Image src={isSuccessResponse ? success : error} alt={'SideQuest'} className={styles.state__icon} />
                    <p className={styles.text}>
                        {
                            isSuccessResponse ? 'The date has been successfully selected' : 'An unexpected error has occurred'
                        }
                    </p>
                </div>
            )}
            {isSuccessResponse === null && (
                <div className={styles.calendar}>
                    <DatePicker
                        date={selectedDate}
                        setDate={handleChangeSelectedDate}
                    />
                    <TimePicker onTimeChange={handleSubmit}/>
                </div>
            )}
            <Image src={pixelArrow} alt={'Pixel arrow'} className={styles.icon}/>
        </main>
    );
};

export default Main;