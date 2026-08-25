export type LocationItem = {
  slug: string;
  name: string;
  group: "Bengaluru area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Whitefield", "Electronic City", "Koramangala", "Indiranagar", "Jayanagar", "JP Nagar", "HSR Layout", "BTM Layout", "Marathahalli", "Bellandur", "Sarjapur Road", "Hebbal", "Yelahanka", "Malleshwaram", "Rajajinagar", "Banashankari", "Hennur", "Kalyan Nagar", "KR Puram", "Devanahalli", "Jakkur", "Kadugodi", "Mahadevapura", "Basavanagudi", "Richmond Town", "MG Road"
];

const nearbyNames: string[] = [
  "Yelahanka", "Electronic City", "Whitefield", "Devanahalli", "Doddaballapur", "Nelamangala", "Ramanagara", "Channapatna", "Kanakapura", "Tumakuru", "Kolar", "Malur", "Hosur", "Anekal", "Sarjapur", "Hoskote", "Chikkaballapur", "Magadi", "Kunigal", "Mysuru"
];

const localNotes: Record<string, [string, string]> = {
  "Whitefield": ["Families near Whitefield usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Electronic City": ["Electronic City is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Koramangala": ["Families near Koramangala usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Indiranagar": ["Indiranagar wedding schedules can include home rituals followed by a venue entry elsewhere in Bengaluru.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Jayanagar": ["For wedding groups near Jayanagar, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "JP Nagar": ["JP Nagar weddings often bring together resort guests, destination groups and families staying close to the Bengaluru hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "HSR Layout": ["HSR Layout celebrations often combine local family ceremonies with guests arriving from outside Bengaluru.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "BTM Layout": ["BTM Layout is popular with intimate and destination wedding groups looking for a distinctly Bengaluru setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Marathahalli": ["Marathahalli celebrations often combine local family ceremonies with guests arriving from outside Bengaluru.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Bellandur": ["Bellandur functions often bring family groups arriving from several parts of Bengaluru.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Sarjapur Road": ["Sarjapur Road is a practical base for wedding ceremonies on both sides of the Bengaluru service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Hebbal": ["Hebbal celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Yelahanka": ["Yelahanka suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Malleshwaram": ["Malleshwaram functions often bring family groups arriving from several parts of Bengaluru.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Rajajinagar": ["Rajajinagar wedding schedules can include home rituals followed by a venue entry elsewhere in Bengaluru.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Banashankari": ["Banashankari wedding schedules can include home rituals followed by a venue entry elsewhere in Bengaluru.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Hennur": ["Hennur wedding schedules can include home rituals followed by a venue entry elsewhere in Bengaluru.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Kalyan Nagar": ["Kalyan Nagar weddings often bring together resort guests, destination groups and families staying close to the Bengaluru hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "KR Puram": ["KR Puram is a practical base for wedding ceremonies on both sides of the Bengaluru service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Devanahalli": ["Devanahalli is popular with intimate and destination wedding groups looking for a distinctly Bengaluru setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Jakkur": ["Jakkur wedding schedules can include home rituals followed by a venue entry elsewhere in Bengaluru.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Kadugodi": ["Kadugodi is a practical base for wedding ceremonies on both sides of the Bengaluru service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Mahadevapura": ["Mahadevapura is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Basavanagudi": ["Basavanagudi-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Richmond Town": ["Richmond Town is popular with intimate and destination wedding groups looking for a distinctly Bengaluru setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "MG Road": ["MG Road is popular with intimate and destination wedding groups looking for a distinctly Bengaluru setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Doddaballapur": ["Doddaballapur weddings often balance traditional ceremonies with guests travelling between hotels and venues near Bengaluru.", "We confirm the exact Doddaballapur location, travel window and tying order before accepting the event schedule."],
  "Nelamangala": ["Nelamangala weddings can be covered with advance scheduling from Bengaluru for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Ramanagara": ["Ramanagara weddings can be covered with advance scheduling from Bengaluru for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Channapatna": ["Channapatna is handled as a planned destination assignment from Bengaluru rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Kanakapura": ["Kanakapura offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Bengaluru team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Tumakuru": ["Tumakuru weddings can be covered with advance scheduling from Bengaluru for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Kolar": ["Kolar celebrations are a natural extension of our Bengaluru service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Malur": ["Malur functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Hosur": ["Hosur destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Bengaluru, and a covered styling area is recommended."],
  "Anekal": ["Anekal offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Bengaluru team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Sarjapur": ["Sarjapur bookings are planned as an outstation service from Bengaluru with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Hoskote": ["Hoskote destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Bengaluru, and a covered styling area is recommended."],
  "Chikkaballapur": ["Chikkaballapur is handled as a planned destination assignment from Bengaluru rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Magadi": ["Magadi offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Bengaluru team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Kunigal": ["Kunigal functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Mysuru": ["Mysuru bookings are planned as an outstation service from Bengaluru with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
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
  const group = internalNames.includes(name) ? "Bengaluru area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Can I book a professional wedding safa wala in ${name}?`, `Yes. ${summary} We accept ${name} bookings as a ${group === "Bengaluru area" ? "local on-location service" : "pre-planned travelling assignment"}, subject to the wedding date and artist availability.`],
      [`What should we confirm for a ${name} wedding venue?`, `${planning} Please send the exact venue pin, preparation-room details and the groom\u2019s ready-by time rather than only the venue name.`],
      [`Which groom pagdi style suits a wedding in ${name}?`, `${finish} works particularly well with ${palette} palettes, although the final groom pagdi is selected from the sherwani, face profile, jewellery and ceremony setting.`],
      [`How many safa artists are needed for a ${name} baraat?`, `The team size depends on the final number of baraati safas and the time between guest arrival and procession departure. For ${name}, we separate the groom\u2019s detailed session from faster family and baraati batches.`],
      [`Can you provide family pagdis and baraati safas in different colours?`, `Yes. For a ${name} celebration, the groom can remain distinctive while parents, close family and the wider baraat use complementary colour groups. Share outfit references before fabric is finalised.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Bengaluru area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Bengaluru", intro: "An on-site safa tying service built around your actual guest count and departure schedule, not a fixed slot.", detail: "Fabric, fold and finishing are agreed in advance, and the artist team is sized to match the groom, family and baraati batches.", faqs: [["Is there a limit on how many people you can style?", "No fixed limit — artist numbers scale with your headcount, so share the final count and available time."], ["Do your artists visit the wedding location?", "Always. This is a fully on-location service across hotels, resorts, homes and venues."], ["Can you coordinate the safa colour with our theme?", "Yes — send us outfit or décor references beforehand and we'll suggest matching shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Bengaluru", intro: "A dedicated groom pagdi appointment, styled around the sherwani, face shape and the day's overall look.", detail: "The session is unhurried, with kalgi, brooch and fabric accents added only where they support the finished profile.", faqs: [["When should the groom's pagdi be tied?", "Usually before the main portrait session and after the sherwani is complete. We align the exact time with your photographer."], ["Can you suggest a pagdi colour?", "Yes. We consider the sherwani, stole, jewellery and overall wedding palette before suggesting a shade."], ["Is the groom styled separately?", "Yes. The groom's session is planned separately from the faster family and baraati sequence."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Bengaluru", intro: "Coordinated baraati safa tying that keeps a large guest list moving without holding up the departure.", detail: "One agreed style is used across the group, with batches sized to the time available before the baraat leaves.", faqs: [["Can you handle a large baraati group?", "Yes. We add artists according to the group size and time available."], ["Should we order extra safas?", "A small quantity buffer is sensible for late additions or fit changes."], ["Can close family wear a different colour?", "Yes. Parents and siblings can use a complementary shade while the wider group stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Bengaluru", intro: "A travelling safa team built for resort weddings, multi-day functions and destinations away from the city.", detail: "Fabric and accessories are consolidated before departure, and we plan a room-wise schedule with the hotel or planner.", faqs: [["Do you work at resorts outside central Bengaluru?", "Yes. Share the property and event schedule so travel and access can be planned."], ["Can the team stay for multiple functions?", "Multi-event assignments can be quoted after reviewing dates, styles and accommodation needs."], ["How early should we book?", "For peak wedding dates, reserving the team several weeks ahead is recommended."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Bengaluru", intro: "Coordinated pagdi styling for fathers, brothers and close relatives, while the groom's look stays clearly distinct.", detail: "We use two linked levels — a signature fold for the groom and a simpler repeatable one for the rest of the family.", faqs: [["Can the fit be gentler for elderly family members?", "Yes, just flag any comfort concerns to the artist and we'll adjust the tension and finish."], ["Can each side of the family wear a different colour?", "Yes — two complementary palettes work well and help distinguish each family group."], ["Are children included in the styling?", "Yes, just let us know approximate ages and how many in advance."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Bengaluru", intro: "A tailored colour direction for every safa, aligned with the sherwani, florals and venue decor.", detail: "Starting from your visual references, we recommend a palette that photographs consistently indoors and out.", faqs: [["Is it possible to match our outfit colour precisely?", "We get as close as possible, though fabric tone can shift slightly from what's seen on screen."], ["Which shades work best for outdoor wedding photography?", "Ivory, rust, maroon, saffron, muted pink and richer jewel tones tend to stay defined in daylight."], ["Should the groom's colour contrast with the group?", "Often yes — a deliberate contrast is a reliable way to make him stand out."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long should we budget for safa tying on the day in Bengaluru?", "It varies by fold and group size; tell us your headcount and ready-by time and we'll recommend the artist count and schedule."],
    ["Do you bring the safa fabric or just handle the tying?", "Both options work — tell us if you want the full safa supplied or tying done on fabric your family has already chosen."],
  ],
  "groom-pagdi": [
    ["Can the groom pagdi include a kalgi or brooch?", "Yes. Kalgi, brooch, feather and pearl details can be positioned after reviewing the sherwani and jewellery so the final look remains balanced."],
    ["Can we arrange a groom pagdi trial before the wedding?", "A trial or detailed reference consultation can be discussed when the style is highly specific or the groom wants to compare more than one profile."],
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
    ["Can close relatives like fathers and brothers get a more detailed look?", "Yes, they can have a refined fold or an extra accessory while the rest of the family keeps it simpler."],
    ["How do we split colours between two families?", "Pick two complementary shades from the outfits or décor, and keep the most distinctive treatment for the groom alone."],
  ],
  "custom-safa-colours": [
    ["What's the ideal timeline for finalising safa colours?", "After the main outfits are locked in, with enough time to check fabric under daylight and indoor lighting both."],
    ["Is it okay to mix a few different safa colours among guests?", "Yes, two or three coordinated shades can distinguish family groups without breaking the overall cohesion."],
  ],
};

export function getServiceFaqs(service: (typeof services)[number]) {
  return [...service.faqs, ...(serviceFaqAdditions[service.slug] ?? [])] as [string, string][];
}

export const primaryKeywords = [
  "wedding safa wala in Bengaluru",
  "safa tying service Bengaluru",
  "groom pagdi Bengaluru",
  "professional pagdi tying near me in Bengaluru",
  "best turban tying service in Bengaluru",
  "premium turban tying service in Bengaluru",
  "pagdi tying for barati in Bengaluru",
  "dulha safa tying service in Bengaluru",
  "pagdi bandhane wala in Bengaluru",
  "hire pagri artist in Bengaluru",
  "pagdi tying specialist in Bengaluru",
  "royal wedding safa service in Bengaluru",
  "dulha pagdi tying hire",
  "groom turban tying group",
  "baraat safa tying on location",
  "wedding safa tying service provider",
  "wedding pagdi tying for baraat",
  "wedding turban tying for wedding",
  "dulha pagdi tying service provider",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
