import type { Metadata } from "next";
import { services, internalLocations } from "../site-data";
import SiteFooter from "../SiteFooter";

export const metadata: Metadata = {
  title: "About Safawala Sri Lanka",
  description: "Professional wedding safa and groom pagdi styling across Sri Lanka and nearby destinations. Learn how Safawala Sri Lanka works, from first enquiry to the wedding day.",
  alternates: { canonical: "https://safawalasrilanka.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <header className="site-header"><a className="brand" href="/" aria-label="Safawala Sri Lanka home"><span className="brand-logo-window"><img src="/safawala-logo-current.png" alt="Safawala" /></span><small>SRI LANKA</small></a><nav aria-label="Page navigation"><a href="/">Home</a><a href="/about">About</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Service</a></nav></header>

      <main className="subpage-main">
        <section className="subpage-hero section-shell">
          <div>
            <div className="breadcrumbs"><a href="/">Home</a><span>/</span><b>About</b></div>
            <h1>About Safawala Sri Lanka</h1>
            <p>Professional wedding safa and groom pagdi styling across Sri Lanka and nearby destinations.</p>
          </div>
          <div className="subpage-note">
            <p><strong>{services.length}</strong> dedicated safa, pagdi and turban services.</p>
            <p><strong>{internalLocations.length}+</strong> areas and destinations covered.</p>
            <p>On-location styling at hotels, resorts, homes and wedding venues.</p>
          </div>
        </section>

        <section className="subpage-content section-shell">
          <div>
            <h2>Who's behind the styling</h2>
            <p>Safawala is run by a dedicated team of safa and pagdi artists rather than a single stylist — every booking is matched with team members experienced in the fold, fabric and pace a wedding day actually needs. The team travels to your venue directly, so there's no showroom visit or separate fitting appointment to schedule.</p>
            <h2>How booking works</h2>
            <p>Getting started is simple: send your event date, venue and rough guest count over WhatsApp or by phone, and you'll hear back with availability and a suitable package the same conversation.</p>
            <h2>How the day is planned</h2>
            <p>Styling on the wedding day follows a fixed order: the groom first, in an unhurried one-on-one session, followed by close family and then the baraat in organised batches — timed so the ceremony schedule stays on track.</p>
            <h2>How pricing works</h2>
            <p>Pricing typically runs ₹5,000–₹15,000 per person. It's never a flat, generic number — the exact figure is built from your actual guest count, the fabric you choose, the complexity of the fold or style, and how far the team needs to travel, so the quote reflects your event rather than an average one.</p>
          </div>
          <div className="subpage-card"><h3>Get in touch</h3><p>Questions about this page? Reach the team directly.</p><p><a className="footer-phone" href="tel:+919725295691">+91 97252 95691</a></p><p><a href="https://wa.me/919725295691">WhatsApp the team</a></p></div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
