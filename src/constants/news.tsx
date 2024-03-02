import {StaticImageData} from 'next/image';
import {EFilters} from '@/src/layouts/News/constants/filters';

import news1 from '../../public/assets/images/news/news1.png';
import news2 from '../../public/assets/images/news/news2.png';
import news3 from '../../public/assets/images/news/news3.png';
import news4 from '../../public/assets/images/news/news4.png';

export type TNews = {
    id: number;
    date: string;
    category: EFilters;
    image: StaticImageData;
    title: string;
    description: string;
    content: string;
};

export const newsData: TNews[] = [
    {
        id: 1,
        image: news1,
        date: '29/02/2024',
        category: EFilters.Gaming,
        title: 'Tencent Targets MENA with Honor of Kings',
        description: 'Tencent\'s hit mobile game, Honor of Kings, is expanding its kingdom to the Middle East and North Africa (MENA) in 2024, promising to bring its massively popular multiplayer online battle arena (MOBA) experience to new audiences',
        content: 'Honor of Kings, Tencent\'s massively popular mobile game, has its eye set on the international market in 2024.\n' +
            'Starting on February 21, the multiplayer online battle arena (MOBA) game will be available in the Middle East and North Africa (MENA) region as well as Eastern Europe and South Asia, according to an announcement from TiMi Studios, Tencent\'s in-house gaming studio that created Honor of Kings. The game first ventured out of China in 2023, starting in Brazil.\n' +
            'Globally, around 100 million users -- most of whom are in China today -- play the game every day. The title has become a household name in its home market, defied the gender stereotype in gaming, pioneered mobile esports and popularized "loot boxes," or randomized in-game rewards that may or may not have a monetary value.\n' +
            'In part thanks to its success with loot boxes, Honor of Kings has been an enormous financial success for Tencent. It was the world\'s second-highest-grossing mobile game in December, trailing only after Monopoly Go!, according to market research firm Sensor Tower.\n' +
            'Most of those revenues came from China. Despite its enormous success at home since its inception in 2015, the game has had a bumpy path abroad. TiMi first attempted to introduce the title to overseas users in 2017, when Arena of Valor was launched as a Westernized version of Honor of Kings. The game never took off in a meaningful way, and industry observers attributed its lackluster performance to management missteps and a failure to fully grasp Western culture.\n' +
            'Level Infinite is Tencent\'s attempt to right its global expansion. Founded in 2021, it\'s based in Singapore and Amsterdam as the Chinese internet giant\'s international publishing arm.\n' +
            'So far there appears to be some traction. As of this week, Honor of Kings had amassed over 3 million pre-registrations across MENA, Eastern Europe and South Asia.\n' +
            'Tencent is eager to replicate the game\'s domestic success with esports in foreign lands. This upcoming summer, Honor of Kings is joining the Esports World Cup in Riyadh, Saudi Arabia and shelling out a $3 million prize pool to 12 competing teams.\n' +
            'With its flourishing gaming population, the MENA region will be an important test for Honor of Kings\' second try at global expansion. The title is scheduled to enter North America, South America and Western Europe later this year.',
    },
    {
        id: 2,
        image: news2,
        date: '29/02/2024',
        category: EFilters.Crypto,
        title: 'OpenAI\'s Video-Generating Model Sora Enters Gamin',
        description: 'OpenAI introduces Sora, a groundbreaking video-generating model capable of rendering video games among its many talents, showcasing impressive cinematographic feats and pushing the boundaries of AI in gaming​​',
        content: 'OpenAI introduces Sora, a groundbreaking video-generating model capable of rendering video games among its many talents, showcasing impressive cinematographic feats and pushing the boundaries of AI in gaming​​',
    },
    {
        id: 3,
        image: news3,
        date: '29/02/2024',
        category: EFilters.Gaming,
        title: 'Disney and Fortnite\'s Metaverse Alliance',
        description: 'With the magic of Disney, Fortnite is set to dominate the metaverse, highlighting an ongoing effort to create an interconnected, avatar-driven virtual world that captivates and engages',
        content: 'With the magic of Disney, Fortnite is set to dominate the metaverse, highlighting an ongoing effort to create an interconnected, avatar-driven virtual world that captivates and engages',
    },
    {
        id: 4,
        image: news4,
        date: '29/02/2024',
        category: EFilters.Gaming,
        title: 'Disney Invests $1.5B in Epic Games',
        description: 'In a move that\'s shaking up the gaming and entertainment industries, Disney has taken a $1.5 billion stake in Epic Games. This partnership aims to build an \'entertainment universe\' within Fortnite, blending gaming with storytelling in unprecedented ways',
        content: 'In a move that\'s shaking up the gaming and entertainment industries, Disney has taken a $1.5 billion stake in Epic Games. This partnership aims to build an \'entertainment universe\' within Fortnite, blending gaming with storytelling in unprecedented ways',
    },
]