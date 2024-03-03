import styles from "./Header.module.scss";
import Logo from '@/src/components/ui/Logo/Logo';
import {headerData} from '@/src/components/Header/Header.data';
import Link from 'next/link';
import classNames from 'classnames';
import {useRouter} from 'next/router';
import {useState} from 'react';
import BotButton from '@/src/components/ui/BotButton/BotButton';

const Header = () => {
    const router = useRouter();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header className={styles.header}>
                <Logo />
                <div className={styles.navigation}>
                    {headerData.map((item) => {
                        return (
                            <Link
                                key={item.id}
                                href={item.path}
                                className={classNames(styles.link, {
                                    [styles.link__active]: router.pathname === item.path
                                })}
                            >
                                {item.content}
                            </Link>
                        );
                    })}
                </div>
                <BotButton className={styles.bot__button} />
                <div className={styles.burger__menu} onClick={toggleMobileMenu}>
                    <div className={styles.menu__item} />
                    <div className={styles.menu__item} />
                    <div className={styles.menu__item} />
                </div>
            </header>
            {isMobileMenuOpen && (
                <div className={styles.fullscreen__menu}>
                    <div className={styles.menu__header}>
                        <Logo />
                        <button onClick={toggleMobileMenu} className={styles.close}><span>x</span></button>
                    </div>
                    <div className={styles.menu__nav}>
                        {headerData.map((item) => {
                            return (
                                <Link
                                    key={item.id}
                                    href={item.path}
                                    className={classNames(styles.link, {
                                        [styles.link__active]: router.pathname === item.path
                                    })}
                                >
                                    {item.content}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;