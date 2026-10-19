export interface Job {
  id: string;
  title: string;
  cafeName: string;
  cafeLogo: string;
  location: string;
  type: "Full-time" | "Part-time" | "Urgent Shift" | "Contract";
  payRate: string;
  postedAt: string;
  equipment: string[];
  description: string;
  urgency?: "Immediate" | "Within a week" | "Flexible";
  beansRoaster: string;
  featured?: boolean;
}

export interface Barista {
  id: string;
  name: string;
  avatar: string;
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  hourlyRate: string;
  availability: "Available Now" | "Weekends Only" | "Booked";
  certifications: string[];
  specialties: string[];
  equipmentMastery: string[];
  bio: string;
  favoriteOrigin: string;
}

export interface BrewGuide {
  id: string;
  name: string;
  iconName: string;
  tagline: string;
  ratio: string;
  defaultDoseGrams: number;
  defaultRatioNumber: number;
  grindSize: string;
  waterTemp: string;
  brewTime: string;
  notes: string;
  steps: {
    time: string;
    action: string;
    waterTargetGrams?: number;
  }[];
}

export const FEATURED_JOBS: Job[] = [
  {
    id: "job-1",
    title: "Head Barista & Dial-In Specialist",
    cafeName: "Velvet Crema Roastery",
    cafeLogo: "☕",
    location: "Downtown • Arts District",
    type: "Full-time",
    payRate: "$26 - $31 / hr + tips",
    postedAt: "2 hours ago",
    equipment: ["La Marzocco PB", "Mahlkönig EK43", "Marco Über Boiler"],
    beansRoaster: "Single Origin Geisha & Ethiopian Natural",
    description: "Seeking a passionate lead barista to manage our morning workflow, dial in daily single-origin lots, and mentor junior baristas.",
    urgency: "Immediate",
    featured: true,
  },
  {
    id: "job-2",
    title: "Weekend Rush Specialty Barista",
    cafeName: "Oat & Ember Coffee",
    cafeLogo: "🌾",
    location: "West End • Waterfront",
    type: "Urgent Shift",
    payRate: "$28 / hr flat (Immediate Payout)",
    postedAt: "30 mins ago",
    equipment: ["Slayer Espresso 3G", "Mythos Two", "Puqpress"],
    beansRoaster: "House Nordic Roast",
    description: "High-volume Saturday and Sunday shifts. Must have high-speed latte art competency and familiarity with Slayer paddle extraction.",
    urgency: "Immediate",
    featured: true,
  },
  {
    id: "job-3",
    title: "Senior Filter & Pour-Over Barista",
    cafeName: "Monolith Coffee Lab",
    cafeLogo: "🔬",
    location: "Midtown North",
    type: "Part-time",
    payRate: "$24 - $28 / hr",
    postedAt: "1 day ago",
    equipment: ["Hario V60 Station", "Fellow Stagg EKG", "Acaia Lunar"],
    beansRoaster: "Direct Trade Panama & Kenya",
    description: "Curate our dedicated pour-over bar, explain tasting notes to guests, and host monthly public cupping sessions.",
    urgency: "Within a week",
    featured: false,
  },
  {
    id: "job-4",
    title: "Roastery Assistant & Production Barista",
    cafeName: "Northstar Artisan Collective",
    cafeLogo: "⭐",
    location: "Industrial Park • Eastside",
    type: "Full-time",
    payRate: "$55,000 - $62,000 / yr",
    postedAt: "3 days ago",
    equipment: ["Loring S35 Kestrel", "Synesso MVP Hydra", "Kruve Sifter"],
    beansRoaster: "Direct Sourced Fairtrade",
    description: "Hybrid role supporting green bean evaluation, sample roasting, production bagging, and tasting bar service.",
    urgency: "Flexible",
    featured: false,
  },
];

export const TOP_BARISTAS: Barista[] = [
  {
    id: "barista-1",
    name: "Elena Rostova",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    title: "SCA Sensory Professional • 2x Latte Art Finalist",
    location: "Metro Area (Travel ready)",
    rating: 4.98,
    reviewCount: 42,
    hourlyRate: "$30/hr",
    availability: "Available Now",
    certifications: ["SCA Barista Level 3", "Q-Grader Cupper (In Training)"],
    specialties: ["High-speed Latte Art", "Multi-Origin Dial-In", "Espresso Profiling"],
    equipmentMastery: ["La Marzocco Strada", "Slayer Espresso", "Victoria Arduino Black Eagle"],
    bio: "7 years crafting specialty coffee across third-wave flagships. Comfortable handling 70+ orders/hr while keeping microfoam silky and extraction ratios razor-sharp.",
    favoriteOrigin: "Yirgacheffe Anaerobic Natural",
  },
  {
    id: "barista-2",
    name: "Marcus Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    title: "Head of Filter Bar & Brew Educator",
    location: "East District",
    rating: 4.95,
    reviewCount: 38,
    hourlyRate: "$28/hr",
    availability: "Weekends Only",
    certifications: ["SCA Brewing Foundation & Intermediate", "First Aid Certified"],
    specialties: ["V60 & Chemex Mastery", "Water Mineral Balancing", "Tasting Flights"],
    equipmentMastery: ["Mahlkönig EK43", "Acaia Orion", "Kees van der Westen Spirit"],
    bio: "Obsessed with extraction yields, refractometer TDS tracking, and making specialty coffee unpretentious and delightful for every guest.",
    favoriteOrigin: "Huila Pink Bourbon, Colombia",
  },
  {
    id: "barista-3",
    name: "Aria Thorne",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    title: "Lead Barista & Café Opening Consultant",
    location: "South Suburbs",
    rating: 5.0,
    reviewCount: 56,
    hourlyRate: "$35/hr",
    availability: "Available Now",
    certifications: ["SCA Barista Professional", "Lead Food Safety Certified"],
    specialties: ["Bar Workflow Optimization", "Staff Training", "Signature Mocktails"],
    equipmentMastery: ["Synesso MVP", "La Marzocco Linea Mini", "Mazzer Robur"],
    bio: "Helped launch 4 specialty coffee shops from blueprint to opening day. Available for urgent shift coverage, workflow audits, and guest barista pop-ups.",
    favoriteOrigin: "Gesha Village Lot 14, Ethiopia",
  },
];

export const BREW_GUIDES: BrewGuide[] = [
  {
    id: "v60",
    name: "Hario V60 Pour-Over",
    iconName: "Filter",
    tagline: "Crisp, vibrant acidity with clean cup clarity",
    ratio: "1:16 (Standard) or 1:15 (Intense)",
    defaultDoseGrams: 15,
    defaultRatioNumber: 16,
    grindSize: "Medium-Fine (Sea salt grain)",
    waterTemp: "93°C - 95°C (200°F - 203°F)",
    brewTime: "2:45 - 3:15",
    notes: "Rinse filter with hot water to remove paper taste. Use concentric circular pours avoiding the direct edges of the paper cone.",
    steps: [
      { time: "0:00", action: "Bloom: Pour 45g of water in spirals. Gently swirl 3 times.", waterTargetGrams: 45 },
      { time: "0:45", action: "First Pour: Pour continuously up to 140g in smooth center circles.", waterTargetGrams: 140 },
      { time: "1:30", action: "Second Pour: Pour steadily up to 240g total.", waterTargetGrams: 240 },
      { time: "2:15", action: "Gentle stir clockwise, slight tap on dripper, allow bed to drawdown completely flat." },
    ],
  },
  {
    id: "aeropress",
    name: "AeroPress (Inverted Method)",
    iconName: "Zap",
    tagline: "Full-bodied, sweet, and versatile espresso alternative",
    ratio: "1:12 to 1:14",
    defaultDoseGrams: 18,
    defaultRatioNumber: 13,
    grindSize: "Medium (Table salt)",
    waterTemp: "88°C - 92°C (190°F - 198°F)",
    brewTime: "2:00",
    notes: "Inverted method prevents early drip-through. Press gently for 30 seconds; stop immediately when you hear the hiss.",
    steps: [
      { time: "0:00", action: "Set AeroPress inverted. Add ground coffee and pour 70g water for bloom.", waterTargetGrams: 70 },
      { time: "0:30", action: "Stir vigorously 5 times, then pour remaining water to reach total target.", waterTargetGrams: 234 },
      { time: "1:15", action: "Attach rinsed filter cap and screw tight. Expel excess air.", waterTargetGrams: 234 },
      { time: "1:30", action: "Flip gently onto server. Plunge with even weight over 30 seconds." },
    ],
  },
  {
    id: "espresso",
    name: "Modern Specialty Espresso",
    iconName: "Coffee",
    tagline: "Rich crema, intense sweetness, and complex body",
    ratio: "1:2 to 1:2.2 (Modern 18g in, 36g out)",
    defaultDoseGrams: 18,
    defaultRatioNumber: 2,
    grindSize: "Fine (Powdery flour texture with slight grit)",
    waterTemp: "92°C - 94°C (198°F - 201°F)",
    brewTime: "26 - 30 seconds",
    notes: "Distribute bed evenly with a WDT tool to prevent channeling. Tamp level with 25-30 lbs pressure.",
    steps: [
      { time: "0:00", action: "Lock portafilter and start pump immediately. Pre-infusion 3-5 sec." },
      { time: "0:07", action: "First drops appear as syrupy hazelnut stream." },
      { time: "0:18", action: "Stream blondes and accelerates slightly." },
      { time: "0:28", action: "Cut shot right as scale hits target yield (e.g. 36g)." },
    ],
  },
  {
    id: "chemex",
    name: "Chemex Brewer",
    iconName: "FlaskConical",
    tagline: "Pristine clarity, tea-like body, highlights delicate floral notes",
    ratio: "1:16.5",
    defaultDoseGrams: 30,
    defaultRatioNumber: 16.5,
    grindSize: "Medium-Coarse (Rough kosher salt)",
    waterTemp: "94°C - 96°C",
    brewTime: "4:00 - 4:45",
    notes: "Chemex bonded filters are 30% thicker than regular filters, stripping out heavier oils and sediment for extreme nuance.",
    steps: [
      { time: "0:00", action: "Rinse 3-ply folded filter thoroughly. Bloom with 80g water, let degas.", waterTargetGrams: 80 },
      { time: "1:00", action: "First pulse pour up to 250g water in steady spiral.", waterTargetGrams: 250 },
      { time: "2:00", action: "Second pulse pour up to 400g water.", waterTargetGrams: 400 },
      { time: "3:00", action: "Final pulse up to total target. Allow complete drawdown." },
    ],
  },
  {
    id: "frenchpress",
    name: "Artisan French Press (Hoffmann Style)",
    iconName: "CupSoda",
    tagline: "Ultra rich, heavy mouthfeel, zero astringency",
    ratio: "1:15",
    defaultDoseGrams: 30,
    defaultRatioNumber: 15,
    grindSize: "Medium (Not overly coarse)",
    waterTemp: "95°C - 98°C",
    brewTime: "9:00 - 10:00",
    notes: "Do not plunge down into the sediment! Let gravity settle the grounds, scoop the crust, and use the mesh only as a strainer on top.",
    steps: [
      { time: "0:00", action: "Add coffee, pour full water vigorously to wet all grounds evenly.", waterTargetGrams: 450 },
      { time: "4:00", action: "Break crust with spoon. Scoop off floating foam and residual chaff." },
      { time: "5:00", action: "Put plunger in just above the liquid surface (do not push down)." },
      { time: "9:00", action: "Pour gently into cups through the top screen without disturbing the bed." },
    ],
  },
];
