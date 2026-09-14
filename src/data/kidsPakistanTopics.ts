export interface PakistanTopic {
  id: string;
  title: string;
  funTitle: string;
  grade: string;
  category: 'National Pride' | 'Founding Fathers' | 'Provinces & Culture' | 'Nature & Wonders' | 'Heritage & Heroes';
  emoji: string;
  color: string;
  badge: string;
  concept: string;
  urduPhrase?: string;
  urduTranslation?: string;
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
    | 'symbols-collector'
    | 'quaid-principles'
    | 'provinces-tour'
    | 'k2-climber'
    | 'indus-journey'
    | 'ancient-mohenjo'
    | 'monuments-gallery'
    | 'sports-trophies';
  funSecret: string;
  quickQuiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    hint: string;
  };
}

export const KIDS_PAKISTAN_TOPICS: PakistanTopic[] = [
  {
    id: 'symbols-collector',
    title: 'National Symbols of Pakistan',
    funTitle: 'Green & White Pride: Discover Pakistan’s National Symbols! 🇵🇰⭐',
    grade: 'Class 1–5',
    category: 'National Pride',
    emoji: '🇵🇰',
    color: 'from-emerald-700 to-green-900',
    badge: 'National Symbols',
    concept:
      'Pakistan has sacred national symbols that represent its identity, unity, and natural beauty. The National Flag has dark green (majority) and a white stripe (minorities) with a white crescent (progress) and star (light). The National Animal is the brave mountain Markhor, and the National Flower is the sweet-smelling Jasmine (Chambeli)!',
    urduPhrase: 'پاکستان زندہ باد',
    urduTranslation: 'Long Live Pakistan!',
    character: {
      name: 'Ayla the Patriot',
      avatar: '👧',
      role: 'Junior Scout Guide'
    },
    funStory: {
      setup: 'Ayla proudly prepared her green blazer with badges for the Independence Day flag hoisting ceremony.',
      action: 'She pinned a shining crescent badge on her collar, held fragrant white jasmine flowers, and sang the Qaumi Taranah with full heart.',
      result: 'Every symbol reminds us to love our motherland and work hard to make Pakistan peaceful, educated, and prosperous!'
    },
    visualBreakdown: {
      ruleLabel: 'Pakistan’s Treasured National Emblems:',
      examples: [
        { item: 'National Flag 🇵🇰', label: 'Green & White with Crescent and Star; designed by Amiruddin Kidwai.' },
        { item: 'National Animal 🐐', label: 'Markhor: Majestic wild mountain goat with spiral horns living in northern peaks.' },
        { item: 'National Flower 🌼', label: 'Jasmine (Chambeli): Fragrant white flower symbolizing purity and peace.' },
        { item: 'National Bird 🦅', label: 'Chukar Partridge: Graceful highland bird known for its melodious call.' },
        { item: 'National Fruit 🥭', label: 'Mango (Chaunsa / Sindhri): King of fruits world-famous for heavenly sweetness.' },
        { item: 'National Tree 🌲', label: 'Deodar (Himalayan Cedar): Strong, towering evergreen tree in northern valleys.' }
      ],
      caption: 'The white stripe on the flag represents equal rights and safety for all religious minorities!'
    },
    interactiveType: 'symbols-collector',
    funSecret: 'The Markhor gets its name from Persian: "Mar" (snake) and "Khor" (eater), because folklore says it stomps snakes with its nimble hooves!',
    quickQuiz: {
      question: 'What is the National Flower of Pakistan?',
      options: ['Rose (Gulab)', 'Jasmine (Chambeli)', 'Sunflower', 'Lotus (Kanwal)'],
      correctIndex: 1,
      explanation: 'Jasmine (Chambeli) is Pakistan’s National Flower, admired for its sweet fragrance and soft white petals!',
      hint: 'It is a small, sweet-smelling white flower often woven into garlands!'
    }
  },
  {
    id: 'quaid-principles',
    title: 'Quaid-e-Azam Muhammad Ali Jinnah',
    funTitle: 'Baba-e-Qaum: The Father of Our Nation! 🌟🎩',
    grade: 'Class 1–5',
    category: 'Founding Fathers',
    emoji: '🌟',
    color: 'from-slate-800 to-emerald-900',
    badge: 'Father of the Nation',
    concept:
      'Quaid-e-Azam Muhammad Ali Jinnah (born December 25, 1876, in Karachi) was a brilliant lawyer, leader of upright honesty, and the visionary founder of Pakistan. He gave the nation three golden guiding principles: Unity (Ittehad), Faith (Yaqeen-e-Mohkam), and Discipline (Tanzeem).',
    urduPhrase: 'اتحاد، یقین، تنظیم',
    urduTranslation: 'Unity, Faith, Discipline',
    character: {
      name: 'Usman the Young Scholar',
      avatar: '👦',
      role: 'History Detective'
    },
    funStory: {
      setup: 'Usman visited the grand white marble Mazar-e-Quaid in Karachi at sunrise.',
      action: 'He read the Quaid’s golden words carved in marble: "With faith, discipline, and selfless devotion to duty, there is nothing worthwhile that you cannot achieve."',
      result: 'Usman promised to study with honesty, respect his classmates, and keep his classroom spotless!'
    },
    visualBreakdown: {
      ruleLabel: 'The 3 Golden Principles of Quaid-e-Azam:',
      examples: [
        { item: '1. Unity (اتحاد - Ittehad) 🤝', label: 'Stand together as one strong family, helping each other regardless of province or language.' },
        { item: '2. Faith (یقین - Yaqeen) 🤲', label: 'Have unshakeable belief in Allah and believe in your own potential to achieve greatness.' },
        { item: '3. Discipline (تنظیم - Tanzeem) ⏱️', label: 'Be punctual, obey rules, respect elders, and work methodically with clean habits.' }
      ],
      caption: 'The Quaid always carried a pocket watch, stressing that respect for time is the secret of great nations.'
    },
    interactiveType: 'quaid-principles',
    funSecret: 'Quaid-e-Azam loved children and famously said: "Pakistan’s youth are the real architects of tomorrow!"',
    quickQuiz: {
      question: 'Where was Quaid-e-Azam Muhammad Ali Jinnah born?',
      options: ['Lahore', 'Karachi', 'Peshawar', 'Quetta'],
      correctIndex: 1,
      explanation: 'Quaid-e-Azam was born in Karachi on December 25, 1876, at Wazir Mansion!',
      hint: 'It is the famous coastal city of lights by the Arabian Sea!'
    }
  },
  {
    id: 'allama-iqbal-shaheen',
    title: 'Allama Muhammad Iqbal & The Shaheen',
    funTitle: 'Poet of the East: Fly High Like a Shaheen! 🦅📜',
    grade: 'Class 2–5',
    category: 'Founding Fathers',
    emoji: '🦅',
    color: 'from-amber-700 to-emerald-800',
    badge: 'Mufakkir-e-Pakistan',
    concept:
      'Dr. Allama Muhammad Iqbal (Shair-e-Mashriq) was the philosopher-poet who first dreamed of an independent homeland for Muslims in South Asia. In his inspiring poems, he compared young children to the "Shaheen" (Falcon/Eagle)—a noble bird that flies above stormy clouds and never settles for mediocrity.',
    urduPhrase: 'لب پہ آتی ہے دعا بن کے تمنا میری',
    urduTranslation: 'My prayer comes to my lips as a sincere longing',
    character: {
      name: 'Rayan the Junior Poet',
      avatar: '✍️',
      role: 'Young Orator'
    },
    funStory: {
      setup: 'Rayan stood on the school stage to recite Allama Iqbal’s famous school morning prayer.',
      action: 'He recited: "Zindagi shama ki soorat ho khudaya meri... Ho mera kaam ghareebon ki himayat karna!" (May my life be like a candle, helping the poor and spreading light).',
      result: 'The entire hall echoed with applause as everyone felt the power of Iqbal’s timeless words.'
    },
    visualBreakdown: {
      ruleLabel: 'Key Virtues of Iqbal’s "Shaheen" (Falcon):',
      examples: [
        { item: 'High Aspiration 🏔️', label: 'The Shaheen aims for mountain summits, never content with ground worms.' },
        { item: 'Fearlessness ⚡', label: 'It flies through harsh winds with courage and strength.' },
        { item: 'Self-Reliance (Khudi) 💎', label: 'It catches its own food and maintains honorable dignity.' },
        { item: 'Love for Knowledge 📚', label: 'Iqbal wanted children to master science, literature, and good morals.' }
      ],
      caption: 'Every morning in thousands of schools across Pakistan, students recite "Lab Pe Aati Hai Dua"!'
    },
    interactiveType: 'symbols-collector',
    funSecret: 'Allama Iqbal wrote beloved poems specifically for children, including "A Cow and a Goat", "A Spider and a Fly", and "The Mountain and the Squirrel"!',
    quickQuiz: {
      question: 'Which noble bird did Allama Iqbal use as a symbol for aspiring youth?',
      options: ['Pigeon (Kabootar)', 'Shaheen (Falcon/Eagle)', 'Peacock (Mor)', 'Sparrow (Chiriya)'],
      correctIndex: 1,
      explanation: 'Allama Iqbal used the Shaheen (Falcon) as a metaphor for brave, high-aiming youth who conquer life’s challenges!',
      hint: 'It is a swift, soaring bird of mountain summits!'
    }
  },
  {
    id: 'provinces-tour',
    title: 'The 4 Provinces & Territories',
    funTitle: 'Unity in Diversity: Journey Through Pakistan’s Provinces! 🗺️✨',
    grade: 'Class 1–5',
    category: 'Provinces & Culture',
    emoji: '🗺️',
    color: 'from-teal-600 to-sky-800',
    badge: 'Provinces of Pakistan',
    concept:
      'Pakistan is a rich tapestry of vibrant cultures! It has four provinces: Punjab (Land of 5 Rivers & lush fields), Sindh (Cradle of Indus civilization & Ajrak), Khyber Pakhtunkhwa (Land of valiant hospitality & Khyber Pass), and Balochistan (Largest by land area with golden coasts & minerals), plus Islamabad (Federal Capital), Gilgit-Baltistan, and Azad Kashmir.',
    character: {
      name: 'Mir the Traveler',
      avatar: '🎒',
      role: 'Cultural Explorer'
    },
    funStory: {
      setup: 'Mir boarded the Khyber Mail express train to taste the regional flavors and wear traditional outfits across Pakistan.',
      action: 'He wore a Sindh Ajrak in Karachi, ate Sarson ka Saag in Punjab, admired the Khyber Pass in KP, and tasted Balochi Sajji in Quetta.',
      result: 'He discovered that while languages and traditional dresses differ, every Pakistani’s heart beats with the same love!'
    },
    visualBreakdown: {
      ruleLabel: 'The Provinces & Their Treasures:',
      examples: [
        { item: 'Punjab (Capital: Lahore) 🌾', label: 'Land of 5 Rivers; famous for Badshahi Mosque, Shalimar Gardens, and wheat fields.' },
        { item: 'Sindh (Capital: Karachi) 🌊', label: 'Bab-ul-Islam; famous for Mohenjo-daro, Ajrak & Sindhi Topi, and Karachi port.' },
        { item: 'Khyber Pakhtunkhwa (Capital: Peshawar) 🏔️', label: 'Famous for Khyber Pass, Qissa Khwani Bazaar, Chapli Kebabs, and warm hospitality.' },
        { item: 'Balochistan (Capital: Quetta) ⛰️', label: 'Largest province by land; famous for Gwadar Port, fruit orchards, and Ziarat juniper forests.' },
        { item: 'Gilgit-Baltistan (Capital: Gilgit) ❄️', label: 'Crown of mountains; home to K2, Hunza Valley, and Shangrila Lake.' },
        { item: 'Islamabad (Federal Capital) 🏛️', label: 'Green, planned capital city nestled at the foot of Margalla Hills.' }
      ],
      caption: 'Each province adds a distinct, vibrant color to the beautiful bouquet of Pakistan!'
    },
    interactiveType: 'provinces-tour',
    funSecret: 'Balochistan covers over 43% of Pakistan’s total land area, making it by far the largest province in geography!',
    quickQuiz: {
      question: 'Which is the largest province of Pakistan by total land area?',
      options: ['Punjab', 'Sindh', 'Balochistan', 'Khyber Pakhtunkhwa'],
      correctIndex: 2,
      explanation: 'Balochistan is the largest province of Pakistan by area, covering nearly 347,190 square kilometers!',
      hint: 'It is the rugged southwestern province home to Gwadar and Quetta!'
    }
  },
  {
    id: 'k2-climber',
    title: 'Mighty Mountains & K2 (Chhogori)',
    funTitle: 'King of Karakoram: The Mighty K2 & Snow Peaks! 🏔️❄️',
    grade: 'Class 2–5',
    category: 'Nature & Wonders',
    emoji: '🏔️',
    color: 'from-sky-700 to-indigo-900',
    badge: 'K2 & Karakoram',
    concept:
      'Pakistan is the mountain throne of the world! It is home to K2 (8,611 meters), the second highest mountain on Earth, also known as the Savage Mountain. Pakistan holds 5 of the world’s 14 "Eight-Thousander" peaks, including Nanga Parbat, Gasherbrum I & II, and Broad Peak!',
    character: {
      name: 'Sherpa Ali',
      avatar: '🧗‍♂️',
      role: 'Glacier Mountaineer'
    },
    funStory: {
      setup: 'Ali laced up his spiked crampons to trek the icy Baltoro Glacier toward Concordia—the throne room of mountain gods.',
      action: 'He looked up and saw K2’s towering pyramid shape shining silver against the cobalt blue Karakoram sky.',
      result: 'Pakistan has more high-altitude glacial ice than anywhere on Earth outside the North and South Poles!'
    },
    visualBreakdown: {
      ruleLabel: 'Pakistan’s Giant Mountain Giants:',
      examples: [
        { item: 'K2 (8,611 m) 🏔️', label: 'World’s 2nd highest peak; famous for its steep pyramid walls in Gilgit-Baltistan.' },
        { item: 'Nanga Parbat (8,126 m) ❄️', label: 'World’s 9th highest peak; boasts the largest sheer mountain face on Earth (Rupal Face).' },
        { item: 'Gasherbrum I & II (8,080 m) ⚡', label: 'Gleaming mountain wall in Karakoram, known as the "Shining Mountain".' },
        { item: 'Broad Peak (8,051 m) 🌬️', label: 'Massive crest spanning over 1.5 kilometers of snow ridge.' }
      ],
      caption: 'Three of the world’s greatest mountain ranges meet in Pakistan: Himalayas, Karakoram, and Hindu Kush!'
    },
    interactiveType: 'k2-climber',
    funSecret: 'The Karakoram Highway connecting Pakistan to China is often called the "8th Wonder of the World" because it passes through mountain cliffs at over 4,693 meters high!',
    quickQuiz: {
      question: 'What is the height of K2, the second highest mountain in the world?',
      options: ['8,611 meters', '8,848 meters', '7,200 meters', '9,100 meters'],
      correctIndex: 0,
      explanation: 'K2 stands at 8,611 meters (28,251 feet) above sea level in the Karakoram range of Gilgit-Baltistan, Pakistan!',
      hint: 'It is just a little below 8,848 meters (Everest)!'
    }
  },
  {
    id: 'indus-journey',
    title: 'The Sacred Indus River (Darya-e-Sindh)',
    funTitle: 'Lifeline of the Nation: The Great Indus River! 🌊🐟',
    grade: 'Class 1–5',
    category: 'Nature & Wonders',
    emoji: '🌊',
    color: 'from-blue-600 to-cyan-800',
    badge: 'Indus River',
    concept:
      'The Indus River (Darya-e-Sindh) is the longest river in Pakistan and the heartbeat of its agriculture. Originating from the glaciers of Tibet, it runs over 3,180 kilometers through Gilgit-Baltistan, Khyber Pakhtunkhwa, Punjab, and Sindh before resting in the Arabian Sea.',
    character: {
      name: 'Bholo the Blind River Dolphin',
      avatar: '🐬',
      role: 'Indus River Mascot'
    },
    funStory: {
      setup: 'Bholo, the playful Indus River dolphin, swam upstream against crystal mountain currents.',
      action: 'He splashed through gorges, swam beneath the Sukkur Barrage gates, and leaped playfully near mangrove estuaries.',
      result: 'The Indus River irrigates millions of acres of golden wheat, rice, and sweet sugarcane fields feeding over 240 million people!'
    },
    visualBreakdown: {
      ruleLabel: 'Key Stages of the Indus River:',
      examples: [
        { item: '1. Source in High Glaciers 🏔️', label: 'Begins near Mount Kailash in Tibet, fed by melting glaciers.' },
        { item: '2. Northern Gorges 🌊', label: 'Carves through deep rocky canyons in Gilgit-Baltistan and KP.' },
        { item: '3. Panjnad Confluence 🌿', label: 'Merges with the 5 rivers of Punjab (Jhelum, Chenab, Ravi, Sutlej, Beas).' },
        { item: '4. Delta & Arabian Sea 🌊', label: 'Spreads into fertile mangroves before flowing into the open Arabian Sea.' }
      ],
      caption: 'The Indus River Basin supports the world’s largest contiguous canal irrigation system!'
    },
    interactiveType: 'indus-journey',
    funSecret: 'The rare Indus River Dolphin (Bhulan) is almost completely blind and navigates the muddy river waters using echolocation sound clicks!',
    quickQuiz: {
      question: 'Into which body of water does the Indus River finally flow?',
      options: ['Red Sea', 'Arabian Sea', 'Bay of Bengal', 'Caspian Sea'],
      correctIndex: 1,
      explanation: 'The Indus River completes its 3,180-kilometer journey by draining into the Arabian Sea near Karachi and Thatta, Sindh!',
      hint: 'It is the warm sea washing Pakistan’s southern coastline!'
    }
  },
  {
    id: 'ancient-mohenjo',
    title: 'Mohenjo-daro & Ancient Indus Civilization',
    funTitle: '5,000-Year-Old Brick City: Mohenjo-daro! 🏺🧱',
    grade: 'Class 2–5',
    category: 'Heritage & Heroes',
    emoji: '🏺',
    color: 'from-amber-700 to-stone-800',
    badge: 'Indus Valley',
    concept:
      'Over 5,000 years ago, one of the world’s earliest advanced civilizations flourished along the Indus River! Mohenjo-daro (in Sindh) and Harappa (in Punjab) had paved straight streets, two-story baked brick houses, covered underground drains, and the famous Great Bath.',
    character: {
      name: 'Archaeologist Sassi',
      avatar: '🔍',
      role: 'Bronze Age Excavator'
    },
    funStory: {
      setup: 'Sassi gently dusted red soil off an ancient carved soapstone seal showing a majestic humped bull.',
      action: 'She walked through the ruins of the Great Bath, astonished that ancient engineers built waterproof brick tanks 4,500 years ago!',
      result: 'The Indus people lived in peace—archaeologists found no weapons of war, only tools, toys, jewelry, and seals!'
    },
    visualBreakdown: {
      ruleLabel: 'Wonders of Indus Valley Engineering:',
      examples: [
        { item: 'The Great Bath 🛁', label: 'Large public water tank lined with tar (bitumen) to prevent water leakage.' },
        { item: 'Grid City Planning 📐', label: 'Streets laid out in straight right angles like modern planned cities!' },
        { item: 'Underground Drainage 🚰', label: 'Covered sewers beneath brick pavements kept the city hygienic and clean.' },
        { item: 'Clay Toys & Dice 🎲', label: 'Children played with baked clay whistles, mini carts, and board game dice!' }
      ],
      caption: 'Mohenjo-daro was discovered in 1922 and is recognized as a UNESCO World Heritage Site.'
    },
    interactiveType: 'ancient-mohenjo',
    funSecret: 'Indus Valley children played with clay carts with moving wheels and whistles shaped like birds over 4,500 years ago!',
    quickQuiz: {
      question: 'In which province of Pakistan are the famous ruins of Mohenjo-daro located?',
      options: ['Punjab', 'Khyber Pakhtunkhwa', 'Sindh', 'Balochistan'],
      correctIndex: 2,
      explanation: 'Mohenjo-daro is located in Larkana District, Sindh, on the right bank of the Indus River!',
      hint: 'It is located in the province known as Bab-ul-Islam!'
    }
  },
  {
    id: 'monuments-gallery',
    title: 'National Monuments of Pakistan',
    funTitle: 'Architectural Marvels: Minar-e-Pakistan & Beyond! 🏛️🕌',
    grade: 'Class 1–5',
    category: 'Heritage & Heroes',
    emoji: '🏛️',
    color: 'from-emerald-800 to-slate-900',
    badge: 'National Monuments',
    concept:
      'Pakistan’s skyline is graced with historical and modern monuments: Minar-e-Pakistan (where the Pakistan Resolution was passed in 1940), Faisal Mosque (nestled against Margalla Hills in Islamabad), Badshahi Mosque (grand Mughal heritage), and Bab-e-Khyber.',
    character: {
      name: 'Daanish the Architect',
      avatar: '📐',
      role: 'Monument Designer'
    },
    funStory: {
      setup: 'Daanish stood inside Iqbal Park in Lahore gazing up at Minar-e-Pakistan’s 70-meter tall marble petals.',
      action: 'He noticed that the base is made of rough uncut stones, gradually changing to polished white marble at the top to symbolize the struggle for freedom.',
      result: 'Every monument reminds future generations of the sacrifices and vision that created Pakistan!'
    },
    visualBreakdown: {
      ruleLabel: 'Must-Visit Monuments in Pakistan:',
      examples: [
        { item: 'Minar-e-Pakistan (Lahore) 🗼', label: 'Tower standing where the historic Lahore Resolution was passed on March 23, 1940.' },
        { item: 'Faisal Mosque (Islamabad) 🕌', label: 'Bedouin tent design by Turkish architect Vedat Dalokay; one of the world’s largest mosques.' },
        { item: 'Mazar-e-Quaid (Karachi) 🏛️', label: 'Majestic white marble dome mausoleum honoring founder Muhammad Ali Jinnah.' },
        { item: 'Bab-e-Khyber (Peshawar) 🚪', label: 'Historic gateway arch opening into the legendary Khyber Pass.' },
        { item: 'Ziarat Residency (Balochistan) 🏡', label: 'Historic wooden palace where Quaid-e-Azam spent his last days amid juniper trees.' }
      ],
      caption: 'Faisal Mosque does not have a traditional dome; its roof mimics a desert nomad’s tent!'
    },
    interactiveType: 'monuments-gallery',
    funSecret: 'Faisal Mosque can accommodate over 300,000 worshippers across its main hall and courtyards!',
    quickQuiz: {
      question: 'Which monument was built in Lahore where the Pakistan Resolution was passed in 1940?',
      options: ['Bab-e-Khyber', 'Minar-e-Pakistan', 'Mazar-e-Quaid', 'Pakistan Monument'],
      correctIndex: 1,
      explanation: 'Minar-e-Pakistan was built in Greater Iqbal Park, Lahore, on the exact site of the historic March 23, 1940 resolution!',
      hint: 'It is a 70-meter tall tower resembling unfolding flower petals!'
    }
  },
  {
    id: 'sports-trophies',
    title: 'Sports Legends & World Champions',
    funTitle: 'Green Champions: Pakistan’s Golden Sports Victories! 🏏🏆',
    grade: 'Class 2–5',
    category: 'Heritage & Heroes',
    emoji: '🏏',
    color: 'from-emerald-700 to-teal-900',
    badge: 'Sports Legends',
    concept:
      'Pakistan has a rich heritage of world champions! Pakistan won the 1992 Cricket World Cup, 4 Field Hockey World Cups, dominated World Squash for decades with legends Jahangir Khan and Jansher Khan, and won Olympic Gold in javelin throw (Arshad Nadeem)!',
    character: {
      name: 'Captain Shaan',
      avatar: '🏅',
      role: 'Youth Sports Coach'
    },
    funStory: {
      setup: 'Shaan stepped onto the cricket pitch gripping his bat with green grip tape.',
      action: 'He remembered Imran Khan’s Cornered Tigers in 1992, Jahangir Khan’s 555-match unbeaten streak, and Arshad Nadeem’s record-shattering 92.97m javelin throw in Paris!',
      result: 'He realized that with practice, discipline, and passion, Pakistani youth can conquer any world stage!'
    },
    visualBreakdown: {
      ruleLabel: 'Historic Sports Milestones for Pakistan:',
      examples: [
        { item: '1992 Cricket World Cup 🏏', label: 'Pakistan defeated England in Melbourne under Captain Imran Khan!' },
        { item: 'Squash Supremacy (Jahangir Khan) 🎾', label: 'Jahangir Khan won 555 consecutive matches—the longest winning streak in all sports history!' },
        { item: 'Hockey World Champions (4 Times) 🏑', label: 'Pakistan won World Cup titles in 1971, 1978, 1982, and 1994!' },
        { item: 'Olympic Javelin Gold (2024) 🥇', label: 'Arshad Nadeem set an Olympic Record of 92.97m in Paris, winning Gold for Pakistan!' }
      ],
      caption: 'Pakistan is also the world’s leading manufacturer of hand-stitched footballs crafted in Sialkot!'
    },
    interactiveType: 'sports-trophies',
    funSecret: 'The city of Sialkot in Pakistan produces over 70% of the world’s hand-stitched soccer balls, including those used in FIFA World Cups!',
    quickQuiz: {
      question: 'Which Pakistani sports legend holds the record for 555 consecutive unbeaten matches in squash?',
      options: ['Imran Khan', 'Jahangir Khan', 'Wasim Akram', 'Shahid Afridi'],
      correctIndex: 1,
      explanation: 'Jahangir Khan won 555 consecutive professional squash matches between 1981 and 1986, recorded in the Guinness World Records!',
      hint: 'He is considered the greatest squash player in world sports history!'
    }
  }
];
