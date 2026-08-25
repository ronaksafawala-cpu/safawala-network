export type LocationItem = {
  slug: string;
  name: string;
  group: "Rishikesh area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames = [
  "Tapovan", "Muni Ki Reti", "Swarg Ashram", "Ram Jhula", "Laxman Jhula",
  "Shivpuri", "Bharat Mandir Area", "IDPL", "Awas Vikas", "Shyampur",
  "Virbhadra", "Ganga Nagar", "Barrage Road", "Nirmal Block", "Rishikesh Bypass",
];

const nearbyNames = [
  "Haridwar", "Dehradun", "Roorkee", "Muzaffarnagar", "Saharanpur", "Najibabad",
  "Kotdwar", "Lansdowne", "Narendranagar", "Devprayag", "Doiwala", "Kaudiyala",
  "Tehri", "Chamba", "Mussoorie", "Vikasnagar",
];

const localNotes: Record<string, [string, string]> = {
  Tapovan: ["Tapovan weddings often bring together resort guests, destination groups and families staying close to the river belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Muni Ki Reti": ["Muni Ki Reti is a practical base for ceremonies on both sides of the Rishikesh hospitality belt.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Swarg Ashram": ["Swarg Ashram celebrations call for a calm, organised service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Ram Jhula": ["For wedding groups near Ram Jhula, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Laxman Jhula": ["Laxman Jhula is popular with intimate and destination wedding groups looking for a distinctly Rishikesh setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  Shivpuri: ["Shivpuri suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Bharat Mandir Area": ["Central Rishikesh functions around Bharat Mandir often have family groups arriving from several parts of the city.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  IDPL: ["IDPL-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Awas Vikas": ["Awas Vikas is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  Shyampur: ["Shyampur celebrations often combine local family ceremonies with guests arriving from outside Rishikesh.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  Virbhadra: ["Virbhadra wedding schedules can include home rituals followed by a venue entry elsewhere in Rishikesh.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Ganga Nagar": ["Ganga Nagar families usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Barrage Road": ["Barrage Road functions benefit from early coordination when the procession and venue timings are close together.", "We recommend one styling room with good light, mirrors and enough seating for the next group in line."],
  "Nirmal Block": ["Nirmal Block weddings are often intimate enough for personalised groom and family styling.", "We can keep the groom's safa distinct while maintaining a coordinated look for parents, brothers and friends."],
  "Rishikesh Bypass": ["Venues around Rishikesh Bypass are convenient for larger guest movement and destination arrivals.", "Send the map pin rather than only the venue name so the artists reach the correct gate and preparation room."],
  Haridwar: ["Haridwar weddings often balance traditional ceremonies with guests travelling between hotels and venues.", "We confirm the exact Haridwar location, travel window and tying order before accepting the event schedule."],
  Dehradun: ["Dehradun offers a wide mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Rishikesh team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  Roorkee: ["Roorkee bookings are planned as an outstation service with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  Muzaffarnagar: ["Muzaffarnagar functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  Saharanpur: ["Saharanpur weddings can be covered with advance scheduling from Rishikesh for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  Najibabad: ["Najibabad is handled as a planned destination assignment rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  Kotdwar: ["Kotdwar celebrations are a natural extension of our Rishikesh service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  Lansdowne: ["Lansdowne destination weddings favour elegant, photo-ready safas that suit intimate hill venues.", "Weather, travel and resort access are reviewed before the team departs, and a covered styling area is recommended."],
  Narendranagar: ["Narendranagar's destination venues pair beautifully with refined ivory, rust, maroon and muted gold safa palettes.", "We coordinate with the hotel or planner so the team has access before the groom's photography begins."],
  Devprayag: ["Devprayag functions need careful travel planning and a focused selection of safas brought to the venue.", "We confirm road conditions, event time and accommodation requirements when the schedule starts very early."],
  Doiwala: ["Doiwala is close enough for flexible wedding-day service while still benefiting from a confirmed venue pin.", "Larger groups are assigned multiple artists so the groom, relatives and baraatis finish within the same preparation window."],
  Kaudiyala: ["Kaudiyala resort weddings are usually destination-led, with guests preparing in separate rooms or cottages.", "A central styling lounge and a room-wise guest list make the tying session faster and more comfortable."],
  Tehri: ["Tehri celebrations often use scenic venues where travel time and weather can affect the wedding schedule.", "We build in an arrival buffer and confirm whether the team needs an overnight stay for morning events."],
  Chamba: ["Chamba's hill setting works well with understated groom safas and coordinated family colours.", "The final plan includes venue access, temperature-appropriate fabric choices and enough preparation time for photographs."],
  Mussoorie: ["Mussoorie destination weddings call for polished styling that photographs well in hotel, lawn and hillside settings.", "Traffic, weather and hotel entry rules are checked before confirming the team's reporting time."],
  Vikasnagar: ["Vikasnagar weddings can be served by a scheduled travelling team for the groom and full baraati group.", "We confirm the route, headcount and ceremony sequence before recommending the number of safa artists."],
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
  const group = internalNames.includes(name) ? "Rishikesh area" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Is a professional wedding safa wala available in ${name}?`, `Yes \u2014 ${summary} Bookings in ${name} are handled as a ${group === "Rishikesh area" ? "local on-location service" : "pre-planned travelling assignment"}, depending on your date and artist availability.`],
      [`What details do you need for a wedding venue in ${name}?`, `${planning} Share the exact venue pin, the preparation room, and the groom\u2019s ready-by time \u2014 not just the venue name.`],
      [`What groom pagdi style works best for a ${name} wedding?`, `${finish} pairs well with ${palette} tones, though we finalise the actual style around the sherwani, jewellery and the setting itself.`],
      [`How many artists should we plan for a baraat in ${name}?`, `That depends on the number of baraati safas and how much time there is between guest arrival and the procession. In ${name} we always keep the groom\u2019s session separate from the faster family and baraati batches.`],
      [`Can family and baraat safas be in different colours from the groom's?`, `Yes \u2014 for a ${name} wedding, the groom can keep a distinct look while parents, close family and the baraat wear complementary colour groups. Just confirm outfit references before we finalise fabric.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Rishikesh area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Rishikesh", intro: "Professional, on-location safa tying that keeps the groom, family and baraat ready in step with the day's schedule.", detail: "The finishing style and fabric are locked in beforehand, and artist numbers are planned around your final guest count.", faqs: [["Is there a limit on how many people you can style?", "No fixed limit — artist numbers scale with your headcount, so share the final count and available time."], ["Do your artists visit the wedding location?", "Always. This is a fully on-location service across hotels, resorts, homes and venues."], ["Can you coordinate the safa colour with our theme?", "Yes — send us outfit or décor references beforehand and we'll suggest matching shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Rishikesh", intro: "Camera-ready pagdi styling built specifically for the groom, separate from the faster family and guest sessions.", detail: "We shape the fold around the outfit and jewellery first, then finish with accessories that stay balanced rather than heavy.", faqs: [["When during the day does the groom's pagdi get tied?", "Typically once the sherwani is on and just before portraits start — we coordinate the exact timing with your photographer."], ["Will you suggest a colour for the groom's pagdi?", "Yes, our recommendation factors in the sherwani, stole, jewellery and the day's overall palette."], ["Is the groom's styling done apart from the rest of the party?", "Yes — it's a dedicated session, separate from the quicker family and baraati styling."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Rishikesh", intro: "Coordinated baraati safa tying that keeps a large guest list moving without holding up the departure.", detail: "One agreed style is used across the group, with batches sized to the time available before the baraat leaves.", faqs: [["Can you handle a large baraati group?", "Yes. We add artists according to the group size and time available."], ["Should we order extra safas?", "A small quantity buffer is sensible for late additions or fit changes."], ["Can close family wear a different colour?", "Yes. Parents and siblings can use a complementary shade while the wider group stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Rishikesh", intro: "A travelling safa team built for resort weddings, multi-day functions and destinations away from the city.", detail: "Fabric and accessories are consolidated before departure, and we plan a room-wise schedule with the hotel or planner.", faqs: [["Do you work at resorts outside central Rishikesh?", "Yes. Share the property and event schedule so travel and access can be planned."], ["Can the team stay for multiple functions?", "Multi-event assignments can be quoted after reviewing dates, styles and accommodation needs."], ["How early should we book?", "For peak wedding dates, reserving the team several weeks ahead is recommended."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Rishikesh", intro: "Pagdi styling for the wider family that stays coordinated, with the groom kept as the clear focal point.", detail: "A consistent fold is used for relatives, and the groom's more detailed treatment is planned as its own session.", faqs: [["Can the fit be gentler for elderly family members?", "Yes, just flag any comfort concerns to the artist and we'll adjust the tension and finish."], ["Can each side of the family wear a different colour?", "Yes — two complementary palettes work well and help distinguish each family group."], ["Are children included in the styling?", "Yes, just let us know approximate ages and how many in advance."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Rishikesh", intro: "Colour-led safa planning for couples who want the groom and guests aligned with outfits, flowers or the overall décor palette.", detail: "We work from visual references and recommend combinations that remain elegant in daylight, indoor lighting and wedding photography.", faqs: [["Can you get an exact colour match to our outfits?", "We aim for a close coordinated match, though fabric can look slightly different from a screen reference."], ["What colours hold up best in outdoor photos?", "Ivory, rust, maroon, saffron, muted pink and deep jewel tones tend to photograph well outdoors."], ["Should the groom wear a contrasting colour?", "A controlled contrast often works best to keep him visually distinct from the group."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long should we budget for safa tying on the day in Rishikesh?", "It varies by fold and group size; tell us your headcount and ready-by time and we'll recommend the artist count and schedule."],
    ["Do you bring the safa fabric or just handle the tying?", "Both options work — tell us if you want the full safa supplied or tying done on fabric your family has already chosen."],
  ],
  "groom-pagdi": [
    ["Can accessories like a kalgi or brooch be added?", "Yes, we place kalgi, brooch, feather or pearl accents after reviewing the sherwani and jewellery so nothing looks overdone."],
    ["Can we do a trial run of the groom's pagdi beforehand?", "If the style is particular or the groom wants options compared, a trial or detailed consultation can be set up."],
  ],
  "baraati-safa": [
    ["How do you keep every baraati safa consistent?", "The team agrees one repeatable fold and colour direction, then divides guests into organised batches so the group looks coordinated in procession photographs."],
    ["Can late-arriving wedding guests also be included?", "Keep a small fabric and time buffer for late additions. A family coordinator should direct those guests to the tying area before the artists pack up."],
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
    ["When's the right time to lock in safa colours?", "Once the main outfits are chosen — early enough that we can check the fabric in both daylight and indoor light."],
    ["Can guests wear more than one coordinated colour?", "Yes, two or three controlled shades can group families while keeping the whole baraat looking cohesive."],
  ],
};

export function getServiceFaqs(service: (typeof services)[number]) {
  return [...service.faqs, ...(serviceFaqAdditions[service.slug] ?? [])] as [string, string][];
}

export const primaryKeywords = [
  "wedding safa wala in Rishikesh",
  "safa tying service Rishikesh",
  "groom pagdi Rishikesh",
  "safa tying agency in Rishikesh",
  "safa tying service price in Rishikesh",
  "best turban tying service in Rishikesh",
  "pagdi tying specialist in Rishikesh",
  "hire safa tying service in Rishikesh",
  "groom safa tying near me in Rishikesh",
  "wedding turban tying near me in Rishikesh",
  "pagdi tying services in Rishikesh",
  "turban tying service provider in Rishikesh",
  "wedding pagri tying service provider",
  "groom pagri tying doorstep service",
  "groom safa tying charges",
  "groom pagri tying for barati",
  "groom safa tying professional",
  "dulha turban styling service",
  "wedding turban tying for baraat",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
