import React from 'react';
import Image from 'next/image';
import logo from '../../../../public/assets/icons/logo.svg';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href={'/'}>
            <Image src={logo} alt={'SideQuest'} />
        </Link>
    );
};

export default Logo;