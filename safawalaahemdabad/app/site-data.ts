export type LocationItem = {
  slug: string;
  name: string;
  group: "Ahmedabad area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Navrangpura", "Satellite", "Vastrapur", "Bodakdev", "Prahlad Nagar", "SG Highway", "Thaltej", "Bopal", "South Bopal", "Ghatlodia", "Naranpura", "Maninagar", "Paldi", "Ellisbridge", "CG Road", "Ashram Road", "Vastral", "Nikol", "Chandkheda", "Motera", "Sabarmati", "Gota", "Shela", "Science City", "Isanpur", "Ranip", "Vejalpur", "Jodhpur"
];

const nearbyNames: string[] = [
  "Gandhinagar", "Sanand", "Bavla", "Dholka", "Mehsana", "Kalol", "Kadi", "Nadiad", "Anand", "Kheda", "Dahegam", "Viramgam"
];

const localNotes: Record<string, [string, string]> = {
  "Navrangpura": ["Navrangpura celebrations often combine local family ceremonies with guests arriving from outside Ahmedabad.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Satellite": ["Satellite is a practical base for wedding ceremonies on both sides of the Ahmedabad service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Vastrapur": ["Vastrapur functions often bring family groups arriving from several parts of Ahmedabad.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Bodakdev": ["Bodakdev is a practical base for wedding ceremonies on both sides of the Ahmedabad service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Prahlad Nagar": ["Families near Prahlad Nagar usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "SG Highway": ["SG Highway-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Thaltej": ["Thaltej suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Bopal": ["Bopal wedding schedules can include home rituals followed by a venue entry elsewhere in Ahmedabad.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "South Bopal": ["South Bopal is popular with intimate and destination wedding groups looking for a distinctly Ahmedabad setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Ghatlodia": ["Ghatlodia suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Naranpura": ["Naranpura-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Maninagar": ["Maninagar-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Paldi": ["Paldi wedding schedules can include home rituals followed by a venue entry elsewhere in Ahmedabad.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Ellisbridge": ["Ellisbridge functions often bring family groups arriving from several parts of Ahmedabad.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "CG Road": ["CG Road celebrations often combine local family ceremonies with guests arriving from outside Ahmedabad.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Ashram Road": ["Ashram Road weddings often bring together resort guests, destination groups and families staying close to the Ahmedabad hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Vastral": ["Vastral celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Nikol": ["Nikol is a practical base for wedding ceremonies on both sides of the Ahmedabad service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Chandkheda": ["Chandkheda weddings often bring together resort guests, destination groups and families staying close to the Ahmedabad hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Motera": ["Families near Motera usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Sabarmati": ["Sabarmati functions often bring family groups arriving from several parts of Ahmedabad.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Gota": ["Gota is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Shela": ["Shela is popular with intimate and destination wedding groups looking for a distinctly Ahmedabad setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Science City": ["Families near Science City usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Isanpur": ["Isanpur is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Ranip": ["Ranip suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Vejalpur": ["Vejalpur functions often bring family groups arriving from several parts of Ahmedabad.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Jodhpur": ["For wedding groups near Jodhpur, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Gandhinagar": ["Gandhinagar destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Ahmedabad, and a covered styling area is recommended."],
  "Sanand": ["Sanand destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Ahmedabad, and a covered styling area is recommended."],
  "Bavla": ["Bavla is handled as a planned destination assignment from Ahmedabad rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Dholka": ["Dholka celebrations are a natural extension of our Ahmedabad service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Mehsana": ["Mehsana functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Kalol": ["Kalol weddings can be covered with advance scheduling from Ahmedabad for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Kadi": ["Kadi bookings are planned as an outstation service from Ahmedabad with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Nadiad": ["Nadiad is handled as a planned destination assignment from Ahmedabad rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Anand": ["Anand bookings are planned as an outstation service from Ahmedabad with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Kheda": ["Kheda bookings are planned as an outstation service from Ahmedabad with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Dahegam": ["Dahegam weddings often balance traditional ceremonies with guests travelling between hotels and venues near Ahmedabad.", "We confirm the exact Dahegam location, travel window and tying order before accepting the event schedule."],
  "Viramgam": ["Viramgam is handled as a planned destination assignment from Ahmedabad rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
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
  const group = internalNames.includes(name) ? "Ahmedabad area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Do you cover wedding safa bookings in ${name}?`, `We do \u2014 ${summary} It's treated as a ${group === "Ahmedabad area" ? "local on-location service" : "pre-planned travelling assignment"} for ${name}, based on date and artist availability.`],
      [`What should be confirmed before a ${name} venue booking?`, `${planning} We'll need the precise venue pin, preparation-room details, and the groom\u2019s ready-by time, not just a venue name.`],
      [`Which pagdi style is recommended for weddings in ${name}?`, `${finish} tends to suit ${palette} colour choices well, though we always confirm the final pick against the sherwani, face and ceremony setting.`],
      [`How is artist count decided for a ${name} baraat?`, `It comes down to the total baraati safa count and the gap between arrival and procession. For every ${name} booking, the groom is styled separately from the quicker family and baraat rounds.`],
      [`Is it possible to use different colours for family and baraat safas?`, `Yes \u2014 in ${name}, the groom can stay visually distinct while parents, family and the wider baraat share complementary colours. Outfit references should be shared before fabric is confirmed.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Ahmedabad area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Ahmedabad", intro: "Wedding Safa Tying for Ahmedabad weddings, planned around your venue, guest count and ceremony schedule.", detail: "Every wedding safa tying booking in Ahmedabad confirms the groom's ready time, guest quantity, venue access and photography schedule before the team travels.", faqs: [["How many safas can your team tie?", "Team size is matched to your headcount and available preparation window. Share both figures for an accurate plan."], ["Do you come to the hotel or venue?", "Yes. Our artists provide on-location service at hotels, resorts, homes and wedding venues."], ["Can colours match the wedding theme?", "Yes. Send outfit or décor references before the event so we can recommend suitable coordinated shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Ahmedabad", intro: "Groom Pagdi Styling for Ahmedabad weddings, planned around your venue, guest count and ceremony schedule.", detail: "Every groom pagdi styling booking in Ahmedabad confirms the groom's ready time, guest quantity, venue access and photography schedule before the team travels.", faqs: [["What's the right time to style the groom's pagdi?", "We usually finish it right after the sherwani is on and before portraits begin — we'll confirm the exact slot with your photographer."], ["Can you help pick the pagdi colour?", "Yes, we look at the sherwani, stole and jewellery together with the wedding palette before recommending a shade."], ["Does the groom get his own separate session?", "Always. The groom is styled on his own timeline, apart from the quicker family and baraati rounds."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Ahmedabad", intro: "Baraati Safa Service for Ahmedabad weddings, planned around your venue, guest count and ceremony schedule.", detail: "Every baraati safa service booking in Ahmedabad confirms the groom's ready time, guest quantity, venue access and photography schedule before the team travels.", faqs: [["Can you handle a large baraati group?", "Yes. We add artists according to the group size and time available."], ["Should we order extra safas?", "A small quantity buffer is sensible for late additions or fit changes."], ["Can close family wear a different colour?", "Yes. Parents and siblings can use a complementary shade while the wider group stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Ahmedabad", intro: "Destination Wedding Safa for Ahmedabad weddings, planned around your venue, guest count and ceremony schedule.", detail: "Every destination wedding safa booking in Ahmedabad confirms the groom's ready time, guest quantity, venue access and photography schedule before the team travels.", faqs: [["Do you cover resorts located away from Ahmedabad?", "Yes, we just need the property and event schedule to plan the travel and access side."], ["Is a multi-day, multi-function booking possible with one team?", "Yes — share the dates, styles and accommodation needs and we'll quote it as one assignment."], ["What's the recommended lead time for booking?", "For busy wedding dates, book several weeks in advance to secure the team."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Ahmedabad", intro: "Family Pagdi Styling for Ahmedabad weddings, planned around your venue, guest count and ceremony schedule.", detail: "Every family pagdi styling booking in Ahmedabad confirms the groom's ready time, guest quantity, venue access and photography schedule before the team travels.", faqs: [["Is a more comfortable fit available for older guests?", "Definitely — mention any comfort needs and the artist will adjust accordingly."], ["Can both families be styled in different palettes?", "Yes, complementary-but-distinct colours help tell the two sides apart."], ["Do kids get styled too?", "Yes, share their rough ages and count ahead of time so we can plan for them."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Ahmedabad", intro: "Custom Safa Colours for Ahmedabad weddings, planned around your venue, guest count and ceremony schedule.", detail: "Every custom safa colours booking in Ahmedabad confirms the groom's ready time, guest quantity, venue access and photography schedule before the team travels.", faqs: [["Can you match an exact outfit colour?", "We can work toward a close coordinated match; physical fabric may vary slightly from screen colours."], ["Which colours photograph well outdoors?", "Ivory, rust, maroon, saffron, muted pink and deeper jewel tones generally retain definition in outdoor light."], ["Can the groom use a contrast colour?", "Yes. A controlled contrast is often the best way to keep the groom visually distinct."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long does wedding safa tying take in Ahmedabad?", "Timing depends on the fold and group size. Once we know the guest quantity and ready-by time, we recommend the artist count and a practical batch schedule."],
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
  "wedding safa wala in Ahmedabad",
  "safa tying service Ahmedabad",
  "groom pagdi Ahmedabad",
  "safa tying service in Ahmedabad",
  "pagdi tying services in Ahmedabad",
  "pagri bandhne ki service in Ahmedabad",
  "professional turban tying in Ahmedabad",
  "wedding groom safa service in Ahmedabad",
  "family turban tying in Ahmedabad",
  "destination wedding pagri tying in Ahmedabad",
  "pagri tying at wedding venue in Ahmedabad",
  "rajputi turban tying in Ahmedabad",
  "pagri tying tutorial in Ahmedabad",
  "guest pagdi package in Ahmedabad",
  "haldi safa service in Ahmedabad",
  "turban baandhne artist in Ahmedabad",
  "wedding safa styling in Ahmedabad",
  "safa rent and tie in Ahmedabad",
  "royal wedding turban service in Ahmedabad",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
