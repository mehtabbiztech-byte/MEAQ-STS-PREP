import React, { useState } from 'react';
import {
  Sparkles,
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
  MessageSquare,
  Quote,
  ShieldAlert,
  BookOpen,
} from 'lucide-react';

export type NarrationCategory = 'assertive' | 'interrogative' | 'imperative' | 'exclamatory' | 'optative' | 'exceptions';

export interface NarrationRuleItem {
  id: string;
  order: number;
  category: NarrationCategory;
  categoryLabel: string;
  title: string;
  urduSindhi: string;
  reportingVerbRule: string;
  connectorRule: string;
  directExample: string;
  indirectExample: string;
  tenseShiftFormula: string;
  explanation: string;
  stsTrap: string;
  pedagogyTip: string;
}

export interface MorphPreset {
  id: string;
  label: string;
  sentenceType: string;
  directText: string;
  speaker: string;
  listener?: string;
  reportingVerb: string;
  conjunction: string;
  pronounShiftDesc: string;
  tenseShiftDesc: string;
  adverbShiftDesc?: string;
  indirectResult: string;
  notes: string;
}

export interface AdverbShiftItem {
  directWord: string;
  indirectWord: string;
  category: 'time' | 'place' | 'demonstrative' | 'manner';
  exampleDirect: string;
  exampleIndirect: string;
  trapAlert: string;
}

export interface NarrationQuizItem {
  id: string;
  question: string;
  directQuote: string;
  sentenceType: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  ruleCitation: string;
}

export const NARRATION_RULES: NarrationRuleItem[] = [
  {
    id: 'nar-rule-1',
    order: 1,
    category: 'assertive',
    categoryLabel: 'Assertive (بيانيه جملو)',
    title: 'Standard Statement: "Said to" ➔ "Told"',
    urduSindhi: 'بيانيه جملا (ڳالهه يا بيان بيان ڪرڻ)',
    reportingVerbRule: '"said" remains "said"; "said to + Object" converts to "told + Object" (Never use "told to").',
    connectorRule: 'Connector is strictly "that".',
    directExample: 'He said to me, "I have bought a new grammar book today."',
    indirectExample: 'He told me that he had bought a new grammar book that day.',
    tenseShiftFormula: 'Present Perfect (have bought) ➔ Past Perfect (had bought); Today ➔ That day.',
    explanation: 'In affirmative and negative assertions, "that" joins the reporting and reported clauses. The pronoun "I" (1st person) shifts to "he" based on the subject.',
    stsTrap: 'Common STS Error: Writing "He told to me that..." or forgetting to backshift "have bought" to "had bought". Remember: "told" is transitive and never takes the preposition "to".',
    pedagogyTip: 'Tell students: "Say takes TO (said to me), but Tell eats TO (told me)."',
  },
  {
    id: 'nar-rule-2',
    order: 2,
    category: 'assertive',
    categoryLabel: 'Assertive (بيانيه جملو)',
    title: 'Past Indefinite ➔ Past Perfect Jump',
    urduSindhi: 'ماضي مطلق مان ماضي بعيد ۾ تبديلي',
    reportingVerbRule: '"said to" ➔ "told + Object".',
    connectorRule: 'Connector: "that".',
    directExample: 'Saba said, "I met the district education officer yesterday."',
    indirectExample: 'Saba said that she had met the district education officer the previous day.',
    tenseShiftFormula: 'Past Simple (V2 met) ➔ Past Perfect (had + V3 had met); Yesterday ➔ The previous day.',
    explanation: 'A common misconception is leaving past simple unchanged. In past-time narration, Past Simple shifts back into Past Perfect (had + V3).',
    stsTrap: 'STS Trap: Writing "Saba said that she met..." (leaving it as Past Simple). It MUST backshift to "had met" and "yesterday" MUST become "the previous day".',
    pedagogyTip: 'Use a timeline diagram on the board: Present moves to Past, and Past steps back to Past Perfect.',
  },
  {
    id: 'nar-rule-3',
    order: 3,
    category: 'interrogative',
    categoryLabel: 'Interrogative (سواليه جملو)',
    title: 'Yes / No Questions: Conjunction "If" or "Whether"',
    urduSindhi: 'ها يا نه وارا سواليه جملا (If / Whether جو استعمال)',
    reportingVerbRule: '"said / said to" ➔ "asked", "inquired of", or "demanded".',
    connectorRule: 'Use "if" or "whether" (NEVER use "that" and NEVER use "that if").',
    directExample: 'The headmaster said to the candidate, "Are you ready for the teaching demonstration?"',
    indirectExample: 'The headmaster asked the candidate if he was ready for the teaching demonstration.',
    tenseShiftFormula: 'Question order (Are you...) ➔ Statement order (Subject + Verb: he was...). Present Continuous (is/am/are) ➔ Past (was/were).',
    explanation: 'The question mark is removed! The inverted auxiliary (Are you) must change into declarative order (he was), and the sentence ends with a period (full stop).',
    stsTrap: 'Two frequent STS distractors: (1) "asked that if...", (2) maintaining question order: "asked if was he ready". Both are strictly incorrect.',
    pedagogyTip: 'Teach the "Un-inversion Dance": In direct speech, Verb jumps ahead of Subject. In indirect speech, Subject takes back its front seat!',
  },
  {
    id: 'nar-rule-4',
    order: 4,
    category: 'interrogative',
    categoryLabel: 'Interrogative (سواليه جملو)',
    title: 'Wh- Questions: The Wh-Word Itself Acts as Connector',
    urduSindhi: 'Wh- وارا سوال (ڪو به ڌار نئون ڪنيڪٽر ڪونه ايندو)',
    reportingVerbRule: '"said / said to" ➔ "asked" or "inquired of".',
    connectorRule: 'The existing Wh-word (What, Where, Why, When, How, Who) acts as the connector. NO "that", NO "if".',
    directExample: 'The student said to the teacher, "Why did you penalize my assignment?"',
    indirectExample: 'The student asked the teacher why he had penalized his assignment.',
    tenseShiftFormula: 'Why did you penalize (Past Simple Question) ➔ why he had penalized (Past Perfect Statement).',
    explanation: 'Never insert "that" before a Wh-word (e.g., "asked that why"). The auxiliary "did" is dropped and the verb turns into past perfect "had penalized".',
    stsTrap: 'Examiner trap: Writing "The student asked why did he penalize...". Indirect questions NEVER use auxiliary "did/do/does" unless negative.',
    pedagogyTip: 'Rule of thumb: In reported Wh-questions, "Wh-word + Subject + Verb" is the immutable formula.',
  },
  {
    id: 'nar-rule-5',
    order: 5,
    category: 'imperative',
    categoryLabel: 'Imperative (حڪم ۽ التجا وارا جملو)',
    title: 'Commands, Requests & Advice: Infinitive "To + V1"',
    urduSindhi: 'حڪم، التجا ۽ نصيحت وارا جملا (To + V1)',
    reportingVerbRule: '"said to" ➔ "ordered", "commanded", "requested", "advised", "urged", or "begged" depending on tone.',
    connectorRule: 'Use the infinitive particle "to + V1". Negative commands take "not to + V1".',
    directExample: 'The invigilator said to the students, "Stop writing and submit your answer scripts."',
    indirectExample: 'The invigilator ordered the students to stop writing and submit their answer scripts.',
    tenseShiftFormula: 'Verb retains base form following "to" (to stop, [to] submit). Pronouns shift (your ➔ their).',
    explanation: 'Because an imperative sentence begins with a base verb (V1), indirect speech simply prefixes "to", turning it into an infinitive phrase.',
    stsTrap: 'Trap: Writing "The invigilator ordered that students should stop". While grammatically feasible in subjunctive, STS testing universally standardizes on "ordered [someone] to stop".',
    pedagogyTip: 'Encourage candidates to match the reporting verb accurately: Doctor ➔ advised; Judge/General/Principal ➔ ordered; Beggar/Applicant ➔ requested/entreated.',
  },
  {
    id: 'nar-rule-6',
    order: 6,
    category: 'imperative',
    categoryLabel: 'Imperative (حڪم ۽ التجا وارا جملو)',
    title: 'The "Forbade" Trap: Prohibitions Without Double Negation',
    urduSindhi: '"Forbade" وارو اصول (منع ڪرڻ - ٻيو "not" نه لڳندو)',
    reportingVerbRule: '"said to... do not" ➔ "forbade + Object" OR "ordered/advised + Object not to".',
    connectorRule: 'With "forbade": use "to + V1" (NEVER "not to"). With "ordered/advised": use "not to + V1".',
    directExample: 'The mother said to her son, "Do not touch the hot oven."',
    indirectExample: 'The mother forbade her son to touch the hot oven. (OR: ordered her son not to touch the hot oven).',
    tenseShiftFormula: 'Negative imperative ➔ "forbade ... to V1" (Double negative eliminated).',
    explanation: '"Forbade" (past of forbid) already contains negative sense (منع ڪيو). Adding "not" creates an erroneous double negative.',
    stsTrap: 'STEDA High-Yield Trap: "The mother forbade her son NOT to touch..." is a common distractor! It is completely incorrect.',
    pedagogyTip: 'Teach the formula: Forbade + NOT = FATAL GRAMMAR CRIME!',
  },
  {
    id: 'nar-rule-7',
    order: 7,
    category: 'imperative',
    categoryLabel: 'Imperative (حڪم ۽ التجا وارا جملو)',
    title: 'Sentences with "Let Us" (Proposals & Suggestions)',
    urduSindhi: '"Let us" وارا تجويز وارا جملا (Suggested / Proposed)',
    reportingVerbRule: '"said to" ➔ "suggested to" or "proposed to". Note: Unlike "told", "suggested" retains "to" before an object.',
    connectorRule: 'Connector: "that" + Subject ("we" or "they") + "should + V1".',
    directExample: 'Ali said to his colleagues, "Let us prepare a model lesson plan."',
    indirectExample: 'Ali suggested to his colleagues that they should prepare a model lesson plan.',
    tenseShiftFormula: '"Let us + V1" ➔ "that they/we should + V1".',
    explanation: 'When "Let" conveys a collaborative suggestion ("Let us..."), convert the reporting verb to "suggested to / proposed to", followed by "that we/they should".',
    stsTrap: 'Careful with the subject: If the speaker is included in the group, use "that we should"; if reporting about an external group, use "that they should".',
    pedagogyTip: 'Contrast with "Let me speak": That is a request for permission (requested to allow him to speak), NOT a suggestion.',
  },
  {
    id: 'nar-rule-8',
    order: 8,
    category: 'exclamatory',
    categoryLabel: 'Exclamatory (حيرت ۽ جذبات وارا جملو)',
    title: 'Exclamations of Joy, Grief, Wonder & Surprise',
    urduSindhi: 'جذباتي ۽ حيرت وارا جملا (Exclaimed with joy / sorrow / wonder)',
    reportingVerbRule: '"said" ➔ "exclaimed with joy" (Hurrah!), "exclaimed with sorrow / grief" (Alas!), "exclaimed with wonder / surprise" (What a / How).',
    connectorRule: 'Connector: "that". Interjections (Alas, Hurrah, Wow) are eliminated.',
    directExample: 'The coach said, "Hurrah! Our school team has won the trophy!"',
    indirectExample: 'The coach exclaimed with joy that their school team had won the trophy.',
    tenseShiftFormula: 'Exclamatory order ➔ Assertive declarative order. Present Perfect (has won) ➔ Past Perfect (had won).',
    explanation: 'Exclamations like "What a beautiful scene!" become assertions with intensifiers: "She exclaimed with wonder that it was a very beautiful scene."',
    stsTrap: 'Trap: Forgetting to drop the interjection: "exclaimed with joy that Hurrah...". Always delete the interjection in indirect speech.',
    pedagogyTip: 'Remind learners that "What a..." turns into "a very..." or "a great..." in indirect speech: "What a fool!" ➔ "that he was a great fool."',
  },
  {
    id: 'nar-rule-9',
    order: 9,
    category: 'optative',
    categoryLabel: 'Optative (دعا ۽ خواهش وارا جملو)',
    title: 'Prayers, Blessings, Curses & Wishes ("May God...")',
    urduSindhi: 'دعائيه ۽ تمنائي جملا (Prayed / Wished)',
    reportingVerbRule: '"said to" ➔ "prayed for / prayed that" (for spiritual invocations) or "wished" (for greetings/desires).',
    connectorRule: 'Connector: "that".',
    directExample: 'The grandmother said to me, "May Allah bless you with a successful teaching career!"',
    indirectExample: 'The grandmother prayed that Allah might bless me with a successful teaching career.',
    tenseShiftFormula: 'May + Subject + V1 ➔ that + Subject + might + V1. ("May Allah" ➔ "Allah might").',
    explanation: 'In optative prayers, "May" inverts after the subject as "might". For greetings: He said, "Good morning, Sir" ➔ He wished his teacher good morning.',
    stsTrap: 'Examiner trap: Leaving "May" before the subject ("prayed that may Allah bless me"). The modal auxiliary "might" MUST follow the noun: "that Allah might bless".',
    pedagogyTip: 'For farewells: "Good bye" or "Farewell" takes "bade": "He said, Good bye my friends" ➔ "He bade his friends good bye."',
  },
  {
    id: 'nar-rule-10',
    order: 10,
    category: 'exceptions',
    categoryLabel: 'Exceptions (استثنائي اصول - تبديلي ناهي)',
    title: 'Universal Truths, Scientific Laws & Habitual Facts (NO Backshift)',
    urduSindhi: 'آفاقي سچائي ۽ سائنسي حقيقتون (زمان تبديل نه ٿيندو)',
    reportingVerbRule: '"said" remains "said" or "said to" ➔ "told".',
    connectorRule: 'Connector: "that".',
    directExample: 'The science instructor said, "Water freezes at zero degrees Celsius."',
    indirectExample: 'The science instructor said that water freezes at zero degrees Celsius.',
    tenseShiftFormula: 'Present Simple remains Present Simple! DO NOT change "freezes" to "froze".',
    explanation: 'Even though the reporting verb "said" is in the past tense, permanent truths, scientific laws, geographical facts, and proverbs NEVER backshift into past tense.',
    stsTrap: 'THE #1 STS IBA TRICK: "The teacher said that the sun rose in the east" is FALSE. The sun still rises today! It must remain "rises".',
    pedagogyTip: 'Mnemonic: "Truth is timeless!" If the fact is still true right this second, leave the tense in present simple.',
  },
  {
    id: 'nar-rule-11',
    order: 11,
    category: 'exceptions',
    categoryLabel: 'Exceptions (استثنائي اصول - تبديلي ناهي)',
    title: 'Present or Future Reporting Verb: "Says" or "Will say"',
    urduSindhi: 'جيڪڏهن رپورٽنگ ورب حال يا مستقبل ۾ هجي (زمان نه بدلبو)',
    reportingVerbRule: '"says" remains "says"; "says to" ➔ "tells"; "will say" remains "will say".',
    connectorRule: 'Connector: "that".',
    directExample: 'The candidate says, "I am fully prepared for the IBA test."',
    indirectExample: 'The candidate says that he is fully prepared for the IBA test.',
    tenseShiftFormula: 'Tense of the reported speech DOES NOT CHANGE! "I am" ➔ "he is" (only pronoun shifts).',
    explanation: 'Tense backshifting ONLY occurs when the reporting verb is in the PAST tense (said, asked). When the reporting verb is in Present (says) or Future (will say), tenses remain completely untouched.',
    stsTrap: 'Candidates instinctively change "am" to "was" without looking at the reporting verb "says". Always check the verb OUTSIDE the quotation marks first!',
    pedagogyTip: 'Train students on the "Gateway Rule": Inspect the gatekeeper verb outside the quotes. If it says "says" or "will say", lock the tense in place.',
  },
  {
    id: 'nar-rule-12',
    order: 12,
    category: 'exceptions',
    categoryLabel: 'Exceptions (استثنائي اصول - تبديلي ناهي)',
    title: 'The S-O-N Pronoun Inversion Formula Explained',
    urduSindhi: 'ضميرن جي تبديليءَ جو S-O-N فارمولا',
    reportingVerbRule: 'Universal across all sentence categories.',
    connectorRule: 'Applies inside the reported speech clause.',
    directExample: 'You said to him, "I will return your notes tomorrow."',
    indirectExample: 'You told him that you would return his notes the next day.',
    tenseShiftFormula: '1st person (I) ➔ Subject (You); 2nd person (your) ➔ Object (his); 3rd person ➔ No change.',
    explanation: '1 = First Person pronouns (I, me, my, we, us, our) follow Subject (S). 2 = Second Person (you, your) follow Object (O). 3 = Third Person (he, she, it, they) follow No Change (N).',
    stsTrap: 'Confusion over 2nd person pronoun "you": It must adapt to whoever is being spoken to (the reporting object).',
    pedagogyTip: 'Write S-O-N vertically over 1-2-3 on the whiteboard: S over 1, O over 2, N over 3.',
  },
];

export const MORPH_PRESETS: MorphPreset[] = [
  {
    id: 'preset-1',
    label: 'Standard Assertive with Adverb Shift',
    sentenceType: 'Assertive (Statement)',
    directText: 'Zahid said to me, "I have completed your syllabus today."',
    speaker: 'Zahid',
    listener: 'me',
    reportingVerb: 'told me',
    conjunction: 'that',
    pronounShiftDesc: '"I" (1st person) shifts to "he" (Subject Zahid). "your" (2nd person) shifts to "my" (Object me).',
    tenseShiftDesc: 'Present Perfect ("have completed") backshifts to Past Perfect ("had completed").',
    adverbShiftDesc: '"today" shifts to "that day".',
    indirectResult: 'Zahid told me that he had completed my syllabus that day.',
    notes: 'Classic Assertive conversion: "said to" becomes "told", commas turn to "that", and present perfect becomes past perfect.',
  },
  {
    id: 'preset-2',
    label: 'Interrogative Yes/No Question',
    sentenceType: 'Interrogative (Yes/No)',
    directText: 'The interviewer said to the applicant, "Can you teach physics in English?"',
    speaker: 'The interviewer',
    listener: 'the applicant',
    reportingVerb: 'asked the applicant',
    conjunction: 'if / whether',
    pronounShiftDesc: '"you" (2nd person) shifts to "he" (referring to the applicant).',
    tenseShiftDesc: 'Modal "can" shifts to "could". Word order inverts from "Can you teach" to "he could teach".',
    adverbShiftDesc: 'No temporal adverbs present.',
    indirectResult: 'The interviewer asked the applicant if he could teach physics in English.',
    notes: 'Notice: No "that" is allowed! Question mark is deleted and normal subject-verb word order is restored.',
  },
  {
    id: 'preset-3',
    label: 'Interrogative Wh- Question',
    sentenceType: 'Interrogative (Wh- Question)',
    directText: 'The Headmistress said to Asif, "Where did you keep the register yesterday?"',
    speaker: 'The Headmistress',
    listener: 'Asif',
    reportingVerb: 'asked Asif',
    conjunction: 'where (Wh-word acts as connector)',
    pronounShiftDesc: '"you" shifts to "he" (Asif).',
    tenseShiftDesc: 'Past Simple question ("did you keep") backshifts to Past Perfect statement ("he had kept").',
    adverbShiftDesc: '"yesterday" shifts to "the previous day".',
    indirectResult: 'The Headmistress asked Asif where he had kept the register the previous day.',
    notes: 'No "that" or "if" used. Auxiliary "did" drops and main verb "keep" becomes past perfect "had kept".',
  },
  {
    id: 'preset-4',
    label: 'Imperative Command / Order',
    sentenceType: 'Imperative (Command)',
    directText: 'The Principal said to the peon, "Ring the school bell immediately."',
    speaker: 'The Principal',
    listener: 'the peon',
    reportingVerb: 'ordered the peon',
    conjunction: 'to (Infinitive)',
    pronounShiftDesc: 'No personal pronouns to shift.',
    tenseShiftDesc: 'Base verb "ring" becomes infinitive "to ring" (no tense backshifting needed).',
    adverbShiftDesc: '"immediately" remains as adverb of time.',
    indirectResult: 'The Principal ordered the peon to ring the school bell immediately.',
    notes: 'Reporting verb reflects authority ("ordered"). Verb simply attaches to "to".',
  },
  {
    id: 'preset-5',
    label: 'Negative Imperative with "Forbade"',
    sentenceType: 'Imperative (Prohibition)',
    directText: 'The master said to the servant, "Do not touch these delicate glassware."',
    speaker: 'The master',
    listener: 'the servant',
    reportingVerb: 'forbade the servant (or ordered not to)',
    conjunction: 'to (with forbade) / not to (with ordered)',
    pronounShiftDesc: 'No personal pronouns.',
    tenseShiftDesc: 'Negative "Do not touch" converts to "to touch" when using "forbade".',
    adverbShiftDesc: '"these" shifts to "those".',
    indirectResult: 'The master forbade the servant to touch those delicate glassware.',
    notes: 'CRITICAL TRAP: When "forbade" is used, do NOT write "not to touch"! "Forbade" already carries negative meaning.',
  },
  {
    id: 'preset-6',
    label: 'Proposal / Suggestion with "Let us"',
    sentenceType: 'Imperative (Suggestion with Let)',
    directText: 'Sohail said to his friends, "Let us review the Sindh curriculum guidelines."',
    speaker: 'Sohail',
    listener: 'his friends',
    reportingVerb: 'suggested to his friends',
    conjunction: 'that',
    pronounShiftDesc: '"us" shifts to "they" (or "we" if speaker is included).',
    tenseShiftDesc: '"Let us review" becomes "they should review".',
    adverbShiftDesc: 'None.',
    indirectResult: 'Sohail suggested to his friends that they should review the Sindh curriculum guidelines.',
    notes: 'Key syntax: "suggested to + Object + that + they should + V1".',
  },
  {
    id: 'preset-7',
    label: 'Universal Scientific Truth (Zero Backshift)',
    sentenceType: 'Exception (Universal Truth)',
    directText: 'The professor said, "The earth moves around the sun in an elliptical orbit."',
    speaker: 'The professor',
    listener: 'audience',
    reportingVerb: 'said',
    conjunction: 'that',
    pronounShiftDesc: 'No pronouns to shift.',
    tenseShiftDesc: 'ZERO TENSE BACKSHIFT! "moves" remains "moves" (NOT "moved").',
    adverbShiftDesc: 'None.',
    indirectResult: 'The professor said that the earth moves around the sun in an elliptical orbit.',
    notes: 'Even with past tense reporting verb ("said"), permanent truths retain Present Indefinite.',
  },
  {
    id: 'preset-8',
    label: 'Present Reporting Verb "Says" (No Tense Shift)',
    sentenceType: 'Exception (Present Reporting Verb)',
    directText: 'Farhan says to his father, "I am attending the Sukkur IBA seminar."',
    speaker: 'Farhan',
    listener: 'his father',
    reportingVerb: 'tells his father',
    conjunction: 'that',
    pronounShiftDesc: '"I" shifts to "he" (Farhan).',
    tenseShiftDesc: 'NO TENSE BACKSHIFT! "am attending" shifts to "is attending" (matching new subject "he", still Present Continuous).',
    adverbShiftDesc: 'None.',
    indirectResult: 'Farhan tells his father that he is attending the Sukkur IBA seminar.',
    notes: 'Because the reporting verb is present tense ("says"), the tense of reported speech is NOT backshifted to was attending.',
  },
];

export const ADVERB_SHIFTS: AdverbShiftItem[] = [
  {
    directWord: 'Now',
    indirectWord: 'Then',
    category: 'time',
    exampleDirect: 'He said, "I am busy now."',
    exampleIndirect: 'He said that he was busy then.',
    trapAlert: 'Candidates often leave "now" unchanged in past narration.',
  },
  {
    directWord: 'Today',
    indirectWord: 'That day',
    category: 'time',
    exampleDirect: 'She said, "The merit list will be published today."',
    exampleIndirect: 'She said that the merit list would be published that day.',
    trapAlert: 'Do NOT write "the day" or leave as "today".',
  },
  {
    directWord: 'Yesterday',
    indirectWord: 'The previous day / The day before',
    category: 'time',
    exampleDirect: 'He said, "I visited the Sukkur barrage yesterday."',
    exampleIndirect: 'He said that he had visited the Sukkur barrage the previous day.',
    trapAlert: 'Ensure Past Simple backshifts to Past Perfect simultaneously.',
  },
  {
    directWord: 'Tomorrow',
    indirectWord: 'The next day / The following day',
    category: 'time',
    exampleDirect: 'The teacher said, "We will hold a test tomorrow."',
    exampleIndirect: 'The teacher said that they would hold a test the next day.',
    trapAlert: 'Never write "tomorrow" in reported past speech.',
  },
  {
    directWord: 'Tonight',
    indirectWord: 'That night',
    category: 'time',
    exampleDirect: 'Mother said, "We are traveling tonight."',
    exampleIndirect: 'Mother said that they were traveling that night.',
    trapAlert: 'Avoid writing "this night".',
  },
  {
    directWord: 'Last night / Last week',
    indirectWord: 'The previous night / The previous week',
    category: 'time',
    exampleDirect: 'He said, "It rained heavily last night."',
    exampleIndirect: 'He said that it had rained heavily the previous night.',
    trapAlert: 'Both tense (had rained) and adverb (the previous night) must change.',
  },
  {
    directWord: 'Next week / Next year',
    indirectWord: 'The following week / The following year',
    category: 'time',
    exampleDirect: 'She said, "I will graduate next year."',
    exampleIndirect: 'She said that she would graduate the following year.',
    trapAlert: 'Writing "coming year" or leaving "next year" are common pitfalls.',
  },
  {
    directWord: 'Ago',
    indirectWord: 'Before',
    category: 'time',
    exampleDirect: 'He said, "The session ended two hours ago."',
    exampleIndirect: 'He said that the session had ended two hours before.',
    trapAlert: 'Leaving "ago" is a standard distractor in IBA multiple choice tests.',
  },
  {
    directWord: 'Here',
    indirectWord: 'There',
    category: 'place',
    exampleDirect: 'She said, "I will wait here for you."',
    exampleIndirect: 'She said that she would wait there for me.',
    trapAlert: 'If the speaker is still in that exact spot when reporting, it can stay "here", but in exams always shift to "there".',
  },
  {
    directWord: 'Hither',
    indirectWord: 'Thither',
    category: 'place',
    exampleDirect: 'The king said, "Come hither, my soldier."',
    exampleIndirect: 'The king ordered his soldier to go thither.',
    trapAlert: 'Archaic English often tested in BPS-17 literature and advanced grammar sections.',
  },
  {
    directWord: 'This (Time/Pronoun)',
    indirectWord: 'That',
    category: 'demonstrative',
    exampleDirect: 'He said, "I like this painting."',
    exampleIndirect: 'He said that he liked that painting.',
    trapAlert: 'Be cautious: "this morning" ➔ "that morning".',
  },
  {
    directWord: 'These',
    indirectWord: 'Those',
    category: 'demonstrative',
    exampleDirect: 'She said, "These books belong to the library."',
    exampleIndirect: 'She said that those books belonged to the library.',
    trapAlert: 'Writing "these" in reported past is grammatically incorrect.',
  },
  {
    directWord: 'Thus',
    indirectWord: 'So / In that way',
    category: 'manner',
    exampleDirect: 'The mentor said, "Thus we overcame the crisis."',
    exampleIndirect: 'The mentor said that so they had overcome the crisis.',
    trapAlert: 'Often shifts to "so" or "in that manner".',
  },
  {
    directWord: 'Hence',
    indirectWord: 'Thence',
    category: 'manner',
    exampleDirect: 'He said, "Hence we conclude our thesis."',
    exampleIndirect: 'He said that thence they concluded their thesis.',
    trapAlert: '"Hence" (from here/now) shifts to "thence" (from there/then).',
  },
];

export const NARRATION_QUIZ: NarrationQuizItem[] = [
  {
    id: 'nq-1',
    question: 'Select the correct indirect speech transformation:',
    directQuote: 'The geography teacher said, "Mount Everest is the highest mountain peak in the world."',
    sentenceType: 'Assertive (Universal Fact)',
    options: [
      'The geography teacher said that Mount Everest was the highest mountain peak in the world.',
      'The geography teacher told that Mount Everest is the highest mountain peak in the world.',
      'The geography teacher said that Mount Everest is the highest mountain peak in the world.',
      'The geography teacher asked if Mount Everest was the highest mountain peak in the world.',
    ],
    correctIndex: 2,
    explanation: 'Mount Everest being the highest peak is a permanent geographical fact (universal truth). Therefore, the verb "is" DOES NOT backshift to "was". Furthermore, "told" cannot be used without a direct object.',
    ruleCitation: 'Rule 10: Permanent Universal Truths & Scientific Laws do not undergo tense backshifting.',
  },
  {
    id: 'nq-2',
    question: 'Which is the grammatically correct indirect form of this Wh- question?',
    directQuote: 'The inspector said to the teacher, "Why were the students absent from the laboratory yesterday?"',
    sentenceType: 'Interrogative (Wh- Question)',
    options: [
      'The inspector asked the teacher that why the students had been absent from the laboratory yesterday.',
      'The inspector asked the teacher why had the students been absent from the laboratory the previous day.',
      'The inspector asked the teacher why the students had been absent from the laboratory the previous day.',
      'The inspector inquired the teacher why the students were absent from the laboratory the previous day.',
    ],
    correctIndex: 2,
    explanation: 'Three rules apply: (1) Wh-word "why" acts as connector (no "that"). (2) Word order must be statement order (Subject "the students" + Verb "had been", NOT inverted "why had the students"). (3) "were" (past) backshifts to "had been" (past perfect) and "yesterday" shifts to "the previous day".',
    ruleCitation: 'Rule 4: In Wh-questions, the Wh-word connects the clause, word order reverts to Subject + Verb, and past tenses shift to past perfect.',
  },
  {
    id: 'nq-3',
    question: 'Convert the following negative imperative sentence into indirect speech:',
    directQuote: 'The father said to his daughter, "Do not waste your precious time on social media."',
    sentenceType: 'Imperative (Prohibition)',
    options: [
      'The father forbade his daughter not to waste her precious time on social media.',
      'The father forbade his daughter to waste her precious time on social media.',
      'The father advised his daughter that she do not waste her precious time on social media.',
      'The father told to his daughter not to waste her precious time on social media.',
    ],
    correctIndex: 1,
    explanation: 'The verb "forbade" already contains the negative meaning (to command not to do something). Placing "not" after forbade creates a fatal double negative ("forbade not to"). Hence, "forbade his daughter to waste..." is the only correct construction.',
    ruleCitation: 'Rule 6: "Forbade" takes "to + V1", NEVER "not to + V1".',
  },
  {
    id: 'nq-4',
    question: 'Identify the correct transformation when the reporting verb is in the Present Tense:',
    directQuote: 'The candidate says, "I have passed the BPS-16 initial screening test."',
    sentenceType: 'Exception (Present Reporting Verb)',
    options: [
      'The candidate says that he has passed the BPS-16 initial screening test.',
      'The candidate says that he had passed the BPS-16 initial screening test.',
      'The candidate said that he has passed the BPS-16 initial screening test.',
      'The candidate told that he had passed the BPS-16 initial screening test.',
    ],
    correctIndex: 0,
    explanation: 'When the reporting verb is in Present Tense ("says") or Future Tense ("will say"), the tense of the reported speech DOES NOT CHANGE. Only the pronoun shifts ("I" ➔ "he"). "has passed" remains in the present perfect.',
    ruleCitation: 'Rule 11: Present or Future reporting verbs prohibit tense backshifting.',
  },
  {
    id: 'nq-5',
    question: 'Select the correct indirect speech for this proposal sentence:',
    directQuote: 'Rashid said to his colleagues, "Let us organize a mock test for our students."',
    sentenceType: 'Imperative (Suggestion with "Let us")',
    options: [
      'Rashid told his colleagues that let them organize a mock test for their students.',
      'Rashid requested his colleagues to let them organize a mock test for their students.',
      'Rashid suggested to his colleagues that they should organize a mock test for their students.',
      'Rashid ordered his colleagues that they will organize a mock test for their students.',
    ],
    correctIndex: 2,
    explanation: 'Sentences beginning with "Let us" express a proposal or suggestion. The reporting verb becomes "suggested to / proposed to", followed by "that they should + V1". Pronoun "our" shifts to "their".',
    ruleCitation: 'Rule 7: "Let us" turns into "suggested/proposed to + Object + that + they/we should + V1".',
  },
  {
    id: 'nq-6',
    question: 'Transform the optative blessing into indirect speech:',
    directQuote: 'The venerable scholar said to the young educator, "May you succeed in your teaching mission!"',
    sentenceType: 'Optative (Prayer / Blessing)',
    options: [
      'The venerable scholar prayed that the young educator might succeed in his teaching mission.',
      'The venerable scholar prayed that may the young educator succeed in his teaching mission.',
      'The venerable scholar wished that might the young educator succeed in his teaching mission.',
      'The venerable scholar told the young educator to succeed in his teaching mission.',
    ],
    correctIndex: 0,
    explanation: 'In optative prayers with "May", the reporting verb is "prayed that", connector is "that", and "may" moves AFTER the subject as "might": "that the young educator might succeed...".',
    ruleCitation: 'Rule 9: Optative prayers follow "prayed that + Subject + might + V1".',
  },
  {
    id: 'nq-7',
    question: 'What is the correct indirect conversion of this Yes/No question?',
    directQuote: 'The librarian said to me, "Did you return the encyclopedias two days ago?"',
    sentenceType: 'Interrogative (Yes/No Question with Adverb)',
    options: [
      'The librarian asked me that did I return the encyclopedias two days before.',
      'The librarian asked me if I had returned the encyclopedias two days before.',
      'The librarian asked me whether did I return the encyclopedias two days ago.',
      'The librarian inquired me if had I returned the encyclopedias two days before.',
    ],
    correctIndex: 1,
    explanation: 'Key points: (1) Yes/No question takes "if" or "whether" (no "that"). (2) Past Simple ("Did you return") backshifts to Past Perfect ("had returned"). (3) Inverted auxiliary "did" is dropped; statement order "I had returned" is used. (4) "ago" shifts to "before".',
    ruleCitation: 'Rules 3 & Table: Yes/No questions require "if/whether", Past Simple ➔ Past Perfect, and "ago" ➔ "before".',
  },
  {
    id: 'nq-8',
    question: 'Choose the correct indirect form of this exclamatory sentence:',
    directQuote: 'The candidate said, "Alas! I have failed the driving test."',
    sentenceType: 'Exclamatory (Grief / Sorrow)',
    options: [
      'The candidate exclaimed that alas he has failed the driving test.',
      'The candidate exclaimed with sorrow that he had failed the driving test.',
      'The candidate said with sadness that he failed the driving test.',
      'The candidate exclaimed with grief that alas he had failed the driving test.',
    ],
    correctIndex: 1,
    explanation: '"Alas!" expresses sorrow, so "said" converts to "exclaimed with sorrow / grief". The connector is "that". The interjection "Alas!" is eliminated. "have failed" (present perfect) backshifts to "had failed" (past perfect).',
    ruleCitation: 'Rule 8: Exclamations eliminate interjections and use "exclaimed with sorrow/joy + that + past tense".',
  },
];

export const TENSE_BACKSHIFT_MATRIX = [
  { directTense: 'Present Indefinite (Simple)', directForm: 'writes / does not write', indirectTense: 'Past Indefinite (Simple)', indirectForm: 'wrote / did not write', exception: 'Unchanged if universal/scientific truth or habit' },
  { directTense: 'Present Continuous', directForm: 'is / am / are writing', indirectTense: 'Past Continuous', indirectForm: 'was / were writing', exception: 'Unchanged if reporting verb is present (says)' },
  { directTense: 'Present Perfect', directForm: 'has / have written', indirectTense: 'Past Perfect', indirectForm: 'had written', exception: 'Always backshifts to had + V3 in past narration' },
  { directTense: 'Present Perfect Continuous', directForm: 'has / have been writing', indirectTense: 'Past Perfect Continuous', indirectForm: 'had been writing', exception: 'Time markers (since/for) retained' },
  { directTense: 'Past Indefinite (Simple)', directForm: 'wrote / did not write', indirectTense: 'Past Perfect', indirectForm: 'had written / had not written', exception: 'Unchanged if two past actions were simultaneous (while/when)' },
  { directTense: 'Past Continuous', directForm: 'was / were writing', indirectTense: 'Past Perfect Continuous', indirectForm: 'had been writing', exception: 'Unchanged if describing continuous historical background' },
  { directTense: 'Past Perfect', directForm: 'had written', indirectTense: 'Past Perfect (NO CHANGE)', indirectForm: 'had written', exception: 'Cannot backshift further into past; remains had + V3' },
  { directTense: 'Past Perfect Continuous', directForm: 'had been writing', indirectTense: 'Past Perfect Continuous (NO CHANGE)', indirectForm: 'had been writing', exception: 'Cannot backshift further; remains had been + V1-ing' },
  { directTense: 'Future Simple (Will / Shall)', directForm: 'will write / shall write', indirectTense: 'Conditional (Would / Should)', indirectForm: 'would write', exception: 'Usually shifts to "would" for all persons in modern reported speech' },
  { directTense: 'Modal: Can', directForm: 'can write', indirectTense: 'Modal: Could', indirectForm: 'could write', exception: 'Base verb remains unchanged' },
  { directTense: 'Modal: May', directForm: 'may write', indirectTense: 'Modal: Might', indirectForm: 'might write', exception: 'In optative prayers, "might" follows the subject' },
  { directTense: 'Modal: Must', directForm: 'must write (present obligation)', indirectTense: 'Modal: Had to / Would have to', indirectForm: 'had to write', exception: 'If "must" expresses permanent moral duty, it remains "must"' },
];

export const InteractiveNarrationExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rules' | 'morpher' | 'backshift' | 'drill'>('rules');
  const [selectedCategory, setSelectedCategory] = useState<NarrationCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Morpher states
  const [activePresetId, setActivePresetId] = useState<string>('preset-1');
  const [morphPhase, setMorphPhase] = useState<number>(0);

  // Drill states
  const [drillAnswers, setDrillAnswers] = useState<Record<string, number>>({});
  const [showDrillExplanations, setShowDrillExplanations] = useState<Record<string, boolean>>({});

  const filteredRules = NARRATION_RULES.filter((rule) => {
    const matchesCategory = selectedCategory === 'all' || rule.category === selectedCategory;
    const matchesSearch =
      rule.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.urduSindhi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.directExample.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.indirectExample.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.stsTrap.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activePreset = MORPH_PRESETS.find((p) => p.id === activePresetId) || MORPH_PRESETS[0];

  const handleSelectDrillOption = (quizId: string, optionIdx: number) => {
    if (drillAnswers[quizId] !== undefined) return;
    setDrillAnswers((prev) => ({ ...prev, [quizId]: optionIdx }));
    setShowDrillExplanations((prev) => ({ ...prev, [quizId]: true }));
  };

  const handleResetDrill = () => {
    setDrillAnswers({});
    setShowDrillExplanations({});
  };

  const drillCorrectCount = Object.entries(drillAnswers).filter(
    ([id, ansIdx]) => {
      const q = NARRATION_QUIZ.find((quiz) => quiz.id === id);
      return q && q.correctIndex === ansIdx;
    }
  ).length;

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-indigo-200/80 dark:border-indigo-900/60 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 my-8">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-900 text-white p-5 sm:p-7 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-indigo-100 text-xs font-bold tracking-wide uppercase mb-2.5 backdrop-blur-xs border border-white/20">
              <Quote className="w-3.5 h-3.5 text-amber-300" />
              <span>STEDA &amp; Sukkur IBA BPS-16/17 Master Studio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
              Direct &amp; Indirect Narration Studio
            </h2>
            <p className="text-indigo-100 text-sm sm:text-base mt-1.5 max-w-2xl leading-relaxed">
              Master the S-O-N pronoun shifts, 12-tense backshifting jumps, 5 sentence types (Assertive, Interrogative, Imperative, Exclamatory, Optative), universal truth exceptions, and Sukkur IBA exam traps.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto bg-black/20 p-1.5 rounded-xl border border-white/10 backdrop-blur-xs">
            <span className="text-xs font-semibold px-2 py-1 text-indigo-200">Sindhi / Urdu:</span>
            <span className="text-xs font-bold text-amber-300 px-2 py-1 bg-white/10 rounded-lg">
              بلاواسطه ۽ بالواسطه گفتگو (Reported Speech)
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/15 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('rules')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition cursor-pointer ${
              activeTab === 'rules'
                ? 'bg-white text-indigo-900 shadow-md font-black'
                : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>12 Narration Rules Vault</span>
          </button>

          <button
            onClick={() => setActiveTab('morpher')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition cursor-pointer ${
              activeTab === 'morpher'
                ? 'bg-white text-indigo-900 shadow-md font-black'
                : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Live Sentence Morpher</span>
          </button>

          <button
            onClick={() => setActiveTab('backshift')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition cursor-pointer ${
              activeTab === 'backshift'
                ? 'bg-white text-indigo-900 shadow-md font-black'
                : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
            <span>Tenses &amp; Adverb Matrix</span>
          </button>

          <button
            onClick={() => setActiveTab('drill')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition cursor-pointer ${
              activeTab === 'drill'
                ? 'bg-white text-indigo-900 shadow-md font-black'
                : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>IBA &amp; STEDA Exam Drill ({NARRATION_QUIZ.length} MCQs)</span>
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="p-4 sm:p-6 lg:p-8 bg-slate-50/50 dark:bg-slate-900/50 min-h-[600px]">
        {/* TAB 1: 12 NARRATION RULES VAULT */}
        {activeTab === 'rules' && (
          <div className="space-y-6">
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                <span className="text-xs font-bold text-slate-400 flex items-center gap-1 uppercase tracking-wider">
                  <SlidersHorizontal className="w-3.5 h-3.5" /> Filter:
                </span>
                {(
                  [
                    { id: 'all', label: 'All 12 Rules' },
                    { id: 'assertive', label: 'Assertive' },
                    { id: 'interrogative', label: 'Interrogative' },
                    { id: 'imperative', label: 'Imperative & Let' },
                    { id: 'exclamatory', label: 'Exclamatory' },
                    { id: 'optative', label: 'Optative' },
                    { id: 'exceptions', label: 'High-Yield Exceptions' },
                  ] as const
                ).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                      selectedCategory === cat.id
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="relative min-w-[240px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search rules, verbs, trap alerts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Quick S-O-N Cheat Card */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-200 dark:border-indigo-800/60 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-black flex items-center justify-center text-lg shadow-sm shrink-0">
                  SON
                </div>
                <div>
                  <h4 className="text-sm font-bold text-indigo-950 dark:text-indigo-100 flex items-center gap-2">
                    <span>The Universal S-O-N Pronoun Shift Formula</span>
                    <span className="text-[10px] bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 px-2 py-0.5 rounded-full font-black">
                      1 - 2 - 3
                    </span>
                  </h4>
                  <p className="text-xs text-indigo-700 dark:text-indigo-300 mt-0.5">
                    <strong>1st Person</strong> (I, we) changes with <strong>Subject</strong> | <strong>2nd Person</strong> (you) changes with <strong>Object</strong> | <strong>3rd Person</strong> (he, she, it, they) has <strong>No change</strong>.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <div className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-800 text-center">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">1st Person</div>
                  <div className="text-xs font-black text-indigo-600 dark:text-indigo-400">➔ Subject (S)</div>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-800 text-center">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">2nd Person</div>
                  <div className="text-xs font-black text-purple-600 dark:text-purple-400">➔ Object (O)</div>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-800 text-center">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">3rd Person</div>
                  <div className="text-xs font-black text-emerald-600 dark:text-emerald-400">➔ No Change (N)</div>
                </div>
              </div>
            </div>

            {/* Rules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredRules.map((rule) => (
                <div
                  key={rule.id}
                  className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                        Rule {rule.order}: {rule.categoryLabel}
                      </span>
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 font-serif">
                        {rule.urduSindhi}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 mb-2 flex items-center gap-2">
                      {rule.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {rule.explanation}
                    </p>

                    {/* Reporting Verb & Connector Pills */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                      <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700">
                        <div className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                          Reporting Verb
                        </div>
                        <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                          {rule.reportingVerbRule}
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700">
                        <div className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
                          Conjunction / Connector
                        </div>
                        <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                          {rule.connectorRule}
                        </div>
                      </div>
                    </div>

                    {/* Example Box */}
                    <div className="space-y-2 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 p-3 border border-indigo-100 dark:border-indigo-900/50">
                      <div>
                        <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                          <Quote className="w-3 h-3 text-indigo-500" /> Direct Speech (بلاواسطه):
                        </div>
                        <p className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200 mt-0.5 pl-4 border-l-2 border-indigo-400">
                          {rule.directExample}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-indigo-100 dark:border-indigo-900/60">
                        <div className="text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Indirect Speech (بالواسطه):
                        </div>
                        <p className="text-xs font-mono font-bold text-emerald-900 dark:text-emerald-200 mt-0.5 pl-4 border-l-2 border-emerald-500">
                          {rule.indirectExample}
                        </p>
                      </div>

                      <div className="text-[11px] text-slate-500 dark:text-slate-400 italic pt-1">
                        Formula: {rule.tenseShiftFormula}
                      </div>
                    </div>
                  </div>

                  {/* High Yield STS Trap Alert Footnote */}
                  <div className="bg-amber-50 dark:bg-amber-950/40 p-3 border-t border-amber-200 dark:border-amber-900/50 flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-bold text-amber-900 dark:text-amber-200">
                        STS IBA Trap:
                      </span>{' '}
                      <span className="text-xs text-amber-800 dark:text-amber-300">
                        {rule.stsTrap}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: LIVE SENTENCE MORPHER */}
        {activeTab === 'morpher' && (
          <div className="space-y-6">
            {/* Presets Bar */}
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Select a High-Yield Sentence Model to Morph:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {MORPH_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => {
                      setActivePresetId(preset.id);
                      setMorphPhase(0);
                    }}
                    className={`p-3 rounded-xl text-left border transition cursor-pointer flex flex-col justify-between ${
                      activePresetId === preset.id
                        ? 'bg-indigo-600 text-white border-indigo-700 shadow-md ring-2 ring-indigo-300 dark:ring-indigo-800'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-indigo-300'
                    }`}
                  >
                    <span className="text-[10px] font-extrabold uppercase opacity-80 mb-1">
                      {preset.sentenceType}
                    </span>
                    <span className="text-xs font-bold line-clamp-2 leading-tight">
                      {preset.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Speech Showcase Box */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-xs font-black text-slate-400 uppercase tracking-wider">
                    Direct Speech Input Clause
                  </span>
                </div>
                <div className="text-xs text-slate-500 font-semibold">
                  Speaker: <strong className="text-indigo-600 dark:text-indigo-400">{activePreset.speaker}</strong>
                  {activePreset.listener && (
                    <> | Listener: <strong className="text-purple-600 dark:text-purple-400">{activePreset.listener}</strong></>
                  )}
                </div>
              </div>

              <div className="py-6 text-center">
                <p className="text-lg sm:text-2xl font-mono font-extrabold text-slate-900 dark:text-white tracking-wide">
                  {activePreset.directText}
                </p>
              </div>

              {/* Morphing Stepper Controller */}
              <div className="bg-slate-50 dark:bg-slate-900/80 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-extrabold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-500" /> Morphing Engine Step Tracker
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setMorphPhase((p) => Math.max(0, p - 1))}
                      disabled={morphPhase === 0}
                      className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed text-slate-700 dark:text-slate-300"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setMorphPhase((p) => Math.min(4, p + 1))}
                      disabled={morphPhase === 4}
                      className="px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-600 text-white disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed shadow-xs"
                    >
                      Next Step ➔
                    </button>
                    <button
                      onClick={() => setMorphPhase(4)}
                      className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-600 text-white cursor-pointer shadow-xs"
                    >
                      Show Final
                    </button>
                  </div>
                </div>

                {/* 5-Step Visual Pipeline */}
                <div className="grid grid-cols-5 gap-1.5 sm:gap-2 text-center">
                  {[
                    { step: 0, label: '1. Reporting Verb', detail: activePreset.reportingVerb },
                    { step: 1, label: '2. Conjunction', detail: activePreset.conjunction },
                    { step: 2, label: '3. S-O-N Pronouns', detail: 'Pronoun shift' },
                    { step: 3, label: '4. Tense Backshift', detail: 'Tense conversion' },
                    { step: 4, label: '5. Time/Place & Result', detail: 'Final indirect' },
                  ].map((s) => (
                    <div
                      key={s.step}
                      onClick={() => setMorphPhase(s.step)}
                      className={`p-2 rounded-lg cursor-pointer transition border text-left sm:text-center ${
                        morphPhase >= s.step
                          ? 'bg-indigo-100 dark:bg-indigo-950 border-indigo-300 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 font-bold'
                          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 opacity-60'
                      }`}
                    >
                      <div className="text-[10px] font-extrabold uppercase">{s.label}</div>
                      <div className="text-[11px] truncate mt-0.5 font-mono">{s.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Step Detail Card */}
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 mb-2 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" /> Grammatical Transformations Underway
                  </h4>
                  <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-indigo-600 dark:text-indigo-400 shrink-0">Verb:</span>
                      <span>{activePreset.reportingVerb}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-purple-600 dark:text-purple-400 shrink-0">Connector:</span>
                      <span>{activePreset.conjunction}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600 dark:text-blue-400 shrink-0">S-O-N:</span>
                      <span>{activePreset.pronounShiftDesc}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-amber-600 dark:text-amber-400 shrink-0">Tense Shift:</span>
                      <span>{activePreset.tenseShiftDesc}</span>
                    </li>
                    {activePreset.adverbShiftDesc && (
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-emerald-600 dark:text-emerald-400 shrink-0">Adverb:</span>
                        <span>{activePreset.adverbShiftDesc}</span>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/60 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Synthesized Indirect Result
                    </h4>
                    <p className="text-sm font-mono font-bold text-emerald-900 dark:text-emerald-200 leading-relaxed">
                      {morphPhase >= 4 ? (
                        activePreset.indirectResult
                      ) : (
                        <span className="text-slate-400 dark:text-slate-500 italic">
                          Click &apos;Next Step&apos; or &apos;Show Final&apos; to view the complete indirect speech sentence.
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-emerald-200 dark:border-emerald-900/60 text-xs text-slate-600 dark:text-slate-300">
                    <strong>Examiner Note:</strong> {activePreset.notes}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: TENSES & ADVERB MATRIX */}
        {activeTab === 'backshift' && (
          <div className="space-y-6">
            {/* Tense Backshifting Table */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xs">
              <div className="bg-indigo-50 dark:bg-indigo-950/60 px-5 py-3 border-b border-indigo-100 dark:border-indigo-900 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <h3 className="text-sm font-black text-indigo-950 dark:text-indigo-100 uppercase tracking-wide">
                    Master Tense Backshifting Matrix (When Reporting Verb is in Past Tense)
                  </h3>
                </div>
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-300">
                  12 Grammatical Tenses &amp; Modals
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100/70 dark:bg-slate-900 text-slate-500 dark:text-slate-400 font-bold border-b border-slate-200 dark:border-slate-700">
                      <th className="p-3">Direct Speech Tense</th>
                      <th className="p-3">Direct Form Example</th>
                      <th className="p-3">Indirect Speech Tense</th>
                      <th className="p-3">Indirect Form Example</th>
                      <th className="p-3">Exception / Alert</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
                    {TENSE_BACKSHIFT_MATRIX.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition font-medium"
                      >
                        <td className="p-3 font-bold text-slate-800 dark:text-slate-200">
                          {row.directTense}
                        </td>
                        <td className="p-3 font-mono text-indigo-600 dark:text-indigo-400">
                          {row.directForm}
                        </td>
                        <td className="p-3 font-bold text-purple-700 dark:text-purple-300">
                          {row.indirectTense}
                        </td>
                        <td className="p-3 font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                          {row.indirectForm}
                        </td>
                        <td className="p-3 text-slate-500 dark:text-slate-400 text-[11px]">
                          {row.exception}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Adverbs of Time & Place Table */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xs">
              <div className="bg-purple-50 dark:bg-purple-950/60 px-5 py-3 border-b border-purple-100 dark:border-purple-900 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-sm font-black text-purple-950 dark:text-purple-100 uppercase tracking-wide">
                    Adverbials of Time, Place &amp; Proximity Conversion Guide
                  </h3>
                </div>
                <span className="text-xs font-bold text-purple-600 dark:text-purple-300">
                  {ADVERB_SHIFTS.length} Word Shifts
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
                {ADVERB_SHIFTS.map((adv, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono font-extrabold mb-2">
                        <span className="px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200">
                          {adv.directWord}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                        <span className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200">
                          {adv.indirectWord}
                        </span>
                      </div>

                      <div className="space-y-1 text-[11px] text-slate-600 dark:text-slate-400 mt-2">
                        <p><strong>Direct:</strong> &ldquo;{adv.exampleDirect}&rdquo;</p>
                        <p className="text-emerald-700 dark:text-emerald-400"><strong>Indirect:</strong> &ldquo;{adv.exampleIndirect}&rdquo;</p>
                      </div>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-slate-200 dark:border-slate-800 text-[10px] text-amber-700 dark:text-amber-400 font-semibold flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 shrink-0" /> {adv.trapAlert}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: EXAM SIMULATOR DRILL */}
        {activeTab === 'drill' && (
          <div className="space-y-6">
            {/* Drill Score Header */}
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>Sukkur IBA &amp; STEDA Real Exam Simulator</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Targeted multiple-choice problems testing universal truths, forbade double-negation, optative prayers, Wh- inverted order, and present reporting verbs.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-xs font-bold text-slate-400 uppercase">Score</div>
                  <div className="text-xl font-black text-indigo-600 dark:text-indigo-400">
                    {drillCorrectCount} / {NARRATION_QUIZ.length}
                  </div>
                </div>

                <button
                  onClick={handleResetDrill}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset Drill
                </button>
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-4">
              {NARRATION_QUIZ.map((quiz, qIdx) => {
                const selected = drillAnswers[quiz.id];
                const isAnswered = selected !== undefined;
                const isCorrect = selected === quiz.correctIndex;

                return (
                  <div
                    key={quiz.id}
                    className={`bg-white dark:bg-slate-800 p-5 rounded-2xl border transition-all ${
                      isAnswered
                        ? isCorrect
                          ? 'border-emerald-300 dark:border-emerald-800/80 shadow-xs'
                          : 'border-red-300 dark:border-red-800/80 shadow-xs'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                        Q{qIdx + 1} • {quiz.sentenceType}
                      </span>

                      {isAnswered && (
                        <span
                          className={`text-xs font-extrabold flex items-center gap-1 px-2.5 py-0.5 rounded-full ${
                            isCorrect
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                              : 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300'
                          }`}
                        >
                          {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          {isCorrect ? 'Correct' : 'Incorrect'}
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                      {quiz.question}
                    </h4>

                    {/* Direct Quote Card */}
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 mb-4">
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wide block mb-0.5">
                        Direct Speech Prompt:
                      </span>
                      <p className="text-xs font-mono font-bold text-indigo-900 dark:text-indigo-200">
                        {quiz.directQuote}
                      </p>
                    </div>

                    {/* Options */}
                    <div className="space-y-2">
                      {quiz.options.map((opt, optIdx) => {
                        const isThisSelected = selected === optIdx;
                        const isThisCorrect = quiz.correctIndex === optIdx;

                        let btnStyle = 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/40';

                        if (isAnswered) {
                          if (isThisCorrect) {
                            btnStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                          } else if (isThisSelected) {
                            btnStyle = 'bg-red-50 dark:bg-red-950/60 border-red-500 text-red-900 dark:text-red-200 line-through';
                          } else {
                            btnStyle = 'opacity-40 border-slate-200 dark:border-slate-700';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={isAnswered}
                            onClick={() => handleSelectDrillOption(quiz.id, optIdx)}
                            className={`w-full p-3 rounded-xl text-left border text-xs transition flex items-start gap-2.5 cursor-pointer disabled:cursor-default ${btnStyle}`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="font-mono text-xs leading-relaxed">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation Reveal */}
                    {showDrillExplanations[quiz.id] && (
                      <div className="mt-4 p-3.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900 text-xs space-y-1.5">
                        <div className="font-bold text-indigo-950 dark:text-indigo-200 flex items-center gap-1.5">
                          <Lightbulb className="w-4 h-4 text-amber-500" /> Pedagogical Explanation:
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          {quiz.explanation}
                        </p>
                        <div className="text-[11px] font-semibold text-indigo-700 dark:text-indigo-400 pt-1">
                          Ref: {quiz.ruleCitation}
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
