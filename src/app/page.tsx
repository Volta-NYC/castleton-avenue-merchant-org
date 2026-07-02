import Link from "next/link";
import {
  categories,
  events,
  planningTiles,
  resourceGroups,
} from "@/lib/site-data";
import { CategoryRail, SiteFooter, SiteHeader } from "./components";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-placeholder" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="hero-scrim" />
        <div className="hero-content">
          <h1>Castleton Avenue</h1>
          <p>
            A merchant-powered neighborhood corridor for small businesses,
            neighbors, events, and everyday Staten Island street life.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/directory">
              Find Businesses
            </Link>
            <Link className="button secondary" href="/events">
              See Events
            </Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="Upcoming highlight">
          <span>Upcoming</span>
          <strong>Corridor programming calendar</strong>
          <p>
            Placeholder details for merchant walks, clean streets days, and
            local promotions.
          </p>
        </div>
      </section>

      <CategoryRail />

      <section className="section split">
        <div>
          <p className="section-label">Plan A Visit</p>
          <h2>Everything on the avenue starts with the block.</h2>
        </div>
        <p className="section-intro">
          Visitor planning, local shopping, corridor maps, transit notes, and
          programs now have dedicated pages so the site can grow like a real
          district portal.
        </p>
      </section>

      <section className="tile-grid" aria-label="Visitor and merchant links">
        {planningTiles.map((tile, index) => (
          <Link className="feature-tile" href={tile.href} key={tile.title}>
            <div className={`tile-photo tile-photo-${index + 1}`} />
            <div>
              <h3>{tile.title}</h3>
              <p>{tile.text}</p>
            </div>
          </Link>
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
        <Link className="button dark" href="/events">
          View Calendar
        </Link>
      </section>

      <section className="initiative">
        <div className="initiative-copy">
          <p className="section-label">Featured Initiative</p>
          <h2>Clean, connected, and visible storefronts.</h2>
          <p>
            CAMO will use this space for announcements about beautification,
            safety, wayfinding, merchant support, and corridor marketing.
          </p>
          <Link className="text-link" href="/resources">
            Merchant toolkit
          </Link>
        </div>
        <div className="initiative-board" aria-hidden="true">
          <span>Clean Streets</span>
          <span>Storefront Support</span>
          <span>Events</span>
          <span>Marketing</span>
        </div>
      </section>

      <section className="section events-section">
        <div className="section-heading-row">
          <div>
            <p className="section-label">Events</p>
            <h2>What is happening on Castleton.</h2>
          </div>
          <Link className="text-link" href="/events">
            Full calendar
          </Link>
        </div>
        <div className="event-list">
          {events.slice(0, 3).map((event) => (
            <Link className="event-row" href="/events" key={event.title}>
              <time>{event.date}</time>
              <h3>{event.title}</h3>
              <p>{event.location}</p>
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="directory">
        <p className="section-label">Directory</p>
        <h2>Find local businesses by category.</h2>
        <div className="directory-grid">
          {categories.slice(0, 3).map((category) => (
            <Link href={category.href} key={category.href}>
              {category.title}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="resources">
        <div>
          <p className="section-label">Resources</p>
          <h2>For merchants, partners, and neighbors.</h2>
        </div>
        <div className="resource-links">
          {resourceGroups.map((group) => (
            <Link href="/resources" key={group.title}>
              {group.title}
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
