import team1 from '../../../../../public/assets/images/team/team1.png';
import team2 from '../../../../../public/assets/images/team/team2.png';
import team3 from '../../../../../public/assets/images/team/team3.png';
import team4 from '../../../../../public/assets/images/team/team4.png';
import {StaticImageData} from 'next/image';

export type TeamDataType = {
    icon: StaticImageData;
    post: string;
    name: string;
    info: string[];
    linkedIn: string;
    twitter: string;
}

export const teamData: TeamDataType[] = [
    {
        icon: team1,
        post: 'Co-founder',
        name: 'HeyFish Z',
        linkedIn: '/',
        twitter: '/',
        info: [
            '2013 UK LOL League 3rd place',
            '2014 UK LOL League Champion',
            '2015 UK LOL League Champion',
            '2018 EU master franchisor of Wanyoo China LTD',
            '2020 SideQuest Meta founder',
        ]
    },
    {
        icon: team2,
        post: 'Co-founder',
        name: 'San',
        linkedIn: '/',
        twitter: '/',
        info: [
            'Board member of various  game studios & charities',
            'Games industry investor ($2bn deployed)',
            'Bulge Bracket i-banker',
            'University of Cambridge',
        ]
    },
    {
        icon: team3,
        post: 'Co-founder',
        name: 'Michael',
        linkedIn: '/',
        twitter: '/',
        info: [
            'Product operation lead of Trovo.live over 20M registered users',
            'Product operation lead of a marketplace platform with over 300M annual GMV',
            'Peking University',
        ]
    },
    {
        icon: team4,
        post: 'Co-founder',
        name: 'D.F',
        linkedIn: '/',
        twitter: '/',
        info: [
            'Co-founder of Trovo.live',
            'Owner of streamer network “Wings”',
            'Head of operations of PUBG Champions League',
            'Peking University',
        ]
    },
];