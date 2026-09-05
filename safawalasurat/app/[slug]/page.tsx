import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoLandingPage from "../SeoLandingPage";
import { locations } from "../site-data";
import KeywordLandingPage from "../KeywordLandingPage";
import { keywordPages } from "../keyword-data";

function truncateDescription(text: string, max = 155): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max)}…`;
}

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  const locationSlugs = new Set(locations.map(({ slug }) => slug));
  const keywordSlugs = keywordPages.map(({ slug }) => slug).filter((slug) => !locationSlugs.has(slug));
  return [...locationSlugs, ...keywordSlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);
  if (location) {
    return {
      title: `Wedding Safa Wala in ${location.name} | Groom Pagdi & Baraati Safa`,
      description: `Book a professional wedding safa wala in ${location.name} for groom pagdi, family pagdi and baraati safa tying. On-location service from Safawala Surat.`,
      alternates: { canonical: `https://safawalasurat.com/${location.slug}` },
    };
  }
  const page = keywordPages.find((item) => item.slug === slug);
  if (page) {
    return {
      title: `${page.title}`,
      description: truncateDescription(`${page.intro} Check Safawala Surat availability for your wedding date.`),
      alternates: { canonical: `https://safawalasurat.com/${slug}` },
    };
  }
  return {};
}

export default async function AreaOrKeywordPage({ params }: Props) {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);
  if (location) {
    const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: location.faq.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
    const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://safawalasurat.com/" },
      { "@type": "ListItem", position: 2, name: "Service areas", item: "https://safawalasurat.com/#areas" },
      { "@type": "ListItem", position: 3, name: location.name, item: `https://safawalasurat.com/${location.slug}` },
    ] };
    return <><SeoLandingPage kind="location" location={location} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /></>;
  }
  const page = keywordPages.find((item) => item.slug === slug);
  if (!page) notFound();
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://safawalasurat.com/" },
    { "@type": "ListItem", position: 2, name: page.title, item: `https://safawalasurat.com/${slug}` },
  ] };
  return <><KeywordLandingPage page={page} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /></>;
}
