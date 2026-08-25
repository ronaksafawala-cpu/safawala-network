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
  "Bhayli": ["Bhayli celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Gotri": ["Gotri weddings often bring together resort guests, destination groups and families staying close to the Vadodara hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Akota": ["Akota celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Alkapuri": ["Alkapuri suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Karelibaug": ["Families near Karelibaug usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Sayajigunj": ["For wedding groups near Sayajigunj, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Fatehgunj": ["Fatehgunj suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Makarpura": ["Makarpura weddings often bring together resort guests, destination groups and families staying close to the Vadodara hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Harni": ["For wedding groups near Harni, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Sama": ["Sama suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Waghodia Road": ["Waghodia Road functions often bring family groups arriving from several parts of Vadodara.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Vasna": ["Vasna celebrations often combine local family ceremonies with guests arriving from outside Vadodara.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Tarsali": ["Tarsali is popular with intimate and destination wedding groups looking for a distinctly Vadodara setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Atladara": ["Families near Atladara usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Sevasi": ["Families near Sevasi usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Chhani": ["For wedding groups near Chhani, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Nizampura": ["Nizampura is a practical base for wedding ceremonies on both sides of the Vadodara service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Gorwa": ["Gorwa functions often bring family groups arriving from several parts of Vadodara.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Subhanpura": ["Families near Subhanpura usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Ajwa Road": ["Ajwa Road weddings often bring together resort guests, destination groups and families staying close to the Vadodara hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Old Padra Road": ["For wedding groups near Old Padra Road, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Vasna-Bhayli Road": ["Vasna-Bhayli Road is popular with intimate and destination wedding groups looking for a distinctly Vadodara setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Kalali": ["Kalali-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Bill": ["For wedding groups near Bill, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Sama-Savli Road": ["Sama-Savli Road suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Gotri-Sevasi Road": ["Gotri-Sevasi Road wedding schedules can include home rituals followed by a venue entry elsewhere in Vadodara.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Anand": ["Anand functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Nadiad": ["Nadiad bookings are planned as an outstation service from Vadodara with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Bharuch": ["Bharuch offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Vadodara team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Ankleshwar": ["Ankleshwar offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Vadodara team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Ahmedabad": ["Ahmedabad offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Vadodara team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Gandhinagar": ["Gandhinagar is handled as a planned destination assignment from Vadodara rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Godhra": ["Godhra destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Vadodara, and a covered styling area is recommended."],
  "Halol": ["Halol weddings often balance traditional ceremonies with guests travelling between hotels and venues near Vadodara.", "We confirm the exact Halol location, travel window and tying order before accepting the event schedule."],
  "Dahod": ["Dahod functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Chhota Udaipur": ["Chhota Udaipur celebrations are a natural extension of our Vadodara service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Padra": ["Padra weddings can be covered with advance scheduling from Vadodara for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Dabhoi": ["Dabhoi weddings often balance traditional ceremonies with guests travelling between hotels and venues near Vadodara.", "We confirm the exact Dabhoi location, travel window and tying order before accepting the event schedule."],
  "Karjan": ["Karjan is handled as a planned destination assignment from Vadodara rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Savli": ["Savli weddings often balance traditional ceremonies with guests travelling between hotels and venues near Vadodara.", "We confirm the exact Savli location, travel window and tying order before accepting the event schedule."],
  "Waghodia": ["Waghodia weddings often balance traditional ceremonies with guests travelling between hotels and venues near Vadodara.", "We confirm the exact Waghodia location, travel window and tying order before accepting the event schedule."],
  "Kalol": ["Kalol weddings can be covered with advance scheduling from Vadodara for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Petlad": ["Petlad bookings are planned as an outstation service from Vadodara with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Borsad": ["Borsad offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Vadodara team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Khambhat": ["Khambhat functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Jambusar": ["Jambusar bookings are planned as an outstation service from Vadodara with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Umreth": ["Umreth destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Vadodara, and a covered styling area is recommended."],
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
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in India", intro: "A dependable safa tying appointment for the whole wedding party, timed to your ceremony and photography schedule.", detail: "We confirm the drape and colour direction ahead of the event, then bring enough artists to keep every batch moving without delay.", faqs: [["How many safas can your team tie?", "Team size is matched to your headcount and available preparation window. Share both figures for an accurate plan."], ["Do you come to the hotel or venue?", "Yes. Our artists provide on-location service at hotels, resorts, homes and wedding venues."], ["Can colours match the wedding theme?", "Yes. Send outfit or décor references before the event so we can recommend suitable coordinated shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in India", intro: "Camera-ready pagdi styling built specifically for the groom, separate from the faster family and guest sessions.", detail: "We shape the fold around the outfit and jewellery first, then finish with accessories that stay balanced rather than heavy.", faqs: [["When should the groom's pagdi be tied?", "Usually before the main portrait session and after the sherwani is complete. We align the exact time with your photographer."], ["Can you suggest a pagdi colour?", "Yes. We consider the sherwani, stole, jewellery and overall wedding palette before suggesting a shade."], ["Is the groom styled separately?", "Yes. The groom's session is planned separately from the faster family and baraati sequence."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in India", intro: "Coordinated baraati safa tying that keeps a large guest list moving without holding up the departure.", detail: "One agreed style is used across the group, with batches sized to the time available before the baraat leaves.", faqs: [["Is there a group size you can't handle for baraati safas?", "Not really — we bring on more artists as the group grows and time allows."], ["Is it worth ordering a few spare safas?", "Yes, a small buffer covers late arrivals or last-minute fit issues."], ["Can the close family's safas be a different shade?", "Yes, parents and siblings can wear a complementary colour while everyone else stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for India", intro: "Destination-ready safa styling for resorts and multi-function weddings that span more than one day.", detail: "We work directly with the venue or planner to confirm access, then build a tying sequence across rooms and functions.", faqs: [["Will you travel to resorts beyond India itself?", "Yes — just share the property details and schedule so we can plan travel and access in advance."], ["Can the same team cover more than one function?", "We can quote a multi-event assignment once we know the dates, styles and any accommodation needs."], ["How far ahead should destination bookings be made?", "A few weeks ahead is ideal for peak dates, so the team is reserved in time."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in India", intro: "A family-wide pagdi plan that keeps parents and relatives visually aligned without competing with the groom.", detail: "Close family receive a shared, repeatable style while the groom's session remains separately detailed.", faqs: [["Can the fit be gentler for elderly family members?", "Yes, just flag any comfort concerns to the artist and we'll adjust the tension and finish."], ["Can each side of the family wear a different colour?", "Yes — two complementary palettes work well and help distinguish each family group."], ["Are children included in the styling?", "Yes, just let us know approximate ages and how many in advance."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in India", intro: "Custom colour planning for the groom and wedding party, built around your outfits and decor rather than a fixed catalogue.", detail: "We review your references first, then propose shades that stay elegant across different lighting and camera conditions.", faqs: [["Can you get an exact colour match to our outfits?", "We aim for a close coordinated match, though fabric can look slightly different from a screen reference."], ["What colours hold up best in outdoor photos?", "Ivory, rust, maroon, saffron, muted pink and deep jewel tones tend to photograph well outdoors."], ["Should the groom wear a contrasting colour?", "A controlled contrast often works best to keep him visually distinct from the group."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long does wedding safa tying take in India?", "Timing depends on the fold and group size. Once we know the guest quantity and ready-by time, we recommend the artist count and a practical batch schedule."],
    ["Are the safas supplied with the tying service?", "The fabric and styling requirement are confirmed together. Share whether you need a complete safa package or tying support for fabric already selected by the family."],
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
    ["Is artist travel factored into the destination quote?", "Yes — route, reporting time, property access, arrival buffer and artist accommodation (if needed) are all part of the quote."],
    ["Can you liaise with our planner or hotel directly?", "Yes, a single point of contact from the hotel or planning team can confirm the room, sequence and access ahead of the team's arrival."],
  ],
  "family-pagdi": [
    ["Can close relatives like fathers and brothers get a more detailed look?", "Yes, they can have a refined fold or an extra accessory while the rest of the family keeps it simpler."],
    ["How do we split colours between two families?", "Pick two complementary shades from the outfits or décor, and keep the most distinctive treatment for the groom alone."],
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
  "baraati safa service",
  "wedding safa rental",
  "groom pagdi styling",
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
