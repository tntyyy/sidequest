import styles from "./Header.module.scss";
import Logo from '@/src/components/ui/Logo/Logo';
import {headerData} from '@/src/components/Header/Header.data';
import Link from 'next/link';
import classNames from 'classnames';
import {useRouter} from 'next/router';

const Header = () => {
    const router = useRouter();

    return (
        <header className={styles.header}>
            <Logo />
            <div className={styles.navigation}>
                {headerData.map((item) => {
                    return <Link className={classNames(styles.link, {
                        [styles.link__active]: router.pathname === item.path
                    })} key={item.id} href={item.path}>{item.content}</Link>
                })}
            </div>
            <Link className={styles.button} href={'/botlink'}>Try SideKick Bot</Link>
        </header>
    );
};

export default Header;