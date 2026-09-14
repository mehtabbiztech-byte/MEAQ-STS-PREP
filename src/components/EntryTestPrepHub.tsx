import React, { useState, useMemo } from 'react';
import { 
  Target, 
  Sparkles, 
  Award, 
  CheckCircle, 
  Play, 
  Clock, 
  Brain, 
  Calculator, 
  Atom, 
  FlaskConical, 
  Dna, 
  Search, 
  ChevronRight, 
  FileText, 
  Volume2, 
  VolumeX, 
  ShieldAlert, 
  HelpCircle, 
  TrendingUp, 
  GraduationCap, 
  Scale, 
  Binary, 
  Languages, 
  Zap, 
  Flame, 
  CheckCircle2, 
  BookOpen, 
  Timer,
  BarChart2
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export interface EntryTestExam {
  id: string;
  name: string;
  shortName: string;
  fullName: string;
  conductingBody: string;
  badge: string;
  color: string;
  targetDegree: string;
  durationMinutes: number;
  totalQuestions: number;
  totalMarks: number;
  negativeMarking: string;
  passingCriteria: string;
  description: string;
  subjects: {
    name: string;
    icon: any;
    weightage: string;
    mcqCount: number;
    color: string;
    topics: {
      title: string;
      subtopics: string[];
      highYield: boolean;
      recurrence: 'Very High' | 'High' | 'Medium';
    }[];
  }[];
  shortcutTips: {
    title: string;
    description: string;
    formula?: string;
  }[];
}

export const ENTRY_TEST_EXAMS: EntryTestExam[] = [
  {
    id: 'mdcat',
    name: 'MDCAT (MBBS & BDS)',
    shortName: 'MDCAT',
    fullName: 'National Medical and Dental Colleges Admission Test',
    conductingBody: 'Pakistan Medical & Dental Council (PMDC) / Admitting Universities (UHS, DUHS, SZABMU, KMU, BUMHS)',
    badge: 'Medical Admissions',
    color: 'from-teal-600 to-emerald-700',
    targetDegree: 'MBBS (Medicine) & BDS (Dental Surgery)',
    durationMinutes: 210,
    totalQuestions: 200,
    totalMarks: 200,
    negativeMarking: 'No Negative Marking (1 Mark per Question)',
    passingCriteria: '55% for MBBS (110/200) | 50% for BDS (100/200)',
    description: 'The premier national admission gateway for all public and private medical colleges across Pakistan. Demands high conceptual clarity and rapid recall in Biology, Chemistry, Physics, English, and Logical Reasoning.',
    subjects: [
      {
        name: 'Biology',
        icon: Dna,
        weightage: '34% (68 MCQs)',
        mcqCount: 68,
        color: 'from-emerald-500 to-green-600',
        topics: [
          { title: 'Cell Biology & Organelles', subtopics: ['Fluid Mosaic Model & Membrane transport', 'Mitochondria, Cristae & ATP generation', 'Endomembrane system (ER, Golgi, Lysosomal storage diseases)', 'Cytoskeleton & Ribosomes (70S vs 80S)'], highYield: true, recurrence: 'Very High' },
          { title: 'Biological Molecules & Enzymes', subtopics: ['Carbohydrates: Monosaccharides, Glycosidic bonds', 'Proteins: Primary to Quaternary structures & peptide bonds', 'Lipids: Phospholipids & Steroids', 'Enzyme kinetics: Km, Vmax, Competitive vs Non-competitive inhibition'], highYield: true, recurrence: 'Very High' },
          { title: 'Bioenergetics & Respiration', subtopics: ['Photosystems I & II, Z-scheme photophosphorylation', 'Calvin cycle & RuBisCO efficiency', 'Glycolysis, Citric Acid (Krebs) cycle & ATP accounting', 'Electron Transport Chain & Chemiosmotic ATP synthesis'], highYield: true, recurrence: 'Very High' },
          { title: 'Human Coordination (Nervous & Chemical)', subtopics: ['Resting membrane potential (-70 mV) & Action potential propagation', 'Neurotransmitters (Acetylcholine, Dopamine, GABA)', 'Brain parts: Hypothalamus, Cerebellum, Medulla functions', 'Endocrine feedback: Pituitary, Thyroid, Adrenal, Pancreatic hormones'], highYield: true, recurrence: 'Very High' },
          { title: 'Human Circulation & Immunity', subtopics: ['Cardiac cycle phases, ECG waves (P, QRS, T)', 'Blood vessels pressure dynamics & Capillary exchange', 'Innate vs Adaptive immunity (B cells, T cells, Antibodies IgM, IgG, IgA)'], highYield: true, recurrence: 'Very High' },
          { title: 'Genetics, DNA & Molecular Biology', subtopics: ['DNA structure Watson-Crick model & Semi-conservative replication', 'Transcription & RNA Processing', 'Genetic code properties (Triplet, Degenerate, Universal)', 'Translation & Post-translational modifications'], highYield: true, recurrence: 'Very High' },
          { title: 'Reproduction & Development', subtopics: ['Spermatogenesis & Oogenesis comparisons', 'Human menstrual cycle hormonal regulation (FSH, LH, Estrogen, Progesterone)', 'Fertilization & Early embryonic cleavage'], highYield: false, recurrence: 'High' },
          { title: 'Evolution & Population Genetics', subtopics: ['Darwin\'s Natural Selection vs Lamarckism', 'Hardy-Weinberg equilibrium calculation p² + 2pq + q² = 1', 'Genetic drift, Gene flow & Speciation mechanisms'], highYield: false, recurrence: 'Medium' },
        ]
      },
      {
        name: 'Chemistry',
        icon: FlaskConical,
        weightage: '27% (54 MCQs)',
        mcqCount: 54,
        color: 'from-teal-500 to-cyan-600',
        topics: [
          { title: 'Stoichiometry & Basic Concepts', subtopics: ['Mole concept, Avogadro\'s number & Molar volume', 'Limiting reactant calculations', 'Percentage yield & Empirical formula determination'], highYield: true, recurrence: 'Very High' },
          { title: 'Atomic Structure & Quantum Numbers', subtopics: ['Quantum numbers n, l, m, s and subshell designations', 'Electronic configuration rules (Aufbau, Hund, Pauli)', 'Hydrogen spectrum series (Lyman, Balmer, Paschen)'], highYield: true, recurrence: 'Very High' },
          { title: 'Chemical Bonding & Molecular Shapes', subtopics: ['VSEPR theory geometries & bond angles (CH4, NH3, H2O, BF3)', 'Hybridization (sp³, sp², sp) & Dipole moments', 'Intermolecular forces (Hydrogen bonding in DNA & HF)'], highYield: true, recurrence: 'Very High' },
          { title: 'States of Matter & Gas Laws', subtopics: ['Ideal gas equation PV = nRT & Dalton\'s law of partial pressures', 'Graham\'s law of effusion & Van der Waals equation for real gases'], highYield: false, recurrence: 'High' },
          { title: 'Chemical Equilibrium & Acid-Base', subtopics: ['Equilibrium constant Kc, Kp relations', 'Le Chatelier\'s principle applications (Haber & Contact processes)', 'Buffer solutions: Henderson-Hasselbalch equation & pH calculations'], highYield: true, recurrence: 'Very High' },
          { title: 'Reaction Kinetics & Energetics', subtopics: ['Rate law, order of reaction & half-life equations', 'Arrhenius equation & activation energy Ea', 'Hess\'s law of constant heat summation & Enthalpies of reaction'], highYield: true, recurrence: 'Very High' },
          { title: 'Organic Reaction Mechanisms', subtopics: ['Electrophilic aromatic substitution in Benzene (Nitration, Halogenation, Friedel-Crafts)', 'Alkyl Halides: SN1 vs SN2 nucleophilic substitutions', 'Elimination reactions (E1 vs E2) & Markovnikov\'s rule', 'Carbonyl chemistry: Aldol condensation, Cannizzaro reaction, Haloform test'], highYield: true, recurrence: 'Very High' },
          { title: 'Transition Metals & Coordination Compounds', subtopics: ['d-Block electronic configurations & oxidation states', 'Colored complexes & crystal field splitting', 'Ligands, coordination number & IUPAC naming'], highYield: false, recurrence: 'High' }
        ]
      },
      {
        name: 'Physics',
        icon: Atom,
        weightage: '27% (54 MCQs)',
        mcqCount: 54,
        color: 'from-blue-500 to-indigo-600',
        topics: [
          { title: 'Force, Motion & Momentum', subtopics: ['Newton\'s laws of motion & Momentum conservation', 'Elastic collisions in 1D & relative velocities', 'Projectile motion: Range, Maximum height, Time of flight equations'], highYield: true, recurrence: 'Very High' },
          { title: 'Work, Energy & Power', subtopics: ['Work-Energy theorem W = ΔK.E.', 'Gravitational potential energy & Escape velocity ve = √(2gR)', 'Power P = F·v and mechanical efficiency'], highYield: true, recurrence: 'Very High' },
          { title: 'Circular Motion & Oscillations', subtopics: ['Centripetal acceleration ac = v²/r = rω²', 'Simple Harmonic Motion (SHM): Pendulum & Spring-mass periods', 'Resonance, Damping & Wave velocity v = fλ'], highYield: true, recurrence: 'Very High' },
          { title: 'Thermodynamics & Heat', subtopics: ['First Law of Thermodynamics ΔQ = ΔU + W', 'Isothermal, Adiabatic, Isobaric, Isochoric processes', 'Carnot engine maximum efficiency η = 1 - T2/T1'], highYield: true, recurrence: 'Very High' },
          { title: 'Electrostatics & Current Electricity', subtopics: ['Coulomb\'s Law & Electric potential gradient E = -ΔV/Δr', 'Capacitors in series and parallel & Energy stored U = ½CV²', 'Ohm\'s law, Resistivity temperature dependence, Kirchhoff\'s laws', 'Wheatstone bridge balance condition & Potentiometer'], highYield: true, recurrence: 'Very High' },
          { title: 'Electromagnetism & Induction', subtopics: ['Magnetic force on charge F = q(v × B) & current F = I(L × B)', 'Faraday\'s law of induction ε = -N(ΔΦ/Δt) & Lenz\'s law', 'Transformers (Vs/Vp = Ns/Np) & Eddy currents'], highYield: true, recurrence: 'Very High' },
          { title: 'Modern & Nuclear Physics', subtopics: ['Photoelectric effect: Einstein\'s equation hf = Φ + K.E.max', 'De Broglie wavelength λ = h/p & Bohr atomic model', 'Radioactive decay law, Half-life T½ = 0.693/λ, Mass defect & Binding energy'], highYield: true, recurrence: 'Very High' }
        ]
      },
      {
        name: 'English Language',
        icon: Languages,
        weightage: '9% (18 MCQs)',
        mcqCount: 18,
        color: 'from-violet-500 to-purple-600',
        topics: [
          { title: 'Grammar Rules & Sentence Correction', subtopics: ['Subject-Verb Agreement with compound & collective subjects', 'Pronoun-Antecedent agreement', 'Dangling and misplaced modifiers', 'Parallel structure in sentences'], highYield: true, recurrence: 'Very High' },
          { title: 'Vocabulary & Contextual Usage', subtopics: ['PMDC high-frequency 400 wordlist (Synonyms & Antonyms)', 'Context clues & Collocations in sentences', 'Confusing word pairs (Affect/Effect, Principal/Principle)'], highYield: true, recurrence: 'Very High' },
          { title: 'Prepositions & Tenses', subtopics: ['Appropriate and phrasal prepositions', 'Conditional sentences (Zero, First, Second, Third conditionals)'], highYield: true, recurrence: 'High' }
        ]
      },
      {
        name: 'Logical Reasoning',
        icon: Brain,
        weightage: '3% (6 MCQs)',
        mcqCount: 6,
        color: 'from-amber-500 to-orange-600',
        topics: [
          { title: 'Critical Thinking & Deductions', subtopics: ['Statement and Assumptions evaluation', 'Syllogisms (All A are B, Some B are C)', 'Logical fallacies identification'], highYield: true, recurrence: 'Very High' },
          { title: 'Letter, Number & Symbol Series', subtopics: ['Arithmetic & Geometric progression patterns', 'Alphabetical alternating steps', 'Analogies and Coding-Decoding logic'], highYield: true, recurrence: 'Very High' },
          { title: 'Cause and Effect Analysis', subtopics: ['Independent cause vs Principal effect determination'], highYield: false, recurrence: 'High' }
        ]
      }
    ],
    shortcutTips: [
      { title: 'MDCAT Speed Calculation: pH of Weak Acid', description: 'pH = ½[pKa - log(C)]. For 0.1 M Acetic acid (pKa = 4.74): pH = ½[4.74 - (-1)] = 2.87 in 10 seconds without quadratic solving.', formula: 'pH = ½[pKa - log(C)]' },
      { title: 'Carnot Efficiency Approximation', description: 'Always convert temperatures strictly to Kelvin before calculating η = (TH - TC) / TH. E.g., between 127°C (400K) and 27°C (300K), efficiency is (400-300)/400 = 25%.', formula: 'η = (TH - TC) / TH' },
      { title: 'Projectile Max Height vs Range Ratio', description: 'For projectile fired at angle θ: R = 4H cotθ. If Range equals Maximum Height (R = H), then tanθ = 4, so launch angle θ ≈ 76°.', formula: 'R = 4H cotθ' },
      { title: 'De Broglie Wavelength of Electron', description: 'Accelerated through potential difference V volts: λ = 1.227 / √V nm (or 12.27 / √V Å). For V = 100V, λ = 1.227 / 10 = 0.1227 nm instantly.', formula: 'λ = 1.227 / √V nm' }
    ]
  },
  {
    id: 'ecat',
    name: 'ECAT (Engineering & UET)',
    shortName: 'ECAT',
    fullName: 'Combined Engineering Colleges Admission Test',
    conductingBody: 'University of Engineering & Technology (UET Lahore) & Provincial Technical Universities',
    badge: 'Engineering Admissions',
    color: 'from-sky-600 to-blue-800',
    targetDegree: 'BSc Engineering (Electrical, Mechanical, Civil, Computer, Software, Chemical)',
    durationMinutes: 100,
    totalQuestions: 100,
    totalMarks: 400,
    negativeMarking: '+4 for Correct, -1 for Incorrect (25% Negative Marking Penalty)',
    passingCriteria: 'Merit-based ranking. Top university seats require 65%+ ECAT score.',
    description: 'High-velocity calculation-intensive entrance exam for Pakistan\'s premier engineering colleges. Penalizes guessing with -1 mark deduction per wrong answer. Speed mathematics and numerical physics mastery are mandatory.',
    subjects: [
      {
        name: 'Mathematics',
        icon: Calculator,
        weightage: '30% (30 MCQs = 120 Marks)',
        mcqCount: 30,
        color: 'from-amber-500 to-orange-600',
        topics: [
          { title: 'Functions, Limits & Continuity', subtopics: ['L\'Hôpital\'s Rule for 0/0 and ∞/∞ indeterminate forms', 'Standard limit lim(x→0) sinx/x = 1 and exponential limits', 'Piecewise continuous functions evaluation'], highYield: true, recurrence: 'Very High' },
          { title: 'Differentiation & Applications', subtopics: ['Chain rule, Implicit differentiation, Parametric derivatives', 'Equation of Tangents and Normals to curves', 'Maxima, Minima, Points of Inflection & Rate of change word problems'], highYield: true, recurrence: 'Very High' },
          { title: 'Integration & Area Under Curves', subtopics: ['Integration by parts (ILATE shortcut method)', 'Definite integrals shortcut properties & symmetry', 'Area bounded between parabolas, lines, and coordinate axes', 'First-order differential equations separation of variables'], highYield: true, recurrence: 'Very High' },
          { title: 'Analytical Geometry of Straight Lines', subtopics: ['Perpendicular distance from point to line d = |ax1 + by1 + c| / √(a² + b²)', 'Angle between lines tanθ = (m2 - m1) / (1 + m1m2)', 'Pair of straight lines & homogeneous second-degree equations'], highYield: true, recurrence: 'Very High' },
          { title: 'Conic Sections (Circle, Parabola, Ellipse, Hyperbola)', subtopics: ['Circle center (-g, -f) and radius r = √(g² + f² - c)', 'Parabola standard forms, focus, vertex, latus rectum length 4a', 'Ellipse and Hyperbola eccentricity formulas e = c/a', 'Equations of tangents to conics (y = mx + c condition)'], highYield: true, recurrence: 'Very High' },
          { title: 'Vectors & 3D Geometry', subtopics: ['Dot product & Cross product geometrical applications', 'Scalar triple product u·(v × w) volume of parallelepiped', 'Direction cosines cos²α + cos²β + cos²γ = 1'], highYield: true, recurrence: 'Very High' },
          { title: 'Matrices, Determinants & Linear Systems', subtopics: ['Determinant shortcut properties without expansion', 'Inverse of matrix & Cramer\'s Rule for rapid 3x3 solving', 'Rank of matrix and homogeneous system trivial solutions'], highYield: false, recurrence: 'High' },
          { title: 'Trigonometric Equations & Identities', subtopics: ['General solution of trigonometric equations', 'Laws of Sines, Cosines, and Tangents for triangles', 'In-circle, Circum-circle, and Escribed circle radius formulas'], highYield: false, recurrence: 'High' }
        ]
      },
      {
        name: 'Physics',
        icon: Atom,
        weightage: '30% (30 MCQs = 120 Marks)',
        mcqCount: 30,
        color: 'from-blue-500 to-indigo-600',
        topics: [
          { title: 'Mechanics & Rotational Dynamics', subtopics: ['Moment of inertia formulas (Ring, Disc, Solid sphere, Cylinder)', 'Conservation of angular momentum L = Iω', 'Rolling down an inclined plane velocities & accelerations'], highYield: true, recurrence: 'Very High' },
          { title: 'Fluid Mechanics & Terminal Velocity', subtopics: ['Stokes\' law F = 6πηrv & Terminal velocity vt calculation', 'Bernoulli\'s equation & Venturi-meter pressure drops', 'Equation of continuity for non-uniform pipes A1v1 = A2v2'], highYield: true, recurrence: 'Very High' },
          { title: 'Waves, Sound & Physical Optics', subtopics: ['Doppler effect frequency shift formulas for all cases', 'Stationary waves in open vs closed organ pipes harmonics', 'Young\'s Double Slit Experiment fringe width y = λL/d changes in medium', 'Diffraction grating line density and order calculations'], highYield: true, recurrence: 'Very High' },
          { title: 'Current Electricity & Circuit Theorems', subtopics: ['Kirchhoff\'s Current (KCL) & Voltage (KVL) loop calculations', 'Wheatstone bridge balance condition R1/R2 = R3/R4', 'Internal resistance of battery & maximum power transfer theorem (R = r)'], highYield: true, recurrence: 'Very High' },
          { title: 'Electromagnetic Induction & AC Circuits', subtopics: ['Lenz\'s law & Motional EMF ε = -vBL', 'RLC series resonance frequency fo = 1 / (2π√LC) and Q-factor', 'Transformer power loss calculations & efficiency'], highYield: true, recurrence: 'Very High' },
          { title: 'Modern Physics & Quantum Radiation', subtopics: ['Photoelectric stopping potential Vo vs frequency graphs', 'Compton shift Δλ = (h/moc)(1 - cosθ)', 'De Broglie wavelength relations with kinetic energy λ = h / √(2mE)'], highYield: true, recurrence: 'Very High' }
        ]
      },
      {
        name: 'Chemistry or Computer Science',
        icon: Binary,
        weightage: '30% (30 MCQs = 120 Marks)',
        mcqCount: 30,
        color: 'from-teal-500 to-emerald-600',
        topics: [
          { title: 'Chemistry: Thermochemistry & Electrochemistry', subtopics: ['Nernst equation for non-standard cell potentials', 'Faraday\'s laws of electrolysis calculation', 'Born-Haber cycle for ionic lattice energy'], highYield: true, recurrence: 'Very High' },
          { title: 'Chemistry: Organic Reaction Mechanisms', subtopics: ['Free radical chlorination of alkanes', 'Markovnikov addition of HBr in presence/absence of peroxides (Kharasch effect)', 'Aldol condensation & Cannizzaro reaction conditions'], highYield: true, recurrence: 'Very High' },
          { title: 'CS: C / C++ Programming & Data Structures', subtopics: ['Pre vs Post increment operators output tracing', 'Pointers, Arrays, and String manipulation in C', 'Recursion vs Iteration execution stacks', 'Time complexity Big-O (Binary search vs Linear search)'], highYield: true, recurrence: 'Very High' },
          { title: 'CS: Databases & SQL', subtopics: ['Normalization (1NF, 2NF, 3NF dependencies)', 'Primary keys, Foreign keys & Referential integrity', 'SELECT queries with GROUP BY and HAVING filters'], highYield: false, recurrence: 'High' }
        ]
      },
      {
        name: 'English Comprehension',
        icon: Languages,
        weightage: '10% (10 MCQs = 40 Marks)',
        mcqCount: 10,
        color: 'from-violet-500 to-purple-600',
        topics: [
          { title: 'Sentence Completion & Error Detection', subtopics: ['Grammar rules: Subject-Verb, Parallelism, Prepositions', 'High-frequency engineering vocabulary and context clues', 'Logical flow in short technical passages'], highYield: true, recurrence: 'High' }
        ]
      }
    ],
    shortcutTips: [
      { title: 'L\'Hôpital\'s Rule for Limits', description: 'When evaluating lim(x→a) f(x)/g(x) giving 0/0 or ∞/∞, immediately differentiate numerator and denominator separately f\'(x)/g\'(x) without quotient rule.', formula: 'lim f(x)/g(x) = lim f\'(x)/g\'(x)' },
      { title: 'Area Between Parabola and Line', description: 'Area enclosed between standard parabola y² = 4ax and line y = mx is given directly by: Area = 8a² / (3m³). Solves in 15 seconds instead of 4 minutes of integration!', formula: 'Area = 8a² / (3m³)' },
      { title: 'Negative Marking Expected Value Strategy', description: 'With +4 for correct and -1 for wrong: If you can eliminate even ONE option (leaving 3), guessing yields EV = ⅓(4) + ⅔(-1) = +0.33 marks! If you eliminate TWO options (leaving 2), EV = ½(4) + ½(-1) = +1.5 marks. ALWAYS guess if you can eliminate at least one option!', formula: 'EV = P(correct)×(+4) - P(wrong)×1' }
    ]
  },
  {
    id: 'nust-net',
    name: 'NUST NET (Engineering, Computing, Business)',
    shortName: 'NUST NET',
    fullName: 'National University of Sciences & Technology Entry Test',
    conductingBody: 'NUST Islamabad',
    badge: 'Top Tech University',
    color: 'from-purple-600 to-indigo-800',
    targetDegree: 'Software Engineering, CS, AI, Data Science, Electrical, Mechanical Engineering',
    durationMinutes: 180,
    totalQuestions: 200,
    totalMarks: 200,
    negativeMarking: 'No Negative Marking (1 Mark per Question)',
    passingCriteria: 'Merit-based (aggregate: 75% NET score + 15% FSc/A-Level + 10% Matric)',
    description: 'The entrance exam for Pakistan\'s highest-ranked engineering university. Known for conceptual depth, rapid analytical reasoning, and high scoring cutoffs (155+ for Software/CS).',
    subjects: [
      {
        name: 'Mathematics',
        icon: Calculator,
        weightage: '40% (80 MCQs)',
        mcqCount: 80,
        color: 'from-amber-500 to-orange-600',
        topics: [
          { title: 'Calculus: Limits, Derivatives & Integrals', subtopics: ['Integration by parts & trigonometric substitutions', 'Definite integral area and volume approximations', 'Maxima/Minima optimization problems'], highYield: true, recurrence: 'Very High' },
          { title: 'Conics & Analytical Geometry', subtopics: ['Tangents and Normals to Parabola and Ellipse', 'Distance between parallel lines & points', 'Conic eccentricity identification'], highYield: true, recurrence: 'Very High' },
          { title: 'Trigonometry & Complex Numbers', subtopics: ['De Moivre\'s theorem for roots of complex numbers', 'Trigonometric identities & half-angle formulas', 'Inverse trigonometric series sums'], highYield: true, recurrence: 'Very High' }
        ]
      },
      {
        name: 'Physics',
        icon: Atom,
        weightage: '30% (60 MCQs)',
        mcqCount: 60,
        color: 'from-blue-500 to-indigo-600',
        topics: [
          { title: 'Mechanics & Oscillations', subtopics: ['Projectile motion, Range, Maximum height ratios', 'Simple harmonic motion spring-mass systems', 'Doppler effect and wave interference'], highYield: true, recurrence: 'Very High' },
          { title: 'Electromagnetism & AC', subtopics: ['Ampere\'s Law and magnetic field of solenoid', 'RLC series circuit resonance frequency', 'Photoelectric effect and De Broglie wavelength'], highYield: true, recurrence: 'Very High' }
        ]
      },
      {
        name: 'Chemistry or Computer Science',
        icon: Binary,
        weightage: '15% (30 MCQs)',
        mcqCount: 30,
        color: 'from-teal-500 to-emerald-600',
        topics: [
          { title: 'Stoichiometry, Bonding & Kinetics', subtopics: ['Limiting reactant & yield calculations', 'VSEPR geometry & Hybridization', 'First-order reaction half-life equations'], highYield: true, recurrence: 'High' },
          { title: 'C++ Programming & OOP', subtopics: ['Classes, Objects, Inheritance, Polymorphism', 'Pointers, Arrays, and String algorithms'], highYield: true, recurrence: 'High' }
        ]
      },
      {
        name: 'English',
        icon: Languages,
        weightage: '10% (20 MCQs)',
        mcqCount: 20,
        color: 'from-violet-500 to-purple-600',
        topics: [
          { title: 'Vocabulary, Analogies & Grammar', subtopics: ['Sentence completion with advanced academic vocabulary', 'Analogies (Relational word pairs)', 'Subject-verb agreement and modifier errors'], highYield: true, recurrence: 'High' }
        ]
      },
      {
        name: 'Intelligence & Analytical',
        icon: Brain,
        weightage: '5% (10 MCQs)',
        mcqCount: 10,
        color: 'from-rose-500 to-pink-600',
        topics: [
          { title: 'Analytical & Spatial Reasoning', subtopics: ['Number and letter series patterns', 'Coding-decoding logic puzzles', 'Shape transformation and 3D folding'], highYield: true, recurrence: 'Very High' }
        ]
      }
    ],
    shortcutTips: [
      { title: 'NUST NET Math: Roots of Complex Numbers', description: 'For z = r(cosθ + i sinθ), the nth roots are given by r^(1/n) [cos((θ + 2kπ)/n) + i sin((θ + 2kπ)/n)] for k = 0, 1, ..., n-1. Notice that sum of all n roots is always ZERO!', formula: 'Σ (nth roots of z) = 0' },
      { title: 'NUST NET Speed Strategy', description: 'Attempt all 80 Math questions first (target 70 mins), followed by Physics (45 mins), CS/Chemistry (25 mins), English & Intelligence (30 mins). Never leave any question blank since there is zero negative marking.', formula: 'Always Attempt 100% Questions' }
    ]
  },
  {
    id: 'lat-law',
    name: 'LAT (Law Admission Test - HEC)',
    shortName: 'LAT',
    fullName: 'HEC Law Admission Test for 5-Year LLB Programs',
    conductingBody: 'Higher Education Commission (HEC) / Education Testing Council (ETC)',
    badge: 'Legal Education',
    color: 'from-amber-700 to-yellow-800',
    targetDegree: '5-Year LLB (Bachelor of Laws) in Pakistan & AJK',
    durationMinutes: 120,
    totalQuestions: 75,
    totalMarks: 100,
    negativeMarking: 'No Negative Marking',
    passingCriteria: 'Minimum 50% Marks (50/100) required to pass',
    description: 'Mandatory nationwide standardized entrance test mandated by Supreme Court of Pakistan for admission into 5-year LLB programs in all recognized law universities and colleges.',
    subjects: [
      {
        name: 'Essay Writing (English or Urdu)',
        icon: FileText,
        weightage: '15 Marks (Subjective)',
        mcqCount: 1,
        color: 'from-amber-600 to-orange-700',
        topics: [
          { title: 'Social, Legal & Constitutional Essays', subtopics: ['Rule of Law & Justice in Pakistan', 'Role of Youth in National Building', 'Freedom of Speech vs Digital Crime', 'Women Empowerment and Constitutional Rights'], highYield: true, recurrence: 'Very High' }
        ]
      },
      {
        name: 'Personal Statement (English or Urdu)',
        icon: GraduationCap,
        weightage: '10 Marks (Subjective)',
        mcqCount: 1,
        color: 'from-blue-600 to-indigo-700',
        topics: [
          { title: 'Motivation for Choosing Legal Career', subtopics: ['Why do you want to become a lawyer/advocate?', 'Contribution to human rights and legal aid in Pakistan', '200 words concise, structured statement'], highYield: true, recurrence: 'Very High' }
        ]
      },
      {
        name: 'English MCQs',
        icon: Languages,
        weightage: '20 MCQs (20 Marks)',
        mcqCount: 20,
        color: 'from-teal-600 to-emerald-700',
        topics: [
          { title: 'Grammar, Synonyms, Antonyms & Prepositions', subtopics: ['Legal and general vocabulary synonyms/antonyms', 'Correct prepositions and sentence structure', 'Direct and indirect speech basics'], highYield: true, recurrence: 'Very High' }
        ]
      },
      {
        name: 'General Knowledge & Current Affairs',
        icon: Brain,
        weightage: '20 MCQs (20 Marks)',
        mcqCount: 20,
        color: 'from-purple-600 to-indigo-700',
        topics: [
          { title: 'Pakistan & World Affairs', subtopics: ['Capitals, currencies, and international organizations (UN, ICJ, OIC)', 'Key milestones in Pakistan history', 'Current national leadership and judicial milestones'], highYield: true, recurrence: 'Very High' }
        ]
      },
      {
        name: 'Islamic Studies & Pakistan Studies',
        icon: BookOpen,
        weightage: '20 MCQs (10 Islamiyat + 10 Pak Studies)',
        mcqCount: 20,
        color: 'from-emerald-600 to-green-700',
        topics: [
          { title: 'Islamic Law Principles & Pakistan Movement', subtopics: ['Quranic revelation, Hadith terminology & Pillars of Islam', '1940 Lahore Resolution, 1973 Constitution fundamental rights', 'Wars of Pakistan and territorial geography'], highYield: true, recurrence: 'Very High' }
        ]
      },
      {
        name: 'Urdu MCQs',
        icon: Languages,
        weightage: '10 MCQs (10 Marks)',
        mcqCount: 10,
        color: 'from-rose-600 to-pink-700',
        topics: [
          { title: 'اردو قواعد، الفاظ متضاد و مترادفات', subtopics: ['الفاظ کے درست معانی، واحد جمع، مذکر مؤنث', 'مشہور محاورات اور ضرب الامثال کا درست استعمال'], highYield: true, recurrence: 'Very High' }
        ]
      }
    ],
    shortcutTips: [
      { title: 'LAT Essay Structure Formula (15 Marks)', description: 'Introduction with clear thesis statement (30 words) → 3 body paragraphs with solid factual arguments (120 words) → Balanced conclusion (30 words). Never write generic emotional speeches; cite legal articles or constitutional values.', formula: 'Intro + 3 Point Body + Conclusion' },
      { title: 'Personal Statement Scoring Secret (10 Marks)', description: 'Directly address: (1) What event sparked your interest in law, (2) What skills make you a good advocate (debate, ethics, research), (3) How you will serve justice. Keep strictly under 200 words.', formula: 'Spark + Competence + Vision' }
    ]
  }
];

export const EntryTestPrepHub: React.FC = () => {
  const { setTab, setSelectedCategorySlug, setSelectedExamId } = useApp();

  const [activeTestId, setActiveTestId] = useState<string>('mdcat');
  const [searchQuery, setSearchQuery] = useState('');
  const [readingTipIndex, setReadingTipIndex] = useState<number | null>(null);

  // Negative Marking Simulator State
  const [simQuestions, setSimQuestions] = useState<number>(100);
  const [simAttempted, setSimAttempted] = useState<number>(90);
  const [simAccuracy, setSimAccuracy] = useState<number>(75);

  const activeTest = useMemo(() => {
    return ENTRY_TEST_EXAMS.find(t => t.id === activeTestId) || ENTRY_TEST_EXAMS[0];
  }, [activeTestId]);

  // Calculations for simulated score
  const simResults = useMemo(() => {
    const attempted = Math.min(simAttempted, simQuestions);
    const correct = Math.round((attempted * simAccuracy) / 100);
    const incorrect = attempted - correct;
    const unattempted = simQuestions - attempted;

    const isEcat = activeTest.id === 'ecat';
    let totalScore = 0;
    let maxScore = 0;

    if (isEcat) {
      totalScore = correct * 4 - incorrect * 1;
      maxScore = simQuestions * 4;
    } else {
      totalScore = correct * 1;
      maxScore = simQuestions * 1;
    }

    const percentage = Math.max(0, Math.round((totalScore / maxScore) * 100));

    return { correct, incorrect, unattempted, totalScore, maxScore, percentage };
  }, [simQuestions, simAttempted, simAccuracy, activeTest.id]);

  const handleSpeak = (text: string, index: number) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      if (readingTipIndex === index) {
        setReadingTipIndex(null);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.onend = () => setReadingTipIndex(null);
      utterance.onerror = () => setReadingTipIndex(null);
      setReadingTipIndex(index);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleStartExamDrill = (testId: string) => {
    setSelectedExamId(testId);
    setTab('exams');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartSubjectPractice = (subjectName: string) => {
    let slug = 'general-knowledge';
    const subLower = subjectName.toLowerCase();
    if (subLower.includes('bio')) slug = 'biology';
    else if (subLower.includes('chem')) slug = 'chemistry';
    else if (subLower.includes('phys')) slug = 'physics';
    else if (subLower.includes('math')) slug = 'mathematics';
    else if (subLower.includes('english')) slug = 'english';
    else if (subLower.includes('logic') || subLower.includes('intelligence')) slug = 'general-knowledge';
    else if (subLower.includes('cs') || subLower.includes('comp')) slug = 'computer';

    setSelectedCategorySlug(slug);
    setSelectedExamId(activeTest.id);
    setTab('mcqs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-teal-950 via-emerald-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 md:p-10 border border-teal-700/40 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                Pakistan Entrance Tests Gateway
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold">
                Competitive Admissions Portal
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-display text-white">
              Entry Test Preparation Hub
            </h2>
            <p className="text-sm sm:text-base text-teal-100/90 mt-2 leading-relaxed">
              MDCAT (PMDC Medical/Dental), ECAT (UET Engineering), NUST NET, NUMS Cadet, FAST-NU, HEC USAT, and LAT Law. Complete topic-by-topic weightages, negative-marking speed tricks, and timed full-length simulations.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-xs text-teal-300 font-semibold mr-1">Select Admission Test:</span>
              {ENTRY_TEST_EXAMS.map((test) => (
                <button
                  key={test.id}
                  onClick={() => setActiveTestId(test.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeTest.id === test.id
                      ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/40 font-extrabold'
                      : 'bg-white/10 hover:bg-white/20 text-teal-200 border border-white/10'
                  }`}
                >
                  {test.shortName}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/15 p-5 rounded-2xl shrink-0 flex flex-col gap-3 min-w-[250px]">
            <div className="flex items-center justify-between text-xs text-teal-200">
              <span>Exam Pattern</span>
              <span className="font-bold text-white">{activeTest.totalQuestions} MCQs</span>
            </div>
            <div className="flex items-center justify-between text-xs text-teal-200">
              <span>Time Allowed</span>
              <span className="font-bold text-white">{activeTest.durationMinutes} Minutes</span>
            </div>
            <div className="flex items-center justify-between text-xs text-teal-200">
              <span>Negative Marking</span>
              <span className="font-bold text-amber-300">{activeTest.id === 'ecat' ? 'Yes (-1 / +4)' : 'None'}</span>
            </div>

            <button
              onClick={() => handleStartExamDrill(activeTest.id)}
              className="mt-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 text-slate-950 text-xs font-black shadow-md transition cursor-pointer flex items-center justify-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Launch {activeTest.shortName} Mock Simulation</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Active Test Details Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8 shadow-sm">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                {activeTest.badge}
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Conducted by: {activeTest.conductingBody}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display mt-0.5">
              {activeTest.fullName}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-3xl">
              {activeTest.description}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                setSelectedExamId(activeTest.id);
                setTab('past-papers');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 font-bold text-xs transition cursor-pointer flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Past Papers (2018–2025)</span>
            </button>
          </div>
        </div>

        {/* Quick Specs Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200/70 dark:border-slate-800">
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Target Admission</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">
              {activeTest.targetDegree}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Test Structure</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">
              {activeTest.totalQuestions} Questions | {activeTest.totalMarks} Marks
            </div>
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Marking Scheme</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">
              {activeTest.negativeMarking}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Qualifying Requirement</div>
            <div className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
              {activeTest.passingCriteria}
            </div>
          </div>
        </div>

        {/* Negative Marking / Aggregate Simulator (Interactive Tool) */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white border border-slate-700/80 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-teal-400" />
              <div>
                <h4 className="text-sm font-bold text-white">
                  {activeTest.shortName} Performance & Strategy Simulator
                </h4>
                <p className="text-[11px] text-teal-200/80">
                  {activeTest.id === 'ecat'
                    ? 'Model risk with -1 penalty vs +4 reward.'
                    : 'Test your target score & accuracy requirements.'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <div>
                <span className="text-slate-400">Projected Score: </span>
                <span className="font-extrabold text-teal-300 text-sm">
                  {simResults.totalScore} / {simResults.maxScore} ({simResults.percentage}%)
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300">Total Exam Questions:</span>
                <span className="font-bold text-teal-300">{simQuestions}</span>
              </div>
              <input
                type="range"
                min="50"
                max="200"
                step="10"
                value={simQuestions}
                onChange={(e) => setSimQuestions(Number(e.target.value))}
                className="w-full accent-teal-400 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300">Attempted Questions:</span>
                <span className="font-bold text-teal-300">{simAttempted} ({Math.round((simAttempted/simQuestions)*100)}%)</span>
              </div>
              <input
                type="range"
                min="10"
                max={simQuestions}
                step="5"
                value={simAttempted}
                onChange={(e) => setSimAttempted(Number(e.target.value))}
                className="w-full accent-teal-400 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300">Estimated Accuracy:</span>
                <span className="font-bold text-emerald-300">{simAccuracy}%</span>
              </div>
              <input
                type="range"
                min="30"
                max="100"
                step="1"
                value={simAccuracy}
                onChange={(e) => setSimAccuracy(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-4 pt-3 border-t border-white/10 text-center">
            <div className="bg-white/5 p-2 rounded-xl">
              <div className="text-[10px] text-emerald-300 uppercase font-bold">Correct Answers</div>
              <div className="text-base font-extrabold text-white mt-0.5">{simResults.correct}</div>
            </div>
            <div className="bg-white/5 p-2 rounded-xl">
              <div className="text-[10px] text-rose-300 uppercase font-bold">Wrong Answers</div>
              <div className="text-base font-extrabold text-white mt-0.5">{simResults.incorrect}</div>
            </div>
            <div className="bg-white/5 p-2 rounded-xl">
              <div className="text-[10px] text-amber-300 uppercase font-bold">Unattempted</div>
              <div className="text-base font-extrabold text-white mt-0.5">{simResults.unattempted}</div>
            </div>
          </div>
        </div>

        {/* Speed Math & High Yield Formulas */}
        {activeTest.shortcutTips.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500 fill-current" />
                <span>Rapid Calculation Shortcuts & Test Hacks</span>
              </h4>
              <span className="text-[11px] text-slate-400">Click speaker to listen</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeTest.shortcutTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 flex items-start justify-between gap-3"
                >
                  <div>
                    <div className="text-xs font-bold text-amber-900 dark:text-amber-300">
                      {tip.title}
                    </div>
                    {tip.formula && (
                      <div className="mt-1 inline-block text-[11px] font-mono font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 px-2 py-0.5 rounded border border-teal-200/60 dark:border-teal-800/40">
                        {tip.formula}
                      </div>
                    )}
                    <div className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
                      {tip.description}
                    </div>
                  </div>
                  <button
                    onClick={() => handleSpeak(`${tip.title}. ${tip.description}`, idx)}
                    className="p-1.5 rounded-lg bg-white dark:bg-slate-800 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 transition cursor-pointer shrink-0"
                    title="Listen to shortcut tip"
                  >
                    {readingTipIndex === idx ? (
                      <VolumeX className="w-3.5 h-3.5 text-rose-500" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Subjects & Topics Breakdown */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Subject Syllabi & High-Yield Topic Weightages
            </h4>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {activeTest.subjects.length} Test Sections
            </span>
          </div>

          <div className="space-y-6">
            {activeTest.subjects.map((subject, sIdx) => {
              const Icon = subject.icon;
              return (
                <div
                  key={sIdx}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-xs space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-700/80">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-bold text-base text-slate-900 dark:text-white">
                          {subject.name}
                        </h5>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          Weightage: <strong className="text-teal-600 dark:text-teal-400">{subject.weightage}</strong>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleStartSubjectPractice(subject.name)}
                      className="px-3 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-xs transition cursor-pointer flex items-center gap-1.5 self-start sm:self-center"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Practice {subject.name}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {subject.topics.map((topic, tIdx) => (
                      <div
                        key={tIdx}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <span className="font-bold text-xs text-slate-800 dark:text-slate-200">
                              {topic.title}
                            </span>
                            {topic.highYield && (
                              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-300/40 shrink-0 flex items-center gap-1">
                                <Flame className="w-3 h-3 text-rose-500 fill-current" />
                                High Yield
                              </span>
                            )}
                          </div>

                          <div className="mt-2 flex flex-wrap gap-1">
                            {topic.subtopics.map((sub, i) => (
                              <span
                                key={i}
                                className="text-[10.5px] px-1.5 py-0.5 rounded bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                              >
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-3 pt-2 border-t border-slate-200/50 dark:border-slate-700/40 flex items-center justify-between text-[11px]">
                          <span className="text-slate-400">
                            Past Frequency: <strong className="text-teal-600 dark:text-teal-400">{topic.recurrence}</strong>
                          </span>
                          <span className="text-slate-400">Solved MCQs Ready</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
