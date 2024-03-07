import styles from './BotButton.module.scss';
import Link from 'next/link';
import {FC} from 'react';
import classNames from 'classnames';
import PixelArrow from '@/src/components/ui/PixelArrow/PixelArrow';

type BotButtonProps = {
    className?: string;
}

const BotButton: FC<BotButtonProps> = ({className}) => {
    return (
        <Link className={classNames(styles.button, className)} href={'https://discord.gg/FJGW3eZ7vA'} target={"_blank"}>
            <span>SideKick Bot <PixelArrow /></span>
        </Link>
    );
};

export default BotButton;