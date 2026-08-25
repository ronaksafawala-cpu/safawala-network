export type LocationItem = {
  slug: string;
  name: string;
  group: "Mahabaleshwar area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Main Market", "Old Mahabaleshwar", "Lingmala", "Bhilar", "Metgutad", "Panchgani Road", "Venna Lake", "Arthur's Seat Road", "Pratapgad Road", "Khingar", "Table Land", "Mapro Garden Area", "Connaught Peak", "Wilson Point", "Tapola Road"
];

const nearbyNames: string[] = [
  "Panchgani", "Wai", "Satara", "Karad", "Patan", "Koregaon", "Phaltan", "Kolhapur", "Sangli", "Miraj", "Kaas", "Pratapgad", "Tapola", "Dhom", "Khandala", "Lonavala", "Pune", "Khed", "Dapoli"
];

const localNotes: Record<string, [string, string]> = {
  "Main Market": ["Main Market functions often bring family groups arriving from several parts of Mahabaleshwar.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Old Mahabaleshwar": ["Old Mahabaleshwar suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Lingmala": ["Lingmala wedding schedules can include home rituals followed by a venue entry elsewhere in Mahabaleshwar.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Bhilar": ["Bhilar wedding schedules can include home rituals followed by a venue entry elsewhere in Mahabaleshwar.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Metgutad": ["Metgutad functions often bring family groups arriving from several parts of Mahabaleshwar.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Panchgani Road": ["Panchgani Road celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Venna Lake": ["Venna Lake wedding schedules can include home rituals followed by a venue entry elsewhere in Mahabaleshwar.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Arthur's Seat Road": ["Arthur's Seat Road celebrations often combine local family ceremonies with guests arriving from outside Mahabaleshwar.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Pratapgad Road": ["Pratapgad Road weddings often bring together resort guests, destination groups and families staying close to the Mahabaleshwar hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Khingar": ["Khingar is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Table Land": ["Table Land is a practical base for wedding ceremonies on both sides of the Mahabaleshwar service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Mapro Garden Area": ["Mapro Garden Area suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Connaught Peak": ["Families near Connaught Peak usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Wilson Point": ["Wilson Point functions often bring family groups arriving from several parts of Mahabaleshwar.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Tapola Road": ["Tapola Road celebrations often combine local family ceremonies with guests arriving from outside Mahabaleshwar.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Panchgani": ["Panchgani is handled as a planned destination assignment from Mahabaleshwar rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Wai": ["Wai bookings are planned as an outstation service from Mahabaleshwar with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Satara": ["Satara destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Mahabaleshwar, and a covered styling area is recommended."],
  "Karad": ["Karad weddings can be covered with advance scheduling from Mahabaleshwar for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Patan": ["Patan celebrations are a natural extension of our Mahabaleshwar service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Koregaon": ["Koregaon destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Mahabaleshwar, and a covered styling area is recommended."],
  "Phaltan": ["Phaltan destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Mahabaleshwar, and a covered styling area is recommended."],
  "Kolhapur": ["Kolhapur weddings can be covered with advance scheduling from Mahabaleshwar for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Sangli": ["Sangli destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Mahabaleshwar, and a covered styling area is recommended."],
  "Miraj": ["Miraj celebrations are a natural extension of our Mahabaleshwar service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Kaas": ["Kaas functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Pratapgad": ["Pratapgad weddings often balance traditional ceremonies with guests travelling between hotels and venues near Mahabaleshwar.", "We confirm the exact Pratapgad location, travel window and tying order before accepting the event schedule."],
  "Tapola": ["Tapola weddings can be covered with advance scheduling from Mahabaleshwar for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Dhom": ["Dhom functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Khandala": ["Khandala is handled as a planned destination assignment from Mahabaleshwar rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Lonavala": ["Lonavala functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Pune": ["Pune weddings can be covered with advance scheduling from Mahabaleshwar for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Khed": ["Khed destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Mahabaleshwar, and a covered styling area is recommended."],
  "Dapoli": ["Dapoli functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
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
  const group = internalNames.includes(name) ? "Mahabaleshwar area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Can I book a professional wedding safa wala in ${name}?`, `Yes. ${summary} We accept ${name} bookings as a ${group === "Mahabaleshwar area" ? "local on-location service" : "pre-planned travelling assignment"}, subject to the wedding date and artist availability.`],
      [`What should we confirm for a ${name} wedding venue?`, `${planning} Please send the exact venue pin, preparation-room details and the groom\u2019s ready-by time rather than only the venue name.`],
      [`Which groom pagdi style suits a wedding in ${name}?`, `${finish} works particularly well with ${palette} palettes, although the final groom pagdi is selected from the sherwani, face profile, jewellery and ceremony setting.`],
      [`How many safa artists are needed for a ${name} baraat?`, `The team size depends on the final number of baraati safas and the time between guest arrival and procession departure. For ${name}, we separate the groom\u2019s detailed session from faster family and baraati batches.`],
      [`Can you provide family pagdis and baraati safas in different colours?`, `Yes. For a ${name} celebration, the groom can remain distinctive while parents, close family and the wider baraat use complementary colour groups. Share outfit references before fabric is finalised.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Mahabaleshwar area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Mahabaleshwar", intro: "A dependable safa tying appointment for the whole wedding party, timed to your ceremony and photography schedule.", detail: "We confirm the drape and colour direction ahead of the event, then bring enough artists to keep every batch moving without delay.", faqs: [["How many safas can your team tie?", "Team size is matched to your headcount and available preparation window. Share both figures for an accurate plan."], ["Do you come to the hotel or venue?", "Yes. Our artists provide on-location service at hotels, resorts, homes and wedding venues."], ["Can colours match the wedding theme?", "Yes. Send outfit or décor references before the event so we can recommend suitable coordinated shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Mahabaleshwar", intro: "Camera-ready pagdi styling built specifically for the groom, separate from the faster family and guest sessions.", detail: "We shape the fold around the outfit and jewellery first, then finish with accessories that stay balanced rather than heavy.", faqs: [["What's the right time to style the groom's pagdi?", "We usually finish it right after the sherwani is on and before portraits begin — we'll confirm the exact slot with your photographer."], ["Can you help pick the pagdi colour?", "Yes, we look at the sherwani, stole and jewellery together with the wedding palette before recommending a shade."], ["Does the groom get his own separate session?", "Always. The groom is styled on his own timeline, apart from the quicker family and baraati rounds."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Mahabaleshwar", intro: "Fast, consistent safa tying for friends and relatives who need to look coordinated without delaying the procession.", detail: "We divide guests into manageable batches and use an agreed style so the final group feels unified in photographs.", faqs: [["What's your capacity for a big baraat?", "We scale the artist team to match your group size and the time you have available."], ["Should extra safas be kept as backup?", "It's a good idea — a small buffer handles late guests or fit changes smoothly."], ["Can close family stand out with a different colour?", "Yes, a complementary shade for parents and siblings works well against a uniform wider group."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Mahabaleshwar", intro: "A travelling safa team built for resort weddings, multi-day functions and destinations away from the city.", detail: "Fabric and accessories are consolidated before departure, and we plan a room-wise schedule with the hotel or planner.", faqs: [["Will you travel to resorts beyond Mahabaleshwar itself?", "Yes — just share the property details and schedule so we can plan travel and access in advance."], ["Can the same team cover more than one function?", "We can quote a multi-event assignment once we know the dates, styles and any accommodation needs."], ["How far ahead should destination bookings be made?", "A few weeks ahead is ideal for peak dates, so the team is reserved in time."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Mahabaleshwar", intro: "Pagdi styling for the wider family that stays coordinated, with the groom kept as the clear focal point.", detail: "A consistent fold is used for relatives, and the groom's more detailed treatment is planned as its own session.", faqs: [["Is a more comfortable fit available for older guests?", "Definitely — mention any comfort needs and the artist will adjust accordingly."], ["Can both families be styled in different palettes?", "Yes, complementary-but-distinct colours help tell the two sides apart."], ["Do kids get styled too?", "Yes, share their rough ages and count ahead of time so we can plan for them."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Mahabaleshwar", intro: "A colour-first approach to safa planning, matched against outfits, décor and floral choices already made.", detail: "Reference images guide the palette, and we suggest combinations that hold up across daylight, indoor light and photos.", faqs: [["Is it possible to match our outfit colour precisely?", "We get as close as possible, though fabric tone can shift slightly from what's seen on screen."], ["Which shades work best for outdoor wedding photography?", "Ivory, rust, maroon, saffron, muted pink and richer jewel tones tend to stay defined in daylight."], ["Should the groom's colour contrast with the group?", "Often yes — a deliberate contrast is a reliable way to make him stand out."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long does wedding safa tying take in Mahabaleshwar?", "Timing depends on the fold and group size. Once we know the guest quantity and ready-by time, we recommend the artist count and a practical batch schedule."],
    ["Are the safas supplied with the tying service?", "The fabric and styling requirement are confirmed together. Share whether you need a complete safa package or tying support for fabric already selected by the family."],
  ],
  "groom-pagdi": [
    ["Can a kalgi or brooch be added to the groom pagdi?", "Yes — we position kalgi, brooch, feather or pearl detailing after checking it against the sherwani and jewellery for balance."],
    ["Is a pre-wedding pagdi trial possible?", "For a very specific style, or if the groom wants to compare looks, we can arrange a trial or detailed consultation beforehand."],
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
  "wedding safa wala in Mahabaleshwar",
  "safa tying service Mahabaleshwar",
  "groom pagdi Mahabaleshwar",
  "turban tying service price in Mahabaleshwar",
  "turban tying for groom in Mahabaleshwar",
  "pagdi tying vendor in Mahabaleshwar",
  "premium pagri tying service in Mahabaleshwar",
  "safa tying for wedding in Mahabaleshwar",
  "turban tying for barati in Mahabaleshwar",
  "pagdi tying service in Mahabaleshwar",
  "safa tying team in Mahabaleshwar",
  "royal wedding turban service in Mahabaleshwar",
  "wedding pagdi tying specialist",
  "baraat pagdi tying service provider",
  "groom pagri tying for baraat",
  "groom pagdi kalgi service",
  "dulha safa tying for guests",
  "turban styling artist",
  "pagri accessory fitting",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
