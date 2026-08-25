import type { Metadata } from "next";
import { services, internalLocations } from "../site-data";
import SiteFooter from "../SiteFooter";

export const metadata: Metadata = {
  title: "About Wow Grooms",
  description: "Coordinated wedding safas and groom pagdis, styled to get the reaction every groom wants on his wedding day. Learn how Wow Grooms works, from first enquiry to the wedding day.",
  alternates: { canonical: "https://wowgrooms.in/about" },
};

export default function AboutPage() {
  return (
    <>
      <header className="site-header"><a className="brand" href="/" aria-label="Wow Grooms home"><span className="brand-logo-window"><img src="/safawala-logo-current.png" alt="Safawala" /></span><small>WOW GROOMS</small></a><nav aria-label="Page navigation"><a href="/">Home</a><a href="/about">About</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Service</a></nav></header>

      <main className="subpage-main">
        <section className="subpage-hero section-shell">
          <div>
            <div className="breadcrumbs"><a href="/">Home</a><span>/</span><b>About</b></div>
            <h1>About Wow Grooms</h1>
            <p>Coordinated wedding safas and groom pagdis, styled to get the reaction every groom wants on his wedding day.</p>
          </div>
          <div className="subpage-note">
            <p><strong>{services.length}</strong> dedicated safa, pagdi and turban services.</p>
            <p><strong>{internalLocations.length}+</strong> areas and destinations covered.</p>
            <p>On-location styling at hotels, resorts, homes and wedding venues.</p>
          </div>
        </section>

        <section className="subpage-content section-shell">
          <div>
            <h2>How booking works</h2>
            <p>Every enquiry starts with a WhatsApp or phone message — share your event date, venue and approximate guest count, and the team responds with availability and a package suited to your event.</p>
            <h2>How the day is planned</h2>
            <p>On the day, the groom always receives a dedicated, unhurried styling session first. Close family and the wider baraat are then styled in coordinated batches, so the order of the day is protected and nobody is left waiting at the wrong moment.</p>
            <h2>How pricing works</h2>
            <p>There's no single fixed price list. Instead, a quote is built around your specific guest count, fabric choice, styling detail and travel distance, so what you're quoted matches your actual event rather than a generic estimate.</p>
          </div>
          <div className="subpage-card"><h3>Get in touch</h3><p>Questions about this page? Reach the team directly.</p><p><a className="footer-phone" href="tel:+919725295691">+91 97252 95691</a></p><p><a href="https://wa.me/919725295691">WhatsApp the team</a></p></div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
