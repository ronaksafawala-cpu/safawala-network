export type LocationItem = {
  slug: string;
  name: string;
  group: "Nainital area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Mallital", "Tallital", "Ayarpata", "Mall Road", "Haldwani Road", "Bhowali Road", "Naina Devi", "Sukha Tal", "Bara Pathar", "Bhimtal Road", "Naina Range", "Snow View", "Kilbury", "Pangot", "Hanumangarhi"
];

const nearbyNames: string[] = [
  "Haldwani", "Kathgodam", "Bhimtal", "Ramnagar", "Rudrapur", "Kashipur", "Almora", "Ranikhet", "Bageshwar", "Pithoragarh", "Champawat", "Kausani", "Lohaghat", "Mukteshwar", "Bhowali", "Lalkuan", "Bazpur", "Pantnagar", "Khatima", "Tanakpur"
];

const localNotes: Record<string, [string, string]> = {
  "Mallital": ["Mallital is a practical base for wedding ceremonies on both sides of the Nainital service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Tallital": ["Tallital suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Ayarpata": ["Ayarpata celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Mall Road": ["Mall Road weddings often bring together resort guests, destination groups and families staying close to the Nainital hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Haldwani Road": ["Haldwani Road is popular with intimate and destination wedding groups looking for a distinctly Nainital setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Bhowali Road": ["Families near Bhowali Road usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Naina Devi": ["Naina Devi wedding schedules can include home rituals followed by a venue entry elsewhere in Nainital.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Sukha Tal": ["Sukha Tal is popular with intimate and destination wedding groups looking for a distinctly Nainital setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Bara Pathar": ["Bara Pathar celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Bhimtal Road": ["Bhimtal Road weddings often bring together resort guests, destination groups and families staying close to the Nainital hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Naina Range": ["Naina Range suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Snow View": ["Snow View-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Kilbury": ["For wedding groups near Kilbury, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Pangot": ["Pangot wedding schedules can include home rituals followed by a venue entry elsewhere in Nainital.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Hanumangarhi": ["For wedding groups near Hanumangarhi, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Haldwani": ["Haldwani celebrations are a natural extension of our Nainital service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Kathgodam": ["Kathgodam bookings are planned as an outstation service from Nainital with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Bhimtal": ["Bhimtal bookings are planned as an outstation service from Nainital with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Ramnagar": ["Ramnagar weddings often balance traditional ceremonies with guests travelling between hotels and venues near Nainital.", "We confirm the exact Ramnagar location, travel window and tying order before accepting the event schedule."],
  "Rudrapur": ["Rudrapur offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Nainital team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Kashipur": ["Kashipur destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Nainital, and a covered styling area is recommended."],
  "Almora": ["Almora offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Nainital team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Ranikhet": ["Ranikhet offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Nainital team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Bageshwar": ["Bageshwar celebrations are a natural extension of our Nainital service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Pithoragarh": ["Pithoragarh is handled as a planned destination assignment from Nainital rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Champawat": ["Champawat offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Nainital team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Kausani": ["Kausani celebrations are a natural extension of our Nainital service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Lohaghat": ["Lohaghat functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Mukteshwar": ["Mukteshwar weddings often balance traditional ceremonies with guests travelling between hotels and venues near Nainital.", "We confirm the exact Mukteshwar location, travel window and tying order before accepting the event schedule."],
  "Bhowali": ["Bhowali bookings are planned as an outstation service from Nainital with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Lalkuan": ["Lalkuan weddings can be covered with advance scheduling from Nainital for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Bazpur": ["Bazpur destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Nainital, and a covered styling area is recommended."],
  "Pantnagar": ["Pantnagar celebrations are a natural extension of our Nainital service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Khatima": ["Khatima offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Nainital team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Tanakpur": ["Tanakpur destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Nainital, and a covered styling area is recommended."],
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
  const group = internalNames.includes(name) ? "Nainital area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Do you cover wedding safa bookings in ${name}?`, `We do \u2014 ${summary} It's treated as a ${group === "Nainital area" ? "local on-location service" : "pre-planned travelling assignment"} for ${name}, based on date and artist availability.`],
      [`What should be confirmed before a ${name} venue booking?`, `${planning} We'll need the precise venue pin, preparation-room details, and the groom\u2019s ready-by time, not just a venue name.`],
      [`Which pagdi style is recommended for weddings in ${name}?`, `${finish} tends to suit ${palette} colour choices well, though we always confirm the final pick against the sherwani, face and ceremony setting.`],
      [`How is artist count decided for a ${name} baraat?`, `It comes down to the total baraati safa count and the gap between arrival and procession. For every ${name} booking, the groom is styled separately from the quicker family and baraat rounds.`],
      [`Is it possible to use different colours for family and baraat safas?`, `Yes \u2014 in ${name}, the groom can stay visually distinct while parents, family and the wider baraat share complementary colours. Outfit references should be shared before fabric is confirmed.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Nainital area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Nainital", intro: "A dependable safa tying appointment for the whole wedding party, timed to your ceremony and photography schedule.", detail: "We confirm the drape and colour direction ahead of the event, then bring enough artists to keep every batch moving without delay.", faqs: [["What's the maximum group size you can handle?", "We scale the artist count to your final headcount and the time window you give us — share both for an accurate plan."], ["Will your team travel to our venue?", "Yes, every booking is on-location — hotels, resorts, homes and wedding venues are all covered."], ["Can the safa colours be matched to our decor?", "Yes, share outfit or décor photos ahead of time and we'll recommend shades that coordinate well."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Nainital", intro: "A considered pagdi session that treats the groom as the visual centre of the day, not a rushed final step.", detail: "Kalgi, brooch and stole details are positioned after the sherwani is complete, keeping the finished look proportionate.", faqs: [["When during the day does the groom's pagdi get tied?", "Typically once the sherwani is on and just before portraits start — we coordinate the exact timing with your photographer."], ["Will you suggest a colour for the groom's pagdi?", "Yes, our recommendation factors in the sherwani, stole, jewellery and the day's overall palette."], ["Is the groom's styling done apart from the rest of the party?", "Yes — it's a dedicated session, separate from the quicker family and baraati styling."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Nainital", intro: "Coordinated baraati safa tying that keeps a large guest list moving without holding up the departure.", detail: "One agreed style is used across the group, with batches sized to the time available before the baraat leaves.", faqs: [["What's your capacity for a big baraat?", "We scale the artist team to match your group size and the time you have available."], ["Should extra safas be kept as backup?", "It's a good idea — a small buffer handles late guests or fit changes smoothly."], ["Can close family stand out with a different colour?", "Yes, a complementary shade for parents and siblings works well against a uniform wider group."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Nainital", intro: "A travelling safa team built for resort weddings, multi-day functions and destinations away from the city.", detail: "Fabric and accessories are consolidated before departure, and we plan a room-wise schedule with the hotel or planner.", faqs: [["Do you work at resorts outside central Nainital?", "Yes. Share the property and event schedule so travel and access can be planned."], ["Can the team stay for multiple functions?", "Multi-event assignments can be quoted after reviewing dates, styles and accommodation needs."], ["How early should we book?", "For peak wedding dates, reserving the team several weeks ahead is recommended."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Nainital", intro: "Coordinated pagdi styling for fathers, brothers and close relatives, while the groom's look stays clearly distinct.", detail: "We use two linked levels — a signature fold for the groom and a simpler repeatable one for the rest of the family.", faqs: [["Can the fit be gentler for elderly family members?", "Yes, just flag any comfort concerns to the artist and we'll adjust the tension and finish."], ["Can each side of the family wear a different colour?", "Yes — two complementary palettes work well and help distinguish each family group."], ["Are children included in the styling?", "Yes, just let us know approximate ages and how many in advance."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Nainital", intro: "Colour-led safa planning for couples who want the groom and guests aligned with outfits, flowers or the overall décor palette.", detail: "We work from visual references and recommend combinations that remain elegant in daylight, indoor lighting and wedding photography.", faqs: [["Is it possible to match our outfit colour precisely?", "We get as close as possible, though fabric tone can shift slightly from what's seen on screen."], ["Which shades work best for outdoor wedding photography?", "Ivory, rust, maroon, saffron, muted pink and richer jewel tones tend to stay defined in daylight."], ["Should the groom's colour contrast with the group?", "Often yes — a deliberate contrast is a reliable way to make him stand out."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How much time should we set aside for safa tying in Nainital?", "It depends on the fold style and group size — once we know your headcount and ready-by time we'll give a realistic batch schedule."],
    ["Does the package include the safa fabric itself?", "We confirm fabric and styling together — let us know if you need the complete safa supplied or just tying support for fabric you already have."],
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
    ["Do destination bookings include artist travel planning?", "Yes. The quote accounts for the venue route, reporting time, access, required arrival buffer and, where necessary, artist accommodation."],
    ["Can you coordinate directly with our hotel or wedding planner?", "Yes. One planner or hotel contact can confirm the preparation room, guest sequence and property access before the team arrives."],
  ],
  "family-pagdi": [
    ["Can close relatives like fathers and brothers get a more detailed look?", "Yes, they can have a refined fold or an extra accessory while the rest of the family keeps it simpler."],
    ["How do we split colours between two families?", "Pick two complementary shades from the outfits or décor, and keep the most distinctive treatment for the groom alone."],
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
  "wedding safa wala in Nainital",
  "safa tying service Nainital",
  "groom pagdi Nainital",
  "safa tying booking in Nainital",
  "premium groom turban tying in Nainital",
  "turban tying artist booking in Nainital",
  "professional pagdi bandhne wala in Nainital",
  "wedding turban artist near me in Nainital",
  "pagdi tying service in Nainital",
  "turban tying service booking in Nainital",
  "turban tying in Nainital",
  "pagdi tying team in Nainital",
  "baraat safa tying artist",
  "baraat turban tying specialist",
  "baraat safa tying on location",
  "turban bandhne wala",
  "groom pagdi tying specialist",
  "dulha pagdi tying on site",
  "wedding pagdi tying artist booking",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
