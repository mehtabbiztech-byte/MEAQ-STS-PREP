export interface EnglishTopic {
  id: string;
  title: string;
  funTitle: string;
  grade: string;
  category: 'Alphabet & Phonics' | 'Grammar Champions' | 'Creative Words' | 'Everyday English' | 'Sentence Building' | 'Word Magic';
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
    | 'phonics-vowels'
    | 'nouns-sorter'
    | 'verbs-action'
    | 'adjectives-paint'
    | 'pronouns-swap'
    | 'singular-plural'
    | 'prepositions-box'
    | 'punctuation-fix'
    | 'rhymes-match'
    | 'opposites-flip'
    | 'sight-words'
    | 'sentence-builder'
    | 'articles-guard'
    | 'tenses-machine';
  funSecret: string;
  quickQuiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    hint: string;
  };
}

export const KIDS_ENGLISH_TOPICS: EnglishTopic[] = [
  {
    id: 'phonics-vowels',
    title: 'Phonics & Magic Vowels',
    funTitle: 'The Magic Vowel Superheroes: A, E, I, O, U! 🦸‍♀️🦸‍♂️',
    grade: 'Class 1–2',
    category: 'Alphabet & Phonics',
    emoji: '🔤',
    color: 'from-pink-500 to-rose-500',
    badge: 'Sounds & Magic Letters',
    concept: 'Out of all 26 letters in the alphabet, five letters are special superheroes: A, E, I, O, U (and sometimes Y)! Without vowels, your mouth cannot make words sound out loud!',
    character: {
      name: 'Penny the Parrot',
      avatar: '🦜',
      role: 'Forest Singing Coach'
    },
    funStory: {
      setup: 'Penny tried to sing words without vowels: "C-T", "P-N", "D-G". Her friends were confused because it only sounded like throat clicks!',
      action: 'She called the Vowel Superheroes! Superhero A jumped into "C-T" to make CAT! Superhero E jumped into "P-N" to make PEN! Superhero O made DOG!',
      result: 'The whole jungle burst into happy music! Every English word needs at least one vowel superhero to have a cheerful voice!'
    },
    visualBreakdown: {
      ruleLabel: 'Meet the 5 Vowels:',
      examples: [
        { item: '🅰️ A', label: 'as in Apple, Ant, Astronaut' },
        { item: '🅴 E', label: 'as in Elephant, Egg, Engine' },
        { item: '🅸 I', label: 'as in Igloo, Ink, Iguana' },
        { item: '🅾️ O', label: 'as in Octopus, Orange, Owl' },
        { item: '🆄 U', label: 'as in Umbrella, Uncle, Unicorn' }
      ],
      caption: 'Every single English syllable has a vowel beating like a heart!'
    },
    interactiveType: 'phonics-vowels',
    funSecret: 'Try to say "cat" without the "ah" sound—you cannot! Vowels are the only letters that let air flow freely through your open mouth!',
    quickQuiz: {
      question: 'Which of these letters is a VOWEL superhero?',
      options: ['Letter B', 'Letter E', 'Letter M', 'Letter T'],
      correctIndex: 1,
      explanation: 'You rock! E is one of the 5 magical vowels (A, E, I, O, U)!',
      hint: 'Remember the five: A, E, I, O, U!'
    }
  },
  {
    id: 'nouns-sorter',
    title: 'Nouns (Naming Words)',
    funTitle: 'The Great Everything-Namer Detective! 🕵️‍♂️🔍',
    grade: 'Class 1–3',
    category: 'Grammar Champions',
    emoji: '🏷️',
    color: 'from-amber-500 to-orange-500',
    badge: 'Person, Place, Animal, Thing',
    concept: 'A noun is a naming word. Look around your room right now: everything you can touch, see, visit, or call by a name is a NOUN!',
    character: {
      name: 'Sherlock Kitten',
      avatar: '🐱',
      role: 'Mystery Detective'
    },
    funStory: {
      setup: 'Sherlock Kitten opened his golden notebook to solve the case of the Missing Fish in Lahore.',
      action: 'He organized his clue list into four boxes: Who took it? (Person), Where did it go? (Place), Who saw it? (Animal), What was left behind? (Thing).',
      result: 'Doctor Ali (Person) dropped his glasses (Thing) at Anarkali Bazaar (Place) when a fluffy Monkey (Animal) scampered past!'
    },
    visualBreakdown: {
      ruleLabel: 'The 4 Noun Families:',
      examples: [
        { item: '👨‍⚕️ Person', label: 'Doctor, Teacher, Sister, Ali' },
        { item: '🏫 Place', label: 'Karachi, School, Park, Garden' },
        { item: '🐬 Animal', label: 'Dolphin, Tiger, Peacock, Cat' },
        { item: '⚽ Thing', label: 'Book, Pencil, Football, Chair' }
      ],
      caption: 'If it has a name, it is a noun!'
    },
    interactiveType: 'nouns-sorter',
    funSecret: 'Special names like "Pakistan", "Sara", or "Monday" are Proper Nouns and ALWAYS get a proud CAPITAL letter at the front!',
    quickQuiz: {
      question: 'Which word in this sentence is a PLACE noun: "The boy ran to the school"?',
      options: ['boy', 'ran', 'school', 'the'],
      correctIndex: 2,
      explanation: 'Brilliant! "School" is a Place noun! ("Boy" is a person, and "ran" is an action verb).',
      hint: 'Where did the boy run to?'
    }
  },
  {
    id: 'verbs-action',
    title: 'Verbs (Action Words)',
    funTitle: 'Action Heroes: Jump, Sing, Dance, Zoom! 🚀🤸',
    grade: 'Class 1–3',
    category: 'Grammar Champions',
    emoji: '⚡',
    color: 'from-emerald-500 to-teal-500',
    badge: 'Doing & Moving Words',
    concept: 'Verbs are energy words! They tell you what someone or something is DOING. Without verbs, the world would be frozen like statues in a museum!',
    character: {
      name: 'Flash the Cheetah',
      avatar: '🐆',
      role: 'Speed Champion'
    },
    funStory: {
      setup: 'Flash woke up with super bouncy energy on sports day.',
      action: 'He did not just sit. He ran across the field, jumped over hurdles, kicked the soccer ball, and cheered with his team!',
      result: 'Every single move Flash made was an ACTION VERB! "Ran", "jumped", "kicked", and "cheered" put the whole story in motion!'
    },
    visualBreakdown: {
      ruleLabel: 'Actions You Can Do Right Now:',
      examples: [
        { item: '🏃 Running', label: 'Flash runs like the wind' },
        { item: '🤸 Jumping', label: 'Frogs jump across the pond' },
        { item: '📚 Reading', label: 'Zainab reads a wonderful book' },
        { item: '🎨 Painting', label: 'Ayaan paints a blue ocean' }
      ],
      caption: 'If you can act it out or do it with your body, it is an action verb!'
    },
    interactiveType: 'verbs-action',
    funSecret: 'Even quiet things like "sleep", "think", and "dream" are verbs because your brain and body are still doing something!',
    quickQuiz: {
      question: 'Find the ACTION VERB: "The happy rabbit hops across the grass."',
      options: ['happy', 'rabbit', 'hops', 'grass'],
      correctIndex: 2,
      explanation: 'Super work! "Hops" is what the rabbit is DOING, so it is an action verb!',
      hint: 'Ask yourself: what action is happening?'
    }
  },
  {
    id: 'adjectives-paint',
    title: 'Adjectives (Describing Words)',
    funTitle: 'The Magic Color & Sparkle Brush! 🎨✨',
    grade: 'Class 2–4',
    category: 'Creative Words',
    emoji: '🌈',
    color: 'from-violet-500 to-purple-600',
    badge: 'Describing Size, Color & Mood',
    concept: 'Adjectives describe nouns! They answer: What kind? Which one? How many? Instead of just saying "a dog", you can say "a playful, furry, golden puppy"!',
    character: {
      name: 'Barnaby the Beaver',
      avatar: '🦫',
      role: 'Woodland Artist'
    },
    funStory: {
      setup: 'Barnaby had a canvas with a plain circle drawn with a pencil. It was boring.',
      action: 'He dipped his paintbrush into adjectives: Bright yellow! Huge! Sweet! Crispy! Juicy!',
      result: 'The boring circle transformed into a giant, juicy, bright yellow mango that made everyone drool!'
    },
    visualBreakdown: {
      ruleLabel: 'Adjective Detective Questions:',
      examples: [
        { item: '🎨 Color', label: 'Green parrot, Blue sky, Red car' },
        { item: '📏 Size', label: 'Gigantic dinosaur, Tiny ant' },
        { item: '😊 Feeling', label: 'Cheerful girl, Brave lion' },
        { item: '👅 Taste/Touch', label: 'Crunchy samosa, Soft pillow' }
      ],
      caption: 'Adjectives add flavor, color, and excitement to your sentences!'
    },
    interactiveType: 'adjectives-paint',
    funSecret: 'Numbers are adjectives too! In "three little kittens", both "three" (how many) and "little" (size) describe the kittens!',
    quickQuiz: {
      question: 'Which word is the ADJECTIVE: "She wore a shiny silver crown."',
      options: ['wore', 'shiny', 'crown', 'she'],
      correctIndex: 1,
      explanation: 'Spot on! "Shiny" (and "silver") describes how the crown looks!',
      hint: 'Which word describes the crown?'
    }
  },
  {
    id: 'pronouns-swap',
    title: 'Pronouns (Friendly Substitutes)',
    funTitle: 'The Substitute Squad: Giving Nouns a Break! 🦸',
    grade: 'Class 2–4',
    category: 'Grammar Champions',
    emoji: '🔄',
    color: 'from-blue-500 to-cyan-500',
    badge: 'He, She, It, They & We',
    concept: 'Imagine saying: "Ali picked up Ali\'s bag and Ali walked to Ali\'s school." That sounds like a broken robot! Pronouns like He, She, It, They, and We step in so you do not repeat the same name!',
    character: {
      name: 'Rani the Robot',
      avatar: '🤖',
      role: 'Grammar Mechanic'
    },
    funStory: {
      setup: 'Rani was listening to a robot friend who kept saying "Hamza" seventeen times in three sentences.',
      action: 'Rani used her wrench to install the PRONOUN CHIP: replace boy with HE/HIM, girl with SHE/HER, thing with IT, and a team with THEY!',
      result: '"Hamza took his bag and HE walked to his school. HE met his friends and THEY played together." Smooth, clean, and happy!'
    },
    visualBreakdown: {
      ruleLabel: 'The Pronoun Swaps:',
      examples: [
        { item: '👦 For a Boy', label: 'Tariq ➔ He / Him / His' },
        { item: '👧 For a Girl', label: 'Amina ➔ She / Her / Hers' },
        { item: '📦 For an Object/Animal', label: 'Ball / Cat ➔ It / Its' },
        { item: '👥 For Groups', label: 'Ali & Sara ➔ They / Them / We' }
      ],
      caption: 'Pronouns are kind helpers that give tired names a well-deserved rest!'
    },
    interactiveType: 'pronouns-swap',
    funSecret: 'Always use "I" with a capital letter when talking about yourself—you are always important!',
    quickQuiz: {
      question: 'Which pronoun replaces "The playful puppy" in: "...was chasing its tail"?',
      options: ['He', 'It', 'They', 'She'],
      correctIndex: 1,
      explanation: 'Awesome! We use "It" for animals or objects when we speak generally!',
      hint: 'Think of the pronoun for an animal or thing.'
    }
  },
  {
    id: 'singular-plural',
    title: 'Singular & Plural (One & Many)',
    funTitle: 'The Multiplying Wand: Adding -S, -ES & Secret Plurals! 🪄🎩',
    grade: 'Class 1–3',
    category: 'Word Magic',
    emoji: '✨',
    color: 'from-purple-500 to-indigo-600',
    badge: 'One vs. Many',
    concept: 'Singular means ONE single item. Plural means TWO or MORE! Usually, adding the letter "S" turns one into a party: 1 Cat 🐱 ➔ 3 Cats 🐱🐱🐱!',
    character: {
      name: 'Presto the Magician',
      avatar: '🎩',
      role: 'Grand Illusionist'
    },
    funStory: {
      setup: 'Presto placed one shiny red apple on his golden magic table.',
      action: 'He tapped his wand and chanted: "Abracadabra, add an S!" Instantly, seven juicy apples appeared in a row!',
      result: 'When he tapped a "Box", his wand buzzed: "Words ending in X, S, CH, SH need -ES!" So 1 Box became 2 Boxes!'
    },
    visualBreakdown: {
      ruleLabel: 'Plural Rules Made Easy:',
      examples: [
        { item: 'Simple +S', label: 'Book ➔ Books, Cat ➔ Cats, Star ➔ Stars' },
        { item: 'Add -ES (sh, ch, x, s)', label: 'Dish ➔ Dishes, Watch ➔ Watches, Box ➔ Boxes' },
        { item: 'Change Y to -IES', label: 'Baby ➔ Babies, Butterfly ➔ Butterflies' },
        { item: 'Rebel Shape-Shifters!', label: 'Foot ➔ Feet, Tooth ➔ Teeth, Child ➔ Children' }
      ],
      caption: 'Look at how the ending letters change when things multiply!'
    },
    interactiveType: 'singular-plural',
    funSecret: 'Some rebel words never change at all! 1 Sheep is still 100 Sheep! 1 Fish is still a school of Fish!',
    quickQuiz: {
      question: 'What is the correct plural of "fox"?',
      options: ['foxs', 'foxes', 'foxies', 'foxen'],
      correctIndex: 1,
      explanation: 'Superstar! Because "fox" ends with the letter X, we add "-es" to make "foxes"!',
      hint: 'Remember: words ending with X take -es!'
    }
  },
  {
    id: 'prepositions-box',
    title: 'Prepositions (Position Words)',
    funTitle: 'Cheeky Monkey\'s Hide & Seek! 🙈📦',
    grade: 'Class 1–4',
    category: 'Everyday English',
    emoji: '📦',
    color: 'from-amber-400 to-yellow-500',
    badge: 'In, On, Under, Behind & Between',
    concept: 'Prepositions tell you WHERE something is located! Is the cheeky monkey inside the box? On top of the box? Or hiding behind the box?',
    character: {
      name: 'Chintu the Monkey',
      avatar: '🐵',
      role: 'Hide-and-Seek Champion'
    },
    funStory: {
      setup: 'Chintu challenged the jungle animals to a game of hide-and-seek.',
      action: 'First, he hid UNDER the big green leaf. Next, he sat ON TOP OF the branch. Then he jumped IN the mango basket!',
      result: 'The animals used position words to find him every time: "Look, Chintu is BEHIND the big banana tree!"'
    },
    visualBreakdown: {
      ruleLabel: 'Where is Chintu?',
      examples: [
        { item: '📥 IN', label: 'Inside the box or room' },
        { item: '🔛 ON', label: 'Resting on the surface of a table' },
        { item: '🔻 UNDER', label: 'Below or underneath a bed or tree' },
        { item: '🙈 BEHIND', label: 'Tucked away at the back of a door' },
        { item: '↔️ BETWEEN', label: 'In the middle of two friendly elephants' }
      ],
      caption: 'Position words give clear directions so no one gets lost!'
    },
    interactiveType: 'prepositions-box',
    funSecret: 'Prepositions also tell TIME, like "AT 5 o\'clock", "IN the morning", or "ON Sunday"!',
    quickQuiz: {
      question: 'Which preposition fits: "The cat is sleeping ___ the warm blanket"?',
      options: ['under', 'between', 'above', 'behind'],
      correctIndex: 0,
      explanation: 'Cozy and correct! The cat sleeps UNDER the blanket to stay snug!',
      hint: 'Think about where you snuggle under when it is chilly.'
    }
  },
  {
    id: 'punctuation-fix',
    title: 'Punctuation & Capital Letters',
    funTitle: 'Sentence Traffic Police: Stop, Ask & Shout! 🚦👮',
    grade: 'Class 2–5',
    category: 'Sentence Building',
    emoji: '🚦',
    color: 'from-red-500 to-rose-600',
    badge: 'Capitals, Full Stop, ? and !',
    concept: 'Without punctuation, sentences would crash into each other like cars with no traffic lights! Punctuation marks tell your voice when to pause, when to ask, and when to get excited!',
    character: {
      name: 'Officer Owl',
      avatar: '🦉',
      role: 'Grammar Highway Patrol'
    },
    funStory: {
      setup: 'Officer Owl saw a terrible runaway sentence on the road: "i love eating mangoes can i have another one wow this is delicious"',
      action: 'He blew his whistle! He put a Capital "I" at the start, a Full Stop (.) after mangoes, a Question Mark (?) after another one, and an Exclamation Mark (!) at the end!',
      result: '"I love eating mangoes. Can I have another one? Wow, this is delicious!" Now everyone could read it clearly and safely!'
    },
    visualBreakdown: {
      ruleLabel: 'The 4 Traffic Signals:',
      examples: [
        { item: '🔠 Capital Letter', label: 'Starts every sentence & names (A, B, C)' },
        { item: '🔴 Full Stop (.)', label: 'Red light: stop, breathe, sentence is done' },
        { item: '❓ Question Mark (?)', label: 'Curiosity curve: asking for an answer' },
        { item: '❗ Exclamation Mark (!)', label: 'Fireworks: joy, surprise, or shouting' }
      ],
      caption: 'Punctuation tells the reader\'s brain exactly how the sentence should sound!'
    },
    interactiveType: 'punctuation-fix',
    funSecret: 'The exclamation mark (!) was invented by scribes who wrote the Latin word "IO" (which meant joy) with the I stacked on top of the O!',
    quickQuiz: {
      question: 'Which mark belongs at the end: "Where did you hide my comic book___"',
      options: ['. (Full Stop)', '? (Question Mark)', '! (Exclamation)', ', (Comma)'],
      correctIndex: 1,
      explanation: 'Terrific! Because it asks a question starting with "Where", it needs a Question Mark (?)!',
      hint: 'It is asking something that needs an answer.'
    }
  },
  {
    id: 'rhymes-match',
    title: 'Rhyming Words & Word Families',
    funTitle: 'The Musical Echo Cave: Cat, Hat, Bat! 🎵🦇',
    grade: 'Class 1–3',
    category: 'Creative Words',
    emoji: '🎶',
    color: 'from-emerald-400 to-green-600',
    badge: 'Same Ending Sounds',
    concept: 'Words rhyme when they end with the EXACT same sound! They are like musical twins. If you can spell "CAT", you can easily spell BAT, HAT, MAT, and RAT!',
    character: {
      name: 'Melody the Mermaid',
      avatar: '🧜‍♀️',
      role: 'Underwater Songwriter'
    },
    funStory: {
      setup: 'Melody was writing a lullaby for the baby seahorses.',
      action: 'She sang: "A funny little FROG 🐸 sat on a mossy LOG 🪵, waiting in the morning FOG 🌫️, playing with a puppy DOG 🐶!"',
      result: 'The baby seahorses clapped because the rhythm felt so smooth and bouncy! Word families make poems and songs super easy to remember!'
    },
    visualBreakdown: {
      ruleLabel: 'Famous Word Families:',
      examples: [
        { item: '-AT family', label: 'Cat, Hat, Bat, Mat, Rat, Flat' },
        { item: '-OG family', label: 'Dog, Frog, Log, Fog, Jog' },
        { item: '-ING family', label: 'King, Ring, Sing, Wing, Spring' },
        { item: '-ALL family', label: 'Ball, Call, Fall, Tall, Wall' }
      ],
      caption: 'Only the starting consonant changes—the family rhyme stays identical!'
    },
    interactiveType: 'rhymes-match',
    funSecret: 'Did you know? In the entire English dictionary, almost nothing rhymes with the words "Orange", "Silver", or "Month"!',
    quickQuiz: {
      question: 'Which word RHYMES with "Star"?',
      options: ['Sun', 'Car', 'Sky', 'Moon'],
      correctIndex: 1,
      explanation: 'Twinkle twinkle! "Star" and "Car" both end with the identical "-ar" sound!',
      hint: 'Listen to the ending sound: St-ar, C-ar!'
    }
  },
  {
    id: 'opposites-flip',
    title: 'Opposites & Antonyms',
    funTitle: 'The Mirror World: Upside Down & Inside Out! 🪞🙃',
    grade: 'Class 1–4',
    category: 'Creative Words',
    emoji: '↔️',
    color: 'from-indigo-500 to-blue-600',
    badge: 'Opposite Meanings',
    concept: 'Antonyms are word opposites! They are like looking into a magical reverse mirror: Hot ↔ Cold, Happy ↔ Sad, Up ↔ Down. Knowing opposites doubles your vocabulary instantly!',
    character: {
      name: 'Flip & Flop the Penguins',
      avatar: '🐧',
      role: 'Opposite Twin Brothers'
    },
    funStory: {
      setup: 'Flip and Flop are twin penguins who love doing the exact opposite of each other!',
      action: 'When Flip says "It is HOT outside", Flop says "No, it is COLD!" When Flip walks FAST, Flop walks SLOW. When Flip is AWAKE, Flop is ASLEEP!',
      result: 'Together they discovered that opposites help us describe every shade of our world!'
    },
    visualBreakdown: {
      ruleLabel: 'Opposite Pairs to Remember:',
      examples: [
        { item: '☀️ Hot ↔ ❄️ Cold', label: 'Boiling tea vs. freezing ice cream' },
        { item: '🐘 Big ↔ 🐜 Small', label: 'Mighty elephant vs. tiny ant' },
        { item: '🐇 Fast ↔ 🐢 Slow', label: 'Speedy rabbit vs. gentle turtle' },
        { item: '☀️ Day ↔ 🌙 Night', label: 'Sun shining vs. stars glowing' }
      ],
      caption: 'Whenever you learn a new word, always ask: What is its opposite?'
    },
    interactiveType: 'opposites-flip',
    funSecret: 'The word "Cleave" is so bizarre that it is its own opposite! It can mean to stick tightly together, OR to split apart!',
    quickQuiz: {
      question: 'What is the OPPOSITE of "Heavy"?',
      options: ['Dark', 'Light', 'Hard', 'Big'],
      correctIndex: 1,
      explanation: 'Bingo! A boulder is heavy 🪨, but a feather is light 🪶!',
      hint: 'Think of a bird feather.'
    }
  },
  {
    id: 'articles-guard',
    title: 'Articles (A, An & The)',
    funTitle: 'The Vowel Guardians: A vs. AN! 🍏🛡️',
    grade: 'Class 2–5',
    category: 'Grammar Champions',
    emoji: '🛡️',
    color: 'from-teal-500 to-emerald-600',
    badge: 'A, An & The Rules',
    concept: 'We use "A" and "AN" before singular nouns. But how do you pick? If a word starts with a VOWEL SOUND (a, e, i, o, u), use "AN"! For all other consonant sounds, use "A"!',
    character: {
      name: 'Sir Arthur the Knight',
      avatar: '🛡️',
      role: 'Castle Vowel Guardian'
    },
    funStory: {
      setup: 'Sir Arthur was guarding the castle gate when a peasant asked for "a apple".',
      action: 'Sir Arthur said: "Try saying \'a apple\' fast three times! Your tongue gets stuck! But say \'AN apple\'—it flows like honey!"',
      result: 'From that day on, "AN" stands guard before words starting with vowel sounds: an elephant, an orange, an umbrella!'
    },
    visualBreakdown: {
      ruleLabel: 'When to Use Which:',
      examples: [
        { item: '🅰️ Use "A"', label: 'Before consonant sounds: A banana, A cat, A dog, A kite' },
        { item: '🛡️ Use "AN"', label: 'Before vowel sounds: An apple, An elephant, An igloo, An owl' },
        { item: '👑 Use "THE"', label: 'When talking about ONE specific or unique thing: The Sun, The Moon, The Principal' }
      ],
      caption: 'Say it out loud—if your mouth needs a smooth bridge before a vowel, choose AN!'
    },
    interactiveType: 'articles-guard',
    funSecret: 'It is the SOUND that counts, not just the spelling! We say "AN hour" because the H is silent and sounds like "our"!',
    quickQuiz: {
      question: 'Which article goes in the blank: "I saw ___ giant elephant at the zoo"?',
      options: ['a', 'an', 'the', 'these'],
      correctIndex: 0,
      explanation: 'Careful trick! The word right after the blank is "giant" (starts with G consonant sound), so we say "A giant elephant"! (If it were just elephant, it would be "AN elephant").',
      hint: 'Look at the first letter of the very next word: "giant".'
    }
  },
  {
    id: 'sentence-builder',
    title: 'Sentence Building (Who + Does + What)',
    funTitle: 'The Train Engine: Building Super Sentences! 🚂🚃',
    grade: 'Class 2–5',
    category: 'Sentence Building',
    emoji: '🚂',
    color: 'from-indigo-600 to-purple-700',
    badge: 'Subject + Verb + Object',
    concept: 'A complete sentence is like a three-car train! Car 1 is the Subject (WHO), Car 2 is the Verb (DOES WHAT), and Car 3 is the Object/Place (WHERE or TO WHAT).',
    character: {
      name: 'Conductor Cody',
      avatar: '👨‍✈️',
      role: 'Grammar Express Conductor'
    },
    funStory: {
      setup: 'Conductor Cody had three train wagons separated on three different tracks.',
      action: 'He coupled Wagon 1: "The happy astronaut", Wagon 2: "flew", and Wagon 3: "to the glowing moon"!',
      result: '"The happy astronaut flew to the glowing moon." All passengers cheered because the sentence expressed one complete, exciting thought!'
    },
    visualBreakdown: {
      ruleLabel: 'The 3 Train Wagons of Every Sentence:',
      examples: [
        { item: '1. Subject (Who?)', label: 'The clever girl, A furry cat, Bilal' },
        { item: '2. Verb (Action)', label: 'kicked, reads, baked, painted' },
        { item: '3. Object (What/Where?)', label: 'the soccer ball, a storybook, cookies' }
      ],
      caption: 'Hook all three wagons together to make a clear, powerful sentence!'
    },
    interactiveType: 'sentence-builder',
    funSecret: 'The shortest complete sentence in the entire English language is only two letters long: "Go!" (The subject "you" is understood)!',
    quickQuiz: {
      question: 'Which of these is a COMPLETE sentence?',
      options: [
        'The fast car down the road.',
        'Because the rain started falling.',
        'The bird sings a sweet song.',
        'Running through the big park.'
      ],
      correctIndex: 2,
      explanation: 'Bravo! "The bird sings a sweet song" has both a Subject (the bird) and a Verb (sings) making a complete idea!',
      hint: 'Look for the one with both someone who does it and an action word.'
    }
  },
  {
    id: 'sight-words',
    title: 'Sight Words & Flash Power',
    funTitle: 'The Lightning Flashcards: Read in a Snap! ⚡👀',
    grade: 'Class 1–3',
    category: 'Alphabet & Phonics',
    emoji: '⚡',
    color: 'from-amber-500 to-rose-500',
    badge: 'Instant Word Recognition',
    concept: 'Sight words are the most frequent words in all English books (the, was, were, you, said, because). When you recognize them in a split-second without sounding them out letter-by-letter, your reading becomes silky fast!',
    character: {
      name: 'Speedy the Fox',
      avatar: '🦊',
      role: 'Champion Speed Reader'
    },
    funStory: {
      setup: 'Speedy wanted to read the entire treasure map before the pirate arrived.',
      action: 'Instead of sounding out "t-h-e", he recognized "THE" in half a blink! He spotted "WHERE", "UNDER", "SAID", and "COME" like lightning bolts.',
      result: 'Speedy reached the treasure in 10 seconds flat! Practice sight words daily, and you will read books with superhero speed!'
    },
    visualBreakdown: {
      ruleLabel: 'Top 6 High-Power Sight Words:',
      examples: [
        { item: 'THE', label: 'The sun is shining bright' },
        { item: 'SAID', label: '"Let\'s go play!" said Mother' },
        { item: 'YOU', label: 'You are an amazing reader' },
        { item: 'HAVE', label: 'We have fun learning English' },
        { item: 'COME', label: 'Come along with our team' },
        { item: 'BECAUSE', label: 'I smiled because I won' }
      ],
      caption: 'Look at the shape of the word and say it instantly without hesitating!'
    },
    interactiveType: 'sight-words',
    funSecret: 'Just 100 sight words make up more than HALF of all the words in any children\'s storybook!',
    quickQuiz: {
      question: 'Which of these common sight words rhymes with "red"?',
      options: ['said', 'paid', 'laid', 'maid'],
      correctIndex: 0,
      explanation: 'Super! "Said" is pronounced like "sed" and rhymes with "red", even though it is spelled with "ai"!',
      hint: 'Listen to how "said" sounds: s-e-d!'
    }
  },
  {
    id: 'tenses-machine',
    title: 'Tenses (Past, Present & Future)',
    funTitle: 'The Time Travel Machine: Yesterday, Today & Tomorrow! ⏳🛸',
    grade: 'Class 3–5',
    category: 'Sentence Building',
    emoji: '⏳',
    color: 'from-sky-500 to-blue-700',
    badge: 'Past, Present, Future',
    concept: 'Tenses tell your reader WHEN the action happened! Past = already happened (Yesterday I played). Present = happening now (Today I play). Future = going to happen (Tomorrow I WILL play)!',
    character: {
      name: 'Professor Tick-Tock',
      avatar: '🦉',
      role: 'Time Travel Inventor'
    },
    funStory: {
      setup: 'Professor Tick-Tock climbed inside his chrome time machine.',
      action: 'He spun the dial to Yesterday: "I cooked noodles." He pushed the dial to Today: "I cook noodles." He pressed the rocket booster to Tomorrow: "I WILL cook noodles!"',
      result: 'The verb changed its costume in every time zone! By changing the verb, your listener instantly knows what time it is!'
    },
    visualBreakdown: {
      ruleLabel: 'The 3 Time Zones:',
      examples: [
        { item: '⏪ Past (Yesterday)', label: 'jumped, walked, cooked, played (add -ed)' },
        { item: '▶️ Present (Right Now)', label: 'jumps, walks, cooks, is playing' },
        { item: '⏩ Future (Tomorrow)', label: 'will jump, will walk, will cook' }
      ],
      caption: 'Add "will" for future, add "-ed" for regular past actions!'
    },
    interactiveType: 'tenses-machine',
    funSecret: 'Beware of irregular time travelers: "run" turns into "ran" in the past, and "eat" turns into "ate" (not eated)!',
    quickQuiz: {
      question: 'Which sentence is in the FUTURE tense?',
      options: [
        'Zaid kicked the ball.',
        'Zaid kicks the ball.',
        'Zaid will kick the ball.',
        'Zaid is kicking the ball.'
      ],
      correctIndex: 2,
      explanation: 'Time traveler extraordinaire! The magic helper word "will" shows that the action will happen in the future!',
      hint: 'Look for the word "will"!'
    }
  }
];
