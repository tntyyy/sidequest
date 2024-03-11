export type TQuestion = {
    number: number;
    title: string;
    content: string;
}

export const questionsData: TQuestion[] = [
    {
        number: 1,
        title: 'How does SideQuest`s escrow service work?',
        content: 'It holds funds securely on the blockchain when you select a player to game with. After the gaming session, if both parties are satisfied, the funds are released to the player providing the service. If not, users can appeal for a refund within 48 hours',
    },
    {
        number: 2,
        title: 'How can I integrate SideQuest into my Discord server?',
        content: 'Integrating SideQuest into your Discord server is straightforward. Visit our website for detailed tutorials on how to add SideQuest to your server, enhancing your gaming experience with secure transactions and easy match-making',
    },
    {
        number: 3,
        title: 'What is the /Play command?',
        content: 'The /Play command in our Discord bot helps you find gaming partners. It presents profiles of players, including their games, rates, and other info, allowing you to select a player to game with securely',
    },
    {
        number: 4,
        title: 'How do I set up my profile?',
        content: 'Use the /Profile command to set up or share your gaming profile. "Setup Profile" lets you enter details like your preferred games and rates, while "Share Profile" makes your profile visible within enabled Discord servers',
    },
    {
        number: 5,
        title: 'Is my payment secure with SideQuest?',
        content: 'Absolutely. Our blockchain-based escrow service ensures that your payment is securely held until the gaming session is completed satisfactorily, offering a refund mechanism if the service is not provided as agreed',
    },
    {
        number: 6,
        title: 'Can I remain anonymous using SideQuest?',
        content: 'Yes, SideQuest values your privacy. Our platform is designed to keep your transactions anonymous - by creating an infrastructure free of traditional payments your profile remains secure from tracing',
    },
];