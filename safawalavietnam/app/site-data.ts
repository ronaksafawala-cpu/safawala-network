export type LocationItem = {
  slug: string;
  name: string;
  group: "Vietnam area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "District 1", "District 3", "District 5", "District 7", "Binh Thanh", "Phu Nhuan", "Tan Binh", "Tan Phu", "Thu Duc", "Binh Tan", "Go Vap", "District 10", "District 11"
];

const nearbyNames: string[] = [
  "Hoan Kiem", "Ba Dinh", "Dong Da", "Hai Ba Trung", "Cau Giay", "Tay Ho", "Nam Tu Liem", "Bac Tu Liem", "Ha Dong", "Long Bien", "Hai Chau", "Son Tra", "Ngu Hanh Son", "Thanh Khe", "Lien Chieu", "Cam Le", "Loc Tho", "Vinh Hai", "Phuoc Long", "Vinh Nguyen", "Vinh Phuoc", "Duong Dong", "An Thoi", "Cua Can", "Ganh Dau", "Duong To", "Ham Ninh"
];

const localNotes: Record<string, [string, string]> = {
  "District 1": ["District 1 is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "District 3": ["Families near District 3 usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "District 5": ["District 5 wedding schedules can include home rituals followed by a venue entry elsewhere in Vietnam.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "District 7": ["District 7 is popular with intimate and destination wedding groups looking for a distinctly Vietnam setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Binh Thanh": ["Binh Thanh is a practical base for wedding ceremonies on both sides of the Vietnam service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Phu Nhuan": ["Families near Phu Nhuan usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Tan Binh": ["Tan Binh wedding schedules can include home rituals followed by a venue entry elsewhere in Vietnam.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Tan Phu": ["Tan Phu weddings often bring together resort guests, destination groups and families staying close to the Vietnam hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Thu Duc": ["For wedding groups near Thu Duc, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Binh Tan": ["Binh Tan is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Go Vap": ["Go Vap-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "District 10": ["District 10 is a practical base for wedding ceremonies on both sides of the Vietnam service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "District 11": ["District 11 is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Hoan Kiem": ["Hoan Kiem is handled as a planned destination assignment from Vietnam rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Ba Dinh": ["Ba Dinh is handled as a planned destination assignment from Vietnam rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Dong Da": ["Dong Da celebrations are a natural extension of our Vietnam service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Hai Ba Trung": ["Hai Ba Trung weddings can be covered with advance scheduling from Vietnam for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Cau Giay": ["Cau Giay weddings can be covered with advance scheduling from Vietnam for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Tay Ho": ["Tay Ho destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Vietnam, and a covered styling area is recommended."],
  "Nam Tu Liem": ["Nam Tu Liem is handled as a planned destination assignment from Vietnam rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Bac Tu Liem": ["Bac Tu Liem destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Vietnam, and a covered styling area is recommended."],
  "Ha Dong": ["Ha Dong destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Vietnam, and a covered styling area is recommended."],
  "Long Bien": ["Long Bien weddings can be covered with advance scheduling from Vietnam for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Hai Chau": ["Hai Chau celebrations are a natural extension of our Vietnam service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Son Tra": ["Son Tra destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Vietnam, and a covered styling area is recommended."],
  "Ngu Hanh Son": ["Ngu Hanh Son functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Thanh Khe": ["Thanh Khe functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Lien Chieu": ["Lien Chieu celebrations are a natural extension of our Vietnam service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Cam Le": ["Cam Le celebrations are a natural extension of our Vietnam service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Loc Tho": ["Loc Tho destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Vietnam, and a covered styling area is recommended."],
  "Vinh Hai": ["Vinh Hai weddings often balance traditional ceremonies with guests travelling between hotels and venues near Vietnam.", "We confirm the exact Vinh Hai location, travel window and tying order before accepting the event schedule."],
  "Phuoc Long": ["Phuoc Long weddings can be covered with advance scheduling from Vietnam for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Vinh Nguyen": ["Vinh Nguyen offers a mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Vietnam team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  "Vinh Phuoc": ["Vinh Phuoc destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Vietnam, and a covered styling area is recommended."],
  "Duong Dong": ["Duong Dong destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Vietnam, and a covered styling area is recommended."],
  "An Thoi": ["An Thoi bookings are planned as an outstation service from Vietnam with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Cua Can": ["Cua Can destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Vietnam, and a covered styling area is recommended."],
  "Ganh Dau": ["Ganh Dau weddings often balance traditional ceremonies with guests travelling between hotels and venues near Vietnam.", "We confirm the exact Ganh Dau location, travel window and tying order before accepting the event schedule."],
  "Duong To": ["Duong To functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Ham Ninh": ["Ham Ninh weddings can be covered with advance scheduling from Vietnam for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
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
  const group = internalNames.includes(name) ? "Vietnam area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Is a professional wedding safa wala available in ${name}?`, `Yes \u2014 ${summary} Bookings in ${name} are handled as a ${group === "Vietnam area" ? "local on-location service" : "pre-planned travelling assignment"}, depending on your date and artist availability.`],
      [`What details do you need for a wedding venue in ${name}?`, `${planning} Share the exact venue pin, the preparation room, and the groom\u2019s ready-by time \u2014 not just the venue name.`],
      [`What groom pagdi style works best for a ${name} wedding?`, `${finish} pairs well with ${palette} tones, though we finalise the actual style around the sherwani, jewellery and the setting itself.`],
      [`How many artists should we plan for a baraat in ${name}?`, `That depends on the number of baraati safas and how much time there is between guest arrival and the procession. In ${name} we always keep the groom\u2019s session separate from the faster family and baraati batches.`],
      [`Can family and baraat safas be in different colours from the groom's?`, `Yes \u2014 for a ${name} wedding, the groom can keep a distinct look while parents, close family and the baraat wear complementary colour groups. Just confirm outfit references before we finalise fabric.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Vietnam area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Vietnam", intro: "An on-site safa tying service built around your actual guest count and departure schedule, not a fixed slot.", detail: "Fabric, fold and finishing are agreed in advance, and the artist team is sized to match the groom, family and baraati batches.", faqs: [["How many safas can your team tie?", "Team size is matched to your headcount and available preparation window. Share both figures for an accurate plan."], ["Do you come to the hotel or venue?", "Yes. Our artists provide on-location service at hotels, resorts, homes and wedding venues."], ["Can colours match the wedding theme?", "Yes. Send outfit or décor references before the event so we can recommend suitable coordinated shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Vietnam", intro: "A more considered, camera-ready pagdi service shaped around the groom's outfit, face profile and wedding aesthetic.", detail: "The groom receives dedicated styling time, with optional kalgi, brooch and fabric detailing kept balanced rather than overdone.", faqs: [["When should the groom's pagdi be tied?", "Usually before the main portrait session and after the sherwani is complete. We align the exact time with your photographer."], ["Can you suggest a pagdi colour?", "Yes. We consider the sherwani, stole, jewellery and overall wedding palette before suggesting a shade."], ["Is the groom styled separately?", "Yes. The groom's session is planned separately from the faster family and baraati sequence."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Vietnam", intro: "Efficient safa tying for friends, relatives and the wider wedding party, timed to the procession schedule.", detail: "Batches are organised by arrival time, and every safa follows the same fold for a consistent group look.", faqs: [["Is there a group size you can't handle for baraati safas?", "Not really — we bring on more artists as the group grows and time allows."], ["Is it worth ordering a few spare safas?", "Yes, a small buffer covers late arrivals or last-minute fit issues."], ["Can the close family's safas be a different shade?", "Yes, parents and siblings can wear a complementary colour while everyone else stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Vietnam", intro: "A dedicated travelling team for destination celebrations, from single resort weddings to multi-day schedules.", detail: "Every fabric and accessory is packed and confirmed in advance, with a room-by-room plan agreed with the property.", faqs: [["Do you work at resorts outside central Vietnam?", "Yes. Share the property and event schedule so travel and access can be planned."], ["Can the team stay for multiple functions?", "Multi-event assignments can be quoted after reviewing dates, styles and accommodation needs."], ["How early should we book?", "For peak wedding dates, reserving the team several weeks ahead is recommended."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Vietnam", intro: "A family-wide pagdi plan that keeps parents and relatives visually aligned without competing with the groom.", detail: "Close family receive a shared, repeatable style while the groom's session remains separately detailed.", faqs: [["Is a more comfortable fit available for older guests?", "Definitely — mention any comfort needs and the artist will adjust accordingly."], ["Can both families be styled in different palettes?", "Yes, complementary-but-distinct colours help tell the two sides apart."], ["Do kids get styled too?", "Yes, share their rough ages and count ahead of time so we can plan for them."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Vietnam", intro: "Colour-led safa planning for couples who want the groom and guests aligned with outfits, flowers or the overall décor palette.", detail: "We work from visual references and recommend combinations that remain elegant in daylight, indoor lighting and wedding photography.", faqs: [["Is it possible to match our outfit colour precisely?", "We get as close as possible, though fabric tone can shift slightly from what's seen on screen."], ["Which shades work best for outdoor wedding photography?", "Ivory, rust, maroon, saffron, muted pink and richer jewel tones tend to stay defined in daylight."], ["Should the groom's colour contrast with the group?", "Often yes — a deliberate contrast is a reliable way to make him stand out."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long does wedding safa tying take in Vietnam?", "Timing depends on the fold and group size. Once we know the guest quantity and ready-by time, we recommend the artist count and a practical batch schedule."],
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
    ["Do destination bookings include artist travel planning?", "Yes. The quote accounts for the venue route, reporting time, access, required arrival buffer and, where necessary, artist accommodation."],
    ["Can you coordinate directly with our hotel or wedding planner?", "Yes. One planner or hotel contact can confirm the preparation room, guest sequence and property access before the team arrives."],
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
  "wedding safa wala in Vietnam",
  "safa tying service Vietnam",
  "groom pagdi Vietnam",
  "safa tying package in Vietnam",
  "traditional safa artist in Vietnam",
  "safa tying at venue in Vietnam",
  "on site turban tying in Vietnam",
  "wedding turban tying package in Vietnam",
  "doorstep pagdi tying in Vietnam",
  "hire pagdi tying service in Vietnam",
  "pagdi artist near me in Vietnam",
  "traditional pagdi tying in Vietnam",
  "pagdi baandhne booking",
  "groom safa tying doorstep service",
  "pagri and sehra service",
  "groom pagri tying appointment",
  "dulha safa tying for groom",
  "rajputi pagdi tying",
  "groom pagri tying service provider",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
