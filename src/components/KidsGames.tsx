import React, { useMemo, useState } from 'react';

type Difficulty = 'Easy' | 'Medium' | 'Hard';
type Question = { prompt: string; options: string[]; answer: string; level: Difficulty; explanation: string };
type Game = { id: string; emoji: string; name: string; subject: string; description: string; questions: Question[] };

const games: Game[] = [
  { id: 'number-quest', emoji: '🫧', name: 'Number Quest', subject: 'Mathematics', description: 'Solve quick number puzzles.', questions: [
    { prompt: 'What is 4 + 3?', options: ['6','7','8'], answer: '7', level: 'Easy', explanation: 'Four objects plus three objects make seven.' },
    { prompt: 'What is 6 × 4?', options: ['20','24','28'], answer: '24', level: 'Medium', explanation: 'Six groups of four equal twenty-four.' },
    { prompt: 'What is 3/4 of 20?', options: ['12','15','16'], answer: '15', level: 'Hard', explanation: '20 ÷ 4 = 5, then 5 × 3 = 15.' },
  ]},
  { id: 'word-builder', emoji: '🔤', name: 'Word Builder', subject: 'English', description: 'Choose the correctly built word.', questions: [
    { prompt: 'Which letters make the word for 🐈?', options: ['CAT','CTA','ACT'], answer: 'CAT', level: 'Easy', explanation: 'C-A-T spells cat.' },
    { prompt: 'Choose the correct spelling.', options: ['BEAUTIFUL','BEUTIFUL','BUTIFUL'], answer: 'BEAUTIFUL', level: 'Medium', explanation: 'Beautiful is spelled B-E-A-U-T-I-F-U-L.' },
    { prompt: 'Which word means “very careful and exact”?', options: ['Precise','Noisy','Ancient'], answer: 'Precise', level: 'Hard', explanation: 'Precise means accurate and exact.' },
  ]},
  { id: 'science-lab', emoji: '🔬', name: 'Science Lab', subject: 'Science', description: 'Discover how the world works.', questions: [
    { prompt: 'Which body part helps us see?', options: ['Eyes','Ears','Hands'], answer: 'Eyes', level: 'Easy', explanation: 'We use our eyes to see.' },
    { prompt: 'Plants take in which gas?', options: ['Oxygen','Carbon dioxide','Helium'], answer: 'Carbon dioxide', level: 'Medium', explanation: 'Plants use carbon dioxide during photosynthesis.' },
    { prompt: 'Which force keeps planets in orbit?', options: ['Gravity','Friction','Magnetism'], answer: 'Gravity', level: 'Hard', explanation: 'Gravity attracts planets toward the Sun.' },
  ]},
  { id: 'pakistan-explorer', emoji: '🇵🇰', name: 'Pakistan Explorer', subject: 'General Knowledge', description: 'Learn about Pakistan.', questions: [
    { prompt: 'What is Pakistan’s capital?', options: ['Karachi','Islamabad','Lahore'], answer: 'Islamabad', level: 'Easy', explanation: 'Islamabad is the capital city of Pakistan.' },
    { prompt: 'Which is Pakistan’s national language?', options: ['Urdu','Arabic','English'], answer: 'Urdu', level: 'Medium', explanation: 'Urdu is the national language of Pakistan.' },
    { prompt: 'K2 belongs to which mountain range?', options: ['Karakoram','Himalayas','Hindu Kush'], answer: 'Karakoram', level: 'Hard', explanation: 'K2 is in the Karakoram range.' },
  ]},
  { id: 'computer-kids', emoji: '💻', name: 'Computer Kids', subject: 'Computer', description: 'Master basic digital skills.', questions: [
    { prompt: 'Which device moves the pointer?', options: ['Mouse','Printer','Speaker'], answer: 'Mouse', level: 'Easy', explanation: 'A mouse controls the pointer on a computer screen.' },
    { prompt: 'Which key starts a new line?', options: ['Enter','Shift','Esc'], answer: 'Enter', level: 'Medium', explanation: 'The Enter key starts a new line or confirms an action.' },
    { prompt: 'Which one is an internet browser?', options: ['Chrome','Calculator','Paint'], answer: 'Chrome', level: 'Hard', explanation: 'Chrome is software used to browse websites.' },
  ]},
  { id: 'islamic-values', emoji: '🌙', name: 'Islamic Values', subject: 'Islamiat', description: 'Learn manners and core knowledge.', questions: [
    { prompt: 'What should we say before eating?', options: ['Bismillah','Goodbye','Welcome'], answer: 'Bismillah', level: 'Easy', explanation: 'Muslims say Bismillah before beginning good actions.' },
    { prompt: 'How many daily prayers are obligatory?', options: ['Three','Five','Seven'], answer: 'Five', level: 'Medium', explanation: 'Five daily prayers are obligatory for Muslims.' },
    { prompt: 'In which month do Muslims fast?', options: ['Ramadan','Safar','Rajab'], answer: 'Ramadan', level: 'Hard', explanation: 'Obligatory fasting takes place during Ramadan.' },
  ]},
  { id: 'animal-world', emoji: '🐢', name: 'Animal World', subject: 'Science', description: 'Meet animals and their habitats.', questions: [
    { prompt: 'Which animal lives in water?', options: ['Fish','Cat','Camel'], answer: 'Fish', level: 'Easy', explanation: 'Fish live and breathe in water.' },
    { prompt: 'A frog is which type of animal?', options: ['Amphibian','Bird','Reptile'], answer: 'Amphibian', level: 'Medium', explanation: 'Frogs can live on land and in water.' },
    { prompt: 'Which animal is adapted to a desert?', options: ['Camel','Penguin','Dolphin'], answer: 'Camel', level: 'Hard', explanation: 'Camels have adaptations that help them survive deserts.' },
  ]},
  { id: 'shape-safari', emoji: '🔷', name: 'Shape Safari', subject: 'Mathematics', description: 'Recognize shapes and geometry.', questions: [
    { prompt: 'Which shape has three sides?', options: ['Triangle','Square','Circle'], answer: 'Triangle', level: 'Easy', explanation: 'A triangle has three straight sides.' },
    { prompt: 'How many corners has a rectangle?', options: ['3','4','5'], answer: '4', level: 'Medium', explanation: 'A rectangle has four corners.' },
    { prompt: 'Which solid has six square faces?', options: ['Cube','Sphere','Cone'], answer: 'Cube', level: 'Hard', explanation: 'A cube has six equal square faces.' },
  ]},
  { id: 'grammar-garden', emoji: '🌻', name: 'Grammar Garden', subject: 'English', description: 'Grow stronger sentences.', questions: [
    { prompt: 'Choose the naming word.', options: ['School','Run','Quickly'], answer: 'School', level: 'Easy', explanation: 'School names a place, so it is a noun.' },
    { prompt: 'Choose the verb: “Birds fly high.”', options: ['Birds','fly','high'], answer: 'fly', level: 'Medium', explanation: 'Fly is the action word.' },
    { prompt: 'Choose the correct sentence.', options: ['She goes to school.','She go to school.','She going school.'], answer: 'She goes to school.', level: 'Hard', explanation: 'A singular subject takes “goes” in the simple present.' },
  ]},
  { id: 'urdu-words', emoji: '✍️', name: 'Urdu Words', subject: 'Urdu', description: 'Match simple Urdu words.', questions: [
    { prompt: '“کتاب” means:', options: ['Book','House','Water'], answer: 'Book', level: 'Easy', explanation: 'کتاب means book.' },
    { prompt: '“پانی” means:', options: ['Food','Water','Sun'], answer: 'Water', level: 'Medium', explanation: 'پانی means water.' },
    { prompt: '“استاد” means:', options: ['Teacher','Student','Doctor'], answer: 'Teacher', level: 'Hard', explanation: 'استاد means teacher.' },
  ]},
  { id: 'sindhi-words', emoji: '📜', name: 'Sindhi Words', subject: 'Sindhi', description: 'Learn everyday Sindhi vocabulary.', questions: [
    { prompt: '“ڪتاب” means:', options: ['Book','Tree','Road'], answer: 'Book', level: 'Easy', explanation: 'ڪتاب means book.' },
    { prompt: '“پاڻي” means:', options: ['Water','Moon','Bird'], answer: 'Water', level: 'Medium', explanation: 'پاڻي means water.' },
    { prompt: '“اسڪول” means:', options: ['School','Market','Garden'], answer: 'School', level: 'Hard', explanation: 'اسڪول means school.' },
  ]},
  { id: 'eco-hero', emoji: '🌱', name: 'Eco Hero', subject: 'Environment', description: 'Make planet-friendly choices.', questions: [
    { prompt: 'Where should paper rubbish go?', options: ['Recycling bin','Road','River'], answer: 'Recycling bin', level: 'Easy', explanation: 'Clean paper can often be recycled.' },
    { prompt: 'Which action saves water?', options: ['Turn off the tap','Leave tap running','Wash one cup at a time'], answer: 'Turn off the tap', level: 'Medium', explanation: 'Turning off unused taps prevents water waste.' },
    { prompt: 'Which energy source is renewable?', options: ['Solar','Coal','Diesel'], answer: 'Solar', level: 'Hard', explanation: 'Sunlight is naturally renewed.' },
  ]},
];

const difficultyRank: Record<Difficulty, number> = { Easy: 1, Medium: 2, Hard: 3 };
const button = 'rounded-2xl bg-sky-700 px-5 py-3 text-white font-extrabold hover:bg-sky-800 focus-visible:ring-4 focus-visible:ring-amber-300 disabled:opacity-50';

export const KidsGames: React.FC = () => {
  const [gameId, setGameId] = useState(games[0].id);
  const [difficulty, setDifficulty] = useState<Difficulty>('Easy');
  const [round, setRound] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const game = games.find(item => item.id === gameId) ?? games[0];
  const rounds = useMemo(() => game.questions.filter(q => difficultyRank[q.level] <= difficultyRank[difficulty]), [game, difficulty]);
  const current = rounds[round];
  const chooseGame = (id: string) => { setGameId(id); setRound(0); setPicked(null); setScore(0); };
  const chooseDifficulty = (level: Difficulty) => { setDifficulty(level); setRound(0); setPicked(null); setScore(0); };
  const restart = () => { setRound(0); setPicked(null); setScore(0); };

  return <div className="space-y-7">
    <div><p className="text-sm font-bold uppercase tracking-widest text-sky-700">PLAY & LEARN</p><h2 className="text-3xl font-black mt-1">12 learning games</h2><p className="mt-2 text-slate-600">Choose a subject and select a level. Hard mode includes all three rounds.</p></div>
    <div className="flex flex-wrap gap-2" aria-label="Difficulty level">{(['Easy','Medium','Hard'] as Difficulty[]).map(level => <button key={level} onClick={() => chooseDifficulty(level)} aria-pressed={difficulty === level} className={`rounded-full border-2 px-4 py-2 font-bold ${difficulty === level ? 'bg-amber-400 border-amber-500 text-slate-950' : 'bg-white border-sky-200 text-sky-900'}`}>{level}</button>)}</div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">{games.map(item => <button key={item.id} onClick={() => chooseGame(item.id)} aria-pressed={game.id === item.id} className={`rounded-2xl border-2 p-4 text-left hover:-translate-y-1 transition-transform ${game.id === item.id ? 'border-sky-600 bg-sky-100' : 'border-sky-100 bg-white'}`}><span className="text-3xl">{item.emoji}</span><span className="block font-black text-lg mt-1">{item.name}</span><span className="block text-xs font-bold uppercase text-sky-700">{item.subject}</span><span className="block text-sm text-slate-600 mt-1">{item.description}</span></button>)}</div>
    <section className="rounded-3xl bg-white/90 border-2 border-sky-200 p-6 sm:p-10 min-h-[390px]">
      {!current ? <div className="text-center space-y-5" role="status"><p className="text-6xl">🎉</p><h3 className="text-2xl font-black">You scored {score} of {rounds.length}!</h3><p className="text-slate-600">Great work in {game.name} · {difficulty}.</p><button className={button} onClick={restart}>Play again</button></div> :
      <div className="space-y-6 text-center"><div><span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-bold text-sky-800">{game.subject} · {difficulty}</span><p className="mt-3 font-semibold">Round {round + 1} of {rounds.length} · {score} correct</p></div><h3 className="text-2xl sm:text-3xl font-black">{current.prompt}</h3><div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto">{current.options.map(option => <button key={option} disabled={picked !== null} onClick={() => { setPicked(option); if (option === current.answer) setScore(value => value + 1); }} className={`rounded-2xl border-4 p-5 font-black text-lg ${picked === option ? option === current.answer ? 'bg-emerald-100 border-emerald-600' : 'bg-rose-100 border-rose-500' : 'bg-sky-50 border-sky-200 hover:bg-sky-100'}`}>{option}</button>)}</div>{picked && <div className="space-y-4" role="status"><p className="font-black text-lg">{picked === current.answer ? 'Correct! ⭐' : `Good try. The answer is ${current.answer}.`}</p><p className="text-slate-600">{current.explanation}</p><button className={button} onClick={() => { setRound(value => value + 1); setPicked(null); }}>Next round →</button></div>}</div>}
    </section>
  </div>;
};
