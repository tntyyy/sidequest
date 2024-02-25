import styles from './SectionTitle.module.scss';
import {FC, ReactNode} from 'react';
import classNames from 'classnames';

type TSectionTitleProps = {
    children: ReactNode;
    className?: string;
}

const SectionTitle: FC<TSectionTitleProps> = ({ children, className }) => {
    return (
        <h2 className={classNames(styles.title, className)}>{children}</h2>
    );
};

export default SectionTitle;