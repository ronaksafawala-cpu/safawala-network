export type LocationItem = {
  slug: string;
  name: string;
  group: "Nationwide" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames: string[] = [
  "Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Bhopal", "Patna", "Vadodara", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Varanasi", "Amritsar", "Chandigarh", "Gwalior", "Vijayawada", "Jodhpur", "Madurai", "Coimbatore", "Kochi", "Visakhapatnam", "Guwahati", "Bhubaneswar", "Dehradun", "Raipur", "Ranchi", "Jamshedpur", "Jabalpur", "Gurugram", "Noida", "Ghaziabad", "Thiruvananthapuram", "Mysuru", "Udaipur", "Ajmer", "Bikaner", "Kota", "Shimla", "Manali", "Srinagar", "Jammu", "Dharamshala", "Rishikesh", "Haridwar", "Nainital", "Mussoorie", "Goa", "Panaji", "Pondicherry", "Mangaluru", "Hubballi", "Belagavi", "Salem", "Tiruchirappalli", "Warangal", "Guntur", "Nellore", "Tirupati", "Aurangabad", "Solapur", "Kolhapur", "Amravati", "Siliguri", "Durgapur", "Asansol", "Cuttack", "Rourkela", "Muzaffarpur", "Gaya", "Bilaspur", "Bhilai", "Dhanbad", "Bokaro", "Alwar", "Bharatpur", "Sikar", "Bhilwara", "Ujjain", "Sagar", "Satna", "Rewa", "Bareilly", "Moradabad"
];

const nearbyNames: string[] = [
  
];

const localNotes: Record<string, [string, string]> = {
  "Mumbai": ["Mumbai-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Delhi": ["Delhi-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Bengaluru": ["For wedding groups near Bengaluru, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Hyderabad": ["Hyderabad is a practical base for wedding ceremonies on both sides of the India service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Chennai": ["Chennai is a practical base for wedding ceremonies on both sides of the India service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Kolkata": ["Kolkata wedding schedules can include home rituals followed by a venue entry elsewhere in India.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Pune": ["Pune celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Ahmedabad": ["Ahmedabad celebrations often combine local family ceremonies with guests arriving from outside India.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Jaipur": ["Jaipur wedding schedules can include home rituals followed by a venue entry elsewhere in India.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Surat": ["Surat is popular with intimate and destination wedding groups looking for a distinctly India setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Lucknow": ["Lucknow wedding schedules can include home rituals followed by a venue entry elsewhere in India.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Kanpur": ["Kanpur celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Nagpur": ["Nagpur is popular with intimate and destination wedding groups looking for a distinctly India setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Indore": ["Families near Indore usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Bhopal": ["Bhopal weddings often bring together resort guests, destination groups and families staying close to the India hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Patna": ["Patna is a practical base for wedding ceremonies on both sides of the India service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Vadodara": ["Vadodara is popular with intimate and destination wedding groups looking for a distinctly India setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Ludhiana": ["Ludhiana is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Agra": ["Agra suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Nashik": ["Nashik is popular with intimate and destination wedding groups looking for a distinctly India setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Faridabad": ["For wedding groups near Faridabad, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Meerut": ["For wedding groups near Meerut, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Rajkot": ["Rajkot is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Varanasi": ["Varanasi functions often bring family groups arriving from several parts of India.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Amritsar": ["For wedding groups near Amritsar, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Chandigarh": ["Chandigarh celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Gwalior": ["Gwalior-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Vijayawada": ["Vijayawada-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Jodhpur": ["Jodhpur is popular with intimate and destination wedding groups looking for a distinctly India setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Madurai": ["Madurai is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Coimbatore": ["Coimbatore celebrations often combine local family ceremonies with guests arriving from outside India.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Kochi": ["Kochi is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Visakhapatnam": ["Visakhapatnam functions often bring family groups arriving from several parts of India.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Guwahati": ["Guwahati celebrations often combine local family ceremonies with guests arriving from outside India.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Bhubaneswar": ["Bhubaneswar wedding schedules can include home rituals followed by a venue entry elsewhere in India.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Dehradun": ["Families near Dehradun usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Raipur": ["Raipur weddings often bring together resort guests, destination groups and families staying close to the India hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Ranchi": ["Ranchi weddings often bring together resort guests, destination groups and families staying close to the India hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Jamshedpur": ["Jamshedpur weddings often bring together resort guests, destination groups and families staying close to the India hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Jabalpur": ["Jabalpur weddings often bring together resort guests, destination groups and families staying close to the India hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Gurugram": ["For wedding groups near Gurugram, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Noida": ["Noida weddings often bring together resort guests, destination groups and families staying close to the India hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Ghaziabad": ["For wedding groups near Ghaziabad, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Thiruvananthapuram": ["Thiruvananthapuram-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Mysuru": ["Families near Mysuru usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Udaipur": ["Udaipur suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Ajmer": ["For wedding groups near Ajmer, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Bikaner": ["Bikaner celebrations often combine local family ceremonies with guests arriving from outside India.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Kota": ["Kota suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Shimla": ["Shimla celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Manali": ["Manali celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Srinagar": ["Srinagar is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Jammu": ["For wedding groups near Jammu, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Dharamshala": ["Dharamshala wedding schedules can include home rituals followed by a venue entry elsewhere in India.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Rishikesh": ["Rishikesh celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Haridwar": ["Haridwar weddings often bring together resort guests, destination groups and families staying close to the India hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Nainital": ["Nainital is a practical base for wedding ceremonies on both sides of the India service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Mussoorie": ["Mussoorie is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Goa": ["Families near Goa usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Panaji": ["Panaji is popular with intimate and destination wedding groups looking for a distinctly India setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Pondicherry": ["Pondicherry is popular with intimate and destination wedding groups looking for a distinctly India setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Mangaluru": ["Mangaluru suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Hubballi": ["Hubballi suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Belagavi": ["Belagavi celebrations often combine local family ceremonies with guests arriving from outside India.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Salem": ["Salem is popular with intimate and destination wedding groups looking for a distinctly India setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Tiruchirappalli": ["Tiruchirappalli is a practical base for wedding ceremonies on both sides of the India service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Warangal": ["Warangal is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Guntur": ["Families near Guntur usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Nellore": ["Nellore is a practical base for wedding ceremonies on both sides of the India service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Tirupati": ["Tirupati suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Aurangabad": ["Aurangabad-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Solapur": ["Solapur functions often bring family groups arriving from several parts of India.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Kolhapur": ["Kolhapur wedding schedules can include home rituals followed by a venue entry elsewhere in India.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Amravati": ["Amravati celebrations often combine local family ceremonies with guests arriving from outside India.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Siliguri": ["For wedding groups near Siliguri, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Durgapur": ["Durgapur functions often bring family groups arriving from several parts of India.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Asansol": ["Asansol wedding schedules can include home rituals followed by a venue entry elsewhere in India.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Cuttack": ["Cuttack celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Rourkela": ["For wedding groups near Rourkela, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Muzaffarpur": ["Muzaffarpur celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Gaya": ["Families near Gaya usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Bilaspur": ["Bilaspur celebrations often combine local family ceremonies with guests arriving from outside India.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Bhilai": ["Bhilai suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Dhanbad": ["Dhanbad-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Bokaro": ["Bokaro is a practical base for wedding ceremonies on both sides of the India service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Alwar": ["Alwar suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Bharatpur": ["Bharatpur celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Sikar": ["Sikar functions often bring family groups arriving from several parts of India.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Bhilwara": ["Families near Bhilwara usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Ujjain": ["Ujjain is a practical base for wedding ceremonies on both sides of the India service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Sagar": ["Families near Sagar usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Satna": ["Satna is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Rewa": ["Rewa is a practical base for wedding ceremonies on both sides of the India service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Bareilly": ["Bareilly is popular with intimate and destination wedding groups looking for a distinctly India setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Moradabad": ["Moradabad-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
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
  const group = internalNames.includes(name) ? "Nationwide" : "Nearby destination";
  const palette = paletteIdeas[index % paletteIdeas.length];
  const finish = finishIdeas[index % finishIdeas.length];
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Do you cover wedding safa bookings in ${name}?`, `We do \u2014 ${summary} It's treated as a ${group === "Nationwide" ? "local on-location service" : "pre-planned travelling assignment"} for ${name}, based on date and artist availability.`],
      [`What should be confirmed before a ${name} venue booking?`, `${planning} We'll need the precise venue pin, preparation-room details, and the groom\u2019s ready-by time, not just a venue name.`],
      [`Which pagdi style is recommended for weddings in ${name}?`, `${finish} tends to suit ${palette} colour choices well, though we always confirm the final pick against the sherwani, face and ceremony setting.`],
      [`How is artist count decided for a ${name} baraat?`, `It comes down to the total baraati safa count and the gap between arrival and procession. For every ${name} booking, the groom is styled separately from the quicker family and baraat rounds.`],
      [`Is it possible to use different colours for family and baraat safas?`, `Yes \u2014 in ${name}, the groom can stay visually distinct while parents, family and the wider baraat share complementary colours. Outfit references should be shared before fabric is confirmed.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Nationwide");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in India", intro: "A dependable safa tying appointment for the whole wedding party, timed to your ceremony and photography schedule.", detail: "We confirm the drape and colour direction ahead of the event, then bring enough artists to keep every batch moving without delay.", faqs: [["How many safas can your team tie?", "Team size is matched to your headcount and available preparation window. Share both figures for an accurate plan."], ["Do you come to the hotel or venue?", "Yes. Our artists provide on-location service at hotels, resorts, homes and wedding venues."], ["Can colours match the wedding theme?", "Yes. Send outfit or décor references before the event so we can recommend suitable coordinated shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in India", intro: "Camera-ready pagdi styling built specifically for the groom, separate from the faster family and guest sessions.", detail: "We shape the fold around the outfit and jewellery first, then finish with accessories that stay balanced rather than heavy.", faqs: [["When during the day does the groom's pagdi get tied?", "Typically once the sherwani is on and just before portraits start — we coordinate the exact timing with your photographer."], ["Will you suggest a colour for the groom's pagdi?", "Yes, our recommendation factors in the sherwani, stole, jewellery and the day's overall palette."], ["Is the groom's styling done apart from the rest of the party?", "Yes — it's a dedicated session, separate from the quicker family and baraati styling."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in India", intro: "Coordinated baraati safa tying that keeps a large guest list moving without holding up the departure.", detail: "One agreed style is used across the group, with batches sized to the time available before the baraat leaves.", faqs: [["Can you handle a large baraati group?", "Yes. We add artists according to the group size and time available."], ["Should we order extra safas?", "A small quantity buffer is sensible for late additions or fit changes."], ["Can close family wear a different colour?", "Yes. Parents and siblings can use a complementary shade while the wider group stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for India", intro: "Destination-ready safa styling for resorts and multi-function weddings that span more than one day.", detail: "We work directly with the venue or planner to confirm access, then build a tying sequence across rooms and functions.", faqs: [["Do you work at resorts outside central India?", "Yes. Share the property and event schedule so travel and access can be planned."], ["Can the team stay for multiple functions?", "Multi-event assignments can be quoted after reviewing dates, styles and accommodation needs."], ["How early should we book?", "For peak wedding dates, reserving the team several weeks ahead is recommended."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in India", intro: "A family-wide pagdi plan that keeps parents and relatives visually aligned without competing with the groom.", detail: "Close family receive a shared, repeatable style while the groom's session remains separately detailed.", faqs: [["Can the fit be gentler for elderly family members?", "Yes, just flag any comfort concerns to the artist and we'll adjust the tension and finish."], ["Can each side of the family wear a different colour?", "Yes — two complementary palettes work well and help distinguish each family group."], ["Are children included in the styling?", "Yes, just let us know approximate ages and how many in advance."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in India", intro: "Custom colour planning for the groom and wedding party, built around your outfits and decor rather than a fixed catalogue.", detail: "We review your references first, then propose shades that stay elegant across different lighting and camera conditions.", faqs: [["Can you match an exact outfit colour?", "We can work toward a close coordinated match; physical fabric may vary slightly from screen colours."], ["Which colours photograph well outdoors?", "Ivory, rust, maroon, saffron, muted pink and deeper jewel tones generally retain definition in outdoor light."], ["Can the groom use a contrast colour?", "Yes. A controlled contrast is often the best way to keep the groom visually distinct."]] },
];

const serviceFaqAdditions: Record<string, [string, string][]> = {
  "wedding-safa-tying": [
    ["How long does wedding safa tying take in India?", "Timing depends on the fold and group size. Once we know the guest quantity and ready-by time, we recommend the artist count and a practical batch schedule."],
    ["Are the safas supplied with the tying service?", "The fabric and styling requirement are confirmed together. Share whether you need a complete safa package or tying support for fabric already selected by the family."],
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
    ["When should custom safa colours be finalised?", "Finalise the direction after the main outfits are selected and early enough to review fabric under both daylight and indoor lighting."],
    ["Can guest safas use multiple coordinated colours?", "Yes. Two or three controlled shades can identify family groups while still looking cohesive across the full baraat."],
  ],
};

export function getServiceFaqs(service: (typeof services)[number]) {
  return [...service.faqs, ...(serviceFaqAdditions[service.slug] ?? [])] as [string, string][];
}

export const primaryKeywords = [
  "cinematic wedding safa styling",
  "screen-ready groom pagdi",
  "film production safa tying",
  "safa tying service",
  "safa tying professional",
  "on site safa tying",
  "wedding pagdi tying",
  "pagdi tying for wedding",
  "pagri bandhane ki service",
  "pagri tying company",
  "turban tying service",
  "turban tying service provider",
  "event turban tying service",
  "groom wedding pagdi service",
  "baraat turban tying service",
  "family pagri tying service",
  "marriage pagri tying",
  "wedding event safa tying",
  "turban tying service booking",
  "pagdi tying service charges",
  "pagdi tying at marriage venue",
  "turban tying on location",
  "rajasthani pagdi tying",
  "traditional turban tying service",
  "cultural pagdi tying",
  "pagdi tying method",
  "turban tying styles",
  "baraat turban package",
  "corporate event pagdi tying",
  "engagement pagdi service",
  "baraat turban service",
  "turban bandhne ki service",
  "pagdi bandhne booking",
  "turban with kalgi service",
  "groom pagdi styling service",
  "pagri on rent with tying",
  "safa hire and tying service",
  "best safa tying service",
  "trained pagri tying artist",
  "royal wedding safa service",
  "pagri tying on site",
  "wedding safa tying for baraat",
  "wedding pagdi tying for wedding",
  "wedding pagri tying booking",
  "wedding turban tying service provider",
  "wedding turban tying mobile service",
  "groom safa tying team",
  "groom pagdi tying for barati",
  "groom pagri tying for wedding",
  "groom turban tying hire",
  "dulha safa tying artist",
  "dulha safa tying onsite",
  "dulha pagdi tying charges",
  "dulha pagri tying for family",
  "dulha turban tying at home",
  "baraat safa tying professional",
  "baraat safa tying doorstep service",
  "baraat pagdi tying team",
];

export const gallery = [
  ["/gallery/ivory-groom.webp", "Groom in an ivory wedding safa with emerald jewellery"],
  ["/gallery/safa-detail.webp", "Close detail of a red wedding safa with an emerald kalgi"],
  ["/gallery/classic-groom.webp", "Classic groom pagdi styled with a red ceremonial stole"],
  ["/gallery/royal-groom.webp", "Royal red wedding safa and embroidered groom styling"],
  ["/gallery/outdoor-groom.webp", "Pastel groom safa photographed in natural daylight"],
  ["/gallery/coordinated-grooms.webp", "Coordinated ivory wedding pagdis for a formal celebration"],
] as const;
