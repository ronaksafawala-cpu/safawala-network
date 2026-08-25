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
  "Mumbai": ["Mumbai wedding schedules can include home rituals followed by a venue entry elsewhere in India.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Delhi": ["Delhi is a practical base for wedding ceremonies on both sides of the India service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Bengaluru": ["Bengaluru wedding schedules can include home rituals followed by a venue entry elsewhere in India.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Hyderabad": ["Families near Hyderabad usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Chennai": ["Chennai suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Kolkata": ["Kolkata celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Pune": ["Pune weddings often bring together resort guests, destination groups and families staying close to the India hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Ahmedabad": ["Ahmedabad-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Jaipur": ["Families near Jaipur usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Surat": ["Surat celebrations often combine local family ceremonies with guests arriving from outside India.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Lucknow": ["Lucknow functions often bring family groups arriving from several parts of India.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Kanpur": ["Kanpur suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Nagpur": ["Nagpur-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Indore": ["Indore celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Bhopal": ["Bhopal suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Patna": ["For wedding groups near Patna, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Vadodara": ["Vadodara celebrations often combine local family ceremonies with guests arriving from outside India.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Ludhiana": ["Ludhiana is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Agra": ["Agra-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Nashik": ["Nashik celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Faridabad": ["Faridabad wedding schedules can include home rituals followed by a venue entry elsewhere in India.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Meerut": ["Meerut-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Rajkot": ["Rajkot is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Varanasi": ["Varanasi is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Amritsar": ["Amritsar is a practical base for wedding ceremonies on both sides of the India service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Chandigarh": ["Chandigarh suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Gwalior": ["Gwalior is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Vijayawada": ["For wedding groups near Vijayawada, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Jodhpur": ["Jodhpur-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Madurai": ["Madurai is popular with intimate and destination wedding groups looking for a distinctly India setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Coimbatore": ["Coimbatore-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Kochi": ["Kochi wedding schedules can include home rituals followed by a venue entry elsewhere in India.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Visakhapatnam": ["Families near Visakhapatnam usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Guwahati": ["Guwahati-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Bhubaneswar": ["Bhubaneswar suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Dehradun": ["Dehradun celebrations often combine local family ceremonies with guests arriving from outside India.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Raipur": ["Raipur-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Ranchi": ["Ranchi is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Jamshedpur": ["Jamshedpur wedding schedules can include home rituals followed by a venue entry elsewhere in India.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Jabalpur": ["Jabalpur is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Gurugram": ["For wedding groups near Gurugram, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Noida": ["Noida weddings often bring together resort guests, destination groups and families staying close to the India hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Ghaziabad": ["Ghaziabad is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Thiruvananthapuram": ["For wedding groups near Thiruvananthapuram, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Mysuru": ["Mysuru suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Udaipur": ["Udaipur suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Ajmer": ["Ajmer celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Bikaner": ["Bikaner is popular with intimate and destination wedding groups looking for a distinctly India setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Kota": ["Kota weddings often bring together resort guests, destination groups and families staying close to the India hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Shimla": ["Shimla is popular with intimate and destination wedding groups looking for a distinctly India setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Manali": ["Manali suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Srinagar": ["Srinagar celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Jammu": ["For wedding groups near Jammu, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Dharamshala": ["Dharamshala is a practical base for wedding ceremonies on both sides of the India service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Rishikesh": ["Rishikesh functions often bring family groups arriving from several parts of India.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Haridwar": ["For wedding groups near Haridwar, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Nainital": ["Nainital weddings often bring together resort guests, destination groups and families staying close to the India hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Mussoorie": ["Mussoorie celebrations often combine local family ceremonies with guests arriving from outside India.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Goa": ["Goa wedding schedules can include home rituals followed by a venue entry elsewhere in India.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Panaji": ["For wedding groups near Panaji, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Pondicherry": ["For wedding groups near Pondicherry, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Mangaluru": ["For wedding groups near Mangaluru, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Hubballi": ["Hubballi wedding schedules can include home rituals followed by a venue entry elsewhere in India.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Belagavi": ["Belagavi is a practical base for wedding ceremonies on both sides of the India service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Salem": ["Salem celebrations often combine local family ceremonies with guests arriving from outside India.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Tiruchirappalli": ["Tiruchirappalli celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Warangal": ["Warangal functions often bring family groups arriving from several parts of India.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Guntur": ["Families near Guntur usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Nellore": ["Nellore is popular with intimate and destination wedding groups looking for a distinctly India setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  "Tirupati": ["Tirupati is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Aurangabad": ["Aurangabad functions often bring family groups arriving from several parts of India.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Solapur": ["Solapur is a practical base for wedding ceremonies on both sides of the India service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Kolhapur": ["Kolhapur celebrations often combine local family ceremonies with guests arriving from outside India.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Amravati": ["Amravati suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Siliguri": ["Siliguri wedding schedules can include home rituals followed by a venue entry elsewhere in India.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Durgapur": ["Families near Durgapur usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Asansol": ["Asansol celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Cuttack": ["Cuttack suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Rourkela": ["Rourkela wedding schedules can include home rituals followed by a venue entry elsewhere in India.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Muzaffarpur": ["Muzaffarpur functions often bring family groups arriving from several parts of India.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  "Gaya": ["For wedding groups near Gaya, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Bilaspur": ["Bilaspur-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Bhilai": ["Bhilai is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  "Dhanbad": ["Families near Dhanbad usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Bokaro": ["Bokaro celebrations often combine local family ceremonies with guests arriving from outside India.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Alwar": ["Families near Alwar usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Bharatpur": ["Bharatpur suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Sikar": ["Families near Sikar usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Bhilwara": ["Bhilwara celebrations call for a calm, organised safa service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Ujjain": ["For wedding groups near Ujjain, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Sagar": ["Sagar weddings often bring together resort guests, destination groups and families staying close to the India hospitality belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Satna": ["Satna celebrations often combine local family ceremonies with guests arriving from outside India.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  "Rewa": ["Rewa-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Bareilly": ["Bareilly is a practical base for wedding ceremonies on both sides of the India service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Moradabad": ["Moradabad is a practical base for wedding ceremonies on both sides of the India service area.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
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
      [`Can I book a professional wedding safa wala in ${name}?`, `Yes. ${summary} We accept ${name} bookings as a ${group === "Nationwide" ? "local on-location service" : "pre-planned travelling assignment"}, subject to the wedding date and artist availability.`],
      [`What should we confirm for a ${name} wedding venue?`, `${planning} Please send the exact venue pin, preparation-room details and the groom\u2019s ready-by time rather than only the venue name.`],
      [`Which groom pagdi style suits a wedding in ${name}?`, `${finish} works particularly well with ${palette} palettes, although the final groom pagdi is selected from the sherwani, face profile, jewellery and ceremony setting.`],
      [`How many safa artists are needed for a ${name} baraat?`, `The team size depends on the final number of baraati safas and the time between guest arrival and procession departure. For ${name}, we separate the groom\u2019s detailed session from faster family and baraati batches.`],
      [`Can you provide family pagdis and baraati safas in different colours?`, `Yes. For a ${name} celebration, the groom can remain distinctive while parents, close family and the wider baraat use complementary colour groups. Share outfit references before fabric is finalised.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Nationwide");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in India", intro: "A dependable safa tying appointment for the whole wedding party, timed to your ceremony and photography schedule.", detail: "We confirm the drape and colour direction ahead of the event, then bring enough artists to keep every batch moving without delay.", faqs: [["How many safas can your team tie?", "Team size is matched to your headcount and available preparation window. Share both figures for an accurate plan."], ["Do you come to the hotel or venue?", "Yes. Our artists provide on-location service at hotels, resorts, homes and wedding venues."], ["Can colours match the wedding theme?", "Yes. Send outfit or décor references before the event so we can recommend suitable coordinated shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in India", intro: "Camera-ready pagdi styling built specifically for the groom, separate from the faster family and guest sessions.", detail: "We shape the fold around the outfit and jewellery first, then finish with accessories that stay balanced rather than heavy.", faqs: [["When should the groom's pagdi be tied?", "Usually before the main portrait session and after the sherwani is complete. We align the exact time with your photographer."], ["Can you suggest a pagdi colour?", "Yes. We consider the sherwani, stole, jewellery and overall wedding palette before suggesting a shade."], ["Is the groom styled separately?", "Yes. The groom's session is planned separately from the faster family and baraati sequence."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in India", intro: "Coordinated baraati safa tying that keeps a large guest list moving without holding up the departure.", detail: "One agreed style is used across the group, with batches sized to the time available before the baraat leaves.", faqs: [["What's your capacity for a big baraat?", "We scale the artist team to match your group size and the time you have available."], ["Should extra safas be kept as backup?", "It's a good idea — a small buffer handles late guests or fit changes smoothly."], ["Can close family stand out with a different colour?", "Yes, a complementary shade for parents and siblings works well against a uniform wider group."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for India", intro: "Destination-ready safa styling for resorts and multi-function weddings that span more than one day.", detail: "We work directly with the venue or planner to confirm access, then build a tying sequence across rooms and functions.", faqs: [["Will you travel to resorts beyond India itself?", "Yes — just share the property details and schedule so we can plan travel and access in advance."], ["Can the same team cover more than one function?", "We can quote a multi-event assignment once we know the dates, styles and any accommodation needs."], ["How far ahead should destination bookings be made?", "A few weeks ahead is ideal for peak dates, so the team is reserved in time."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in India", intro: "A family-wide pagdi plan that keeps parents and relatives visually aligned without competing with the groom.", detail: "Close family receive a shared, repeatable style while the groom's session remains separately detailed.", faqs: [["Can elders have a softer fit?", "Yes. Tell the artist about comfort needs and we can adjust tension and finish."], ["Can two families use separate colours?", "Yes. Separate but complementary palettes can make each side easy to identify."], ["Do you style children?", "Children can be included when their approximate ages and headcount are shared in advance."]] },
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
    ["How is consistency maintained across all baraati safas?", "One fold and colour is agreed in advance, and guests are tied in organised batches so the procession photographs look coordinated."],
    ["Can guests who arrive late still be styled?", "Yes — keep a little fabric and time in reserve, and have a coordinator route late arrivals to the tying area before wrap-up."],
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
    ["When's the right time to lock in safa colours?", "Once the main outfits are chosen — early enough that we can check the fabric in both daylight and indoor light."],
    ["Can guests wear more than one coordinated colour?", "Yes, two or three controlled shades can group families while keeping the whole baraat looking cohesive."],
  ],
};

export function getServiceFaqs(service: (typeof services)[number]) {
  return [...service.faqs, ...(serviceFaqAdditions[service.slug] ?? [])] as [string, string][];
}

export const primaryKeywords = [
  "celebrity wedding safa styling",
  "high-profile groom pagdi",
  "discreet wedding safa service",
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
