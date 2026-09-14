export interface ScienceTopic {
  id: string;
  title: string;
  funTitle: string;
  grade: string;
  category: 'Living World' | 'Earth & Space' | 'Matter & Energy' | 'Human Body' | 'Forces & Inventions';
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
    | 'living-sorting'
    | 'plant-grower'
    | 'senses-lab'
    | 'habitats-map'
    | 'matter-states'
    | 'solar-system'
    | 'water-cycle'
    | 'body-organs'
    | 'magnet-lab'
    | 'shadow-light'
    | 'simple-machines'
    | 'force-motion';
  funSecret: string;
  quickQuiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    hint: string;
  };
}

export const KIDS_SCIENCE_TOPICS: ScienceTopic[] = [
  {
    id: 'living-sorting',
    title: 'Living vs. Non-Living Things',
    funTitle: 'The Living Detective: Who Breathes, Grows & Eats? 🐾🪨',
    grade: 'Class 1–2',
    category: 'Living World',
    emoji: '🌱',
    color: 'from-emerald-500 to-green-600',
    badge: 'Alive vs. Object',
    concept: 'Living things are alive! They need food, drink water, breathe air, grow bigger, move by themselves, and have babies. Non-living things never eat, never grow, and cannot move unless you push them!',
    character: {
      name: 'Professor Sprout',
      avatar: '🦉',
      role: 'Nature Detective'
    },
    funStory: {
      setup: 'Professor Sprout placed a baby rabbit 🐇 and a toy robot dog 🤖 side-by-side on the grass.',
      action: 'He offered both a crunchy carrot 🥕. The rabbit munched it happily, grew fluffier over the weeks, and made little bunny hops. The toy robot sat completely still until someone put in batteries!',
      result: 'The rabbit is LIVING (it breathes, eats, grows), while the toy robot is NON-LIVING (man-made, needs batteries, never grows)!'
    },
    visualBreakdown: {
      ruleLabel: 'The 5 Living Superpowers:',
      examples: [
        { item: '🍎 Needs Food & Water', label: 'Living things need energy to survive' },
        { item: '💨 Breathes Air', label: 'Humans breathe oxygen; plants breathe carbon dioxide' },
        { item: '📈 Grows & Changes', label: 'A tiny seed becomes a giant mango tree' },
        { item: '🐣 Has Babies', label: 'Cats have kittens; birds hatch baby chicks' }
      ],
      caption: 'If it does not eat, grow, or breathe naturally, it is non-living!'
    },
    interactiveType: 'living-sorting',
    funSecret: 'Did you know? Even trees and flowers are living things! They don’t walk on feet, but they bend their leaves toward sunlight and drink water through their roots!',
    quickQuiz: {
      question: 'Which of these is a LIVING thing?',
      options: ['A wooden table', 'A chirping sparrow', 'A soccer ball', 'A shiny bicycle'],
      correctIndex: 1,
      explanation: 'Super! A sparrow is alive—it breathes air, eats seeds, flies, and grows!',
      hint: 'Think about which one eats and breathes.'
    }
  },
  {
    id: 'plant-grower',
    title: 'Parts of a Plant & Photosynthesis',
    funTitle: 'The Kitchen in a Leaf: Cooking with Sunlight! ☀️🍃',
    grade: 'Class 1–4',
    category: 'Living World',
    emoji: '🌻',
    color: 'from-lime-500 to-emerald-600',
    badge: 'Roots, Leaves & Sunlight',
    concept: 'Plants are Earth\'s green chefs! Their roots anchor in soil and sip water, the stem carries water like a drinking straw, and the green leaves use sunshine and air to make sweet plant sugar (photosynthesis)!',
    character: {
      name: 'Sunny the Sunflower',
      avatar: '🌻',
      role: 'Master Solar Chef'
    },
    funStory: {
      setup: 'Sunny was just a small brown seed buried deep in cozy dark soil.',
      action: 'A rain shower gave her water 💧, and the bright morning sun gave her warm light ☀️. Her roots drank deep, her stem climbed upward, and her green leaves started cooking food!',
      result: 'Sunny bloomed into a radiant 6-foot tall sunflower smiling at the sky and making oxygen for all of us to breathe!'
    },
    visualBreakdown: {
      ruleLabel: 'The 4 Plant Power Parts:',
      examples: [
        { item: '🌱 Roots', label: 'Underground straws drinking water & minerals' },
        { item: '🌿 Stem', label: 'Strong elevator carrying water up to branches' },
        { item: '🍃 Green Leaves', label: 'Solar kitchen cooking food with sunlight' },
        { item: '🌸 Flower & Seed', label: 'Makes colorful petals and seeds for new baby plants' }
      ],
      caption: 'Photosynthesis Recipe: Water + Sunlight + Carbon Dioxide = Sugar + Fresh Oxygen!'
    },
    interactiveType: 'plant-grower',
    funSecret: 'Plants breathe out oxygen! Every breath of fresh air you inhale was gifted to you by trees and green plants!',
    quickQuiz: {
      question: 'Which part of the plant makes food using sunlight?',
      options: ['The Roots', 'The Green Leaves', 'The Bark', 'The Flower petals'],
      correctIndex: 1,
      explanation: 'Bravo! Green leaves contain chlorophyll that traps sunlight to cook food!',
      hint: 'It is the green kitchen of the plant.'
    }
  },
  {
    id: 'senses-lab',
    title: 'The 5 Super Senses',
    funTitle: 'Body Detectives: Sight, Sound, Smell, Taste & Touch! 👁️👂👃',
    grade: 'Class 1–3',
    category: 'Human Body',
    emoji: '🧠',
    color: 'from-amber-400 to-orange-500',
    badge: 'Your 5 Senses',
    concept: 'Your 5 senses are your body’s superpowers! Your Eyes see colors and shapes, Ears hear whispers and thunder, Nose smells roses and biryani, Tongue tastes sweet and sour, and Skin feels warm blankets and ice!',
    character: {
      name: 'Sammy the Squirrel',
      avatar: '🐿️',
      role: 'Forest Acorn Inspector'
    },
    funStory: {
      setup: 'Sammy woke up inside a hollow tree in complete pitch darkness.',
      action: 'He smelled roasted nuts with his sharp nose 👃, heard a gentle stream with his twitching ears 👂, touched the rough tree bark with his paws 🐾, and tasted sweet wild berries with his tongue 👅!',
      result: 'His 5 senses sent instant signals to his brain, giving him a full 3D picture of the world around him!'
    },
    visualBreakdown: {
      ruleLabel: 'The 5 Sense Sensors:',
      examples: [
        { item: '👁️ Eyes (Sight)', label: 'Reading books, seeing rainbow colors & stars' },
        { item: '👂 Ears (Hearing)', label: 'Birds chirping, alarm clocks & music' },
        { item: '👃 Nose (Smell)', label: 'Fragrant flowers, baking bread & perfume' },
        { item: '👅 Tongue (Taste)', label: 'Sweet mangoes, sour lemons & salty chips' },
        { item: '✋ Skin (Touch)', label: 'Soft fur, prickly thorns, hot tea & cold ice' }
      ],
      caption: 'All 5 senses report directly to your brain via super-fast nerves!'
    },
    interactiveType: 'senses-lab',
    funSecret: 'Your tongue has about 10,000 tiny taste buds that replace themselves every 2 weeks!',
    quickQuiz: {
      question: 'Which sense tells you if an ice cream is sweet or sour?',
      options: ['Sense of Sight', 'Sense of Smell', 'Sense of Taste', 'Sense of Hearing'],
      correctIndex: 2,
      explanation: 'Deliciously correct! Your tongue’s taste buds identify sweet, sour, salty, bitter, and savory flavors!',
      hint: 'Which organ do you use when eating food?'
    }
  },
  {
    id: 'matter-states',
    title: 'States of Matter (Solid, Liquid, Gas)',
    funTitle: 'The Shape-Shifter: Ice, Water & Steam! 🧊💧♨️',
    grade: 'Class 2–5',
    category: 'Matter & Energy',
    emoji: '🧊',
    color: 'from-sky-400 to-blue-600',
    badge: 'Solid, Liquid & Gas',
    concept: 'Everything in the universe is made of matter! Solid has a fixed shape (like an ice cube or stone). Liquid flows and takes the shape of its cup (like water or milk). Gas floats freely and fills any space (like steam or air)!',
    character: {
      name: 'Frosty the Ice Hero',
      avatar: '🧊',
      role: 'Shape-Shifter Magician'
    },
    funStory: {
      setup: 'Frosty was a solid ice cube resting quietly inside a freezer tray at 0°C.',
      action: 'When placed under the warm sun, his tiny water molecules started dancing apart and he melted into flowing LIQUID water! On a hot stove, the molecules danced super crazy and evaporated into invisible STEAM gas!',
      result: 'Frosty proved that temperature changes the dance of molecules to shift between Solid, Liquid, and Gas!'
    },
    visualBreakdown: {
      ruleLabel: 'The 3 States of Matter:',
      examples: [
        { item: '🧊 Solid', label: 'Tightly packed molecules; holds its own rigid shape (Ice, Wood, Stone)' },
        { item: '💧 Liquid', label: 'Molecules slide past each other; takes container shape (Water, Juice, Milk)' },
        { item: '♨️ Gas', label: 'Molecules fly everywhere; spreads to fill entire room (Steam, Air, Helium)' }
      ],
      caption: 'Heat it up: Solid ➔ Liquid ➔ Gas. Cool it down: Gas ➔ Liquid ➔ Solid!'
    },
    interactiveType: 'matter-states',
    funSecret: 'Water is one of the only substances on Earth that naturally exists as a solid, liquid, and gas at everyday temperatures!',
    quickQuiz: {
      question: 'What happens when liquid water is boiled on a hot stove?',
      options: ['It turns into solid ice', 'It turns into steam (gas)', 'It disappears forever', 'It turns into rock'],
      correctIndex: 1,
      explanation: 'Spot on! Boiling heats water to 100°C, turning liquid into steam (water vapor gas)!',
      hint: 'Think about the white steam rising from a kettle.'
    }
  },
  {
    id: 'solar-system',
    title: 'The Solar System & 8 Planets',
    funTitle: 'Cosmic Rollercoaster: The Sun and its 8 Planetary Dancers! ☀️🪐🚀',
    grade: 'Class 2–5',
    category: 'Earth & Space',
    emoji: '🪐',
    color: 'from-purple-600 to-indigo-800',
    badge: 'Sun, Earth & Planets',
    concept: 'Our solar system is a cosmic family! In the center sits our gigantic burning star, the SUN. Orbiting around it are 8 magnificent planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune!',
    character: {
      name: 'Captain Cosmo',
      avatar: '👨‍🚀',
      role: 'Galaxy Explorer'
    },
    funStory: {
      setup: 'Captain Cosmo buckled into his photon spaceship to visit all 8 planets.',
      action: 'He zipped past scorched Mercury, baked on cloudy Venus, waved at our blue home Earth 🌍, bounced on red Mars, marveled at giant Jupiter and beautiful ringed Saturn, then chilled at icy Uranus and windy Neptune!',
      result: 'He discovered that Earth is in the "Goldilocks Zone"—not too hot, not too cold, with liquid water and breathable air perfectly made for life!'
    },
    visualBreakdown: {
      ruleLabel: 'Planets from Nearest to Farthest:',
      examples: [
        { item: '1. Mercury & 2. Venus', label: 'Smallest planet & hottest volcanic greenhouse' },
        { item: '3. Earth & 4. Mars', label: 'Our living blue haven & the dusty Red Planet' },
        { item: '5. Jupiter & 6. Saturn', label: 'Gas giant with Great Red Spot & majestic icy rings' },
        { item: '7. Uranus & 8. Neptune', label: 'Tilted ice giant & deep blue stormiest planet' }
      ],
      caption: 'Remember the mnemonic: My Very Educated Mother Just Served Us Noodles!'
    },
    interactiveType: 'solar-system',
    funSecret: 'Jupiter is so immense that more than 1,300 Earths could fit inside it! Its Great Red Spot is a spinning storm bigger than our entire planet!',
    quickQuiz: {
      question: 'Which planet in our solar system is famous for its bright, majestic rings?',
      options: ['Mars', 'Saturn', 'Mercury', 'Venus'],
      correctIndex: 1,
      explanation: 'Stellar work! Saturn has thousands of spectacular rings made of shiny ice chunks, dust, and rock!',
      hint: 'It is the second-largest gas giant with beautiful rings.'
    }
  },
  {
    id: 'water-cycle',
    title: 'The Water Cycle',
    funTitle: 'Drip the Raindrop\'s Never-Ending Waterpark Ride! 🌧️🌊☁️',
    grade: 'Class 2–5',
    category: 'Earth & Space',
    emoji: '💧',
    color: 'from-cyan-500 to-blue-600',
    badge: 'Evaporation, Clouds & Rain',
    concept: 'The water you drink today is the exact same water dinosaurs drank millions of years ago! It travels in an endless loop: Evaporation (sun heats water up into air), Condensation (steam forms clouds), and Precipitation (rain falls down)!',
    character: {
      name: 'Drip the Raindrop',
      avatar: '💧',
      role: 'Waterpark Daredevil'
    },
    funStory: {
      setup: 'Drip was floating lazily in the Arabian Sea near Karachi.',
      action: 'The bright sun beamed down and warmed him up. He turned into invisible water vapor and soared miles up into the sky! High up in the chilly air, he huddled with billions of other drops to form a fluffy white cloud. When the cloud grew heavy, he rained down onto the Margalla Hills!',
      result: 'He flowed down mountain rivers, through green fields, and back into the ocean, ready to ride the cycle again!'
    },
    visualBreakdown: {
      ruleLabel: 'The 4 Water Cycle Steps:',
      examples: [
        { item: '☀️ 1. Evaporation', label: 'Sun heats water into rising vapor' },
        { item: '☁️ 2. Condensation', label: 'Chilled vapor bunches into fluffy clouds' },
        { item: '🌧️ 3. Precipitation', label: 'Clouds release heavy rain, snow, or hail' },
        { item: '🌊 4. Collection', label: 'Rivers and underground springs gather water back to oceans' }
      ],
      caption: 'Nature cleans and recycles every drop of water on Earth automatically!'
    },
    interactiveType: 'water-cycle',
    funSecret: 'A single medium-sized fluffy cumulus cloud weighs about 500,000 kilograms (about the same as 100 elephants)!',
    quickQuiz: {
      question: 'What is it called when water vapor cools down high in the sky to form clouds?',
      options: ['Evaporation', 'Condensation', 'Freezing', 'Melting'],
      correctIndex: 1,
      explanation: 'Cloud nine! Condensation is when warm gas vapor cools and bunches into cloud droplets!',
      hint: 'Think of water condensing on the outside of a cold glass.'
    }
  },
  {
    id: 'body-organs',
    title: 'Human Body & Vital Organs',
    funTitle: 'Inside Your Incredible Bio-Machine! 🫀🫁🧠',
    grade: 'Class 2–5',
    category: 'Human Body',
    emoji: '🫀',
    color: 'from-rose-500 to-red-600',
    badge: 'Heart, Lungs, Brain & Stomach',
    concept: 'Your body is the most advanced machine on the planet! Your Heart pumps oxygen-rich blood day and night, your Lungs fill with air like balloons, your Brain thinks and remembers, and your Stomach breaks food into energy!',
    character: {
      name: 'Dr. Pulse',
      avatar: '🩺',
      role: 'Body Engineer'
    },
    funStory: {
      setup: 'Dr. Pulse shrunk down to micro-size to inspect an energetic child playing football.',
      action: 'He saw the Brain sending electrical signals to kick the ball, the Lungs inhaling huge gulps of oxygen, the Heart pumping 100 beats per minute, and the Stomach digesting lunch to power muscles!',
      result: 'Every organ worked together in perfect harmony to make running, thinking, and smiling possible!'
    },
    visualBreakdown: {
      ruleLabel: 'Your 4 Key Inner Engines:',
      examples: [
        { item: '🧠 Brain (Commander)', label: 'Controls thoughts, dreams, movement & memories' },
        { item: '🫀 Heart (24/7 Pump)', label: 'Beats ~100,000 times a day pumping blood' },
        { item: '🫁 Lungs (Oxygen Balloons)', label: 'Inhales fresh oxygen and exhales carbon dioxide' },
        { item: '🥣 Stomach (Food Blender)', label: 'Uses enzymes and acid to break down meals into fuel' }
      ],
      caption: 'Drink water, eat nutritious vegetables, and exercise daily to keep your organs happy!'
    },
    interactiveType: 'body-organs',
    funSecret: 'Your heart beats about 100,000 times every single day—even while you are fast asleep dreaming!',
    quickQuiz: {
      question: 'Which organ is responsible for pumping blood to every corner of your body?',
      options: ['The Stomach', 'The Heart', 'The Lungs', 'The Kidney'],
      correctIndex: 1,
      explanation: 'Lub-dub! Your heart is a tireless muscle pump delivering blood and nutrients non-stop!',
      hint: 'Place your hand on the left side of your chest.'
    }
  },
  {
    id: 'magnet-lab',
    title: 'Magnetism: Attract & Repel',
    funTitle: 'The Invisible Force: North Pole meets South Pole! 🧲⚡',
    grade: 'Class 2–5',
    category: 'Forces & Inventions',
    emoji: '🧲',
    color: 'from-red-500 to-blue-600',
    badge: 'Magnets & Iron',
    concept: 'Magnets possess an invisible magnetic field! Every magnet has two poles: North (N) and South (S). Opposite poles ATTRACT and snap together (N + S), while like poles REPEL and push away (N + N or S + S)! Magnets attract iron, nickel, and steel, but not plastic or wood!',
    character: {
      name: 'Magno the Wizard',
      avatar: '🧙‍♂️',
      role: 'Magnetic Sorcerer'
    },
    funStory: {
      setup: 'Magno held two horseshoe magnets painted red and blue.',
      action: 'When he brought the North pole close to another North pole, an invisible cushion pushed them apart! But when he flipped one to South, SNAP! They clicked together with strong magnetic grip!',
      result: 'He then swept his magnet over sand and instantly pulled out hidden iron paperclips and nails like magic!'
    },
    visualBreakdown: {
      ruleLabel: 'The Magnetic Golden Rules:',
      examples: [
        { item: '🧲 N + S = Attract! ❤️', label: 'Opposite poles pull toward each other tightly' },
        { item: '🧲 N + N = Repel! ✋', label: 'Like poles push away with invisible force' },
        { item: '📎 Magnetic Metals', label: 'Attracts Iron, Steel, Cobalt, Nickel' },
        { item: '🪵 Non-Magnetic Items', label: 'Plastic, Wood, Paper, Rubber, Glass cannot stick' }
      ],
      caption: 'Even planet Earth is a giant magnet with its own North and South magnetic poles!'
    },
    interactiveType: 'magnet-lab',
    funSecret: 'High-speed Maglev trains in Japan float above the tracks using super-magnets, reaching over 500 km/h with zero wheel friction!',
    quickQuiz: {
      question: 'What happens when two NORTH poles of two magnets are pushed toward each other?',
      options: ['They snap together', 'They repel (push apart)', 'They turn into gold', 'They make a loud explosion'],
      correctIndex: 1,
      explanation: 'Spot on! Like poles repel and push away from each other!',
      hint: 'Remember: Likes repel, opposites attract.'
    }
  },
  {
    id: 'habitats-map',
    title: 'Animals & Their Habitats',
    funTitle: 'Jungle, Desert, Ocean & Ice: Animal Cozy Homes! 🦁🐪🐬',
    grade: 'Class 1–4',
    category: 'Living World',
    emoji: '🐾',
    color: 'from-amber-500 to-emerald-600',
    badge: 'Ecosystems & Homes',
    concept: 'A habitat is the natural home where an animal finds food, fresh water, and shelter to survive! Camels thrive in hot deserts with humps of fat; polar bears have thick blubber and white fur in the snowy Arctic; dolphins have fins and blowholes in the ocean!',
    character: {
      name: 'Pip the Penguin & Kiki the Camel',
      avatar: '🐧',
      role: 'Habitat Ambassadors'
    },
    funStory: {
      setup: 'Kiki the camel visited the freezing South Pole, and Pip the penguin visited the Thar Desert.',
      action: 'Kiki shivered on the ice because her wide sand-walking padded feet slipped! Meanwhile Pip felt too hot in the desert because his thick waterproof feathers are made for sub-zero blizzards!',
      result: 'They swapped back to their own homes and realized every animal has special body adaptations perfectly suited for their own habitat!'
    },
    visualBreakdown: {
      ruleLabel: 'The 4 Major Habitats:',
      examples: [
        { item: '🐪 Desert', label: 'Hot, sandy, scarce water (Camel, Fennec Fox, Lizard)' },
        { item: '🐬 Ocean', label: 'Salty water, coral reefs (Dolphin, Shark, Sea Turtle)' },
        { item: '🌲 Jungle / Forest', label: 'Dense trees, rich rain (Tiger, Monkey, Parrot, Deer)' },
        { item: '❄️ Polar Ice', label: 'Freezing snow, glaciers (Polar Bear, Penguin, Seal)' }
      ],
      caption: 'Every habitat provides food, water, space, and shelter for its inhabitants!'
    },
    interactiveType: 'habitats-map',
    funSecret: 'A camel can drink up to 100 liters of water in just 10 minutes and store energy in its hump to survive for weeks without eating!',
    quickQuiz: {
      question: 'Which of these animals has thick blubber to stay warm in the icy Arctic habitat?',
      options: ['Desert Camel', 'Polar Bear', 'Jungle Monkey', 'Chameleon'],
      correctIndex: 1,
      explanation: 'Brilliant! Polar bears have dense insulated fur and thick blubber fat to stay cozy in freezing ice!',
      hint: 'Think of the white fluffy predator of the North Pole.'
    }
  },
  {
    id: 'shadow-light',
    title: 'Light, Shadows & Reflection',
    funTitle: 'Shadow Puppets & Mirror Tricks: The Speed of Light! 🔦✨',
    grade: 'Class 2–5',
    category: 'Matter & Energy',
    emoji: '💡',
    color: 'from-yellow-400 to-amber-600',
    badge: 'Light & Shadows',
    concept: 'Light travels in straight lines! When an opaque object (like your hand or a book) blocks light rays, a dark area called a SHADOW appears behind it! Transparent glass lets all light pass through, while mirrors reflect and bounce light right back!',
    character: {
      name: 'Lumina the Firefly',
      avatar: '🪲',
      role: 'Lantern Light Guide'
    },
    funStory: {
      setup: 'Lumina turned on her glowing lantern in front of a white wall.',
      action: 'When a curious kitten stepped close to the lantern, its shadow grew gigantic like a lion! When it stepped far away from the lantern, its shadow shrunk to tiny kitten size.',
      result: 'The closer you are to the light source, the more rays you block, making your shadow huge and dramatic!'
    },
    visualBreakdown: {
      ruleLabel: 'How Light Interacts with Stuff:',
      examples: [
        { item: '🪟 Transparent', label: 'Clear glass, water — light passes right through' },
        { item: '🕶️ Translucent', label: 'Frosted glass, butter paper — lets some light scatter' },
        { item: '🧱 Opaque', label: 'Wood, metal, human body — blocks light and casts a crisp shadow' },
        { item: '🪞 Reflection', label: 'Smooth mirrors bounce light back at the same angle' }
      ],
      caption: 'Shadows always appear on the OPPOSITE side of the light source!'
    },
    interactiveType: 'shadow-light',
    funSecret: 'Light is the fastest thing in the entire universe! It travels at 300,000 kilometers per second—fast enough to circle Earth 7 times in one second!',
    quickQuiz: {
      question: 'Where does a shadow appear when an object blocks a light beam?',
      options: ['Inside the light bulb', 'On the exact same side as the lamp', 'On the opposite side behind the object', 'In the sky above'],
      correctIndex: 2,
      explanation: 'Spot on! Shadows always form directly behind the blocked object on the opposite side of the light!',
      hint: 'Light cannot bend around the object, so darkness falls behind it.'
    }
  },
  {
    id: 'simple-machines',
    title: 'Simple Machines (Lever, Pulley & Ramp)',
    funTitle: 'Work Smarter, Not Harder: Ancient Super Tools! 🏗️🛝',
    grade: 'Class 3–5',
    category: 'Forces & Inventions',
    emoji: '🏗️',
    color: 'from-orange-500 to-amber-700',
    badge: 'Tools & Mechanical Advantage',
    concept: 'Simple machines don\'t need gasoline or electricity! They use geometry and physics to multiply your muscle force so you can lift huge boulders, slice wood, and hoist water buckets with ease! The 6 classic simple machines are: Lever, Pulley, Inclined Plane (Ramp), Wheel & Axle, Wedge, and Screw!',
    character: {
      name: 'Archie the Architect',
      avatar: '🦺',
      role: 'Pyramid Builder'
    },
    funStory: {
      setup: 'Archie had to lift a giant 200-kg marble stone to build the city gate.',
      action: 'Trying to pick it up with bare hands was impossible. So he laid down an INCLINED PLANE (smooth wooden ramp) and rolled it up on logs! Then he rigged a grooved PULLEY wheel with rope to hoist it smoothly to the top!',
      result: 'Archie lifted the stone using only the strength of one arm! Simple machines gave him superhero mechanical leverage!'
    },
    visualBreakdown: {
      ruleLabel: 'The Big 3 Simple Machines:',
      examples: [
        { item: '⚖️ Lever (Seesaw / Crowbar)', label: 'A rigid bar balancing on a fulcrum pivot point' },
        { item: '🛝 Inclined Plane (Ramp)', label: 'A sloping surface that makes pushing heavy loads uphill gentle' },
        { item: '🪢 Pulley (Well / Flagpole)', label: 'A grooved wheel and rope that changes direction of your pull' },
        { item: '🪓 Wedge & Screw', label: 'Sharp incline that splits (ax) or holds things tight (twisted ramp)' }
      ],
      caption: 'A ramp makes the path longer, but the lifting effort ten times lighter!'
    },
    interactiveType: 'simple-machines',
    funSecret: 'The ancient Egyptians used simple inclined plane ramps and levers over 4,500 years ago to build the Great Pyramids of Giza!',
    quickQuiz: {
      question: 'Which simple machine uses a grooved wheel and a rope to lift flags and water buckets easily?',
      options: ['A Wedge', 'A Pulley', 'A Screw', 'A Fulcrum'],
      correctIndex: 1,
      explanation: 'Mechanical genius! A pulley changes the direction of pull—you pull down to lift the load up!',
      hint: 'Think of how a flag is raised to the top of a pole.'
    }
  },
  {
    id: 'force-motion',
    title: 'Forces & Motion: Push, Pull & Friction',
    funTitle: 'Sir Isaac Newton\'s Playground: Kick, Roll & Stop! ⚽🛼',
    grade: 'Class 2–5',
    category: 'Forces & Inventions',
    emoji: '⚡',
    color: 'from-teal-500 to-emerald-700',
    badge: 'Push, Pull, Friction & Gravity',
    concept: 'A FORCE is simply a PUSH or a PULL! Forces can make objects start moving, speed up, slow down, change direction, or change shape. Friction is the invisible braking force when two surfaces rub together, and Gravity pulls everything down toward Earth\'s center!',
    character: {
      name: 'Newton the Cat',
      avatar: '🐱',
      role: 'Physics Daredevil'
    },
    funStory: {
      setup: 'Newton kicked two identical soccer balls: one on polished marble floor, and one on thick grassy lawn.',
      action: 'The ball on smooth marble zoomed across the entire hall because smooth surfaces have VERY LOW FRICTION! The ball on grass slowed down quickly because bumpy grass blades grab the ball with HIGH FRICTION!',
      result: 'Friction is like nature\'s brake pad! Without friction, you would slip on floors and cars could never stop!'
    },
    visualBreakdown: {
      ruleLabel: 'The Everyday Forces Around You:',
      examples: [
        { item: '👉 PUSH Force', label: 'Kicking a ball, closing a door, pressing a button' },
        { item: '👈 PULL Force', label: 'Opening a drawer, pulling a wagon, flying a kite string' },
        { item: '🛑 FRICTION', label: 'Brakes on a bicycle, sneakers gripping pavement' },
        { item: '🌍 GRAVITY', label: 'Invisible pull keeping you on the ground so you don’t float to space' }
      ],
      caption: 'To speed up: add more push force! To stop: friction and braking forces take over!'
    },
    interactiveType: 'force-motion',
    funSecret: 'Without friction, shoes would slide uncontrollably, and you wouldn’t even be able to hold a pencil in your hand without it slipping away!',
    quickQuiz: {
      question: 'What is the force that pulls an apple straight down from a tree toward the ground?',
      options: ['Magnetism', 'Gravity', 'Electricity', 'Friction'],
      correctIndex: 1,
      explanation: 'Gravity rules! Earth\'s mass creates gravity that pulls everything toward its center!',
      hint: 'The force discovered by Sir Isaac Newton when an apple dropped.'
    }
  }
];
