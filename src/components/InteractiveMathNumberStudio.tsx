import React, { useState } from 'react';
import {
  Calculator,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Lightbulb,
  Zap,
  ArrowRight,
  RefreshCw,
  Search,
  Eye,
  Award,
  Info,
  FileSpreadsheet,
  AlertTriangle,
  RotateCcw,
  SlidersHorizontal,
  Hash,
  Divide,
  Percent,
  Layers,
  Sparkles,
  BookOpen,
} from 'lucide-react';

export type MathTab = 'numbers' | 'decimals' | 'fractions' | 'lcmhcf' | 'drill';

export interface NumberClassInfo {
  number: number;
  isNatural: boolean;
  isWhole: boolean;
  isInteger: boolean;
  isRational: boolean;
  isPrime: boolean;
  isComposite: boolean;
  isEven: boolean;
  primeFactors: number[];
  factors: number[];
  divisibility: Record<number, { pass: boolean; reason: string }>;
}

export interface FractionCalculation {
  num1: number;
  den1: number;
  num2: number;
  den2: number;
  op: '+' | '-' | '×' | '÷';
}

export interface LcmHcfResult {
  a: number;
  b: number;
  c?: number;
  factorsA: Record<number, number>;
  factorsB: Record<number, number>;
  hcf: number;
  lcm: number;
  product: number;
  productHcfLcm: number;
  isProductEqual: boolean;
}

export const MATH_DRILL_QUESTIONS = [
  {
    id: 'mq-1',
    topic: '2.1 Number System',
    question: 'Which of the following is the only EVEN prime number?',
    options: ['0', '1', '2', '4'],
    correctIndex: 2,
    explanation: '2 is the smallest prime number and the only even prime number in mathematics. 0 is whole/even, 1 is neither prime nor composite, and 4 is composite.',
    examTip: 'Frequent Sukkur IBA question: "1 is neither prime nor composite; 2 is the only even prime."',
  },
  {
    id: 'mq-2',
    topic: '2.1 Divisibility Rule for 11',
    question: 'If the number 54,3*2 is divisible by 11, what is the single digit replacing *?',
    options: ['2', '6', '7', '8'],
    correctIndex: 1,
    explanation: 'Sum of digits at odd places (from right): 2 + 3 + 5 = 10. Sum of digits at even places: * + 4 = 4 + *. For divisibility by 11, the difference must be 0 or a multiple of 11. 10 - (4 + *) = 0 => 6 - * = 0 => * = 6. Check: 54,362 / 11 = 4,942.',
    examTip: 'Divisibility by 11 = (Sum of odd-place digits) - (Sum of even-place digits) must be 0 or 11.',
  },
  {
    id: 'mq-3',
    topic: '2.2 Decimals',
    question: 'Convert the recurring decimal 0.444... (0.4̄) into a vulgar fraction in simplest form:',
    options: ['4/10', '2/5', '4/9', '44/99'],
    correctIndex: 2,
    explanation: 'Let x = 0.444... Multiplying by 10 gives 10x = 4.444... Subtracting gives 9x = 4 => x = 4/9. Rule: A single recurring digit under the bar converts to that digit over 9.',
    examTip: 'For recurring 0.ā = a/9; for 0.ab̄ = ab/99. E.g., 0.777... = 7/9; 0.2727... = 27/99 = 3/11.',
  },
  {
    id: 'mq-4',
    topic: '2.3 Fractions',
    question: 'Solve: (3/4 + 2/3) ÷ (5/6 - 1/2)',
    options: ['17/4', '17/12', '1/3', '17/6'],
    correctIndex: 0,
    explanation: 'Step 1: Numerator = 3/4 + 2/3 = (9 + 8)/12 = 17/12. Step 2: Denominator = 5/6 - 1/2 = 5/6 - 3/6 = 2/6 = 1/3. Step 3: Division = (17/12) ÷ (1/3) = (17/12) × (3/1) = 51/12 = 17/4.',
    examTip: 'Always apply BODMAS: brackets first, then invert the divisor and multiply.',
  },
  {
    id: 'mq-5',
    topic: '2.4 LCM & 2.5 HCF Master Theorem',
    question: 'The HCF of two numbers is 16 and their product is 3,072. What is their LCM?',
    options: ['128', '192', '216', '256'],
    correctIndex: 1,
    explanation: 'Master Theorem: Product of two numbers = LCM × HCF. Therefore, LCM = Product / HCF = 3,072 / 16 = 192.',
    examTip: 'The relationship Product = LCM × HCF strictly holds true for ANY two numbers!',
  },
  {
    id: 'mq-6',
    topic: '2.4 LCM (Word Problem)',
    question: 'Three school bells toll at intervals of 9, 12, and 15 minutes respectively. If they toll together at 8:00 AM, at what time will they toll together next?',
    options: ['9:30 AM', '10:00 AM', '11:00 AM', '12:00 PM'],
    correctIndex: 2,
    explanation: 'We need the LCM of 9, 12, and 15. Prime factors: 9 = 3², 12 = 2² × 3, 15 = 3 × 5. LCM = 2² × 3² × 5 = 4 × 9 × 5 = 180 minutes. 180 minutes = 3 hours. 8:00 AM + 3 hours = 11:00 AM.',
    examTip: 'Whenever an exam asks "when will bells toll together, or traffic lights change together", find the LCM of the intervals.',
  },
  {
    id: 'mq-7',
    topic: '2.5 HCF (Word Problem)',
    question: 'What is the greatest length of a measuring tape that can measure lengths of 48m, 72m, and 120m exactly without leaving any remaining fraction?',
    options: ['12m', '16m', '24m', '48m'],
    correctIndex: 2,
    explanation: 'We need the HCF (Highest Common Factor / عاد اعظم) of 48, 72, and 120. 48 = 2⁴ × 3, 72 = 2³ × 3², 120 = 2³ × 3 × 5. Common factors with lowest power = 2³ × 3 = 8 × 3 = 24m.',
    examTip: '"Greatest length", "maximum capacity", or "largest tile" signifies finding the HCF.',
  },
  {
    id: 'mq-8',
    topic: '2.4 & 2.5 Fractions LCM and HCF',
    question: 'What is the HCF of the fractions 2/3, 8/9, and 10/27?',
    options: ['2/27', '40/3', '2/3', '10/27'],
    correctIndex: 0,
    explanation: 'Formula for HCF of Fractions = HCF of Numerators / LCM of Denominators. HCF(2, 8, 10) = 2. LCM(3, 9, 27) = 27. Therefore, HCF = 2/27.',
    examTip: 'HCF of fractions = HCF(num) / LCM(den). LCM of fractions = LCM(num) / HCF(den). Remember: the requested operation always goes to the numerators!',
  },
];

// Helper calculations
function getPrimeFactors(n: number): number[] {
  const factors: number[] = [];
  let d = 2;
  let temp = Math.abs(n);
  while (temp >= 2) {
    if (temp % d === 0) {
      factors.push(d);
      temp /= d;
    } else {
      d++;
      if (d * d > temp && temp > 1) {
        factors.push(temp);
        break;
      }
    }
  }
  return factors;
}

function getAllDivisors(n: number): number[] {
  const divs: number[] = [];
  const absN = Math.abs(n);
  for (let i = 1; i <= Math.sqrt(absN); i++) {
    if (absN % i === 0) {
      divs.push(i);
      if (i * i !== absN) divs.push(absN / i);
    }
  }
  return divs.sort((a, b) => a - b);
}

function computeGcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function computeLcm(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / computeGcd(a, b);
}

export const InteractiveMathNumberStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MathTab>('numbers');

  // Tab 1: Number classifier state
  const [inputNum, setInputNum] = useState<number>(36);

  // Tab 2: Decimal & Recurring state
  const [decimalInput, setDecimalInput] = useState<string>('0.75');

  // Tab 3: Fractions calculator state
  const [fracState, setFracState] = useState<FractionCalculation>({
    num1: 3,
    den1: 4,
    num2: 2,
    den2: 5,
    op: '+',
  });

  // Tab 4: LCM & HCF state
  const [numA, setNumA] = useState<number>(24);
  const [numB, setNumB] = useState<number>(36);

  // Tab 5: Drill state
  const [drillAnswers, setDrillAnswers] = useState<Record<string, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});

  // Compute number details
  const currentNum = Math.floor(inputNum) || 1;
  const isPrime =
    currentNum > 1 &&
    (() => {
      for (let i = 2; i <= Math.sqrt(currentNum); i++) {
        if (currentNum % i === 0) return false;
      }
      return true;
    })();
  const isComposite = currentNum > 1 && !isPrime;
  const primeFactors = getPrimeFactors(currentNum);
  const allDivisors = getAllDivisors(currentNum);

  // Divisibility checks
  const divisibilityRules: Record<number, { pass: boolean; rule: string; check: string }> = {
    2: {
      pass: currentNum % 2 === 0,
      rule: 'Last digit is even (0, 2, 4, 6, 8)',
      check: `Last digit is ${String(currentNum).slice(-1)} ${currentNum % 2 === 0 ? '➔ Divisible' : '➔ Not Divisible'}`,
    },
    3: {
      pass: currentNum % 3 === 0,
      rule: 'Sum of all digits is a multiple of 3',
      check: `Sum of digits (${String(currentNum).split('').join(' + ')}) = ${String(currentNum)
        .split('')
        .reduce((a, b) => a + Number(b), 0)} ${currentNum % 3 === 0 ? '➔ Divisible' : '➔ Not Divisible'}`,
    },
    4: {
      pass: currentNum % 4 === 0,
      rule: 'Last two digits form a number divisible by 4',
      check: `Last 2 digits = ${String(currentNum).slice(-2)} ${currentNum % 4 === 0 ? '➔ Divisible' : '➔ Not Divisible'}`,
    },
    5: {
      pass: currentNum % 5 === 0,
      rule: 'Last digit is either 0 or 5',
      check: `Last digit is ${String(currentNum).slice(-1)} ${currentNum % 5 === 0 ? '➔ Divisible' : '➔ Not Divisible'}`,
    },
    6: {
      pass: currentNum % 6 === 0,
      rule: 'Divisible by BOTH 2 and 3',
      check: `Divisible by 2? ${currentNum % 2 === 0 ? 'Yes' : 'No'}, Divisible by 3? ${currentNum % 3 === 0 ? 'Yes' : 'No'}`,
    },
    8: {
      pass: currentNum % 8 === 0,
      rule: 'Last three digits form a number divisible by 8',
      check: `Last 3 digits = ${String(currentNum).slice(-3)} ${currentNum % 8 === 0 ? '➔ Divisible' : '➔ Not Divisible'}`,
    },
    9: {
      pass: currentNum % 9 === 0,
      rule: 'Sum of all digits is divisible by 9',
      check: `Sum of digits (${String(currentNum).split('').join(' + ')}) = ${String(currentNum)
        .split('')
        .reduce((a, b) => a + Number(b), 0)} ${currentNum % 9 === 0 ? '➔ Divisible' : '➔ Not Divisible'}`,
    },
    10: {
      pass: currentNum % 10 === 0,
      rule: 'Last digit is 0',
      check: `Last digit is ${String(currentNum).slice(-1)} ${currentNum % 10 === 0 ? '➔ Divisible' : '➔ Not Divisible'}`,
    },
    11: {
      pass: currentNum % 11 === 0,
      rule: '|Sum(Odd Places) - Sum(Even Places)| = 0 or multiple of 11',
      check: (() => {
        const str = String(currentNum);
        let oddSum = 0;
        let evenSum = 0;
        for (let i = 0; i < str.length; i++) {
          const digit = Number(str[str.length - 1 - i]);
          if (i % 2 === 0) oddSum += digit;
          else evenSum += digit;
        }
        const diff = Math.abs(oddSum - evenSum);
        return `Odd sum (${oddSum}) - Even sum (${evenSum}) = ${diff} ${diff % 11 === 0 ? '➔ Divisible' : '➔ Not Divisible'}`;
      })(),
    },
  };

  // Fractions calculation
  const calculateFraction = () => {
    const { num1, den1, num2, den2, op } = fracState;
    const safeDen1 = den1 || 1;
    const safeDen2 = den2 || 1;
    let resNum = 0;
    let resDen = 1;
    let step = '';

    if (op === '+') {
      const commonLcm = computeLcm(safeDen1, safeDen2);
      resNum = num1 * (commonLcm / safeDen1) + num2 * (commonLcm / safeDen2);
      resDen = commonLcm;
      step = `LCM of denominators (${safeDen1}, ${safeDen2}) = ${commonLcm}. Adjusted numerators: (${num1}×${commonLcm / safeDen1}) + (${num2}×${commonLcm / safeDen2}) = ${resNum}/${resDen}.`;
    } else if (op === '-') {
      const commonLcm = computeLcm(safeDen1, safeDen2);
      resNum = num1 * (commonLcm / safeDen1) - num2 * (commonLcm / safeDen2);
      resDen = commonLcm;
      step = `LCM of denominators (${safeDen1}, ${safeDen2}) = ${commonLcm}. Adjusted numerators: (${num1}×${commonLcm / safeDen1}) - (${num2}×${commonLcm / safeDen2}) = ${resNum}/${resDen}.`;
    } else if (op === '×') {
      resNum = num1 * num2;
      resDen = safeDen1 * safeDen2;
      step = `Multiply numerators together (${num1} × ${num2} = ${resNum}) and denominators together (${safeDen1} × ${safeDen2} = ${resDen}).`;
    } else if (op === '÷') {
      resNum = num1 * safeDen2;
      resDen = safeDen1 * (num2 || 1);
      step = `Invert the divisor (${num2}/${safeDen2} ➔ ${safeDen2}/${num2}) and multiply: (${num1}/${safeDen1}) × (${safeDen2}/${num2}) = ${resNum}/${resDen}.`;
    }

    const gcd = computeGcd(resNum, resDen);
    const simpNum = resNum / gcd;
    const simpDen = resDen / gcd;

    return { resNum, resDen, simpNum, simpDen, step };
  };

  const fracResult = calculateFraction();

  // LCM & HCF calculations
  const safeA = Math.abs(numA) || 1;
  const safeB = Math.abs(numB) || 1;
  const hcfVal = computeGcd(safeA, safeB);
  const lcmVal = computeLcm(safeA, safeB);
  const productVal = safeA * safeB;
  const theoremProduct = hcfVal * lcmVal;

  const handleSelectDrill = (qId: string, optIdx: number) => {
    if (drillAnswers[qId] !== undefined) return;
    setDrillAnswers((prev) => ({ ...prev, [qId]: optIdx }));
    setShowExplanation((prev) => ({ ...prev, [qId]: true }));
  };

  const handleResetDrill = () => {
    setDrillAnswers({});
    setShowExplanation({});
  };

  const drillScore = Object.entries(drillAnswers).filter(([id, ans]) => {
    const q = MATH_DRILL_QUESTIONS.find((item) => item.id === id);
    return q && q.correctIndex === ans;
  }).length;

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-emerald-200/80 dark:border-emerald-900/60 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 my-8">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-900 text-white p-5 sm:p-7 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-emerald-100 text-xs font-bold tracking-wide uppercase mb-2.5 backdrop-blur-xs border border-white/20">
              <Calculator className="w-3.5 h-3.5 text-amber-300" />
              <span>STEDA &amp; Sukkur IBA BPS-16/17 Mathematics Studio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
              Arithmetic &amp; Number Systems Studio
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base mt-1.5 max-w-2xl leading-relaxed">
              Master 2.1 Number System, 2.2 Decimals, 2.3 Fractions, 2.4 LCM &amp; 2.5 HCF with live interactive divisibility testers, prime factorizers, step-by-step fraction solvers, and the Master Theorem (LCM &times; HCF = A &times; B).
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto bg-black/20 p-1.5 rounded-xl border border-white/10 backdrop-blur-xs">
            <span className="text-xs font-semibold px-2 py-1 text-emerald-200">Sindhi / Urdu:</span>
            <span className="text-xs font-bold text-amber-300 px-2 py-1 bg-white/10 rounded-lg">
              حسابي بنياد: عدد، ڏھائي، اڻپور، ذ.ا ۽ ع.ا
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/15 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('numbers')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition cursor-pointer ${
              activeTab === 'numbers'
                ? 'bg-white text-emerald-900 shadow-md font-black'
                : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Hash className="w-4 h-4 text-emerald-600" />
            <span>2.1 Number System &amp; Divisibility</span>
          </button>

          <button
            onClick={() => setActiveTab('decimals')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition cursor-pointer ${
              activeTab === 'decimals'
                ? 'bg-white text-emerald-900 shadow-md font-black'
                : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Percent className="w-4 h-4 text-teal-500" />
            <span>2.2 Decimals &amp; Recurring Conversions</span>
          </button>

          <button
            onClick={() => setActiveTab('fractions')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition cursor-pointer ${
              activeTab === 'fractions'
                ? 'bg-white text-emerald-900 shadow-md font-black'
                : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Divide className="w-4 h-4 text-amber-400" />
            <span>2.3 Fractions Arithmetic Lab</span>
          </button>

          <button
            onClick={() => setActiveTab('lcmhcf')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition cursor-pointer ${
              activeTab === 'lcmhcf'
                ? 'bg-white text-emerald-900 shadow-md font-black'
                : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>2.4 &amp; 2.5 LCM &amp; HCF Visualizer</span>
          </button>

          <button
            onClick={() => setActiveTab('drill')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition cursor-pointer ${
              activeTab === 'drill'
                ? 'bg-white text-emerald-900 shadow-md font-black'
                : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Award className="w-4 h-4 text-amber-300" />
            <span>IBA Exam Drill ({MATH_DRILL_QUESTIONS.length} MCQs)</span>
          </button>
        </div>
      </div>

      {/* Main Container Body */}
      <div className="p-4 sm:p-6 lg:p-8 bg-slate-50/50 dark:bg-slate-900/50 min-h-[550px]">
        {/* TAB 1: 2.1 NUMBER SYSTEM & DIVISIBILITY */}
        {activeTab === 'numbers' && (
          <div className="space-y-6">
            {/* Interactive Number Input */}
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Hash className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span>Live Number Property Classifier &amp; Divisibility Inspector</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Type any positive integer to test for Prime vs Composite, Divisors, Prime Factorization, and all STS Divisibility Rules (2 to 11).
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700/60 px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-600">
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Test Number:</span>
                    <input
                      type="number"
                      min={1}
                      max={999999}
                      value={inputNum}
                      onChange={(e) => setInputNum(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-24 px-2 py-1 text-sm font-black text-emerald-700 dark:text-emerald-300 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-600 text-center focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  {/* Preset quick buttons */}
                  <div className="hidden lg:flex items-center gap-1.5">
                    <span className="text-[11px] font-bold text-slate-400">Presets:</span>
                    {[2, 7, 36, 120, 1001].map((n) => (
                      <button
                        key={n}
                        onClick={() => setInputNum(n)}
                        className={`px-2 py-1 rounded-md text-xs font-bold transition cursor-pointer ${
                          inputNum === n
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Number Classification Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 mt-5 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-center">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Parity (جفت / طاق)</div>
                  <div className={`text-sm font-black mt-1 ${currentNum % 2 === 0 ? 'text-indigo-600 dark:text-indigo-400' : 'text-amber-600 dark:text-amber-400'}`}>
                    {currentNum % 2 === 0 ? 'EVEN (جفت)' : 'ODD (طاق)'}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-center">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Nature (مفرد / مرڪب)</div>
                  <div className={`text-sm font-black mt-1 ${isPrime ? 'text-emerald-600 dark:text-emerald-400' : isComposite ? 'text-purple-600 dark:text-purple-400' : 'text-slate-500'}`}>
                    {isPrime ? 'PRIME (مفرد)' : isComposite ? 'COMPOSITE (مرڪب)' : 'NEITHER (1)'}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-center">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Natural / Whole</div>
                  <div className="text-sm font-black text-emerald-600 dark:text-emerald-400 mt-1">
                    YES (N &amp; W)
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-center">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Total Divisors</div>
                  <div className="text-sm font-black text-blue-600 dark:text-blue-400 mt-1">
                    {allDivisors.length} Divisors
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-center col-span-2">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Prime Factorization</div>
                  <div className="text-xs font-mono font-black text-emerald-700 dark:text-emerald-300 mt-1 truncate">
                    {primeFactors.length > 0 ? primeFactors.join(' × ') : 'None (1)'}
                  </div>
                </div>
              </div>

              {/* All Factors List */}
              <div className="mt-4 p-3 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200/50 dark:border-emerald-800/40">
                <span className="text-xs font-bold text-emerald-900 dark:text-emerald-200 mr-2">All Divisors of {currentNum}:</span>
                <span className="text-xs font-mono text-emerald-700 dark:text-emerald-300">
                  {allDivisors.join(', ')}
                </span>
              </div>
            </div>

            {/* Divisibility Rules Interactive Grid */}
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <Divide className="w-4 h-4 text-emerald-500" />
                  <span>Comprehensive Divisibility Test Results for {currentNum} (قاعدا وندجا)</span>
                </h4>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full">
                  STS Core Standard
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {Object.entries(divisibilityRules).map(([divisor, res]) => (
                  <div
                    key={divisor}
                    className={`p-3.5 rounded-xl border transition-all ${
                      res.pass
                        ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                        : 'bg-rose-50/40 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-black text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                        <span className="w-6 h-6 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-bold text-xs text-slate-900 dark:text-white">
                          ÷{divisor}
                        </span>
                        <span>Divisible by {divisor}</span>
                      </span>
                      {res.pass ? (
                        <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> YES
                        </span>
                      ) : (
                        <span className="text-xs font-extrabold text-rose-500 dark:text-rose-400 flex items-center gap-1">
                          <XCircle className="w-4 h-4" /> NO
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-1 leading-snug">
                      <strong>Rule:</strong> {res.rule}
                    </p>
                    <p className="text-[11px] font-medium text-slate-700 dark:text-slate-300 bg-white/70 dark:bg-slate-800/80 px-2 py-1 rounded-md border border-slate-200/50 dark:border-slate-700/50">
                      {res.check}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* High-Yield Number Hierarchy Guide */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 p-4 rounded-xl border border-indigo-200 dark:border-indigo-800/60">
                <h5 className="text-xs font-black uppercase tracking-wider text-indigo-900 dark:text-indigo-200 flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-indigo-500" />
                  <span>Number Sets Hierarchy (Sindh DCAR Curriculum)</span>
                </h5>
                <ul className="text-xs text-indigo-950 dark:text-indigo-200 space-y-1.5">
                  <li><strong>Natural Numbers (N):</strong> Counting numbers {`{1, 2, 3, 4, ...}`}. (طبيعي عدد)</li>
                  <li><strong>Whole Numbers (W):</strong> Natural numbers including zero {`{0, 1, 2, 3, ...}`}. (سمورا عدد)</li>
                  <li><strong>Integers (Z):</strong> Whole numbers and their negative opposites {`{..., -2, -1, 0, 1, 2, ...}`}. (صحيح عدد)</li>
                  <li><strong>Rational Numbers (Q):</strong> Numbers expressible as p/q where q &ne; 0. (ناطق عدد)</li>
                  <li><strong>Irrational Numbers (Q&apos;):</strong> Non-terminating, non-repeating numbers like &radic;2, &radic;3, &pi;. (غير ناطق عدد)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-4 rounded-xl border border-amber-200 dark:border-amber-800/60">
                <h5 className="text-xs font-black uppercase tracking-wider text-amber-900 dark:text-amber-200 flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Sukkur IBA Exam Traps on Number Systems</span>
                </h5>
                <ul className="text-xs text-amber-950 dark:text-amber-200 space-y-1.5">
                  <li><strong>Is 1 prime?</strong> NEVER. A prime number must have exactly two distinct positive divisors. 1 has only one divisor (itself).</li>
                  <li><strong>Smallest Prime:</strong> 2 (which is also the only even prime number).</li>
                  <li><strong>Is 0 positive or negative?</strong> 0 is neither positive nor negative, but it IS an even integer.</li>
                  <li><strong>Co-prime numbers:</strong> Two numbers whose HCF is 1 (e.g., 8 and 9 are co-prime even though both are composite).</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 2.2 DECIMALS & RECURRING BAR CONVERSIONS */}
        {activeTab === 'decimals' && (
          <div className="space-y-6">
            {/* Decimals Theory Banner */}
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Percent className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    <span>2.2 Decimals: Terminating, Non-Terminating &amp; Recurring Fractions</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Class 1 to 8 DCAR curriculum: converting terminating and recurring decimals into vulgar fractions (p/q).
                  </p>
                </div>
              </div>

              {/* 3 Categories of Decimals Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                <div className="p-4 rounded-xl bg-teal-50/60 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800">
                  <div className="text-xs font-black text-teal-900 dark:text-teal-200 uppercase tracking-wide">
                    1. Terminating Decimals (ختم ٿيندڙ ڏھائي)
                  </div>
                  <p className="text-xs text-teal-800 dark:text-teal-300 mt-1">
                    Decimals with a finite number of digits after the decimal point. The denominator in simplest form has only prime factors of <strong>2</strong> and/or <strong>5</strong>.
                  </p>
                  <div className="mt-3 p-2 bg-white dark:bg-slate-800 rounded-lg text-xs font-mono font-bold text-teal-700 dark:text-teal-300">
                    3/8 = 0.375 | 7/20 = 0.35 | 1/4 = 0.25
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
                  <div className="text-xs font-black text-purple-900 dark:text-purple-200 uppercase tracking-wide">
                    2. Non-Terminating Recurring (تڪراري ڏھائي)
                  </div>
                  <p className="text-xs text-purple-800 dark:text-purple-300 mt-1">
                    A digit or block of digits repeats infinitely. These are ALWAYS <strong>Rational Numbers</strong> (Q) and can be converted to p/q.
                  </p>
                  <div className="mt-3 p-2 bg-white dark:bg-slate-800 rounded-lg text-xs font-mono font-bold text-purple-700 dark:text-purple-300">
                    1/3 = 0.333... (0.3̄) | 2/11 = 0.1818... (0.18̄)
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800">
                  <div className="text-xs font-black text-rose-900 dark:text-rose-200 uppercase tracking-wide">
                    3. Non-Terminating Non-Recurring (غير تڪراري)
                  </div>
                  <p className="text-xs text-rose-800 dark:text-rose-300 mt-1">
                    Decimals that neither terminate nor repeat in any cyclical pattern. These represent <strong>Irrational Numbers</strong> (Q&apos;).
                  </p>
                  <div className="mt-3 p-2 bg-white dark:bg-slate-800 rounded-lg text-xs font-mono font-bold text-rose-700 dark:text-rose-300">
                    &pi; &asymp; 3.14159... | &radic;2 &asymp; 1.41421...
                  </div>
                </div>
              </div>
            </div>

            {/* Recurring Decimal to Fraction Algorithm Lab */}
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span>The Recurring Bar (p/q) Conversion Master Formula</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="text-xs font-bold text-slate-500 uppercase">Case A: Pure Single Repeating Digit</div>
                  <div className="text-lg font-black text-emerald-600 dark:text-emerald-400 mt-1">0.ā = a / 9</div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 mt-2 space-y-1">
                    <p>&bull; 0.3̄ = 3/9 = 1/3</p>
                    <p>&bull; 0.7̄ = 7/9</p>
                    <p>&bull; 0.6̄ = 6/9 = 2/3</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="text-xs font-bold text-slate-500 uppercase">Case B: Pure Double Repeating Digits</div>
                  <div className="text-lg font-black text-indigo-600 dark:text-indigo-400 mt-1">0.ab̄ = ab / 99</div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 mt-2 space-y-1">
                    <p>&bull; 0.27̄ = 27/99 = 3/11</p>
                    <p>&bull; 0.45̄ = 45/99 = 5/11</p>
                    <p>&bull; 0.36̄ = 36/99 = 4/11</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="text-xs font-bold text-slate-500 uppercase">Case C: Mixed Recurring Decimal</div>
                  <div className="text-lg font-black text-purple-600 dark:text-purple-400 mt-1">0.a b̄ = (ab - a) / 90</div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 mt-2 space-y-1">
                    <p>&bull; 0.16̄ = (16 - 1) / 90 = 15/90 = 1/6</p>
                    <p>&bull; 0.23̄ = (23 - 2) / 90 = 21/90 = 7/30</p>
                    <p>&bull; 0.47̄ = (47 - 4) / 90 = 43/90</p>
                  </div>
                </div>
              </div>

              {/* Mathematical Proof Accordion Box */}
              <div className="mt-4 p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/60 dark:border-teal-800/50">
                <h5 className="text-xs font-bold text-teal-950 dark:text-teal-200 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-teal-600" />
                  <span>Algebraic Proof Technique (Standard Class 8 Sindh Textbook Question):</span>
                </h5>
                <p className="text-xs text-teal-800 dark:text-teal-300 mt-1 leading-relaxed">
                  Convert x = 0.555... to a fraction:<br />
                  Step 1: Let x = 0.555... (Equation 1)<br />
                  Step 2: Multiply by 10 (since 1 digit repeats): 10x = 5.555... (Equation 2)<br />
                  Step 3: Subtract Equation 1 from Equation 2: 10x - x = 5.555... - 0.555... &rarr; 9x = 5 &rarr; x = 5/9.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: 2.3 FRACTIONS ARITHMETIC LAB */}
        {activeTab === 'fractions' && (
          <div className="space-y-6">
            {/* Fractions Interactive Operation Studio */}
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Divide className="w-5 h-5 text-amber-500" />
                    <span>Live 2-Fraction Arithmetic Solver with Step-by-Step LCM Reduction</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Perform Addition, Subtraction, Multiplication, and Invert-Division on proper, improper, or mixed fractions.
                  </p>
                </div>
              </div>

              {/* Fraction Equation Visualizer */}
              <div className="p-6 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                {/* Fraction 1 */}
                <div className="flex flex-col items-center">
                  <input
                    type="number"
                    value={fracState.num1}
                    onChange={(e) => setFracState({ ...fracState, num1: parseInt(e.target.value) || 0 })}
                    className="w-16 h-10 text-center font-black text-base bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  />
                  <div className="w-16 h-0.5 bg-slate-400 dark:bg-slate-500 my-1.5" />
                  <input
                    type="number"
                    min={1}
                    value={fracState.den1}
                    onChange={(e) => setFracState({ ...fracState, den1: parseInt(e.target.value) || 1 })}
                    className="w-16 h-10 text-center font-black text-base bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  />
                </div>

                {/* Operator Selector */}
                <div className="flex flex-col gap-1">
                  {(['+', '-', '×', '÷'] as const).map((op) => (
                    <button
                      key={op}
                      onClick={() => setFracState({ ...fracState, op })}
                      className={`w-9 h-9 rounded-lg font-black text-base transition cursor-pointer flex items-center justify-center ${
                        fracState.op === op
                          ? 'bg-amber-500 text-white shadow-md'
                          : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {op}
                    </button>
                  ))}
                </div>

                {/* Fraction 2 */}
                <div className="flex flex-col items-center">
                  <input
                    type="number"
                    value={fracState.num2}
                    onChange={(e) => setFracState({ ...fracState, num2: parseInt(e.target.value) || 0 })}
                    className="w-16 h-10 text-center font-black text-base bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  />
                  <div className="w-16 h-0.5 bg-slate-400 dark:bg-slate-500 my-1.5" />
                  <input
                    type="number"
                    min={1}
                    value={fracState.den2}
                    onChange={(e) => setFracState({ ...fracState, den2: parseInt(e.target.value) || 1 })}
                    className="w-16 h-10 text-center font-black text-base bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  />
                </div>

                <div className="text-2xl font-black text-slate-400">=</div>

                {/* Simplified Result */}
                <div className="flex flex-col items-center p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-300 dark:border-amber-800">
                  <span className="text-lg font-black text-amber-700 dark:text-amber-300">
                    {fracResult.simpNum}
                  </span>
                  <div className="w-16 h-0.5 bg-amber-500 my-1" />
                  <span className="text-lg font-black text-amber-700 dark:text-amber-300">
                    {fracResult.simpDen}
                  </span>
                </div>

                {/* Decimal Equivalent */}
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 p-2 rounded-lg border border-slate-200 dark:border-slate-700">
                  Decimal: <strong className="text-slate-800 dark:text-slate-100">{(fracResult.simpNum / fracResult.simpDen).toFixed(4)}</strong>
                </div>
              </div>

              {/* Step by Step Breakdown */}
              <div className="mt-4 p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/50">
                <div className="text-xs font-black uppercase text-amber-900 dark:text-amber-200 tracking-wide mb-1">
                  Step-by-Step Pedagogical Method:
                </div>
                <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed font-mono">
                  {fracResult.step}
                </p>
                <div className="mt-2 text-[11px] text-amber-700 dark:text-amber-400">
                  Reduced from {fracResult.resNum}/{fracResult.resDen} to simplest form {fracResult.simpNum}/{fracResult.simpDen} by dividing both by HCF = {computeGcd(fracResult.resNum, fracResult.resDen)}.
                </div>
              </div>
            </div>

            {/* Types of Fractions Reference Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase">Proper Fraction (واجب اڻپور)</div>
                <div className="text-base font-black text-slate-800 dark:text-slate-100 mt-1">Numerator &lt; Denominator</div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Value is strictly less than 1. E.g., 3/4, 2/5, 7/9.</p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase">Improper Fraction (غير واجب اڻپور)</div>
                <div className="text-base font-black text-slate-800 dark:text-slate-100 mt-1">Numerator &ge; Denominator</div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Value is 1 or greater. E.g., 7/4, 9/5, 11/3.</p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="text-xs font-black text-purple-600 dark:text-purple-400 uppercase">Mixed Number (مرڪب اڻپور)</div>
                <div className="text-base font-black text-slate-800 dark:text-slate-100 mt-1">Whole Number + Proper Fraction</div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">E.g., 1 3/4 = [(1 × 4) + 3] / 4 = 7/4.</p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="text-xs font-black text-amber-600 dark:text-amber-400 uppercase">Reciprocal / Multiplicative Inverse</div>
                <div className="text-base font-black text-slate-800 dark:text-slate-100 mt-1">Invert: a/b &rarr; b/a</div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Product of any fraction and its reciprocal is always 1.</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: 2.4 & 2.5 LCM & HCF VISUALIZER */}
        {activeTab === 'lcmhcf' && (
          <div className="space-y-6">
            {/* Input Controls */}
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <span>2.4 LCM &amp; 2.5 HCF Master Engine &amp; Product Theorem Proof</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Compare prime factor ladders and verify the core theorem: LCM &times; HCF = A &times; B.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700/60 p-2 rounded-xl border border-slate-300 dark:border-slate-600">
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Number A:</span>
                    <input
                      type="number"
                      min={1}
                      max={9999}
                      value={numA}
                      onChange={(e) => setNumA(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 px-2 py-1 text-sm font-black text-indigo-700 dark:text-indigo-300 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-600 text-center"
                    />
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300 ml-2">Number B:</span>
                    <input
                      type="number"
                      min={1}
                      max={9999}
                      value={numB}
                      onChange={(e) => setNumB(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 px-2 py-1 text-sm font-black text-indigo-700 dark:text-indigo-300 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-600 text-center"
                    />
                  </div>

                  {/* Preset pairs */}
                  <div className="hidden lg:flex items-center gap-1.5">
                    {[
                      { a: 12, b: 18 },
                      { a: 24, b: 36 },
                      { a: 45, b: 75 },
                      { a: 16, b: 24 },
                    ].map((pair, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setNumA(pair.a);
                          setNumB(pair.b);
                        }}
                        className="px-2 py-1 rounded-md text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition cursor-pointer"
                      >
                        {pair.a} &amp; {pair.b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* HCF & LCM Hero Display */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 text-center">
                  <div className="text-[11px] font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider">
                    HCF / GCD (عاد اعظم)
                  </div>
                  <div className="text-3xl font-black text-purple-800 dark:text-purple-200 mt-1">
                    {hcfVal}
                  </div>
                  <p className="text-[11px] text-purple-600 dark:text-purple-400 mt-1">
                    Highest common divisor dividing both {safeA} and {safeB}.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 text-center">
                  <div className="text-[11px] font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
                    LCM (ذواضعاف اقل)
                  </div>
                  <div className="text-3xl font-black text-indigo-800 dark:text-indigo-200 mt-1">
                    {lcmVal}
                  </div>
                  <p className="text-[11px] text-indigo-600 dark:text-indigo-400 mt-1">
                    Smallest multiple common to both {safeA} and {safeB}.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-center">
                  <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
                    Product of Numbers (A × B)
                  </div>
                  <div className="text-2xl font-black text-emerald-800 dark:text-emerald-200 mt-1">
                    {productVal.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1">
                    {safeA} × {safeB} = {productVal.toLocaleString()}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-center">
                  <div className="text-[11px] font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider">
                    HCF × LCM Product
                  </div>
                  <div className="text-2xl font-black text-amber-800 dark:text-amber-200 mt-1">
                    {theoremProduct.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-amber-600 dark:text-amber-400 mt-1">
                    {hcfVal} × {lcmVal} = {theoremProduct.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Master Theorem Verification Banner */}
              <div className="mt-5 p-4 bg-emerald-100/60 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 rounded-xl flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs font-black text-emerald-900 dark:text-emerald-200">
                    Master Theorem Verified: Product of Numbers (A &times; B) = LCM &times; HCF
                  </div>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300 mt-0.5">
                    {safeA} &times; {safeB} = {productVal.toLocaleString()} is identical to {lcmVal} &times; {hcfVal} = {theoremProduct.toLocaleString()}. If STEDA gives any 3 terms, you can instantly find the 4th!
                  </p>
                </div>
              </div>
            </div>

            {/* Fractions LCM & HCF Rule Box */}
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                <FileSpreadsheet className="w-4 h-4 text-indigo-500" />
                <span>High-Yield STS Formula: LCM &amp; HCF of Fractions</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-indigo-50/50 dark:bg-indigo-950/30 rounded-xl border border-indigo-200 dark:border-indigo-800">
                  <div className="text-xs font-black text-indigo-900 dark:text-indigo-200 uppercase">
                    LCM of Fractions Formula
                  </div>
                  <div className="text-sm font-mono font-black text-indigo-700 dark:text-indigo-300 mt-1">
                    LCM = LCM of Numerators / HCF of Denominators
                  </div>
                  <p className="text-xs text-indigo-800 dark:text-indigo-400 mt-2">
                    Example: Find LCM of 2/3 and 4/5.<br />
                    • Numerators = 2, 4 ➔ LCM(2, 4) = 4.<br />
                    • Denominators = 3, 5 ➔ HCF(3, 5) = 1.<br />
                    • <strong>LCM = 4 / 1 = 4</strong>.
                  </p>
                </div>

                <div className="p-4 bg-purple-50/50 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
                  <div className="text-xs font-black text-purple-900 dark:text-purple-200 uppercase">
                    HCF of Fractions Formula
                  </div>
                  <div className="text-sm font-mono font-black text-purple-700 dark:text-purple-300 mt-1">
                    HCF = HCF of Numerators / LCM of Denominators
                  </div>
                  <p className="text-xs text-purple-800 dark:text-purple-400 mt-2">
                    Example: Find HCF of 2/3 and 8/9.<br />
                    • Numerators = 2, 8 ➔ HCF(2, 8) = 2.<br />
                    • Denominators = 3, 9 ➔ LCM(3, 9) = 9.<br />
                    • <strong>HCF = 2 / 9</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: DRILL (EXAM MCQs) */}
        {activeTab === 'drill' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Sukkur IBA &amp; STEDA Diagnostic Drill (Topics 2.1 to 2.5)</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Real exam-style quantitative questions with step-by-step mathematical solutions.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200">
                  Score: <strong className="text-emerald-600 dark:text-emerald-400">{drillScore}</strong> / {MATH_DRILL_QUESTIONS.length}
                </div>
                <button
                  onClick={handleResetDrill}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Drill</span>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {MATH_DRILL_QUESTIONS.map((q, qIndex) => {
                const isAnswered = drillAnswers[q.id] !== undefined;
                const selectedOption = drillAnswers[q.id];
                const isCorrect = isAnswered && selectedOption === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                        Question {qIndex + 1} • {q.topic}
                      </span>
                      {isAnswered && (
                        <span
                          className={`text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                            isCorrect
                              ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                              : 'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300'
                          }`}
                        >
                          {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          {isCorrect ? 'Correct' : 'Incorrect'}
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                      {q.question}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle =
                          'bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/60';
                        if (isAnswered) {
                          if (optIdx === q.correctIndex) {
                            btnStyle = 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 border-emerald-400 font-bold';
                          } else if (optIdx === selectedOption) {
                            btnStyle = 'bg-rose-100 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 border-rose-400';
                          } else {
                            btnStyle = 'opacity-50 border-slate-200 dark:border-slate-700';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={isAnswered}
                            onClick={() => handleSelectDrill(q.id, optIdx)}
                            className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold text-left transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {isAnswered && optIdx === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                            )}
                            {isAnswered && optIdx === selectedOption && optIdx !== q.correctIndex && (
                              <XCircle className="w-4 h-4 text-rose-500 shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation Box */}
                    {isAnswered && (
                      <div className="mt-3 p-3.5 bg-emerald-50/70 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800/60 text-xs space-y-1">
                        <div className="font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                          <span>Solution &amp; Explanation:</span>
                        </div>
                        <p className="text-emerald-800 dark:text-emerald-300 leading-relaxed">
                          {q.explanation}
                        </p>
                        <div className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 mt-1 pt-1 border-t border-emerald-200/50 dark:border-emerald-800/50">
                          💡 <strong>Examiner Tip:</strong> {q.examTip}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
