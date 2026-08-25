export type LocationItem = {
  slug: string;
  name: string;
  group: "Destination country" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Thailand", "Indonesia", "Malaysia", "Maldives", "Mauritius", "Seychelles", "Fiji", "Nepal", "Bhutan", "Philippines", "Vietnam", "Sri Lanka", "Cambodia", "Laos", "Myanmar", "Qatar", "Oman", "Kenya", "Tanzania", "Rwanda", "Madagascar", "Dominica", "Grenada", "Jamaica", "Barbados", "Saint Lucia", "Saint Kitts and Nevis", "Saint Vincent and the Grenadines", "Trinidad and Tobago", "Georgia", "Bali", "Dubai"
];

const nearbyNames: string[] = [
  
];

const localNotes: Record<string, [string, string]> = {
  "Thailand": ["Thailand is a practical base for wedding ceremonies on both sides of the Thailand service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Indonesia": ["Indonesia-based weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Malaysia": ["Malaysia-based weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Maldives": ["Maldives celebrations often combine local family ceremonies with guests arriving from outside Maldives.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Mauritius": ["Mauritius functions often bring family groups arriving from several parts of Mauritius.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Seychelles": ["Seychelles is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Fiji": ["Fiji weddings often bring together resort guests, destination groups and families staying close to the Fiji hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Nepal": ["Families choosing Nepal usually need a convenient at-resort or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Bhutan": ["Bhutan is popular with intimate and destination wedding groups looking for a distinctly Bhutan setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Philippines": ["Philippines weddings often bring together resort guests, destination groups and families staying close to the Philippines hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Vietnam": ["Vietnam celebrations call for a calm, organised safa service that respects the character of the destination.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Sri Lanka": ["Sri Lanka weddings often bring together resort guests, destination groups and families staying close to the Sri Lanka hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Cambodia": ["Cambodia functions often bring family groups arriving from several parts of Cambodia.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Laos": ["Laos functions often bring family groups arriving from several parts of Laos.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Myanmar": ["Myanmar wedding schedules can include home rituals followed by a venue entry elsewhere in Myanmar.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Qatar": ["Qatar functions often bring family groups arriving from several parts of Qatar.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Oman": ["Oman is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Kenya": ["Kenya-based weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Tanzania": ["For wedding groups near Tanzania, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Rwanda": ["Rwanda is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Madagascar": ["Madagascar wedding schedules can include home rituals followed by a venue entry elsewhere in Madagascar.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Dominica": ["Dominica wedding schedules can include home rituals followed by a venue entry elsewhere in Dominica.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Grenada": ["Grenada is a practical base for wedding ceremonies on both sides of the Grenada service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Jamaica": ["Families choosing Jamaica usually need a convenient at-resort or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Barbados": ["Barbados-based weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Saint Lucia": ["Saint Lucia celebrations often combine local family ceremonies with guests arriving from outside Saint Lucia.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Saint Kitts and Nevis": ["Saint Kitts and Nevis is popular with intimate and destination wedding groups looking for a distinctly Saint Kitts and Nevis setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Saint Vincent and the Grenadines": ["Saint Vincent and the Grenadines weddings often bring together resort guests, destination groups and families staying close to the Saint Vincent and the Grenadines hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Trinidad and Tobago": ["Trinidad and Tobago is a practical base for wedding ceremonies on both sides of the Trinidad and Tobago service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Georgia": ["Georgia is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Bali": ["Bali-based weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Dubai": ["Dubai is a practical base for wedding ceremonies on both sides of the Dubai service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
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
  const group = internalNames.includes(name) ? "Destination country" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Is a professional wedding safa wala available in ${name}?`, `Yes \u2014 ${summary} Bookings in ${name} are handled as a ${group === "Destination country" ? "local on-location service" : "pre-planned travelling assignment"}, depending on your date and artist availability.`],
      [`What details do you need for a wedding venue in ${name}?`, `${planning} Share the exact venue pin, the preparation room, and the groom\u2019s ready-by time \u2014 not just the venue name.`],
      [`What groom pagdi style works best for a ${name} wedding?`, `${finish} pairs well with ${palette} tones, though we finalise the actual style around the sherwani, jewellery and the setting itself.`],
      [`How many artists should we plan for a baraat in ${name}?`, `That depends on the number of baraati safas and how much time there is between guest arrival and the procession. In ${name} we always keep the groom\u2019s session separate from the faster family and baraati batches.`],
      [`Can family and baraat safas be in different colours from the groom's?`, `Yes \u2014 for a ${name} wedding, the groom can keep a distinct look while parents, close family and the baraat wear complementary colour groups. Just confirm outfit references before we finalise fabric.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Destination country");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in India", intro: "A dependable safa tying appointment for the whole wedding party, timed to your ceremony and photography schedule.", detail: "We confirm the drape and colour direction ahead of the event, then bring enough artists to keep every batch moving without delay.", faqs: [["Is there a limit on how many people you can style?", "No fixed limit — artist numbers scale with your headcount, so share the final count and available time."], ["Do your artists visit the wedding location?", "Always. This is a fully on-location service across hotels, resorts, homes and venues."], ["Can you coordinate the safa colour with our theme?", "Yes — send us outfit or décor references beforehand and we'll suggest matching shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in India", intro: "Camera-ready pagdi styling built specifically for the groom, separate from the faster family and guest sessions.", detail: "We shape the fold around the outfit and jewellery first, then finish with accessories that stay balanced rather than heavy.", faqs: [["When during the day does the groom's pagdi get tied?", "Typically once the sherwani is on and just before portraits start — we coordinate the exact timing with your photographer."], ["Will you suggest a colour for the groom's pagdi?", "Yes, our recommendation factors in the sherwani, stole, jewellery and the day's overall palette."], ["Is the groom's styling done apart from the rest of the party?", "Yes — it's a dedicated session, separate from the quicker family and baraati styling."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in India", intro: "Coordinated baraati safa tying that keeps a large guest list moving without holding up the departure.", detail: "One agreed style is used across the group, with batches sized to the time available before the baraat leaves.", faqs: [["Is there a group size you can't handle for baraati safas?", "Not really — we bring on more artists as the group grows and time allows."], ["Is it worth ordering a few spare safas?", "Yes, a small buffer covers late arrivals or last-minute fit issues."], ["Can the close family's safas be a different shade?", "Yes, parents and siblings can wear a complementary colour while everyone else stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for India", intro: "Destination-ready safa styling for resorts and multi-function weddings that span more than one day.", detail: "We work directly with the venue or planner to confirm access, then build a tying sequence across rooms and functions.", faqs: [["Do you work at resorts outside central India?", "Yes. Share the property and event schedule so travel and access can be planned."], ["Can the team stay for multiple functions?", "Multi-event assignments can be quoted after reviewing dates, styles and accommodation needs."], ["How early should we book?", "For peak wedding dates, reserving the team several weeks ahead is recommended."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in India", intro: "A family-wide pagdi plan that keeps parents and relatives visually aligned without competing with the groom.", detail: "Close family receive a shared, repeatable style while the groom's session remains separately detailed.", faqs: [["Is a more comfortable fit available for older guests?", "Definitely — mention any comfort needs and the artist will adjust accordingly."], ["Can both families be styled in different palettes?", "Yes, complementary-but-distinct colours help tell the two sides apart."], ["Do kids get styled too?", "Yes, share their rough ages and count ahead of time so we can plan for them."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in India", intro: "Custom colour planning for the groom and wedding party, built around your outfits and decor rather than a fixed catalogue.", detail: "We review your references first, then propose shades that stay elegant across different lighting and camera conditions.", faqs: [["Can you match an exact outfit colour?", "We can work toward a close coordinated match; physical fabric may vary slightly from screen colours."], ["Which colours photograph well outdoors?", "Ivory, rust, maroon, saffron, muted pink and deeper jewel tones generally retain definition in outdoor light."], ["Can the groom use a contrast colour?", "Yes. A controlled contrast is often the best way to keep the groom visually distinct."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long should we budget for safa tying on the day in India?", "It varies by fold and group size; tell us your headcount and ready-by time and we'll recommend the artist count and schedule."],
    ["Do you bring the safa fabric or just handle the tying?", "Both options work — tell us if you want the full safa supplied or tying done on fabric your family has already chosen."],
  ],
  "groom-pagdi": [
    ["Can accessories like a kalgi or brooch be added?", "Yes, we place kalgi, brooch, feather or pearl accents after reviewing the sherwani and jewellery so nothing looks overdone."],
    ["Can we do a trial run of the groom's pagdi beforehand?", "If the style is particular or the groom wants options compared, a trial or detailed consultation can be set up."],
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
    ["When should custom safa colours be finalised?", "Finalise the direction after the main outfits are selected and early enough to review fabric under both daylight and indoor lighting."],
    ["Can guest safas use multiple coordinated colours?", "Yes. Two or three controlled shades can identify family groups while still looking cohesive across the full baraat."],
  ],
};

export function getServiceFaqs(service: (typeof services)[number]) {
  return [...service.faqs, ...(serviceFaqAdditions[service.slug] ?? [])] as [string, string][];
}

export const primaryKeywords = [
  "destination wedding safa team",
  "travelling safa tying service",
  "resort wedding groom pagdi",
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
