import styles from './LayoutWithSidebar.module.scss';
import {FC, ReactNode} from 'react';

type LayoutWithSidebarProps = {
    sidebarElement: ReactNode;
    children: ReactNode;
}

const LayoutWithSidebar: FC<LayoutWithSidebarProps> = ({ sidebarElement, children }) => {
    return (
        <div className={styles.layout}>
            <aside className={styles.sidebar}>
                {sidebarElement}
            </aside>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
};

export default LayoutWithSidebar;