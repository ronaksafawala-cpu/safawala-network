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
  "Manjalpur": ["Manjalpur wedding schedules can include home rituals followed by a venue entry elsewhere in Vadodara.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Bhayli": ["Bhayli wedding schedules can include home rituals followed by a venue entry elsewhere in Vadodara.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Gotri": ["Gotri is popular with intimate and destination wedding groups looking for a distinctly Vadodara setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Akota": ["Families near Akota usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Alkapuri": ["Alkapuri functions often bring family groups arriving from several parts of Vadodara.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Karelibaug": ["Karelibaug is a practical base for wedding ceremonies on both sides of the Vadodara service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Sayajigunj": ["Sayajigunj is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Fatehgunj": ["Fatehgunj-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Makarpura": ["Makarpura weddings often bring together resort guests, destination groups and families staying close to the Vadodara hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Harni": ["Harni is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Sama": ["Sama-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Waghodia Road": ["Waghodia Road wedding schedules can include home rituals followed by a venue entry elsewhere in Vadodara.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Vasna": ["Vasna is a practical base for wedding ceremonies on both sides of the Vadodara service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Tarsali": ["Tarsali-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Atladara": ["Atladara is a practical base for wedding ceremonies on both sides of the Vadodara service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Sevasi": ["Sevasi is a practical base for wedding ceremonies on both sides of the Vadodara service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Chhani": ["Chhani is a practical base for wedding ceremonies on both sides of the Vadodara service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Nizampura": ["Nizampura wedding schedules can include home rituals followed by a venue entry elsewhere in Vadodara.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Gorwa": ["Gorwa functions often bring family groups arriving from several parts of Vadodara.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Subhanpura": ["Subhanpura is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Ajwa Road": ["For wedding groups near Ajwa Road, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Old Padra Road": ["Old Padra Road suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Vasna-Bhayli Road": ["Vasna-Bhayli Road is popular with intimate and destination wedding groups looking for a distinctly Vadodara setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Kalali": ["Kalali suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Bill": ["Bill is a practical base for wedding ceremonies on both sides of the Vadodara service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Sama-Savli Road": ["Sama-Savli Road is popular with intimate and destination wedding groups looking for a distinctly Vadodara setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Gotri-Sevasi Road": ["Gotri-Sevasi Road celebrations often combine local family ceremonies with guests arriving from outside Vadodara.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Anand": ["Anand bookings are planned as an outstation service from Vadodara with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Nadiad": ["Nadiad functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Bharuch": ["Bharuch offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Vadodara team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Ankleshwar": ["Ankleshwar bookings are planned as an outstation service from Vadodara with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Ahmedabad": ["Ahmedabad bookings are planned as an outstation service from Vadodara with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Gandhinagar": ["Gandhinagar offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Vadodara team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Godhra": ["Godhra offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Vadodara team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Halol": ["Halol weddings often balance traditional ceremonies with guests travelling between hotels and venues near Vadodara.", "We confirm the exact Halol location, travel window and tying order before accepting the event schedule."],
  "Dahod": ["Dahod weddings can be covered with advance scheduling from Vadodara for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Chhota Udaipur": ["Chhota Udaipur functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Padra": ["Padra weddings can be covered with advance scheduling from Vadodara for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Dabhoi": ["Dabhoi bookings are planned as an outstation service from Vadodara with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Karjan": ["Karjan is handled as a planned destination assignment from Vadodara rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Savli": ["Savli destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Vadodara, and a covered styling area is recommended."],
  "Waghodia": ["Waghodia bookings are planned as an outstation service from Vadodara with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Kalol": ["Kalol is handled as a planned destination assignment from Vadodara rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Petlad": ["Petlad celebrations are a natural extension of our Vadodara service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Borsad": ["Borsad functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Khambhat": ["Khambhat destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Vadodara, and a covered styling area is recommended."],
  "Jambusar": ["Jambusar weddings often balance traditional ceremonies with guests travelling between hotels and venues near Vadodara.", "We confirm the exact Jambusar location, travel window and tying order before accepting the event schedule."],
  "Umreth": ["Umreth celebrations are a natural extension of our Vadodara service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Kapadvanj": ["Kapadvanj functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
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
      [`Is a professional wedding safa wala available in ${name}?`, `Yes \u2014 ${summary} Bookings in ${name} are handled as a ${group === "Vadodara area" ? "local on-location service" : "pre-planned travelling assignment"}, depending on your date and artist availability.`],
      [`What details do you need for a wedding venue in ${name}?`, `${planning} Share the exact venue pin, the preparation room, and the groom\u2019s ready-by time \u2014 not just the venue name.`],
      [`What groom pagdi style works best for a ${name} wedding?`, `${finish} pairs well with ${palette} tones, though we finalise the actual style around the sherwani, jewellery and the setting itself.`],
      [`How many artists should we plan for a baraat in ${name}?`, `That depends on the number of baraati safas and how much time there is between guest arrival and the procession. In ${name} we always keep the groom\u2019s session separate from the faster family and baraati batches.`],
      [`Can family and baraat safas be in different colours from the groom's?`, `Yes \u2014 for a ${name} wedding, the groom can keep a distinct look while parents, close family and the baraat wear complementary colour groups. Just confirm outfit references before we finalise fabric.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Vadodara area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Vadodara", intro: "A coordinated on-location service for grooms, families and wedding guests, planned around your ceremony and departure time.", detail: "We shortlist the drape, colour and finishing style before the event, then assign artists according to the number of people who must be ready together.", faqs: [["How many safas can your team tie?", "Team size is matched to your headcount and available preparation window. Share both figures for an accurate plan."], ["Do you come to the hotel or venue?", "Yes. Our artists provide on-location service at hotels, resorts, homes and wedding venues."], ["Can colours match the wedding theme?", "Yes. Send outfit or décor references before the event so we can recommend suitable coordinated shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Vadodara", intro: "A more considered, camera-ready pagdi service shaped around the groom's outfit, face profile and wedding aesthetic.", detail: "The groom receives dedicated styling time, with optional kalgi, brooch and fabric detailing kept balanced rather than overdone.", faqs: [["What's the right time to style the groom's pagdi?", "We usually finish it right after the sherwani is on and before portraits begin — we'll confirm the exact slot with your photographer."], ["Can you help pick the pagdi colour?", "Yes, we look at the sherwani, stole and jewellery together with the wedding palette before recommending a shade."], ["Does the groom get his own separate session?", "Always. The groom is styled on his own timeline, apart from the quicker family and baraati rounds."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Vadodara", intro: "A quick, repeatable safa tying process for the wider baraat, built to keep the procession on schedule.", detail: "Guests move through in organised batches, all finished to the same fold so the group reads as one in photos.", faqs: [["Is there a group size you can't handle for baraati safas?", "Not really — we bring on more artists as the group grows and time allows."], ["Is it worth ordering a few spare safas?", "Yes, a small buffer covers late arrivals or last-minute fit issues."], ["Can the close family's safas be a different shade?", "Yes, parents and siblings can wear a complementary colour while everyone else stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Vadodara", intro: "Destination-ready safa styling for resorts and multi-function weddings that span more than one day.", detail: "We work directly with the venue or planner to confirm access, then build a tying sequence across rooms and functions.", faqs: [["Will you travel to resorts beyond Vadodara itself?", "Yes — just share the property details and schedule so we can plan travel and access in advance."], ["Can the same team cover more than one function?", "We can quote a multi-event assignment once we know the dates, styles and any accommodation needs."], ["How far ahead should destination bookings be made?", "A few weeks ahead is ideal for peak dates, so the team is reserved in time."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Vadodara", intro: "Coordinated pagdi styling for fathers, brothers and close relatives, while the groom's look stays clearly distinct.", detail: "We use two linked levels — a signature fold for the groom and a simpler repeatable one for the rest of the family.", faqs: [["Can elders have a softer fit?", "Yes. Tell the artist about comfort needs and we can adjust tension and finish."], ["Can two families use separate colours?", "Yes. Separate but complementary palettes can make each side easy to identify."], ["Do you style children?", "Children can be included when their approximate ages and headcount are shared in advance."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Vadodara", intro: "Custom colour planning for the groom and wedding party, built around your outfits and decor rather than a fixed catalogue.", detail: "We review your references first, then propose shades that stay elegant across different lighting and camera conditions.", faqs: [["Can you match an exact outfit colour?", "We can work toward a close coordinated match; physical fabric may vary slightly from screen colours."], ["Which colours photograph well outdoors?", "Ivory, rust, maroon, saffron, muted pink and deeper jewel tones generally retain definition in outdoor light."], ["Can the groom use a contrast colour?", "Yes. A controlled contrast is often the best way to keep the groom visually distinct."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long does wedding safa tying take in Vadodara?", "Timing depends on the fold and group size. Once we know the guest quantity and ready-by time, we recommend the artist count and a practical batch schedule."],
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
  "wedding safa wala in Vadodara",
  "safa tying service Vadodara",
  "groom pagdi Vadodara",
  "safa bandhne wale in Vadodara",
  "groom pagdi tying in Vadodara",
  "on site safa tying in Vadodara",
  "royal wedding turban service in Vadodara",
  "safa bandhne wala near me in Vadodara",
  "turban tying cost in Vadodara",
  "book pagdi artist in Vadodara",
  "dulha turban tying near me in Vadodara",
  "onsite pagdi tying in Vadodara",
  "destination wedding safa tying",
  "pagri tying hire",
  "groom pagdi tying service provider",
  "dulha pagdi tying for guests",
  "baraat safa tying for barati",
  "groom safa tying for guests",
  "event safa tying",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
