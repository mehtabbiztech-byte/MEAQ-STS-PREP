import React, { useState } from 'react';

const mathRounds = [
  { question: '2 + 3', answer: 5, choices: [3, 5, 7] },
  { question: '6 − 2', answer: 4, choices: [3, 4, 5] },
  { question: '4 + 4', answer: 8, choices: [6, 8, 9] },
  { question: '9 − 3', answer: 6, choices: [4, 6, 7] },
  { question: '5 + 2', answer: 7, choices: [7, 8, 6] },
  { question: '10 − 5', answer: 5, choices: [4, 6, 5] },
];
const words = [
  { clue: 'An animal that says meow 🐈', letters: ['T','C','A'], answer: 'CAT' },
  { clue: 'A bright shape in the night sky ⭐', letters: ['R','S','T','A'], answer: 'STAR' },
  { clue: 'It helps you read stories 📖', letters: ['K','O','B','O'], answer: 'BOOK' },
  { clue: 'It shines in the daytime ☀️', letters: ['N','S','U'], answer: 'SUN' },
];
const symbols = ['🐟', '🐢', '⭐', '🌈', '🐙', '🦋'];
const deck = [0,4,1,5,2,3,4,0,5,1,3,2];
const nextButton = 'rounded-2xl bg-sky-700 px-5 py-3 text-white font-extrabold hover:bg-sky-800 focus-visible:ring-4 focus-visible:ring-amber-300';

function BubbleMath() {
  const [round, setRound] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const done = round === mathRounds.length;
  const current = mathRounds[round];
  return <div className="space-y-5 text-center">
    {done ? <><p className="text-6xl">🎉</p><h3 className="text-2xl font-black">You solved {score} of {mathRounds.length}!</h3><button className={nextButton} onClick={() => {setRound(0);setScore(0);setPicked(null);}}>Play again</button></> : <>
      <p className="font-semibold">Round {round+1} of {mathRounds.length} · {score} correct</p><h3 className="text-4xl font-black">{current.question} = ?</h3>
      <div className="flex flex-wrap justify-center gap-5 py-5">{current.choices.map((choice,i)=><button key={choice} disabled={picked!==null} onClick={() => {setPicked(choice);if(choice === current.answer)setScore(s=>s+1);}} aria-label={`Choose ${choice}`} className={`kids-answer-bubble w-24 h-24 rounded-full border-4 font-black text-3xl shadow-lg ${picked === choice ? choice === current.answer ? 'bg-emerald-200 border-emerald-700' : 'bg-rose-200 border-rose-600' : 'bg-sky-100 border-sky-400 hover:bg-sky-200'} disabled:cursor-default`} style={{animationDelay:`${i*0.4}s`}}>{choice}</button>)}</div>
      {picked!==null && <div role="status" className="space-y-4"><p className="font-bold text-lg">{picked === current.answer ? 'Brilliant! ⭐' : `Good try! The answer is ${current.answer}.`}</p><button className={nextButton} onClick={()=>{setRound(r=>r+1);setPicked(null);}}>Next bubble →</button></div>}
    </>}
  </div>;
}

function MemoryMatch() {
  const [open, setOpen] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [tries, setTries] = useState(0);
  const [pause, setPause] = useState(false);
  const choose = (index:number) => {
    if(open.includes(index) || matched.includes(index) || open.length === 2) return;
    if(pause){setOpen([]);setPause(false);}
    if(open.length === 0 || pause){setOpen([index]);return;}
    const pair = [open[0], index];setOpen(pair);setTries(n=>n+1);
    if(deck[pair[0]] === deck[index]){setMatched(m=>[...m,...pair]);setOpen([]);}else setPause(true);
  };
  return <div className="space-y-4 text-center"><p className="font-semibold">Find all six matching pairs · {tries} tries</p><div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-sm mx-auto">{deck.map((symbol,i)=><button key={i} onClick={()=>choose(i)} aria-label={open.includes(i)||matched.includes(i)?`Card ${i+1}: ${symbols[symbol]}`:`Card ${i+1}: hidden`} aria-pressed={open.includes(i)||matched.includes(i)} className={`aspect-square rounded-xl text-3xl border-2 font-bold ${matched.includes(i)?'bg-emerald-100 border-emerald-500':open.includes(i)?'bg-white border-amber-400':'bg-sky-500 border-sky-700 text-white hover:bg-sky-600'}`}>{open.includes(i)||matched.includes(i)?symbols[symbol]:'?'}</button>)}</div>
    {pause && <button onClick={()=>{setOpen([]);setPause(false);}} className={nextButton}>Try two more cards →</button>}
    {matched.length === deck.length && <p role="status" className="font-black text-xl">All matched! Great remembering! 🌟</p>}
    <button className="text-sky-800 font-semibold underline block mx-auto" onClick={()=>{setOpen([]);setMatched([]);setTries(0);setPause(false);}}>Shuffle & start again</button>
  </div>;
}

function WordBuilder() {
  const [round,setRound]=useState(0);
  const [selected,setSelected]=useState<number[]>([]);
  const [checked,setChecked]=useState(false);
  const [score,setScore]=useState(0);
  const current=words[round];
  if(!current)return <div className="text-center space-y-4"><p className="text-6xl">📚</p><h3 className="text-2xl font-black">You made {score} of {words.length} words!</h3><button className={nextButton} onClick={()=>{setRound(0);setSelected([]);setChecked(false);setScore(0);}}>Play again</button></div>;
  const attempt=selected.map(i=>current.letters[i]).join('');
  return <div className="text-center space-y-5"><p className="font-semibold">Word {round+1} of {words.length} · {score} correct</p><h3 className="text-xl font-bold">{current.clue}</h3><div className="flex justify-center gap-2">{current.letters.map((_,i)=><span key={i} className="w-12 h-14 border-b-4 border-sky-700 text-3xl font-black grid place-items-center">{attempt[i]||' '}</span>)}</div><div className="flex justify-center flex-wrap gap-3">{current.letters.map((letter,i)=><button key={i} disabled={checked||selected.includes(i)} className="w-14 h-14 rounded-xl bg-amber-200 border-2 border-amber-500 text-2xl font-black disabled:opacity-30" onClick={()=>setSelected(a=>[...a,i])} aria-label={`Add letter ${letter}`}>{letter}</button>)}</div><div className="flex justify-center flex-wrap gap-3"><button className={nextButton} disabled={selected.length!==current.letters.length||checked} onClick={()=>{setChecked(true);if(attempt === current.answer)setScore(s=>s+1);}}>Check word</button><button disabled={!selected.length||checked} className="rounded-xl border-2 border-sky-300 px-4 py-2 font-semibold disabled:opacity-40" onClick={()=>setSelected(s=>s.slice(0,-1))}>Undo letter</button></div>
    {checked && <div role="status" className="space-y-3"><p className="font-bold">{attempt === current.answer ? 'You got it! 🌈' : `The word is ${current.answer}. Try the next one!`}</p><button className={nextButton} onClick={()=>{setRound(r=>r+1);setSelected([]);setChecked(false);}}>Next word →</button></div>}</div>;
}

export const KidsGames: React.FC = () => {
  const [game,setGame]=useState<'math'|'memory'|'words'>('math');
  const games=[{id:'math',emoji:'🫧',name:'Bubble Math',description:'Pop the answer to a little sum.'},{id:'memory',emoji:'🐢',name:'Ocean Match',description:'Find pairs of sea friends.'},{id:'words',emoji:'🔤',name:'Build a Word',description:'Put letters in the right order.'}] as const;
  return <div className="space-y-7"><div><p className="text-sm font-bold uppercase tracking-widest text-sky-700">PLAY & LEARN</p><h2 className="text-3xl font-black mt-1">A little challenge, a big smile</h2><p className="mt-2 text-slate-600">Choose a game, learn at your pace, and play again whenever you like.</p></div><div className="grid sm:grid-cols-3 gap-3">{games.map(g=><button key={g.id} onClick={()=>setGame(g.id)} aria-pressed={game===g.id} className={`rounded-2xl border-2 p-4 text-left hover:-translate-y-1 transition-transform ${game===g.id?'border-sky-600 bg-sky-100':'border-sky-100 bg-white'}`}><span className="text-3xl">{g.emoji}</span><span className="block font-black text-lg mt-1">{g.name}</span><span className="block text-sm text-slate-600">{g.description}</span></button>)}</div><div className="rounded-3xl bg-white/90 border-2 border-sky-200 p-6 sm:p-10 min-h-[390px]" key={game}>{game==='math'?<BubbleMath/>:game==='memory'?<MemoryMatch/>:<WordBuilder/>}</div></div>;
};
