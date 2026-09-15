export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface InteractiveGame {
  id: string;
  emoji: string;
  name: string;
  subject: string;
  description: string;
  accentColor: string;
  bgGradient: string;
  iconBg: string;
  mechanic: 'bubble-math' | 'word-tile' | 'habitat-sort' | 'eco-sort' | 'shape-tap' | 'standard';
  badgeTitle: string;
}

export const KIDS_GAMES_METADATA: InteractiveGame[] = [
  {
    id: 'number-quest',
    emoji: '🫧',
    name: 'Number Quest',
    subject: 'Mathematics',
    description: 'Solve quick number puzzles & pop math bubbles.',
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
    subject: 'English',
    description: 'Tap scrambled letter tiles to build correct words.',
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
    subject: 'Science',
    description: 'Discover how the world, senses & nature work.',
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
    subject: 'General Knowledge',
    description: 'Explore Pakistan landmarks, symbols & culture.',
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
    subject: 'Computer',
    description: 'Master hardware, keyboard keys & digital tools.',
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
    subject: 'Islamiat',
    description: 'Learn good manners, daily prayers & core pillars.',
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
    subject: 'Science',
    description: 'Sort animals into Ocean, Jungle, Desert & Arctic.',
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
    subject: 'Mathematics',
    description: 'Discover 2D shapes, 3D solids, sides & corners.',
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
    subject: 'English',
    description: 'Pick noun, verb & adjective flowers to grow sentences.',
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
    subject: 'Urdu',
    description: 'Explore Urdu vocabulary with picture cards & audio.',
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
    subject: 'Sindhi',
    description: 'Learn everyday Sindhi words with phonetics & meaning.',
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
    subject: 'Environment',
    description: 'Sort recyclable items, compost & protect mother Earth.',
    accentColor: 'from-lime-600 to-emerald-600',
    bgGradient: 'from-lime-50 to-emerald-50 dark:from-lime-950/40 dark:to-emerald-950/40',
    iconBg: 'bg-lime-100 text-lime-700 dark:bg-lime-900/60 dark:text-lime-300',
    mechanic: 'eco-sort',
    badgeTitle: 'Planet Protector',
  },
];

// Interactive Word Builder Puzzles (Letter tiles that kids tap to build)
export interface WordTilePuzzle {
  word: string;
  hint: string;
  emoji: string;
  difficulty: Difficulty;
  meaning: string;
}

export const WORD_BUILDER_PUZZLES: WordTilePuzzle[] = [
  { word: 'CAT', hint: 'A furry pet that purrs', emoji: '🐱', difficulty: 'Easy', meaning: 'Small domestic feline pet' },
  { word: 'SUN', hint: 'Shines bright in the daytime sky', emoji: '☀️', difficulty: 'Easy', meaning: 'The star at the center of our solar system' },
  { word: 'BOOK', hint: 'Full of pages to read and learn', emoji: '📖', difficulty: 'Easy', meaning: 'Bound pages containing stories or facts' },
  { word: 'BIRD', hint: 'Has feathers and can fly', emoji: '🐦', difficulty: 'Easy', meaning: 'A feathered, winged, warm-blooded animal' },
  { word: 'TREE', hint: 'Has green leaves and tall trunk', emoji: '🌳', difficulty: 'Easy', meaning: 'A woody perennial plant' },
  { word: 'SCHOOL', hint: 'The place where we learn with teachers', emoji: '🏫', difficulty: 'Medium', meaning: 'An educational institution for children' },
  { word: 'FRIEND', hint: 'A companion you love playing with', emoji: '🤝', difficulty: 'Medium', meaning: 'A person with whom one has a bond of affection' },
  { word: 'GARDEN', hint: 'Full of flowers and sweet scents', emoji: '🌺', difficulty: 'Medium', meaning: 'A piece of ground with flowers, herbs, or vegetables' },
  { word: 'WATER', hint: 'Clear liquid essential for all life', emoji: '💧', difficulty: 'Medium', meaning: 'H2O compound liquid' },
  { word: 'BEAUTIFUL', hint: 'Pleasing the senses; very pretty', emoji: '✨', difficulty: 'Hard', meaning: 'Possessing beauty and grace' },
  { word: 'BRAVERY', hint: 'Courage when facing a challenge', emoji: '🦁', difficulty: 'Hard', meaning: 'Courageous behavior or character' },
  { word: 'KNOWLEDGE', hint: 'Facts and information learned', emoji: '🧠', difficulty: 'Hard', meaning: 'Skills and understanding acquired through experience' },
];

// Interactive Habitat Sorting Items
export interface HabitatItem {
  id: string;
  name: string;
  emoji: string;
  correctHabitat: 'Ocean' | 'Jungle' | 'Desert' | 'Arctic';
  funFact: string;
}

export const HABITAT_ITEMS: HabitatItem[] = [
  { id: 'fish', name: 'Clownfish', emoji: '🐠', correctHabitat: 'Ocean', funFact: 'Breathes underwater using gills!' },
  { id: 'camel', name: 'Camel', emoji: '🐪', correctHabitat: 'Desert', funFact: 'Can survive weeks without drinking water!' },
  { id: 'monkey', name: 'Monkey', emoji: '🐒', correctHabitat: 'Jungle', funFact: 'Swings through lush green tree canopies!' },
  { id: 'penguin', name: 'Penguin', emoji: '🐧', correctHabitat: 'Arctic', funFact: 'Thrives on frosty polar sea ice!' },
  { id: 'dolphin', name: 'Dolphin', emoji: '🐬', correctHabitat: 'Ocean', funFact: 'Super smart swimmer that uses echolocation!' },
  { id: 'scorpion', name: 'Scorpion', emoji: '🦂', correctHabitat: 'Desert', funFact: 'Burrows beneath hot desert sand!' },
  { id: 'tiger', name: 'Tiger', emoji: '🐅', correctHabitat: 'Jungle', funFact: 'Magnificent striped hunter of dense rainforests!' },
  { id: 'polar-bear', name: 'Polar Bear', emoji: '🐻‍❄️', correctHabitat: 'Arctic', funFact: 'Has thick blubber to stay warm in freezing snow!' },
];

// Interactive Waste Sorting Items
export interface EcoWasteItem {
  id: string;
  name: string;
  emoji: string;
  correctBin: 'Recycle' | 'Compost' | 'Trash';
  tip: string;
}

export const ECO_WASTE_ITEMS: EcoWasteItem[] = [
  { id: 'plastic-bottle', name: 'Plastic Bottle', emoji: '🧴', correctBin: 'Recycle', tip: 'Empty plastic bottles can be remade into new items!' },
  { id: 'banana-peel', name: 'Banana Peel', emoji: '🍌', correctBin: 'Compost', tip: 'Fruit peels turn into rich natural garden soil!' },
  { id: 'cardboard-box', name: 'Cardboard Box', emoji: '📦', correctBin: 'Recycle', tip: 'Flatten clean cardboard boxes for paper recycling!' },
  { id: 'apple-core', name: 'Apple Core', emoji: '🍏', correctBin: 'Compost', tip: 'Organic food scraps are 100% compostable!' },
  { id: 'used-diaper', name: 'Dirty Tissue', emoji: '🧻', correctBin: 'Trash', tip: 'Soiled tissues go to landfill trash safe disposal.' },
  { id: 'aluminum-can', name: 'Soda Can', emoji: '🥫', correctBin: 'Recycle', tip: 'Aluminum cans can be recycled endlessly!' },
  { id: 'tea-bag', name: 'Tea Leaves', emoji: '🍵', correctBin: 'Compost', tip: 'Natural tea leaves enrich garden plant roots!' },
  { id: 'broken-cup', name: 'Broken Pottery', emoji: '🏺', correctBin: 'Trash', tip: 'Ceramics cannot be recycled with normal glass.' },
];

// Interactive Shape Items
export interface ShapeItem {
  name: string;
  type: '2D' | '3D';
  sides: number;
  corners: number;
  description: string;
  svgPath: string;
  color: string;
}

export const SHAPE_ITEMS: ShapeItem[] = [
  {
    name: 'Triangle',
    type: '2D',
    sides: 3,
    corners: 3,
    description: 'Has exactly 3 straight edges and 3 corners.',
    svgPath: 'M 50 15 L 88 82 L 12 82 Z',
    color: 'text-amber-500 fill-amber-400/30 stroke-amber-500',
  },
  {
    name: 'Square',
    type: '2D',
    sides: 4,
    corners: 4,
    description: 'Has 4 equal sides and 4 right angles.',
    svgPath: 'M 18 18 H 82 V 82 H 18 Z',
    color: 'text-blue-500 fill-blue-400/30 stroke-blue-500',
  },
  {
    name: 'Circle',
    type: '2D',
    sides: 0,
    corners: 0,
    description: 'Smooth round curve with 0 sides and 0 corners.',
    svgPath: 'M 50 15 A 35 35 0 1 0 50 85 A 35 35 0 1 0 50 15 Z',
    color: 'text-rose-500 fill-rose-400/30 stroke-rose-500',
  },
  {
    name: 'Rectangle',
    type: '2D',
    sides: 4,
    corners: 4,
    description: 'Has opposite sides equal in length with 4 corners.',
    svgPath: 'M 10 28 H 90 V 72 H 10 Z',
    color: 'text-emerald-500 fill-emerald-400/30 stroke-emerald-500',
  },
  {
    name: 'Star',
    type: '2D',
    sides: 10,
    corners: 5,
    description: 'Twinkling 5-pointed star with 5 tips!',
    svgPath: 'M 50 12 L 61 35 L 86 38 L 68 56 L 72 80 L 50 68 L 28 80 L 32 56 L 14 38 L 39 35 Z',
    color: 'text-yellow-500 fill-yellow-400/40 stroke-yellow-500',
  },
  {
    name: 'Hexagon',
    type: '2D',
    sides: 6,
    corners: 6,
    description: 'Honeybee shape with 6 equal sides and 6 corners.',
    svgPath: 'M 50 12 L 85 30 L 85 70 L 50 88 L 15 70 L 15 30 Z',
    color: 'text-purple-500 fill-purple-400/30 stroke-purple-500',
  },
];

// Rich interactive questions with emojis and sound pronunciations
export interface GameQuestion {
  prompt: string;
  options: string[];
  answer: string;
  level: Difficulty;
  explanation: string;
  visualHint?: string;
  speechText?: string;
  lang?: 'en' | 'ur' | 'sd';
}

export const GAME_QUESTIONS_BY_ID: Record<string, GameQuestion[]> = {
  'number-quest': [
    { prompt: 'What is 4 + 3? 🍎', options: ['6', '7', '8'], answer: '7', level: 'Easy', explanation: '4 apples + 3 apples = 7 sweet apples!', visualHint: '🍎🍎🍎🍎 + 🍎🍎🍎 = 7' },
    { prompt: 'What is 8 - 3? 🎈', options: ['5', '4', '6'], answer: '5', level: 'Easy', explanation: 'If 3 balloons fly away from 8, you have 5 left!', visualHint: '8 - 3 = 5' },
    { prompt: 'What is 6 × 4? 🌟', options: ['20', '24', '28'], answer: '24', level: 'Medium', explanation: 'Six groups of four stars equal twenty-four!', visualHint: '6 × 4 = 24' },
    { prompt: 'What is 45 ÷ 5? 🍕', options: ['7', '8', '9'], answer: '9', level: 'Medium', explanation: 'Share 45 slices equally among 5 friends = 9 slices each!', visualHint: '45 ÷ 5 = 9' },
    { prompt: 'What is 3/4 of 20? 🍰', options: ['12', '15', '16'], answer: '15', level: 'Hard', explanation: 'First 20 ÷ 4 = 5, then 5 × 3 = 15 slices!', visualHint: '(20 ÷ 4) × 3 = 15' },
    { prompt: 'Solve: (12 + 8) × 2 = ? 🚀', options: ['30', '40', '50'], answer: '40', level: 'Hard', explanation: 'First solve inside brackets: 12 + 8 = 20, then 20 × 2 = 40!', visualHint: '20 × 2 = 40' },
  ],
  'word-builder': [
    { prompt: 'Which letters spell the word for 🐱?', options: ['CAT', 'CTA', 'ACT'], answer: 'CAT', level: 'Easy', explanation: 'C-A-T spells cat.', speechText: 'Cat' },
    { prompt: 'Which letters spell the star in our day sky ☀️?', options: ['SUN', 'SNU', 'NUS'], answer: 'SUN', level: 'Easy', explanation: 'S-U-N spells sun.', speechText: 'Sun' },
    { prompt: 'Choose the correct spelling: 🌺', options: ['BEAUTIFUL', 'BEUTIFUL', 'BUTIFUL'], answer: 'BEAUTIFUL', level: 'Medium', explanation: 'Beautiful has B-E-A-U-T-I-F-U-L.', speechText: 'Beautiful' },
    { prompt: 'Choose the correct spelling: 🐘', options: ['ELEPHANT', 'ELEFANT', 'ELPHANT'], answer: 'ELEPHANT', level: 'Medium', explanation: 'Elephant is spelled with PH for the /f/ sound.', speechText: 'Elephant' },
    { prompt: 'Which word means “very careful and exact”? 🎯', options: ['Precise', 'Noisy', 'Ancient'], answer: 'Precise', level: 'Hard', explanation: 'Precise means exact and accurate without error.', speechText: 'Precise' },
    { prompt: 'Which word means “extremely large”? 🐋', options: ['Enormous', 'Tiny', 'Silent'], answer: 'Enormous', level: 'Hard', explanation: 'Enormous means huge or gigantic.', speechText: 'Enormous' },
  ],
  'science-lab': [
    { prompt: 'Which organ helps us see colors and light? 👀', options: ['Eyes', 'Ears', 'Hands'], answer: 'Eyes', level: 'Easy', explanation: 'Our eyes take in light and send images to the brain!' },
    { prompt: 'Which organ pumps blood throughout the entire body? ❤️', options: ['Heart', 'Lungs', 'Stomach'], answer: 'Heart', level: 'Easy', explanation: 'The heart pumps oxygen-rich blood every second!' },
    { prompt: 'Plants take in which gas from the air to make food? 🌿', options: ['Carbon dioxide', 'Oxygen', 'Helium'], answer: 'Carbon dioxide', level: 'Medium', explanation: 'Plants use carbon dioxide and sunlight during photosynthesis!' },
    { prompt: 'Water turns into ice at what temperature? ❄️', options: ['0°C', '50°C', '100°C'], answer: '0°C', level: 'Medium', explanation: 'Water freezes into solid ice at zero degrees Celsius (0°C).' },
    { prompt: 'Which invisible force pulls objects down to the ground? 🌍', options: ['Gravity', 'Friction', 'Electricity'], answer: 'Gravity', level: 'Hard', explanation: 'Earth’s gravity pulls objects toward its center.' },
    { prompt: 'What state of matter is steam rising from hot tea? ☕', options: ['Gas', 'Liquid', 'Solid'], answer: 'Gas', level: 'Hard', explanation: 'Steam is water in its gaseous (vapor) state!' },
  ],
  'pakistan-explorer': [
    { prompt: 'What is the capital city of Pakistan? 🏛️', options: ['Islamabad', 'Karachi', 'Lahore'], answer: 'Islamabad', level: 'Easy', explanation: 'Islamabad, situated at the foot of Margalla Hills, is the capital of Pakistan.' },
    { prompt: 'What colors are on Pakistan’s national flag? 🇵🇰', options: ['Green & White', 'Red & Blue', 'Green & Yellow'], answer: 'Green & White', level: 'Easy', explanation: 'Pakistan’s flag has dark green with a white crescent & star, and a white vertical stripe.' },
    { prompt: 'What is the national language of Pakistan? 🗣️', options: ['Urdu', 'Arabic', 'English'], answer: 'Urdu', level: 'Medium', explanation: 'Urdu is the official national language of Pakistan.' },
    { prompt: 'Which is the national animal of Pakistan? 🐐', options: ['Markhor', 'Lion', 'Tiger'], answer: 'Markhor', level: 'Medium', explanation: 'The Markhor (wild goat with spiral horns) is Pakistan’s national animal.' },
    { prompt: 'K2, the 2nd highest mountain on Earth, belongs to which range? 🏔️', options: ['Karakoram', 'Himalayas', 'Hindu Kush'], answer: 'Karakoram', level: 'Hard', explanation: 'K2 stands tall at 8,611m in the Karakoram mountain range of Gilgit-Baltistan.' },
    { prompt: 'Which longest river flows through the heart of Pakistan? 🌊', options: ['Indus River', 'Jhelum', 'Chenab'], answer: 'Indus River', level: 'Hard', explanation: 'The mighty Indus River (Sindhu) is the lifeline of Pakistan.' },
  ],
  'computer-kids': [
    { prompt: 'Which hand-held device moves the pointer on screen? 🖱️', options: ['Mouse', 'Printer', 'Speaker'], answer: 'Mouse', level: 'Easy', explanation: 'The mouse (or trackpad) moves the cursor pointer!' },
    { prompt: 'Which part is called the "Brain of the Computer"? 🧠', options: ['CPU', 'Monitor', 'Keyboard'], answer: 'CPU', level: 'Easy', explanation: 'CPU (Central Processing Unit) performs all calculations and instructions.' },
    { prompt: 'Which key on the keyboard starts a new line? ⏎', options: ['Enter', 'Shift', 'Esc'], answer: 'Enter', level: 'Medium', explanation: 'The Enter key moves to a new line or submits input.' },
    { prompt: 'Which key adds an empty blank space between typed words? ⌨️', options: ['Spacebar', 'Ctrl', 'Alt'], answer: 'Spacebar', level: 'Medium', explanation: 'The long Spacebar adds space between words.' },
    { prompt: 'Which software is used to browse websites on the internet? 🌐', options: ['Google Chrome', 'Paint', 'Calculator'], answer: 'Google Chrome', level: 'Hard', explanation: 'A web browser like Chrome or Firefox loads online websites.' },
    { prompt: 'Which shortcut is universally used to Copy selected text? 📋', options: ['Ctrl + C', 'Ctrl + V', 'Ctrl + Z'], answer: 'Ctrl + C', level: 'Hard', explanation: 'Ctrl + C copies text to your clipboard. Ctrl + V pastes it!' },
  ],
  'islamic-values': [
    { prompt: 'What blessed words should we recite before beginning to eat? 🤲', options: ['Bismillah', 'Goodbye', 'Welcome'], answer: 'Bismillah', level: 'Easy', explanation: 'Muslims begin good deeds and eating with Bismillah ar-Rahman ar-Rahim.' },
    { prompt: 'How do Muslims greet each other peacefully? 🤝', options: ['Assalamu Alaikum', 'Good morning only', 'Farewell'], answer: 'Assalamu Alaikum', level: 'Easy', explanation: 'Assalamu Alaikum means “Peace be upon you”.' },
    { prompt: 'How many daily obligatory prayers (Salah) are there? 🕌', options: ['Five', 'Three', 'Seven'], answer: 'Five', level: 'Medium', explanation: 'The 5 obligatory prayers are Fajr, Dhuhr, Asr, Maghrib, and Isha.' },
    { prompt: 'What should one say after sneezing? 🤧', options: ['Alhamdulillah', 'SubhanAllah', 'Astaghfirullah'], answer: 'Alhamdulillah', level: 'Medium', explanation: 'Say Alhamdulillah (All praise is due to Allah) when you sneeze.' },
    { prompt: 'In which holy month do Muslims fast from dawn until sunset? 🌙', options: ['Ramadan', 'Muharram', 'Shawwal'], answer: 'Ramadan', level: 'Hard', explanation: 'Fasting during the holy month of Ramadan is the 4th pillar of Islam.' },
    { prompt: 'Which holy book was revealed to Prophet Muhammad (PBUH)? 📖', options: ['Holy Quran', 'Tawrat', 'Injeel'], answer: 'Holy Quran', level: 'Hard', explanation: 'The Holy Quran is the final divine revelation sent for all mankind.' },
  ],
  'animal-world': [
    { prompt: 'Which animal lives and breathes underwater? 🐟', options: ['Fish', 'Cat', 'Camel'], answer: 'Fish', level: 'Easy', explanation: 'Fish have gills to breathe oxygen dissolved in water.' },
    { prompt: 'Which animal is known as “The King of the Jungle”? 🦁', options: ['Lion', 'Elephant', 'Giraffe'], answer: 'Lion', level: 'Easy', explanation: 'The brave lion is known worldwide as King of the Jungle.' },
    { prompt: 'A frog can live both in water and on land. What is it called? 🐸', options: ['Amphibian', 'Bird', 'Reptile'], answer: 'Amphibian', level: 'Medium', explanation: 'Amphibians are cold-blooded vertebrates that live in water and on land.' },
    { prompt: 'Which animal is specially adapted to hot sandy deserts? 🐪', options: ['Camel', 'Penguin', 'Dolphin'], answer: 'Camel', level: 'Medium', explanation: 'Camels have humps to store energy, wide hooves, and long eyelashes.' },
    { prompt: 'Which sea creature is a mammal, breathes air, and nurses its babies? 🐋', options: ['Whale', 'Shark', 'Octopus'], answer: 'Whale', level: 'Hard', explanation: 'Whales are warm-blooded mammals that breathe air through blowholes.' },
    { prompt: 'Which bird cannot fly, but is an expert swimmer in freezing ice? 🐧', options: ['Penguin', 'Eagle', 'Parrot'], answer: 'Penguin', level: 'Hard', explanation: 'Penguins use their wings as sleek underwater flippers in polar regions.' },
  ],
  'shape-safari': [
    { prompt: 'Which geometric shape has 3 sides and 3 corners? 🔺', options: ['Triangle', 'Square', 'Circle'], answer: 'Triangle', level: 'Easy', explanation: 'A triangle always has 3 straight sides and 3 corners.' },
    { prompt: 'Which round shape has ZERO straight sides and ZERO corners? ⭕', options: ['Circle', 'Rectangle', 'Triangle'], answer: 'Circle', level: 'Easy', explanation: 'A circle is a continuous round curve with no corners.' },
    { prompt: 'How many corners does a standard rectangle have? 🔲', options: ['4', '3', '5'], answer: '4', level: 'Medium', explanation: 'A rectangle has 4 corners and 4 straight sides.' },
    { prompt: 'Which 2D shape has 6 equal straight sides? ⬡', options: ['Hexagon', 'Pentagon', 'Octagon'], answer: 'Hexagon', level: 'Medium', explanation: 'Hex means six — a hexagon has 6 straight sides.' },
    { prompt: 'Which 3D solid shape looks like a football or the planet Earth? ⚽', options: ['Sphere', 'Cube', 'Cylinder'], answer: 'Sphere', level: 'Hard', explanation: 'A sphere is a perfectly round 3D ball shape.' },
    { prompt: 'Which solid has 6 equal square faces and 8 corners? 🎲', options: ['Cube', 'Cone', 'Pyramid'], answer: 'Cube', level: 'Hard', explanation: 'A cube (like a playing die) has 6 flat square faces.' },
  ],
  'grammar-garden': [
    { prompt: 'Choose the Naming Word (Noun): 🏫', options: ['School', 'Run', 'Quickly'], answer: 'School', level: 'Easy', explanation: 'School names a place, so it is a Noun.' },
    { prompt: 'Choose the Action Word (Verb): “Birds fly high.” 🕊️', options: ['fly', 'Birds', 'high'], answer: 'fly', level: 'Easy', explanation: '“Fly” is the action what the birds do, so it is a Verb.' },
    { prompt: 'Choose the Describing Word (Adjective): “The sweet mango.” 🥭', options: ['sweet', 'mango', 'the'], answer: 'sweet', level: 'Medium', explanation: '“Sweet” describes how the mango tastes, so it is an Adjective.' },
    { prompt: 'Choose the correct preposition: “The cat jumped ___ the chair.” 🐈', options: ['onto', 'underneaths', 'besiding'], answer: 'onto', level: 'Medium', explanation: '“Onto” shows movement to the top of the chair.' },
    { prompt: 'Choose the grammatically correct sentence: 📚', options: ['She goes to school every day.', 'She go to school every day.', 'She going school every day.'], answer: 'She goes to school every day.', level: 'Hard', explanation: 'A singular third-person subject (“She”) takes “goes” in simple present.' },
    { prompt: 'What is the opposite (Antonym) of “Generous”? 🎁', options: ['Stingy', 'Kind', 'Polite'], answer: 'Stingy', level: 'Hard', explanation: 'Generous means giving freely; stingy means unwilling to give or share.' },
  ],
  'urdu-words': [
    { prompt: 'Urdu word: “کتاب” means which object? 📚', options: ['Book', 'House', 'Water'], answer: 'Book', level: 'Easy', explanation: 'کتاب (Kitab) means Book.', speechText: 'کتاب', lang: 'ur' },
    { prompt: 'Urdu word: “پانی” means: 💧', options: ['Water', 'Food', 'Sun'], answer: 'Water', level: 'Easy', explanation: 'پانی (Paani) means Water.', speechText: 'پانی', lang: 'ur' },
    { prompt: 'Urdu word: “استاد” means: 👨‍🏫', options: ['Teacher', 'Student', 'Doctor'], answer: 'Teacher', level: 'Medium', explanation: 'استاد (Ustaad) means Teacher.', speechText: 'استاد', lang: 'ur' },
    { prompt: 'Urdu word: “سیب” is which fruit? 🍎', options: ['Apple', 'Banana', 'Mango'], answer: 'Apple', level: 'Medium', explanation: 'سیب (Saib) means Apple.', speechText: 'سیب', lang: 'ur' },
    { prompt: 'Urdu word: “دوستی” means: 🤝', options: ['Friendship', 'Journey', 'Hospital'], answer: 'Friendship', level: 'Hard', explanation: 'دوستی (Dosti) means Friendship and companionship.', speechText: 'دوستی', lang: 'ur' },
    { prompt: 'Urdu word: “آسمان” means: 🌌', options: ['Sky', 'Earth', 'Mountain'], answer: 'Sky', level: 'Hard', explanation: 'آسمان (Aasman) means Sky or Heavens.', speechText: 'آسمان', lang: 'ur' },
  ],
  'sindhi-words': [
    { prompt: 'Sindhi word: “ڪتاب” means: 📖', options: ['Book', 'Tree', 'Road'], answer: 'Book', level: 'Easy', explanation: 'ڪتاب (Kitaab) in Sindhi means Book.', speechText: 'ڪتاب', lang: 'sd' },
    { prompt: 'Sindhi word: “پاڻي” means: 💧', options: ['Water', 'Moon', 'Bird'], answer: 'Water', level: 'Easy', explanation: 'پاڻي (Paani) in Sindhi means Water.', speechText: 'پاڻي', lang: 'sd' },
    { prompt: 'Sindhi word: “گل” means which sweet bloom? 🌹', options: ['Flower', 'Fruit', 'Leaf'], answer: 'Flower', level: 'Medium', explanation: 'گل (Gul) in Sindhi means Flower.', speechText: 'گل', lang: 'sd' },
    { prompt: 'Sindhi word: “اسڪول” means: 🏫', options: ['School', 'Market', 'Garden'], answer: 'School', level: 'Medium', explanation: 'اسڪول (School) means School.', speechText: 'اسڪول', lang: 'sd' },
    { prompt: 'Sindhi word: “ٻلي” is which domestic pet? 🐱', options: ['Cat', 'Dog', 'Horse'], answer: 'Cat', level: 'Hard', explanation: 'ٻلي (Billi) in Sindhi means Cat.', speechText: 'ٻلي', lang: 'sd' },
    { prompt: 'Sindhi word: “سج” means: ☀️', options: ['Sun', 'Cloud', 'River'], answer: 'Sun', level: 'Hard', explanation: 'سج (Sajj) in Sindhi means Sun.', speechText: 'سج', lang: 'sd' },
  ],
  'eco-hero': [
    { prompt: 'Where should clean paper and cardboard go? 📦', options: ['Recycling bin', 'Road', 'River'], answer: 'Recycling bin', level: 'Easy', explanation: 'Paper can be re-pulped into new recycled notebooks and boxes!' },
    { prompt: 'Which everyday action saves precious fresh water? 🚰', options: ['Turn off the tap while brushing', 'Leave tap running', 'Wash one cup with full blast'], answer: 'Turn off the tap while brushing', level: 'Easy', explanation: 'Turning off the tap saves up to 8 liters of water every time you brush!' },
    { prompt: 'What should we do with fallen dry leaves and fruit peels? 🍂', options: ['Make compost fertilizer', 'Burn them on road', 'Throw in plastic bag'], answer: 'Make compost fertilizer', level: 'Medium', explanation: 'Composting returns nutrients safely to the soil for growing healthy plants.' },
    { prompt: 'Which clean energy source is completely renewable and comes from the sky? ☀️', options: ['Solar energy', 'Coal', 'Diesel'], answer: 'Solar energy', level: 'Medium', explanation: 'Sunlight is abundant, clean, and never runs out.' },
    { prompt: 'What is the best way to reduce plastic shopping bag pollution? 🛍️', options: ['Use reusable cloth bags', 'Throw bags in the canal', 'Use 5 plastic bags each trip'], answer: 'Use reusable cloth bags', level: 'Hard', explanation: 'Cloth bags can be used hundreds of times and keep our parks clean.' },
    { prompt: 'Why are green trees called the "Lungs of the Earth"? 🌳', options: ['They absorb CO2 and release clean Oxygen', 'They make noise in wind', 'They stop sunlight only'], answer: 'They absorb CO2 and release clean Oxygen', level: 'Hard', explanation: 'Trees take in carbon dioxide and breathe out fresh oxygen for humans and animals.' },
  ],
};
