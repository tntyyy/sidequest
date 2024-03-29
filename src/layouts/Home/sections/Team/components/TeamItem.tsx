import React, {FC, useState} from 'react';
import Image from 'next/image';
import {TeamDataType} from '@/src/layouts/Home/sections/Team/Team.data';
import styles from './TeamItem.module.scss';
import Link from 'next/link';
import linkedinIcon from '../../../../../../public/assets/icons/linkedinIcon.svg';
import twitterIcon from '../../../../../../public/assets/icons/twitterIcon.svg';
import classNames from 'classnames';

const TeamItem: FC<TeamDataType> = (props) => {

    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleToggleCard = () => {
        setIsClicked(prevState => !prevState);
    }

    return (
        <div className={styles.card}>
            <div className={classNames(styles.card__inner, {
                [styles.card__inner_clicked]: isClicked,
            })}>
                <div onClick={handleToggleCard} className={styles.wrapper}>
                    <Image className={styles.image} src={props.icon} alt={props.name}/>
                    <div className={styles.content}>
                        <div className={styles.content__top}>
                            <span className={styles.post}>{props.post}</span>
                            <span className={styles.name}>{props.name}</span>
                        </div>
                        <div className={styles.content__footer}>
                            {props.linkedIn && (
                                <Link href={props.linkedIn} target={"_blank"} className={styles.icon}>
                                    <Image src={linkedinIcon} alt={'LinkedIn'}/>
                                </Link>
                            )}
                            {props.twitter && (
                                <Link href={props.twitter} target={"_blank"} className={styles.icon}>
                                    <Image src={twitterIcon} alt={'Twitter'}/>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                <div onClick={handleToggleCard} className={styles.info}>
                    <ul className={styles.info__list}>
                        {props.info.map((item) => {
                            return <li key={item} className={styles.info__list__item}>{item}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TeamItem;