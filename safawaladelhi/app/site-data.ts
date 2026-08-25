export type LocationItem = {
  slug: string;
  name: string;
  group: "Delhi area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Connaught Place", "Karol Bagh", "Dwarka", "Rohini", "Pitampura", "Janakpuri", "Saket", "Vasant Kunj", "Hauz Khas", "Greater Kailash", "Lajpat Nagar", "South Extension", "Defence Colony", "Chandni Chowk", "Paharganj", "Rajouri Garden", "Punjabi Bagh", "Mayur Vihar", "Preet Vihar", "Laxmi Nagar", "Shahdara", "Model Town", "Civil Lines", "Vasant Vihar", "Nehru Place", "Aerocity"
];

const nearbyNames: string[] = [
  "Gurugram", "Noida", "Ghaziabad", "Faridabad", "Greater Noida", "Sonipat", "Panipat", "Rohtak", "Bahadurgarh", "Murthal", "Sohna", "Manesar", "Bhiwadi", "Neemrana", "Alwar", "Mathura", "Vrindavan", "Bharatpur", "Meerut", "Modinagar", "Bulandshahr", "Kurukshetra", "Palwal"
];

const localNotes: Record<string, [string, string]> = {
  "Connaught Place": ["Connaught Place functions often bring family groups arriving from several parts of Delhi.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Karol Bagh": ["Karol Bagh functions often bring family groups arriving from several parts of Delhi.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Dwarka": ["Dwarka is a practical base for wedding ceremonies on both sides of the Delhi service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Rohini": ["Rohini wedding schedules can include home rituals followed by a venue entry elsewhere in Delhi.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Pitampura": ["Families near Pitampura usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Janakpuri": ["Janakpuri is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Saket": ["Saket is popular with intimate and destination wedding groups looking for a distinctly Delhi setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Vasant Kunj": ["Vasant Kunj wedding schedules can include home rituals followed by a venue entry elsewhere in Delhi.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Hauz Khas": ["Hauz Khas celebrations often combine local family ceremonies with guests arriving from outside Delhi.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Greater Kailash": ["Greater Kailash is popular with intimate and destination wedding groups looking for a distinctly Delhi setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Lajpat Nagar": ["Lajpat Nagar celebrations often combine local family ceremonies with guests arriving from outside Delhi.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "South Extension": ["For wedding groups near South Extension, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Defence Colony": ["Defence Colony is a practical base for wedding ceremonies on both sides of the Delhi service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Chandni Chowk": ["Chandni Chowk suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Paharganj": ["Paharganj-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Rajouri Garden": ["Rajouri Garden-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Punjabi Bagh": ["Punjabi Bagh is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Mayur Vihar": ["Families near Mayur Vihar usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Preet Vihar": ["Preet Vihar is popular with intimate and destination wedding groups looking for a distinctly Delhi setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Laxmi Nagar": ["Laxmi Nagar is a practical base for wedding ceremonies on both sides of the Delhi service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Shahdara": ["Shahdara is a practical base for wedding ceremonies on both sides of the Delhi service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Model Town": ["Model Town wedding schedules can include home rituals followed by a venue entry elsewhere in Delhi.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Civil Lines": ["Civil Lines-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Vasant Vihar": ["Vasant Vihar suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Nehru Place": ["Nehru Place-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Aerocity": ["Aerocity weddings often bring together resort guests, destination groups and families staying close to the Delhi hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Gurugram": ["Gurugram weddings can be covered with advance scheduling from Delhi for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Noida": ["Noida is handled as a planned destination assignment from Delhi rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Ghaziabad": ["Ghaziabad is handled as a planned destination assignment from Delhi rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Faridabad": ["Faridabad offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Delhi team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Greater Noida": ["Greater Noida destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Delhi, and a covered styling area is recommended."],
  "Sonipat": ["Sonipat offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Delhi team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Panipat": ["Panipat destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Delhi, and a covered styling area is recommended."],
  "Rohtak": ["Rohtak weddings often balance traditional ceremonies with guests travelling between hotels and venues near Delhi.", "We confirm the exact Rohtak location, travel window and tying order before accepting the event schedule."],
  "Bahadurgarh": ["Bahadurgarh offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Delhi team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Murthal": ["Murthal celebrations are a natural extension of our Delhi service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Sohna": ["Sohna is handled as a planned destination assignment from Delhi rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Manesar": ["Manesar offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Delhi team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Bhiwadi": ["Bhiwadi is handled as a planned destination assignment from Delhi rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Neemrana": ["Neemrana bookings are planned as an outstation service from Delhi with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Alwar": ["Alwar celebrations are a natural extension of our Delhi service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Mathura": ["Mathura functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Vrindavan": ["Vrindavan weddings can be covered with advance scheduling from Delhi for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Bharatpur": ["Bharatpur offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Delhi team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Meerut": ["Meerut destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Delhi, and a covered styling area is recommended."],
  "Modinagar": ["Modinagar bookings are planned as an outstation service from Delhi with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Bulandshahr": ["Bulandshahr bookings are planned as an outstation service from Delhi with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Kurukshetra": ["Kurukshetra functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Palwal": ["Palwal destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Delhi, and a covered styling area is recommended."],
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
  const group = internalNames.includes(name) ? "Delhi area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Is a professional wedding safa wala available in ${name}?`, `Yes \u2014 ${summary} Bookings in ${name} are handled as a ${group === "Delhi area" ? "local on-location service" : "pre-planned travelling assignment"}, depending on your date and artist availability.`],
      [`What details do you need for a wedding venue in ${name}?`, `${planning} Share the exact venue pin, the preparation room, and the groom\u2019s ready-by time \u2014 not just the venue name.`],
      [`What groom pagdi style works best for a ${name} wedding?`, `${finish} pairs well with ${palette} tones, though we finalise the actual style around the sherwani, jewellery and the setting itself.`],
      [`How many artists should we plan for a baraat in ${name}?`, `That depends on the number of baraati safas and how much time there is between guest arrival and the procession. In ${name} we always keep the groom\u2019s session separate from the faster family and baraati batches.`],
      [`Can family and baraat safas be in different colours from the groom's?`, `Yes \u2014 for a ${name} wedding, the groom can keep a distinct look while parents, close family and the baraat wear complementary colour groups. Just confirm outfit references before we finalise fabric.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Delhi area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Delhi", intro: "A dependable safa tying appointment for the whole wedding party, timed to your ceremony and photography schedule.", detail: "We confirm the drape and colour direction ahead of the event, then bring enough artists to keep every batch moving without delay.", faqs: [["What's the maximum group size you can handle?", "We scale the artist count to your final headcount and the time window you give us — share both for an accurate plan."], ["Will your team travel to our venue?", "Yes, every booking is on-location — hotels, resorts, homes and wedding venues are all covered."], ["Can the safa colours be matched to our decor?", "Yes, share outfit or décor photos ahead of time and we'll recommend shades that coordinate well."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Delhi", intro: "A more considered, camera-ready pagdi service shaped around the groom's outfit, face profile and wedding aesthetic.", detail: "The groom receives dedicated styling time, with optional kalgi, brooch and fabric detailing kept balanced rather than overdone.", faqs: [["When should the groom's pagdi be tied?", "Usually before the main portrait session and after the sherwani is complete. We align the exact time with your photographer."], ["Can you suggest a pagdi colour?", "Yes. We consider the sherwani, stole, jewellery and overall wedding palette before suggesting a shade."], ["Is the groom styled separately?", "Yes. The groom's session is planned separately from the faster family and baraati sequence."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Delhi", intro: "A quick, repeatable safa tying process for the wider baraat, built to keep the procession on schedule.", detail: "Guests move through in organised batches, all finished to the same fold so the group reads as one in photos.", faqs: [["Is there a group size you can't handle for baraati safas?", "Not really — we bring on more artists as the group grows and time allows."], ["Is it worth ordering a few spare safas?", "Yes, a small buffer covers late arrivals or last-minute fit issues."], ["Can the close family's safas be a different shade?", "Yes, parents and siblings can wear a complementary colour while everyone else stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Delhi", intro: "A travelling safa team built for resort weddings, multi-day functions and destinations away from the city.", detail: "Fabric and accessories are consolidated before departure, and we plan a room-wise schedule with the hotel or planner.", faqs: [["Do you cover resorts located away from Delhi?", "Yes, we just need the property and event schedule to plan the travel and access side."], ["Is a multi-day, multi-function booking possible with one team?", "Yes — share the dates, styles and accommodation needs and we'll quote it as one assignment."], ["What's the recommended lead time for booking?", "For busy wedding dates, book several weeks in advance to secure the team."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Delhi", intro: "Pagdi styling for the wider family that stays coordinated, with the groom kept as the clear focal point.", detail: "A consistent fold is used for relatives, and the groom's more detailed treatment is planned as its own session.", faqs: [["Can elders have a softer fit?", "Yes. Tell the artist about comfort needs and we can adjust tension and finish."], ["Can two families use separate colours?", "Yes. Separate but complementary palettes can make each side easy to identify."], ["Do you style children?", "Children can be included when their approximate ages and headcount are shared in advance."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Delhi", intro: "Custom colour planning for the groom and wedding party, built around your outfits and decor rather than a fixed catalogue.", detail: "We review your references first, then propose shades that stay elegant across different lighting and camera conditions.", faqs: [["Can you match an exact outfit colour?", "We can work toward a close coordinated match; physical fabric may vary slightly from screen colours."], ["Which colours photograph well outdoors?", "Ivory, rust, maroon, saffron, muted pink and deeper jewel tones generally retain definition in outdoor light."], ["Can the groom use a contrast colour?", "Yes. A controlled contrast is often the best way to keep the groom visually distinct."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How much time should we set aside for safa tying in Delhi?", "It depends on the fold style and group size — once we know your headcount and ready-by time we'll give a realistic batch schedule."],
    ["Does the package include the safa fabric itself?", "We confirm fabric and styling together — let us know if you need the complete safa supplied or just tying support for fabric you already have."],
  ],
  "groom-pagdi": [
    ["Can the groom pagdi include a kalgi or brooch?", "Yes. Kalgi, brooch, feather and pearl details can be positioned after reviewing the sherwani and jewellery so the final look remains balanced."],
    ["Can we arrange a groom pagdi trial before the wedding?", "A trial or detailed reference consultation can be discussed when the style is highly specific or the groom wants to compare more than one profile."],
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
    ["Can fathers and brothers have a more detailed family pagdi?", "Yes. Close family can use a refined fold or complementary accessory while the wider group uses a simpler coordinated style."],
    ["How should we divide colours between both families?", "Choose two complementary shades from the outfits or décor and reserve the most distinctive treatment for the groom."],
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
  "wedding safa wala in Delhi",
  "safa tying service Delhi",
  "groom pagdi Delhi",
  "wedding turban tying service in Delhi",
  "groom turban tying near me in Delhi",
  "safa bandhne ki service in Delhi",
  "safa tying in Delhi",
  "live pagdi tying service in Delhi",
  "expert turban tying in Delhi",
  "turban tying team in Delhi",
  "turban tying workers in Delhi",
  "safa tying artist near me in Delhi",
  "baraat pagdi tying service provider",
  "wedding pagri tying on site",
  "wedding turban tying charges",
  "wedding safa tying hire",
  "how to tie safa",
  "wedding turban hire with tying",
  "dulha pagri rental and tying",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
