export interface SafariTier {
  id: string;
  name: string;
  focusArea: string;
  accommodation: string;
  pricePerDay: number;
  description: string;
  highlights: string[];
}

export const safariTiers: SafariTier[] = [
  {
    id: "platinum",
    name: "Platinum Migration",
    focusArea: "Northern Serengeti",
    accommodation: "Luxury Mobile Tented Camps",
    pricePerDay: 1200,
    description:
      "Follow the Great Migration through the Northern Serengeti with luxury mobile camps that move with the herds. Witness dramatic Mara River crossings from exclusive vantage points.",
    highlights: [
      "Exclusive Mara River crossing viewpoints",
      "Luxury mobile tented camps",
      "Private game drives",
      "Expert naturalist guides",
      "Champagne bush breakfasts",
    ],
  },
  {
    id: "gold",
    name: "Gold Big Five",
    focusArea: "Central Serengeti / Ngorongoro Crater",
    accommodation: "5-Star Safari Lodges",
    pricePerDay: 850,
    description:
      "Experience the Big Five in the heart of the Serengeti and descend into the Ngorongoro Crater. Stay at iconic 5-star lodges with uninterrupted views of the African plains.",
    highlights: [
      "Big Five encounters",
      "Ngorongoro Crater descent",
      "5-star lodge accommodation",
      "Sunrise and sunset game drives",
      "Cultural Maasai interactions",
    ],
  },
  {
    id: "silver",
    name: "Silver Expedition",
    focusArea: "Tarangire / Lake Manyara",
    accommodation: "4-Star Boutique Camps",
    pricePerDay: 600,
    description:
      "Explore the baobab forests of Tarangire and the flamingo-covered shores of Lake Manyara. Boutique camps provide intimate access to Tanzania's diverse wildlife.",
    highlights: [
      "Massive elephant herds in Tarangire",
      "Tree-climbing lions of Manyara",
      "Flamingo-covered lake shores",
      "Boutique camp experience",
      "Walking safari options",
    ],
  },
  {
    id: "photographic",
    name: "Photographic Private",
    focusArea: "Tailored Itinerary",
    accommodation: "Specialist Photography Camps",
    pricePerDay: 1500,
    description:
      "A bespoke safari designed for photographers, with specialist guides who understand light, composition, and animal behavior. Customized vehicle setups for optimal shooting.",
    highlights: [
      "Specialist photography guides",
      "Custom vehicle camera mounts",
      "Golden hour positioning",
      "Unlimited game drive time",
      "Post-processing workshops",
    ],
  },
  {
    id: "family",
    name: "Family Adventure",
    focusArea: "Child-Friendly Parks",
    accommodation: "Family Suites / Interconnecting Rooms",
    pricePerDay: 700,
    description:
      "Safari adventures designed for families with children of all ages. Safe, engaging, and educational wildlife experiences with family-friendly accommodation.",
    highlights: [
      "Child-friendly activities and guides",
      "Family suite accommodation",
      "Flexible game drive schedules",
      "Educational wildlife programs",
      "Safe and secure environments",
    ],
  },
];

export interface MigrationMonth {
  months: string;
  location: string;
  significance: string;
  focus: string;
}

export const migrationCalendar: MigrationMonth[] = [
  {
    months: "January - March",
    location: "Southern Serengeti (Ndutu)",
    significance: "Calving Season",
    focus: "Predator-Prey Interactions",
  },
  {
    months: "April - May",
    location: "Central / Western Serengeti",
    significance: "Long Rains",
    focus: "Lush Landscapes, Low Crowds",
  },
  {
    months: "June - July",
    location: "Western Corridor",
    significance: "Grumeti River Crossings",
    focus: "Dramatic Water Crossings",
  },
  {
    months: "August - October",
    location: "Northern Serengeti",
    significance: "Mara River Crossings",
    focus: "The Ultimate Spectacle",
  },
  {
    months: "November - December",
    location: "Central Serengeti",
    significance: "Return to the South",
    focus: "High Concentration of Big Cats",
  },
];

export const safariParks = [
  {
    name: "Serengeti National Park",
    description:
      "Home to the Great Migration and the densest concentration of megafauna on the planet.",
    highlight: "The Great Migration",
  },
  {
    name: "Ngorongoro Crater",
    description:
      "The world's largest intact volcanic caldera with a permanent population of wildlife including rare black rhinoceros.",
    highlight: "Dawn Descent packages available",
  },
  {
    name: "Tarangire National Park",
    description:
      "Famous for massive baobab trees and the highest density of elephants in Tanzania during the dry season.",
    highlight: "Elephant herds & baobab forests",
  },
  {
    name: "Lake Manyara",
    description:
      "A bird-watcher's paradise home to thousands of flamingos and the famous tree-climbing lions.",
    highlight: "Flamingos & tree-climbing lions",
  },
  {
    name: "Arusha National Park",
    description:
      "Ideal for walking safaris and viewing Mount Meru, providing a gentle introduction to the Tanzanian wilderness.",
    highlight: "Walking safaris & Mount Meru views",
  },
];
