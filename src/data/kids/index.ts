import { GameQuestion, InteractiveGame, WordTilePuzzle, GameSetInfo, Difficulty } from './types';
import { NUMBER_QUEST_100 } from './numberQuestBank';
import { WORD_BUILDER_100 } from './wordBuilderBank';
import { SCIENCE_LAB_100 } from './scienceLabBank';
import { PAKISTAN_EXPLORER_100 } from './pakistanExplorerBank';
import { COMPUTER_KIDS_100 } from './computerKidsBank';
import { ISLAMIC_VALUES_100 } from './islamicValuesBank';
import { ANIMAL_WORLD_100 } from './animalWorldBank';
import { SHAPE_SAFARI_100 } from './shapeSafariBank';
import { GRAMMAR_GARDEN_100 } from './grammarGardenBank';
import { URDU_WORDS_100 } from './urduWordsBank';
import { SINDHI_WORDS_100 } from './sindhiWordsBank';
import { ECO_HERO_100 } from './ecoHeroBank';

export * from './types';
export { NUMBER_QUEST_100 } from './numberQuestBank';
export { WORD_BUILDER_100, WORD_BUILDER_100 as WORD_BUILDER_PUZZLES_100 } from './wordBuilderBank';
export { SCIENCE_LAB_100 } from './scienceLabBank';
export { PAKISTAN_EXPLORER_100 } from './pakistanExplorerBank';
export { COMPUTER_KIDS_100 } from './computerKidsBank';
export { ISLAMIC_VALUES_100 } from './islamicValuesBank';
export { ANIMAL_WORLD_100 } from './animalWorldBank';
export { SHAPE_SAFARI_100 } from './shapeSafariBank';
export { GRAMMAR_GARDEN_100 } from './grammarGardenBank';
export { URDU_WORDS_100 } from './urduWordsBank';
export { SINDHI_WORDS_100 } from './sindhiWordsBank';
export { ECO_HERO_100 } from './ecoHeroBank';

// All 12 Games Metadata
export const ALL_KIDS_GAMES: InteractiveGame[] = [
  {
    id: 'number-quest',
    emoji: '🫧',
    name: 'Number Quest',
    subject: 'Mathematics',
    description: 'Solve quick number puzzles & pop math bubbles across 10 levels.',
    accentColor: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/40',
    iconBg: 'bg-blue-100 text-blue-600 dark:bg-blue-900/60 dark:text-blue-300',
    mechanic: 'bubble-math',
    badgeTitle: 'Math Wizard',
  },
  {
    id: 'word-builder',
    emoji: '🔤',
    name: 'Word Builder',
    subject: 'English Spelling',
    description: 'Tap scrambled letter tiles to build 100 phonics and vocabulary words.',
    accentColor: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-50 to-purple-50 dark:from-violet-950/40 dark:to-purple-950/40',
    iconBg: 'bg-violet-100 text-violet-600 dark:bg-violet-900/60 dark:text-violet-300',
    mechanic: 'word-tile',
    badgeTitle: 'Spelling Champ',
  },
  {
    id: 'science-lab',
    emoji: '🔬',
    name: 'Science Lab',
    subject: 'General Science',
    description: 'Explore the 5 senses, states of matter, solar system & physics.',
    accentColor: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40',
    iconBg: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/60 dark:text-emerald-300',
    mechanic: 'standard',
    badgeTitle: 'Junior Scientist',
  },
  {
    id: 'pakistan-explorer',
    emoji: '🇵🇰',
    name: 'Pakistan Explorer',
    subject: 'Pakistan Studies',
    description: 'Discover national symbols, history, geography, provinces & heroes.',
    accentColor: 'from-green-600 to-emerald-600',
    bgGradient: 'from-green-50 to-emerald-50 dark:from-green-950/40 dark:to-emerald-950/40',
    iconBg: 'bg-green-100 text-green-700 dark:bg-green-900/60 dark:text-green-300',
    mechanic: 'standard',
    badgeTitle: 'Pakistan Scout',
  },
  {
    id: 'computer-kids',
    emoji: '💻',
    name: 'Computer Kids',
    subject: 'Digital & Coding',
    description: 'Master hardware, keyboard keys, internet safety & coding loops.',
    accentColor: 'from-sky-500 to-indigo-500',
    bgGradient: 'from-sky-50 to-indigo-50 dark:from-sky-950/40 dark:to-indigo-950/40',
    iconBg: 'bg-sky-100 text-sky-600 dark:bg-sky-900/60 dark:text-sky-300',
    mechanic: 'standard',
    badgeTitle: 'Tech Cadet',
  },
  {
    id: 'islamic-values',
    emoji: '🌙',
    name: 'Islamic Values',
    subject: 'Islamiat & Ethics',
    description: 'Learn the 5 pillars, daily duas, moral manners & prophetic stories.',
    accentColor: 'from-amber-500 to-yellow-500',
    bgGradient: 'from-amber-50 to-yellow-50 dark:from-amber-950/40 dark:to-yellow-950/40',
    iconBg: 'bg-amber-100 text-amber-600 dark:bg-amber-900/60 dark:text-amber-300',
    mechanic: 'standard',
    badgeTitle: 'Noor Star',
  },
  {
    id: 'animal-world',
    emoji: '🐢',
    name: 'Animal World',
    subject: 'Biology & Habitats',
    description: 'Sort animals into Ocean, Jungle, Desert & Arctic habitats.',
    accentColor: 'from-orange-500 to-amber-500',
    bgGradient: 'from-orange-50 to-amber-50 dark:from-orange-950/40 dark:to-amber-950/40',
    iconBg: 'bg-orange-100 text-orange-600 dark:bg-orange-900/60 dark:text-orange-300',
    mechanic: 'habitat-sort',
    badgeTitle: 'Safari Ranger',
  },
  {
    id: 'shape-safari',
    emoji: '🔷',
    name: 'Shape Safari',
    subject: 'Geometry & Visuals',
    description: 'Identify 2D & 3D shapes, angles, symmetry, sides & spatial solids.',
    accentColor: 'from-indigo-500 to-pink-500',
    bgGradient: 'from-indigo-50 to-pink-50 dark:from-indigo-950/40 dark:to-pink-950/40',
    iconBg: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/60 dark:text-indigo-300',
    mechanic: 'shape-tap',
    badgeTitle: 'Shape Master',
  },
  {
    id: 'grammar-garden',
    emoji: '🌻',
    name: 'Grammar Garden',
    subject: 'English Grammar',
    description: 'Grow sentences with nouns, verbs, adjectives, adverbs & punctuation.',
    accentColor: 'from-rose-500 to-pink-500',
    bgGradient: 'from-rose-50 to-pink-50 dark:from-rose-950/40 dark:to-pink-950/40',
    iconBg: 'bg-rose-100 text-rose-600 dark:bg-rose-900/60 dark:text-rose-300',
    mechanic: 'standard',
    badgeTitle: 'Grammar Bloom',
  },
  {
    id: 'urdu-words',
    emoji: '✍️',
    name: 'Urdu Words',
    subject: 'Urdu Language',
    description: 'Urdu Haroof-e-Tahajji, sounds, vocabulary, counting & family relations.',
    accentColor: 'from-red-500 to-amber-600',
    bgGradient: 'from-red-50 to-amber-50 dark:from-red-950/40 dark:to-amber-950/40',
    iconBg: 'bg-red-100 text-red-600 dark:bg-red-900/60 dark:text-red-300',
    mechanic: 'standard',
    badgeTitle: 'Urdu Sitara',
  },
  {
    id: 'sindhi-words',
    emoji: '📜',
    name: 'Sindhi Words',
    subject: 'Sindhi Language',
    description: '52 Sindhi letters, everyday phrases, Sindhi counting & rich culture.',
    accentColor: 'from-teal-600 to-emerald-600',
    bgGradient: 'from-teal-50 to-emerald-50 dark:from-teal-950/40 dark:to-emerald-950/40',
    iconBg: 'bg-teal-100 text-teal-700 dark:bg-teal-900/60 dark:text-teal-300',
    mechanic: 'standard',
    badgeTitle: 'Sindhi Gul',
  },
  {
    id: 'eco-hero',
    emoji: '🌱',
    name: 'Eco Hero',
    subject: 'Environmental Care',
    description: 'Practice the 3 Rs, save freshwater, protect trees, clean oceans & soil.',
    accentColor: 'from-lime-600 to-emerald-600',
    bgGradient: 'from-lime-50 to-emerald-50 dark:from-lime-950/40 dark:to-emerald-950/40',
    iconBg: 'bg-lime-100 text-lime-700 dark:bg-lime-900/60 dark:text-lime-300',
    mechanic: 'eco-sort',
    badgeTitle: 'Planet Protector',
  },
];

// Map of all 100-question banks by game ID
export const ALL_QUESTIONS_BY_GAME_ID: Record<string, GameQuestion[]> = {
  'number-quest': NUMBER_QUEST_100,
  'word-builder': WORD_BUILDER_100.map((p) => ({
    id: p.id,
    setNumber: p.setNumber,
    levelNumber: p.levelNumber,
    level: p.difficulty,
    prompt: `Spell the word: ${p.hint} (${p.emoji})`,
    options: [p.word],
    answer: p.word,
    explanation: p.meaning,
    visualHint: `${p.emoji} ${p.hint}`,
  })),
  'science-lab': SCIENCE_LAB_100,
  'pakistan-explorer': PAKISTAN_EXPLORER_100,
  'computer-kids': COMPUTER_KIDS_100,
  'islamic-values': ISLAMIC_VALUES_100,
  'animal-world': ANIMAL_WORLD_100,
  'shape-safari': SHAPE_SAFARI_100,
  'grammar-garden': GRAMMAR_GARDEN_100,
  'urdu-words': URDU_WORDS_100,
  'sindhi-words': SINDHI_WORDS_100,
  'eco-hero': ECO_HERO_100,
};

// Standard Set Metadata for 10 Levels per Game
export const GAME_SET_TITLES: Record<string, string[]> = {
  'number-quest': [
    'Level 1: Counting & Bubble Pops (1-10)',
    'Level 2: Friendly Addition (+)',
    'Level 3: Gentle Subtraction (-)',
    'Level 4: Counting by 2s, 5s & 10s',
    'Level 5: Multiplication Fun (×)',
    'Level 6: Fair Share Division (÷)',
    'Level 7: Fraction Pizza & Halves',
    'Level 8: Clocks & Time Explorer',
    'Level 9: Money, Coins & Rupee Math',
    'Level 10: Logic Riddles & Brainteasers',
  ],
  'word-builder': [
    'Set 1: 3-Letter CVC Animals & Pets',
    'Set 2: Short Vowel Home & Toys',
    'Set 3: Kitchen & Delicious Snacks',
    'Set 4: 4-Letter Outdoor Wonders',
    'Set 5: School & Study Superstars',
    'Set 6: Colorful World & Nature',
    'Set 7: Action Verbs & Doing Words',
    'Set 8: 5-Letter Magic Words',
    'Set 9: Long Vowels & Silent-E',
    'Set 10: Compound & Clever Words',
  ],
  'science-lab': [
    'Set 1: Five Senses & Human Body',
    'Set 2: Living Things & Plant Life',
    'Set 3: States of Matter (Solid, Liquid, Gas)',
    'Set 4: Weather, Seasons & Water Cycle',
    'Set 5: Sun, Earth & Solar System',
    'Set 6: Light, Shadows & Reflections',
    'Set 7: Sound, Vibrations & Pitch',
    'Set 8: Magnets & Magnetic Forces',
    'Set 9: Simple Machines & Everyday Physics',
    'Set 10: Electricity, Conductors & Inventions',
  ],
  'pakistan-explorer': [
    'Set 1: National Identity & Flag',
    'Set 2: Founding Fathers & Leaders',
    'Set 3: Capital City & Key Cities',
    'Set 4: Provinces & Regions',
    'Set 5: Famous Monuments & Architecture',
    'Set 6: Majestic Mountains & Rivers',
    'Set 7: Culture, Festivals & Foods',
    'Set 8: National Sports & Heroes',
    'Set 9: Ancient Civilizations & Heritage',
    'Set 10: National Emblems & Civic Pride',
  ],
  'computer-kids': [
    'Set 1: What is a Computer & Basic Parts',
    'Set 2: Input Devices (Mouse & Keyboard)',
    'Set 3: Output Devices (Monitors & Printers)',
    'Set 4: Storage & Computer Memory',
    'Set 5: Software, Apps & Operating Systems',
    'Set 6: Internet, Web Browsers & Search',
    'Set 7: Cyber Safety & Digital Manners',
    'Set 8: Fun with Coding & Algorithms',
    'Set 9: Loops, Conditions & Logic',
    'Set 10: AI, Robotics & Modern Tech',
  ],
  'islamic-values': [
    'Set 1: The 5 Pillars of Islam (ارکانِ اسلام)',
    'Set 2: Articles of Faith (ایمان)',
    'Set 3: Daily Duas & Islamic Etiquette',
    'Set 4: Salah, Wudu & Daily Cleanliness',
    'Set 5: Quran, Surahs & Revelations',
    'Set 6: Prophet Muhammad (PBUH) Life & Mercy',
    'Set 7: Great Prophets in Islam (انبیاء کرام)',
    'Set 8: Good Morals & Character (اخلاق)',
    'Set 9: Family, Parents & Neighbors (صلہ رحمی)',
    'Set 10: Charity, Ramadan & Eid Celebrations',
  ],
  'animal-world': [
    'Set 1: Ocean & Coral Reef Creatures',
    'Set 2: Tropical Jungle & Forest Animals',
    'Set 3: Desert Dwellers & Camels',
    'Set 4: Polar Ice & Arctic Animals',
    'Set 5: African Savanna & Grasslands',
    'Set 6: Birds of the Air & Flight Masters',
    'Set 7: Reptiles & Amphibians',
    'Set 8: Herbivores, Carnivores & Omnivores',
    'Set 9: Animal Camouflage & Adaptations',
    'Set 10: Endangered Wildlife & Protectors',
  ],
  'shape-safari': [
    'Set 1: Basic 2D Shapes (Circle, Square, Triangle)',
    'Set 2: Quadrilaterals & 4-Sided Shapes',
    'Set 3: Polygons (Pentagon, Hexagon, Octagon)',
    'Set 4: Sides, Corners & Vertices',
    'Set 5: 3D Solids (Cube, Sphere, Cylinder)',
    'Set 6: Cones, Pyramids & Prisms',
    'Set 7: Symmetry, Mirror Lines & Reflections',
    'Set 8: Angles & Lines (Right, Acute, Obtuse)',
    'Set 9: Perimeter, Area & Spatial Grid',
    'Set 10: Real-World Architecture & Nature Shapes',
  ],
  'grammar-garden': [
    'Set 1: Nouns (Person, Place, Thing, Animal)',
    'Set 2: Action Verbs & Tenses',
    'Set 3: Adjectives (Describing Words)',
    'Set 4: Pronouns (Replacing Nouns)',
    'Set 5: Adverbs (How, When, Where)',
    'Set 6: Prepositions (Positions & Time)',
    'Set 7: Conjunctions & Connectors',
    'Set 8: Punctuation & Capitalization Rules',
    'Set 9: Synonyms, Antonyms & Homophones',
    'Set 10: Sentence Structure & Figurative Language',
  ],
  'urdu-words': [
    'سیٹ 1: حروفِ تہجی الف تا خ (Alif to Khay)',
    'سیٹ 2: حروف دال تا صاد (Daal to Suad)',
    'سیٹ 3: حروف ضاد تا لام (Zuad to Laam)',
    'سیٹ 4: میم تا بڑی ے اور بھاری آوازیں',
    'سیٹ 5: رنگوں کے نام (Colors in Urdu)',
    'سیٹ 6: جسم کے حصے (Parts of Body)',
    'سیٹ 7: جانور اور پرندے (Animals & Birds)',
    'سیٹ 8: خاندانی رشتے (Family Relations)',
    'سیٹ 9: اردو گنتی ۱ تا ۱۰ (Numbers 1-10)',
    'سیٹ 10: اعراب، متضاد اور آسان جملے',
  ],
  'sindhi-words': [
    'سيٽ 1: سنڌي جا خاص اکر (ٻ، ڀ، ٺ، ٽ، ڄ)',
    'سيٽ 2: خاص اکر (ڳ، ک، ڱ، ڻ، ڦ)',
    'سيٽ 3: سنڌي سلام ۽ روزمره جا جملا (Greetings)',
    'سيٽ 4: قدرت ۽ جانور (Nature & Animals)',
    'سيٽ 5: کاڌو پيتو ۽ گهر (Food & Home)',
    'سيٽ 6: گهر جا پيارا رشتا (Family & Relations)',
    'سيٽ 7: رنگن جا نالا (Colors in Sindhi)',
    'سيٽ 8: سنڌي ڳڻپ ۱ تا ۱۰ (Sindhi Counting)',
    'سيٽ 9: سنڌ جي عظيم ثقافت (Culture & Heritage)',
    'سيٽ 10: عظيم تاريخ ۽ جاگرافي (History & Geography)',
  ],
  'eco-hero': [
    'Set 1: The 3 Rs (Reduce, Reuse, Recycle)',
    'Set 2: Saving Water & Freshwater Protection',
    'Set 3: Trees, Forests & Clean Oxygen',
    'Set 4: Clean Renewable Energy (Solar & Wind)',
    'Set 5: Wildlife & Endangered Species Protection',
    'Set 6: Oceans & Marine Life Protection',
    'Set 7: Clean Air & Atmosphere',
    'Set 8: Soil Health & Organic Farming',
    'Set 9: Global Climate & Earth Care',
    'Set 10: Eco Hero in Action (Green Habits)',
  ],
};

// Helper: Get questions for a specific game, set, and difficulty
export function getGameQuestions(
  gameId: string,
  selectedSet: number = 1,
  difficulty?: Difficulty
): GameQuestion[] {
  const bank = ALL_QUESTIONS_BY_GAME_ID[gameId] || [];
  let filtered = bank.filter((q) => q.setNumber === selectedSet);

  if (filtered.length === 0) {
    filtered = bank.slice(0, 10);
  }

  if (difficulty) {
    if (difficulty === 'Easy') {
      const easyQ = filtered.filter((q) => q.level === 'Easy');
      return easyQ.length > 0 ? easyQ : filtered;
    }
  }

  return filtered;
}

// Helper: Get list of sets (1 to 10) with metadata for level selector
export function getGameSetList(gameId: string): GameSetInfo[] {
  const titles = GAME_SET_TITLES[gameId] || [];
  return Array.from({ length: 10 }, (_, i) => {
    const setNum = i + 1;
    let diff: Difficulty = 'Easy';
    if (setNum >= 8) diff = 'Hard';
    else if (setNum >= 4) diff = 'Medium';

    return {
      setNumber: setNum,
      levelNumber: setNum,
      title: titles[i] || `Level / Set ${setNum}`,
      difficulty: diff,
      totalQuestions: 10,
    };
  });
}
