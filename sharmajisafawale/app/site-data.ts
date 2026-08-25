export type LocationItem = {
  slug: string;
  name: string;
  group: "Vadodara area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Manjalpur", "Bhayli", "Gotri", "Akota", "Alkapuri", "Karelibaug", "Sayajigunj", "Fatehgunj", "Makarpura", "Harni", "Sama", "Waghodia Road", "Vasna", "Tarsali", "Atladara", "Sevasi", "Chhani", "Nizampura", "Gorwa", "Subhanpura", "Ajwa Road", "Old Padra Road", "Vasna-Bhayli Road", "Kalali", "Bill", "Sama-Savli Road", "Gotri-Sevasi Road"
];

const nearbyNames: string[] = [
  "Anand", "Nadiad", "Bharuch", "Ankleshwar", "Ahmedabad", "Gandhinagar", "Godhra", "Halol", "Dahod", "Chhota Udaipur", "Padra", "Dabhoi", "Karjan", "Savli", "Waghodia", "Kalol", "Petlad", "Borsad", "Khambhat", "Jambusar", "Umreth", "Kapadvanj"
];

const localNotes: Record<string, [string, string]> = {
  "Manjalpur": ["Manjalpur celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Bhayli": ["Bhayli wedding schedules can include home rituals followed by a venue entry elsewhere in Vadodara.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Gotri": ["Gotri is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Akota": ["Akota-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Alkapuri": ["Alkapuri is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Karelibaug": ["Karelibaug wedding schedules can include home rituals followed by a venue entry elsewhere in Vadodara.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Sayajigunj": ["Sayajigunj weddings often bring together resort guests, destination groups and families staying close to the Vadodara hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Fatehgunj": ["Fatehgunj celebrations often combine local family ceremonies with guests arriving from outside Vadodara.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Makarpura": ["For wedding groups near Makarpura, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Harni": ["Harni celebrations often combine local family ceremonies with guests arriving from outside Vadodara.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Sama": ["Sama functions often bring family groups arriving from several parts of Vadodara.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Waghodia Road": ["For wedding groups near Waghodia Road, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Vasna": ["Vasna weddings often bring together resort guests, destination groups and families staying close to the Vadodara hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Tarsali": ["Tarsali is popular with intimate and destination wedding groups looking for a distinctly Vadodara setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Atladara": ["Atladara is popular with intimate and destination wedding groups looking for a distinctly Vadodara setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Sevasi": ["Sevasi is a practical base for wedding ceremonies on both sides of the Vadodara service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Chhani": ["Chhani is a practical base for wedding ceremonies on both sides of the Vadodara service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Nizampura": ["Nizampura functions often bring family groups arriving from several parts of Vadodara.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Gorwa": ["Gorwa functions often bring family groups arriving from several parts of Vadodara.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Subhanpura": ["Subhanpura wedding schedules can include home rituals followed by a venue entry elsewhere in Vadodara.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Ajwa Road": ["Ajwa Road celebrations often combine local family ceremonies with guests arriving from outside Vadodara.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Old Padra Road": ["Old Padra Road weddings often bring together resort guests, destination groups and families staying close to the Vadodara hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Vasna-Bhayli Road": ["Vasna-Bhayli Road wedding schedules can include home rituals followed by a venue entry elsewhere in Vadodara.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Kalali": ["Kalali functions often bring family groups arriving from several parts of Vadodara.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Bill": ["Bill is a practical base for wedding ceremonies on both sides of the Vadodara service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Sama-Savli Road": ["Sama-Savli Road celebrations often combine local family ceremonies with guests arriving from outside Vadodara.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Gotri-Sevasi Road": ["Gotri-Sevasi Road-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Anand": ["Anand bookings are planned as an outstation service from Vadodara with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Nadiad": ["Nadiad destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Vadodara, and a covered styling area is recommended."],
  "Bharuch": ["Bharuch weddings can be covered with advance scheduling from Vadodara for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Ankleshwar": ["Ankleshwar is handled as a planned destination assignment from Vadodara rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Ahmedabad": ["Ahmedabad weddings often balance traditional ceremonies with guests travelling between hotels and venues near Vadodara.", "We confirm the exact Ahmedabad location, travel window and tying order before accepting the event schedule."],
  "Gandhinagar": ["Gandhinagar celebrations are a natural extension of our Vadodara service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Godhra": ["Godhra offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Vadodara team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Halol": ["Halol weddings often balance traditional ceremonies with guests travelling between hotels and venues near Vadodara.", "We confirm the exact Halol location, travel window and tying order before accepting the event schedule."],
  "Dahod": ["Dahod is handled as a planned destination assignment from Vadodara rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Chhota Udaipur": ["Chhota Udaipur weddings can be covered with advance scheduling from Vadodara for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Padra": ["Padra is handled as a planned destination assignment from Vadodara rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Dabhoi": ["Dabhoi offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Vadodara team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Karjan": ["Karjan is handled as a planned destination assignment from Vadodara rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Savli": ["Savli bookings are planned as an outstation service from Vadodara with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Waghodia": ["Waghodia functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Kalol": ["Kalol is handled as a planned destination assignment from Vadodara rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Petlad": ["Petlad celebrations are a natural extension of our Vadodara service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Borsad": ["Borsad destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Vadodara, and a covered styling area is recommended."],
  "Khambhat": ["Khambhat offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Vadodara team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Jambusar": ["Jambusar bookings are planned as an outstation service from Vadodara with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Umreth": ["Umreth is handled as a planned destination assignment from Vadodara rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Kapadvanj": ["Kapadvanj weddings often balance traditional ceremonies with guests travelling between hotels and venues near Vadodara.", "We confirm the exact Kapadvanj location, travel window and tying order before accepting the event schedule."],
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
  const group = internalNames.includes(name) ? "Vadodara area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Can I book a professional wedding safa wala in ${name}?`, `Yes. ${summary} We accept ${name} bookings as a ${group === "Vadodara area" ? "local on-location service" : "pre-planned travelling assignment"}, subject to the wedding date and artist availability.`],
      [`What should we confirm for a ${name} wedding venue?`, `${planning} Please send the exact venue pin, preparation-room details and the groom\u2019s ready-by time rather than only the venue name.`],
      [`Which groom pagdi style suits a wedding in ${name}?`, `${finish} works particularly well with ${palette} palettes, although the final groom pagdi is selected from the sherwani, face profile, jewellery and ceremony setting.`],
      [`How many safa artists are needed for a ${name} baraat?`, `The team size depends on the final number of baraati safas and the time between guest arrival and procession departure. For ${name}, we separate the groom\u2019s detailed session from faster family and baraati batches.`],
      [`Can you provide family pagdis and baraati safas in different colours?`, `Yes. For a ${name} celebration, the groom can remain distinctive while parents, close family and the wider baraat use complementary colour groups. Share outfit references before fabric is finalised.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Vadodara area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in India", intro: "A dependable safa tying appointment for the whole wedding party, timed to your ceremony and photography schedule.", detail: "We confirm the drape and colour direction ahead of the event, then bring enough artists to keep every batch moving without delay.", faqs: [["What's the maximum group size you can handle?", "We scale the artist count to your final headcount and the time window you give us — share both for an accurate plan."], ["Will your team travel to our venue?", "Yes, every booking is on-location — hotels, resorts, homes and wedding venues are all covered."], ["Can the safa colours be matched to our decor?", "Yes, share outfit or décor photos ahead of time and we'll recommend shades that coordinate well."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in India", intro: "Camera-ready pagdi styling built specifically for the groom, separate from the faster family and guest sessions.", detail: "We shape the fold around the outfit and jewellery first, then finish with accessories that stay balanced rather than heavy.", faqs: [["What's the right time to style the groom's pagdi?", "We usually finish it right after the sherwani is on and before portraits begin — we'll confirm the exact slot with your photographer."], ["Can you help pick the pagdi colour?", "Yes, we look at the sherwani, stole and jewellery together with the wedding palette before recommending a shade."], ["Does the groom get his own separate session?", "Always. The groom is styled on his own timeline, apart from the quicker family and baraati rounds."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in India", intro: "Coordinated baraati safa tying that keeps a large guest list moving without holding up the departure.", detail: "One agreed style is used across the group, with batches sized to the time available before the baraat leaves.", faqs: [["Can you handle a large baraati group?", "Yes. We add artists according to the group size and time available."], ["Should we order extra safas?", "A small quantity buffer is sensible for late additions or fit changes."], ["Can close family wear a different colour?", "Yes. Parents and siblings can use a complementary shade while the wider group stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for India", intro: "Destination-ready safa styling for resorts and multi-function weddings that span more than one day.", detail: "We work directly with the venue or planner to confirm access, then build a tying sequence across rooms and functions.", faqs: [["Do you cover resorts located away from India?", "Yes, we just need the property and event schedule to plan the travel and access side."], ["Is a multi-day, multi-function booking possible with one team?", "Yes — share the dates, styles and accommodation needs and we'll quote it as one assignment."], ["What's the recommended lead time for booking?", "For busy wedding dates, book several weeks in advance to secure the team."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in India", intro: "A family-wide pagdi plan that keeps parents and relatives visually aligned without competing with the groom.", detail: "Close family receive a shared, repeatable style while the groom's session remains separately detailed.", faqs: [["Is a more comfortable fit available for older guests?", "Definitely — mention any comfort needs and the artist will adjust accordingly."], ["Can both families be styled in different palettes?", "Yes, complementary-but-distinct colours help tell the two sides apart."], ["Do kids get styled too?", "Yes, share their rough ages and count ahead of time so we can plan for them."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in India", intro: "Custom colour planning for the groom and wedding party, built around your outfits and decor rather than a fixed catalogue.", detail: "We review your references first, then propose shades that stay elegant across different lighting and camera conditions.", faqs: [["Can you match an exact outfit colour?", "We can work toward a close coordinated match; physical fabric may vary slightly from screen colours."], ["Which colours photograph well outdoors?", "Ivory, rust, maroon, saffron, muted pink and deeper jewel tones generally retain definition in outdoor light."], ["Can the groom use a contrast colour?", "Yes. A controlled contrast is often the best way to keep the groom visually distinct."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How much time should we set aside for safa tying in India?", "It depends on the fold style and group size — once we know your headcount and ready-by time we'll give a realistic batch schedule."],
    ["Does the package include the safa fabric itself?", "We confirm fabric and styling together — let us know if you need the complete safa supplied or just tying support for fabric you already have."],
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
  "family safa wala",
  "trusted groom pagdi service",
  "wedding safa rental",
  "pagdi tying vendor",
  "wedding turban specialist",
  "professional wedding pagdi service",
  "wedding safa tying",
  "pagdi tying service",
  "traditional safa tying",
  "dulha turban tying service",
  "live turban tying service",
  "pagdi tying artist booking",
  "classic pagri tying",
  "groom pagri tying for guests",
  "groom pagdi tying hire",
  "groom pagdi tying booking",
  "dulha pagri rental and tying",
  "groom pagri tying team",
  "wedding safa tying service provider",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
