import styles from './HowItWorks.module.scss';
import SectionTitle from '@/src/components/ui/SectionTitle/SectionTitle';
import {howItWorksData} from '@/src/layouts/Home/sections/HowItWorks/components/HowItWorks.data';
import HowItWorksItem from '@/src/layouts/Home/sections/HowItWorks/components/HowItWorksItem/HowItWorksItem';

const HowItWorks = () => {
    return (
        <div className={styles.wrapper}>
            <SectionTitle>How It Works</SectionTitle>
            <div className={styles.content}>
                {howItWorksData.map((item, index) => {
                    const isReversed = index % 2 !== 0;

                    return (
                        <HowItWorksItem
                            isReversed={isReversed}
                            {...item}
                        />
                    );
                })};
            </div>
        </div>
    );
};

export default HowItWorks;