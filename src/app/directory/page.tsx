import Link from "next/link";
import { businesses, categories } from "@/lib/site-data";
import { PageHero, SiteFooter, SiteHeader } from "../components";

export default function DirectoryPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        label="Directory"
        title="Businesses across Castleton Avenue."
        intro="A placeholder directory structure for restaurants, retail, services, wellness, community partners, and future merchant profiles."
        theme="paper"
        imagePosition="right"
      />
      <section className="explore-layout">
        <aside className="filter-sidebar" aria-label="Directory filters">
          <h2>Explore</h2>
          {categories.slice(0, 3).map((category) => (
            <Link href={category.href} key={category.href}>
              {category.title}
            </Link>
          ))}
          <span>Open Now</span>
          <span>Member Businesses</span>
          <span>Accessible Entry</span>
        </aside>
        <div className="listing-grid">
          {businesses.map((business) => (
            <article className="listing-card" key={business.name}>
              <span>{business.category}</span>
              <h2>{business.name}</h2>
              <p>{business.description}</p>
              <small>{business.area}</small>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
