export type LocationItem = {
  slug: string;
  name: string;
  group: "Kenya area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Westlands", "Kilimani", "Karen", "Lavington", "Kileleshwa", "Runda", "Gigiri", "Parklands", "Kasarani", "Embakasi"
];

const nearbyNames: string[] = [
  "Nyali", "Bamburi", "Shanzu", "Likoni", "Diani", "Old Town", "Nakuru Town", "Milimani", "Lanet", "Naivasha Road", "Kisumu CBD", "Milimani", "Mamboleo", "Dunga", "Diani Beach", "Ukunda", "Galu", "Tiwi"
];

const localNotes: Record<string, [string, string]> = {
  "Westlands": ["For wedding groups near Westlands, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Kilimani": ["Families near Kilimani usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Karen": ["Karen is a practical base for wedding ceremonies on both sides of the Kenya service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Lavington": ["Lavington suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Kileleshwa": ["Kileleshwa weddings often bring together resort guests, destination groups and families staying close to the Kenya hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Runda": ["Families near Runda usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Gigiri": ["Gigiri functions often bring family groups arriving from several parts of Kenya.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Parklands": ["Parklands wedding schedules can include home rituals followed by a venue entry elsewhere in Kenya.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Kasarani": ["Kasarani is popular with intimate and destination wedding groups looking for a distinctly Kenya setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Embakasi": ["Embakasi suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Nyali": ["Nyali offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Kenya team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Bamburi": ["Bamburi destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Kenya, and a covered styling area is recommended."],
  "Shanzu": ["Shanzu weddings can be covered with advance scheduling from Kenya for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Likoni": ["Likoni offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Kenya team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Diani": ["Diani functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Old Town": ["Old Town weddings often balance traditional ceremonies with guests travelling between hotels and venues near Kenya.", "We confirm the exact Old Town location, travel window and tying order before accepting the event schedule."],
  "Nakuru Town": ["Nakuru Town weddings can be covered with advance scheduling from Kenya for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Milimani": ["Milimani destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Kenya, and a covered styling area is recommended."],
  "Lanet": ["Lanet bookings are planned as an outstation service from Kenya with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Naivasha Road": ["Naivasha Road is handled as a planned destination assignment from Kenya rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Kisumu CBD": ["Kisumu CBD weddings often balance traditional ceremonies with guests travelling between hotels and venues near Kenya.", "We confirm the exact Kisumu CBD location, travel window and tying order before accepting the event schedule."],
  "Mamboleo": ["Mamboleo celebrations are a natural extension of our Kenya service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Dunga": ["Dunga destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Kenya, and a covered styling area is recommended."],
  "Diani Beach": ["Diani Beach weddings often balance traditional ceremonies with guests travelling between hotels and venues near Kenya.", "We confirm the exact Diani Beach location, travel window and tying order before accepting the event schedule."],
  "Ukunda": ["Ukunda weddings can be covered with advance scheduling from Kenya for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Galu": ["Galu weddings often balance traditional ceremonies with guests travelling between hotels and venues near Kenya.", "We confirm the exact Galu location, travel window and tying order before accepting the event schedule."],
  "Tiwi": ["Tiwi weddings can be covered with advance scheduling from Kenya for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
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
  const group = internalNames.includes(name) ? "Kenya area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Can I book a professional wedding safa wala in ${name}?`, `Yes. ${summary} We accept ${name} bookings as a ${group === "Kenya area" ? "local on-location service" : "pre-planned travelling assignment"}, subject to the wedding date and artist availability.`],
      [`What should we confirm for a ${name} wedding venue?`, `${planning} Please send the exact venue pin, preparation-room details and the groom\u2019s ready-by time rather than only the venue name.`],
      [`Which groom pagdi style suits a wedding in ${name}?`, `${finish} works particularly well with ${palette} palettes, although the final groom pagdi is selected from the sherwani, face profile, jewellery and ceremony setting.`],
      [`How many safa artists are needed for a ${name} baraat?`, `The team size depends on the final number of baraati safas and the time between guest arrival and procession departure. For ${name}, we separate the groom\u2019s detailed session from faster family and baraati batches.`],
      [`Can you provide family pagdis and baraati safas in different colours?`, `Yes. For a ${name} celebration, the groom can remain distinctive while parents, close family and the wider baraat use complementary colour groups. Share outfit references before fabric is finalised.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Kenya area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Kenya", intro: "A coordinated on-location service for grooms, families and wedding guests, planned around your ceremony and departure time.", detail: "We shortlist the drape, colour and finishing style before the event, then assign artists according to the number of people who must be ready together.", faqs: [["Is there a limit on how many people you can style?", "No fixed limit — artist numbers scale with your headcount, so share the final count and available time."], ["Do your artists visit the wedding location?", "Always. This is a fully on-location service across hotels, resorts, homes and venues."], ["Can you coordinate the safa colour with our theme?", "Yes — send us outfit or décor references beforehand and we'll suggest matching shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Kenya", intro: "A dedicated groom pagdi appointment, styled around the sherwani, face shape and the day's overall look.", detail: "The session is unhurried, with kalgi, brooch and fabric accents added only where they support the finished profile.", faqs: [["When during the day does the groom's pagdi get tied?", "Typically once the sherwani is on and just before portraits start — we coordinate the exact timing with your photographer."], ["Will you suggest a colour for the groom's pagdi?", "Yes, our recommendation factors in the sherwani, stole, jewellery and the day's overall palette."], ["Is the groom's styling done apart from the rest of the party?", "Yes — it's a dedicated session, separate from the quicker family and baraati styling."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Kenya", intro: "Coordinated baraati safa tying that keeps a large guest list moving without holding up the departure.", detail: "One agreed style is used across the group, with batches sized to the time available before the baraat leaves.", faqs: [["What's your capacity for a big baraat?", "We scale the artist team to match your group size and the time you have available."], ["Should extra safas be kept as backup?", "It's a good idea — a small buffer handles late guests or fit changes smoothly."], ["Can close family stand out with a different colour?", "Yes, a complementary shade for parents and siblings works well against a uniform wider group."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Kenya", intro: "Destination-ready safa styling for resorts and multi-function weddings that span more than one day.", detail: "We work directly with the venue or planner to confirm access, then build a tying sequence across rooms and functions.", faqs: [["Do you work at resorts outside central Kenya?", "Yes. Share the property and event schedule so travel and access can be planned."], ["Can the team stay for multiple functions?", "Multi-event assignments can be quoted after reviewing dates, styles and accommodation needs."], ["How early should we book?", "For peak wedding dates, reserving the team several weeks ahead is recommended."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Kenya", intro: "A family-wide pagdi plan that keeps parents and relatives visually aligned without competing with the groom.", detail: "Close family receive a shared, repeatable style while the groom's session remains separately detailed.", faqs: [["Is a more comfortable fit available for older guests?", "Definitely — mention any comfort needs and the artist will adjust accordingly."], ["Can both families be styled in different palettes?", "Yes, complementary-but-distinct colours help tell the two sides apart."], ["Do kids get styled too?", "Yes, share their rough ages and count ahead of time so we can plan for them."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Kenya", intro: "Colour-led safa planning for couples who want the groom and guests aligned with outfits, flowers or the overall décor palette.", detail: "We work from visual references and recommend combinations that remain elegant in daylight, indoor lighting and wedding photography.", faqs: [["Can you get an exact colour match to our outfits?", "We aim for a close coordinated match, though fabric can look slightly different from a screen reference."], ["What colours hold up best in outdoor photos?", "Ivory, rust, maroon, saffron, muted pink and deep jewel tones tend to photograph well outdoors."], ["Should the groom wear a contrasting colour?", "A controlled contrast often works best to keep him visually distinct from the group."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long should we budget for safa tying on the day in Kenya?", "It varies by fold and group size; tell us your headcount and ready-by time and we'll recommend the artist count and schedule."],
    ["Do you bring the safa fabric or just handle the tying?", "Both options work — tell us if you want the full safa supplied or tying done on fabric your family has already chosen."],
  ],
  "groom-pagdi": [
    ["Can accessories like a kalgi or brooch be added?", "Yes, we place kalgi, brooch, feather or pearl accents after reviewing the sherwani and jewellery so nothing looks overdone."],
    ["Can we do a trial run of the groom's pagdi beforehand?", "If the style is particular or the groom wants options compared, a trial or detailed consultation can be set up."],
  ],
  "baraati-safa": [
    ["How is consistency maintained across all baraati safas?", "One fold and colour is agreed in advance, and guests are tied in organised batches so the procession photographs look coordinated."],
    ["Can guests who arrive late still be styled?", "Yes — keep a little fabric and time in reserve, and have a coordinator route late arrivals to the tying area before wrap-up."],
  ],
  "destination-wedding-safa": [
    ["Do destination bookings include artist travel planning?", "Yes. The quote accounts for the venue route, reporting time, access, required arrival buffer and, where necessary, artist accommodation."],
    ["Can you coordinate directly with our hotel or wedding planner?", "Yes. One planner or hotel contact can confirm the preparation room, guest sequence and property access before the team arrives."],
  ],
  "family-pagdi": [
    ["Can immediate family like the father or brothers get extra detailing?", "Yes, a refined fold or added accessory works well for them while the wider group stays simple."],
    ["What's the best way to split family colours?", "Choose two complementary shades between the families and save the standout treatment for the groom."],
  ],
  "custom-safa-colours": [
    ["When's the right time to lock in safa colours?", "Once the main outfits are chosen — early enough that we can check the fabric in both daylight and indoor light."],
    ["Can guests wear more than one coordinated colour?", "Yes, two or three controlled shades can group families while keeping the whole baraat looking cohesive."],
  ],
};

export function getServiceFaqs(service: (typeof services)[number]) {
  return [...service.faqs, ...(serviceFaqAdditions[service.slug] ?? [])] as [string, string][];
}

export const primaryKeywords = [
  "wedding safa wala in Kenya",
  "safa tying service Kenya",
  "groom pagdi Kenya",
  "expert turban tying in Kenya",
  "experienced turban tying artist in Kenya",
  "professional wedding pagri service in Kenya",
  "traditional safa tying in Kenya",
  "groom safa tying service in Kenya",
  "pagdi tying in Kenya",
  "specialist turban tying artist in Kenya",
  "safa tying at venue in Kenya",
  "pagdi tying service price in Kenya",
  "turban kalgi fitting service",
  "wedding pagri tying for wedding",
  "dulha pagri tying for guests",
  "dulha safa tying package",
  "turban tying group package",
  "baraat pagri tying at venue",
  "wedding pagdi tying booking",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
