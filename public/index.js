import ReactDOM from "https://esm.sh/react-dom@18.3.1";
import { html } from "https://esm.sh/htm@3.1.1/react";
import { Card, ImageHeader, CardBody, CardFooter } from 'https://esm.sh/react-simple-card@latest';
import shows from './data/shows.js';

const Logo = () => html`
<div className="logo sixtyfour-convergence-font">
  <span className="logo--top">Dollbrick Improv Collective Kitchen</span>
</div>
`;

const Header = () => html`
<header>
  <h1>
    <${Logo} />
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
    <${Card}>
      <${ImageHeader} className="image-header" alt="testAlt" imageSrc="${show.image ?? './assets/images/hero-image.png'}" />
      <${CardBody}>
        <h3>${show.title}</h3>
        ${show.jetCity ? html`<h5 class="center">In collaboration with <a target="_blank" href="https://www.jetcityimprov.org">Jet City Improv</a></h5>` : ''}
        <p className="show-info">${show.date.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })} - ${show.location}</p>
        <p className="show-info">${show.description}</p>
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
  <h4>${title}</h4>
  <div className="show">
    ${shows.map(show => html`<${Show} show=${show} />`)}
    ${showMoreMessage && (shows.length ? html`<h5>More shows coming soon...</h5>` : html`<h5>Upcoming shows coming soon...</h5>`)}
  </div>
`;

const Home = () => {
  const now = new Date();
  const futureShows = shows.filter(show => show.date > now);
  const pastShows = shows.filter(show => show.date <= now).slice(-5);

  return html`
    <React.Fragment>
      <${HeroBanner}/>
      <section className="main-content shows">
        <h3>Who are we?</h3>
        <p className="show-info">Hey there! We're Dollbrick, a Seattle-based improv group that's been making folks laugh since 2023.</p>
        <p className="show-info">We love diving into long form improv, but we're not above some quick, silly games either. Our name came from a goofy improv scene—come see us live and maybe we'll spill the details. Expect lots of laughs and unexpected fun! 🧱🎭</p>
        <${ShowList} shows=${futureShows} title="Upcoming Shows" />
        <${ShowList} shows=${pastShows} title="Past Shows" showMoreMessage=${false} />
      </section>
    </React.Fragment>
  `;
};

const Footer = () => {
  return html`
    <footer>
      <div className="coffee-shop-footer">
        <${Logo} />
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
