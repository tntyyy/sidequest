import {TChapter} from '@/src/layouts/WhitePaper/constants/chapters';
import {ReactNode} from 'react';

export type TWhitePaper = {
  id: number;
  chapterId: TChapter['id'];
  content: ReactNode;
};

// to add a new chapter, add a new element to the array,
// preserving the structure. use ready-made tags for the content,
// they are already stylized

export const whitepaperData: TWhitePaper[] = [
    {
      id: 1,
      chapterId: 1,
      content: (
          <>
            <h3>Introduction</h3>
            <p>
              The past decade has witnessed increasing penetration of Web 3 as a result of its  nature of decentralization meeting specific user demands. For example, cross border payment; store of wealth in the context of currency depreciation and hyper inflation
            </p>
            <p>
              Most Web 3 products today, however, are still far away from mass adoptions, as their abstract concepts and high learning cost fail to address specific pain points. For example crypto wallet with long addresses, high gas fees and network incompatibility; boring web 3 games that have no real players to play
            </p>
            <p>
              Our mission is to realize mass adoption of Web 3 through user-centric products. We aim to leverage the decentralized features of crypto to meet specific user demands and address specific user pain points, creating products with real product market fit
            </p>
            <p>
              We see gaming and social as our first segment to form our core user base. With that we are ready to expand into more markets
            </p>
          </>
      ),
    },
    {
        id: 2,
        chapterId: 2,
        content: (
            <>
              <h3>Market and Users</h3>
              <div>
                We are focused on the gaming market due to its virtual nature and our experience:
                <ul>
                  <li>
                    The market is online and virtual based and thus is easier for web 3 penetration than the offline and physical
                  </li>
                  <li>
                    Our team has a wealth of knowledge and experience in this market, with in-depth understanding of its users
                  </li>
                </ul>
              </div>
              <div>
                In our view, the gaming industry are facing issues of rising R&D and publishing costs and they apply for both traditional and web 3 games:
                <ul>
                  <li>
                    R&D wise, it takes up to tens or even hundreds of millions to develop a proper game now, as there are too many games in the market already, only those new games with outstanding qualities will be able to grab people’s attention from the existing ones. As a result, people would want to know how likely their games would be successful at early point of development investment
                  </li>
                  <li>
                    Publishing wise, cost of buying traffic has been increasing year over year, with more and more new games are out and buying ads on google and facebook, yet growth in internet penetration and people’s screen time has been slowing. As a result, people are look for alternative growth through content and social connections. This would particularly true for Web 3 games where the high cost of on-ramp process usually result in ultra high loss in conversion, ultimately leading to failures in the CPM based google/facebook traffic buying for Web 3
                  </li>
                </ul>
              </div>
              <div>
                To address those issues, we believe it will be important to leverage the Community Enthusiasts that facilitate content creation and social connections and thus ultimately access a large collections of private user bases:
                <ul>
                  <li>
                    In our definition, the Community Enthusiasts are organizers of online communities who acquire, engage and support members for the communities. For example, admins and moderators of discord servers, telegram/whatsapp groups, Twitch/Youtube live streaming chat groups as well as other social media channels are perfect examples of the Community Enthusiasts
                  </li>
                  <li>
                    The Community Enthusiasts effectively control the access to user bases of various online communities, because they play essential roles in creating content and forming social connections for such communities. They a) post text, photos, audios and videos; b) plan, promote and execute events; c) support and educate community members; and d) in some important cases they connect and support community influencers, with regard to content moderation, business development and content creation. Without the Community Enthusiasts, there will not be a proper functioning community
                  </li>
                  <li>
                    We have noticed an interesting fact: influencers are usually costly to work with and are overserved with various software solutions and human support, while on the other hand, the Community Enthusiasts who are perhaps equally valuable to a communities are financially reasonable to be accessed and are underserved in terms of software tools and human support to help them grow
                  </li>
                </ul>
              </div>
              <p>
                In one words, we aim to serve and connect Community Enthusiasts, through whom we will serve and connect the whole gaming and social world
              </p>
            </>
        ),
    },
    {
        id: 3,
        chapterId: 3,
        content: (
            <>
                <h3>Why SideQuest</h3>
                <div>
                    <ul>
                        <li>We believe the SideQuest team has unparalleled access to gaming and social community in
                            comparison to others.
                        </li>
                        <li>
                            Users are the key, and we have the users
                        </li>
                    </ul>
                </div>
            </>
        ),
    },
    {
        id: 4,
        chapterId: 4,
        content: (
            <>
                <h3>Product Concepts</h3>
                <div>
                    We have seen the following pain points facing the Community Enthusiasts through our team’s years of interactions with them:
                    <ul>
                        <li>
                            First and foremost, lack of monetization tools and mechanisms that help to pay off their contribution to the communities. And accordingly, there is a lack of payment solutions that are low cost, reliable and secure; as well as a lack of seamless integrations across various platforms and games they are working with, resulting in super manual and timing consuming bad user experiences
                        </li>
                        <li>
                            Secondly, no AI resources available yet that are fine tuned for specific user case  to unleash their creativity and capability for content creation and community management. There is still a high barrier of learning cost to use ChatGPT or alike that are generally applicable but not use case specific
                        </li>
                    </ul>
                </div>
                <div>
                    Our product concepts aim to address the user pain points above of the Community Enthusiasts:
                    <ul>
                        <li>
                            Blockchain enabled platforms and mechanisms that provide the Community Enthusiasts with monetization opportunities, with features including but not limited to revenue sharing mechanisms, escrow services and analytical tools. Accordingly, It will be integrated with crypto native payment solutions that are low cost, secure, reliable and user friendly on ramp and off ramp channels. In addition, we aim to integrate seamlessly with games and social media platforms, that turn the previous manual work into a few click solutions
                        </li>
                        <li>
                            AI powered capabilities to facilitate the Community Enthusiasts to create contents and management communities, with features including but not limited to user generated AI characters, user case specific text to image and video, as well as smart assistant in community support and content moderation. We are closely following the latest development in generative AI breakthrough and are well positioned to apply such breakthrough into specific use cases with our access to communities
                        </li>
                    </ul>
                </div>
                <div>
                    In our view, product development is an iterative process through constant interactions between product managers and the user community. We will provide update on our product plan periodically
                </div>
            </>
        ),
    },
    {
        id: 5,
        chapterId: 5,
        content: (
            <>
                <h3>Tokenomics</h3>
                <div>
                    Our tokenomics shall consists of three layers: fundamental, internal market， and external market
                    <ul>
                        <li>
                            First layer: the fundamental layer is based on the operating incomes to be generated from the community ecosystem. We believe this is one of the primary differentiators of our tokenomics from a pure ponzi like model: the operating incomes generated based on real user values will provide solid fundamentals, especially during the downward cycles. Examples of such operating incomes include: a) commissions; b) subscription income; and c) ads monetization
                        </li>
                        <li>
                            Second layer: the internal market layer refers to the trading of the “organization tokens” within our chain. We plan to introduce organization tokens that represent the operating incomes and monetization potentials of an online  organization (e.g. a discord server). To a certain extent, organization keys are similar to the friend.tech personal keys, but the core difference is that the former is based on an online organization, while the latter is based on an individual. We are excited about how the organization keys will empower the Community Enthusiasts in supporting, engaging and expanding their existing online communities. We are exploring options to create a L2 within a major L1 ecosystem, which will host the tradings of the organization keys
                        </li>
                        <li>
                            Third layer: the external market refers to the trading of SideQuest tokens publicly through P2P, DEXs and/or CEXs. In our plan, the price performance of SideQuest tokens will be backed up by the TVL brought by the second layer activities in the internal market which is, in turn, based on the solid fundamentals of operating income form the first layer
                        </li>
                    </ul>
                </div>
                <p>
                    We will share update of our tokenomics periodically based on the feedback received from the community and the market trends
                </p>
            </>
        ),
    },
    {
        id: 6,
        chapterId: 6,
        content: (
            <>
                <h3>Roadmap</h3>
                <p>
                    We have planned the roadmap of our project based on the aforementioned three layer tokenomics, with 1) phase 1: building the fundamentals; 2) phase 2: forming the internal market; and 3) phase 3: performing in the public market
                </p>
                <div>
                    Phase 1: building the fundamentals:
                    <ul>
                        <li>
                            Our goal in this phase is to roll out MVP versions that focus on creating fundamental operating incomes for the Community Enthusiasts
                        </li>
                        <li>
                            Such MVP versions will be based on the aforementioned product concepts: monetization platforms and mechanism and use case specific AI capabilities
                        </li>

                    </ul>
                </div>
                <div>
                    Phase 2: forming the internal market:
                    <ul>
                        <li>
                            Our goal in this phase is to introduce organization keys based on the prior success in achieving fundamental operating incomes
                        </li>
                        <li>
                            We will form infrastructures for the trading of the organization keys and strive to introduce sufficient liquidity for the initial trading
                        </li>
                        <li>
                            In the meantime, we will continue to improve our product that boost the fundamental operating income and influence of the Community Enthusiasts
                        </li>
                    </ul>
                </div>
                <div>
                    Phase 3: performing in the public market
                    <ul>
                        <li>
                            Building up success of the prior two phases, our goal in phase 3 is to list the SideQuest on major CEXs and DEXs
                        </li>
                        <li>
                            In the meantime, we plan to meaningfully upgrade our product, expand our community base and increase the TVL of our potential L2 chain
                        </li>
                    </ul>
                </div>
            </>
        ),
    },
    {
        id: 7,
        chapterId: 7,
        content: (
            <>
                <h3>Team</h3>
                <div>
                    HeyFishZ (Co-Founder):
                    <ul>
                        <li>
                            2013, 2014, 2015 UK LOL League 3rd place
                        </li>
                        <li>
                            2018 EU master franchisor of Wanyoo China LTD
                        </li>
                        <li>
                            2020 SideQuest Meta founder
                        </li>
                    </ul>
                </div>
                <div>
                    San (Co-Founder):
                    <ul>
                        <li>
                            Board member of various game studios & charities
                        </li>
                        <li>
                            Games industry investor ($2bn deployed)
                        </li>
                        <li>
                            Bulge Bracket i-banker
                        </li>
                        <li>
                            University of Cambridge
                        </li>
                    </ul>
                </div>
                <div>
                    Michael (Co-Founder):
                    <ul>
                        <li>
                            Product operation lead of Trovo.live with over 20M registered users
                        </li>
                        <li>
                            Product operation lead of marketplace platform with over 300M annual GMV
                        </li>
                        <li>
                            Peking University
                        </li>
                    </ul>
                </div>
                <div>
                    D.F (Co-Founder):
                    <ul>
                        <li>
                            Co-Founder of Trovo.live
                        </li>
                        <li>
                            Owner of streamer network “Wings”
                        </li>
                        <li>
                            Head of operations of PUBG Champions League
                        </li>
                        <li>
                            Peking University
                        </li>
                    </ul>
                </div>
            </>
        ),
    },
    {
        id: 8,
        chapterId: 8,
        content: (
            <>
                <h3>Social Media</h3>
                <ul>
                    <li>
                        <a target='_blank' href='https://www.instagram.com/sidequest_hub/'>Instagram</a>
                    </li>
                    <li>
                        <a target='_blank' href="https://linktr.ee/SideQuestProject">Discord</a>
                    </li>
                    <li>
                        <a target='_blank' href='https://tr.ee/Mf98ZDfwsu'>TikTok</a>
                    </li>
                    <li>
                        <a target='_blank' href='https://twitter.com/SideQuest_Hub'>Twitter</a>
                    </li>
                    <li>
                        <a target='_blank' href='https://www.twitch.tv/sidequesthub'>Twitch</a>
                    </li>
                    <li>
                        <a target='_blank' href='https://www.facebook.com/sidequesthub'>Facebook</a>
                    </li>
                    <li>
                        <a target='_blank' href='https://www.youtube.com/@sidequestgamershub/videos '>YouTube</a>
                    </li>
                </ul>
            </>
        ),
    }
];