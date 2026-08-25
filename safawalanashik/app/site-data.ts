export type LocationItem = {
  slug: string;
  name: string;
  group: "Nashik area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Gangapur Road", "College Road", "Panchavati", "Nashik Road", "Indira Nagar", "Cidco", "Mahatma Nagar", "Govind Nagar", "Pathardi Phata", "Deolali", "Satpur", "Ambad", "Adgaon", "Makhmalabad", "Dwarka", "Canada Corner", "Ashok Stambh", "Trimbak Road", "Anandvalli", "Mhasrul"
];

const nearbyNames: string[] = [
  "Sinnar", "Igatpuri", "Trimbakeshwar", "Dindori", "Yeola", "Niphad", "Lasalgaon", "Manmad", "Malegaon", "Deolali", "Ozar", "Pimpalgaon Baswant", "Satana", "Kalwan", "Chandwad", "Kopargaon", "Shirdi", "Ahmednagar", "Dhule", "Saputara"
];

const localNotes: Record<string, [string, string]> = {
  "Gangapur Road": ["Gangapur Road celebrations often combine local family ceremonies with guests arriving from outside Nashik.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "College Road": ["College Road celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Panchavati": ["Families near Panchavati usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Nashik Road": ["Nashik Road-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Indira Nagar": ["Indira Nagar-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Cidco": ["Cidco is a practical base for wedding ceremonies on both sides of the Nashik service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Mahatma Nagar": ["Mahatma Nagar celebrations often combine local family ceremonies with guests arriving from outside Nashik.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Govind Nagar": ["Govind Nagar is a practical base for wedding ceremonies on both sides of the Nashik service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Pathardi Phata": ["Pathardi Phata is a practical base for wedding ceremonies on both sides of the Nashik service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Deolali": ["Deolali functions often bring family groups arriving from several parts of Nashik.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Satpur": ["Satpur functions often bring family groups arriving from several parts of Nashik.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Ambad": ["Ambad functions often bring family groups arriving from several parts of Nashik.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Adgaon": ["Adgaon suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Makhmalabad": ["Makhmalabad celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Dwarka": ["Dwarka functions often bring family groups arriving from several parts of Nashik.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Canada Corner": ["Canada Corner functions often bring family groups arriving from several parts of Nashik.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Ashok Stambh": ["Ashok Stambh weddings often bring together resort guests, destination groups and families staying close to the Nashik hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Trimbak Road": ["Families near Trimbak Road usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Anandvalli": ["Anandvalli celebrations often combine local family ceremonies with guests arriving from outside Nashik.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Mhasrul": ["Mhasrul-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Sinnar": ["Sinnar weddings can be covered with advance scheduling from Nashik for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Igatpuri": ["Igatpuri celebrations are a natural extension of our Nashik service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Trimbakeshwar": ["Trimbakeshwar bookings are planned as an outstation service from Nashik with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Dindori": ["Dindori weddings often balance traditional ceremonies with guests travelling between hotels and venues near Nashik.", "We confirm the exact Dindori location, travel window and tying order before accepting the event schedule."],
  "Yeola": ["Yeola bookings are planned as an outstation service from Nashik with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Niphad": ["Niphad destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Nashik, and a covered styling area is recommended."],
  "Lasalgaon": ["Lasalgaon bookings are planned as an outstation service from Nashik with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Manmad": ["Manmad functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Malegaon": ["Malegaon weddings can be covered with advance scheduling from Nashik for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Ozar": ["Ozar weddings can be covered with advance scheduling from Nashik for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Pimpalgaon Baswant": ["Pimpalgaon Baswant destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Nashik, and a covered styling area is recommended."],
  "Satana": ["Satana weddings can be covered with advance scheduling from Nashik for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Kalwan": ["Kalwan offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Nashik team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Chandwad": ["Chandwad weddings can be covered with advance scheduling from Nashik for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Kopargaon": ["Kopargaon functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Shirdi": ["Shirdi celebrations are a natural extension of our Nashik service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Ahmednagar": ["Ahmednagar destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Nashik, and a covered styling area is recommended."],
  "Dhule": ["Dhule celebrations are a natural extension of our Nashik service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Saputara": ["Saputara weddings often balance traditional ceremonies with guests travelling between hotels and venues near Nashik.", "We confirm the exact Saputara location, travel window and tying order before accepting the event schedule."],
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
  const group = internalNames.includes(name) ? "Nashik area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Do you cover wedding safa bookings in ${name}?`, `We do \u2014 ${summary} It's treated as a ${group === "Nashik area" ? "local on-location service" : "pre-planned travelling assignment"} for ${name}, based on date and artist availability.`],
      [`What should be confirmed before a ${name} venue booking?`, `${planning} We'll need the precise venue pin, preparation-room details, and the groom\u2019s ready-by time, not just a venue name.`],
      [`Which pagdi style is recommended for weddings in ${name}?`, `${finish} tends to suit ${palette} colour choices well, though we always confirm the final pick against the sherwani, face and ceremony setting.`],
      [`How is artist count decided for a ${name} baraat?`, `It comes down to the total baraati safa count and the gap between arrival and procession. For every ${name} booking, the groom is styled separately from the quicker family and baraat rounds.`],
      [`Is it possible to use different colours for family and baraat safas?`, `Yes \u2014 in ${name}, the groom can stay visually distinct while parents, family and the wider baraat share complementary colours. Outfit references should be shared before fabric is confirmed.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Nashik area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Nashik", intro: "Professional, on-location safa tying that keeps the groom, family and baraat ready in step with the day's schedule.", detail: "The finishing style and fabric are locked in beforehand, and artist numbers are planned around your final guest count.", faqs: [["How many safas can your team tie?", "Team size is matched to your headcount and available preparation window. Share both figures for an accurate plan."], ["Do you come to the hotel or venue?", "Yes. Our artists provide on-location service at hotels, resorts, homes and wedding venues."], ["Can colours match the wedding theme?", "Yes. Send outfit or décor references before the event so we can recommend suitable coordinated shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Nashik", intro: "A dedicated groom pagdi appointment, styled around the sherwani, face shape and the day's overall look.", detail: "The session is unhurried, with kalgi, brooch and fabric accents added only where they support the finished profile.", faqs: [["What's the right time to style the groom's pagdi?", "We usually finish it right after the sherwani is on and before portraits begin — we'll confirm the exact slot with your photographer."], ["Can you help pick the pagdi colour?", "Yes, we look at the sherwani, stole and jewellery together with the wedding palette before recommending a shade."], ["Does the groom get his own separate session?", "Always. The groom is styled on his own timeline, apart from the quicker family and baraati rounds."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Nashik", intro: "Efficient safa tying for friends, relatives and the wider wedding party, timed to the procession schedule.", detail: "Batches are organised by arrival time, and every safa follows the same fold for a consistent group look.", faqs: [["Can you handle a large baraati group?", "Yes. We add artists according to the group size and time available."], ["Should we order extra safas?", "A small quantity buffer is sensible for late additions or fit changes."], ["Can close family wear a different colour?", "Yes. Parents and siblings can use a complementary shade while the wider group stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Nashik", intro: "A travel-ready styling team for resorts, river-side celebrations and multi-day destination wedding schedules.", detail: "We coordinate with the planner or hotel, consolidate the fabric and accessories, and build a room-wise tying plan for the guest list.", faqs: [["Will you travel to resorts beyond Nashik itself?", "Yes — just share the property details and schedule so we can plan travel and access in advance."], ["Can the same team cover more than one function?", "We can quote a multi-event assignment once we know the dates, styles and any accommodation needs."], ["How far ahead should destination bookings be made?", "A few weeks ahead is ideal for peak dates, so the team is reserved in time."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Nashik", intro: "Refined coordinated pagdis for fathers, brothers, uncles and close relatives, with the groom kept visually distinctive.", detail: "Family styling works best with two complementary levels: a signature groom treatment and a clean repeatable fold for relatives.", faqs: [["Is a more comfortable fit available for older guests?", "Definitely — mention any comfort needs and the artist will adjust accordingly."], ["Can both families be styled in different palettes?", "Yes, complementary-but-distinct colours help tell the two sides apart."], ["Do kids get styled too?", "Yes, share their rough ages and count ahead of time so we can plan for them."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Nashik", intro: "Custom colour planning for the groom and wedding party, built around your outfits and decor rather than a fixed catalogue.", detail: "We review your references first, then propose shades that stay elegant across different lighting and camera conditions.", faqs: [["Can you match an exact outfit colour?", "We can work toward a close coordinated match; physical fabric may vary slightly from screen colours."], ["Which colours photograph well outdoors?", "Ivory, rust, maroon, saffron, muted pink and deeper jewel tones generally retain definition in outdoor light."], ["Can the groom use a contrast colour?", "Yes. A controlled contrast is often the best way to keep the groom visually distinct."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long does wedding safa tying take in Nashik?", "Timing depends on the fold and group size. Once we know the guest quantity and ready-by time, we recommend the artist count and a practical batch schedule."],
    ["Are the safas supplied with the tying service?", "The fabric and styling requirement are confirmed together. Share whether you need a complete safa package or tying support for fabric already selected by the family."],
  ],
  "groom-pagdi": [
    ["Can a kalgi or brooch be added to the groom pagdi?", "Yes — we position kalgi, brooch, feather or pearl detailing after checking it against the sherwani and jewellery for balance."],
    ["Is a pre-wedding pagdi trial possible?", "For a very specific style, or if the groom wants to compare looks, we can arrange a trial or detailed consultation beforehand."],
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
  "wedding safa wala in Nashik",
  "safa tying service Nashik",
  "groom pagdi Nashik",
  "wedding pagri specialist in Nashik",
  "safa tying cost in Nashik",
  "safa tying professional in Nashik",
  "specialist pagri tying artist in Nashik",
  "safa tying for groom in Nashik",
  "wedding pagdi tying service in Nashik",
  "royal wedding safa service in Nashik",
  "safa bandhne wala in Nashik",
  "turban tying artist in Nashik",
  "dulha pagri tying mobile service",
  "wedding safa tying on location",
  "dulha pagri tying charges",
  "groom pagri hire with tying",
  "dulha turban tying specialist",
  "baraat turban tying team",
  "groom safa tying for barati",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
