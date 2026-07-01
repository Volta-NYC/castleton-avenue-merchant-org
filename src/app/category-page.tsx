import Link from "next/link";
import { businesses } from "@/lib/site-data";
import { PageHero, PageCta, SiteFooter, SiteHeader } from "./components";

export function CategoryPage({
  label,
  title,
  intro,
  category,
  theme,
}: {
  label: string;
  title: string;
  intro: string;
  category: string;
  theme: "paper" | "black" | "yellow" | "cyan";
}) {
  const listings = businesses.filter((business) => business.category === category);

  return (
    <main>
      <SiteHeader />
      <PageHero
        label={label}
        title={title}
        intro={intro}
        theme={theme}
        imagePosition={category === "Services" ? "left" : "right"}
      />
      <section className="explore-layout">
        <aside className="filter-sidebar" aria-label={`${label} filters`}>
          <h2>Explore</h2>
          <span>All Listings</span>
          <span>New & Featured</span>
          <span>Member Businesses</span>
          <span>Open Weekends</span>
        </aside>
        <div className="listing-grid">
          {listings.map((business) => (
            <article className="listing-card" key={business.name}>
              <span>{business.area}</span>
              <h2>{business.name}</h2>
              <p>{business.description}</p>
              <small>{business.category}</small>
            </article>
          ))}
          <Link className="listing-card add-listing-card" href="/directory">
            <span>Directory</span>
            <h2>View all Castleton businesses.</h2>
            <p>
              Placeholder link to the full directory while CAMO builds out
              business profiles.
            </p>
            <small>Browse all</small>
          </Link>
        </div>
      </section>
      <PageCta />
      <SiteFooter />
    </main>
  );
}
