import Link from "next/link";
import { events } from "@/lib/site-data";
import { PageCta, PageHero, SiteFooter, SiteHeader } from "../components";

const signatureEvents = [
  "Summer Sidewalk Saturday",
  "Fall Storefront Walk",
  "Holiday Lights on Castleton",
];

export default function EventsPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        label="Events"
        title="Calendar, signature moments, and community programming."
        intro="A dedicated events page for seasonal campaigns, merchant mixers, public space programming, cleanups, and neighborhood celebrations."
        theme="black"
        visual="events"
      />
      <section className="moment page-moment">
        <div className="moment-date">
          <span>Next Up</span>
          <strong>07.18</strong>
        </div>
        <div>
          <h2>Summer Sidewalk Saturday</h2>
          <p>
            Merchant specials, outdoor demos, tabling, and family-friendly stops
            along Castleton Avenue.
          </p>
        </div>
        <Link className="button dark" href="/resources">
          Submit Event
        </Link>
      </section>
      <section className="section events-section">
        <div className="section-heading-row">
          <div>
            <p className="section-label">Calendar</p>
            <h2>Upcoming on the corridor.</h2>
          </div>
          <div className="filter-rail" aria-label="Event filters">
            <span>All</span>
            <span>Merchant</span>
            <span>Community</span>
            <span>Signature</span>
          </div>
        </div>
        <div className="event-list">
          {events.map((event) => (
            <article className="event-row event-row-detailed" key={event.title}>
              <time>
                {event.date}
                <small>{event.day}</small>
              </time>
              <div>
                <h3>{event.title}</h3>
                <p>{event.type}</p>
              </div>
              <p>
                {event.time}
                <br />
                {event.location}
              </p>
              <span aria-hidden="true">→</span>
            </article>
          ))}
        </div>
      </section>
      <section className="directory signature-strip">
        <p className="section-label">Signature Events</p>
        <h2>Programs CAMO can grow into annual traditions.</h2>
        <div className="directory-grid">
          {signatureEvents.map((event) => (
            <Link href="/events" key={event}>
              {event}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
      <PageCta />
      <SiteFooter />
    </main>
  );
}
