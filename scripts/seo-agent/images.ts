// Blog post hero image selection
// Images are in /public/images/blog/ and served at /images/blog/

interface BlogImage {
  src: string;
  alt: string;
  tags: string[];
}

const BLOG_IMAGES: BlogImage[] = [
  // Taxi drivers & vehicles
  { src: "/images/blog/01-taxi-drivers-talking-cars.webp", alt: "Professional taxi drivers with their vehicles", tags: ["local", "drivers", "service"] },
  { src: "/images/blog/02-male-taxi-driver-car.webp", alt: "Professional taxi driver standing by his car", tags: ["local", "drivers", "service"] },
  { src: "/images/blog/05-woman-driving-taxi-night.webp", alt: "Taxi driver providing a late night transfer", tags: ["night", "drivers", "service"] },
  { src: "/images/blog/07-taxi-drivers-coffee-street.webp", alt: "Friendly taxi drivers taking a break", tags: ["local", "drivers"] },
  { src: "/images/blog/10-taxi-driver-phone.webp", alt: "Taxi driver checking booking details", tags: ["booking", "drivers", "service"] },
  { src: "/images/blog/41-woman-smiling-steering-wheel.webp", alt: "Smiling driver ready for your journey", tags: ["drivers", "service", "friendly"] },

  // Passengers & rides
  { src: "/images/blog/03-man-riding-taxi-phone.webp", alt: "Passenger enjoying a comfortable taxi ride", tags: ["passenger", "comfort", "corporate"] },
  { src: "/images/blog/04-man-in-taxi-town.webp", alt: "Taxi ride through a local town centre", tags: ["local", "passenger", "town"] },
  { src: "/images/blog/06-businessman-riding-taxi-phone.webp", alt: "Business traveller in a professional taxi transfer", tags: ["corporate", "airport", "business"] },
  { src: "/images/blog/08-man-entering-taxi.webp", alt: "Passenger getting into a taxi", tags: ["passenger", "local", "booking"] },
  { src: "/images/blog/09-man-standing-near-taxi.webp", alt: "Passenger waiting by a taxi", tags: ["passenger", "local"] },
  { src: "/images/blog/14-man-entering-backseat.webp", alt: "Passenger settling into a comfortable taxi", tags: ["passenger", "comfort"] },
  { src: "/images/blog/15-man-passenger-seat-car.webp", alt: "Relaxed passenger in a taxi transfer", tags: ["passenger", "comfort", "airport"] },
  { src: "/images/blog/38-man-backseat-car-smiling.webp", alt: "Happy passenger enjoying a taxi ride", tags: ["passenger", "comfort", "friendly"] },
  { src: "/images/blog/40-couple-sitting-back-car.webp", alt: "Couple enjoying a comfortable taxi transfer", tags: ["passenger", "couple", "events", "wedding"] },
  { src: "/images/blog/42-businessman-working-in-car.webp", alt: "Business professional working during a taxi transfer", tags: ["corporate", "business", "airport"] },
  { src: "/images/blog/48-man-sunglasses-backseat-car.webp", alt: "Passenger relaxing during a taxi journey", tags: ["passenger", "comfort", "holiday"] },

  // Vehicles & doors
  { src: "/images/blog/11-black-sedan-road.webp", alt: "Professional taxi on the road", tags: ["vehicle", "airport", "service"] },
  { src: "/images/blog/12-hand-opening-car-door.webp", alt: "Opening the door to a taxi transfer", tags: ["service", "passenger", "booking"] },
  { src: "/images/blog/13-man-opening-car-door.webp", alt: "Driver opening the door for a passenger", tags: ["service", "drivers", "professional"] },
  { src: "/images/blog/20-car-interior-black.webp", alt: "Clean and comfortable taxi interior", tags: ["vehicle", "comfort", "professional"] },

  // Night & city
  { src: "/images/blog/16-night-city-street-neon-rain.webp", alt: "Late night taxi service in the town centre", tags: ["night", "events", "local"] },
  { src: "/images/blog/17-night-city-street-rain.webp", alt: "Reliable taxi service on a rainy evening", tags: ["night", "events", "weather"] },
  { src: "/images/blog/18-street-lamp-rainy-night.webp", alt: "Available 24/7 whatever the weather", tags: ["night", "weather", "service"] },
  { src: "/images/blog/19-blurry-city-street-night.webp", alt: "Night time taxi service in Staffordshire", tags: ["night", "events", "local"] },

  // Airport & travel
  { src: "/images/blog/21-airport-departure-board.webp", alt: "Airport departures board for taxi transfers", tags: ["airport", "flights", "transfer"] },
  { src: "/images/blog/22-people-walking-airport-terminal.webp", alt: "Travellers at the airport terminal", tags: ["airport", "flights", "transfer"] },
  { src: "/images/blog/23-woman-strolling-luggage.webp", alt: "Traveller with luggage heading to a taxi transfer", tags: ["airport", "luggage", "transfer"] },
  { src: "/images/blog/24-man-suit-walking-luggage.webp", alt: "Business traveller with luggage at the airport", tags: ["airport", "corporate", "business"] },
  { src: "/images/blog/25-man-holding-luggage-bag.webp", alt: "Passenger with luggage ready for an airport transfer", tags: ["airport", "luggage", "transfer"] },
  { src: "/images/blog/39-woman-suitcase-phone-street.webp", alt: "Booking an airport taxi transfer", tags: ["airport", "booking", "luggage"] },
  { src: "/images/blog/43-blue-travel-luggage.webp", alt: "Travel luggage ready for an airport transfer", tags: ["airport", "luggage", "holiday"] },
  { src: "/images/blog/44-airport-departure-board-terminals.webp", alt: "Airport terminal departure information", tags: ["airport", "flights", "transfer"] },
  { src: "/images/blog/45-person-packing-luggage.webp", alt: "Packing for a holiday with airport transfer booked", tags: ["airport", "luggage", "holiday"] },

  // Phone & booking
  { src: "/images/blog/26-man-using-mobile-phone.webp", alt: "Booking a taxi on a mobile phone", tags: ["booking", "phone", "service"] },
  { src: "/images/blog/27-person-using-smartphone.webp", alt: "Easy taxi booking from your phone", tags: ["booking", "phone", "service"] },
  { src: "/images/blog/49-person-using-smartphone-closeup.webp", alt: "Booking a Stone taxi from your smartphone", tags: ["booking", "phone", "local"] },

  // Countryside & roads
  { src: "/images/blog/28-car-driving-summer-countryside.webp", alt: "Taxi driving through the Staffordshire countryside", tags: ["countryside", "local", "days-out"] },
  { src: "/images/blog/29-scenic-country-road-landscape.webp", alt: "Scenic Staffordshire country road", tags: ["countryside", "local", "days-out"] },
  { src: "/images/blog/30-asphalt-road-near-trees.webp", alt: "Country road in Staffordshire", tags: ["countryside", "local", "journey"] },
  { src: "/images/blog/50-scenic-country-road-summer.webp", alt: "Summer drive through Staffordshire", tags: ["countryside", "days-out", "holiday"] },

  // Local Stone & Staffordshire
  { src: "/images/blog/31-stone-houses-english-village.webp", alt: "Traditional Stone town houses in Staffordshire", tags: ["local", "stone", "town"] },
  { src: "/images/blog/32-red-brick-victorian-townhouses.webp", alt: "Victorian townhouses in Staffordshire", tags: ["local", "stone", "town"] },
  { src: "/images/blog/33-european-street-brick-houses.webp", alt: "Residential street in Stone, Staffordshire", tags: ["local", "stone", "town"] },
  { src: "/images/blog/46-historic-brick-stone-building.webp", alt: "Historic building in Stone, Staffordshire", tags: ["local", "stone", "town"] },
  { src: "/images/blog/47-residential-houses-timber-frames.webp", alt: "Traditional houses in Staffordshire", tags: ["local", "stone", "town"] },

  // Train station
  { src: "/images/blog/34-york-train-station-platform.webp", alt: "Train station platform for taxi connections", tags: ["train", "station", "transfer"] },
  { src: "/images/blog/35-indoor-train-station-waiting.webp", alt: "Waiting at the train station for a taxi pickup", tags: ["train", "station", "transfer"] },

  // Wedding & events
  { src: "/images/blog/36-wedding-car-flowers.webp", alt: "Wedding taxi transport with flowers", tags: ["wedding", "events", "special"] },
  { src: "/images/blog/37-bride-groom-standing-car.webp", alt: "Bride and groom with their wedding taxi", tags: ["wedding", "events", "special"] },
];

// Map content categories/keywords to image tags for best matching
const CATEGORY_TAG_MAP: Record<string, string[]> = {
  "Airport Transfers": ["airport", "flights", "transfer", "luggage"],
  "Local Services": ["local", "stone", "town", "passenger"],
  "Specialist Services": ["service", "professional", "corporate"],
  "Seasonal Services": ["night", "events", "weather", "holiday"],
};

const KEYWORD_TAG_MAP: Record<string, string[]> = {
  airport: ["airport", "flights", "transfer", "luggage"],
  manchester: ["airport", "flights", "transfer"],
  birmingham: ["airport", "flights", "transfer"],
  "east midlands": ["airport", "flights", "transfer"],
  liverpool: ["airport", "flights", "transfer"],
  london: ["airport", "flights", "transfer"],
  wedding: ["wedding", "events", "special"],
  "night out": ["night", "events"],
  events: ["night", "events"],
  christmas: ["night", "events", "weather"],
  wheelchair: ["service", "passenger", "comfort"],
  school: ["local", "service", "passenger"],
  corporate: ["corporate", "business"],
  "alton towers": ["countryside", "days-out"],
  "days out": ["countryside", "days-out"],
  stone: ["local", "stone", "town"],
  stoke: ["local", "town"],
  stafford: ["local", "town"],
  train: ["train", "station"],
  booking: ["booking", "phone"],
  price: ["airport", "booking", "passenger"],
  parking: ["airport", "luggage"],
  group: ["passenger", "comfort"],
  taxi: ["local", "service", "drivers"],
};

/**
 * Pick the best hero image for a blog post based on its keyword and category.
 * Returns a different image each time even for similar topics by using
 * a scoring system with randomised tie-breaking.
 */
export function pickHeroImage(keyword: string, category: string): BlogImage {
  const targetTags = new Set<string>();

  // Add tags from category
  const categoryTags = CATEGORY_TAG_MAP[category];
  if (categoryTags) categoryTags.forEach((t) => targetTags.add(t));

  // Add tags from keyword matches
  const keywordLower = keyword.toLowerCase();
  for (const [key, tags] of Object.entries(KEYWORD_TAG_MAP)) {
    if (keywordLower.includes(key)) {
      tags.forEach((t) => targetTags.add(t));
    }
  }

  // If no tags matched, default to general local/service tags
  if (targetTags.size === 0) {
    ["local", "service", "passenger"].forEach((t) => targetTags.add(t));
  }

  // Score each image by tag overlap
  const scored = BLOG_IMAGES.map((img) => {
    const overlap = img.tags.filter((t) => targetTags.has(t)).length;
    return { img, score: overlap + Math.random() * 0.5 }; // randomise tie-breaking
  });

  scored.sort((a, b) => b.score - a.score);

  return scored[0].img;
}

/**
 * Get all available blog images (for reference in prompts)
 */
export function getAllImages(): BlogImage[] {
  return BLOG_IMAGES;
}
