// @ts-check

/**
 * @typedef {Object} Show
 * @property {string} title - The title of the show.
 * @property {string} description - A description of the show.
 * @property {string} location - The location of the show.
 * @property {Date} date - The date and time of the show.
 * @property {string} [image] - The image to display for the show.
 * @property {boolean} jetCity - Whether the show is in collaboration with Jet City Improv.
 * @property {string} [tickets] - The URL to purchase tickets.
 */

/** @type{Partial<Show>} */
const spoonsIn = {
    title: "Spoons In: A Last Supper",
    description: "Several guests are brought together by a mysterious host—someone who knows each of them from their past. As the evening unfolds, a shocking revelation emerges: one of them will betray the host before the night is over. Can you guess who the betrayer is before it's too late? Very loosely based on a certain famous supper featuring betrayal.",
    location: "Seattle, WA",
    image: './assets/images/spoons-in.jpg',
    jetCity: true,
};

/** @type{Partial<Show>} */
const indieProv = {
    title: "Indie Prov",
    description: "Dollbrick is performing as a part of Indie Prov! This unique event features a rotating roster of the city's finest independent improv teams and groups, coming together to create a night of laughter, creativity, and spontaneous entertainment. This is your chance to witness the magic of unscripted comedy while supporting the local improv community and embracing the vibrant spirit of creativity that defines Seattle's entertainment scene.",
    location: "Seattle, WA",
    image: './assets/images/indie-prov.png',
    jetCity: true,
}

/** @type{Partial<Show>} */
const showcase303 = {
    title: "Genre Mash Up & Choose Your Own Adventure - Two Shows in One!",
    description: "What if we told you that the advanced Improv 303 class invented two brand new improv formats that put you in the driver's seat of storytelling? In one, you'll choose your favorite entertainment genres, and witness the action play out spontaneously in front of you… with a twist. In the other, yours will be the voice of destiny that guides your chosen hero (or anti-hero) on an unforgettable adventure. These are tales that have never been told before, never shall be again - and only you have the power to shape them to your imagination.",
    jetCity: true,
    location: "Seattle, WA"
};

/** @type {Array<Show>} */
const shows = [
    {
        ...indieProv,
        date: new Date("2025-01-10T19:30:00-08:00"),
        tickets: 'https://jetcityimprov.my.salesforce-sites.com/ticket/PatronTicket__PublicTicketApp#/instances/a03VW00000LYY4pYAH',
    },
    {
        ...spoonsIn,
        date: new Date(2025, 0, 26, 19, 30),
        tickets: "https://jetcityimprov.my.salesforce-sites.com/ticket/PatronTicket__PublicTicketApp#/instances/a03VW00000MDf8jYAD"
    },
    {
        ...spoonsIn,
        date: new Date(2025, 1, 14, 21, 30),
        tickets: "https://jetcityimprov.my.salesforce-sites.com/ticket/PatronTicket__PublicTicketApp#/instances/a03VW00000MDU2wYAH"
    },
    {
        ...indieProv,
        date: new Date("2025-05-09T19:30:00-08:00"),
        tickets: 'https://jetcityimprov.my.salesforce-sites.com/ticket/PatronTicket__PublicTicketApp#/instances/a03VW00000LYmR7YAL',
    },

    // Past

    {
        ...spoonsIn,
        date: new Date("2024-09-25T19:30:00-08:00"),
    },
    {
        ...showcase303,
        date: new Date("2024-11-25T19:30:00-08:00"),
        tickets: 'https://jetcityimprov.my.salesforce-sites.com/ticket/PatronTicket__PublicTicketApp#/instances/a03VW00000JkOqnYAF',
    },
    {
        ...showcase303,
        date: new Date("2024-11-26T19:30:00-08:00"),
        tickets: 'https://jetcityimprov.my.salesforce-sites.com/ticket/PatronTicket__PublicTicketApp#/instances/a03VW00000JkM5qYAF',
    },
].sort((a, b) => a.date.getTime() - b.date.getTime());

export default shows;