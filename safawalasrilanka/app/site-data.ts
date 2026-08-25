export type LocationItem = {
  slug: string;
  name: string;
  group: "Sri Lanka area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Colombo 1", "Colombo 2", "Colombo 3", "Colombo 4", "Colombo 5", "Colombo 6", "Colombo 7", "Colombo 8", "Colombo 9", "Colombo 10", "Colombo 11", "Colombo 12", "Colombo 13", "Colombo 14", "Colombo 15"
];

const nearbyNames: string[] = [
  "Kandy City", "Peradeniya", "Katugastota", "Kundasale", "Ampitiya", "Galle Fort", "Unawatuna", "Hikkaduwa", "Koggala", "Wakwella", "Negombo Town", "Kochchikade", "Poruthota", "Dalupotha", "Ella Town", "Kithalella", "Passara Road", "Demodara"
];

const localNotes: Record<string, [string, string]> = {
  "Colombo 1": ["Colombo 1 wedding schedules can include home rituals followed by a venue entry elsewhere in Sri Lanka.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Colombo 2": ["Colombo 2-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Colombo 3": ["Colombo 3 wedding schedules can include home rituals followed by a venue entry elsewhere in Sri Lanka.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Colombo 4": ["Colombo 4 is popular with intimate and destination wedding groups looking for a distinctly Sri Lanka setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Colombo 5": ["Colombo 5 is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Colombo 6": ["Colombo 6 celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Colombo 7": ["Colombo 7 celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Colombo 8": ["Colombo 8 functions often bring family groups arriving from several parts of Sri Lanka.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Colombo 9": ["Colombo 9 celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Colombo 10": ["Colombo 10 wedding schedules can include home rituals followed by a venue entry elsewhere in Sri Lanka.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Colombo 11": ["Colombo 11 is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Colombo 12": ["Colombo 12 celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Colombo 13": ["Colombo 13 wedding schedules can include home rituals followed by a venue entry elsewhere in Sri Lanka.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Colombo 14": ["Colombo 14 functions often bring family groups arriving from several parts of Sri Lanka.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Colombo 15": ["Colombo 15 wedding schedules can include home rituals followed by a venue entry elsewhere in Sri Lanka.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Kandy City": ["Kandy City offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Sri Lanka team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Peradeniya": ["Peradeniya offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Sri Lanka team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Katugastota": ["Katugastota celebrations are a natural extension of our Sri Lanka service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Kundasale": ["Kundasale destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Sri Lanka, and a covered styling area is recommended."],
  "Ampitiya": ["Ampitiya bookings are planned as an outstation service from Sri Lanka with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Galle Fort": ["Galle Fort bookings are planned as an outstation service from Sri Lanka with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Unawatuna": ["Unawatuna functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Hikkaduwa": ["Hikkaduwa weddings can be covered with advance scheduling from Sri Lanka for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Koggala": ["Koggala bookings are planned as an outstation service from Sri Lanka with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Wakwella": ["Wakwella bookings are planned as an outstation service from Sri Lanka with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Negombo Town": ["Negombo Town offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Sri Lanka team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Kochchikade": ["Kochchikade weddings often balance traditional ceremonies with guests travelling between hotels and venues near Sri Lanka.", "We confirm the exact Kochchikade location, travel window and tying order before accepting the event schedule."],
  "Poruthota": ["Poruthota weddings often balance traditional ceremonies with guests travelling between hotels and venues near Sri Lanka.", "We confirm the exact Poruthota location, travel window and tying order before accepting the event schedule."],
  "Dalupotha": ["Dalupotha offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Sri Lanka team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Ella Town": ["Ella Town is handled as a planned destination assignment from Sri Lanka rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Kithalella": ["Kithalella weddings often balance traditional ceremonies with guests travelling between hotels and venues near Sri Lanka.", "We confirm the exact Kithalella location, travel window and tying order before accepting the event schedule."],
  "Passara Road": ["Passara Road is handled as a planned destination assignment from Sri Lanka rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Demodara": ["Demodara offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Sri Lanka team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
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
  const group = internalNames.includes(name) ? "Sri Lanka area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Can I book a professional wedding safa wala in ${name}?`, `Yes. ${summary} We accept ${name} bookings as a ${group === "Sri Lanka area" ? "local on-location service" : "pre-planned travelling assignment"}, subject to the wedding date and artist availability.`],
      [`What should we confirm for a ${name} wedding venue?`, `${planning} Please send the exact venue pin, preparation-room details and the groom\u2019s ready-by time rather than only the venue name.`],
      [`Which groom pagdi style suits a wedding in ${name}?`, `${finish} works particularly well with ${palette} palettes, although the final groom pagdi is selected from the sherwani, face profile, jewellery and ceremony setting.`],
      [`How many safa artists are needed for a ${name} baraat?`, `The team size depends on the final number of baraati safas and the time between guest arrival and procession departure. For ${name}, we separate the groom\u2019s detailed session from faster family and baraati batches.`],
      [`Can you provide family pagdis and baraati safas in different colours?`, `Yes. For a ${name} celebration, the groom can remain distinctive while parents, close family and the wider baraat use complementary colour groups. Share outfit references before fabric is finalised.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Sri Lanka area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Sri Lanka", intro: "A coordinated on-location service for grooms, families and wedding guests, planned around your ceremony and departure time.", detail: "We shortlist the drape, colour and finishing style before the event, then assign artists according to the number of people who must be ready together.", faqs: [["What's the maximum group size you can handle?", "We scale the artist count to your final headcount and the time window you give us — share both for an accurate plan."], ["Will your team travel to our venue?", "Yes, every booking is on-location — hotels, resorts, homes and wedding venues are all covered."], ["Can the safa colours be matched to our decor?", "Yes, share outfit or décor photos ahead of time and we'll recommend shades that coordinate well."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Sri Lanka", intro: "A dedicated groom pagdi appointment, styled around the sherwani, face shape and the day's overall look.", detail: "The session is unhurried, with kalgi, brooch and fabric accents added only where they support the finished profile.", faqs: [["What's the right time to style the groom's pagdi?", "We usually finish it right after the sherwani is on and before portraits begin — we'll confirm the exact slot with your photographer."], ["Can you help pick the pagdi colour?", "Yes, we look at the sherwani, stole and jewellery together with the wedding palette before recommending a shade."], ["Does the groom get his own separate session?", "Always. The groom is styled on his own timeline, apart from the quicker family and baraati rounds."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Sri Lanka", intro: "A quick, repeatable safa tying process for the wider baraat, built to keep the procession on schedule.", detail: "Guests move through in organised batches, all finished to the same fold so the group reads as one in photos.", faqs: [["What's your capacity for a big baraat?", "We scale the artist team to match your group size and the time you have available."], ["Should extra safas be kept as backup?", "It's a good idea — a small buffer handles late guests or fit changes smoothly."], ["Can close family stand out with a different colour?", "Yes, a complementary shade for parents and siblings works well against a uniform wider group."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Sri Lanka", intro: "A travelling safa team built for resort weddings, multi-day functions and destinations away from the city.", detail: "Fabric and accessories are consolidated before departure, and we plan a room-wise schedule with the hotel or planner.", faqs: [["Do you work at resorts outside central Sri Lanka?", "Yes. Share the property and event schedule so travel and access can be planned."], ["Can the team stay for multiple functions?", "Multi-event assignments can be quoted after reviewing dates, styles and accommodation needs."], ["How early should we book?", "For peak wedding dates, reserving the team several weeks ahead is recommended."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Sri Lanka", intro: "Coordinated pagdi styling for fathers, brothers and close relatives, while the groom's look stays clearly distinct.", detail: "We use two linked levels — a signature fold for the groom and a simpler repeatable one for the rest of the family.", faqs: [["Can elders have a softer fit?", "Yes. Tell the artist about comfort needs and we can adjust tension and finish."], ["Can two families use separate colours?", "Yes. Separate but complementary palettes can make each side easy to identify."], ["Do you style children?", "Children can be included when their approximate ages and headcount are shared in advance."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Sri Lanka", intro: "A colour-first approach to safa planning, matched against outfits, décor and floral choices already made.", detail: "Reference images guide the palette, and we suggest combinations that hold up across daylight, indoor light and photos.", faqs: [["Is it possible to match our outfit colour precisely?", "We get as close as possible, though fabric tone can shift slightly from what's seen on screen."], ["Which shades work best for outdoor wedding photography?", "Ivory, rust, maroon, saffron, muted pink and richer jewel tones tend to stay defined in daylight."], ["Should the groom's colour contrast with the group?", "Often yes — a deliberate contrast is a reliable way to make him stand out."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How much time should we set aside for safa tying in Sri Lanka?", "It depends on the fold style and group size — once we know your headcount and ready-by time we'll give a realistic batch schedule."],
    ["Does the package include the safa fabric itself?", "We confirm fabric and styling together — let us know if you need the complete safa supplied or just tying support for fabric you already have."],
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
    ["Do destination bookings include artist travel planning?", "Yes. The quote accounts for the venue route, reporting time, access, required arrival buffer and, where necessary, artist accommodation."],
    ["Can you coordinate directly with our hotel or wedding planner?", "Yes. One planner or hotel contact can confirm the preparation room, guest sequence and property access before the team arrives."],
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
  "wedding safa wala in Sri Lanka",
  "safa tying service Sri Lanka",
  "groom pagdi Sri Lanka",
  "pagdi tying for wedding guests in Sri Lanka",
  "expert pagdi tying in Sri Lanka",
  "turban tying booking in Sri Lanka",
  "pagdi tying for family in Sri Lanka",
  "premium groom turban tying in Sri Lanka",
  "turban tying team in Sri Lanka",
  "professional turban tying in Sri Lanka",
  "pagdi bandhane ki service in Sri Lanka",
  "turban tying for barati in Sri Lanka",
  "pagri accessory fitting",
  "sangeet safa tying",
  "pagdi tying group",
  "groom safa tying for guests",
  "dulha turban rental and tying",
  "pagri tying steps",
  "baraat pagri tying booking",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
