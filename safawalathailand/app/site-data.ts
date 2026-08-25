export type LocationItem = {
  slug: string;
  name: string;
  group: "Thailand area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Sukhumvit", "Silom", "Sathorn", "Siam", "Ratchada", "Ari", "Thonglor", "Ekkamai", "Chatuchak", "Riverside"
];

const nearbyNames: string[] = [
  "Patong", "Karon", "Kata", "Kamala", "Rawai", "Nai Harn", "Bang Tao", "Surin", "Phuket Town", "Central Pattaya", "Jomtien", "Naklua", "Wongamat", "Pratumnak", "Old City", "Nimman", "Chang Khlan", "Santitham", "Mae Hia", "Ao Nang", "Krabi Town", "Railay", "Klong Muang", "Tubkaek"
];

const localNotes: Record<string, [string, string]> = {
  "Sukhumvit": ["For wedding groups near Sukhumvit, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Silom": ["Silom is a practical base for wedding ceremonies on both sides of the Thailand service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Sathorn": ["Sathorn is popular with intimate and destination wedding groups looking for a distinctly Thailand setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Siam": ["Siam is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Ratchada": ["Ratchada wedding schedules can include home rituals followed by a venue entry elsewhere in Thailand.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Ari": ["Ari is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Thonglor": ["Thonglor celebrations often combine local family ceremonies with guests arriving from outside Thailand.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Ekkamai": ["Ekkamai functions often bring family groups arriving from several parts of Thailand.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Chatuchak": ["Chatuchak celebrations often combine local family ceremonies with guests arriving from outside Thailand.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Riverside": ["Riverside functions often bring family groups arriving from several parts of Thailand.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Patong": ["Patong celebrations are a natural extension of our Thailand service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Karon": ["Karon functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Kata": ["Kata destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Thailand, and a covered styling area is recommended."],
  "Kamala": ["Kamala is handled as a planned destination assignment from Thailand rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Rawai": ["Rawai weddings can be covered with advance scheduling from Thailand for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Nai Harn": ["Nai Harn functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Bang Tao": ["Bang Tao functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Surin": ["Surin offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Thailand team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Phuket Town": ["Phuket Town weddings often balance traditional ceremonies with guests travelling between hotels and venues near Thailand.", "We confirm the exact Phuket Town location, travel window and tying order before accepting the event schedule."],
  "Central Pattaya": ["Central Pattaya offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Thailand team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Jomtien": ["Jomtien celebrations are a natural extension of our Thailand service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Naklua": ["Naklua functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Wongamat": ["Wongamat weddings can be covered with advance scheduling from Thailand for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Pratumnak": ["Pratumnak bookings are planned as an outstation service from Thailand with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Old City": ["Old City weddings can be covered with advance scheduling from Thailand for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Nimman": ["Nimman destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Thailand, and a covered styling area is recommended."],
  "Chang Khlan": ["Chang Khlan offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Thailand team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Santitham": ["Santitham celebrations are a natural extension of our Thailand service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Mae Hia": ["Mae Hia bookings are planned as an outstation service from Thailand with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Ao Nang": ["Ao Nang offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Thailand team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Krabi Town": ["Krabi Town weddings can be covered with advance scheduling from Thailand for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Railay": ["Railay weddings often balance traditional ceremonies with guests travelling between hotels and venues near Thailand.", "We confirm the exact Railay location, travel window and tying order before accepting the event schedule."],
  "Klong Muang": ["Klong Muang weddings often balance traditional ceremonies with guests travelling between hotels and venues near Thailand.", "We confirm the exact Klong Muang location, travel window and tying order before accepting the event schedule."],
  "Tubkaek": ["Tubkaek offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Thailand team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
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
  const group = internalNames.includes(name) ? "Thailand area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Do you cover wedding safa bookings in ${name}?`, `We do \u2014 ${summary} It's treated as a ${group === "Thailand area" ? "local on-location service" : "pre-planned travelling assignment"} for ${name}, based on date and artist availability.`],
      [`What should be confirmed before a ${name} venue booking?`, `${planning} We'll need the precise venue pin, preparation-room details, and the groom\u2019s ready-by time, not just a venue name.`],
      [`Which pagdi style is recommended for weddings in ${name}?`, `${finish} tends to suit ${palette} colour choices well, though we always confirm the final pick against the sherwani, face and ceremony setting.`],
      [`How is artist count decided for a ${name} baraat?`, `It comes down to the total baraati safa count and the gap between arrival and procession. For every ${name} booking, the groom is styled separately from the quicker family and baraat rounds.`],
      [`Is it possible to use different colours for family and baraat safas?`, `Yes \u2014 in ${name}, the groom can stay visually distinct while parents, family and the wider baraat share complementary colours. Outfit references should be shared before fabric is confirmed.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Thailand area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Thailand", intro: "A dependable safa tying appointment for the whole wedding party, timed to your ceremony and photography schedule.", detail: "We confirm the drape and colour direction ahead of the event, then bring enough artists to keep every batch moving without delay.", faqs: [["How many safas can your team tie?", "Team size is matched to your headcount and available preparation window. Share both figures for an accurate plan."], ["Do you come to the hotel or venue?", "Yes. Our artists provide on-location service at hotels, resorts, homes and wedding venues."], ["Can colours match the wedding theme?", "Yes. Send outfit or décor references before the event so we can recommend suitable coordinated shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Thailand", intro: "A considered pagdi session that treats the groom as the visual centre of the day, not a rushed final step.", detail: "Kalgi, brooch and stole details are positioned after the sherwani is complete, keeping the finished look proportionate.", faqs: [["What's the right time to style the groom's pagdi?", "We usually finish it right after the sherwani is on and before portraits begin — we'll confirm the exact slot with your photographer."], ["Can you help pick the pagdi colour?", "Yes, we look at the sherwani, stole and jewellery together with the wedding palette before recommending a shade."], ["Does the groom get his own separate session?", "Always. The groom is styled on his own timeline, apart from the quicker family and baraati rounds."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Thailand", intro: "Efficient safa tying for friends, relatives and the wider wedding party, timed to the procession schedule.", detail: "Batches are organised by arrival time, and every safa follows the same fold for a consistent group look.", faqs: [["Is there a group size you can't handle for baraati safas?", "Not really — we bring on more artists as the group grows and time allows."], ["Is it worth ordering a few spare safas?", "Yes, a small buffer covers late arrivals or last-minute fit issues."], ["Can the close family's safas be a different shade?", "Yes, parents and siblings can wear a complementary colour while everyone else stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Thailand", intro: "A travelling safa team built for resort weddings, multi-day functions and destinations away from the city.", detail: "Fabric and accessories are consolidated before departure, and we plan a room-wise schedule with the hotel or planner.", faqs: [["Will you travel to resorts beyond Thailand itself?", "Yes — just share the property details and schedule so we can plan travel and access in advance."], ["Can the same team cover more than one function?", "We can quote a multi-event assignment once we know the dates, styles and any accommodation needs."], ["How far ahead should destination bookings be made?", "A few weeks ahead is ideal for peak dates, so the team is reserved in time."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Thailand", intro: "A family-wide pagdi plan that keeps parents and relatives visually aligned without competing with the groom.", detail: "Close family receive a shared, repeatable style while the groom's session remains separately detailed.", faqs: [["Can the fit be gentler for elderly family members?", "Yes, just flag any comfort concerns to the artist and we'll adjust the tension and finish."], ["Can each side of the family wear a different colour?", "Yes — two complementary palettes work well and help distinguish each family group."], ["Are children included in the styling?", "Yes, just let us know approximate ages and how many in advance."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Thailand", intro: "A colour-first approach to safa planning, matched against outfits, décor and floral choices already made.", detail: "Reference images guide the palette, and we suggest combinations that hold up across daylight, indoor light and photos.", faqs: [["Can you match an exact outfit colour?", "We can work toward a close coordinated match; physical fabric may vary slightly from screen colours."], ["Which colours photograph well outdoors?", "Ivory, rust, maroon, saffron, muted pink and deeper jewel tones generally retain definition in outdoor light."], ["Can the groom use a contrast colour?", "Yes. A controlled contrast is often the best way to keep the groom visually distinct."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long does wedding safa tying take in Thailand?", "Timing depends on the fold and group size. Once we know the guest quantity and ready-by time, we recommend the artist count and a practical batch schedule."],
    ["Are the safas supplied with the tying service?", "The fabric and styling requirement are confirmed together. Share whether you need a complete safa package or tying support for fabric already selected by the family."],
  ],
  "groom-pagdi": [
    ["Can a kalgi or brooch be added to the groom pagdi?", "Yes — we position kalgi, brooch, feather or pearl detailing after checking it against the sherwani and jewellery for balance."],
    ["Is a pre-wedding pagdi trial possible?", "For a very specific style, or if the groom wants to compare looks, we can arrange a trial or detailed consultation beforehand."],
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
    ["Can close relatives like fathers and brothers get a more detailed look?", "Yes, they can have a refined fold or an extra accessory while the rest of the family keeps it simpler."],
    ["How do we split colours between two families?", "Pick two complementary shades from the outfits or décor, and keep the most distinctive treatment for the groom alone."],
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
  "wedding safa wala in Thailand",
  "safa tying service Thailand",
  "groom pagdi Thailand",
  "dulha safa tying near me in Thailand",
  "hire turban tying service in Thailand",
  "professional safa tying near me in Thailand",
  "safa bandhne wale in Thailand",
  "premium turban tying service in Thailand",
  "dulha turban tying in Thailand",
  "groom turban tying service in Thailand",
  "hire pagri artist in Thailand",
  "safa tying specialist in Thailand",
  "wedding pagri tying for baraat",
  "dulha pagdi tying specialist",
  "groom pagri tying appointment",
  "baraat safa tying for wedding",
  "dulha safa tying professional",
  "dulha turban tying for groom",
  "baraat pagri tying onsite",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
