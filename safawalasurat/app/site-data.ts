export type LocationItem = {
  slug: string;
  name: string;
  group: "Surat area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Adajan", "Vesu", "Piplod", "Athwa", "Athwalines", "Pal", "Pal Gam", "City Light", "Althan", "Dumas", "Pandesara", "Udhna", "Varachha", "Katargam", "Nanpura", "Rander", "Amroli", "Mota Varachha", "Punagam", "Parvat Patiya", "Sachin", "Bhestan", "Limbayat", "Dindoli", "Kosad", "Sarthana", "Kadodara", "Magob", "Kapodra", "Dabholi"
];

const nearbyNames: string[] = [
  "Navsari", "Bardoli", "Bharuch", "Ankleshwar", "Vapi", "Valsad", "Vyara", "Songadh", "Tapi", "Olpad", "Kamrej", "Palsana", "Sachin", "Kadodara", "Daman", "Silvassa", "Bilimora", "Chikhli", "Dharampur", "Anand", "Nadiad"
];

const localNotes: Record<string, [string, string]> = {
  "Adajan": ["Adajan is a practical base for wedding ceremonies on both sides of the Surat service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Vesu": ["Vesu-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Piplod": ["Piplod celebrations often combine local family ceremonies with guests arriving from outside Surat.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Athwa": ["Families near Athwa usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Athwalines": ["Families near Athwalines usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Pal": ["Pal suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Pal Gam": ["Pal Gam-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "City Light": ["City Light is a practical base for wedding ceremonies on both sides of the Surat service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Althan": ["Althan functions often bring family groups arriving from several parts of Surat.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Dumas": ["Dumas suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Pandesara": ["Pandesara wedding schedules can include home rituals followed by a venue entry elsewhere in Surat.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Udhna": ["Udhna celebrations often combine local family ceremonies with guests arriving from outside Surat.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Varachha": ["Varachha-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Katargam": ["Katargam celebrations often combine local family ceremonies with guests arriving from outside Surat.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Nanpura": ["Families near Nanpura usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Rander": ["Rander is a practical base for wedding ceremonies on both sides of the Surat service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Amroli": ["Amroli is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Mota Varachha": ["Mota Varachha celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Punagam": ["Punagam suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Parvat Patiya": ["Parvat Patiya-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Sachin": ["Sachin-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Bhestan": ["Bhestan celebrations often combine local family ceremonies with guests arriving from outside Surat.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Limbayat": ["Limbayat is a practical base for wedding ceremonies on both sides of the Surat service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Dindoli": ["Dindoli wedding schedules can include home rituals followed by a venue entry elsewhere in Surat.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Kosad": ["Kosad wedding schedules can include home rituals followed by a venue entry elsewhere in Surat.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Sarthana": ["Sarthana celebrations often combine local family ceremonies with guests arriving from outside Surat.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Kadodara": ["Families near Kadodara usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Magob": ["Magob is popular with intimate and destination wedding groups looking for a distinctly Surat setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Kapodra": ["For wedding groups near Kapodra, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Dabholi": ["Dabholi is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Navsari": ["Navsari is handled as a planned destination assignment from Surat rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Bardoli": ["Bardoli celebrations are a natural extension of our Surat service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Bharuch": ["Bharuch bookings are planned as an outstation service from Surat with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Ankleshwar": ["Ankleshwar celebrations are a natural extension of our Surat service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Vapi": ["Vapi is handled as a planned destination assignment from Surat rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Valsad": ["Valsad is handled as a planned destination assignment from Surat rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  "Vyara": ["Vyara functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  "Songadh": ["Songadh weddings can be covered with advance scheduling from Surat for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Tapi": ["Tapi celebrations are a natural extension of our Surat service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Olpad": ["Olpad weddings often balance traditional ceremonies with guests travelling between hotels and venues near Surat.", "We confirm the exact Olpad location, travel window and tying order before accepting the event schedule."],
  "Kamrej": ["Kamrej celebrations are a natural extension of our Surat service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  "Palsana": ["Palsana weddings can be covered with advance scheduling from Surat for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Daman": ["Daman bookings are planned as an outstation service from Surat with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Silvassa": ["Silvassa weddings often balance traditional ceremonies with guests travelling between hotels and venues near Surat.", "We confirm the exact Silvassa location, travel window and tying order before accepting the event schedule."],
  "Bilimora": ["Bilimora weddings can be covered with advance scheduling from Surat for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Chikhli": ["Chikhli bookings are planned as an outstation service from Surat with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Dharampur": ["Dharampur weddings can be covered with advance scheduling from Surat for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  "Anand": ["Anand bookings are planned as an outstation service from Surat with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  "Nadiad": ["Nadiad destination weddings favour elegant, photo-ready safas that suit the local venue character.", "Weather, travel and property access are reviewed before the team departs from Surat, and a covered styling area is recommended."],
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
  const group = internalNames.includes(name) ? "Surat area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Can I book a professional wedding safa wala in ${name}?`, `Yes. ${summary} We accept ${name} bookings as a ${group === "Surat area" ? "local on-location service" : "pre-planned travelling assignment"}, subject to the wedding date and artist availability.`],
      [`What should we confirm for a ${name} wedding venue?`, `${planning} Please send the exact venue pin, preparation-room details and the groom\u2019s ready-by time rather than only the venue name.`],
      [`Which groom pagdi style suits a wedding in ${name}?`, `${finish} works particularly well with ${palette} palettes, although the final groom pagdi is selected from the sherwani, face profile, jewellery and ceremony setting.`],
      [`How many safa artists are needed for a ${name} baraat?`, `The team size depends on the final number of baraati safas and the time between guest arrival and procession departure. For ${name}, we separate the groom\u2019s detailed session from faster family and baraati batches.`],
      [`Can you provide family pagdis and baraati safas in different colours?`, `Yes. For a ${name} celebration, the groom can remain distinctive while parents, close family and the wider baraat use complementary colour groups. Share outfit references before fabric is finalised.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Surat area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Surat", intro: "Professional, on-location safa tying that keeps the groom, family and baraat ready in step with the day's schedule.", detail: "The finishing style and fabric are locked in beforehand, and artist numbers are planned around your final guest count.", faqs: [["Is there a limit on how many people you can style?", "No fixed limit — artist numbers scale with your headcount, so share the final count and available time."], ["Do your artists visit the wedding location?", "Always. This is a fully on-location service across hotels, resorts, homes and venues."], ["Can you coordinate the safa colour with our theme?", "Yes — send us outfit or décor references beforehand and we'll suggest matching shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Surat", intro: "A considered pagdi session that treats the groom as the visual centre of the day, not a rushed final step.", detail: "Kalgi, brooch and stole details are positioned after the sherwani is complete, keeping the finished look proportionate.", faqs: [["When during the day does the groom's pagdi get tied?", "Typically once the sherwani is on and just before portraits start — we coordinate the exact timing with your photographer."], ["Will you suggest a colour for the groom's pagdi?", "Yes, our recommendation factors in the sherwani, stole, jewellery and the day's overall palette."], ["Is the groom's styling done apart from the rest of the party?", "Yes — it's a dedicated session, separate from the quicker family and baraati styling."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Surat", intro: "Coordinated baraati safa tying that keeps a large guest list moving without holding up the departure.", detail: "One agreed style is used across the group, with batches sized to the time available before the baraat leaves.", faqs: [["What's your capacity for a big baraat?", "We scale the artist team to match your group size and the time you have available."], ["Should extra safas be kept as backup?", "It's a good idea — a small buffer handles late guests or fit changes smoothly."], ["Can close family stand out with a different colour?", "Yes, a complementary shade for parents and siblings works well against a uniform wider group."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Surat", intro: "A dedicated travelling team for destination celebrations, from single resort weddings to multi-day schedules.", detail: "Every fabric and accessory is packed and confirmed in advance, with a room-by-room plan agreed with the property.", faqs: [["Do you work at resorts outside central Surat?", "Yes. Share the property and event schedule so travel and access can be planned."], ["Can the team stay for multiple functions?", "Multi-event assignments can be quoted after reviewing dates, styles and accommodation needs."], ["How early should we book?", "For peak wedding dates, reserving the team several weeks ahead is recommended."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Surat", intro: "A family-wide pagdi plan that keeps parents and relatives visually aligned without competing with the groom.", detail: "Close family receive a shared, repeatable style while the groom's session remains separately detailed.", faqs: [["Can the fit be gentler for elderly family members?", "Yes, just flag any comfort concerns to the artist and we'll adjust the tension and finish."], ["Can each side of the family wear a different colour?", "Yes — two complementary palettes work well and help distinguish each family group."], ["Are children included in the styling?", "Yes, just let us know approximate ages and how many in advance."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Surat", intro: "Colour-led safa planning for couples who want the groom and guests aligned with outfits, flowers or the overall décor palette.", detail: "We work from visual references and recommend combinations that remain elegant in daylight, indoor lighting and wedding photography.", faqs: [["Is it possible to match our outfit colour precisely?", "We get as close as possible, though fabric tone can shift slightly from what's seen on screen."], ["Which shades work best for outdoor wedding photography?", "Ivory, rust, maroon, saffron, muted pink and richer jewel tones tend to stay defined in daylight."], ["Should the groom's colour contrast with the group?", "Often yes — a deliberate contrast is a reliable way to make him stand out."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long should we budget for safa tying on the day in Surat?", "It varies by fold and group size; tell us your headcount and ready-by time and we'll recommend the artist count and schedule."],
    ["Do you bring the safa fabric or just handle the tying?", "Both options work — tell us if you want the full safa supplied or tying done on fabric your family has already chosen."],
  ],
  "groom-pagdi": [
    ["Can accessories like a kalgi or brooch be added?", "Yes, we place kalgi, brooch, feather or pearl accents after reviewing the sherwani and jewellery so nothing looks overdone."],
    ["Can we do a trial run of the groom's pagdi beforehand?", "If the style is particular or the groom wants options compared, a trial or detailed consultation can be set up."],
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
    ["Can close relatives like fathers and brothers get a more detailed look?", "Yes, they can have a refined fold or an extra accessory while the rest of the family keeps it simpler."],
    ["How do we split colours between two families?", "Pick two complementary shades from the outfits or décor, and keep the most distinctive treatment for the groom alone."],
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
  "wedding safa wala in Surat",
  "safa tying service Surat",
  "groom pagdi Surat",
  "professional wedding safa service in Surat",
  "safa tying workers in Surat",
  "pagdi tying cost in Surat",
  "turban tying vendor in Surat",
  "safa tying artist near me in Surat",
  "mobile pagdi tying service in Surat",
  "pagdi tying service price in Surat",
  "safa tying service provider in Surat",
  "wedding pagdi artist near me in Surat",
  "dulha pagri tying specialist",
  "baraat pagri tying booking",
  "groom safa tying cost",
  "baraat pagri tying doorstep service",
  "wedding pagdi tying for baraat",
  "groom turban tying on site",
  "baraat pagdi tying mobile service",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
