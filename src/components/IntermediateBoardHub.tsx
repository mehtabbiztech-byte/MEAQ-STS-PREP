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
  ShieldCheck,
  TrendingUp,
  Landmark,
  Briefcase,
  Users,
  Sigma,
  Zap,
  Activity,
  BarChart3,
  Bookmark
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export interface IntermediateSubject {
  id: string;
  name: string;
  urduName?: string;
  stream: 'pre-medical' | 'pre-engineering' | 'ics' | 'icom' | 'arts' | 'compulsory';
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
    year: '1st Year' | '2nd Year';
    part: 'Part-I (11th)' | 'Part-II (12th)';
    chapters: {
      number: number;
      title: string;
      urduTitle?: string;
      keyConcepts: string[];
      mcqCount: number;
      sloLevel: 'Knowledge' | 'Understanding' | 'Application';
      estimatedMinutes: number;
      boardWeightageNote?: string;
    }[];
  }[];
  highYieldTips: {
    topic: string;
    summary: string;
  }[];
}

export const INTERMEDIATE_SUBJECTS: IntermediateSubject[] = [
  {
    id: 'inter-physics',
    name: 'Physics',
    urduName: 'طبیعیات',
    stream: 'pre-engineering',
    icon: Atom,
    color: 'from-blue-600 to-indigo-700',
    badge: 'Pre-Med & Pre-Eng & ICS',
    description: 'Calculus-based mechanics, rotational dynamics, thermodynamics, electrostatics, electromagnetism, AC circuits, solid state physics, electronics, and modern nuclear physics for HSSC-I & II.',
    boardWeightage: 'Section A: 17 MCQs (17 marks) | Section B: 44 marks | Section C: 24 marks | Practical: 30 marks',
    paperFormat: {
      mcqSection: '17 MCQs (20 mins) - 1 mark each covering all chapters',
      shortQuestions: 'Section B: Attempt 22 short questions out of 33 (44 marks)',
      longQuestions: 'Section C: Attempt 3 out of 5 long questions with numericals (24 marks)',
      totalMarks: 85
    },
    classes: [
      {
        year: '1st Year',
        part: 'Part-I (11th)',
        chapters: [
          { number: 1, title: 'Measurements & Errors', urduTitle: 'پیمائش اور غلطیاں', keyConcepts: ['Physical quantities & SI base/derived units', 'Errors and Uncertainties (Absolute, Fractional, Percentage)', 'Significant figures rules & scientific notation', 'Dimensions of physical quantities & dimensional analysis'], mcqCount: 52, sloLevel: 'Understanding', estimatedMinutes: 24, boardWeightageNote: '1 MCQ + 1 Short Question' },
          { number: 2, title: 'Vectors and Equilibrium', urduTitle: 'ویکٹرز اور توازن', keyConcepts: ['Vector addition by rectangular components', 'Scalar (Dot) Product: A·B = AB cosθ', 'Vector (Cross) Product: A×B = AB sinθ n̂', 'Torque τ = r × F and conditions of equilibrium'], mcqCount: 65, sloLevel: 'Application', estimatedMinutes: 30, boardWeightageNote: '2 MCQs + 1 Long Question (Theory or Numerical)' },
          { number: 3, title: 'Motion and Force', urduTitle: 'حرکت اور قوت', keyConcepts: ['Displacement-time & velocity-time graphs', 'Newton\'s laws of motion & momentum p = mv', 'Impulse I = F × Δt = Δp', 'Elastic and Inelastic collisions in one dimension', 'Projectile motion: Time of flight, Maximum height, Horizontal range'], mcqCount: 70, sloLevel: 'Application', estimatedMinutes: 32, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 4, title: 'Work and Energy', urduTitle: 'کام اور توانائی', keyConcepts: ['Work done by constant and variable force', 'Work-Energy principle W = ΔK.E.', 'Gravitational potential energy & absolute P.E. U = -G(Mm/r)', 'Escape velocity ve = √(2gR)', 'Interconversion of P.E. and K.E.'], mcqCount: 58, sloLevel: 'Application', estimatedMinutes: 28, boardWeightageNote: '1 MCQ + 1 Long/Short Question' },
          { number: 5, title: 'Circular Motion & Gravitation', urduTitle: 'دائرائی حرکت', keyConcepts: ['Angular displacement, velocity and acceleration', 'Centripetal force Fc = mv²/r = mrω²', 'Moment of inertia I = Σmr²', 'Angular momentum L = Iω and conservation of angular momentum', 'Geostationary satellites and orbital velocity'], mcqCount: 64, sloLevel: 'Understanding', estimatedMinutes: 30, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 6, title: 'Fluid Dynamics', urduTitle: 'سیالی حرکیات', keyConcepts: ['Viscous drag & Stokes\' law F = 6πηrv', 'Terminal velocity vt = 2r²(ρ - σ)g / 9η', 'Equation of Continuity A1v1 = A2v2', 'Bernoulli\'s Equation P + ½ρv² + ρgh = constant', 'Torricelli\'s theorem & Venturi relation'], mcqCount: 55, sloLevel: 'Understanding', estimatedMinutes: 26, boardWeightageNote: '1 MCQ + 1 Long Question' },
          { number: 7, title: 'Oscillations & Simple Harmonic Motion', urduTitle: 'ارتعاشات', keyConcepts: ['SHM characteristics & Hooke\'s law', 'Mass-spring system & Simple pendulum T = 2π√(L/g)', 'Energy conservation in SHM', 'Damped oscillations & Resonance', 'Phase angle and phasor representation'], mcqCount: 60, sloLevel: 'Application', estimatedMinutes: 28, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 8, title: 'Waves & Sound', urduTitle: 'لہریں اور آواز', keyConcepts: ['Transverse vs Longitudinal waves', 'Speed of sound in gases (Newton\'s formula & Laplace correction)', 'Interference of sound waves & Beats', 'Stationary waves in stretched strings & organ pipes', 'Doppler Effect cases: Observer/source moving towards/away'], mcqCount: 65, sloLevel: 'Application', estimatedMinutes: 30, boardWeightageNote: '2 MCQs + 1 Long Question (Compulsory Numerical)' },
          { number: 9, title: 'Physical Optics', urduTitle: 'طبعی بصریات', keyConcepts: ['Wavefronts & Huygens\' principle', 'Young\'s Double Slit Experiment (YDSE) fringe width y = λL/d', 'Interference in thin films & Newton\'s rings', 'Diffraction of light & Diffraction grating d sinθ = mλ', 'Polarization of light & Brewster\'s law'], mcqCount: 62, sloLevel: 'Understanding', estimatedMinutes: 30, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 10, title: 'Optical Instruments', urduTitle: 'بصری آلات', keyConcepts: ['Least distance of distinct vision (25 cm)', 'Simple microscope M = 1 + d/f', 'Compound microscope M = (L/fo)(1 + d/fe)', 'Astronomical telescope M = fo / fe', 'Spectrometer & Michelson interferometer'], mcqCount: 48, sloLevel: 'Knowledge', estimatedMinutes: 24, boardWeightageNote: '1 MCQ + 2 Short Questions' },
          { number: 11, title: 'Heat and Thermodynamics', urduTitle: 'حرارت اور حرحرکیات', keyConcepts: ['Kinetic theory of gases & pressure P = ⅓ρ<v²>', 'First Law of Thermodynamics ΔQ = ΔU + W', 'Molar specific heats Cp - Cv = R', 'Carnot heat engine & efficiency η = 1 - T2/T1', 'Second Law of Thermodynamics & Entropy ΔS = ΔQ/T'], mcqCount: 68, sloLevel: 'Application', estimatedMinutes: 32, boardWeightageNote: '2 MCQs + 1 Long Question' },
        ]
      },
      {
        year: '2nd Year',
        part: 'Part-II (12th)',
        chapters: [
          { number: 12, title: 'Electrostatics', urduTitle: 'ساکن برقیات', keyConcepts: ['Coulomb\'s Law in dielectric F = (1/4πε)(q1q2/r²)', 'Electric field intensity & Field lines', 'Gauss\'s Law Φ = Q/εo & applications', 'Electric potential V = kq/r and potential gradient E = -ΔV/Δr', 'Capacitors, capacitance, energy stored U = ½CV²'], mcqCount: 72, sloLevel: 'Application', estimatedMinutes: 34, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 13, title: 'Current Electricity', urduTitle: 'برقی رو', keyConcepts: ['Drift velocity & Ohm\'s law', 'Resistivity ρ = RA/L & temperature coefficient α', 'Internal resistance & Electromotive force (EMF)', 'Kirchhoff\'s 1st & 2nd Rules (KCL & KVL)', 'Wheatstone Bridge balance condition R1/R2 = R3/R4', 'Potentiometer principle & comparison of EMFs'], mcqCount: 75, sloLevel: 'Application', estimatedMinutes: 35, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 14, title: 'Electromagnetism', urduTitle: 'برقی مقناطیسیت', keyConcepts: ['Magnetic field of a current-carrying wire & Right Hand Rule', 'Force on moving charge in magnetic field F = q(v × B)', 'Force on current-carrying conductor F = I(L × B)', 'Ampere\'s Circuital Law ∮B·ΔL = μoI', 'Torque on current loop & moving coil galvanometer', 'Conversion of galvanometer to ammeter & voltmeter'], mcqCount: 70, sloLevel: 'Application', estimatedMinutes: 32, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 15, title: 'Electromagnetic Induction', urduTitle: 'برقی مقناطیسی تحریض', keyConcepts: ['Induced EMF & Faraday\'s Law ε = -N(ΔΦ/Δt)', 'Lenz\'s Law and conservation of energy', 'Motional EMF ε = -vBL sinθ', 'Mutual induction & Self induction (Henry)', 'AC Generator & Transformers (Vs/Vp = Ns/Np)'], mcqCount: 74, sloLevel: 'Application', estimatedMinutes: 34, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 16, title: 'Alternating Current (AC)', urduTitle: 'متبادل برقی رو', keyConcepts: ['Peak value, RMS value Irms = Io/√2', 'Phase lag & lead in AC circuits', 'AC through Resistor, Inductor, and Capacitor', 'RL, RC, and RLC series circuits impedance Z', 'Resonance frequency fo = 1 / (2π√LC)', 'Power factor cosθ in AC circuits'], mcqCount: 65, sloLevel: 'Application', estimatedMinutes: 30, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 17, title: 'Physics of Solids', urduTitle: 'ٹھوس اجسام کی طبیعیات', keyConcepts: ['Crystalline, Amorphous, and Polymeric solids', 'Mechanical properties: Stress, Strain, Modulus of Elasticity', 'Strain energy in deformed materials', 'Energy band theory: Conductors, Insulators, Semiconductors', 'Superconductivity and critical temperature Tc'], mcqCount: 56, sloLevel: 'Understanding', estimatedMinutes: 26, boardWeightageNote: '1 MCQ + 3 Short Questions' },
          { number: 18, title: 'Electronics', urduTitle: 'الیکٹرانکس', keyConcepts: ['p-n junction diode: Forward & Reverse bias', 'Half-wave and Full-wave Rectification', 'Operational Amplifier (Op-Amp) characteristics', 'Op-Amp as inverting amplifier G = -R2/R1 & non-inverting G = 1 + R2/R1', 'Comparator and night switch'], mcqCount: 62, sloLevel: 'Application', estimatedMinutes: 28, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 19, title: 'Dawn of Modern Physics', urduTitle: 'جدید طبیعیات کا آغاز', keyConcepts: ['Special Theory of Relativity postulates & mass-energy relation E = mc²', 'Blackbody radiation & Planck\'s quantum theory', 'Photoelectric effect & Einstein\'s equation hf = Φ + K.E.max', 'Compton Effect Δλ = (h/moc)(1 - cosθ)', 'De Broglie hypothesis λ = h/p & Davisson-Germer experiment', 'Heisenberg Uncertainty Principle Δx·Δp ≥ ℏ'], mcqCount: 75, sloLevel: 'Understanding', estimatedMinutes: 35, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 20, title: 'Atomic Spectra', urduTitle: 'ایٹمی طیف', keyConcepts: ['Bohr\'s atomic model postulates', 'Hydrogen atom energy levels En = -13.6 eV / n²', 'Spectral series: Lyman, Balmer, Paschen, Brackett, Pfund', 'Production and properties of X-rays', 'Laser principle: Spontaneous vs Stimulated emission, Population inversion'], mcqCount: 60, sloLevel: 'Understanding', estimatedMinutes: 28, boardWeightageNote: '1 MCQ + 1 Long Question' },
          { number: 21, title: 'Nuclear Physics', urduTitle: 'نیوکلیائی طبیعیات', keyConcepts: ['Nuclear structure: Atomic number Z & mass number A', 'Mass defect and binding energy ΔE = Δm·c²', 'Radioactive decay law & half-life T½ = 0.693 / λ', 'Alpha, Beta, Gamma decays & interaction with matter', 'Nuclear Fission & Fusion (Carbon-Nitrogen cycle, Proton-Proton cycle)', 'Nuclear reactors (Moderators, Control rods) & Radiation detectors (GM counter)'], mcqCount: 70, sloLevel: 'Understanding', estimatedMinutes: 32, boardWeightageNote: '2 MCQs + 1 Long Question' },
        ]
      }
    ],
    highYieldTips: [
      { topic: 'Escape Velocity & Orbit', summary: 've = √(2gR) = 11.2 km/s for Earth. Orbital velocity vorbit = √(gR) = 7.9 km/s. Ratio ve / vorbit = √2 ≈ 1.414.' },
      { topic: 'Laplace Correction for Sound', summary: 'v = √(γP/ρ). For air, γ = 1.4, giving v ≈ 332 m/s at 0°C, correcting Newton\'s isothermal value (280 m/s).' },
      { topic: 'Photoelectric Threshold', summary: 'K.E.max = hf - Φ = hc/λ - hc/λo. If f < fo, no electrons are emitted regardless of light intensity.' },
      { topic: 'RLC Resonance Formula', summary: 'At resonance: XL = XC, impedance is minimum Z = R, current is maximum, and phase angle θ = 0. Resonance frequency fr = 1 / (2π√LC).' }
    ]
  },
  {
    id: 'inter-chemistry',
    name: 'Chemistry',
    urduName: 'کیمیا',
    stream: 'pre-medical',
    icon: FlaskConical,
    color: 'from-teal-600 to-emerald-700',
    badge: 'Pre-Med & Pre-Eng',
    description: 'Stoichiometry, atomic orbital theories, thermodynamics, kinetics, transition metals, comprehensive organic reaction mechanisms, and industrial synthesis for HSSC-I & II.',
    boardWeightage: 'Section A: 17 MCQs (17 marks) | Section B: 44 marks | Section C: 24 marks | Practical: 30 marks',
    paperFormat: {
      mcqSection: '17 MCQs (20 mins) - Conceptual calculations and organic reagents',
      shortQuestions: 'Section B: 22 short questions from 33 given (44 marks)',
      longQuestions: 'Section C: 3 long questions with reactions and mechanism steps (24 marks)',
      totalMarks: 85
    },
    classes: [
      {
        year: '1st Year',
        part: 'Part-I (11th)',
        chapters: [
          { number: 1, title: 'Basic Concepts & Stoichiometry', urduTitle: 'بنیادی اصول اور سٹوکیومیٹری', keyConcepts: ['Mole, Avogadro\'s number & Molar volume (22.414 dm³ at STP)', 'Limiting reactant determination', 'Theoretical yield vs Actual yield & percentage yield', 'Mass-mass, Mass-mole, and Mass-volume stoichiometry'], mcqCount: 65, sloLevel: 'Application', estimatedMinutes: 30, boardWeightageNote: '2 MCQs + 1 Long Question (Numerical)' },
          { number: 2, title: 'Experimental Techniques in Chemistry', urduTitle: 'تجرباتی تکنیکیں', keyConcepts: ['Filtration through Gooch & Sintered glass crucibles', 'Crystallization steps & choice of solvent', 'Sublimation & Solvent extraction (Distribution Law)', 'Chromatography: Paper chromatography & Rf values'], mcqCount: 45, sloLevel: 'Knowledge', estimatedMinutes: 20, boardWeightageNote: '1 MCQ + 2 Short Questions' },
          { number: 3, title: 'Gases', urduTitle: 'گیسیں', keyConcepts: ['Gas laws: Boyle\'s, Charles\'s, Avogadro\'s, Dalton\'s law of partial pressures', 'Graham\'s law of diffusion r1/r2 = √(M2/M1)', 'Ideal Gas Equation PV = nRT', 'Kinetic Molecular Theory of gases & deviations of real gases', 'Van der Waals equation (P + an²/V²)(V - nb) = nRT'], mcqCount: 68, sloLevel: 'Application', estimatedMinutes: 32, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 4, title: 'Liquids and Solids', urduTitle: 'مائعات اور ٹھوس', keyConcepts: ['Intermolecular forces: Dipole-dipole, London dispersion, Hydrogen bonding', 'Evaporation, Vapor pressure, Boiling point & dynamic equilibrium', 'Liquid crystals and applications', 'Types of solids: Ionic, Covalent, Molecular, Metallic', 'Crystal lattice & Unit cell of NaCl (fcc structure)'], mcqCount: 64, sloLevel: 'Understanding', estimatedMinutes: 30, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 5, title: 'Atomic Structure', urduTitle: 'ایٹم کی ساخت', keyConcepts: ['Discovery of electron, proton, neutron (e/m ratio)', 'Rutherford\'s vs Bohr\'s atomic model (derivation of radius and energy)', 'Planck\'s quantum theory & Dual nature of matter (De Broglie)', 'Quantum numbers: n, l, m, s', 'Aufbau principle, Hund\'s rule, Pauli\'s exclusion principle'], mcqCount: 72, sloLevel: 'Understanding', estimatedMinutes: 34, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 6, title: 'Theories of Chemical Bonding', urduTitle: 'کیمیائی بانڈنگ کے نظریات', keyConcepts: ['VSEPR theory shapes of molecules (Linear, Trigonal planar, Tetrahedral)', 'Valence Bond Theory (VBT) & Orbital Hybridization (sp³, sp², sp)', 'Molecular Orbital Theory (MOT) of homonuclear diatomics (O2, N2, He2)', 'Bond order, Bond energy, and Dipole moments'], mcqCount: 70, sloLevel: 'Application', estimatedMinutes: 34, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 7, title: 'Thermochemistry', urduTitle: 'حرارتی کیمیا', keyConcepts: ['Exothermic vs Endothermic reactions', 'First law of thermodynamics & Enthalpy ΔH = ΔU + PΔV', 'Calorimetry: Glass calorimeter & Bomb calorimeter', 'Hess\'s Law of constant heat summation & Born-Haber cycle for lattice energy'], mcqCount: 58, sloLevel: 'Application', estimatedMinutes: 28, boardWeightageNote: '1 MCQ + 1 Long Question' },
          { number: 8, title: 'Chemical Equilibrium', urduTitle: 'کیمیائی توازن', keyConcepts: ['Reversible reactions & Law of Mass Action', 'Equilibrium constants: Kc, Kp, Kx, Kn relations', 'Le Chatelier\'s principle (effect of concentration, pressure, temperature)', 'Solubility product Ksp and common ion effect', 'Buffer solutions & Henderson equation pH = pKa + log([Salt]/[Acid])'], mcqCount: 72, sloLevel: 'Application', estimatedMinutes: 34, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 9, title: 'Solutions', urduTitle: 'محلول', keyConcepts: ['Concentration units: Molarity, Molality, Mole fraction, ppm', 'Raoult\'s Law for volatile & non-volatile solutes', 'Colligative properties: Elevation of boiling point, Depression of freezing point', 'Osmotic pressure & Determination of molar mass by Landsberger\'s method'], mcqCount: 60, sloLevel: 'Application', estimatedMinutes: 30, boardWeightageNote: '1 MCQ + 1 Long Question' },
          { number: 10, title: 'Electrochemistry', urduTitle: 'الیکٹرو کیمسٹری', keyConcepts: ['Oxidation states & balancing redox reactions by ion-electron method', 'Electrolytic conduction & Faraday\'s laws', 'Galvanic cells & Standard Hydrogen Electrode (SHE)', 'Electrochemical series and standard reduction potentials', 'Lead storage battery & Fuel cells'], mcqCount: 66, sloLevel: 'Application', estimatedMinutes: 32, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 11, title: 'Reaction Kinetics', urduTitle: 'ردعمل کی حرکیات', keyConcepts: ['Rate of reaction & Rate law expression', 'Order of reaction & Molecularity (0th, 1st, 2nd, pseudo-order)', 'Half-life method & Initial rate method', 'Activation energy & Arrhenius equation k = Ae^(-Ea/RT)', 'Catalysis: Homogeneous vs Heterogeneous catalysts'], mcqCount: 62, sloLevel: 'Understanding', estimatedMinutes: 30, boardWeightageNote: '1 MCQ + 1 Long Question' },
        ]
      },
      {
        year: '2nd Year',
        part: 'Part-II (12th)',
        chapters: [
          { number: 1, title: 'Periodic Classification & Periodicity', urduTitle: 'پیریڈک درجہ بندی', keyConcepts: ['Modern periodic table trends across periods and down groups', 'Atomic radius, Ionic radius, Ionization Energy, Electron Affinity', 'Electronegativity, Oxidation states, and Hydration energy', 'Periodic trends in Halides, Hydrides, and Oxides of periods 2 & 3'], mcqCount: 60, sloLevel: 'Understanding', estimatedMinutes: 28, boardWeightageNote: '1 MCQ + 1 Long Question' },
          { number: 2, title: 's-Block Elements (Groups IA & IIA)', urduTitle: 'ایس بلاک عناصر', keyConcepts: ['Electronic configuration of Alkali & Alkaline Earth metals', 'Peculiar behavior of Lithium and Beryllium', 'Commercial preparation of Sodium by Down\'s cell', 'Manufacture of Sodium hydroxide by Nelson\'s cell', 'Role of Gypsum in agriculture and industry'], mcqCount: 52, sloLevel: 'Knowledge', estimatedMinutes: 25, boardWeightageNote: '1 MCQ + 2 Short Questions' },
          { number: 3, title: 'Group IIIA and Group IVA Elements', urduTitle: 'گروپ 3A اور 4A عناصر', keyConcepts: ['Boron chemistry: Borax bead test & Boric acid', 'Aluminum chemistry: Thermite process & Amphoteric nature', 'Carbon and Silicon: Catenation & Allotropy', 'Silicates, Silicones, and Semiconductors'], mcqCount: 54, sloLevel: 'Understanding', estimatedMinutes: 26, boardWeightageNote: '1 MCQ + 2 Short Questions' },
          { number: 4, title: 'Group VA and Group VIA Elements', urduTitle: 'گروپ 5A اور 6A عناصر', keyConcepts: ['Nitrogen oxides and preparation of Nitric acid by Ostwald\'s process', 'Allotropes of Phosphorus (White vs Red)', 'Sulfur allotropes & Manufacture of Sulfuric acid by Contact process', 'Sulfuric acid as dehydrating and oxidizing agent'], mcqCount: 58, sloLevel: 'Knowledge', estimatedMinutes: 28, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 5, title: 'The Halogens and The Noble Gases', urduTitle: 'ہیلوجنز اور نوبل گیسز', keyConcepts: ['Bleaching powder preparation and chemical reactions', 'Oxidizing power trend: F2 > Cl2 > Br2 > I2', 'Oxoacids of Halogens & Acidic strength', 'Compounds of Xenon: XeF2, XeF4, XeF6, XeO3', 'Commercial uses of Noble gases'], mcqCount: 50, sloLevel: 'Understanding', estimatedMinutes: 24, boardWeightageNote: '1 MCQ + 2 Short Questions' },
          { number: 6, title: 'Transition Elements (d-Block & f-Block)', urduTitle: 'ٹرانزیشن عناصر', keyConcepts: ['General characteristics: Variable oxidation states, Paramagnetism, Colored ions', 'Complex compounds: Ligands, Coordination number, IUPAC naming', 'Nomenclature of coordination complexes', 'Corrosion of iron & protection mechanisms', 'Manufacture of Potassium dichromate (K2Cr2O7) and Potassium permanganate (KMnO4)'], mcqCount: 65, sloLevel: 'Application', estimatedMinutes: 32, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 7, title: 'Fundamental Principles of Organic Chemistry', urduTitle: 'نامیاتی کیمسٹری کے بنیادی اصول', keyConcepts: ['Classification of organic compounds & Functional groups', 'Homologous series & Nomenclature (IUPAC rules)', 'Isomerism: Structural (Chain, Position, Functional, Metamerism, Tautomerism)', 'Geometric (cis-trans) isomerism & chirality'], mcqCount: 64, sloLevel: 'Understanding', estimatedMinutes: 30, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 8, title: 'Aliphatic Hydrocarbons (Alkanes, Alkenes, Alkynes)', urduTitle: 'ہائیڈرو کاربنز', keyConcepts: ['Free radical substitution mechanism of Alkanes (Chlorination)', 'Electrophilic addition to Alkenes: Markovnikov\'s rule', 'Ozonolysis of Alkenes to Aldehydes/Ketones', 'Acidity of terminal Alkynes (Acetylene) with ammoniacal silver nitrate', 'Polymerization of Acetylene to Benzene'], mcqCount: 75, sloLevel: 'Application', estimatedMinutes: 35, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 9, title: 'Aromatic Hydrocarbons (Benzene & Derivatives)', urduTitle: 'بینزین اور آرومیٹک مرکبات', keyConcepts: ['Kekule structure & Resonance stability of Benzene (Resonance energy 150.5 kJ/mol)', 'Electrophilic aromatic substitution mechanism: Nitration, Halogenation, Sulfonation', 'Friedel-Crafts Alkylation and Acylation', 'Orientation in electrophilic substitution: Ortho/Para directors vs Meta directors'], mcqCount: 72, sloLevel: 'Application', estimatedMinutes: 34, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 10, title: 'Alkyl Halides and Organometallic Compounds', urduTitle: 'الکائل ہیلائیڈز', keyConcepts: ['SN1 vs SN2 nucleophilic substitution mechanisms (stereochemistry & kinetics)', 'E1 vs E2 elimination reactions & Saytzeff\'s rule', 'Preparation of Grignard Reagent (R-Mg-X)', 'Reactions of Grignard reagent with H2O, CO2, Aldehydes (primary/secondary alcohols), and Ketones (tertiary alcohols)'], mcqCount: 70, sloLevel: 'Application', estimatedMinutes: 34, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 11, title: 'Alcohols, Phenols and Ethers', urduTitle: 'الکوحل، فینول اور ایتھر', keyConcepts: ['Classification & Lucas test to distinguish primary, secondary, and tertiary alcohols', 'Acidity of Phenol compared to Alcohols and Water', 'Electrophilic substitution in Phenol: Nitration, Bromination, Bakelite formation', 'Williamson\'s ether synthesis and cleavage with HI'], mcqCount: 68, sloLevel: 'Application', estimatedMinutes: 32, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 12, title: 'Aldehydes and Ketones (Carbonyl Chemistry)', urduTitle: 'ایلڈیہائیڈ اور کیٹون', keyConcepts: ['Nucleophilic addition mechanism: HCN, NaHSO3 addition', 'Aldol condensation (with α-hydrogen) vs Cannizzaro reaction (without α-hydrogen)', 'Haloform / Iodoform test for CH3-C=O group', 'Oxidation tests: Tollens\' reagent (silver mirror) & Fehling\'s solution'], mcqCount: 74, sloLevel: 'Application', estimatedMinutes: 35, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 13, title: 'Carboxylic Acids & Functional Derivatives', urduTitle: 'کاربوکسائلک ایسڈ', keyConcepts: ['Acidity of Carboxylic acids & inductive effect of halogens', 'Preparation of Acyl chlorides, Acid anhydrides, Esters, and Amides', 'Esterification mechanism and hydrolysis', 'Amino acids: Zwitterion structure and isoelectric point'], mcqCount: 62, sloLevel: 'Understanding', estimatedMinutes: 30, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 14, title: 'Macromolecules (Polymers & Biochemistry)', urduTitle: 'میکرو مالیکیولز', keyConcepts: ['Addition polymers (Polythene, PVC, Teflon) vs Condensation polymers (Nylon 6,6, Terylene)', 'Carbohydrates classification: Glucose, Fructose, Starch, Cellulose', 'Proteins: Primary, Secondary, Tertiary, Quaternary structures & denaturation', 'Lipids: Saponification & Iodine number'], mcqCount: 54, sloLevel: 'Knowledge', estimatedMinutes: 26, boardWeightageNote: '1 MCQ + 2 Short Questions' },
          { number: 15, title: 'Common Chemical Industries in Pakistan', urduTitle: 'کیمیائی صنعتیں', keyConcepts: ['Fertilizers: Urea manufacture flow sheet, Ammonium nitrate', 'Portland cement: Raw materials & Wet process flow sheet', 'Paper pulp manufacture by Kraft process'], mcqCount: 48, sloLevel: 'Knowledge', estimatedMinutes: 22, boardWeightageNote: '1 MCQ + 2 Short Questions' },
          { number: 16, title: 'Environmental Chemistry', urduTitle: 'ماحولیاتی کیمیا', keyConcepts: ['Photochemical smog: Oxidizing smog vs Reducing smog', 'Acid rain: pH < 5.6 and corrosive effects', 'Ozone depletion by Chlorofluorocarbons (CFCs)', 'Water treatment: Primary, Secondary (biological), and Tertiary purification', 'Incineration and Solid waste management'], mcqCount: 46, sloLevel: 'Knowledge', estimatedMinutes: 22, boardWeightageNote: '1 MCQ + 2 Short Questions' },
        ]
      }
    ],
    highYieldTips: [
      { topic: 'Grignard Reagent Alcohol Synthesis', summary: 'HCHO + RMgX → Primary Alcohol (1°). RCHO + RMgX → Secondary Alcohol (2°). R2C=O + RMgX → Tertiary Alcohol (3°).' },
      { topic: 'SN1 vs SN2 Mechanisms', summary: 'SN1: 2 steps, carbocation intermediate, 3° alkyl halides favored, polar protic solvent, racemization. SN2: 1 step concerted, backside attack, 1° alkyl halides favored, inversion of configuration.' },
      { topic: 'Aldol vs Cannizzaro Criterion', summary: 'Aldol Condensation requires at least one α-Hydrogen in presence of dilute base (e.g. Acetaldehyde). Cannizzaro occurs in aldehydes lacking α-Hydrogen in presence of 50% concentrated base (e.g. Formaldehyde, Benzaldehyde).' },
      { topic: 'Buffer Solution Henderson Equation', summary: 'pH = pKa + log([Salt]/[Acid]). For basic buffer: pOH = pKb + log([Salt]/[Base]). At half-neutralization [Salt] = [Acid], so pH = pKa.' }
    ]
  },
  {
    id: 'inter-biology',
    name: 'Biology',
    urduName: 'حیاتیات',
    stream: 'pre-medical',
    icon: Dna,
    color: 'from-emerald-600 to-green-700',
    badge: 'Pre-Medical Stream',
    description: 'Cell physiology, kingdom classifications, bioenergetics, human homeostasis, nervous and chemical coordination, genetics, biotechnology, evolution, and ecosystem dynamics for HSSC-I & II.',
    boardWeightage: 'Section A: 17 MCQs (17 marks) | Section B: 44 marks | Section C: 24 marks | Practical: 30 marks',
    paperFormat: {
      mcqSection: '17 MCQs (20 mins) - Diagram-based and detailed physiological questions',
      shortQuestions: 'Section B: 22 short questions from 33 given (44 marks)',
      longQuestions: 'Section C: 3 descriptive long questions with labeled biological diagrams (24 marks)',
      totalMarks: 85
    },
    classes: [
      {
        year: '1st Year',
        part: 'Part-I (11th)',
        chapters: [
          { number: 1, title: 'Introduction to Biology & Life', urduTitle: 'حیاتیات کا تعارف', keyConcepts: ['Levels of biological organization: Atom to Biosphere', 'Living world in space & time (Phylogenetic lineage)', 'Biological method & disease control (Preventive, Vaccination, Gene therapy)', 'Cloning & Protection of environment'], mcqCount: 45, sloLevel: 'Knowledge', estimatedMinutes: 20, boardWeightageNote: '1 MCQ + 2 Short Questions' },
          { number: 2, title: 'Biological Molecules', urduTitle: 'حیاتیاتی مالیکیولز', keyConcepts: ['Water as life solvent (High specific heat, Heat of vaporization, Hydrophobic exclusion)', 'Carbohydrates: Monosaccharides, Disaccharides (Glycosidic bond), Polysaccharides', 'Lipids: Triglycerides (Ester linkage), Phospholipids, Terpenoids, Waxes', 'Proteins: Amino acids, Peptide bonds, Primary to Quaternary structures', 'Nucleic Acids: DNA Watson-Crick model vs RNA types (mRNA, tRNA, rRNA)'], mcqCount: 68, sloLevel: 'Understanding', estimatedMinutes: 32, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 3, title: 'Enzymes', urduTitle: 'انزائمز', keyConcepts: ['Apoenzyme, Cofactor, Coenzyme, Prosthetic group', 'Lock and Key model vs Induced Fit model', 'Enzyme inhibition: Competitive vs Non-competitive inhibitors', 'Allosteric regulation & Feedback inhibition'], mcqCount: 50, sloLevel: 'Understanding', estimatedMinutes: 25, boardWeightageNote: '1 MCQ + 1 Long Question' },
          { number: 4, title: 'The Cell', urduTitle: 'سیل کی ساخت اور افعال', keyConcepts: ['Plasma membrane: Fluid Mosaic Model', 'Endoplasmic reticulum (Rough vs Smooth) & Ribosomes', 'Golgi apparatus & Lysosomes (Autophagy, Storage diseases like Tay-Sachs)', 'Mitochondria (Cristae, ATP synthesis) & Chloroplasts (Thylakoids, Stroma)', 'Cytoskeleton: Microtubules, Microfilaments, Intermediate filaments'], mcqCount: 70, sloLevel: 'Understanding', estimatedMinutes: 34, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 5, title: 'Variety of Life (Acellular Life & Viruses)', urduTitle: 'حیاتیاتی تنوع اور وائرسز', keyConcepts: ['Five kingdom system vs Three domain system', 'Discovery & structure of Bacteriophages and Tobacco Mosaic Virus', 'Viral replication: Lytic cycle (Virulent phage) vs Lysogenic cycle (Temperate phage)', 'Retroviruses: HIV structure, Reverse transcriptase, AIDS pathogenesis', 'Prions and Viroids'], mcqCount: 56, sloLevel: 'Knowledge', estimatedMinutes: 26, boardWeightageNote: '1 MCQ + 1 Long Question' },
          { number: 6, title: 'Kingdom Prokaryotae (Monera - Bacteria)', urduTitle: 'پروکیریوٹس (بیکٹیریا)', keyConcepts: ['Bacterial morphology (Cocci, Bacilli, Spirilla)', 'Cell wall: Gram-positive (Thick peptidoglycan) vs Gram-negative (Outer membrane, LPS)', 'Endospore formation & Flagellar arrangements', 'Bacterial nutrition & Growth phases (Lag, Log, Stationary, Death)', 'Control of bacteria: Antibiotics vs Disinfectants'], mcqCount: 58, sloLevel: 'Understanding', estimatedMinutes: 28, boardWeightageNote: '1 MCQ + 1 Long Question' },
          { number: 7, title: 'The Kingdom Protista (Protoctista)', urduTitle: 'پروٹسٹا', keyConcepts: ['Animal-like protists (Protozoans: Amoebae, Flagellates, Ciliates, Apicomplexans - Plasmodium)', 'Plant-like protists (Algae: Euglenoids, Dinoflagellates, Diatoms, Brown & Red algae)', 'Fungus-like protists (Slime molds & Water molds - Phytophthora infestans)'], mcqCount: 52, sloLevel: 'Knowledge', estimatedMinutes: 25, boardWeightageNote: '1 MCQ + 2 Short Questions' },
          { number: 8, title: 'Fungi (The Kingdom of Recyclers)', urduTitle: 'فنجائی', keyConcepts: ['Hyphae structure: Septate vs Aseptate (Coenocytic)', 'Nutritional modes: Saprotrophic, Parasitic, Mutualistic (Lichens, Mycorrhizae)', 'Reproduction: Plasmogamy, Karyogamy, Dikaryotic phase', 'Classification: Zygomycota, Ascomycota (Sac fungi), Basidiomycota (Club fungi), Deuteromycota', 'Economic importance of Fungi (Penicillin, Yeast fermentation, Plant rusts/smuts)'], mcqCount: 54, sloLevel: 'Understanding', estimatedMinutes: 26, boardWeightageNote: '1 MCQ + 1 Long Question' },
          { number: 9, title: 'Kingdom Plantae', urduTitle: 'پودوں کی بادشاہت', keyConcepts: ['Alternation of Generations (Gametophyte vs Sporophyte)', 'Bryophytes (Non-vascular: Mosses, Liverworts, Hornworts)', 'Tracheophytes (Vascular): Pteridophytes (Ferns, Lycopsids, Sphenopsids)', 'Evolution of Seed habit & Pollen tube', 'Gymnosperms (Conifers) vs Angiosperms (Flowering plants, Double fertilization)'], mcqCount: 65, sloLevel: 'Understanding', estimatedMinutes: 30, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 10, title: 'Kingdom Animalia', urduTitle: 'جانوروں کی بادشاہت', keyConcepts: ['Diploblastic vs Triploblastic animals', 'Coelom types: Acoelomates, Pseudocoelomates, Coelomates (Protostomes vs Deuterostomes)', 'Invertebrate phyla: Porifera, Cnidaria (Polyp vs Medusa), Platyhelminthes, Nematoda, Annelida, Arthropoda, Mollusca, Echinodermata', 'Chordate hallmarks: Notochord, Dorsal hollow nerve cord, Pharyngeal slits, Post-anal tail', 'Vertebrate classes: Pisces, Amphibia, Reptilia, Aves, Mammalia (Prototheria, Metatheria, Eutheria)'], mcqCount: 72, sloLevel: 'Understanding', estimatedMinutes: 35, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 11, title: 'Bioenergetics', urduTitle: 'بائیو انرجیٹکس', keyConcepts: ['Chloroplast pigments & Absorption vs Action spectra', 'Light-dependent reactions: Photolysis of water, Non-cyclic (Z-scheme) vs Cyclic photophosphorylation', 'Light-independent reactions: Calvin cycle (RuBisCO enzyme role)', 'Cellular respiration: Glycolysis (Cytosol), Link reaction, Krebs Cycle (Mitochondrial matrix)', 'Electron Transport Chain (ETC), Chemiosmosis & ATP synthase', 'Anaerobic respiration: Lactic acid vs Alcoholic fermentation'], mcqCount: 75, sloLevel: 'Application', estimatedMinutes: 35, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 12, title: 'Nutrition in Plants and Animals', urduTitle: 'غذائیت', keyConcepts: ['Autotrophic vs Heterotrophic nutrition (Parasitic, Saprotrophic, Carnivorous plants: Pitcher plant, Sundew)', 'Digestion in Hydra, Planaria, and Cockroach', 'Human Digestive system: Oral cavity, Stomach (Gastric juice, Pepsinogen activation)', 'Small intestine: Duodenum, Pancreatic juice enzymes, Bile salts, Villi absorption', 'Large intestine & Disorders: Appendicitis, Ulcers, Cirrhosis'], mcqCount: 60, sloLevel: 'Understanding', estimatedMinutes: 28, boardWeightageNote: '1 MCQ + 1 Long Question' },
          { number: 13, title: 'Gaseous Exchange', urduTitle: 'گیسوں کا تبادلہ', keyConcepts: ['Respiratory surfaces properties in organisms', 'Human respiratory tract: Larynx, Trachea, Bronchi, Alveoli', 'Mechanics of breathing & Regulation (Medulla oblongata respiratory center)', 'Transport of gases: Oxygen (Oxyhemoglobin dissociation curve & Bohr effect) and Carbon dioxide (Bicarbonate ions, Carbaminohemoglobin)', 'Respiratory disorders: Emphysema, Asthma, Lung cancer'], mcqCount: 58, sloLevel: 'Application', estimatedMinutes: 28, boardWeightageNote: '1 MCQ + 1 Long Question' },
          { number: 14, title: 'Transport in Plants and Animals', urduTitle: 'ترسیل کا نظام', keyConcepts: ['Ascent of sap: Cohesion-Tension theory & Root pressure', 'Transpiration & Stomatal opening mechanisms (K+ ion influx hypothesis)', 'Phloem translocation: Pressure flow hypothesis (Source to Sink)', 'Human Circulatory system: Cardiac cycle (Systole, Diastole), Blood pressure', 'Pacemaker (SA Node, AV Node, Bundle of His, Purkinje fibers)', 'Lymphatic system: Lymph capillaries, Nodes, and functions'], mcqCount: 70, sloLevel: 'Application', estimatedMinutes: 34, boardWeightageNote: '2 MCQs + 1 Long Question' },
        ]
      },
      {
        year: '2nd Year',
        part: 'Part-II (12th)',
        chapters: [
          { number: 15, title: 'Homeostasis', urduTitle: 'ہومیوسٹیسس', keyConcepts: ['Osmoregulation: Marine, Freshwater, and Terrestrial adaptations', 'Excretion in plants & animals (Ammonia, Urea, Uric acid excretion costs)', 'Human Urinary system: Nephron structure & Counter-current multiplier mechanism', 'Hormonal control: ADH (Vasopressin) & Aldosterone in osmoregulation', 'Kidney disorders: Stones, Lithotripsy, Hemodialysis vs Peritoneal dialysis'], mcqCount: 72, sloLevel: 'Application', estimatedMinutes: 34, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 16, title: 'Support and Movement', urduTitle: 'سہارا اور حرکت', keyConcepts: ['Plant movements: Autonomic (Turgor, Growth) vs Paratonic (Tropic, Nastic movements)', 'Human Skeleton: Axial skeleton (Skull, Vertebrae, Ribs) vs Appendicular skeleton', 'Bone histological structure (Osteocytes, Haversian canal) vs Cartilage', 'Sliding Filament Model of muscle contraction (Actin, Myosin, Troponin, Tropomyosin, Ca²+ trigger)', 'Musculoskeletal disorders: Tetany, Muscle fatigue, Rickets, Osteomalacia'], mcqCount: 68, sloLevel: 'Application', estimatedMinutes: 32, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 17, title: 'Coordination and Control', urduTitle: 'رابطہ اور کنٹرول', keyConcepts: ['Neuron structure & Resting membrane potential (-70 mV) vs Action potential (+30 mV)', 'Synaptic transmission: Neurotransmitters (Acetylcholine) & Synaptic vesicles', 'Human Brain: Forebrain (Cerebrum, Thalamus, Hypothalamus), Midbrain, Hindbrain', 'Endocrine system: Pituitary (Master gland), Thyroid, Parathyroid, Adrenal, Pancreatic islets', 'Plant hormones: Auxins, Gibberellins, Cytokinins, Abscisic acid, Ethylene'], mcqCount: 75, sloLevel: 'Application', estimatedMinutes: 35, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 18, title: 'Reproduction', urduTitle: 'تولید کا نظام', keyConcepts: ['Asexual vs Sexual reproduction in plants (Photoperiodism & Phytochrome system)', 'Male reproductive system: Spermatogenesis & Sertoli cells', 'Female reproductive system: Oogenesis & Menstrual / Ovarian cycle (FSH, LH, Estrogen, Progesterone)', 'Fertilization, Gestation & Placenta functions', 'Sexually Transmitted Diseases (STDs): Syphilis, Gonorrhea, AIDS'], mcqCount: 70, sloLevel: 'Understanding', estimatedMinutes: 34, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 19, title: 'Growth and Development', urduTitle: 'نشوونما اور بالیدگی', keyConcepts: ['Growth phases in plants: Cell division, Elongation, Maturation', 'Development of Chick embryo: Morula, Blastula, Gastrula, Primitive streak', 'Embryonic induction (Spemann organizer experiments)', 'Regeneration & Abnormal development (Teratology)'], mcqCount: 55, sloLevel: 'Understanding', estimatedMinutes: 26, boardWeightageNote: '1 MCQ + 1 Long Question' },
          { number: 20, title: 'Chromosomes and DNA', urduTitle: 'کروموسومز اور ڈی این اے', keyConcepts: ['Chromatin structure & Nucleosomes (Histone octamer)', 'DNA replication: Meselson-Stahl experiment (Semi-conservative mode)', 'Transcription: RNA polymerase, Promoters, Post-transcriptional modification', 'Genetic code: Codons, Triplet nature, Degeneracy, Wobble hypothesis', 'Translation: Ribosome binding, Initiation, Elongation, Termination'], mcqCount: 74, sloLevel: 'Application', estimatedMinutes: 35, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 21, title: 'Cell Cycle', urduTitle: 'سیل سائیکل', keyConcepts: ['Interphase: G1, S (DNA synthesis), G2 phases & Checkpoints (G1/S, G2/M)', 'Mitosis stages & Cytokinesis', 'Meiosis I (Prophase I substages: Leptotene, Zygotene, Pachytene crossing over, Diplotene, Diakinesis)', 'Non-disjunction disorders: Down syndrome (Trisomy 21), Turner syndrome (XO), Klinefelter syndrome (XXY)', 'Necrosis vs Apoptosis'], mcqCount: 65, sloLevel: 'Application', estimatedMinutes: 30, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 22, title: 'Variation and Genetics', urduTitle: 'تغیرات اور جینیات', keyConcepts: ['Mendel\'s Laws of Inheritance: Segregation & Independent Assortment', 'Incomplete dominance vs Codominance (ABO blood groups)', 'Epistasis (Bombay phenotype) & Pleiotropy', 'Sex linkage in Drosophila (Morgan experiments) and humans (Hemophilia, Color blindness)', 'Polygenic inheritance: Human skin color & wheat kernel color'], mcqCount: 72, sloLevel: 'Application', estimatedMinutes: 35, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 23, title: 'Biotechnology', urduTitle: 'بائیو ٹیکنالوجی', keyConcepts: ['Recombinant DNA technology: Restriction endonucleases & Molecular vectors (Plasmids, pBR322)', 'Polymerase Chain Reaction (PCR): Denaturation, Annealing, Extension & Taq polymerase', 'Gel electrophoresis & DNA fingerprinting (RFLPs)', 'Transgenic bacteria, plants, and animals', 'Gene therapy & Human Genome Project (HGP)'], mcqCount: 68, sloLevel: 'Application', estimatedMinutes: 32, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 24, title: 'Evolution', urduTitle: 'ارتقاء', keyConcepts: ['Lamarckism vs Darwinism (Natural selection)', 'Evidences of evolution: Fossil record, Comparative anatomy (Homologous vs Analogous organs), Molecular biology', 'Hardy-Weinberg equilibrium: p² + 2pq + q² = 1 and conditions', 'Factors affecting allele frequencies: Mutation, Gene flow, Genetic drift, Non-random mating'], mcqCount: 58, sloLevel: 'Understanding', estimatedMinutes: 28, boardWeightageNote: '1 MCQ + 1 Long Question' },
          { number: 25, title: 'Ecosystem and Man & Environment', urduTitle: 'ماحولیاتی نظام اور انسان', keyConcepts: ['Ecosystem components: Biotic vs Abiotic', 'Food chains, Food webs & Trophic levels (10% energy rule)', 'Ecological pyramids: Pyramid of numbers, Biomass, and Energy', 'Biogeochemical cycles: Nitrogen cycle & Phosphorus cycle', 'Succession: Primary vs Secondary (Hydrosere & Xerosere stages)', 'Greenhouse effect, Global warming, Deforestation, Acid rain'], mcqCount: 60, sloLevel: 'Understanding', estimatedMinutes: 28, boardWeightageNote: '1 MCQ + 2 Short Questions' },
        ]
      }
    ],
    highYieldTips: [
      { topic: 'Hardy-Weinberg Law', summary: 'p + q = 1 (allele frequencies) and p² + 2pq + q² = 1 (genotype frequencies). For recessive disease with incidence 1 in 10,000 (q² = 0.0001): q = 0.01, p = 0.99, carriers 2pq ≈ 2%.' },
      { topic: 'Muscle Contraction Trigger', summary: 'Action potential triggers Ca²+ release from Sarcoplasmic Reticulum. Ca²+ binds to Troponin C, shifting Tropomyosin and exposing Myosin-binding sites on Actin.' },
      { topic: 'Meiosis Crossing Over Substage', summary: 'Crossing over strictly occurs during Pachytene of Prophase-I, where non-sister chromatids of homologous chromosomes exchange genetic segments via Chiasmata.' },
      { topic: 'Counter-Current Mechanism', summary: 'Loop of Henle maintains high hypertonicity in renal medulla. Descending limb is permeable to water only; ascending limb is impermeable to water and actively pumps out NaCl.' }
    ]
  },
  {
    id: 'inter-math',
    name: 'Mathematics',
    urduName: 'ریاضی',
    stream: 'pre-engineering',
    icon: Calculator,
    color: 'from-amber-600 to-orange-700',
    badge: 'Pre-Eng & ICS Stream',
    description: 'Advanced algebra, matrices, trigonometry, analytical geometry, limits, differentiation, integration, conic sections, and vectors for HSSC-I & II.',
    boardWeightage: 'Section A: 20 MCQs (20 marks) | Section B: 50 marks | Section C: 30 marks',
    paperFormat: {
      mcqSection: '20 MCQs (25 mins) - Direct formula applications and rapid theorems',
      shortQuestions: 'Section B: Attempt 25 short questions out of 37 (50 marks)',
      longQuestions: 'Section C: Attempt 5 comprehensive long questions out of 7 (30 marks)',
      totalMarks: 100
    },
    classes: [
      {
        year: '1st Year',
        part: 'Part-I (11th)',
        chapters: [
          { number: 1, title: 'Number Systems & Complex Numbers', urduTitle: 'اعداد کا نظام', keyConcepts: ['Real numbers and their properties', 'Complex numbers z = a + bi, Conjugate, Modulus |z| = √(a² + b²)', 'Geometric representation & Argand diagram', 'De Moivre\'s Theorem for powers of complex numbers'], mcqCount: 55, sloLevel: 'Understanding', estimatedMinutes: 26, boardWeightageNote: '1 MCQ + 2 Short Questions' },
          { number: 2, title: 'Sets, Functions and Groups', urduTitle: 'سیٹس، تفاعل اور گروپس', keyConcepts: ['Operations on sets & Venn diagrams', 'Truth tables of logical connectives (Conjunction, Disjunction, Implication, Biconditional)', 'Relations and Functions: One-to-one, Onto, Inverse functions', 'Group theory: Monoids, Semigroups, Groups, and Abelian groups verification'], mcqCount: 58, sloLevel: 'Understanding', estimatedMinutes: 28, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 3, title: 'Matrices and Determinants', urduTitle: 'قالب اور مقطع', keyConcepts: ['Operations on matrices (Addition, Multiplication, Transpose)', 'Properties of determinants without expanding', 'Inverse of 3x3 matrix by Adjoint method', 'Cramer\'s Rule for 3-variable linear systems', 'Rank of a matrix & Gaussian elimination'], mcqCount: 70, sloLevel: 'Application', estimatedMinutes: 34, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 4, title: 'Quadratic Equations', urduTitle: 'دو درجی مساوات', keyConcepts: ['Solution of quadratic equations by factoring, completing square, quadratic formula', 'Cube roots of unity (1, ω, ω²) and 4th roots of unity', 'Remainder Theorem and Factor Theorem (Synthetic division)', 'Nature of roots & Discriminant b² - 4ac', 'Systems of two equations involving quadratics'], mcqCount: 68, sloLevel: 'Application', estimatedMinutes: 32, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 5, title: 'Partial Fractions', urduTitle: 'جزوی کسریں', keyConcepts: ['Proper vs Improper rational fractions', 'Linear non-repeated and repeated factors in denominator', 'Irreducible quadratic non-repeated and repeated factors'], mcqCount: 48, sloLevel: 'Application', estimatedMinutes: 24, boardWeightageNote: '1 MCQ + 1 Long Question' },
          { number: 6, title: 'Sequences and Series', urduTitle: 'سلسلے اور تواتر', keyConcepts: ['Arithmetic Progression (A.P.): nth term an = a + (n-1)d and sum Sn = n/2[2a + (n-1)d]', 'Geometric Progression (G.P.): nth term an = ar^(n-1) and sum Sn = a(1 - r^n)/(1 - r)', 'Infinite Geometric Series S∞ = a / (1 - r) for |r| < 1', 'Harmonic Progression (H.P.) & relations between A.M., G.M., and H.M. (A × H = G²)', 'Arithmetic-Geometric Series'], mcqCount: 72, sloLevel: 'Application', estimatedMinutes: 35, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 7, title: 'Permutations, Combinations & Probability', urduTitle: 'ترتیب، ملاپ اور احتمال', keyConcepts: ['Factorial notation and Fundamental principle of counting', 'Permutations nPr = n! / (n - r)! (Circular permutations (n-1)!)', 'Combinations nCr = n! / [r!(n - r)!] and Pascal\'s rule', 'Probability of an event P(E) = n(E) / n(S)', 'Addition and Multiplication theorems of probability'], mcqCount: 65, sloLevel: 'Application', estimatedMinutes: 32, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 8, title: 'Mathematical Induction & Binomial Theorem', urduTitle: 'ریاضیاتی استقراء اور دو رقمی مسئلہ', keyConcepts: ['Principle of Mathematical Induction verification for n = 1, n = k, n = k+1', 'Binomial Theorem for positive integral index: (a + b)^n expansion', 'General term Tr+1 = nCr · a^(n-r) · b^r and middle term calculation', 'Binomial Series for negative or fractional index'], mcqCount: 60, sloLevel: 'Application', estimatedMinutes: 30, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 9, title: 'Fundamentals of Trigonometry', urduTitle: 'مثلثیات کے بنیادی اصول', keyConcepts: ['Sexagesimal system vs Circular system: θ = l / r', 'Trigonometric ratios in Cartesian quadrants (CAST rule)', 'Fundamental trigonometric identities: sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ', 'Trigonometric functions of general angles'], mcqCount: 62, sloLevel: 'Understanding', estimatedMinutes: 28, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 10, title: 'Trigonometric Identities & Sum/Difference', urduTitle: 'مثلثیاتی مساوات', keyConcepts: ['Fundamental law: cos(α - β) = cosα cosβ + sinα sinβ', 'Deductions for sin(α ± β), cos(α ± β), tan(α ± β)', 'Double-angle identities: sin2θ = 2sinθ cosθ, cos2θ = cos²θ - sin²θ', 'Half-angle and Triple-angle formulas', 'Conversion of sums/differences to products and vice versa'], mcqCount: 70, sloLevel: 'Application', estimatedMinutes: 34, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 11, title: 'Trigonometric Functions & Graphs', urduTitle: 'مثلثیاتی تفاعل اور گراف', keyConcepts: ['Periods of trigonometric functions: sin, cos, sec, csc have period 2π; tan, cot have period π', 'Graphs of y = sinx, y = cosx, y = tanx on [-π, π]'], mcqCount: 46, sloLevel: 'Knowledge', estimatedMinutes: 22, boardWeightageNote: '1 MCQ + 2 Short Questions' },
          { number: 12, title: 'Applications of Trigonometry & Solutions of Triangles', urduTitle: 'مثلثوں کا حل', keyConcepts: ['Law of Sines: a/sinA = b/sinB = c/sinC = 2R', 'Law of Cosines: a² = b² + c² - 2bc cosA', 'Law of Tangents', 'Half-angle formulas in terms of sides (Hero\'s formula Δ = √[s(s-a)(s-b)(s-c)])', 'Circum-circle (R = abc/4Δ), In-circle (r = Δ/s), and Escribed circles (r1 = Δ/(s-a))'], mcqCount: 68, sloLevel: 'Application', estimatedMinutes: 32, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 13, title: 'Inverse Trigonometric Functions', urduTitle: 'معکوس مثلثیاتی تفاعل', keyConcepts: ['Principal values & domains of arcsin, arccos, arctan', 'Addition formulas: arctan(A) + arctan(B) = arctan[(A+B)/(1-AB)]'], mcqCount: 52, sloLevel: 'Understanding', estimatedMinutes: 25, boardWeightageNote: '1 MCQ + 2 Short Questions' },
          { number: 14, title: 'Solutions of Trigonometric Equations', urduTitle: 'مثلثیاتی مساوات کا حل', keyConcepts: ['General solutions of sinθ = k, cosθ = k, tanθ = k', 'Finding solution sets within intervals [0, 2π)'], mcqCount: 56, sloLevel: 'Application', estimatedMinutes: 26, boardWeightageNote: '1 MCQ + 1 Long Question' },
        ]
      },
      {
        year: '2nd Year',
        part: 'Part-II (12th)',
        chapters: [
          { number: 1, title: 'Functions and Limits', urduTitle: 'تفاعل اور حدود', keyConcepts: ['Types of functions (Even vs Odd, Explicit vs Implicit, Parametric)', 'Limits of algebraic and trigonometric functions: lim(x→0) sinx/x = 1', 'Limit as x → ∞: lim(1 + 1/n)^n = e ≈ 2.718', 'Continuity of functions at a point and in intervals'], mcqCount: 72, sloLevel: 'Application', estimatedMinutes: 34, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 2, title: 'Differentiation (Calculus I)', urduTitle: 'تفرقی عمل (ڈیفرینشیشن)', keyConcepts: ['Derivative by first principle (ab initio / delta method)', 'Power rule, Product rule, Quotient rule, and Chain rule', 'Derivatives of trigonometric, inverse trig, exponential (d/dx e^x = e^x), and logarithmic functions', 'Implicit differentiation & Parametric differentiation', 'Higher order derivatives & Leibniz theorem', 'Maclaurin and Taylor series expansions', 'Maxima and Minima of functions & second derivative test'], mcqCount: 85, sloLevel: 'Application', estimatedMinutes: 40, boardWeightageNote: '4 MCQs + 2 Long Questions' },
          { number: 3, title: 'Integration (Calculus II)', urduTitle: 'تکمیل (انٹیگریشن)', keyConcepts: ['Indefinite integrals & standard integration formulas', 'Integration by substitution method', 'Integration by parts: ∫u v dx = u∫v dx - ∫(u\' ∫v dx) dx', 'Integration using partial fractions', 'Definite integrals and Fundamental Theorem of Calculus', 'Area bounded between curves and coordinate axes', 'Differential equations of 1st order and separation of variables'], mcqCount: 88, sloLevel: 'Application', estimatedMinutes: 42, boardWeightageNote: '4 MCQs + 2 Long Questions' },
          { number: 4, title: 'Introduction to Analytic Geometry', urduTitle: 'تجزیاتی ہندسہ', keyConcepts: ['Distance formula, Ratio formula (internal & external division)', 'Slope / Gradient of a straight line m = tanθ = (y2 - y1) / (x2 - x1)', 'Forms of equation of a straight line: Slope-intercept, Two-point, Normal form', 'Angle between two lines tanθ = (m2 - m1) / (1 + m1m2)', 'Perpendicular distance from point to line d = |ax1 + by1 + c| / √(a² + b²)', 'Homogeneous equation of second degree & angle between pair of lines'], mcqCount: 75, sloLevel: 'Application', estimatedMinutes: 36, boardWeightageNote: '3 MCQs + 1 Long Question' },
          { number: 5, title: 'Linear Inequalities and Linear Programming', urduTitle: 'لکیری غیر مساوات', keyConcepts: ['Graphing linear inequalities in two variables (Half-planes)', 'Feasible region and corner points (Vertices)', 'Objective function maximization / minimization in real-world constraints'], mcqCount: 50, sloLevel: 'Application', estimatedMinutes: 25, boardWeightageNote: '1 MCQ + 1 Long Question' },
          { number: 6, title: 'Conic Sections', urduTitle: 'مخروطی تراشے', keyConcepts: ['Circle: Standard equation (x - h)² + (y - k)² = r² and general form x² + y² + 2gx + 2fy + c = 0', 'Tangents and Normals to a circle', 'Parabola: Standard equations y² = 4ax (Focus (a, 0), Directrix x = -a, Latus rectum 4a)', 'Ellipse: Equation x²/a² + y²/b² = 1 (Eccentricity e = c/a < 1, Foci (±c, 0))', 'Hyperbola: Equation x²/a² - y²/b² = 1 (Eccentricity e = c/a > 1, Asymptotes y = ±(b/a)x)'], mcqCount: 80, sloLevel: 'Application', estimatedMinutes: 38, boardWeightageNote: '3 MCQs + 1 Long Question' },
          { number: 7, title: 'Vectors in 3D', urduTitle: 'تین جہتی ویکٹرز', keyConcepts: ['Vectors in plane and space (Unit vectors i, j, k)', 'Direction cosines and direction angles: cos²α + cos²β + cos²γ = 1', 'Scalar (Dot) product: u·v = |u||v| cosθ and projection of vectors', 'Vector (Cross) product: u × v and Area of triangle / parallelogram', 'Scalar Triple Product u·(v × w) and Volume of parallelepiped'], mcqCount: 70, sloLevel: 'Application', estimatedMinutes: 32, boardWeightageNote: '2 MCQs + 1 Long Question' },
        ]
      }
    ],
    highYieldTips: [
      { topic: 'Integration by Parts Order (ILATE)', summary: 'Choose u in order: Inverse Trig, Logarithmic, Algebraic, Trigonometric, Exponential. E.g. for ∫x·ln(x)dx: u = ln(x), dv = x dx.' },
      { topic: 'Conic Eccentricity Rule', summary: 'Circle: e = 0 | Parabola: e = 1 | Ellipse: 0 < e < 1 | Hyperbola: e > 1. In ellipse, b² = a²(1 - e²); in hyperbola, b² = a²(e² - 1).' },
      { topic: 'Derivative Quotient Rule', summary: 'd/dx [u/v] = (v·u\' - u·v\') / v². Never swap the order of the numerator terms because subtraction is not commutative.' },
      { topic: 'Perpendicular Lines Condition', summary: 'Two straight lines are perpendicular if and only if m1 × m2 = -1 (or a1a2 + b1b2 = 0). They are parallel if m1 = m2.' }
    ]
  },
  {
    id: 'inter-computer',
    name: 'Computer Science',
    urduName: 'کمپیوٹر سائنس',
    stream: 'ics',
    icon: Binary,
    color: 'from-violet-600 to-purple-800',
    badge: 'ICS Stream',
    description: 'Information networks, architecture, C programming, control structures, pointers, file handling, database management systems, and SQL for HSSC-I & II.',
    boardWeightage: 'Section A: 15 MCQs (15 marks) | Section B: 36 marks | Section C: 24 marks | Practical: 25 marks',
    paperFormat: {
      mcqSection: '15 MCQs (20 mins) - Syntax traces, definitions and network concepts',
      shortQuestions: 'Section B: Attempt 12 short coding/concept questions out of 18 (36 marks)',
      longQuestions: 'Section C: Attempt 2 complete C programs / database questions out of 3 (24 marks)',
      totalMarks: 75
    },
    classes: [
      {
        year: '1st Year',
        part: 'Part-I (11th)',
        chapters: [
          { number: 1, title: 'Basics of Information Technology', urduTitle: 'معلوماتی ٹیکنالوجی کے بنیادی اصول', keyConcepts: ['Hardware vs Software vs Firmware', 'Input devices (Keyboards, Pointing devices, Scanners, Barcode readers)', 'Output devices (Monitors: CRT, LCD, OLED; Printers: Impact vs Non-Impact)', 'Computer Memory: RAM (SRAM vs DRAM), ROM (PROM, EPROM, EEPROM), Cache memory'], mcqCount: 55, sloLevel: 'Knowledge', estimatedMinutes: 25, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 2, title: 'Information Networks', urduTitle: 'معلوماتی نیٹ ورکس', keyConcepts: ['Workgroup computing & Groupware', 'Network architectures: Client-Server vs Peer-to-Peer', 'Network types: LAN, MAN, WAN, PAN', 'Topologies: Star, Bus, Ring, Mesh, Tree (Merits and Demerits)', 'OSI 7-layer Reference Model (Physical to Application)'], mcqCount: 65, sloLevel: 'Understanding', estimatedMinutes: 30, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 3, title: 'Data Communications', urduTitle: 'ڈیٹا کمیونیکیشن', keyConcepts: ['Data transmission modes: Simplex, Half-Duplex, Full-Duplex', 'Transmission media: Guided (Twisted pair, Coaxial, Fiber optic) vs Unguided (Microwave, Radio, Satellite)', 'Data transmission types: Asynchronous vs Synchronous', 'Signals: Analog vs Digital, Modulation and Demodulation (Modem)'], mcqCount: 60, sloLevel: 'Understanding', estimatedMinutes: 28, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 4, title: 'Applications and Uses of Computers', urduTitle: 'کمپیوٹر کے استعمالات', keyConcepts: ['Business applications: E-Commerce, Video conferencing, CAD / CAM', 'Computers in medicine: Patient monitoring, Telemedicine, Robotic surgery', 'Computers in education: CBT, CAI, Online learning portals'], mcqCount: 45, sloLevel: 'Knowledge', estimatedMinutes: 20, boardWeightageNote: '1 MCQ + 2 Short Questions' },
          { number: 5, title: 'Computer Architecture', urduTitle: 'کمپیوٹر کی ساخت', keyConcepts: ['Von Neumann architecture & CPU components (ALU, CU, Registers)', 'CPU Registers: Program Counter (PC), Memory Address Register (MAR), Instruction Register (IR), Accumulator', 'System Bus: Data bus, Address bus, Control bus widths', 'Instruction Fetch-Decode-Execute cycle', 'Interrupts and Direct Memory Access (DMA)'], mcqCount: 68, sloLevel: 'Understanding', estimatedMinutes: 32, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 6, title: 'Security, Copyright and the Law', urduTitle: 'کمپیوٹر سیکیورٹی اور قوانین', keyConcepts: ['Computer threats: Viruses, Worms, Trojan Horses, Logic Bombs, Spyware', 'Security mechanisms: Passwords, Biometrics, Data Encryption, Firewalls', 'Software piracy, Copyright Act, Privacy and ethical considerations'], mcqCount: 48, sloLevel: 'Knowledge', estimatedMinutes: 22, boardWeightageNote: '1 MCQ + 2 Short Questions' },
          { number: 7, title: 'Windows Operating System', urduTitle: 'آپریٹنگ سسٹم', keyConcepts: ['Functions of OS: Process management, Memory management, Device drivers, File system', 'Types of OS: Multi-user, Multi-tasking, Multi-processing, Real-time', 'Windows GUI features: Control panel, Registry, Virtual memory'], mcqCount: 46, sloLevel: 'Knowledge', estimatedMinutes: 20, boardWeightageNote: '1 MCQ + 2 Short Questions' },
          { number: 8, title: 'Word Processing & Spreadsheets (MS Office)', urduTitle: 'ورڈ پروسیسنگ اور سپریڈ شیٹ', keyConcepts: ['MS Word text formatting, Tables, Mail merge', 'MS Excel worksheets, Formulas, Built-in functions (SUM, AVERAGE, IF, VLOOKUP)', 'Relative vs Absolute cell referencing ($A$1)'], mcqCount: 50, sloLevel: 'Application', estimatedMinutes: 24, boardWeightageNote: '1 MCQ + Practical' },
        ]
      },
      {
        year: '2nd Year',
        part: 'Part-II (12th)',
        chapters: [
          { number: 1, title: 'Databases: Data Basics & Record Organization', urduTitle: 'ڈیٹا بیس کے بنیادی اصول', keyConcepts: ['Data vs Information, File processing system limitations (Data redundancy, Inconsistency, Atomicity)', 'Database approach benefits & Database Administrator (DBA) role', 'Data Independence: Physical vs Logical independence'], mcqCount: 55, sloLevel: 'Understanding', estimatedMinutes: 26, boardWeightageNote: '1 MCQ + 2 Short Questions' },
          { number: 2, title: 'Basic Concepts and Terminology of Databases', urduTitle: 'ڈیٹا بیس اصطلاحات', keyConcepts: ['Entities, Attributes, and Relationships (1:1, 1:M, M:N)', 'Relational model: Relations (Tables), Tuples (Rows), Cardinality, Degree', 'Keys in RDBMS: Primary Key, Candidate Key, Foreign Key, Composite Key'], mcqCount: 60, sloLevel: 'Understanding', estimatedMinutes: 28, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 3, title: 'Database Design Process & Normalization', urduTitle: 'ڈیٹا بیس ڈیزائن اور نارملائزیشن', keyConcepts: ['Entity Relationship Diagram (ERD) notations', 'Database anomalies: Insertion, Deletion, Update anomalies', 'Normalization steps: 1NF (Atomic values), 2NF (No partial dependency), 3NF (No transitive dependency)'], mcqCount: 65, sloLevel: 'Application', estimatedMinutes: 32, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 4, title: 'Introduction to MS Access & SQL', urduTitle: 'ایم ایس ایکسس اور ایس کیو ایل', keyConcepts: ['Database objects in MS Access: Tables, Queries, Forms, Reports', 'SQL DDL vs DML commands', 'SELECT, FROM, WHERE, GROUP BY, ORDER BY queries', 'INSERT INTO, UPDATE, DELETE statements and Joins'], mcqCount: 62, sloLevel: 'Application', estimatedMinutes: 30, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 5, title: 'Getting Started with C Language', urduTitle: 'سی لینگویج کا تعارف', keyConcepts: ['History of C & Compiler vs Linker vs Loader', 'Structure of a C program: Preprocessor directives (#include), main(), statements', 'Source code, Object code (.obj), Executable file (.exe)', 'Syntax errors, Run-time errors, and Logical errors'], mcqCount: 58, sloLevel: 'Understanding', estimatedMinutes: 28, boardWeightageNote: '1 MCQ + 2 Short Questions' },
          { number: 6, title: 'Elements of C: Variables & Constants', urduTitle: 'سی کے بنیادی اجزاء', keyConcepts: ['Keywords / Reserved words in C (32 keywords)', 'Variables: Declaration, Initialization, Variable naming rules', 'Data types: int, float, double, char and memory storage', 'Arithmetic, Relational, Logical, and Assignment operators', 'Unary increment/decrement operators (pre-increment ++x vs post-increment x++)'], mcqCount: 64, sloLevel: 'Application', estimatedMinutes: 30, boardWeightageNote: '2 MCQs + 1 Long Question' },
          { number: 7, title: 'Input and Output in C', urduTitle: 'ان پٹ اور آؤٹ پٹ', keyConcepts: ['printf() formatted output and format specifiers (%d, %f, %c, %s)', 'Escape sequences (\\n, \\t, \\\\, \\")', 'scanf() formatted input with address-of operator (&)', 'getch(), getche(), and puts() character functions'], mcqCount: 60, sloLevel: 'Application', estimatedMinutes: 28, boardWeightageNote: '2 MCQs + 1 Long Program' },
          { number: 8, title: 'Decision / Conditional Constructs in C', urduTitle: 'کنڈیشنل سٹرکچرز', keyConcepts: ['if statement, if-else statement, Nested if-else', 'switch statement with case, break, and default keywords', 'Conditional operator ( ?: ) as alternative to if-else'], mcqCount: 70, sloLevel: 'Application', estimatedMinutes: 34, boardWeightageNote: '2 MCQs + 1 Long Program' },
          { number: 9, title: 'Loop / Iterative Constructs in C', urduTitle: 'لوپ سٹرکچرز', keyConcepts: ['for loop syntax, initialization, condition, increment/decrement', 'while loop (entry-controlled) vs do-while loop (exit-controlled)', 'Nested loops & pattern printing', 'break statement and continue statement control transfer'], mcqCount: 72, sloLevel: 'Application', estimatedMinutes: 35, boardWeightageNote: '2 MCQs + 1 Long Program' },
          { number: 10, title: 'Functions in C', urduTitle: 'سی میں فنکشنز', keyConcepts: ['Built-in / Library functions (math.h, string.h, stdio.h)', 'User-defined functions: Prototype declaration, Definition, Call', 'Passing arguments: Pass-by-value vs Pass-by-reference', 'Local variables vs Global variables (Scope and Lifetime)'], mcqCount: 65, sloLevel: 'Application', estimatedMinutes: 32, boardWeightageNote: '2 MCQs + 1 Long Program' },
          { number: 11, title: 'File Handling in C', urduTitle: 'فائل ہینڈلنگ', keyConcepts: ['FILE pointer declaration & fopen() file modes ("r", "w", "a")', 'Reading and writing characters (fgetc, fputc, fgets, fputs)', 'Formatted file I/O with fprintf() and fscanf()', 'fclose() and checking EOF (End of File)'], mcqCount: 52, sloLevel: 'Application', estimatedMinutes: 25, boardWeightageNote: '1 MCQ + 1 Long Question' },
        ]
      }
    ],
    highYieldTips: [
      { topic: 'Pre vs Post Increment in C', summary: 'y = ++x increments x first then assigns to y. y = x++ assigns current value of x to y first then increments x.' },
      { topic: 'Database Normalization Rules', summary: '1NF: Remove repeating groups (atomic attributes). 2NF: In 1NF and no partial dependencies on primary key. 3NF: In 2NF and no transitive dependencies (non-key attribute determined by another non-key).' },
      { topic: 'Switch Statement Break Requirement', summary: 'Without break statement at the end of a case block, execution falls through to subsequent cases regardless of condition match.' },
      { topic: 'OSI 7-Layer Mnemonic', summary: '"All People Seem To Need Data Processing" → Application, Presentation, Session, Transport, Network, Data Link, Physical.' }
    ]
  },
  {
    id: 'inter-accounting',
    name: 'Principles of Accounting',
    urduName: 'اصولِ محاسبہ',
    stream: 'icom',
    icon: Landmark,
    color: 'from-emerald-700 to-teal-900',
    badge: 'I.Com Commerce Stream',
    description: 'Double-entry bookkeeping, ledger, bank reconciliation, trial balance, final accounts, consignment, partnership, joint stock companies, and depreciation for HSSC-I & II.',
    boardWeightage: 'Section A: 20 MCQs (20 marks) | Section B: 80 marks (Practical accounting problems)',
    paperFormat: {
      mcqSection: '20 MCQs (25 mins) - Rules of debit/credit, accounting conventions, and terminology',
      shortQuestions: 'Attempt practical accounting ledger accounts, journals, and balance sheets (80 marks)',
      longQuestions: 'Comprehensive solved problems (Financial statements, Partnership dissolution, Depreciation schedules)',
      totalMarks: 100
    },
    classes: [
      {
        year: '1st Year',
        part: 'Part-I (11th)',
        chapters: [
          { number: 1, title: 'Introduction to Accounting & Accounting Equation', urduTitle: 'محاسبہ کا تعارف اور مساوات', keyConcepts: ['Bookkeeping vs Accounting & Branches (Financial, Cost, Management)', 'Assets = Liabilities + Owner\'s Equity (Capital)', 'Effects of business transactions on accounting equation'], mcqCount: 50, sloLevel: 'Understanding', estimatedMinutes: 25 },
          { number: 2, title: 'Journal - Book of Original Entry', urduTitle: 'روزنامچہ', keyConcepts: ['Rules of Debit and Credit for Real, Personal, and Nominal accounts', 'Compound journal entries & trade discount vs cash discount', 'Standard journal format with narration'], mcqCount: 65, sloLevel: 'Application', estimatedMinutes: 30 },
          { number: 3, title: 'Ledger & Posting', urduTitle: 'کھاتہ اور پوسٹنگ', keyConcepts: ['T-account format and running balance format', 'Balancing ledger accounts: Debit balance vs Credit balance', 'Posting from Journal to General Ledger'], mcqCount: 55, sloLevel: 'Application', estimatedMinutes: 28 },
          { number: 4, title: 'Special Subsidiary Books & Cash Book', urduTitle: 'کیش بک اور ذیلی کتب', keyConcepts: ['Single column, Double column (Cash & Discount), and Triple column (Cash, Bank, Discount) Cash Book', 'Petty Cash Book on Imprest system', 'Sales Book, Purchases Book, Sales Return Book, Purchases Return Book'], mcqCount: 60, sloLevel: 'Application', estimatedMinutes: 30 },
          { number: 5, title: 'Bank Reconciliation Statement (BRS)', urduTitle: 'بینک مفاہمتی گوشوارہ', keyConcepts: ['Causes of difference between Cash Book and Pass Book (Bank Statement)', 'Uncredited cheques, Unpresented cheques, Direct bank credits/debits', 'Preparation of BRS starting with Cash Book or Pass Book balance'], mcqCount: 64, sloLevel: 'Application', estimatedMinutes: 32 },
          { number: 6, title: 'Trial Balance & Rectification of Errors', urduTitle: 'میزان پٹہ اور اغلاط کی درستگی', keyConcepts: ['Trial Balance objective & matching debit/credit totals', 'Errors not affecting trial balance (Omission, Commission, Principle, Compensating)', 'Suspense account entries to rectify errors'], mcqCount: 62, sloLevel: 'Application', estimatedMinutes: 30 },
          { number: 7, title: 'Bills of Exchange & Promissory Notes', urduTitle: 'ہنڈی اور تمسک', keyConcepts: ['Drawer, Drawee, Payee roles & Days of grace (3 days)', 'Honor, Dishonor, Discounting of bill with bank, Endorsement', 'Renewal and Insolvency of drawee journal entries'], mcqCount: 58, sloLevel: 'Application', estimatedMinutes: 28 },
          { number: 8, title: 'Financial Statements (Final Accounts of Sole Trader)', urduTitle: 'آخری حسابات', keyConcepts: ['Trading Account: Cost of Goods Sold = Opening Stock + Net Purchases + Direct Expenses - Closing Stock', 'Gross Profit calculation', 'Profit and Loss Account: Operating expenses, Net Profit', 'Balance Sheet: Marshalling of assets and liabilities (Permanence vs Liquidity order)', 'Adjustments: Closing stock, Outstanding expenses, Prepaid expenses, Accrued income, Bad debts reserve, Depreciation'], mcqCount: 75, sloLevel: 'Application', estimatedMinutes: 38 },
        ]
      },
      {
        year: '2nd Year',
        part: 'Part-II (12th)',
        chapters: [
          { number: 1, title: 'Accounts from Incomplete Records (Single Entry System)', urduTitle: 'نامکمل ریکارڈ سے حسابات', keyConcepts: ['Statement of Affairs method for capital at beginning and end', 'Net Profit = Closing Capital + Drawings - Additional Capital - Opening Capital', 'Conversion method into double entry'], mcqCount: 58, sloLevel: 'Application', estimatedMinutes: 28 },
          { number: 2, title: 'Non-Trading Concerns (Non-Profit Organizations)', urduTitle: 'غیر تجارتی اداروں کے حسابات', keyConcepts: ['Receipts and Payments Account vs Cash Book', 'Income and Expenditure Account vs Profit & Loss Account', 'Capital fund calculation and treatment of Subscriptions, Life membership fees, Donations, Legacies'], mcqCount: 64, sloLevel: 'Application', estimatedMinutes: 32 },
          { number: 3, title: 'Consignment Accounts', urduTitle: 'تجارتی مال کی روانگی', keyConcepts: ['Consignor vs Consignee & Pro-forma invoice', 'Consignment Account, Consignee Account, Goods Sent on Consignment Account', 'Normal loss vs Abnormal loss valuation', 'Del-credere commission and Bad debts treatment'], mcqCount: 68, sloLevel: 'Application', estimatedMinutes: 34 },
          { number: 4, title: 'Partnership Accounts - Fundamentals & Goodwill', urduTitle: 'شراکت داری', keyConcepts: ['Partnership Deed essentials & Profit and Loss Appropriation Account', 'Fixed capital vs Fluctuating capital method', 'Goodwill valuation methods: Average profit, Super profit, Capitalization method'], mcqCount: 62, sloLevel: 'Application', estimatedMinutes: 30 },
          { number: 5, title: 'Partnership - Admission, Retirement & Dissolution', urduTitle: 'شراکت دار کا داخلہ اور علیحدگی', keyConcepts: ['Revaluation of assets and liabilities on admission of new partner', 'New profit sharing ratio & Sacrificing ratio calculation', 'Dissolution of firm: Realization Account, Partners\' Capital, Bank Account settlement'], mcqCount: 70, sloLevel: 'Application', estimatedMinutes: 35 },
          { number: 6, title: 'Joint Stock Companies - Share Capital & Debentures', urduTitle: 'جوائنٹ اسٹاک کمپنیاں', keyConcepts: ['Memorandum of Association & Articles of Association', 'Types of Share Capital: Authorized, Issued, Subscribed, Called-up, Paid-up', 'Issue of shares at Par, at Premium, and at Discount', 'Forfeiture and Reissue of shares', 'Issue of Debentures and redemption'], mcqCount: 72, sloLevel: 'Application', estimatedMinutes: 35 },
          { number: 7, title: 'Depreciation of Fixed Assets', urduTitle: 'فرسودگی', keyConcepts: ['Causes of depreciation (Wear and tear, Obsolescence, Effluxion of time)', 'Straight Line Method (Fixed Installment): Depreciation = (Cost - Scrap) / Life', 'Diminishing Balance Method (Reducing Balance / Written Down Value)', 'Asset Disposal Account preparation'], mcqCount: 65, sloLevel: 'Application', estimatedMinutes: 32 },
        ]
      }
    ],
    highYieldTips: [
      { topic: 'Trading Account Cost of Goods Sold', summary: 'COGS = Opening Stock + Net Purchases + Direct Freight/Wages - Closing Stock. Gross Profit = Net Sales - COGS.' },
      { topic: 'Straight Line vs Reducing Balance', summary: 'Straight line charges constant depreciation on original cost every year. Reducing balance charges constant percentage on declining book value, decreasing each year.' },
      { topic: 'Accounting Equation Foundation', summary: 'Assets = Liabilities + Owner\'s Equity. Every credit transaction affects at least two accounts maintaining this balance.' }
    ]
  },
  {
    id: 'inter-compulsory',
    name: 'Compulsory Subjects (English, Urdu, Pak Studies & Islamiat)',
    urduName: 'لازمی مضامین',
    stream: 'compulsory',
    icon: Compass,
    color: 'from-blue-700 to-cyan-800',
    badge: 'Compulsory (All Inter Groups)',
    description: 'English Book I (Short Stories), Book III (Plays & Poems), Goodbye Mr. Chips novel, essay writing, Urdu prose/poetry, Islamiat (11th), Tarjuma-tul-Quran, and Pak Studies (12th).',
    boardWeightage: 'English: 100 marks | Urdu: 100 marks | Islamic Studies / Pak Studies: 50 marks each',
    paperFormat: {
      mcqSection: 'Objective MCQs: Synonyms, grammatical rules, historical dates, Quranic vocabulary',
      shortQuestions: 'Literature comprehension, poetry paraphrase, short Islamic concepts',
      longQuestions: 'Essay (20 marks in English), Mr. Chips novel questions, Tashreeh of Ghazal/Nazm',
      totalMarks: 100
    },
    classes: [
      {
        year: '1st Year',
        part: 'Part-I (11th)',
        chapters: [
          { number: 1, title: 'English Book I - Short Stories', keyConcepts: ['Button, Button (Richard Matheson)', 'Clearing in the Sky (Jesse Stuart)', 'Dark They Were and Golden-Eyed', 'Thank You, M\'am (Langston Hughes)', 'The Piece of String (Guy de Maupassant)', 'The Reward, The Use of Force, The Gulistan of Sa\'di'], mcqCount: 65, sloLevel: 'Understanding', estimatedMinutes: 30 },
          { number: 2, title: 'English Book III - One-Act Plays & Poems', keyConcepts: ['Play 1: Heat Lightning', 'Play 2: Visit to a Small Planet (Gore Vidal)', 'Play 3: The Oyster and the Pearl (William Saroyan)', 'Poems: The Rain (W.H. Davies), Night Mail (W.H. Auden), Ozymandias (P.B. Shelley), Loveliest of Trees, The Feed'], mcqCount: 60, sloLevel: 'Understanding', estimatedMinutes: 28 },
          { number: 3, title: 'English Grammar, Pair of Words & Translation', keyConcepts: ['Subject-Verb agreement, Prepositions, Conditional sentences', 'Punctuation of textbook paragraphs', 'Pair of Words high-frequency board list (100 pairs)', 'Translation of Urdu passages into English'], mcqCount: 70, sloLevel: 'Application', estimatedMinutes: 32 },
          { number: 4, title: 'Urdu Compulsory (حصہ نثر، نظم و غزل)', urduTitle: 'اردو لازمی حصہ اول', keyConcepts: ['اسوہ حسنہ (سید سلیمان ندوی)، اپنی مدد آپ (سر سید احمد خان)، سرسید کے اخلاق و خصائل', 'نظمیں: حمد، نعت، تسلیم و رضا، میدان کربلا میں صبح کا منظر', 'غزلیات: میر تقی میر، خواجہ حیدر علی آتش، مرزا غالب، علامہ اقبال', 'قواعد: تشبیہ، استعارہ، تلمیح، قافیہ، ردیف، مطلع و مقطع'], mcqCount: 65, sloLevel: 'Understanding', estimatedMinutes: 30 },
          { number: 5, title: 'Islamic Education Compulsory (اسلامیات لازمی)', urduTitle: 'اسلامیات لازمی حصہ اول', keyConcepts: ['ایمانیات: توحید، رسالت (عقیدہ ختم نبوت)، ملائکہ، کتب سماوی، آخرت', 'عبادات: نماز، روزہ، زکوٰۃ، حج کے معاشرتی و روحانی اثرات', 'سیرت النبی ﷺ: رحمت للعالمین، اخوت، مساوات، امانت، سچائی', 'قرآنی آیات و احادیث مبارکہ کا ترجمہ و تشریح'], mcqCount: 55, sloLevel: 'Knowledge', estimatedMinutes: 25 },
        ]
      },
      {
        year: '2nd Year',
        part: 'Part-II (12th)',
        chapters: [
          { number: 1, title: 'English Book II - Modern Prose and Heroes', keyConcepts: ['The Dying Sun (Sir James Jeans)', 'Using the Scientific Method', 'Why Boys Fail in College (Herbert E. Hawkes)', 'End of Term', 'On Destroying Books', 'The Man Who Was a Hospital (Jerome K. Jerome)', 'My Financial Career (Stephen Leacock)', 'Heroes: First Year at Harrow (Winston Churchill), Hitch-Hiking Across the Sahara, Sir Alexander Fleming (Penicillin), Louis Pasteur, Mustafa Kemal Ataturk'], mcqCount: 75, sloLevel: 'Understanding', estimatedMinutes: 35 },
          { number: 2, title: 'Novel: Good-Bye, Mr. Chips (James Hilton)', keyConcepts: ['Chapters 1–18 chronological character journey of Mr. Chipping', 'Brookfield School atmosphere and Headmasters (Wetherby, Meldrum, Ralston, Chatteris)', 'Katherine Bridges romance and transformative influence on Chips', 'The Boer War and World War I impact on Brookfield'], mcqCount: 80, sloLevel: 'Understanding', estimatedMinutes: 38 },
          { number: 3, title: 'English Essay Writing, Idioms & Phrasal Verbs', keyConcepts: ['High-yield board essays (Technical Education, My Aim in Life, Patriotism, Energy Crisis, IT Revolution, Pollution)', 'Correction of sentences (Rules of nouns, pronouns, adjectives, tenses)', '150 Board Idioms and Phrasal Verbs in context'], mcqCount: 65, sloLevel: 'Application', estimatedMinutes: 32 },
          { number: 4, title: 'Pakistan Studies Compulsory (مطالعہ پاکستان لازمی)', urduTitle: 'مطالعہ پاکستان سال دوم', keyConcepts: ['نظریہ پاکستان اور دو قومی نظریہ (قائد اعظم و علامہ اقبال کے ارشادات)', 'تحریک پاکستان: قرارداد لاہور (1940)، کرپس مشن، شملہ کانفرنس، کیبنٹ مشن (1946)، 3 جون پلان', 'پاکستان کے ابتدائی مسائل (مہاجرین کی آبادکاری، اثاثوں کی تقسیم، پانی کا تنازعہ)', '1973 کے آئین کی اہم اسلامی دفعات اور وفاقی ڈھانچہ', 'پاکستان کا جغرافیہ، محل وقوع کی اہمیت، قدرتی وسائل، زراعت و صنعت', 'پاکستان کی خارجہ پالیسی کے مقاصد اور سی پیک (CPEC)'], mcqCount: 60, sloLevel: 'Understanding', estimatedMinutes: 28 },
          { number: 5, title: 'Tarjuma-tul-Quran-ul-Majeed (ترجمۃ القرآن المجید)', urduTitle: 'ترجمۃ القرآن سال دوم', keyConcepts: ['منتخب سورتوں کا تعارف، مرکزی مضمون اور نزولی پس منظر', 'سورۃ الحجرات (معاشرتی آداب)، سورۃ النور، سورۃ الاحزاب', 'بنیادی قرآنی احکامات اور زندگی پر اطلاق'], mcqCount: 50, sloLevel: 'Knowledge', estimatedMinutes: 24 },
        ]
      }
    ],
    highYieldTips: [
      { topic: 'Mr. Chips Exam Character Themes', summary: 'Focus on Katherine Bridges\' modern socialist thinking vs Chips\' Victorian conservatism, and Chips\' defiance against Ralston regarding Latin pronunciation.' },
      { topic: 'Direct vs Indirect Reporting Rules', summary: 'Present reporting verb leaves tense unchanged. Past reporting verb shifts Present Simple → Past Simple, Present Perfect → Past Perfect, Will → Would.' },
      { topic: '1973 Constitution Federal Structure', summary: 'Bicameral legislature consisting of National Assembly and Senate. Prime Minister holds executive authority; President is constitutional head.' }
    ]
  }
];

export const IntermediateBoardHub: React.FC = () => {
  const { setTab, setSelectedCategorySlug, setSelectedExamId } = useApp();

  const [selectedStream, setSelectedStream] = useState<'all' | 'pre-medical' | 'pre-engineering' | 'ics' | 'icom' | 'arts' | 'compulsory'>('all');
  const [selectedYear, setSelectedYear] = useState<'all' | '1st Year' | '2nd Year'>('all');
  const [selectedBoard, setSelectedBoard] = useState<'fbise' | 'punjab' | 'sindh' | 'kpk' | 'balochistan'>('punjab');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubjectId, setActiveSubjectId] = useState<string>('inter-physics');
  const [readingTipIndex, setReadingTipIndex] = useState<number | null>(null);

  const activeSubject = useMemo(() => {
    return INTERMEDIATE_SUBJECTS.find(s => s.id === activeSubjectId) || INTERMEDIATE_SUBJECTS[0];
  }, [activeSubjectId]);

  const filteredSubjects = useMemo(() => {
    return INTERMEDIATE_SUBJECTS.filter(s => {
      const matchStream = selectedStream === 'all' || s.stream === selectedStream || s.stream === 'compulsory';
      const matchSearch = searchQuery.trim() === '' || 
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.urduName && s.urduName.includes(searchQuery)) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.classes.some(c => c.chapters.some(ch => ch.title.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchStream && matchSearch;
    });
  }, [selectedStream, searchQuery]);

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

  const handleStartPractice = (subject: IntermediateSubject, chapterTitle?: string) => {
    let slug = 'physics';
    if (subject.id.includes('chemistry')) slug = 'chemistry';
    else if (subject.id.includes('bio')) slug = 'biology';
    else if (subject.id.includes('math')) slug = 'mathematics';
    else if (subject.id.includes('comp')) slug = 'computer';
    else if (subject.id.includes('account')) slug = 'general-knowledge';
    
    setSelectedCategorySlug(slug);
    setSelectedExamId('intermediate-fsc');
    setTab('mcqs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const boardNames: Record<string, string> = {
    punjab: 'Punjab Boards (BISE Lahore, Rwp, Multan, Fsd, Guj, Sgd, Bwp, Dgk, Swl)',
    fbise: 'Federal Board (FBISE Islamabad - SLO Conceptual Pattern)',
    sindh: 'Sindh Boards (BIEK Karachi, Hyderabad, Sukkur, Larkana, Mirpurkhas)',
    kpk: 'KPK Boards (BISE Peshawar, Abbottabad, Mardan, Swat, Bannu)',
    balochistan: 'Balochistan Board (BISE Quetta)'
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-violet-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 md:p-10 border border-indigo-700/50 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-400/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                HSSC-I & HSSC-II (11th & 12th)
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold">
                1st Year & 2nd Year Complete
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-display text-white">
              Intermediate & Board Examinations Hub
            </h2>
            <p className="text-sm sm:text-base text-violet-200/90 mt-2 leading-relaxed">
              FSc Pre-Medical, FSc Pre-Engineering, ICS Computer Science, I.Com Commerce, and FA Humanities. All subjects, full chapter breakdowns, SLO conceptual questions, and board paper formulas.
            </p>

            {/* Board Selector */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-xs text-violet-300 font-semibold mr-1">Select Board:</span>
              {(['punjab', 'fbise', 'sindh', 'kpk', 'balochistan'] as const).map((bKey) => (
                <button
                  key={bKey}
                  onClick={() => setSelectedBoard(bKey)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedBoard === bKey
                      ? 'bg-violet-600 text-white shadow-md shadow-violet-700/50 border border-violet-400'
                      : 'bg-white/10 hover:bg-white/20 text-violet-200 border border-white/10'
                  }`}
                >
                  {bKey.toUpperCase()}
                </button>
              ))}
            </div>
            <p className="text-xs text-violet-300/80 mt-1.5 italic">
              Active: {boardNames[selectedBoard]}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/15 p-5 rounded-2xl shrink-0 flex flex-col gap-3 min-w-[240px]">
            <div className="flex items-center justify-between text-xs text-violet-200">
              <span>Inter Subjects</span>
              <span className="font-bold text-white">6 Disciplines</span>
            </div>
            <div className="flex items-center justify-between text-xs text-violet-200">
              <span>Chapter Coverage</span>
              <span className="font-bold text-emerald-400">100% Textbook SLOs</span>
            </div>
            <div className="flex items-center justify-between text-xs text-violet-200">
              <span>Practice Questions</span>
              <span className="font-bold text-cyan-300">5,000+ Board MCQs</span>
            </div>

            <button
              onClick={() => {
                setSelectedExamId('intermediate-fsc');
                setTab('quiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xs font-bold shadow-md transition cursor-pointer flex items-center justify-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Full Inter Board Mock Drill</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stream and Year Filter Tabs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Stream Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
          {[
            { id: 'all', label: 'All Streams' },
            { id: 'pre-medical', label: 'Pre-Medical (MBBS Track)' },
            { id: 'pre-engineering', label: 'Pre-Engineering' },
            { id: 'ics', label: 'ICS (Computing)' },
            { id: 'icom', label: 'I.Com (Commerce)' },
            { id: 'compulsory', label: 'Compulsory Only' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedStream(tab.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedStream === tab.id
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Year Filter & Search */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
            {(['all', '1st Year', '2nd Year'] as const).map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  selectedYear === year
                    ? 'bg-white dark:bg-slate-700 text-violet-700 dark:text-violet-300 shadow-xs'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {year === 'all' ? '1st & 2nd Year' : year}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search chapters or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500 w-44 sm:w-56"
            />
          </div>
        </div>
      </div>

      {/* Subject Selector Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {INTERMEDIATE_SUBJECTS.map((subject) => {
          const Icon = subject.icon;
          const isSelected = activeSubject.id === subject.id;
          return (
            <div
              key={subject.id}
              onClick={() => setActiveSubjectId(subject.id)}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-br from-violet-600 to-indigo-700 text-white shadow-lg shadow-violet-600/25 border-violet-500 scale-[1.02]'
                  : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-violet-400'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className={`p-2 rounded-xl ${isSelected ? 'bg-white/20' : 'bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                  {subject.badge}
                </span>
              </div>
              <div className="mt-3">
                <div className="font-bold text-xs sm:text-sm line-clamp-1">{subject.name}</div>
                {subject.urduName && (
                  <div className={`text-[11px] font-medium font-urdu mt-0.5 ${isSelected ? 'text-violet-100' : 'text-slate-500 dark:text-slate-400'}`}>
                    {subject.urduName}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Subject Detail & Topic Breakdown */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8 shadow-sm">
        {/* Subject Header Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 text-white shadow-md shadow-violet-600/20">
              <activeSubject.icon className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
                  {activeSubject.badge}
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {activeSubject.boardWeightage}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display mt-0.5 flex items-center gap-3">
                <span>{activeSubject.name}</span>
                {activeSubject.urduName && (
                  <span className="text-xl font-normal text-slate-400 font-urdu">{activeSubject.urduName}</span>
                )}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-3xl">
                {activeSubject.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleStartPractice(activeSubject)}
              className="px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs shadow-md transition cursor-pointer flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Practice {activeSubject.name} MCQs</span>
            </button>
          </div>
        </div>

        {/* Paper Format Scheme Card */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200/70 dark:border-slate-800">
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Marks</div>
            <div className="text-xl font-black text-slate-900 dark:text-white font-display mt-0.5">
              {activeSubject.paperFormat.totalMarks} Marks
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">Board Theory Paper</div>
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Section A: MCQs</div>
            <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
              {activeSubject.paperFormat.mcqSection}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Section B: Short Qs</div>
            <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
              {activeSubject.paperFormat.shortQuestions}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Section C: Long / Numericals</div>
            <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
              {activeSubject.paperFormat.longQuestions}
            </div>
          </div>
        </div>

        {/* High Yield Tips / Derivation Roadmaps with Read-Aloud */}
        {activeSubject.highYieldTips.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>High-Yield Board Revision & Derivations</span>
              </h4>
              <span className="text-[11px] text-slate-400">Click speaker to listen</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeSubject.highYieldTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 flex items-start justify-between gap-3"
                >
                  <div>
                    <div className="text-xs font-bold text-amber-900 dark:text-amber-300">
                      {tip.topic}
                    </div>
                    <div className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
                      {tip.summary}
                    </div>
                  </div>
                  <button
                    onClick={() => handleSpeak(`${tip.topic}. ${tip.summary}`, idx)}
                    className="p-1.5 rounded-lg bg-white dark:bg-slate-800 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 transition cursor-pointer shrink-0"
                    title="Listen to tip"
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

        {/* Chapters by Class (1st Year vs 2nd Year) */}
        <div className="space-y-8">
          {activeSubject.classes
            .filter(c => selectedYear === 'all' || c.year === selectedYear)
            .map((classGroup, cIdx) => (
              <div key={cIdx} className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg bg-violet-100 dark:bg-violet-950/60 text-violet-800 dark:text-violet-300 font-extrabold text-xs">
                      {classGroup.year}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {classGroup.part} Syllabus Chapters
                    </h4>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {classGroup.chapters.length} Chapters Complete
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {classGroup.chapters.map((ch) => (
                    <div
                      key={ch.number}
                      className="p-4 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 hover:border-violet-500 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-lg bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 font-black text-xs flex items-center justify-center shrink-0">
                              {ch.number}
                            </span>
                            <h5 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                              {ch.title}
                            </h5>
                          </div>
                          {ch.urduTitle && (
                            <span className="text-xs text-slate-400 font-urdu shrink-0">
                              {ch.urduTitle}
                            </span>
                          )}
                        </div>

                        {ch.boardWeightageNote && (
                          <div className="mt-1.5 inline-block text-[11px] font-bold text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/50 px-2 py-0.5 rounded-md border border-violet-200/50 dark:border-violet-800/40">
                            Board Note: {ch.boardWeightageNote}
                          </div>
                        )}

                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {ch.keyConcepts.map((concept, i) => (
                            <span
                              key={i}
                              className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300"
                            >
                              {concept}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {ch.estimatedMinutes}m
                          </span>
                          <span className="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            {ch.mcqCount} MCQs
                          </span>
                        </div>

                        <button
                          onClick={() => handleStartPractice(activeSubject, ch.title)}
                          className="px-2.5 py-1 rounded-lg bg-violet-50 dark:bg-violet-900/30 hover:bg-violet-600 text-violet-700 dark:text-violet-300 hover:text-white font-bold transition cursor-pointer flex items-center gap-1"
                        >
                          <span>Solve Chapter</span>
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
