export type LocationItem = {
  slug: string;
  name: string;
  group: "Dubai area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Downtown Dubai", "Business Bay", "Dubai Marina", "Jumeirah", "Palm Jumeirah", "Deira", "Bur Dubai", "Al Barsha", "JLT", "Dubai Hills", "Al Quoz", "Jumeirah Beach Residence", "Dubai Silicon Oasis", "International City", "Mirdif", "Al Nahda", "Karama", "DIFC", "City Walk", "Dubai Creek Harbour"
];

const nearbyNames: string[] = [
  "Sharjah", "Ajman", "Umm Al Quwain", "Ras Al Khaimah", "Fujairah", "Al Ain", "Abu Dhabi", "Hatta", "Jebel Ali", "Deira", "Bur Dubai", "Jumeirah", "Business Bay", "Dubai Marina", "Dibba", "Khor Fakkan", "Kalba"
];

const localNotes: Record<string, [string, string]> = {
  "Downtown Dubai": ["Downtown Dubai functions often bring family groups arriving from several parts of Dubai.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Business Bay": ["Business Bay is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Dubai Marina": ["Dubai Marina is popular with intimate and destination wedding groups looking for a distinctly Dubai setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Jumeirah": ["Jumeirah celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Palm Jumeirah": ["Palm Jumeirah celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Deira": ["For wedding groups near Deira, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Bur Dubai": ["Bur Dubai is a practical base for wedding ceremonies on both sides of the Dubai service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Al Barsha": ["Al Barsha-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "JLT": ["JLT is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Dubai Hills": ["Dubai Hills is a practical base for wedding ceremonies on both sides of the Dubai service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Al Quoz": ["Al Quoz weddings often bring together resort guests, destination groups and families staying close to the Dubai hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Jumeirah Beach Residence": ["Jumeirah Beach Residence is a practical base for wedding ceremonies on both sides of the Dubai service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Dubai Silicon Oasis": ["Dubai Silicon Oasis suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "International City": ["International City is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Mirdif": ["Mirdif is a practical base for wedding ceremonies on both sides of the Dubai service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Al Nahda": ["Al Nahda weddings often bring together resort guests, destination groups and families staying close to the Dubai hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Karama": ["Karama-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "DIFC": ["DIFC wedding schedules can include home rituals followed by a venue entry elsewhere in Dubai.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "City Walk": ["City Walk is a practical base for wedding ceremonies on both sides of the Dubai service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Dubai Creek Harbour": ["Dubai Creek Harbour is popular with intimate and destination wedding groups looking for a distinctly Dubai setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Sharjah": ["Sharjah offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Dubai team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Ajman": ["Ajman weddings can be covered with advance scheduling from Dubai for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Umm Al Quwain": ["Umm Al Quwain celebrations are a natural extension of our Dubai service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Ras Al Khaimah": ["Ras Al Khaimah weddings often balance traditional ceremonies with guests travelling between hotels and venues near Dubai.", "We confirm the exact Ras Al Khaimah location, travel window and tying order before accepting the event schedule."],
  "Fujairah": ["Fujairah is handled as a planned destination assignment from Dubai rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Al Ain": ["Al Ain offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Dubai team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Abu Dhabi": ["Abu Dhabi celebrations are a natural extension of our Dubai service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Hatta": ["Hatta offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Dubai team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Jebel Ali": ["Jebel Ali offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Dubai team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Dibba": ["Dibba weddings can be covered with advance scheduling from Dubai for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Khor Fakkan": ["Khor Fakkan bookings are planned as an outstation service from Dubai with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Kalba": ["Kalba weddings can be covered with advance scheduling from Dubai for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
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
  const group = internalNames.includes(name) ? "Dubai area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Can I book a professional wedding safa wala in ${name}?`, `Yes. ${summary} We accept ${name} bookings as a ${group === "Dubai area" ? "local on-location service" : "pre-planned travelling assignment"}, subject to the wedding date and artist availability.`],
      [`What should we confirm for a ${name} wedding venue?`, `${planning} Please send the exact venue pin, preparation-room details and the groom\u2019s ready-by time rather than only the venue name.`],
      [`Which groom pagdi style suits a wedding in ${name}?`, `${finish} works particularly well with ${palette} palettes, although the final groom pagdi is selected from the sherwani, face profile, jewellery and ceremony setting.`],
      [`How many safa artists are needed for a ${name} baraat?`, `The team size depends on the final number of baraati safas and the time between guest arrival and procession departure. For ${name}, we separate the groom\u2019s detailed session from faster family and baraati batches.`],
      [`Can you provide family pagdis and baraati safas in different colours?`, `Yes. For a ${name} celebration, the groom can remain distinctive while parents, close family and the wider baraat use complementary colour groups. Share outfit references before fabric is finalised.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Dubai area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Dubai", intro: "An on-site safa tying service built around your actual guest count and departure schedule, not a fixed slot.", detail: "Fabric, fold and finishing are agreed in advance, and the artist team is sized to match the groom, family and baraati batches.", faqs: [["What's the maximum group size you can handle?", "We scale the artist count to your final headcount and the time window you give us — share both for an accurate plan."], ["Will your team travel to our venue?", "Yes, every booking is on-location — hotels, resorts, homes and wedding venues are all covered."], ["Can the safa colours be matched to our decor?", "Yes, share outfit or décor photos ahead of time and we'll recommend shades that coordinate well."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Dubai", intro: "A more considered, camera-ready pagdi service shaped around the groom's outfit, face profile and wedding aesthetic.", detail: "The groom receives dedicated styling time, with optional kalgi, brooch and fabric detailing kept balanced rather than overdone.", faqs: [["When should the groom's pagdi be tied?", "Usually before the main portrait session and after the sherwani is complete. We align the exact time with your photographer."], ["Can you suggest a pagdi colour?", "Yes. We consider the sherwani, stole, jewellery and overall wedding palette before suggesting a shade."], ["Is the groom styled separately?", "Yes. The groom's session is planned separately from the faster family and baraati sequence."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Dubai", intro: "Efficient safa tying for friends, relatives and the wider wedding party, timed to the procession schedule.", detail: "Batches are organised by arrival time, and every safa follows the same fold for a consistent group look.", faqs: [["What's your capacity for a big baraat?", "We scale the artist team to match your group size and the time you have available."], ["Should extra safas be kept as backup?", "It's a good idea — a small buffer handles late guests or fit changes smoothly."], ["Can close family stand out with a different colour?", "Yes, a complementary shade for parents and siblings works well against a uniform wider group."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Dubai", intro: "A travel-ready styling team for resorts, river-side celebrations and multi-day destination wedding schedules.", detail: "We coordinate with the planner or hotel, consolidate the fabric and accessories, and build a room-wise tying plan for the guest list.", faqs: [["Do you cover resorts located away from Dubai?", "Yes, we just need the property and event schedule to plan the travel and access side."], ["Is a multi-day, multi-function booking possible with one team?", "Yes — share the dates, styles and accommodation needs and we'll quote it as one assignment."], ["What's the recommended lead time for booking?", "For busy wedding dates, book several weeks in advance to secure the team."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Dubai", intro: "A family-wide pagdi plan that keeps parents and relatives visually aligned without competing with the groom.", detail: "Close family receive a shared, repeatable style while the groom's session remains separately detailed.", faqs: [["Can elders have a softer fit?", "Yes. Tell the artist about comfort needs and we can adjust tension and finish."], ["Can two families use separate colours?", "Yes. Separate but complementary palettes can make each side easy to identify."], ["Do you style children?", "Children can be included when their approximate ages and headcount are shared in advance."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Dubai", intro: "Colour-led safa planning for couples who want the groom and guests aligned with outfits, flowers or the overall décor palette.", detail: "We work from visual references and recommend combinations that remain elegant in daylight, indoor lighting and wedding photography.", faqs: [["Is it possible to match our outfit colour precisely?", "We get as close as possible, though fabric tone can shift slightly from what's seen on screen."], ["Which shades work best for outdoor wedding photography?", "Ivory, rust, maroon, saffron, muted pink and richer jewel tones tend to stay defined in daylight."], ["Should the groom's colour contrast with the group?", "Often yes — a deliberate contrast is a reliable way to make him stand out."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How much time should we set aside for safa tying in Dubai?", "It depends on the fold style and group size — once we know your headcount and ready-by time we'll give a realistic batch schedule."],
    ["Does the package include the safa fabric itself?", "We confirm fabric and styling together — let us know if you need the complete safa supplied or just tying support for fabric you already have."],
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
    ["Does the quote include travel logistics for the artists?", "It does — route, reporting time, property access, arrival buffer and accommodation where relevant are all included."],
    ["Can the venue's planning team coordinate with you directly?", "Yes, one contact from the hotel or planner side can confirm preparation room, sequencing and access before we arrive."],
  ],
  "family-pagdi": [
    ["Can fathers and brothers have a more detailed family pagdi?", "Yes. Close family can use a refined fold or complementary accessory while the wider group uses a simpler coordinated style."],
    ["How should we divide colours between both families?", "Choose two complementary shades from the outfits or décor and reserve the most distinctive treatment for the groom."],
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
  "wedding safa wala in Dubai",
  "safa tying service Dubai",
  "groom pagdi Dubai",
  "dulha turban tying service in Dubai",
  "turban tying specialist near me in Dubai",
  "turban tying vendor in Dubai",
  "pagdi tying artist near me in Dubai",
  "safa tying service near me in Dubai",
  "groom pagdi tying in Dubai",
  "doorstep safa tying in Dubai",
  "turban tying cost in Dubai",
  "wedding pagri tying near me in Dubai",
  "family pagdi package",
  "large group safa tying",
  "wedding pagdi tying on location",
  "designer turban tying service",
  "baraat pagdi tying for wedding",
  "groom safa styling service",
  "groom safa tying appointment",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
