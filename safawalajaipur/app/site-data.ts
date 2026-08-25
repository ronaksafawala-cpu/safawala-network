export type LocationItem = {
  slug: string;
  name: string;
  group: "Jaipur area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "C-Scheme", "Malviya Nagar", "Vaishali Nagar", "Mansarovar", "Jagatpura", "Tonk Road", "Sodala", "Raja Park", "Bani Park", "Civil Lines", "Shyam Nagar", "Pratap Nagar", "Sanganer", "Durgapura", "Vidhyadhar Nagar", "Murlipura", "Jhotwara", "Mansarovar Extension", "Ajmer Road", "Amer Road", "MI Road", "Bapu Nagar", "Gopalpura", "Sitapura", "Kalwar Road"
];

const nearbyNames: string[] = [
  "Ajmer", "Pushkar", "Alwar", "Bharatpur", "Ranthambore", "Tonk", "Sambhar", "Dausa", "Sikar", "Neemrana", "Behror", "Kotputli", "Shahpura", "Chomu", "Bagru", "Dudu", "Kishangarh", "Fatehpur Shekhawati", "Mandawa", "Salasar", "Khatu Shyam Ji"
];

const localNotes: Record<string, [string, string]> = {
  "C-Scheme": ["Families near C-Scheme usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Malviya Nagar": ["Malviya Nagar-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Vaishali Nagar": ["Vaishali Nagar suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Mansarovar": ["Mansarovar wedding schedules can include home rituals followed by a venue entry elsewhere in Jaipur.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Jagatpura": ["Jagatpura celebrations often combine local family ceremonies with guests arriving from outside Jaipur.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Tonk Road": ["Tonk Road suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Sodala": ["Sodala-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Raja Park": ["Raja Park celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Bani Park": ["Bani Park celebrations often combine local family ceremonies with guests arriving from outside Jaipur.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Civil Lines": ["Civil Lines is a practical base for wedding ceremonies on both sides of the Jaipur service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Shyam Nagar": ["Shyam Nagar celebrations often combine local family ceremonies with guests arriving from outside Jaipur.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Pratap Nagar": ["Pratap Nagar celebrations often combine local family ceremonies with guests arriving from outside Jaipur.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Sanganer": ["Sanganer celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Durgapura": ["Durgapura wedding schedules can include home rituals followed by a venue entry elsewhere in Jaipur.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Vidhyadhar Nagar": ["Vidhyadhar Nagar celebrations often combine local family ceremonies with guests arriving from outside Jaipur.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Murlipura": ["Murlipura functions often bring family groups arriving from several parts of Jaipur.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Jhotwara": ["Jhotwara functions often bring family groups arriving from several parts of Jaipur.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Mansarovar Extension": ["Mansarovar Extension-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Ajmer Road": ["Ajmer Road is popular with intimate and destination wedding groups looking for a distinctly Jaipur setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Amer Road": ["Amer Road suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "MI Road": ["MI Road-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Bapu Nagar": ["Bapu Nagar wedding schedules can include home rituals followed by a venue entry elsewhere in Jaipur.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Gopalpura": ["Gopalpura wedding schedules can include home rituals followed by a venue entry elsewhere in Jaipur.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Sitapura": ["Sitapura is a practical base for wedding ceremonies on both sides of the Jaipur service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Kalwar Road": ["Kalwar Road is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Ajmer": ["Ajmer offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Jaipur team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Pushkar": ["Pushkar is handled as a planned destination assignment from Jaipur rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Alwar": ["Alwar weddings can be covered with advance scheduling from Jaipur for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Bharatpur": ["Bharatpur weddings can be covered with advance scheduling from Jaipur for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Ranthambore": ["Ranthambore celebrations are a natural extension of our Jaipur service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Tonk": ["Tonk offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Jaipur team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Sambhar": ["Sambhar weddings can be covered with advance scheduling from Jaipur for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Dausa": ["Dausa functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Sikar": ["Sikar celebrations are a natural extension of our Jaipur service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Neemrana": ["Neemrana is handled as a planned destination assignment from Jaipur rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Behror": ["Behror weddings often balance traditional ceremonies with guests travelling between hotels and venues near Jaipur.", "We confirm the exact Behror location, travel window and tying order before accepting the event schedule."],
  "Kotputli": ["Kotputli functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Shahpura": ["Shahpura weddings often balance traditional ceremonies with guests travelling between hotels and venues near Jaipur.", "We confirm the exact Shahpura location, travel window and tying order before accepting the event schedule."],
  "Chomu": ["Chomu bookings are planned as an outstation service from Jaipur with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Bagru": ["Bagru functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Dudu": ["Dudu weddings can be covered with advance scheduling from Jaipur for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Kishangarh": ["Kishangarh functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Fatehpur Shekhawati": ["Fatehpur Shekhawati bookings are planned as an outstation service from Jaipur with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Mandawa": ["Mandawa functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Salasar": ["Salasar offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Jaipur team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Khatu Shyam Ji": ["Khatu Shyam Ji weddings can be covered with advance scheduling from Jaipur for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
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
  const group = internalNames.includes(name) ? "Jaipur area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Can I book a professional wedding safa wala in ${name}?`, `Yes. ${summary} We accept ${name} bookings as a ${group === "Jaipur area" ? "local on-location service" : "pre-planned travelling assignment"}, subject to the wedding date and artist availability.`],
      [`What should we confirm for a ${name} wedding venue?`, `${planning} Please send the exact venue pin, preparation-room details and the groom\u2019s ready-by time rather than only the venue name.`],
      [`Which groom pagdi style suits a wedding in ${name}?`, `${finish} works particularly well with ${palette} palettes, although the final groom pagdi is selected from the sherwani, face profile, jewellery and ceremony setting.`],
      [`How many safa artists are needed for a ${name} baraat?`, `The team size depends on the final number of baraati safas and the time between guest arrival and procession departure. For ${name}, we separate the groom\u2019s detailed session from faster family and baraati batches.`],
      [`Can you provide family pagdis and baraati safas in different colours?`, `Yes. For a ${name} celebration, the groom can remain distinctive while parents, close family and the wider baraat use complementary colour groups. Share outfit references before fabric is finalised.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Jaipur area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Jaipur", intro: "An on-site safa tying service built around your actual guest count and departure schedule, not a fixed slot.", detail: "Fabric, fold and finishing are agreed in advance, and the artist team is sized to match the groom, family and baraati batches.", faqs: [["Is there a limit on how many people you can style?", "No fixed limit — artist numbers scale with your headcount, so share the final count and available time."], ["Do your artists visit the wedding location?", "Always. This is a fully on-location service across hotels, resorts, homes and venues."], ["Can you coordinate the safa colour with our theme?", "Yes — send us outfit or décor references beforehand and we'll suggest matching shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Jaipur", intro: "Camera-ready pagdi styling built specifically for the groom, separate from the faster family and guest sessions.", detail: "We shape the fold around the outfit and jewellery first, then finish with accessories that stay balanced rather than heavy.", faqs: [["When should the groom's pagdi be tied?", "Usually before the main portrait session and after the sherwani is complete. We align the exact time with your photographer."], ["Can you suggest a pagdi colour?", "Yes. We consider the sherwani, stole, jewellery and overall wedding palette before suggesting a shade."], ["Is the groom styled separately?", "Yes. The groom's session is planned separately from the faster family and baraati sequence."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Jaipur", intro: "A quick, repeatable safa tying process for the wider baraat, built to keep the procession on schedule.", detail: "Guests move through in organised batches, all finished to the same fold so the group reads as one in photos.", faqs: [["What's your capacity for a big baraat?", "We scale the artist team to match your group size and the time you have available."], ["Should extra safas be kept as backup?", "It's a good idea — a small buffer handles late guests or fit changes smoothly."], ["Can close family stand out with a different colour?", "Yes, a complementary shade for parents and siblings works well against a uniform wider group."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Jaipur", intro: "A dedicated travelling team for destination celebrations, from single resort weddings to multi-day schedules.", detail: "Every fabric and accessory is packed and confirmed in advance, with a room-by-room plan agreed with the property.", faqs: [["Will you travel to resorts beyond Jaipur itself?", "Yes — just share the property details and schedule so we can plan travel and access in advance."], ["Can the same team cover more than one function?", "We can quote a multi-event assignment once we know the dates, styles and any accommodation needs."], ["How far ahead should destination bookings be made?", "A few weeks ahead is ideal for peak dates, so the team is reserved in time."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Jaipur", intro: "A family-wide pagdi plan that keeps parents and relatives visually aligned without competing with the groom.", detail: "Close family receive a shared, repeatable style while the groom's session remains separately detailed.", faqs: [["Is a more comfortable fit available for older guests?", "Definitely — mention any comfort needs and the artist will adjust accordingly."], ["Can both families be styled in different palettes?", "Yes, complementary-but-distinct colours help tell the two sides apart."], ["Do kids get styled too?", "Yes, share their rough ages and count ahead of time so we can plan for them."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Jaipur", intro: "A colour-first approach to safa planning, matched against outfits, décor and floral choices already made.", detail: "Reference images guide the palette, and we suggest combinations that hold up across daylight, indoor light and photos.", faqs: [["Is it possible to match our outfit colour precisely?", "We get as close as possible, though fabric tone can shift slightly from what's seen on screen."], ["Which shades work best for outdoor wedding photography?", "Ivory, rust, maroon, saffron, muted pink and richer jewel tones tend to stay defined in daylight."], ["Should the groom's colour contrast with the group?", "Often yes — a deliberate contrast is a reliable way to make him stand out."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long should we budget for safa tying on the day in Jaipur?", "It varies by fold and group size; tell us your headcount and ready-by time and we'll recommend the artist count and schedule."],
    ["Do you bring the safa fabric or just handle the tying?", "Both options work — tell us if you want the full safa supplied or tying done on fabric your family has already chosen."],
  ],
  "groom-pagdi": [
    ["Can the groom pagdi include a kalgi or brooch?", "Yes. Kalgi, brooch, feather and pearl details can be positioned after reviewing the sherwani and jewellery so the final look remains balanced."],
    ["Can we arrange a groom pagdi trial before the wedding?", "A trial or detailed reference consultation can be discussed when the style is highly specific or the groom wants to compare more than one profile."],
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
  "wedding safa wala in Jaipur",
  "safa tying service Jaipur",
  "groom pagdi Jaipur",
  "turban tying at venue in Jaipur",
  "safa tying booking in Jaipur",
  "turban tying appointment in Jaipur",
  "safa tying service booking in Jaipur",
  "pagdi tying near me in Jaipur",
  "groom pagdi tying in Jaipur",
  "specialist turban tying artist in Jaipur",
  "safa tying company in Jaipur",
  "book pagri artist in Jaipur",
  "bulk pagdi package",
  "safa rental and tying service",
  "dulha pagdi tying package",
  "groom pagdi tying professional",
  "wedding safa tying service provider",
  "guest turban rental and tying",
  "wedding turban tying for family",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
