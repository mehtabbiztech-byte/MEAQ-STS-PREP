export interface IslamiatTopic {
  id: string;
  title: string;
  funTitle: string;
  grade: string;
  category: 'Pillars & Faith' | 'Daily Worship' | 'Good Character & Akhlaq' | 'Prophets & Stories' | 'Quran & Duas';
  emoji: string;
  color: string;
  badge: string;
  concept: string;
  arabicPhrase?: string;
  arabicTranslation?: string;
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
    | 'pillars-builder'
    | 'prayer-clock'
    | 'wudu-steps'
    | 'faith-stars'
    | 'good-deeds-tree'
    | 'daily-duas'
    | 'prophets-timeline'
    | 'quran-surahs'
    | 'ramadan-iftar'
    | 'cleanliness-sunnah';
  funSecret: string;
  quickQuiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    hint: string;
  };
}

export const KIDS_ISLAMIAT_TOPICS: IslamiatTopic[] = [
  {
    id: 'pillars-builder',
    title: 'The 5 Pillars of Islam (Arkan-e-Islam)',
    funTitle: 'Building the Golden Mosque: The 5 Strong Pillars! 🕌⭐',
    grade: 'Class 1–5',
    category: 'Pillars & Faith',
    emoji: '🕌',
    color: 'from-emerald-600 to-teal-800',
    badge: '5 Pillars of Islam',
    concept: 'Just like a majestic building stands tall on strong foundation pillars, Islam is built upon 5 essential pillars: Shahadah (Faith), Salah (5 Daily Prayers), Zakat (Charity to the needy), Sawm (Fasting in Ramadan), and Hajj (Pilgrimage to Makkah)!',
    arabicPhrase: 'بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ',
    arabicTranslation: 'Islam is built upon five pillars',
    character: {
      name: 'Zayd the Young Builder',
      avatar: '👦',
      role: 'Junior Mosque Builder'
    },
    funStory: {
      setup: 'Zayd wanted to build a beautiful toy model of a grand mosque.',
      action: 'He carved 5 golden pillars: 1st for Shahadah (Belief in One Allah & Prophet Muhammad PBUH), 2nd for Salah (connecting with Allah 5 times a day), 3rd for Zakat (sharing wealth with poor people), 4th for Sawm (fasting with patience in Ramadan), and 5th for Hajj (visiting the holy Kaaba)!',
      result: 'The golden dome rested perfectly on the 5 pillars, shining bright with peace, unity, and blessings!'
    },
    visualBreakdown: {
      ruleLabel: 'The 5 Pillars (Arkan-e-Islam):',
      examples: [
        { item: '1. ☝️ Shahadah', label: 'Declaration of Faith: No god but Allah, and Muhammad (PBUH) is His Messenger' },
        { item: '2. 🤲 Salah (Namaz)', label: 'Performing 5 daily prayers on time' },
        { item: '3. 💰 Zakat', label: 'Giving a portion of savings (2.5%) to help the poor and needy' },
        { item: '4. 🌙 Sawm (Roza)', label: 'Fasting from dawn to sunset during the blessed month of Ramadan' },
        { item: '5. 🕋 Hajj', label: 'Pilgrimage to Makkah once in a lifetime for those who are able' }
      ],
      caption: 'Every Muslim practices these five foundational pillars to lead a noble, blessed life!'
    },
    interactiveType: 'pillars-builder',
    funSecret: 'Giving Zakat does not decrease your wealth; it purifies your earnings and brings Barakah (divine blessings) into your home!',
    quickQuiz: {
      question: 'Which of the five pillars of Islam means fasting during the holy month of Ramadan?',
      options: ['Salah', 'Sawm (Roza)', 'Zakat', 'Hajj'],
      correctIndex: 1,
      explanation: 'MashaAllah! Sawm is fasting from dawn until sunset during Ramadan, teaching patience and gratitude!',
      hint: 'It is the pillar associated with Ramadan and dates at Iftar.'
    }
  },
  {
    id: 'prayer-clock',
    title: 'The 5 Daily Prayers (Salah / Namaz)',
    funTitle: 'Meeting Allah 5 Times a Day: The Daily Prayer Clock! ⏰🤲',
    grade: 'Class 1–5',
    category: 'Daily Worship',
    emoji: '🕋',
    color: 'from-sky-600 to-indigo-800',
    badge: 'Fajr to Isha',
    concept: 'Salah is the direct spiritual link between you and Allah SWT. Muslims pray 5 times a day: Fajr (at dawn before sunrise), Dhuhr (after midday), Asr (late afternoon), Maghrib (just after sunset), and Isha (at night)!',
    arabicPhrase: 'الصَّلاَةُ عِمَادُ الدِّينِ',
    arabicTranslation: 'Prayer is the pillar of religion',
    character: {
      name: 'Bilal the Young Muezzin',
      avatar: '🕊️',
      role: 'Adhan Caller'
    },
    funStory: {
      setup: 'Bilal loved waking up early when the cool morning air was calm and quiet.',
      action: 'He called the sweet morning Adhan for Fajr (2 Rakats). Later in the day when the sun reached its peak, he prayed Dhuhr (4 Rakats), in the orange afternoon Asr (4 Rakats), as the sun set Maghrib (3 Rakats), and under the starry night Isha (4 Rakats)!',
      result: 'Every prayer washed away stress and filled his heart with peace, focus, and divine light!'
    },
    visualBreakdown: {
      ruleLabel: 'The 5 Daily Prayers & Fard Rakats:',
      examples: [
        { item: '🌅 Fajr (Dawn)', label: '2 Fard Rakats — Start the morning with gratitude' },
        { item: '☀️ Dhuhr (Afternoon)', label: '4 Fard Rakats — Midday spiritual recharge' },
        { item: '🌤️ Asr (Late Afternoon)', label: '4 Fard Rakats — Calm late afternoon prayer' },
        { item: '🌇 Maghrib (Sunset)', label: '3 Fard Rakats — Just as the sun dips below horizon' },
        { item: '🌙 Isha (Night)', label: '4 Fard Rakats — Peaceful prayer before sleep' }
      ],
      caption: 'The Prophet (PBUH) taught that praying on time is the dearest deed to Allah!'
    },
    interactiveType: 'prayer-clock',
    funSecret: 'Did you know? The 5 daily prayers wash away small mistakes just like bathing in a clear river 5 times a day leaves you completely clean!',
    quickQuiz: {
      question: 'How many FARD rakats are there in the morning Fajr prayer?',
      options: ['4 Rakats', '2 Rakats', '3 Rakats', '1 Rakat'],
      correctIndex: 1,
      explanation: 'SubhanAllah! Fajr consists of 2 Sunnah and 2 Fard rakats prayed before sunrise!',
      hint: 'It is the shortest prayer of the day.'
    }
  },
  {
    id: 'wudu-steps',
    title: 'Wudu (Step-by-Step Cleanliness)',
    funTitle: 'Sparkling Pure: The 8 Steps of Wudu! 💧✨',
    grade: 'Class 1–3',
    category: 'Daily Worship',
    emoji: '💧',
    color: 'from-cyan-500 to-blue-700',
    badge: 'Purification & Taharah',
    concept: 'Wudu is the special ritual washing we perform with clean water before offering Salah or touching the Holy Quran. It purifies both body and heart, washing away dust and bringing tranquility!',
    arabicPhrase: 'الطَّهُورُ شَطْرُ الإِيمَانِ',
    arabicTranslation: 'Cleanliness is half of faith',
    character: {
      name: 'Maryam & Hamza',
      avatar: '👧',
      role: 'Wudu Champions'
    },
    funStory: {
      setup: 'Maryam and Hamza heard the sweet Adhan call from the neighborhood mosque.',
      action: 'They stepped to the clean water tap, whispered "Bismillah", washed their hands 3 times, rinsed mouth and nose 3 times, washed face 3 times, washed arms up to elbows 3 times, wiped head and ears once (Masah), and washed feet up to ankles 3 times starting with the right foot!',
      result: 'They were refreshed, clean, and ready to stand before Allah with pure heart and clean hands!'
    },
    visualBreakdown: {
      ruleLabel: 'The 8 Sequential Steps of Wudu:',
      examples: [
        { item: '1. 🤲 Say Bismillah & Wash Hands', label: 'Clean hands up to the wrists 3 times' },
        { item: '2. 💧 Rinse Mouth & Nose', label: 'Gargle 3 times & sniff water gently into nose 3 times' },
        { item: '3. 🧒 Wash Face', label: 'Forehead to chin and ear-to-ear 3 times' },
        { item: '4. 💪 Wash Arms to Elbows', label: 'Right arm first 3 times, then left arm 3 times' },
        { item: '5. 💆 Masah (Wipe Head & Ears)', label: 'Moist hands wipe hair front to back and clean ears' },
        { item: '6. 🦶 Wash Feet to Ankles', label: 'Right foot first 3 times, then left foot 3 times' }
      ],
      caption: 'Always remember: do not waste water while making Wudu, even at a flowing river!'
    },
    interactiveType: 'wudu-steps',
    funSecret: 'On the Day of Judgment, the parts of your body washed during Wudu will shine radiant with bright light (Noor)!',
    quickQuiz: {
      question: 'Which side should you always start with when washing arms and feet in Wudu?',
      options: ['The Left side', 'The Right side', 'Any side is equal', 'Both at the exact same second'],
      correctIndex: 1,
      explanation: 'Alhamdulillah! Following the Sunnah, we always start noble and pure actions with the right side!',
      hint: 'The Prophet (PBUH) loved starting good deeds from this side.'
    }
  },
  {
    id: 'good-deeds-tree',
    title: 'Kindness & Good Deeds (Akhlaq & Adab)',
    funTitle: 'The Golden Seed: A Smile is Charity! 😊🌳❤️',
    grade: 'Class 1–5',
    category: 'Good Character & Akhlaq',
    emoji: '💖',
    color: 'from-amber-500 to-rose-600',
    badge: 'Manners & Kindness',
    concept: 'Islam teaches that having the best character (Husn-e-Akhlaq) is the most beautiful quality of a believer. Smiling at your brother, speaking kind words, helping parents, feeding stray kittens, and removing a stone from the path are all acts of worship (Sadaqah)!',
    arabicPhrase: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ صَدَقَةٌ',
    arabicTranslation: 'Your smiling in the face of your brother is charity',
    character: {
      name: 'Amina the Friendly Helper',
      avatar: '🧕',
      role: 'Kindness Ambassador'
    },
    funStory: {
      setup: 'Amina noticed an elderly grandmother carrying heavy grocery bags up the street.',
      action: 'She greeted her warmly with "Assalamu Alaikum!", took the heavy bag with both hands, smiled cheerfully, and helped her safely to her door.',
      result: 'The grandmother gave Amina warm heartfelt duas, and Allah recorded countless good deeds in Amina’s book of deeds!'
    },
    visualBreakdown: {
      ruleLabel: 'Daily Sunnah Habits of Kindness:',
      examples: [
        { item: '👋 Spread Salam', label: 'Say "Assalamu Alaikum wa Rahmatullah" to people you know and do not know' },
        { item: '🧓 Respect Parents & Elders', label: 'Speak gently to your mother and father and kiss their hands' },
        { item: '🤝 Speak the Truth', label: 'Always be honest in your words and play fair in games' },
        { item: '🐈 Be Gentle to Animals & Plants', label: 'Feed birds, water thirsty plants, and never harm creatures' }
      ],
      caption: 'The Prophet Muhammad (PBUH) said: "The best among you are those who have the best character."'
    },
    interactiveType: 'good-deeds-tree',
    funSecret: 'Even removing a sharp thorn, pebble, or banana peel from a walkway so people don’t trip is counted as a blessed charity (Sadaqah)!',
    quickQuiz: {
      question: 'What did Prophet Muhammad (PBUH) say about smiling at someone?',
      options: ['It is a waste of time', 'It is an act of charity (Sadaqah)', 'It is only for children', 'It makes you sleepy'],
      correctIndex: 1,
      explanation: 'MashaAllah! A warm, sincere smile spreads joy and counts as Sadaqah in the sight of Allah!',
      hint: 'It spreads happiness and earns divine reward without spending any money.'
    }
  },
  {
    id: 'daily-duas',
    title: 'Daily Duas & Blessed Words',
    funTitle: 'The Magic Words: Bismillah, Alhamdulillah & SubhanAllah! 📿✨',
    grade: 'Class 1–4',
    category: 'Quran & Duas',
    emoji: '🤲',
    color: 'from-violet-600 to-purple-800',
    badge: 'Everyday Duas',
    concept: 'Duas are our direct conversations with Allah! Whenever we begin anything we say Bismillah, when we finish or receive a blessing we say Alhamdulillah, when we see something magnificent we say SubhanAllah, and when planning the future we say InshaAllah!',
    arabicPhrase: 'الدُّعَاءُ مُخُّ الْعِبَادَةِ',
    arabicTranslation: 'Supplication (Dua) is the essence of worship',
    character: {
      name: 'Yusuf the Little Scholar',
      avatar: '👳',
      role: 'Dua Master'
    },
    funStory: {
      setup: 'Yusuf had a pocket guide of blessed daily phrases.',
      action: 'Before eating his delicious biryani he said "Bismillah", when he finished he wiped his mouth and said "Alhamdulillah", when he looked at the starry night sky he whispered "SubhanAllah", and before falling asleep he recited Ayatul Kursi!',
      result: 'His entire day was surrounded by angel protection, peace, and heavenly blessings!'
    },
    visualBreakdown: {
      ruleLabel: 'The 6 Golden Islamic Phrases:',
      examples: [
        { item: '1. بِسْمِ اللهِ (Bismillah)', label: 'In the name of Allah — before eating, studying, entering home' },
        { item: '2. اَلْحَمْدُ لِلَّهِ (Alhamdulillah)', label: 'All praise is for Allah — after eating, sneezing, receiving good news' },
        { item: '3. سُبْحَانَ اللهِ (SubhanAllah)', label: 'Glory be to Allah — when admiring beautiful nature and creations' },
        { item: '4. إِنْ شَاءَ اللهُ (InshaAllah)', label: 'If Allah wills — when promising or making future plans' },
        { item: '5. جَزَاكَ اللهُ خَيْرًا (JazakAllah Khair)', label: 'May Allah reward you with goodness — when thanking someone' },
        { item: '6. أَسْتَغْفِرُ اللهَ (Astaghfirullah)', label: 'I seek forgiveness from Allah — when asking for mercy after a mistake' }
      ],
      caption: 'Remembering Allah (Dhikr) brings deep serenity to the heart!'
    },
    interactiveType: 'daily-duas',
    funSecret: 'Saying "SubhanAllahi wa bihamdihi" 100 times a day takes less than 2 minutes, but wipes away sins like sea foam!',
    quickQuiz: {
      question: 'What blessed phrase do we say right before we start eating our meal or reading a book?',
      options: ['Alhamdulillah', 'Bismillah', 'Astaghfirullah', 'InshaAllah'],
      correctIndex: 1,
      explanation: 'SubhanAllah! We say Bismillah ("In the name of Allah") before beginning any good action!',
      hint: 'It begins with the letter B.'
    }
  },
  {
    id: 'prophets-timeline',
    title: 'Stories of the Beloved Prophets',
    funTitle: 'The Brave Messengers: Guiding Lights for Humanity! 📜🕊️',
    grade: 'Class 1–5',
    category: 'Prophets & Stories',
    emoji: '📖',
    color: 'from-amber-600 to-yellow-800',
    badge: 'Prophets of Allah',
    concept: 'Allah sent noble Prophets to guide humanity toward truth, kindness, and worship of the One Creator. From Prophet Adam (AS), Prophet Nuh (AS) and the Great Ark, Prophet Ibrahim (AS) the Friend of Allah, Prophet Musa (AS), Prophet Isa (AS), to the Final Messenger Prophet Muhammad (PBUH)!',
    arabicPhrase: 'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',
    arabicTranslation: 'We have not sent you except as a mercy to the worlds',
    character: {
      name: 'Grandpa Luqman',
      avatar: '👴',
      role: 'Storyteller of Wisdom'
    },
    funStory: {
      setup: 'Grandpa Luqman opened a leather-bound book of stories under the courtyard lantern.',
      action: 'He told how Prophet Nuh built a giant wooden ark to save pairs of animals from the great flood, how the fire turned cool and safe for Prophet Ibrahim, and how Prophet Muhammad (PBUH) showed unmatched mercy even to those who mistreated him!',
      result: 'The children learned that truthfulness, patience (Sabr), and relying on Allah (Tawakkul) will always triumph over hardship!'
    },
    visualBreakdown: {
      ruleLabel: 'Key Prophets and Their Lessons:',
      examples: [
        { item: '🌱 Prophet Adam (AS)', label: 'The first human being and first prophet created by Allah' },
        { item: '🚢 Prophet Nuh (AS)', label: 'Built the Great Ark with unwavering faith and patience' },
        { item: '🔥 Prophet Ibrahim (AS)', label: 'Khalilullah (Friend of Allah) who built the Holy Kaaba with Ismail (AS)' },
        { item: '🌊 Prophet Musa (AS)', label: 'Stood brave against Pharaoh; Allah parted the Red Sea for his people' },
        { item: '💚 Prophet Muhammad (PBUH)', label: 'The Seal of the Prophets, granted the Holy Quran, Mercy to all worlds' }
      ],
      caption: 'We love and respect all the Prophets sent by Allah to guide humankind!'
    },
    interactiveType: 'prophets-timeline',
    funSecret: 'Prophet Muhammad (PBUH) was known as Al-Amin (The Trustworthy) and As-Sadiq (The Truthful) by everyone in Makkah even before receiving Prophethood!',
    quickQuiz: {
      question: 'Which prophet built the Holy Kaaba in Makkah together with his son Prophet Ismail (AS)?',
      options: ['Prophet Nuh (AS)', 'Prophet Ibrahim (AS)', 'Prophet Musa (AS)', 'Prophet Yunus (AS)'],
      correctIndex: 1,
      explanation: 'MashaAllah! Prophet Ibrahim (AS) and his brave son Ismail (AS) laid the foundations of the holy Kaaba!',
      hint: 'He is known as Khalilullah (The Friend of Allah).'
    }
  },
  {
    id: 'quran-surahs',
    title: 'The Holy Quran & Short Surahs',
    funTitle: 'The Words of Allah: Surah Al-Fatiha & Al-Ikhlas! 📖🌟',
    grade: 'Class 1–5',
    category: 'Quran & Duas',
    emoji: '✨',
    color: 'from-emerald-600 to-green-800',
    badge: 'Short Surahs & Meaning',
    concept: 'The Holy Quran is the divine book revealed to Prophet Muhammad (PBUH) through Angel Jibril (AS). It contains 114 Surahs. Surah Al-Fatiha (The Opening) is read in every rakat of prayer, and Surah Al-Ikhlas teaches the absolute Oneness of Allah!',
    arabicPhrase: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
    arabicTranslation: 'Say, He is Allah, [who is] One',
    character: {
      name: 'Qari Tariq',
      avatar: '🎙️',
      role: 'Quran Teacher'
    },
    funStory: {
      setup: 'Qari Tariq gathered the students around the wooden Rehal bookstand.',
      action: 'He recited Surah Al-Ikhlas in a melodious voice. He explained that reciting this short 4-verse Surah carries the spiritual reward of reciting one-third of the entire Quran because it purely describes Allah’s oneness!',
      result: 'The students memorized its verses with proper Tajweed and felt deep love for their Creator!'
    },
    visualBreakdown: {
      ruleLabel: 'Surah Al-Ikhlas (Chapter 112) Line by Line:',
      examples: [
        { item: '1. قُلْ هُوَ اللَّهُ أَحَدٌ', label: 'Say, "He is Allah, [who is] One"' },
        { item: '2. اللَّهُ الصَّمَدُ', label: 'Allah, the Eternal Refuge (everyone needs Him, He needs no one)' },
        { item: '3. لَمْ يَلِدْ وَلَمْ يُولَدْ', label: 'He neither begets nor is born' },
        { item: '4. وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ', label: 'Nor is there to Him any equivalent or equal' }
      ],
      caption: 'Reciting Quran with understanding illuminates the heart and sharpens your mind!'
    },
    interactiveType: 'quran-surahs',
    funSecret: 'For every single letter of the Holy Quran that you recite, Allah rewards you with 10 good deeds (Hasanaat)! Saying "Alif-Lam-Mim" gives 30 rewards!',
    quickQuiz: {
      question: 'Which Surah is known as "Umm al-Kitab" (The Mother of the Book) and recited in every Rakat of Salah?',
      options: ['Surah Al-Baqarah', 'Surah Al-Fatiha', 'Surah Al-Fil', 'Surah An-Nas'],
      correctIndex: 1,
      explanation: 'SubhanAllah! Surah Al-Fatiha is the Opening chapter of the Quran recited in every single unit of prayer!',
      hint: 'It is the very first chapter of the Holy Quran.'
    }
  },
  {
    id: 'cleanliness-sunnah',
    title: 'Cleanliness is Half of Faith (Taharah & Sunnah)',
    funTitle: 'The Pure & Polished Kid: Sunnah Habits of Cleanliness! 🧼🪥',
    grade: 'Class 1–4',
    category: 'Good Character & Akhlaq',
    emoji: '🧼',
    color: 'from-teal-500 to-cyan-700',
    badge: 'Taharah & Daily Sunnah',
    concept: 'Cleanliness in Islam is not just good hygiene—it is an act of deep worship! Keeping teeth clean with Miswak or toothbrush, clipping fingernails, washing hands before meals, wearing clean clothes, and keeping your room tidy makes angels smile upon you!',
    arabicPhrase: 'إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ',
    arabicTranslation: 'Indeed, Allah loves those who turn to Him and loves those who purify themselves',
    character: {
      name: 'Safeer the Cleanliness Hero',
      avatar: '🦸‍♂️',
      role: 'Hygiene Champion'
    },
    funStory: {
      setup: 'Safeer loved the refreshing scent of natural floral Attar and clean clothes.',
      action: 'Every morning he brushed his teeth gently, clipped his nails neatly on Friday (Jummah), made sure his shoes were neatly arranged outside the door, and wiped his study desk clean after finishing homework.',
      result: 'His room felt peaceful, fragrant, and inviting, and his parents were overjoyed with his beautiful Islamic manners!'
    },
    visualBreakdown: {
      ruleLabel: 'Daily Islamic Hygiene Sunnahs:',
      examples: [
        { item: '🪥 Miswak / Brushing Teeth', label: 'Cleans the mouth and pleases our Creator' },
        { item: '💅 Trimming Nails', label: 'Recommended on Friday to keep germs away from fingertips' },
        { item: '🧼 Washing Hands Before & After Eating', label: 'Eats with clean right hand following the Prophet’s Sunnah' },
        { item: '🧺 Clean Clothes & Pleasant Scent', label: 'Wearing neat clothes and applying halal pleasant fragrance' }
      ],
      caption: 'A clean Muslim reflects the beauty, order, and dignity of their faith!'
    },
    interactiveType: 'cleanliness-sunnah',
    funSecret: 'Prophet Muhammad (PBUH) used the Miswak (natural tooth-stick) regularly before prayers, upon waking up, and when returning home!',
    quickQuiz: {
      question: 'Which day of the week is specially recommended in Sunnah for taking a bath (Ghusl) and trimming nails?',
      options: ['Monday', 'Friday (Jummah)', 'Wednesday', 'Saturday'],
      correctIndex: 1,
      explanation: 'MashaAllah! Jummah (Friday) is the weekly Eid of Muslims where taking a bath, wearing clean clothes, and clipping nails is Sunnah!',
      hint: 'It is the day of the special congregational prayer.'
    }
  }
];
