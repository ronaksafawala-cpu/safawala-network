export type LocationItem = {
  slug: string;
  name: string;
  group: "Mumbai area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Andheri", "Bandra", "Borivali", "Juhu", "Powai", "Goregaon", "Malad", "Kandivali", "Vile Parle", "Santacruz", "Kurla", "Ghatkopar", "Mulund", "Bhandup", "Chembur", "Worli", "Dadar", "Lower Parel", "Colaba", "Fort", "Churchgate", "Marine Lines", "Navi Mumbai", "Thane", "Mira Road", "Bhayandar", "Vasai", "Virar", "Sion", "Wadala"
];

const nearbyNames: string[] = [
  "Thane", "Navi Mumbai", "Kalyan", "Dombivli", "Mira Road", "Bhayandar", "Vasai", "Virar", "Panvel", "Karjat", "Khopoli", "Lonavala", "Alibaug", "Matheran", "Badlapur", "Ulhasnagar", "Bhiwandi", "Palghar", "Boisar", "Dahanu", "Nashik"
];

const localNotes: Record<string, [string, string]> = {
  "Andheri": ["Andheri suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Bandra": ["Bandra-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Borivali": ["Borivali weddings often bring together resort guests, destination groups and families staying close to the Mumbai hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Juhu": ["Juhu wedding schedules can include home rituals followed by a venue entry elsewhere in Mumbai.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Powai": ["Powai is popular with intimate and destination wedding groups looking for a distinctly Mumbai setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Goregaon": ["Goregaon is popular with intimate and destination wedding groups looking for a distinctly Mumbai setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Malad": ["Malad weddings often bring together resort guests, destination groups and families staying close to the Mumbai hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Kandivali": ["Kandivali is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Vile Parle": ["Vile Parle functions often bring family groups arriving from several parts of Mumbai.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Santacruz": ["Santacruz wedding schedules can include home rituals followed by a venue entry elsewhere in Mumbai.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Kurla": ["Families near Kurla usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Ghatkopar": ["Ghatkopar celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Mulund": ["For wedding groups near Mulund, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Bhandup": ["Bhandup weddings often bring together resort guests, destination groups and families staying close to the Mumbai hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Chembur": ["Chembur weddings often bring together resort guests, destination groups and families staying close to the Mumbai hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Worli": ["For wedding groups near Worli, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Dadar": ["Dadar weddings often bring together resort guests, destination groups and families staying close to the Mumbai hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Lower Parel": ["Lower Parel weddings often bring together resort guests, destination groups and families staying close to the Mumbai hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Colaba": ["Colaba weddings often bring together resort guests, destination groups and families staying close to the Mumbai hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Fort": ["Families near Fort usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Churchgate": ["Families near Churchgate usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Marine Lines": ["Marine Lines-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Navi Mumbai": ["Navi Mumbai weddings often bring together resort guests, destination groups and families staying close to the Mumbai hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Thane": ["For wedding groups near Thane, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Mira Road": ["Mira Road is popular with intimate and destination wedding groups looking for a distinctly Mumbai setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Bhayandar": ["Families near Bhayandar usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Vasai": ["For wedding groups near Vasai, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Virar": ["Virar is popular with intimate and destination wedding groups looking for a distinctly Mumbai setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Sion": ["Sion functions often bring family groups arriving from several parts of Mumbai.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Wadala": ["Families near Wadala usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Kalyan": ["Kalyan functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Dombivli": ["Dombivli offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Mumbai team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Panvel": ["Panvel weddings often balance traditional ceremonies with guests travelling between hotels and venues near Mumbai.", "We confirm the exact Panvel location, travel window and tying order before accepting the event schedule."],
  "Karjat": ["Karjat weddings often balance traditional ceremonies with guests travelling between hotels and venues near Mumbai.", "We confirm the exact Karjat location, travel window and tying order before accepting the event schedule."],
  "Khopoli": ["Khopoli destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Mumbai, and a covered styling area is recommended."],
  "Lonavala": ["Lonavala celebrations are a natural extension of our Mumbai service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Alibaug": ["Alibaug is handled as a planned destination assignment from Mumbai rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Matheran": ["Matheran celebrations are a natural extension of our Mumbai service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Badlapur": ["Badlapur weddings often balance traditional ceremonies with guests travelling between hotels and venues near Mumbai.", "We confirm the exact Badlapur location, travel window and tying order before accepting the event schedule."],
  "Ulhasnagar": ["Ulhasnagar weddings can be covered with advance scheduling from Mumbai for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Bhiwandi": ["Bhiwandi is handled as a planned destination assignment from Mumbai rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Palghar": ["Palghar weddings can be covered with advance scheduling from Mumbai for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Boisar": ["Boisar offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Mumbai team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Dahanu": ["Dahanu destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Mumbai, and a covered styling area is recommended."],
  "Nashik": ["Nashik destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Mumbai, and a covered styling area is recommended."],
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
  const group = internalNames.includes(name) ? "Mumbai area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Do you cover wedding safa bookings in ${name}?`, `We do \u2014 ${summary} It's treated as a ${group === "Mumbai area" ? "local on-location service" : "pre-planned travelling assignment"} for ${name}, based on date and artist availability.`],
      [`What should be confirmed before a ${name} venue booking?`, `${planning} We'll need the precise venue pin, preparation-room details, and the groom\u2019s ready-by time, not just a venue name.`],
      [`Which pagdi style is recommended for weddings in ${name}?`, `${finish} tends to suit ${palette} colour choices well, though we always confirm the final pick against the sherwani, face and ceremony setting.`],
      [`How is artist count decided for a ${name} baraat?`, `It comes down to the total baraati safa count and the gap between arrival and procession. For every ${name} booking, the groom is styled separately from the quicker family and baraat rounds.`],
      [`Is it possible to use different colours for family and baraat safas?`, `Yes \u2014 in ${name}, the groom can stay visually distinct while parents, family and the wider baraat share complementary colours. Outfit references should be shared before fabric is confirmed.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Mumbai area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Mumbai", intro: "Professional, on-location safa tying that keeps the groom, family and baraat ready in step with the day's schedule.", detail: "The finishing style and fabric are locked in beforehand, and artist numbers are planned around your final guest count.", faqs: [["Is there a limit on how many people you can style?", "No fixed limit — artist numbers scale with your headcount, so share the final count and available time."], ["Do your artists visit the wedding location?", "Always. This is a fully on-location service across hotels, resorts, homes and venues."], ["Can you coordinate the safa colour with our theme?", "Yes — send us outfit or décor references beforehand and we'll suggest matching shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Mumbai", intro: "A considered pagdi session that treats the groom as the visual centre of the day, not a rushed final step.", detail: "Kalgi, brooch and stole details are positioned after the sherwani is complete, keeping the finished look proportionate.", faqs: [["What's the right time to style the groom's pagdi?", "We usually finish it right after the sherwani is on and before portraits begin — we'll confirm the exact slot with your photographer."], ["Can you help pick the pagdi colour?", "Yes, we look at the sherwani, stole and jewellery together with the wedding palette before recommending a shade."], ["Does the groom get his own separate session?", "Always. The groom is styled on his own timeline, apart from the quicker family and baraati rounds."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Mumbai", intro: "Efficient safa tying for friends, relatives and the wider wedding party, timed to the procession schedule.", detail: "Batches are organised by arrival time, and every safa follows the same fold for a consistent group look.", faqs: [["Is there a group size you can't handle for baraati safas?", "Not really — we bring on more artists as the group grows and time allows."], ["Is it worth ordering a few spare safas?", "Yes, a small buffer covers late arrivals or last-minute fit issues."], ["Can the close family's safas be a different shade?", "Yes, parents and siblings can wear a complementary colour while everyone else stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Mumbai", intro: "Destination-ready safa styling for resorts and multi-function weddings that span more than one day.", detail: "We work directly with the venue or planner to confirm access, then build a tying sequence across rooms and functions.", faqs: [["Do you cover resorts located away from Mumbai?", "Yes, we just need the property and event schedule to plan the travel and access side."], ["Is a multi-day, multi-function booking possible with one team?", "Yes — share the dates, styles and accommodation needs and we'll quote it as one assignment."], ["What's the recommended lead time for booking?", "For busy wedding dates, book several weeks in advance to secure the team."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Mumbai", intro: "Pagdi styling for the wider family that stays coordinated, with the groom kept as the clear focal point.", detail: "A consistent fold is used for relatives, and the groom's more detailed treatment is planned as its own session.", faqs: [["Is a more comfortable fit available for older guests?", "Definitely — mention any comfort needs and the artist will adjust accordingly."], ["Can both families be styled in different palettes?", "Yes, complementary-but-distinct colours help tell the two sides apart."], ["Do kids get styled too?", "Yes, share their rough ages and count ahead of time so we can plan for them."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Mumbai", intro: "A tailored colour direction for every safa, aligned with the sherwani, florals and venue decor.", detail: "Starting from your visual references, we recommend a palette that photographs consistently indoors and out.", faqs: [["Can you match an exact outfit colour?", "We can work toward a close coordinated match; physical fabric may vary slightly from screen colours."], ["Which colours photograph well outdoors?", "Ivory, rust, maroon, saffron, muted pink and deeper jewel tones generally retain definition in outdoor light."], ["Can the groom use a contrast colour?", "Yes. A controlled contrast is often the best way to keep the groom visually distinct."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long should we budget for safa tying on the day in Mumbai?", "It varies by fold and group size; tell us your headcount and ready-by time and we'll recommend the artist count and schedule."],
    ["Do you bring the safa fabric or just handle the tying?", "Both options work — tell us if you want the full safa supplied or tying done on fabric your family has already chosen."],
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
  "wedding safa wala in Mumbai",
  "safa tying service Mumbai",
  "groom pagdi Mumbai",
  "best pagdi tying service in Mumbai",
  "safa tying artist booking in Mumbai",
  "expert turban tying artist in Mumbai",
  "wedding safa specialist in Mumbai",
  "wedding pagdi specialist in Mumbai",
  "turban tying for baraat in Mumbai",
  "wedding pagdi tying near me in Mumbai",
  "groom pagri specialist in Mumbai",
  "turban tying specialist in Mumbai",
  "guest turban package",
  "baraat pagri tying service provider",
  "groom pagri tying at home",
  "baraat turban tying on site",
  "baraat turban tying for groom",
  "marwari safa tying",
  "dulha pagri tying on site",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
