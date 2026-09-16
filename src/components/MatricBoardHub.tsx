import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  Sparkles, 
  Award, 
  CheckCircle, 
  Play, 
  HelpCircle, 
  ChevronRight, 
  Clock, 
  GraduationCap, 
  FileText, 
  BookCheck,
  Brain,
  Atom,
  Calculator,
  Languages,
  Compass,
  Laptop,
  Moon,
  Star,
  Target,
  FlaskConical,
  Dna,
  Binary,
  Layers,
  CheckCircle2,
  Volume2,
  VolumeX,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export interface MatricSubject {
  id: string;
  name: string;
  urduName?: string;
  group: 'science' | 'computer' | 'arts' | 'compulsory';
  icon: any;
  color: string;
  badge: string;
  description: string;
  boardWeightage: string;
  paperFormat: {
    mcqSection: string;
    shortQuestions: string;
    longQuestions: string;
    totalMarks: number;
  };
  classes: {
    grade: '9th' | '10th';
    chapters: {
      number: number;
      title: string;
      urduTitle?: string;
      keyConcepts: string[];
      mcqCount: number;
      sloLevel: 'Knowledge' | 'Understanding' | 'Application';
      estimatedMinutes: number;
    }[];
  }[];
  highYieldTips: {
    topic: string;
    summary: string;
  }[];
}

export const MATRIC_SUBJECTS: MatricSubject[] = [
  {
    id: 'physics',
    name: 'Physics',
    urduName: 'طبیعیات',
    group: 'science',
    icon: Atom,
    color: 'from-blue-600 to-indigo-700',
    badge: 'Science Group',
    description: 'Mechanics, matter properties, heat, SHM, sound, geometrical optics, electrostatics, current electricity, electromagnetism, and modern physics for SSC-I & II.',
    boardWeightage: 'Section A: 12 MCQs (12 marks) | Practical: 10 marks',
    paperFormat: {
      mcqSection: '12 MCQs (15 mins) - 1 mark each covering all chapters',
      shortQuestions: 'Attempt 5/8 in each of 3 question sub-groups (30 marks)',
      longQuestions: 'Attempt 2/3 comprehensive questions with numericals (18 marks)',
      totalMarks: 60
    },
    classes: [
      {
        grade: '9th',
        chapters: [
          { number: 1, title: 'Physical Quantities & Measurement', urduTitle: 'طبعی مقداریں اور پیمائش', keyConcepts: ['SI Base & Derived units', 'Vernier Caliper least count (0.01 cm)', 'Screw Gauge least count (0.01 mm)', 'Significant figures rules'], mcqCount: 45, sloLevel: 'Knowledge', estimatedMinutes: 20 },
          { number: 2, title: 'Kinematics: Motion, Speed & Velocity', urduTitle: 'حرکیات: حرکت، رفتار اور اسراع', keyConcepts: ['Translatory, Rotatory & Vibratory motion', 'Scalars vs Vectors', 'Three Equations of Motion derivations', 'Distance-time graphs'], mcqCount: 55, sloLevel: 'Understanding', estimatedMinutes: 25 },
          { number: 3, title: 'Dynamics: Newton\'s Laws & Momentum', urduTitle: 'حرکیات: نیوٹن کے قوانین اور مومینٹم', keyConcepts: ['Newton\'s 1st, 2nd & 3rd Laws', 'F = ma numericals', 'Law of Conservation of Momentum', 'Friction & Centripetal force Fc = mv²/r'], mcqCount: 60, sloLevel: 'Application', estimatedMinutes: 28 },
          { number: 4, title: 'Turning Effect of Forces & Equilibrium', urduTitle: 'قوتوں کا گردشی اثر اور توازن', keyConcepts: ['Torque τ = F × L', 'Principle of Moments', 'Center of Gravity & Center of Mass', 'Conditions & States of Equilibrium (Stable, Unstable, Neutral)'], mcqCount: 50, sloLevel: 'Understanding', estimatedMinutes: 24 },
          { number: 5, title: 'Gravitation & Satellite Motion', urduTitle: 'کشش ثقل اور مصنوعی سیارے', keyConcepts: ['Newton\'s Law of Gravitation F = G(m1m2/r²)', 'Mass of Earth calculation (6.0 × 10²⁴ kg)', 'Variation of g with altitude', 'Orbital velocity of satellites'], mcqCount: 48, sloLevel: 'Application', estimatedMinutes: 22 },
          { number: 6, title: 'Work, Energy & Power', urduTitle: 'کام، توانائی اور طاقت', keyConcepts: ['Work W = F × S cosθ', 'Kinetic energy Ek = ½mv²', 'Potential energy Ep = mgh', 'Power P = W/t (Watts) and Efficiency'], mcqCount: 52, sloLevel: 'Application', estimatedMinutes: 25 },
          { number: 7, title: 'Properties of Matter & Elasticity', urduTitle: 'مادے کی خصوصیات اور لچک', keyConcepts: ['Kinetic molecular model', 'Density ρ = m/V and Pressure P = F/A', 'Atmospheric pressure & Barometer', 'Archimedes Principle & Pascal Law', 'Hooke\'s Law & Young\'s Modulus'], mcqCount: 54, sloLevel: 'Understanding', estimatedMinutes: 26 },
          { number: 8, title: 'Thermal Properties of Matter', urduTitle: 'مادے کی حرارتی خصوصیات', keyConcepts: ['Temperature vs Heat', 'Specific heat capacity Q = mcΔT', 'Latent heat of fusion & vaporization', 'Evaporation factors & cooling effect'], mcqCount: 48, sloLevel: 'Understanding', estimatedMinutes: 24 },
          { number: 9, title: 'Transfer of Heat & Applications', urduTitle: 'انتقالِ حرارت اور اطلاقات', keyConcepts: ['Conduction in metals', 'Convection currents & land/sea breezes', 'Thermal radiation & Leslie\'s cube', 'Greenhouse effect & Vacuum flask'], mcqCount: 42, sloLevel: 'Knowledge', estimatedMinutes: 20 },
        ]
      },
      {
        grade: '10th',
        chapters: [
          { number: 1, title: 'Simple Harmonic Motion & Waves', urduTitle: 'سادہ ہارمونک موشن اور لہریں', keyConcepts: ['Mass-spring system & Simple Pendulum T = 2π√(L/g)', 'Characteristics of SHM', 'Transverse vs Longitudinal waves', 'Wave equation v = fλ', 'Ripple Tank: Reflection, Refraction, Diffraction'], mcqCount: 60, sloLevel: 'Understanding', estimatedMinutes: 28 },
          { number: 2, title: 'Sound Waves & Acoustics', urduTitle: 'صوتی لہریں اور صوتیات', keyConcepts: ['Sound requires medium', 'Loudness, Pitch, Quality & Intensity', 'Audible frequency range (20 Hz to 20,000 Hz)', 'Ultrasound applications in medicine (SONAR, Echocardiography)'], mcqCount: 50, sloLevel: 'Knowledge', estimatedMinutes: 24 },
          { number: 3, title: 'Geometrical Optics & Lenses', urduTitle: 'ہندسی بصریات اور عدسے', keyConcepts: ['Laws of Reflection & Spherical Mirrors', 'Refraction & Snell\'s Law n = sin i / sin r', 'Total Internal Reflection & Critical angle', 'Optical fibers & Endoscope', 'Lens formula 1/f = 1/p + 1/q', 'Compound Microscope & Telescope'], mcqCount: 65, sloLevel: 'Application', estimatedMinutes: 30 },
          { number: 4, title: 'Electrostatics & Coulomb\'s Law', urduTitle: 'ساکن برقیات', keyConcepts: ['Electric charges & Gold Leaf Electroscope', 'Coulomb\'s Law F = k(q1q2/r²)', 'Electric field intensity & Potential V = W/q', 'Capacitors in series (1/C = 1/C1 + 1/C2) & parallel (C = C1 + C2)'], mcqCount: 55, sloLevel: 'Application', estimatedMinutes: 26 },
          { number: 5, title: 'Current Electricity & Ohm\'s Law', urduTitle: 'برقی رو اور اوہم کا قانون', keyConcepts: ['Electric current I = Q/t', 'Ohm\'s Law V = IR and resistance factors R = ρL/A', 'Series vs Parallel resistors combination', 'Joule\'s Law W = I²Rt and kilowatt-hour (kWh)', 'Safety: Fuses, Earth wire, Circuit breakers'], mcqCount: 62, sloLevel: 'Application', estimatedMinutes: 30 },
          { number: 6, title: 'Electromagnetism & Motors', urduTitle: 'برقی مقناطیسیت', keyConcepts: ['Magnetic effect of current & Right-Hand Rule', 'Force on current-carrying conductor F = BIL sinθ', 'DC Motor working principle', 'Electromagnetic Induction & Faraday\'s Law', 'Transformers step-up vs step-down Vs/Vp = Ns/Np'], mcqCount: 58, sloLevel: 'Understanding', estimatedMinutes: 28 },
          { number: 7, title: 'Basic Electronics & Logic Gates', urduTitle: 'بنیادی الیکٹرانکس اور لاجک گیٹس', keyConcepts: ['Thermionic emission & Cathode Ray Oscilloscope (CRO)', 'Analogue vs Digital electronics', 'Logic Gates: AND, OR, NOT, NAND, NOR truth tables'], mcqCount: 52, sloLevel: 'Understanding', estimatedMinutes: 25 },
          { number: 8, title: 'Information & Communication Tech (ICT)', urduTitle: 'معلوماتی اور مواصلاتی ٹیکنالوجی', keyConcepts: ['Components of ICT', 'Transmission of electrical signals, optical signals, radio waves', 'Storage devices: Hard disc, Flash drive, Cloud', 'Internet applications & risks'], mcqCount: 44, sloLevel: 'Knowledge', estimatedMinutes: 20 },
          { number: 9, title: 'Atomic & Nuclear Physics', urduTitle: 'ایٹمی اور نیوکلیائی طبیعیات', keyConcepts: ['Rutherford & Bohr atomic model', 'Isotopes & Atomic mass', 'Natural radioactivity: Alpha, Beta, Gamma rays properties', 'Half-life concept N = No(1/2)ⁿ', 'Nuclear Fission vs Fusion', 'Radiation hazards & safety'], mcqCount: 56, sloLevel: 'Understanding', estimatedMinutes: 26 },
        ]
      }
    ],
    highYieldTips: [
      { topic: 'Equations of Motion', summary: '1. vf = vi + at | 2. S = vit + ½at² | 3. 2aS = vf² - vi². Use standard SI units (m, s, m/s²).' },
      { topic: 'Ohm\'s Law & Resistance', summary: 'V = IR. In series: Req = R1 + R2 (Current remains same). In parallel: 1/Req = 1/R1 + 1/R2 (Voltage remains same).' },
      { topic: 'Transformer Ratio', summary: 'Vs / Vp = Ns / Np = Ip / Is. For 100% ideal transformer: Power In = Power Out (Vp × Ip = Vs × Is).' },
      { topic: 'Half-Life Calculation', summary: 'Fraction remaining after n half-lives = (1/2)ⁿ. If half-life is 5 days, after 15 days (3 half-lives) remaining = 1/8th of original.' }
    ]
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    urduName: 'کیمیا',
    group: 'science',
    icon: FlaskConical,
    color: 'from-teal-600 to-emerald-700',
    badge: 'Science Group',
    description: 'Atomic structure, periodic table, chemical bonding, states of matter, solutions, electrochemistry, chemical equilibrium, acids/bases, organic chemistry, and industrial chemistry.',
    boardWeightage: 'Section A: 12 MCQs (12 marks) | Practical: 10 marks',
    paperFormat: {
      mcqSection: '12 MCQs (15 mins) - Single best answer from 4 options',
      shortQuestions: 'Section B: 15 short questions from 24 given (30 marks)',
      longQuestions: 'Section C: 2 descriptive long questions (18 marks)',
      totalMarks: 60
    },
    classes: [
      {
        grade: '9th',
        chapters: [
          { number: 1, title: 'Fundamentals of Chemistry', urduTitle: 'کیمسٹری کے بنیادی اصول', keyConcepts: ['Valency, Molecular mass & Formula mass', 'Empirical vs Molecular Formula', 'Avogadro\'s number NA = 6.02 × 10²³', 'Mole calculations: n = m / M'], mcqCount: 60, sloLevel: 'Application', estimatedMinutes: 28 },
          { number: 2, title: 'Structure of Atoms', urduTitle: 'ایٹم کی ساخت', keyConcepts: ['Rutherford\'s gold foil experiment', 'Bohr\'s atomic theory postulates', 'Electronic configuration (1s, 2s, 2p, 3s, 3p)', 'Isotopes of Hydrogen, Carbon, Chlorine, Uranium & applications'], mcqCount: 55, sloLevel: 'Understanding', estimatedMinutes: 26 },
          { number: 3, title: 'Periodic Table & Periodicity of Properties', urduTitle: 'پیریڈک ٹیبل اور خصوصیات کی دوریت', keyConcepts: ['Modern Periodic Law (Moseley)', 'Groups and Periods trends', 'Atomic radius, Ionization energy, Electron affinity, Electronegativity'], mcqCount: 58, sloLevel: 'Understanding', estimatedMinutes: 28 },
          { number: 4, title: 'Structure of Molecules & Chemical Bonding', urduTitle: 'کیمیائی بانڈنگ', keyConcepts: ['Octet rule & Duplet rule', 'Ionic bond (NaCl, MgO)', 'Covalent bond (Single, Double, Triple - H2, O2, N2)', 'Coordinate Covalent bond (NH4+, H3O+)', 'Metallic bond & Hydrogen bonding in water'], mcqCount: 62, sloLevel: 'Understanding', estimatedMinutes: 30 },
          { number: 5, title: 'Physical States of Matter', urduTitle: 'مادے کی طبعی حالتیں', keyConcepts: ['Boyle\'s Law P1V1 = P2V2', 'Charles\'s Law V1/T1 = V2/T2 (Absolute zero)', 'Evaporation, Boiling point, Vapor pressure', 'Allotropy (Carbon: Diamond, Graphite, Buckyballs)'], mcqCount: 52, sloLevel: 'Application', estimatedMinutes: 25 },
          { number: 6, title: 'Solutions & Concentrations', urduTitle: 'محلول اور ارتکاز', keyConcepts: ['Saturated, Unsaturated, Supersaturated solutions', 'Percentage concentration (% m/m, % m/v, % v/v)', 'Molarity M = moles / volume in dm³', 'Solubility & "Like dissolves like" rule', 'Colloids & Suspensions (Tyndall effect)'], mcqCount: 54, sloLevel: 'Application', estimatedMinutes: 26 },
          { number: 7, title: 'Electrochemistry', urduTitle: 'الیکٹرو کیمسٹری', keyConcepts: ['Oxidation & Reduction (electron transfer & oxidation number)', 'Rules for assigning oxidation numbers', 'Electrolytic cell (Down\'s cell for Na, Nelson\'s cell for NaOH)', 'Galvanic / Voltaic cell (Daniel cell)', 'Corrosion & Rusting of Iron prevention (Galvanizing, Electroplating)'], mcqCount: 56, sloLevel: 'Understanding', estimatedMinutes: 28 },
          { number: 8, title: 'Chemical Reactivity', urduTitle: 'کیمیائی فعالیت', keyConcepts: ['Metals electropositive character & reactivity series', 'Comparison of Alkali metals (Na, K) and Alkaline earth metals (Mg, Ca)', 'Noble metals (Gold, Platinum)', 'Non-metals electronegative character (Halogens reactivity: F > Cl > Br > I)'], mcqCount: 48, sloLevel: 'Knowledge', estimatedMinutes: 24 },
        ]
      },
      {
        grade: '10th',
        chapters: [
          { number: 1, title: 'Chemical Equilibrium & Reversible Reactions', urduTitle: 'کیمیائی توازن', keyConcepts: ['Forward & Reverse reaction equilibrium', 'Law of Mass Action derivation of Kc', 'Equilibrium constant expression and units', 'Significance of Kc (direction & extent of reaction)'], mcqCount: 55, sloLevel: 'Understanding', estimatedMinutes: 26 },
          { number: 2, title: 'Acids, Bases and Salts', urduTitle: 'تیزاب، اساس اور نمکیات', keyConcepts: ['Arrhenius, Bronsted-Lowry & Lewis concepts of acids/bases', 'Self-ionization of water and Kw = 1.0 × 10⁻¹⁴', 'pH and pOH scale calculations (pH = -log[H+])', 'Indicators (Litmus, Phenolphthalein, Methyl orange)', 'Preparation and uses of Salts'], mcqCount: 62, sloLevel: 'Application', estimatedMinutes: 30 },
          { number: 3, title: 'Organic Chemistry: Classification & Radicals', urduTitle: 'نامیاتی کیمسٹری', keyConcepts: ['Vital Force theory & Wohler synthesis of Urea', 'Catenation property of Carbon', 'Hydrocarbons & Functional groups (-OH, -CHO, -COOH, -CO-, -X)', 'Homologous series characteristics'], mcqCount: 58, sloLevel: 'Understanding', estimatedMinutes: 28 },
          { number: 4, title: 'Hydrocarbons: Alkanes, Alkenes & Alkynes', urduTitle: 'ہائیڈرو کاربنز', keyConcepts: ['Saturated vs Unsaturated hydrocarbons', 'Alkanes CnH2n+2: Halogenation & substitution', 'Alkenes CnH2n: Addition of halogens (Bromine water test)', 'Alkynes CnH2n-2: Acetylene combustion & welding uses'], mcqCount: 60, sloLevel: 'Understanding', estimatedMinutes: 28 },
          { number: 5, title: 'Biochemistry: Carbohydrates, Proteins & Lipids', urduTitle: 'حیاتیاتی کیمسٹری', keyConcepts: ['Monosaccharides (Glucose, Fructose), Oligosaccharides & Polysaccharides (Starch, Cellulose)', 'Amino acids & peptide bonds in Proteins', 'Lipids: Fats vs Oils (Fatty acids)', 'Nucleic acids: DNA vs RNA structure', 'Vitamins: Fat-soluble (A, D, E, K) vs Water-soluble (B, C)'], mcqCount: 52, sloLevel: 'Knowledge', estimatedMinutes: 25 },
          { number: 6, title: 'Environmental Chemistry I: The Atmosphere', urduTitle: 'ماحولیاتی کیمسٹری: کرۂ ہوائی', keyConcepts: ['Layers: Troposphere, Stratosphere, Mesosphere, Thermosphere', 'Air Pollutants: CO, SO2, NOx, particulate matter', 'Greenhouse effect & Global Warming', 'Acid rain formation & effects on marble/aquatic life', 'Ozone layer depletion by CFCs'], mcqCount: 54, sloLevel: 'Understanding', estimatedMinutes: 26 },
          { number: 7, title: 'Environmental Chemistry II: Water', urduTitle: 'ماحولیاتی کیمسٹری: پانی', keyConcepts: ['Water as universal solvent & polar nature', 'Hard water: Temporary (bicarbonates) vs Permanent (chlorides/sulfates)', 'Softening methods: Boiling, Clark\'s method, Washing soda, Ion exchange resin', 'Water pollutants & Waterborne diseases (Cholera, Typhoid, Hepatitis, Dysentery)'], mcqCount: 50, sloLevel: 'Application', estimatedMinutes: 24 },
          { number: 8, title: 'Chemical Industries in Pakistan', urduTitle: 'کیمیائی صنعتیں', keyConcepts: ['Basic metallurgical operations (Crushing, Concentration by froth flotation, Roasting, Smelting)', 'Manufacture of Sodium carbonate by Solvay process', 'Manufacture of Urea fertilizer flow sheet', 'Petroleum fractional distillation products'], mcqCount: 52, sloLevel: 'Knowledge', estimatedMinutes: 26 },
        ]
      }
    ],
    highYieldTips: [
      { topic: 'Molarity Formula', summary: 'M = (Mass in grams / Molar mass) × (1000 / Volume in cm³). E.g. 40g NaOH in 1 dm³ water = 1.0 M.' },
      { topic: 'pH & pOH Rules', summary: 'pH = -log[H+] | pOH = -log[OH-] | pH + pOH = 14 at 25°C. Acidic: pH < 7, Neutral: pH = 7, Basic: pH > 7.' },
      { topic: 'Functional Groups Cheat Sheet', summary: 'Alcohol: -OH | Aldehyde: -CHO | Ketone: >C=O | Carboxylic Acid: -COOH | Ether: -O- | Ester: -COO- | Amine: -NH2.' },
      { topic: 'Solvay Process Reactions', summary: 'NH3 + CO2 + H2O → NH4HCO3. NH4HCO3 + NaCl → NaHCO3 (precipitates) + NH4Cl. Heating NaHCO3 yields Na2CO3.' }
    ]
  },
  {
    id: 'biology',
    name: 'Biology',
    urduName: 'حیاتیات',
    group: 'science',
    icon: Dna,
    color: 'from-emerald-500 to-green-700',
    badge: 'Science Group',
    description: 'Cell biology, taxonomy, enzymes, bioenergetics, human physiology, genetics, biotechnology, homeostasis, coordination, and ecology.',
    boardWeightage: 'Section A: 12 MCQs (12 marks) | Practical: 10 marks',
    paperFormat: {
      mcqSection: '12 MCQs (15 mins) - Accurate concept & diagram MCQs',
      shortQuestions: 'Section B: 15 short questions from 3 parts (30 marks)',
      longQuestions: 'Section C: 2 descriptive long questions (18 marks)',
      totalMarks: 60
    },
    classes: [
      {
        grade: '9th',
        chapters: [
          { number: 1, title: 'Introduction to Biology & Careers', urduTitle: 'حیاتیات کا تعارف اور شعبے', keyConcepts: ['Branches of Biology (Morphology, Anatomy, Histology, Genetics, Ecology)', 'Careers in Medicine, Agriculture, Biotechnology', 'Muslim scientists: Jabir ibn Hayyan, Abdul Malik Asmai, Bu Ali Sina'], mcqCount: 42, sloLevel: 'Knowledge', estimatedMinutes: 20 },
          { number: 2, title: 'Solving a Biological Problem', urduTitle: 'حیاتیاتی مسئلہ کا حل', keyConcepts: ['Biological method steps: Observation (Quantitative vs Qualitative), Hypothesis, Deduction, Experimentation, Theory & Law', 'Malaria study: Laveran discovery of Plasmodium, Ronald Ross mosquito experiment with sparrows'], mcqCount: 46, sloLevel: 'Understanding', estimatedMinutes: 22 },
          { number: 3, title: 'Biodiversity & Classification', urduTitle: 'حیاتیاتی تنوع اور درجہ بندی', keyConcepts: ['Aims of classification & Taxonomic hierarchy (Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species)', 'Five Kingdom System (Whittaker): Monera, Protista, Fungi, Plantae, Animalia', 'Binomial nomenclature (Linnaeus rules)'], mcqCount: 50, sloLevel: 'Understanding', estimatedMinutes: 25 },
          { number: 4, title: 'Cells and Tissues', urduTitle: 'سیل اور بافتیں', keyConcepts: ['Light vs Electron Microscope resolution', 'Cell organelles: Nucleus, Mitochondria, Ribosomes, Endoplasmic Reticulum, Golgi apparatus', 'Prokaryotic vs Eukaryotic cells', 'Plant tissues (Meristematic vs Permanent: Xylem & Phloem)', 'Animal tissues (Epithelial, Connective, Muscle, Nervous)'], mcqCount: 65, sloLevel: 'Understanding', estimatedMinutes: 30 },
          { number: 5, title: 'Cell Cycle: Mitosis & Meiosis', urduTitle: 'سیل سائیکل: مائٹوسس اور میوسس', keyConcepts: ['Interphase: G1, S (DNA duplication), G2 phases', 'Mitosis: Prophase, Metaphase, Anaphase, Telophase', 'Meiosis: Crossing over in Prophase-I, Genetic variation', 'Necrosis vs Apoptosis (programmed cell death)'], mcqCount: 58, sloLevel: 'Application', estimatedMinutes: 28 },
          { number: 6, title: 'Enzymes & Catalytic Action', urduTitle: 'انزائمز', keyConcepts: ['Enzymes as biocatalysts, Active site & Substrate', 'Lock and Key model (Emil Fischer) vs Induced Fit model (Daniel Koshland)', 'Factors affecting enzyme rate: Temperature, pH, Substrate concentration'], mcqCount: 48, sloLevel: 'Understanding', estimatedMinutes: 24 },
          { number: 7, title: 'Bioenergetics: Photosynthesis & Respiration', urduTitle: 'بائیو انرجیٹکس', keyConcepts: ['ATP as energy currency of cell', 'Photosynthesis: Light reactions (Z-scheme in thylakoids) vs Dark reactions (Calvin cycle in stroma)', 'Cellular respiration: Glycolysis (cytoplasm), Krebs cycle (mitochondria), Electron transport chain', 'Aerobic vs Anaerobic respiration (Fermentation: Lactic acid & Alcoholic)'], mcqCount: 62, sloLevel: 'Application', estimatedMinutes: 30 },
          { number: 8, title: 'Nutrition & Human Digestive System', urduTitle: 'غذائیت اور انسانی نظام انہضام', keyConcepts: ['Macronutrients vs Micronutrients', 'Digestive canal: Mouth (salivary amylase), Stomach (Pepsin & HCl), Small intestine (Bile, Trypsin, Lipase)', 'Absorption in villi', 'Disorders: Kwashiorkor, Marasmus, Scurvy, Rickets, Ulcer'], mcqCount: 56, sloLevel: 'Understanding', estimatedMinutes: 28 },
          { number: 9, title: 'Transport in Plants & Humans', urduTitle: 'پودوں اور انسان میں ترسیل', keyConcepts: ['Transpiration & Transpirational pull (Cohesion-Tension theory)', 'Translocation of food via pressure flow hypothesis', 'Human Circulatory system: Heart chambers, Double circulation', 'ABO & Rh blood group systems', 'Cardiovascular diseases: Atherosclerosis, Arteriosclerosis, Myocardial infarction'], mcqCount: 64, sloLevel: 'Application', estimatedMinutes: 30 },
        ]
      },
      {
        grade: '10th',
        chapters: [
          { number: 1, title: 'Gaseous Exchange in Plants & Humans', urduTitle: 'گیسوں کا تبادلہ', keyConcepts: ['Stomata & Lenticels gaseous exchange', 'Human Respiratory system: Trachea, Bronchi, Alveoli', 'Inhalation vs Exhalation mechanics', 'Respiratory disorders: Bronchitis, Emphysema, Pneumonia, Lung Cancer'], mcqCount: 54, sloLevel: 'Understanding', estimatedMinutes: 26 },
          { number: 2, title: 'Homeostasis & Urinary System', urduTitle: 'ہومیوسٹیسس اور اخراج', keyConcepts: ['Osmoregulation, Thermoregulation, Excretion', 'Plant adaptations: Hydrophytes, Xerophytes, Halophytes', 'Human Urinary system: Kidney nephron structure & urine formation', 'Kidney stones (Lithotripsy) & Kidney failure (Dialysis: Hemodialysis vs Peritoneal)'], mcqCount: 58, sloLevel: 'Application', estimatedMinutes: 28 },
          { number: 3, title: 'Coordination and Control', urduTitle: 'رابطہ اور ضبط', keyConcepts: ['Nervous vs Chemical coordination', 'Neuron structure & Reflex arc', 'Human Brain: Cerebrum, Cerebellum, Medulla oblongata', 'Endocrine glands: Pituitary, Thyroid, Islets of Langerhans (Insulin), Adrenal glands', 'Disorders: Paralysis, Epilepsy'], mcqCount: 60, sloLevel: 'Understanding', estimatedMinutes: 30 },
          { number: 4, title: 'Support and Movement', urduTitle: 'سہارا اور حرکت', keyConcepts: ['Human Skeleton: Axial skeleton (80 bones) vs Appendicular skeleton (126 bones)', 'Bone vs Cartilage structure', 'Joints: Immovable, Slightly movable, Movable (Hinge vs Ball-and-socket)', 'Antagonistic muscles: Biceps (flexor) and Triceps (extensor)', 'Disorders: Osteoporosis, Arthritis'], mcqCount: 52, sloLevel: 'Knowledge', estimatedMinutes: 25 },
          { number: 5, title: 'Reproduction in Plants and Animals', urduTitle: 'تولید', keyConcepts: ['Asexual reproduction: Binary fission, Budding, Spore formation, Vegetative propagation', 'Sexual reproduction in flowering plants: Pollination & Double fertilization', 'Seed germination conditions (Hypogeal vs Epigeal)', 'Aids / HIV awareness and prevention'], mcqCount: 55, sloLevel: 'Understanding', estimatedMinutes: 26 },
          { number: 6, title: 'Inheritance and Genetics', urduTitle: 'وراثت اور جینیات', keyConcepts: ['Chromosomes & DNA Watson-Crick double helix', 'Mendel\'s Law of Segregation', 'Mendel\'s Law of Independent Assortment', 'Genotype vs Phenotype, Dominant vs Recessive alleles', 'Natural Selection & Artificial Selection'], mcqCount: 62, sloLevel: 'Application', estimatedMinutes: 30 },
          { number: 7, title: 'Man and His Environment', urduTitle: 'انسان اور اس کا ماحول', keyConcepts: ['Levels of ecological organization: Population, Community, Ecosystem, Biosphere', 'Biogeochemical cycles: Carbon cycle & Nitrogen cycle', 'Interactions: Symbiosis, Mutualism, Commensalism, Parasitism', 'Pollution types, deforestation, global warming'], mcqCount: 50, sloLevel: 'Understanding', estimatedMinutes: 24 },
          { number: 8, title: 'Biotechnology & Genetic Engineering', urduTitle: 'بائیو ٹیکنالوجی', keyConcepts: ['Fermentation: Alcoholic (Yeast) & Lactic acid (Bacteria) in industry', 'Fermenters role', 'Genetic engineering steps: Isolation of gene, Insertion into vector (Plasmid), Recombinant DNA', 'Applications: Human insulin production, Interferon, GMOs'], mcqCount: 54, sloLevel: 'Application', estimatedMinutes: 26 },
          { number: 9, title: 'Pharmacology and Medicinal Drugs', urduTitle: 'فارماکولوجی اور ادویات', keyConcepts: ['Medicinal drugs sources: Plants, Animals, Minerals, Synthetics', 'Antibiotics: Discovery by Alexander Fleming (Penicillin), Antibiotic resistance danger', 'Sedatives, Narcotics, Hallucinogens, Addictive drugs'], mcqCount: 46, sloLevel: 'Knowledge', estimatedMinutes: 22 },
        ]
      }
    ],
    highYieldTips: [
      { topic: 'Five Kingdom Classification', summary: 'Monera (Prokaryotes: Bacteria) | Protista (Unicellular Eukaryotes: Amoeba, Paramecium) | Fungi (Absorptive heterotrophs: Yeast, Mushroom) | Plantae (Autotrophs) | Animalia (Ingestive heterotrophs).' },
      { topic: 'Mendel\'s Phenotypic Ratios', summary: 'Monohybrid cross F2 phenotypic ratio = 3:1 (Genotypic: 1:2:1). Dihybrid cross F2 phenotypic ratio = 9:3:3:1.' },
      { topic: 'DNA Base Pairing Rules', summary: 'Adenine pairs with Thymine (A = T with 2 H-bonds). Guanine pairs with Cytosine (G ≡ C with 3 H-bonds). In RNA, Uracil replaces Thymine.' }
    ]
  },
  {
    id: 'computer-science',
    name: 'Computer Science',
    urduName: 'کمپیوٹر سائنس',
    group: 'computer',
    icon: Binary,
    color: 'from-violet-600 to-purple-800',
    badge: 'Computer Stream',
    description: 'Hardware, number systems, computer networks, cyber ethics, problem solving, C & Python programming, algorithms, logic gates, and databases.',
    boardWeightage: 'Section A: 12 MCQs (12 marks) | Practical: 10 marks',
    paperFormat: {
      mcqSection: '12 MCQs (15 mins) - Programming syntax & logic questions',
      shortQuestions: 'Section B: 15 short coding/conceptual questions (30 marks)',
      longQuestions: 'Section C: 2 long program writing & design questions (18 marks)',
      totalMarks: 60
    },
    classes: [
      {
        grade: '9th',
        chapters: [
          { number: 1, title: 'Problem Solving & Flowcharts', urduTitle: 'مسائل کا حل اور فلو چارٹ', keyConcepts: ['Problem analysis (5 Ws: What, Who, Why, When, Where)', 'Flowchart symbols and guidelines', 'Algorithms: Definition, notation, step-by-step trace tables'], mcqCount: 55, sloLevel: 'Application', estimatedMinutes: 26 },
          { number: 2, title: 'Binary Number Systems & Conversions', urduTitle: 'نمبر سسٹم', keyConcepts: ['Decimal, Binary, Hexadecimal bases', 'Conversions between bases', 'Binary addition & subtraction', 'Computer memory representations (ASCII, Unicode)'], mcqCount: 60, sloLevel: 'Application', estimatedMinutes: 30 },
          { number: 3, title: 'Computer Networks & Topologies', urduTitle: 'کمپیوٹر نیٹ ورکس', keyConcepts: ['LAN, MAN, WAN definitions', 'Network topologies: Star, Bus, Ring, Mesh', 'Network models: Client-Server vs Peer-to-Peer', 'TCP/IP 5-layer model, IP addressing (IPv4 vs IPv6), Routers'], mcqCount: 54, sloLevel: 'Understanding', estimatedMinutes: 26 },
          { number: 4, title: 'Data Communication & Transmission Media', urduTitle: 'ڈیٹا کمیونیکیشن', keyConcepts: ['Guided media: Twisted pair, Coaxial cable, Fiber optics', 'Unguided media: Radio waves, Microwaves, Infrared, Satellite', 'Asynchronous vs Synchronous transmission', 'Bandwidth and data rates'], mcqCount: 48, sloLevel: 'Knowledge', estimatedMinutes: 24 },
          { number: 5, title: 'Computer Security, Privacy & Cyber Ethics', urduTitle: 'سائبر سیکیورٹی اور اخلاقیات', keyConcepts: ['Malware types: Virus, Worm, Trojan Horse, Ransomware', 'Hacking, Phishing, Denial of Service (DoS)', 'Data encryption & SSL/TLS certificates', 'Copyright laws, software piracy & patents'], mcqCount: 50, sloLevel: 'Understanding', estimatedMinutes: 25 },
        ]
      },
      {
        grade: '10th',
        chapters: [
          { number: 1, title: 'Introduction to Programming (C / Python)', urduTitle: 'پروگرامنگ کا تعارف', keyConcepts: ['Compiler vs Interpreter', 'Structure of a C program (#include, main())', 'Variables, Constants, Reserved words', 'Data types: int, float, char, double'], mcqCount: 58, sloLevel: 'Understanding', estimatedMinutes: 28 },
          { number: 2, title: 'Input, Output and Operators', urduTitle: 'ان پٹ، آؤٹ پٹ اور آپریٹرز', keyConcepts: ['printf() and scanf() formatted I/O', 'Escape sequences (\\n, \\t, \\\\)', 'Arithmetic, Relational, Logical operators (&&, ||, !)', 'Assignment & Increment/Decrement operators (++, --)'], mcqCount: 62, sloLevel: 'Application', estimatedMinutes: 30 },
          { number: 3, title: 'Conditional Control Structures', urduTitle: 'کنڈیشنل سٹرکچرز', keyConcepts: ['if statement & if-else statement', 'Nested if-else statements', 'switch-case statement & break keyword', 'Conditional operator ( ?: )'], mcqCount: 65, sloLevel: 'Application', estimatedMinutes: 32 },
          { number: 4, title: 'Loop Control Structures', urduTitle: 'لوپس', keyConcepts: ['for loop syntax and trace table', 'while loop (entry controlled)', 'do-while loop (exit controlled)', 'Infinite loops & loop termination'], mcqCount: 64, sloLevel: 'Application', estimatedMinutes: 32 },
          { number: 5, title: 'Functions in Programming', urduTitle: 'فنکشنز', keyConcepts: ['Built-in functions (math.h, string.h)', 'User-defined functions: Prototype, Definition, Calling', 'Function arguments & return values', 'Scope of variables: Local vs Global'], mcqCount: 52, sloLevel: 'Understanding', estimatedMinutes: 26 },
          { number: 6, title: 'Logic Gates & Boolean Algebra', urduTitle: 'لاجک گیٹس اور بولین الجبرا', keyConcepts: ['Boolean constants & variables', 'Basic gates: AND, OR, NOT truth tables', 'Universal gates: NAND, NOR', 'De Morgan\'s laws verification using truth tables'], mcqCount: 56, sloLevel: 'Application', estimatedMinutes: 28 },
          { number: 7, title: 'Introduction to Database & SQL Basics', urduTitle: 'ڈیٹا بیس اور ایس کیو ایل', keyConcepts: ['Relational Database Management Systems (RDBMS)', 'Tables, Records (Tuples), Fields (Attributes)', 'Primary Key, Foreign Key, Candidate Key', 'Basic SQL queries: SELECT, INSERT, UPDATE, DELETE'], mcqCount: 48, sloLevel: 'Knowledge', estimatedMinutes: 24 },
        ]
      }
    ],
    highYieldTips: [
      { topic: 'Hexadecimal to Binary Conversion', summary: 'Each Hex digit = exactly 4 binary bits. E.g. A = 1010, F = 1111, 3 = 0011. Hence 3F in Hex = 00111111 in Binary.' },
      { topic: 'Star Topology Key Advantage', summary: 'Easy to install and troubleshoot. Failure of single cable or node does not bring down the rest of the network (only central switch/hub is single point of failure).' },
      { topic: 'C Loop Mechanics', summary: 'for(initialization; condition; increment/decrement). The initialization executes only once; condition is checked before every iteration.' }
    ]
  },
  {
    id: 'mathematics-science',
    name: 'Mathematics (Science Group)',
    urduName: 'ریاضی (سائنس گروپ)',
    group: 'science',
    icon: Calculator,
    color: 'from-amber-600 to-orange-700',
    badge: 'Science Group',
    description: 'Matrices, logarithms, algebraic formulas, factorization, coordinate geometry, circle theorems, quadratic equations, trigonometry, and statistics.',
    boardWeightage: 'Section A: 15 MCQs (15 marks) | Section B: 36 marks | Section C: 24 marks',
    paperFormat: {
      mcqSection: '15 MCQs (20 mins) - Conceptual & direct formula application',
      shortQuestions: 'Section B: 9 short questions out of 14 (36 marks)',
      longQuestions: 'Section C: 3 long questions out of 5 including compulsory Theorem (24 marks)',
      totalMarks: 75
    },
    classes: [
      {
        grade: '9th',
        chapters: [
          { number: 1, title: 'Matrices and Determinants', urduTitle: 'قالب اور مقطع', keyConcepts: ['Order of matrix, Equal matrices, Transpose', 'Determinant of 2x2 matrix & Adjoint', 'Matrix Inversion method', 'Cramer\'s Rule for simultaneous linear equations'], mcqCount: 65, sloLevel: 'Application', estimatedMinutes: 32 },
          { number: 2, title: 'Real and Complex Numbers', urduTitle: 'حقیقی اور غیر حقیقی اعداد', keyConcepts: ['Radicals and Radicands laws', 'Complex numbers z = a + bi (i² = -1)', 'Operations on complex numbers: Addition, Multiplication, Division by conjugate'], mcqCount: 55, sloLevel: 'Understanding', estimatedMinutes: 28 },
          { number: 3, title: 'Logarithms & Scientific Notation', urduTitle: 'لوگارتھم', keyConcepts: ['Scientific notation to standard form and vice versa', 'Common logarithm: Characteristic and Mantissa', 'Four Laws of Logarithms: log(mn), log(m/n), log(m^n), change of base', 'Calculations using log tables'], mcqCount: 60, sloLevel: 'Application', estimatedMinutes: 30 },
          { number: 4, title: 'Algebraic Expressions & Formulas', urduTitle: 'الجبرائی جملے اور کلیے', keyConcepts: ['Rational expressions simplification', 'Key identities: (a+b)³, (a-b)³, a³+b³, a³-b³', 'Surds and their rationalization'], mcqCount: 62, sloLevel: 'Application', estimatedMinutes: 30 },
          { number: 5, title: 'Factorization', urduTitle: 'تجزی', keyConcepts: ['Common factor method, Grouping', 'Middle-term breaking for quadratic polynomials', 'Remainder Theorem and Factor Theorem', 'Cubic polynomials factorization'], mcqCount: 68, sloLevel: 'Application', estimatedMinutes: 35 },
          { number: 6, title: 'Algebraic Manipulation: HCF, LCM & Square Root', urduTitle: 'الجبرائی عمل: عاد اعظم، ذواضعاف اقل اور جزر المربع', keyConcepts: ['HCF & LCM by factorization and division methods', 'Formula HCF × LCM = P(x) × Q(x)', 'Square root of algebraic expressions by division'], mcqCount: 52, sloLevel: 'Application', estimatedMinutes: 26 },
          { number: 7, title: 'Linear Equations and Inequalities', urduTitle: 'یک درجی مساوات اور غیر مساوات', keyConcepts: ['Solving linear equations with rational coefficients', 'Equations with absolute value |x| = a', 'Linear inequalities in one variable and number line'], mcqCount: 50, sloLevel: 'Understanding', estimatedMinutes: 25 },
          { number: 8, title: 'Linear Graphs and their Applications', urduTitle: 'لکیری گراف', keyConcepts: ['Cartesian plane and quadrants', 'Drawing graph of y = mx + c', 'Collinear points check', 'Interpreting conversion graphs'], mcqCount: 46, sloLevel: 'Understanding', estimatedMinutes: 24 },
          { number: 9, title: 'Introduction to Coordinate Geometry', urduTitle: 'مختصائی ہندسہ', keyConcepts: ['Distance formula d = √[(x2 - x1)² + (y2 - y1)²]', 'Collinear vs Non-collinear points verification', 'Mid-point formula R = ((x1+x2)/2, (y1+y2)/2)', 'Equilateral, Isosceles & Scalene triangles proofs'], mcqCount: 54, sloLevel: 'Application', estimatedMinutes: 28 },
          { number: 10, title: 'Congruent Triangles (Theorems)', urduTitle: 'متماثل مثلثیں (مسئلے)', keyConcepts: ['S.A.S ≅ S.A.S postulate', 'S.S.S ≅ S.S.S, A.S.A ≅ A.S.A, H.S ≅ H.S', 'Theorems on sides and angles of triangles'], mcqCount: 45, sloLevel: 'Understanding', estimatedMinutes: 24 },
          { number: 11, title: 'Parallelograms and Triangles (Theorems)', urduTitle: 'متوازی الاضلاع اور مثلثیں (مسئلے)', keyConcepts: ['Opposite sides and opposite angles of parallelogram are equal', 'Diagonals of parallelogram bisect each other'], mcqCount: 44, sloLevel: 'Understanding', estimatedMinutes: 22 },
          { number: 12, title: 'Line Bisectors and Angle Bisectors (Theorems)', urduTitle: 'خطی ناصف اور زاویائی ناصف (مسئلے)', keyConcepts: ['Right bisector of line segment theorem', 'Bisector of an angle theorem (Compulsory Board Theorem topic)'], mcqCount: 48, sloLevel: 'Knowledge', estimatedMinutes: 25 },
        ]
      },
      {
        grade: '10th',
        chapters: [
          { number: 1, title: 'Quadratic Equations', urduTitle: 'دو درجی مساوات', keyConcepts: ['Standard form ax² + bx + c = 0', 'Solving by Factorization', 'Solving by Completing the Square', 'Quadratic Formula x = [-b ± √(b² - 4ac)] / 2a'], mcqCount: 65, sloLevel: 'Application', estimatedMinutes: 32 },
          { number: 2, title: 'Theory of Quadratic Equations', urduTitle: 'دو درجی مساوات کا نظریہ', keyConcepts: ['Discriminant D = b² - 4ac and nature of roots', 'Cube roots of unity: 1, ω, ω² and properties 1 + ω + ω² = 0, ω³ = 1', 'Sum S = -b/a and Product P = c/a of roots', 'Synthetic division'], mcqCount: 64, sloLevel: 'Application', estimatedMinutes: 32 },
          { number: 3, title: 'Variations: Direct and Inverse', urduTitle: 'تغیرات: راست اور معکوس', keyConcepts: ['Ratio and Proportion laws (Invertendo, Alternando, Componendo, Dividendo)', 'Direct variation y = kx and Inverse variation y = k/x', 'Joint variation and K-Method for proofs'], mcqCount: 58, sloLevel: 'Application', estimatedMinutes: 30 },
          { number: 4, title: 'Partial Fractions', urduTitle: 'جزوی کسریں', keyConcepts: ['Proper vs Improper fractions', 'Case 1: Non-repeated linear factors in denominator', 'Case 2: Repeated linear factors', 'Case 3: Non-repeated irreducible quadratic factors'], mcqCount: 52, sloLevel: 'Application', estimatedMinutes: 28 },
          { number: 5, title: 'Sets and Functions', urduTitle: 'سیٹ اور تفاعل', keyConcepts: ['Operations on sets and Venn diagrams', 'De Morgan\'s Laws verification', 'Binary relations and domain/range', 'Into, Onto, One-to-One and Bijective functions'], mcqCount: 56, sloLevel: 'Understanding', estimatedMinutes: 28 },
          { number: 6, title: 'Basic Statistics', urduTitle: 'بنیادی شماریات', keyConcepts: ['Frequency distribution and Cumulative frequency', 'Arithmetic Mean (Direct & Short-cut methods)', 'Median, Mode, Geometric Mean, Harmonic Mean', 'Standard Deviation and Variance s²'], mcqCount: 54, sloLevel: 'Application', estimatedMinutes: 28 },
          { number: 7, title: 'Introduction to Trigonometry', urduTitle: 'مثلثیات کا تعارف', keyConcepts: ['Measurement of angle in sexagesimal (degrees) and circular (radians) system: θ = l/r', 'Trigonometric ratios: sinθ, cosθ, tanθ, cscθ, secθ, cotθ', 'Fundamental identities: sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ', 'Heights and distances (Angles of Elevation & Depression)'], mcqCount: 68, sloLevel: 'Application', estimatedMinutes: 35 },
          { number: 8, title: 'Chords and Tangents of a Circle (Theorems)', urduTitle: 'دائرے کے وتر اور مماس (مسئلے)', keyConcepts: ['Perpendicular from center to chord bisects the chord', 'Tangent to circle is perpendicular to radial segment', 'Compulsory 9-mark Theorem proof in Board exam'], mcqCount: 52, sloLevel: 'Knowledge', estimatedMinutes: 28 },
          { number: 9, title: 'Practical Geometry - Circles', urduTitle: 'عملی ہندسہ - دائرے', keyConcepts: ['Construction of Circumscribed circle about a triangle', 'Inscribed circle in a triangle', 'Escribed circle', 'Direct and Transverse common tangents to two circles'], mcqCount: 42, sloLevel: 'Application', estimatedMinutes: 22 },
        ]
      }
    ],
    highYieldTips: [
      { topic: 'Cramer\'s Rule Steps', summary: 'x = |Ax| / |A| and y = |Ay| / |A|. If |A| = 0, matrix is singular and solution set is not possible.' },
      { topic: 'Roots of Unity Properties', summary: '1 + ω + ω² = 0 | ω³ = 1 | ω⁴ = ω. If (b² - 4ac) > 0 and perfect square, roots are real, rational and unequal.' },
      { topic: 'Componendo-Dividendo Rule', summary: 'If a/b = c/d, then (a + b)/(a - b) = (c + d)/(c - d). Essential for solving trigonometric and radical equations.' },
      { topic: 'Board Compulsory Theorem Tip', summary: 'Always draw clear labeled diagram with pencil. Write Given (معلوم), To Prove (مطلوب), Construction (عمل), and Statements & Reasons (بیانات و دلائل) separately.' }
    ]
  },
  {
    id: 'pakistan-studies',
    name: 'Pakistan Studies',
    urduName: 'مطالعہ پاکستان',
    group: 'compulsory',
    icon: Compass,
    color: 'from-emerald-700 to-teal-800',
    badge: 'Compulsory (All Groups)',
    description: 'Ideological basis, Pakistan Movement, constitutional evolution (1956, 1962, 1973), geography, natural resources, economy, society, foreign policy, and CPEC.',
    boardWeightage: 'Section A: 10 MCQs (10 marks) | Total: 50 marks',
    paperFormat: {
      mcqSection: '10 MCQs (15 mins) - Historical dates, articles & geography',
      shortQuestions: 'Section B: 6 short questions out of 9 (24 marks)',
      longQuestions: 'Section C: 2 comprehensive essay questions (16 marks)',
      totalMarks: 50
    },
    classes: [
      {
        grade: '9th',
        chapters: [
          { number: 1, title: 'Ideological Basis of Pakistan', urduTitle: 'نظریہ پاکستان کے بنیادی عناصر', keyConcepts: ['Definition of Ideology & Two-Nation Theory', 'Statements of Quaid-e-Azam on Pakistan Ideology', 'Allama Iqbal\'s 1930 Allahabad Address', 'Islamic basis of Two-Nation Theory'], mcqCount: 50, sloLevel: 'Understanding', estimatedMinutes: 25 },
          { number: 2, title: 'Making of Pakistan (1906–1947)', urduTitle: 'قیامِ پاکستان کی جدوجہد', keyConcepts: ['Partition of Bengal (1905) & Simla Deputation (1906)', 'Foundation of Muslim League at Dhaka (1906)', 'Lucknow Pact (1916) & Khilafat Movement (1919)', 'Nehru Report (1928) & Quaid\'s Fourteen Points (1929)', 'Lahore Resolution (23 March 1940)', 'Cripps Mission, Cabinet Mission Plan (1946), 3rd June Plan (1947)'], mcqCount: 65, sloLevel: 'Knowledge', estimatedMinutes: 30 },
          { number: 3, title: 'Land and Environment of Pakistan', urduTitle: 'پاکستان کی زمین اور ماحول', keyConcepts: ['Location, Longitude (61°E to 77°E) & Latitude (24°N to 37°N)', 'Neighbors & borders (Durand Line 2,670 km, Radcliffe Line, LOC)', 'Mountain ranges (K2 8,611m, Nanga Parbat 8,126m)', 'Plains, Deserts (Thar, Thal, Cholistan), Coastal area', 'Climatic zones and environmental hazards'], mcqCount: 60, sloLevel: 'Understanding', estimatedMinutes: 28 },
          { number: 4, title: 'History of Pakistan I: Early Challenges (1947–1971)', urduTitle: 'پاکستان کی تاریخ: ابتدائی مسائل', keyConcepts: ['Refugees rehabilitation, Division of military assets, Water disputes', 'Radcliffe Award injustices (Gurdaspur, Ferozepur)', 'Liaquat Ali Khan & Objectives Resolution (1949)', '1956 Constitution & 1962 Constitution features', '1965 Indo-Pak War & Tashkent Declaration', '1971 separation of East Pakistan causes'], mcqCount: 58, sloLevel: 'Understanding', estimatedMinutes: 28 },
        ]
      },
      {
        grade: '10th',
        chapters: [
          { number: 1, title: 'History of Pakistan II: 1971 to Present', urduTitle: 'تاریخِ پاکستان: 1971 سے موجودہ دور', keyConcepts: ['Z.A. Bhutto era: Nationalization policy & 1973 Constitution enactment', 'Salient features of 1973 Constitution (Islamic provisions, bicameral legislature)', 'General Zia-ul-Haq: Islamization measures & Soviet-Afghan War', 'Democratic eras: Benazir Bhutto & Nawaz Sharif tenures', 'Nuclear tests (Youm-e-Takbeer 28 May 1998 at Chagai)', '18th Amendment (2010) provincial autonomy'], mcqCount: 62, sloLevel: 'Knowledge', estimatedMinutes: 30 },
          { number: 2, title: 'Foreign Policy and International Relations of Pakistan', urduTitle: 'پاکستان کے خارجہ تعلقات', keyConcepts: ['Objectives of Pakistan\'s Foreign Policy (Territorial integrity, peace, Islamic solidarity)', 'Pak-China friendship & CPEC (China-Pakistan Economic Corridor)', 'Relations with Muslim World (Saudi Arabia, Turkey, Iran, OIC)', 'Relations with USA, Russia, and Central Asian Republics', 'Kashmir issue at United Nations'], mcqCount: 56, sloLevel: 'Understanding', estimatedMinutes: 28 },
          { number: 3, title: 'Economic Development of Pakistan', urduTitle: 'پاکستان کی معاشی ترقی', keyConcepts: ['Agricultural sector: Major crops, irrigation canals, green revolution', 'Industrial development: Textile, Sugar, Cement, Fertilizer industries', 'Energy resources: Hydel (Tarbela, Mangla), Thermal, Solar, Wind, Nuclear power plants', 'International trade, Seaports (Karachi Port, Port Qasim, Gwadar deep-sea port)'], mcqCount: 58, sloLevel: 'Understanding', estimatedMinutes: 28 },
          { number: 4, title: 'Population, Society and Culture of Pakistan', urduTitle: 'پاکستان کی آبادی، معاشرہ اور ثقافت', keyConcepts: ['Census data & population density growth', 'Cultural diversity: Punjabi, Sindhi, Pashtun, Balochi traditions', 'National language Urdu & regional languages', 'Tourism in Pakistan: Historical monuments & Northern valleys', 'Health, Education & Human Rights issues'], mcqCount: 52, sloLevel: 'Understanding', estimatedMinutes: 26 },
        ]
      }
    ],
    highYieldTips: [
      { topic: '1973 Constitution Essentials', summary: 'Enacted on 14 August 1973. Prime Minister is head of government; President is head of state. Bicameral parliament: National Assembly & Senate.' },
      { topic: 'Major International Borders', summary: 'Pak-Afghan: Durand Line (2,670 km) | Pak-India: 2,912 km | Pak-Iran: 909 km | Pak-China: 523 km. Arabian Sea coastline: 1,046 km.' },
      { topic: 'K2 & Peaks of Pakistan', summary: 'K2 (Godwin-Austen) is 2nd highest peak in the world (8,611 m) in Karakoram range. Nanga Parbat (8,126 m) is in Himalayas.' }
    ]
  },
  {
    id: 'english-matric',
    name: 'English Compulsory',
    urduName: 'انگریزی لازمی',
    group: 'compulsory',
    icon: Languages,
    color: 'from-blue-600 to-cyan-700',
    badge: 'Compulsory (All Groups)',
    description: 'Literature prose, poetry paraphrase, grammar (narration, voice, tenses, prepositions), translation Urdu to English, dialogue, letters, and essay writing.',
    boardWeightage: 'Section A: 15 MCQs (15 marks) | Total: 75 marks',
    paperFormat: {
      mcqSection: '15 MCQs (20 mins) - Grammar, spelling, vocabulary & comprehension',
      shortQuestions: 'Section B: Question answers from textbook chapters (10 marks)',
      longQuestions: 'Section C: Essay / Paragraph (15 marks), Direct/Indirect (5 marks), Translation (8 marks), Pair of words (5 marks)',
      totalMarks: 75
    },
    classes: [
      {
        grade: '9th',
        chapters: [
          { number: 1, title: 'The Saviour of Mankind (PBUH)', keyConcepts: ['Arabia land of dunes', 'Mount Hira solitude and first revelation', 'Vocabulary: eloquence, chaos, compassion'], mcqCount: 40, sloLevel: 'Knowledge', estimatedMinutes: 20 },
          { number: 2, title: 'Patriotism & Civic Responsibility', keyConcepts: ['Definition of Patriotism', 'Qualar-e-Azam on nationhood', 'Major Aziz Bhatti & Nishan-e-Haider heroes'], mcqCount: 38, sloLevel: 'Understanding', estimatedMinutes: 18 },
          { number: 3, title: 'Poem: Daffodils by William Wordsworth', keyConcepts: ['Romantic nature imagery', 'Poetic devices: Simile ("lonely as a cloud"), Personification', 'Paraphrase and summary writing'], mcqCount: 45, sloLevel: 'Understanding', estimatedMinutes: 22 },
          { number: 4, title: 'Hazrat Asma (R.A): Epitome of Courage', keyConcepts: ['Migration (Hijrah) to Madinah support', 'Abu Jahl confrontation with bravery', 'Generosity and character'], mcqCount: 42, sloLevel: 'Knowledge', estimatedMinutes: 20 },
          { number: 5, title: 'The Sultan Ahmad Mosque (Blue Mosque)', keyConcepts: ['Islamic architecture in Istanbul', 'Six minarets and blue tiles interior', 'Historical heritage preservation'], mcqCount: 40, sloLevel: 'Knowledge', estimatedMinutes: 20 },
          { number: 6, title: 'Poem: Stopping by Woods on a Snowy Evening', keyConcepts: ['Robert Frost poem themes', '"Promises to keep, and miles to go before I sleep"', 'Metaphor of life duty vs rest'], mcqCount: 44, sloLevel: 'Understanding', estimatedMinutes: 22 },
          { number: 7, title: 'Grammar: Parts of Speech & Tenses Mastery', keyConcepts: ['Collective nouns & abstract nouns', 'Conditional sentences type 1 & 2', 'Correct use of verb forms in Board MCQs'], mcqCount: 65, sloLevel: 'Application', estimatedMinutes: 32 },
          { number: 8, title: 'Active & Passive Voice (All Tenses)', keyConcepts: ['Rules for Assertive, Interrogative, and Imperative sentences', 'Prepositional verb passives'], mcqCount: 55, sloLevel: 'Application', estimatedMinutes: 28 },
          { number: 9, title: 'Pair of Words & Idiomatic Phrases', keyConcepts: ['Affect/Effect, Accept/Except, Advice/Advise, Bare/Bear, Berth/Birth, Principal/Principle'], mcqCount: 50, sloLevel: 'Knowledge', estimatedMinutes: 25 },
        ]
      },
      {
        grade: '10th',
        chapters: [
          { number: 1, title: 'Hazrat Muhammad (PBUH) An Embodiment of Justice', keyConcepts: ['Impartial justice in disputes (Black Stone, Quraish woman case)', 'Head of State of Madinah model', 'Non-Muslim relations'], mcqCount: 45, sloLevel: 'Knowledge', estimatedMinutes: 22 },
          { number: 2, title: 'Chinese New Year Celebrations', keyConcepts: ['Lunar calendar traditions', 'Spring cleaning bad luck out', 'Red packets (Ang Pow) and reunion dinner'], mcqCount: 40, sloLevel: 'Understanding', estimatedMinutes: 20 },
          { number: 3, title: 'Poem: Try Again by W.E. Hickson', keyConcepts: ['Theme of perseverance', '"If at first you don\'t succeed, try, try again"', 'Rhyme scheme and stanza paraphrase'], mcqCount: 42, sloLevel: 'Understanding', estimatedMinutes: 20 },
          { number: 4, title: 'First Aid & Medical Emergencies', keyConcepts: ['Handling cuts, scrapes, burns, nosebleeds', 'First aid kit essential supplies', 'Emergency ambulance numbers'], mcqCount: 44, sloLevel: 'Application', estimatedMinutes: 22 },
          { number: 5, title: 'Television vs Newspapers', keyConcepts: ['Comparative media study', 'Immediate audio-visual vs in-depth analysis', 'Critical news reading'], mcqCount: 38, sloLevel: 'Understanding', estimatedMinutes: 18 },
          { number: 6, title: 'Poem: Peace by Dr. Hartmann', keyConcepts: ['Wind as destructive gale vs soothing breeze', 'Symbolism of nature harmony'], mcqCount: 40, sloLevel: 'Understanding', estimatedMinutes: 20 },
          { number: 7, title: 'Direct and Indirect Narration (Board Pattern)', keyConcepts: ['Change of tense chart', 'Assertive, Interrogative, Imperative, Exclamatory and Optative changes', 'Board past paper 5-mark conversion rules'], mcqCount: 65, sloLevel: 'Application', estimatedMinutes: 32 },
          { number: 8, title: 'Translation of Urdu Paragraphs into English', keyConcepts: ['Tense consistency in narrative passages', 'Common vocabulary for board translation paragraphs (historical, social, nature)'], mcqCount: 52, sloLevel: 'Application', estimatedMinutes: 28 },
          { number: 9, title: 'High-Scoring Essays for Board Exams', keyConcepts: ['My Last Day at School', 'A True Muslim / Quaid-e-Azam', 'Sports and Games', 'Environmental Pollution'], mcqCount: 35, sloLevel: 'Application', estimatedMinutes: 18 },
        ]
      }
    ],
    highYieldTips: [
      { topic: 'Direct to Indirect Golden Rules', summary: 'If reporting verb is in Past (said), change: Simple Present → Simple Past | Present Perfect → Past Perfect | Will → Would | Now → Then | Today → That day.' },
      { topic: 'Frequent Pair of Words', summary: 'Principal (Head of school / Main) vs Principle (Rule or law) | Loose (Not tight) vs Lose (Misplace) | Stationer (Bookseller) vs Stationary (Still, not moving).' }
    ]
  },
  {
    id: 'urdu-matric',
    name: 'Urdu Compulsory',
    urduName: 'اردو لازمی',
    group: 'compulsory',
    icon: BookOpen,
    color: 'from-emerald-700 to-green-800',
    badge: 'لازمی مضامین',
    description: 'حصہ نثر (خلاصہ و تشریح)، حصہ نظم و غزل (اشعار کی تشریح)، اردو قواعد (تشبیہ، استعارہ، ردیف، قافیہ)، خطوط، درخواستیں اور مفصل مضمون نگاری۔',
    boardWeightage: 'Section A: 15 MCQs (15 marks) | Total: 75 marks',
    paperFormat: {
      mcqSection: '15 MCQs (20 mins) - قواعد، اعراب، محاورات، مصنفین و شعراء کے نام',
      shortQuestions: 'Section B: اشعار کی تشریح (10 marks) + اسباق کے اقتباسات کی تشریح (10 marks)',
      longQuestions: 'Section C: سبق کا خلاصہ (5 marks) + مضمون نویسی (15 marks) + خط/درخواست (10 marks)',
      totalMarks: 75
    },
    classes: [
      {
        grade: '9th',
        chapters: [
          { number: 1, title: 'ہجرتِ نبوی ﷺ (مولانا شبلی نعمانی)', urduTitle: 'سبق: ہجرت نبوی ﷺ', keyConcepts: ['ہجرت کا پس منظر اور غار ثور میں قیام', 'حضرت علیؓ کو امانتیں واپس کرنے کا حکم', 'اقتباسات کی تشریح اور خلاصہ'], mcqCount: 45, sloLevel: 'Knowledge', estimatedMinutes: 22 },
          { number: 2, title: 'مرزا غالب کے عادات و خصائل (مولانا الطاف حسین حالی)', urduTitle: 'سبق: مرزا غالب کے عادات و خصائل', keyConcepts: ['غالب کا اخلاق وسیع ہونا', 'آموں کی پسندیدگی اور دوست نوازی', 'سبق کے الفاظ معانی'], mcqCount: 42, sloLevel: 'Knowledge', estimatedMinutes: 20 },
          { number: 3, title: 'کاہلی (سر سید احمد خان)', urduTitle: 'سبق: کاہلی', keyConcepts: ['دلی قویٰ کو بیکار چھوڑنا کاہلی ہے', 'محنت کی عادت اور قومی ترقی', 'اصلاحی پہلو'], mcqCount: 40, sloLevel: 'Understanding', estimatedMinutes: 20 },
          { number: 4, title: 'حصہ نظم: حمد (خواجہ الطاف حسین حالی) و نعت (امیر مینائی)', urduTitle: 'حصہ نظم: حمد و نعت', keyConcepts: ['اشعار کا مفہوم اور تشریح', 'مرکزی خیال اور شاعر کا تعارف'], mcqCount: 48, sloLevel: 'Understanding', estimatedMinutes: 24 },
          { number: 5, title: 'حصہ غزل: میر تقی میر اور خواجہ حیدر علی آتش', urduTitle: 'حصہ غزل', keyConcepts: ['ہستی اپنی حباب کی سی ہے', 'غزل کی ہیئت: مطلع، مقطع، قافیہ، ردیف'], mcqCount: 50, sloLevel: 'Understanding', estimatedMinutes: 25 },
          { number: 6, title: 'اردو قواعد: اسم کی اقسام اور تشبیہ کے ارکان', urduTitle: 'قواعد: ارکانِ تشبیہ', keyConcepts: ['تشبیہ کے 5 ارکان: مشبہ، مشبہ بہ، وجہ شبہ، غرض تشبیہ، حرف تشبیہ', 'سابقے اور لاحقے، اعراب'], mcqCount: 60, sloLevel: 'Application', estimatedMinutes: 30 },
          { number: 7, title: 'درخواست نویسی اور خطوط نویسی (بورڈ پیٹرن)', urduTitle: 'درخواست اور خطوط نگاری', keyConcepts: ['اصولِ درخواست نویسی اور باقاعدہ فارمیٹ', 'والد کے نام خرچ کے لیے خط، دوست کے نام تعزیت'], mcqCount: 35, sloLevel: 'Application', estimatedMinutes: 18 },
        ]
      },
      {
        grade: '10th',
        chapters: [
          { number: 1, title: 'مرزا محمد سعید (شاہد احمد دہلوی)', urduTitle: 'سبق: مرزا محمد سعید', keyConcepts: ['مرزا صاحب کی علمیت اور بے نیازی', 'دہلی کے علمی حلقے اور اندازِ گفتگو'], mcqCount: 40, sloLevel: 'Knowledge', estimatedMinutes: 20 },
          { number: 2, title: 'نظریۂ پاکستان (ڈاکٹر غلام مصطفیٰ خان)', urduTitle: 'سبق: نظریۂ پاکستان', keyConcepts: ['اسلامی تہذیب کا احیاء', 'مسلمانوں کی جداگانہ قومیت اور مقاصد'], mcqCount: 44, sloLevel: 'Understanding', estimatedMinutes: 22 },
          { number: 3, title: 'علی بخش (قدرت اللہ شہاب)', urduTitle: 'سبق: علی بخش (علامہ اقبال کے خادم)', keyConcepts: ['علامہ اقبال کی گھریلو زندگی اور سادگی', 'علی بخش کے تاثرات اور محبت'], mcqCount: 42, sloLevel: 'Knowledge', estimatedMinutes: 20 },
          { number: 4, title: 'حصہ نظم: میدانِ کربلا میں گرمی کی شدت (میر انیس)', urduTitle: 'نظم: میدان کربلا میں گرمی کی شدت', keyConcepts: ['مرثیہ نگاری اور میر انیس کا کمال', 'مبالغہ اور استعاراتی زبان کا استعمال'], mcqCount: 48, sloLevel: 'Understanding', estimatedMinutes: 24 },
          { number: 5, title: 'حصہ غزل: حسرت موہانی اور جگر مراد آبادی', urduTitle: 'حصہ غزل', keyConcepts: ['چپکے چپکے رات دن آنسو بہانا یاد ہے', 'تصوف اور تغزل کی آمیزش'], mcqCount: 50, sloLevel: 'Understanding', estimatedMinutes: 25 },
          { number: 6, title: 'اردو قواعد: استعارہ، تلمیح اور صنائع و بدائع', urduTitle: 'قواعد: استعارہ اور تلمیح', keyConcepts: ['استعارہ کے ارکان: مستعار لہ، مستعار منہ، وجہ جامع', 'تلمیح کی تعریف اور مشہور تلمیحات (آتشِ نمرود، ابنِ مریم، چاہِ کنعان)'], mcqCount: 65, sloLevel: 'Application', estimatedMinutes: 32 },
          { number: 7, title: 'مضمون نگاری بورڈ کے اہم موضوعات', urduTitle: 'مضمون نویسی (15 نمبر)', keyConcepts: ['حب الوطنی، علامہ اقبال، محنت کی برکت، سائنس کے کرشمے، وقت کی پابندی'], mcqCount: 35, sloLevel: 'Application', estimatedMinutes: 18 },
        ]
      }
    ],
    highYieldTips: [
      { topic: 'تشبیہ اور استعارہ میں فرق', summary: 'تشبیہ: ایک چیز کو دوسری جیسا کہنا (جیسے: میرا بیٹا شیر کی مانند بہادر ہے)۔ استعارہ: دوسری چیز ہی قرار دینا (جیسے: میرا شیر آیا ہے)۔' },
      { topic: 'ردیف اور قافیہ', summary: 'قافیہ: ہم آواز الفاظ جو ردیف سے پہلے آتے ہیں (جیسے: دل، گل، بل)۔ ردیف: وہ ہو بہو لفظ جو ہر شعر کے آخر میں دہرایا جائے (جیسے: یاد ہے)۔' }
    ]
  },
  {
    id: 'islamiat-matric',
    name: 'Islamiat & Tarjumat-ul-Quran',
    urduName: 'اسلامیات لازمی و ترجمۃ القرآن',
    group: 'compulsory',
    icon: Moon,
    color: 'from-teal-700 to-emerald-900',
    badge: 'Compulsory (All Groups)',
    description: 'Surah Al-Anfal, Surah Al-Ahzab, Surah Al-Mumtahanah, Ahadith-e-Nabawiyyah with translation & commentary, thematic study, and Tarjumat-ul-Quran syllabus.',
    boardWeightage: 'Section A: 10 MCQs (10 marks) | Total: 50 marks',
    paperFormat: {
      mcqSection: '10 MCQs (15 mins) - Quranic word meanings, dates & Hadith',
      shortQuestions: 'Section B: Quranic verses translation & short questions (24 marks)',
      longQuestions: 'Section C: Hadith translation & Thematic long question (16 marks)',
      totalMarks: 50
    },
    classes: [
      {
        grade: '9th',
        chapters: [
          { number: 1, title: 'سورۃ الانفال (آیات 1 تا 75 مع لفظی و بامحاورہ ترجمہ)', urduTitle: 'سورۃ الانفال', keyConcepts: ['غزوۂ بدر کے مالِ غنیمت کے احکام', 'مومنین کی 5 صفات', 'کفار کی سازشیں اور فتح حق'], mcqCount: 65, sloLevel: 'Understanding', estimatedMinutes: 32 },
          { number: 2, title: 'منتخب احادیثِ مبارکہ (حدیث 1 تا 10)', urduTitle: 'احادیثِ مبارکہ', keyConcepts: ['طلب العلم فريضة على كل مسلم', 'خیرکم من تعلم القرآن وعلمه', 'لا یؤمن احدکم حتی یحب لاخیہ ما یحب لنفسہ'], mcqCount: 50, sloLevel: 'Knowledge', estimatedMinutes: 25 },
          { number: 3, title: 'موضوعاتی مطالعہ: قرآن مجید کا تعارف و اعجاز', urduTitle: 'قرآن مجید کا تعارف', keyConcepts: ['نزولِ وحی، کتابتِ وحی، حفاظ اور جمع و تدوین', 'قرآن مجید کی حفاظت کی الٰہی ذمہ داری'], mcqCount: 45, sloLevel: 'Knowledge', estimatedMinutes: 22 },
          { number: 4, title: 'موضوعاتی مطالعہ: اللہ تعالیٰ اور اس کے رسول ﷺ کی محبت و اطاعت', urduTitle: 'اطاعتِ رسول ﷺ', keyConcepts: ['من یطع الرسول فقد اطاع اللہ', 'سیرتِ طیبہ بطور بہترین نمونہ'], mcqCount: 40, sloLevel: 'Understanding', estimatedMinutes: 20 },
        ]
      },
      {
        grade: '10th',
        chapters: [
          { number: 1, title: 'سورۃ الاحزاب اور سورۃ الممتحنہ (ترجمہ و تشریح)', urduTitle: 'سورۃ الاحزاب و الممتحنہ', keyConcepts: ['غزوۂ خندق (احزاب) کے واقعات اور منافقین کا کردار', 'ازواجِ مطہرات کے احکام اور پردہ', 'عقیدۂ ختمِ نبوت (خاتم النبیین)'], mcqCount: 60, sloLevel: 'Understanding', estimatedMinutes: 30 },
          { number: 2, title: 'منتخب احادیثِ مبارکہ (حدیث 11 تا 20)', urduTitle: 'احادیثِ مبارکہ', keyConcepts: ['المسلم من سلم المسلمون من لسانہ ویدہ', 'لیس منا من غشنا', 'احادیث کا ترجمہ اور روزمرہ زندگی پر اطلاق'], mcqCount: 50, sloLevel: 'Knowledge', estimatedMinutes: 25 },
          { number: 3, title: 'موضوعاتی مطالعہ: زکوٰۃ، علم اور اخلاقی اقدار', urduTitle: 'زکوٰۃ اور خاندانی زندگی', keyConcepts: ['معاشرتی عدل میں زکوٰۃ کا کردار', 'خاندانی نظام اور والدین کے حقوق'], mcqCount: 45, sloLevel: 'Understanding', estimatedMinutes: 22 },
          { number: 4, title: 'ترجمۃ القرآن مجید (نئے نصاب کے مطابق)', urduTitle: 'ترجمۃ القرآن بورڈ نصاب', keyConcepts: ['پارہ وار اہم سورتوں کا تعارف، مرکزی مضامین اور سورتوں کے ناموں کی وجہ تسمیہ'], mcqCount: 55, sloLevel: 'Understanding', estimatedMinutes: 28 },
        ]
      }
    ],
    highYieldTips: [
      { topic: 'آیتِ خاتم النبیین (سورۃ الاحزاب آیت 40)', summary: 'مَّا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ وَلَٰكِن رَّسُولَ اللَّهِ وَخَاتَمَ النَّبِيِّينَ. حضور ﷺ کے بعد کوئی نیا نبی نہیں آئے گا۔' },
      { topic: 'احادیث بورڈ ترجمہ', summary: 'بورڈ امتحان میں 3 نمبر ترجمہ کے اور 1 نمبر تشریح کے ہوتے ہیں۔ ہمیشہ لفظی صحت کے ساتھ بامحاورہ ترجمہ لکھیں۔' }
    ]
  },
  {
    id: 'general-science-matric',
    name: 'General Science (Arts Group)',
    urduName: 'جنرل سائنس (آرٹس گروپ)',
    group: 'arts',
    icon: Atom,
    color: 'from-amber-700 to-yellow-800',
    badge: 'Arts / General Group',
    description: 'Human health, diseases, environment, energy forms, everyday chemistry, basic electricity, telecom, and science & technology in Pakistan for General Matric students.',
    boardWeightage: 'Section A: 15 MCQs (15 marks) | Total: 75 marks',
    paperFormat: {
      mcqSection: '15 MCQs (20 mins) - Daily life science principles',
      shortQuestions: 'Section B: Short conceptual questions (36 marks)',
      longQuestions: 'Section C: Long descriptive questions (24 marks)',
      totalMarks: 75
    },
    classes: [
      {
        grade: '9th',
        chapters: [
          { number: 1, title: 'Introduction and Role of Science in Society', urduTitle: 'سائنس کا تعارف اور کردار', keyConcepts: ['Scientific method', 'Contributions of Muslim scientists (Ibn al-Haytham, Al-Razi, Jabir)', 'Branches of Science'], mcqCount: 40, sloLevel: 'Knowledge', estimatedMinutes: 20 },
          { number: 2, title: 'Our Life and Chemistry', urduTitle: 'ہماری زندگی اور کیمسٹری', keyConcepts: ['Air composition, Water as life solvent', 'Elements essential for human body (Carbon, Hydrogen, Oxygen, Nitrogen, Calcium, Iron)'], mcqCount: 48, sloLevel: 'Understanding', estimatedMinutes: 24 },
          { number: 3, title: 'Biochemistry and Biotechnology', urduTitle: 'بائیو کیمسٹری اور بائیو ٹیکنالوجی', keyConcepts: ['Carbohydrates, Fats, Proteins in food', 'Enzymes, DNA, Vitamins', 'Fermentation in food and medicine'], mcqCount: 50, sloLevel: 'Understanding', estimatedMinutes: 25 },
          { number: 4, title: 'Human Health, Diseases and Prevention', urduTitle: 'انسانی صحت اور بیماریاں', keyConcepts: ['Infectious diseases (Flu, Malaria, Dengue, TB, Polio)', 'Non-infectious (Diabetes, Heart attack, Cancer)', 'Immunity and vaccination schedule (EPI)'], mcqCount: 55, sloLevel: 'Application', estimatedMinutes: 28 },
          { number: 5, title: 'Environment and Natural Resources', urduTitle: 'ماحول اور قدرتی وسائل', keyConcepts: ['Renewable resources (Sun, Wind, Water) vs Non-renewable (Coal, Gas, Oil)', 'Pollution types and recycling of plastics and glass'], mcqCount: 48, sloLevel: 'Understanding', estimatedMinutes: 24 },
        ]
      },
      {
        grade: '10th',
        chapters: [
          { number: 1, title: 'Energy and Power Resources', urduTitle: 'توانائی اور توانائی کے ذرائع', keyConcepts: ['Forms of energy and transformation', 'Hydel power, Thermal power, Solar energy, Nuclear energy', 'Energy conservation at home'], mcqCount: 50, sloLevel: 'Understanding', estimatedMinutes: 25 },
          { number: 2, title: 'Current Electricity in Everyday Life', urduTitle: 'کرنٹ الیکٹریسٹی اور گھریلو استعمال', keyConcepts: ['Electric circuits, Voltage, Current, Resistance', 'Domestic electric wiring, Fuses, Earthing, Electricity meter reading (kWh)'], mcqCount: 55, sloLevel: 'Application', estimatedMinutes: 28 },
          { number: 3, title: 'Basic Electronics & Modern Communications', urduTitle: 'الیکٹرانکس اور مواصلات', keyConcepts: ['Semiconductors, Diodes, Transistors', 'Radio, Television, Telephone, Radar, Mobile phones, Fiber optics'], mcqCount: 52, sloLevel: 'Knowledge', estimatedMinutes: 26 },
          { number: 4, title: 'Science & Technology in Pakistan', urduTitle: 'پاکستان میں سائنس اور ٹیکنالوجی', keyConcepts: ['SUPARCO (Space and Upper Atmosphere Research Commission)', 'PAEC (Pakistan Atomic Energy Commission)', 'KRL, PCSIR institutes and contributions'], mcqCount: 45, sloLevel: 'Knowledge', estimatedMinutes: 22 },
        ]
      }
    ],
    highYieldTips: [
      { topic: 'Vaccines & EPI in Pakistan', summary: 'EPI (Expanded Programme on Immunization) protects against 10 preventable childhood diseases including Polio, Measles, Tuberculosis (BCG), Tetanus, Hepatitis B.' },
      { topic: '1 Unit of Electricity', summary: '1 Electrical Unit = 1 Kilowatt-Hour (1 kWh) = 1000 Watts used for 1 hour = 3.6 × 10⁶ Joules.' }
    ]
  },
  {
    id: 'general-math-matric',
    name: 'General Mathematics (Arts Group)',
    urduName: 'جنرل ریاضی (آرٹس گروپ)',
    group: 'arts',
    icon: Calculator,
    color: 'from-amber-800 to-orange-900',
    badge: 'Arts / General Group',
    description: 'Percentage, ratio/proportion, Zakat, Ushr, inheritance, consumer math (taxes, commercial banking), sequences, algebra, statistics, and practical mensuration.',
    boardWeightage: 'Section A: 15 MCQs (15 marks) | Total: 75 marks',
    paperFormat: {
      mcqSection: '15 MCQs (20 mins) - Consumer math, percentages, formulas',
      shortQuestions: 'Section B: 9 short calculations out of 14 (36 marks)',
      longQuestions: 'Section C: 3 long descriptive problem-solving questions (24 marks)',
      totalMarks: 75
    },
    classes: [
      {
        grade: '9th',
        chapters: [
          { number: 1, title: 'Percentage, Ratio and Proportion', urduTitle: 'فیصد، نسبت اور تناسب', keyConcepts: ['Expressing fractions as percentages', 'Direct and Inverse proportions', 'Compound proportion word problems'], mcqCount: 52, sloLevel: 'Application', estimatedMinutes: 26 },
          { number: 2, title: 'Zakat, Ushr and Inheritance Distribution', urduTitle: 'زکوٰۃ، عشر اور وراثت', keyConcepts: ['Nisab and Zakat rate (2.5%)', 'Ushr on rain-watered land (10%) and canal-watered (5%)', 'Islamic inheritance shares for widow, sons, and daughters'], mcqCount: 60, sloLevel: 'Application', estimatedMinutes: 30 },
          { number: 3, title: 'Business Mathematics: Profit, Loss & Discount', urduTitle: 'کاروباری ریاضی: نفع، نقصان، رعایت', keyConcepts: ['Cost price, Selling price, Marked price', 'Profit% = (Profit/CP) × 100', 'Successive discounts calculations'], mcqCount: 54, sloLevel: 'Application', estimatedMinutes: 28 },
          { number: 4, title: 'Consumer Mathematics: Taxation & Utility Bills', urduTitle: 'صارفین کی ریاضی: ٹیکس اور بلز', keyConcepts: ['Income tax slabs calculation', 'Sales tax, Property tax', 'Calculating electricity and gas utility bills with taxes'], mcqCount: 50, sloLevel: 'Application', estimatedMinutes: 25 },
          { number: 5, title: 'Commercial Banking & Insurance', urduTitle: 'کمرشل بینکنگ اور انشورنس', keyConcepts: ['Simple markup I = P × R × T', 'Compound profit / Interest', 'Life insurance premium and vehicle insurance'], mcqCount: 48, sloLevel: 'Understanding', estimatedMinutes: 24 },
        ]
      },
      {
        grade: '10th',
        chapters: [
          { number: 1, title: 'Algebraic Formulas and Factorization', urduTitle: 'الجبرائی کلیے اور تجزی', keyConcepts: ['(a+b)², (a-b)², a²-b² formulas', 'Factorizing quadratic expressions', 'HCF and LCM of algebraic expressions'], mcqCount: 56, sloLevel: 'Application', estimatedMinutes: 28 },
          { number: 2, title: 'Linear Equations and Inequalities', urduTitle: 'یک درجی مساوات اور غیر مساوات', keyConcepts: ['Solving simple linear equations', 'Cross multiplication method', 'Linear inequalities graphs'], mcqCount: 50, sloLevel: 'Understanding', estimatedMinutes: 25 },
          { number: 3, title: 'Quadratic Equations & Solution Methods', urduTitle: 'دو درجی مساوات', keyConcepts: ['Standard form ax² + bx + c = 0', 'Solution by factorization', 'Solution by quadratic formula'], mcqCount: 54, sloLevel: 'Application', estimatedMinutes: 28 },
          { number: 4, title: 'Basic Statistics & Grouped Data', urduTitle: 'بنیادی شماریات', keyConcepts: ['Frequency distribution tables', 'Mean, Median and Mode of grouped data', 'Histograms and frequency polygons'], mcqCount: 52, sloLevel: 'Application', estimatedMinutes: 26 },
          { number: 5, title: 'Practical Geometry & Mensuration', urduTitle: 'عملی ہندسہ اور پیمائش', keyConcepts: ['Construction of triangles and parallelograms', 'Area and perimeter of plane figures', 'Volume and surface area of cylinder and sphere'], mcqCount: 46, sloLevel: 'Application', estimatedMinutes: 24 },
        ]
      }
    ],
    highYieldTips: [
      { topic: 'Ushr Rate Rule', summary: '10% (1/10th) on agricultural produce watered naturally by rain/river; 5% (1/20th) on produce watered by artificial tube-wells or irrigation pumps.' },
      { topic: 'Inheritance Shares', summary: 'Widow gets 1/8th of estate if deceased has children (or 1/4th if no children). A son receives double the share of a daughter.' }
    ]
  },
  {
    id: 'sindhi-matric',
    name: 'Sindhi Compulsory / Salees',
    urduName: 'سنڌي سليس / لازمي',
    group: 'compulsory',
    icon: Compass,
    color: 'from-amber-600 to-yellow-700',
    badge: 'Sindh Board (Compulsory)',
    description: 'Sindhi prose lessons, Shah Jo Risalo poetry tashreeh, Viyakaran grammar, idioms (پهاڪا), letter writing, and essay writing for Matric.',
    boardWeightage: 'Section A: 15 MCQs (15 marks) | Total: 75 marks',
    paperFormat: {
      mcqSection: '15 MCQs (20 mins) - Grammar, author names & lesson comprehension',
      shortQuestions: 'Section B: Question answers & Poetry tashreeh (36 marks)',
      longQuestions: 'Section C: Lesson summary, Essay writing & Letters (24 marks)',
      totalMarks: 75
    },
    classes: [
      {
        grade: '9th',
        chapters: [
          { number: 1, title: 'اخلاقِ نبوي ﷺ (نثر سبق)', urduTitle: 'سبق: اخلاق نبوی ﷺ', keyConcepts: ['حضور ﷺ جي سيرت طيبه، سخاوت ۽ انصاف', 'سبق جا الفاظ معنيٰ ۽ سوال جواب'], mcqCount: 40, sloLevel: 'Knowledge', estimatedMinutes: 20 },
          { number: 2, title: 'شاهه عبداللطيف ڀٽائي رحه جي زندگي ۽ شاعري', urduTitle: 'شاهه عبداللطيف ڀٽائي رحه', keyConcepts: ['شاهه سائين جي ولادت (هالا حويلي)', 'سُر ڪلياڻ ۽ سُر سارنگ جا بيت ۽ روحاني تشريح'], mcqCount: 45, sloLevel: 'Understanding', estimatedMinutes: 22 },
          { number: 3, title: 'سنڌي وياڪرڻ: اسم ۽ ضمير جا قسم', urduTitle: 'سنڌي گرامر: اسم ۽ ضمير', keyConcepts: ['اسم خاص، عام، جنس، ذات', 'ضمير متڪلم، حاضر، غائب'], mcqCount: 50, sloLevel: 'Application', estimatedMinutes: 25 },
          { number: 4, title: 'سنڌي خط نويسي ۽ عريضو (درخواست)', urduTitle: 'سنڌي خط ۽ عريضو', keyConcepts: ['هيڊماستر صاحب ڏانهن بيماريءَ جي موڪل جو عريضو', 'دوست ڏانهن خط جو فارميٽ'], mcqCount: 30, sloLevel: 'Application', estimatedMinutes: 15 },
        ]
      },
      {
        grade: '10th',
        chapters: [
          { number: 1, title: 'سنڌ جا قديم ماڳ ۽ موهن جو دڙو', urduTitle: 'موهن جو دڙو (قديم ماڳ)', keyConcepts: ['موهن جو دڙو جي دريافت (1922)', 'قديم اڏاوت، ترڻ جو تلائن ۽ نالين جو سرشتو'], mcqCount: 42, sloLevel: 'Knowledge', estimatedMinutes: 20 },
          { number: 2, title: 'سچل سرمست ۽ سامي جي شاعري', urduTitle: 'سچل سرمست ۽ سامي', keyConcepts: ['هفت زبان شاعر سچل سرمست جا بيت', 'سامي جا سلوڪ ۽ وحدت الوجود جو پيغام'], mcqCount: 46, sloLevel: 'Understanding', estimatedMinutes: 22 },
          { number: 3, title: 'سنڌي وياڪرڻ: فعل ۽ ان جون حالتون', urduTitle: 'سنڌي وياڪرڻ: فعل', keyConcepts: ['فعل لازمي، فعل متعدي، فعل معروف، فعل مجهول', 'پهاڪا ۽ اصطلاح جا جملا ٺاهڻ'], mcqCount: 55, sloLevel: 'Application', estimatedMinutes: 28 },
          { number: 4, title: 'سنڌي مضمون نگاري (بورڊ جا اهم موضوع)', urduTitle: 'سنڌي مضمون نگاري', keyConcepts: ['علم جا فائدا، محنت، سنڌ جي ثقافت، علام اقبال، وقت جي پابندي'], mcqCount: 35, sloLevel: 'Application', estimatedMinutes: 18 },
        ]
      }
    ],
    highYieldTips: [
      { topic: 'شاهه عبداللطيف ڀٽائي رحه', summary: '1689ع ۾ هالا حويلي ۾ ڄاوا. ڀٽ شاهه ۾ آرامي آهن. سندن رسالي ۾ 30 سُر شامل آهن.' },
      { topic: 'سنڌي پهاڪا', summary: '”جيڪو ڪري سو پائي“ (جيڪو نيڪي ڪندو سو نيڪ نتيجو ڏسندو). ”ٻه ٻڏا ٽيون اڌو گابرو“.' }
    ]
  }
];

export const MatricBoardHub: React.FC = () => {
  const { setTab, setSelectedCategorySlug } = useApp();
  const [selectedGroup, setSelectedGroup] = useState<'all' | 'science' | 'computer' | 'arts' | 'compulsory'>('all');
  const [selectedGrade, setSelectedGrade] = useState<'all' | '9th' | '10th'>('all');
  const [selectedBoard, setSelectedBoard] = useState<string>('fbise');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('physics');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTip, setActiveTip] = useState<{ topic: string; summary: string } | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Filtered Subject List according to selectedGroup
  const availableSubjects = useMemo(() => {
    if (selectedGroup === 'all') return MATRIC_SUBJECTS;
    if (selectedGroup === 'science') {
      return MATRIC_SUBJECTS.filter((s) => s.group === 'science' || s.group === 'compulsory');
    }
    if (selectedGroup === 'computer') {
      return MATRIC_SUBJECTS.filter((s) => s.id === 'computer-science' || s.id === 'physics' || s.id === 'chemistry' || s.id === 'mathematics-science' || s.group === 'compulsory');
    }
    if (selectedGroup === 'arts') {
      return MATRIC_SUBJECTS.filter((s) => s.group === 'arts' || s.group === 'compulsory');
    }
    if (selectedGroup === 'compulsory') {
      return MATRIC_SUBJECTS.filter((s) => s.group === 'compulsory');
    }
    return MATRIC_SUBJECTS;
  }, [selectedGroup]);

  // Active Subject
  const activeSubject = useMemo(() => {
    return MATRIC_SUBJECTS.find((s) => s.id === selectedSubjectId) || availableSubjects[0] || MATRIC_SUBJECTS[0];
  }, [selectedSubjectId, availableSubjects]);

  // Filtered Chapters based on selectedGrade & searchQuery
  const filteredChapters = useMemo(() => {
    const list: {
      grade: '9th' | '10th';
      number: number;
      title: string;
      urduTitle?: string;
      keyConcepts: string[];
      mcqCount: number;
      sloLevel: 'Knowledge' | 'Understanding' | 'Application';
      estimatedMinutes: number;
    }[] = [];

    activeSubject.classes.forEach((c) => {
      if (selectedGrade === 'all' || selectedGrade === c.grade) {
        c.chapters.forEach((ch) => {
          if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            const matches = 
              ch.title.toLowerCase().includes(q) || 
              (ch.urduTitle && ch.urduTitle.includes(q)) ||
              ch.keyConcepts.some((kc) => kc.toLowerCase().includes(q));
            if (!matches) return;
          }
          list.push({ ...ch, grade: c.grade });
        });
      }
    });

    return list;
  }, [activeSubject, selectedGrade, searchQuery]);

  // Total MCQs in active subject
  const totalSubjectMcqs = useMemo(() => {
    return activeSubject.classes.reduce(
      (sum, cls) => sum + cls.chapters.reduce((cSum, ch) => cSum + ch.mcqCount, 0),
      0
    );
  }, [activeSubject]);

  // Handle Text to Speech
  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    if (isSpeaking) {
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleStartPractice = (subject: MatricSubject) => {
    if (subject.id === 'physics' || subject.id === 'chemistry' || subject.id === 'biology' || subject.id === 'general-science-matric') {
      setSelectedCategorySlug('everyday-science');
    } else if (subject.id === 'mathematics-science' || subject.id === 'general-math-matric') {
      setSelectedCategorySlug('basic-mathematics');
    } else if (subject.id === 'computer-science') {
      setSelectedCategorySlug('computer-it');
    } else if (subject.id === 'english-matric') {
      setSelectedCategorySlug('english');
    } else if (subject.id === 'urdu-matric') {
      setSelectedCategorySlug('urdu-literature');
    } else if (subject.id === 'sindhi-matric') {
      setSelectedCategorySlug('sindhi-language');
    } else if (subject.id === 'pakistan-studies') {
      setSelectedCategorySlug('pakistan-studies');
    } else if (subject.id === 'islamiat-matric') {
      setSelectedCategorySlug('islamic-studies');
    }
    setTab('mcqs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Hero Banner with Distinctive Modern Sky/Indigo Board Exam Styling */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-700 via-indigo-800 to-slate-900 text-white p-6 sm:p-8 shadow-xl shadow-indigo-950/20">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-sky-100 text-xs font-bold border border-white/20">
              <span>🏫</span>
              <span>Matriculation & SSC Board Hub (Class 9th & 10th)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-display">
              Matric (9th & 10th) Board Examination Portal
            </h2>
            <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed">
              Comprehensive SLO-aligned syllabus for Science Group, Computer Science Stream, General/Arts Group & Compulsory subjects. Targeted preparation for FBISE Federal Board, Punjab BISEs, Sindh BSEK, and Provincial Boards.
            </p>

            {/* Quick Stat Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold">
              <span className="px-3 py-1 rounded-xl bg-white/15 backdrop-blur-xs text-white border border-white/10 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>12 Complete Board Subjects</span>
              </span>
              <span className="px-3 py-1 rounded-xl bg-white/15 backdrop-blur-xs text-white border border-white/10 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-amber-400" />
                <span>SLO Conceptual Paper Pattern</span>
              </span>
              <span className="px-3 py-1 rounded-xl bg-white/15 backdrop-blur-xs text-white border border-white/10">
                ⭐ 1,800+ Board Solved Questions
              </span>
            </div>
          </div>

          {/* Quick Action Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={() => handleStartPractice(activeSubject)}
              className="px-5 py-3 rounded-2xl bg-white text-indigo-950 font-extrabold text-sm shadow-lg hover:bg-sky-50 transition cursor-pointer flex items-center justify-center gap-2 group"
            >
              <Play className="w-4 h-4 fill-indigo-950 group-hover:scale-110 transition-transform" />
              <span>Practice {activeSubject.name} MCQs</span>
            </button>
          </div>
        </div>
      </div>

      {/* Target Board & Stream Selectors Toolbar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        
        {/* Stream / Group Filter */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
          <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
            Academic Stream:
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {[
              { id: 'all', label: 'All Subjects' },
              { id: 'science', label: 'Biology Science' },
              { id: 'computer', label: 'Computer Science' },
              { id: 'arts', label: 'General / Arts' },
            ].map((g) => (
              <button
                key={g.id}
                onClick={() => setSelectedGroup(g.id as any)}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer truncate ${
                  selectedGroup === g.id
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/40'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        {/* Class Filter (Both, 9th, 10th) */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
          <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
            Select Class (SSC Part):
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { id: 'all', label: '9th & 10th' },
              { id: '9th', label: '9th (SSC-I)' },
              { id: '10th', label: '10th (SSC-II)' },
            ].map((gr) => (
              <button
                key={gr.id}
                onClick={() => setSelectedGrade(gr.id as any)}
                className={`px-2 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                  selectedGrade === gr.id
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-sky-950/40'
                }`}
              >
                {gr.label}
              </button>
            ))}
          </div>
        </div>

        {/* Target Board Dropdown */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
          <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
            Target Examination Board:
          </label>
          <select
            value={selectedBoard}
            onChange={(e) => setSelectedBoard(e.target.value)}
            className="w-full px-3 py-2 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          >
            <option value="fbise">FBISE Federal Board (Islamabad - SLO Pattern)</option>
            <option value="punjab">Punjab Boards (BISE Lahore, Rwp, Fsd, Multan)</option>
            <option value="sindh">Sindh Boards (BSEK Karachi, Sukkur, Hyd, Lrk)</option>
            <option value="kpk">KPK Boards (BISE Peshawar, Abbottabad, Swat)</option>
            <option value="balochistan">Balochistan Board (BISE Quetta)</option>
            <option value="ajk">AJK Board (Mirpur)</option>
          </select>
        </div>
      </div>

      {/* 12 Subjects Horizontal / Grid Picker */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-sky-600" />
            <span>Matric Subjects Directory ({availableSubjects.length} Available)</span>
          </h3>
          <span className="text-xs text-slate-500 font-medium">
            Active: <strong className="text-sky-600 dark:text-sky-400">{activeSubject.name}</strong>
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
          {availableSubjects.map((subject) => {
            const Icon = subject.icon;
            const isSelected = activeSubject.id === subject.id;
            return (
              <button
                key={subject.id}
                onClick={() => {
                  setSelectedSubjectId(subject.id);
                  setSearchQuery('');
                }}
                className={`flex flex-col items-start p-3 rounded-2xl border text-left transition-all cursor-pointer select-none ${
                  isSelected
                    ? 'border-sky-500 bg-sky-50/90 dark:bg-sky-950/50 shadow-md ring-2 ring-sky-400/50'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-sky-300 hover:bg-slate-50 dark:hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shadow-xs ${
                    isSelected ? 'bg-sky-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-md ${
                    subject.group === 'science' ? 'bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300' :
                    subject.group === 'computer' ? 'bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300' :
                    subject.group === 'arts' ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300' :
                    'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                  }`}>
                    {subject.group}
                  </span>
                </div>
                <span className="text-xs font-bold leading-tight line-clamp-1 text-slate-900 dark:text-white">
                  {subject.name}
                </span>
                {subject.urduName && (
                  <span className="text-[10px] text-slate-600 dark:text-slate-300 font-urdu line-clamp-1 mt-0.5">
                    {subject.urduName}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Subject Main Content Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        
        {/* Subject Header with Board Specs */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="space-y-1 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              <span>{activeSubject.badge}</span>
              <span>•</span>
              <span>{selectedGrade === 'all' ? '9th & 10th Combined' : `Class ${selectedGrade}`}</span>
              <span>•</span>
              <span className="text-slate-500">Board Pattern: {selectedBoard.toUpperCase()}</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display flex items-center gap-2">
              <span>{activeSubject.name}</span>
              {activeSubject.urduName && (
                <span className="text-xl font-normal text-slate-600 dark:text-slate-300 font-urdu">
                  ({activeSubject.urduName})
                </span>
              )}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              {activeSubject.description}
            </p>

            {/* Board Paper Format Pill Banner */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-300">
                📝 <strong>Total Marks:</strong> {activeSubject.paperFormat.totalMarks}
              </span>
              <span className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-300">
                ⏱️ <strong>MCQ Section:</strong> {activeSubject.paperFormat.mcqSection}
              </span>
              <span className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-300">
                🎯 <strong>Short Questions:</strong> {activeSubject.paperFormat.shortQuestions}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
            <button
              onClick={() => handleStartPractice(activeSubject)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 via-indigo-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-bold text-xs shadow-md transition cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Brain className="w-4 h-4" />
              <span>Take Timed Board MCQ Test</span>
            </button>
          </div>
        </div>

        {/* High-Yield Revision Tips & Key Formulas */}
        {activeSubject.highYieldTips && activeSubject.highYieldTips.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>High-Yield Board Revision Formulas & Rules</span>
              </span>
              <span className="text-[11px] text-slate-600 dark:text-slate-300">Click to view & listen</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {activeSubject.highYieldTips.map((tip, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveTip(tip)}
                  className="p-3.5 rounded-2xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200/80 dark:border-sky-900/40 hover:border-sky-400 transition cursor-pointer group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-xs font-bold text-sky-900 dark:text-sky-200 group-hover:text-sky-600 line-clamp-1">
                      {tip.topic}
                    </h4>
                    <ChevronRight className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                    {tip.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search & Chapter Count Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search in ${activeSubject.name} chapters or SLO concepts...`}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Showing <strong className="text-sky-600 dark:text-sky-400">{filteredChapters.length}</strong> board units ({totalSubjectMcqs} total practice MCQs)
          </div>
        </div>

        {/* Chapters Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredChapters.map((ch, idx) => (
            <div
              key={`${ch.grade}-${ch.number}-${idx}`}
              className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 p-5 hover:bg-white dark:hover:bg-slate-800 hover:border-sky-300 dark:hover:border-sky-700/60 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 text-[10px] font-extrabold uppercase tracking-wider">
                    {ch.grade} Class • Chapter {ch.number}
                  </span>
                  <span className={`px-2 py-0.5 rounded-md text-[9px] font-extrabold uppercase ${
                    ch.sloLevel === 'Application' ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300' :
                    ch.sloLevel === 'Understanding' ? 'bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300' :
                    'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}>
                    SLO: {ch.sloLevel}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  {ch.title}
                </h4>

                {ch.urduTitle && (
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-urdu mt-0.5">
                    {ch.urduTitle}
                  </p>
                )}

                {/* Key Concepts and SLOs */}
                <div className="mt-3 space-y-1.5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                    Syllabus Learning Outcomes (SLOs):
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {ch.keyConcepts.map((kc, kIdx) => (
                      <span
                        key={kIdx}
                        className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 text-[11px] text-slate-700 dark:text-slate-300 font-medium"
                      >
                        {kc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1">
                  <BookCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{ch.mcqCount} Solved MCQs</span>
                </span>

                <button
                  onClick={() => handleStartPractice(activeSubject)}
                  className="px-2.5 py-1 rounded-lg bg-sky-600/10 dark:bg-sky-400/10 text-sky-700 dark:text-sky-300 hover:bg-sky-600 hover:text-white font-bold transition cursor-pointer flex items-center gap-1"
                >
                  <span>Practice Chapter</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredChapters.length === 0 && (
          <div className="p-12 text-center rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 text-slate-500">
            <Search className="w-8 h-8 mx-auto text-slate-400 mb-2" />
            <p className="font-bold">No chapters match your filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedGrade('all');
              }}
              className="mt-2 text-xs text-sky-600 font-bold hover:underline cursor-pointer"
            >
              Reset Search & Show All
            </button>
          </div>
        )}
      </div>

      {/* Tip Detail Modal / Dialog */}
      {activeTip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="w-full max-w-lg bg-white dark:bg-slate-900 border border-sky-300 dark:border-sky-800 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Board High-Yield Formula Card</span>
              </div>
              <button
                onClick={() => {
                  window.speechSynthesis?.cancel();
                  setIsSpeaking(false);
                  setActiveTip(null);
                }}
                className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                {activeTip.topic}
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-2 leading-relaxed bg-sky-50/50 dark:bg-sky-950/30 p-4 rounded-2xl border border-sky-200 dark:border-sky-900/40">
                {activeTip.summary}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => speakText(`${activeTip.topic}. ${activeTip.summary}`)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer transition ${
                  isSpeaking
                    ? 'bg-rose-500 text-white'
                    : 'bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 hover:bg-sky-200'
                }`}
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span>{isSpeaking ? 'Stop Audio' : 'Read Aloud'}</span>
              </button>

              <button
                onClick={() => {
                  window.speechSynthesis?.cancel();
                  setIsSpeaking(false);
                  setActiveTip(null);
                  handleStartPractice(activeSubject);
                }}
                className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold cursor-pointer"
              >
                Practice Questions on This
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
