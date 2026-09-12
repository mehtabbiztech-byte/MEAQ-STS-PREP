export interface CssSubjectDetail {
  code: number;
  name: string;
  marks: number;
  type: 'compulsory' | 'optional';
  group?: string;
  papersCount: number;
  mcqRatio: string;
  durationHours: number;
  language: string;
  description: string;
  syllabusParts: {
    title: string;
    marks?: number | string;
    topics: string[];
  }[];
  suggestedReadings?: {
    title: string;
    author: string;
  }[];
}

export interface CssGroupRule {
  group: string;
  title: string;
  marksToSelect: number;
  rule: string;
  subjectCodes: number[];
}

export const CSS_EXAM_SCHEME = {
  totalMarks: 1200,
  compulsoryMarks: 600,
  optionalMarks: 600,
  passingCriteria: {
    compulsoryPassingPercentage: 40,
    optionalPassingPercentage: 33,
    aggregatePassingPercentage: 50,
    mptThresholdMarks: 66, // 33% of 200 MCQs
  },
  generalNotes: [
    {
      noteNo: 1,
      text: 'The question papers in Urdu or other Pakistani regional languages (Punjabi, Sindhi, Pashto, and Balochi), Persian, and Arabic should be answered in the respective languages. However, questions relating to translation into English or vice versa may be answered as directed.',
    },
    {
      noteNo: 2,
      text: 'There will be two papers of 100 marks each for subjects carrying 200 marks. In other subjects of 100 marks there will be one paper. Each paper will be of 3 hours duration.',
    },
    {
      noteNo: 3,
      text: 'Ratio of MCQs in compulsory papers for CSS will be 20 MCQs in each paper except in English Essay. Similarly there will be 20 MCQs from each optional paper except Pure Mathematics and Applied Mathematics.',
    },
    {
      noteNo: 4,
      text: 'The question paper in Islamic Studies OR Comparative Study of Major Religions (For Non-Muslims) is to be answered in English or Urdu only. All other papers must be answered in English unless otherwise directed.',
    },
    {
      noteNo: 5,
      text: 'Non-Muslim candidates may either opt for Islamic Studies OR Comparative Study of Major Religions as suits them.',
    },
  ],
};

export const CSS_OPTIONAL_GROUPS: CssGroupRule[] = [
  {
    group: 'Group-I',
    title: 'To select one subject of (200 marks) only',
    marksToSelect: 200,
    rule: 'Candidates must choose exactly ONE subject of 200 marks (2 papers of 100 marks each).',
    subjectCodes: [11, 12, 13, 14, 15],
  },
  {
    group: 'Group-II',
    title: 'To select subject(s) of 200 marks only',
    marksToSelect: 200,
    rule: 'Candidates may choose one 200-mark science subject or any two 100-mark math/science subjects totaling 200 marks.',
    subjectCodes: [16, 17, 18, 19, 20, 21],
  },
  {
    group: 'Group-III',
    title: 'To select one subject of 100 marks only',
    marksToSelect: 100,
    rule: 'Candidates must select ONE subject of 100 marks.',
    subjectCodes: [22, 23, 24, 25],
  },
  {
    group: 'Group-IV',
    title: 'To select one subject of 100 marks only',
    marksToSelect: 100,
    rule: 'Candidates must select ONE history subject of 100 marks.',
    subjectCodes: [26, 27, 28, 29, 30],
  },
  {
    group: 'Group-V',
    title: 'To select one subject of 100 marks only',
    marksToSelect: 100,
    rule: 'Candidates must select ONE subject of 100 marks.',
    subjectCodes: [31, 32, 33, 34, 35, 36, 37],
  },
  {
    group: 'Group-VI',
    title: 'To select one subject of 100 marks only',
    marksToSelect: 100,
    rule: 'Candidates must select ONE law/philosophy subject of 100 marks.',
    subjectCodes: [38, 39, 40, 41, 42, 43, 44],
  },
  {
    group: 'Group-VII',
    title: 'To select one subject of 100 marks only',
    marksToSelect: 100,
    rule: 'Candidates must select ONE social science, psychology or regional/foreign language subject of 100 marks.',
    subjectCodes: [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55],
  },
];

export const CSS_ALL_SUBJECTS: CssSubjectDetail[] = [
  // ==========================================
  // COMPULSORY SUBJECTS (600 MARKS)
  // ==========================================
  {
    code: 1,
    name: 'English Essay',
    marks: 100,
    type: 'compulsory',
    papersCount: 1,
    mcqRatio: 'No MCQs (Full subjective paper)',
    durationHours: 3,
    language: 'English',
    description: 'Candidates will be required to write one or more Essay in English. A wide choice of socio-economic, political, philosophical, and literary topics will be given. Candidates are expected to reflect comprehensive and research-based knowledge on a selected topic.',
    syllabusParts: [
      {
        title: 'Essay Evaluation Parameters',
        marks: 100,
        topics: [
          'Articulation, clear expression and technical treatment of English Essay writing style',
          'Outline construction with primary thesis statement',
          'Coherent paragraph transitions, arguments, evidence, and logical progression',
          'Grammatical accuracy, extensive vocabulary, and precise punctuation',
          'Socio-political, economic, governance, global affairs, educational, and contemporary themes',
        ],
      },
    ],
  },
  {
    code: 2,
    name: 'English (Precis and Composition)',
    marks: 100,
    type: 'compulsory',
    papersCount: 1,
    mcqRatio: '20 MCQs (Vocabulary, Synonyms, Antonyms)',
    durationHours: 3,
    language: 'English',
    description: 'Tests candidate abilities to handle Precis Writing, Reading Comprehension, Sentence Structuring, Translation, Grammar and Vocabulary.',
    syllabusParts: [
      {
        title: 'I. Precis Writing',
        marks: '20 Marks (15 Précis + 5 Title)',
        topics: [
          'Carefully selected passage of generic understanding for compression and proposing an appropriate title',
          'Condensation to approximately one-third length in own words preserving core theme',
        ],
      },
      {
        title: 'II. Reading Comprehension',
        marks: '20 Marks',
        topics: [
          'Substantive passage followed by 5 analytical questions carrying 4 marks each',
          'Evaluating inferential logic, contextual deduction, and concise answering',
        ],
      },
      {
        title: 'III. Grammar and Vocabulary',
        marks: '20 Marks',
        topics: [
          'Correct usage of Tenses, Articles, Prepositions, Conjunctions, Punctuation',
          'Phrasal Verbs, Advanced Synonyms and Antonyms',
        ],
      },
      {
        title: 'IV. Sentence Correction',
        marks: '10 Marks',
        topics: [
          'Rewriting sentences with clear structural flaws in grammar or punctuation without unnecessary alterations',
          'Subject-verb agreement, dangling modifiers, parallel structures, misplaced clauses',
        ],
      },
      {
        title: 'V. Grouping of Words',
        marks: '10 Marks',
        topics: [
          'Random list of 20 words of moderate standard to be grouped in pairs having similar or opposite meaning',
        ],
      },
      {
        title: 'VI. Pairs of Words',
        marks: '10 Marks',
        topics: [
          'Ten pairs of seemingly similar words with different meanings generally confused in communication',
          'Explaining difference in meaning and using any five pairs in sentences',
        ],
      },
      {
        title: 'VII. Translation',
        marks: '10 Marks',
        topics: [
          'Ten short Urdu sentences involving structural composition, significant terms and idiomatic expressions translated into English',
        ],
      },
    ],
    suggestedReadings: [
      { title: 'English Grammar in Use', author: 'Raymond Murphy (Cambridge University Press)' },
      { title: 'Practical English Usage', author: 'M. Swan (Oxford University Press)' },
      { title: 'The Little, Brown Handbook', author: 'H. Ramsey Fowler & Jane Aaron' },
      { title: 'A University English Grammar', author: 'R. Quirk & S. Greenbaum' },
      { title: 'Write Better, Speak Better', author: 'Reader’s Digest Association' },
      { title: 'Modern English in Action', author: 'Henry Christ (D.C. Heath & Co.)' },
    ],
  },
  {
    code: 3,
    name: 'General Science & Ability',
    marks: 100,
    type: 'compulsory',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Divided into two main sections: Part-I General Science (60 Marks) covering physical, biological, environmental, and IT sciences; Part-II General Ability (40 Marks) covering quantitative reasoning, logical analysis, and mental abilities.',
    syllabusParts: [
      {
        title: 'Part-I: General Science (60 Marks) - I. Physical Sciences',
        topics: [
          'Constituents & Structure: Universe, Galaxy, Light Year, Solar System, Sun, Earth, Astronomical System of Units',
          'Process of Nature: Solar & Lunar Eclipses, Rotation & Revolution, Weather Variables (Temperature, Pressure, Circulation, Precipitation, Humidity)',
          'Natural Hazards & Disasters: Earthquake, Volcanic Eruption, Tsunami, Floods, Avalanche, Cyclones & Tornadoes, Drought, Wildfire, Disaster Risk Management',
          'Energy Resources: Renewable (Solar, Wind, Biofuel) & Non-Renewable conservation and sustainable use',
          'Atomic Structure, Chemical Bonding, Electromagnetic Radiations',
          'Modern Materials/Chemicals: Ceramics, Plastics, Semiconductors, Antibiotics, Vaccines, Fertilizers, Pesticides',
        ],
      },
      {
        title: 'Part-I: General Science - II. Biological Sciences',
        topics: [
          'The Basis of Life: Cell Structures & Functions (Nucleus, Mitochondria, Ribosomes)',
          'Biomolecules: Proteins, Lipids, Carbohydrates and Enzymes',
          'Plant and Animal Kingdom: Similarities and diversities in nature',
          'Brief Account of Human Physiology',
          'Common Diseases & Epidemics: Polio, Diarrhea, Malaria, Hepatitis, Dengue (Causes & Prevention)',
          'New Model Concept of Producing Biofuel Method',
        ],
      },
      {
        title: 'Part-I: General Science - III. Environmental Science',
        topics: [
          'Environment: Atmosphere (Structure & Composition), Hydrosphere (Water cycle), Biosphere (Biomes), Lithosphere (Plate tectonics)',
          'Atmospheric Pollution: Major air pollutants (COx, PM, NOx, SOx, Ozone, VOCs, Dioxins), Acid Rain, Ozone Depletion, Global Warming, Montreal & Kyoto Protocols',
          'Water Pollution: Types, sources, water pollutants, Drinking water quality and standards',
          'Land Pollution & Solid Waste Management; Remote Sensing & GIS in Environmental Science; Population Planning',
        ],
      },
      {
        title: 'Part-I: General Science - IV. Food Science & V. Information Technology',
        topics: [
          'Food Science: Balanced Diet (Vitamins, Carbs, Protein, Fats, Minerals, Fiber), Food preservation, Bioavailability',
          'Computer Hardware & Software Fundamentals, I/O Processing, Networking & Internet Standards',
          'Information Systems, Social Media, Fundamentals of Artificial Intelligence',
          'Telecommunications: Wireless communication (Mobile, Satellite, GPS, Fiber Optic)',
        ],
      },
      {
        title: 'Part-II: General Ability (40 Marks) - VI. Quantitative Reasoning',
        topics: [
          'Basic Mathematical Skills & Reasoning in Quantitative Settings',
          'Basic Arithmetic, Algebra and Geometry (Average, Ratios, Rates, Percentage, Angles, Triangles, Sets, Equations, Rounding)',
          'Random Sampling Techniques',
        ],
      },
      {
        title: 'Part-II: General Ability - VII. Logical & Analytical Reasoning & VIII. Mental Abilities',
        topics: [
          'Logical Reasoning: Systematic mathematical procedures and deductive conclusions from given statements',
          'Analytical Reasoning/Ability: Visualizing, articulating, and solving complex and uncomplicated problems',
          'Mental Abilities Scales measuring verbal, mechanical, numerical, and social abilities',
        ],
      },
    ],
    suggestedReadings: [
      { title: 'Asimov’s New Guide to Science', author: 'Isaac Asimov' },
      { title: 'Science Restated: Physics and Chemistry for Non-Scientist', author: 'Harold Gomes Cassidy' },
      { title: 'Basics of Environmental Science', author: 'Michael Allaby' },
      { title: 'Introduction to Information Technology', author: 'ITL Education Solutions' },
      { title: 'Logical Reasoning', author: 'Rob P. Nederpelt & Farouz D. Kamareddine' },
      { title: 'Test of Reasoning', author: 'Edgar Thorpe' },
    ],
  },
  {
    code: 4,
    name: 'Current Affairs',
    marks: 100,
    type: 'compulsory',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Tests general knowledge of history, politics, and international affairs deemed necessary to interpret current affairs at national, regional, and global levels.',
    syllabusParts: [
      {
        title: 'I. Pakistan’s Domestic Affairs',
        marks: '20 Marks',
        topics: [
          'Political developments, governance challenges, and electoral system',
          'Economic structure, fiscal policy, debt, IMF programs, and inflation',
          'Social issues: Education, health, demographic trends, and human development',
        ],
      },
      {
        title: 'II. Pakistan’s External Affairs',
        marks: '40 Marks',
        topics: [
          'Relations with Neighbors: India, China (CPEC & strategic ties), Afghanistan, and Russia',
          'Relations with the Muslim World: Iran, Saudi Arabia, Turkey, Indonesia, and GCC',
          'Relations with the United States of America',
          'Relations with Regional & Global Organizations: UN, SAARC, ECO, OIC, WTO, SCO, FATF',
        ],
      },
      {
        title: 'III. Global Issues',
        marks: '40 Marks',
        topics: [
          'International Security, Terrorism and Counter-Terrorism',
          'International Political Economy, Trade Rounds, and Financial Regimes',
          'Human Rights, Refugees, and Humanitarian Crises',
          'Environment: Global Warming, Climate Pledges (Kyoto Protocol, Paris Accord, COP Summits)',
          'Global Energy Politics, Pipelines, and Renewable Transitions',
          'Nuclear Proliferation, Arms Control, IAEA, and South Asian Nuclear Dynamics',
          'Geopolitics of Arabian Sea, Indian Ocean, and Indo-Pacific',
          'Middle East Crises, Palestine Issue, and Kashmir Dispute',
          'Rise of Multipolarity, US-China Strategic Competition, and BRICS',
        ],
      },
    ],
    suggestedReadings: [
      { title: 'Pakistan Foreign Policy 1947–2005: A Concise History', author: 'Abdul Sattar' },
      { title: 'Issues in Pakistan’s Economy', author: 'Akbar S. Zaidi' },
      { title: 'Pakistan: A Hard Country', author: 'Anatol Lieven' },
      { title: 'World Politics: Trend & Transformation', author: 'Charles W. Kegley & Eugene R. Wittkopf' },
      { title: 'Pakistan Beyond the Crisis State', author: 'Maleeha Lodhi' },
      { title: 'Eating Grass: The Making of the Pakistani Bomb', author: 'Feroz Khan' },
    ],
  },
  {
    code: 5,
    name: 'Pakistan Affairs',
    marks: 100,
    type: 'compulsory',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Comprehensive historical, political, constitutional, and economic evolution of Pakistan from 712 AD to contemporary times across 28 official syllabus areas.',
    syllabusParts: [
      {
        title: 'Section A: Historical Foundations (712 to 1947)',
        topics: [
          'I. Ideology of Pakistan: Muslim rule in Sub-continent, downfall and Renaissance efforts; Reform movements of Shaikh Ahmad Sarhindi, Shah Waliullah, Sayyid Ahmad Shaheed, Aligarh, Deoband, Nadwah, Sindh Madrassah, Islamia College Peshawar; Iqbal and Quaid-i-Azam speeches',
          'II. Land and People of Pakistan: Geography, society, natural resources, agriculture, industry, and education',
          'III. Muslim Rule & British Colonization: East India Company, Causes and effects of Mughal downfall, War of Independence 1857',
          'IV. Constitutional & Political Reforms (1858–1947): Indian Councils Acts, Morley-Minto, Montagu-Chelmsford, Government of India Act 1935',
          'V. Muslim Struggle for Independence: All India Muslim League 1906, Partition of Bengal, Simla Deputation, Lucknow Pact, Khilafat Movement, Nehru Report & Quaid’s 14 Points',
          'VI. Pakistan Movement: Allahabad Address 1930, Round Table Conferences, Congress Ministries 1937-39, Lahore Resolution 1940, Cripps Mission, Cabinet Mission 1946, 3rd June Plan',
        ],
      },
      {
        title: 'Section B: Post-1947 Political, Strategic & Institutional Evolution',
        topics: [
          'VII. Early Challenges: Quaid-i-Azam as Governor-General, refugee crisis, state integration, water dispute',
          'VIII. Constitutions of Pakistan: Objective Resolution 1949, 1956, 1962, and 1973 Constitutions; Suspension, Martial Laws, LFO, PCO, RCO, and 18th Constitutional Amendment',
          'IX. Civil-Military Relations & Military Regimes: Ayub Khan, Yahya Khan, Zia-ul-Haq, and Pervez Musharraf eras',
          'X. Separation of East Pakistan (1971): Causes, regional dynamics, and socio-political aftermath',
          'XI. Working of Democracy: 1947-58 parliamentary era, Z.A. Bhutto (1971-77), Democratic Revival (1988-99), Restoration (2008 to present)',
          'XII. Nuclear Program of Pakistan: Safety, security, and international concerns',
          'XIII. Regional Cooperation: SAARC, ECO, SCO, and Pakistan’s diplomatic role',
          'XIV. Non-Traditional Security Threats & Role of Non-State Actors',
        ],
      },
      {
        title: 'Section C: Economy, Foreign Relations & Contemporary Challenges',
        topics: [
          'XV. Hydro Politics & Water Disputes: Indus Waters Treaty, Kalabagh, Diamer-Bhasha, domestic and regional issues',
          'XVI. Pakistan’s Energy Crisis, Causes, and Renewable Transition',
          'XVII. Pakistan’s Relations with Neighbors (India, Afghanistan, Iran, China) and Kashmir Dispute',
          'XVIII. The War in Afghanistan since 1979 and challenges to Pakistan in Post-2014 & Post-Doha era',
          'XIX. Economic Conditions: Most recent Economic Survey, fiscal deficits, revenue generation, and sector performance',
          'XX. Recent Constitutional & Legal Debates: Judicial activism, landmark Supreme Court cases, civilian supremacy',
          'XXI. Prevailing Social Problems: Poverty, education crisis, health, sanitation, population explosion',
        ],
      },
    ],
    suggestedReadings: [
      { title: 'The Struggle for Pakistan', author: 'I.H. Qureshi' },
      { title: 'Pakistan: The Formative Phase', author: 'Khalid Bin Sayeed' },
      { title: 'Constitutional and Political History of Pakistan', author: 'Hamid Khan' },
      { title: 'The Charismatic Leader: Jinnah and Creation of Pakistan', author: 'Sikandar Hayat' },
      { title: 'The Military and Politics in Pakistan 1947–86', author: 'Hasan Askari Rizvi' },
      { title: 'Jinnah of Pakistan', author: 'Stanley Wolpert' },
    ],
  },
  {
    code: 6,
    name: 'Islamic Studies (OR Comparative Religions)',
    marks: 100,
    type: 'compulsory',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English or Urdu',
    description: 'Comprehensive study of Islamic beliefs, Sirah of the Holy Prophet (PBUH), Islamic civilization, governance, human rights, and contemporary challenges. Non-Muslim candidates may opt for Comparative Study of Major Religions.',
    syllabusParts: [
      {
        title: 'I. Introduction to Islam & Beliefs',
        topics: [
          'Concept of Islam; Importance of Din in Human Life; Difference between Din and Religion',
          'Distinctive aspects of Islam; Islamic Beliefs & Impact on Individual and Society',
          'Islamic Worships: Spiritual, moral, and social impact of Salah, Zakah, Sawm, and Hajj',
        ],
      },
      {
        title: 'II. Study of Sirah of the Prophet Muhammad (PBUH) as Role Model',
        topics: [
          'Role model as Individual, Diplomat, Educator, Military Strategist, and Peace Maker',
          'Treaty of Hudaibiyah, Charter of Medina (Misaq-e-Madina), and Farewell Sermon (Khutba Hajjat-ul-Wida)',
        ],
      },
      {
        title: 'III. Human Rights, Dignity & Status of Women in Islam',
        topics: [
          'Human rights in Islam and status of women; Dignity of men and women; Equality and social justice',
        ],
      },
      {
        title: 'IV. Islamic Civilization, Culture & Modern Challenges',
        topics: [
          'Vital elements and characteristics of Islamic Civilization (Tawhid, Rule of Law, Tolerance, Self-purification)',
          'Impact of Islamic Civilization on the West and vice versa; Rise of Islamophobia and extremism',
        ],
      },
      {
        title: 'V. Public Administration & Governance in Islam',
        topics: [
          'Quranic guidance on good governance, Shura, legislation, and sources of Islamic Law (Quran, Sunnah, Ijma, Ijtihad)',
          'Governance under Pious Caliphate (Khulafa-e-Rashideen); Letters of Hazrat Umar (RA) and Hazrat Ali (RA) to governors',
          'Responsibilities of Civil Servants and the institution of Hisbah (Accountability)',
        ],
      },
      {
        title: 'Alternative Option: Comparative Study of Major Religions (For Non-Muslims)',
        topics: [
          'Introduction: Emergence of religious study, theological vs academic study of world religions',
          'Hinduism: Vedic Dharma, Scriptures (Vedas, Upanishads, Gita), Karma, Moksha, Caste system',
          'Buddhism: Gautama Buddha life, Tripitaka, Four Noble Truths, Eightfold Path, Hinayana & Mahayana',
          'Judaism: Jewish history, Tanakh, Talmud, Ten Commandments, Jewish festivals and worship',
          'Christianity: Jesus Christ, Paul, New Testament, Original Sin, Trinity, Christian Denominations',
          'Islam: Beliefs, pillars, and universal ethics evaluated in comparative perspective',
        ],
      },
    ],
    suggestedReadings: [
      { title: 'Introduction to Islam', author: 'Dr. Muhammad Hamidullah' },
      { title: 'Islam: Its Meaning and Message', author: 'Khurshid Ahmad' },
      { title: 'Islam at the Crossroads', author: 'Muhammad Asad' },
      { title: 'Reconstruction of Religious Thought in Islam', author: 'Allama Muhammad Iqbal' },
      { title: 'Approaches to the Study of Religion', author: 'Peter Connolly' },
      { title: 'Dunya Kay Baray Mazahib', author: 'Imadul Hasan Azad Faruqi' },
    ],
  },

  // ==========================================
  // OPTIONAL GROUP I (200 MARKS)
  // ==========================================
  {
    code: 11,
    name: 'Accountancy & Auditing',
    marks: 200,
    type: 'optional',
    group: 'Group-I',
    papersCount: 2,
    mcqRatio: '20 MCQs per paper (40 total)',
    durationHours: 6,
    language: 'English',
    description: 'Paper-I (100 Marks): Financial Accounting (50) & Cost/Managerial Accounting (50). Paper-II (100 Marks): Auditing (40), Business Taxation (30), Business Studies & Finance (30).',
    syllabusParts: [
      {
        title: 'Paper-I (A) Financial Accounting (50 Marks)',
        topics: [
          'Accounting principles, Accrual/Matching concepts, Going concern, Substance over form',
          'Accounting Cycle, Adjusting entries, Financial Statements according to IASB (IFRS/IAS) and Companies Ordinance 1984',
          'Accounting for Non-profit entities and Public Sector under IPSAS',
          'Depreciation methods for Tangible Assets (Straight-line, Reducing balance, Units of production)',
          'Financial Ratio analysis (Liquidity, Activity, Debt, Profitability, and Market ratios)',
        ],
      },
      {
        title: 'Paper-I (B) Cost and Managerial Accounting (50 Marks)',
        topics: [
          'Cost elements, classifications, Material inventory valuation and payroll systems',
          'Factory Overhead (FOH) allocation, apportionment, and secondary distribution',
          'Job-order and Process Costing (Cost of Production Report - CPR)',
          'Budgeting (Cash, Flexible, Zero-based budgets), Break-even & CVP Analysis, Variance Analysis',
        ],
      },
      {
        title: 'Paper-II (A) Auditing (40 Marks)',
        topics: [
          'Audit principles, True and fair view, Assertions, Audit evidence, CAAT, Tests of control',
          'Internal control vs Internal audit, Audit planning, Materiality and Risk assessment',
          'Auditor rights, duties, liabilities, and audit report under Companies Ordinance 1984 & IFAC',
        ],
      },
      {
        title: 'Paper-II (B) Business Taxation (30 Marks) & (C) Finance (30 Marks)',
        topics: [
          'Taxation: Income Tax Ordinance 2001 (Heads of Income, Deductions, Withholding taxes) & Sales Tax Act 1990',
          'Business Studies & Finance: Modes of business financing, Time Value of Money, Cost of Capital, Capital Budgeting (NPV, IRR)',
        ],
      },
    ],
  },
  {
    code: 12,
    name: 'Economics',
    marks: 200,
    type: 'optional',
    group: 'Group-I',
    papersCount: 2,
    mcqRatio: '20 MCQs per paper (40 total)',
    durationHours: 6,
    language: 'English',
    description: 'Paper-I (100 Marks): Microeconomics, Macroeconomics, Money & Banking, Public Finance, International Trade. Paper-II (100 Marks): Economics of Pakistan, Planning, Agriculture, Industry, Balance of Payments.',
    syllabusParts: [
      {
        title: 'Paper-I: Pure Economic Theory (100 Marks)',
        topics: [
          'Microeconomics: Consumer behavior, Elasticity, Producer equilibrium, Factor pricing, General equilibrium',
          'Macroeconomics: National Income, Multiplier, Accelerator, Aggregate Demand, Inflation, IS-LM Framework',
          'Money & Banking: Quantity Theory of Money, Central Bank policy tools, Interest rate term structures',
          'Public Financing: Government revenue, Progressive taxation, Deficit financing, Public debt',
          'International Trade: Comparative advantage, Heckscher-Ohlin, Balance of Payments, Foreign exchange regimes',
        ],
      },
      {
        title: 'Paper-II: Economics of Pakistan (100 Marks)',
        topics: [
          'Development concepts: Absolute vs relative poverty, Basic needs, Sustainable development goals',
          'Planning experience of Pakistan: Critical evaluation of 5-year plans and institutional governance',
          'Agricultural development: Land reforms, Green Revolution, irrigation issues, and price mechanisms',
          'Industrialization: Import substitution vs export-led growth, Nationalization and Denationalization',
          'Trade & Aid: Remittances, Foreign direct investment, External debt burden, IMF bailouts',
          'Energy policy, Interest-free Islamic banking, and Fiscal deficit challenges',
        ],
      },
    ],
  },
  {
    code: 13,
    name: 'Computer Science',
    marks: 200,
    type: 'optional',
    group: 'Group-I',
    papersCount: 2,
    mcqRatio: '20 MCQs per paper (40 total)',
    durationHours: 6,
    language: 'English',
    description: 'Paper-I (100 Marks): Introduction to Computing, Programming Fundamentals, OOP, Algorithms & Data Structures, Software Engineering, Compiler Construction. Paper-II (100 Marks): Computer Architecture, Networks, Operating Systems, Databases, Digital Image Processing, Web Technologies.',
    syllabusParts: [
      {
        title: 'Paper-I: Software, Algorithms & Engineering (100 Marks)',
        topics: [
          'Programming Fundamentals (C++/Java/Python): Data types, control structures, pointers, dynamic memory',
          'OOP Paradigm: Encapsulation, inheritance, polymorphism, templates, STL, exception handling',
          'Data Structures & Algorithms: Stacks, Queues, Trees (AVL, B-Trees), Graphs, Sorting, Hashing, Asymptotic Analysis',
          'Software Engineering: Agile, SDLC, architectural patterns, software testing and verification',
          'Compiler Construction: Lexical analysis, context-free grammars, LL/LR parsers, code generation & optimization',
        ],
      },
      {
        title: 'Paper-II: Hardware, Networks, OS & Databases (100 Marks)',
        topics: [
          'Computer Organization: CISC vs RISC, cache hierarchies, bus architecture, pipelining, multi-core',
          'Computer Networks: OSI & TCP/IP stack, routing protocols, subnetting, congestion control, network security',
          'Operating Systems: Process synchronization, semaphores, deadlocks, virtual memory, paging, file systems',
          'Database Systems: Relational algebra, SQL, ER modeling, normalization (1NF-BCNF), transactions (ACID), indexing',
          'Digital Image Processing: Filtering, histograms, edge detection, morphological transforms',
          'Web Technologies: Client-side architectures, REST APIs, web security, PHP/Node backend development',
        ],
      },
    ],
  },
  {
    code: 14,
    name: 'Political Science',
    marks: 200,
    type: 'optional',
    group: 'Group-I',
    papersCount: 2,
    mcqRatio: '20 MCQs per paper (40 total)',
    durationHours: 6,
    language: 'English',
    description: 'Paper-I (100 Marks): Western & Muslim Political Thought, State System, Political Concepts, Comparative Politics, Ideologies. Paper-II (100 Marks): Comparative Political Systems (USA, UK, France, Germany, China, Turkey, Iran, India) & Politics of Pakistan.',
    syllabusParts: [
      {
        title: 'Paper-I: Political Theory and Thought (100 Marks)',
        topics: [
          'Western Political Thought: Plato, Aristotle, Machiavelli, Hobbes, Locke, Rousseau, Mill, Marx, Gramsci, John Rawls',
          'Muslim Political Thought: Al-Farabi, Al-Mawardi, Ibn Khaldun, Nizam-ul-Mulk Tusi, Shah Waliullah, Allama Iqbal',
          'The State System: Emergence of nation-state, sovereignty, Islamic concept of state and Ummah',
          'Political Concepts: Justice, liberty, equality, human rights, political authority, and democracy vs dictatorship',
          'Political Ideologies: Capitalism, Socialism, Marxism, Fascism, Nationalism, and Islamic Political Ideology',
        ],
      },
      {
        title: 'Paper-II: Comparative Politics & Pakistan Governance (100 Marks)',
        topics: [
          'Major Western Political Systems: Constitutions of USA (Presidential), UK (Parliamentary), France, and Germany',
          'Developing & Regional Systems: Political structures of China, Turkey, Iran, Malaysia, and India',
          'Political Movements in India: Muslim nationalism and constitutional milestones (1909, 1919, 1935, 1940)',
          'Government & Politics in Pakistan: Comparative analysis of 1956, 1962, and 1973 Constitutions; 18th Amendment; Judiciary; Military; Electoral dynamics; Center-Province relations',
          'Foreign Policy of Pakistan: National interest determinants, diplomacy, and regional geostrategy',
        ],
      },
    ],
  },
  {
    code: 15,
    name: 'International Relations',
    marks: 200,
    type: 'optional',
    group: 'Group-I',
    papersCount: 2,
    mcqRatio: '20 MCQs per paper (40 total)',
    durationHours: 6,
    language: 'English',
    description: 'Paper-I (100 Marks): Theories & Approaches (Realism, Liberalism, Constructivism), Security, Power, Foreign Policy, IPE. Paper-II (100 Marks): International History, Cold War, Post-Cold War, Regional Organizations, Nuclear Order, South Asia & Contemporary Flashpoints.',
    syllabusParts: [
      {
        title: 'Paper-I: Theoretical Foundations & Security (100 Marks)',
        topics: [
          'Scope of IR, Nation-State system, and evolution of International Society',
          'Theories: Classical Realism, Neo-Realism, Liberalism, Neo-Liberalism, Constructivism, Critical Theory, Feminism',
          'International Political Security: Balance of Power, Elements of National Power, Deterrence Theory',
          'Strategic Culture of Pakistan and India; Asymmetric & Hybrid Warfare',
          'International Political Economy (IPE): Mercantilism, Economic Liberalism, Dependency Theory, Globalization',
          'International Institutions: UN system, IMF, World Bank, International Court of Justice (ICJ)',
        ],
      },
      {
        title: 'Paper-II: International History & Contemporary Flashpoints (100 Marks)',
        topics: [
          'Inter-War Period & World War II: League of Nations, Fascism, Rise of Superpowers',
          'Cold War (1945–1991): Bipolarity, Cuban Missile Crisis, Détente, Warsaw Pact, Collapse of USSR',
          'Post-Cold War Order: Unipolarity, Rise of China, Multipolarity, Clash of Civilizations thesis',
          'Regional Organizations: EU, ASEAN, SCO, SAARC, OIC, BRICS, ECO',
          'Weapons of Mass Destruction: Non-proliferation treaty (NPT), CTBT, IAEA, Indo-Pak Nuclear doctrines',
          'South Asian Geopolitics: Pak-India wars, Kashmir conflict, Indus Waters Treaty, Afghan transition',
          'Contemporary Crises: Middle East conflict, Palestine, Ukraine War, Taiwan Strait, Indo-Pacific rivalries',
        ],
      },
    ],
  },

  // ==========================================
  // OPTIONAL GROUP II (200 MARKS - Science/Math)
  // ==========================================
  {
    code: 16,
    name: 'Physics',
    marks: 200,
    type: 'optional',
    group: 'Group-II',
    papersCount: 2,
    mcqRatio: '20 MCQs per paper',
    durationHours: 6,
    language: 'English',
    description: 'Paper-I: Mechanics, Fluid Mechanics, Waves/Optics, Heat & Thermodynamics. Paper-II: Electricity/Magnetism, Quantum Physics, Solid State, Nuclear Physics.',
    syllabusParts: [
      {
        title: 'Paper-I (100 Marks)',
        topics: [
          'Mechanics: Vector calculus, Newtonian dynamics, Special relativity, Lorentz transformations',
          'Fluid Mechanics: Surface tension, viscosity, Bernoulli theorem',
          'Waves & Optics: Simple harmonic motion, Doppler effect, Interference, Diffraction gratings, Lasers',
          'Thermodynamics: Laws of thermodynamics, Maxwell-Boltzmann, Bose-Einstein, and Fermi-Dirac statistics',
        ],
      },
      {
        title: 'Paper-II (100 Marks)',
        topics: [
          'Electricity & Magnetism: Gauss law, Maxwell equations, Poynting vector, RLC circuits',
          'Quantum Physics: Schrödinger equation, Particle in a box, Zeeman effect, Photoelectric effect',
          'Solid State Physics: Crystal lattices, Band theory, Semiconductors, Transistors and MOSFETs',
          'Nuclear Physics: Radioactive decay, Nuclear fission/fusion reactors, Particle accelerators',
        ],
      },
    ],
  },
  {
    code: 17,
    name: 'Chemistry',
    marks: 200,
    type: 'optional',
    group: 'Group-II',
    papersCount: 2,
    mcqRatio: '20 MCQs per paper',
    durationHours: 6,
    language: 'English',
    description: 'Paper-I: Physical & Inorganic Chemistry. Paper-II: Organic & Bio-Chemistry.',
    syllabusParts: [
      {
        title: 'Paper-I: Physical & Inorganic Chemistry (100 Marks)',
        topics: [
          'Atomic structure, Quantum chemistry, Schrödinger wave equation',
          'Electrochemistry, Nernst equation, Electrochemical cells, Fuel cells',
          'Chemical thermodynamics, Gibbs free energy, Chemical kinetics and catalysis',
          'Inorganic bonding, VSEPR model, Molecular orbital theory, d and f-block coordination complexes',
        ],
      },
      {
        title: 'Paper-II: Organic Chemistry & Biochemistry (100 Marks)',
        topics: [
          'Organic reaction mechanisms: Electrophilic and nucleophilic substitution (SN1/SN2, E1/E2)',
          'Functional groups: Carbonyls, Carboxylic acids, Grignard reagents, Aromaticity',
          'Stereochemistry: Chirality, R/S configurations, Optical activity',
          'Spectroscopy: UV-Vis, IR, 1H-NMR, and Mass spectrometry principles',
          'Biomolecules: Proteins, Carbohydrates, Lipids, Nucleic acids, and Enzymes',
        ],
      },
    ],
  },
  {
    code: 18,
    name: 'Applied Mathematics',
    marks: 100,
    type: 'optional',
    group: 'Group-II',
    papersCount: 1,
    mcqRatio: 'No MCQs (Fully Subjective)',
    durationHours: 3,
    language: 'English',
    description: 'Vector Calculus (10%), Statics (10%), Dynamics (10%), Ordinary Differential Equations (20%), Fourier Series & PDEs (20%), Numerical Methods (30%).',
    syllabusParts: [
      {
        title: 'Complete Applied Mathematics Syllabus',
        topics: [
          'Vector Calculus: Gradient, Divergence, Curl, Line/Surface/Volume integrals, Gauss/Stokes Theorems',
          'Statics: Forces, couples, equilibrium of coplanar forces, center of mass',
          'Dynamics: Motion in a straight line, simple harmonic motion, central forces, Kepler laws',
          'Ordinary Differential Equations: First order equations, Bernoulli, Cauchy-Euler, Bessel & Legendre functions',
          'Fourier Series & PDEs: Heat, wave, and Laplace equations in Cartesian coordinates',
          'Numerical Methods: Newton-Raphson, Jacobi, Gauss-Seidel, Simpson rule, Runge-Kutta methods',
        ],
      },
    ],
  },
  {
    code: 19,
    name: 'Pure Mathematics',
    marks: 100,
    type: 'optional',
    group: 'Group-II',
    papersCount: 1,
    mcqRatio: 'No MCQs (Fully Subjective)',
    durationHours: 3,
    language: 'English',
    description: 'Modern Algebra (40 Marks), Calculus & Analytic Geometry (40 Marks), Complex Variables (20 Marks).',
    syllabusParts: [
      {
        title: 'Section-A: Modern Algebra (40 Marks)',
        topics: [
          'Groups, subgroups, Lagrange theorem, Normal subgroups, Quotient groups, Group homomorphisms',
          'Rings, Subrings, Integral domains, Fields, Vector spaces, Linear transformations, Matrices, Echelon form',
        ],
      },
      {
        title: 'Section-B: Calculus & Analytic Geometry (40 Marks)',
        topics: [
          'Real numbers, Limits, Differentiability, Mean value theorems, Curve tracing',
          'Partial derivatives, Maxima/Minima, Multiple integrals, Conic sections in 2D & 3D space',
        ],
      },
      {
        title: 'Section-C: Complex Variables (20 Marks)',
        topics: [
          'Analytic functions, Cauchy theorem, Cauchy integral formula, Taylor & Laurent series, Residue calculus',
        ],
      },
    ],
  },
  {
    code: 20,
    name: 'Statistics',
    marks: 100,
    type: 'optional',
    group: 'Group-II',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Part-I (50 Marks): Descriptive Statistics, Probability, Distributions, Regression & Non-Parametric tests. Part-II (50 Marks): Sampling, Statistical Inference, Design of Experiments, Vital Statistics.',
    syllabusParts: [
      {
        title: 'Part-I: Probability & Mathematical Statistics (50 Marks)',
        topics: [
          'Descriptive statistics, Skewness, Kurtosis, Bayes rule, Random variables',
          'Distributions: Binomial, Poisson, Hypergeometric, Normal distribution and its properties',
          'Regression & Correlation: Simple and multiple linear regression, Least squares',
          'Non-parametric tests: Sign test, Wilcoxon test, Mann-Whitney test, Chi-square',
        ],
      },
      {
        title: 'Part-II: Applied Statistics & Inference (50 Marks)',
        topics: [
          'Sampling: Simple random, Stratified, Cluster sampling, Central Limit Theorem',
          'Inference: Estimation, Confidence intervals, Hypothesis testing for means and proportions',
          'Design of Experiments: ANOVA, Completely Randomized Design (CRD), RCBD, LSD tests',
          'Vital Statistics: Fertility rates, Mortality measures, Official statistics systems in Pakistan',
        ],
      },
    ],
  },
  {
    code: 21,
    name: 'Geology',
    marks: 100,
    type: 'optional',
    group: 'Group-II',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Part-I (50 Marks): Physical Geology, Stratigraphy, Mineralogy, Structural Geology, Petrology. Part-II (50 Marks): Geophysics, Petroleum Geology, Environmental Geology, Economic Minerals of Pakistan.',
    syllabusParts: [
      {
        title: 'Part-I: Physical & Structural Geology (50 Marks)',
        topics: [
          'Physical geology: Earth origin, interior structure, Geological Time Scale, Weathering',
          'Stratigraphy & Paleontology: Laws of superposition, Fossils classification, Biostratigraphy',
          'Mineralogy & Crystallography: Silicate minerals, Optical properties, Symmetry systems',
          'Plate Tectonics & Structural Geology: Folds, faults, continental drift, Tectonic framework of Pakistan',
          'Petrology: Sedimentary, Igneous, and Metamorphic rock systems',
        ],
      },
      {
        title: 'Part-II: Economic, Petroleum & Applied Geology (50 Marks)',
        topics: [
          'Geophysics: Seismic exploration, Seismology, Gravity and magnetic exploration',
          'Petroleum Geology: Hydrocarbon formation, Reservoirs, Basins of Pakistan',
          'Engineering Geology: Soil mechanics, dam/tunnel site investigations, Landslides',
          'Mineral Wealth of Pakistan: Reko Diq copper, Thar Coal, Gemstones, Chromite, Gypsum',
        ],
      },
    ],
  },

  // ==========================================
  // OPTIONAL GROUP III (100 MARKS - Management/Admin)
  // ==========================================
  {
    code: 22,
    name: 'Business Administration',
    marks: 100,
    type: 'optional',
    group: 'Group-III',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Covers Management (Four Functions, Strategy, Design), HR Management, Financial Management (TVM, Capital Budgeting), Operations & Supply Chain, and Marketing.',
    syllabusParts: [
      {
        title: 'I. Management & II. Human Resource Management',
        topics: [
          'Management functions (Planning, Organizing, Leading, Controlling), Mintzberg roles',
          'Strategic Management: Environmental scanning, SWOT, Porter 5 forces, Strategy execution',
          'HRM: Job analysis, Talent recruitment, Performance appraisal, Strategic compensation',
        ],
      },
      {
        title: 'III. Financial Management & Capital Budgeting',
        topics: [
          'Time Value of Money (Annuities, Perpetuities, Compounding interest), Financial ratios',
          'Risk & Return: CAPM, Beta, WACC, Security Market Line',
          'Capital Budgeting techniques: NPV, IRR, Payback, Capital rationing',
        ],
      },
      {
        title: 'IV. Operations & Supply Chain & V. Marketing',
        topics: [
          'Operations Management: Process strategies, Capacity cushion, Location analysis, EOQ model',
          'Supply Chain: Bullwhip effect, Vendor-managed inventory, Logistics coordination',
          'Marketing: Segmentation, Targeting, Positioning (STP), 4Ps, Product Life Cycle, Branding',
        ],
      },
    ],
  },
  {
    code: 23,
    name: 'Public Administration',
    marks: 100,
    type: 'optional',
    group: 'Group-III',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Concepts, classical & contemporary theories (Bureaucracy, NPM), Public policy planning, Budgeting (Zero-base, Performance), Civil Service reforms in Pakistan, Accountability & Administrative Law.',
    syllabusParts: [
      {
        title: 'I. Concepts, Theories & Policy Planning',
        topics: [
          'Definitions, Traditional Public Administration vs New Public Management (NPM) vs New Public Service',
          'Classical Theories: Max Weber Bureaucracy, Taylor Scientific Management, Human Relations Approach',
          'Public Policy: Planning machinery in Pakistan, Formulation, Implementation, and Program Evaluation',
        ],
      },
      {
        title: 'II. Budgeting, HRM & Civil Service in Pakistan',
        topics: [
          'Budget systems: Line-item, Performance, Program, and Zero-Base Budgeting in Pakistan',
          'Civil Service of Pakistan: Historical evolution, Structure, Civil Service reforms, Bureaucratic culture',
          'Administrative Law, Ethics, Tribunals, and Judicial review of administrative actions',
          'Accountability: Executive, Legislative, Judicial control, Ombudsman, and Anti-corruption bodies',
        ],
      },
    ],
  },
  {
    code: 24,
    name: 'Governance & Public Policies',
    marks: 100,
    type: 'optional',
    group: 'Group-III',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Basic concepts & indicators of governance (World Bank/UNDP), Public policy institutions in Pakistan (ECNEC, Planning Commission), Bureaucracy, Multi-level governance, and Devolution.',
    syllabusParts: [
      {
        title: 'I. Governance Concepts, Theories & Global Indicators',
        topics: [
          'Good Governance criteria: Rule of Law, Transparency, Accountability, Equity, Efficiency',
          'Governance Theories: Institutionalism, Neoliberalism, Rational Choice, Regulation Theory',
          'World Bank Indicators: Voice and accountability, Government effectiveness, Control of corruption',
        ],
      },
      {
        title: 'II. Public Policy Machinery & Multi-level Governance in Pakistan',
        topics: [
          'Planning Commission, Federal Cabinet, ECNEC, and Provincial line departments',
          'Policy making cycle: Diagnosis, formulation, implementation pitfalls, and donor influence (IMF/WB)',
          'Bureaucracy in Pakistan: Neutrality vs political allegiance, Estacode code of ethics',
          'Decentralization, Devolution, Local Government systems (District, Tehsil, Union Council)',
        ],
      },
    ],
  },
  {
    code: 25,
    name: 'Town Planning & Urban Management',
    marks: 100,
    type: 'optional',
    group: 'Group-III',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Urban planning history (Indus Valley to modern metropolises), Urbanization management, Housing, Land use zoning, Intelligent Transport Systems (ITS), and GIS in urban planning.',
    syllabusParts: [
      {
        title: 'Complete Town Planning Syllabus',
        topics: [
          'Urban Planning History: Indus Valley (Mohenjo-daro, Harappa), European and regional planned towns',
          'Urbanization in Pakistan: Master plans, 5-year plans, Informal settlements and slums',
          'Managing Urban Growth: Building regulations, Land use classification, Removal of encroachments',
          'Intelligent Transport Systems (ITS), Mass transit projects in Pakistan (BRT, Metro)',
          'Urban Information Systems: GIS and remote sensing in municipal resource management',
        ],
      },
    ],
  },

  // ==========================================
  // OPTIONAL GROUP IV (100 MARKS - History)
  // ==========================================
  {
    code: 26,
    name: 'History of Pakistan & India',
    marks: 100,
    type: 'optional',
    group: 'Group-IV',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Muslim rule (712–1857), British Rule & East India Company (1857–1947), Constitutional reforms, Freedom Struggle, Pakistan post-1947 to contemporary political timeline.',
    syllabusParts: [
      {
        title: 'I. Muslim Era & British Raj (712–1947)',
        topics: [
          'Sultanate and Mughal dynasties: Art, architecture, land revenue, and civil administration',
          'Decline of Mughals, East India Company ascendancy, 1857 War of Independence',
          'Sir Syed Ahmad Khan, Aligarh Movement, Muslim League 1906, Lucknow Pact 1916',
          'Constitutional Acts: 1909, 1919, 1935; Lahore Resolution 1940; 1946 Cabinet Mission',
        ],
      },
      {
        title: 'II. History of Pakistan (1947 to Date)',
        topics: [
          'Early political struggles, Constitution-making (1956, 1962, 1973)',
          'Military regimes: Ayub Khan, Yahya Khan, Zia-ul-Haq, Pervez Musharraf',
          'East Pakistan tragedy (1971): Causes, foreign involvement, and aftermath',
          'Democratic governments: Z.A. Bhutto, Benazir Bhutto, Nawaz Sharif, and modern politics',
        ],
      },
    ],
  },
  {
    code: 27,
    name: 'Islamic History & Culture',
    marks: 100,
    type: 'optional',
    group: 'Group-IV',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Part-I (50 Marks): Pre-Islamic Arabia, Prophetic Era (570-632), Pious Caliphate (632-660), Umayyads (660-749). Part-II (50 Marks): Abbasids of Baghdad, Muslim Spain, Crusades, Ottoman Empire, Sufism.',
    syllabusParts: [
      {
        title: 'Part-I: Prophetic Era, Pious Caliphate & Umayyads (50 Marks)',
        topics: [
          'Pre-Islamic Near East and Arabia; Chronology of Prophet Muhammad (PBUH) life and statecraft',
          'Pious Caliphate: Hazrat Abu Bakr, Umar, Uthman, and Ali (R.A) institutional contributions',
          'Political structure of Islamic state: Shura, Caliphate, Judiciary, and Financial Bait-ul-Mal',
          'Umayyad Caliphate (Damascus): Expansion, administration, Arabization, and cultural achievements',
        ],
      },
      {
        title: 'Part-II: Abbasids, Moorish Spain & Ottoman Empire (50 Marks)',
        topics: [
          'Abbasid Caliphate (Baghdad): Golden age of science, translation movement (Bayt al-Hikma), philosophy',
          'Muslim Spain (Andalusia 711–1492): Cordova, Granada, architectural and scientific legacy',
          'The Crusades: Major military encounters and long-term socio-religious impacts',
          'Ottoman Empire: Rise, administrative system (Devshirme, Janissaries), decline, and modern Turkish republic',
          'Sufism: Historical evolution, major orders (Chishti, Suhrawardi, Qadiri, Naqshbandi)',
        ],
      },
    ],
  },
  {
    code: 28,
    name: 'British History',
    marks: 100,
    type: 'optional',
    group: 'Group-IV',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Part-I (1688–1901): Glorious Revolution, Hanoverians, Industrial Revolution, Victorian Era. Part-II (1901–2012): WWI, WWII, Decolonization, Cold War, Thatcherism to Cameron.',
    syllabusParts: [
      {
        title: 'Part-I: 1688 to 1901 (50 Marks)',
        topics: [
          'Glorious Revolution 1688, Bill of Rights, Constitutional Monarchy',
          'Robert Walpole and the emergence of Cabinet government; American War of Independence 1776',
          'Industrial and Agricultural Revolutions: Social transformations, Chartism, Liberalism vs Conservatism',
          'Victorian Era (1837–1901): Parliamentary reforms (1832, 1867), Disraeli, Gladstone, Irish Question',
        ],
      },
      {
        title: 'Part-II: 1901 to Contemporary Era (50 Marks)',
        topics: [
          'WWI and its aftermath, Great Depression, League of Nations, Churchill and WWII diplomacy',
          'Post-WWII Welfare State: Attlee Labour reforms, NHS, Nationalization',
          'Decolonization of the British Empire in Asia and Africa; Cold War and NATO alliance',
          'Thatcherism (1979–1990): Privatization, Falklands War, New Labour under Tony Blair, 2008 Financial Crisis',
        ],
      },
    ],
  },
  {
    code: 29,
    name: 'European History',
    marks: 100,
    type: 'optional',
    group: 'Group-IV',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Part-I (1789–1914): French Revolution, Napoleon, Concert of Europe, Italian & German Unification. Part-II (1914–2012): WWI, Russian Revolution, Fascism/Nazism, WWII, Cold War, European Union.',
    syllabusParts: [
      {
        title: 'Part-I: 1789 to 1914 (50 Marks)',
        topics: [
          'French Revolution 1789: Causes, Declaration of Rights of Man, Reign of Terror',
          'Napoleonic Era: Continental system, Civil Code, Napoleonic Wars, Battle of Waterloo 1815',
          'Concert of Europe & Metternich system; 1848 Revolutions; Eastern Question & Crimean War',
          'Unification of Italy (Cavour, Garibaldi) and Unification of Germany (Bismarck, Blood & Iron policy)',
          'Alliances system leading to the outbreak of World War I',
        ],
      },
      {
        title: 'Part-II: 1914 to 2012 (50 Marks)',
        topics: [
          'WWI, Treaty of Versailles 1919, League of Nations, Russian Bolshevik Revolution 1917 under Lenin',
          'Rise of Totalitarian Dictatorships: Fascism in Italy (Mussolini), Nazism in Germany (Hitler)',
          'World War II: Major military campaigns, Holocaust, post-war settlements (Yalta, Potsdam)',
          'Cold War in Europe: Iron Curtain, Marshall Plan, Berlin Blockade, NATO vs Warsaw Pact',
          'Fall of Berlin Wall 1989, Disintegration of Soviet Union 1991, Expansion of the European Union (EU)',
        ],
      },
    ],
  },
  {
    code: 30,
    name: 'History of USA',
    marks: 100,
    type: 'optional',
    group: 'Group-IV',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'From Colonial Era (1492) to Independence (1776), Constitution, Civil War, Industrialization, WWI, New Deal, Cold War, Civil Rights, War on Terror, and US Constitutional Checks & Balances.',
    syllabusParts: [
      {
        title: 'I. Founding, Expansion & Civil War (1492–1865)',
        topics: [
          'Colonial Era, Declaration of Independence 1776, Articles of Confederation',
          'Salient features of US Constitution: Separation of powers, Checks and balances, Federalism, Bill of Rights',
          'Westward expansion, Monroe Doctrine, Jacksonian democracy',
          'US Civil War (1861–1865): Abraham Lincoln, abolition of slavery, Reconstruction era',
        ],
      },
      {
        title: 'II. Global Superpower, Cold War & Modern Era',
        topics: [
          'Progressive Era: Theodore Roosevelt and Woodrow Wilson reforms',
          'WWI, Great Depression (1929), Franklin D. Roosevelt and the New Deal',
          'WWII, Atomic bomb diplomacy, Truman Doctrine, Marshall Plan, Korean & Vietnam Wars',
          'Cold War rivalry with USSR, Cuban Missile Crisis, Détente, Collapse of Soviet Union (1991)',
          'Civil Rights Movement: Martin Luther King Jr., Malcolm X, desegregation legislation',
          'Post-9/11 War on Terror, US foreign policy in South Asia & Middle East, US Presidential Election system',
        ],
      },
    ],
  },

  // ==========================================
  // OPTIONAL GROUP V (100 MARKS - Sciences & Literature)
  // ==========================================
  {
    code: 31,
    name: 'Gender Studies',
    marks: 100,
    type: 'optional',
    group: 'Group-V',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Social construction of gender, Feminist theories (Liberal, Radical, Marxist, Postmodern), Gender & Development (WID, WAD, GAD), Status of women in Pakistan, and Gender-Based Violence (GBV).',
    syllabusParts: [
      {
        title: 'I. Introduction, Construction & Feminist Theories',
        topics: [
          'Difference between Sex and Gender, Social construction of gender, Masculinities and Femininities',
          'Feminist theories: Liberal, Radical, Marxist/Socialist, Psychoanalytical, Postmodern feminism',
          'Feminist waves: First, Second, and Third wave feminism, UN World Conferences on Women',
        ],
      },
      {
        title: 'II. Development, Pakistani Context & GBV',
        topics: [
          'Gender Approaches to Development: Women in Development (WID), Women and Development (WAD), Gender and Development (GAD)',
          'Status of Women in Pakistan: Education, Health, Employment, Inheritance rights, and Legal safeguards',
          'Gender & Governance: Political quota in Pakistan assemblies, Suffragist movement',
          'Gender-Based Violence (GBV): Theories, Honor killings, Domestic violence laws, Case studies',
        ],
      },
    ],
  },
  {
    code: 32,
    name: 'Environmental Sciences',
    marks: 100,
    type: 'optional',
    group: 'Group-V',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'History of environmental thought (Rio Summit, MDGs/SDGs), Pollution types, Climate Change drivers, Environmental Governance in Pakistan (Pak-EPA, PEPA 1997), Multilateral Environmental Agreements (MEAs), and EIA/GIS.',
    syllabusParts: [
      {
        title: 'I. Environmental Thought, Ecology & Pollution',
        topics: [
          'History: Rio Summit 1992, Agenda 21, Earth Summit 2002, Sustainable Development Goals',
          'Ecosystem dynamics, Carrying capacity, Ecological footprint, Biodiversity loss',
          'Pollution: Air, Water, Soil, Noise, Solid waste management, Eutrophication',
          'Climate Change: Greenhouse effect, Global warming, Carbon footprint, CDM, REDD+',
        ],
      },
      {
        title: 'II. Governance, MEAs & Impact Assessment',
        topics: [
          'Pakistan Environmental Policy: PEPA Act 1997, National Climate Change Policy 2012, Pak-EPA regulations',
          'Global MEAs: UNFCCC, Kyoto Protocol, Montreal Protocol, CBD, CITES, Ramsar Convention',
          'Environmental Impact Assessment (EIA), Strategic Environmental Assessment (SEA), ISO 14000',
        ],
      },
    ],
  },
  {
    code: 33,
    name: 'Agriculture & Forestry',
    marks: 100,
    type: 'optional',
    group: 'Group-V',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Part-I: Agriculture (50 Marks) - Integrated farming, Soil science, Crop genetics, Irrigation. Part-II: Forestry (50 Marks) - Silviculture, Range management, Wildlife, Watershed & Climate change.',
    syllabusParts: [
      {
        title: 'Part-I: Agriculture (50 Marks)',
        topics: [
          'Natural resource bases: Land, Water, Solar, Biological energy in farming systems',
          'Pakistan Agriculture Challenges: Crop management, salinity, waterlogging, seed technology, IPM',
          'Horticulture, Floriculture, GMO crops, Land tenure and agricultural reforms',
        ],
      },
      {
        title: 'Part-II: Forestry (50 Marks)',
        topics: [
          'Silviculture, Forest management, Forest types of Pakistan, Wood-based industries',
          'Rangelands management, Agroforestry, Social forestry, Wildlife ecology',
          'Watershed management, Role of forests in climate adaptation, National forest policy',
        ],
      },
    ],
  },
  {
    code: 34,
    name: 'Botany',
    marks: 100,
    type: 'optional',
    group: 'Group-V',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Plant Kingdom, Algae/Fungi, Bryophytes/Pteridophytes, Plant Anatomy, Taxonomy of Angiosperms, Plant Physiology, Ecology, Cytology, Genetics, and Molecular Biology.',
    syllabusParts: [
      {
        title: 'Complete Botany Syllabus',
        topics: [
          'Phycology, Mycology, Plant pathology of economic crops, Bryophytes evolution',
          'Gymnosperms and Angiosperms anatomy, Secondary growth, Embryology',
          'Taxonomy of Angiosperms: Nomenclature rules, Floral formulas of major families',
          'Plant Physiology: Water relations, Photosynthesis (C3/C4), Respiration (Kreb cycle), Enzymes',
          'Ecology, Cytology, Mendelian genetics, DNA replication, and Genetic engineering',
        ],
      },
    ],
  },
  {
    code: 35,
    name: 'Zoology',
    marks: 100,
    type: 'optional',
    group: 'Group-V',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Invertebrates & Chordates Diversity, Principles of Animal Life, Cell Biology, Genetics, Evolution, and Animal Physiology (Digestion, Respiration, Homeostasis, Endocrinology).',
    syllabusParts: [
      {
        title: 'Complete Zoology Syllabus',
        topics: [
          'Invertebrates: Protozoa to Echinodermata (Structure, reproduction, ecological significance)',
          'Chordates: Fishes, Amphibians, Reptiles, Birds, and Mammals adaptations',
          'Cell Biology & Genetics: Mitosis, Meiosis, Chromosomal mutations, Darwinian evolution',
          'Animal Physiology: Digestion, Blood circulation, Excretion (Kidney mechanisms), Nervous & Endocrine systems',
        ],
      },
    ],
  },
  {
    code: 36,
    name: 'English Literature',
    marks: 100,
    type: 'optional',
    group: 'Group-V',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Essays (Russell, Orwell, Emerson), Short Stories (Maugham, O’Henry), Poetry (Wordsworth, Keats, Tennyson, Yeats, Eliot, Larkin), Drama (Shakespeare, Shaw, Beckett), Novels (Hardy, Lawrence, Orwell, Joyce), Literary Theory (Structuralism, Marxism, Postcolonialism).',
    syllabusParts: [
      {
        title: 'Six Prescribed Components of English Literature',
        topics: [
          'I. Essays (10 Marks): Bertrand Russell, George Orwell, Ralph Waldo Emerson',
          'II. Short Stories (10 Marks): Somerset Maugham, G.K. Chesterton, O’Henry',
          'III. Poetry (20 Marks): Wordsworth, John Keats, Lord Tennyson, W.B. Yeats, T.S. Eliot, Philip Larkin, Wallace Stevens',
          'IV. Drama (20 Marks): Shakespeare (Hamlet, King Lear, Twelfth Night), Shaw (Pygmalion), Harold Pinter, Samuel Beckett (Waiting for Godot), Eugene O’Neill',
          'V. Novels (20 Marks): Thomas Hardy (Far from the Madding Crowd), D.H. Lawrence, George Orwell (1984), James Joyce (Portrait of Artist), William Faulkner',
          'VI. Literary Theory & Criticism (20 Marks): Structuralism, Marxism, Deconstruction, Psychoanalytic, Feminist, and Postcolonial Criticism',
        ],
      },
    ],
  },
  {
    code: 37,
    name: 'Urdu Literature',
    marks: 100,
    type: 'optional',
    group: 'Group-V',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'Urdu',
    description: 'اردو زبان و ادب کا مطالعہ، شعری و نثری ادب کا تنقیدی مطالعہ (میر، غالب، حالی، اقبال، فیض، راشد، مجید امجد)، افسانوی نثر (منٹو، احمد ندیم قاسمی)، تلخیص و مضمون نگاری۔',
    syllabusParts: [
      {
        title: 'اردو ادب کا نصاب (100 نمبرات)',
        topics: [
          'حصہ اول: اردو زبان و ادب کی اسلامی شناخت اور بیسویں صدی کی ادبی تحریکیں (25 نمبر)',
          'حصہ دوم: شعری ادب کا تنقیدی مطالعہ: دور قدیم (میر، غالب، حالی، اقبال) اور دور جدید (فیض، راشد، مجید امجد، ناصر کاظمی) (25 نمبر)',
          'حصہ سوم: نثری ادب کا تنقیدی مطالعہ: غیر افسانوی نثر (شبلی نعمانی، مولوی عبدالحق) اور افسانوی نثر (منٹو، احمد ندیم قاسمی، مشتاق احمد یوسفی) (25 نمبر)',
          'حصہ چہارم: تلخیص (10 نمبر) اور تفصیلی ادبی مضمون (15 نمبر)',
        ],
      },
    ],
  },

  // ==========================================
  // OPTIONAL GROUP VI (100 MARKS - Law & Criminology)
  // ==========================================
  {
    code: 38,
    name: 'Law',
    marks: 100,
    type: 'optional',
    group: 'Group-VI',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Definitions of Crime, Civil Courts Jurisdiction, CPC 1908, Pakistan Penal Code 1860, Qanun-e-Shahadat Order 1984, and Criminal Procedure Code 1898.',
    syllabusParts: [
      {
        title: 'Complete Law Syllabus',
        topics: [
          'Concept of Arbitration with or without court intervention; Civil Courts Ordinance 1962',
          'The Code of Civil Procedure, 1908 (Pleadings, Jurisdiction, Execution of Decrees)',
          'Pakistan Penal Code, 1860 (Offences against state, body, property, Qisas & Diyat)',
          'Qanun-e-Shahadat Order, 1984 (Competency of witnesses, Burden of proof, Estoppel)',
          'Criminal Procedure Code, 1898 (FIR, Arrest, Bail, Trial, Inquest, Appeals)',
        ],
      },
    ],
  },
  {
    code: 39,
    name: 'Constitutional Law',
    marks: 100,
    type: 'optional',
    group: 'Group-VI',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Concepts (Rule of Law, Judicial Review), Comparative Constitutions (UK, USA, France, Russia, China, Pakistan, India, Turkey), Pakistan Constitutional History & 17 Landmark Supreme Court Cases.',
    syllabusParts: [
      {
        title: 'I. Basic Concepts & Comparative Constitutions',
        topics: [
          'Constitutional Conventions, Rule of Law, Due Process, Separation of Powers, Judicial Independence',
          'Fundamental Rights, Civil Liberties, Right to Counsel, Protection against Self-Incrimination',
          'Comparative Constitutions: United Kingdom, United States, France, Russia, China, India, and Turkey',
        ],
      },
      {
        title: 'II. Pakistan Constitutional History & Landmark Case Law',
        topics: [
          'Evolution: Government of India Act 1935, Indian Independence Act 1947, Objectives Resolution 1949',
          'Constitutions of 1956, 1962, and 1973; Abrogation, Martial Laws, LFO, Amendments to 1973 Constitution',
          '17 Landmark Judicial Cases: Maulvi Tamizuddin Khan (1955), State v. Dosso (1958), Usif Patel (1955), Begum Nusrat Bhutto (1977), Benazir Bhutto v. Federation (1988/1992), Asma Jilani v. Punjab (1972), Zafar Ali Shah v. Pervez Musharraf (2000), Sindh High Court Association v. Federation (2009)',
        ],
      },
    ],
  },
  {
    code: 40,
    name: 'International Law',
    marks: 100,
    type: 'optional',
    group: 'Group-VI',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Nature & Sources of International Law, State Recognition, Law of Treaties (Vienna Convention), Settlement of Disputes (ICJ), International Humanitarian Law (Geneva Conventions), Use of Force, Law of the Sea.',
    syllabusParts: [
      {
        title: 'I. Foundations, Sources & State Recognition',
        topics: [
          'Emergence of International Law, Nation-State system, Material sources (Article 38 ICJ Statute)',
          'Relationship between International Law and Municipal Law (Monism vs Dualism)',
          'Statehood, Subjects of International Law, Recognition of States and Governments (De jure vs De facto)',
          'State Territorial Sovereignty, Jurisdiction, Extradition, Diplomatic immunities and privileges',
        ],
      },
      {
        title: 'II. Treaties, War & Humanitarian Law',
        topics: [
          'Vienna Convention on the Law of Treaties (Adoption, Reservation, Ratification, Termination)',
          'Settlement of International Disputes: Negotiation, Mediation, Conciliation, Arbitration, ICJ role',
          'International Humanitarian Law: Geneva Conventions, Protection of POWs and Civilians in armed conflicts',
          'Use of force: UN Charter Article 2(4), Self-defense under Article 51, Collective Security, Law of the Sea (UNCLOS)',
        ],
      },
    ],
  },
  {
    code: 41,
    name: 'Muslim Law & Jurisprudence',
    marks: 100,
    type: 'optional',
    group: 'Group-VI',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Sources of Islamic Law (Quran, Sunnah, Ijma, Qiyas, Ijtihad), Criminal Law (Hadd, Tazir, Qisas, Diyat), Family Law (Nikah, Talaq, Khula, Custody, Inheritance), Banking/Insurance & Statutory Acts in Pakistan.',
    syllabusParts: [
      {
        title: 'Complete Muslim Law & Jurisprudence Syllabus',
        topics: [
          'Primary & Secondary Sources: Quran, Sunnah, Ijma, Qiyas, Ijtihad, Istihsan, Maslahah Mursalah',
          'Islamic Criminal Law: Hadd offenses, Tazir discretion, Qisas and Diyat legislation in PPC',
          'Islamic Family Law: Marriage requisites, Dower (Mehr), Talaq, Khula, Maintenance, Child custody (Hizanat)',
          'Islamic Law of Inheritance: Sharers (Zawil-Furooz), Residuaries (Asabat), Distant kindred',
          'Islamic Banking, Mudarabah, Musharakah, Takaful (Islamic Insurance)',
          'Statutory Enactments: Dissolution of Muslim Marriages Act 1939, Muslim Family Laws Ordinance 1961',
        ],
      },
    ],
  },
  {
    code: 42,
    name: 'Mercantile Law',
    marks: 100,
    type: 'optional',
    group: 'Group-VI',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Contract Act 1872, Sales of Goods Act 1930, Partnership Act 1932, Negotiable Instruments Act 1881, Competition Act 2010, Electronic Transactions 2002, Arbitration Law, Consumer Protection, Companies Ordinance 1984.',
    syllabusParts: [
      {
        title: 'Complete Mercantile Law Syllabus & Statutory Bare Acts',
        topics: [
          'Law of Contract 1872: Essentials of valid contract, Void/Voidable, Quasi-contracts, Breach & Damages',
          'Sale of Goods Act 1930: Conditions and Warranties, Caveat Emptor, Unpaid seller rights',
          'Partnership Act 1932: Rights/Duties of partners, Implied authority, Dissolution of firms',
          'Negotiable Instruments Act 1881: Cheques, Bills of Exchange, Promissory notes, Dishonour',
          'Competition Act 2010, Electronic Transactions Ordinance 2002, Arbitration Act 1940',
          'Companies Ordinance 1984: MoA, AoA, Share capital, Directors, Statutory meetings, Winding up',
        ],
      },
    ],
  },
  {
    code: 43,
    name: 'Criminology',
    marks: 100,
    type: 'optional',
    group: 'Group-VI',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Section-I (25 Marks): Understanding Criminology & Theories. Section-II (25 Marks): Juvenile Delinquency & Justice. Section-III (25 Marks): Criminal Investigation & Police. Section-IV (25 Marks): Modern Concepts (Terrorism, Cybercrime, Money Laundering, NAB/FIA).',
    syllabusParts: [
      {
        title: 'Section-I: Understanding Criminology & Theoretical Perspectives (25 Marks)',
        topics: [
          'Concepts of crime, deviance, sin, social harm, and criminal law scope',
          'Typologies: Professional, White-collar, Corporate, and Organized crimes',
          'Theories: Biological, Psychological, and Sociological (Social Disorganization, Strain, Social Control, Learning, Labeling)',
          'Islamic perspective on deviance and crime',
        ],
      },
      {
        title: 'Section-II: Juvenile Delinquency & Criminal Justice System (25 Marks)',
        topics: [
          'Juvenile Delinquency: Definitions, status offenses, risk factors in youth crime',
          'Juvenile Justice System: Role of police, juvenile courts, probation officer, non-punitive rehabilitation',
          'Criminal Justice System: Formal and informal policing, prosecutors, prisons, parole systems',
        ],
      },
      {
        title: 'Section-III: Criminal Investigation & Techniques (25 Marks)',
        topics: [
          'Principles of investigation, preliminary crime scene manual, forensic analysis, electronic evidence',
          'Interrogation techniques, information gathering, criminal profiling',
          'Legal guidelines for investigators: Arrest procedures, search and seizure rules, stop and frisk',
          'International policing monitoring bodies: INTERPOL, EUROPOL, UNODC',
        ],
      },
      {
        title: 'Section-IV: Modern Concepts in Contemporary Criminology (25 Marks)',
        topics: [
          'Terrorism, radicalization, war on terror, media representation of criminal justice',
          'Modern crime prevention: Intelligence-led policing, community policing, public-private partnership',
          'White-collar crime, Money laundering, Hawala/Hundi networks, and Terror financing',
          'Cybercrime: PECA 2016, digital forensics, hacking, financial cyber-fraud',
          'Role of investigative agencies in Pakistan: National Accountability Bureau (NAB), FIA, ANF',
        ],
      },
    ],
  },
  {
    code: 44,
    name: 'Philosophy',
    marks: 100,
    type: 'optional',
    group: 'Group-VI',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Philosophical Methods (Socratic, Inductive, Deductive), Epistemology (Rationalism, Empiricism, Kant), Ontology (Idealism, Materialism), Ethics (Virtue Ethics, Utilitarianism, Kantian Duty), Muslim Thinkers (Al-Farabi, Ghazali, Iqbal), and Contemporary Movements.',
    syllabusParts: [
      {
        title: 'Complete Philosophy Syllabus',
        topics: [
          'Philosophical Methods: Socratic dialogue, Bacon induction, Descartes deduction, Hegel dialectic, Popper fallibilism',
          'Epistemology: Rationalism (Descartes, Spinoza), Empiricism (Locke, Berkeley, Hume), Kantian synthesis',
          'Ontology: Plato Idealism, Representative realism, Historical and Dialectical Materialism of Karl Marx',
          'Ethics: Virtue Ethics (Aristotle), Moral Absolutism (Kant), Utilitarianism (Bentham, J.S. Mill), Social Contract (Hobbes, Rawls)',
          'Muslim Thinkers: Al-Farabi, Ibn Sina, Al-Ghazali, Ibn Rushd, Ibn Khaldun, Shah Waliullah, Allama Iqbal',
          'Contemporary Movements: Existentialism (Sartre, Heidegger), Pragmatism (Dewey), Postmodernism (Foucault, Derrida)',
        ],
      },
    ],
  },

  // ==========================================
  // OPTIONAL GROUP VII (100 MARKS - Social Sciences & Languages)
  // ==========================================
  {
    code: 45,
    name: 'Journalism & Mass Communication',
    marks: 100,
    type: 'optional',
    group: 'Group-VII',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Mass Communication Models (Lasswell, Shannon-Weaver, Gerbner), Theories (Agenda Setting, Hypodermic, Framing), Media in Pakistan (PEMRA, Press Laws), Public Relations, and Digital Social Media.',
    syllabusParts: [
      {
        title: 'I. Models, Theories & Global Communication',
        topics: [
          'Communication Models: Lasswell, Shannon-Weaver, Osgood & Schramm, Westley-MacLean, Gerbner',
          'Theories: Four normative theories of press, Spiral of silence, Uses & gratifications, Hypodermic needle',
          'Global flow of information, MacBride Commission, Cultural imperialism, Social media in developing world',
        ],
      },
      {
        title: 'II. Pakistani Media, PR & Media Laws',
        topics: [
          'Evolution of press and television in Pakistan: From mission to commercial market, 24/7 news channels',
          'Development Support Communication, Social marketing, Community media',
          'Public Relations: Press releases, crisis management, Ministry of Information, PID',
          'Media Laws & Ethics: Defamation laws, PEMRA regulations, Press Council of Pakistan, Freedom of Information',
        ],
      },
    ],
  },
  {
    code: 46,
    name: 'Psychology',
    marks: 100,
    type: 'optional',
    group: 'Group-VII',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Biological Basis of Behavior, Learning & Memory, Motivation & Emotion, Psychological Testing (IQ/EQ), Personality, Clinical Disorders (DSM), Organizational Psychology, and Forensic Psychology.',
    syllabusParts: [
      {
        title: 'Complete Psychology Syllabus',
        topics: [
          'Biological Basis: Nervous system, neurons, brain structures, endocrine glands',
          'Sensation & Perception: Gestalt principles, depth perception, sensory thresholds',
          'Learning & Memory: Classical & Operant conditioning, memory stages, forgetting theories',
          'Psychological Assessment: Reliability, validity, standardized intelligence and personality tests',
          'Abnormal & Clinical Psychology: Schizophrenia, mood disorders, anxiety, psychotherapy therapies',
          'Organizational & Forensic Psychology: Work motivation, leadership styles, eyewitness testimony, criminal profiling',
        ],
      },
    ],
  },
  {
    code: 47,
    name: 'Geography',
    marks: 100,
    type: 'optional',
    group: 'Group-VII',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Part-I (50 Marks): Physical Geography (Landforms, Climatology, Oceanography). Part-II (50 Marks): Human Geography (Culture diffusion, Economic/Agricultural geography, Urbanization, Geopolitics).',
    syllabusParts: [
      {
        title: 'Part-I: Physical Geography (50 Marks)',
        topics: [
          'Geomorphology: Continental drift, plate tectonics, earthquakes, fluvial/glacial/arid cycles',
          'Climatology: Atmosphere structure, heat budget, planetary winds, air masses, cyclones',
          'Oceanography: Ocean basin relief, salinity distribution, currents and tides',
        ],
      },
      {
        title: 'Part-II: Human & Economic Geography (50 Marks)',
        topics: [
          'Culture diffusion, World distribution of languages and religions, Ethnic diversity',
          'Economic Geography: Agriculture systems, location of industries, renewable energy',
          'Demography: Demographic Transition Model, internal city structures, urban settlement theories',
          'Political Geography: Geopolitics of uneven development, heartland and rimland theories',
        ],
      },
    ],
  },
  {
    code: 48,
    name: 'Sociology',
    marks: 100,
    type: 'optional',
    group: 'Group-VII',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Culture & Socialization, Social Institutions, Social Stratification in Pakistan, Social Problems (Poverty, Unemployment, Crimes against Women), Sociological Theorists (Ibn Khaldun, Marx, Weber, Durkheim), and Research Methods.',
    syllabusParts: [
      {
        title: 'Complete Sociology Syllabus',
        topics: [
          'Individual and Society: Socialization process, culture, norms, values, sub-cultures',
          'Social Institutions: Family, Religion, Education, Economy, and Political institutions',
          'Social Stratification: Caste and class systems, feudal structures in Pakistan, social mobility',
          'Social Problems in Pakistan: Rural-urban migration, child labor, domestic violence, illiteracy, population explosion',
          'Sociological Theorists: Ibn-e-Khaldun (Asabiyyah), Auguste Comte, Emile Durkheim, Karl Marx, Max Weber, Talcott Parsons',
          'Research Methods: Qualitative vs quantitative methods, sampling, surveys, interviews, questionnaire design',
        ],
      },
    ],
  },
  {
    code: 49,
    name: 'Anthropology',
    marks: 100,
    type: 'optional',
    group: 'Group-VII',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'English',
    description: 'Subfields (Socio-cultural, Biological, Archaeology, Linguistic), Kinship & Marriage, Economic/Political Systems, Anthropological Theories (Boas, Malinowski, Radcliffe-Brown, Ibn Khaldun), and Ethnographic Methods.',
    syllabusParts: [
      {
        title: 'Complete Anthropology Syllabus',
        topics: [
          'Subfields: Biological Anthropology, Archaeology, Linguistic Anthropology, Socio-Cultural Anthropology',
          'Institutions of Family, Marriage, Kinship terminologies, and Descent systems',
          'Economic & Political Anthropology: Reciprocity, redistribution, bands, tribes, chiefdoms, state origins',
          'Theories: Evolutionism, Functionalism (Malinowski), Structural-Functionalism (Radcliffe-Brown), Structuralism, Post-Modernism',
          'Ethnographic Research: Participant observation, field sampling, qualitative analysis',
        ],
      },
    ],
  },
  {
    code: 50,
    name: 'Punjabi',
    marks: 100,
    type: 'optional',
    group: 'Group-VII',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'Punjabi',
    description: 'پنجابی زبان و ادب، کلاسیکی شاعری (بابا فرید، شاہ حسین، سلطان باہو، بلھے شاہ، وارث شاہ، میاں محمد بخش)، جدید شاعری (احمد راہی، منیر نیازی)، پنجابی نثر و ڈراما، اور تنقید۔',
    syllabusParts: [
      {
        title: 'پنجابی زبان تے ادب دا تفصیلی نصاب (100 نمبر)',
        topics: [
          'الف: زبان تے زبان دی تاریخ (پنجابی بولی دا پچھوکڑ، لسانیات، ادب دی کہانی) - 15 نمبر',
          'ب: کلاسیکی شاعری: بابا فرید گنج شکر (شلوک)، شاہ حسین (کافیاں)، سلطان باہو (سی حرفی)، بلھے شاہ، وارث شاہ (ہیر)، میاں محمد بخش (سیف الملوک) - 15 نمبر',
          'ج: جدید شاعری: احمد راہی (ترنجن)، باقی صدیقی، منیر نیازی (کل کلام)، ڈاکٹر فقیر محمد فقیر، شریف کنجاہی - 15 نمبر',
          'د: اسلامی ادب: مولا بخش کشتہ، سچی سرکار سیرت - 10 نمبر',
          'ہ: تخلیقی نثر: ڈونگھیاں شاماں (افسانہ)، چن تے اولے، دیوا تے دریا (ناول)، بول مٹی دیا باویا (ڈرامہ) - 15 نمبر',
          'و: تحقیق و تنقید: جھاتی پاون، پرکھ پرچول، ادب سمندر - 15 نمبر',
          'ز: اصنافِ ادب و لوک ادب: شلوک، غزل، کافی، نظم، ناول، ڈراما، ماہیا، ٹپہ، لوری، دوہڑا - 15 نمبر',
        ],
      },
    ],
  },
  {
    code: 51,
    name: 'Sindhi',
    marks: 100,
    type: 'optional',
    group: 'Group-VII',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'Sindhi',
    description: 'سنڌي ٻوليءَ جي قدامت ۽ لھجا، سنڌي لوڪ ادب، سنڌي ادب جا مختلف دور (سومرا، سما، ڪلھوڙا، ٽالپر، انگريز، موجوده دور)، ڪلاسيڪل ۽ جديد شاعر (شاھ عبداللطيف ڀٽائي، سچل سرمست، شيخ اياز، تنوير عباسي)، سنڌي نثر، ناول ۽ افسانا۔',
    syllabusParts: [
      {
        title: 'سنڌي ٻولي ۽ ادب جو مڪمل سرڪاري نصاب (100 نمبر)',
        topics: [
          '1. سنڌي ٻوليءَ جي قدامت: ٻولي بابت عالمن جا نظريا ۽ اھم لھجا (سريلي، وچولي، لاڙي، ٿري، ڪوھستاني)',
          '2. سنڌي لوڪ ادب: لوڪ گيت (سھرو، ھو جمالو، لولي، مورو)، لوڪ ڪھاڻيون، ڏور، ڳُجھارت، پرولي',
          '3. سنڌي ادب جا دور: سومرا دور، سما دور، ارغون، ترخان ۽ مغل دور، ڪلھوڙا دور، ٽالپرن جو دور، انگريز دور، پاڪستان بعد وارو موجوده دور',
          '4. ڪلاسيڪل شاعر: قاضي قادن، شاھ ڪريم، شاھ عبداللطيف ڀٽائي، خواجھ محمد زمان لنواري، سچل سرمست، عبدالرحيم گرھوڙي، سامي',
          '5. سنڌي شاعريءَ جون صنفون: قديم صنفون (سورٺو، دوھو، بيت، وائي، ڪافي) ۽ جديد صنفون (غزل، نظم، آزاد نظم، گيت، ھائيڪو)',
          '6. جديد دور جا شاعر: عبدالڪريم گدائي، حاجي احمد ملاح، حيدر بخش جتوئي، شيخ اياز، تنوير عباسي، امداد حسيني، استاد بخاري، اياز گل، تاجل بيوس',
          '7. سنڌي نثر نگار: مرزا قليچ بيگ، ڪاڪو ڀيرومل، ھوتچند مولچند گربخشاڻي، ڊاڪٽر نبي بخش خان بلوچ، ڊاڪٽر غلام علي الانا، محمد عثمان ڏيپلائي، جي ايم سيد',
          '8. شاھڪار ناول ۽ افسانا: زينت (مرزا قليچ بيگ)، سانگھڙ (ڏيپلائي)، اوڙاھ (غلام نبي مغل)، موئن جو دڙو (علي بابا)، اڇا ڏينھن، پٿر تي ليڪو',
          '9. انگريزي مان سنڌي ۽ سنڌي مان انگريزي ترجمو (20 نمبر)',
        ],
      },
    ],
  },
  {
    code: 52,
    name: 'Pashto',
    marks: 100,
    type: 'optional',
    group: 'Group-VII',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'Pashto',
    description: 'پښتو ژبه او ګرامر، ادبي تاريخ، پښتون کلتور، کلاسيکي شاعري (خوشحال خان خټک، رحمان بابا، عبدالحميد بابا)، نوې شاعري (امير حمزه شينواري، غني خان)، اولسي ادب او ژباړه۔',
    syllabusParts: [
      {
        title: 'پښتو ادبياتو او ژبې بشپړ نصاب (100 نمرې)',
        topics: [
          'I. د پښتو ژبې اصليت، تاريخ، فونيټکس، او الفبا',
          'II. پښتو ګرامر، صرف او نحو',
          'III. د پښتو ادب تاريخ او مشهور ادبي تحريکونه',
          'IV. پښتون کلتور او تاريخي شخصيتونو باندې مضمون',
          'V. کلاسيکي شاعران: خوشحال خان خټک، رحمان بابا، عبدالحميد بابا، علي خان، کاظم خان شيدا',
          'VI. نوې دوره: امير حمزه خان شينواري، غني خان، قلندر مومند، عبدالرحيم مجذوب، يونس خليل',
          'VII. پښتو اولسي ادب: چاربيته، ټپې، نيمکۍ، بدله، او متلونه',
          'VIII. پښتو نه انګريزي او انګريزي نه پښتو ته ژباړه',
        ],
      },
    ],
  },
  {
    code: 53,
    name: 'Balochi',
    marks: 100,
    type: 'optional',
    group: 'Group-VII',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'Balochi',
    description: 'بلوچی زبانہ تاریخ ءُ گرامر، کلاسیكی شائری (شے مرید، حانی، میر چاکر)، نوی شائری (میر گل خان نصیر، ازات جمالدینی)، بلوچی لوك ادب، ردونک، ءُ رجانک کاری۔',
    syllabusParts: [
      {
        title: 'بلوچی زبان ءُ لبزانک ءِ تامریں نصاب (100 نمبر)',
        topics: [
          'الف: بلوچی شاعری: گیدی شاعری (تیر بہار)، کلاسیکی شاعری (شے مرید، حانی، شہداد، بالاچ گورگیج)، نوکیں شاعری (میر گل خان نصیر، ازات جمالدینی، مبارک قاضی)',
          'ب: ردونک: کسہ، رپتار، ناول، ڈراما، سفرنامہ، میر عاقل خان مینگل، صورت خان مری',
          'ج: تاریخ ءُ دْود: بلوچستان ءِ راجدپتر، بلوچ راج ءِ رسم ءُ رواج',
          'د: بلوچی زبان: زبان ءِ بنکی ڈول، رھبند، گرامر، معیاری تبان',
          'ہ: لوک ادب: لولی، صوت، زہیروک، نازینک، ہالو، لیکو، موتک',
          'و: رجانک کاری: انگریزی چہ بلوچی ءُ بلوچی چہ انگریزی رجانک',
        ],
      },
    ],
  },
  {
    code: 54,
    name: 'Persian',
    marks: 100,
    type: 'optional',
    group: 'Group-VII',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'Persian',
    description: 'زبان و ادبیات فارسی، دستور زبان، تاریخ ادبیات فارسی از سامانیان تا مشروطه، نثر کهن (کیمیای سعادت، کشف المحجوب، گلستان سعدی)، شعر کلاسیک (شاهنامه فردوسی، مثنوی مولانا رومی، دیوان حافظ، غزلیات بیدل و اقبال لاهوری)، ادبیات معاصر (نیما یوشیج، پروین اعتصامی)۔',
    syllabusParts: [
      {
        title: 'بخش اول: زبان و ادبیات، تاریخ و دستور (50 نمره)',
        topics: [
          'زبان‌های پیش از اسلام (اوستایی، پهلوی)، تکامل زبان فارسی دری و سبک‌های ادبی (خراسانی، عراقی، هندی، بازگشت ادبی)',
          'تاریخ ادبیات فارسی کلاسیک از سامانیان تا انقلاب مشروطه با تمرکز بر شاعران و نویسندگان برجسته',
          'دستور زبان فارسی: اقسام کلمه (اسم، فعل، صفت، ضمیر، قید، صوت)، اشتقاق، افعال لازم و متعدی',
          'ترجمه متون از انگلیسی به فارسی و نگارش مقاله ادبی',
        ],
      },
      {
        title: 'بخش دوم: متون برگزیده نثر و شعر (50 نمره)',
        topics: [
          'نثر برگزیده: کیمیای سعادت (امام محمد غزالی)، کشف المحجوب (علی بن عثمان هجویری)، سیاست‌نامه (خواجه نظام‌الملک طوسی)، گلستان سعدی (ابواب اول تا هفتم)',
          'شعر کلاسیک: شاهنامه فردوسی (در ستایش خرد و دادگستری)، مثنوی معنوی و دیوان شمس مولانا رومی، غزلیات امیرخسرو دهلوی، دیوان خواجه حافظ شیرازی، دیوان غالب دهلوی',
          'اشعار علامہ محمد اقبال لاهوری: مثنوی اسرار خودی، زبور عجم، ارمغان حجاز',
          'شعر نو و معاصر: نیما یوشیج، احمد شاملو، فروغ فرخ‌زاد، شفیعی کدکنی',
        ],
      },
    ],
  },
  {
    code: 55,
    name: 'Arabic',
    marks: 100,
    type: 'optional',
    group: 'Group-VII',
    papersCount: 1,
    mcqRatio: '20 MCQs',
    durationHours: 3,
    language: 'Arabic',
    description: 'Literature across Pre-Islamic (Jahiliyyah Mu’allaqat), Dawn of Islam, Umayyad, Abbasid, Andalusian, and Contemporary Arabic (Taha Hussein, Naguib Mahfouz), Classical Poetry, and Arabic Grammar (Nahw & Sarf).',
    syllabusParts: [
      {
        title: 'I. History of Arabic Literature through Eras',
        topics: [
          'Pre-Islamic Period (Al-Asr al-Jahili): Souk Ukkaz, Sab’a Mu’allaqat, Imru al-Qais, Zuhair bin Abi Sulma',
          'Dawn of Islam (Sadr al-Islam): Quranic rhetoric and eloquence, Hadith impact on literature, Hassan bin Thabit, Ka’b bin Zuhair',
          'Umayyad Period: Naqa’id poetry (Jarir, Farazdaq, Akhtal), Ghazal Udri and Sarih',
          'Abbasid & Andalusian Eras: Al-Mutanabbi, Abu Tammam, Abu Nuwas; Ibn al-Muqaffa, Al-Jahiz; Ibn Zaydun in Andalusia',
          'Modern Literature: Development of Drama (Tawfiq al-Hakim), Novel (Taha Hussein, Naguib Mahfouz), Poetry (Ahmad Shawqi, Hafiz Ibrahim)',
        ],
      },
      {
        title: 'II. Prescribed Poetry & Arabic Grammar (Nahw & Sarf)',
        topics: [
          'Prescribed verses from Imru al-Qais, Zuhair, Hassan bin Thabit, Ka’b bin Zuhair, Hafiz Ibrahim, Ahmad Shawqi, Imam al-Busiri (Qasidat al-Burdah)',
          'Nahw (Syntax): Jumla Ismiyyah & Fi’liyyah, Marfoo’at, Mansoobat, Majroorat, I’rab, Mabni',
          'Sarf (Morphology): Thulathi Mujarrad & Mazeed Feekh Abwaab, Ism Fa’il, Ism Maf’ool, Ta’leel rules',
          'Translation of unseen texts and literary composition in standard Arabic',
        ],
      },
    ],
  },
];
