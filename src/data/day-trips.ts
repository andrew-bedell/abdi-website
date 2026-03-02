export interface DayTrip {
  id: string;
  name: string;
  duration: string;
  price: number;
  highlights: string;
  description: string;
  includes: string[];
}

export const dayTrips: DayTrip[] = [
  {
    id: "materuni",
    name: "Materuni Waterfall",
    duration: "Full Day",
    price: 150,
    highlights: "Coffee making, waterfall hike, local lunch",
    description:
      "Trek through lush banana and coffee plantations to the stunning Materuni Waterfall. Learn the art of traditional coffee making from local farmers and enjoy an authentic Chagga lunch.",
    includes: [
      "Transport from Arusha",
      "Local guide",
      "Coffee making experience",
      "Traditional lunch",
      "Waterfall hike",
    ],
  },
  {
    id: "chemka",
    name: "Chemka Hot Springs",
    duration: "Full Day",
    price: 120,
    highlights: "Swimming in geothermal turquoise water",
    description:
      "Swim in the crystal-clear, geothermally heated turquoise waters of Chemka Hot Springs, nestled in a lush tropical forest setting.",
    includes: [
      "Transport from Arusha",
      "Park entrance fees",
      "Swimming time",
      "Packed lunch",
      "Towels provided",
    ],
  },
  {
    id: "city-tour",
    name: "Arusha City Tour",
    duration: "Half Day",
    price: 80,
    highlights: "Maasai Market, Cultural Heritage Center",
    description:
      "Discover the vibrant city of Arusha, the safari capital of East Africa. Visit the colorful Maasai Market, the Cultural Heritage Center, and enjoy local street food.",
    includes: [
      "Air-conditioned transport",
      "Knowledgeable city guide",
      "Market visit",
      "Cultural Heritage Center entry",
      "Refreshments",
    ],
  },
  {
    id: "maasai-boma",
    name: "Maasai Boma Visit",
    duration: "Full Day",
    price: 200,
    highlights: "Authentic cultural interaction and ritual",
    description:
      "An immersive cultural experience visiting an authentic Maasai community. Witness traditional dances, learn about Maasai customs, and participate in daily village activities.",
    includes: [
      "Transport from Arusha",
      "Community contribution fee",
      "Cultural guide and translator",
      "Traditional lunch",
      "Beadwork demonstration",
    ],
  },
];
