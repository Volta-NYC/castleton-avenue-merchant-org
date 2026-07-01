import Link from "next/link";
import { resourceGroups } from "@/lib/site-data";
import { PageHero, SiteFooter, SiteHeader } from "../components";

const boardLinks = ["About CAMO", "Board & Staff", "Membership", "Contact"];

export default function ResourcesPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        label="Business & Community"
        title="Resources for merchants, partners, and neighbors."
        intro="A support hub for membership, permits, marketing, corridor issues, sponsorship, and community coordination."
        theme="yellow"
        imagePosition="left"
      />
      <section className="resource-page-grid">
        {resourceGroups.map((group) => (
          <article className="resource-panel" key={group.title}>
            <h2>{group.title}</h2>
            <ul>
              {group.links.map((link) => (
                <li key={link}>
                  <Link href="/resources">{link}</Link>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <section className="initiative resource-feature">
        <div className="initiative-copy">
          <p className="section-label">Merchant Support</p>
          <h2>Build the toolkit before the directory goes live.</h2>
          <p>
            This placeholder section can become CAMO's practical guide for
            permits, public realm requests, storefront marketing, and partner
            referrals.
          </p>
        </div>
        <div className="initiative-board" aria-hidden="true">
          {boardLinks.map((link) => (
            <span key={link}>{link}</span>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
