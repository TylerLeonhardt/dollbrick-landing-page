// @ts-check

/**
 * Helper function to create a date object from year, month, day, hour, and minute.
 * @param {number} year 
 * @param {'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec'} month 
 * @param {number} day
 * @param {number} hour
 * @param {number} minute
 * @param {'AM' | 'PM'} ampm - 'AM' or 'PM' to specify the time of day.
 * @returns {Date}
 */
function getDate(year, month, day, hour, minute, ampm) {
    const monthMap = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11};
    hour = ampm === 'PM' && hour < 12 ? hour + 12 : hour;
    hour = ampm === 'AM' && hour === 12 ? 0 : hour;
    return new Date(year, monthMap[month], day, hour, minute);
}

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

const spoonsIn = {
    title: "Spoons In: An Improvised Story of Betrayal",
    description: "Several guests are brought together by a mysterious host—someone who knows each of them from their past. As the evening unfolds, a shocking revelation emerges: one of them will betray the host before the night is over. Can you guess who the betrayer is before it's too late? Very loosely based on a certain famous supper featuring betrayal.",
    image: './assets/images/spoons-in.png',
    jetCity: true,
};

const indieProv = {
    title: "Indie Prov",
    description: "Dollbrick is performing as a part of Indie Prov! This unique event features a rotating roster of the city's finest independent improv teams and groups, coming together to create a night of laughter, creativity, and spontaneous entertainment. This is your chance to witness the magic of unscripted comedy while supporting the local improv community and embracing the vibrant spirit of creativity that defines Seattle's entertainment scene.",
    location: 'The Drama Room @ University Heights Center',
    image: './assets/images/indie-prov.png',
    jetCity: true,
}

const showcase303 = {
    title: "Genre Mash Up & Choose Your Own Adventure - Two Shows in One!",
    description: "What if we told you that the advanced Improv 303 class invented two brand new improv formats that put you in the driver's seat of storytelling? In one, you'll choose your favorite entertainment genres, and witness the action play out spontaneously in front of you… with a twist. In the other, yours will be the voice of destiny that guides your chosen hero (or anti-hero) on an unforgettable adventure. These are tales that have never been told before, never shall be again - and only you have the power to shape them to your imagination.",
    jetCity: true,
    location: 'West of Lenin',
};

const vermillion = {
    title: "Improv @ Vermillion",
    jetCity: false,
    location: "Vermillion Art Gallery & Bar"
}

/** @type {Array<Show>} */
const shows = [
    {
        ...vermillion,
        description: "FREE SHOW! Come see Just Happy to Be Here and Dollbrick perform improv at Vermillion - it's gonna be a night of laughs and good vibes!",
        date: getDate(2025, 'Jul', 13, 7, 30, 'PM'),
        image: './assets/images/jhtbh-dollbrick-2025-07-13.jpg',
        tickets: 'https://www.eventbrite.com/e/improv-vermillion-tickets-1462398115129'
    },
    {
        ...indieProv,
        date: getDate(2025, 'Jun', 13, 7, 30, 'PM'),
        tickets: 'https://jetcityimprov.my.salesforce-sites.com/ticket/PatronTicket__PublicTicketApp#/instances/a03VW00000LYhCxYAL'
    },
    {
        title: "Improv Kitchen - Featuring Dollbrick & The Superlatives!",
        description: "A fun hour-long show featuring local Indie Prov groups! Join us in CSz Seattle's The Other Theatre for improv from your favorite local Indie Prov groups!",
        location: 'The Other Theatre',
        date: getDate(2025, 'May', 24, 8, 0, 'PM'),
        tickets: 'https://comedysportzseattle.vbotickets.com/event/improv_kitchen_indie_comedy_cooking_up_something_good/149550'
    },
    {
        ...spoonsIn,
        location: 'West of Lenin',
        date: getDate(2025, 'Jul', 24, 7, 30, 'PM'),
        tickets: 'https://jetcityimprov.my.salesforce-sites.com/ticket/PatronTicket__PublicTicketApp#/instances/a03VW00000UP0MvYAL'
    },
    {
        title: "Improv Show featuring Formerly Known As",
        description: "Come see Formerly Known As perform improv at The Rendezvous in the intimate Jewelbox Theater! There may be additional performers joining the show - stay tuned for more details!",
        location: "The Rendezvous - Jewelbox Theater",
        date: getDate(2025, 'Aug', 31, 7, 0, 'PM'),
        jetCity: false
    },
    // Past
    {
        ...indieProv,
        date: getDate(2025, 'May', 9, 7, 30, 'PM'),
        tickets: 'https://jetcityimprov.my.salesforce-sites.com/ticket/PatronTicket__PublicTicketApp#/instances/a03VW00000LYmR7YAL',
    },
    {
        ...spoonsIn,
        location: 'The Drama Room @ University Heights Center',
        date: getDate(2025, 'May', 9, 9, 30, 'PM'),
        tickets: 'https://jetcityimprov.my.salesforce-sites.com/ticket/PatronTicket__PublicTicketApp#/instances/a03VW00000QgcbPYAR'
    },
    {
        ...vermillion,
        description: "FREE SHOW! Come see Them's The Breaks and Dollbrick perform improv at Vermillion - it's gonna be a night of laughs and good vibes!",
        date: getDate(2025, 'May', 4, 7, 30, 'PM'),
        image: './assets/images/verm-ttb-05042025.jpg',
        tickets: 'https://www.eventbrite.com/e/improv-vermillion-featuring-thems-the-breaks-dollbrick-tickets-1304922511359'
    },
    {
        ...vermillion,
        description: "FREE SHOW! Come see Formerly Known As and Dollbrick perform improv at Vermillion - it's gonna be a night of laughs and good vibes!",
        date: getDate(2025, 'Mar', 9, 8, 0, 'PM'),
        image: './assets/images/vermillion-fka.jpg',
        tickets: "https://www.eventbrite.com/e/improv-vermillion-featuring-formerly-known-as-dollbrick-tickets-1265565553639?aff=oddtdtcreator"
    },
    {
        ...spoonsIn,
        location: 'The Drama Room @ University Heights Center',
        date: getDate(2024, 'Sep', 25, 7, 30, 'PM'),
    },
    {
        ...showcase303,
        date: getDate(2024, 'Nov', 25, 7, 30, 'PM'),
        tickets: 'https://jetcityimprov.my.salesforce-sites.com/ticket/PatronTicket__PublicTicketApp#/instances/a03VW00000JkOqnYAF',
    },
    {
        ...showcase303,
        date: getDate(2024, 'Nov', 26, 7, 30, 'PM'),
        tickets: 'https://jetcityimprov.my.salesforce-sites.com/ticket/PatronTicket__PublicTicketApp#/instances/a03VW00000JkM5qYAF',
    },
    {
        ...indieProv,
        date: getDate(2025, 'Jan', 10, 7, 30, 'PM'),
        tickets: 'https://jetcityimprov.my.salesforce-sites.com/ticket/PatronTicket__PublicTicketApp#/instances/a03VW00000LYY4pYAH',
    },
    {
        ...spoonsIn,
        location: 'The Drama Room @ University Heights Center',
        date: getDate(2025, 'Jan', 26, 7, 30, 'PM'),
        tickets: "https://jetcityimprov.my.salesforce-sites.com/ticket/PatronTicket__PublicTicketApp#/instances/a03VW00000MDf8jYAD"
    },
    {
        ...spoonsIn,
        location: 'The Drama Room @ University Heights Center',
        date: getDate(2025, 'Feb', 14, 9, 30, 'PM'),
        tickets: "https://jetcityimprov.my.salesforce-sites.com/ticket/PatronTicket__PublicTicketApp#/instances/a03VW00000MDU2wYAH"
    }
].sort((a, b) => a.date.getTime() - b.date.getTime());

export default shows;
