export type LocationItem = {
  slug: string;
  name: string;
  group: "Dehradun area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Rajpur Road", "Ballupur", "Vasant Vihar", "Clement Town", "Sahastradhara Road", "Jakhan", "Dalanwala", "Race Course", "Patel Nagar", "Prem Nagar", "Nehru Colony", "Raipur", "Malsi", "Mussoorie Road", "Karanpur", "ISBT", "GMS Road", "Subhash Nagar", "Turner Road", "Dharampur"
];

const nearbyNames: string[] = [
  "Rishikesh", "Haridwar", "Roorkee", "Saharanpur", "Paonta Sahib", "Vikasnagar", "Mussoorie", "Dhanaulti", "Chakrata", "Herbertpur", "Doiwala", "Laksar", "Najibabad", "Kotdwar", "Kalsi", "Landour", "Kanatal", "Narendranagar"
];

const localNotes: Record<string, [string, string]> = {
  "Rajpur Road": ["Rajpur Road functions often bring family groups arriving from several parts of Dehradun.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Ballupur": ["Ballupur is popular with intimate and destination wedding groups looking for a distinctly Dehradun setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Vasant Vihar": ["Vasant Vihar wedding schedules can include home rituals followed by a venue entry elsewhere in Dehradun.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Clement Town": ["Clement Town functions often bring family groups arriving from several parts of Dehradun.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Sahastradhara Road": ["Sahastradhara Road is a practical base for wedding ceremonies on both sides of the Dehradun service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Jakhan": ["Jakhan is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Dalanwala": ["Dalanwala functions often bring family groups arriving from several parts of Dehradun.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Race Course": ["Race Course weddings often bring together resort guests, destination groups and families staying close to the Dehradun hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Patel Nagar": ["Patel Nagar is popular with intimate and destination wedding groups looking for a distinctly Dehradun setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Prem Nagar": ["Prem Nagar celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Nehru Colony": ["Nehru Colony suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Raipur": ["For wedding groups near Raipur, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Malsi": ["Malsi is popular with intimate and destination wedding groups looking for a distinctly Dehradun setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Mussoorie Road": ["Mussoorie Road celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Karanpur": ["Karanpur celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "ISBT": ["ISBT is a practical base for wedding ceremonies on both sides of the Dehradun service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "GMS Road": ["For wedding groups near GMS Road, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Subhash Nagar": ["Families near Subhash Nagar usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Turner Road": ["Turner Road functions often bring family groups arriving from several parts of Dehradun.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Dharampur": ["Dharampur celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Rishikesh": ["Rishikesh bookings are planned as an outstation service from Dehradun with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Haridwar": ["Haridwar offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Dehradun team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Roorkee": ["Roorkee celebrations are a natural extension of our Dehradun service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Saharanpur": ["Saharanpur weddings can be covered with advance scheduling from Dehradun for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Paonta Sahib": ["Paonta Sahib functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Vikasnagar": ["Vikasnagar weddings often balance traditional ceremonies with guests travelling between hotels and venues near Dehradun.", "We confirm the exact Vikasnagar location, travel window and tying order before accepting the event schedule."],
  "Mussoorie": ["Mussoorie offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Dehradun team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Dhanaulti": ["Dhanaulti functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Chakrata": ["Chakrata offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Dehradun team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Herbertpur": ["Herbertpur offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Dehradun team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Doiwala": ["Doiwala bookings are planned as an outstation service from Dehradun with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Laksar": ["Laksar is handled as a planned destination assignment from Dehradun rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Najibabad": ["Najibabad celebrations are a natural extension of our Dehradun service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Kotdwar": ["Kotdwar functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Kalsi": ["Kalsi functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Landour": ["Landour destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Dehradun, and a covered styling area is recommended."],
  "Kanatal": ["Kanatal celebrations are a natural extension of our Dehradun service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Narendranagar": ["Narendranagar weddings can be covered with advance scheduling from Dehradun for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
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
  const group = internalNames.includes(name) ? "Dehradun area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Can I book a professional wedding safa wala in ${name}?`, `Yes. ${summary} We accept ${name} bookings as a ${group === "Dehradun area" ? "local on-location service" : "pre-planned travelling assignment"}, subject to the wedding date and artist availability.`],
      [`What should we confirm for a ${name} wedding venue?`, `${planning} Please send the exact venue pin, preparation-room details and the groom\u2019s ready-by time rather than only the venue name.`],
      [`Which groom pagdi style suits a wedding in ${name}?`, `${finish} works particularly well with ${palette} palettes, although the final groom pagdi is selected from the sherwani, face profile, jewellery and ceremony setting.`],
      [`How many safa artists are needed for a ${name} baraat?`, `The team size depends on the final number of baraati safas and the time between guest arrival and procession departure. For ${name}, we separate the groom\u2019s detailed session from faster family and baraati batches.`],
      [`Can you provide family pagdis and baraati safas in different colours?`, `Yes. For a ${name} celebration, the groom can remain distinctive while parents, close family and the wider baraat use complementary colour groups. Share outfit references before fabric is finalised.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Dehradun area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Dehradun", intro: "A coordinated on-location service for grooms, families and wedding guests, planned around your ceremony and departure time.", detail: "We shortlist the drape, colour and finishing style before the event, then assign artists according to the number of people who must be ready together.", faqs: [["How many safas can your team tie?", "Team size is matched to your headcount and available preparation window. Share both figures for an accurate plan."], ["Do you come to the hotel or venue?", "Yes. Our artists provide on-location service at hotels, resorts, homes and wedding venues."], ["Can colours match the wedding theme?", "Yes. Send outfit or décor references before the event so we can recommend suitable coordinated shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Dehradun", intro: "A more considered, camera-ready pagdi service shaped around the groom's outfit, face profile and wedding aesthetic.", detail: "The groom receives dedicated styling time, with optional kalgi, brooch and fabric detailing kept balanced rather than overdone.", faqs: [["When during the day does the groom's pagdi get tied?", "Typically once the sherwani is on and just before portraits start — we coordinate the exact timing with your photographer."], ["Will you suggest a colour for the groom's pagdi?", "Yes, our recommendation factors in the sherwani, stole, jewellery and the day's overall palette."], ["Is the groom's styling done apart from the rest of the party?", "Yes — it's a dedicated session, separate from the quicker family and baraati styling."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Dehradun", intro: "Fast, consistent safa tying for friends and relatives who need to look coordinated without delaying the procession.", detail: "We divide guests into manageable batches and use an agreed style so the final group feels unified in photographs.", faqs: [["What's your capacity for a big baraat?", "We scale the artist team to match your group size and the time you have available."], ["Should extra safas be kept as backup?", "It's a good idea — a small buffer handles late guests or fit changes smoothly."], ["Can close family stand out with a different colour?", "Yes, a complementary shade for parents and siblings works well against a uniform wider group."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Dehradun", intro: "A travel-ready styling team for resorts, river-side celebrations and multi-day destination wedding schedules.", detail: "We coordinate with the planner or hotel, consolidate the fabric and accessories, and build a room-wise tying plan for the guest list.", faqs: [["Will you travel to resorts beyond Dehradun itself?", "Yes — just share the property details and schedule so we can plan travel and access in advance."], ["Can the same team cover more than one function?", "We can quote a multi-event assignment once we know the dates, styles and any accommodation needs."], ["How far ahead should destination bookings be made?", "A few weeks ahead is ideal for peak dates, so the team is reserved in time."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Dehradun", intro: "Refined coordinated pagdis for fathers, brothers, uncles and close relatives, with the groom kept visually distinctive.", detail: "Family styling works best with two complementary levels: a signature groom treatment and a clean repeatable fold for relatives.", faqs: [["Is a more comfortable fit available for older guests?", "Definitely — mention any comfort needs and the artist will adjust accordingly."], ["Can both families be styled in different palettes?", "Yes, complementary-but-distinct colours help tell the two sides apart."], ["Do kids get styled too?", "Yes, share their rough ages and count ahead of time so we can plan for them."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Dehradun", intro: "Custom colour planning for the groom and wedding party, built around your outfits and decor rather than a fixed catalogue.", detail: "We review your references first, then propose shades that stay elegant across different lighting and camera conditions.", faqs: [["Can you get an exact colour match to our outfits?", "We aim for a close coordinated match, though fabric can look slightly different from a screen reference."], ["What colours hold up best in outdoor photos?", "Ivory, rust, maroon, saffron, muted pink and deep jewel tones tend to photograph well outdoors."], ["Should the groom wear a contrasting colour?", "A controlled contrast often works best to keep him visually distinct from the group."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long does wedding safa tying take in Dehradun?", "Timing depends on the fold and group size. Once we know the guest quantity and ready-by time, we recommend the artist count and a practical batch schedule."],
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
    ["When's the right time to lock in safa colours?", "Once the main outfits are chosen — early enough that we can check the fabric in both daylight and indoor light."],
    ["Can guests wear more than one coordinated colour?", "Yes, two or three controlled shades can group families while keeping the whole baraat looking cohesive."],
  ],
};

export function getServiceFaqs(service: (typeof services)[number]) {
  return [...service.faqs, ...(serviceFaqAdditions[service.slug] ?? [])] as [string, string][];
}

export const primaryKeywords = [
  "wedding safa wala in Dehradun",
  "safa tying service Dehradun",
  "groom pagdi Dehradun",
  "mobile safa tying service in Dehradun",
  "best pagdi tying service in Dehradun",
  "safa tying for family in Dehradun",
  "safa tying booking in Dehradun",
  "specialist turban tying artist in Dehradun",
  "expert safa tying artist in Dehradun",
  "groom safa specialist in Dehradun",
  "turban tying service provider near me in Dehradun",
  "professional turban artist in Dehradun",
  "traditional safa tying method",
  "pagdi rental service with artist",
  "punjabi turban tying",
  "family function pagdi tying",
  "punjabi pagri tying",
  "wedding pagri tying for baraat",
  "groom turban tying mobile service",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
