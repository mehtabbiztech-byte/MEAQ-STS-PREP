import React from 'react';
import { KidsWorksheet } from '../data/kidsWorksheets';

const ink = '#24465b';
const dotted = { fill: 'none', stroke: ink, strokeWidth: 3, strokeDasharray: '8 8', strokeLinecap: 'round' as const };
const line = { fill: 'none', stroke: ink, strokeWidth: 3, strokeLinejoin: 'round' as const, strokeLinecap: 'round' as const };

function Flower({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`} stroke={ink} strokeWidth="2.5" fill="white">{[0, 60, 120, 180, 240, 300].map(deg => <ellipse key={deg} cx="0" cy="-24" rx="13" ry="23" transform={`rotate(${deg})`}/>)}<circle r="12"/><path d="M0 45v55m0-16-21-16m21 10 19-14" fill="none"/></g>;
}

function Draw({ worksheet }: { worksheet: KidsWorksheet }) {
  const { kind, motif } = worksheet;
  if (kind === 'trace') return <g {...dotted}>
    {motif === 'shapes' ? <><circle cx="145" cy="175" r="58"/><rect x="355" y="118" width="116" height="116" rx="4"/><path d="M80 395 145 290 210 395Z"/><path d="m410 284 19 48 52 2-40 32 13 51-44-27-44 27 13-51-40-32 52-2Z"/></> : motif === 'waves' ? [0,1,2,3,4].map(i => <path key={i} d={`M55 ${130+i*85} C145 ${60+i*85} 205 ${210+i*85} 295 ${130+i*85} S440 ${60+i*85} 550 ${130+i*85}`}/>) : <>{motif.split('').map((letter, i) => <text key={i} x={100+i*150} y="290" fontFamily="sans-serif" fontWeight="900" fontSize="126" fill="none" stroke={ink} strokeWidth="2" strokeDasharray="6 6">{letter}</text>)}{[390,460,530].map(y => <path key={y} d={`M65 ${y}h480`}/>)}</>}
  </g>;
  if (kind === 'dots') {
    const coordinates = motif === 'boat' ? [[90,370],[160,370],[230,370],[300,370],[370,370],[440,370],[510,370],[465,445],[395,465],[240,465],[130,440],[90,370]] : motif === 'star' ? [[300,90],[345,245],[505,245],[375,335],[430,490],[300,390],[170,490],[225,335],[95,245],[255,245],[300,90]] : [[110,320],[300,150],[490,320],[490,500],[110,500],[110,320]];
    return <g>{coordinates.slice(0,-1).map(([x,y],i) => <g key={i}><circle cx={x} cy={y} r="5" fill={ink}/><text x={x+9} y={y-9} fontSize="17" fontFamily="sans-serif" fill={ink}>{i+1}</text></g>)}<text x="62" y="575" fontFamily="sans-serif" fill={ink}>Draw the missing details here!</text></g>;
  }
  if (kind === 'symmetry') return <g><path d="M300 85v490" {...dotted}/>{motif === 'butterfly' ? <g {...line}><path d="M295 295 C175 120 85 125 125 270 Q150 310 225 325 C80 340 140 515 275 398 L295 350"/><path d="M290 260Q265 220 250 215M290 260Q310 205 315 200"/><circle cx="200" cy="260" r="18"/><circle cx="205" cy="390" r="15"/></g> : <g {...line}><path d="M300 130 C190 205 205 365 225 420 L300 420 M225 365 L145 435 L145 470 L225 440 M245 420 L245 515 L300 515"/><path d="M240 255a60 60 0 0 1 60-60"/></g>}<text x="340" y="530" fontFamily="sans-serif" fill={ink}>Draw the matching half →</text></g>;
  if (kind === 'pattern') return <g>{[[0,1,0,1,-1,-1],[0,0,1,0,0,-1],[0,1,2,0,1,-1]].map((row,r) => row.map((value,c) => <g key={`${r}-${c}`} transform={`translate(${75+c*80} ${190+r*120})`}><rect x="-30" y="-30" width="60" height="60" rx="9" {...line}/>{value === 0 ? <circle r="17" {...line}/> : value === 1 ? <path d="M-18 16 0-19 18 16Z" {...line}/> : value === 2 ? <rect x="-16" y="-16" width="32" height="32" {...line}/> : null}</g>))}<text x="75" y="580" fill={ink} fontFamily="sans-serif">Circle → Triangle → ?</text></g>;
  if (kind === 'count') return <g>{[2,4,6].map((total,row) => <g key={row}>{Array.from({length:total},(_,i) => <g key={i}><Flower x={85+i*62} y={130+row*150} scale={0.4}/></g>) }<rect x="480" y={105+row*150} width="54" height="55" rx="8" {...line}/></g>)}<text x="76" y="595" fill={ink} fontFamily="sans-serif">Write how many flowers are in each row.</text></g>;
  if (kind === 'craft') return <g {...line}>{motif === 'boat' ? <><path d="M80 355h440l-65 120H160Z"/><path d="M300 340V130L145 330Z"/><path d="M320 150v190l130-10Z"/><path d="M80 355h440" {...dotted}/></> : motif === 'crown' ? <><path d="M85 320 130 160 205 260 300 120 395 260 470 160 515 320 490 410H110Z"/><path d="M92 355h416" {...dotted}/>{[200,300,400].map(x => <circle key={x} cx={x} cy="320" r="20"/>)}</> : <><Flower x={290} y={250} scale={2}/><path d="M90 530h420" {...dotted}/></>}<text x="95" y="595" fill={ink} stroke="none" fontFamily="sans-serif" fontSize="16">Color • Cut • Fold or glue • Ask an adult for scissors</text></g>;
  // Coloring sheets have thick black outlines and deliberately unfilled interiors.
  if (motif === 'fish') return <g {...line}>{[0,1,2].map((i) => <g key={i} transform={`translate(${115+i*150} ${205+i%2*165})`}><ellipse cx="0" cy="0" rx="70" ry="48"/><path d="M-58 0 -110-45v90Z"/><circle cx="38" cy="-13" r="5" fill={ink}/><path d="M5-45 20-68 36-44M-20-28v57M0-35v70"/></g>)}<path d="M60 520q120-50 240 0t240 0"/></g>;
  if (motif === 'rocket') return <g {...line}><path d="M300 100 C210 190 230 320 245 400 H355 C370 320 390 190 300 100Z"/><circle cx="300" cy="250" r="45"/><path d="M245 350 170 430 175 500 255 425M355 350 430 430 425 500 345 425M265 400l-20 95 55-40 55 40-20-95"/>{[[100,160],[480,130],[460,380],[125,500]].map(([x,y],i)=><text key={i} x={x} y={y} fontSize="36" fill="white" stroke={ink} strokeWidth="2">☆</text>)}</g>;
  if (motif === 'flower') return <g>{[160,320,470].map((x,i)=><g key={x}><Flower x={x} y={220+i%2*75} scale={i===1 ? 1.4 : 1}/></g>)}</g>;
  return <g {...line}>{[0,1].map(i => <g key={i} transform={`translate(${180+i*240} ${275+i*60})`}><path d="M0 0 C-135-185-175 125-25 105 Q0 70 0 35 C25 70 50 135 115 80 C220-100 35-140 0 0Z"/><ellipse cx="0" cy="80" rx="10" ry="75"/><circle cx="-70" cy="5" r="22"/><circle cx="70" cy="5" r="22"/></g>)}</g>;
}

export const KidsWorksheetPage: React.FC<{ worksheet: KidsWorksheet }> = ({worksheet}) => <div className="kids-printable bg-white text-slate-800 border border-sky-200 rounded-2xl p-6 sm:p-9 max-w-[760px] mx-auto shadow-sm">
  <div className="flex justify-between gap-4 border-b-2 border-sky-200 pb-4"><div><p className="font-bold text-sky-700 text-sm">MEQSA · CREATE & LEARN</p><h2 className="text-2xl font-black mt-1">{worksheet.title}</h2></div><span className="text-sm font-semibold">{worksheet.age}</span></div>
  <p className="mt-5 font-semibold leading-7">{worksheet.prompt}</p><p className="text-sm text-slate-600">{worksheet.detail}</p>
  <svg viewBox="0 0 600 660" role="img" aria-label={`Printable activity: ${worksheet.title}`} className="w-full max-h-[650px] my-4"><Draw worksheet={worksheet}/></svg>
  <div className="border-t border-dashed border-slate-400 pt-4 flex justify-between gap-4 text-sm">Name: ___________________________ <span>Date: ______________</span></div>
</div>;
