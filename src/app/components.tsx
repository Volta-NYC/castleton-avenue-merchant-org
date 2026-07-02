import Link from "next/link";
import { categories, primaryNav } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="CAMO home">
        <span className="brand-mark">CA</span>
        <span>
          <strong>CAMO</strong>
          <small>Castleton Avenue Merchant Organization</small>
        </span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {primaryNav.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="header-action" href="/resources">
        Join CAMO
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div>
        <strong>CAMO</strong>
        <p>Castleton Avenue Merchant Organization</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/visit">Visit</Link>
        <Link href="/events">Events</Link>
        <Link href="/directory">Directory</Link>
        <Link href="/resources">Resources</Link>
      </nav>
      <p>Placeholder contact, social, newsletter, and civic partner links.</p>
    </footer>
  );
}

export function CategoryRail() {
  return (
    <section className="category-rail" aria-label="Explore categories">
      {categories.map((category) => (
        <Link href={category.href} key={category.href}>
          {category.title}
          <span aria-hidden="true">+</span>
        </Link>
      ))}
    </section>
  );
}

export function PageHero({
  label,
  title,
  intro,
  theme = "paper",
  visual = "directory",
}: {
  label: string;
  title: string;
  intro: string;
  theme?: "paper" | "black" | "yellow" | "cyan";
  visual?: "visit" | "events" | "directory" | "resources" | "food" | "shopping" | "services";
}) {
  return (
    <section className={`page-hero page-hero-${theme} page-hero-${visual}`}>
      <div className="page-hero-visual" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="page-hero-scrim" />
      <div className="page-hero-content">
        <p className="section-label">{label}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}

export function PageCta() {
  return (
    <section className="page-cta">
      <div>
        <p className="section-label">Get Involved</p>
        <h2>Help shape what comes next on Castleton Avenue.</h2>
      </div>
      <Link className="button dark" href="/resources">
        Contact CAMO
      </Link>
    </section>
  );
}
