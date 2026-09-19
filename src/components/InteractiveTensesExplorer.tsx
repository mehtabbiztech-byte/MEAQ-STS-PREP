import React, { useState } from 'react';
import {
  Clock,
  Sparkles,
  CheckCircle2,
  XCircle,
  ChevronRight,
  ChevronLeft,
  HelpCircle,
  Lightbulb,
  Zap,
  ArrowRight,
  RefreshCw,
  Search,
  Eye,
  Layers,
  Award,
  Info,
  Calendar,
  Compass,
  FileSpreadsheet,
  AlertTriangle,
  Play,
  RotateCcw,
} from 'lucide-react';

export type TimeCategory = 'present' | 'past' | 'future';
export type AspectCategory = 'simple' | 'continuous' | 'perfect' | 'perfect-continuous';

export interface TenseItem {
  id: string;
  order: number;
  time: TimeCategory;
  aspect: AspectCategory;
  name: string;
  urdu: string;
  sindhi: string;
  tagline: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  borderColor: string;
  timelineLabel: string;
  timelineDescription: string;
  formulas: {
    affirmative: string;
    negative: string;
    interrogative: string;
    interrogativeNegative: string;
  };
  syntaxBreakdown: {
    subject: string;
    auxiliary: string;
    mainVerb: string;
    objectComplement: string;
  };
  signalWords: string[];
  keyRules: {
    ruleTitle: string;
    ruleDetail: string;
    example: string;
  }[];
  stsExamTrap: string;
  pedagogyTip: string;
}

export const ALL_12_TENSES: TenseItem[] = [
  // 1. Present Simple
  {
    id: 'pres-simple',
    order: 1,
    time: 'present',
    aspect: 'simple',
    name: '1. Present Simple (Indefinite) Tense',
    urdu: 'زمانہ حال مطلق (عام)',
    sindhi: 'زمان حال سادو (عام عادت يا سچائي)',
    tagline: 'Permanent habits, universal scientific truths, daily routines, and timetabled future events',
    color: 'emerald',
    badgeBg: 'bg-emerald-100 dark:bg-emerald-950/60',
    badgeText: 'text-emerald-800 dark:text-emerald-300',
    borderColor: 'border-emerald-500',
    timelineLabel: 'Habitual / Timeless / General',
    timelineDescription: 'True in the past, true right now, and will remain true in the future.',
    formulas: {
      affirmative: 'Subject + V1 (or V1 + s/es for 3rd person singular: he, she, it) + Object',
      negative: 'Subject + do / does + not + V1 (base form) + Object',
      interrogative: 'Do / Does + Subject + V1 (base form) + Object?',
      interrogativeNegative: 'Do / Does + Subject + not + V1? (or Don\'t / Doesn\'t + S + V1?)',
    },
    syntaxBreakdown: {
      subject: 'I, We, You, They, Plural Noun / He, She, It, Singular Noun',
      auxiliary: 'None in affirmative; "do / does" in negative & interrogative',
      mainVerb: 'Base Form (V1) or V1 + -s / -es (with He, She, It, Singulars)',
      objectComplement: 'Daily routine, universal fact, or frequency adverb',
    },
    signalWords: ['always', 'usually', 'often', 'sometimes', 'rarely', 'seldom', 'never', 'every day', 'every month', 'on Mondays', 'normally', 'as a rule'],
    keyRules: [
      {
        ruleTitle: 'Habitual Actions & Routines',
        ruleDetail: 'Actions done repeatedly as personal routines or cultural practices.',
        example: 'Mr. Soomro reads Dawn newspaper every morning.',
      },
      {
        ruleTitle: 'Universal Scientific Truths & Proverbs',
        ruleDetail: 'Natural laws and mathematical or philosophical realities that never alter.',
        example: 'Water boils at 100°C. Honey is sweet. Barking dogs seldom bite.',
      },
      {
        ruleTitle: 'Fixed Timetables & Official Schedules',
        ruleDetail: 'Future events that are part of an unyielding public program or timetable.',
        example: 'The Sukkur Express departs at 7:30 PM tomorrow.',
      },
      {
        ruleTitle: 'Subordinate Future Time Clauses',
        ruleDetail: 'In clauses introduced by if, when, until, as soon as, use Present Simple instead of future.',
        example: 'When the chief guest arrives, the students will stand up (NOT will arrive).',
      },
    ],
    stsExamTrap: 'STS Trap 1: Using "-s/-es" after "does" (INCORRECT: "Does he writes a letter?" -> CORRECT: "Does he write a letter?"). STS Trap 2: Using continuous tenses with stative verbs like know, believe, own (INCORRECT: "I am knowing him" -> CORRECT: "I know him").',
    pedagogyTip: 'Sindh Classroom Tip: Draw a 24-hour clock diagram on the board and have learners write their morning routines using "I wake up", "I pray", and "I walk to school". Reinforce 3rd-person "-s/-es" by having peers describe their best friend\'s routine ("Ali wakes up at 6 AM").',
  },

  // 2. Present Continuous
  {
    id: 'pres-cont',
    order: 2,
    time: 'present',
    aspect: 'continuous',
    name: '2. Present Continuous (Progressive) Tense',
    urdu: 'زمانہ حال جاری (استمراری)',
    sindhi: 'زمان حال هلندڙ (استمراري)',
    tagline: 'Actions in active progress at the moment of speech or around the current time frame',
    color: 'teal',
    badgeBg: 'bg-teal-100 dark:bg-teal-950/60',
    badgeText: 'text-teal-800 dark:text-teal-300',
    borderColor: 'border-teal-500',
    timelineLabel: 'Active Right Now / Temporary State',
    timelineDescription: 'Started shortly before now, continuing through the present speech moment, not yet completed.',
    formulas: {
      affirmative: 'Subject + is / am / are + V1-ing (Present Participle) + Object',
      negative: 'Subject + is / am / are + not + V1-ing + Object',
      interrogative: 'Is / Am / Are + Subject + V1-ing + Object?',
      interrogativeNegative: 'Is / Am / Are + Subject + not + V1-ing? (or Isn\'t / Aren\'t + S + V1-ing?)',
    },
    syntaxBreakdown: {
      subject: 'I (takes "am") | He, She, It (takes "is") | We, You, They (take "are")',
      auxiliary: 'is / am / are (Present Be-Verbs)',
      mainVerb: 'V1 + -ing (writing, running, singing, examining)',
      objectComplement: 'Immediate situation or temporary circumstance',
    },
    signalWords: ['now', 'right now', 'at present', 'currently', 'at this moment', 'Look!', 'Listen!', 'these days', 'nowadays', 'for the time being'],
    keyRules: [
      {
        ruleTitle: 'Happening at the Exact Moment of Speech',
        ruleDetail: 'Direct ongoing visible or audible action taking place right now.',
        example: 'Look! The students are conducting an experiment in the chemistry laboratory.',
      },
      {
        ruleTitle: 'Temporary Action Around Present Time',
        ruleDetail: 'An activity happening nowadays, though not necessarily at the exact second of speaking.',
        example: 'She is preparing for the Sindh Teaching License Exam this semester.',
      },
      {
        ruleTitle: 'Definite Planned Near-Future Arrangement',
        ruleDetail: 'An arrangement already settled with a specific future time expression.',
        example: 'The education minister is visiting the Khairpur Model School tomorrow morning.',
      },
    ],
    stsExamTrap: 'High-Yield STS Rule: Non-Continuous / Stative Verbs! Verbs of senses (taste, smell, hear), emotions (love, hate, wish), perception (seem, appear, look), and possession (own, belong, have) cannot be used in continuous tenses. INCORRECT: "This car is belonging to me." CORRECT: "This car belongs to me."',
    pedagogyTip: 'Sindh Classroom Tip: Play a classroom "Mime Game". One student acts out an action (sweeping, reading, drinking water) while other students call out: "He is sweeping the floor!" "She is drinking water!" to internalize the "is/are + -ing" pattern naturally.',
  },

  // 3. Present Perfect
  {
    id: 'pres-perf',
    order: 3,
    time: 'present',
    aspect: 'perfect',
    name: '3. Present Perfect Tense',
    urdu: 'زمانہ حال مکمل',
    sindhi: 'زمان حال مڪمل (پورو ٿيل پر اثر باقي)',
    tagline: 'Actions completed in the past whose results or psychological consequences connect directly to the present',
    color: 'blue',
    badgeBg: 'bg-blue-100 dark:bg-blue-950/60',
    badgeText: 'text-blue-800 dark:text-blue-300',
    borderColor: 'border-blue-500',
    timelineLabel: 'Past Action with Present Connection',
    timelineDescription: 'Action occurred at an indefinite past time, but the outcome or relevance is alive right now.',
    formulas: {
      affirmative: 'Subject + have / has + V3 (Past Participle) + Object',
      negative: 'Subject + have / has + not + V3 + Object',
      interrogative: 'Have / Has + Subject + V3 + Object?',
      interrogativeNegative: 'Have / Has + Subject + not + V3? (or Haven\'t / Hasn\'t + S + V3?)',
    },
    syntaxBreakdown: {
      subject: 'I, We, You, They, Plural Noun (have) | He, She, It, Singular Noun (has)',
      auxiliary: 'have / has',
      mainVerb: 'Past Participle (V3: written, gone, taught, seen, finished)',
      objectComplement: 'Completed work with immediate present impact',
    },
    signalWords: ['already', 'just', 'yet (in negative & questions)', 'recently', 'lately', 'ever', 'never', 'so far', 'up to now', 'twice', 'several times'],
    keyRules: [
      {
        ruleTitle: 'Action Finished Just a Short Time Ago',
        ruleDetail: 'Immediate past actions paired frequently with the adverb "just".',
        example: 'The invigilator has just distributed the answer sheets.',
      },
      {
        ruleTitle: 'Past Action with Visible Present Result',
        ruleDetail: 'The physical action happened in the past, but the result is visibly present.',
        example: 'I have lost my identity card (Result: I do not have it right now).',
      },
      {
        ruleTitle: 'Life Experiences at an Unspecified Time',
        ruleDetail: 'Experiences across a lifetime where the specific date is irrelevant.',
        example: 'Have you ever visited the archaeological ruins of Mohenjo-daro?',
      },
    ],
    stsExamTrap: 'STEDA / STS Lethal Trap: NEVER use Present Perfect with specific finished past time indicators (yesterday, last year, in 2019, two days ago)! INCORRECT: "I have passed my B.Ed in 2021." CORRECT: "I passed my B.Ed in 2021." (Past Simple). "Yet" is used ONLY in negative and interrogative sentences at the end: "He has not arrived yet."',
    pedagogyTip: 'Sindh Classroom Tip: Show a clean whiteboard and write a sentence on it, then erase it completely. Ask the class: "What have I done?" Class responds: "You have cleaned the board!" This instantly cements the past action with visible present evidence.',
  },

  // 4. Present Perfect Continuous
  {
    id: 'pres-perf-cont',
    order: 4,
    time: 'present',
    aspect: 'perfect-continuous',
    name: '4. Present Perfect Continuous Tense',
    urdu: 'زمانہ حال مکمل جاری (استمراری)',
    sindhi: 'زمان حال مڪمل هلندڙ (ماضيءَ کان اڄ تائين هلندڙ)',
    tagline: 'Actions that began in the past, have continued without interruption, and are still continuing right now',
    color: 'indigo',
    badgeBg: 'bg-indigo-100 dark:bg-indigo-950/60',
    badgeText: 'text-indigo-800 dark:text-indigo-300',
    borderColor: 'border-indigo-500',
    timelineLabel: 'Started in Past -> Continuing Right Now',
    timelineDescription: 'Continuous duration spanning from a past anchor point into the present moment and possibly beyond.',
    formulas: {
      affirmative: 'Subject + have / has + been + V1-ing + Object + since / for + Time Expression',
      negative: 'Subject + have / has + not + been + V1-ing + Object + since / for + Time',
      interrogative: 'Have / Has + Subject + been + V1-ing + Object + since / for + Time?',
      interrogativeNegative: 'Have / Has + Subject + not + been + V1-ing + ...? (or Haven\'t / Hasn\'t + S + been + V1-ing?)',
    },
    syntaxBreakdown: {
      subject: 'I, We, You, They (have been) | He, She, It (has been)',
      auxiliary: 'have been / has been',
      mainVerb: 'V1 + -ing (working, teaching, waiting, studying)',
      objectComplement: 'Time prepositional phrase: "since [point]" or "for [duration]"',
    },
    signalWords: ['since (point of time)', 'for (period of time)', 'how long', 'all morning', 'all week', 'these days', 'lately'],
    keyRules: [
      {
        ruleTitle: 'Action Ongoing for a Continuous Duration',
        ruleDetail: 'Emphasizes the duration or continuity of an activity that started earlier.',
        example: 'Ms. Fatima has been teaching English in Sukkur for twelve years.',
      },
      {
        ruleTitle: 'Mastery of "SINCE" vs. "FOR"',
        ruleDetail: 'SINCE = Point in time (since 2018, since Monday, since 8 AM, since childhood, since Eid). FOR = Duration/length of time (for 2 hours, for 5 days, for ten years, for a long time).',
        example: 'He has been waiting since 9:00 AM (Point) vs. He has been waiting for two hours (Duration).',
      },
    ],
    stsExamTrap: 'Frequent STS Question Pattern: "He has been suffering from fever _______ last Sunday." Options: (a) for (b) from (c) since (d) in. ANSWER: (c) since! Do NOT use "from" for perfect continuous tenses in English. Another trap: With stative verbs, use Present Perfect instead: "I have known him for five years" (NOT "have been knowing").',
    pedagogyTip: 'Sindh Classroom Tip: The "SINCE vs FOR Clock": Draw a calendar on the left ("SINCE: Point = Year, Month, Day, Clock time") and an hourglass on the right ("FOR: Duration = Number of hours, days, months, years"). Have students sort cards into the two buckets.',
  },

  // 5. Past Simple
  {
    id: 'past-simple',
    order: 5,
    time: 'past',
    aspect: 'simple',
    name: '5. Past Simple (Indefinite) Tense',
    urdu: 'زمانہ ماضی مطلق (سادہ)',
    sindhi: 'زمان ماضي سادو (گذريل وقت ۾ پورو ٿيل)',
    tagline: 'Actions completed at a definite specific time or period in the past, completely detached from the present',
    color: 'amber',
    badgeBg: 'bg-amber-100 dark:bg-amber-950/60',
    badgeText: 'text-amber-800 dark:text-amber-300',
    borderColor: 'border-amber-500',
    timelineLabel: 'Finished Past Point',
    timelineDescription: 'Action took place and was completely finalized at an identified moment in the past.',
    formulas: {
      affirmative: 'Subject + V2 (Past Form: walked, wrote, taught, went) + Object',
      negative: 'Subject + did + not + V1 (Base form) + Object',
      interrogative: 'Did + Subject + V1 (Base form) + Object?',
      interrogativeNegative: 'Did + Subject + not + V1? (or Didn\'t + Subject + V1?)',
    },
    syntaxBreakdown: {
      subject: 'All Subjects (I, We, You, They, He, She, It, Plural, Singular take V2 & "did")',
      auxiliary: 'None in affirmative; "did" in negative & interrogative',
      mainVerb: 'V2 (in affirmative) -> V1 (Base form after "did / did not")',
      objectComplement: 'Specific past time marker or historical context',
    },
    signalWords: ['yesterday', 'ago (two days ago)', 'last night', 'last week', 'last year', 'in 1947', 'in ancient times', 'the other day', 'formerly', 'once upon a time'],
    keyRules: [
      {
        ruleTitle: 'Completed Past Action at a Specific Moment',
        ruleDetail: 'The time of the event is either explicitly stated or understood from context.',
        example: 'Quaid-e-Azam Muhammad Ali Jinnah founded Pakistan in 1947.',
      },
      {
        ruleTitle: 'Past Habitual Actions (often with "used to")',
        ruleDetail: 'Habits or routines in the past that are no longer true in the present.',
        example: 'In his youth, Shah Abdul Latif Bhittai traveled widely across the Sindhi landscape.',
      },
      {
        ruleTitle: 'A Sequence of Successive Past Actions',
        ruleDetail: 'Chronological series of events where one followed immediately after the other.',
        example: 'The teacher entered the room, opened the attendance register, and greeted the class.',
      },
    ],
    stsExamTrap: 'CRITICAL STS IBA Trap: "He did not went to Larkana yesterday" is INCORRECT! After "did" or "did not", the verb MUST revert to its base form V1! CORRECT: "He did not go to Larkana yesterday." Similarly: "Did you saw the news?" -> CORRECT: "Did you see the news?"',
    pedagogyTip: 'Sindh Classroom Tip: "Yesterday\'s Journal Entry": Ask students to write three things they did yesterday afternoon using irregular verbs (e.g., "I ate rice, I wrote my homework, I went to the bazaar"). Stress the change from V2 in affirmative to V1 in negative with "did not".',
  },

  // 6. Past Continuous
  {
    id: 'past-cont',
    order: 6,
    time: 'past',
    aspect: 'continuous',
    name: '6. Past Continuous (Progressive) Tense',
    urdu: 'زمانہ ماضی جاری (استمراری)',
    sindhi: 'زمان ماضي هلندڙ (ماضيءَ ۾ ڪجهه وقت جاري رهندڙ)',
    tagline: 'An action ongoing or in active progress at a specific moment in the past, or interrupted by a sudden event',
    color: 'orange',
    badgeBg: 'bg-orange-100 dark:bg-orange-950/60',
    badgeText: 'text-orange-800 dark:text-orange-300',
    borderColor: 'border-orange-500',
    timelineLabel: 'Ongoing Progress in Past Frame',
    timelineDescription: 'Action was in the middle of happening at a past milestone or when another brief action occurred.',
    formulas: {
      affirmative: 'Subject + was / were + V1-ing + Object',
      negative: 'Subject + was / were + not + V1-ing + Object',
      interrogative: 'Was / Were + Subject + V1-ing + Object?',
      interrogativeNegative: 'Was / Were + Subject + not + V1-ing? (or Wasn\'t / Weren\'t + S + V1-ing?)',
    },
    syntaxBreakdown: {
      subject: 'I, He, She, It, Singular Noun (was) | We, You, They, Plural Noun (were)',
      auxiliary: 'was / were (Past Be-Verbs)',
      mainVerb: 'V1 + -ing (Present Participle form)',
      objectComplement: 'Time clause with "while", "when", or "at that exact hour"',
    },
    signalWords: ['while', 'when', 'as', 'at that time', 'at 8:00 PM yesterday', 'all evening', 'during those days'],
    keyRules: [
      {
        ruleTitle: 'Interrupted Past Action ("While" vs. "When")',
        ruleDetail: 'A longer background action in Past Continuous is interrupted by a shorter action in Past Simple.',
        example: 'While the teacher was writing on the chalkboard, a student knocked on the door.',
      },
      {
        ruleTitle: 'Two Parallel Simultaneous Past Actions',
        ruleDetail: 'Two distinct actions taking place at the exact same time in the past.',
        example: 'While Asma was reciting Surah Yaseen, her brother was reviewing his mathematics notes.',
      },
      {
        ruleTitle: 'Action in Progress at a Given Past Hour',
        ruleDetail: 'Direct snapshot of what someone was doing at a specific clock time yesterday.',
        example: 'At 9:30 PM last night, we were preparing the lesson plan.',
      },
    ],
    stsExamTrap: 'STS Conjunction Rule: "While" is normally followed by Past Continuous ("While I was walking..."), whereas "When" is followed by Past Simple ("...when the telephone rang"). INCORRECT: "While the bell rang, we were sitting." CORRECT: "When the bell rang, we were sitting."',
    pedagogyTip: 'Sindh Classroom Tip: "The Detective Alibi Drill": The teacher poses as a police investigator: "What were you doing yesterday at 5:00 PM?" Students must answer in complete sentences: "I was helping my mother in the kitchen," reinforcing "was/were + -ing".',
  },

  // 7. Past Perfect
  {
    id: 'past-perf',
    order: 7,
    time: 'past',
    aspect: 'perfect',
    name: '7. Past Perfect Tense ("Past of the Past")',
    urdu: 'زمانہ ماضی بعید (مکمل)',
    sindhi: 'زمان ماضي مڪمل (ٻن ماضي ڪمن مان پهريون مڪمل ٿيل)',
    tagline: 'When two actions happened in the past, the earlier completed action takes Past Perfect (had + V3)',
    color: 'rose',
    badgeBg: 'bg-rose-100 dark:bg-rose-950/60',
    badgeText: 'text-rose-800 dark:text-rose-300',
    borderColor: 'border-rose-500',
    timelineLabel: 'Earlier Past -> Later Past',
    timelineDescription: 'Occurred prior to another past milestone. The foundational anchor for "before" and "after" sequences.',
    formulas: {
      affirmative: 'Subject + had + V3 (Past Participle) + Object',
      negative: 'Subject + had + not + V3 + Object',
      interrogative: 'Had + Subject + V3 + Object?',
      interrogativeNegative: 'Had + Subject + not + V3? (or Hadn\'t + Subject + V3?)',
    },
    syntaxBreakdown: {
      subject: 'All Subjects take "had" uniformly (I, We, You, They, He, She, It)',
      auxiliary: 'had',
      mainVerb: 'Past Participle (V3: died, left, completed, arrived, reached)',
      objectComplement: 'Time clause introduced by "before", "after", "when", or "by the time"',
    },
    signalWords: ['before', 'after', 'by the time', 'already', 'when', 'until that day', 'never before'],
    keyRules: [
      {
        ruleTitle: 'The Classic 2-Event Past Sequence Rule',
        ruleDetail: 'Action 1 (Earlier) = Past Perfect (had + V3). Action 2 (Later) = Past Simple (V2).',
        example: 'The patient had died before the doctor arrived. (The death happened first; the doctor came second).',
      },
      {
        ruleTitle: 'The "AFTER" Formula',
        ruleDetail: 'After + Earlier Action (had + V3), Later Action (Past Simple V2).',
        example: 'After the headmistress had addressed the assembly, the students returned to their classes.',
      },
      {
        ruleTitle: 'Third Conditional Unreal Past Regret',
        ruleDetail: 'Used in the if-clause of Type 3 conditionals to represent impossible past hypothetical wishes.',
        example: 'If they had informed us earlier, we would have arranged transport.',
      },
    ],
    stsExamTrap: 'THE #1 TESTED RULE IN SUKKUR IBA TESTS: When two actions occurred in the past, putting both in Past Simple or reversing the sequence is a fatal grammatical error. FORMULA TO MEMORIZE: "Action 1 (had + V3) + BEFORE + Action 2 (V2)" and "AFTER + Action 1 (had + V3), Action 2 (V2)".',
    pedagogyTip: 'Sindh Classroom Tip: Draw two points on a chalkboard timeline: [Point A: 8:00 AM - Train departs] and [Point B: 8:15 AM - Passengers arrive]. Show that Point A happened FIRST, therefore: "The train HAD LEFT before the passengers arrived." Visualizing two distinct timestamps prevents confusion.',
  },

  // 8. Past Perfect Continuous
  {
    id: 'past-perf-cont',
    order: 8,
    time: 'past',
    aspect: 'perfect-continuous',
    name: '8. Past Perfect Continuous Tense',
    urdu: 'زمانہ ماضی مکمل جاری (استمراری)',
    sindhi: 'زمان ماضي مڪمل هلندڙ (ماضيءَ ۾ ڪنهن ٻئي واقعي تائين جاري رهندڙ)',
    tagline: 'An action that had been ongoing for a duration in the past before another past action or event stopped or followed it',
    color: 'purple',
    badgeBg: 'bg-purple-100 dark:bg-purple-950/60',
    badgeText: 'text-purple-800 dark:text-purple-300',
    borderColor: 'border-purple-500',
    timelineLabel: 'Ongoing Past Duration -> Interrupted by Past Event',
    timelineDescription: 'Continued over an extended period in the past up to a specific past stopping point.',
    formulas: {
      affirmative: 'Subject + had + been + V1-ing + Object + since / for + Time Expression',
      negative: 'Subject + had + not + been + V1-ing + Object + since / for + Time',
      interrogative: 'Had + Subject + been + V1-ing + Object + since / for + Time?',
      interrogativeNegative: 'Had + Subject + not + been + V1-ing + ...? (or Hadn\'t + S + been + V1-ing?)',
    },
    syntaxBreakdown: {
      subject: 'All subjects take "had been" uniformly',
      auxiliary: 'had been',
      mainVerb: 'V1 + -ing (waiting, raining, working, driving)',
      objectComplement: 'Duration (for/since) + past benchmark clause (before/when)',
    },
    signalWords: ['for', 'since', 'how long', 'before', 'until', 'when (paired with past perfect context)'],
    keyRules: [
      {
        ruleTitle: 'Duration Leading Up to a Finished Past Event',
        ruleDetail: 'Highlights how long something had been continuing before a second past event occurred.',
        example: 'She had been teaching in Thatta for seven years before she got transferred to Hyderabad.',
      },
      {
        ruleTitle: 'Visible Cause of a Past Condition',
        ruleDetail: 'An action that had been ongoing and caused a visible physical or emotional state in the past.',
        example: 'The cricket pitch was soaking wet because it had been raining all night.',
      },
    ],
    stsExamTrap: 'STS Distinction: If no past benchmark event exists, use Present Perfect Continuous ("He has been working for two hours"). If the whole sentence is anchored in the past, use Past Perfect Continuous: "When I met him in 2020, he had been working as a JEST teacher for five years."',
    pedagogyTip: 'Sindh Classroom Tip: Connect cause and effect in the past: "The boy was exhausted because he had been running in the hot sun for an hour." Ask students to construct similar "was [adjective] because he had been [verb-ing]" statements.',
  },

  // 9. Future Simple
  {
    id: 'fut-simple',
    order: 9,
    time: 'future',
    aspect: 'simple',
    name: '9. Future Simple (Indefinite) Tense',
    urdu: 'زمانہ مستقبل مطلق (سادہ)',
    sindhi: 'زمان مستقبل سادو (ايندڙ وقت ۾ ٿيندڙ ڪم)',
    tagline: 'Decisions made at the moment of speaking, predictions, promises, and future facts',
    color: 'cyan',
    badgeBg: 'bg-cyan-100 dark:bg-cyan-950/60',
    badgeText: 'text-cyan-800 dark:text-cyan-300',
    borderColor: 'border-cyan-500',
    timelineLabel: 'Future Action / Decision / Prediction',
    timelineDescription: 'Anticipated to take place at some point forward from the present moment.',
    formulas: {
      affirmative: 'Subject + will / shall + V1 (Base Form) + Object (or Subject + be going to + V1)',
      negative: 'Subject + will / shall + not (won\'t / shan\'t) + V1 + Object',
      interrogative: 'Will / Shall + Subject + V1 + Object?',
      interrogativeNegative: 'Will / Shall + Subject + not + V1? (or Won\'t + Subject + V1?)',
    },
    syntaxBreakdown: {
      subject: 'I, We traditionally took "shall", now "will" is accepted for all; "shall" retains formal obligation',
      auxiliary: 'will / shall / (am/is/are going to)',
      mainVerb: 'Base Form (V1: announce, conduct, attend, join)',
      objectComplement: 'Future time expression or objective target',
    },
    signalWords: ['tomorrow', 'next week', 'next month', 'in 2027', 'soon', 'shortly', 'in a few days', 'later', 'someday'],
    keyRules: [
      {
        ruleTitle: 'Spontaneous Decision at the Moment of Speaking',
        ruleDetail: 'Decisions formulated impulsively without prior premeditation.',
        example: 'The phone is ringing. I will answer it.',
      },
      {
        ruleTitle: 'Future Prediction Based on Personal Opinion',
        ruleDetail: 'Predictions often following verbs like think, believe, expect, hope.',
        example: 'I believe the Sukkur IBA testing portal will release the results tomorrow.',
      },
      {
        ruleTitle: '"Will" vs. "Be Going To" Distinction',
        ruleDetail: '"Will" = Spontaneous decision or formal prediction. "Be going to" = Prior intention, plan, or physical evidence (e.g. Look at the black clouds; it is going to rain).',
        example: 'We are going to organize an educational seminar next Friday (Pre-planned).',
      },
    ],
    stsExamTrap: 'THE ZERO/FIRST CONDITIONAL & TIME CLAUSE TRAP: In clauses beginning with "if, when, until, unless, as soon as, before, after", NEVER use "will"! INCORRECT: "When the minister will arrive, we will welcome him." CORRECT: "When the minister arrives (Present Simple), we will welcome him (Future Simple)."',
    pedagogyTip: 'Sindh Classroom Tip: "The Election / New Year Promises Game": Have students take turns making future promises to their classmates: "If you elect me monitor, I will keep the classroom clean," illustrating the link between Present Simple conditions and Future Simple outcomes.',
  },

  // 10. Future Continuous
  {
    id: 'fut-cont',
    order: 10,
    time: 'future',
    aspect: 'continuous',
    name: '10. Future Continuous (Progressive) Tense',
    urdu: 'زمانہ مستقبل جاری (استمراری)',
    sindhi: 'زمان مستقبل هلندڙ (مستقبل ۾ ڪنهن خاص وقت تي جاري رهندڙ)',
    tagline: 'An action that will be in active progress at a specific designated hour or period in the future',
    color: 'violet',
    badgeBg: 'bg-violet-100 dark:bg-violet-950/60',
    badgeText: 'text-violet-800 dark:text-violet-300',
    borderColor: 'border-violet-500',
    timelineLabel: 'In Progress at Future Milestone',
    timelineDescription: 'At a designated future instant, the action will already be ongoing and unfinished.',
    formulas: {
      affirmative: 'Subject + will be + V1-ing (Present Participle) + Object',
      negative: 'Subject + will + not + be (won\'t be) + V1-ing + Object',
      interrogative: 'Will + Subject + be + V1-ing + Object?',
      interrogativeNegative: 'Will + Subject + not + be + V1-ing? (or Won\'t + Subject + be + V1-ing?)',
    },
    syntaxBreakdown: {
      subject: 'All subjects take "will be" uniformly',
      auxiliary: 'will be (or shall be)',
      mainVerb: 'V1 + -ing (taking, studying, traveling, presenting)',
      objectComplement: 'Specific future time reference point',
    },
    signalWords: ['at this time tomorrow', 'at 10:00 AM next Monday', 'this time next week', 'during the vacation', 'throughout tomorrow'],
    keyRules: [
      {
        ruleTitle: 'Action Ongoing at a Precise Future Moment',
        ruleDetail: 'Specifies an activity that will be midway through its execution at a future clock hour.',
        example: 'At 10:00 AM tomorrow, candidates will be taking the teaching license test in Hyderabad.',
      },
      {
        ruleTitle: 'Polite Interrogation of Future Plans',
        ruleDetail: 'Used in formal English to inquire about someone\'s schedule without pressuring them.',
        example: 'Will you be visiting the directorate office later today?',
      },
    ],
    stsExamTrap: 'Watch for the specific marker phrase: "at this time tomorrow" or "at 9:00 AM next Sunday". Whenever an exact hour is tied to a future date, STS requires Future Continuous ("will be writing"), not Future Simple ("will write").',
    pedagogyTip: 'Sindh Classroom Tip: "Time-Travel Imagination": Ask students: "Where will you be and what will you be doing at 3:00 PM tomorrow afternoon?" Prompts: "I will be studying in the library", "I will be playing cricket on the school ground".',
  },

  // 11. Future Perfect
  {
    id: 'fut-perf',
    order: 11,
    time: 'future',
    aspect: 'perfect',
    name: '11. Future Perfect Tense ("Completed by a Future Deadline")',
    urdu: 'زمانہ مستقبل مکمل',
    sindhi: 'زمان مستقبل مڪمل (مستقبل ۾ ڪنهن مدي تائين پورو ٿيندڙ)',
    tagline: 'An action that will be completed and finished before a specific deadline or event in the future',
    color: 'pink',
    badgeBg: 'bg-pink-100 dark:bg-pink-950/60',
    badgeText: 'text-pink-800 dark:text-pink-300',
    borderColor: 'border-pink-500',
    timelineLabel: 'Finished Before a Future Deadline',
    timelineDescription: 'Looks back from a future horizon to an action that will be wrapped up prior to that deadline.',
    formulas: {
      affirmative: 'Subject + will have + V3 (Past Participle) + Object',
      negative: 'Subject + will + not + have (won\'t have) + V3 + Object',
      interrogative: 'Will + Subject + have + V3 + Object?',
      interrogativeNegative: 'Will + Subject + not + have + V3? (or Won\'t + Subject + have + V3?)',
    },
    syntaxBreakdown: {
      subject: 'All subjects take "will have" uniformly',
      auxiliary: 'will have',
      mainVerb: 'Past Participle (V3: completed, graduated, revised, retired)',
      objectComplement: 'Deadline indicator: "by tomorrow", "by the end of...", "before + Present Simple"',
    },
    signalWords: ['by tomorrow', 'by next Friday', 'by the end of this month', 'by 2030', 'by then', 'before + clause (before you arrive)'],
    keyRules: [
      {
        ruleTitle: 'Completion Before a Future Deadline ("BY + Time")',
        ruleDetail: 'The magic trigger word is "BY". It guarantees that the event will end at or before that deadline.',
        example: 'By December 2026, the Sindh Education Department will have recruited 8,000 licensed teachers.',
      },
      {
        ruleTitle: 'Completion Prior to Another Future Event',
        ruleDetail: 'In a sentence with two future actions, the earlier one takes Future Perfect and the later takes Present Simple.',
        example: 'The students will have completed their revision before the final bell rings (rings = Present Simple).',
      },
    ],
    stsExamTrap: 'THE "BY + FUTURE TIME" SIGNAL: Whenever you see "by next year", "by tomorrow evening", or "by 2030" in an STS IBA test question, immediately look for "will have + V3"! INCORRECT: "By 2028, he will finish his PhD." CORRECT: "By 2028, he will have finished his PhD."',
    pedagogyTip: 'Sindh Classroom Tip: "The Career Goal Timeline": Have prospective teachers write their 5-year vision: "By 2030, I will have completed my Master\'s degree, and I will have taught over 500 secondary school students in Sindh."',
  },

  // 12. Future Perfect Continuous
  {
    id: 'fut-perf-cont',
    order: 12,
    time: 'future',
    aspect: 'perfect-continuous',
    name: '12. Future Perfect Continuous Tense',
    urdu: 'زمانہ مستقبل مکمل جاری (استمراری)',
    sindhi: 'زمان مستقبل مڪمل هلندڙ (مستقبل جي ڪنهن مدي تائين مسلسل هلندڙ)',
    tagline: 'An action ongoing for a measured duration that will continue up to a designated future milestone or anniversary',
    color: 'fuchsia',
    badgeBg: 'bg-fuchsia-100 dark:bg-fuchsia-950/60',
    badgeText: 'text-fuchsia-800 dark:text-fuchsia-300',
    borderColor: 'border-fuchsia-500',
    timelineLabel: 'Ongoing Duration Measured at Future Date',
    timelineDescription: 'Emphasizes continuous unbroken span of time calculated at a future benchmark anniversary.',
    formulas: {
      affirmative: 'Subject + will have been + V1-ing + Object + for + Duration + by + Future Benchmark',
      negative: 'Subject + will + not + have been + V1-ing + Object',
      interrogative: 'Will + Subject + have been + V1-ing + Object + for + Duration?',
      interrogativeNegative: 'Will + Subject + not + have been + V1-ing...?',
    },
    syntaxBreakdown: {
      subject: 'All subjects take "will have been" uniformly',
      auxiliary: 'will have been',
      mainVerb: 'V1 + -ing (serving, working, living, studying)',
      objectComplement: 'Pairing of "for [duration]" AND "by [future deadline]"',
    },
    signalWords: ['by next year for... years', 'by tomorrow for... hours', 'for... by the time...'],
    keyRules: [
      {
        ruleTitle: 'Duration Measured Up to a Future Milestone',
        ruleDetail: 'Used to state the cumulative length of time an ongoing activity will have reached on a future date.',
        example: 'By next November, Professor Memon will have been serving in Sindh universities for thirty years.',
      },
    ],
    stsExamTrap: 'Rare in everyday conversation, but tests like STS IBA use it to evaluate advanced grammatical stamina. It MUST include both duration ("for three hours") AND a future reference point ("by 6 PM tomorrow").',
    pedagogyTip: 'Sindh Classroom Tip: Mark an upcoming school anniversary on a calendar. Calculate together: "By December 15, our class will have been studying together for four months." This makes a rare tense deeply intuitive.',
  },
];

export interface ConjugationPreset {
  id: string;
  label: string;
  subject: string;
  baseVerb: string;
  object: string;
  context: string;
  conjugations: Record<string, string>;
}

export const CONJUGATION_PRESETS: ConjugationPreset[] = [
  {
    id: 'preset-teacher',
    label: 'Teacher writing on the chalkboard',
    subject: 'The teacher',
    baseVerb: 'write',
    object: 'a grammar lesson on the board',
    context: 'Classroom Instruction in Sindh Public School',
    conjugations: {
      'pres-simple': 'The teacher writes a grammar lesson on the board.',
      'pres-cont': 'The teacher is writing a grammar lesson on the board.',
      'pres-perf': 'The teacher has written a grammar lesson on the board.',
      'pres-perf-cont': 'The teacher has been writing a grammar lesson on the board for twenty minutes.',
      'past-simple': 'The teacher wrote a grammar lesson on the board yesterday.',
      'past-cont': 'The teacher was writing a grammar lesson on the board when the headmaster entered.',
      'past-perf': 'The teacher had written a grammar lesson on the board before the students arrived.',
      'past-perf-cont': 'The teacher had been writing a grammar lesson on the board for an hour before the break.',
      'fut-simple': 'The teacher will write a grammar lesson on the board tomorrow morning.',
      'fut-cont': 'The teacher will be writing a grammar lesson on the board at 9:00 AM tomorrow.',
      'fut-perf': 'The teacher will have written a grammar lesson on the board by the time the bell rings.',
      'fut-perf-cont': 'By next week, the teacher will have been writing lessons on this board for ten years.',
    },
  },
  {
    id: 'preset-candidate',
    label: 'Candidate preparing for Teaching License',
    subject: 'The candidate',
    baseVerb: 'prepare',
    object: 'for the Sindh Teaching License exam',
    context: 'STEDA & Sukkur IBA Licensing Preparation',
    conjugations: {
      'pres-simple': 'The candidate prepares for the Sindh Teaching License exam diligently.',
      'pres-cont': 'The candidate is preparing for the Sindh Teaching License exam right now.',
      'pres-perf': 'The candidate has prepared for the Sindh Teaching License exam thoroughly.',
      'pres-perf-cont': 'The candidate has been preparing for the Sindh Teaching License exam since January.',
      'past-simple': 'The candidate prepared for the Sindh Teaching License exam last year.',
      'past-cont': 'The candidate was preparing for the Sindh Teaching License exam all evening yesterday.',
      'past-perf': 'The candidate had prepared for the Sindh Teaching License exam before the test date was announced.',
      'past-perf-cont': 'The candidate had been preparing for the exam for six months before taking the test.',
      'fut-simple': 'The candidate will prepare for the Sindh Teaching License exam with full focus.',
      'fut-cont': 'The candidate will be preparing for the exam at this time tomorrow.',
      'fut-perf': 'The candidate will have prepared for the exam before the examination hall opens.',
      'fut-perf-cont': 'By next month, the candidate will have been preparing for the exam for an entire year.',
    },
  },
  {
    id: 'preset-rain',
    label: 'Rain falling over the Indus valley',
    subject: 'Rain',
    baseVerb: 'fall',
    object: 'heavily across the Sukkur barrage region',
    context: 'Natural Phenomenon & Weather in Sindh',
    conjugations: {
      'pres-simple': 'Rain falls heavily across the Sukkur barrage region during the monsoon.',
      'pres-cont': 'Rain is falling heavily across the Sukkur barrage region at this moment.',
      'pres-perf': 'Rain has fallen heavily across the Sukkur barrage region since morning.',
      'pres-perf-cont': 'Rain has been falling heavily across the region for three straight hours.',
      'past-simple': 'Rain fell heavily across the Sukkur barrage region last night.',
      'past-cont': 'Rain was falling heavily while the irrigation engineers inspected the gates.',
      'past-perf': 'Rain had fallen heavily before the emergency warning was issued.',
      'past-perf-cont': 'Rain had been falling heavily for two days before the canal flooded.',
      'fut-simple': 'Rain will fall heavily across the Sukkur barrage region according to the meteorological report.',
      'fut-cont': 'Rain will be falling heavily over the region at this hour tomorrow.',
      'fut-perf': 'Rain will have fallen heavily and filled the reservoir by tomorrow evening.',
      'fut-perf-cont': 'By midnight, rain will have been falling continuously for twenty-four hours.',
    },
  },
];

export interface ExamDrillQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  testedTense: string;
  ruleExplanation: string;
}

export const STS_TENSE_DRILL: ExamDrillQuestion[] = [
  {
    id: 'drill-1',
    question: 'The train _______ the station before we reached the platform.',
    options: ['left', 'has left', 'had left', 'was leaving'],
    correctIndex: 2,
    testedTense: 'Past Perfect (Earlier Past Action)',
    ruleExplanation: 'When two actions took place in the past, the earlier action (the train leaving) MUST take Past Perfect ("had left"), while the subsequent action takes Past Simple ("reached").',
  },
  {
    id: 'drill-2',
    question: 'He did not _______ to the coaching center yesterday.',
    options: ['went', 'go', 'gone', 'going'],
    correctIndex: 1,
    testedTense: 'Past Simple (Did + V1 Base Form)',
    ruleExplanation: 'In negative and interrogative Past Simple statements, the auxiliary "did" absorbs the past tense, requiring the main verb to stay in its base form V1 ("did not go", NEVER "did not went").',
  },
  {
    id: 'drill-3',
    question: 'She has been serving as a secondary school headmistress _______ 2012.',
    options: ['for', 'since', 'from', 'in'],
    correctIndex: 1,
    testedTense: 'Present Perfect Continuous (Since vs. For)',
    ruleExplanation: '"Since" indicates a specific starting point in time (2012, Monday, 8 AM, childhood) in perfect tenses, while "for" is reserved strictly for a quantity or duration of time.',
  },
  {
    id: 'drill-4',
    question: 'This ancestral library _______ to my grandfather.',
    options: ['is belonging', 'belongs', 'has been belonging', 'was belonging'],
    correctIndex: 1,
    testedTense: 'Present Simple (Stative Verb Non-Continuous Rule)',
    ruleExplanation: '"Belong" is a stative verb of ownership and cannot be used in continuous/progressive (-ing) forms. It takes Present Simple ("belongs").',
  },
  {
    id: 'drill-5',
    question: 'When the Chief Minister _______ tomorrow, the school children will present a cultural tableau.',
    options: ['will arrive', 'arrives', 'arrived', 'is arriving'],
    correctIndex: 1,
    testedTense: 'Present Simple in Future Subordinate Time Clause',
    ruleExplanation: 'In time clauses starting with "when, if, as soon as, unless, until, before", English grammar forbids the modal "will". The subordinate clause takes Present Simple ("arrives"), while the main clause takes Future Simple ("will present").',
  },
  {
    id: 'drill-6',
    question: 'By the end of this academic session, we _______ the entire Sindh textbook syllabus.',
    options: ['will complete', 'will have completed', 'completed', 'had completed'],
    correctIndex: 1,
    testedTense: 'Future Perfect (Deadline Marker: "By + Time")',
    ruleExplanation: 'The trigger phrase "By the end of this session" establishes a future deadline, which strictly demands Future Perfect ("will have + V3: will have completed").',
  },
  {
    id: 'drill-7',
    question: 'While the teacher _______ the lesson on the board, the school inspector arrived.',
    options: ['explained', 'is explaining', 'was explaining', 'has explained'],
    correctIndex: 2,
    testedTense: 'Past Continuous (Interrupted Action with "While")',
    ruleExplanation: 'A longer ongoing action in the past introduced by "while" takes Past Continuous ("was explaining"), which is interrupted by a brief sudden event in Past Simple ("arrived").',
  },
  {
    id: 'drill-8',
    question: 'If they _______ hard last year, they would have passed the teaching license examination.',
    options: ['worked', 'had worked', 'have worked', 'would work'],
    correctIndex: 1,
    testedTense: 'Third Conditional (Unreal Past Regret: If + Past Perfect)',
    ruleExplanation: 'Type 3 Conditional expresses unreal past regrets. Formula: If + Past Perfect (had worked), would have + V3 (would have passed).',
  },
];

export const InteractiveTensesExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'explorer' | 'conjugator' | 'matrix' | 'drill'>('explorer');
  const [selectedTenseId, setSelectedTenseId] = useState<string>('pres-simple');
  const [timeFilter, setTimeFilter] = useState<'all' | TimeCategory>('all');
  const [aspectFilter, setAspectFilter] = useState<'all' | AspectCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Conjugator State
  const [selectedPresetId, setSelectedPresetId] = useState<string>('preset-teacher');

  // Drill State
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showQuizExplanations, setShowQuizExplanations] = useState<Record<string, boolean>>({});

  const filteredTenses = ALL_12_TENSES.filter((t) => {
    const matchesTime = timeFilter === 'all' || t.time === timeFilter;
    const matchesAspect = aspectFilter === 'all' || t.aspect === aspectFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.urdu.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.sindhi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.formulas.affirmative.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.signalWords.some((sw) => sw.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTime && matchesAspect && matchesSearch;
  });

  const currentTense =
    ALL_12_TENSES.find((t) => t.id === selectedTenseId) || ALL_12_TENSES[0];

  const currentTenseIndex = ALL_12_TENSES.findIndex((t) => t.id === currentTense.id);

  const handleNextTense = () => {
    const nextIdx = (currentTenseIndex + 1) % ALL_12_TENSES.length;
    setSelectedTenseId(ALL_12_TENSES[nextIdx].id);
  };

  const handlePrevTense = () => {
    const prevIdx = (currentTenseIndex - 1 + ALL_12_TENSES.length) % ALL_12_TENSES.length;
    setSelectedTenseId(ALL_12_TENSES[prevIdx].id);
  };

  const selectedPreset =
    CONJUGATION_PRESETS.find((p) => p.id === selectedPresetId) || CONJUGATION_PRESETS[0];

  const handleQuizSelect = (qId: string, optIdx: number) => {
    setQuizAnswers((prev) => ({ ...prev, [qId]: optIdx }));
    setShowQuizExplanations((prev) => ({ ...prev, [qId]: true }));
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setShowQuizExplanations({});
  };

  const score = Object.entries(quizAnswers).filter(([qId, ans]) => {
    const q = STS_TENSE_DRILL.find((item) => item.id === qId);
    return q && q.correctIndex === ans;
  }).length;

  return (
    <div
      id="interactive-tenses-studio"
      className="p-4 sm:p-6 rounded-3xl bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border border-indigo-800/60 shadow-2xl space-y-6 my-6 overflow-hidden relative"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Studio Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-800/60 pb-5">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-black uppercase tracking-wider border border-indigo-400/30 flex items-center gap-1.5 shadow-xs">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              <span>Module Notes 1.2 Interactive Studio</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[11px] font-bold border border-amber-400/30">
              STEDA &amp; Sukkur IBA Ready
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
            <span>The Complete 12 English Tenses Architecture</span>
            <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
          </h3>
          <p className="text-xs sm:text-sm text-indigo-200/90 max-w-3xl leading-relaxed">
            Master every tense aspect with affirmative, negative, interrogative formulas, timeline visualizations,
            Urdu / Sindhi pedagogical anchors (<span className="text-amber-300 font-semibold">زمان حال، ماضي، ۽ مستقبل</span>),
            and high-yield traps tested in Sindh Teaching License exams.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-950/80 p-1.5 rounded-2xl border border-indigo-800/60 self-start md:self-auto shrink-0 shadow-inner">
          <button
            onClick={() => setActiveTab('explorer')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'explorer'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-indigo-200 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>12 Tenses Cards</span>
          </button>
          <button
            onClick={() => setActiveTab('conjugator')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'conjugator'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-indigo-200 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Live Conjugator</span>
          </button>
          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'matrix'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-indigo-200 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>3x4 Matrix</span>
          </button>
          <button
            onClick={() => setActiveTab('drill')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'drill'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'text-amber-300 hover:text-amber-200 hover:bg-slate-800/60'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>STS IBA Drill</span>
          </button>
        </div>
      </div>

      {/* TAB 1: 12 TENSES DEEP-DIVE EXPLORER */}
      {activeTab === 'explorer' && (
        <div className="space-y-6">
          {/* Filter & Search Bar */}
          <div className="space-y-3 bg-slate-950/60 p-3.5 sm:p-4 rounded-2xl border border-indigo-900/60">
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
              {/* Time Filters */}
              <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-indigo-400" /> Time:
                </span>
                {(['all', 'present', 'past', 'future'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTimeFilter(t)}
                    className={`px-3 py-1 rounded-xl text-xs font-extrabold capitalize transition cursor-pointer shrink-0 ${
                      timeFilter === t
                        ? 'bg-indigo-500 text-white shadow-xs'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {t === 'all' ? 'All (12)' : t}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search formula or signal word..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-hidden focus:border-indigo-500 transition"
                />
              </div>
            </div>

            {/* Aspect Sub-Filters */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
                <Layers className="w-3 h-3 text-indigo-400" /> Aspect:
              </span>
              {(['all', 'simple', 'continuous', 'perfect', 'perfect-continuous'] as const).map((a) => (
                <button
                  key={a}
                  onClick={() => setAspectFilter(a)}
                  className={`px-2.5 py-0.5 rounded-lg text-[11px] font-semibold transition cursor-pointer shrink-0 ${
                    aspectFilter === a
                      ? 'bg-slate-200 text-slate-900 font-bold'
                      : 'bg-slate-900/80 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {a === 'all' ? 'All Aspects' : a.replace('-', ' ')}
                </button>
              ))}
            </div>

            {/* Tense Quick-Selector Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 pt-2 border-t border-slate-800/80">
              {filteredTenses.map((tense) => {
                const isSelected = tense.id === currentTense.id;
                return (
                  <button
                    key={tense.id}
                    onClick={() => setSelectedTenseId(tense.id)}
                    className={`p-2 rounded-xl text-left transition cursor-pointer border flex flex-col gap-0.5 relative ${
                      isSelected
                        ? 'bg-indigo-900/80 border-indigo-400 text-white shadow-md'
                        : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-bold">
                      <span className="truncate">{tense.name.replace(/^\d+\.\s*/, '')}</span>
                      <span
                        className={`text-[9px] uppercase px-1.5 py-0.2 rounded font-black tracking-wider ${
                          tense.time === 'present'
                            ? 'bg-emerald-500/20 text-emerald-300'
                            : tense.time === 'past'
                            ? 'bg-amber-500/20 text-amber-300'
                            : 'bg-cyan-500/20 text-cyan-300'
                        }`}
                      >
                        {tense.time}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400 truncate flex items-center gap-1 font-mono">
                      <span>{tense.urdu}</span> • <span>{tense.sindhi}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE TENSE FULL DETAIL CARD */}
          <div className="bg-slate-900/90 rounded-3xl border border-indigo-800/70 p-5 sm:p-7 space-y-6 shadow-xl relative">
            {/* Tense Header Banner */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-xl bg-indigo-500/20 text-indigo-300 text-xs font-black uppercase tracking-wider border border-indigo-400/30">
                    Tense {currentTense.order} of 12
                  </span>
                  <span className="px-2.5 py-0.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold capitalize border border-slate-700">
                    Time: {currentTense.time}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold capitalize border border-slate-700">
                    Aspect: {currentTense.aspect.replace('-', ' ')}
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                  {currentTense.name}
                </h4>
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold text-amber-300/90">
                  <span className="bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                    اردو: <span className="font-bold text-amber-200">{currentTense.urdu}</span>
                  </span>
                  <span className="bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20 text-emerald-300">
                    سنڌي: <span className="font-bold text-emerald-200">{currentTense.sindhi}</span>
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 italic pt-1">
                  &ldquo;{currentTense.tagline}&rdquo;
                </p>
              </div>

              {/* Prev / Next Controls */}
              <div className="flex items-center gap-2 self-end lg:self-center shrink-0">
                <button
                  onClick={handlePrevTense}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-indigo-600 text-white transition cursor-pointer border border-slate-700 flex items-center gap-1 text-xs font-bold"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Prev Tense</span>
                </button>
                <button
                  onClick={handleNextTense}
                  className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition cursor-pointer border border-indigo-400 flex items-center gap-1 text-xs font-bold shadow-md"
                >
                  <span className="hidden sm:inline">Next Tense</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Timeline Bar & Mental Model */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span className="flex items-center gap-1.5 text-indigo-300">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Timeline Aspect &amp; Mental Model</span>
                </span>
                <span className="text-amber-300 font-semibold">{currentTense.timelineLabel}</span>
              </div>

              {/* Interactive Timeline Visual Representation */}
              <div className="relative pt-2 pb-2">
                <div className="h-2 w-full bg-slate-800 rounded-full relative overflow-hidden">
                  {/* Highlight segment depending on time */}
                  {currentTense.time === 'past' && (
                    <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-amber-500 rounded-full animate-pulse" />
                  )}
                  {currentTense.time === 'present' && (
                    <div className="absolute left-1/3 top-0 bottom-0 w-1/3 bg-emerald-500 rounded-full animate-pulse" />
                  )}
                  {currentTense.time === 'future' && (
                    <div className="absolute left-2/3 top-0 bottom-0 w-1/3 bg-cyan-500 rounded-full animate-pulse" />
                  )}
                </div>

                {/* Timeline Axis Labels */}
                <div className="flex justify-between text-[10px] font-bold text-slate-400 pt-2 font-mono">
                  <div className={`flex flex-col items-start ${currentTense.time === 'past' ? 'text-amber-300 font-black' : ''}`}>
                    <span>◀ PAST (ماضي)</span>
                    <span className="text-[9px] font-normal text-slate-500">Before Now</span>
                  </div>
                  <div className={`flex flex-col items-center ${currentTense.time === 'present' ? 'text-emerald-300 font-black' : ''}`}>
                    <span>NOW (حال) ●</span>
                    <span className="text-[9px] font-normal text-slate-500">Moment of Speech</span>
                  </div>
                  <div className={`flex flex-col items-end ${currentTense.time === 'future' ? 'text-cyan-300 font-black' : ''}`}>
                    <span>FUTURE (مستقبل) ▶</span>
                    <span className="text-[9px] font-normal text-slate-500">Ahead of Now</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                <span className="font-bold text-indigo-300">How to Visualize:</span> {currentTense.timelineDescription}
              </p>
            </div>

            {/* Core Structural Formulas Box (The Golden Equations) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                  <span>The 4 Grammatical Formulas (Affirmative, Negative, Interrogative)</span>
                </h5>
                <span className="text-[11px] text-indigo-300 font-semibold">Strict Standard Syntax</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Affirmative (+) */}
                <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/50 transition space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Affirmative (+) [هاڪاري / مثبت]</span>
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase font-mono">Statement</span>
                  </div>
                  <div className="text-xs font-mono text-white bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    {currentTense.formulas.affirmative}
                  </div>
                </div>

                {/* Negative (-) */}
                <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-rose-500/50 transition space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-rose-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span>Negative (-) [ناڪاري / منفی]</span>
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase font-mono">Denial</span>
                  </div>
                  <div className="text-xs font-mono text-white bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    {currentTense.formulas.negative}
                  </div>
                </div>

                {/* Interrogative (?) */}
                <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-sky-500/50 transition space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-sky-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-sky-500" />
                      <span>Interrogative (?) [سواليه / استفهامیہ]</span>
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase font-mono">Question</span>
                  </div>
                  <div className="text-xs font-mono text-white bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    {currentTense.formulas.interrogative}
                  </div>
                </div>

                {/* Interrogative-Negative (?-) */}
                <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/50 transition space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-amber-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>Interrogative-Negative (?-) [سواليه ناڪاري]</span>
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase font-mono">Negative Query</span>
                  </div>
                  <div className="text-xs font-mono text-white bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    {currentTense.formulas.interrogativeNegative}
                  </div>
                </div>
              </div>
            </div>

            {/* Syntax Breakdown Anatomy Pills */}
            <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-800/60 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>Structural Syntax Ingredients (Subject + Auxiliary + Verb Form)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">1. Subject Range:</span>
                  <div className="text-slate-200 font-semibold">{currentTense.syntaxBreakdown.subject}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">2. Auxiliary / Helping:</span>
                  <div className="text-amber-300 font-mono font-bold">{currentTense.syntaxBreakdown.auxiliary}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">3. Verb Form:</span>
                  <div className="text-emerald-300 font-mono font-bold">{currentTense.syntaxBreakdown.mainVerb}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">4. Typical Adverbs:</span>
                  <div className="text-cyan-300 font-semibold">{currentTense.syntaxBreakdown.objectComplement}</div>
                </div>
              </div>
            </div>

            {/* Signal Words & Time Adverbs */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
                <span>Key Time Signal Words (Test Clues in Sukkur IBA Papers)</span>
                <span className="text-[11px] text-amber-300">{currentTense.signalWords.length} Common Clues</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentTense.signalWords.map((word, wIdx) => (
                  <span
                    key={wIdx}
                    className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-700 text-slate-200 text-xs font-mono font-semibold hover:border-indigo-400 transition"
                  >
                    ⚡ {word}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Functional Rules & Real Sindh Examples */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>When to Use: Core Functional Rules &amp; Classroom Contexts</span>
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentTense.keyRules.map((kr, kIdx) => (
                  <div
                    key={kIdx}
                    className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2"
                  >
                    <div className="font-bold text-xs sm:text-sm text-indigo-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      <span>{kr.ruleTitle}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{kr.ruleDetail}</p>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800/80 text-xs font-semibold text-emerald-300 italic">
                      Example: &ldquo;{kr.example}&rdquo;
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* STS IBA Exam Pitfall / Trap Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-rose-950/40 border border-rose-800/80 space-y-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-rose-300 uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>Sukkur IBA &amp; STEDA Examination Pitfall Alert</span>
              </div>
              <p className="text-xs sm:text-sm text-rose-100 leading-relaxed font-medium">
                {currentTense.stsExamTrap}
              </p>
            </div>

            {/* Classroom Pedagogy Tip */}
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/40 border border-emerald-800/80 space-y-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-300 uppercase tracking-wider">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Sindh BPS-16/17 Classroom Teaching Strategy</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                {currentTense.pedagogyTip}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: LIVE SENTENCE CONJUGATOR / TENSE SHIFTER */}
      {activeTab === 'conjugator' && (
        <div className="space-y-6">
          {/* Preset Selector */}
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-indigo-900/60 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Select a Base Sentence to Conjugate Across All 12 Tenses:</span>
              </span>
              <span className="text-[11px] text-slate-400 font-semibold">Real-time Syntax Morphing</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {CONJUGATION_PRESETS.map((preset) => {
                const isSelected = preset.id === selectedPreset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => setSelectedPresetId(preset.id)}
                    className={`p-3 rounded-xl text-left border transition cursor-pointer space-y-1 ${
                      isSelected
                        ? 'bg-indigo-900/80 border-indigo-400 text-white shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800/80'
                    }`}
                  >
                    <div className="text-xs font-bold">{preset.label}</div>
                    <div className="text-[10px] text-slate-400 truncate">{preset.context}</div>
                    <div className="text-[11px] font-mono text-emerald-400 truncate pt-1">
                      Base: {preset.subject} + {preset.baseVerb}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Preset Conjugation Output */}
          <div className="bg-slate-900/90 rounded-3xl border border-indigo-800/60 p-5 sm:p-6 space-y-5">
            <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-amber-400">
                  Target Sentence Transformation:
                </span>
                <h4 className="text-lg sm:text-xl font-black text-white">
                  &ldquo;{selectedPreset.subject} [{selectedPreset.baseVerb}] {selectedPreset.object}&rdquo;
                </h4>
              </div>
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold self-start sm:self-auto border border-indigo-400/30">
                12 Form Transformations
              </span>
            </div>

            {/* Time Groups (Present 4, Past 4, Future 4) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* PRESENT GROUP */}
              <div className="space-y-3 bg-slate-950/70 p-4 rounded-2xl border border-emerald-900/50">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-800 text-emerald-400 font-black text-sm">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>PRESENT TENSES (زمان حال)</span>
                </div>
                {ALL_12_TENSES.filter((t) => t.time === 'present').map((tense) => (
                  <div key={tense.id} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-300">
                      <span>{tense.name.replace(/^\d+\.\s*/, '')}</span>
                      <span className="text-[9px] text-emerald-400 font-mono">{tense.sindhi}</span>
                    </div>
                    <div className="text-xs font-semibold text-emerald-200 leading-relaxed">
                      {selectedPreset.conjugations[tense.id]}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 pt-0.5">
                      Formula: {tense.formulas.affirmative.split('+')[1] || tense.formulas.affirmative}
                    </div>
                  </div>
                ))}
              </div>

              {/* PAST GROUP */}
              <div className="space-y-3 bg-slate-950/70 p-4 rounded-2xl border border-amber-900/50">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-800 text-amber-400 font-black text-sm">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>PAST TENSES (زمان ماضي)</span>
                </div>
                {ALL_12_TENSES.filter((t) => t.time === 'past').map((tense) => (
                  <div key={tense.id} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-300">
                      <span>{tense.name.replace(/^\d+\.\s*/, '')}</span>
                      <span className="text-[9px] text-amber-400 font-mono">{tense.sindhi}</span>
                    </div>
                    <div className="text-xs font-semibold text-amber-200 leading-relaxed">
                      {selectedPreset.conjugations[tense.id]}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 pt-0.5">
                      Formula: {tense.formulas.affirmative.split('+')[1] || tense.formulas.affirmative}
                    </div>
                  </div>
                ))}
              </div>

              {/* FUTURE GROUP */}
              <div className="space-y-3 bg-slate-950/70 p-4 rounded-2xl border border-cyan-900/50">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-800 text-cyan-400 font-black text-sm">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>FUTURE TENSES (زمان مستقبل)</span>
                </div>
                {ALL_12_TENSES.filter((t) => t.time === 'future').map((tense) => (
                  <div key={tense.id} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-300">
                      <span>{tense.name.replace(/^\d+\.\s*/, '')}</span>
                      <span className="text-[9px] text-cyan-400 font-mono">{tense.sindhi}</span>
                    </div>
                    <div className="text-xs font-semibold text-cyan-200 leading-relaxed">
                      {selectedPreset.conjugations[tense.id]}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 pt-0.5">
                      Formula: {tense.formulas.affirmative.split('+')[1] || tense.formulas.affirmative}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: 3x4 MASTER TENSE MATRIX */}
      {activeTab === 'matrix' && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-indigo-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h4 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-indigo-400" />
                <span>The 3 × 4 Master Tense Matrix (At-a-Glance)</span>
              </h4>
              <p className="text-xs text-slate-300">
                Compare auxiliary verbs and verb forms across all 3 Time categories and 4 Aspects simultaneously.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 shrink-0">
              High-Yield Summary
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-950 text-[11px] font-black uppercase tracking-wider text-indigo-300 border-b border-slate-800">
                  <th className="p-3 border-r border-slate-800 w-36">Aspect / Mode</th>
                  <th className="p-3 border-r border-slate-800 text-emerald-400">Present (زمان حال)</th>
                  <th className="p-3 border-r border-slate-800 text-amber-400">Past (زمان ماضي)</th>
                  <th className="p-3 text-cyan-400">Future (زمان مستقبل)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-xs">
                {/* SIMPLE */}
                <tr className="hover:bg-slate-800/40 transition">
                  <td className="p-3 font-bold text-slate-200 border-r border-slate-800 bg-slate-950/40">
                    <div>Simple / Indefinite</div>
                    <div className="text-[10px] text-slate-400 font-normal">عادت / سادو</div>
                  </td>
                  <td className="p-3 border-r border-slate-800 space-y-1">
                    <div className="font-mono font-bold text-emerald-300">V1 (or V1 + s/es)</div>
                    <div className="text-[10px] text-slate-400">Aux: do / does (neg/interrog)</div>
                    <div className="text-[11px] text-slate-300 italic">&ldquo;He writes a letter.&rdquo;</div>
                  </td>
                  <td className="p-3 border-r border-slate-800 space-y-1">
                    <div className="font-mono font-bold text-amber-300">V2 (Past Form)</div>
                    <div className="text-[10px] text-slate-400">Aux: did + V1 (neg/interrog)</div>
                    <div className="text-[11px] text-slate-300 italic">&ldquo;He wrote a letter.&rdquo;</div>
                  </td>
                  <td className="p-3 space-y-1">
                    <div className="font-mono font-bold text-cyan-300">will / shall + V1</div>
                    <div className="text-[10px] text-slate-400">Aux: will / shall</div>
                    <div className="text-[11px] text-slate-300 italic">&ldquo;He will write a letter.&rdquo;</div>
                  </td>
                </tr>

                {/* CONTINUOUS */}
                <tr className="hover:bg-slate-800/40 transition">
                  <td className="p-3 font-bold text-slate-200 border-r border-slate-800 bg-slate-950/40">
                    <div>Continuous / Progressive</div>
                    <div className="text-[10px] text-slate-400 font-normal">جاری / هلندڙ</div>
                  </td>
                  <td className="p-3 border-r border-slate-800 space-y-1">
                    <div className="font-mono font-bold text-emerald-300">is / am / are + V1-ing</div>
                    <div className="text-[10px] text-slate-400">Marker: now, at present, Look!</div>
                    <div className="text-[11px] text-slate-300 italic">&ldquo;He is writing a letter.&rdquo;</div>
                  </td>
                  <td className="p-3 border-r border-slate-800 space-y-1">
                    <div className="font-mono font-bold text-amber-300">was / were + V1-ing</div>
                    <div className="text-[10px] text-slate-400">Marker: while, when, at 8 PM</div>
                    <div className="text-[11px] text-slate-300 italic">&ldquo;He was writing a letter.&rdquo;</div>
                  </td>
                  <td className="p-3 space-y-1">
                    <div className="font-mono font-bold text-cyan-300">will be + V1-ing</div>
                    <div className="text-[10px] text-slate-400">Marker: at this time tomorrow</div>
                    <div className="text-[11px] text-slate-300 italic">&ldquo;He will be writing a letter.&rdquo;</div>
                  </td>
                </tr>

                {/* PERFECT */}
                <tr className="hover:bg-slate-800/40 transition">
                  <td className="p-3 font-bold text-slate-200 border-r border-slate-800 bg-slate-950/40">
                    <div>Perfect</div>
                    <div className="text-[10px] text-slate-400 font-normal">مکمل / پورو ٿيل</div>
                  </td>
                  <td className="p-3 border-r border-slate-800 space-y-1">
                    <div className="font-mono font-bold text-emerald-300">have / has + V3</div>
                    <div className="text-[10px] text-slate-400">Marker: already, just, yet, ever</div>
                    <div className="text-[11px] text-slate-300 italic">&ldquo;He has written a letter.&rdquo;</div>
                  </td>
                  <td className="p-3 border-r border-slate-800 space-y-1">
                    <div className="font-mono font-bold text-amber-300">had + V3</div>
                    <div className="text-[10px] text-slate-400">Marker: before, after, by the time</div>
                    <div className="text-[11px] text-slate-300 italic">&ldquo;He had written a letter.&rdquo;</div>
                  </td>
                  <td className="p-3 space-y-1">
                    <div className="font-mono font-bold text-cyan-300">will have + V3</div>
                    <div className="text-[10px] text-slate-400">Marker: by tomorrow, by 2028</div>
                    <div className="text-[11px] text-slate-300 italic">&ldquo;He will have written a letter.&rdquo;</div>
                  </td>
                </tr>

                {/* PERFECT CONTINUOUS */}
                <tr className="hover:bg-slate-800/40 transition">
                  <td className="p-3 font-bold text-slate-200 border-r border-slate-800 bg-slate-950/40">
                    <div>Perfect Continuous</div>
                    <div className="text-[10px] text-slate-400 font-normal">مکمل جاری / هلندڙ</div>
                  </td>
                  <td className="p-3 border-r border-slate-800 space-y-1">
                    <div className="font-mono font-bold text-emerald-300">have/has been + V1-ing</div>
                    <div className="text-[10px] text-slate-400">Marker: since (point), for (duration)</div>
                    <div className="text-[11px] text-slate-300 italic">&ldquo;He has been writing for an hour.&rdquo;</div>
                  </td>
                  <td className="p-3 border-r border-slate-800 space-y-1">
                    <div className="font-mono font-bold text-amber-300">had been + V1-ing</div>
                    <div className="text-[10px] text-slate-400">Marker: for/since before a past point</div>
                    <div className="text-[11px] text-slate-300 italic">&ldquo;He had been writing for an hour.&rdquo;</div>
                  </td>
                  <td className="p-3 space-y-1">
                    <div className="font-mono font-bold text-cyan-300">will have been + V1-ing</div>
                    <div className="text-[10px] text-slate-400">Marker: by next year for... years</div>
                    <div className="text-[11px] text-slate-300 italic">&ldquo;He will have been writing...&rdquo;</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: SUKKUR IBA & STEDA EXAM TENSE DRILL */}
      {activeTab === 'drill' && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>STS &amp; STEDA Exam Simulator</span>
              </span>
              <h4 className="text-base sm:text-lg font-black text-white">
                Sukkur IBA High-Yield Tenses Diagnostic Drill (8 Questions)
              </h4>
              <p className="text-xs text-amber-200/90">
                Direct question models extracted from past Sindh Teaching License (HST/JEST/PST) grammar papers.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-amber-500/40 text-center">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Your Score</div>
                <div className="text-base font-black text-amber-400">
                  {score} / {STS_TENSE_DRILL.length}
                </div>
              </div>
              <button
                onClick={resetQuiz}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer border border-slate-700"
                title="Reset Quiz"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {STS_TENSE_DRILL.map((q, idx) => {
              const selectedOpt = quizAnswers[q.id];
              const isAnswered = selectedOpt !== undefined;
              const isCorrect = isAnswered && selectedOpt === q.correctIndex;

              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-2xl border transition space-y-3 ${
                    !isAnswered
                      ? 'bg-slate-900/80 border-slate-800'
                      : isCorrect
                      ? 'bg-emerald-950/40 border-emerald-600/80 shadow-emerald-900/20'
                      : 'bg-rose-950/40 border-rose-600/80 shadow-rose-900/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-indigo-600/60 text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {q.testedTense}
                      </span>
                    </div>
                    {isAnswered && (
                      <span
                        className={`text-xs font-black flex items-center gap-1 ${
                          isCorrect ? 'text-emerald-400' : 'text-rose-400'
                        }`}
                      >
                        {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                        <span>{isCorrect ? 'Correct!' : 'Incorrect'}</span>
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm font-bold text-white leading-relaxed">
                    {q.question}
                  </p>

                  {/* Options */}
                  <div className="grid grid-cols-2 gap-2">
                    {q.options.map((opt, oIdx) => {
                      const isOptionSelected = selectedOpt === oIdx;
                      const isOptionCorrect = q.correctIndex === oIdx;

                      let btnStyle = 'bg-slate-950/80 border-slate-800 text-slate-200 hover:border-indigo-500';
                      if (isAnswered) {
                        if (isOptionCorrect) {
                          btnStyle = 'bg-emerald-900/90 border-emerald-500 text-emerald-100 font-bold';
                        } else if (isOptionSelected) {
                          btnStyle = 'bg-rose-900/90 border-rose-500 text-rose-100 font-bold';
                        } else {
                          btnStyle = 'bg-slate-950/40 border-slate-900 text-slate-500 opacity-60';
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={isAnswered}
                          onClick={() => handleQuizSelect(q.id, oIdx)}
                          className={`p-2 rounded-xl text-xs text-left border transition cursor-pointer flex items-center gap-2 ${btnStyle}`}
                        >
                          <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px] font-bold shrink-0">
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span className="truncate">{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Detailed Explanation */}
                  {showQuizExplanations[q.id] && (
                    <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800/80 text-xs space-y-1 animate-fadeIn">
                      <div className="font-bold text-amber-300 flex items-center gap-1">
                        <Info className="w-3.5 h-3.5" />
                        <span>STS Rule Explanation:</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed text-[11px]">
                        {q.ruleExplanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
