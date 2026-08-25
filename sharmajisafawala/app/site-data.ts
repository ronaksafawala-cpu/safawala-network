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
  "Manjalpur": ["Manjalpur celebrations often combine local family ceremonies with guests arriving from outside Vadodara.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Bhayli": ["Bhayli is popular with intimate and destination wedding groups looking for a distinctly Vadodara setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Gotri": ["Families near Gotri usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Akota": ["For wedding groups near Akota, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Alkapuri": ["Alkapuri functions often bring family groups arriving from several parts of Vadodara.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Karelibaug": ["Karelibaug suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Sayajigunj": ["Families near Sayajigunj usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Fatehgunj": ["For wedding groups near Fatehgunj, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Makarpura": ["Makarpura functions often bring family groups arriving from several parts of Vadodara.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Harni": ["Harni celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Sama": ["Sama is popular with intimate and destination wedding groups looking for a distinctly Vadodara setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Waghodia Road": ["Waghodia Road wedding schedules can include home rituals followed by a venue entry elsewhere in Vadodara.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Vasna": ["Vasna celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Tarsali": ["Tarsali celebrations often combine local family ceremonies with guests arriving from outside Vadodara.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Atladara": ["Atladara weddings often bring together resort guests, destination groups and families staying close to the Vadodara hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Sevasi": ["Sevasi celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Chhani": ["Chhani is popular with intimate and destination wedding groups looking for a distinctly Vadodara setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Nizampura": ["Families near Nizampura usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Gorwa": ["Gorwa-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Subhanpura": ["Families near Subhanpura usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Ajwa Road": ["Ajwa Road celebrations often combine local family ceremonies with guests arriving from outside Vadodara.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Old Padra Road": ["Old Padra Road weddings often bring together resort guests, destination groups and families staying close to the Vadodara hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Vasna-Bhayli Road": ["For wedding groups near Vasna-Bhayli Road, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Kalali": ["Kalali weddings often bring together resort guests, destination groups and families staying close to the Vadodara hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Bill": ["Bill is a practical base for wedding ceremonies on both sides of the Vadodara service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Sama-Savli Road": ["Families near Sama-Savli Road usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Gotri-Sevasi Road": ["Gotri-Sevasi Road is a practical base for wedding ceremonies on both sides of the Vadodara service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Anand": ["Anand destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Vadodara, and a covered styling area is recommended."],
  "Nadiad": ["Nadiad weddings often balance traditional ceremonies with guests travelling between hotels and venues near Vadodara.", "We confirm the exact Nadiad location, travel window and tying order before accepting the event schedule."],
  "Bharuch": ["Bharuch weddings can be covered with advance scheduling from Vadodara for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Ankleshwar": ["Ankleshwar functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Ahmedabad": ["Ahmedabad bookings are planned as an outstation service from Vadodara with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Gandhinagar": ["Gandhinagar offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Vadodara team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Godhra": ["Godhra weddings often balance traditional ceremonies with guests travelling between hotels and venues near Vadodara.", "We confirm the exact Godhra location, travel window and tying order before accepting the event schedule."],
  "Halol": ["Halol destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Vadodara, and a covered styling area is recommended."],
  "Dahod": ["Dahod functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Chhota Udaipur": ["Chhota Udaipur functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Padra": ["Padra is handled as a planned destination assignment from Vadodara rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Dabhoi": ["Dabhoi celebrations are a natural extension of our Vadodara service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Karjan": ["Karjan offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Vadodara team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Savli": ["Savli weddings can be covered with advance scheduling from Vadodara for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Waghodia": ["Waghodia functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Kalol": ["Kalol destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Vadodara, and a covered styling area is recommended."],
  "Petlad": ["Petlad weddings often balance traditional ceremonies with guests travelling between hotels and venues near Vadodara.", "We confirm the exact Petlad location, travel window and tying order before accepting the event schedule."],
  "Borsad": ["Borsad destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Vadodara, and a covered styling area is recommended."],
  "Khambhat": ["Khambhat offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Vadodara team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Jambusar": ["Jambusar functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Umreth": ["Umreth is handled as a planned destination assignment from Vadodara rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Kapadvanj": ["Kapadvanj weddings can be covered with advance scheduling from Vadodara for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
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
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in India", intro: "A dependable safa tying appointment for the whole wedding party, timed to your ceremony and photography schedule.", detail: "We confirm the drape and colour direction ahead of the event, then bring enough artists to keep every batch moving without delay.", faqs: [["Is there a limit on how many people you can style?", "No fixed limit — artist numbers scale with your headcount, so share the final count and available time."], ["Do your artists visit the wedding location?", "Always. This is a fully on-location service across hotels, resorts, homes and venues."], ["Can you coordinate the safa colour with our theme?", "Yes — send us outfit or décor references beforehand and we'll suggest matching shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in India", intro: "Camera-ready pagdi styling built specifically for the groom, separate from the faster family and guest sessions.", detail: "We shape the fold around the outfit and jewellery first, then finish with accessories that stay balanced rather than heavy.", faqs: [["What's the right time to style the groom's pagdi?", "We usually finish it right after the sherwani is on and before portraits begin — we'll confirm the exact slot with your photographer."], ["Can you help pick the pagdi colour?", "Yes, we look at the sherwani, stole and jewellery together with the wedding palette before recommending a shade."], ["Does the groom get his own separate session?", "Always. The groom is styled on his own timeline, apart from the quicker family and baraati rounds."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in India", intro: "Coordinated baraati safa tying that keeps a large guest list moving without holding up the departure.", detail: "One agreed style is used across the group, with batches sized to the time available before the baraat leaves.", faqs: [["Is there a group size you can't handle for baraati safas?", "Not really — we bring on more artists as the group grows and time allows."], ["Is it worth ordering a few spare safas?", "Yes, a small buffer covers late arrivals or last-minute fit issues."], ["Can the close family's safas be a different shade?", "Yes, parents and siblings can wear a complementary colour while everyone else stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for India", intro: "Destination-ready safa styling for resorts and multi-function weddings that span more than one day.", detail: "We work directly with the venue or planner to confirm access, then build a tying sequence across rooms and functions.", faqs: [["Do you cover resorts located away from India?", "Yes, we just need the property and event schedule to plan the travel and access side."], ["Is a multi-day, multi-function booking possible with one team?", "Yes — share the dates, styles and accommodation needs and we'll quote it as one assignment."], ["What's the recommended lead time for booking?", "For busy wedding dates, book several weeks in advance to secure the team."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in India", intro: "A family-wide pagdi plan that keeps parents and relatives visually aligned without competing with the groom.", detail: "Close family receive a shared, repeatable style while the groom's session remains separately detailed.", faqs: [["Is a more comfortable fit available for older guests?", "Definitely — mention any comfort needs and the artist will adjust accordingly."], ["Can both families be styled in different palettes?", "Yes, complementary-but-distinct colours help tell the two sides apart."], ["Do kids get styled too?", "Yes, share their rough ages and count ahead of time so we can plan for them."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in India", intro: "Custom colour planning for the groom and wedding party, built around your outfits and decor rather than a fixed catalogue.", detail: "We review your references first, then propose shades that stay elegant across different lighting and camera conditions.", faqs: [["Is it possible to match our outfit colour precisely?", "We get as close as possible, though fabric tone can shift slightly from what's seen on screen."], ["Which shades work best for outdoor wedding photography?", "Ivory, rust, maroon, saffron, muted pink and richer jewel tones tend to stay defined in daylight."], ["Should the groom's colour contrast with the group?", "Often yes — a deliberate contrast is a reliable way to make him stand out."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long should we budget for safa tying on the day in India?", "It varies by fold and group size; tell us your headcount and ready-by time and we'll recommend the artist count and schedule."],
    ["Do you bring the safa fabric or just handle the tying?", "Both options work — tell us if you want the full safa supplied or tying done on fabric your family has already chosen."],
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
    ["Does the quote include travel logistics for the artists?", "It does — route, reporting time, property access, arrival buffer and accommodation where relevant are all included."],
    ["Can the venue's planning team coordinate with you directly?", "Yes, one contact from the hotel or planner side can confirm preparation room, sequencing and access before we arrive."],
  ],
  "family-pagdi": [
    ["Can immediate family like the father or brothers get extra detailing?", "Yes, a refined fold or added accessory works well for them while the wider group stays simple."],
    ["What's the best way to split family colours?", "Choose two complementary shades between the families and save the standout treatment for the groom."],
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
