import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoLandingPage from "../../SeoLandingPage";
import { getServiceFaqs, services } from "../../site-data";
import { keywordPages } from "../../keyword-data";

function truncateDescription(text: string, max = 155): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max)}…`;
}

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: truncateDescription(`${service.intro} Check Safawala Goa availability for your wedding date.`),
    alternates: { canonical: `https://safawalgoa.com/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: getServiceFaqs(service).map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://safawalgoa.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://safawalgoa.com/#services" },
    { "@type": "ListItem", position: 3, name: service.name, item: `https://safawalgoa.com/services/${service.slug}` },
  ] };
  const relatedKeywords = keywordPages.filter((k) => k.serviceSlug === service.slug).slice(0, 60);
  return <>
    <SeoLandingPage kind="service" service={service} />
    {relatedKeywords.length > 0 && (
      <section className="section-shell" style={{ paddingBlock: "48px 80px" }}>
        <h2 style={{ fontSize: 16, marginBottom: 4 }}>Popular searches for {service.name.toLowerCase()}</h2>
        <p style={{ color: "var(--muted)", fontSize: 12, marginBottom: 20 }}>{relatedKeywords.length} specific searches we have dedicated pages for.</p>
        <div className="explore-chip-links">{relatedKeywords.map((k) => <a href={`/keywords/${k.slug}`} key={k.slug}>{k.title}</a>)}</div>
      </section>
    )}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
  </>;
}
