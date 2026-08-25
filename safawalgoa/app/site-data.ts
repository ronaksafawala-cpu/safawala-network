export type LocationItem = {
  slug: string;
  name: string;
  group: "Goa area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Panaji", "Margao", "Vasco da Gama", "Mapusa", "Calangute", "Candolim", "Baga", "Anjuna", "Vagator", "Arambol", "Colva", "Benaulim", "Cavelossim", "Ponda", "Bicholim", "Canacona", "Dona Paula", "Miramar", "Porvorim", "Siolim", "Assagao", "Morjim", "Palolem", "Cortalim", "Old Goa", "Sanguem"
];

const nearbyNames: string[] = [
  "Belagavi", "Kolhapur", "Sindhudurg", "Karwar", "Hubballi", "Ratnagiri", "Sawantwadi", "Chiplun", "Pune", "Mumbai", "Bengaluru", "Londa", "Castle Rock", "Dharwad"
];

const localNotes: Record<string, [string, string]> = {
  "Panaji": ["Families near Panaji usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Margao": ["Margao is a practical base for wedding ceremonies on both sides of the Goa service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Vasco da Gama": ["Vasco da Gama-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Mapusa": ["Mapusa celebrations often combine local family ceremonies with guests arriving from outside Goa.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Calangute": ["Calangute celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Candolim": ["Candolim suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Baga": ["Baga functions often bring family groups arriving from several parts of Goa.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Anjuna": ["Anjuna suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Vagator": ["Vagator suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Arambol": ["Arambol is popular with intimate and destination wedding groups looking for a distinctly Goa setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Colva": ["Colva is a practical base for wedding ceremonies on both sides of the Goa service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Benaulim": ["Benaulim functions often bring family groups arriving from several parts of Goa.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Cavelossim": ["Cavelossim is a practical base for wedding ceremonies on both sides of the Goa service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Ponda": ["Ponda weddings often bring together resort guests, destination groups and families staying close to the Goa hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Bicholim": ["Bicholim-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Canacona": ["Canacona is a practical base for wedding ceremonies on both sides of the Goa service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Dona Paula": ["Dona Paula weddings often bring together resort guests, destination groups and families staying close to the Goa hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Miramar": ["Miramar is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Porvorim": ["Porvorim weddings often bring together resort guests, destination groups and families staying close to the Goa hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Siolim": ["Siolim suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Assagao": ["Assagao wedding schedules can include home rituals followed by a venue entry elsewhere in Goa.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Morjim": ["Morjim is a practical base for wedding ceremonies on both sides of the Goa service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Palolem": ["Families near Palolem usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Cortalim": ["Cortalim-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Old Goa": ["For wedding groups near Old Goa, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Sanguem": ["Sanguem weddings often bring together resort guests, destination groups and families staying close to the Goa hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Belagavi": ["Belagavi destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Goa, and a covered styling area is recommended."],
  "Kolhapur": ["Kolhapur destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Goa, and a covered styling area is recommended."],
  "Sindhudurg": ["Sindhudurg functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Karwar": ["Karwar destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Goa, and a covered styling area is recommended."],
  "Hubballi": ["Hubballi weddings often balance traditional ceremonies with guests travelling between hotels and venues near Goa.", "We confirm the exact Hubballi location, travel window and tying order before accepting the event schedule."],
  "Ratnagiri": ["Ratnagiri functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Sawantwadi": ["Sawantwadi bookings are planned as an outstation service from Goa with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Chiplun": ["Chiplun weddings can be covered with advance scheduling from Goa for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Pune": ["Pune is handled as a planned destination assignment from Goa rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Mumbai": ["Mumbai weddings can be covered with advance scheduling from Goa for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Bengaluru": ["Bengaluru functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Londa": ["Londa bookings are planned as an outstation service from Goa with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Castle Rock": ["Castle Rock is handled as a planned destination assignment from Goa rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Dharwad": ["Dharwad destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Goa, and a covered styling area is recommended."],
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
  const group = internalNames.includes(name) ? "Goa area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Is a professional wedding safa wala available in ${name}?`, `Yes \u2014 ${summary} Bookings in ${name} are handled as a ${group === "Goa area" ? "local on-location service" : "pre-planned travelling assignment"}, depending on your date and artist availability.`],
      [`What details do you need for a wedding venue in ${name}?`, `${planning} Share the exact venue pin, the preparation room, and the groom\u2019s ready-by time \u2014 not just the venue name.`],
      [`What groom pagdi style works best for a ${name} wedding?`, `${finish} pairs well with ${palette} tones, though we finalise the actual style around the sherwani, jewellery and the setting itself.`],
      [`How many artists should we plan for a baraat in ${name}?`, `That depends on the number of baraati safas and how much time there is between guest arrival and the procession. In ${name} we always keep the groom\u2019s session separate from the faster family and baraati batches.`],
      [`Can family and baraat safas be in different colours from the groom's?`, `Yes \u2014 for a ${name} wedding, the groom can keep a distinct look while parents, close family and the baraat wear complementary colour groups. Just confirm outfit references before we finalise fabric.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Goa area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Goa", intro: "Wedding Safa Tying for Goa weddings, planned around your venue, guest count and ceremony schedule.", detail: "Every wedding safa tying booking in Goa confirms the groom's ready time, guest quantity, venue access and photography schedule before the team travels.", faqs: [["Is there a limit on how many people you can style?", "No fixed limit — artist numbers scale with your headcount, so share the final count and available time."], ["Do your artists visit the wedding location?", "Always. This is a fully on-location service across hotels, resorts, homes and venues."], ["Can you coordinate the safa colour with our theme?", "Yes — send us outfit or décor references beforehand and we'll suggest matching shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Goa", intro: "Groom Pagdi Styling for Goa weddings, planned around your venue, guest count and ceremony schedule.", detail: "Every groom pagdi styling booking in Goa confirms the groom's ready time, guest quantity, venue access and photography schedule before the team travels.", faqs: [["What's the right time to style the groom's pagdi?", "We usually finish it right after the sherwani is on and before portraits begin — we'll confirm the exact slot with your photographer."], ["Can you help pick the pagdi colour?", "Yes, we look at the sherwani, stole and jewellery together with the wedding palette before recommending a shade."], ["Does the groom get his own separate session?", "Always. The groom is styled on his own timeline, apart from the quicker family and baraati rounds."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Goa", intro: "Baraati Safa Service for Goa weddings, planned around your venue, guest count and ceremony schedule.", detail: "Every baraati safa service booking in Goa confirms the groom's ready time, guest quantity, venue access and photography schedule before the team travels.", faqs: [["What's your capacity for a big baraat?", "We scale the artist team to match your group size and the time you have available."], ["Should extra safas be kept as backup?", "It's a good idea — a small buffer handles late guests or fit changes smoothly."], ["Can close family stand out with a different colour?", "Yes, a complementary shade for parents and siblings works well against a uniform wider group."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Goa", intro: "Destination Wedding Safa for Goa weddings, planned around your venue, guest count and ceremony schedule.", detail: "Every destination wedding safa booking in Goa confirms the groom's ready time, guest quantity, venue access and photography schedule before the team travels.", faqs: [["Do you cover resorts located away from Goa?", "Yes, we just need the property and event schedule to plan the travel and access side."], ["Is a multi-day, multi-function booking possible with one team?", "Yes — share the dates, styles and accommodation needs and we'll quote it as one assignment."], ["What's the recommended lead time for booking?", "For busy wedding dates, book several weeks in advance to secure the team."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Goa", intro: "Family Pagdi Styling for Goa weddings, planned around your venue, guest count and ceremony schedule.", detail: "Every family pagdi styling booking in Goa confirms the groom's ready time, guest quantity, venue access and photography schedule before the team travels.", faqs: [["Can elders have a softer fit?", "Yes. Tell the artist about comfort needs and we can adjust tension and finish."], ["Can two families use separate colours?", "Yes. Separate but complementary palettes can make each side easy to identify."], ["Do you style children?", "Children can be included when their approximate ages and headcount are shared in advance."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Goa", intro: "Custom Safa Colours for Goa weddings, planned around your venue, guest count and ceremony schedule.", detail: "Every custom safa colours booking in Goa confirms the groom's ready time, guest quantity, venue access and photography schedule before the team travels.", faqs: [["Is it possible to match our outfit colour precisely?", "We get as close as possible, though fabric tone can shift slightly from what's seen on screen."], ["Which shades work best for outdoor wedding photography?", "Ivory, rust, maroon, saffron, muted pink and richer jewel tones tend to stay defined in daylight."], ["Should the groom's colour contrast with the group?", "Often yes — a deliberate contrast is a reliable way to make him stand out."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long should we budget for safa tying on the day in Goa?", "It varies by fold and group size; tell us your headcount and ready-by time and we'll recommend the artist count and schedule."],
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
  "wedding safa wala in Goa",
  "safa tying service Goa",
  "groom pagdi Goa",
  "safa tying service in Goa",
  "pagdi tying services in Goa",
  "pagri bandhne ki service in Goa",
  "professional turban tying in Goa",
  "wedding groom safa service in Goa",
  "family turban tying in Goa",
  "destination wedding pagri tying in Goa",
  "pagri tying at wedding venue in Goa",
  "rajputi turban tying in Goa",
  "pagri tying tutorial in Goa",
  "guest pagdi package in Goa",
  "haldi safa service in Goa",
  "turban baandhne artist in Goa",
  "wedding safa styling in Goa",
  "safa rent and tie in Goa",
  "royal wedding turban service in Goa",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
