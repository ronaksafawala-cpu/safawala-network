export type LocationItem = {
  slug: string;
  name: string;
  group: "Kutch area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Madhapar", "Mirzapar", "Kukma", "Anjar Road", "Bhujodi"
];

const nearbyNames: string[] = [
  "Adipur", "Kandla", "Mundra Road", "Sector 1", "Sector 8", "Mandvi Town", "Mundra Road", "Vijay Vilas Road", "Mundra Town", "Port Area", "Baroi", "Dholavira Village", "Rann Approach"
];

const localNotes: Record<string, [string, string]> = {
  "Madhapar": ["Madhapar functions often bring family groups arriving from several parts of Kutch.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Mirzapar": ["Mirzapar suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Kukma": ["Kukma-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Anjar Road": ["For wedding groups near Anjar Road, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Bhujodi": ["Bhujodi suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Adipur": ["Adipur is handled as a planned destination assignment from Kutch rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Kandla": ["Kandla is handled as a planned destination assignment from Kutch rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Mundra Road": ["Mundra Road weddings can be covered with advance scheduling from Kutch for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Sector 1": ["Sector 1 destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Kutch, and a covered styling area is recommended."],
  "Sector 8": ["Sector 8 celebrations are a natural extension of our Kutch service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Mandvi Town": ["Mandvi Town weddings can be covered with advance scheduling from Kutch for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Vijay Vilas Road": ["Vijay Vilas Road celebrations are a natural extension of our Kutch service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Mundra Town": ["Mundra Town bookings are planned as an outstation service from Kutch with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Port Area": ["Port Area destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Kutch, and a covered styling area is recommended."],
  "Baroi": ["Baroi bookings are planned as an outstation service from Kutch with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Dholavira Village": ["Dholavira Village offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Kutch team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Rann Approach": ["Rann Approach is handled as a planned destination assignment from Kutch rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
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
  const group = internalNames.includes(name) ? "Kutch area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Can I book a professional wedding safa wala in ${name}?`, `Yes. ${summary} We accept ${name} bookings as a ${group === "Kutch area" ? "local on-location service" : "pre-planned travelling assignment"}, subject to the wedding date and artist availability.`],
      [`What should we confirm for a ${name} wedding venue?`, `${planning} Please send the exact venue pin, preparation-room details and the groom\u2019s ready-by time rather than only the venue name.`],
      [`Which groom pagdi style suits a wedding in ${name}?`, `${finish} works particularly well with ${palette} palettes, although the final groom pagdi is selected from the sherwani, face profile, jewellery and ceremony setting.`],
      [`How many safa artists are needed for a ${name} baraat?`, `The team size depends on the final number of baraati safas and the time between guest arrival and procession departure. For ${name}, we separate the groom\u2019s detailed session from faster family and baraati batches.`],
      [`Can you provide family pagdis and baraati safas in different colours?`, `Yes. For a ${name} celebration, the groom can remain distinctive while parents, close family and the wider baraat use complementary colour groups. Share outfit references before fabric is finalised.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Kutch area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Kutch", intro: "A coordinated on-location service for grooms, families and wedding guests, planned around your ceremony and departure time.", detail: "We shortlist the drape, colour and finishing style before the event, then assign artists according to the number of people who must be ready together.", faqs: [["What's the maximum group size you can handle?", "We scale the artist count to your final headcount and the time window you give us — share both for an accurate plan."], ["Will your team travel to our venue?", "Yes, every booking is on-location — hotels, resorts, homes and wedding venues are all covered."], ["Can the safa colours be matched to our decor?", "Yes, share outfit or décor photos ahead of time and we'll recommend shades that coordinate well."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Kutch", intro: "A considered pagdi session that treats the groom as the visual centre of the day, not a rushed final step.", detail: "Kalgi, brooch and stole details are positioned after the sherwani is complete, keeping the finished look proportionate.", faqs: [["When during the day does the groom's pagdi get tied?", "Typically once the sherwani is on and just before portraits start — we coordinate the exact timing with your photographer."], ["Will you suggest a colour for the groom's pagdi?", "Yes, our recommendation factors in the sherwani, stole, jewellery and the day's overall palette."], ["Is the groom's styling done apart from the rest of the party?", "Yes — it's a dedicated session, separate from the quicker family and baraati styling."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Kutch", intro: "Coordinated baraati safa tying that keeps a large guest list moving without holding up the departure.", detail: "One agreed style is used across the group, with batches sized to the time available before the baraat leaves.", faqs: [["Can you handle a large baraati group?", "Yes. We add artists according to the group size and time available."], ["Should we order extra safas?", "A small quantity buffer is sensible for late additions or fit changes."], ["Can close family wear a different colour?", "Yes. Parents and siblings can use a complementary shade while the wider group stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Kutch", intro: "A dedicated travelling team for destination celebrations, from single resort weddings to multi-day schedules.", detail: "Every fabric and accessory is packed and confirmed in advance, with a room-by-room plan agreed with the property.", faqs: [["Do you work at resorts outside central Kutch?", "Yes. Share the property and event schedule so travel and access can be planned."], ["Can the team stay for multiple functions?", "Multi-event assignments can be quoted after reviewing dates, styles and accommodation needs."], ["How early should we book?", "For peak wedding dates, reserving the team several weeks ahead is recommended."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Kutch", intro: "Refined coordinated pagdis for fathers, brothers, uncles and close relatives, with the groom kept visually distinctive.", detail: "Family styling works best with two complementary levels: a signature groom treatment and a clean repeatable fold for relatives.", faqs: [["Can elders have a softer fit?", "Yes. Tell the artist about comfort needs and we can adjust tension and finish."], ["Can two families use separate colours?", "Yes. Separate but complementary palettes can make each side easy to identify."], ["Do you style children?", "Children can be included when their approximate ages and headcount are shared in advance."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Kutch", intro: "A colour-first approach to safa planning, matched against outfits, décor and floral choices already made.", detail: "Reference images guide the palette, and we suggest combinations that hold up across daylight, indoor light and photos.", faqs: [["Can you match an exact outfit colour?", "We can work toward a close coordinated match; physical fabric may vary slightly from screen colours."], ["Which colours photograph well outdoors?", "Ivory, rust, maroon, saffron, muted pink and deeper jewel tones generally retain definition in outdoor light."], ["Can the groom use a contrast colour?", "Yes. A controlled contrast is often the best way to keep the groom visually distinct."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How much time should we set aside for safa tying in Kutch?", "It depends on the fold style and group size — once we know your headcount and ready-by time we'll give a realistic batch schedule."],
    ["Does the package include the safa fabric itself?", "We confirm fabric and styling together — let us know if you need the complete safa supplied or just tying support for fabric you already have."],
  ],
  "groom-pagdi": [
    ["Can accessories like a kalgi or brooch be added?", "Yes, we place kalgi, brooch, feather or pearl accents after reviewing the sherwani and jewellery so nothing looks overdone."],
    ["Can we do a trial run of the groom's pagdi beforehand?", "If the style is particular or the groom wants options compared, a trial or detailed consultation can be set up."],
  ],
  "baraati-safa": [
    ["How do you keep every baraati safa consistent?", "The team agrees one repeatable fold and colour direction, then divides guests into organised batches so the group looks coordinated in procession photographs."],
    ["Can late-arriving wedding guests also be included?", "Keep a small fabric and time buffer for late additions. A family coordinator should direct those guests to the tying area before the artists pack up."],
  ],
  "destination-wedding-safa": [
    ["Do destination bookings include artist travel planning?", "Yes. The quote accounts for the venue route, reporting time, access, required arrival buffer and, where necessary, artist accommodation."],
    ["Can you coordinate directly with our hotel or wedding planner?", "Yes. One planner or hotel contact can confirm the preparation room, guest sequence and property access before the team arrives."],
  ],
  "family-pagdi": [
    ["Can fathers and brothers have a more detailed family pagdi?", "Yes. Close family can use a refined fold or complementary accessory while the wider group uses a simpler coordinated style."],
    ["How should we divide colours between both families?", "Choose two complementary shades from the outfits or décor and reserve the most distinctive treatment for the groom."],
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
  "wedding safa wala in Kutch",
  "safa tying service Kutch",
  "groom pagdi Kutch",
  "turban tying at venue in Kutch",
  "pagri tying service near me in Kutch",
  "doorstep safa tying in Kutch",
  "professional turban tying artist in Kutch",
  "pagdi tying service price in Kutch",
  "turban tying for baraat in Kutch",
  "turban artist booking in Kutch",
  "wedding pagri tying near me in Kutch",
  "pagdi tying booking in Kutch",
  "wedding safa tying professional",
  "traditional safa tying method",
  "dulha safa tying artist booking",
  "wedding group pagdi tying",
  "pagri accessory fitting",
  "wedding pagri tying for groom",
  "dulha pagri tying for guests",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
