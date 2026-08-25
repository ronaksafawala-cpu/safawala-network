export type LocationItem = {
  slug: string;
  name: string;
  group: "Chennai area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "T Nagar", "Adyar", "Anna Nagar", "Velachery", "OMR", "Sholinganallur", "Thoraipakkam", "Perungudi", "Guindy", "Nungambakkam", "Mylapore", "Besant Nagar", "Alwarpet", "Kodambakkam", "Porur", "Ambattur", "Avadi", "Tambaram", "Chromepet", "Pallavaram", "Egmore", "Royapettah", "Kilpauk", "Madhya Kailash", "ECR"
];

const nearbyNames: string[] = [
  "Tambaram", "Avadi", "Sriperumbudur", "Kanchipuram", "Chengalpattu", "Mahabalipuram", "Tiruvallur", "Poonamallee", "Ponneri", "Pulicat", "Red Hills", "Gummidipoondi", "Arakkonam", "Walajabad", "Uthiramerur", "Tiruttani", "Vellore", "Puducherry", "Ranipet", "Tindivanam"
];

const localNotes: Record<string, [string, string]> = {
  "T Nagar": ["For wedding groups near T Nagar, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Adyar": ["Families near Adyar usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Anna Nagar": ["Anna Nagar suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Velachery": ["Velachery is a practical base for wedding ceremonies on both sides of the Chennai service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "OMR": ["For wedding groups near OMR, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Sholinganallur": ["Sholinganallur is a practical base for wedding ceremonies on both sides of the Chennai service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Thoraipakkam": ["Thoraipakkam functions often bring family groups arriving from several parts of Chennai.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Perungudi": ["Families near Perungudi usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Guindy": ["Guindy celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Nungambakkam": ["For wedding groups near Nungambakkam, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Mylapore": ["Mylapore is a practical base for wedding ceremonies on both sides of the Chennai service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Besant Nagar": ["For wedding groups near Besant Nagar, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Alwarpet": ["For wedding groups near Alwarpet, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Kodambakkam": ["Kodambakkam functions often bring family groups arriving from several parts of Chennai.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Porur": ["Porur suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Ambattur": ["Ambattur weddings often bring together resort guests, destination groups and families staying close to the Chennai hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Avadi": ["Avadi is popular with intimate and destination wedding groups looking for a distinctly Chennai setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Tambaram": ["For wedding groups near Tambaram, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Chromepet": ["Chromepet is a practical base for wedding ceremonies on both sides of the Chennai service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Pallavaram": ["Pallavaram celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Egmore": ["Egmore is a practical base for wedding ceremonies on both sides of the Chennai service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Royapettah": ["Royapettah functions often bring family groups arriving from several parts of Chennai.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Kilpauk": ["Kilpauk is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Madhya Kailash": ["Madhya Kailash celebrations often combine local family ceremonies with guests arriving from outside Chennai.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "ECR": ["ECR is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Sriperumbudur": ["Sriperumbudur weddings can be covered with advance scheduling from Chennai for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Kanchipuram": ["Kanchipuram functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Chengalpattu": ["Chengalpattu destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Chennai, and a covered styling area is recommended."],
  "Mahabalipuram": ["Mahabalipuram weddings often balance traditional ceremonies with guests travelling between hotels and venues near Chennai.", "We confirm the exact Mahabalipuram location, travel window and tying order before accepting the event schedule."],
  "Tiruvallur": ["Tiruvallur bookings are planned as an outstation service from Chennai with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Poonamallee": ["Poonamallee celebrations are a natural extension of our Chennai service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Ponneri": ["Ponneri destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Chennai, and a covered styling area is recommended."],
  "Pulicat": ["Pulicat functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Red Hills": ["Red Hills is handled as a planned destination assignment from Chennai rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Gummidipoondi": ["Gummidipoondi is handled as a planned destination assignment from Chennai rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Arakkonam": ["Arakkonam destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Chennai, and a covered styling area is recommended."],
  "Walajabad": ["Walajabad weddings can be covered with advance scheduling from Chennai for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Uthiramerur": ["Uthiramerur is handled as a planned destination assignment from Chennai rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Tiruttani": ["Tiruttani offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Chennai team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Vellore": ["Vellore celebrations are a natural extension of our Chennai service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Puducherry": ["Puducherry offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Chennai team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Ranipet": ["Ranipet offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Chennai team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Tindivanam": ["Tindivanam bookings are planned as an outstation service from Chennai with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
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
  const group = internalNames.includes(name) ? "Chennai area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Is a professional wedding safa wala available in ${name}?`, `Yes \u2014 ${summary} Bookings in ${name} are handled as a ${group === "Chennai area" ? "local on-location service" : "pre-planned travelling assignment"}, depending on your date and artist availability.`],
      [`What details do you need for a wedding venue in ${name}?`, `${planning} Share the exact venue pin, the preparation room, and the groom\u2019s ready-by time \u2014 not just the venue name.`],
      [`What groom pagdi style works best for a ${name} wedding?`, `${finish} pairs well with ${palette} tones, though we finalise the actual style around the sherwani, jewellery and the setting itself.`],
      [`How many artists should we plan for a baraat in ${name}?`, `That depends on the number of baraati safas and how much time there is between guest arrival and the procession. In ${name} we always keep the groom\u2019s session separate from the faster family and baraati batches.`],
      [`Can family and baraat safas be in different colours from the groom's?`, `Yes \u2014 for a ${name} wedding, the groom can keep a distinct look while parents, close family and the baraat wear complementary colour groups. Just confirm outfit references before we finalise fabric.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Chennai area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Chennai", intro: "A coordinated on-location service for grooms, families and wedding guests, planned around your ceremony and departure time.", detail: "We shortlist the drape, colour and finishing style before the event, then assign artists according to the number of people who must be ready together.", faqs: [["How many safas can your team tie?", "Team size is matched to your headcount and available preparation window. Share both figures for an accurate plan."], ["Do you come to the hotel or venue?", "Yes. Our artists provide on-location service at hotels, resorts, homes and wedding venues."], ["Can colours match the wedding theme?", "Yes. Send outfit or décor references before the event so we can recommend suitable coordinated shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Chennai", intro: "A more considered, camera-ready pagdi service shaped around the groom's outfit, face profile and wedding aesthetic.", detail: "The groom receives dedicated styling time, with optional kalgi, brooch and fabric detailing kept balanced rather than overdone.", faqs: [["When should the groom's pagdi be tied?", "Usually before the main portrait session and after the sherwani is complete. We align the exact time with your photographer."], ["Can you suggest a pagdi colour?", "Yes. We consider the sherwani, stole, jewellery and overall wedding palette before suggesting a shade."], ["Is the groom styled separately?", "Yes. The groom's session is planned separately from the faster family and baraati sequence."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Chennai", intro: "Fast, consistent safa tying for friends and relatives who need to look coordinated without delaying the procession.", detail: "We divide guests into manageable batches and use an agreed style so the final group feels unified in photographs.", faqs: [["Can you handle a large baraati group?", "Yes. We add artists according to the group size and time available."], ["Should we order extra safas?", "A small quantity buffer is sensible for late additions or fit changes."], ["Can close family wear a different colour?", "Yes. Parents and siblings can use a complementary shade while the wider group stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Chennai", intro: "A travelling safa team built for resort weddings, multi-day functions and destinations away from the city.", detail: "Fabric and accessories are consolidated before departure, and we plan a room-wise schedule with the hotel or planner.", faqs: [["Will you travel to resorts beyond Chennai itself?", "Yes — just share the property details and schedule so we can plan travel and access in advance."], ["Can the same team cover more than one function?", "We can quote a multi-event assignment once we know the dates, styles and any accommodation needs."], ["How far ahead should destination bookings be made?", "A few weeks ahead is ideal for peak dates, so the team is reserved in time."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Chennai", intro: "Pagdi styling for the wider family that stays coordinated, with the groom kept as the clear focal point.", detail: "A consistent fold is used for relatives, and the groom's more detailed treatment is planned as its own session.", faqs: [["Can elders have a softer fit?", "Yes. Tell the artist about comfort needs and we can adjust tension and finish."], ["Can two families use separate colours?", "Yes. Separate but complementary palettes can make each side easy to identify."], ["Do you style children?", "Children can be included when their approximate ages and headcount are shared in advance."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Chennai", intro: "Colour-led safa planning for couples who want the groom and guests aligned with outfits, flowers or the overall décor palette.", detail: "We work from visual references and recommend combinations that remain elegant in daylight, indoor lighting and wedding photography.", faqs: [["Can you match an exact outfit colour?", "We can work toward a close coordinated match; physical fabric may vary slightly from screen colours."], ["Which colours photograph well outdoors?", "Ivory, rust, maroon, saffron, muted pink and deeper jewel tones generally retain definition in outdoor light."], ["Can the groom use a contrast colour?", "Yes. A controlled contrast is often the best way to keep the groom visually distinct."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long does wedding safa tying take in Chennai?", "Timing depends on the fold and group size. Once we know the guest quantity and ready-by time, we recommend the artist count and a practical batch schedule."],
    ["Are the safas supplied with the tying service?", "The fabric and styling requirement are confirmed together. Share whether you need a complete safa package or tying support for fabric already selected by the family."],
  ],
  "groom-pagdi": [
    ["Can the groom pagdi include a kalgi or brooch?", "Yes. Kalgi, brooch, feather and pearl details can be positioned after reviewing the sherwani and jewellery so the final look remains balanced."],
    ["Can we arrange a groom pagdi trial before the wedding?", "A trial or detailed reference consultation can be discussed when the style is highly specific or the groom wants to compare more than one profile."],
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
    ["When should custom safa colours be finalised?", "Finalise the direction after the main outfits are selected and early enough to review fabric under both daylight and indoor lighting."],
    ["Can guest safas use multiple coordinated colours?", "Yes. Two or three controlled shades can identify family groups while still looking cohesive across the full baraat."],
  ],
};

export function getServiceFaqs(service: (typeof services)[number]) {
  return [...service.faqs, ...(serviceFaqAdditions[service.slug] ?? [])] as [string, string][];
}

export const primaryKeywords = [
  "wedding safa wala in Chennai",
  "safa tying service Chennai",
  "groom pagdi Chennai",
  "professional pagdi artist in Chennai",
  "safa tying specialist in Chennai",
  "groom turban specialist in Chennai",
  "groom safa tying in Chennai",
  "safa tying for barati in Chennai",
  "premium pagdi tying service in Chennai",
  "safa tying service in Chennai",
  "best safa tying service in Chennai",
  "onsite pagdi tying in Chennai",
  "pagri baandhne ki service",
  "turban styling artist",
  "easy safa tying",
  "wedding pagri tying charges",
  "dulha safa tying at home",
  "mehndi turban tying",
  "dulha safa tying artist booking",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
