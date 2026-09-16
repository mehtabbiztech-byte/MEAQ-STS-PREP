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
  Layers, 
  Clock, 
  Volume2, 
  VolumeX, 
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
  Star
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export interface MiddleSubject {
  id: string;
  name: string;
  urduName?: string;
  icon: any;
  color: string;
  badge: string;
  description: string;
  classes: {
    grade: '6th' | '7th' | '8th';
    chapters: {
      number: number;
      title: string;
      urduTitle?: string;
      keyConcepts: string[];
      mcqCount: number;
      estimatedMinutes: number;
    }[];
  }[];
  quickNotes: {
    topic: string;
    summary: string;
  }[];
}

export const MIDDLE_SUBJECTS: MiddleSubject[] = [
  {
    id: 'general-science',
    name: 'General Science',
    urduName: 'عمومی سائنس',
    icon: Atom,
    color: 'from-emerald-500 to-teal-600',
    badge: 'Core Science',
    description: 'Living systems, matter & mixtures, force & motion, energy forms, light, sound, and Earth & space science according to Single National Curriculum (SNC).',
    classes: [
      {
        grade: '6th',
        chapters: [
          { number: 1, title: 'Cellular Organization of Plants & Animals', urduTitle: 'پودوں اور جانوروں کی سیلولر تنظیم', keyConcepts: ['Plant cell vs Animal cell', 'Microscope basics', 'Tissues & Organs'], mcqCount: 45, estimatedMinutes: 20 },
          { number: 2, title: 'Sense Organs in Humans', urduTitle: 'انسانی حسی اعضاء', keyConcepts: ['Eye structure & function', 'Ear & hearing', 'Skin, nose & tongue'], mcqCount: 40, estimatedMinutes: 18 },
          { number: 3, title: 'Photosynthesis & Respiration in Plants', urduTitle: 'ضیائی تالیف اور تنفس', keyConcepts: ['Chlorophyll & sunlight', 'Stomata function', 'Glucose & oxygen production'], mcqCount: 50, estimatedMinutes: 22 },
          { number: 4, title: 'Environment & Interactions', urduTitle: 'ماحول اور جانداروں کے باہمی تعلقات', keyConcepts: ['Biotic & Abiotic components', 'Food chain & Food web', 'Predation & Parasitism'], mcqCount: 35, estimatedMinutes: 15 },
          { number: 5, title: 'Atoms, Molecules, Mixtures & Compounds', urduTitle: 'ایٹم، مالیکیول، آمیزے اور مرکبات', keyConcepts: ['Elements & Symbols', 'Compounds vs Mixtures', 'Filtration & Evaporation'], mcqCount: 48, estimatedMinutes: 25 },
          { number: 6, title: 'Air & Atmospheric Gases', urduTitle: 'ہوا اور گیسیں', keyConcepts: ['Composition of air', 'Properties of Oxygen & Nitrogen', 'Carbon dioxide & Greenhouse effect'], mcqCount: 38, estimatedMinutes: 18 },
          { number: 7, title: 'Solutions & Suspensions', urduTitle: 'محلول اور معلقات', keyConcepts: ['Solute, Solvent & Solution', 'Saturated vs Unsaturated', 'Dilute vs Concentrated solutions'], mcqCount: 42, estimatedMinutes: 20 },
          { number: 8, title: 'Energy & Its Forms', urduTitle: 'توانائی اور اس کی اقسام', keyConcepts: ['Kinetic & Potential energy', 'Law of Conservation of Energy', 'Renewable vs Non-renewable energy'], mcqCount: 55, estimatedMinutes: 25 },
          { number: 9, title: 'Forces & Machines', urduTitle: 'قوتیں اور مشینیں', keyConcepts: ['Frictional force & Gravity', 'Levers, Pulleys & Inclined Planes', 'Mechanical advantage'], mcqCount: 40, estimatedMinutes: 20 },
          { number: 10, title: 'Properties of Light', urduTitle: 'روشنی کی خصوصیات', keyConcepts: ['Transmission, Absorption & Reflection', 'Luminous vs Non-luminous', 'Pinhole camera & Shadows'], mcqCount: 46, estimatedMinutes: 22 },
          { number: 11, title: 'Sound & Vibration', urduTitle: 'آواز اور تھرتھراہٹ', keyConcepts: ['Vibrations produce sound', 'Speed of sound in mediums', 'Pitch, loudness & noise pollution'], mcqCount: 36, estimatedMinutes: 18 },
          { number: 12, title: 'Space & Satellites', urduTitle: 'خلائی سائنس اور مصنوعی سیارے', keyConcepts: ['Solar system planets', 'Asteroids & comets', 'Geostationary satellites'], mcqCount: 35, estimatedMinutes: 16 },
        ]
      },
      {
        grade: '7th',
        chapters: [
          { number: 1, title: 'Human Organ Systems (Digestive & Respiratory)', urduTitle: 'انسانی نظامِ انہضام اور تنفس', keyConcepts: ['Mouth, stomach, intestines', 'Breathing mechanism in lungs', 'Common digestive disorders'], mcqCount: 52, estimatedMinutes: 25 },
          { number: 2, title: 'Human Transport System (Circulatory System)', urduTitle: 'انسانی نظامِ دورانِ خون', keyConcepts: ['Heart structure (4 chambers)', 'Arteries, veins & capillaries', 'Blood groups & pulses'], mcqCount: 48, estimatedMinutes: 24 },
          { number: 3, title: 'Immunity & Diseases', urduTitle: 'قوتِ مدافعت اور بیماریاں', keyConcepts: ['Pathogens (Bacteria, Viruses)', 'White blood cells role', 'Vaccines & antibiotics'], mcqCount: 40, estimatedMinutes: 20 },
          { number: 4, title: 'Pollination & Plant Reproduction', urduTitle: 'پودوں میں زیرگی اور تولید', keyConcepts: ['Flower anatomy', 'Self vs Cross-pollination', 'Seed dispersal methods'], mcqCount: 44, estimatedMinutes: 22 },
          { number: 5, title: 'Water: Properties & Conservation', urduTitle: 'پانی: خصوصیات اور بچاؤ', keyConcepts: ['Water cycle', 'Water purification techniques', 'Waterborne diseases prevention'], mcqCount: 36, estimatedMinutes: 18 },
          { number: 6, title: 'Structure of Atom & Periodic Table Basics', urduTitle: 'ایٹم کی ساخت', keyConcepts: ['Protons, neutrons, electrons', 'Atomic number & Mass number', 'Valency of common elements'], mcqCount: 54, estimatedMinutes: 28 },
          { number: 7, title: 'Physical & Chemical Changes', urduTitle: 'طبعی اور کیمیائی تبدیلیاں', keyConcepts: ['Reversible vs Irreversible', 'Rusting & Combustion', 'Chemical equations introduction'], mcqCount: 42, estimatedMinutes: 20 },
          { number: 8, title: 'Acids, Bases & Salts', urduTitle: 'تیزاب، اساس اور نمکیات', keyConcepts: ['Properties of acids (HCl, H2SO4)', 'Litmus paper indicator', 'Neutralization reaction'], mcqCount: 48, estimatedMinutes: 24 },
          { number: 9, title: 'Heat & Temperature Measurement', urduTitle: 'حرارت اور پیمائش', keyConcepts: ['Conduction, Convection & Radiation', 'Thermometer scales (C, F)', 'Thermal expansion in solids'], mcqCount: 46, estimatedMinutes: 22 },
          { number: 10, title: 'Dispersion of Light & Colors', urduTitle: 'روشنی کا انتشار اور رنگ', keyConcepts: ['Refraction through prism', 'Spectrum of white light (VIBGYOR)', 'Rainbow formation'], mcqCount: 40, estimatedMinutes: 20 },
          { number: 11, title: 'Circuits & Electric Current', urduTitle: 'برقی سرکٹس اور کرنٹ', keyConcepts: ['Series vs Parallel circuits', 'Conductors vs Insulators', 'Fuses & electrical safety'], mcqCount: 45, estimatedMinutes: 22 },
        ]
      },
      {
        grade: '8th',
        chapters: [
          { number: 1, title: 'Human Nervous System & Brain', urduTitle: 'انسانی اعصابی نظام اور دماغ', keyConcepts: ['Neuron structure', 'Forebrain, midbrain, hindbrain', 'Reflex actions & Spinal cord'], mcqCount: 58, estimatedMinutes: 28 },
          { number: 2, title: 'Cell Division: Mitosis & Meiosis', urduTitle: 'سیل کی تقسیم', keyConcepts: ['Chromosomes & DNA', 'Mitosis stages & somatic cells', 'Meiosis & gamete formation'], mcqCount: 50, estimatedMinutes: 25 },
          { number: 3, title: 'Biotechnology & Genetic Applications', urduTitle: 'بائیو ٹیکنالوجی اور جینیاتی اطلاقات', keyConcepts: ['Gene cloning basics', 'Insulin production in bacteria', 'GMO crops in agriculture'], mcqCount: 46, estimatedMinutes: 22 },
          { number: 4, title: 'Chemical Reactions & Balanced Equations', urduTitle: 'کیمیائی تعاملات', keyConcepts: ['Synthesis & Decomposition', 'Exothermic vs Endothermic', 'Balancing simple equations'], mcqCount: 52, estimatedMinutes: 26 },
          { number: 5, title: 'Acids, Alkalis & pH Scale', urduTitle: 'تیزاب، الکلی اور پی ایچ سکیل', keyConcepts: ['Strong vs weak acids', 'pH meter & Universal indicator', 'Uses of common salts'], mcqCount: 48, estimatedMinutes: 24 },
          { number: 6, title: 'Pressure in Fluids & Atmospheric Pressure', urduTitle: 'مائعات میں دباؤ اور فضائی دباؤ', keyConcepts: ['Hydraulic lifts & Pascal principle', 'Barometer & Weather forecasting', 'Upthrust & Archimedes principle'], mcqCount: 50, estimatedMinutes: 26 },
          { number: 7, title: 'Measurement of Physical Quantities', urduTitle: 'طبعی مقداروں کی پیمائش', keyConcepts: ['Vernier Calipers & Micrometer Screw Gauge', 'SI base units', 'Measuring cylinder & density'], mcqCount: 46, estimatedMinutes: 24 },
          { number: 8, title: 'Thermal Expansion & Applications', urduTitle: 'حرارتی پھیلاؤ کے اطلاقات', keyConcepts: ['Bimetallic strip & thermostats', 'Expansion gaps in railway tracks', 'Anomalous expansion of water'], mcqCount: 42, estimatedMinutes: 20 },
          { number: 9, title: 'Lenses & Optical Instruments', urduTitle: 'عدسے اور بصری آلات', keyConcepts: ['Convex vs Concave lenses', 'Focal length & Ray diagrams', 'Microscope & Astronomical Telescope'], mcqCount: 54, estimatedMinutes: 28 },
          { number: 10, title: 'Electricity Generation & Magnetism', urduTitle: 'بجلی کی پیداوار اور مقناطیسیت', keyConcepts: ['Electromagnets & Relays', 'Hydel, Thermal & Nuclear power', 'Electric generator principle'], mcqCount: 48, estimatedMinutes: 24 },
        ]
      }
    ],
    quickNotes: [
      { topic: 'Mitochondria: Powerhouse of Cell', summary: 'Mitochondria generate cellular energy in the form of ATP during respiration. Present in both plant and animal cells.' },
      { topic: 'Speed of Sound', summary: 'Sound travels fastest in solids (approx 5,000 m/s in steel), slower in liquids (1,500 m/s in water), and slowest in gases (343 m/s in air at 20°C). Cannot travel in vacuum.' },
      { topic: 'Pascal\'s Law', summary: 'Pressure applied to an enclosed fluid is transmitted equally in all directions. Foundation of hydraulic car brakes and jacks.' },
      { topic: 'Mitosis vs Meiosis', summary: 'Mitosis produces 2 identical diploid cells (growth/repair). Meiosis produces 4 genetically diverse haploid gametes (sperm/egg).' }
    ]
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    urduName: 'ریاضی',
    icon: Calculator,
    color: 'from-amber-500 to-orange-600',
    badge: 'Pre-Algebra & Geometry',
    description: 'Rational numbers, fractions, algebraic expressions, linear equations, financial arithmetic (Zakat, profit/loss), practical geometry, and statistics.',
    classes: [
      {
        grade: '6th',
        chapters: [
          { number: 1, title: 'Sets: Notation & Types', urduTitle: 'سیٹ اور ان کی اقسام', keyConcepts: ['Finite, infinite & empty sets', 'Universal set & Subset', 'Venn diagram basics'], mcqCount: 40, estimatedMinutes: 20 },
          { number: 2, title: 'Whole Numbers & Integers', urduTitle: 'مکمل اعداد اور صحیح اعداد', keyConcepts: ['Number line operations', 'Absolute value', 'BODMAS / PEMDAS rule'], mcqCount: 45, estimatedMinutes: 22 },
          { number: 3, title: 'Factors, Multiples, HCF & LCM', urduTitle: 'عوامل، اضعاف، عادِ اعظم و ذواضعاف اقل', keyConcepts: ['Prime factorization', 'Division method for HCF', 'Word problems on LCM'], mcqCount: 50, estimatedMinutes: 25 },
          { number: 4, title: 'Integers & Arithmetic Signs', urduTitle: 'صحیح اعداد اور حسابی علامتیں', keyConcepts: ['Rules of signs (+ & -)', 'Additive inverse', 'Multiplying negative numbers'], mcqCount: 42, estimatedMinutes: 20 },
          { number: 5, title: 'Simplification & Fractions', urduTitle: 'کسور اور اختصار', keyConcepts: ['Proper, improper & mixed fractions', 'Equivalent fractions', 'Decimals conversion'], mcqCount: 48, estimatedMinutes: 24 },
          { number: 6, title: 'Ratio & Proportion', urduTitle: 'نسبت اور تناسب', keyConcepts: ['Simplest form of ratio', 'Direct & Inverse proportion basics', 'Unitary method'], mcqCount: 46, estimatedMinutes: 22 },
          { number: 7, title: 'Financial Arithmetic: Percentage & Profit/Loss', urduTitle: 'مالیاتی حساب: فیصد، نفع و نقصان', keyConcepts: ['Calculating percentages', 'Cost price, Selling price', 'Profit percentage formula'], mcqCount: 52, estimatedMinutes: 26 },
          { number: 8, title: 'Introduction to Algebra', urduTitle: 'الجبرے کا تعارف', keyConcepts: ['Variables, constants & coefficients', 'Algebraic terms', 'Like vs unlike terms'], mcqCount: 44, estimatedMinutes: 20 },
          { number: 9, title: 'Linear Equations in One Variable', urduTitle: 'یک درجی مساوات', keyConcepts: ['Balancing equations', 'Solving for x', 'Simple word problems'], mcqCount: 46, estimatedMinutes: 22 },
          { number: 10, title: 'Geometry: Angles & Lines', urduTitle: 'ہندسہ: زاویے اور خطوط', keyConcepts: ['Acute, obtuse, right & reflex angles', 'Complementary & Supplementary', 'Parallel lines & transversals'], mcqCount: 42, estimatedMinutes: 20 },
          { number: 11, title: 'Perimeter & Area of Plane Figures', urduTitle: 'احاطہ اور رقبہ', keyConcepts: ['Square, rectangle, triangle area', 'Perimeter calculation', 'Circumference of circle'], mcqCount: 48, estimatedMinutes: 24 },
          { number: 12, title: 'Data Handling: Bar Graphs', urduTitle: 'اعداد و شمار: گراف', keyConcepts: ['Frequency distribution table', 'Interpreting vertical/horizontal bar graphs'], mcqCount: 36, estimatedMinutes: 18 },
        ]
      },
      {
        grade: '7th',
        chapters: [
          { number: 1, title: 'Operations on Sets', urduTitle: 'سیٹوں پر اعمال', keyConcepts: ['Union and Intersection', 'Difference of sets', 'Complement of set'], mcqCount: 45, estimatedMinutes: 22 },
          { number: 2, title: 'Rational Numbers', urduTitle: 'ناطق اعداد', keyConcepts: ['Standard rational form p/q', 'Terminating vs recurring decimals', 'Operations on rationals'], mcqCount: 48, estimatedMinutes: 24 },
          { number: 3, title: 'Decimals & Approximations', urduTitle: 'اعشاریہ اور تخمینہ', keyConcepts: ['Rounding off to decimal places', 'Significant figures basics'], mcqCount: 40, estimatedMinutes: 20 },
          { number: 4, title: 'Exponents & Powers', urduTitle: 'قوت نما اور طاقتیں', keyConcepts: ['Laws of exponents (Product, Quotient, Power of power)', 'Negative & zero exponent'], mcqCount: 50, estimatedMinutes: 25 },
          { number: 5, title: 'Square Root of Positive Numbers', urduTitle: 'جزر المربع', keyConcepts: ['Prime factorization method', 'Division method for square root', 'Word problems'], mcqCount: 52, estimatedMinutes: 26 },
          { number: 6, title: 'Direct & Inverse Variation', urduTitle: 'تغیرِ راست اور تغیرِ معکوس', keyConcepts: ['Variation equations', 'Time and work problems', 'Speed, distance & time'], mcqCount: 46, estimatedMinutes: 24 },
          { number: 7, title: 'Financial Arithmetic: Tax, Zakat & Ushr', urduTitle: 'مالیاتی حساب: ٹیکس، زکوٰۃ و عشر', keyConcepts: ['Zakat calculation (2.5%)', 'Ushr on agricultural produce (5% / 10%)', 'Sales tax & income tax basics'], mcqCount: 48, estimatedMinutes: 24 },
          { number: 8, title: 'Algebraic Expressions: Multiplication & Division', urduTitle: 'الجبرائی کثیر رقمیوں کا ضرب و تقسیم', keyConcepts: ['Monomials, binomials, polynomials', 'Multiplication of polynomials', 'Basic division'], mcqCount: 54, estimatedMinutes: 28 },
          { number: 9, title: 'Linear Equations & Applications', urduTitle: 'یک درجی مساوات اور اطلاقات', keyConcepts: ['Cross multiplication method', 'Consecutive numbers word problems', 'Age-based algebraic puzzles'], mcqCount: 46, estimatedMinutes: 24 },
          { number: 10, title: 'Practical Geometry: Triangles Construction', urduTitle: 'عملی ہندسہ: مثلث کی بناوٹ', keyConcepts: ['SSS, SAS, ASA, RHS triangle construction', 'Angle bisectors using compass'], mcqCount: 38, estimatedMinutes: 20 },
          { number: 11, title: 'Circumference & Area of Circles', urduTitle: 'دائرے کا محیط اور رقبہ', keyConcepts: ['Formula C = 2πr', 'Area A = πr²', 'Ring / concentric circles area'], mcqCount: 44, estimatedMinutes: 22 },
          { number: 12, title: 'Surface Area & Volume of Cylinders', urduTitle: 'سلنڈر کا سطحی رقبہ اور حجم', keyConcepts: ['Curved surface area of cylinder', 'Volume formula V = πr²h'], mcqCount: 42, estimatedMinutes: 22 },
        ]
      },
      {
        grade: '8th',
        chapters: [
          { number: 1, title: 'Operations on Real Numbers & Venn Diagrams', urduTitle: 'حقیقی اعداد پر اعمال', keyConcepts: ['Commutative, Associative & Distributive laws', 'De Morgan\'s laws verification', 'Subsets of Real numbers'], mcqCount: 52, estimatedMinutes: 26 },
          { number: 2, title: 'Real Numbers & Number Systems (Base 2, 5, 8, 10)', urduTitle: 'اعداد کے بنیادی نظامات', keyConcepts: ['Binary (base 2) conversions', 'Quinary (base 5) & Octal (base 8)', 'Binary addition & subtraction'], mcqCount: 56, estimatedMinutes: 30 },
          { number: 3, title: 'Financial Arithmetic: Partnership & Inheritance', urduTitle: 'مالیاتی حساب: شراکت داری اور وراثت', keyConcepts: ['Business partnership profit distribution', 'Islamic law of inheritance shares', 'Banking: Markup & compound profit'], mcqCount: 50, estimatedMinutes: 25 },
          { number: 4, title: 'Squares & Square Roots, Cubes & Cube Roots', urduTitle: 'مربع و جزر المربع، مکعب و جزر المکعب', keyConcepts: ['Estimating square roots', 'Properties of perfect squares', 'Finding cube roots'], mcqCount: 48, estimatedMinutes: 24 },
          { number: 5, title: 'Polynomials & Algebraic Identities', urduTitle: 'کثیر رقمی اور الجبرائی مماثلتیں', keyConcepts: ['Degree of polynomial', '(a+b)², (a-b)², a²-b² identities', 'Cubic identities introduction'], mcqCount: 58, estimatedMinutes: 30 },
          { number: 6, title: 'Factorization & Algebraic Fractions', urduTitle: 'تجزی اور الجبرائی کسریں', keyConcepts: ['Common factor grouping', 'Middle term breaking', 'Simplifying rational algebraic fractions'], mcqCount: 55, estimatedMinutes: 28 },
          { number: 7, title: 'Simultaneous Linear Equations', urduTitle: 'ہمزاد یک درجی مساوات', keyConcepts: ['Elimination method', 'Substitution method', 'Graphing two linear equations'], mcqCount: 52, estimatedMinutes: 26 },
          { number: 8, title: 'Practical Geometry: Quadrilaterals Construction', urduTitle: 'عملی ہندسہ: چوکور کی بناوٹ', keyConcepts: ['Constructing parallelogram, rhombus, trapezoid', 'Tangents to circle from point'], mcqCount: 40, estimatedMinutes: 20 },
          { number: 9, title: 'Areas & Volumes of Prisms & Spheres', urduTitle: 'منشور اور کرے کا رقبہ اور حجم', keyConcepts: ['Volume of prism', 'Surface area of sphere A = 4πr²', 'Volume of sphere V = 4/3πr³'], mcqCount: 46, estimatedMinutes: 24 },
          { number: 10, title: 'Demonstrative Geometry (Theorems & Proofs)', urduTitle: 'بیانی ہندسہ', keyConcepts: ['Pythagoras theorem a² + b² = c²', 'Angle sum property of triangle (180°)', 'Exterior angle theorem'], mcqCount: 48, estimatedMinutes: 25 },
          { number: 11, title: 'Introduction to Trigonometry', urduTitle: 'مثلثیات کا تعارف', keyConcepts: ['Sine, Cosine, Tangent definitions', 'Values for 30°, 45°, 60°', 'Simple right triangle calculations'], mcqCount: 44, estimatedMinutes: 22 },
          { number: 12, title: 'Information Handling: Mean, Median & Pie Charts', urduTitle: 'اعداد و شمار: اوسط، وسطانیہ، پائی چارٹ', keyConcepts: ['Arithmetic Mean formula', 'Median & Mode of ungrouped data', 'Pie chart angle calculation (360°)'], mcqCount: 45, estimatedMinutes: 22 },
        ]
      }
    ],
    quickNotes: [
      { topic: 'Pythagoras Theorem', summary: 'In any right-angled triangle: (Hypotenuse)² = (Base)² + (Perpendicular)². For sides 3, 4, 5: 3² + 4² = 9 + 16 = 25 = 5².' },
      { topic: 'Algebraic Identities', summary: '(a + b)² = a² + 2ab + b² | (a - b)² = a² - 2ab + b² | a² - b² = (a - b)(a + b).' },
      { topic: 'Zakat Calculation', summary: 'Zakat rate is 2.5% (or 1/40th) on surplus wealth held for one complete lunar year exceeding the Nisab threshold.' },
      { topic: 'Angle Sum in Polygons', summary: 'Sum of interior angles of n-sided polygon = (n - 2) × 180°. Triangle: 180°, Quadrilateral: 360°, Pentagon: 540°.' }
    ]
  },
  {
    id: 'english',
    name: 'English Language & Reading',
    urduName: 'انگریزی زبان و فہم',
    icon: Languages,
    color: 'from-blue-500 to-indigo-600',
    badge: 'Grammar & Literacy',
    description: 'Active/passive voice, direct/indirect narration, tenses, reading comprehension, idioms, formal letters, applications, and essays.',
    classes: [
      {
        grade: '6th',
        chapters: [
          { number: 1, title: 'Nouns & Pronoun Antecedents', keyConcepts: ['Proper, Common, Collective, Abstract', 'Pronoun case (Subject, Object, Possessive)'], mcqCount: 40, estimatedMinutes: 18 },
          { number: 2, title: 'Verbs, Helping Verbs & Modals', keyConcepts: ['Transitive vs Intransitive', 'Can, Could, May, Must usage'], mcqCount: 42, estimatedMinutes: 20 },
          { number: 3, title: 'Tenses: Present, Past & Future Simple', keyConcepts: ['First form + s/es', 'Second form of verb', 'Will/Shall usage'], mcqCount: 48, estimatedMinutes: 22 },
          { number: 4, title: 'Adjectives & Degrees of Comparison', keyConcepts: ['Positive, Comparative (-er/more), Superlative (-est/most)'], mcqCount: 38, estimatedMinutes: 18 },
          { number: 5, title: 'Prepositions of Time & Place', keyConcepts: ['At, On, In rules', 'Between vs Among', 'Into vs In'], mcqCount: 46, estimatedMinutes: 22 },
          { number: 6, title: 'Punctuation & Capitalization', keyConcepts: ['Apostrophe in contractions & possession', 'Quotation marks in dialogue'], mcqCount: 36, estimatedMinutes: 16 },
          { number: 7, title: 'Reading Comprehension & Inferences', keyConcepts: ['Main idea identification', 'Vocabulary in context', 'Unseen passage answers'], mcqCount: 40, estimatedMinutes: 20 },
          { number: 8, title: 'Application Writing to Principal', keyConcepts: ['Format of formal application', 'Urgent piece of work / Sick leave'], mcqCount: 30, estimatedMinutes: 15 },
        ]
      },
      {
        grade: '7th',
        chapters: [
          { number: 1, title: 'Continuous & Perfect Tenses', keyConcepts: ['Present/Past Continuous (is/am/are/was/were + ing)', 'Has/Have + 3rd form (Perfect)'], mcqCount: 50, estimatedMinutes: 24 },
          { number: 2, title: 'Active & Passive Voice (Simple Tenses)', keyConcepts: ['Subject-Object interchange', 'Use of By + past participle (3rd form)'], mcqCount: 48, estimatedMinutes: 24 },
          { number: 3, title: 'Conjunctions & Compound Sentences', keyConcepts: ['Coordinating (FANBOYS)', 'Subordinating (Because, Although, Unless)'], mcqCount: 42, estimatedMinutes: 20 },
          { number: 4, title: 'Adverbs of Manner, Time & Degree', keyConcepts: ['Adverbs modifying verbs vs adjectives', 'Irregular adverbs (fast, well, hard)'], mcqCount: 40, estimatedMinutes: 18 },
          { number: 5, title: 'Direct & Indirect Speech Basics', keyConcepts: ['Reporting verb changes', 'Pronoun changes in asserted sentences'], mcqCount: 46, estimatedMinutes: 22 },
          { number: 6, title: 'Subject-Verb Agreement Rules', keyConcepts: ['Singular subjects with singular verbs', 'Either/neither rules', 'Collective nouns'], mcqCount: 45, estimatedMinutes: 22 },
          { number: 7, title: 'Informal Letter Writing', keyConcepts: ['Writing letters to parents/friends', 'Salutation and subscription formats'], mcqCount: 32, estimatedMinutes: 16 },
        ]
      },
      {
        grade: '8th',
        chapters: [
          { number: 1, title: 'All 12 English Tenses Mastery', keyConcepts: ['Perfect Continuous tenses (Since/For)', 'Conditionals (Zero, First, Second)'], mcqCount: 60, estimatedMinutes: 30 },
          { number: 2, title: 'Active & Passive Voice (All Tenses & Modals)', keyConcepts: ['Imperative passive ("Let it be done")', 'Interrogative passive', 'Prepositional verbs passive'], mcqCount: 55, estimatedMinutes: 28 },
          { number: 3, title: 'Direct to Indirect Narration (Assertive & Interrogative)', keyConcepts: ['Change of tense chart', 'Wh- questions vs If/Whether questions', 'Time & place adverbs shift'], mcqCount: 54, estimatedMinutes: 28 },
          { number: 4, title: 'Phrasal Verbs, Idioms & Proverbial Expressions', keyConcepts: ['Look after, Give up, Put off', 'A blessing in disguise, Once in a blue moon'], mcqCount: 50, estimatedMinutes: 25 },
          { number: 5, title: 'Unseen Reading Comprehension & Summary Writing', keyConcepts: ['Skimming & scanning strategies', 'Writing 1/3rd precis summary'], mcqCount: 44, estimatedMinutes: 24 },
          { number: 6, title: 'Formal Letters & Complaint Letters', keyConcepts: ['Letters to Editor of newspaper', 'Official complaints regarding sanitation/electricity'], mcqCount: 35, estimatedMinutes: 18 },
          { number: 7, title: 'Descriptive & Narrative Essay Writing', keyConcepts: ['Introduction, body paragraphs, conclusion', 'Essays on "My Hero in History", "A Rainy Day"'], mcqCount: 35, estimatedMinutes: 18 },
        ]
      }
    ],
    quickNotes: [
      { topic: 'Since vs For', summary: '"Since" denotes specific point in time (Since 2010, Since Monday, Since morning). "For" denotes duration of time (For 5 years, For two hours, For a long time).' },
      { topic: 'Active to Passive Golden Rule', summary: 'Active: Subject + Verb + Object. Passive: Object + Be-verb (am/is/are/was/were/been/being) + 3rd form of Verb + by + Subject.' },
      { topic: 'Either / Neither Agreement', summary: 'When two singular nouns are joined by "neither... nor" or "either... or", the verb is singular. E.g. "Neither Ali nor Ahmad was present."' }
    ]
  },
  {
    id: 'urdu',
    name: 'Urdu Literature & Grammar',
    urduName: 'اردو ادب، قواعد و انشا',
    icon: BookOpen,
    color: 'from-emerald-600 to-green-700',
    badge: 'قواعد و ادب',
    description: 'اردو قواعد (اسم، ضمیر، صفت، فعل)، جملوں کی ساخت، ضرب الامثال، محاورات، نظموں و غزلوں کا مفہوم، خلاصہ نگاری، اور درخواست و خطوط نویسی۔',
    classes: [
      {
        grade: '6th',
        chapters: [
          { number: 1, title: 'کلمہ اور اس کی اقسام (اسم، فعل، حرف)', urduTitle: 'کلمہ اور مہمل، اسم فعل حرف', keyConcepts: ['اسم کی پہچان', 'فعل اور زمانے کی بنیادی تمیز', 'حروفِ ربط'], mcqCount: 40, estimatedMinutes: 18 },
          { number: 2, title: 'اسم معرفہ اور اسم نکرہ کی اقسام', urduTitle: 'اسمِ خاص اور اسمِ عام', keyConcepts: ['اسم علم، اسم ضمیر، اسم اشارہ، اسم موصول', 'اسم ذات، اسم صفت'], mcqCount: 42, estimatedMinutes: 20 },
          { number: 3, title: 'واحد، جمع اور مذکر، مونث', urduTitle: 'واحد جمع اور تذکیر و تانیث', keyConcepts: ['قاعدے کے مطابق جمع بنانا', 'بے جان اشیاء کی تذکیر و تانیث'], mcqCount: 45, estimatedMinutes: 20 },
          { number: 4, title: 'مترادف اور متضاد الفاظ', urduTitle: 'الفاظ مترادف و متضاد', keyConcepts: ['کثیر الاستعمال مترادفات', 'الفاظ کے متضاد جوڑے'], mcqCount: 40, estimatedMinutes: 18 },
          { number: 5, title: 'درخواست نگاری (پرنسپل کے نام رخصت بیماری)', urduTitle: 'درخواست نویسی', keyConcepts: ['درخواست کا خاکہ', 'جنابِ عالی، القاب و آداب اور العارض'], mcqCount: 30, estimatedMinutes: 15 },
        ]
      },
      {
        grade: '7th',
        chapters: [
          { number: 1, title: 'فعل کی اقسام بلحاظ زمانہ و معنی', urduTitle: 'فعل لازم و متعدی، فعل معروف و مجہول', keyConcepts: ['فعل لازم اور فعل متعدی میں فرق', 'فعل معروف کو مجہول میں بدلنا'], mcqCount: 48, estimatedMinutes: 22 },
          { number: 2, title: 'سابقے اور لاحقے', urduTitle: 'سابقے اور لاحقے', keyConcepts: ['ہم، با، نا، ان سے بننے والے الفاظ', 'دان، مند، ناک، کار سے بننے والے الفاظ'], mcqCount: 44, estimatedMinutes: 20 },
          { number: 3, title: 'محاورات اور ان کا جملوں میں استعمال', urduTitle: 'اردو محاورات کا فہم', keyConcepts: ['آنکھیں چرانا، اپنا الو سیدھا کرنا، باغ باغ ہونا'], mcqCount: 50, estimatedMinutes: 24 },
          { number: 4, title: 'خطوط نویسی (والدین اور دوستوں کے نام)', urduTitle: 'خط نویسی کے اصول', keyConcepts: ['مقامِ روانگی، تاریخ، القاب، نفسِ مضمون، اختتام'], mcqCount: 32, estimatedMinutes: 16 },
        ]
      },
      {
        grade: '8th',
        chapters: [
          { number: 1, title: 'مرکبات کی اقسام (مرکب توصیفی، اضافی، عطفی، جاری)', urduTitle: 'مرکب تام اور مرکب ناقص', keyConcepts: ['صفت اور موصوف کی ترتیب', 'مضاف اور مضاف الیہ', 'واؤ عطف اور زیرِ اضافت'], mcqCount: 55, estimatedMinutes: 26 },
          { number: 2, title: 'ضرب الامثال اور کہاوتیں', urduTitle: 'ضرب الامثال کا پس منظر و استعمال', keyConcepts: ['بندر کیا جانے ادرک کا سواد', 'ڈوبتے کو تنکے کا سہارا', 'چور کی داڑھی میں تنکا'], mcqCount: 50, estimatedMinutes: 25 },
          { number: 3, title: 'اعراب اور تلفظ کی درستگی', urduTitle: 'صحیح اعراب لگانا', keyConcepts: ['زبر، زیر، پیش، جزم، تشدید، تنوین کا درست استعمال'], mcqCount: 45, estimatedMinutes: 22 },
          { number: 4, title: 'اشعار کی تشریح اور مفہوم نویسی', urduTitle: 'نظم اور غزل کے اشعار کی تفہیم', keyConcepts: ['شاعر کا نام اور نظم کا عنوان', 'مطلع اور مقطع کی پہچان', 'تشبیہ کی ابتدائی تفہیم'], mcqCount: 48, estimatedMinutes: 24 },
          { number: 5, title: 'مضمون نگاری (یوم آزادی، علامہ اقبال، محنت کی برکت)', urduTitle: 'مضمون نویسی', keyConcepts: ['تمہید، نفسِ مضمون اور اختتامیہ کے اصول'], mcqCount: 35, estimatedMinutes: 18 },
        ]
      }
    ],
    quickNotes: [
      { topic: 'فعل معروف اور فعل مجہول', summary: 'معروف: جس کا فاعل معلوم ہو (مثلاً: علی نے خط لکھا)۔ مجہول: جس کا فاعل معلوم نہ ہو (مثلاً: خط لکھا گیا)۔' },
      { topic: 'مرکب اضافی اور توصیفی', summary: 'مرکب اضافی: تعلق ظاہر کرے (جیسے: علی کا قلم، کتاب کا ورق)۔ مرکب توصیفی: خوبی یا خامی بتائے (جیسے: نیک لڑکا، ٹھنڈا پانی)۔' }
    ]
  },
  {
    id: 'sindhi',
    name: 'Sindhi Language & Literature',
    urduName: 'سنڌي ٻولي، وياڪرڻ ۽ ادب',
    icon: Compass,
    color: 'from-amber-600 to-yellow-700',
    badge: 'سنڌي وياڪرڻ',
    description: 'سنڌي وياڪرڻ (گرامر)، شاهه عبداللطيف ڀٽائي جا بيت، سبق خلاصو، پهاڪا ۽ اصطلاح، عريضو ۽ خط نگاري۔',
    classes: [
      {
        grade: '6th',
        chapters: [
          { number: 1, title: 'سنڌي الفابيٽ ۽ اکرن جو اچار', urduTitle: 'سنڌي الف ب ۽ مخرج', keyConcepts: ['سنڌي مخصوص اکر (ٻ، ڄ، ڃ، ڱ، ڳ، ڦ، ٺ، ڊ، ڏ)', 'اکرن جون شڪليون'], mcqCount: 35, estimatedMinutes: 16 },
          { number: 2, title: 'اسم ۽ ان جا قسم', urduTitle: 'اسم خاص ۽ اسم عام', keyConcepts: ['اسم خاص، اسم عام، اسم جنس، اسم ذات'], mcqCount: 40, estimatedMinutes: 18 },
          { number: 3, title: 'واحد ۽ جمع سنڌي ۾', urduTitle: 'واحد ۽ جمع', keyConcepts: ['سنڌي لفظن جا جمع ٺاهڻ جا قائدا (ون، ونءُ، ون)'], mcqCount: 42, estimatedMinutes: 20 },
        ]
      },
      {
        grade: '7th',
        chapters: [
          { number: 1, title: 'ضمير ۽ ان جا قسم', urduTitle: 'ضمير جا قسم', keyConcepts: ['ضمير خالص (متڪلم، حاضر، غائب)', 'ضمير اشارو ۽ ضمير موصول'], mcqCount: 45, estimatedMinutes: 22 },
          { number: 2, title: 'صفت ۽ ان جا قسم', urduTitle: 'صفت', keyConcepts: ['صفت ذاتي، صفت نسبتي، صفت عددي، صفت مقداري'], mcqCount: 40, estimatedMinutes: 20 },
          { number: 3, title: 'پهاڪا ۽ چوڻيون', urduTitle: 'سنڌي پهاڪا', keyConcepts: ['جيڪو ڪري سو پائي، ٻه ٻڏا ٽيون اڌو گابرو'], mcqCount: 44, estimatedMinutes: 20 },
        ]
      },
      {
        grade: '8th',
        chapters: [
          { number: 1, title: 'فعل ۽ ان جون حالتون', urduTitle: 'فعل لازمي ۽ متعدي', keyConcepts: ['فعل لازمي، فعل متعدي، فعل معروف، فعل مجهول'], mcqCount: 50, estimatedMinutes: 24 },
          { number: 2, title: 'شاهه لطيف جا بيت ۽ سُر', urduTitle: 'شاهه جو رسالو چونڊ بيت', keyConcepts: ['سُر سارنگ، سُر ڪلياڻ جا بيت ۽ انهن جو روحاني مفهوم'], mcqCount: 48, estimatedMinutes: 24 },
          { number: 3, title: 'سنڌي مضمون ۽ عريضو نويسي', urduTitle: 'سنڌي ۾ درخواست ۽ خط', keyConcepts: ['هيڊماستر صاحب ڏانهن موڪل جي درخواست', 'دوست ڏانهن خط'], mcqCount: 35, estimatedMinutes: 18 },
        ]
      }
    ],
    quickNotes: [
      { topic: 'سنڌي اکرن جا خاص آواز', summary: 'سنڌي ٻوليءَ ۾ 52 اکر آهن جن مان چار اڀرندڙ آواز (ٻ، ڄ، ڳ، ڏ) خاص اهميت رکن ٿا.' },
      { topic: 'شاهه لطيف جا سُر', summary: 'شاهه عبداللطيف ڀٽائيءَ جي ڪلام ۾ 30 سُر شامل آهن جن ۾ سُر سارنگ، سُر سهڻي، سُر سسئي اهم آهن.' }
    ]
  },
  {
    id: 'social-studies',
    name: 'Social Studies (History & Geography)',
    urduName: 'مطالعہ معاشرت (تاریخ و جغرافیہ)',
    icon: Compass,
    color: 'from-cyan-600 to-blue-700',
    badge: 'تاریخ و جغرافیہ',
    description: 'Physical geography of Pakistan, Indus Valley Civilization, Gandhara, Delhi Sultanate, Mughal era, British rule, and civics.',
    classes: [
      {
        grade: '6th',
        chapters: [
          { number: 1, title: 'Earth as a Planet & Map Skills', urduTitle: 'زمین بطور سیارہ اور نقشہ خوانی', keyConcepts: ['Latitudes & Longitudes', 'Equator & Prime Meridian', 'Map symbols, keys & scale'], mcqCount: 42, estimatedMinutes: 20 },
          { number: 2, title: 'Ancient Civilizations: Indus Valley', urduTitle: 'وادیٔ سندھ کی قدیم تہذیب', keyConcepts: ['Mohenjo-daro & Harappa layout', 'Great Bath, Granaries & Drainage', 'Seals, script & trade with Mesopotamia'], mcqCount: 48, estimatedMinutes: 24 },
          { number: 3, title: 'Aryan Civilization & Gandhara', urduTitle: 'آریائی تہذیب اور گندھارا آرٹ', keyConcepts: ['Taxila Buddhist university', 'Asoka the Great & Buddhist sculpture'], mcqCount: 40, estimatedMinutes: 20 },
          { number: 4, title: 'Major Landforms of Pakistan', urduTitle: 'پاکستان کے طبعی خدوخال', keyConcepts: ['Northern Mountains (Himalayas, Karakoram, Hindu Kush)', 'Indus Plains & Balochistan Plateau', 'Thar & Cholistan Deserts'], mcqCount: 46, estimatedMinutes: 22 },
        ]
      },
      {
        grade: '7th',
        chapters: [
          { number: 1, title: 'Advent of Islam in South Asia', urduTitle: 'جنوبی ایشیا میں اسلام کی آمد', keyConcepts: ['Muhammad bin Qasim in Sindh (712 AD)', 'Raja Dahir defeat at Debal', 'Sultan Mahmud of Ghazni expeditions'], mcqCount: 45, estimatedMinutes: 22 },
          { number: 2, title: 'The Delhi Sultanate (1206–1526)', urduTitle: 'سلطنتِ دہلی', keyConcepts: ['Slave Dynasty (Qutb-ud-din Aibak)', 'Khilji (Alauddin Khilji)', 'Tughlaq, Sayyid & Lodhi Dynasties'], mcqCount: 50, estimatedMinutes: 25 },
          { number: 3, title: 'Weather & Climate of Pakistan', urduTitle: 'پاکستان کا موسم اور آب و ہوا', keyConcepts: ['Monsoon winds (Summer & Winter)', 'Four climatic zones of Pakistan', 'Cyclones & floods'], mcqCount: 44, estimatedMinutes: 22 },
          { number: 4, title: 'Rivers & Irrigation System of Pakistan', urduTitle: 'پاکستان کے دریا اور نہری نظام', keyConcepts: ['Indus river & eastern tributaries (Jhelum, Chenab, Ravi, Sutlej)', 'Barrages & Link Canals network', 'Tarbela & Mangla dams'], mcqCount: 48, estimatedMinutes: 24 },
        ]
      },
      {
        grade: '8th',
        chapters: [
          { number: 1, title: 'The Mughal Empire: Rise, Glory & Decline', urduTitle: 'مغلیہ سلطنت: عروج و زوال', keyConcepts: ['Babur & Battle of Panipat (1526)', 'Akbar administrative policies', 'Shah Jahan architecture (Taj Mahal, Badshahi Mosque by Aurangzeb)', 'Causes of decline'], mcqCount: 55, estimatedMinutes: 28 },
          { number: 2, title: 'British Rule & War of Independence 1857', urduTitle: 'برطانوی راج اور جنگ آزادی 1857', keyConcepts: ['East India Company expansion', 'Causes of 1857 revolt (greased cartridges, doctrine of lapse)', 'Sir Syed Ahmad Khan & Aligarh Movement'], mcqCount: 52, estimatedMinutes: 26 },
          { number: 3, title: 'Establishment of All-India Muslim League (1906)', urduTitle: 'آل انڈیا مسلم لیگ کا قیام', keyConcepts: ['Dhaka foundation session (1906)', 'Separate electorates demand', 'Quaid-e-Azam joins Muslim League (1913)'], mcqCount: 46, estimatedMinutes: 24 },
          { number: 4, title: 'Natural Resources, Agriculture & Trade of Pakistan', urduTitle: 'پاکستان کے قدرتی وسائل، زراعت اور تجارت', keyConcepts: ['Kharif vs Rabi crops (Wheat, Cotton, Rice, Sugarcane)', 'Mineral deposits (Saindak copper-gold, Khewra salt)', 'Major exports & imports'], mcqCount: 48, estimatedMinutes: 24 },
        ]
      }
    ],
    quickNotes: [
      { topic: 'Mohenjo-daro Discovery', summary: 'Discovered in 1922 by R.D. Banerji and Sir John Marshall in Larkana, Sindh. Famous for municipal grid planning, wells, and drainage systems.' },
      { topic: 'Battle of Panipat (1526)', summary: 'Babur defeated Ibrahim Lodhi using artillery and cannons for the first time in India, establishing the Mughal Empire.' },
      { topic: 'Kharif vs Rabi Crops', summary: 'Kharif: Sown in summer/monsoon (April-June) and harvested in autumn (Cotton, Rice, Sugarcane, Maize). Rabi: Sown in winter (Oct-Dec) and harvested in spring (Wheat, Barley, Gram).' }
    ]
  },
  {
    id: 'islamiat',
    name: 'Islamiat & Ethics',
    urduName: 'اسلامیات و اخلاقیات',
    icon: Moon,
    color: 'from-teal-600 to-emerald-800',
    badge: 'ایمانیات و عبادات',
    description: 'حفظ و ترجمہ سورتیں (آخری دس سورتیں)، کلمے اور دعائیں، ارکانِ اسلام، سیرت النبی ﷺ، خلفائے راشدینؓ، اور اخلاقی اقدار۔',
    classes: [
      {
        grade: '6th',
        chapters: [
          { number: 1, title: 'حفظ و ترجمہ: سورۃ الفیل تا سورۃ الناس', urduTitle: 'قرآنی سورتوں کا فہم', keyConcepts: ['سورۃ الفیل، قریش، ماعون، کوثر، کافرون، نصر، لہب، اخلاص، فلق، الناس کے معانی و خلاصہ'], mcqCount: 45, estimatedMinutes: 20 },
          { number: 2, title: 'ایمانیات: عقیدۂ توحید اور رسالت', urduTitle: 'توحید اور رسالت کی اہمیت', keyConcepts: ['شرک کی اقسام اور قباحت', 'عقیدۂ ختمِ نبوت کی اہمیت'], mcqCount: 40, estimatedMinutes: 18 },
          { number: 3, title: 'طہارت و نماز کے ارکان اور شرائط', urduTitle: 'نماز کی شرائط اور واجبات', keyConcepts: ['وضو کے چار فرائض', 'نماز کے ارکان اور دعائے قنوت کا ترجمہ'], mcqCount: 48, estimatedMinutes: 22 },
          { number: 4, title: 'سیرت النبی ﷺ: مکی دور', urduTitle: 'حضور ﷺ کی مکی زندگی', keyConcepts: ['اعلانِ نبوت اور شعب ابی طالب میں محاصرہ', 'واقعہ معراج اور ہجرتِ مدینہ'], mcqCount: 50, estimatedMinutes: 25 },
        ]
      },
      {
        grade: '7th',
        chapters: [
          { number: 1, title: 'حفظ و ترجمہ: آیۃ الکرسی اور احادیثِ مبارکہ', urduTitle: 'آیۃ الکرسی اور منتخب احادیث', keyConcepts: ['آیۃ الکرسی کی فضیلت اور ترجمہ', 'اخلاق اور حسنِ معاملہ پر مبنی احادیث'], mcqCount: 44, estimatedMinutes: 22 },
          { number: 2, title: 'ارکانِ اسلام: روزہ اور زکوٰۃ کی فرضیت', urduTitle: 'روزہ اور زکوٰۃ کے احکام', keyConcepts: ['روزے کے روحانی و جسمانی فوائد', 'زکوٰۃ کے مصارف (قرآن مجید کے 8 مصارف)'], mcqCount: 46, estimatedMinutes: 22 },
          { number: 3, title: 'سیرت النبی ﷺ: غزوۂ بدر اور احد', urduTitle: 'اہم اسلامی غزوات', keyConcepts: ['غزوۂ بدر کے اسباب و نتائج (17 رمضان 2 ہجری)', 'غزوۂ احد کے اہم اسباق (3 ہجری)'], mcqCount: 52, estimatedMinutes: 25 },
          { number: 4, title: 'سیرتِ حضرت ابوبکر صدیقؓ اور حضرت عمر فاروقؓ', urduTitle: 'خلفائے راشدینؓ کا تعارف', keyConcepts: ['حضرت ابوبکرؓ کے دور کے فتنوں کا خاتمہ', 'حضرت عمرؓ کی انتظامی اصلاحات اور فتوحات'], mcqCount: 48, estimatedMinutes: 24 },
        ]
      },
      {
        grade: '8th',
        chapters: [
          { number: 1, title: 'قرآن مجید کا تعارف، نزول اور جمع و تدوین', urduTitle: 'تاریخِ قرآن مجید', keyConcepts: ['نزولِ وحی کے مراحل', 'حضرت ابوبکرؓ اور حضرت عثمانؓ کے دور میں قرآن مجید کی تدوین'], mcqCount: 48, estimatedMinutes: 24 },
          { number: 2, title: 'حج اور قربانی کے مناسک', urduTitle: 'مناسکِ حج', keyConcepts: ['احرام، طواف، وقوفِ عرفات، رمی جمار، طوافِ زیارت'], mcqCount: 46, estimatedMinutes: 22 },
          { number: 3, title: 'صلح حدیبیہ اور فتح مکہ (8 ہجری)', urduTitle: 'صلح حدیبیہ اور فتح مکہ', keyConcepts: ['صلح حدیبیہ کی شرائط اور "فتح مبین"', 'فتح مکہ کے وقت عام معافی کا تاریخی اعلان'], mcqCount: 54, estimatedMinutes: 26 },
          { number: 4, title: 'سیرتِ حضرت عثمان غنیؓ اور حضرت علی المرتضیٰؓ', urduTitle: 'حضرت عثمانؓ و حضرت علیؓ کی سیرت', keyConcepts: ['حضرت عثمانؓ کا جامع القرآن ہونا اور سخاوت', 'حضرت علیؓ کی بہادری، علم اور عدل'], mcqCount: 50, estimatedMinutes: 25 },
          { number: 5, title: 'اسلامی اخلاقیات اور حقوق العباد', urduTitle: 'حقوق العباد اور معاشرتی ذمہ داریاں', keyConcepts: ['والدین، اساتذہ، پڑوسیوں اور مسافروں کے حقوق', 'دیانت داری اور امانت داری'], mcqCount: 42, estimatedMinutes: 20 },
        ]
      }
    ],
    quickNotes: [
      { topic: 'وضو کے چار فرائض', summary: '1. چہرہ دھونا (پیشانی سے ٹھوڑی تک) 2. دونوں ہاتھ کہنیوں سمیت دھونا 3. چوتھائی سر کا مسح کرنا 4. دونوں پاؤں ٹخنوں سمیت دھونا۔' },
      { topic: 'زکوٰۃ کے 8 مصارف (سورۃ التوبہ)', summary: 'فقراء، مساکین، عاملینِ زکوٰۃ، مؤلفۃ القلوب، گردنیں چھڑانے والے (غلام)، مقروضین، فی سبیل اللہ، اور مسافر۔' },
      { topic: 'غزوہ بدر کی تاریخ و اہمیت', summary: '17 رمضان المبارک 2 ہجری کو پیش آیا۔ مسلمانوں کی تعداد 313 اور کفار قریش 1000 تھے۔ مسلمانوں کی تاریخی فتح ہوئی۔' }
    ]
  },
  {
    id: 'computer-education',
    name: 'Computer Education & ICT',
    urduName: 'کمپیوٹر ایجوکیشن اور آئی سی ٹی',
    icon: Laptop,
    color: 'from-purple-500 to-indigo-600',
    badge: 'کمپیوٹر و ٹیکنالوجی',
    description: 'Hardware, software, Windows OS, MS Word, MS Excel, presentation slides, internet research, cybersecurity, and coding fundamentals.',
    classes: [
      {
        grade: '6th',
        chapters: [
          { number: 1, title: 'Introduction to Computers & Hardware Parts', keyConcepts: ['Input vs Output devices', 'System Unit: CPU, Motherboard, RAM, Hard drive'], mcqCount: 40, estimatedMinutes: 18 },
          { number: 2, title: 'System Software vs Application Software', keyConcepts: ['Operating systems role', 'Word processors, web browsers, media players'], mcqCount: 38, estimatedMinutes: 18 },
          { number: 3, title: 'Working with Windows 10/11 Desktop', keyConcepts: ['Taskbar, Start Menu, File Explorer', 'Creating, renaming, moving files and folders'], mcqCount: 42, estimatedMinutes: 20 },
          { number: 4, title: 'Keyboard Typing Skills & Shortcuts', keyConcepts: ['Touch typing home row (ASDF JKL;)', 'Ctrl+C, Ctrl+V, Ctrl+Z, Ctrl+S shortcuts'], mcqCount: 36, estimatedMinutes: 16 },
        ]
      },
      {
        grade: '7th',
        chapters: [
          { number: 1, title: 'Word Processing with MS Word', keyConcepts: ['Font styles, sizes, colors', 'Paragraph alignment & bulleted lists', 'Inserting tables, shapes & pictures'], mcqCount: 45, estimatedMinutes: 22 },
          { number: 2, title: 'Spreadsheet Basics with MS Excel', keyConcepts: ['Rows, columns, cells and cell addresses (e.g. B5)', 'Formulas: =SUM(), =AVERAGE(), =MIN(), =MAX()'], mcqCount: 48, estimatedMinutes: 24 },
          { number: 3, title: 'Internet & Safe Web Browsing', keyConcepts: ['Search engine search queries', 'URLs, domain suffixes (.edu, .gov, .org, .pk)', 'Email creation and netiquette'], mcqCount: 42, estimatedMinutes: 20 },
          { number: 4, title: 'Cyber Security & Digital Safety', keyConcepts: ['Strong passwords creation', 'Viruses, worms, and Antivirus protection', 'Avoiding phishing scams & cyberbullying'], mcqCount: 44, estimatedMinutes: 22 },
        ]
      },
      {
        grade: '8th',
        chapters: [
          { number: 1, title: 'Computer Networks & Internet Architecture', keyConcepts: ['LAN, WAN, MAN networks', 'Routers, switches and transmission media (Fiber optics vs Wi-Fi)', 'IP addresses & DNS'], mcqCount: 50, estimatedMinutes: 25 },
          { number: 2, title: 'Presentation Skills with MS PowerPoint', keyConcepts: ['Slide templates, slide layouts', 'Transitions, animations, and slideshow mode'], mcqCount: 42, estimatedMinutes: 20 },
          { number: 3, title: 'Introduction to Algorithms & Flowcharts', keyConcepts: ['Step-by-step problem solving', 'Flowchart symbols: Oval (Start/End), Parallelogram (I/O), Rectangle (Process), Diamond (Decision)'], mcqCount: 52, estimatedMinutes: 26 },
          { number: 4, title: 'Block-Based Coding (Scratch) & Logic', keyConcepts: ['Sprites, loops (repeat, forever)', 'Conditional blocks (if... then)', 'Variables and event triggers'], mcqCount: 48, estimatedMinutes: 24 },
          { number: 5, title: 'Number Systems in Computing', keyConcepts: ['Binary numbers (0 and 1)', 'Converting decimal to binary and binary to decimal', 'Bits, Bytes, KB, MB, GB, TB memory units'], mcqCount: 46, estimatedMinutes: 22 },
        ]
      }
    ],
    quickNotes: [
      { topic: 'Computer Memory Units', summary: '1 Byte = 8 Bits | 1 KB = 1024 Bytes | 1 MB = 1024 KB | 1 GB = 1024 MB | 1 TB = 1024 GB.' },
      { topic: 'Flowchart Symbols', summary: 'Oval = Terminal (Start/Stop) | Parallelogram = Input / Output | Rectangle = Processing step | Diamond = Conditional Decision (Yes/No).' },
      { topic: 'RAM vs ROM', summary: 'RAM (Random Access Memory) is temporary and volatile (lost when power off). ROM (Read Only Memory) is permanent and non-volatile (stores BIOS/boot instructions).' }
    ]
  },
  {
    id: 'arabic',
    name: 'Arabic Language & Tajweed',
    urduName: 'عربی زبان و تجوید',
    icon: Star,
    color: 'from-rose-500 to-pink-600',
    badge: 'لسان القرآن',
    description: 'قواعد التجوید (مخارج و احکام)، ذخیرہ الفاظ، بنیادی عربی گرامر، اسم اشارہ، اور قرآنی فہم۔',
    classes: [
      {
        grade: '6th',
        chapters: [
          { number: 1, title: 'مخارج الحروف اور بنیادی تجوید', urduTitle: 'تجوید کے بنیادی اصول', keyConcepts: ['حروفِ حلقی (ء ہ ع ح غ خ)', 'حروفِ قلقلہ (ق ط ب ج د)', 'حرکات (زبر، زیر، پیش) اور حروفِ مدہ'], mcqCount: 35, estimatedMinutes: 16 },
          { number: 2, title: 'عربی میں تعارف اور گفتگو', urduTitle: 'التحيات والتعارف', keyConcepts: ['ما اسمك؟ / كيف حالك؟ / من أين أنت؟', 'الفاظ کے معنی (البيت، المدرسة، الكتاب)'], mcqCount: 38, estimatedMinutes: 18 },
          { number: 3, title: 'اسماء الاشارة (ھذا، ھذہ، ذلک، تلک)', urduTitle: 'اسمائے اشارہ کا استعمال', keyConcepts: ['مذکر و مونث اشارے', 'قریب اور دور کے اشارے'], mcqCount: 40, estimatedMinutes: 20 },
        ]
      },
      {
        grade: '7th',
        chapters: [
          { number: 1, title: 'نون ساکن اور تنوین کے چار احکام', urduTitle: 'احکامِ نون ساکن و تنوین', keyConcepts: ['اظہار (حروفِ حلقی)', 'ادغام (یرملون)', 'اقلاب (ب سے پہلے)', 'اخفاء (باقی 15 حروف)'], mcqCount: 45, estimatedMinutes: 22 },
          { number: 2, title: 'الضمائر المنفصلة (عربی ضمیریں)', urduTitle: 'عربی ضمائر', keyConcepts: ['هو، هما، هم / هي، هما، هن', 'أنتَ، أنتما، أنتم / أنا، نحن'], mcqCount: 42, estimatedMinutes: 20 },
          { number: 3, title: 'حروف الجر اور قرآنی تراکیب', urduTitle: 'حروفِ جر', keyConcepts: ['في، من، إلى، على، بـ، لـ کے معانی اور اعرابی اثر'], mcqCount: 40, estimatedMinutes: 20 },
        ]
      },
      {
        grade: '8th',
        chapters: [
          { number: 1, title: 'الفعل الماضي والمضارع (عربی افعال)', urduTitle: 'فعل ماضی اور مضارع کی گردان', keyConcepts: ['فعل ماضی (فَعَلَ، فَعَلَا، فَعَلُوا)', 'فعل مضارع (يَفْعَلُ، تَفْعَلُ، أَفْعَلُ، نَفْعَلُ)', 'فعل امر کی پہچان'], mcqCount: 50, estimatedMinutes: 25 },
          { number: 2, title: 'المركب التوصيفي والإضافي في العربية', urduTitle: 'مرکب اضافی اور توصیفی', keyConcepts: ['المضاف والمضاف إليه', 'الصفة والموصوف وتطابقهما'], mcqCount: 46, estimatedMinutes: 22 },
          { number: 3, title: 'قرآنی دعاؤں اور آیات کا ترجمہ', urduTitle: 'قرآنی عبارات کی تفہیم', keyConcepts: ['رَبِّ زِدْنِي عِلْمًا / رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وغیرہ کا لفظی و با محاورہ فہم'], mcqCount: 44, estimatedMinutes: 22 },
        ]
      }
    ],
    quickNotes: [
      { topic: 'حروفِ قلقلہ', summary: 'پانچ حروف ہیں جن کا مجموعہ "قُطْبُ جَدٍّ" (ق، ط، ب، ج، د) ہے۔ جب یہ ساکن ہوں تو مخرج پر ہلکی جنبش سے آواز گونجتی ہے۔' },
      { topic: 'اسمائے اشارہ', summary: 'ھذا (مذکر قریب)، ھذہ (مونث قریب) | ذلک (مذکر بعید)، تلک (مونث بعید)۔' }
    ]
  }
];

export const MiddleSchoolHub: React.FC = () => {
  const { setTab, setSelectedCategorySlug } = useApp();
  const [selectedGrade, setSelectedGrade] = useState<'all' | '6th' | '7th' | '8th'>('all');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('general-science');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedNote, setSelectedNote] = useState<{ topic: string; summary: string } | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Active Subject
  const activeSubject = useMemo(() => {
    return MIDDLE_SUBJECTS.find((s) => s.id === selectedSubjectId) || MIDDLE_SUBJECTS[0];
  }, [selectedSubjectId]);

  // Filtered Chapters based on selectedGrade & searchQuery
  const filteredChapters = useMemo(() => {
    const list: {
      grade: '6th' | '7th' | '8th';
      number: number;
      title: string;
      urduTitle?: string;
      keyConcepts: string[];
      mcqCount: number;
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

  const handleStartPractice = (subject: MiddleSubject) => {
    // Navigate to quiz or mcqs view
    if (subject.id === 'general-science') {
      setSelectedCategorySlug('everyday-science');
    } else if (subject.id === 'mathematics') {
      setSelectedCategorySlug('basic-mathematics');
    } else if (subject.id === 'english') {
      setSelectedCategorySlug('english');
    } else if (subject.id === 'urdu') {
      setSelectedCategorySlug('urdu-literature');
    } else if (subject.id === 'sindhi') {
      setSelectedCategorySlug('sindhi-language');
    } else if (subject.id === 'social-studies') {
      setSelectedCategorySlug('pakistan-studies');
    } else if (subject.id === 'islamiat') {
      setSelectedCategorySlug('islamic-studies');
    } else if (subject.id === 'computer-education') {
      setSelectedCategorySlug('computer-it');
    }
    setTab('mcqs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Hero Banner with Distinctive Warm Amber/Emerald Styling for Middle School */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-600 via-orange-600 to-teal-700 text-white p-6 sm:p-8 shadow-xl shadow-amber-900/10">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-100 text-xs font-bold border border-white/20">
              <span>🎒</span>
              <span>Middle School Educational Hub (Class 6, 7 & 8)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-display">
              Class 6 to 8 Curriculum & Practice Bank
            </h2>
            <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed">
              Complete Single National Curriculum (SNC) coverage across all 9 core subjects. Master key concepts, chapter notes, and practice objective question papers with instant feedback.
            </p>

            {/* Quick Stat Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold">
              <span className="px-3 py-1 rounded-xl bg-black/20 backdrop-blur-xs text-white border border-white/10">
                📚 9 Comprehensive Subjects
              </span>
              <span className="px-3 py-1 rounded-xl bg-black/20 backdrop-blur-xs text-white border border-white/10">
                🎯 1,400+ Standardized Questions
              </span>
              <span className="px-3 py-1 rounded-xl bg-black/20 backdrop-blur-xs text-white border border-white/10">
                🏆 Class 8 Board & PEC Ready
              </span>
            </div>
          </div>

          {/* Quick Action Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={() => handleStartPractice(activeSubject)}
              className="px-5 py-3 rounded-2xl bg-white text-amber-900 font-extrabold text-sm shadow-lg hover:bg-amber-50 transition cursor-pointer flex items-center justify-center gap-2 group"
            >
              <Play className="w-4 h-4 fill-amber-900 group-hover:scale-110 transition-transform" />
              <span>Practice {activeSubject.name}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grade Selector (All, 6th, 7th, 8th) */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            Select Grade / Class:
          </span>
        </div>

        <div className="grid grid-cols-4 gap-1.5 w-full sm:w-auto">
          {[
            { id: 'all', label: 'All (6–8)', badge: 'Complete' },
            { id: '6th', label: 'Class 6th', badge: 'Junior' },
            { id: '7th', label: 'Class 7th', badge: 'Mid' },
            { id: '8th', label: 'Class 8th', badge: 'Board Assessment' },
          ].map((grade) => (
            <button
              key={grade.id}
              onClick={() => setSelectedGrade(grade.id as any)}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                selectedGrade === grade.id
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-amber-950/40'
              }`}
            >
              {grade.label}
            </button>
          ))}
        </div>
      </div>

      {/* 9 Subjects Tabs - Visual Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>Middle School Subjects (All 9 Modules)</span>
          </h3>
          <span className="text-xs text-slate-500 font-medium">
            Active: <strong className="text-amber-600 dark:text-amber-400">{activeSubject.name}</strong>
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2">
          {MIDDLE_SUBJECTS.map((subject) => {
            const Icon = subject.icon;
            const isSelected = activeSubject.id === subject.id;
            return (
              <button
                key={subject.id}
                onClick={() => {
                  setSelectedSubjectId(subject.id);
                  setSearchQuery('');
                }}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all cursor-pointer select-none ${
                  isSelected
                    ? 'border-amber-500 bg-amber-50/90 dark:bg-amber-950/50 shadow-md ring-2 ring-amber-400/50'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-amber-300 hover:bg-slate-50 dark:hover:bg-slate-800/80'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 shadow-xs ${
                  isSelected ? 'bg-amber-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold leading-tight line-clamp-1 text-slate-800 dark:text-slate-200">
                  {subject.name}
                </span>
                {subject.urduName && (
                  <span className="text-[10px] text-slate-600 dark:text-slate-300 font-urdu mt-0.5 line-clamp-1">
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
        
        {/* Subject Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
              <span>{activeSubject.badge}</span>
              <span>•</span>
              <span>{selectedGrade === 'all' ? 'Class 6, 7 & 8 Combined' : `Class ${selectedGrade}`}</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white font-display flex items-center gap-2">
              <span>{activeSubject.name}</span>
              {activeSubject.urduName && (
                <span className="text-xl font-normal text-slate-600 dark:text-slate-300 font-urdu">
                  ({activeSubject.urduName})
                </span>
              )}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl">
              {activeSubject.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleStartPractice(activeSubject)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs shadow-md transition cursor-pointer flex items-center gap-1.5"
            >
              <Brain className="w-4 h-4" />
              <span>Launch Practice MCQs</span>
            </button>
          </div>
        </div>

        {/* High-Yield Formula & Concept Quick Notes Banner */}
        {activeSubject.quickNotes && activeSubject.quickNotes.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>High-Yield Revision Notes & Key Formulas</span>
              </span>
              <span className="text-[11px] text-slate-600 dark:text-slate-300">Click to expand & listen</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {activeSubject.quickNotes.map((note, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedNote(note)}
                  className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40 hover:border-amber-400 transition cursor-pointer group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-xs font-bold text-amber-900 dark:text-amber-200 group-hover:text-amber-600 line-clamp-1">
                      {note.topic}
                    </h4>
                    <ChevronRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                    {note.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Chapters Filter & Search Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${activeSubject.name} chapters or topics...`}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Showing <strong className="text-amber-600 dark:text-amber-400">{filteredChapters.length}</strong> syllabus units ({totalSubjectMcqs} total practice questions)
          </div>
        </div>

        {/* Chapters Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredChapters.map((ch, idx) => (
            <div
              key={`${ch.grade}-${ch.number}-${idx}`}
              className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 p-5 hover:bg-white dark:hover:bg-slate-800 hover:border-amber-300 dark:hover:border-amber-700/60 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-[10px] font-extrabold uppercase tracking-wider">
                    Class {ch.grade} • Unit {ch.number}
                  </span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-300 font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>~{ch.estimatedMinutes} mins</span>
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

                {/* Key Concepts list */}
                <div className="mt-3 space-y-1.5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                    Key Concepts & SLOs:
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
                  <span>{ch.mcqCount} MCQs Available</span>
                </span>

                <button
                  onClick={() => handleStartPractice(activeSubject)}
                  className="px-2.5 py-1 rounded-lg bg-amber-600/10 dark:bg-amber-400/10 text-amber-700 dark:text-amber-300 hover:bg-amber-600 hover:text-white font-bold transition cursor-pointer flex items-center gap-1"
                >
                  <span>Practice</span>
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
              className="mt-2 text-xs text-amber-600 font-bold hover:underline cursor-pointer"
            >
              Reset Search & Show All Grades
            </button>
          </div>
        )}
      </div>

      {/* Note Detail Modal / Dialog */}
      {selectedNote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="w-full max-w-lg bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-800 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>High-Yield Concept Card</span>
              </div>
              <button
                onClick={() => {
                  window.speechSynthesis?.cancel();
                  setIsSpeaking(false);
                  setSelectedNote(null);
                }}
                className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                {selectedNote.topic}
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-2 leading-relaxed bg-amber-50/50 dark:bg-amber-950/30 p-4 rounded-2xl border border-amber-200 dark:border-amber-900/40">
                {selectedNote.summary}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => speakText(`${selectedNote.topic}. ${selectedNote.summary}`)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer transition ${
                  isSpeaking
                    ? 'bg-rose-500 text-white'
                    : 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 hover:bg-amber-200'
                }`}
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span>{isSpeaking ? 'Stop Audio' : 'Read Aloud'}</span>
              </button>

              <button
                onClick={() => {
                  window.speechSynthesis?.cancel();
                  setIsSpeaking(false);
                  setSelectedNote(null);
                  handleStartPractice(activeSubject);
                }}
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold cursor-pointer"
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
