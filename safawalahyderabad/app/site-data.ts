export type LocationItem = {
  slug: string;
  name: string;
  group: "Hyderabad area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Banjara Hills", "Jubilee Hills", "Gachibowli", "Hitech City", "Madhapur", "Kondapur", "Kukatpally", "Miyapur", "Manikonda", "Nanakramguda", "Financial District", "Begumpet", "Somajiguda", "Secunderabad", "Ameerpet", "SR Nagar", "Mehdipatnam", "Tolichowki", "Dilsukhnagar", "LB Nagar", "Uppal", "Kompally", "Shamshabad", "Rajendranagar", "Narsingi", "Kokapet"
];

const nearbyNames: string[] = [
  "Secunderabad", "Medchal", "Sangareddy", "Vikarabad", "Tandur", "Zaheerabad", "Bidar", "Kalaburagi", "Mahbubnagar", "Wanaparthy", "Nalgonda", "Bhongir", "Suryapet", "Warangal", "Hanamkonda", "Nagarjunasagar", "Medak", "Kamareddy", "Siddipet", "Mahabubabad", "Kurnool"
];

const localNotes: Record<string, [string, string]> = {
  "Banjara Hills": ["Banjara Hills is popular with intimate and destination wedding groups looking for a distinctly Hyderabad setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Jubilee Hills": ["Jubilee Hills celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Gachibowli": ["Gachibowli functions often bring family groups arriving from several parts of Hyderabad.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Hitech City": ["Hitech City-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Madhapur": ["Madhapur is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Kondapur": ["Kondapur-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Kukatpally": ["Kukatpally is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Miyapur": ["Miyapur suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Manikonda": ["Manikonda celebrations often combine local family ceremonies with guests arriving from outside Hyderabad.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Nanakramguda": ["For wedding groups near Nanakramguda, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Financial District": ["Financial District weddings often bring together resort guests, destination groups and families staying close to the Hyderabad hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Begumpet": ["Begumpet functions often bring family groups arriving from several parts of Hyderabad.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Somajiguda": ["Somajiguda suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Secunderabad": ["Secunderabad wedding schedules can include home rituals followed by a venue entry elsewhere in Hyderabad.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Ameerpet": ["Ameerpet weddings often bring together resort guests, destination groups and families staying close to the Hyderabad hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "SR Nagar": ["SR Nagar celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Mehdipatnam": ["For wedding groups near Mehdipatnam, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Tolichowki": ["Tolichowki-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Dilsukhnagar": ["Dilsukhnagar is popular with intimate and destination wedding groups looking for a distinctly Hyderabad setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "LB Nagar": ["LB Nagar celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Uppal": ["Uppal is a practical base for wedding ceremonies on both sides of the Hyderabad service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Kompally": ["Kompally celebrations often combine local family ceremonies with guests arriving from outside Hyderabad.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Shamshabad": ["Shamshabad weddings often bring together resort guests, destination groups and families staying close to the Hyderabad hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Rajendranagar": ["Rajendranagar functions often bring family groups arriving from several parts of Hyderabad.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Narsingi": ["Narsingi weddings often bring together resort guests, destination groups and families staying close to the Hyderabad hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Kokapet": ["Kokapet is popular with intimate and destination wedding groups looking for a distinctly Hyderabad setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Medchal": ["Medchal offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Hyderabad team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Sangareddy": ["Sangareddy functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Vikarabad": ["Vikarabad offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Hyderabad team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Tandur": ["Tandur bookings are planned as an outstation service from Hyderabad with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Zaheerabad": ["Zaheerabad weddings can be covered with advance scheduling from Hyderabad for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Bidar": ["Bidar offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Hyderabad team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Kalaburagi": ["Kalaburagi offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Hyderabad team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Mahbubnagar": ["Mahbubnagar weddings can be covered with advance scheduling from Hyderabad for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Wanaparthy": ["Wanaparthy weddings often balance traditional ceremonies with guests travelling between hotels and venues near Hyderabad.", "We confirm the exact Wanaparthy location, travel window and tying order before accepting the event schedule."],
  "Nalgonda": ["Nalgonda destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Hyderabad, and a covered styling area is recommended."],
  "Bhongir": ["Bhongir weddings can be covered with advance scheduling from Hyderabad for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Suryapet": ["Suryapet offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Hyderabad team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Warangal": ["Warangal weddings often balance traditional ceremonies with guests travelling between hotels and venues near Hyderabad.", "We confirm the exact Warangal location, travel window and tying order before accepting the event schedule."],
  "Hanamkonda": ["Hanamkonda offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Hyderabad team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Nagarjunasagar": ["Nagarjunasagar functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Medak": ["Medak celebrations are a natural extension of our Hyderabad service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Kamareddy": ["Kamareddy is handled as a planned destination assignment from Hyderabad rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Siddipet": ["Siddipet functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Mahabubabad": ["Mahabubabad weddings can be covered with advance scheduling from Hyderabad for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Kurnool": ["Kurnool celebrations are a natural extension of our Hyderabad service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
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
  const group = internalNames.includes(name) ? "Hyderabad area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Can I book a professional wedding safa wala in ${name}?`, `Yes. ${summary} We accept ${name} bookings as a ${group === "Hyderabad area" ? "local on-location service" : "pre-planned travelling assignment"}, subject to the wedding date and artist availability.`],
      [`What should we confirm for a ${name} wedding venue?`, `${planning} Please send the exact venue pin, preparation-room details and the groom\u2019s ready-by time rather than only the venue name.`],
      [`Which groom pagdi style suits a wedding in ${name}?`, `${finish} works particularly well with ${palette} palettes, although the final groom pagdi is selected from the sherwani, face profile, jewellery and ceremony setting.`],
      [`How many safa artists are needed for a ${name} baraat?`, `The team size depends on the final number of baraati safas and the time between guest arrival and procession departure. For ${name}, we separate the groom\u2019s detailed session from faster family and baraati batches.`],
      [`Can you provide family pagdis and baraati safas in different colours?`, `Yes. For a ${name} celebration, the groom can remain distinctive while parents, close family and the wider baraat use complementary colour groups. Share outfit references before fabric is finalised.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Hyderabad area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Hyderabad", intro: "An on-site safa tying service built around your actual guest count and departure schedule, not a fixed slot.", detail: "Fabric, fold and finishing are agreed in advance, and the artist team is sized to match the groom, family and baraati batches.", faqs: [["Is there a limit on how many people you can style?", "No fixed limit — artist numbers scale with your headcount, so share the final count and available time."], ["Do your artists visit the wedding location?", "Always. This is a fully on-location service across hotels, resorts, homes and venues."], ["Can you coordinate the safa colour with our theme?", "Yes — send us outfit or décor references beforehand and we'll suggest matching shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Hyderabad", intro: "A more considered, camera-ready pagdi service shaped around the groom's outfit, face profile and wedding aesthetic.", detail: "The groom receives dedicated styling time, with optional kalgi, brooch and fabric detailing kept balanced rather than overdone.", faqs: [["What's the right time to style the groom's pagdi?", "We usually finish it right after the sherwani is on and before portraits begin — we'll confirm the exact slot with your photographer."], ["Can you help pick the pagdi colour?", "Yes, we look at the sherwani, stole and jewellery together with the wedding palette before recommending a shade."], ["Does the groom get his own separate session?", "Always. The groom is styled on his own timeline, apart from the quicker family and baraati rounds."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Hyderabad", intro: "Efficient safa tying for friends, relatives and the wider wedding party, timed to the procession schedule.", detail: "Batches are organised by arrival time, and every safa follows the same fold for a consistent group look.", faqs: [["Can you handle a large baraati group?", "Yes. We add artists according to the group size and time available."], ["Should we order extra safas?", "A small quantity buffer is sensible for late additions or fit changes."], ["Can close family wear a different colour?", "Yes. Parents and siblings can use a complementary shade while the wider group stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Hyderabad", intro: "A dedicated travelling team for destination celebrations, from single resort weddings to multi-day schedules.", detail: "Every fabric and accessory is packed and confirmed in advance, with a room-by-room plan agreed with the property.", faqs: [["Do you cover resorts located away from Hyderabad?", "Yes, we just need the property and event schedule to plan the travel and access side."], ["Is a multi-day, multi-function booking possible with one team?", "Yes — share the dates, styles and accommodation needs and we'll quote it as one assignment."], ["What's the recommended lead time for booking?", "For busy wedding dates, book several weeks in advance to secure the team."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Hyderabad", intro: "Coordinated pagdi styling for fathers, brothers and close relatives, while the groom's look stays clearly distinct.", detail: "We use two linked levels — a signature fold for the groom and a simpler repeatable one for the rest of the family.", faqs: [["Is a more comfortable fit available for older guests?", "Definitely — mention any comfort needs and the artist will adjust accordingly."], ["Can both families be styled in different palettes?", "Yes, complementary-but-distinct colours help tell the two sides apart."], ["Do kids get styled too?", "Yes, share their rough ages and count ahead of time so we can plan for them."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Hyderabad", intro: "A tailored colour direction for every safa, aligned with the sherwani, florals and venue decor.", detail: "Starting from your visual references, we recommend a palette that photographs consistently indoors and out.", faqs: [["Can you match an exact outfit colour?", "We can work toward a close coordinated match; physical fabric may vary slightly from screen colours."], ["Which colours photograph well outdoors?", "Ivory, rust, maroon, saffron, muted pink and deeper jewel tones generally retain definition in outdoor light."], ["Can the groom use a contrast colour?", "Yes. A controlled contrast is often the best way to keep the groom visually distinct."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long should we budget for safa tying on the day in Hyderabad?", "It varies by fold and group size; tell us your headcount and ready-by time and we'll recommend the artist count and schedule."],
    ["Do you bring the safa fabric or just handle the tying?", "Both options work — tell us if you want the full safa supplied or tying done on fabric your family has already chosen."],
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
  "wedding safa wala in Hyderabad",
  "safa tying service Hyderabad",
  "groom pagdi Hyderabad",
  "safa tying appointment in Hyderabad",
  "dulha turban tying in Hyderabad",
  "safa tying artist in Hyderabad",
  "pagri tying cost in Hyderabad",
  "experienced pagdi tying artist in Hyderabad",
  "pagdi tying agency in Hyderabad",
  "safa tying artist booking in Hyderabad",
  "wedding turban tying near me in Hyderabad",
  "professional pagdi tying in Hyderabad",
  "groom pagri tying onsite",
  "wedding safa rental and tying",
  "dulha turban tying for barati",
  "professional pagdi tying technique",
  "groom pagdi tying price",
  "groom pagdi tying for baraat",
  "safa tying tutorial",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
