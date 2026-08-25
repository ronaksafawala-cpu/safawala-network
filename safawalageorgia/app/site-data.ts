export type LocationItem = {
  slug: string;
  name: string;
  group: "Georgia area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Old Tbilisi", "Vake", "Saburtalo", "Vera", "Avlabari", "Didube", "Isani", "Mtatsminda"
];

const nearbyNames: string[] = [
  "Old Batumi", "New Boulevard", "Gonio", "Kvariati", "Makhinjauri", "City Centre", "Sapichkhia", "Mtsvanekvavila", "New Gudauri", "Old Gudauri", "Borjomi Centre", "Likani", "Plateau"
];

const localNotes: Record<string, [string, string]> = {
  "Old Tbilisi": ["Old Tbilisi functions often bring family groups arriving from several parts of Georgia.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Vake": ["Vake is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Saburtalo": ["Families near Saburtalo usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Vera": ["Vera is popular with intimate and destination wedding groups looking for a distinctly Georgia setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Avlabari": ["Avlabari-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Didube": ["Didube is popular with intimate and destination wedding groups looking for a distinctly Georgia setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Isani": ["Isani functions often bring family groups arriving from several parts of Georgia.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Mtatsminda": ["Mtatsminda suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Old Batumi": ["Old Batumi offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Georgia team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "New Boulevard": ["New Boulevard weddings often balance traditional ceremonies with guests travelling between hotels and venues near Georgia.", "We confirm the exact New Boulevard location, travel window and tying order before accepting the event schedule."],
  "Gonio": ["Gonio celebrations are a natural extension of our Georgia service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Kvariati": ["Kvariati weddings can be covered with advance scheduling from Georgia for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Makhinjauri": ["Makhinjauri weddings can be covered with advance scheduling from Georgia for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "City Centre": ["City Centre functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Sapichkhia": ["Sapichkhia destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Georgia, and a covered styling area is recommended."],
  "Mtsvanekvavila": ["Mtsvanekvavila destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Georgia, and a covered styling area is recommended."],
  "New Gudauri": ["New Gudauri weddings can be covered with advance scheduling from Georgia for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Old Gudauri": ["Old Gudauri functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Borjomi Centre": ["Borjomi Centre celebrations are a natural extension of our Georgia service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Likani": ["Likani functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Plateau": ["Plateau offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Georgia team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
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
  const group = internalNames.includes(name) ? "Georgia area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Can I book a professional wedding safa wala in ${name}?`, `Yes. ${summary} We accept ${name} bookings as a ${group === "Georgia area" ? "local on-location service" : "pre-planned travelling assignment"}, subject to the wedding date and artist availability.`],
      [`What should we confirm for a ${name} wedding venue?`, `${planning} Please send the exact venue pin, preparation-room details and the groom\u2019s ready-by time rather than only the venue name.`],
      [`Which groom pagdi style suits a wedding in ${name}?`, `${finish} works particularly well with ${palette} palettes, although the final groom pagdi is selected from the sherwani, face profile, jewellery and ceremony setting.`],
      [`How many safa artists are needed for a ${name} baraat?`, `The team size depends on the final number of baraati safas and the time between guest arrival and procession departure. For ${name}, we separate the groom\u2019s detailed session from faster family and baraati batches.`],
      [`Can you provide family pagdis and baraati safas in different colours?`, `Yes. For a ${name} celebration, the groom can remain distinctive while parents, close family and the wider baraat use complementary colour groups. Share outfit references before fabric is finalised.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Georgia area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Georgia", intro: "A dependable safa tying appointment for the whole wedding party, timed to your ceremony and photography schedule.", detail: "We confirm the drape and colour direction ahead of the event, then bring enough artists to keep every batch moving without delay.", faqs: [["How many safas can your team tie?", "Team size is matched to your headcount and available preparation window. Share both figures for an accurate plan."], ["Do you come to the hotel or venue?", "Yes. Our artists provide on-location service at hotels, resorts, homes and wedding venues."], ["Can colours match the wedding theme?", "Yes. Send outfit or décor references before the event so we can recommend suitable coordinated shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Georgia", intro: "A dedicated groom pagdi appointment, styled around the sherwani, face shape and the day's overall look.", detail: "The session is unhurried, with kalgi, brooch and fabric accents added only where they support the finished profile.", faqs: [["What's the right time to style the groom's pagdi?", "We usually finish it right after the sherwani is on and before portraits begin — we'll confirm the exact slot with your photographer."], ["Can you help pick the pagdi colour?", "Yes, we look at the sherwani, stole and jewellery together with the wedding palette before recommending a shade."], ["Does the groom get his own separate session?", "Always. The groom is styled on his own timeline, apart from the quicker family and baraati rounds."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Georgia", intro: "Coordinated baraati safa tying that keeps a large guest list moving without holding up the departure.", detail: "One agreed style is used across the group, with batches sized to the time available before the baraat leaves.", faqs: [["Can you handle a large baraati group?", "Yes. We add artists according to the group size and time available."], ["Should we order extra safas?", "A small quantity buffer is sensible for late additions or fit changes."], ["Can close family wear a different colour?", "Yes. Parents and siblings can use a complementary shade while the wider group stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Georgia", intro: "A travel-ready styling team for resorts, river-side celebrations and multi-day destination wedding schedules.", detail: "We coordinate with the planner or hotel, consolidate the fabric and accessories, and build a room-wise tying plan for the guest list.", faqs: [["Will you travel to resorts beyond Georgia itself?", "Yes — just share the property details and schedule so we can plan travel and access in advance."], ["Can the same team cover more than one function?", "We can quote a multi-event assignment once we know the dates, styles and any accommodation needs."], ["How far ahead should destination bookings be made?", "A few weeks ahead is ideal for peak dates, so the team is reserved in time."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Georgia", intro: "Pagdi styling for the wider family that stays coordinated, with the groom kept as the clear focal point.", detail: "A consistent fold is used for relatives, and the groom's more detailed treatment is planned as its own session.", faqs: [["Can elders have a softer fit?", "Yes. Tell the artist about comfort needs and we can adjust tension and finish."], ["Can two families use separate colours?", "Yes. Separate but complementary palettes can make each side easy to identify."], ["Do you style children?", "Children can be included when their approximate ages and headcount are shared in advance."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Georgia", intro: "A tailored colour direction for every safa, aligned with the sherwani, florals and venue decor.", detail: "Starting from your visual references, we recommend a palette that photographs consistently indoors and out.", faqs: [["Is it possible to match our outfit colour precisely?", "We get as close as possible, though fabric tone can shift slightly from what's seen on screen."], ["Which shades work best for outdoor wedding photography?", "Ivory, rust, maroon, saffron, muted pink and richer jewel tones tend to stay defined in daylight."], ["Should the groom's colour contrast with the group?", "Often yes — a deliberate contrast is a reliable way to make him stand out."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long does wedding safa tying take in Georgia?", "Timing depends on the fold and group size. Once we know the guest quantity and ready-by time, we recommend the artist count and a practical batch schedule."],
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
    ["Is artist travel factored into the destination quote?", "Yes — route, reporting time, property access, arrival buffer and artist accommodation (if needed) are all part of the quote."],
    ["Can you liaise with our planner or hotel directly?", "Yes, a single point of contact from the hotel or planning team can confirm the room, sequence and access ahead of the team's arrival."],
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
  "wedding safa wala in Georgia",
  "safa tying service Georgia",
  "groom pagdi Georgia",
  "groom turban specialist in Georgia",
  "best safa tying service in Georgia",
  "professional turban tying near me in Georgia",
  "professional turban artist in Georgia",
  "book safa artist in Georgia",
  "traditional safa tying near me in Georgia",
  "safa tying at home in Georgia",
  "turban tying artist booking in Georgia",
  "groom turban tying near me in Georgia",
  "wedding pagri tying on location",
  "groom pagdi tying professional",
  "wedding pagri tying for baraat",
  "groom safa styling service",
  "baraat safa tying at venue",
  "how to tie a pagdi",
  "baraat safa tying group",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
