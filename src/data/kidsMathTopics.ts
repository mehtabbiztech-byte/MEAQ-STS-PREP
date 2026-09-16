export interface MathTopic {
  id: string;
  title: string;
  funTitle: string;
  grade: string;
  category: 'Counting & Numbers' | 'Operations' | 'Fractions' | 'Geometry & Shapes' | 'Everyday Life' | 'Puzzles & Tables';
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
  visualEquation: {
    leftVisual: string[];
    operator: string;
    rightVisual: string[];
    resultVisual: string[];
    mathText: string;
    caption: string;
  };
  interactiveType:
    | 'place-value'
    | 'addition'
    | 'subtraction'
    | 'multiplication'
    | 'division'
    | 'fractions'
    | 'shapes'
    | 'clock'
    | 'money'
    | 'tables'
    | 'patterns'
    | 'measurement';
  mathSecret: string;
  quickQuiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    hint: string;
  };
}

export const KIDS_MATH_TOPICS: MathTopic[] = [
  {
    id: 'counting-place-value',
    title: 'Counting & Place Value',
    funTitle: 'Building Giant Numbers with Mangoes & Bundles! 🥭',
    grade: 'Class 1–2',
    category: 'Counting & Numbers',
    emoji: '🔢',
    color: 'from-amber-400 to-orange-500',
    badge: 'Ones, Tens & Hundreds',
    concept: 'Place Value is the super-power of where a digit sits! In number 25, the 2 means 2 bundles of TEN (20), and 5 means 5 single ones.',
    character: {
      name: 'Momo the Monkey',
      avatar: '🐒',
      role: 'Fruit Stall Master'
    },
    funStory: {
      setup: 'Momo harvested 24 sweet yellow Sindhri mangoes.',
      action: 'He packs 10 mangoes in the first sack, and 10 mangoes in the second sack. 4 mangoes are left on the wooden table.',
      result: 'Look! 2 Sacks of Ten (20) + 4 Single Ones (4) = 24 Mangoes! If he gets 100 sacks, he will need a whole donkey cart!'
    },
    visualEquation: {
      leftVisual: ['📦 (10)', '📦 (10)'],
      operator: '+',
      rightVisual: ['🥭', '🥭', '🥭', '🥭'],
      resultVisual: ['2 Tens (20)', '+', '4 Ones (4)', '=', '24!'],
      mathText: '2 Tens + 4 Ones = 24',
      caption: 'Every bundle of 10 jumps into the Tens house!'
    },
    interactiveType: 'place-value',
    mathSecret: 'The digit "0" is a hero placeholder! Without 0, the number 10 would just look like 1, and 100 would look like 11!',
    quickQuiz: {
      question: 'In the number 47, how many TENS are there?',
      options: ['7 Tens', '4 Tens (worth 40)', '47 Tens', '1 Ten'],
      correctIndex: 1,
      explanation: 'Superstar! The 4 is in the Tens spot (4 × 10 = 40) and the 7 is in the Ones spot!',
      hint: 'Look at the left number: Tens live on the left of Ones!'
    }
  },
  {
    id: 'addition-fun',
    title: 'Addition (+)',
    funTitle: 'The Party Bus: Everyone Hop On! 🚌🎉',
    grade: 'Class 1–2',
    category: 'Operations',
    emoji: '➕',
    color: 'from-emerald-400 to-teal-500',
    badge: 'Putting Things Together',
    concept: 'Addition is just bringing items together into one big happy crowd. The plus sign (+) means "invite more friends to join!"',
    character: {
      name: 'Puff the Friendly Dragon',
      avatar: '🐲',
      role: 'Picnic Host'
    },
    funStory: {
      setup: 'Puff has 4 shiny red apples 🍎🍎🍎🍎 in his picnic basket.',
      action: 'His friend Zara brings 3 juicy green pears 🍐🍐🍐 to share.',
      result: 'They dump all fruits into one giant fruit salad bowl. Count them together: 1, 2, 3, 4... 5, 6, 7! 4 + 3 = 7 delicious fruits!'
    },
    visualEquation: {
      leftVisual: ['🍎', '🍎', '🍎', '🍎'],
      operator: '+',
      rightVisual: ['🍐', '🍐', '🍐'],
      resultVisual: ['🍎', '🍎', '🍎', '🍎', '🍐', '🍐', '🍐'],
      mathText: '4 + 3 = 7',
      caption: 'Count all the fruits in the basket!'
    },
    interactiveType: 'addition',
    mathSecret: 'The Flip-Flop Rule (Commutative): 4 + 3 is ALWAYS the exact same answer as 3 + 4 = 7! You can add in any order you like!',
    quickQuiz: {
      question: 'You have 5 shiny stars ⭐ and you find 4 more ⭐. How many do you have now?',
      options: ['8 Stars', '9 Stars', '10 Stars', '7 Stars'],
      correctIndex: 1,
      explanation: 'Woohoo! 5 + 4 = 9 stars shining bright in the sky!',
      hint: 'Start from 5 and count forward 4 steps: 6, 7, 8, 9!'
    }
  },
  {
    id: 'subtraction-fun',
    title: 'Subtraction (−)',
    funTitle: 'The Disappearing Cookie Mystery! 🍪🕵️',
    grade: 'Class 1–2',
    category: 'Operations',
    emoji: '➖',
    color: 'from-pink-400 to-rose-500',
    badge: 'Taking Away & Popping',
    concept: 'Subtraction is taking away, losing, or popping things to see how many are left. The minus sign (−) means "take away or fly away!"',
    character: {
      name: 'Sherlock Kitten',
      avatar: '🐱',
      role: 'Cookie Detective'
    },
    funStory: {
      setup: 'Baker Bilal made 8 warm chocolate chip cookies on a shiny tray.',
      action: 'Chintu the sneaky mouse tip-toes in and eats 3 cookies! (CRUNCH! CRUNCH! CRUNCH!)',
      result: 'Sherlock Kitten counts the crumbs left behind: 8 take away 3 leaves 5 cookies for the party! 8 − 3 = 5!'
    },
    visualEquation: {
      leftVisual: ['🍪', '🍪', '🍪', '🍪', '🍪', '🍪', '🍪', '🍪'],
      operator: '−',
      rightVisual: ['🍪', '🍪', '🍪', '(Eaten!)'],
      resultVisual: ['🍪', '🍪', '🍪', '🍪', '🍪'],
      mathText: '8 − 3 = 5',
      caption: '8 cookies minus 3 eaten leaves 5 yummy cookies!'
    },
    interactiveType: 'subtraction',
    mathSecret: 'Subtraction and Addition are best friends! If 8 − 3 = 5, you can check your work by adding backwards: 5 + 3 = 8!',
    quickQuiz: {
      question: 'There are 10 colorful balloons 🎈. 4 of them POP! How many balloons are still floating?',
      options: ['7 Balloons', '6 Balloons', '5 Balloons', '4 Balloons'],
      correctIndex: 1,
      explanation: 'Pop! Pop! Pop! Pop! 10 − 4 = 6 balloons floating happily!',
      hint: 'Start at 10 and count backwards 4 fingers: 9, 8, 7, 6!'
    }
  },
  {
    id: 'multiplication-fun',
    title: 'Multiplication (×)',
    funTitle: 'The Super-Fast Addition Machine! 🚀⚡',
    grade: 'Class 2–4',
    category: 'Operations',
    emoji: '✖️',
    color: 'from-purple-400 to-indigo-500',
    badge: 'Groups & Speed Math',
    concept: 'Multiplication is super-speed addition! Instead of adding 3 + 3 + 3 + 3 slowly, you say "4 groups of 3" = 4 × 3 = 12!',
    character: {
      name: 'Robo-Math 3000',
      avatar: '🤖',
      role: 'Speed Calculator'
    },
    funStory: {
      setup: 'A little pond has 3 lily pads. On EACH pad sit 4 joyful green frogs 🐸.',
      action: 'Instead of counting 1, 2, 3... 12 one by one, Robo-Math scans: 3 lily pads × 4 frogs each.',
      result: 'BEEP BOOP! 3 × 4 = 12 frogs! That is three times faster than slow counting!'
    },
    visualEquation: {
      leftVisual: ['🐸🐸🐸🐸 (Pad 1)', '🐸🐸🐸🐸 (Pad 2)', '🐸🐸🐸🐸 (Pad 3)'],
      operator: '×',
      rightVisual: ['3 groups of 4 frogs'],
      resultVisual: ['12 Frogs in Total! 🐸'],
      mathText: '3 × 4 = 12 (or 4 + 4 + 4 = 12)',
      caption: '3 groups of 4 make a grand total of 12!'
    },
    interactiveType: 'multiplication',
    mathSecret: 'Any number multiplied by 0 always equals 0! 1,000,000 × 0 = 0! Zero has the freeze-ray power!',
    quickQuiz: {
      question: 'A bicycle has 2 wheels. How many wheels do 5 bicycles have altogether?',
      options: ['7 Wheels', '10 Wheels', '12 Wheels', '8 Wheels'],
      correctIndex: 1,
      explanation: 'Zoom zoom! 5 bicycles × 2 wheels each = 10 wheels speeding down the street!',
      hint: 'Skip count by 2s five times: 2, 4, 6, 8, 10!'
    }
  },
  {
    id: 'division-fun',
    title: 'Division (÷)',
    funTitle: 'The No-Fighting Fair Share Rule! 🍫⚖️',
    grade: 'Class 3–5',
    category: 'Operations',
    emoji: '➗',
    color: 'from-cyan-400 to-blue-500',
    badge: 'Fair Sharing & Equal Groups',
    concept: 'Division means sharing fairly so everyone gets the exact same amount. Nobody cries, nobody fights!',
    character: {
      name: 'Judge Owl',
      avatar: '🦉',
      role: 'Fair Play Arbitrator'
    },
    funStory: {
      setup: 'You have a box of 12 delicious chocolate bars 🍫.',
      action: 'You and your 2 best friends (3 kids in total) want to eat them during break time.',
      result: 'Judge Owl hands 1 to friend A, 1 to friend B, 1 to friend C... until all 12 are gone. Each kid gets exactly 4 bars! 12 ÷ 3 = 4 bars each!'
    },
    visualEquation: {
      leftVisual: ['🍫🍫🍫🍫', '🍫🍫🍫🍫', '🍫🍫🍫🍫'],
      operator: '÷',
      rightVisual: ['3 Kids (Ali, Sara, Zain)'],
      resultVisual: ['4 bars per kid! 😋'],
      mathText: '12 ÷ 3 = 4',
      caption: '12 chocolates split evenly among 3 friends = 4 each!'
    },
    interactiveType: 'division',
    mathSecret: 'Division is the exact reverse of Multiplication! Since 3 × 4 = 12, then 12 ÷ 3 MUST equal 4, and 12 ÷ 4 MUST equal 3!',
    quickQuiz: {
      question: 'You have 15 pencils and 3 pencil boxes. How many pencils go into each box equally?',
      options: ['3 Pencils', '5 Pencils', '6 Pencils', '4 Pencils'],
      correctIndex: 1,
      explanation: 'Brilliant! 15 ÷ 3 = 5 pencils packed neatly in each box!',
      hint: 'Ask yourself: 3 times WHAT equals 15? 3 × 5 = 15!'
    }
  },
  {
    id: 'fractions-fun',
    title: 'Fractions (½, ¼, ¾)',
    funTitle: 'The Cheesy Pizza Slice Science! 🍕🧀',
    grade: 'Class 2–4',
    category: 'Fractions',
    emoji: '🍕',
    color: 'from-yellow-400 to-amber-500',
    badge: 'Parts of a Whole',
    concept: 'A fraction is a slice of something whole! The bottom number (Denominator) tells total slices cut. The top number (Numerator) tells how many you get!',
    character: {
      name: 'Chef Luigi',
      avatar: '👨‍🍳',
      role: 'Master Pizza Maker'
    },
    funStory: {
      setup: 'Chef Luigi bakes a giant hot pepperoni pizza and cuts it into 4 equal slices.',
      action: 'You eat 1 slice. You just ate 1 out of 4 slices, which we write as 1/4 (one quarter)!',
      result: '3 slices are still in the box for your family. That is 3 out of 4, written as 3/4! When you eat all 4/4, you ate the whole pizza!'
    },
    visualEquation: {
      leftVisual: ['🍕 Whole Pizza'],
      operator: 'Cut into 4',
      rightVisual: ['1 slice eaten (¼)'],
      resultVisual: ['¾ Remaining for friends!'],
      mathText: '1 Slice eaten = ¼ (One Quarter)',
      caption: 'Top number: Slices you have. Bottom number: All slices!'
    },
    interactiveType: 'fractions',
    mathSecret: 'Did you know 2/4 is the exact same size as 1/2? If a pizza has 4 slices and you eat 2, you ate half the pizza!',
    quickQuiz: {
      question: 'A birthday cake is cut into 8 slices. Ali eats 3 slices. What fraction of the cake did Ali eat?',
      options: ['3/8', '5/8', '8/3', '1/8'],
      correctIndex: 0,
      explanation: 'Yummy! Ali took 3 slices out of 8 total slices, which is written as 3/8!',
      hint: 'Put the slices eaten on TOP (3) and total slices on the BOTTOM (8)!'
    }
  },
  {
    id: 'shapes-geometry',
    title: '2D Shapes & 3D Solids',
    funTitle: 'The Shape Detective: Find Circles & Cubes! 📐🕵️‍♂️',
    grade: 'Class 1–3',
    category: 'Geometry & Shapes',
    emoji: '🔷',
    color: 'from-violet-400 to-purple-500',
    badge: 'Corners, Sides & Real Objects',
    concept: '2D shapes are flat like paper (Circle, Square, Triangle). 3D solids are fat and you can pick them up (Cube, Sphere, Cylinder, Cone)!',
    character: {
      name: 'Captain Geo',
      avatar: '🦸‍♂️',
      role: 'Shape Superhero'
    },
    funStory: {
      setup: 'Captain Geo visits your house to find disguised secret shapes.',
      action: 'He points his scanner: Mom’s round Roti is a flat Circle ⭕! A crunchy Samosa is a Triangle 🔺! The TV screen is a Rectangle 📺! A Ludo dice is a 3D Cube 🎲!',
      result: 'Shapes are everywhere around you! Look out of your window right now—can you spot 3 different shapes?'
    },
    visualEquation: {
      leftVisual: ['⭕ Circle (0 corners)', '🔺 Triangle (3 corners)'],
      operator: '&',
      rightVisual: ['🟩 Square (4 equal sides)', '🎲 Cube (6 flat faces)'],
      resultVisual: ['Real World Geometry!'],
      mathText: 'Triangle = 3 sides | Square = 4 sides | Circle = 0 corners',
      caption: 'Every corner is where two straight sides shake hands!'
    },
    interactiveType: 'shapes',
    mathSecret: 'A circle has ZERO corners, which is why balls and bicycle wheels roll forever without getting stuck!',
    quickQuiz: {
      question: 'How many corners does a crunchy triangular samosa have?',
      options: ['4 Corners', '3 Corners', '0 Corners', '5 Corners'],
      correctIndex: 1,
      explanation: 'Super! A triangle always has 3 sides and 3 sharp corners!',
      hint: 'Tri- means three, just like a Tricycle has 3 wheels!'
    }
  },
  {
    id: 'time-clock',
    title: 'Telling Time & The Clock',
    funTitle: 'Tick-Tock: Taming the Magic Clock Hands! ⏰🐢🐰',
    grade: 'Class 2–4',
    category: 'Everyday Life',
    emoji: '⏱️',
    color: 'from-sky-400 to-indigo-500',
    badge: 'Hours, Minutes & Schedules',
    concept: 'A clock has two hands: The short hand is the slow Turtle (tells the Hour). The long hand is the fast Rabbit (tells the Minutes)!',
    character: {
      name: 'Tick-Tock the Parrot',
      avatar: '🦜',
      role: 'Timekeeper of the Jungle'
    },
    funStory: {
      setup: 'Tick-Tock watches the school bell clock.',
      action: 'The short hand points at 12 and the long hand points straight up at 12. DING DONG! That means exactly 12:00 (Lunch time!).',
      result: 'When the long hand races half-way around to 6, 30 minutes have passed. 12:30 is half-past twelve!'
    },
    visualEquation: {
      leftVisual: ['Short Hand on 3 🐢'],
      operator: '+',
      rightVisual: ['Long Hand on 12 🐰'],
      resultVisual: ['3:00 O’Clock! 🔔'],
      mathText: 'Short Hand = Hour | Long Hand = Minutes (60 mins = 1 hr)',
      caption: 'Each number on clock stands for 5 minutes for the long hand!'
    },
    interactiveType: 'clock',
    mathSecret: 'A whole day has 24 hours! That means the hour hand goes around the clock 2 full times every single day (12 AM + 12 PM)!',
    quickQuiz: {
      question: 'If the short hour hand is on 4 and the long minute hand is on 12, what time is it?',
      options: ['12:04', '4:00 O’Clock', '4:30', '12:00'],
      correctIndex: 1,
      explanation: 'Ding-dong! It is exactly 4:00 O’Clock! Time to play in the park!',
      hint: 'Short hand tells the hour first, and pointing to 12 means zero extra minutes (:00)!'
    }
  },
  {
    id: 'money-shopping',
    title: 'Money & Bazaar Shopping',
    funTitle: 'The Corner Tuck Shop Tycoon! 💰🛒',
    grade: 'Class 2–5',
    category: 'Everyday Life',
    emoji: '💵',
    color: 'from-emerald-400 to-green-600',
    badge: 'Rupees, Notes & Change',
    concept: 'In Pakistan, we use Pakistani Rupees (Rs). Knowing your 10, 20, 50, 100 notes helps you buy treats and get the right change back!',
    character: {
      name: 'Uncle Tariq',
      avatar: '🧔',
      role: 'Friendly Shopkeeper'
    },
    funStory: {
      setup: 'You visit Uncle Tariq’s school canteen with a crisp green Rs 50 note.',
      action: 'You choose a cool mango juice pack that costs Rs 30.',
      result: 'You hand him the Rs 50 note. Uncle Tariq calculates: 50 − 30 = 20. He gives you your delicious juice AND two shiny Rs 10 coins back!'
    },
    visualEquation: {
      leftVisual: ['💵 Rs 50 Note'],
      operator: '−',
      rightVisual: ['🧃 Rs 30 Juice'],
      resultVisual: ['💰 Rs 20 Change Back!'],
      mathText: 'Rs 50 − Rs 30 = Rs 20 Change',
      caption: 'Always count your change before walking away from the counter!'
    },
    interactiveType: 'money',
    mathSecret: 'One Rs 100 note is the exact same value as two Rs 50 notes or ten Rs 10 notes!',
    quickQuiz: {
      question: 'A pencil costs Rs 15 and an eraser costs Rs 10. How much total money do you need to pay?',
      options: ['Rs 20', 'Rs 25', 'Rs 30', 'Rs 15'],
      correctIndex: 1,
      explanation: 'Cash register sound: Cha-ching! Rs 15 + Rs 10 = Rs 25 total!',
      hint: 'Add the tens: 10 + 10 = 20, then add the 5 = 25!'
    }
  },
  {
    id: 'measurement-units',
    title: 'Measurement (Length, Weight & Capacity)',
    funTitle: 'Elephant vs Feather: Heavy, Tall & Splashy! 📏🐘🪶',
    grade: 'Class 3–5',
    category: 'Everyday Life',
    emoji: '⚖️',
    color: 'from-teal-400 to-cyan-600',
    badge: 'Meters, Grams & Liters',
    concept: 'We use Rulers (cm & meters) for length, Scales (grams & kg) for heavy things, and Bottles (liters & ml) for liquids like water & milk!',
    character: {
      name: 'Professor Measure-It',
      avatar: '🧐',
      role: 'Laboratory Scientist'
    },
    funStory: {
      setup: 'Professor Measure-It weighs an African Elephant and a tiny bluebird feather.',
      action: 'The feather weighs only 1 gram (super light!). The big elephant weighs 4,000 Kilograms (4,000 kg)!',
      result: 'Remember: "Kilo" means 1,000! So 1 Kilogram = 1,000 grams! And 1 Liter of milk = 1,000 milliliters (ml) of milk!'
    },
    visualEquation: {
      leftVisual: ['📏 1 Meter = 100 cm'],
      operator: '⚖️',
      rightVisual: ['1 Kilogram = 1,000 g'],
      resultVisual: ['🥛 1 Liter = 1,000 ml'],
      mathText: '1 m = 100 cm | 1 kg = 1000 g | 1 L = 1000 ml',
      caption: 'Kilo means 1000 times bigger!'
    },
    interactiveType: 'measurement',
    mathSecret: 'Did you know an Olympic swimming pool holds about 2.5 MILLION liters of water?',
    quickQuiz: {
      question: 'What unit would you use to measure the length of your classroom pencil?',
      options: ['Kilograms (kg)', 'Liters (L)', 'Centimeters (cm)', 'Kilometers (km)'],
      correctIndex: 2,
      explanation: 'Bingo! A pencil is small and fits along a centimeter (cm) ruler!',
      hint: 'Look at your pencil box plastic ruler—it has markings in cm!'
    }
  },
  {
    id: 'multiplication-tables-tricks',
    title: 'Multiplication Tables & Secret Tricks',
    funTitle: 'The 9-Times Magic Finger Trick & Pahare! 🪄🖐️',
    grade: 'Class 2–5',
    category: 'Puzzles & Tables',
    emoji: '✨',
    color: 'from-fuchsia-400 to-pink-600',
    badge: 'Secret Math Cheats & Rhymes',
    concept: 'Multiplication tables (Pahare) have hidden secret patterns that make memorizing them as easy as singing a song!',
    character: {
      name: 'Magician Merlin',
      avatar: '🧙‍♂️',
      role: 'Math Wizard'
    },
    funStory: {
      setup: 'Merlin holds up his 10 open fingers to calculate 9 × 4 without any paper.',
      action: 'He bends his 4th finger from the left. Look! There are 3 fingers standing on the left side, and 6 fingers standing on the right side!',
      result: 'Put the two numbers side by side: 3 and 6 make 36! And 9 × 4 = 36! IT WORKS FOR EVERY NUMBER UP TO 10!'
    },
    visualEquation: {
      leftVisual: ['🖐️ Bend 4th Finger'],
      operator: '→',
      rightVisual: ['3 fingers on Left | 6 on Right'],
      resultVisual: ['Result: 36! 🪄'],
      mathText: '9 × 4 = 36 (Magic Finger Trick)',
      caption: 'Try it with your own hands right now!'
    },
    interactiveType: 'tables',
    mathSecret: 'Look at the 9 times table digits: 09, 18, 27, 36, 45, 54, 63, 72, 81, 90! Notice the first digit goes UP (0,1,2,3..) while second digit goes DOWN (9,8,7,6..)!',
    quickQuiz: {
      question: 'What is 5 × 6? (Hint: Skip count by 5 six times!)',
      options: ['25', '30', '35', '20'],
      correctIndex: 1,
      explanation: 'Awesome! 5, 10, 15, 20, 25, 30! 5 × 6 = 30!',
      hint: 'All multiples of 5 end with either a 5 or a 0!'
    }
  },
  {
    id: 'patterns-sequences',
    title: 'Patterns & Detective Clues',
    funTitle: 'Crack the Secret Code: What Comes Next? 🔍🧩',
    grade: 'Class 1–4',
    category: 'Puzzles & Tables',
    emoji: '🔮',
    color: 'from-amber-400 to-rose-500',
    badge: 'Sequences & Brain Teasers',
    concept: 'A pattern is a rule that repeats! Once your brain finds the secret rule (like +2 or Red, Blue, Red, Blue), you can predict the future!',
    character: {
      name: 'Agent Clue',
      avatar: '🕵️‍♀️',
      role: 'Secret Code Cracker'
    },
    funStory: {
      setup: 'Agent Clue finds a locked treasure chest with a glowing number keypad: [ 2, 4, 6, 8, ___ ].',
      action: 'She investigates: From 2 to 4 is +2. From 4 to 6 is +2. From 6 to 8 is +2. The secret rule is: SKIP COUNT BY 2!',
      result: 'She types 8 + 2 = 10! CLICK! The chest opens and gold coins spill out everywhere!'
    },
    visualEquation: {
      leftVisual: ['2', '4', '6', '8'],
      operator: 'Secret Rule: +2',
      rightVisual: ['Next is: 8 + 2'],
      resultVisual: ['10! 🏆'],
      mathText: 'Pattern: 2, 4, 6, 8, [ 10 ]',
      caption: 'Spot the repeating rhythm to find the missing clue!'
    },
    interactiveType: 'patterns',
    mathSecret: 'Sunflowers, pinecones, and seashells follow a famous math pattern called the Fibonacci sequence (1, 1, 2, 3, 5, 8...) where nature counts by math!',
    quickQuiz: {
      question: 'What number comes next in this pattern? [ 10, 20, 30, 40, ___ ]',
      options: ['45', '50', '60', '100'],
      correctIndex: 1,
      explanation: 'Super detective work! We are jumping by +10 each step, so 40 + 10 = 50!',
      hint: 'Count by tens: 10, 20, 30, 40... what comes next?'
    }
  }
];
