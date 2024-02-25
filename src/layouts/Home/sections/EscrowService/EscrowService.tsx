import styles from './EscrowService.module.scss';
import SectionTitle from '@/src/components/ui/SectionTitle/SectionTitle';

const EscrowService = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <SectionTitle>Escrow Service</SectionTitle>
                <div className={styles.content__description}>
                    Safeguard your funds and mitigate counterparty risk using the SideKick solution.
                    <br/>
                    <br/>
                    We provide users with a complete set of status updates throughout the escrow process.
                    <br/>
                    <br/>
                    Both participants have full insight into the steps that are their responsibility, including where they are in the transaction process.
                </div>
            </div>
            <div className={styles.image}>
                IMAGE
            </div>
        </div>
    );
};

export default EscrowService;