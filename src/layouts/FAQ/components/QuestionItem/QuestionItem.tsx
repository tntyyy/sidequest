import styles from './QuestionItem.module.scss';
import {FC} from 'react';
import {TQuestion} from '@/src/layouts/FAQ/constants/questions';

const QuestionItem: FC<TQuestion> = (props) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.number}>Question {props.number}</span>
            <h5 className={styles.title}>{props.title}</h5>
            <p className={styles.content}>{props.content}</p>
        </div>
    );
};

export default QuestionItem;