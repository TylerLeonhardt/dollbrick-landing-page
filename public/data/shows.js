const spoonsIn = {
    title: "Spoons In: A Last Supper",
    description: "Several guests are brought together by a mysterious host—someone who knows each of them from their past. As the evening unfolds, a shocking revelation emerges: one of them will betray the host before the night is over. Can you guess who the betrayer is before it's too late? Very loosely based on a certain famous supper featuring betrayal.",
    location: "Seattle, WA"
};

const shows = [
    {
        ...spoonsIn,
        date: new Date(2025, 0, 26, 19, 30),
        // tickets: "put URL here"
    },
    {
        ...spoonsIn,
        date: new Date(2025, 1, 14, 21, 30),
        // tickets: "put URL here"
    }
];

export default shows;