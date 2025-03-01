import React from "https://esm.sh/react@18.3.1";
import ReactDOM from "https://esm.sh/react-dom@18.3.1";
import htm from "https://esm.sh/htm@3.1.1";
import { Card, ImageHeader, CardBody, CardFooter } from 'https://esm.sh/react-simple-card@latest';
import shows from './data/shows.js';

const html = htm.bind(React.createElement);

const InstagramIcon = ({ className = '' }) => html`
  <a href="https://instagram.com/dollbrickimprov" target="_blank" rel="noopener noreferrer" className=${`social-icon ${className}`}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  </a>
`;

const FacebookIcon = ({ className = '' }) => html`
  <a href="https://facebook.com/dollbrickimprov" target="_blank" rel="noopener noreferrer" className=${`social-icon ${className}`}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
    </svg>
  </a>
`;

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
        </${CardFooter}>
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
  const pastShows = shows.filter(show => show.date <= now).slice(-5).reverse();

  return html`
    <React.Fragment>
      <${HeroBanner}/>
      <section className="main-content">
        <h1 class="center">Who are we?</h1>
        <p>Hey there! We're Dollbrick, a Seattle-based improv group that's been making folks laugh since 2023.</p>
        <p>We love diving into long form improv, but we're not above some quick, silly games either. Our name came from a goofy improv scene—come see us live and maybe we'll spill the details. Expect lots of laughs and unexpected fun! 🎭🧱</p>
        <div class="social-links">
          <${InstagramIcon} />
          <${FacebookIcon} />
        </div>
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
