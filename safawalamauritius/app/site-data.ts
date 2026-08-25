export type LocationItem = {
  slug: string;
  name: string;
  group: "Mauritius area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Caudan", "Quatre Bornes", "Beau Bassin", "Rose Hill", "Pamplemousses"
];

const nearbyNames: string[] = [
  "Grand Baie Centre", "Pereybere", "La Croisette", "Mont Choisy", "Flic en Flac Centre", "Wolmar", "Pasadena", "Trou aux Biches", "Mont Choisy", "Pointe aux Piments", "Mahébourg", "Blue Bay", "Pointe d'Esny"
];

const localNotes: Record<string, [string, string]> = {
  "Caudan": ["For wedding groups near Caudan, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Quatre Bornes": ["For wedding groups near Quatre Bornes, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Beau Bassin": ["Families near Beau Bassin usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Rose Hill": ["Rose Hill wedding schedules can include home rituals followed by a venue entry elsewhere in Mauritius.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Pamplemousses": ["Pamplemousses celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Grand Baie Centre": ["Grand Baie Centre bookings are planned as an outstation service from Mauritius with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Pereybere": ["Pereybere weddings can be covered with advance scheduling from Mauritius for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "La Croisette": ["La Croisette bookings are planned as an outstation service from Mauritius with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Mont Choisy": ["Mont Choisy functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Flic en Flac Centre": ["Flic en Flac Centre destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Mauritius, and a covered styling area is recommended."],
  "Wolmar": ["Wolmar weddings can be covered with advance scheduling from Mauritius for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Pasadena": ["Pasadena weddings can be covered with advance scheduling from Mauritius for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Trou aux Biches": ["Trou aux Biches celebrations are a natural extension of our Mauritius service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Pointe aux Piments": ["Pointe aux Piments weddings can be covered with advance scheduling from Mauritius for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Mahébourg": ["Mahébourg weddings can be covered with advance scheduling from Mauritius for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Blue Bay": ["Blue Bay weddings often balance traditional ceremonies with guests travelling between hotels and venues near Mauritius.", "We confirm the exact Blue Bay location, travel window and tying order before accepting the event schedule."],
  "Pointe d'Esny": ["Pointe d'Esny offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Mauritius team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
};

function slugify(name: string) {
  return name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const paletteIdeas = [
  "ivory and antique gold", "maroon and muted gold", "rust and cream", "saffron and ivory",
  "wine and beige", "sage green and ivory", "rose pink and cream", "mustard and deep red",
];

const finishIdeas = [
  "a structured Rajwadi fold", "a refined Jodhpuri profile", "a colour-rich Bandhani drape",
  "a clean Marwari silhouette", "a softer destination-wedding fold", "a classic groom pagdi finish",
];

export const locations: LocationItem[] = [...internalNames, ...nearbyNames].map((name, index) => {
  const [summary, planning] = localNotes[name];
  const group = internalNames.includes(name) ? "Mauritius area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Is a professional wedding safa wala available in ${name}?`, `Yes \u2014 ${summary} Bookings in ${name} are handled as a ${group === "Mauritius area" ? "local on-location service" : "pre-planned travelling assignment"}, depending on your date and artist availability.`],
      [`What details do you need for a wedding venue in ${name}?`, `${planning} Share the exact venue pin, the preparation room, and the groom\u2019s ready-by time \u2014 not just the venue name.`],
      [`What groom pagdi style works best for a ${name} wedding?`, `${finish} pairs well with ${palette} tones, though we finalise the actual style around the sherwani, jewellery and the setting itself.`],
      [`How many artists should we plan for a baraat in ${name}?`, `That depends on the number of baraati safas and how much time there is between guest arrival and the procession. In ${name} we always keep the groom\u2019s session separate from the faster family and baraati batches.`],
      [`Can family and baraat safas be in different colours from the groom's?`, `Yes \u2014 for a ${name} wedding, the groom can keep a distinct look while parents, close family and the baraat wear complementary colour groups. Just confirm outfit references before we finalise fabric.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Mauritius area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Mauritius", intro: "Professional, on-location safa tying that keeps the groom, family and baraat ready in step with the day's schedule.", detail: "The finishing style and fabric are locked in beforehand, and artist numbers are planned around your final guest count.", faqs: [["How many safas can your team tie?", "Team size is matched to your headcount and available preparation window. Share both figures for an accurate plan."], ["Do you come to the hotel or venue?", "Yes. Our artists provide on-location service at hotels, resorts, homes and wedding venues."], ["Can colours match the wedding theme?", "Yes. Send outfit or décor references before the event so we can recommend suitable coordinated shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Mauritius", intro: "A dedicated groom pagdi appointment, styled around the sherwani, face shape and the day's overall look.", detail: "The session is unhurried, with kalgi, brooch and fabric accents added only where they support the finished profile.", faqs: [["When should the groom's pagdi be tied?", "Usually before the main portrait session and after the sherwani is complete. We align the exact time with your photographer."], ["Can you suggest a pagdi colour?", "Yes. We consider the sherwani, stole, jewellery and overall wedding palette before suggesting a shade."], ["Is the groom styled separately?", "Yes. The groom's session is planned separately from the faster family and baraati sequence."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Mauritius", intro: "A quick, repeatable safa tying process for the wider baraat, built to keep the procession on schedule.", detail: "Guests move through in organised batches, all finished to the same fold so the group reads as one in photos.", faqs: [["Is there a group size you can't handle for baraati safas?", "Not really — we bring on more artists as the group grows and time allows."], ["Is it worth ordering a few spare safas?", "Yes, a small buffer covers late arrivals or last-minute fit issues."], ["Can the close family's safas be a different shade?", "Yes, parents and siblings can wear a complementary colour while everyone else stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Mauritius", intro: "A travel-ready styling team for resorts, river-side celebrations and multi-day destination wedding schedules.", detail: "We coordinate with the planner or hotel, consolidate the fabric and accessories, and build a room-wise tying plan for the guest list.", faqs: [["Will you travel to resorts beyond Mauritius itself?", "Yes — just share the property details and schedule so we can plan travel and access in advance."], ["Can the same team cover more than one function?", "We can quote a multi-event assignment once we know the dates, styles and any accommodation needs."], ["How far ahead should destination bookings be made?", "A few weeks ahead is ideal for peak dates, so the team is reserved in time."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Mauritius", intro: "A family-wide pagdi plan that keeps parents and relatives visually aligned without competing with the groom.", detail: "Close family receive a shared, repeatable style while the groom's session remains separately detailed.", faqs: [["Is a more comfortable fit available for older guests?", "Definitely — mention any comfort needs and the artist will adjust accordingly."], ["Can both families be styled in different palettes?", "Yes, complementary-but-distinct colours help tell the two sides apart."], ["Do kids get styled too?", "Yes, share their rough ages and count ahead of time so we can plan for them."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Mauritius", intro: "Custom colour planning for the groom and wedding party, built around your outfits and decor rather than a fixed catalogue.", detail: "We review your references first, then propose shades that stay elegant across different lighting and camera conditions.", faqs: [["Can you match an exact outfit colour?", "We can work toward a close coordinated match; physical fabric may vary slightly from screen colours."], ["Which colours photograph well outdoors?", "Ivory, rust, maroon, saffron, muted pink and deeper jewel tones generally retain definition in outdoor light."], ["Can the groom use a contrast colour?", "Yes. A controlled contrast is often the best way to keep the groom visually distinct."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long does wedding safa tying take in Mauritius?", "Timing depends on the fold and group size. Once we know the guest quantity and ready-by time, we recommend the artist count and a practical batch schedule."],
    ["Are the safas supplied with the tying service?", "The fabric and styling requirement are confirmed together. Share whether you need a complete safa package or tying support for fabric already selected by the family."],
  ],
  "groom-pagdi": [
    ["Can the groom pagdi include a kalgi or brooch?", "Yes. Kalgi, brooch, feather and pearl details can be positioned after reviewing the sherwani and jewellery so the final look remains balanced."],
    ["Can we arrange a groom pagdi trial before the wedding?", "A trial or detailed reference consultation can be discussed when the style is highly specific or the groom wants to compare more than one profile."],
  ],
  "baraati-safa": [
    ["How do you make sure every safa in the baraat looks the same?", "We lock in one fold and colour direction upfront, then move guests through in organised batches for a coordinated procession look."],
    ["What if some guests arrive late?", "We keep a small buffer of fabric and time — just have a coordinator send late arrivals to the tying area before the team wraps up."],
  ],
  "destination-wedding-safa": [
    ["Is artist travel factored into the destination quote?", "Yes — route, reporting time, property access, arrival buffer and artist accommodation (if needed) are all part of the quote."],
    ["Can you liaise with our planner or hotel directly?", "Yes, a single point of contact from the hotel or planning team can confirm the room, sequence and access ahead of the team's arrival."],
  ],
  "family-pagdi": [
    ["Can immediate family like the father or brothers get extra detailing?", "Yes, a refined fold or added accessory works well for them while the wider group stays simple."],
    ["What's the best way to split family colours?", "Choose two complementary shades between the families and save the standout treatment for the groom."],
  ],
  "custom-safa-colours": [
    ["When should custom safa colours be finalised?", "Finalise the direction after the main outfits are selected and early enough to review fabric under both daylight and indoor lighting."],
    ["Can guest safas use multiple coordinated colours?", "Yes. Two or three controlled shades can identify family groups while still looking cohesive across the full baraat."],
  ],
};

export function getServiceFaqs(service: (typeof services)[number]) {
  return [...service.faqs, ...(serviceFaqAdditions[service.slug] ?? [])] as [string, string][];
}

export const primaryKeywords = [
  "wedding safa wala in Mauritius",
  "safa tying service Mauritius",
  "groom pagdi Mauritius",
  "wedding pagdi specialist in Mauritius",
  "onsite turban tying in Mauritius",
  "live pagdi tying service in Mauritius",
  "pagdi artist near me in Mauritius",
  "groom pagdi specialist in Mauritius",
  "premium pagri tying service in Mauritius",
  "pagri tying cost in Mauritius",
  "wedding pagdi tying service in Mauritius",
  "safa tying service in Mauritius",
  "baraat turban tying for barati",
  "groom safa styling service",
  "dulha pagdi tying for wedding",
  "dulha safa tying booking",
  "wedding pagri tying professional",
  "sangeet pagri tying",
  "baraat pagri tying doorstep service",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
