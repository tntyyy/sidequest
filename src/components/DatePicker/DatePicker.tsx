import {FC} from 'react';
import Calendar from 'react-calendar';
import {Value} from '@/src/layouts/Date/components/Main/Main';

type TDatePicker = {
    date: Value;
    setDate: (date: Value) => void;
}

const DatePicker: FC<TDatePicker> = ({ date, setDate }) => {
    return (
        <Calendar
            // @ts-ignore
            value={date}
            // @ts-ignore
            onChange={(value) => setDate(value)}
            selectRange={false}
            // @ts-ignore
            minDate={new Date()}
        />
    );
};

export default DatePicker;