import {StaticImageData} from 'next/image';
import {EFilters} from '@/src/layouts/News/constants/filters';

import news1 from '../../public/assets/images/news/news1.png';
import news2 from '../../public/assets/images/news/news2.png';
import news3 from '../../public/assets/images/news/news3.png';
import news4 from '../../public/assets/images/news/news4.png';
import news5 from '../../public/assets/images/news/news5.png';
import news6 from '../../public/assets/images/news/news6.png';
import news7 from '../../public/assets/images/news/news7.png';
import news8 from '../../public/assets/images/news/news8.png';
import news9 from '../../public/assets/images/news/news9.png';

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
        image: news9,
        date: '06/03/2024',
        category: EFilters.Crypto,
        title: 'SideQuest is one of the 13 new projects in Binance Labs MVB incubation program.',
        description: 'Binance Labs, the venture capital and accelerator of Binance, has announced the 13 early-stage projects selected for season 7 of the Most Valuable Builder (MVB) Accelerator Program. ',
        content: 'Please visit to find more details: \n \n https://www.bnbchain.org/en/blog/meet-the-most-valuable-builder-mvb-season-7-cohort',
    }
]

const oldnewsData: TNews[] = [
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
        content: 'OpenAI’s new — and first! — video-generating model, Sora, can pull off some genuinely impressive cinematographic feats. But the model’s even more capable than OpenAI initially made it out to be, at least judging by a technical paper published this evening.\n' +
            'The paper, titled “Video generation models as world simulators,” co-authored by a host of OpenAI researchers, peels back the curtains on key aspects of Sora’s architecture — for instance revealing that Sora can generate videos of an arbitrary resolution and aspect ratio (up to 1080p). Per the paper, Sora’s able to perform a range of image and video editing tasks, from creating looping videos to extending videos forwards or backwards in time to changing the background in an existing video.\n' +
            'But most intriguing to this writer is Sora’s ability to “simulate digital worlds,” as the OpenAI co-authors put it. In an experiment, OpenAI fed Sora prompts containing the word “Minecraft” and had it render a convincingly Minecraft-like HUD and game — and the game’s dynamics, including physics — while simultaneously controlling the player character.\n' +
            'So how’s Sora able to do this? Well, as observed by senior Nvidia researcher Jim Fan (via Quartz), Sora’s more of a “data-driven physics engine” than a creative too. It’s not just generating a single photo or video, but determining the physics of each object in an environment — and rendering a photo or video (or interactive 3D world, as the case may be) based on these calculations.\n' +
            '“These capabilities suggest that continued scaling of video models is a promising path towards the development of highly-capable simulators of the physical and digital world, and the objects, animals and people that live within them,” the OpenAI co-authors write.\n' +
            'Now, Sora’s usual limitations apply in the video game domain. The model can’t accurately approximate the physics of basic interactions like glass shattering. And even with interactions it can model, Sora’s often inconsistent — for example rendering a person eating a burger but failing to render bite marks.\n' +
            'Still, if I’m reading the paper correctly, it seems Sora could pave the way for more realistic — perhaps even photorealistic — procedurally generated games from text descriptions alone. That’s in equal parts exciting and terrifying (consider the deepfake implications, for one) — which is probably why OpenAI’s choosing to gate Sora behind a very limited access program for now.\n' +
            'Here’s hoping we learn more sooner rather than later.\n',
    },
    {
        id: 3,
        image: news3,
        date: '29/02/2024',
        category: EFilters.Gaming,
        title: 'Disney and Fortnite\'s Metaverse Alliance',
        description: 'With the magic of Disney, Fortnite is set to dominate the metaverse, highlighting an ongoing effort to create an interconnected, avatar-driven virtual world that captivates and engages',
        content: 'We may not be using the M word much these days, but the race to build an interconnected avatar-driven virtual world didn’t take the last year off.\n' +
            'The metaverse, a tech buzzword sandwiched in between the hype eras of NFTs and AI, is still being built, regardless of what we’re calling it. And in light of news this week, one company is increasingly positioned to dominate the near future.\n' +
            'Epic Games and Disney revealed Wednesday that they are designing an “entertainment universe” together full of Disney-flavored games to play and things to buy. The multiyear project will deploy Epic’s under-the-hood technology and Fortnite’s social gaming ecosystem to bring characters from Disney’s vast intellectual property vault to life. Disney invested $1.5 billion for a chunk of Epic in the deal.\n' +
            'In an image promoting the project, Disney and Epic portray their work together as a series of futuristic colorful islands floating in space with highways running between them and a Magic Castle glowing in the center, a beacon of cash-printing possibility. Those highways, whether literally or symbolically, will connect with Epic’s Fortnite — a hit game that’s now evolved into a massive online social ecosystem.\n' +
            'Fortnite’s evolution\n' +
            'Fortnite is best-known as a third-person shooter where 100 players swarm a shrinking virtual island and fight to be the last man standing. The game is famous for its goofy maximalism and it encourages players to dress in custom “skins,” which can be obtained by playing or buying through Epic’s lucrative virtual swag shop. In Fortnite, you can, as Darth Vader, roll over your enemy in a giant hamster wheel, slingshotted through the attic of a suburban foursquare home. Your foe might be dressed as Goku from Dragon Ball Z, Ariana Grande or Meowscles, a buff shirtless cat (an Epic original).\n' +
            'In its early days, Fortnite was about as ubiquitous and popular as a game can be. Streaming gameplay routinely drew hundreds of thousands of viewers on Twitch, where a cottage industry of pro Fortnite players emerged, all laser-focused on Epic’s polished battle royale. By 2020, the game already had more registered players than the population of the United States. In 2023, the game saw something of a resurgence and 100 million people logged in last November.\n' +
            'Anyone who still thinks of Fortnite solely as that goofy battle royale will be surprised to learn the extent of Epic’s true ambitions.\n' +
            'In recent years, Epic has steadily been expanding its marquee title into something much more akin to a platform or marketplace than a simple stand-alone game. Over the years, Fortnite’s psychedelic seasonal events, kaiju Travis Scott concerts and user-generated sandbox worlds all hinted at these grand plans. In December, Epic tripled down by simultaneously launching three new games within the game: Lego Fortnite, a Minecraft/Animal Crossing hybrid, Fortnite Festival, a rhythm game from the studio behind Rock Band, and Rocket Racing, a fast-paced racing title from the makers of Rocket League.\n' +
            'That slate of new games was already ambitious, but this week’s surprise news that Disney is coming to Fortnite (or the other way around) is on another level entirely. The two companies already have a relationship; Disney first invested in Epic through its accelerator program in 2017 and has licensed many of its Marvel and Star Wars characters to Fortnite as skins, but the new $1.5 billion investment signals a much deeper long-term play.\n' +
            '\n' +
            'Disney needs Fortnite\n' +
            'With Fortnite, Disney is in an interesting position of needing something it probably couldn’t do better itself.\n' +
            'Epic Games is light-years ahead of many of its peers on seamless online multiplayer gaming. Running smooth, fast, simultaneous instances of detailed virtual worlds for many millions of people is both technically complex and expensive. Any Fortnite player could be forgiven for not realizing that because Epic’s core experience runs perfectly the vast majority of the time, enabling people across devices to play and chat together instantly. Fortnite looks and moves as well as it does thanks to Epic’s Unreal Engine 5, which Disney’s partner Square Enix will also use for Kingdom Hearts IV, the latest game in the hit franchise featuring Disney characters.\n' +
            'In the announcement, Disney CEO Bob Iger called the Epic partnership “Disney’s biggest entry ever into the world of games.” Because whatever the two companies come up with will be interoperable with Fortnite, Disney also stands to instantly gain Fortnite’s 100 million monthly players without needing to build a player base from scratch.\n' +
            'The benefits will also extend the other way, and Fortnite might be able to leapfrog Roblox’s own numbers, which are currently at least double its own. Disney, like Lego, will also widen Fortnite’s appeal beyond the audience that plays battle royale and Fortnite’s other shooting-centric games. Fortnite offerings in other genres could bring in players both younger and older and expand the game’s appeal to more women, who are currently enjoying the rise of cozy gaming, and to parents looking for family-friendly titles.\n' +
            'Fortnite’s business model is also key for the potential success of the Disney collaboration. Games in Fortnite’s ecosystem are free to play, and the company makes its money through brand licensing partnerships and in-game purchases like skins, dances and emotes, which rotate through its virtual store on a daily basis.\n' +
            'If the popularity of Fortnite character skins from Disney-owned franchises like Star Wars and Marvel is any indication, players will be eager to collect their favorites and show them off on Fortnite’s slickly animated avatars. From Elsa and Mickey to Princess Leia and Iron Man, Disney’s vast vault of characters is a near-endless resource with limitless revenue potential for both companies.\n' +
            'State of the metaverse\n' +
            'Meta may have gone to the trouble of renaming itself after the metaverse, but when solving for the future, the company formerly known as Facebook got the equation backward. By focusing on VR hardware, a market the company mostly had cornered after buying Oculus in 2014 for $2 billion, Meta wound up with a solution in need of a problem — a how without a what. Apple’s new Vision Pro, while technically very impressive, may hit a similar adoption wall.\n' +
            'While Meta was obsessing over building its Oculus acquisition into a mainstream consumer product, companies like Epic, Roblox, Minecraft-maker Mojang and others were developing avatar-driven virtual worlds where people loved spending time. Importantly, those worlds are widely available and hardware agnostic, meaning that a PlayStation 5 player could square off in a fight against someone on a PC or even an iPhone (Epic’s complex standoff with Apple notwithstanding).\n' +
            'Horizon Worlds was Meta’s answer to those experiences — creepy legless avatars and all — but by then many millions of people were already invested in a virtual world that suits them, no headgear necessary. These social gaming worlds are all extremely sticky and people love hanging out in them, expressing themselves through virtual purchases and generally doing the whole thing sans VR.\n' +
            'In light of their success, Epic, Roblox and Mojang all smartly positioned things we once thought of as games instead as platforms. Fortnite, Roblox and Minecraft all host user-generated content, sometimes called UGC — a not very helpful acronym that means players can also upload their own game modes and virtual goods there for other players to try or buy. This content is very, very popular — according to Epic, 70% of Fortnite players play user-made content in addition to the core experience. Its what people think of when they talk about Roblox. For these companies, user-generated content doesn’t cost anything, keeps players coming back and can bring in low-effort revenue.\n' +
            'Fortnite, Roblox, Minecraft and other avatar-based virtual worlds can co-exist, but Fortnite boasts some unique advantages. While its peers lean on their nostalgia-heavy looks, Fortnite’s high-fidelity graphics and sophisticated animations (so sophisticated they’ve sparked more than one lawsuit over dance moves) are more future-proofed and brand friendly. Minecraft and Roblox are powerhouses in their own right, but the former is more of a game than an ecosystem and the latter will need to prove it can retain its young core users as they age up. Meanwhile, Epic commands a deep understanding of the ways people want to express themselves online and the technical prowess, and now partnerships, to make it possible.\n' +
            'Online multiplayer games aren’t social networks in a traditional sense, but the two categories are converging, with games becoming more like social networks and social networks increasingly full of games. As the Fortnite cinematic universe expands to include Lego, Rock Band and now Disney, Epic is poised to introduce a huge swath of new players to a virtual world that’s as much about who you’re with as it is about what you’re doing — and wasn’t that the promise of the metaverse all along?\n',
    },
    {
        id: 4,
        image: news4,
        date: '29/02/2024',
        category: EFilters.Gaming,
        title: 'Disney Invests $1.5B in Epic Games',
        description: 'In a move that\'s shaking up the gaming and entertainment industries, Disney has taken a $1.5 billion stake in Epic Games. This partnership aims to build an \'entertainment universe\' within Fortnite, blending gaming with storytelling in unprecedented ways',
        content: 'Lego Fortnite is only two months old, but Epic Games is already out with an even bigger collaboration.\n' +
            'Epic and Disney announced today that the companies will partner on an “all-new games and entertainment universe” that will bring characters from Disney’s deep catalogue to life through a tie-in with Fortnite. Disney will take a $1.5 billion equity stake in Epic Games as part of the deal.\n' +
            'The scope of the project sounds massive, to say the least. In a press release, the companies described the forthcoming project as “an all-new games and entertainment universe” offering players a way to “play, watch, shop and engage with” characters and storylines from Disney, Marvel, Star Wars, Pixar and others. The collaboration will use Epic’s Unreal Engine and plans to be “interoperable” with Fortnite, tying into Epic’s existing online social gaming infrastructure.\n' +
            '“This marks Disney’s biggest entry ever into the world of games and offers significant opportunities for growth and expansion,” Disney CEO Bob Iger said of the partnership, which apparently grew out of Epic’s time in a Disney Accelerator program back in 2017.\n' +
            'The Disney collaboration comes as a surprise, but fits right into Epic’s current roadmap. The company dramatically widened Fortnite’s scope in recent years, and what began as a popular battle royale game (technically a player-versus-environment game before that) has exploded into a hub of user-generated game modes and brand collaborations.\n' +
            '“Disney was one of the first companies to believe in the potential of bringing their worlds together with ours in Fortnite, and they use Unreal Engine across their portfolio,” Epic CEO Tim Sweeney said in the announcement. “Now we’re collaborating on something entirely new to build a persistent, open and interoperable ecosystem that will bring together the Disney and Fortnite communities.”\n' +
            'In December, Epic further signaled its commitment to expand Fortnite beyond its roots as a multiplayer shooter with the addition of Lego Fortnite, Rocket Racing and Fortnite Festival — three full stand-alone games in completely different genres than the original Fortnite. On the Disney side of things, a deep partnership and large investment will open up Epic’s refined toolkit for creating online social worlds where many people can build and play together at once.\n' +
            'Epic’s lucrative Fortnite store, where players can buy in-game outfits known as skins along with dance moves and emotes, also offers valuable infrastructure for what could be a limitless digital shopping mall stocked with goods inspired by Disney’s beloved characters. Disney and Epic also already work closely on brand collaborations within Fortnite and many popular characters from Star Wars and the Marvel Cinematic Universe are available as collectible skins in the game. The companies also previously co-produced a live in-game event known as Fortnite Nexus War in 2020.\n' +
            'The result of Disney’s surprise investment doesn’t yet have a release date beyond “soon(ish),” but that at least implies players won’t be in for a multiyear wait on the ambitious collaboration.\n',
    },
    {
        id: 5,
        image: news5,
        date: '04/03/2024',
        category: EFilters.Crypto,
        title: 'Circle to discontinue USDC on Tron blockchain',
        description: 'In a strategic shift, Circle announces the discontinuation of its USDC stablecoin on the Tron blockchain, marking a pivotal moment in the crypto landscape',
        content: 'Circle will no longer be minting new $USDC on the Tron blockchain, as it phases out support for the network.\n' +
            'Circle, the company behind the widely used USD Coin ($USDC), has announced it will cease supporting the stablecoin on the Tron blockchain. This decision was said to be part of the company’s ongoing efforts to maintain the trust, transparency, and safety of $USDC.\n' +
            'Immediate changes and user guidance\n' +
            'Effective immediately, Circle will stop minting USDC on the Tron blockchain ($TRX), according to a recent press release. It added: “Circle is discontinuing support for USDC on the TRON blockchain in a phased transition”. \n' +
            'The company is advising retail users and non-Circle customers who currently hold $USDC on Tron to transfer their tokens to exchanges where $USDC is supported. This move facilitates the conversion or transfer of %USDC to other blockchains that continue to have Circle’s backing.\n' +
            'For Circle Mint customers, the company is providing options to either transfer their $USDC from Tron to other supported blockchains or redeem it directly for fiat currency through Circle. This phased transition aims to minimise disruption for $USDC users and maintain the stablecoin’s reputation as a secure and reliable digital currency.\n' +
            'Circle’s motivation\n' +
            'While Circle did not give a specific reason for its decision, it said that it made the move as “part of our risk management framework”.\n' +
            'It added: “Our decision to discontinue support for $USDC on TRON is the result of an enterprise-wide approach that involved the business organisation, compliance and other functions across our company.”\n' +
            'Circle said this strategic move aligns with its commitment to upholding the highest standards of trust, transparency, and safety for $USDC users.\n' +
            'The move comes at a time when Circle is preparing to go public in the United States, with its $USDC stablecoin boasting a nearly $28 billion market capitalisation, second only to Tether in the stablecoin market. \n' +
            'Circle’s decision may also be a strategy to distance itself from the Tron blockchain. Circle has previously addressed claims related to its association with Tron founder Justin Sun, emphasising its stance on not providing services to Sun since early 2023. \n' +
            'Tron “has been named in multiple international law enforcement actions involving billions of dollars in transactions by alleged organised crime groups and sanctioned entities,” according to the Campaign for Accountability group.\n' +
            'The Tron blockchain and Sun were even sued by the US Securities and Exchange Commission (SEC) last year, after allegations of unregistered securities and manipulative trading. Sun has denied these claims.\n' +
            'Despite ending support on the Tron blockchain, Circle remains bullish on the future of $USDC. \n' +
            'Circle concluded its statement saying: “We will continue to grow $USDC and expand its reach to additional blockchains to deliver the widest access, broadest developer choice, and most secure user experience of any dollar stablecoin in the world.”\n',
    },
    {
        id: 6,
        image: news6,
        date: '04/03/2024',
        category: EFilters.Crypto,
        title: 'Liquid staking market soars, reaching $3.5B in total value locked',
        description: 'The total value locked in the liquid staking market reaches an impressive $3.5 billion, highlighting the growing interest and investment in this innovative crypto mechanism​',
        content: 'EigenLayer has played a pivotal role in the growth of TVL across liquid staking protocols.\n' +
            'Liquid staking protocols have become the talk of the town, surpassing $3.5 billion in total value locked (TVL) recently. This surge highlights the growing interest among Ethereum investors in these innovative financial instruments.\n' +
            'Liquid staking protocols are innovative solutions within the blockchain and cryptocurrency space that allow users to stake their digital assets, such as cryptocurrencies, while maintaining liquidity.\n' +
            '\n' +
            'Protocols like Etherfi, Renzo, Kelp, Puffer, and others have witnessed a notable increase in deposits over the past month.\n' +
            '\n' +
            'The surge is largely attributed to the integration of EigenLayer. This technology enables users to retain access to their funds while participating in the staking process.\n' +
            '\n' +
            'Etherfi leads the pack with a TVL exceeding $1.3 billion, followed by Kelp with over $460 million, and Renzo with $346 million in user deposits.\n' +
            '\n' +
            'Puffer Finance, a newcomer to the scene, has quickly ascended to become the second-largest protocol. Its TVL reached $850 million last week and hit the billion-dollar mark shortly after its launch on 1 February.\n' +
            '\n' +
            'On its debut day, Puffer Finance reported a TVL of $146 million, and by 10 February, it had surpassed both Renzo and Kelp DAO. In achieving this, it positioned itself just behind market leader Etherfi, which boasts a TVL of $1.04 billion.\n' +
            'The role of EigenLayer in boosting TVL\n' +
            'EigenLayer has emerged as a transformative force in the realm of liquid staking protocols, significantly influencing the TVL within this niche. \n' +
            'By enabling a novel approach to staking, EigenLayer facilitates the deposit and “restaking” of ether across various liquid staking tokens. This mechanism not only enhances the liquidity and flexibility of staked assets but also contributes to the overall security of the Ethereum network and third-party platforms.\n' +
            'At its core, EigenLayer’s innovation lies in its ability to repurpose staked ether for additional security purposes. By allowing users to “restake” their ether, the platform effectively leverages existing staked assets to bolster the security of multiple networks simultaneously. \n' +
            'This is a significant departure from traditional staking models, where staked assets are often locked up and contribute to the security of a single network alone. \n' +
            'The introduction of EigenLayer has had a direct impact on the growth of TVL across liquid staking protocols. By June 2023, when EigenLayer was launched on the Ethereum mainnet, it presented a compelling value proposition for investors and users of liquid staking tokens (LSTs). \n' +
            'The ability to deposit and restake Ether through EigenLayer not only provided users with a new avenue to participate in network security but also increased the attractiveness of liquid staking protocols as a means to generate yield on their Ether holdings. \n' +
            'As a result, protocols that integrated EigenLayer saw a substantial influx of deposits, contributing to the surge in TVL observed in recent months.\n' +
            'The total value locked in EigenLayer now exceeds $7 billion, with over $1.7 billion of $ETH restaked on the platform. \n' +
            'The appeal of LRTs\n' +
            'Liquid restaking tokens have emerged as a popular option for Ethereum investors, especially when native restaking caps on EigenLayer are reached. \n' +
            'Traditionally, staking involves locking up a certain amount of cryptocurrency to support the operation and security of a blockchain network. In return for their staked assets, participants receive rewards, typically in the form of additional cryptocurrency.\n' +
            'However, staked assets in a traditional staking model are often locked for a period, reducing their liquidity and limiting the ability of participants to use or trade these assets.\n' +
            'Liquid staking protocols address the liquidity issue by issuing synthetic assets or tokens that represent the staked assets. When users stake their cryptocurrency through a liquid staking protocol, they receive a liquid token in return. \n' +
            'This token represents their staked investment and can be traded, used in decentralised finance (DeFi) applications, or used as collateral for loans, all while the underlying assets remain staked in the network.\n' +
            'Protocols like EtherFi, Renzo, and Kelp continue to accept ether deposits, restaking these on behalf of users and issuing a derivative token along with points from Eigen. \n' +
            'This process not only secures additional rewards from the protocols themselves but also increases the chances of receiving tokens from EigenLayer through potential retroactive airdrops.\n' +
            'The appeal of LRT protocols is also noted in their potential for retroactive airdrops with minimal additional economic risks. By restaking an LST such as stETH on Kelp, users can accumulate points from both EigenLayer and KelpDAO. This enhances their prospects of earning rewards from both entities. \n',
    },
    {
        id: 7,
        image: news7,
        date: '03/03/2024',
        category: EFilters.Crypto,
        title: 'Bitcoin ETFs net $2.2B in a week, IBIT tops',
        description: 'Bitcoin ETFs experience a significant influx, netting $2.2 billion in a week, with IBIT by BlackRock leading the charge, showcasing the increasing institutional interest in cryptocurrency​​.',
        content: 'BlackRock’s IBIT continues to paves the way as Bitcoin ETFs garner $2.2 billion in a landmark week.\n' +
            'Bitcoin exchange-traded funds (ETFs) saw an influx of $2.2 billion last week, setting a new record for investment flows into the crypto space.\n' +
            'This surge, documented by BitMEX Research, underscored the growing appeal of cryptocurrencies as a viable investment option.\n' +
            '\n' +
            'From 12 February to 16 February, these ETFs attracted more than $2.2 billion. This marked the highest amount of capital directed into any exchange-traded product in the US during this timeframe.\n' +
            '\n' +
            'Bloomberg analyst, Eric Balchunas, highlighted the significance of this event, noting that the combined volume of inflows into these Bitcoin ETFs surpassed a market that includes over 3,400 ETFs.\n' +
            '\n' +
            'Leading the charge was BlackRock’s IBIT, which alone drew in over $1.6 billion. This accounted for half of BlackRock’s total net ETF flows out of 417 ETFs, with its year-to-date inflows reaching $5.2 billion.\n' +
            '\n' +
            'Other funds, such as Fidelity’s Wise Origin Bitcoin Fund and the Ark 21Shares Bitcoin ETF, also saw substantial inflows, further evidencing the burgeoning interest in cryptocurrency investments.\n' +
            '\n' +
            'Despite the overall positive trend, the Grayscale Bitcoin Trust experienced a different fate, with $624 million in outflows during the same period. This is an increase from the previous week’s $411 million.\n' +
            '\n' +
            'The shift in investor sentiment towards Grayscale, especially after its transition to a spot ETF on 10 January, which led to over $7 billion in capital outflows, contrasts sharply with the enthusiasm surrounding other Bitcoin ETFs.\n' +
            '\n' +
            'Last month, the Securities and Exchange Commission (SEC) greenlighted a total of eleven 19b-4 applications for the same from issuers: BlackRock, Ark Invest, Grayscale, VanEck, Bitwise, Fidelity, Hashdex, WisdomTree, Invesco Galaxy, Franklin, and Valkyrie.\n' +
            '\n' +
            'This gave investors direct exposure to Bitcoin without holding it. $BTC is the underlying asset of a spot Bitcoin ETF, unlike regular Bitcoin ETFs, in which Bitcoin futures contracts are the underlying asset.\n' +
            'Effect on Bitcoin\n' +
            'The influx of investments into Bitcoin ETFs has had a palpable impact on the market. \n' +
            'Bitcoin’s price soared to over $52,000 on 15 February, reaching its highest point in more than two years. This rally was accompanied by a notable increase in trading volume among Bitcoin ETFs, signalling a robust interest in cryptocurrency investments. \n' +
            'At the time of press, the top coin is changing hands for $53,353, up by over 2% daily and almost 10% weekly. \n' +
            'Both Awesome Oscillator (AO) and Moving Average Convergence/Divergence (MACD) emanated long green histograms on their respective charts. The Relative Strength Indicator (RSI) was also in the overbought region, above the 60 mark. \n' +
            'Traders could expect high price volatility and the Bollinger Bands expanded and moved away from each other. \n' +
            'Major financial institutions have also recognised the potential of these new ETFs. Recently, a coalition of Wall Street’s largest firms have been urging the SEC to revise guidelines that would enable banks to serve as custodians for Bitcoin funds.\n' +
            'According to Santiment, the seven leading spot ETFs experienced daily trading volumes exceeding $1.8 billion in early February. This stands as a testament to the growing integration of digital assets into traditional investment portfolios.\n' +
            'As investments continue to flow into Bitcoin ETFs, the cryptocurrency market is poised for further growth, offering new opportunities for investors looking to diversify their portfolios with digital assets.\n',
    },
    {
        id: 8,
        image: news8,
        date: '02/03/2024',
        category: EFilters.Crypto,
        title: 'Whales withdraw $1B in BTC from Coinbase',
        description: 'In a notable event, whales withdraw $1 billion in BTC from Coinbase, sending ripples through the crypto market and underscoring the dynamic nature of cryptocurrency holdings​​.',
        content: 'Coinbase now has $20.5bn in its public order book, which is its lowest level since 2015.\n' +
            'Bitcoin holdings on Coinbase, one of the leading cryptocurrency exchanges, have hit a nine-year low as users strategically move a substantial chunk of their holdings off the platform. \n' +
            'The latest data from CryptoQuant reveals that over the weekend, whales orchestrated the transfer of 18,000 $BTC, amounting to nearly $1 billion, from Coinbase. \n' +
            'The values per transfer ranged between $45 million and $171 million, leaving Coinbase’s public order book with approximately 394,000 $BTC, equivalent to an estimated $20.5bn.\n' +
            'Where is the BTC going? \n' +
            'The migration of Bitcoin holdings away from centralised exchanges, particularly Coinbase, is often viewed as a bullish indicator, signalling reduced availability for sale.\n' +
            'However, the crypto community on social media finds itself divided on the motives behind these transfers. Some speculate that the funds are finding refuge in custodial wallets, anticipating a potential surge in prices. \n' +
            'The looming Bitcoin halving, just two months away, is seen as a key factor contributing to this supply shock. Conversely, there are voices suggesting that these moved funds might be earmarked for liquidity in over-the-counter (OTC) trades.\n' +
            'Adding another layer of complexity, some argue that these withdrawals may be going to a different custodian, asserting that a substantial portion of assets on exchanges does not truly belong to individual users due to their centralised nature.\n' +
            'Bitcoin halving\n' +
            'The upcoming Bitcoin halving, slated for April at a block height of 740,000, is set to further tighten the supply of new $BTC entering the market. During each halving cycle, the block reward for miners is halved, reducing the new $BTC supply. In this case, the block reward will drop from 6.25 BTC to 3.125 $BTC. \n' +
            'This scarcity will be combined with robust institutional demand, following the approval of 11 spot Bitcoin exchange-traded funds (ETFs) in the United States in January.\n' +
            'Currently, around 900 $BTC is mined daily, while daily net inflows for Bitcoin ETFs hover around half a billion dollars or roughly 9,650 $BTC. Even with Grayscale registering nearly $100m in daily outflows, institutional interest remains strong. \n' +
            'Post-halving in April, the daily mined $BTC will see a reduction to about 450 $BTC, creating a significant supply-demand gap. Historical data suggests that such gaps have historically favoured bullish trends in the Bitcoin price, often leading to new all-time highs within a year of the halving event.\n' +
            'Bitcoin recent price movement\n' +
            'After a bearish slump following the sell-the-news reaction to the ETF approval, Bitcoin has made strong gains over the past few weeks. \n' +
            'Bitcoin is trading at around $52,000, its highest level since December 2021. The largest cryptocurrency is up 4% in the past seven days and 25% in the past month. However, it is still down 25% from it’s all-time high of around $69,000.\n',
    },
]