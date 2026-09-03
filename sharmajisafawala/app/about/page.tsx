import type { Metadata } from "next";
import { services, internalLocations } from "../site-data";
import SiteFooter from "../SiteFooter";

export const metadata: Metadata = {
  title: "About Sharma Ji's Safawala",
  description: "Family-run groom pagdi and wedding safa styling, delivered with the same care as three generations before. Learn how Sharma Ji's Safawala works, from first enquiry to the wedding day.",
  alternates: { canonical: "https://sharmajisafawala.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <header className="site-header"><a className="brand" href="/" aria-label="Sharma Ji's Safawala home"><span className="brand-logo-window"><img src="/safawala-logo-current.png" alt="Safawala" /></span><small>SHARMA JI'S</small></a><nav aria-label="Page navigation"><a href="/">Home</a><a href="/about">About</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Service</a></nav></header>

      <main className="subpage-main">
        <section className="subpage-hero section-shell">
          <div>
            <div className="breadcrumbs"><a href="/">Home</a><span>/</span><b>About</b></div>
            <h1>About Sharma Ji's Safawala</h1>
            <p>Family-run groom pagdi and wedding safa styling, delivered with the same care as three generations before.</p>
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
            <p>On the day, the groom always receives a dedicated, unhurried styling session first. Close family and the wider baraat are then styled in coordinated batches, so the order of the day is protected and nobody is left waiting at the wrong moment.</p>
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
