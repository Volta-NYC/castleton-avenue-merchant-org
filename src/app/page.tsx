const categories = [
  "Eat & Drink",
  "Shopping",
  "Services",
  "Events",
  "Visit",
];

const planningTiles = [
  {
    title: "Explore the Avenue",
    text: "A placeholder guide to storefronts, civic anchors, murals, and neighborhood stops.",
  },
  {
    title: "Merchant Directory",
    text: "Searchable business profiles will live here once the corridor inventory is ready.",
  },
  {
    title: "Street Events",
    text: "Seasonal walks, cleanups, networking nights, and community programming.",
  },
  {
    title: "Business Support",
    text: "Permits, grants, storefront resources, and partner referrals for local merchants.",
  },
];

const events = [
  ["Jul 18", "Summer Sidewalk Saturday", "Castleton Avenue"],
  ["Aug 06", "Merchant Mixer", "Location TBD"],
  ["Sep 14", "Corridor Cleanup Day", "Meetup point TBD"],
];

const directory = [
  "Restaurants",
  "Markets",
  "Salons",
  "Health",
  "Professional Services",
  "Community Partners",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CAMO home">
          <span className="brand-mark">CA</span>
          <span>
            <strong>CAMO</strong>
            <small>Castleton Avenue Merchant Organization</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#visit">Visit</a>
          <a href="#events">Events</a>
          <a href="#directory">Directory</a>
          <a href="#resources">Resources</a>
        </nav>
        <a className="header-action" href="#resources">
          Join CAMO
        </a>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-image"
          src="/images/castleton-corridor-hero.png"
          alt="A lively Castleton Avenue-inspired neighborhood corridor with shops and pedestrians"
        />
        <div className="hero-scrim" />
        <div className="hero-content">
          <h1>Castleton Avenue</h1>
          <p>
            A merchant-powered neighborhood corridor for small businesses,
            neighbors, events, and everyday Staten Island street life.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#directory">
              Find Businesses
            </a>
            <a className="button secondary" href="#events">
              See Events
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Upcoming highlight">
          <span>Upcoming</span>
          <strong>Corridor programming calendar</strong>
          <p>Placeholder details for a merchant walk, clean streets day, and local promotions.</p>
        </div>
      </section>

      <section className="category-rail" aria-label="Explore categories">
        {categories.map((category) => (
          <a href="#visit" key={category}>
            {category}
            <span aria-hidden="true">+</span>
          </a>
        ))}
      </section>

      <section className="section split" id="visit">
        <div>
          <p className="section-label">Plan A Visit</p>
          <h2>Everything on the avenue starts with the block.</h2>
        </div>
        <p className="section-intro">
          Placeholder copy for visitor planning, local shopping, corridor maps,
          transit notes, and programs that make Castleton Avenue easier to
          discover.
        </p>
      </section>

      <section className="tile-grid" aria-label="Visitor and merchant links">
        {planningTiles.map((tile, index) => (
          <article className="feature-tile" key={tile.title}>
            <div className={`tile-photo tile-photo-${index + 1}`} />
            <div>
              <h3>{tile.title}</h3>
              <p>{tile.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="moment">
        <div className="moment-date">
          <span>Next Up</span>
          <strong>07.18</strong>
        </div>
        <div>
          <h2>Summer Sidewalk Saturday</h2>
          <p>
            A placeholder campaign moment for merchant specials, live demos,
            tabling, and family-friendly stops along Castleton Avenue.
          </p>
        </div>
        <a className="button dark" href="#events">
          View Calendar
        </a>
      </section>

      <section className="initiative">
        <div className="initiative-copy">
          <p className="section-label">Featured Initiative</p>
          <h2>Clean, connected, and visible storefronts.</h2>
          <p>
            CAMO will use this space for announcements about beautification,
            safety, wayfinding, merchant support, and corridor marketing.
          </p>
          <a className="text-link" href="#resources">
            Merchant toolkit
          </a>
        </div>
        <div className="initiative-board" aria-hidden="true">
          <span>Clean Streets</span>
          <span>Storefront Support</span>
          <span>Events</span>
          <span>Marketing</span>
        </div>
      </section>

      <section className="section events-section" id="events">
        <div className="section-heading-row">
          <div>
            <p className="section-label">Events</p>
            <h2>What is happening on Castleton.</h2>
          </div>
          <a className="text-link" href="#top">
            Submit an event
          </a>
        </div>
        <div className="event-list">
          {events.map(([date, title, location]) => (
            <article className="event-row" key={title}>
              <time>{date}</time>
              <h3>{title}</h3>
              <p>{location}</p>
              <span aria-hidden="true">→</span>
            </article>
          ))}
        </div>
      </section>

      <section className="directory" id="directory">
        <p className="section-label">Directory</p>
        <h2>Find local businesses by category.</h2>
        <div className="directory-grid">
          {directory.map((item) => (
            <a href="#directory" key={item}>
              {item}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="resources" id="resources">
        <div>
          <p className="section-label">Resources</p>
          <h2>For merchants, partners, and neighbors.</h2>
        </div>
        <div className="resource-links">
          <a href="#resources">Become a member</a>
          <a href="#resources">Request support</a>
          <a href="#resources">Sponsor an event</a>
          <a href="#resources">Contact the board</a>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>CAMO</strong>
          <p>Castleton Avenue Merchant Organization</p>
        </div>
        <p>Placeholder contact, social, newsletter, and civic partner links.</p>
      </footer>
    </main>
  );
}
