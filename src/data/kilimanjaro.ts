export interface KilimanjaroRoute {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  days: number;
  successRate: number;
  difficulty: string;
  landscape: string;
  priceRange: string;
  priceMin: number;
  priceMax: number;
  description: string;
  highlights: string[];
}

export const kilimanjaroRoutes: KilimanjaroRoute[] = [
  {
    id: "lemosho",
    name: "Lemosho Excellence",
    tagline: "The Connoisseur's Choice",
    duration: "8 Days",
    days: 8,
    successRate: 95,
    difficulty: "High",
    landscape: "Shira Plateau, Barranco Wall",
    priceRange: "$2,850 - $3,200",
    priceMin: 2850,
    priceMax: 3200,
    description:
      "The most diverse ecological transitions and superior acclimatization profile. Traverse the ancient Shira Plateau and conquer the iconic Barranco Wall on your way to Uhuru Peak.",
    highlights: [
      "Highest success rate among standard routes",
      "Diverse ecological zones from rainforest to arctic",
      "Scenic Shira Plateau crossing",
      "Iconic Barranco Wall scramble",
      "Premium luxury camping gear included",
    ],
  },
  {
    id: "machame",
    name: "Machame Classic",
    tagline: "The Whiskey Route",
    duration: "7 Days",
    days: 7,
    successRate: 85,
    difficulty: "High",
    landscape: "Rainforest, Alpine Desert",
    priceRange: "$2,400 - $2,650",
    priceMin: 2400,
    priceMax: 2650,
    description:
      "The iconic 'Whiskey Route' offers dramatic scenery and a challenging climb through diverse terrain. A favorite among experienced trekkers seeking an authentic mountain experience.",
    highlights: [
      "Most popular route on Kilimanjaro",
      "Stunning scenery throughout",
      "Excellent acclimatization profile",
      "Challenging but rewarding terrain",
      "Full camping experience",
    ],
  },
  {
    id: "marangu",
    name: "Marangu Heritage",
    tagline: "The Heritage Path",
    duration: "6 Days",
    days: 6,
    successRate: 70,
    difficulty: "Medium",
    landscape: "Huts, Gentler Gradient",
    priceRange: "$2,100 - $2,350",
    priceMin: 2100,
    priceMax: 2350,
    description:
      "The only route providing permanent hut accommodation, offering protection from the elements. Known as the 'Coca-Cola Route,' it follows a gentler gradient with historical significance.",
    highlights: [
      "Only route with hut accommodation",
      "Gentler gradient suitable for beginners",
      "Historical significance as the oldest route",
      "Same ascent and descent path",
      "Comfortable sleeping in mountain huts",
    ],
  },
  {
    id: "northern-circuit",
    name: "Northern Circuit Pro",
    tagline: "The Ultimate Circumnavigation",
    duration: "9 Days",
    days: 9,
    successRate: 98,
    difficulty: "Medium-High",
    landscape: "Remote Slopes, 360° Views",
    priceRange: "$3,500 - $4,000",
    priceMin: 3500,
    priceMax: 4000,
    description:
      "The longest route on Kilimanjaro offering unparalleled acclimatization and the highest summit success rate. A full circumnavigation reveals the mountain's most remote and pristine slopes.",
    highlights: [
      "Highest success rate of any route (98%)",
      "Full 360° circumnavigation of Kilimanjaro",
      "Most remote and uncrowded experience",
      "Maximum acclimatization time",
      "Pristine, untouched wilderness",
    ],
  },
  {
    id: "rongai",
    name: "Rongai Remote",
    tagline: "The Northern Approach",
    duration: "7 Days",
    days: 7,
    successRate: 80,
    difficulty: "Medium",
    landscape: "Northern Slope, Drier",
    priceRange: "$2,550 - $2,800",
    priceMin: 2550,
    priceMax: 2800,
    description:
      "Approaching from the north near the Kenyan border, Rongai offers a drier, less crowded alternative. The gentle gradient and unique perspective make it ideal for those seeking solitude.",
    highlights: [
      "Driest route, ideal during rainy season",
      "Less crowded northern approach",
      "Gentle gradient with steady ascent",
      "Unique views of the Kenyan plains",
      "Wilderness camping experience",
    ],
  },
  {
    id: "umbwe",
    name: "Umbwe Technical",
    tagline: "The Vertical Challenge",
    duration: "6 Days",
    days: 6,
    successRate: 60,
    difficulty: "Extreme",
    landscape: "Direct Vertical Ascent",
    priceRange: "$2,300 - $2,500",
    priceMin: 2300,
    priceMax: 2500,
    description:
      "The most direct and challenging route to the summit. Umbwe is reserved for experienced, physically fit climbers who thrive on steep, demanding terrain.",
    highlights: [
      "Most challenging route on Kilimanjaro",
      "Direct vertical ascent",
      "Least crowded route",
      "For experienced climbers only",
      "Dramatic forest and moorland scenery",
    ],
  },
];