export interface WorldTopic {
  id: string;
  title: string;
  funTitle: string;
  grade: string;
  category: 'Continents & Oceans' | 'Wonders & Places' | 'Earth & Climate' | 'Animals & Nature' | 'Cultures & People';
  emoji: string;
  color: string;
  badge: string;
  concept: string;
  character: {
    name: string;
    avatar: string;
    role: string;
  };
  funStory: {
    setup: string;
    action: string;
    result: string;
  };
  visualBreakdown: {
    ruleLabel: string;
    examples: { item: string; label: string; highlight?: string }[];
    caption: string;
  };
  interactiveType:
    | 'continents-explorer'
    | 'oceans-diver'
    | 'world-wonders'
    | 'animal-habitats'
    | 'day-night-spin'
    | 'world-greetings'
    | 'climates-biomes'
    | 'mountain-elevation';
  funSecret: string;
  quickQuiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    hint: string;
  };
}

export const KIDS_WORLD_TOPICS: WorldTopic[] = [
  {
    id: 'continents-explorer',
    title: 'The 7 Continents of Earth',
    funTitle: 'Giant Landmass Safari: Exploring the 7 Continents! 🌍🦁',
    grade: 'Class 1–5',
    category: 'Continents & Oceans',
    emoji: '🗺️',
    color: 'from-blue-600 to-emerald-700',
    badge: '7 Continents',
    concept:
      'Earth has 7 giant landmasses called continents: Asia (largest), Africa, North America, South America, Antarctica (ice continent), Europe, and Australia (island continent). More than 8 billion people live across these lands!',
    character: {
      name: 'Captain Geo',
      avatar: '🧭',
      role: 'World Navigator'
    },
    funStory: {
      setup: 'Captain Geo hopped into his hot air balloon to map all 7 landmasses of our planet in a single flight!',
      action: 'He soared over Asia’s giant mountains, across the African Sahara, through the Amazon rain in South America, and spotted icebergs in Antarctica.',
      result: 'Every continent has unique people, animals, and landscapes, yet we all share the same planet Earth!'
    },
    visualBreakdown: {
      ruleLabel: 'The 7 Continents From Largest to Smallest:',
      examples: [
        { item: '1. Asia 🌏', label: 'Largest continent, home to 60% of humans and Mt. Everest!' },
        { item: '2. Africa 🌍', label: 'Second largest, home to the Nile River and Sahara Desert!' },
        { item: '3. North America 🌎', label: 'Famous for Rocky Mountains, Great Lakes, and Niagara Falls.' },
        { item: '4. South America 🦜', label: 'Home to the giant Amazon Rainforest and Andes Mountains.' },
        { item: '5. Antarctica 🧊', label: 'Frozen southern continent covered in 98% thick ice!' },
        { item: '6. Europe 🏰', label: 'Continent of historic castles, the Alps, and 50 countries.' },
        { item: '7. Australia 🦘', label: 'Smallest continent, famous for kangaroos and Great Barrier Reef.' }
      ],
      caption: 'Remember: Asia is the biggest continent, and Australia is the smallest!'
    },
    interactiveType: 'continents-explorer',
    funSecret: 'Antarctica is technically the world’s biggest desert because it receives almost zero rainfall, only snow and ice!',
    quickQuiz: {
      question: 'Which continent is the largest on planet Earth?',
      options: ['Africa', 'Asia', 'Europe', 'Australia'],
      correctIndex: 1,
      explanation: 'Asia is the largest continent in both area and population, covering about 30% of Earth’s land area!',
      hint: 'It is home to the highest peak in the world, Mount Everest!'
    }
  },
  {
    id: 'oceans-diver',
    title: 'The 5 Oceans of Earth',
    funTitle: 'Deep Blue Submarine: The 5 Giant Oceans! 🌊🐋',
    grade: 'Class 1–5',
    category: 'Continents & Oceans',
    emoji: '🌊',
    color: 'from-sky-600 to-indigo-900',
    badge: '5 Oceans',
    concept:
      'Over 71% of Earth’s surface is covered by ocean water! There are 5 major oceans: Pacific (deepest & biggest), Atlantic (second largest), Indian (warmest ocean washing Pakistan’s coast), Southern (around Antarctica), and Arctic (coldest & smallest).',
    character: {
      name: 'Marina the Submarine Diver',
      avatar: '🤿',
      role: 'Ocean Explorer'
    },
    funStory: {
      setup: 'Marina submerged in her yellow submarine to explore where blue whales sing and coral reefs glow.',
      action: 'She dove into the Pacific’s Mariana Trench—the deepest spot on Earth—and then cruised into the warm Indian Ocean.',
      result: 'The oceans produce more than half the oxygen we breathe through tiny sea plants called phytoplankton!'
    },
    visualBreakdown: {
      ruleLabel: 'The 5 Oceans Ranked by Size:',
      examples: [
        { item: 'Pacific Ocean 🌊', label: 'Largest and deepest ocean; holds the Mariana Trench (11,000m deep).' },
        { item: 'Atlantic Ocean 🚢', label: 'Second largest; separates the Americas from Europe and Africa.' },
        { item: 'Indian Ocean 🏝️', label: 'Warmest ocean; borders South Asia, Africa, and Australia.' },
        { item: 'Southern Ocean 🐧', label: 'Circles freezing Antarctica; home to penguins and icebergs.' },
        { item: 'Arctic Ocean 🐻‍❄️', label: 'Smallest and shallowest ocean; frozen with sea ice at the North Pole.' }
      ],
      caption: 'Water connects all 5 oceans into one giant global sea!'
    },
    interactiveType: 'oceans-diver',
    funSecret: 'The Pacific Ocean is so vast that all 7 continents could fit inside it with room left over!',
    quickQuiz: {
      question: 'Which is the largest and deepest ocean on Earth?',
      options: ['Indian Ocean', 'Atlantic Ocean', 'Pacific Ocean', 'Arctic Ocean'],
      correctIndex: 2,
      explanation: 'The Pacific Ocean is the largest ocean, covering more area than all Earth’s land combined!',
      hint: 'It shares its name with something that means peaceful!'
    }
  },
  {
    id: 'world-wonders',
    title: 'Wonders of the World',
    funTitle: 'World Wonders Tour: Marvels Built by Human Hands! 🏛️✨',
    grade: 'Class 2–5',
    category: 'Wonders & Places',
    emoji: '🏛️',
    color: 'from-amber-600 to-orange-800',
    badge: 'World Wonders',
    concept:
      'Human civilizations have built awe-inspiring monuments that have lasted thousands of years! From the Great Wall of China and the Pyramids of Giza to the Taj Mahal and the Roman Colosseum, these wonders showcase brilliant architecture and creativity.',
    character: {
      name: 'Zara the Archaeologist',
      avatar: '🔍',
      role: 'Ancient Ruins Guide'
    },
    funStory: {
      setup: 'Zara held an ancient leather map pointing to 7 historic monuments across different continents.',
      action: 'She climbed the stone steps of the Great Wall, admired the white marble reflection of the Taj Mahal, and gazed at the towering Giza Pyramids.',
      result: 'She realized that people from every culture have built incredible wonders when working together!'
    },
    visualBreakdown: {
      ruleLabel: 'World Famous Architectural Marvels:',
      examples: [
        { item: 'Great Wall of China 🐉', label: 'China: Over 21,000 km long, built with stone and bricks!' },
        { item: 'Pyramids of Giza 🔺', label: 'Egypt: Built over 4,500 years ago as tombs for Pharaohs.' },
        { item: 'Taj Mahal 🕌', label: 'India: Ivory-white marble mausoleum built by Emperor Shah Jahan.' },
        { item: 'Colosseum 🏟️', label: 'Italy (Rome): Ancient amphitheater that held 50,000 spectators.' },
        { item: 'Machu Picchu ⛰️', label: 'Peru: High Inca mountain citadel hidden in the cloud forests.' },
        { item: 'Eiffel Tower 🗼', label: 'France (Paris): 330m wrought-iron lattice tower standing tall.' }
      ],
      caption: 'These monuments tell stories of human perseverance, engineering, and art.'
    },
    interactiveType: 'world-wonders',
    funSecret: 'The Great Pyramid of Giza was the tallest man-made structure in the world for more than 3,800 years!',
    quickQuiz: {
      question: 'In which country is the famous Taj Mahal located?',
      options: ['Egypt', 'India', 'China', 'Italy'],
      correctIndex: 1,
      explanation: 'The Taj Mahal is located in Agra, India, built by Mughal Emperor Shah Jahan using luminous white marble!',
      hint: 'It was built during the Mughal era in South Asia!'
    }
  },
  {
    id: 'animal-habitats',
    title: 'World Animals & Where They Live',
    funTitle: 'Wild Planet: Match Animals to Their Native Continents! 🦘🐼',
    grade: 'Class 1–4',
    category: 'Animals & Nature',
    emoji: '🦁',
    color: 'from-emerald-600 to-green-800',
    badge: 'Animal Habitats',
    concept:
      'Different animals are specially adapted to live in different parts of the world. Kangaroos live in the Australian outback, Giant Pandas in China’s bamboo forests, Lions in the African savannah, and Polar Bears on Arctic sea ice!',
    character: {
      name: 'Ranger Leo',
      avatar: '🤠',
      role: 'Wildlife Protector'
    },
    funStory: {
      setup: 'Ranger Leo tracked footprints across sand, snow, and dense rainforest vines.',
      action: 'He spotted a hopping kangaroo in Australia, a roaring lion pride in Kenya, and swimming emperor penguins in Antarctica.',
      result: 'Every animal plays a vital role in Earth’s ecosystem and must be protected from habitat loss.'
    },
    visualBreakdown: {
      ruleLabel: 'Global Animal Champions & Their Continents:',
      examples: [
        { item: 'Kangaroo & Koala 🦘', label: 'Australia: Marsupials that carry their babies in cozy pouches!' },
        { item: 'Giant Panda 🐼', label: 'Asia (China): Eats 12 to 38 kg of bamboo every single day.' },
        { item: 'African Elephant & Lion 🐘', label: 'Africa: The largest land mammal and the king of the savannah.' },
        { item: 'Toucan & Jaguar 🦜', label: 'South America: Colorful birds and stealthy big cats of the Amazon.' },
        { item: 'Polar Bear 🐻‍❄️', label: 'Arctic (North Pole): Thick insulated fur for freezing temperatures.' },
        { item: 'Emperor Penguin 🐧', label: 'Antarctica (South Pole): Flightless birds that swim gracefully.' }
      ],
      caption: 'Notice: Polar bears live only at the North Pole, and penguins live around the South Pole!'
    },
    interactiveType: 'animal-habitats',
    funSecret: 'Polar bears and penguins NEVER meet in the wild! Polar bears live in the Arctic (North), while penguins live in Antarctica (South)!',
    quickQuiz: {
      question: 'Which continent is the native home of wild Kangaroos?',
      options: ['Africa', 'Australia', 'Europe', 'North America'],
      correctIndex: 1,
      explanation: 'Kangaroos are native to Australia, where they leap across plains and open bushlands!',
      hint: 'It is the island continent down south!'
    }
  },
  {
    id: 'day-night-spin',
    title: 'Day, Night & Earth’s Rotation',
    funTitle: 'Spinning Globe: Why We Have Day & Night! ☀️🌙',
    grade: 'Class 1–5',
    category: 'Earth & Climate',
    emoji: '🌎',
    color: 'from-indigo-600 to-sky-700',
    badge: 'Earth Rotation',
    concept:
      'Earth spins like a giant top on its axis once every 24 hours. The half of Earth facing the Sun experiences daylight, while the opposite side in the shadow experiences nighttime! When it is day in Pakistan, it is nighttime in America!',
    character: {
      name: 'Astro Sam',
      avatar: '🧑‍🚀',
      role: 'Orbiting Astronaut'
    },
    funStory: {
      setup: 'Sam floated in the International Space Station looking down on planet Earth.',
      action: 'He watched the terminator line—the border between day and night—sweep smoothly across city lights and ocean waves.',
      result: 'As Earth rotates eastward at 1,600 km/h at the equator, day seamlessly follows night everywhere!'
    },
    visualBreakdown: {
      ruleLabel: 'How Earth Moves:',
      examples: [
        { item: 'Rotation (Spinning) 🔄', label: 'Earth spins on its axis every 24 hours -> causes DAY & NIGHT!' },
        { item: 'Revolution (Orbit) ☀️', label: 'Earth circles around the Sun in 365.25 days -> causes the 4 SEASONS!' },
        { item: 'Day Side ☀️', label: 'Facing Sun: Bright, warm, time for school, playing, and work.' },
        { item: 'Night Side 🌙', label: 'Facing away from Sun: Dark, cooler, time for stars and sweet dreams.' }
      ],
      caption: 'The Earth never stops spinning smoothly, even while you are fast asleep!'
    },
    interactiveType: 'day-night-spin',
    funSecret: 'Because Earth rotates from West to East, the Sun always appears to rise in the East and set in the West!',
    quickQuiz: {
      question: 'How long does it take Earth to rotate once on its own axis?',
      options: ['12 hours', '24 hours (1 day)', '7 days', '365 days'],
      correctIndex: 1,
      explanation: 'Earth takes 24 hours (one full day) to complete one rotation on its axis, giving us day and night!',
      hint: 'It equals exactly one full day!'
    }
  },
  {
    id: 'world-greetings',
    title: 'World Languages & Greetings',
    funTitle: 'The Hello Jukebox: Say Hello in 6 Global Languages! 🗣️🤝',
    grade: 'Class 1–4',
    category: 'Cultures & People',
    emoji: '🗣️',
    color: 'from-purple-600 to-pink-700',
    badge: 'World Languages',
    concept:
      'Over 7,000 languages are spoken on Earth! Greeting someone politely in their native tongue builds friendship, peace, and understanding across all borders.',
    character: {
      name: 'Amira the Polyglot',
      avatar: '👧',
      role: 'Friendship Ambassador'
    },
    funStory: {
      setup: 'Amira visited an international youth camp with children from 20 different countries.',
      action: 'She smiled and said "Assalam-o-Alaikum" to her neighbor, "Hola" to Diego from Spain, and "Bonjour" to Sophie from France.',
      result: 'Instantly, everyone smiled back! A warm greeting opens hearts anywhere in the world.'
    },
    visualBreakdown: {
      ruleLabel: 'Global Ways to Say Hello:',
      examples: [
        { item: 'Assalam-o-Alaikum 🇵🇰🇸🇦', label: 'Urdu & Arabic: "Peace be upon you" - spoken by over 1.5 billion people!' },
        { item: 'Hello / Hi 🇬🇧🇺🇸', label: 'English: The most widely used international language of travel and science.' },
        { item: 'Hola 🇪🇸🇲🇽', label: 'Spanish: Spoken throughout Spain, Mexico, and Latin America!' },
        { item: 'Bonjour 🇫🇷🇨🇦', label: 'French: Elegant greeting spoken in France, Canada, and parts of Africa.' },
        { item: 'Konnichiwa 🇯🇵', label: 'Japanese: Polite daytime greeting accompanied by a gentle bow.' },
        { item: 'Ni Hao 🇨🇳', label: 'Mandarin Chinese: Spoken by over 1 billion people across China!' }
      ],
      caption: 'No matter what language you speak, a kind smile means the same everywhere!'
    },
    interactiveType: 'world-greetings',
    funSecret: 'The word "Alphabet" comes from the first two letters of the Greek alphabet: Alpha and Beta!',
    quickQuiz: {
      question: 'How do people say "Hello" in Spanish?',
      options: ['Bonjour', 'Hola', 'Ni Hao', 'Konnichiwa'],
      correctIndex: 1,
      explanation: '"Hola" (pronounced oh-lah, with silent H) is the friendly Spanish greeting used across Spain and the Americas!',
      hint: 'It starts with the letter H, which is silent!'
    }
  },
  {
    id: 'climates-biomes',
    title: 'Extreme Climates & Biomes',
    funTitle: 'Hot Deserts to Icy Glaciers: Earth’s Biomes! 🌵❄️',
    grade: 'Class 2–5',
    category: 'Earth & Climate',
    emoji: '🏜️',
    color: 'from-amber-600 to-yellow-800',
    badge: 'Biomes & Climates',
    concept:
      'Earth has dramatically different climate zones: blistering hot sand dunes in the Sahara Desert, freezing ice caps at the poles, dense lush rainforests near the equator, and open grassy savannas.',
    character: {
      name: 'Dr. Terran',
      avatar: '🌡️',
      role: 'Climate Scientist'
    },
    funStory: {
      setup: 'Dr. Terran packed snowshoes, water canteens, and rain ponchos in his expedition truck.',
      action: 'He measured scorching 50°C heat in the desert, drenched under tropical monsoon showers, and shivered at -40°C in the tundra.',
      result: 'Plants and animals have evolved marvelous tricks: cacti store water in fat stems, and polar foxes grow white winter coats!'
    },
    visualBreakdown: {
      ruleLabel: 'Major World Biomes:',
      examples: [
        { item: 'Tropical Rainforest 🌴', label: 'Warm and rainy all year round; home to half of Earth’s species!' },
        { item: 'Hot Desert 🌵', label: 'Extremely dry, less than 25 cm of rain per year with cactus plants.' },
        { item: 'Polar Ice Cap 🧊', label: 'Permanently frozen ice sheets where temperatures stay below freezing.' },
        { item: 'Temperate Forest 🍁', label: 'Four distinct seasons; leaves change to golden red in autumn.' }
      ],
      caption: 'The equator receives the most direct sunlight, making it the warmest region on Earth!'
    },
    interactiveType: 'climates-biomes',
    funSecret: 'The Amazon Rainforest is so large and produces so much moisture that it creates its own clouds and rain!',
    quickQuiz: {
      question: 'Which of the following is the world’s largest hot sand desert?',
      options: ['Thar Desert', 'Gobi Desert', 'Sahara Desert', 'Kalahari Desert'],
      correctIndex: 2,
      explanation: 'The Sahara Desert in Northern Africa is the largest hot desert on Earth, almost as big as the entire USA!',
      hint: 'It covers almost the entire northern third of Africa!'
    }
  },
  {
    id: 'mountain-elevation',
    title: 'Tallest Mountains & Deepest Depths',
    funTitle: 'From the Sky to Ocean Trenches: Earth’s Heights! 🏔️🤿',
    grade: 'Class 3–5',
    category: 'Wonders & Places',
    emoji: '🏔️',
    color: 'from-slate-700 to-sky-900',
    badge: 'Peaks & Trenches',
    concept:
      'Earth’s highest point above sea level is Mount Everest in the Himalayas (8,848 meters). The lowest point on Earth’s crust is the Mariana Trench in the Pacific Ocean (almost 11,000 meters deep)!',
    character: {
      name: 'Highlander Tariq',
      avatar: '🧗',
      role: 'High-Altitude Climber'
    },
    funStory: {
      setup: 'Tariq stood at base camp looking up at jagged snow peaks piercing into the jet stream.',
      action: 'He learned that tectonic plates pushed India into Asia millions of years ago, crumpling the land into the mighty Himalayas.',
      result: 'The Himalayas are still growing about 5 millimeters taller every single year!'
    },
    visualBreakdown: {
      ruleLabel: 'Extreme Elevations on Earth:',
      examples: [
        { item: 'Mount Everest (8,848 m) 🏔️', label: 'Highest mountain above sea level, located between Nepal and China.' },
        { item: 'K2 (8,611 m) 🇵🇰', label: 'Second highest mountain on Earth, located in the Karakoram range of Pakistan!' },
        { item: 'Sea Level (0 m) 🌊', label: 'The average height of Earth’s ocean surface.' },
        { item: 'Dead Sea (-430 m) 🧂', label: 'Lowest dry land on Earth, located between Jordan and Palestine.' },
        { item: 'Mariana Trench (-11,000 m) ⚓', label: 'Deepest oceanic abyss; deeper than Mount Everest is tall!' }
      ],
      caption: 'If you placed Mount Everest inside the Mariana Trench, its peak would still be 2,000 meters underwater!'
    },
    interactiveType: 'mountain-elevation',
    funSecret: 'Mount Everest grows around 4 to 5 millimeters taller every year as tectonic plates continue to push upward!',
    quickQuiz: {
      question: 'What is the highest mountain peak above sea level on Earth?',
      options: ['K2', 'Mount Kilimanjaro', 'Mount Everest', 'Mont Blanc'],
      correctIndex: 2,
      explanation: 'Mount Everest in the Himalayas stands at 8,848.86 meters above sea level, making it Earth’s tallest peak!',
      hint: 'It is situated in the Himalayas along the border of Nepal and China.'
    }
  }
];
