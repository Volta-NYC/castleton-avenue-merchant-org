import Link from "next/link";
import { categories } from "@/lib/site-data";
import { PageCta, PageHero, SiteFooter, SiteHeader } from "../components";

const visitCards = [
  ["Getting Here", "Placeholder transit, bus, ferry, bike, and rideshare notes."],
  ["Parking & Loading", "Future curb guidance for visitors, deliveries, and merchants."],
  ["Walking The Avenue", "A simple guide to storefront clusters, murals, and civic anchors."],
  ["Visitor FAQ", "Common questions about safety, accessibility, hours, and services."],
];

export default function VisitPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        label="Plan Your Visit"
        title="Make a day of Castleton Avenue."
        intro="A visitor hub for getting here, finding nearby businesses, planning around events, and discovering the corridor block by block."
        theme="cyan"
        visual="visit"
      />
      <section className="page-band">
        <div className="page-grid two-up">
          {visitCards.map(([title, text]) => (
            <article className="info-panel" key={title}>
              <span>Guide</span>
              <h2>{title}</h2>
              <p>{text}</p>
              <Link href="/directory">Browse businesses</Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section split">
        <div>
          <p className="section-label">Explore</p>
          <h2>Choose a route through the avenue.</h2>
        </div>
        <div className="stacked-links">
          {categories.map((category) => (
            <Link href={category.href} key={category.href}>
              {category.title}
              <span>{category.text}</span>
            </Link>
          ))}
        </div>
      </section>
      <PageCta />
      <SiteFooter />
    </main>
  );
}
