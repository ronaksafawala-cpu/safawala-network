export type LocationItem = {
  slug: string;
  name: string;
  group: "Dharamshala area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "McLeod Ganj", "Dharamkot", "Bhagsu", "Naddi", "Forsyth Ganj", "Kotwali Bazaar", "Lower Dharamshala", "Sidhpur", "Sidhbari", "Kangra Road", "Khanyara", "Jogiwara Road", "Mataur", "Gaggal", "Rakkar"
];

const nearbyNames: string[] = [
  "McLeod Ganj", "Kangra", "Palampur", "Baijnath", "Nagrota Bagwan", "Nurpur", "Jawalamukhi", "Dehra Gopipur", "Hamirpur", "Una", "Mandi", "Bir", "Paragpur", "Jwalamukhi", "Dalhousie", "Chamba", "Pathankot", "Gaggal"
];

const localNotes: Record<string, [string, string]> = {
  "McLeod Ganj": ["McLeod Ganj weddings often bring together resort guests, destination groups and families staying close to the Dharamshala hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Dharamkot": ["Families near Dharamkot usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Bhagsu": ["Bhagsu suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Naddi": ["Naddi suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Forsyth Ganj": ["Forsyth Ganj is a practical base for wedding ceremonies on both sides of the Dharamshala service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Kotwali Bazaar": ["Kotwali Bazaar wedding schedules can include home rituals followed by a venue entry elsewhere in Dharamshala.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Lower Dharamshala": ["Lower Dharamshala celebrations often combine local family ceremonies with guests arriving from outside Dharamshala.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Sidhpur": ["Sidhpur weddings often bring together resort guests, destination groups and families staying close to the Dharamshala hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Sidhbari": ["For wedding groups near Sidhbari, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Kangra Road": ["For wedding groups near Kangra Road, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Khanyara": ["Khanyara is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Jogiwara Road": ["Jogiwara Road-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Mataur": ["For wedding groups near Mataur, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Gaggal": ["Gaggal celebrations often combine local family ceremonies with guests arriving from outside Dharamshala.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Rakkar": ["Rakkar functions often bring family groups arriving from several parts of Dharamshala.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Kangra": ["Kangra offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Dharamshala team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Palampur": ["Palampur offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Dharamshala team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Baijnath": ["Baijnath offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Dharamshala team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Nagrota Bagwan": ["Nagrota Bagwan celebrations are a natural extension of our Dharamshala service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Nurpur": ["Nurpur weddings often balance traditional ceremonies with guests travelling between hotels and venues near Dharamshala.", "We confirm the exact Nurpur location, travel window and tying order before accepting the event schedule."],
  "Jawalamukhi": ["Jawalamukhi is handled as a planned destination assignment from Dharamshala rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Dehra Gopipur": ["Dehra Gopipur bookings are planned as an outstation service from Dharamshala with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Hamirpur": ["Hamirpur offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Dharamshala team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Una": ["Una bookings are planned as an outstation service from Dharamshala with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Mandi": ["Mandi is handled as a planned destination assignment from Dharamshala rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Bir": ["Bir is handled as a planned destination assignment from Dharamshala rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Paragpur": ["Paragpur offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Dharamshala team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Jwalamukhi": ["Jwalamukhi destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Dharamshala, and a covered styling area is recommended."],
  "Dalhousie": ["Dalhousie weddings often balance traditional ceremonies with guests travelling between hotels and venues near Dharamshala.", "We confirm the exact Dalhousie location, travel window and tying order before accepting the event schedule."],
  "Chamba": ["Chamba celebrations are a natural extension of our Dharamshala service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Pathankot": ["Pathankot weddings often balance traditional ceremonies with guests travelling between hotels and venues near Dharamshala.", "We confirm the exact Pathankot location, travel window and tying order before accepting the event schedule."],
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
  const group = internalNames.includes(name) ? "Dharamshala area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Is a professional wedding safa wala available in ${name}?`, `Yes \u2014 ${summary} Bookings in ${name} are handled as a ${group === "Dharamshala area" ? "local on-location service" : "pre-planned travelling assignment"}, depending on your date and artist availability.`],
      [`What details do you need for a wedding venue in ${name}?`, `${planning} Share the exact venue pin, the preparation room, and the groom\u2019s ready-by time \u2014 not just the venue name.`],
      [`What groom pagdi style works best for a ${name} wedding?`, `${finish} pairs well with ${palette} tones, though we finalise the actual style around the sherwani, jewellery and the setting itself.`],
      [`How many artists should we plan for a baraat in ${name}?`, `That depends on the number of baraati safas and how much time there is between guest arrival and the procession. In ${name} we always keep the groom\u2019s session separate from the faster family and baraati batches.`],
      [`Can family and baraat safas be in different colours from the groom's?`, `Yes \u2014 for a ${name} wedding, the groom can keep a distinct look while parents, close family and the baraat wear complementary colour groups. Just confirm outfit references before we finalise fabric.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Dharamshala area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Dharamshala", intro: "An on-site safa tying service built around your actual guest count and departure schedule, not a fixed slot.", detail: "Fabric, fold and finishing are agreed in advance, and the artist team is sized to match the groom, family and baraati batches.", faqs: [["Is there a limit on how many people you can style?", "No fixed limit — artist numbers scale with your headcount, so share the final count and available time."], ["Do your artists visit the wedding location?", "Always. This is a fully on-location service across hotels, resorts, homes and venues."], ["Can you coordinate the safa colour with our theme?", "Yes — send us outfit or décor references beforehand and we'll suggest matching shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Dharamshala", intro: "A more considered, camera-ready pagdi service shaped around the groom's outfit, face profile and wedding aesthetic.", detail: "The groom receives dedicated styling time, with optional kalgi, brooch and fabric detailing kept balanced rather than overdone.", faqs: [["What's the right time to style the groom's pagdi?", "We usually finish it right after the sherwani is on and before portraits begin — we'll confirm the exact slot with your photographer."], ["Can you help pick the pagdi colour?", "Yes, we look at the sherwani, stole and jewellery together with the wedding palette before recommending a shade."], ["Does the groom get his own separate session?", "Always. The groom is styled on his own timeline, apart from the quicker family and baraati rounds."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Dharamshala", intro: "Efficient safa tying for friends, relatives and the wider wedding party, timed to the procession schedule.", detail: "Batches are organised by arrival time, and every safa follows the same fold for a consistent group look.", faqs: [["What's your capacity for a big baraat?", "We scale the artist team to match your group size and the time you have available."], ["Should extra safas be kept as backup?", "It's a good idea — a small buffer handles late guests or fit changes smoothly."], ["Can close family stand out with a different colour?", "Yes, a complementary shade for parents and siblings works well against a uniform wider group."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Dharamshala", intro: "A travelling safa team built for resort weddings, multi-day functions and destinations away from the city.", detail: "Fabric and accessories are consolidated before departure, and we plan a room-wise schedule with the hotel or planner.", faqs: [["Will you travel to resorts beyond Dharamshala itself?", "Yes — just share the property details and schedule so we can plan travel and access in advance."], ["Can the same team cover more than one function?", "We can quote a multi-event assignment once we know the dates, styles and any accommodation needs."], ["How far ahead should destination bookings be made?", "A few weeks ahead is ideal for peak dates, so the team is reserved in time."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Dharamshala", intro: "Refined coordinated pagdis for fathers, brothers, uncles and close relatives, with the groom kept visually distinctive.", detail: "Family styling works best with two complementary levels: a signature groom treatment and a clean repeatable fold for relatives.", faqs: [["Can elders have a softer fit?", "Yes. Tell the artist about comfort needs and we can adjust tension and finish."], ["Can two families use separate colours?", "Yes. Separate but complementary palettes can make each side easy to identify."], ["Do you style children?", "Children can be included when their approximate ages and headcount are shared in advance."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Dharamshala", intro: "Custom colour planning for the groom and wedding party, built around your outfits and decor rather than a fixed catalogue.", detail: "We review your references first, then propose shades that stay elegant across different lighting and camera conditions.", faqs: [["Can you get an exact colour match to our outfits?", "We aim for a close coordinated match, though fabric can look slightly different from a screen reference."], ["What colours hold up best in outdoor photos?", "Ivory, rust, maroon, saffron, muted pink and deep jewel tones tend to photograph well outdoors."], ["Should the groom wear a contrasting colour?", "A controlled contrast often works best to keep him visually distinct from the group."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long should we budget for safa tying on the day in Dharamshala?", "It varies by fold and group size; tell us your headcount and ready-by time and we'll recommend the artist count and schedule."],
    ["Do you bring the safa fabric or just handle the tying?", "Both options work — tell us if you want the full safa supplied or tying done on fabric your family has already chosen."],
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
    ["Can fathers and brothers have a more detailed family pagdi?", "Yes. Close family can use a refined fold or complementary accessory while the wider group uses a simpler coordinated style."],
    ["How should we divide colours between both families?", "Choose two complementary shades from the outfits or décor and reserve the most distinctive treatment for the groom."],
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
  "wedding safa wala in Dharamshala",
  "safa tying service Dharamshala",
  "groom pagdi Dharamshala",
  "turban tying team in Dharamshala",
  "dulha turban tying in Dharamshala",
  "groom safa tying service in Dharamshala",
  "on location turban tying in Dharamshala",
  "turban tying for baraat in Dharamshala",
  "turban tying for wedding in Dharamshala",
  "hire safa tying service in Dharamshala",
  "book turban artist in Dharamshala",
  "safa tying agency in Dharamshala",
  "groom pagdi tying price",
  "wedding group pagri tying",
  "sangeet turban tying",
  "indian safa tying",
  "wedding turban tying charges",
  "groom safa styling service",
  "dulha pagri tying doorstep service",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
