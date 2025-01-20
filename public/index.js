import React from "https://esm.sh/react@18.3.1";
import ReactDOM from "https://esm.sh/react-dom@18.3.1";
import htm from "https://esm.sh/htm@3.1.1";
import { Card, ImageHeader, CardBody, CardFooter } from 'https://esm.sh/react-simple-card@latest';
import shows from './data/shows.js';

const html = htm.bind(React.createElement);

const Header = () => html`
<header>
  <h1>
    <div className="logo sixtyfour-convergence-font">
      <span className="logo--top">Dollbrick Improv Collective</span>
    </div>
  </h1>
</header>
`;

const HeroBanner = () => html`
  <section className="hero-banner">
    <div className="hero-banner-image"></div>
  </section>
`;

const Show = ({ show }) => {
  const now = new Date();
  const isPast = show.date <= now;

  return html`
    <${Card} className="show">
      <${ImageHeader} className="show-image" alt="testAlt" imageSrc="${show.image ?? './assets/images/hero-image.png'}" />
      <${CardBody}>
        <h2 class="center">${show.title}</h2>
        ${show.jetCity ? html`<h5 class="center">In collaboration with <a target="_blank" href="https://www.jetcityimprov.org">Jet City Improv</a></h5>` : ''}
        <p>${show.date.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })} - ${show.location}</p>
        <p>${show.description}</p>
      </${CardBody}>
      ${!isPast && html`
        <${CardFooter}>
          <a disabled=${!!show.tickets} href=${show.tickets}>${!show.tickets ? 'Tickets on sale soon!' : 'Tickets'}</a>
        </CardFooter>
      `}
    </${Card}>
  `;
};

const ShowList = ({ shows, title, showMoreMessage = true }) => html`
  <h2>${title}</h2>
  ${shows.map(show => html`<${Show} show=${show} />`)}
  ${showMoreMessage && (shows.length ? html`<h5>More shows coming soon...</h5>` : html`<h5>Upcoming shows coming soon...</h5>`)}
`;

const Home = () => {
  const now = new Date();
  const futureShows = shows.filter(show => show.date > now);
  const pastShows = shows.filter(show => show.date <= now).slice(-5);

  return html`
    <React.Fragment>
      <${HeroBanner}/>
      <section className="main-content">
        <h1 class="center">Who are we?</h1>
        <p>Hey there! We're Dollbrick, a Seattle-based improv group that's been making folks laugh since 2023.</p>
        <p>We love diving into long form improv, but we're not above some quick, silly games either. Our name came from a goofy improv scene—come see us live and maybe we'll spill the details. Expect lots of laughs and unexpected fun! 🎭🧱</p>
        <div class="show-lists">
          <${ShowList} shows=${futureShows} title="Upcoming Shows" />
          <${ShowList} shows=${pastShows} title="Past Shows" showMoreMessage=${false} />
        </div>
      </section>
    </React.Fragment>
  `;
};

const Footer = () => {
  return html`
    <footer>
      <div class="center">
        🥺<br />
        👉👈<br />
        <h5>Come to a show?</h5>
      </div>
    </footer>
  `;
}

const App = () => html`
<${Header} />
<main>
<${Home} />
</main>
<${Footer} />
`;

async function main() {
  ReactDOM.render(html`<${App} />`, document.body);
}

main();
