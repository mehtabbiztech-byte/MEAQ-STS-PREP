import React, { useMemo, useState } from 'react';
import { BookOpenCheck, CheckCircle2, Clock3, ExternalLink, FileCheck2, Gauge, Play, ShieldCheck } from 'lucide-react';
import {
  FpscTrack,
  OFFICIAL_PATTERN_SOURCES,
  PROFESSIONAL_LAW_MODULES,
  SIMULATOR_BLUEPRINTS,
  SimulatorId,
  SimulatorLaunch,
  StsTier,
  TEACHING_LICENSE_BLUEPRINT,
} from '../data/examSimulatorData';

interface Props {
  onLaunch: (config: SimulatorLaunch) => void;
  defaultSimulator?: SimulatorId;
  defaultTab?: 'patterns' | 'laws' | 'omr';
}

const STS_TIERS: StsTier[] = [
  'Graduation (BPS 11–15)',
  'Intermediate (BPS 05–10)',
  'Matric (BPS 05)',
  'STS IBA Teaching License Test',
  'PST',
  'JEST',
];
const FPSC_TRACKS: FpscTrack[] = ['General Recruitment', 'FIA Professional', 'Customs & Revenue', 'Administrative'];
const KEY_COLORS = ['Green', 'Pink', 'Blue', 'Yellow'] as const;
const ANSWERS = ['A', 'B', 'C', 'D'];

export const ExactPatternSimulators: React.FC<Props> = ({ 
  onLaunch,
  defaultSimulator = 'sts',
  defaultTab = 'patterns'
}) => {
  const [tab, setTab] = useState<'patterns' | 'laws' | 'omr'>(defaultTab);
  const [simulator, setSimulator] = useState<SimulatorId>(defaultSimulator);
  const [stsTier, setStsTier] = useState<StsTier>('Graduation (BPS 11–15)');
  const [fpscTrack, setFpscTrack] = useState<FpscTrack>('General Recruitment');
  const [omrAnswers, setOmrAnswers] = useState<Record<number, number>>({});
  const [keyColor, setKeyColor] = useState<(typeof KEY_COLORS)[number]>('Green');
  const [checked, setChecked] = useState(false);

  const isTeachingLicense = simulator === 'sts' && stsTier === 'STS IBA Teaching License Test';
  const blueprint = isTeachingLicense ? TEACHING_LICENSE_BLUEPRINT : SIMULATOR_BLUEPRINTS[simulator];
  const selectedCategory = simulator === 'sts' ? stsTier : fpscTrack;
  const keyOffset = KEY_COLORS.indexOf(keyColor);
  const omrScore = useMemo(
    () => Object.entries(omrAnswers).filter(([question, answer]) => Number(answer) === ((Number(question) + keyOffset) % 4)).length,
    [omrAnswers, keyOffset],
  );

  const launch = () => {
    onLaunch({
      simulatorId: simulator,
      title: isTeachingLicense
        ? 'STS IBA Teaching License Test (STEDA) — 100 MCQs Simulation'
        : `${blueprint.title} — ${selectedCategory}`,
      category: selectedCategory,
      durationMinutes: blueprint.duration,
      timeMinutes: blueprint.duration,
      questionCount: 100,
      negativeMarking: false,
    });
  };

  return (
    <section className="rounded-3xl border border-indigo-200 bg-linear-to-br from-indigo-950 via-violet-950 to-slate-950 p-5 text-white shadow-xl sm:p-7">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-extrabold text-cyan-200">
            <Gauge className="h-4 w-4" /> Exact Test-Pattern Lab
          </div>
          <h2 className="mt-3 text-2xl font-extrabold font-display">STS & FPSC Exam Simulators</h2>
          <p className="mt-1 max-w-2xl text-sm text-indigo-100/80">Practice the full 100-question, 100-minute structure, then verify responses through a carbon-copy OMR workflow.</p>
        </div>
        <div className="flex rounded-xl bg-white/10 p-1">
          {([
            ['patterns', 'Simulators'],
            ['laws', 'Law Modules'],
            ['omr', 'OMR Checker'],
          ] as const).map(([id, label]) => (
            <button key={id} onClick={() => setTab(id)} className={`rounded-lg px-3 py-2 text-xs font-bold transition ${tab === id ? 'bg-white text-indigo-950' : 'text-indigo-100 hover:bg-white/10'}`}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {tab === 'patterns' && (
        <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/8 p-4">
            <div className="grid grid-cols-2 gap-2">
              {(['sts', 'fpsc'] as SimulatorId[]).map((id) => (
                <button key={id} onClick={() => setSimulator(id)} className={`rounded-xl border px-4 py-3 text-left text-sm font-extrabold ${simulator === id ? 'border-cyan-300 bg-cyan-300/15 text-cyan-100' : 'border-white/10 bg-black/10 text-indigo-100'}`}>
                  {id === 'sts' ? 'STS BPS 05–15' : 'FPSC One-Paper'}
                </button>
              ))}
            </div>

            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-indigo-200">Category / track</label>
              <div className="mt-2 grid gap-2">
                {(simulator === 'sts' ? STS_TIERS : FPSC_TRACKS).map((item) => (
                  <button
                    key={item}
                    onClick={() => simulator === 'sts' ? setStsTier(item as StsTier) : setFpscTrack(item as FpscTrack)}
                    className={`rounded-xl border px-3 py-2 text-left text-xs font-bold transition flex items-center justify-between ${selectedCategory === item ? 'border-fuchsia-300 bg-fuchsia-400/15 text-fuchsia-100' : 'border-white/10 text-indigo-100/80 hover:bg-white/5'}`}
                  >
                    <span>{item}</span>
                    {item === 'STS IBA Teaching License Test' && (
                      <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-emerald-500/30 text-emerald-300 border border-emerald-400/40">
                        NEW
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {isTeachingLicense && (
              <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/15 p-3 text-xs text-emerald-100 space-y-1">
                <div className="font-extrabold text-emerald-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Sindh Teaching License (STEDA & STS IBA):</span>
                </div>
                <div className="leading-relaxed text-indigo-100/90">
                  Exact 50–50 blueprint: 50% Content Knowledge (Class 1–8 DCAR) + 50% Pedagogical Content Knowledge (HEC B.Ed curriculum). Passing mark is 60%.
                </div>
              </div>
            )}

            {(stsTier === 'PST' || stsTier === 'JEST') && simulator === 'sts' && (
              <div className="rounded-xl border border-amber-300/30 bg-amber-300/10 p-3 text-xs text-amber-100">
                Teaching mode adds Mother Tongue (Sindhi/Urdu), pedagogy and child-psychology emphasis where suitable questions exist.
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/8 p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="font-extrabold">{blueprint.title}</h3>
                <p className="text-xs text-indigo-200">{blueprint.questions} marks · {blueprint.duration} minutes · 1 mark each</p>
              </div>
              <Clock3 className="h-7 w-7 text-cyan-300" />
            </div>
            <div className="mt-4 space-y-3">
              {blueprint.sections.map((section) => (
                <div key={section.name} className="rounded-xl border border-white/10 bg-black/10 p-3">
                  <div className="flex items-center justify-between gap-3 text-sm font-extrabold">
                    <span>{section.name}</span><span className="text-cyan-300">{section.marks}%</span>
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-indigo-100/70">{section.detail}</div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-linear-to-r from-cyan-400 to-fuchsia-400" style={{ width: `${section.marks}%` }} /></div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-amber-300/10 p-3 text-xs text-amber-100">{blueprint.note}</div>
            <button onClick={launch} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-400 to-fuchsia-500 px-5 py-3 font-extrabold text-slate-950 transition hover:brightness-110 cursor-pointer">
              <Play className="h-4 w-4 fill-current" /> Launch {blueprint.duration}-Minute Simulator
            </button>
            <div className="mt-3 flex flex-wrap gap-3">
              {OFFICIAL_PATTERN_SOURCES.map((source) => (
                <a key={source.label} href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-200 hover:underline">
                  {source.label} <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 'laws' && (
        <div className="mt-6">
          <div className="mb-4 rounded-xl border border-amber-300/30 bg-amber-300/10 p-3 text-xs text-amber-100">
            Laws can be amended. These modules link to official consolidated texts; candidates should follow the syllabus attached to their FPSC case number.
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {PROFESSIONAL_LAW_MODULES.map((module) => (
              <article key={module.id} className="rounded-2xl border border-white/10 bg-white/8 p-4">
                <div className="text-[10px] font-black uppercase tracking-wider text-fuchsia-300">{module.agency}</div>
                <h3 className="mt-1 font-extrabold">{module.title}</h3>
                <ul className="mt-3 space-y-1.5 text-xs text-indigo-100/75">
                  {module.focus.map((topic) => <li key={topic} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300" />{topic}</li>)}
                </ul>
                <a href={module.sourceUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 rounded-lg border border-cyan-300/30 px-3 py-2 text-xs font-bold text-cyan-200 hover:bg-cyan-300/10">
                  Open current official text <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      )}

      {tab === 'omr' && (
        <div className="mt-6 grid gap-5 xl:grid-cols-[1fr_280px]">
          <div className="rounded-2xl bg-slate-50 p-4 text-slate-900">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
              <div><h3 className="font-extrabold">Virtual Carbon-Copy OMR Sheet</h3><p className="text-xs text-slate-500">Tap one bubble per question. Your marks remain visible as the simulated carbon copy.</p></div>
              <div className="flex items-center gap-2 rounded-lg bg-blue-100 px-3 py-2 text-xs font-bold text-blue-800"><FileCheck2 className="h-4 w-4" /> Blue copy</div>
            </div>
            <div className="mt-4 grid max-h-[430px] grid-cols-2 gap-2 overflow-y-auto pr-1 sm:grid-cols-4">
              {Array.from({ length: 100 }, (_, index) => (
                <div key={index} className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white p-1.5">
                  <span className="w-6 text-[10px] font-black text-slate-500">{index + 1}</span>
                  {ANSWERS.map((answer, answerIndex) => (
                    <button
                      key={answer}
                      onClick={() => { setOmrAnswers((current) => ({ ...current, [index]: answerIndex })); setChecked(false); }}
                      aria-label={`Question ${index + 1}, option ${answer}`}
                      className={`h-6 w-6 rounded-full border text-[10px] font-black ${omrAnswers[index] === answerIndex ? 'border-blue-700 bg-blue-600 text-white shadow-inner' : 'border-slate-300 bg-white text-slate-500 hover:border-blue-400'}`}
                    >{answer}</button>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-white/8 p-4">
            <div className="flex items-center gap-2 font-extrabold"><ShieldCheck className="h-5 w-5 text-cyan-300" /> Color Key Checker</div>
            <p className="mt-1 text-xs text-indigo-100/70">Training keys are simulated—not an official released answer key.</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {KEY_COLORS.map((color) => (
                <button key={color} onClick={() => { setKeyColor(color); setChecked(false); }} className={`rounded-lg border px-3 py-2 text-xs font-bold ${keyColor === color ? 'border-white bg-white text-indigo-950' : 'border-white/15 text-indigo-100'}`}>{color}</button>
              ))}
            </div>
            <button onClick={() => setChecked(true)} className="mt-4 w-full rounded-xl bg-cyan-400 px-4 py-3 text-sm font-extrabold text-slate-950">Check marked responses</button>
            {checked && (
              <div className="mt-4 rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-4 text-center">
                <div className="text-3xl font-black text-cyan-200">{omrScore}/100</div>
                <div className="text-xs text-indigo-100">{Object.keys(omrAnswers).length} attempted · {100 - Object.keys(omrAnswers).length} blank</div>
              </div>
            )}
            <button onClick={() => { setOmrAnswers({}); setChecked(false); }} className="mt-3 w-full rounded-xl border border-white/15 px-4 py-2 text-xs font-bold text-indigo-100">Clear sheet</button>
            <div className="mt-4 flex items-start gap-2 rounded-xl bg-white/5 p-3 text-[11px] leading-relaxed text-indigo-100/70"><BookOpenCheck className="mt-0.5 h-4 w-4 shrink-0 text-fuchsia-300" />Use the color printed on the released key. Never compare against a different color set.</div>
          </aside>
        </div>
      )}
    </section>
  );
};
