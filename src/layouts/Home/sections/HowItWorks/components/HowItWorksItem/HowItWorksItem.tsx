import styles from './HowItWorksItem.module.scss';
import {FC} from 'react';
import classNames from 'classnames';

type THowItWorksItemProps = {
    step: number;
    title: string;
    description: string;
    isReversed?: boolean;
}

const HowItWorksItem: FC<THowItWorksItemProps> = ({step, description, title, isReversed}) => {
    return (
        <div className={classNames(styles.wrapper, {
            [styles.reversed]: isReversed,
        })}>
            <div className={styles.image}>
                ANIMATED IMAGE
            </div>
            <div className={styles.content}>
                <div className={classNames(styles.header, {
                    [styles.reversed]: isReversed,
                })}>
                    <span className={styles.step}>Step {step}</span>
                    <span className={styles.title}>{title}</span>
                </div>
                <p className={styles.description}>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default HowItWorksItem;