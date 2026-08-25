export type LocationItem = {
  slug: string;
  name: string;
  group: "Lonavala area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Khandala", "Tungarli", "Old Khandala Road", "Valvan", "Bhangarwadi", "Karla", "Kamshet", "Kusgaon", "Waksai", "Nangargaon", "Aundhe", "Bhushi Dam Road", "Ryewood", "Bhangarwadi Road", "Lonavala Lake"
];

const nearbyNames: string[] = [
  "Khandala", "Khopoli", "Panvel", "Karjat", "Matheran", "Alibaug", "Pune", "Talegaon Dabhade", "Chakan", "Kamshet", "Khalapur", "Raigad", "Pen", "Mumbai", "Maval", "Wai", "Mahabaleshwar", "Pimpri-Chinchwad"
];

const localNotes: Record<string, [string, string]> = {
  "Khandala": ["Khandala weddings often bring together resort guests, destination groups and families staying close to the Lonavala hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Tungarli": ["Tungarli celebrations often combine local family ceremonies with guests arriving from outside Lonavala.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Old Khandala Road": ["Old Khandala Road celebrations often combine local family ceremonies with guests arriving from outside Lonavala.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Valvan": ["Valvan is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Bhangarwadi": ["Bhangarwadi wedding schedules can include home rituals followed by a venue entry elsewhere in Lonavala.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Karla": ["Karla is popular with intimate and destination wedding groups looking for a distinctly Lonavala setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Kamshet": ["Kamshet celebrations often combine local family ceremonies with guests arriving from outside Lonavala.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Kusgaon": ["Kusgaon celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Waksai": ["Waksai weddings often bring together resort guests, destination groups and families staying close to the Lonavala hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Nangargaon": ["Nangargaon suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Aundhe": ["Aundhe is popular with intimate and destination wedding groups looking for a distinctly Lonavala setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Bhushi Dam Road": ["Bhushi Dam Road is a practical base for wedding ceremonies on both sides of the Lonavala service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Ryewood": ["Ryewood is popular with intimate and destination wedding groups looking for a distinctly Lonavala setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Bhangarwadi Road": ["Bhangarwadi Road is a practical base for wedding ceremonies on both sides of the Lonavala service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Lonavala Lake": ["Lonavala Lake functions often bring family groups arriving from several parts of Lonavala.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Khopoli": ["Khopoli functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Panvel": ["Panvel weddings often balance traditional ceremonies with guests travelling between hotels and venues near Lonavala.", "We confirm the exact Panvel location, travel window and tying order before accepting the event schedule."],
  "Karjat": ["Karjat celebrations are a natural extension of our Lonavala service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Matheran": ["Matheran destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Lonavala, and a covered styling area is recommended."],
  "Alibaug": ["Alibaug bookings are planned as an outstation service from Lonavala with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Pune": ["Pune offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Lonavala team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Talegaon Dabhade": ["Talegaon Dabhade offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Lonavala team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Chakan": ["Chakan celebrations are a natural extension of our Lonavala service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Khalapur": ["Khalapur is handled as a planned destination assignment from Lonavala rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Raigad": ["Raigad destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Lonavala, and a covered styling area is recommended."],
  "Pen": ["Pen weddings can be covered with advance scheduling from Lonavala for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Mumbai": ["Mumbai weddings can be covered with advance scheduling from Lonavala for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Maval": ["Maval functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Wai": ["Wai functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Mahabaleshwar": ["Mahabaleshwar functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Pimpri-Chinchwad": ["Pimpri-Chinchwad offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Lonavala team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
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
  const group = internalNames.includes(name) ? "Lonavala area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Is a professional wedding safa wala available in ${name}?`, `Yes \u2014 ${summary} Bookings in ${name} are handled as a ${group === "Lonavala area" ? "local on-location service" : "pre-planned travelling assignment"}, depending on your date and artist availability.`],
      [`What details do you need for a wedding venue in ${name}?`, `${planning} Share the exact venue pin, the preparation room, and the groom\u2019s ready-by time \u2014 not just the venue name.`],
      [`What groom pagdi style works best for a ${name} wedding?`, `${finish} pairs well with ${palette} tones, though we finalise the actual style around the sherwani, jewellery and the setting itself.`],
      [`How many artists should we plan for a baraat in ${name}?`, `That depends on the number of baraati safas and how much time there is between guest arrival and the procession. In ${name} we always keep the groom\u2019s session separate from the faster family and baraati batches.`],
      [`Can family and baraat safas be in different colours from the groom's?`, `Yes \u2014 for a ${name} wedding, the groom can keep a distinct look while parents, close family and the baraat wear complementary colour groups. Just confirm outfit references before we finalise fabric.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Lonavala area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Lonavala", intro: "A coordinated on-location service for grooms, families and wedding guests, planned around your ceremony and departure time.", detail: "We shortlist the drape, colour and finishing style before the event, then assign artists according to the number of people who must be ready together.", faqs: [["How many safas can your team tie?", "Team size is matched to your headcount and available preparation window. Share both figures for an accurate plan."], ["Do you come to the hotel or venue?", "Yes. Our artists provide on-location service at hotels, resorts, homes and wedding venues."], ["Can colours match the wedding theme?", "Yes. Send outfit or décor references before the event so we can recommend suitable coordinated shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Lonavala", intro: "A more considered, camera-ready pagdi service shaped around the groom's outfit, face profile and wedding aesthetic.", detail: "The groom receives dedicated styling time, with optional kalgi, brooch and fabric detailing kept balanced rather than overdone.", faqs: [["When should the groom's pagdi be tied?", "Usually before the main portrait session and after the sherwani is complete. We align the exact time with your photographer."], ["Can you suggest a pagdi colour?", "Yes. We consider the sherwani, stole, jewellery and overall wedding palette before suggesting a shade."], ["Is the groom styled separately?", "Yes. The groom's session is planned separately from the faster family and baraati sequence."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Lonavala", intro: "Coordinated baraati safa tying that keeps a large guest list moving without holding up the departure.", detail: "One agreed style is used across the group, with batches sized to the time available before the baraat leaves.", faqs: [["Is there a group size you can't handle for baraati safas?", "Not really — we bring on more artists as the group grows and time allows."], ["Is it worth ordering a few spare safas?", "Yes, a small buffer covers late arrivals or last-minute fit issues."], ["Can the close family's safas be a different shade?", "Yes, parents and siblings can wear a complementary colour while everyone else stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Lonavala", intro: "A dedicated travelling team for destination celebrations, from single resort weddings to multi-day schedules.", detail: "Every fabric and accessory is packed and confirmed in advance, with a room-by-room plan agreed with the property.", faqs: [["Do you cover resorts located away from Lonavala?", "Yes, we just need the property and event schedule to plan the travel and access side."], ["Is a multi-day, multi-function booking possible with one team?", "Yes — share the dates, styles and accommodation needs and we'll quote it as one assignment."], ["What's the recommended lead time for booking?", "For busy wedding dates, book several weeks in advance to secure the team."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Lonavala", intro: "Pagdi styling for the wider family that stays coordinated, with the groom kept as the clear focal point.", detail: "A consistent fold is used for relatives, and the groom's more detailed treatment is planned as its own session.", faqs: [["Is a more comfortable fit available for older guests?", "Definitely — mention any comfort needs and the artist will adjust accordingly."], ["Can both families be styled in different palettes?", "Yes, complementary-but-distinct colours help tell the two sides apart."], ["Do kids get styled too?", "Yes, share their rough ages and count ahead of time so we can plan for them."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Lonavala", intro: "Colour-led safa planning for couples who want the groom and guests aligned with outfits, flowers or the overall décor palette.", detail: "We work from visual references and recommend combinations that remain elegant in daylight, indoor lighting and wedding photography.", faqs: [["Can you match an exact outfit colour?", "We can work toward a close coordinated match; physical fabric may vary slightly from screen colours."], ["Which colours photograph well outdoors?", "Ivory, rust, maroon, saffron, muted pink and deeper jewel tones generally retain definition in outdoor light."], ["Can the groom use a contrast colour?", "Yes. A controlled contrast is often the best way to keep the groom visually distinct."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long does wedding safa tying take in Lonavala?", "Timing depends on the fold and group size. Once we know the guest quantity and ready-by time, we recommend the artist count and a practical batch schedule."],
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
    ["Does the quote include travel logistics for the artists?", "It does — route, reporting time, property access, arrival buffer and accommodation where relevant are all included."],
    ["Can the venue's planning team coordinate with you directly?", "Yes, one contact from the hotel or planner side can confirm preparation room, sequencing and access before we arrive."],
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
  "wedding safa wala in Lonavala",
  "safa tying service Lonavala",
  "groom pagdi Lonavala",
  "traditional turban artist in Lonavala",
  "traditional safa tying in Lonavala",
  "pagdi tying for guests in Lonavala",
  "pagdi tying service provider in Lonavala",
  "turban tying specialist near me in Lonavala",
  "safa tying for baraat in Lonavala",
  "professional safa tying service in Lonavala",
  "groom turban tying service in Lonavala",
  "groom safa tying service in Lonavala",
  "dulha safa tying appointment",
  "wedding pagri tying onsite",
  "safa tying price",
  "wedding turban tying at home",
  "wedding pagri tying team",
  "turban with kalgi service",
  "groom pagri tying package",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
