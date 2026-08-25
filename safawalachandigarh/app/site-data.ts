export type LocationItem = {
  slug: string;
  name: string;
  group: "Chandigarh area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Sector 1", "Sector 8", "Sector 9", "Sector 10", "Sector 17", "Sector 22", "Sector 34", "Sector 35", "Sector 43", "Sector 44", "Sector 45", "Sector 46", "Sector 47", "Sector 48", "Sector 49", "Sector 50", "Sector 51", "Sector 61", "Manimajra", "Industrial Area Phase 1", "Industrial Area Phase 2"
];

const nearbyNames: string[] = [
  "Mohali", "Zirakpur", "Panchkula", "Kharar", "Dera Bassi", "Pinjore", "Kalka", "Morinda", "Rupnagar", "Nayagaon", "Kurali", "Baddi", "Nalagarh", "Solan", "Kasauli", "Shimla", "Ambala", "Patiala", "Rajpura", "Ludhiana", "Yamunanagar"
];

const localNotes: Record<string, [string, string]> = {
  "Sector 1": ["Sector 1 weddings often bring together resort guests, destination groups and families staying close to the Chandigarh hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Sector 8": ["Sector 8 is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Sector 9": ["Sector 9 weddings often bring together resort guests, destination groups and families staying close to the Chandigarh hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Sector 10": ["Sector 10 functions often bring family groups arriving from several parts of Chandigarh.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Sector 17": ["Sector 17 suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Sector 22": ["Sector 22 is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Sector 34": ["Sector 34 functions often bring family groups arriving from several parts of Chandigarh.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Sector 35": ["Sector 35 functions often bring family groups arriving from several parts of Chandigarh.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Sector 43": ["Families near Sector 43 usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Sector 44": ["Sector 44 is popular with intimate and destination wedding groups looking for a distinctly Chandigarh setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Sector 45": ["Sector 45 is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Sector 46": ["Sector 46 is popular with intimate and destination wedding groups looking for a distinctly Chandigarh setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Sector 47": ["Sector 47 functions often bring family groups arriving from several parts of Chandigarh.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Sector 48": ["Sector 48 celebrations often combine local family ceremonies with guests arriving from outside Chandigarh.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Sector 49": ["Sector 49 celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Sector 50": ["Sector 50 suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Sector 51": ["Sector 51 wedding schedules can include home rituals followed by a venue entry elsewhere in Chandigarh.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Sector 61": ["Sector 61 is a practical base for wedding ceremonies on both sides of the Chandigarh service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Manimajra": ["Manimajra celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Industrial Area Phase 1": ["Families near Industrial Area Phase 1 usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Industrial Area Phase 2": ["Industrial Area Phase 2-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Mohali": ["Mohali celebrations are a natural extension of our Chandigarh service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Zirakpur": ["Zirakpur weddings often balance traditional ceremonies with guests travelling between hotels and venues near Chandigarh.", "We confirm the exact Zirakpur location, travel window and tying order before accepting the event schedule."],
  "Panchkula": ["Panchkula is handled as a planned destination assignment from Chandigarh rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Kharar": ["Kharar weddings often balance traditional ceremonies with guests travelling between hotels and venues near Chandigarh.", "We confirm the exact Kharar location, travel window and tying order before accepting the event schedule."],
  "Dera Bassi": ["Dera Bassi weddings can be covered with advance scheduling from Chandigarh for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Pinjore": ["Pinjore destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Chandigarh, and a covered styling area is recommended."],
  "Kalka": ["Kalka celebrations are a natural extension of our Chandigarh service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Morinda": ["Morinda destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Chandigarh, and a covered styling area is recommended."],
  "Rupnagar": ["Rupnagar is handled as a planned destination assignment from Chandigarh rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Nayagaon": ["Nayagaon offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Chandigarh team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Kurali": ["Kurali destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Chandigarh, and a covered styling area is recommended."],
  "Baddi": ["Baddi celebrations are a natural extension of our Chandigarh service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Nalagarh": ["Nalagarh is handled as a planned destination assignment from Chandigarh rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Solan": ["Solan functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Kasauli": ["Kasauli destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Chandigarh, and a covered styling area is recommended."],
  "Shimla": ["Shimla weddings can be covered with advance scheduling from Chandigarh for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Ambala": ["Ambala offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Chandigarh team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Patiala": ["Patiala bookings are planned as an outstation service from Chandigarh with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Rajpura": ["Rajpura weddings can be covered with advance scheduling from Chandigarh for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Ludhiana": ["Ludhiana weddings often balance traditional ceremonies with guests travelling between hotels and venues near Chandigarh.", "We confirm the exact Ludhiana location, travel window and tying order before accepting the event schedule."],
  "Yamunanagar": ["Yamunanagar bookings are planned as an outstation service from Chandigarh with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
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
  const group = internalNames.includes(name) ? "Chandigarh area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Can I book a professional wedding safa wala in ${name}?`, `Yes. ${summary} We accept ${name} bookings as a ${group === "Chandigarh area" ? "local on-location service" : "pre-planned travelling assignment"}, subject to the wedding date and artist availability.`],
      [`What should we confirm for a ${name} wedding venue?`, `${planning} Please send the exact venue pin, preparation-room details and the groom\u2019s ready-by time rather than only the venue name.`],
      [`Which groom pagdi style suits a wedding in ${name}?`, `${finish} works particularly well with ${palette} palettes, although the final groom pagdi is selected from the sherwani, face profile, jewellery and ceremony setting.`],
      [`How many safa artists are needed for a ${name} baraat?`, `The team size depends on the final number of baraati safas and the time between guest arrival and procession departure. For ${name}, we separate the groom\u2019s detailed session from faster family and baraati batches.`],
      [`Can you provide family pagdis and baraati safas in different colours?`, `Yes. For a ${name} celebration, the groom can remain distinctive while parents, close family and the wider baraat use complementary colour groups. Share outfit references before fabric is finalised.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Chandigarh area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Chandigarh", intro: "A dependable safa tying appointment for the whole wedding party, timed to your ceremony and photography schedule.", detail: "We confirm the drape and colour direction ahead of the event, then bring enough artists to keep every batch moving without delay.", faqs: [["How many safas can your team tie?", "Team size is matched to your headcount and available preparation window. Share both figures for an accurate plan."], ["Do you come to the hotel or venue?", "Yes. Our artists provide on-location service at hotels, resorts, homes and wedding venues."], ["Can colours match the wedding theme?", "Yes. Send outfit or décor references before the event so we can recommend suitable coordinated shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Chandigarh", intro: "A dedicated groom pagdi appointment, styled around the sherwani, face shape and the day's overall look.", detail: "The session is unhurried, with kalgi, brooch and fabric accents added only where they support the finished profile.", faqs: [["When should the groom's pagdi be tied?", "Usually before the main portrait session and after the sherwani is complete. We align the exact time with your photographer."], ["Can you suggest a pagdi colour?", "Yes. We consider the sherwani, stole, jewellery and overall wedding palette before suggesting a shade."], ["Is the groom styled separately?", "Yes. The groom's session is planned separately from the faster family and baraati sequence."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Chandigarh", intro: "Efficient safa tying for friends, relatives and the wider wedding party, timed to the procession schedule.", detail: "Batches are organised by arrival time, and every safa follows the same fold for a consistent group look.", faqs: [["Can you handle a large baraati group?", "Yes. We add artists according to the group size and time available."], ["Should we order extra safas?", "A small quantity buffer is sensible for late additions or fit changes."], ["Can close family wear a different colour?", "Yes. Parents and siblings can use a complementary shade while the wider group stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Chandigarh", intro: "A travelling safa team built for resort weddings, multi-day functions and destinations away from the city.", detail: "Fabric and accessories are consolidated before departure, and we plan a room-wise schedule with the hotel or planner.", faqs: [["Will you travel to resorts beyond Chandigarh itself?", "Yes — just share the property details and schedule so we can plan travel and access in advance."], ["Can the same team cover more than one function?", "We can quote a multi-event assignment once we know the dates, styles and any accommodation needs."], ["How far ahead should destination bookings be made?", "A few weeks ahead is ideal for peak dates, so the team is reserved in time."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Chandigarh", intro: "A family-wide pagdi plan that keeps parents and relatives visually aligned without competing with the groom.", detail: "Close family receive a shared, repeatable style while the groom's session remains separately detailed.", faqs: [["Can elders have a softer fit?", "Yes. Tell the artist about comfort needs and we can adjust tension and finish."], ["Can two families use separate colours?", "Yes. Separate but complementary palettes can make each side easy to identify."], ["Do you style children?", "Children can be included when their approximate ages and headcount are shared in advance."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Chandigarh", intro: "A tailored colour direction for every safa, aligned with the sherwani, florals and venue decor.", detail: "Starting from your visual references, we recommend a palette that photographs consistently indoors and out.", faqs: [["Can you get an exact colour match to our outfits?", "We aim for a close coordinated match, though fabric can look slightly different from a screen reference."], ["What colours hold up best in outdoor photos?", "Ivory, rust, maroon, saffron, muted pink and deep jewel tones tend to photograph well outdoors."], ["Should the groom wear a contrasting colour?", "A controlled contrast often works best to keep him visually distinct from the group."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long does wedding safa tying take in Chandigarh?", "Timing depends on the fold and group size. Once we know the guest quantity and ready-by time, we recommend the artist count and a practical batch schedule."],
    ["Are the safas supplied with the tying service?", "The fabric and styling requirement are confirmed together. Share whether you need a complete safa package or tying support for fabric already selected by the family."],
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
    ["Is artist travel factored into the destination quote?", "Yes — route, reporting time, property access, arrival buffer and artist accommodation (if needed) are all part of the quote."],
    ["Can you liaise with our planner or hotel directly?", "Yes, a single point of contact from the hotel or planning team can confirm the room, sequence and access ahead of the team's arrival."],
  ],
  "family-pagdi": [
    ["Can fathers and brothers have a more detailed family pagdi?", "Yes. Close family can use a refined fold or complementary accessory while the wider group uses a simpler coordinated style."],
    ["How should we divide colours between both families?", "Choose two complementary shades from the outfits or décor and reserve the most distinctive treatment for the groom."],
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
  "wedding safa wala in Chandigarh",
  "safa tying service Chandigarh",
  "groom pagdi Chandigarh",
  "professional safa tying in Chandigarh",
  "book turban tying in Chandigarh",
  "professional pagri tying near me in Chandigarh",
  "turban tying artist in Chandigarh",
  "turban tying service provider in Chandigarh",
  "wedding turban tying artist in Chandigarh",
  "dulha turban tying service in Chandigarh",
  "professional pagri artist in Chandigarh",
  "baraat turban tying near me in Chandigarh",
  "baraat safa tying cost",
  "dulha pagdi kalgi service",
  "groom turban tying at venue",
  "dulha safa tying onsite",
  "dulha turban tying mobile service",
  "dulha turban tying cost",
  "baraat turban tying mobile service",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
