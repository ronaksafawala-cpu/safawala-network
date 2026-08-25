export type LocationItem = {
  slug: string;
  name: string;
  group: "Pune area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Koregaon Park", "Kalyani Nagar", "Viman Nagar", "Kharadi", "Hadapsar", "Magarpatta", "Wakad", "Baner", "Balewadi", "Hinjawadi", "Aundh", "Bavdhan", "Kothrud", "Shivajinagar", "Deccan", "Camp", "Kondhwa", "NIBM", "Wanowrie", "Swargate", "Pimpri", "Chinchwad", "Akurdi", "Nigdi", "Pashan", "Sus", "Wagholi", "Lohegaon"
];

const nearbyNames: string[] = [
  "Mumbai", "Lonavala", "Khandala", "Khopoli", "Panvel", "Alibaug", "Karjat", "Matheran", "Talegaon Dabhade", "Chakan", "Shirwal", "Saswad", "Baramati", "Daund", "Ranjangaon", "Junnar", "Narayangaon", "Satara", "Mahabaleshwar", "Wai", "Ahmednagar"
];

const localNotes: Record<string, [string, string]> = {
  "Koregaon Park": ["Koregaon Park is popular with intimate and destination wedding groups looking for a distinctly Pune setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Kalyani Nagar": ["Kalyani Nagar celebrations often combine local family ceremonies with guests arriving from outside Pune.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Viman Nagar": ["Families near Viman Nagar usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Kharadi": ["Kharadi is a practical base for wedding ceremonies on both sides of the Pune service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Hadapsar": ["Hadapsar functions often bring family groups arriving from several parts of Pune.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Magarpatta": ["Magarpatta is a practical base for wedding ceremonies on both sides of the Pune service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Wakad": ["Wakad-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Baner": ["Families near Baner usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Balewadi": ["Balewadi is a practical base for wedding ceremonies on both sides of the Pune service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Hinjawadi": ["For wedding groups near Hinjawadi, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Aundh": ["Families near Aundh usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Bavdhan": ["Bavdhan weddings often bring together resort guests, destination groups and families staying close to the Pune hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Kothrud": ["Kothrud is popular with intimate and destination wedding groups looking for a distinctly Pune setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Shivajinagar": ["Shivajinagar celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Deccan": ["Deccan is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Camp": ["Camp suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Kondhwa": ["Kondhwa suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "NIBM": ["For wedding groups near NIBM, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Wanowrie": ["Wanowrie is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Swargate": ["Swargate weddings often bring together resort guests, destination groups and families staying close to the Pune hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Pimpri": ["Pimpri celebrations often combine local family ceremonies with guests arriving from outside Pune.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Chinchwad": ["Chinchwad suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Akurdi": ["Akurdi suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Nigdi": ["Nigdi wedding schedules can include home rituals followed by a venue entry elsewhere in Pune.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Pashan": ["Pashan-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Sus": ["Sus is a practical base for wedding ceremonies on both sides of the Pune service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Wagholi": ["Wagholi is a practical base for wedding ceremonies on both sides of the Pune service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Lohegaon": ["Lohegaon wedding schedules can include home rituals followed by a venue entry elsewhere in Pune.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Mumbai": ["Mumbai weddings often balance traditional ceremonies with guests travelling between hotels and venues near Pune.", "We confirm the exact Mumbai location, travel window and tying order before accepting the event schedule."],
  "Lonavala": ["Lonavala functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Khandala": ["Khandala weddings often balance traditional ceremonies with guests travelling between hotels and venues near Pune.", "We confirm the exact Khandala location, travel window and tying order before accepting the event schedule."],
  "Khopoli": ["Khopoli is handled as a planned destination assignment from Pune rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Panvel": ["Panvel weddings can be covered with advance scheduling from Pune for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Alibaug": ["Alibaug destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Pune, and a covered styling area is recommended."],
  "Karjat": ["Karjat celebrations are a natural extension of our Pune service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Matheran": ["Matheran functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Talegaon Dabhade": ["Talegaon Dabhade offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Pune team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Chakan": ["Chakan celebrations are a natural extension of our Pune service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Shirwal": ["Shirwal celebrations are a natural extension of our Pune service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Saswad": ["Saswad weddings often balance traditional ceremonies with guests travelling between hotels and venues near Pune.", "We confirm the exact Saswad location, travel window and tying order before accepting the event schedule."],
  "Baramati": ["Baramati weddings can be covered with advance scheduling from Pune for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Daund": ["Daund is handled as a planned destination assignment from Pune rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Ranjangaon": ["Ranjangaon weddings often balance traditional ceremonies with guests travelling between hotels and venues near Pune.", "We confirm the exact Ranjangaon location, travel window and tying order before accepting the event schedule."],
  "Junnar": ["Junnar bookings are planned as an outstation service from Pune with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Narayangaon": ["Narayangaon weddings can be covered with advance scheduling from Pune for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Satara": ["Satara destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Pune, and a covered styling area is recommended."],
  "Mahabaleshwar": ["Mahabaleshwar weddings can be covered with advance scheduling from Pune for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Wai": ["Wai weddings can be covered with advance scheduling from Pune for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Ahmednagar": ["Ahmednagar destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Pune, and a covered styling area is recommended."],
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
  const group = internalNames.includes(name) ? "Pune area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Is a professional wedding safa wala available in ${name}?`, `Yes \u2014 ${summary} Bookings in ${name} are handled as a ${group === "Pune area" ? "local on-location service" : "pre-planned travelling assignment"}, depending on your date and artist availability.`],
      [`What details do you need for a wedding venue in ${name}?`, `${planning} Share the exact venue pin, the preparation room, and the groom\u2019s ready-by time \u2014 not just the venue name.`],
      [`What groom pagdi style works best for a ${name} wedding?`, `${finish} pairs well with ${palette} tones, though we finalise the actual style around the sherwani, jewellery and the setting itself.`],
      [`How many artists should we plan for a baraat in ${name}?`, `That depends on the number of baraati safas and how much time there is between guest arrival and the procession. In ${name} we always keep the groom\u2019s session separate from the faster family and baraati batches.`],
      [`Can family and baraat safas be in different colours from the groom's?`, `Yes \u2014 for a ${name} wedding, the groom can keep a distinct look while parents, close family and the baraat wear complementary colour groups. Just confirm outfit references before we finalise fabric.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Pune area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Pune", intro: "Professional, on-location safa tying that keeps the groom, family and baraat ready in step with the day's schedule.", detail: "The finishing style and fabric are locked in beforehand, and artist numbers are planned around your final guest count.", faqs: [["How many safas can your team tie?", "Team size is matched to your headcount and available preparation window. Share both figures for an accurate plan."], ["Do you come to the hotel or venue?", "Yes. Our artists provide on-location service at hotels, resorts, homes and wedding venues."], ["Can colours match the wedding theme?", "Yes. Send outfit or décor references before the event so we can recommend suitable coordinated shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Pune", intro: "Camera-ready pagdi styling built specifically for the groom, separate from the faster family and guest sessions.", detail: "We shape the fold around the outfit and jewellery first, then finish with accessories that stay balanced rather than heavy.", faqs: [["What's the right time to style the groom's pagdi?", "We usually finish it right after the sherwani is on and before portraits begin — we'll confirm the exact slot with your photographer."], ["Can you help pick the pagdi colour?", "Yes, we look at the sherwani, stole and jewellery together with the wedding palette before recommending a shade."], ["Does the groom get his own separate session?", "Always. The groom is styled on his own timeline, apart from the quicker family and baraati rounds."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Pune", intro: "Coordinated baraati safa tying that keeps a large guest list moving without holding up the departure.", detail: "One agreed style is used across the group, with batches sized to the time available before the baraat leaves.", faqs: [["Is there a group size you can't handle for baraati safas?", "Not really — we bring on more artists as the group grows and time allows."], ["Is it worth ordering a few spare safas?", "Yes, a small buffer covers late arrivals or last-minute fit issues."], ["Can the close family's safas be a different shade?", "Yes, parents and siblings can wear a complementary colour while everyone else stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Pune", intro: "A dedicated travelling team for destination celebrations, from single resort weddings to multi-day schedules.", detail: "Every fabric and accessory is packed and confirmed in advance, with a room-by-room plan agreed with the property.", faqs: [["Will you travel to resorts beyond Pune itself?", "Yes — just share the property details and schedule so we can plan travel and access in advance."], ["Can the same team cover more than one function?", "We can quote a multi-event assignment once we know the dates, styles and any accommodation needs."], ["How far ahead should destination bookings be made?", "A few weeks ahead is ideal for peak dates, so the team is reserved in time."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Pune", intro: "Pagdi styling for the wider family that stays coordinated, with the groom kept as the clear focal point.", detail: "A consistent fold is used for relatives, and the groom's more detailed treatment is planned as its own session.", faqs: [["Can the fit be gentler for elderly family members?", "Yes, just flag any comfort concerns to the artist and we'll adjust the tension and finish."], ["Can each side of the family wear a different colour?", "Yes — two complementary palettes work well and help distinguish each family group."], ["Are children included in the styling?", "Yes, just let us know approximate ages and how many in advance."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Pune", intro: "Custom colour planning for the groom and wedding party, built around your outfits and decor rather than a fixed catalogue.", detail: "We review your references first, then propose shades that stay elegant across different lighting and camera conditions.", faqs: [["Can you get an exact colour match to our outfits?", "We aim for a close coordinated match, though fabric can look slightly different from a screen reference."], ["What colours hold up best in outdoor photos?", "Ivory, rust, maroon, saffron, muted pink and deep jewel tones tend to photograph well outdoors."], ["Should the groom wear a contrasting colour?", "A controlled contrast often works best to keep him visually distinct from the group."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long does wedding safa tying take in Pune?", "Timing depends on the fold and group size. Once we know the guest quantity and ready-by time, we recommend the artist count and a practical batch schedule."],
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
    ["When's the right time to lock in safa colours?", "Once the main outfits are chosen — early enough that we can check the fabric in both daylight and indoor light."],
    ["Can guests wear more than one coordinated colour?", "Yes, two or three controlled shades can group families while keeping the whole baraat looking cohesive."],
  ],
};

export function getServiceFaqs(service: (typeof services)[number]) {
  return [...service.faqs, ...(serviceFaqAdditions[service.slug] ?? [])] as [string, string][];
}

export const primaryKeywords = [
  "wedding safa wala in Pune",
  "safa tying service Pune",
  "groom pagdi Pune",
  "wedding turban tying near me in Pune",
  "safa bandhne ki service in Pune",
  "pagdi tying service in Pune",
  "doorstep turban tying in Pune",
  "safa tying for wedding in Pune",
  "pagdi bandhne wale in Pune",
  "hire pagri tying service in Pune",
  "safa tying expert in Pune",
  "dulha safa tying in Pune",
  "wedding pagdi tying professional",
  "pagri tying group",
  "pagdi kalgi fitting service",
  "wedding safa tying price",
  "pagdi baandhne booking",
  "dulha turban tying for wedding",
  "dulha turban tying artist booking",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
