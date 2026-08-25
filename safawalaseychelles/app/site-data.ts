export type LocationItem = {
  slug: string;
  name: string;
  group: "Seychelles area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Mont Fleuri", "Bel Air", "English River", "Saint Louis", "Roche Caiman"
];

const nearbyNames: string[] = [
  "Beau Vallon", "Anse Royale", "Anse Boileau", "Grand Anse", "Glacis", "Bel Ombre", "Takamaka", "Baie Lazare", "Port Glaud", "Baie Sainte Anne", "Anse Volbert", "Grand Anse Praslin", "La Passe", "La Reunion", "Anse Source d'Argent"
];

const localNotes: Record<string, [string, string]> = {
  "Mont Fleuri": ["Mont Fleuri weddings often bring together resort guests, destination groups and families staying close to the Seychelles hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Bel Air": ["Bel Air is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "English River": ["English River is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Saint Louis": ["Families near Saint Louis usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Roche Caiman": ["Roche Caiman is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Beau Vallon": ["Beau Vallon weddings can be covered with advance scheduling from Seychelles for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Anse Royale": ["Anse Royale weddings can be covered with advance scheduling from Seychelles for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Anse Boileau": ["Anse Boileau bookings are planned as an outstation service from Seychelles with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Grand Anse": ["Grand Anse weddings often balance traditional ceremonies with guests travelling between hotels and venues near Seychelles.", "We confirm the exact Grand Anse location, travel window and tying order before accepting the event schedule."],
  "Glacis": ["Glacis celebrations are a natural extension of our Seychelles service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Bel Ombre": ["Bel Ombre celebrations are a natural extension of our Seychelles service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Takamaka": ["Takamaka bookings are planned as an outstation service from Seychelles with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Baie Lazare": ["Baie Lazare is handled as a planned destination assignment from Seychelles rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Port Glaud": ["Port Glaud weddings often balance traditional ceremonies with guests travelling between hotels and venues near Seychelles.", "We confirm the exact Port Glaud location, travel window and tying order before accepting the event schedule."],
  "Baie Sainte Anne": ["Baie Sainte Anne weddings can be covered with advance scheduling from Seychelles for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Anse Volbert": ["Anse Volbert celebrations are a natural extension of our Seychelles service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Grand Anse Praslin": ["Grand Anse Praslin offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Seychelles team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "La Passe": ["La Passe weddings can be covered with advance scheduling from Seychelles for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "La Reunion": ["La Reunion functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Anse Source d'Argent": ["Anse Source d'Argent celebrations are a natural extension of our Seychelles service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
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
  const group = internalNames.includes(name) ? "Seychelles area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Can I book a professional wedding safa wala in ${name}?`, `Yes. ${summary} We accept ${name} bookings as a ${group === "Seychelles area" ? "local on-location service" : "pre-planned travelling assignment"}, subject to the wedding date and artist availability.`],
      [`What should we confirm for a ${name} wedding venue?`, `${planning} Please send the exact venue pin, preparation-room details and the groom\u2019s ready-by time rather than only the venue name.`],
      [`Which groom pagdi style suits a wedding in ${name}?`, `${finish} works particularly well with ${palette} palettes, although the final groom pagdi is selected from the sherwani, face profile, jewellery and ceremony setting.`],
      [`How many safa artists are needed for a ${name} baraat?`, `The team size depends on the final number of baraati safas and the time between guest arrival and procession departure. For ${name}, we separate the groom\u2019s detailed session from faster family and baraati batches.`],
      [`Can you provide family pagdis and baraati safas in different colours?`, `Yes. For a ${name} celebration, the groom can remain distinctive while parents, close family and the wider baraat use complementary colour groups. Share outfit references before fabric is finalised.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Seychelles area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Seychelles", intro: "A coordinated on-location service for grooms, families and wedding guests, planned around your ceremony and departure time.", detail: "We shortlist the drape, colour and finishing style before the event, then assign artists according to the number of people who must be ready together.", faqs: [["How many safas can your team tie?", "Team size is matched to your headcount and available preparation window. Share both figures for an accurate plan."], ["Do you come to the hotel or venue?", "Yes. Our artists provide on-location service at hotels, resorts, homes and wedding venues."], ["Can colours match the wedding theme?", "Yes. Send outfit or décor references before the event so we can recommend suitable coordinated shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Seychelles", intro: "Camera-ready pagdi styling built specifically for the groom, separate from the faster family and guest sessions.", detail: "We shape the fold around the outfit and jewellery first, then finish with accessories that stay balanced rather than heavy.", faqs: [["When during the day does the groom's pagdi get tied?", "Typically once the sherwani is on and just before portraits start — we coordinate the exact timing with your photographer."], ["Will you suggest a colour for the groom's pagdi?", "Yes, our recommendation factors in the sherwani, stole, jewellery and the day's overall palette."], ["Is the groom's styling done apart from the rest of the party?", "Yes — it's a dedicated session, separate from the quicker family and baraati styling."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Seychelles", intro: "Fast, consistent safa tying for friends and relatives who need to look coordinated without delaying the procession.", detail: "We divide guests into manageable batches and use an agreed style so the final group feels unified in photographs.", faqs: [["What's your capacity for a big baraat?", "We scale the artist team to match your group size and the time you have available."], ["Should extra safas be kept as backup?", "It's a good idea — a small buffer handles late guests or fit changes smoothly."], ["Can close family stand out with a different colour?", "Yes, a complementary shade for parents and siblings works well against a uniform wider group."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Seychelles", intro: "A travel-ready styling team for resorts, river-side celebrations and multi-day destination wedding schedules.", detail: "We coordinate with the planner or hotel, consolidate the fabric and accessories, and build a room-wise tying plan for the guest list.", faqs: [["Will you travel to resorts beyond Seychelles itself?", "Yes — just share the property details and schedule so we can plan travel and access in advance."], ["Can the same team cover more than one function?", "We can quote a multi-event assignment once we know the dates, styles and any accommodation needs."], ["How far ahead should destination bookings be made?", "A few weeks ahead is ideal for peak dates, so the team is reserved in time."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Seychelles", intro: "Refined coordinated pagdis for fathers, brothers, uncles and close relatives, with the groom kept visually distinctive.", detail: "Family styling works best with two complementary levels: a signature groom treatment and a clean repeatable fold for relatives.", faqs: [["Is a more comfortable fit available for older guests?", "Definitely — mention any comfort needs and the artist will adjust accordingly."], ["Can both families be styled in different palettes?", "Yes, complementary-but-distinct colours help tell the two sides apart."], ["Do kids get styled too?", "Yes, share their rough ages and count ahead of time so we can plan for them."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Seychelles", intro: "Custom colour planning for the groom and wedding party, built around your outfits and decor rather than a fixed catalogue.", detail: "We review your references first, then propose shades that stay elegant across different lighting and camera conditions.", faqs: [["Is it possible to match our outfit colour precisely?", "We get as close as possible, though fabric tone can shift slightly from what's seen on screen."], ["Which shades work best for outdoor wedding photography?", "Ivory, rust, maroon, saffron, muted pink and richer jewel tones tend to stay defined in daylight."], ["Should the groom's colour contrast with the group?", "Often yes — a deliberate contrast is a reliable way to make him stand out."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long does wedding safa tying take in Seychelles?", "Timing depends on the fold and group size. Once we know the guest quantity and ready-by time, we recommend the artist count and a practical batch schedule."],
    ["Are the safas supplied with the tying service?", "The fabric and styling requirement are confirmed together. Share whether you need a complete safa package or tying support for fabric already selected by the family."],
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
    ["Is artist travel factored into the destination quote?", "Yes — route, reporting time, property access, arrival buffer and artist accommodation (if needed) are all part of the quote."],
    ["Can you liaise with our planner or hotel directly?", "Yes, a single point of contact from the hotel or planning team can confirm the room, sequence and access ahead of the team's arrival."],
  ],
  "family-pagdi": [
    ["Can immediate family like the father or brothers get extra detailing?", "Yes, a refined fold or added accessory works well for them while the wider group stays simple."],
    ["What's the best way to split family colours?", "Choose two complementary shades between the families and save the standout treatment for the groom."],
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
  "wedding safa wala in Seychelles",
  "safa tying service Seychelles",
  "groom pagdi Seychelles",
  "on site turban tying in Seychelles",
  "pagri tying service provider near me in Seychelles",
  "pagdi tying artist booking in Seychelles",
  "pagdi tying workers in Seychelles",
  "pagdi bandhne ki service in Seychelles",
  "professional turban artist in Seychelles",
  "on location turban tying in Seychelles",
  "wedding turban specialist in Seychelles",
  "wedding safa specialist in Seychelles",
  "wedding pagri tying specialist",
  "wedding pagdi package",
  "large group safa tying",
  "group wedding pagri tying",
  "wedding safa tying on site",
  "baraat pagri tying for baraat",
  "family function turban tying",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
