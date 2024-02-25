import styles from './Steps.module.scss';

const Steps = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.step}>
                <p className={styles.step__title}>
                    Step 1: Alex makes an
                    appointment with John
                    to play a game
                </p>
                <div className={styles.step__image}>
                    IMAGE
                </div>
            </div>
            <div className={styles.step}>
                <p className={styles.step__title}>
                    Step 1: Alex makes an
                    appointment with John
                    to play a game
                </p>
                <div className={styles.step__image}>
                    IMAGE
                </div>
            </div>
            <div className={styles.step}>
                <p className={styles.step__title}>
                    Step 1: Alex makes an
                    appointment with John
                    to play a game
                </p>
                <div className={styles.step__image}>
                    IMAGE
                </div>
            </div>
        </div>
    );
};

export default Steps;