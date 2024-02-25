import styles from './Footer.module.scss';
import Logo from '@/src/components/ui/Logo/Logo';
import Link from 'next/link';
import classNames from 'classnames';
import {useRouter} from 'next/router';
import {footerData} from '@/src/components/Footer/Footer.data';

const Footer = () => {
    const router = useRouter();

    return (
        <footer className={styles.wrapper}>
            <Logo />
            <div className={styles.navigation}>
                {footerData.map((item) => {
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
        </footer>
    );
};

export default Footer;