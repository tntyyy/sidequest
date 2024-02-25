import styles from './MainContainer.module.scss';
import classNames from 'classnames';
import {FC} from 'react';

type TMainContainerProps = {
    children: React.ReactNode;
    className?: string;
}

const MainContainer: FC<TMainContainerProps> = ({ children, className }) => {
    return (
        <div className={classNames(styles.wrapper, className)}>
            {children}
        </div>
    );
};

export default MainContainer;