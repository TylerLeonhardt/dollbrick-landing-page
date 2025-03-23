import React from "https://esm.sh/react@18.3.1";
import ReactDOM from "https://esm.sh/react-dom@18.3.1";
import htm from "https://esm.sh/htm@3.1.1";
import { Card, ImageHeader, CardBody, CardFooter } from 'https://esm.sh/react-simple-card@latest';

const html = htm.bind(React.createElement);

const Header = () => html`
<header>
  <h1>
    <div 
      className="logo sixtyfour-convergence-font" 
      onClick=${() => window.location.href = '/'}
    >
      <span className="logo--top">Dollbrick Improv Collective</span>
    </div>
  </h1>
</header>
`;

const HeroBanner = () => html`
  <section className="hero-banner-small">
    <div className="hero-banner-image"></div>
  </section>
`;

const SocialCard = ({ footer, link, qr }) => html`
  <${Card} className="card-container">
    <${ImageHeader} alt="testAlt" className="qr-img" imageSrc="${qr}"/>
    <${CardFooter}>
      <p>
        <a href=${link} target="_blank">${footer}</a>
      </p>
    </${CardFooter}>
  </${Card}>
`;

const Support = () => html`
  <section className="main-content">
    <h1 className="center">Support Dollbrick</h1>
    <p className="center">Help us keep the laughs coming by connecting with us on social media or supporting us directly!</p>

    <div className="sections-container">
      <div className="support-section">
        <${SocialCard}
          footer="Support us on Venmo"
          link="#"
          qr="./assets/images/qr-venmo.png"
        />
      </div>

      <div className="support-section">
        <${SocialCard} 
          footer="Follow us on Instagram"
          link="https://instagram.com/dollbrickimprov"
          qr="./assets/images/qr-ig.png"
        />
        <${SocialCard}
          footer="Follow us on Facebook"
          link="https://facebook.com/dollbrickimprov"
          qr="./assets/images/qr-fb.png"
        />
      </div>
    </div>
  </section>
`;

const Footer = () => html`
  <footer>
    <div className="center">
      🥺<br />
      👉👈<br />
      <h5>Come to a show?</h5>
    </div>
  </footer>
`;

const App = () => html`
<${Header} />
<main>
  <${HeroBanner} />
  <${Support} />
</main>
<${Footer} />
`;

async function main() {
  ReactDOM.render(html`<${App} />`, document.body);
}

main();