export interface ComputerTopic {
  id: string;
  title: string;
  funTitle: string;
  grade: string;
  category: 'Computer Basics' | 'Hardware & Parts' | 'Coding & Logic' | 'Internet & Safety' | 'Fun Tech & AI';
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
    | 'device-sorter'
    | 'hw-sw-lab'
    | 'ipo-cycle'
    | 'cpu-calculator'
    | 'typing-mouse-lab'
    | 'ram-storage'
    | 'algorithm-maze'
    | 'internet-packet'
    | 'cyber-shield'
    | 'binary-decoder'
    | 'pixel-painter'
    | 'ai-trainer';
  funSecret: string;
  quickQuiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    hint: string;
  };
}

export const KIDS_COMPUTER_TOPICS: ComputerTopic[] = [
  {
    id: 'device-sorter',
    title: 'What is a Computer? (Smart Helper Machine)',
    funTitle: 'Meet Chip: The World\'s Fastest Tireless Helper! 🤖💻',
    grade: 'Class 1–3',
    category: 'Computer Basics',
    emoji: '💻',
    color: 'from-blue-500 to-indigo-600',
    badge: 'Smart Machines',
    concept: 'A computer is an electronic machine that takes data from you, processes it super-fast without getting tired, and gives you accurate results! Computers come in different shapes: Desktop PCs, Laptops, Tablets, and Smartphones in your pocket!',
    character: {
      name: 'Chip the Robot',
      avatar: '🤖',
      role: 'Digital Guide'
    },
    funStory: {
      setup: 'Chip the friendly robot was challenged to add 1,000 big math numbers.',
      action: 'A human took hours with pencil and paper and made 3 mistakes. Chip processed all 1,000 numbers in less than 1 millisecond with 100% perfect accuracy and zero fatigue!',
      result: 'Computers don\'t get tired, don\'t get bored, and never need a nap when doing big calculations!'
    },
    visualBreakdown: {
      ruleLabel: 'The 4 Superpowers of Computers:',
      examples: [
        { item: '⚡ Lightning Speed', label: 'Performs millions of calculations in one eye-blink' },
        { item: '🎯 100% Accuracy', label: 'Never makes arithmetic mistakes if given correct instructions' },
        { item: '📚 Huge Memory', label: 'Stores millions of books, songs, photos, and video games' },
        { item: '🔋 Tireless Worker', label: 'Works 24 hours a day without yawning or wanting snacks' }
      ],
      caption: 'Remember: Computers are smart tools, but humans are the creative masters who program them!'
    },
    interactiveType: 'device-sorter',
    funSecret: 'The smartphone inside your parents\' pocket is millions of times faster and has more memory than the huge NASA computers that sent astronauts to the Moon in 1969!',
    quickQuiz: {
      question: 'Which of the following is a key feature of a computer?',
      options: ['It eats burgers for lunch', 'It does calculations with lightning speed', 'It falls asleep after 10 minutes', 'It can only work in the rain'],
      correctIndex: 1,
      explanation: 'Bingo! Computers calculate at mind-boggling speeds without ever getting tired!',
      hint: 'Think about how quickly your phone or PC responds.'
    }
  },
  {
    id: 'hw-sw-lab',
    title: 'Hardware vs. Software (The Body & Mind)',
    funTitle: 'Iron & Magic: What You Touch vs. What Runs Inside! 🖥️🎮',
    grade: 'Class 1–4',
    category: 'Hardware & Parts',
    emoji: '🖥️',
    color: 'from-cyan-500 to-blue-700',
    badge: 'Hardware vs Software',
    concept: 'Think of a computer like a human: Hardware is the physical body you can touch with your hands (keyboard, mouse, screen, CPU box). Software is the invisible mind and thoughts inside (Windows, games, MS Paint, web browsers)!',
    character: {
      name: 'Pixel & Bolt',
      avatar: '⚡',
      role: 'Tech Duo'
    },
    funStory: {
      setup: 'Bolt brought a shiny new monitor, mouse, and metallic CPU box to school.',
      action: 'He plugged them into the wall, but nothing showed up on screen! Pixel smiled and installed the operating system and MS Paint (Software). Suddenly, the screen lit up with colors, games, and drawing tools!',
      result: 'Hardware cannot do anything without software, and software needs hardware to run. They are best friends!'
    },
    visualBreakdown: {
      ruleLabel: 'Hardware vs. Software Breakdown:',
      examples: [
        { item: '🖥️ Hardware (You can touch)', label: 'Monitor, Keyboard, Mouse, Printer, Speakers, Motherboard' },
        { item: '🖱️ Input Hardware', label: 'Mouse clicks, Webcam, Microphone' },
        { item: '🎨 Software (Programs inside)', label: 'MS Paint, Minecraft, YouTube, Google Chrome, Windows' },
        { item: '📱 Mobile Apps', label: 'WhatsApp, Duolingo, Camera app are all software!' }
      ],
      caption: 'Hardware = The Piano. Software = The beautiful song the piano plays!'
    },
    interactiveType: 'hw-sw-lab',
    funSecret: 'The very first computer bug was an actual real-life moth moth trapped inside a giant computer relay switch in 1947 by scientist Grace Hopper!',
    quickQuiz: {
      question: 'Which of the following is an example of computer SOFTWARE?',
      options: ['The computer mouse', 'MS Paint drawing app', 'The plastic keyboard', 'The computer screen'],
      correctIndex: 1,
      explanation: 'Great job! MS Paint is software—a digital program you run inside the computer to paint!',
      hint: 'Which one is a program on screen rather than something you can physically touch?'
    }
  },
  {
    id: 'ipo-cycle',
    title: 'Input, Process, Output (The IPO Cycle)',
    funTitle: 'The Juice Factory: In, Spin, and Out! 🍊⚙️🧃',
    grade: 'Class 2–5',
    category: 'Computer Basics',
    emoji: '🔄',
    color: 'from-amber-500 to-orange-600',
    badge: 'The IPO Model',
    concept: 'Every computer in the world operates on the IPO cycle: INPUT (you give data using keyboard/mouse) ➔ PROCESS (the CPU thinks and calculates) ➔ OUTPUT (the monitor displays or speaker plays the result)!',
    character: {
      name: 'Chef Chip',
      avatar: '👨‍🍳',
      role: 'Factory Conductor'
    },
    funStory: {
      setup: 'Chef Chip demonstrated how a juicer machine works.',
      action: '1. INPUT: He dropped fresh oranges into the chute. 2. PROCESS: The electric spinning blades sliced and squeezed the oranges. 3. OUTPUT: Delicious sweet orange juice poured out into the glass!',
      result: 'A computer works identically! You press 5 + 5 on keyboard (Input), CPU adds them together (Process), and screen displays 10 (Output)!'
    },
    visualBreakdown: {
      ruleLabel: 'The 3 Stages of the IPO Cycle:',
      examples: [
        { item: '📥 1. INPUT Devices', label: 'Keyboard (typing letters), Mouse (clicking), Microphone (speaking), Scanner' },
        { item: '⚙️ 2. PROCESSING Device', label: 'Central Processing Unit (CPU) — does all thinking & calculations' },
        { item: '📤 3. OUTPUT Devices', label: 'Monitor screen (visuals), Printer (paper sheets), Speakers & Headphones (audio)' }
      ],
      caption: 'Input ➔ Processing ➔ Output is the universal rhythm of digital computing!'
    },
    interactiveType: 'ipo-cycle',
    funSecret: 'Your brain also does IPO! Input: Seeing a flying cricket ball with your eyes. Process: Brain calculating its speed. Output: Hands catching the ball safely!',
    quickQuiz: {
      question: 'Which of the following is an OUTPUT device?',
      options: ['Keyboard', 'Computer Speaker', 'Mouse', 'Microphone'],
      correctIndex: 1,
      explanation: 'Rocking sound! Speakers output audio and music from the computer into your ears!',
      hint: 'Think about which device sends information OUT to you.'
    }
  },
  {
    id: 'cpu-calculator',
    title: 'The Mighty CPU (Brain of the Computer)',
    funTitle: 'The Microscopic Powerhouse: Central Processing Unit! 🧠⚡',
    grade: 'Class 2–5',
    category: 'Hardware & Parts',
    emoji: '🧠',
    color: 'from-purple-600 to-indigo-800',
    badge: 'CPU Microchip',
    concept: 'CPU stands for Central Processing Unit. It is often called the "Brain of the Computer"! It is a small square silicon microchip resting on the motherboard that executes billions of instructions every second to run your games, math, and apps!',
    character: {
      name: 'Turbo the Core',
      avatar: '🏎️',
      role: 'Gigahertz Master'
    },
    funStory: {
      setup: 'Turbo was a microscopic chip smaller than a postage stamp.',
      action: 'Inside Turbo, billions of tiny microscopic transistors flickered on and off up to 4 billion times every single second (4 GHz)! He managed game physics, loaded 4K videos, and drew millions of graphics pixels smoothly.',
      result: 'Without Turbo the CPU, the computer would just be a dead box of plastic and wires!'
    },
    visualBreakdown: {
      ruleLabel: 'The 3 Main Departments inside a CPU:',
      examples: [
        { item: '🧮 ALU (Arithmetic Logic Unit)', label: 'Solves additions, subtractions, and YES/NO comparisons' },
        { item: '👮 CU (Control Unit)', label: 'Directs computer traffic and tells parts when to work' },
        { item: '⚡ Registers / Cache', label: 'Super-fast mini memory right beside the processing cores' }
      ],
      caption: 'CPUs can get hot when working hard—that is why they have cooling fans and metal heatsinks!'
    },
    interactiveType: 'cpu-calculator',
    funSecret: 'A modern computer CPU chip contains over 10 to 50 BILLION microscopic transistors packed into a piece of silicon smaller than your fingernail!',
    quickQuiz: {
      question: 'What does the abbreviation "CPU" stand for?',
      options: ['Central Power Unit', 'Central Processing Unit', 'Computer Protection Utility', 'Color Printing Unit'],
      correctIndex: 1,
      explanation: 'Super brain! CPU stands for Central Processing Unit—the master brain of every computer!',
      hint: 'It processes instructions in the center of the machine.'
    }
  },
  {
    id: 'typing-mouse-lab',
    title: 'Keyboard Champions & Mouse Mastery',
    funTitle: 'Fingers on the Home Row: Space, Enter & Clicks! ⌨️🖱️',
    grade: 'Class 1–3',
    category: 'Computer Basics',
    emoji: '⌨️',
    color: 'from-emerald-500 to-teal-700',
    badge: 'Keys & Clicks',
    concept: 'The keyboard is your writing pen and the mouse is your magic pointer wand! Mastering special keys like Spacebar (jumps a space), Enter (takes you to a new line), and Backspace (erases mistakes) turns you into a typing champion!',
    character: {
      name: 'Clicky the Mouse',
      avatar: '🐭',
      role: 'Cursor Pilot'
    },
    funStory: {
      setup: 'Clicky the mouse showed young racers how to steer across the computer screen.',
      action: 'A single LEFT CLICK selected an icon, a DOUBLE CLICK opened a folder like magic, a RIGHT CLICK opened a secret options menu, and the SCROLL WHEEL zoomed smoothly through pages!',
      result: 'The students learned how to glide the pointer cursor effortlessly and type with both hands!'
    },
    visualBreakdown: {
      ruleLabel: 'Key Special Keyboard Friends:',
      examples: [
        { item: '␣ Spacebar', label: 'The longest key on the keyboard — leaves a space between words' },
        { item: '⏎ Enter / Return', label: 'Takes you to the next line or confirms an action' },
        { item: '⌫ Backspace', label: 'Erases the letter to the left of the blinking cursor' },
        { item: '🔠 Shift / Caps Lock', label: 'Makes letters CAPITAL (A, B, C) or types symbols like @, #, $' }
      ],
      caption: 'Rest your index fingers on the F and J keys—notice the tiny bump on them?'
    },
    interactiveType: 'typing-mouse-lab',
    funSecret: 'The keyboard letters are arranged in the "QWERTY" layout, which was invented over 150 years ago for old mechanical typewriters so metal arms wouldn’t jam!',
    quickQuiz: {
      question: 'Which key is the longest key on the entire keyboard?',
      options: ['Enter key', 'Spacebar', 'Escape key', 'Shift key'],
      correctIndex: 1,
      explanation: 'Spot on! The Spacebar is the wide horizontal bar at the bottom, pressed with your thumbs!',
      hint: 'It puts spaces between your typed words.'
    }
  },
  {
    id: 'ram-storage',
    title: 'Storage & Memory (RAM vs. Hard Drive / SSD)',
    funTitle: 'The Study Desk vs. The Library Shelf! 🗄️⚡',
    grade: 'Class 3–5',
    category: 'Hardware & Parts',
    emoji: '💾',
    color: 'from-violet-600 to-indigo-800',
    badge: 'RAM vs Storage',
    concept: 'Computers have two kinds of memory! RAM (Random Access Memory) is like your school desk—fast temporary workspace that empties when you turn off the computer. The Hard Drive or SSD is like the school library bookshelf—safe permanent storage where files remain saved for years!',
    character: {
      name: 'Flash & Keeper',
      avatar: '📁',
      role: 'Memory Masters'
    },
    funStory: {
      setup: 'Flash opened 10 browser tabs, Spotify music, and Minecraft at the same time.',
      action: 'RAM held all the running game graphics and music right on top of the desk for instant access. When Flash clicked "SAVE GAME", Keeper the SSD safely stored the world file on the permanent bookshelf disk.',
      result: 'When the computer turned off at night, the desk (RAM) was cleared, but the saved world on SSD was 100% safe and ready for tomorrow!'
    },
    visualBreakdown: {
      ruleLabel: 'RAM vs. Storage Differences:',
      examples: [
        { item: '⚡ RAM (Short-term Desk)', label: 'Super-fast; holds open apps; clears completely when power turns off (Volatile)' },
        { item: '💾 Hard Drive / SSD (Long-term Bookshelf)', label: 'Stores photos, Windows, games forever even without power (Non-volatile)' },
        { item: '📊 Typical RAM Size', label: '8 GB or 16 GB (Enough for lots of open apps at once)' },
        { item: '📦 Typical SSD Size', label: '512 GB or 1,000 GB (1 TB) (Holds thousands of movies and games)' }
      ],
      caption: 'More RAM = More apps open smoothly at the same time without lagging!'
    },
    interactiveType: 'ram-storage',
    funSecret: 'SSD stands for Solid State Drive! Unlike old spinning hard disks, modern SSDs have zero moving parts and read files in microseconds using flash memory!',
    quickQuiz: {
      question: 'What happens to the data stored in RAM when you turn off the computer completely?',
      options: ['It stays saved forever', 'It is wiped clean (cleared)', 'It prints out on paper', 'It turns into a picture'],
      correctIndex: 1,
      explanation: 'Correct! RAM is temporary (volatile) memory, so it clears out every time the computer is turned off!',
      hint: 'Remember the study desk that gets cleared at the end of the day.'
    }
  },
  {
    id: 'algorithm-maze',
    title: 'Coding & Algorithms (Step-by-Step Recipes)',
    funTitle: 'Robot Chef: Cooking with Step-by-Step Code! 📜🤖',
    grade: 'Class 2–5',
    category: 'Coding & Logic',
    emoji: '🧩',
    color: 'from-pink-500 to-rose-700',
    badge: 'Algorithms & Coding',
    concept: 'An ALGORITHM is a step-by-step list of clear instructions to solve a problem or finish a task! Coding is simply writing those instructions in a language the computer understands (like Python, Scratch, or JavaScript)! Computers follow instructions literally in order!',
    character: {
      name: 'Ada the Coding Bunny',
      avatar: '🐰',
      role: 'Algorithm Champion'
    },
    funStory: {
      setup: 'Ada wanted her robot chef to make a peanut butter sandwich.',
      action: 'She wrote: 1. Take two slices of bread. 2. Open peanut butter jar. 3. Use knife to spread peanut butter on slice 1. 4. Place slice 2 on top. 5. Serve on plate!',
      result: 'The robot made a delicious sandwich! But if she forgot step 2, the robot would spread the closed jar over the bread! Order and precision matter in code!'
    },
    visualBreakdown: {
      ruleLabel: 'The 3 Big Coding Concepts:',
      examples: [
        { item: '📜 1. Sequence (Order)', label: 'Steps must happen in exact sequence (Step 1 before Step 2)' },
        { item: '🔁 2. Loops (Repeat)', label: 'Instead of writing "Walk forward" 100 times, write: Repeat 100 times [Walk forward]!' },
        { item: '🔀 3. Conditionals (If / Else)', label: 'IF there is an obstacle in front, turn right; ELSE keep walking!' }
      ],
      caption: 'Anyone can code! It is just creative problem-solving using simple logical steps!'
    },
    interactiveType: 'algorithm-maze',
    funSecret: 'The world\'s first computer programmer was an English mathematician named Ada Lovelace, who wrote the first algorithm for an early mechanical computer in 1843!',
    quickQuiz: {
      question: 'What do we call a step-by-step list of instructions written to solve a problem?',
      options: ['A Monitor', 'An Algorithm', 'A Screwdriver', 'A Pixel'],
      correctIndex: 1,
      explanation: 'Coding superstar! An algorithm is a precise, ordered recipe of instructions!',
      hint: 'It starts with the letter A and is the foundation of coding.'
    }
  },
  {
    id: 'cyber-shield',
    title: 'Cyber Safety & Digital Etiquette',
    funTitle: 'The Cyber Shield: Staying Safe, Kind & Smart Online! 🛡️🌐',
    grade: 'Class 2–5',
    category: 'Internet & Safety',
    emoji: '🛡️',
    color: 'from-emerald-600 to-teal-800',
    badge: 'Internet Safety',
    concept: 'The internet is a gigantic digital city full of knowledge, fun games, and friends. But just like in a real city, you need safety rules: never share your password, never share your real address or school name, always ask parents before downloading, and be polite and kind in messages!',
    character: {
      name: 'Captain Shield',
      avatar: '🦸‍♀️',
      role: 'Cyber Defender'
    },
    funStory: {
      setup: 'A mysterious game pop-up appeared saying: "Click here to win 1,000 free diamonds! Just type your mother\'s credit card number!"',
      action: 'Captain Shield spotted the trap! She didn\'t click the suspicious link, didn\'t type any private information, and called her dad immediately to close the tab.',
      result: 'Her computer stayed safe from viruses and malware! She earned the Golden Cyber Safety Badge!'
    },
    visualBreakdown: {
      ruleLabel: 'The 4 Golden Rules of Internet Safety:',
      examples: [
        { item: '🔒 Strong Passwords', label: 'Mix capital letters, numbers, and symbols (e.g., Tiger#492!). Never share passwords with friends!' },
        { item: '🤐 Keep Private Info Secret', label: 'Never post your home address, phone number, or school name publicly' },
        { item: '👨‍👩‍👧 Talk to Parents or Teachers', label: 'If anything makes you uncomfortable or confused, tell an adult immediately' },
        { item: '💖 Be Kind in Chats', label: 'Treat others online with the same respect and warmth you show in person' }
      ],
      caption: 'Be smart, surf safe, and keep your personal life protected!'
    },
    interactiveType: 'cyber-shield',
    funSecret: 'A good password is like a toothbrush: choose a strong one, don’t share it with anyone, and change it every few months!',
    quickQuiz: {
      question: 'What should you do if an unknown person online asks for your home address or password?',
      options: ['Give it to them immediately', 'Never share it and inform your parents or teacher right away', 'Post it on public chat', 'Guess their password in return'],
      correctIndex: 1,
      explanation: 'Heroic answer! Never share private details online with strangers and always alert a trusted adult!',
      hint: 'Your private information should always remain private and secure.'
    }
  },
  {
    id: 'binary-decoder',
    title: 'Binary Code (The Secret Language of 0s and 1s)',
    funTitle: 'Light Switches at Work: The Secret 0 and 1 Language! 💡0️⃣1️⃣',
    grade: 'Class 3–5',
    category: 'Coding & Logic',
    emoji: '0️⃣',
    color: 'from-green-600 to-emerald-900',
    badge: 'Binary Code 0 & 1',
    concept: 'Computers do not understand English or Urdu directly—they speak BINARY! A computer chip is filled with billions of microscopic electric switches. When a switch is OFF, it is represented by 0 (dark). When it is ON, it is represented by 1 (light)! Combining 8 switches (bits) forms 1 Byte, which can spell letters, numbers, and colors!',
    character: {
      name: 'Agent Zero & One',
      avatar: '🕵️',
      role: 'Code Breakers'
    },
    funStory: {
      setup: 'Agent Zero and Agent One communicated using a flashlight across two treehouses.',
      action: 'Flashlight OFF = 0. Flashlight ON = 1. By flashing 01000001, they spelled the letter "A" in computer code! By flashing 01000010, they spelled the letter "B"!',
      result: 'Every YouTube video, Minecraft world, and WhatsApp emoji is made of combinations of 0s and 1s inside computer memory!'
    },
    visualBreakdown: {
      ruleLabel: 'How Binary Turns into Letters:',
      examples: [
        { item: '0️⃣ Bit = 0 (OFF)', label: 'Switch is OFF / no electrical voltage' },
        { item: '1️⃣ Bit = 1 (ON)', label: 'Switch is ON / electrical voltage flowing' },
        { item: '📦 8 Bits = 1 Byte', label: '8 switches combined together can represent 256 different characters' },
        { item: '🔤 01000001 = "A"', label: 'The letter A in standard ASCII binary code' }
      ],
      caption: '1 Kilobyte (KB) = 1,024 Bytes. 1 Megabyte (MB) = 1,024 KB. 1 Gigabyte (GB) = 1,024 MB!'
    },
    interactiveType: 'binary-decoder',
    funSecret: 'In the movie The Matrix, the green falling digital rain represents the binary pulse of computer reality!',
    quickQuiz: {
      question: 'Which two digits are used in the binary number system used by computers?',
      options: ['1 and 2', '0 and 1', '9 and 10', 'A and B'],
      correctIndex: 1,
      explanation: 'Bravo! Binary uses only two digits: 0 (Off) and 1 (On)!',
      hint: 'Bi- means two, like in bicycle.'
    }
  },
  {
    id: 'pixel-painter',
    title: 'Paint & Pixels (Digital Art & Colors)',
    funTitle: 'Tiny Colored Tiles: The Magic of Screen Pixels! 🎨🖼️',
    grade: 'Class 1–4',
    category: 'Computer Basics',
    emoji: '🎨',
    color: 'from-fuchsia-500 to-pink-600',
    badge: 'Pixels & RGB Colors',
    concept: 'If you look at your computer or TV screen with a magnifying glass, you will discover that images are made of millions of microscopic colored square dots called PIXELS! Each pixel mixes 3 colored lights: Red, Green, and Blue (RGB) to make all 16 million colors!',
    character: {
      name: 'Pixel Picasso',
      avatar: '👩‍🎨',
      role: 'Digital Painter'
    },
    funStory: {
      setup: 'Pixel Picasso painted a glowing sunset on her tablet.',
      action: 'She zoomed in 1,000 times! The smooth orange sky broke down into thousands of tiny square tiles (pixels). In each tile, tiny Red and Green sub-pixels glowed bright to create radiant orange!',
      result: 'When she zoomed back out, her human eyes blended all the tiny dots into a seamless, breathtaking digital painting!'
    },
    visualBreakdown: {
      ruleLabel: 'The Secrets of Screen Pixels:',
      examples: [
        { item: '🟥 Red Light + 🟩 Green Light = 🟨 Yellow', label: 'Mixing light colors is different from mixing paint colors!' },
        { item: '🟥 Red + 🟦 Blue = 🟪 Magenta / Purple', label: 'Electric blue and ruby red make violet' },
        { item: '🟥 + 🟩 + 🟦 (All at 100%) = ⬜ White', label: 'All three lights shining at maximum power creates pure white!' },
        { item: '⬛ All lights OFF (0%) = Black', label: 'Darkness when no light emits from the pixel' }
      ],
      caption: 'Full HD resolution means 1,920 pixels wide by 1,080 pixels tall = over 2 million pixels on screen!'
    },
    interactiveType: 'pixel-painter',
    funSecret: 'Your television screen has over 8 million pixels in 4K resolution, flickering 60 to 120 times every second!',
    quickQuiz: {
      question: 'What are the tiny microscopic square dots that make up images on a computer screen called?',
      options: ['Buttons', 'Pixels', 'Pencils', 'Batteries'],
      correctIndex: 1,
      explanation: 'Colorful genius! Pixels (Picture Elements) are the building blocks of every screen display!',
      hint: 'The word comes from Picture + Element.'
    }
  }
];
