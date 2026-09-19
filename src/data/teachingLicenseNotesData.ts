export interface QuickQuizItem {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ConceptBlock {
  conceptTitle: string;
  explanation?: string;
  keyTerms?: { term: string; definition: string }[];
  bulletPoints?: string[];
}

export interface ComparisonTable {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface LicenseTopicNote {
  id: string;
  topicNumber: string;
  title: string;
  readTime: string;
  summary: string;
  highYieldAlert: string;
  concepts: ConceptBlock[];
  comparisonTable?: ComparisonTable;
  classroomApplication?: string;
  mnemonicAid?: string;
  frequentExamQuestions: { question: string; answer: string }[];
  quickQuiz: QuickQuizItem[];
}

export interface LicensePartModule {
  id: string;
  partNumber: number;
  partCategory: 'Part I: Content Knowledge (50%)' | 'Part II: Pedagogical Content Knowledge (50%)';
  subjectName: string;
  weightage: string;
  marks: number;
  targetLevel: string;
  iconName: string;
  themeColor: string;
  badgeBg: string;
  badgeText: string;
  description: string;
  topics: LicenseTopicNote[];
}

export const TEACHING_LICENSE_PARTS: LicensePartModule[] = [
  // =========================================================================
  // PART I: CONTENT KNOWLEDGE (50 MARKS / 50%) — CLASS 1 TO 8 DCAR CURRICULUM
  // =========================================================================

  // -------------------------------------------------------------------------
  // MODULE 1: ENGLISH LANGUAGE (10 MARKS)
  // -------------------------------------------------------------------------
  {
    id: 'tl-part-1-english',
    partNumber: 1,
    partCategory: 'Part I: Content Knowledge (50%)',
    subjectName: 'English Language',
    weightage: '10 Marks (10%)',
    marks: 10,
    targetLevel: 'Class 1 to 8 DCAR Sindh Textbook Curriculum',
    iconName: 'BookOpen',
    themeColor: 'from-blue-600 to-cyan-600',
    badgeBg: 'bg-blue-100 dark:bg-blue-950/60',
    badgeText: 'text-blue-700 dark:text-blue-300',
    description: 'Mastery of foundational English language structures including subject-verb concord, prepositional phrases, voice transformation, reporting verbs, idiomatic expressions, and sentence clause analysis.',
    topics: [
      {
        id: 'eng-topic-1',
        topicNumber: '1.1',
        title: 'Parts of Speech Master Blueprint (All 8 Core Classes + Determiners)',
        readTime: '10 min read',
        summary: 'Comprehensive one-by-one breakdown of all eight English parts of speech (Nouns, Pronouns, Verbs, Adjectives, Adverbs, Prepositions, Conjunctions, Interjections) and Determiners, detailing classification rules, syntactic positions, and high-yield Sukkur IBA exam traps.',
        highYieldAlert: 'STEDA Chameleon Words Alert: A word does NOT possess a fixed part of speech in isolation; its classification is strictly determined by its FUNCTION in a specific sentence. Example: "fast" is an Adjective in "She took the fast train", but an Adverb in "He ran fast". "After" is a Preposition in "after the bell", an Adverb in "He arrived shortly after", and a Conjunction in "after he left". Sukkur IBA tests this functional distinction heavily!',
        concepts: [
          {
            conceptTitle: '1. Nouns & Pronouns — The Nominal System (Naming & Substituting)',
            explanation: 'Nouns name entities, ideas, and states, while Pronouns replace nouns to avoid awkward repetition. Both serve as subjects, objects, and complements in English clauses.',
            bulletPoints: [
              'Noun Classes: Proper (capitalized, unique: Sukkur, Mohenjo-daro), Common (general: teacher, school), Collective (unified group: jury, faculty, committee), Abstract (intangible: honesty, pedagogy, wisdom), and Material (substances: iron, cotton, gold).',
              'Countable vs. Uncountable Nouns: Uncountable nouns (advice, luggage, furniture, information, scenery) NEVER take indefinite articles ("an advice" ❌) or plural "-s" ("furnitures" ❌). Use partitives: "a piece of advice", "items of luggage".',
              'Gerunds as Nouns: An -ing verb form acting as a subject or direct object is a Gerund / Verbal Noun (e.g., "Teaching is a vocation", "She enjoys reading").',
              'Pronoun Classification: Personal (Subject: I/he/they vs. Object: me/him/them), Demonstrative (this/that/these/those), Relative (who/whom/which/that/whose), Indefinite (everyone, someone, nobody, neither, each), Reflexive (-self reflecting to subject: "he cut himself"), and Emphatic (-self for stress: "the principal himself signed").',
              'The Case Rule After Prepositions: Prepositions ALWAYS govern objective case pronouns ("Between you and ME", NOT "between you and I").',
            ],
            keyTerms: [
              { term: 'Nominal Case', definition: 'The grammatical form of a noun or pronoun indicating its syntactic role (Subjective, Objective, or Possessive).' },
              { term: 'Antecedent', definition: 'The specific noun or noun phrase to which a subsequent pronoun refers back and with which it must agree in number and gender.' },
              { term: 'Gerund', definition: 'A non-finite verb form ending in -ing that functions syntactically as a noun (subject, direct object, or object of preposition).' },
              { term: 'Relative Pronoun', definition: 'A pronoun (who, whom, which, that, whose) that introduces a subordinate adjectival clause and relates back to an antecedent noun.' },
            ],
          },
          {
            conceptTitle: '2. Verbs & Adverbs — The Action, State & Modifying Engines',
            explanation: 'Verbs assert physical action, mental processes, or states of being. Adverbs modify verbs, adjectives, or other adverbs, answering questions of manner, time, place, degree, and frequency.',
            bulletPoints: [
              'Transitive vs. Intransitive Verbs: Transitive verbs transfer action to a direct object ("She explained the lesson"). Intransitive verbs do not take an object ("The baby cried"). Only transitive verbs can form passive voice.',
              'Linking / Copular Verbs: Connect the subject with a subject complement (adjective or noun). Examples: be, seem, appear, become, taste, smell, sound, look. Crucial: Linking verbs are followed by ADJECTIVES, not adverbs ("The rose smells sweet", NOT "sweetly").',
              'Auxiliary & Modal Verbs: Primary auxiliaries (be, do, have) form tense aspects and negatives. Modals (can, could, may, might, must, should, will, would) express necessity, possibility, permission, or obligation without changing form.',
              'Adverb Classifications: Manner (How: quickly, fluently, hard, fast), Time (When: yesterday, soon, already), Place (Where: here, everywhere, upstairs), Frequency (How often: always, seldom, rarely), and Degree (How much: very, extremely, quite, hardly, scarcely).',
              'The MPT Adverbial Rule: When multiple adverbs follow a verb, follow the sequence: Manner -> Place -> Time (e.g., "She sang beautifully [M] at the ceremony [P] yesterday [T]").',
              'The "-ly" Trap: Words like friendly, lovely, lively, lonely, costly, and cowardly are ADJECTIVES, not adverbs. We say "in a friendly manner", not "he spoke friendly".',
            ],
            keyTerms: [
              { term: 'Transitive Verb', definition: 'A verb requiring one or more direct objects to complete its grammatical predicate.' },
              { term: 'Copular (Linking) Verb', definition: 'A verb linking the subject to a subject complement (noun or adjective) without expressing dynamic action.' },
              { term: 'Adverb of Degree', definition: 'An adverb modifying an adjective, verb, or another adverb by indicating intensity, extent, or degree (e.g., extremely, quite, barely).' },
              { term: 'Finite vs. Non-Finite', definition: 'Finite verbs are marked for tense, person, and number; Non-finite verbs (infinitives, gerunds, participles) have no tense and do not change with the subject.' },
            ],
          },
          {
            conceptTitle: '3. Adjectives & Determiners — Describing, Limiting & Specifying',
            explanation: 'Adjectives modify or describe nouns and pronouns. Determiners introduce nouns and clarify their definiteness, quantity, or proximity.',
            bulletPoints: [
              'Attributive vs. Predicative Adjectives: Attributive adjectives sit immediately before the noun ("an intelligent student"). Predicative adjectives follow a linking verb ("The student is intelligent").',
              'Degrees of Comparison: Positive (wise), Comparative (wiser / more diligent — compares 2), Superlative (wisest / most diligent — compares 3+, always preceded by "the").',
              'Latin Comparatives Ending in -ior: Words like senior, junior, superior, inferior, prior, and prefer ALWAYS take the preposition "TO", NEVER "than" ("He is senior TO me").',
              'Double Comparatives Trap: Never combine "more" with an -er adjective or "most" with an -est adjective ("more taller" ❌ -> "taller" ✅; "most unique" ❌ -> "unique" ✅).',
              'Determiners & Articles (A, An, The): "A" precedes consonant SOUNDS ("a university" -> /j/ sound; "a one-way road" -> /w/ sound). "An" precedes vowel SOUNDS ("an honest officer" -> silent h; "an M.A. degree" -> /ɛm/ sound). "The" marks specific or unique entities, rivers (the Indus), and holy scriptures.',
              'Quantifiers: "Few / A few" for countable nouns (few = virtually none; a few = some). "Little / A little" for uncountable nouns (little = virtually none; a little = a small amount).',
            ],
            keyTerms: [
              { term: 'Attributive Position', definition: 'When an adjective is placed directly before the noun it modifies (e.g., "dedicated teacher").' },
              { term: 'Predicative Position', definition: 'When an adjective appears in the predicate after a linking verb, modifying the subject (e.g., "The teacher is dedicated").' },
              { term: 'Indefinite Article', definition: 'The determiners "a" and "an", used before singular countable non-specific nouns based strictly on the initial sound.' },
              { term: 'Definite Article', definition: 'The determiner "the", specifying particular, identifiable, or unique entities in a discourse.' },
            ],
          },
          {
            conceptTitle: '4. Prepositions, Conjunctions & Interjections — Relational & Cohesive Connectors',
            explanation: 'Prepositions demonstrate spatial, temporal, and logical relationships between nominals and the rest of the clause. Conjunctions join syntactic units. Interjections convey spontaneous visceral emotion.',
            bulletPoints: [
              'Prepositions of Time: "At" for exact clock points ("at 8:30 AM"); "On" for calendar days and specific dates ("on 23rd March"); "In" for months, years, centuries, and extended periods ("in 1947", "in autumn").',
              'Prepositions of Place: "At" for specific pinpoint locations ("at the bus terminal"); "In" for enclosed boundaries, districts, and cities ("in Larkana", "in Sindh"); "Between" for two distinct entities; "Among" for three or more items.',
              'Direction Prepositions: "Into" signifies dynamic movement from outside to inside ("He jumped into the canal"); "In" signifies static containment ("He is in the room").',
              'Coordinating Conjunctions (FANBOYS): For, And, Nor, But, Or, Yet, So. They join grammatically equivalent syntactic elements (independent clause to independent clause).',
              'Correlative Conjunction Pairs: Either... or; Neither... nor; Not only... but also; Both... and; Scarcely / Hardly... when (NOT than); No sooner... than (NOT when). Correlative elements must possess strict grammatical parallelism.',
              'Interjections & Direct/Indirect Speech: Interjections (Alas!, Hurrah!, Bravo!, Wow!) convey raw emotion. In indirect narration, they are stripped away and converted into exclamatory clauses ("He said, \'Hurrah! We won\'" -> "He exclaimed with joy that they had won").',
            ],
            keyTerms: [
              { term: 'FANBOYS', definition: 'Mnemonic acronym for the seven coordinating conjunctions: For, And, Nor, But, Or, Yet, So.' },
              { term: 'Correlative Conjunction', definition: 'Paired conjunctions (e.g., "not only... but also") that join grammatically parallel words, phrases, or clauses.' },
              { term: 'Prepositional Phrase', definition: 'A syntactic unit consisting of a preposition and its nominal object, functioning adjectivally or adverbially.' },
              { term: 'Interjection', definition: 'An autonomous word or sound expressing sudden emotion, set apart by an exclamation mark and possessing no syntactic dependency.' },
            ],
          },
        ],
        comparisonTable: {
          title: 'The 9 Parts of Speech Classification & Functional Matrix',
          headers: ['Part of Speech', 'Core Grammatical Function', 'Key Question Answered', 'Typical Sentence Position', 'High-Frequency Exam Trap'],
          rows: [
            ['1. Noun', 'Names a person, place, thing, idea, or state', '"Who?" or "What?" (Subject/Object)', 'Subject, Direct Object, Object of Preposition', 'Uncountable nouns taking plural -s ("advices", "furnitures" ❌).'],
            ['2. Pronoun', 'Replaces a noun phrase to prevent repetition', 'Replaces "Who?" or "What?"', 'Any nominal position (Subject/Object)', 'Subject pronoun erroneously used after prepositions ("between you and I" ❌).'],
            ['3. Verb', 'Asserts dynamic action or copular state', '"What action?" or "What state?"', 'Central predicate position', 'Linking verbs taking adverbs ("smells sweetly" ❌ -> "smells sweet" ✅).'],
            ['4. Adjective', 'Qualifies, describes, or limits a noun/pronoun', '"Which one?", "What kind?", "How many?"', 'Before noun (attributive) or after linking verb', 'Double comparatives ("more prettier" ❌) & Latin comparatives taking "than".'],
            ['5. Adverb', 'Modifies a verb, adjective, or another adverb', '"How?", "When?", "Where?", "How often?"', 'After verb, before adjective, or clause initial', 'Confusing -ly adjectives (friendly, lovely, costly) with adverbs.'],
            ['6. Preposition', 'Shows temporal, spatial, or logical relation', '"Where?", "When?", "In what direction?"', 'Precedes nominal object (Prepositional Phrase)', 'Confusing "Between" (two items) with "Among" (three or more items).'],
            ['7. Conjunction', 'Welds words, phrases, or clauses together', '"Why?", "Under what condition?", "How linked?"', 'Between coordinated units or at dependent clause head', 'Mismatched correlatives ("No sooner... when" ❌ -> "No sooner... than" ✅).'],
            ['8. Interjection', 'Conveys spontaneous emotional outburst', '"What sudden emotion does speaker express?"', 'Isolated at start with exclamation mark (!)', 'Retaining interjection words in indirect speech conversions.'],
            ['9. Determiner', 'Introduces noun and limits definiteness/number', '"Which specific one?", "How much?"', 'Immediately precedes adjective + noun phrase', 'Using "a" instead of "an" before silent h ("an honest man") or vowel acronyms ("an M.A.").'],
          ],
        },
        classroomApplication: 'In Sindh secondary classrooms, use the "Sentence Construction Lab" technique: Provide students with a bare noun-verb kernel ("Teacher taught") and have them add one part of speech at a time to build syntactic awareness: Determiner ("The teacher taught") -> Adjective ("The inspiring teacher taught") -> Adverb ("The inspiring teacher patiently taught") -> Prepositional Phrase ("The inspiring teacher patiently taught in the classroom") -> Conjunction ("...because pupils were attentive").',
        mnemonicAid: 'ALL 9 PARTS MNEMONIC: N-P-V-A-A-P-C-I-D = "New Pupils Very Actively Acquire Practical Classroom Instruction Daily" (Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, Interjection, Determiner).',
        frequentExamQuestions: [
          { question: 'Identify the part of speech of "after" in: "He arrived shortly after."', answer: 'Adverb of Time/Degree (There is no following noun object, so it cannot be a preposition; it modifies the verb "arrived").' },
          { question: 'What part of speech is "Swimming" in: "Swimming is his favorite recreational exercise"?', answer: 'Gerund / Verbal Noun (It serves as the grammatical subject of the finite verb "is").' },
          { question: 'Correct the error: "He gave me many advices regarding the STEDA examination."', answer: '"He gave me many pieces of advice" (Advice is an uncountable abstract noun and cannot take the plural "-s").' },
          { question: 'What part of speech is "hard" in: "She worked hard to clear the Sindh teaching license test"?', answer: 'Adverb of Manner (It answers "HOW did she work?", modifying the verb "worked").' },
          { question: 'Identify the part of speech of "friendly" in: "The headmaster spoke in a friendly tone."', answer: 'Adjective of Quality (It modifies the noun "tone", despite ending in "-ly").' },
        ],
        quickQuiz: [
          {
            id: 'qq-eng-1a',
            question: 'In the sentence: "All the applicants attended the orientation but one", what part of speech is the word "but"?',
            options: [
              'Coordinating Conjunction',
              'Preposition meaning "except"',
              'Adverb of Degree',
              'Relative Pronoun',
            ],
            correctIndex: 1,
            explanation: 'When "but" is followed by a nominal object and signifies "except", it functions syntactically as a Preposition.',
          },
          {
            id: 'qq-eng-1b',
            question: 'Choose the grammatically correct sentence regarding Latin comparative adjectives:',
            options: [
              'Prof. Shah is senior than all the lecturers in the department.',
              'Prof. Shah is more senior than all the lecturers in the department.',
              'Prof. Shah is senior to all the lecturers in the department.',
              'Prof. Shah is most senior than all the lecturers in the department.',
            ],
            correctIndex: 2,
            explanation: 'Latin comparative adjectives ending in "-ior" (senior, junior, superior, inferior, prior) are strictly followed by the preposition "to", NEVER "than".',
          },
          {
            id: 'qq-eng-1c',
            question: 'Which of the following sentences features an Adverb of Manner rather than an Adjective?',
            options: [
              'He has a friendly and cooperative disposition.',
              'The teacher spoke very fast during the revision class.',
              'This is a fast train to Sukkur.',
              'It was a costly mistake during the exam registration.',
            ],
            correctIndex: 1,
            explanation: 'In "The teacher spoke very fast", "fast" modifies the verb "spoke" (answering HOW), functioning as an Adverb of Manner. In all other choices, the words modify nouns as adjectives.',
          },
        ],
      },
      {
        id: 'eng-topic-2',
        topicNumber: '1.2',
        title: 'All 12 English Tenses, Verb Forms, Modals & Conditional Sentences',
        readTime: '12 min read',
        summary: 'Comprehensive guide covering all 12 English tenses across Present, Past, and Future (Simple, Continuous, Perfect, Perfect Continuous), formulas, signal markers, tense harmony, stative verbs, modals, and all conditional types tested by STS IBA & STEDA.',
        highYieldAlert: 'STEDA & STS Tense Golden Rules: (1) Past of the Past: Earlier past action takes Past Perfect (had + V3), subsequent action takes Past Simple (V2). (2) Did + V1: After "did / did not", always use base form V1. (3) Stative verbs (belong, own, understand) never take -ing. (4) Subordinate time clauses take Present Simple: "When he arrives (not will arrive), we will start". (5) "Since" = point of time; "For" = duration.',
        concepts: [
          {
            conceptTitle: 'The 4 Present Tenses: Rules, Formulas & Time Markers',
            explanation: 'Present tenses locate events in current reality, habitual routines, ongoing states, or completed actions with immediate present significance.',
            bulletPoints: [
              'Present Simple (Indefinite): S + V1 (or V1+s/es for he/she/it) + O. Expresses permanent habits, universal truths, and timetabled events. Markers: always, usually, often, seldom, every day. (e.g., "The Indus River flows into the Arabian Sea.")',
              'Present Continuous (Progressive): S + is/am/are + V1-ing + O. Expresses actions happening right now or temporary arrangements. Markers: now, at present, currently, Look!, Listen!. (e.g., "The candidates are preparing for the test.")',
              'Present Perfect: S + have/has + V3 + O. Expresses actions completed at an unstated past time with present relevance or recent completion. Markers: already, just, yet, ever, never, so far. (e.g., "The department has announced the test schedule.") Note: Never use with specific finished past years like "in 2020".',
              'Present Perfect Continuous: S + have/has + been + V1-ing + O + since/for + time. Expresses actions that started in the past and are still continuing. "Since" for starting point (since Monday, since 2015); "For" for duration (for 3 years, for 5 hours). (e.g., "She has been teaching in Sukkur for eight years.")',
            ],
            keyTerms: [
              { term: 'Stative Verbs', definition: 'Verbs of cognition, emotion, senses, and possession (know, believe, understand, belong, taste) that are NOT used in continuous tenses. Say "I understand", NOT "I am understanding".' },
              { term: 'Third Person Singular -s/-es', definition: 'With subjects he, she, it, or singular nouns, affirmative Present Simple requires adding -s or -es to the base verb (walks, teaches, fixes).' },
            ],
          },
          {
            conceptTitle: 'The 4 Past Tenses: Past Sequences & Temporal Harmony',
            explanation: 'Past tenses locate actions prior to the current speech moment. Understanding the relationship between earlier and later past events is critical for Sukkur IBA questions.',
            bulletPoints: [
              'Past Simple (Indefinite): S + V2 + O. Negative: S + did + not + V1. Expresses completed past actions at a definite time. Markers: yesterday, ago, last night, in 1947. Critical Rule: After "did / did not", always use base form V1 ("He did not go", NOT "did not went").',
              'Past Continuous (Progressive): S + was/were + V1-ing + O. Ongoing action at a past moment, often interrupted by a sudden past action. Markers: while, when, as, at 8 PM yesterday. (e.g., "While the teacher was explaining, the bell rang.")',
              'Past Perfect ("Past of the Past"): S + had + V3 + O. When two past actions occurred, the EARLIER one takes Past Perfect (had + V3) and the LATER one takes Past Simple (V2). (e.g., "The train had left before we reached the platform.")',
              'Past Perfect Continuous: S + had + been + V1-ing + O + since/for. Action ongoing over a duration in the past before another past event intervened. (e.g., "She had been living in Larkana for ten years before she moved to Karachi.")',
            ],
            keyTerms: [
              { term: 'Sequence with "Before"', definition: 'Earlier Action (had + V3) + BEFORE + Later Action (Past Simple V2).' },
              { term: 'Sequence with "After"', definition: 'AFTER + Earlier Action (had + V3), Later Action (Past Simple V2).' },
            ],
          },
          {
            conceptTitle: 'The 4 Future Tenses & Future Time Clauses',
            explanation: 'Future tenses convey intentions, predictions, schedules, and actions completed prior to future deadlines.',
            bulletPoints: [
              'Future Simple (Indefinite): S + will/shall + V1 + O. Expresses spontaneous decisions, promises, and predictions. Markers: tomorrow, next week, soon. (e.g., "We will start the new semester next Monday.")',
              'Future Continuous: S + will be + V1-ing + O. Action in active progress at a designated future hour. Markers: at this time tomorrow, at 10 AM next Sunday. (e.g., "At this time tomorrow, students will be taking the test.")',
              'Future Perfect: S + will have + V3 + O. Action completed before a designated future deadline. Trigger word: "BY + Future Time". (e.g., "By December 2026, the government will have recruited 5,000 licensed teachers.")',
              'Future Perfect Continuous: S + will have been + V1-ing + O + for + duration + by + future time. Cumulative duration measured at a future milestone. (e.g., "By next year, he will have been serving for twenty years.")',
              'Subordinate Future Time Clauses: In clauses introduced by if, when, as soon as, until, before, after, NEVER use "will". Use Present Simple instead. (e.g., "When the chief guest arrives (NOT will arrive), we will stand up.")',
            ],
          },
          {
            conceptTitle: 'The 4 Conditional Types Master Rules & Subjunctive Mood',
            explanation: 'Conditional sentences express hypothetical situations and their outcomes. STS consistently tests Type 2 and Type 3.',
            bulletPoints: [
              'Zero Conditional (Universal Truths): If + Present Simple, Present Simple. Example: "If water reaches 100°C, it boils."',
              'First Conditional (Real Possibility): If + Present Simple, will/can/may + V1. Example: "If it rains tomorrow, we will postpone the test."',
              'Second Conditional (Hypothetical / Unreal Present): If + Past Simple (or "were" for all persons), would/could/might + V1. Example: "If I were the headmaster, I would reform the syllabus."',
              'Third Conditional (Unreal Past / Past Regret): If + had + V3, would have + V3. Example: "If they had left on time, they would have caught the train."',
            ],
            keyTerms: [
              { term: 'Subjunctive "Were"', definition: 'In formal English conditionals, "were" is used with all subjects (even "I", "he", "she") to express unreal or hypothetical states (e.g., "If she were here...").' },
              { term: 'Modal Auxiliaries', definition: 'Verbs like must, should, ought to, may, might, can, and could that express necessity, duty, permission, or probability.' },
            ],
          },
        ],
        comparisonTable: {
          title: 'Master 12 English Tenses Comparison Matrix',
          headers: ['Tense Name', 'Time & Aspect', 'Affirmative Formula', 'Key Signal Words', 'Sukkur IBA Exam Example'],
          rows: [
            ['Present Simple', 'Present + Simple', 'S + V1 (s/es) + O', 'always, usually, every day', 'The teacher inspects the register daily.'],
            ['Present Continuous', 'Present + Continuous', 'S + is/am/are + V1-ing + O', 'now, currently, at present, Look!', 'The candidates are preparing right now.'],
            ['Present Perfect', 'Present + Perfect', 'S + have/has + V3 + O', 'already, just, yet, recently', 'She has just submitted the application.'],
            ['Present Perfect Continuous', 'Present + Perf. Cont.', 'S + have/has been + V1-ing + O', 'since (point), for (duration)', 'He has been teaching here since 2018.'],
            ['Past Simple', 'Past + Simple', 'S + V2 + O (did not + V1)', 'yesterday, ago, last year, in 1947', 'He did not attend the meeting yesterday.'],
            ['Past Continuous', 'Past + Continuous', 'S + was/were + V1-ing + O', 'while, when, at 8 PM yesterday', 'While she was writing, the lights went out.'],
            ['Past Perfect', 'Past + Perfect', 'S + had + V3 + O', 'before, after, by the time', 'The patient had died before the doctor arrived.'],
            ['Past Perfect Continuous', 'Past + Perf. Cont.', 'S + had been + V1-ing + O', 'for/since + past benchmark', 'He had been studying for hours before sleeping.'],
            ['Future Simple', 'Future + Simple', 'S + will/shall + V1 + O', 'tomorrow, next week, soon', 'The results will be declared tomorrow.'],
            ['Future Continuous', 'Future + Continuous', 'S + will be + V1-ing + O', 'at this time tomorrow', 'They will be traveling at this time tomorrow.'],
            ['Future Perfect', 'Future + Perfect', 'S + will have + V3 + O', 'by tomorrow, by 2028, before...', 'By next month, we will have finished the syllabus.'],
            ['Future Perfect Continuous', 'Future + Perf. Cont.', 'S + will have been + V1-ing + O', 'by [date] for [duration]', 'By 2030, he will have been teaching for 15 years.'],
          ],
        },
        classroomApplication: 'Use the "Timeline Graphic Strategy" in the classroom: draw past, present, and future on the blackboard. Show students how helping verbs act as "traffic signals" (is/am/are = happening now; was/were = happened then; will = ahead of us; had = happened even before another past point).',
        mnemonicAid: 'TENSE HELPERS: DO/DOES (Present Simple) | DID (Past Simple) | IS/WAS/WILL BE (Continuous) | HAVE/HAD/WILL HAVE (Perfect).',
        frequentExamQuestions: [
          { question: '"The patient _______ before the doctor arrived."', answer: 'had died (Earlier past action takes past perfect had + V3).' },
          { question: '"He did not _______ his assignment on time."', answer: 'submit (After "did / did not", always use base form V1, not submitted).' },
          { question: '"She has been working in this school _______ last January."', answer: 'since ("Since" denotes an exact reference starting point in time).' },
          { question: '"When the inspector _______ tomorrow, the school will be decorated."', answer: 'comes (Subordinate future time clauses take Present Simple, NOT "will come").' },
          { question: '"By the end of this year, they _______ the construction of the science lab."', answer: 'will have completed ("By + future time" requires Future Perfect will have + V3).' },
        ],
        quickQuiz: [
          {
            id: 'qq-eng-2a',
            question: 'Identify the sentence with correct tense harmony:',
            options: [
              'The train left before we had reached the station.',
              'The train had left before we reached the station.',
              'The train has left before we reached the station.',
              'The train was leaving before we had reached the station.',
            ],
            correctIndex: 1,
            explanation: 'When two events occurred in the past, the earlier action takes Past Perfect (had left) and the subsequent action takes Past Simple (reached).',
          },
          {
            id: 'qq-eng-2b',
            question: '"He _______ in Larkana for the last seven years."',
            options: ['is living', 'has been living', 'lives', 'was living'],
            correctIndex: 1,
            explanation: 'An action starting in the past and continuing into the present with a duration ("for the last seven years") requires Present Perfect Continuous.',
          },
          {
            id: 'qq-eng-2c',
            question: '"By next December, the board _______ the new licensing curriculum."',
            options: ['will implement', 'will have implemented', 'implemented', 'has implemented'],
            correctIndex: 1,
            explanation: 'The marker phrase "By + future time" (By next December) strictly demands Future Perfect tense ("will have implemented").',
          },
        ],
      },
      {
        id: 'eng-topic-3',
        topicNumber: '1.3',
        title: 'Active & Passive Voice Transformation (معروف ۽ مجہول آواز)',
        readTime: '10 min read',
        summary: 'Comprehensive transformation master guide covering the 8 conjugable tenses, the 4 non-passive tenses, imperative commands/advice, interrogatives with "Who / By whom", fixed non-"by" prepositions (known to, surprised at), quasi-passive middle verbs, and agent omission tested by STS IBA & STEDA.',
        highYieldAlert: 'STEDA & STS Voice Golden Rules: (1) In continuous tenses, never omit "BEING" ("is being done", "was being inspected"). (2) In perfect tenses, insert "BEEN" ("has been checked", "had been repaired"). (3) Imperatives: Orders take "Let + Obj + be + V3", while moral duty takes "Obj + should be + V3". (4) Fixed Prepositions: "know" takes "TO" ("He is known TO me", NOT "by me"); "surprise" takes "AT". (5) 4 Tenses have NO passive: Present/Past/Future Perfect Continuous & Future Continuous.',
        concepts: [
          {
            conceptTitle: 'The Universal Passive Inversion Blueprint & The 8 Tenses',
            explanation: 'In active voice (معروف), the subject acts as the doer; in passive voice (مجہول), the receiver (object) is placed at the front as the sentence topic, followed by a form of "Be" + Past Participle (V3).',
            bulletPoints: [
              '1. Present Simple: S + V1/V-s + O -> Obj + is/am/are + V3 + by + Subject. (e.g., "The teacher inspects copies" -> "Copies are inspected by the teacher.")',
              '2. Present Continuous: S + is/am/are + V1-ing + O -> Obj + is/am/are + BEING + V3 + by + Subject. (e.g., "She is cooking rice" -> "Rice is being cooked by her.")',
              '3. Present Perfect: S + has/have + V3 + O -> Obj + has/have + BEEN + V3 + by + Subject. (e.g., "They have declared the merit list" -> "The merit list has been declared by them.")',
              '4. Past Simple: S + V2 + O -> Obj + was/were + V3 + by + Subject. Active with "did not" -> was/were not + V3. (e.g., "He did not invite me" -> "I was not invited by him.")',
              '5. Past Continuous: S + was/were + V1-ing + O -> Obj + was/were + BEING + V3 + by + Subject. (e.g., "They were repairing the road" -> "The road was being repaired by them.")',
              '6. Past Perfect: S + had + V3 + O -> Obj + had + BEEN + V3 + by + Subject. (e.g., "The team had solved the problem" -> "The problem had been solved by the team.")',
              '7. Future Simple: S + will/shall + V1 + O -> Obj + will/shall + BE + V3 + by + Subject. (e.g., "The board will announce results" -> "Results will be announced by the board.")',
              '8. Future Perfect: S + will have + V3 + O -> Obj + will have + BEEN + V3 + by + Subject. (e.g., "By next year, they will have completed the project" -> "...the project will have been completed by them.")',
              'The 4 Non-Passive Tenses: Present Perfect Continuous, Past Perfect Continuous, Future Continuous, and Future Perfect Continuous have NO standard passive voice form in English.',
            ],
            keyTerms: [
              { term: 'Transitive Verb (متعدي فعل)', definition: 'A verb that requires an object to complete its meaning. ONLY transitive verbs can be transformed into passive voice. Intransitive verbs (sleep, run, arrive, die, laugh) have NO passive voice.' },
              { term: 'Objective Case Pronoun Shift', definition: 'In the "by + agent" phrase, subject pronouns change into object pronouns: I -> me, we -> us, you -> you, he -> him, she -> her, they -> them, who -> whom.' },
            ],
          },
          {
            conceptTitle: 'Imperative Sentences: Orders, Moral Advice, Prohibitions & Requests',
            explanation: 'Imperative sentences lack an overt subject. Their passive forms depend on whether they express a command, moral advice, negative prohibition, or polite request.',
            bulletPoints: [
              'Authoritative Commands / Orders: Let + Object + BE + V3. (e.g., "Shut the door" -> "Let the door be shut." / "Post this letter" -> "Let this letter be posted.")',
              'Moral Advice / Humanitarian Duty: Object + SHOULD BE + V3. (e.g., "Help the poor" -> "The poor should be helped." / "Love your country" -> "Your country should be loved.")',
              'Negative Commands (Prohibitions): Let + Object + NOT BE + V3. (e.g., "Do not tell a lie" -> "Let a lie not be told." or "You are forbidden to tell a lie.")',
              'Polite Requests: Remove "Please / Kindly" and begin with "You are requested to + V1". (e.g., "Please lend me your pen" -> "You are requested to lend me your pen.")',
            ],
          },
          {
            conceptTitle: 'Interrogative Voice Transformations ("Who" vs. "Whom" & Auxiliary Inversion)',
            explanation: 'Interrogative passive sentences MUST retain their question syntax by inverting the auxiliary verb before the new subject.',
            bulletPoints: [
              '"Who" questions: "Who" converts to "By whom", followed immediately by the auxiliary verb + new subject + V3. (e.g., "Who wrote Shah Jo Risalo?" -> "By whom was Shah Jo Risalo written?" - NEVER write "By whom Shah Jo Risalo was written").',
              '"Whom" questions: "Whom" (objective) transforms into "Who" (subjective) + auxiliary verb + V3 + by + Subject. (e.g., "Whom did you invite?" -> "Who was invited by you?")',
              'Yes / No Auxiliary Questions: Begin with the be-form auxiliary matching the new subject. "Did he write the letter?" -> "Was the letter written by him?" (NOT "Did the letter written").',
            ],
          },
          {
            conceptTitle: 'Special High-Yield STS IBA Voice Exceptions',
            explanation: 'Sukkur IBA tests critical irregular patterns where traditional "by + subject" rules do not apply.',
            bulletPoints: [
              'Verbs taking Prepositions other than "BY": Know -> Known TO | Surprise/Astonish -> Surprised AT | Please/Satisfy -> Pleased WITH | Contain/Embody -> Contained IN. Example: "I know him" -> "He is known TO me" (NOT by me). "His behavior surprised me" -> "I was surprised AT his behavior."',
              'Phrasal Verbs with Fixed Prepositions: Do NOT drop the preposition! It stays attached to the verb: "They laughed at the beggar" -> "The beggar was laughed AT by them."',
              'Quasi-Passive (Middle Voice): Sensory verbs like taste, smell, feel. Formula: Subject + is [adjective] + when it is + V3. (e.g., "Quinine tastes bitter" -> "Quinine is bitter when it is tasted.")',
              'Double Object Verbs: "The teacher taught us grammar" -> Preferred: "We were taught grammar by the teacher" (Indirect object fronted); Alternate: "Grammar was taught to us by the teacher."',
              'Omission of Agent: When the doer is vague or obvious (someone, people, police, they), drop "by + agent": "Someone stole my purse" -> "My purse was stolen."',
            ],
          },
        ],
        comparisonTable: {
          title: 'Comprehensive 12-Tense Voice Transformation Matrix',
          headers: ['Tense Name', 'Active Voice Example', 'Passive Helping Verb', 'Passive Voice Example', 'Status'],
          rows: [
            ['Present Simple', 'She writes an essay.', 'is / am / are + V3', 'An essay is written by her.', 'Transformable'],
            ['Present Continuous', 'She is writing an essay.', 'is/am/are + BEING + V3', 'An essay is being written by her.', 'Transformable'],
            ['Present Perfect', 'She has written an essay.', 'has/have + BEEN + V3', 'An essay has been written by her.', 'Transformable'],
            ['Present Perf. Cont.', 'She has been writing...', 'None', 'NO PASSIVE VOICE', 'Non-Transformable'],
            ['Past Simple', 'She wrote an essay.', 'was / were + V3', 'An essay was written by her.', 'Transformable'],
            ['Past Continuous', 'She was writing an essay.', 'was/were + BEING + V3', 'An essay was being written by her.', 'Transformable'],
            ['Past Perfect', 'She had written an essay.', 'had + BEEN + V3', 'An essay had been written by her.', 'Transformable'],
            ['Past Perf. Cont.', 'She had been writing...', 'None', 'NO PASSIVE VOICE', 'Non-Transformable'],
            ['Future Simple', 'She will write an essay.', 'will / shall + BE + V3', 'An essay will be written by her.', 'Transformable'],
            ['Future Continuous', 'She will be writing...', 'None', 'NO PASSIVE VOICE', 'Non-Transformable'],
            ['Future Perfect', 'She will have written...', 'will have + BEEN + V3', 'An essay will have been written by her.', 'Transformable'],
            ['Future Perf. Cont.', 'She will have been writing...', 'None', 'NO PASSIVE VOICE', 'Non-Transformable'],
          ],
        },
        classroomApplication: 'Pedagogical Inversion Activity: Divide students into three groups representing Subject (Blue card), Action/Verb (Amber card), and Object (Green card). Have them physically rotate on stage to experience how the Object becomes the focal star in passive voice while the Subject moves to the back or disappears.',
        mnemonicAid: 'PASSIVE ACCRONYM: B-E-S-T -> Be-form matching tense | Extra V3 (Past Participle) | Switch Subject & Object | Take care of prepositions (known to, at, with).',
        frequentExamQuestions: [
          { question: 'Change to passive: "Who wrote Shah Jo Risalo?"', answer: '"By whom was Shah Jo Risalo written?" (Auxiliary "was" must precede the subject).' },
          { question: 'Change to passive: "I know him."', answer: '"He is known to me." ("know" strictly requires the preposition "to", never "by").' },
          { question: 'Change to passive: "Switch off the electric generator."', answer: '"Let the electric generator be switched off." (Imperative order formula).' },
          { question: 'Change to passive: "The teacher was checking the exam papers."', answer: '"The exam papers were being checked by the teacher." ("papers" is plural, so use "were being checked").' },
          { question: 'Change to passive: "Quinine tastes bitter."', answer: '"Quinine is bitter when it is tasted." (Quasi-passive sensory construction).' },
        ],
        quickQuiz: [
          {
            id: 'qq-eng-3a',
            question: 'What is the passive form of: "Who broke the glass beaker?"',
            options: [
              'By whom was the glass beaker broken?',
              'Who was broken the glass beaker by?',
              'By who the glass beaker was broken?',
              'The glass beaker was broken by who?',
            ],
            correctIndex: 0,
            explanation: '"Who" transforms to "By whom", followed by the auxiliary verb "was", subject "the glass beaker", and past participle "broken".',
          },
          {
            id: 'qq-eng-3b',
            question: 'Convert to passive: "We ought to respect our parents."',
            options: [
              'Our parents ought to respected by us.',
              'Our parents ought to be respected by us.',
              'Our parents ought to have respected by us.',
              'Our parents must be respect by us.',
            ],
            correctIndex: 1,
            explanation: 'Modal auxiliary passive requires "modal + be + V3" ("ought to be respected").',
          },
          {
            id: 'qq-eng-3c',
            question: 'Select the correct passive transformation for: "Everyone in the department knows Sir Asif."',
            options: [
              'Sir Asif is known by everyone in the department.',
              'Sir Asif is known to everyone in the department.',
              'Sir Asif was known with everyone in the department.',
              'Sir Asif has been known by everyone in the department.',
            ],
            correctIndex: 1,
            explanation: 'The verb "know" takes the fixed preposition "to" in passive voice, NOT "by".',
          },
          {
            id: 'qq-eng-3d',
            question: 'What is the passive voice of: "The candidates have been solving the test for two hours"?',
            options: [
              'The test has been being solved by the candidates for two hours.',
              'The test has been solved by the candidates for two hours.',
              'The test is being solved by the candidates for two hours.',
              'No passive voice form exists in standard English.',
            ],
            correctIndex: 3,
            explanation: 'Present Perfect Continuous has no standard passive voice form in English grammar.',
          },
        ],
      },
      {
        id: 'eng-topic-4',
        topicNumber: '1.4',
        title: 'Direct & Indirect Narration (بلاواسطه ۽ بالواسطه گفتگو)',
        readTime: '11 min read',
        summary: 'Comprehensive transformation master guide for Reported Speech covering reporting verb shifts (said to -> told/asked/ordered), the S-O-N pronoun formula, tense backshifting jumps, the 4 non-backshifting exceptions (universal truths, present reporting verbs), 5 sentence mood structures (Assertive, Interrogative, Imperative, Exclamatory, Optative), and high-yield Sukkur IBA exam traps.',
        highYieldAlert: 'STEDA & Sukkur IBA High-Yield Traps: (1) Universal Truths & Scientific Laws NEVER backshift ("Water boils at 100°C" remains "boils", NEVER "boiled"). (2) Present/Future Reporting Verbs ("says / will say"): Tense inside quotes DOES NOT CHANGE! (3) Interrogatives: NEVER use "that" or "that if"; Wh-questions use the Wh-word itself with declarative word order (Subject + Verb). (4) Forbade Trap: "forbade" already means negative; NEVER write "forbade not to". (5) "Said to" ➔ "told + Object" (NEVER write "told to me").',
        concepts: [
          {
            conceptTitle: 'The S-O-N Formula & Pronoun Conversion Blueprint',
            explanation: 'Pronouns within reported speech transform according to the person of the pronoun and their grammatical relationship with the reporting clause.',
            bulletPoints: [
              '1 (First Person: I, me, my, mine, we, us, our) ➔ Changes according to the SUBJECT (S) of the reporting verb. (e.g., Ali said, "I am teaching" ➔ Ali said that he was teaching).',
              '2 (Second Person: you, your, yours) ➔ Changes according to the OBJECT (O) of the reporting verb. (e.g., She said to me, "You passed" ➔ She told me that I had passed).',
              '3 (Third Person: he, him, his, she, her, it, they, them, their) ➔ Has NO CHANGE (N). (e.g., He said, "They arrived" ➔ He said that they had arrived).',
              'Transitive Nature of "Told": "said to" converts to "told", which takes an immediate direct object without the preposition "to" ("told me", NOT "told to me").',
            ],
            keyTerms: [
              { term: 'SON Formula (1-2-3)', definition: 'First person = Subject; Second person = Object; Third person = No change.' },
              { term: 'Reporting Clause vs. Reported Clause', definition: 'The reporting clause contains the speaker and reporting verb (e.g., "The teacher said to the class"); the reported clause contains the actual spoken words enclosed in quotation marks.' },
            ],
          },
          {
            conceptTitle: 'Tense Backshifting Hierarchy (Past Reporting Verb)',
            explanation: 'When the reporting verb is in the Past Tense (said, asked, inquired), the tense inside the reported clause shifts backward into the corresponding past tense.',
            bulletPoints: [
              'Present Indefinite (V1) ➔ Past Indefinite (V2): writes ➔ wrote.',
              'Present Continuous (is/am/are) ➔ Past Continuous (was/were): is writing ➔ was writing.',
              'Present Perfect (has/have + V3) ➔ Past Perfect (had + V3): has written ➔ had written.',
              'Present Perfect Continuous ➔ Past Perfect Continuous: has been writing ➔ had been writing.',
              'Past Indefinite (V2) ➔ Past Perfect (had + V3): wrote ➔ had written (CRITICAL IBA JUMP).',
              'Past Continuous (was/were + V1-ing) ➔ Past Perfect Continuous (had been + V1-ing).',
              'Past Perfect (had + V3) ➔ NO CHANGE (remains had + V3).',
              'Modals: will/shall ➔ would; can ➔ could; may ➔ might; must ➔ had to (for present necessity).',
            ],
          },
          {
            conceptTitle: 'The 4 Crucial Exceptions to Tense Backshifting',
            explanation: 'Sukkur IBA frequently designs trick questions around scenarios where the tense must NOT be changed.',
            bulletPoints: [
              '1. Universal Scientific & Geographical Truths: Permanent natural laws remain in the present simple. (e.g., He said, "The earth revolves around the sun" ➔ He said that the earth revolves around the sun; "revolves" remains unchanged).',
              '2. Habitual Actions & Historical Proverbs: (e.g., She said, "Honesty is the best policy" ➔ She said that honesty is the best policy).',
              '3. Reporting Verb in Present or Future Tense: When the reporting verb is "says", "tells", or "will say", tenses of the reported speech DO NOT change. (e.g., He says, "I am busy" ➔ He says that he is busy).',
              '4. Simultaneous Past Actions: Two continuous actions occurring simultaneously in the past with "while/when" do not backshift. (e.g., "While I was singing, she was dancing" ➔ remained was singing / was dancing).',
            ],
          },
          {
            conceptTitle: 'Sentence-Mood Specific Transformations (All 5 Types)',
            explanation: 'Each sentence type dictates its own reporting verb, conjunction, and syntactic order in indirect speech.',
            bulletPoints: [
              '1. Assertive (Declarative): said to ➔ told + Object; connector: "that".',
              '2. Interrogative Yes/No: said to ➔ asked / inquired of; connector: "if" or "whether"; inverted auxiliary becomes declarative (Subject + Verb); question mark is removed.',
              '3. Interrogative Wh- Questions: said to ➔ asked; connector: the Wh-word itself (What, Where, When, Why, Who, How); NEVER use "that"; word order: Wh-word + Subject + Verb.',
              '4. Imperatives (Commands/Requests): said to ➔ ordered, requested, advised; connector: "to + V1" (infinitive) or "not to + V1". With "forbade", use "forbade + Object + to + V1" without "not".',
              '5. Imperative with "Let us": said to ➔ suggested to / proposed to; connector: "that" + Subject (we/they) + "should + V1".',
              '6. Exclamatory: said ➔ exclaimed with joy/sorrow/wonder; connector: "that"; interjections (Alas!, Hurrah!) are omitted.',
              '7. Optative (Prayers/Wishes): said to ➔ prayed that / wished that; connector: "that" + Subject + "might + V1". Greetings take "wished" and farewells take "bade".',
            ],
          },
        ],
        comparisonTable: {
          title: 'Direct to Indirect Time & Place Adverbial Conversion Matrix',
          headers: ['Direct Speech Adverb', 'Indirect Speech Form', 'Examiner Alert & Trap'],
          rows: [
            ['Now', 'Then', 'Leaving as "now" in past narrative is incorrect'],
            ['Today', 'That day', 'Writing "the day" instead of "that day"'],
            ['Tonight', 'That night', 'Do not write "this night"'],
            ['Yesterday', 'The previous day / The day before', 'Tense must also jump to Past Perfect'],
            ['Tomorrow', 'The next day / The following day', 'Never leave as "tomorrow" in reported past'],
            ['Last night / Last week', 'The previous night / The previous week', 'Ensure auxiliary backshifts to "had"'],
            ['Next week / Next year', 'The following week / The following year', 'Avoid colloquial "coming year"'],
            ['Ago', 'Before', 'Writing "ago" is a classic IBA distractor'],
            ['This / These', 'That / Those', 'Shifts to distal demonstratives'],
            ['Here / Hither', 'There / Thither', 'Proximal spatial adverbs shift to distal forms'],
            ['Hence / Thus', 'Thence / So (in that way)', 'Archaic markers tested in BPS-16/17 exams'],
          ],
        },
        classroomApplication: 'Interactive Witness Roleplay: Pair students where Student A gives a first-person statement as a witness ("I saw the suspect running yesterday"). Student B steps into the role of a reporting police officer to deliver the indirect deposition ("The witness stated that he had seen the suspect running the previous day"), reinforcing pronoun shifts and tense backshifting in real-world contexts.',
        mnemonicAid: 'REPORTED SPEECH FORMULA: S-O-N (1-2-3 Pronouns) + ONE-STEP-BACK (Tense backshift) + TRUTH-IS-TIMELESS (Universal facts keep present simple) + FORBADE-NO-NOT (Avoid double negative).',
        frequentExamQuestions: [
          { question: 'Convert to indirect: The science teacher said, "Water boils at 100°C."', answer: 'The science teacher said that water boils at 100°C. (Universal scientific truth: "boils" remains present simple).' },
          { question: 'Convert to indirect: The officer said to Asif, "Why did you miss the morning assembly yesterday?"', answer: 'The officer asked Asif why he had missed the morning assembly the previous day. (Wh-word acts as connector; past simple "did you miss" becomes past perfect "he had missed"; "yesterday" becomes "the previous day").' },
          { question: 'Convert to indirect: The mother said to her child, "Do not touch the live electric wire."', answer: 'The mother forbade her child to touch the live electric wire. (With "forbade", do NOT use "not").' },
          { question: 'Convert to indirect: Farhan says, "I have passed the Sindh Teaching License test."', answer: 'Farhan says that he has passed the Sindh Teaching License test. (Reporting verb "says" is in present tense; no tense backshift occurs).' },
          { question: 'Convert to indirect: The teacher said to the students, "Let us prepare a model science chart."', answer: 'The teacher suggested to the students that they should prepare a model science chart.' },
        ],
        quickQuiz: [
          {
            id: 'qq-eng-4a',
            question: 'Select the correct indirect speech transformation: The teacher said, "The earth revolves around the sun."',
            options: [
              'The teacher said that the earth revolved around the sun.',
              'The teacher told that the earth revolves around the sun.',
              'The teacher said that the earth revolves around the sun.',
              'The teacher asked if the earth revolved around the sun.',
            ],
            correctIndex: 2,
            explanation: 'The revolution of the Earth is an immutable universal scientific fact. Therefore, the present tense "revolves" does not backshift to "revolved".',
          },
          {
            id: 'qq-eng-4b',
            question: 'The headmistress said to the girls, "Do not enter the examination hall without admit cards." What is the indirect form using "forbade"?',
            options: [
              'The headmistress forbade the girls not to enter the examination hall without admit cards.',
              'The headmistress forbade the girls to enter the examination hall without admit cards.',
              'The headmistress forbade the girls from not entering the examination hall without admit cards.',
              'The headmistress asked the girls to do not enter the examination hall without admit cards.',
            ],
            correctIndex: 1,
            explanation: '"Forbade" already contains the negative prohibition meaning. Adding "not" creates an erroneous double negative ("forbade not to").',
          },
          {
            id: 'qq-eng-4c',
            question: 'What is the correct indirect conversion of: The candidate says, "I am ready for the interview"?',
            options: [
              'The candidate says that he was ready for the interview.',
              'The candidate says that he is ready for the interview.',
              'The candidate said that he is ready for the interview.',
              'The candidate told that he was ready for the interview.',
            ],
            correctIndex: 1,
            explanation: 'When the reporting verb is in the Present Tense ("says"), the tense of the reported clause remains unchanged ("is ready", matching pronoun "he").',
          },
          {
            id: 'qq-eng-4d',
            question: 'Convert to indirect: The invigilator said to me, "Where did you leave your admit card yesterday?"',
            options: [
              'The invigilator asked me that where did I leave my admit card yesterday.',
              'The invigilator asked me where had I left my admit card the previous day.',
              'The invigilator asked me where I had left my admit card the previous day.',
              'The invigilator inquired me where I left my admit card yesterday.',
            ],
            correctIndex: 2,
            explanation: 'In reported Wh-questions, the connector is the Wh-word itself (no "that"), word order reverts to statement order (Subject "I" + Verb "had left"), and "yesterday" shifts to "the previous day".',
          },
        ],
      },
      {
        id: 'eng-topic-5',
        topicNumber: '1.5',
        title: 'Appropriate Prepositions, Phrasal Verbs & Fixed Collocations',
        readTime: '7 min read',
        summary: 'Mastering appropriate prepositions (preside over, abstain from, adhere to), prepositional collocations, and identifying independent vs. subordinate noun/adjective/adverbial clauses.',
        highYieldAlert: 'STEDA High-Yield Question: "He presided OVER the meeting", "He is fond OF reading", "Prevent him FROM making noise", and "She is good AT mathematics" (not "in"). "Senior/Junior/Inferior/Superior" take TO (never "than").',
        concepts: [
          {
            conceptTitle: 'Fixed Prepositional Collocations in STS Tests',
            explanation: 'Certain adjectives, nouns, and verbs require specific prepositions without literal translation.',
            bulletPoints: [
              'Abstain / Refrain / Prohibit / Prevent -> FROM (+ gerund V-ing)',
              'Accustomed / Addicted / Adhere / Adapt -> TO',
              'Good / Clever / Skilled / Quick -> AT (a subject or sport)',
              'Congratulate someone -> ON (an achievement or success)',
              'Die OF (a disease: died of cholera) vs. Die FROM (an external cause: died from hunger/overwork) vs. Die FOR (a cause: died for his motherland)',
              'Senior, Junior, Prior, Superior, Inferior -> TO (NOT than: "He is senior to me")',
              'Angry WITH a person vs. Angry AT a situation/thing',
              'Agree WITH a person vs. Agree TO a proposal',
            ],
            keyTerms: [
              { term: 'Collocation', definition: 'A combination of words that closely and habitually co-occur in natural English.' },
              { term: 'Phrasal Verb', definition: 'An idiomatic phrase consisting of a verb and another element, typically an adverb or preposition (e.g., look down on, give in).' },
            ],
          },
          {
            conceptTitle: 'Crucial Phrasal Verbs for Teaching Tests',
            explanation: 'Phrasal verbs frequently appear in sentence completion and vocabulary sections of STS exams.',
            bulletPoints: [
              'Call off = Cancel ("The match was called off due to rain").',
              'Call on = Visit briefly ("The inspector called on the school").',
              'Give up = Abandon a habit ("He gave up smoking").',
              'Give in = Surrender / Yield ("The rebels gave in").',
              'Put off = Postpone ("Do not put off till tomorrow what you can do today").',
              'Put up with = Tolerate ("I cannot put up with indiscipline").',
              'Look after = Take care of ("She looks after her elderly parents").',
              'Look down upon = Regard with contempt or disdain.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Common Preposition Confusion Chart',
          headers: ['Expression', 'Correct Preposition', 'Incorrect Usage'],
          rows: [
            ['Superior / Inferior', 'to ("He is superior to his peers")', 'than ("superior than")',],
            ['Congratulate', 'on ("congratulated on your victory")', 'for ("congratulated for")',],
            ['Good / Weak', 'at ("good at English", "weak at physics")', 'in ("good in English")',],
            ['Consist', 'of ("The committee consists of five members")', 'off / from',],
            ['Different', 'from ("His idea is different from mine")', 'than / to',],
            ['Insist', 'on ("She insisted on going there")', 'to / for',],
          ],
        },
        classroomApplication: 'Create a "Preposition Wheel" game in class where students match verbs to their appropriate prepositions, demonstrating how changing the preposition changes the entire meaning.',
        mnemonicAid: 'SENIOR TO YOU: Latin comparatives ending in -ior always take TO, never THAN.',
        frequentExamQuestions: [
          { question: '"The principal congratulated the student _______ his distinction."', answer: 'ON (Always congratulate on an achievement, never for).' },
          { question: '"He is junior _______ me by two years."', answer: 'TO (Junior/Senior take "to", never "than").' },
          { question: '"The committee agreed _______ the proposed curriculum reform."', answer: 'TO (Agree TO a proposal/plan; agree WITH a person).' },
        ],
        quickQuiz: [
          {
            id: 'qq-eng-5a',
            question: '"The meeting was presided _______ by the Minister of Education."',
            options: ['at', 'on', 'over', 'in'],
            correctIndex: 2,
            explanation: 'The standard idiom is "preside over" an assembly, meeting, or event.',
          },
          {
            id: 'qq-eng-5b',
            question: '"The candidate is thoroughly proficient _______ speaking Sindhi and English."',
            options: ['with', 'in', 'at', 'on'],
            correctIndex: 1,
            explanation: 'Proficient takes "in" (proficient in a language or field of study). Note that "skilled at" takes "at".',
          },
        ],
      },
      {
        id: 'eng-topic-6',
        topicNumber: '1.6',
        title: 'Sentence Types, Synthesis & Clause Analysis',
        readTime: '6 min read',
        summary: 'Deconstructing Simple, Compound, and Complex sentences, identifying Noun, Adjective, and Adverbial clauses, and synthesizing sentences using conjunctions and participles.',
        highYieldAlert: 'STEDA Clause Alert: Coordinate clauses are joined by FANBOYS (For, And, Nor, But, Or, Yet, So) = Compound Sentence. Subordinate clauses begin with because, although, since, if, when, that, which = Complex Sentence. Simple sentences have ONLY ONE finite verb.',
        concepts: [
          {
            conceptTitle: 'Simple, Compound & Complex Classification',
            explanation: 'Sentence classification depends on the number and nature of clauses present.',
            bulletPoints: [
              'Simple Sentence: Contains one independent clause and exactly one finite verb. Example: "Despite his illness, he attended school."',
              'Compound Sentence: Contains two or more independent clauses joined by coordinating conjunctions (FANBOYS) or a semicolon. Example: "He was ill, but he attended school."',
              'Complex Sentence: Contains one independent clause and at least one dependent (subordinate) clause. Example: "Although he was ill, he attended school."',
              'Compound-Complex: Two independent clauses + at least one dependent clause. Example: "Because the rain started, we packed our gear, and we returned home."',
            ],
            keyTerms: [
              { term: 'Finite Verb', definition: 'A verb that shows tense, person, and number, forming the core predicate of a clause.' },
              { term: 'FANBOYS', definition: 'The 7 coordinating conjunctions: For, And, Nor, But, Or, Yet, So.' },
              { term: 'Subordinating Conjunction', definition: 'Words like although, because, since, while, unless, and if that introduce dependent clauses.' },
            ],
          },
          {
            conceptTitle: 'Dependent Clause Types (Noun, Adjective, Adverb)',
            explanation: 'Subordinate clauses serve specific grammatical functions in the sentence.',
            bulletPoints: [
              'Noun Clause: Acts as the subject, object, or complement of a verb. Example: "I do not know [what his name is]." (Object of know).',
              'Adjective (Relative) Clause: Modifies a noun or pronoun, usually starting with who, whom, whose, which, that, or where. Example: "The book [that you lent me] was inspiring."',
              'Adverbial Clause: Modifies a verb, adjective, or adverb, indicating time, condition, contrast, cause, or manner. Example: "Wait here [until I return]." (Adverb of time).',
            ],
          },
        ],
        comparisonTable: {
          title: 'Sentence Structure Breakdown Matrix',
          headers: ['Type', 'Independent Clauses', 'Dependent Clauses', 'Connectors Used', 'Example'],
          rows: [
            ['Simple', '1', '0', 'None (may have phrases)', 'Walking through the grove, she saw an eagle.'],
            ['Compound', '2 or more', '0', 'Coordinating (FANBOYS)', 'She walked through the grove, and she saw an eagle.'],
            ['Complex', '1', '1 or more', 'Subordinating (while, because)', 'While she was walking through the grove, she saw an eagle.'],
          ],
        },
        classroomApplication: 'Teach sentence transformation by taking a single idea and having students write it in Simple, Compound, and Complex forms on the chalkboard. This builds syntactic flexibility.',
        mnemonicAid: 'FANBOYS: For, And, Nor, But, Or, Yet, So = COMPOUND ONLY.',
        frequentExamQuestions: [
          { question: '"Convert to Complex: In spite of his poverty, he is contented."', answer: '"Although he is poor, he is contented."' },
          { question: '"In \'I expect that I shall get the first prize\', the bracketed clause is:"', answer: 'Noun Clause (Acting as the direct object of the transitive verb "expect").' },
        ],
        quickQuiz: [
          {
            id: 'qq-eng-6a',
            question: '"The boy who won the first prize in the speech contest is my younger brother." The clause "who won the first prize in the speech contest" is a/an:',
            options: ['Noun Clause', 'Adjective (Relative) Clause', 'Adverbial Clause of Result', 'Independent Clause'],
            correctIndex: 1,
            explanation: 'The clause qualifies and describes the noun "The boy", making it an Adjective (Relative) Clause.',
          },
        ],
      },
      {
        id: 'eng-topic-7',
        topicNumber: '1.7',
        title: 'Vocabulary: Synonyms, Antonyms, Homophones & Word Roots',
        readTime: '6 min read',
        summary: 'High-frequency competitive exam vocabulary from Sindh textbooks, Latin/Greek roots, prefixes and suffixes, easily confused homophones, and precise one-word substitutes.',
        highYieldAlert: 'STEDA Vocabulary Alert: High-yield recurring words: Altruistic (Selfless), Ephemeral (Short-lived), Benevolent (Kind), Pragmatic (Practical), Candid (Frank), Meticulous (Careful), Obstinate (Stubborn).',
        concepts: [
          {
            conceptTitle: 'Essential Word Roots for Fast Decoding',
            explanation: 'Recognizing root morphemes allows candidates to deduce the meaning of unfamiliar words immediately.',
            bulletPoints: [
              'Bene- = Good, well (Benevolent, Benefactor, Beneficial).',
              'Mal- = Bad, evil (Malevolent, Malicious, Malfunction).',
              'Chron- = Time (Chronological, Synchronize, Chronic).',
              'Omni- = All (Omnipotent = all-powerful, Omniscient = all-knowing, Omnipresent = present everywhere).',
              'Path- = Feeling, suffering (Sympathy, Empathy, Apathy = lack of feeling, Antipathy = hatred).',
              'Poly- = Many (Polygon, Polyglot = knows many languages, Polygamy).',
            ],
            keyTerms: [
              { term: 'Homophone', definition: 'Words that sound identical in pronunciation but differ in spelling, origin, and meaning (e.g., complement vs. compliment, principal vs. principle).' },
              { term: 'One-Word Substitute', definition: 'A concise single word that replaces a lengthy phrase or descriptive sentence.' },
            ],
          },
          {
            conceptTitle: 'Commonly Confused Pairs (Homophones)',
            explanation: 'STS frequently tests homophones in sentence fill-in-the-blanks.',
            bulletPoints: [
              'Principal (Head of school / Main sum) vs. Principle (Fundamental moral rule or scientific law).',
              'Stationery (Writing materials with "er") vs. Stationary (Not moving / fixed with "ar").',
              'Complement (Something that completes or enhances) vs. Compliment (Expression of praise).',
              'Affect (Verb: to influence) vs. Effect (Noun: the result or outcome).',
              'Council (An advisory assembly) vs. Counsel (Advice or legal advocate).',
            ],
          },
        ],
        comparisonTable: {
          title: 'High-Yield Synonyms & Antonyms for Teaching Tests',
          headers: ['Word', 'Primary Meaning', 'Synonyms (Similar)', 'Antonyms (Opposite)'],
          rows: [
            ['Diligent', 'Hardworking & conscientious', 'Assiduous, industrious, painstaking', 'Lazy, lethargic, indolent'],
            ['Ephemeral', 'Lasting a very short time', 'Transient, fleeting, momentary', 'Eternal, permanent, enduring'],
            ['Pragmatic', 'Dealing with things practically', 'Realistic, sensible, practical', 'Idealistic, impractical, visionary'],
            ['Candid', 'Frank, outspoken, honest', 'Direct, sincere, ingenuous', 'Deceptive, guarded, secretive'],
            ['Obstinate', 'Stubbornly refusing to change', 'Stubborn, headstrong, refractory', 'Compliant, yielding, docile'],
            ['Affluent', 'Having a great deal of wealth', 'Prosperous, opulent, rich', 'Destitute, impoverished, poor'],
          ],
        },
        classroomApplication: 'Implement "Word Wall of the Week" where primary students learn one root word (e.g., "tele-" = far) and brainstorm all related terms (telephone, television, telescope), expanding lexical breadth.',
        mnemonicAid: 'STATIONERY: StationEry with an "E" is for Envelopes; StationAry with an "A" is for At rest.',
        frequentExamQuestions: [
          { question: 'What is the synonym of "CANDID"?', answer: 'Frank / Honest / Outspoken.' },
          { question: 'What is the antonym of "AFFLUENT"?', answer: 'Impoverished / Destitute / Poor.' },
          { question: '"The head of the institution is called the _______."', answer: 'Principal (With -al, not principle).' },
        ],
        quickQuiz: [
          {
            id: 'qq-eng-7a',
            question: 'Select the synonym for "EPHEMERAL":',
            options: ['Perpetual', 'Fleeting', 'Monumental', 'Rigid'],
            correctIndex: 1,
            explanation: '"Ephemeral" means short-lived or transient, exactly matched by "fleeting".',
          },
          {
            id: 'qq-eng-7b',
            question: '"A person who speaks many languages is designated as a/an:"',
            options: ['Philanthropist', 'Polyglot', 'Omniscient', 'Bibliophile'],
            correctIndex: 1,
            explanation: 'Poly- (many) + glot (tongue/language) = Polyglot.',
          },
        ],
      },
      {
        id: 'eng-topic-8',
        topicNumber: '1.8',
        title: 'Idioms, Proverbs & Figures of Speech',
        readTime: '6 min read',
        summary: 'Essential English idiomatic expressions, cultural proverbs, and literary devices (Simile, Metaphor, Personification, Alliteration, Hyperbole, Oxymoron) in Sindh textbooks.',
        highYieldAlert: 'STEDA Literary Devices Alert: Simile uses "like" or "as" ("As brave as a lion"). Metaphor directly compares without like/as ("Life is a dream"). Personification gives human attributes to non-human entities ("The wind whispered in the trees"). Hyperbole is deliberate exaggeration.',
        concepts: [
          {
            conceptTitle: 'Figures of Speech (Rhetorical Devices)',
            explanation: 'Literary devices enhance language and are frequently tested in elementary English teacher evaluations.',
            bulletPoints: [
              'Simile: An explicit comparison using "like" or "as" (e.g., "Her smile was as bright as the sun").',
              'Metaphor: An implicit or direct comparison without "like" or "as" (e.g., "Education is the light of life").',
              'Personification: Attributing human feelings, thoughts, or actions to inanimate objects (e.g., "Opportunity knocks at the door but once").',
              'Hyperbole: Purposeful, obvious exaggeration for dramatic effect (e.g., "I have told you a thousand times").',
              'Alliteration: Repetition of the same initial consonant sound in neighbouring words (e.g., "Peter Piper picked a peck of pickled peppers").',
              'Oxymoron: Two contradictory terms juxtaposed together (e.g., "Deafening silence", "Cruel kindness").',
            ],
            keyTerms: [
              { term: 'Figurative Language', definition: 'Language that uses words or expressions with a meaning that is different from the literal interpretation.' },
              { term: 'Idiom', definition: 'A phrase whose meaning cannot be understood from the literal meanings of its individual words (e.g., bite the bullet).' },
            ],
          },
          {
            conceptTitle: 'High-Yield Idioms in STS IBA Papers',
            explanation: 'Idioms tested consistently in screening and licensing exams.',
            bulletPoints: [
              '"A blessing in disguise" = Something that seems bad at first, but turns out to have a good result.',
              '"Burn the midnight oil" = Work or study late into the night.',
              '"Beat around the bush" = Avoid talking about what is important.',
              '"Break the ice" = Make people feel more relaxed at the start of a meeting.',
              '"Call a spade a spade" = Speak plainly and bluntly about something.',
              '"Cry over spilt milk" = Complain about something that has already happened and cannot be changed.',
              '"Once in a blue moon" = Very rarely or almost never.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Simile vs. Metaphor vs. Personification',
          headers: ['Device', 'Key Defining Feature', 'Classroom Example', 'Common Confusion'],
          rows: [
            ['Simile', 'Uses explicit connective ("like" or "as")', 'The soldier fought like a lion in battle.', 'Confusing with simple comparison'],
            ['Metaphor', 'Direct equation; states X is Y', 'The soldier was a lion in the field of battle.', 'Thinking it must contain "like"'],
            ['Personification', 'Endows non-human things with human qualities', 'The flowers danced joyfully in the morning breeze.', 'Confusing with metaphor'],
          ],
        },
        classroomApplication: 'Ask students to transform similes into metaphors and vice versa (e.g., "He is as strong as an ox" -> "He is an ox"). This clarifies abstract figurative conceptualization.',
        mnemonicAid: 'SIMILE = SAYS "AS" OR "LIKE" | METAPHOR = MAKES EQUALITY DIRECT.',
        frequentExamQuestions: [
          { question: '"The classroom was a zoo during break time." This sentence is an example of:', answer: 'Metaphor (Direct comparison without like/as).' },
          { question: 'What does the idiom "at the eleventh hour" mean?', answer: 'At the very last possible moment.' },
        ],
        quickQuiz: [
          {
            id: 'qq-eng-8a',
            question: 'Identify the figure of speech: "The angry clouds marched across the darkening sky."',
            options: ['Simile', 'Personification', 'Oxymoron', 'Hyperbole'],
            correctIndex: 1,
            explanation: 'Assigning the human action of "marching" and human emotion of "angry" to clouds is Personification.',
          },
        ],
      },
      {
        id: 'eng-topic-9',
        topicNumber: '1.9',
        title: 'Punctuation Rules, Capitalization & Common Grammatical Pitfalls',
        readTime: '6 min read',
        summary: 'Standard punctuation (comma, semicolon, colon, hyphen, dash, apostrophe), capitalization standards, and avoiding comma splices, run-ons, and dangling modifiers.',
        highYieldAlert: 'STEDA Mechanics Alert: Semicolon (;) connects two independent clauses that are closely linked without a coordinating conjunction. Colon (:) introduces a list, explanation, or quotation after a complete independent clause. Its vs. It\'s: "It\'s" = It is (contraction); "Its" = possessive pronoun (no apostrophe).',
        concepts: [
          {
            conceptTitle: 'Punctuation Mechanics Mastered',
            explanation: 'Accurate punctuation is vital for clear pedagogical communication and is heavily tested in sentence correction.',
            bulletPoints: [
              'Comma Splice Error: Joining two independent clauses with only a comma. INCORRECT: "She studied hard, she passed the exam." CORRECT: "She studied hard; she passed the exam" OR "She studied hard, and she passed the exam."',
              'Semicolon (;): Used between closely related independent clauses not joined by FANBOYS, or before conjunctive adverbs (however, therefore, moreover). Example: "The syllabus is vast; however, with planning, you will complete it."',
              'Colon (:): Must be preceded by a complete sentence when introducing a series or explanation. Example: "The exam consists of three components: reading, writing, and pedagogy."',
              'Apostrophe for Possession: Singular: teacher\'s book. Plural ending in s: teachers\' lounge. Irregular plural: children\'s toys.',
            ],
            keyTerms: [
              { term: 'Comma Splice', definition: 'The grammatical error of connecting two independent clauses with only a comma without a coordinating conjunction.' },
              { term: 'Dangling Modifier', definition: 'A word or phrase that modifies a word not clearly stated in the sentence (e.g., "Walking into the room, the smoke was thick").' },
            ],
          },
        ],
        comparisonTable: {
          title: 'Apostrophe and Punctuation Trap Table',
          headers: ['Expression', 'Correct Meaning & Form', 'Incorrect Usage / Trap'],
          rows: [
            ['Its vs. It\'s', 'Its = Possessive pronoun ("The cat licked its paws") | It\'s = Contraction of It is ("It\'s a sunny day")', 'Writing "it\'s" for possession ("The school updated it\'s policy")'],
            ['Whose vs. Who\'s', 'Whose = Possessive | Who\'s = Who is', 'Writing "Who\'s book is this?"'],
            ['Their / There / They\'re', 'Their = Possessive | There = Place | They\'re = They are', 'Using "there" for people\'s property'],
          ],
        },
        classroomApplication: 'Have learners practice editing an intentionally unpunctuated paragraph to understand how missing commas and full stops distort intended meaning.',
        mnemonicAid: 'IT\'S = IT IS: If you cannot substitute the words "it is", you must NOT use the apostrophe.',
        frequentExamQuestions: [
          { question: '"Identify the correct sentence:"', answer: '"The bird spread its wings and flew away." (Its without apostrophe is correct possessive).' },
        ],
        quickQuiz: [
          {
            id: 'qq-eng-9a',
            question: 'Which sentence is correctly punctuated?',
            options: [
              'I have visited three cities, Sukkur, Larkana, and Hyderabad.',
              'I have visited three cities: Sukkur, Larkana, and Hyderabad.',
              'I have visited: three cities Sukkur, Larkana, and Hyderabad.',
              'I have visited three cities; Sukkur, Larkana, and Hyderabad.',
            ],
            correctIndex: 1,
            explanation: 'A colon is properly used after a complete independent clause to introduce a list.',
          },
        ],
      },
      {
        id: 'eng-topic-10',
        topicNumber: '1.10',
        title: 'Reading Comprehension Strategies & English Pedagogy (ELT)',
        readTime: '7 min read',
        summary: 'Effective reading comprehension models (SQ3R, Skimming, Scanning), developing the four language skills (LSRW), phonemic awareness, and comparing Grammar-Translation Method (GTM) with Communicative Language Teaching (CLT).',
        highYieldAlert: 'STEDA Pedagogy Alert: Natural language acquisition sequence is LSRW: Listening -> Speaking -> Reading -> Writing. Skimming = rapid reading for general gist/main idea. Scanning = rapid reading for specific targeted information (e.g., dates, names, numbers). SQ3R = Survey, Question, Read, Recite, Review.',
        concepts: [
          {
            conceptTitle: 'Reading Strategies: Skimming, Scanning & SQ3R',
            explanation: 'Comprehension strategies help both test-takers and young school learners decode texts efficiently.',
            bulletPoints: [
              'Skimming: Reading quickly to obtain the overall gist or central message without focusing on specific details.',
              'Scanning: Moving eyes rapidly across text looking for specific keywords, statistics, names, or figures.',
              'SQ3R Method (Francis P. Robinson): Survey (overview headings), Question (formulate inquiries), Read (active absorption), Recite (summarize from memory), Review (reinforce comprehension).',
              'Inferencing: Reading between the lines to deduce unstated conclusions based on evidence in the passage.',
            ],
            keyTerms: [
              { term: 'LSRW Skills', definition: 'The foundational sequence of four language skills: Listening (receptive), Speaking (productive), Reading (receptive), Writing (productive).' },
              { term: 'GTM vs. CLT', definition: 'Grammar-Translation Method focuses on memorizing grammatical rules and translating texts; Communicative Language Teaching focuses on meaningful real-world interaction.' },
            ],
          },
          {
            conceptTitle: 'English Language Teaching (ELT) Methods in Primary Classes',
            explanation: 'STEDA evaluates candidates on progressive pedagogical methodologies for teaching English as a second language.',
            bulletPoints: [
              'Direct Method: Teaches English directly without using the mother tongue, using demonstrations, pictures, and realia.',
              'Phonics Approach: Teaches reading by correlating sounds (phonemes) with letters or groups of letters (graphemes).',
              'Total Physical Response (TPR): Pairs verbal speech with physical movement, particularly effective for early grade English learners.',
              'Differentiated Reading: Providing graded readers tailored to varying reading levels within the same classroom.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Grammar-Translation Method (GTM) vs. Communicative Language Teaching (CLT)',
          headers: ['Feature', 'Grammar-Translation Method (GTM)', 'Communicative Language Teaching (CLT)'],
          rows: [
            ['Primary Focus', 'Reading literature & memorizing grammar rules', 'Fluency & real-world functional communication'],
            ['Role of Mother Tongue', 'Heavily used as medium of instruction', 'Minimally used; target language is primary'],
            ['Classroom Activities', 'Translation drills, rule memorization', 'Role plays, pair work, discussions, problem-solving'],
            ['View of Error', 'Errors corrected immediately and rigorously', 'Errors seen as natural steps in language acquisition'],
          ],
        },
        classroomApplication: 'In multilingual Sindh classrooms, use the CLT approach with paired dialogue activities rather than rote translation, allowing students to develop natural speaking confidence in English.',
        mnemonicAid: 'SQ3R = SURVEY, QUESTION, READ, RECITE, REVIEW | LSRW = LISTEN, SPEAK, READ, WRITE.',
        frequentExamQuestions: [
          { question: 'What is the natural order of language learning skills?', answer: 'Listening -> Speaking -> Reading -> Writing (LSRW).' },
          { question: 'Looking for a telephone number in a directory is an example of which reading skill?', answer: 'Scanning (Searching for a specific piece of information).' },
          { question: 'Who developed the SQ3R study method?', answer: 'Francis P. Robinson (1946).' },
        ],
        quickQuiz: [
          {
            id: 'qq-eng-10a',
            question: 'When a teacher reads a newspaper headline and subheadings to get the main idea of an article, they are employing:',
            options: ['Scanning', 'Skimming', 'Intensive Reading', 'Critical Reading'],
            correctIndex: 1,
            explanation: 'Skimming is rapid reading designed to identify the general theme or main idea of a text.',
          },
          {
            id: 'qq-eng-10b',
            question: 'Which of the following represents the two receptive language skills?',
            options: [
              'Speaking and Writing',
              'Listening and Reading',
              'Listening and Speaking',
              'Reading and Writing',
            ],
            correctIndex: 1,
            explanation: 'Listening and Reading are receptive skills (receiving and decoding language), while Speaking and Writing are productive skills.',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // MODULE 2: MATHEMATICS (10 MARKS)
  // -------------------------------------------------------------------------
  {
    id: 'tl-part-2-math',
    partNumber: 2,
    partCategory: 'Part I: Content Knowledge (50%)',
    subjectName: 'Mathematics',
    weightage: '10 Marks (10%)',
    marks: 10,
    targetLevel: 'Class 1 to 8 DCAR Sindh Textbook Curriculum',
    iconName: 'Calculator',
    themeColor: 'from-emerald-600 to-teal-600',
    badgeBg: 'bg-emerald-100 dark:bg-emerald-950/60',
    badgeText: 'text-emerald-700 dark:text-emerald-300',
    description: 'Comprehensive quantitative reasoning aligned with Class 1-8 DCAR Sindh Textbook Curriculum, covering Number Systems, Divisibility Rules, Decimals, Fractions, LCM & HCF Master Theorems, Ratios & Proportions, Unitary Method, Percentages, Geometry Mensuration, and Statistics.',
    topics: [
      {
        id: 'math-topic-1',
        topicNumber: '2.1',
        title: 'Number System: Sets, Parity, Prime Numbers & Divisibility Rules (عددي نظام)',
        readTime: '10 min read',
        summary: 'Exhaustive classification of Real Numbers (Natural, Whole, Integers, Rational, Irrational), Prime vs. Composite numbers, Place vs. Face values, and all 10 divisibility tests (2 to 11) with Sukkur IBA missing-digit problem solving techniques.',
        highYieldAlert: 'STEDA & Sukkur IBA Recurring Traps: (1) "1 is NEITHER prime NOR composite" (a prime number must have exactly two distinct positive factors). (2) "2 is the SMALLEST and the ONLY EVEN prime number". (3) 0 is whole, an even integer, but neither positive nor negative. (4) Divisibility by 11: Difference between sum of odd-place digits and even-place digits must be 0 or 11. (5) Place Value of 7 in 4,752 is 700; Face Value is simply 7.',
        concepts: [
          {
            conceptTitle: 'The Real Number System Hierarchy (حقيقي عددن جو سرشتو)',
            explanation: 'Numbers build upon each other in nested mathematical sets defined in DCAR Sindh Textbooks from Class 1 to 8.',
            bulletPoints: [
              'Natural Numbers (N / طبيعي عدد): Counting numbers beginning from 1: N = {1, 2, 3, 4, 5, ...}. Smallest natural number is 1.',
              'Whole Numbers (W / سمورا عدد): Natural numbers along with zero: W = {0, 1, 2, 3, 4, ...}. Smallest whole number is 0.',
              'Integers (Z / صحيح عدد): Set of negative numbers, zero, and positive numbers: Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}.',
              'Rational Numbers (Q / ناطق عدد): Numbers expressible in the form p/q, where p and q are integers and q ≠ 0 (e.g., 3/4, -5, 0.75, 0.333...).',
              'Irrational Numbers (Q\' / غير ناطق عدد): Non-terminating, non-repeating numbers that cannot be written as p/q (e.g., √2, √3, √5, π = 3.14159...).',
              'Real Numbers (R / حقيقي عدد): The union of all Rational and Irrational numbers: R = Q ∪ Q\'.',
            ],
            keyTerms: [
              { term: 'Prime Number (مفرد عدد)', definition: 'A positive integer greater than 1 that has exactly two distinct positive divisors: 1 and itself (2, 3, 5, 7, 11, 13, 17, 19, 23, 29...).' },
              { term: 'Composite Number (مرڪب عدد)', definition: 'A positive integer having more than two distinct positive factors (4, 6, 8, 9, 10, 12...). The smallest composite number is 4.' },
              { term: 'Co-Prime Numbers (هم مفرد عدد)', definition: 'Two numbers whose Highest Common Factor (HCF) is strictly 1 (e.g., 8 and 9 are co-prime, even though neither is prime).' },
              { term: 'Place Value vs. Face Value (مقامي قدر ۽ ظاهري قدر)', definition: 'Place value depends on positional rank (units, tens, hundreds, thousands); Face value is the absolute digit value regardless of position.' },
            ],
          },
          {
            conceptTitle: 'Complete Divisibility Rules Matrix (2 to 11) (وندجا قاعدا)',
            explanation: 'Sukkur IBA tests divisibility without calculators to evaluate candidates\' mathematical speed and logical deduction.',
            bulletPoints: [
              'Divisibility by 2: Last unit digit is even (0, 2, 4, 6, or 8).',
              'Divisibility by 3: The sum of all individual digits is divisible by 3 (e.g., for 432: 4 + 3 + 2 = 9; 9 ÷ 3 = 3 ➔ Divisible).',
              'Divisibility by 4: The number formed by the last two digits is divisible by 4, or ends in 00 (e.g., 3,524 ➔ 24 ÷ 4 = 6 ➔ Divisible).',
              'Divisibility by 5: The unit digit ends in either 0 or 5.',
              'Divisibility by 6: The number must satisfy BOTH Divisibility by 2 (even) and Divisibility by 3 (digit sum multiple of 3).',
              'Divisibility by 8: The number formed by the last three digits is divisible by 8, or ends in 000 (e.g., 47,120 ➔ 120 ÷ 8 = 15 ➔ Divisible).',
              'Divisibility by 9: The sum of all digits is a multiple of 9 (e.g., 7,425: 7 + 4 + 2 + 5 = 18 ➔ Divisible).',
              'Divisibility by 10: The unit digit ends strictly in 0.',
              'Divisibility by 11: The difference between the sum of digits at odd places and the sum of digits at even places (counted from right) is 0 or a multiple of 11.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Classification of Numbers & Properties Matrix',
          headers: ['Set / Category', 'Symbol / Definition', 'First 5 Elements', 'Key Examiner Fact'],
          rows: [
            ['Natural Numbers', 'N', '1, 2, 3, 4, 5', 'Does NOT include 0'],
            ['Whole Numbers', 'W', '0, 1, 2, 3, 4', 'Smallest whole number is 0'],
            ['Integers', 'Z', '..., -2, -1, 0, 1, 2', '0 is neither positive nor negative'],
            ['Prime Numbers', 'P', '2, 3, 5, 7, 11', '2 is the ONLY even prime number'],
            ['Composite Numbers', 'C', '4, 6, 8, 9, 10', 'Smallest odd composite number is 9'],
            ['Neither Prime nor Composite', 'Unit Number', '1', 'Has only 1 factor (itself)'],
          ],
        },
        classroomApplication: 'Use manipulative counters and the Sieve of Eratosthenes chart in Class 4-6 to let students physically cross out multiples of 2, 3, 5, and 7 to discover the prime numbers under 100 independently.',
        mnemonicAid: 'DIVISIBILITY BY 11 FORMULA: |Odd-Places-Sum - Even-Places-Sum| = 0 or 11.',
        frequentExamQuestions: [
          { question: 'What is the sum of the first 5 prime numbers?', answer: '28 (2 + 3 + 5 + 7 + 11 = 28. Trap: Candidates often incorrectly include 1).' },
          { question: 'What is the place value of 8 in 582,349?', answer: '80,000 (Ten thousands place; face value is 8).' },
          { question: 'If 73*2 is divisible by 9, what is the value of *?', answer: '6 (7 + 3 + * + 2 = 12 + *. Next multiple of 9 is 18, so * = 18 - 12 = 6).' },
          { question: 'How many prime numbers exist between 1 and 50?', answer: '15 prime numbers (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47).' },
        ],
        quickQuiz: [
          {
            id: 'qq-num-1a',
            question: 'Which of the following numbers is prime?',
            options: ['91', '51', '37', '87'],
            correctIndex: 2,
            explanation: '37 has no divisors other than 1 and 37. Note: 91 = 7 × 13 (composite), 51 = 3 × 17 (composite), 87 = 3 × 29 (composite).',
          },
          {
            id: 'qq-num-1b',
            question: 'What is the difference between the place value and face value of 6 in 965,241?',
            options: ['54,000', '59,994', '60,000', '6'],
            correctIndex: 1,
            explanation: 'Place value of 6 is 60,000. Face value of 6 is 6. Difference = 60,000 - 6 = 59,994.',
          },
          {
            id: 'qq-num-1c',
            question: 'Find the digit * such that 85,*14 is divisible by 11:',
            options: ['1', '3', '5', '8'],
            correctIndex: 3,
            explanation: 'Odd places sum (from right): 4 + * + 8 = 12 + *. Even places sum: 1 + 5 = 6. Difference: (12 + *) - 6 = 6 + *. For 6 + * to equal 11 (or multiple), * must be 11 - 6 = 5. Check: 85,514 ÷ 11 = 7,774. (Option 2 / digit 5).',
          },
        ],
      },
      {
        id: 'math-topic-2',
        topicNumber: '2.2',
        title: 'Decimals: Terminating, Non-Terminating & Recurring Conversions (ڏھائي عدد)',
        readTime: '9 min read',
        summary: 'Comprehensive treatment of decimal place values, the three types of decimals, criteria for terminating fractions without division, converting repeating bar decimals to vulgar fractions, and arithmetic operations.',
        highYieldAlert: 'STEDA Criterion for Terminating Decimals: A reduced fraction p/q in simplest form terminates if and only if the prime factorization of its denominator q contains ONLY powers of 2 and/or 5 (q = 2^m × 5^n). If any other prime (3, 7, 11, etc.) exists in denominator, it is NON-TERMINATING. Conversion shortcut: 0.ā = a/9; 0.ab̄ = ab/99; 0.a b̄ = (ab - a)/90.',
        concepts: [
          {
            conceptTitle: 'The 3 Classes of Decimals (ڏھائي عددن جا ٽي قسم)',
            explanation: 'Understanding the mathematical nature of decimals establishes the foundation for rational and irrational numbers.',
            bulletPoints: [
              '1. Terminating Decimals (ختم ٿيندڙ ڏھائي): Digits stop after a finite number of decimal places. (e.g., 1/2 = 0.5, 3/8 = 0.375, 7/20 = 0.35). Always Rational numbers.',
              '2. Non-Terminating Recurring/Repeating (تڪراري ڏھائي): The division never terminates, but one or more digits repeat indefinitely in a cycle (e.g., 1/3 = 0.333... = 0.3̄, 5/11 = 0.4545... = 0.45̄). Always Rational numbers.',
              '3. Non-Terminating Non-Repeating (غير تڪراري ڏھائي): Continues infinitely without repeating any pattern (e.g., √2 = 1.41421..., π = 3.14159...). These are strictly Irrational numbers.',
            ],
            keyTerms: [
              { term: 'Pure Recurring Decimal (خالص تڪراري)', definition: 'All digits immediately following the decimal point repeat continuously under the bar (e.g., 0.7̄ = 7/9, 0.23̄ = 23/99).' },
              { term: 'Mixed Recurring Decimal (مرڪب تڪراري)', definition: 'Contains one or more non-repeating digits immediately after the decimal point before the recurring block starts (e.g., 0.16̄ = (16-1)/90 = 15/90 = 1/6).' },
            ],
          },
          {
            conceptTitle: 'Arithmetic Operations & Multiplication/Division Shortcuts',
            explanation: 'STS questions frequently test decimal point placement in chained operations.',
            bulletPoints: [
              'Addition & Subtraction: Align numbers vertically strictly along the decimal point before operating (e.g., 4.2 + 0.035 + 12 = 16.235).',
              'Multiplication: Multiply numbers as integers ignoring decimal points, then place the decimal point such that the total decimal places equals the sum of decimal places of both factors (e.g., 0.04 × 0.003 = 4 × 3 = 12 with 2 + 3 = 5 decimal places = 0.00012).',
              'Division by Decimal: Multiply dividend and divisor by powers of 10 to make the divisor a whole integer before dividing (e.g., 0.36 ÷ 0.009 = (0.36 × 1000) ÷ (0.009 × 1000) = 360 ÷ 9 = 40).',
            ],
          },
        ],
        comparisonTable: {
          title: 'Recurring Decimals to Fraction Conversion Table',
          headers: ['Decimal Expression', 'Recurring Bar Notation', 'Algebraic Formula', 'Simplest Fraction Form'],
          rows: [
            ['0.3333...', '0.3̄', '3 / 9', '1 / 3'],
            ['0.6666...', '0.6̄', '6 / 9', '2 / 3'],
            ['0.7777...', '0.7̄', '7 / 9', '7 / 9'],
            ['0.2727...', '0.27̄', '27 / 99', '3 / 11'],
            ['0.4545...', '0.45̄', '45 / 99', '5 / 11'],
            ['0.1666...', '0.16̄', '(16 - 1) / 90 = 15 / 90', '1 / 6'],
            ['0.2333...', '0.23̄', '(23 - 2) / 90 = 21 / 90', '7 / 30'],
          ],
        },
        classroomApplication: 'Demonstrate terminating decimals using paper-strip folding: folding into halves, fourths, eighths, fifths, and tenths creates clean terminating subdivisions, while folding into thirds or sevenths never aligns perfectly with base-10.',
        mnemonicAid: 'CONVERSION SHORTCUT: Number of repeating digits = Number of 9s in denominator. Number of non-repeating digits = Number of 0s after 9s.',
        frequentExamQuestions: [
          { question: 'Which fraction produces a terminating decimal: 7/25 or 5/21?', answer: '7/25 (Denominator 25 = 5², only powers of 5. For 21, 21 = 3 × 7, so it produces a recurring non-terminating decimal).' },
          { question: 'Convert 0.12̄ (only 2 has bar) into a fraction:', answer: '(12 - 1) / 90 = 11/90.' },
          { question: 'Compute: 0.05 × 0.02', answer: '0.001 (5 × 2 = 10, total 2 + 2 = 4 decimal places ➔ 0.0010 = 0.001).' },
        ],
        quickQuiz: [
          {
            id: 'qq-dec-2a',
            question: 'Convert the repeating decimal 0.555... into a vulgar fraction in simplest form:',
            options: ['5/10', '1/2', '5/9', '55/99'],
            correctIndex: 2,
            explanation: 'Let x = 0.555... 10x = 5.555... 10x - x = 5 => 9x = 5 => x = 5/9.',
          },
          {
            id: 'qq-dec-2b',
            question: 'What is the value of 0.0048 ÷ 0.06?',
            options: ['0.8', '0.08', '0.008', '8.0'],
            correctIndex: 1,
            explanation: 'Multiply both by 100 to make divisor 6: 0.48 ÷ 6 = 0.08.',
          },
        ],
      },
      {
        id: 'math-topic-3',
        topicNumber: '2.3',
        title: 'Fractions: Types, Comparison, Four Operations & Reciprocals (اڻپور)',
        readTime: '9 min read',
        summary: 'In-depth coverage of proper, improper, mixed, like, unlike, and equivalent fractions; cross-multiplication comparison algorithms; operations (+, -, ×, ÷); and BODMAS order in complex fraction simplification.',
        highYieldAlert: 'STEDA Fraction Traps: (1) Division of fractions: NEVER divide directly; invert the second fraction (divisor) to its reciprocal and multiply: (a/b) ÷ (c/d) = (a/b) × (d/c). (2) Comparing fractions: Cross multiply a/b and c/d. If a×d > b×c, then a/b > c/d. (3) Mixed Fraction Conversion: 3 2/5 = (3 × 5 + 2) / 5 = 17/5.',
        concepts: [
          {
            conceptTitle: 'Taxonomy of Fractions (اڻپورن جا قسم)',
            explanation: 'Fractions represent equal parts of a whole or collection, expressed as Numerator/Denominator (ڳڻيندڙ / ونڊيندڙ).',
            bulletPoints: [
              'Proper Fraction (واجب اڻپور): Numerator is strictly less than denominator (N < D). Value is strictly less than 1 (e.g., 2/3, 5/8, 7/12).',
              'Improper Fraction (غير واجب اڻپور): Numerator is greater than or equal to denominator (N ≥ D). Value is 1 or greater (e.g., 7/4, 9/5, 12/7).',
              'Mixed Fraction (مرڪب اڻپور): Composed of an integer whole part and a proper fraction part (e.g., 2 3/4 = 11/4).',
              'Like vs. Unlike Fractions (هم مخرج ۽ غير هم مخرج): Like fractions share identical denominators (e.g., 2/7, 5/7); unlike fractions have different denominators (e.g., 2/3, 4/5).',
              'Equivalent Fractions (هم قدر اڻپور): Fractions that represent the identical value obtained by multiplying or dividing numerator and denominator by the same non-zero integer (e.g., 1/2 = 2/4 = 3/6 = 4/8).',
            ],
            keyTerms: [
              { term: 'Reciprocal / Multiplicative Inverse (ضربي ابتو)', definition: 'The fraction obtained by swapping numerator and denominator. The product of any non-zero fraction and its reciprocal is always 1: (a/b) × (b/a) = 1.' },
              { term: 'Simplest / Irreducible Form (آخري مختصر صورت)', definition: 'When the HCF of the numerator and denominator is strictly 1.' },
            ],
          },
          {
            conceptTitle: 'Operations & Comparison Algorithms',
            explanation: 'Systematic methods for evaluating multi-step fraction expressions.',
            bulletPoints: [
              'Comparison Technique: To compare 5/8 and 7/11, cross-multiply: 5 × 11 = 55, and 8 × 7 = 56. Since 56 > 55, 7/11 > 5/8.',
              'Addition & Subtraction: Convert unlike fractions into like fractions by finding the LCM of the denominators, then add/subtract numerators directly.',
              'Multiplication: Multiply numerators together and denominators together directly: (a/b) × (c/d) = (ac) / (bd).',
              'Division: Multiply by the reciprocal of the divisor: (a/b) ÷ (c/d) = (a/b) × (d/c) = (ad) / (bc).',
            ],
          },
        ],
        comparisonTable: {
          title: 'Classification and Real-World Behavior of Fractions',
          headers: ['Fraction Type', 'Mathematical Condition', 'Value Relative to 1', 'Example', 'Conversion Form'],
          rows: [
            ['Proper', 'Numerator < Denominator', 'Value < 1', '3 / 4', '0.75'],
            ['Improper', 'Numerator ≥ Denominator', 'Value ≥ 1', '7 / 4', '1 3/4'],
            ['Mixed', 'Whole Number + Proper', 'Value > 1', '2 1/3', '7 / 3'],
            ['Unit Fraction', 'Numerator = 1', 'Value ≤ 1', '1 / 6', '0.166...'],
          ],
        },
        classroomApplication: 'Use circular pizza paper cuts and fractional fraction strips to visually demonstrate why 1/2 ÷ 1/4 = 2 (asking: "how many 1/4 slices fit inside 1/2 of a pizza?"). This eliminates mechanical rote inversion errors.',
        mnemonicAid: 'FRACTION DIVISION: KEEP (first fraction), CHANGE (division to multiplication), FLIP (second fraction to reciprocal).',
        frequentExamQuestions: [
          { question: 'Which is greater: 5/6 or 7/8?', answer: '7/8 (Cross multiply: 5 × 8 = 40; 6 × 7 = 42. Since 42 > 40, 7/8 is greater).' },
          { question: 'Solve: 2 1/3 + 3 1/2', answer: '7/3 + 7/2 = (14 + 21)/6 = 35/6 = 5 5/6.' },
          { question: 'Solve: (3/5 ÷ 9/10) × 3/4', answer: '(3/5 × 10/9) × 3/4 = (30/45) × 3/4 = (2/3) × 3/4 = 6/12 = 1/2.' },
        ],
        quickQuiz: [
          {
            id: 'qq-frac-3a',
            question: 'What is the reciprocal of the mixed number 2 3/5?',
            options: ['5/13', '13/5', '5/2', '2 5/3'],
            correctIndex: 0,
            explanation: 'Convert mixed to improper: 2 3/5 = (2 × 5 + 3)/5 = 13/5. The reciprocal is obtained by swapping numerator and denominator = 5/13.',
          },
          {
            id: 'qq-frac-3b',
            question: 'Solve: 5/8 - 1/6',
            options: ['4/2', '11/24', '13/24', '1/2'],
            correctIndex: 1,
            explanation: 'LCM of 8 and 6 is 24. 5/8 = 15/24; 1/6 = 4/24. 15/24 - 4/24 = 11/24.',
          },
        ],
      },
      {
        id: 'math-topic-4',
        topicNumber: '2.4',
        title: 'Least Common Multiple - LCM (ذواضعاف اقل - طريقا ۽ مسئلا)',
        readTime: '10 min read',
        summary: 'Comprehensive mastery of LCM by Prime Factorization and Common Division Ladder methods, finding the LCM of 3+ numbers, LCM of fractions formula, and classic real-world exam applications (bells ringing together, race laps, synchronized lights).',
        highYieldAlert: 'STEDA Classic Question Types: (1) Simultaneous Toll: "Three bells ring at intervals of 12, 15, and 18 minutes. At what time will they toll together?" ➔ ALWAYS find the LCM! (2) Smallest Number Divided: "Find the smallest number which when divided by 12, 16, 24 leaves a remainder of 5" ➔ Required number = LCM(12, 16, 24) + 5. (3) LCM of Fractions Formula = LCM of Numerators / HCF of Denominators.',
        concepts: [
          {
            conceptTitle: 'Definition & Prime Factorization Method',
            explanation: 'The Least Common Multiple (LCM / ذواضعاف اقل) of two or more natural numbers is the smallest non-zero common multiple divisible by each of them.',
            bulletPoints: [
              'Multiple: The product of a given number and any integer (e.g., multiples of 4 are 4, 8, 12, 16, 20...).',
              'Prime Factorization Rule: Express each number as a product of prime powers. The LCM is the product of the HIGHEST powers of ALL prime factors involved.',
              'Example for 12, 18, and 30: 12 = 2² × 3; 18 = 2 × 3²; 30 = 2 × 3 × 5. Highest powers: 2², 3², 5¹. LCM = 4 × 9 × 5 = 180.',
              'Common Division (Ladder) Method: Write numbers in a row, divide by common prime divisors starting with 2, and continue until all bottom quotients are 1.',
            ],
            keyTerms: [
              { term: 'Multiple (ضارب / ڀاڱو)', definition: 'A number that can be divided by another number without a remainder.' },
              { term: 'Common Multiple (مشترڪ ضارب)', definition: 'A number that is a multiple of two or more given numbers.' },
            ],
          },
          {
            conceptTitle: 'LCM of Fractions & Word Problem Archetypes',
            explanation: 'Sukkur IBA uses word problem archetypes that test whether candidates can recognize LCM scenarios without explicitly naming the term.',
            bulletPoints: [
              'Formula for LCM of Fractions: LCM = (LCM of Numerators) / (HCF of Denominators).',
              'Interval Synchronization Problems: When objects perform cyclic repetitive tasks (bells ringing, traffic signals flashing, planets aligning), the next simultaneous event occurs at the LCM of their intervals.',
              'Race Track Problems: Two runners running around a circular track in 10 minutes and 15 minutes will meet again at the starting point after LCM(10, 15) = 30 minutes.',
              'Smallest Number with Remainder: To find the least number which when divided by x, y, z leaves remainder r in each case: Answer = LCM(x, y, z) + r.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Prime Factor Selection: LCM vs. HCF',
          headers: ['Criterion', 'LCM (Least Common Multiple)', 'HCF (Highest Common Factor)'],
          rows: [
            ['Prime Factor Scope', 'Takes ALL prime factors appearing in any number', 'Takes ONLY prime factors COMMON to all numbers'],
            ['Power Selection', 'Takes the HIGHEST power of each prime', 'Takes the LOWEST power of common primes'],
            ['Magnitude Relation', 'Always ≥ largest original number', 'Always ≤ smallest original number'],
            ['Fractions Operation', 'LCM(num) / HCF(den)', 'HCF(num) / LCM(den)'],
          ],
        },
        classroomApplication: 'Teach LCM to Class 5 using a visual number line or rhythm clapping: Group A claps every 3 beats, Group B claps every 4 beats. Students hear and see that the simultaneous clap happens at beat 12, 24, 36.',
        mnemonicAid: 'LCM IS LARGE: Takes ALL prime factors raised to their HIGHEST powers.',
        frequentExamQuestions: [
          { question: 'Three traffic lights change after 48 sec, 72 sec, and 108 sec. If they change together at 8:20 AM, when will they change together next?', answer: '432 seconds = 7 min 12 sec. Next change: 8:27:12 AM (LCM of 48, 72, 108 = 432).' },
          { question: 'Find the LCM of 2/3, 4/9, and 5/6.', answer: 'LCM = LCM(2, 4, 5) / HCF(3, 9, 6) = 20 / 3 = 6 2/3.' },
          { question: 'Find the smallest number which when divided by 6, 8, and 12 leaves a remainder of 3 in each case.', answer: '27 (LCM(6, 8, 12) = 24. Required number = 24 + 3 = 27. Check: 27 ÷ 6 = 4 R3, 27 ÷ 8 = 3 R3).' },
        ],
        quickQuiz: [
          {
            id: 'qq-lcm-4a',
            question: 'What is the LCM of 14, 21, and 28?',
            options: ['42', '56', '84', '112'],
            correctIndex: 2,
            explanation: '14 = 2 × 7; 21 = 3 × 7; 28 = 2² × 7. LCM = 2² × 3 × 7 = 4 × 3 × 7 = 84.',
          },
          {
            id: 'qq-lcm-4b',
            question: 'Find the LCM of the fractions 3/4 and 6/7:',
            options: ['6', '3/28', '6/28', '18/28'],
            correctIndex: 0,
            explanation: 'LCM = LCM of Numerators (3, 6) / HCF of Denominators (4, 7). LCM(3, 6) = 6. HCF(4, 7) = 1 (co-prime). LCM = 6 / 1 = 6.',
          },
        ],
      },
      {
        id: 'math-topic-5',
        topicNumber: '2.5',
        title: 'Highest Common Factor - HCF / GCD & The Master Theorem (عاد اعظم)',
        readTime: '10 min read',
        summary: 'Methods to determine HCF (Factor listing, Prime Factorization, Long Division / Euclidean Algorithm), Co-prime relationships, HCF of fractions, real-world partitioning problems, and the Golden Master Theorem: Product of Two Numbers = LCM × HCF.',
        highYieldAlert: 'THE GOLDEN MASTER THEOREM: For ANY two numbers A and B: A × B = LCM(A, B) × HCF(A, B). If given Product and HCF, LCM = Product / HCF. If given Product and LCM, HCF = Product / LCM. IMPORTANT: This theorem strictly applies to TWO numbers; it does NOT hold directly for three numbers (A × B × C ≠ LCM × HCF)!',
        concepts: [
          {
            conceptTitle: 'Definition & Methods of Finding HCF',
            explanation: 'The Highest Common Factor (HCF / عاد اعظم), also known as the Greatest Common Divisor (GCD), is the greatest natural number that divides each given number without leaving a remainder.',
            bulletPoints: [
              'Factor / Divisor: A number that divides another number completely with remainder zero.',
              'Method 1 (Prime Factorization): Write each number in prime factor powers. HCF is the product of the LOWEST powers of ONLY the COMMON prime factors.',
              'Method 2 (Continuous Long Division / Euclidean Algorithm): Divide the larger number by the smaller. Make the remainder the new divisor and the previous divisor the new dividend. Continue until the remainder is 0. The final divisor is the HCF.',
              'Example: Find HCF of 144 and 192: 192 ÷ 144 = 1 R 48; 144 ÷ 48 = 3 R 0. The final divisor is 48, so HCF = 48.',
            ],
            keyTerms: [
              { term: 'Euclidean Algorithm (يوڪلڊ وارو وند وارو طريقو)', definition: 'An efficient iterative division method for computing the greatest common divisor of two numbers by repeated remainder division.' },
              { term: 'Co-Prime Pair (هم مفرد جوڙو)', definition: 'Two numbers whose HCF is 1 (e.g., 15 and 28). Their product is equal to their LCM.' },
            ],
          },
          {
            conceptTitle: 'The Master Theorem & Fraction Formula',
            explanation: 'The relationship connecting LCM, HCF, and numbers is the single most recurring quantitative question in Sindh government exams.',
            bulletPoints: [
              'Master Theorem: (First Number) × (Second Number) = LCM × HCF.',
              'Derivation 1: LCM = (A × B) / HCF.',
              'Derivation 2: HCF = (A × B) / LCM.',
              'Formula for HCF of Fractions: HCF = (HCF of Numerators) / (LCM of Denominators).',
              'Word Problem Clues: Words like "greatest length", "maximum capacity", "largest tile", or "divide equally without remainder" signify finding the HCF.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Word Problem Recognition: HCF vs. LCM',
          headers: ['Problem Description', 'Mathematical Target', 'Real-World Example', 'Action Required'],
          rows: [
            ['Simultaneous recurrence / Synchronized events', 'LCM', 'Bells ringing together, lights flashing together', 'Find LCM of time intervals'],
            ['Minimum number / Least quantity divisible', 'LCM', 'Smallest number divided by a, b, c leaving remainder', 'Find LCM + remainder'],
            ['Maximum size / Greatest division without waste', 'HCF', 'Largest measuring tape, largest tile to pave a room', 'Find HCF of dimensions'],
            ['Equal distribution / Partitioning', 'HCF', 'Distributing 48 apples and 64 oranges equally into baskets', 'Find HCF of quantities'],
          ],
        },
        classroomApplication: 'Use grid paper to demonstrate HCF: A rectangle of 12 cm by 18 cm can be tiled with 1×1, 2×2, 3×3, or 6×6 squares. The largest possible square tile without cutting is 6×6 cm (HCF of 12 and 18).',
        mnemonicAid: 'MASTER THEOREM: A × B = L × H (Number Product = LCM × HCF).',
        frequentExamQuestions: [
          { question: 'The product of two numbers is 2,028 and their HCF is 13. Find their LCM.', answer: '156 (LCM = Product / HCF = 2,028 / 13 = 156).' },
          { question: 'What is the HCF of 2/3, 8/9, and 16/81?', answer: 'HCF = HCF(2, 8, 16) / LCM(3, 9, 81) = 2 / 81.' },
          { question: 'Find the greatest length of a measuring tape that can measure lengths of 12m, 18m, and 24m exactly.', answer: '6 meters (HCF of 12, 18, and 24 is 6).' },
          { question: 'Two numbers are in the ratio 3:4 and their HCF is 4. Find their LCM.', answer: 'Numbers are 3×4 = 12 and 4×4 = 16. LCM = LCM(12, 16) = 48. (Or LCM = 3 × 4 × HCF = 3 × 4 × 4 = 48).' },
        ],
        quickQuiz: [
          {
            id: 'qq-hcf-5a',
            question: 'The LCM of two numbers is 480 and their HCF is 20. If one of the numbers is 60, find the other number:',
            options: ['120', '140', '160', '180'],
            correctIndex: 2,
            explanation: 'By Master Theorem: A × B = LCM × HCF => 60 × B = 480 × 20 => 60B = 9,600 => B = 9,600 / 60 = 160.',
          },
          {
            id: 'qq-hcf-5b',
            question: 'What is the HCF of two co-prime numbers?',
            options: ['0', '1', 'Their sum', 'Their product'],
            correctIndex: 1,
            explanation: 'By mathematical definition, co-prime numbers share no common positive divisor other than 1. Therefore, their HCF is always strictly 1.',
          },
        ],
      },
      {
        id: 'math-topic-6',
        topicNumber: '2.6',
        title: 'Ratios, Proportions & Unitary Method (Time & Work)',
        readTime: '7 min read',
        summary: 'Direct and inverse proportions, compound ratios, and solving standard speed-distance-time and worker-hours productivity questions.',
        highYieldAlert: 'STEDA Exam Formula: Worker × Days × Hours / Work Done = Constant (M1 × D1 × H1 / W1 = M2 × D2 × H2 / W2). Use this formula to solve any STS time & work question in 20 seconds!',
        concepts: [
          {
            conceptTitle: 'Direct vs. Inverse Proportion',
            explanation: 'In direct proportion, when quantity A increases, quantity B increases proportionally (y/x = k). In inverse proportion, when quantity A increases, quantity B decreases proportionally (x × y = k).',
            bulletPoints: [
              'Speed & Time for a fixed distance: Inverse proportion (higher speed = less time).',
              'Number of workers & Days to complete a project: Inverse proportion (more workers = fewer days).',
              'Unitary method: Find the value of a single unit first by dividing, then multiply to find the value of required units.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Direct vs. Inverse Proportion Quick Guide',
          headers: ['Concept', 'Direct Proportion', 'Inverse Proportion'],
          rows: [
            ['Relationship', 'Both quantities increase or decrease together.', 'One quantity increases as the other decreases.'],
            ['Mathematical Constant', 'y / x = k (Ratio remains constant)', 'x · y = k (Product remains constant)'],
            ['Real-world Example', 'Books bought vs Total Cost paid', 'Number of teachers grading vs Hours needed'],
            ['Formula Setup', 'x1 / y1 = x2 / y2', 'x1 · y1 = x2 · y2'],
          ],
        },
        classroomApplication: 'Introduce unitary method with real classroom items: "If 5 notebook packets cost Rs. 500, how much do 8 packets cost?" Have students find the 1-packet cost first (Rs. 100).',
        mnemonicAid: 'TIME & WORK: M1·D1·H1 / W1 = M2·D2·H2 / W2.',
        frequentExamQuestions: [
          { question: 'If 8 teachers check 400 papers in 5 hours, how many papers will 12 teachers check in 6 hours?', answer: '720 papers (Rate = 400 / (8×5) = 10 papers/hr/teacher. Total = 12 × 6 × 10 = 720).' },
        ],
        quickQuiz: [
          {
            id: 'qq-math-2',
            question: 'If 15 workers can build a boundary wall in 8 days, how many days will 20 workers take to build the same wall?',
            options: ['4 days', '6 days', '10 days', '12 days'],
            correctIndex: 1,
            explanation: 'Inverse proportion: 15 × 8 = 20 × D => 120 = 20 × D => D = 6 days.',
          },
        ],
      },
      {
        id: 'math-topic-7',
        topicNumber: '2.7',
        title: 'Percentages, Profit & Loss & Geometry Mensuration',
        readTime: '7 min read',
        summary: 'Percentage change, cost price, selling price, profit/loss percentage, rectangular perimeter, triangular area, and circle circumference.',
        highYieldAlert: 'STEDA Mensuration Quick Fact: Perimeter of rectangle = 2(L + W). Area = L × W. Area of circle = πr². Circumference = 2πr.',
        concepts: [
          {
            conceptTitle: 'Profit and Loss Formulas',
            explanation: 'Profit = Selling Price (SP) - Cost Price (CP). Profit % = (Profit / CP) × 100. Loss % = (Loss / CP) × 100. Always compute profit or loss on Cost Price (CP), never on Selling Price unless explicitly stated.',
          },
          {
            conceptTitle: 'Central Tendency Statistics',
            explanation: 'Mean = Sum of values / Total count. Median = Middle value in an ordered dataset. Mode = Most frequently occurring value in the dataset.',
          },
        ],
        frequentExamQuestions: [
          { question: 'A school playground has length 60m and width 30m. What is its perimeter and area?', answer: 'Perimeter = 2(60+30) = 180m; Area = 60 × 30 = 1,800 m².' },
        ],
        quickQuiz: [
          {
            id: 'qq-math-3',
            question: 'An item bought for Rs. 800 is sold for Rs. 1,000. What is the profit percentage?',
            options: ['20%', '25%', '30%', '15%'],
            correctIndex: 1,
            explanation: 'Profit = 1,000 - 800 = Rs. 200. Profit % = (200 / 800) × 100 = 25%.',
          },
        ],
      },
      {
        id: 'math-topic-8',
        topicNumber: '2.8',
        title: 'Algebraic Expressions, Polynomials, Linear Equations & Factorization (الجبرا ۽ مساواتون)',
        readTime: '9 min read',
        summary: 'Algebraic terms, degrees of polynomials, standard identities (a+b)², (a-b)², (a²-b²), linear equations in one variable, and word problem translation in the DCAR Sindh Class 6-8 curriculum.',
        highYieldAlert: 'STEDA Algebraic Identities Rule: (a + b)² = a² + 2ab + b²; (a - b)² = a² - 2ab + b²; and a² - b² = (a - b)(a + b). Sukkur IBA frequently tests substitutions such as: if (x + 1/x) = 4, find (x² + 1/x²) = 4² - 2 = 14!',
        concepts: [
          {
            conceptTitle: 'Polynomial Anatomy & Classification',
            explanation: 'An algebraic expression consists of variables, constants, coefficients, and non-negative integer exponents.',
            bulletPoints: [
              'Degree of Polynomial: The highest power of the variable in the polynomial (e.g., 5x³ - 2x + 7 has degree 3).',
              'Classification by Terms: Monomial (1 term, e.g., 7x²), Binomial (2 terms, e.g., 3x - 5), Trinomial (3 terms, e.g., x² + 4x + 4).',
              'Linear Equation in One Variable: Standard form ax + b = 0 where a ≠ 0. The root is given by x = -b/a.',
              'Transposition Rules: When a term crosses the equal sign, addition becomes subtraction (+ → -) and multiplication becomes division (× → ÷).',
            ],
            keyTerms: [
              { term: 'Coefficient', definition: 'The numerical factor multiplying a variable (in -7x³, the coefficient is -7).' },
              { term: 'Degree', definition: 'The highest exponent of the variable occurring in a polynomial expression.' },
              { term: 'Identity', definition: 'An algebraic equation that holds true for every possible numerical value substituted for its variables.' },
            ],
          },
          {
            conceptTitle: 'Core Algebraic Factorization Patterns',
            explanation: 'Factoring decomposes an expression into a product of simpler irreducible factors.',
            bulletPoints: [
              'Taking Common Factors: ax + ay = a(x + y). Always inspect for the greatest common factor (GCF) first.',
              'Difference of Two Squares: a² - b² = (a + b)(a - b). Example: 16x² - 49 = (4x + 7)(4x - 7).',
              'Trinomial Splitting the Middle Term: For x² + bx + c, find two numbers p and q such that p + q = b and pq = c.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Algebraic Terminology Reference',
          headers: ['Expression Type', 'Definition', 'Example', 'Degree'],
          rows: [
            ['Linear', 'Highest variable power is 1', '3x - 8 = 7', '1'],
            ['Quadratic', 'Highest variable power is 2', '2x² + 5x - 3', '2'],
            ['Cubic', 'Highest variable power is 3', 'x³ - 4x² + x - 9', '3'],
          ],
        },
        classroomApplication: 'Help Class 7 students translate real-world word problems into algebra: "Aslam\'s age is 5 years more than twice Bilal\'s age" becomes A = 2B + 5. Use balance scales to physically demonstrate that whatever operation is applied to the left side must be applied to the right side.',
        mnemonicAid: 'B-O-D-M-A-S + Balance Scales (What you do to one side of the equation, you must do to the other).',
        frequentExamQuestions: [
          { question: 'If x + 1/x = 5, what is the value of x² + 1/x²?', answer: '23 (Formula: (x + 1/x)² - 2 = 25 - 2 = 23).' },
          { question: 'Solve for x: 3(x - 4) = 2x + 5', answer: 'x = 17 (3x - 12 = 2x + 5 => 3x - 2x = 5 + 12 => x = 17).' },
        ],
        quickQuiz: [
          {
            id: 'qq-math-8a',
            question: 'What is the complete factorization of the expression 25x² - 64y²?',
            options: ['(5x - 8y)²', '(5x + 8y)(5x - 8y)', '(25x - 64y)(x + y)', '(5x + 8y)²'],
            correctIndex: 1,
            explanation: 'Using the difference of squares identity a² - b² = (a + b)(a - b), where a = 5x and b = 8y.',
          },
          {
            id: 'qq-math-8b',
            question: 'If 4x - 7 = 21, what is the value of 2x + 3?',
            options: ['14', '17', '7', '19'],
            correctIndex: 1,
            explanation: '4x = 21 + 7 = 28 => x = 7. Then 2x + 3 = 2(7) + 3 = 14 + 3 = 17.',
          },
        ],
      },
      {
        id: 'math-topic-9',
        topicNumber: '2.9',
        title: 'Plane Geometry: Angles, Triangles, Polygons & Pythagoras Theorem (جاميٽري ۽ فثاغورث)',
        readTime: '8 min read',
        summary: 'Angle classifications, parallel lines and transversal angles, triangle angle sum theorem, polygon angle formula (n-2)×180°, and Pythagoras theorem (c² = a² + b²) in right-angled triangles.',
        highYieldAlert: 'STEDA Geometry Triplets & Rules: The sum of interior angles of ANY triangle is ALWAYS 180°. For any n-sided polygon, the sum of interior angles = (n - 2) × 180°. Common Pythagorean triplets tested by STS: (3, 4, 5), (5, 12, 13), (6, 8, 10), and (8, 15, 17)!',
        concepts: [
          {
            conceptTitle: 'Angles & Transversal Lines',
            explanation: 'When two parallel lines are intersected by a transversal line, specific geometric angle pairs are formed.',
            bulletPoints: [
              'Complementary Angles: Two angles whose sum equals 90° (e.g., 35° and 55°).',
              'Supplementary Angles: Two angles whose sum equals 180° (e.g., 110° and 70°).',
              'Vertically Opposite Angles: Formed by intersecting lines; they are always equal.',
              'Transversal Angles: Alternate interior angles are equal; Corresponding angles are equal; Consecutive interior angles are supplementary (sum = 180°).',
            ],
            keyTerms: [
              { term: 'Transversal', definition: 'A straight line that cuts across two or more other lines at different points.' },
              { term: 'Pythagorean Triplet', definition: 'A set of three positive integers a, b, and c that satisfy a² + b² = c².' },
            ],
          },
          {
            conceptTitle: 'Triangles, Polygons & Pythagoras Theorem',
            explanation: 'The mathematical properties governing 2D plane geometric figures.',
            bulletPoints: [
              'Classification of Triangles: Equilateral (all 3 sides equal, all angles 60°), Isosceles (2 equal sides and 2 equal opposite angles), Scalene (no equal sides).',
              'Right-Angled Triangle: Contains one 90° angle. The side opposite to 90° is the hypotenuse (longest side).',
              'Pythagoras Theorem: In a right-angled triangle, (Hypotenuse)² = (Base)² + (Perpendicular)². c² = a² + b².',
              'Interior Angles of a Polygon: Sum = (n - 2) × 180°. For a quadrilateral (n=4): (4-2)×180° = 360°. For a pentagon (n=5): (5-2)×180° = 540°.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Polygon Interior Angle Reference',
          headers: ['Polygon Name', 'Number of Sides (n)', 'Sum of Interior Angles', 'Regular Each Angle'],
          rows: [
            ['Triangle', '3', '180°', '60°'],
            ['Quadrilateral', '4', '360°', '90°'],
            ['Pentagon', '5', '540°', '108°'],
            ['Hexagon', '6', '720°', '120°'],
            ['Octagon', '8', '1080°', '135°'],
          ],
        },
        classroomApplication: 'Use cut-out paper triangles in Class 6: have pupils tear off the three corners and align them along a straight edge ruler to visually prove they form a straight 180° line.',
        mnemonicAid: 'Pythagoras rule: "H² = B² + P²" (High Buildings Stand on Strong Plinths).',
        frequentExamQuestions: [
          { question: 'In a right-angled triangle, if base = 6 cm and height = 8 cm, what is the hypotenuse?', answer: '10 cm (√[6² + 8²] = √[36 + 64] = √100 = 10 cm).' },
          { question: 'What is the sum of interior angles of a regular hexagon (6-sided polygon)?', answer: '720° (Formula: (6 - 2) × 180° = 4 × 180° = 720°).' },
        ],
        quickQuiz: [
          {
            id: 'qq-math-9a',
            question: 'Two angles are complementary. If one angle measures 38°, what is the measure of the second angle?',
            options: ['52°', '142°', '62°', '42°'],
            correctIndex: 0,
            explanation: 'Complementary angles add up to 90°. Therefore, 90° - 38° = 52°.',
          },
          {
            id: 'qq-math-9b',
            question: 'What is the length of the hypotenuse of a right-angled triangle with legs of length 5 cm and 12 cm?',
            options: ['13 cm', '15 cm', '17 cm', '14 cm'],
            correctIndex: 0,
            explanation: 'c = √(5² + 12²) = √(25 + 144) = √169 = 13 cm.',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // MODULE 3: GENERAL SCIENCE (10 MARKS)
  // -------------------------------------------------------------------------
  {
    id: 'tl-part-3-science',
    partNumber: 3,
    partCategory: 'Part I: Content Knowledge (50%)',
    subjectName: 'General Science',
    weightage: '10 Marks (10%)',
    marks: 10,
    targetLevel: 'Class 1 to 8 DCAR Sindh Textbook Curriculum',
    iconName: 'Atom',
    themeColor: 'from-amber-500 to-orange-600',
    badgeBg: 'bg-amber-100 dark:bg-amber-950/60',
    badgeText: 'text-amber-800 dark:text-amber-300',
    description: 'Fundamental concepts across life sciences, human physiology, plant biology, chemical matter, physics laws of motion, optical refraction, and planetary environmental science.',
    topics: [
      {
        id: 'sci-topic-1',
        topicNumber: '3.1',
        title: 'Cell Structure, Organelles & Human Body Systems',
        readTime: '7 min read',
        summary: 'Differences between plant and animal cells, cell organelles (mitochondria, ribosomes, chloroplasts, nucleus), and key human body systems (circulatory, respiratory, excretory).',
        highYieldAlert: 'STEDA Biology Essentials: "Powerhouse of the cell" = Mitochondria (ATP production); "Protein factory" = Ribosomes; "Universal Donor" = Blood Group O Negative; Gas exchange occurs in = Alveoli.',
        concepts: [
          {
            conceptTitle: 'Cellular Organelles',
            explanation: 'The cell is the basic structural and functional unit of life.',
            bulletPoints: [
              'Nucleus: The brain/control center of the cell containing hereditary genetic DNA chromatin.',
              'Mitochondria: Site of cellular respiration and ATP synthesis.',
              'Ribosomes: Complex RNA machines responsible for translating mRNA into protein chains.',
              'Chloroplasts: Plant-specific organelles containing chlorophyll where photosynthesis occurs.',
              'Cell Wall: Rigid outer boundary made of cellulose found in plant cells, bacteria, and fungi (absent in animal cells).',
            ],
          },
          {
            conceptTitle: 'Human Physiology Highlights',
            explanation: 'Blood circulation and respiration work together to supply oxygen and nutrients while removing metabolic waste.',
            bulletPoints: [
              'Heart: Four chambers (two atria, two ventricles). Left ventricle pumps oxygenated blood to the body via the aorta.',
              'Excretory: Kidneys filter urea and metabolic waste from blood through microscopic units called nephrons.',
              'Respiratory: Trachea branches into bronchi, then bronchioles, terminating in micro-alveoli where gas diffusion occurs.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Plant Cell vs. Animal Cell Comparison',
          headers: ['Feature', 'Plant Cell', 'Animal Cell'],
          rows: [
            ['Cell Wall', 'Present (Rigid, composed of cellulose)', 'Absent (Only flexible plasma membrane)'],
            ['Chloroplasts', 'Present (Contain chlorophyll for photosynthesis)', 'Absent'],
            ['Vacuoles', 'One large central permanent vacuole', 'Small, temporary, multiple vacuoles'],
            ['Centrioles', 'Absent in higher plants', 'Present (Assists in mitotic spindle formation)'],
          ],
        },
        classroomApplication: 'Demonstrate plant cells in class using an onion epidermal peel stained with iodine under a standard compound school microscope to show cell walls and nuclei.',
        frequentExamQuestions: [
          { question: 'Which organelle is responsible for synthesizing proteins in cells?', answer: 'Ribosome.' },
          { question: 'Which blood vessel carries deoxygenated blood from the heart to the lungs?', answer: 'Pulmonary Artery (The only artery carrying deoxygenated blood).' },
          { question: 'Which blood cells fight infections and produce antibodies in the human immune system?', answer: 'White Blood Cells (Leukocytes).' },
          { question: 'What is the functional structural unit of the human kidney?', answer: 'Nephron.' },
        ],
        quickQuiz: [
          {
            id: 'qq-sci-1',
            question: 'Which blood group is universally known as the "Universal Recipient" in ABO blood classification?',
            options: ['O Negative', 'A Positive', 'AB Positive', 'B Negative'],
            correctIndex: 2,
            explanation: 'Type AB Positive individuals have both A and B surface antigens and Rh factor with no ABO antibodies, allowing safe receipt of all red blood cells.',
          },
          {
            id: 'qq-sci-1b',
            question: 'Which hormone secreted by the pancreas regulates blood glucose levels by enabling cells to absorb sugar?',
            options: ['Thyroxine', 'Insulin', 'Adrenaline', 'Estrogen'],
            correctIndex: 1,
            explanation: 'Insulin is produced by the beta cells of the Islets of Langerhans in the pancreas to lower elevated blood glucose levels.',
          },
        ],
      },
      {
        id: 'sci-topic-2',
        topicNumber: '3.2',
        title: 'Physics: Laws of Motion, Light Refraction, Waves & Electricity',
        readTime: '8 min read',
        summary: 'Newton’s three laws of motion, speed vs. velocity, optical refraction vs. reflection, sound waves, and Ohm’s law in direct electrical circuits.',
        highYieldAlert: 'STEDA Physics Alert: Newton’s 1st Law is the Law of Inertia. Newton’s 2nd Law: F = m × a. Newton’s 3rd Law: Action = -Reaction. SI unit of Resistance is Ohm (Ω); Power is Watt (W); Force is Newton (N); Sound travels FASTEST in solids, slower in liquids, slowest in gases, and CANNOT travel through vacuum!',
        concepts: [
          {
            conceptTitle: 'Newton’s Laws of Motion & Gravitation',
            explanation: 'Sir Isaac Newton formulated the foundation of classical mechanics and universal gravitation.',
            bulletPoints: [
              '1st Law (Inertia): An object remains at rest or moves in a straight line at constant speed unless acted upon by an external net force.',
              '2nd Law: Acceleration is directly proportional to net force and inversely proportional to mass (F = ma). Unit of force: Newton (kg·m/s²).',
              '3rd Law: For every action, there is an equal and opposite reaction (forces always occur in matched pairs).',
              'Mass vs. Weight: Mass (measured in kg) is the scalar quantity of matter in an object and remains constant everywhere. Weight (W = mg, measured in Newtons) is the gravitational force exerted on the object and changes with local gravity (g ≈ 9.8 m/s² on Earth).',
            ],
          },
          {
            conceptTitle: 'Light, Optics & Wave Mechanics',
            explanation: 'Light behaves as electromagnetic transverse waves, while sound behaves as mechanical longitudinal waves requiring a material medium.',
            bulletPoints: [
              'Refraction: Bending of light as it crosses the boundary between media of different optical densities due to a change in speed. From rarer (air) to denser (glass/water), light bends TOWARDS the normal.',
              'Lenses: Convex (converging) lenses correct Hyperopia (long-sightedness). Concave (diverging) lenses correct Myopia (short-sightedness).',
              'Sound Waves: Speed of sound in air is approximately 343 m/s (at 20°C). Sound speed: Solids > Liquids > Gases. Sound CANNOT travel in a vacuum.',
              'Electricity & Ohm’s Law: Voltage = Current × Resistance (V = I × R). In series circuits, current is identical everywhere; in parallel circuits, voltage is identical across all parallel branches.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Convex vs. Concave Lens Comparison',
          headers: ['Parameter', 'Convex Lens (Converging)', 'Concave Lens (Diverging)'],
          rows: [
            ['Shape', 'Thicker in the center, thinner at edges', 'Thinner in the center, thicker at edges'],
            ['Light Action', 'Converges parallel light rays to a focal point', 'Diverges parallel light rays outwards'],
            ['Vision Correction', 'Corrects Hyperopia (Far-sightedness)', 'Corrects Myopia (Near-sightedness)'],
            ['Image Formed', 'Real & inverted (or virtual when object inside F)', 'Always virtual, erect, and diminished'],
          ],
        },
        classroomApplication: 'Demonstrate Ohm’s law and circuit differences using a simple 9V battery, flashlight bulb, and copper wires to show why household electrical wiring is always installed in parallel rather than in series.',
        frequentExamQuestions: [
          { question: 'What type of lens is prescribed by optometrists to correct myopia (near-sightedness)?', answer: 'Concave (Diverging) Lens.' },
          { question: 'What is the formula for Ohm’s Law linking voltage, current, and resistance?', answer: 'V = I × R (Voltage = Current × Resistance).' },
          { question: 'Can sound waves travel through an empty vacuum in outer space?', answer: 'No (Sound is a mechanical wave requiring a physical material medium to propagate).' },
        ],
        quickQuiz: [
          {
            id: 'qq-sci-2',
            question: 'What happens to a ray of light when it passes from water into air?',
            options: [
              'It bends towards the normal line',
              'It bends away from the normal line',
              'Its speed decreases',
              'It does not change path',
            ],
            correctIndex: 1,
            explanation: 'Moving from a denser optical medium (water) to a rarer medium (air), light speeds up and bends away from the normal line.',
          },
          {
            id: 'qq-sci-2b',
            question: 'If an electric heater drawing 5 Amperes of current is plugged into a 220-Volt supply, what is its internal resistance?',
            options: ['1100 Ohms', '44 Ohms', '225 Ohms', '0.022 Ohms'],
            correctIndex: 1,
            explanation: 'According to Ohm’s Law, R = V / I = 220 / 5 = 44 Ohms (Ω).',
          },
        ],
      },
      {
        id: 'sci-topic-3',
        topicNumber: '3.3',
        title: 'Chemistry Foundations: Matter, Atoms, Periodic Table, Mixtures & Acids',
        readTime: '8 min read',
        summary: 'States of matter, atomic structure (protons, neutrons, electrons), atomic number vs. mass number, physical vs. chemical changes, elements, compounds, mixtures, and the acid-base pH scale.',
        highYieldAlert: 'STEDA Chemistry Essentials: Atomic Number (Z) = Number of Protons. Mass Number (A) = Protons + Neutrons. Isotopes have the SAME atomic number but DIFFERENT mass numbers. Pure water has pH = 7 (Neutral); Acids have pH < 7 (turn blue litmus red); Bases/Alkalis have pH > 7 (turn red litmus blue). Rusting of iron is a CHEMICAL change; Melting of ice is a PHYSICAL change.',
        concepts: [
          {
            conceptTitle: 'States of Matter & Atomic Structure',
            explanation: 'All matter is composed of atoms, which consist of a dense positive central nucleus surrounded by orbiting negative electrons.',
            bulletPoints: [
              'States of Matter: Solid (definite shape and volume), Liquid (indefinite shape, definite volume), Gas (indefinite shape and volume), and Plasma (ionized high-energy gas).',
              'Subatomic Particles: Protons (charge +1, mass 1 amu, located in nucleus), Neutrons (charge 0, mass 1 amu, located in nucleus), Electrons (charge -1, mass ≈ 1/1836 amu, orbiting in electron shells).',
              'Elements vs. Compounds: An Element consists of only one kind of atom (e.g., O2, Fe, Au). A Compound consists of two or more elements chemically bonded in fixed proportions (e.g., H2O, NaCl, CO2).',
              'Mixtures: Homogeneous (uniform composition throughout, e.g., salt dissolved in water, clean air) vs. Heterogeneous (non-uniform, distinguishable phases, e.g., sand in water, oil and vinegar).',
            ],
            keyTerms: [
              { term: 'Atomic Number (Z)', definition: 'The total number of protons in the nucleus of an atom, uniquely defining the chemical identity of the element.' },
              { term: 'Mass Number (A)', definition: 'The total sum of protons and neutrons in the nucleus of an atom (A = Z + N).' },
              { term: 'Isotopes', definition: 'Atoms of the same element having identical atomic numbers (protons) but differing numbers of neutrons (e.g., Carbon-12, Carbon-14).' },
            ],
          },
          {
            conceptTitle: 'Acids, Bases, Salts & Chemical Reactions',
            explanation: 'Acids produce hydrogen ions (H+) in aqueous solutions, while bases produce hydroxide ions (OH-). Their reaction forms neutral salts and water.',
            bulletPoints: [
              'The pH Scale: Measures acidity from 0 to 14. 0–6.9 = Acidic (e.g., stomach gastric acid pH 1.5–2, lemon juice pH 2.2); 7.0 = Neutral (pure water); 7.1–14 = Alkaline/Basic (e.g., human blood pH 7.35–7.45, bleach pH 12).',
              'Neutralization Reaction: Acid + Base → Salt + Water (e.g., HCl + NaOH → NaCl + H2O).',
              'Common Chemical Formulas: Common Salt = NaCl (Sodium Chloride); Baking Soda = NaHCO3 (Sodium Bicarbonate); Washing Soda = Na2CO3·10H2O; Limestone/Marble = CaCO3 (Calcium Carbonate); Bleaching Powder = CaOCl2.',
              'Physical vs. Chemical Change: In physical changes, no new chemical bonds are forged or broken (e.g., boiling water, cutting paper). In chemical changes, new substances with distinct chemical properties are synthesized (e.g., burning wood, digestion of food, rusting of iron).',
            ],
          },
        ],
        comparisonTable: {
          title: 'Physical Change vs. Chemical Change Comparison',
          headers: ['Dimension', 'Physical Change', 'Chemical Change'],
          rows: [
            ['Substance Formed', 'No new chemical substance is formed', 'One or more entirely new substances are produced'],
            ['Reversibility', 'Usually easily reversible (e.g., freezing/melting)', 'Usually irreversible by simple physical means'],
            ['Energy Change', 'Minimal absorption or evolution of energy', 'Significant energy released (exothermic) or absorbed (endothermic)'],
            ['Examples', 'Boiling water, dissolution of sugar in tea', 'Rusting of iron, burning magnesium ribbon, digestion'],
          ],
        },
        classroomApplication: 'Demonstrate the acid-base pH indicator in class using boiled red cabbage juice as a natural universal indicator: it turns vibrant red in vinegar (acid) and dark green/yellow in soap solution (base).',
        mnemonicAid: 'B-A-R -> Blue Litmus to Red = Acid. R-B-B -> Red Litmus to Blue = Base.',
        frequentExamQuestions: [
          { question: 'What is the chemical name and chemical formula of common baking soda?', answer: 'Sodium Bicarbonate (NaHCO3).' },
          { question: 'What is the pH value of pure distilled neutral water at room temperature (25°C)?', answer: 'pH 7.0.' },
          { question: 'Is the rusting of an iron nail considered a physical or a chemical change?', answer: 'Chemical Change (Iron reacts with oxygen and moisture to synthesize hydrated iron oxide Fe2O3·xH2O).' },
        ],
        quickQuiz: [
          {
            id: 'qq-sci-3a',
            question: 'An atom of Carbon has 6 protons, 6 electrons, and 8 neutrons. What is its Mass Number (A)?',
            options: ['6', '12', '14', '20'],
            correctIndex: 2,
            explanation: 'Mass Number (A) = Protons + Neutrons = 6 + 8 = 14 (Carbon-14 isotope).',
          },
          {
            id: 'qq-sci-3b',
            question: 'When hydrochloric acid (HCl) reacts with sodium hydroxide (NaOH), what are the resulting products?',
            options: ['Carbon dioxide and water', 'Sodium chloride (NaCl) and water (H2O)', 'Hydrogen gas and sodium', 'Oxygen and sodium chloride'],
            correctIndex: 1,
            explanation: 'This is a classical acid-base neutralization reaction: HCl + NaOH → NaCl + H2O (Salt and Water).',
          },
        ],
      },
      {
        id: 'sci-topic-4',
        topicNumber: '3.4',
        title: 'Ecology, Photosynthesis, Environmental Pollution & Conservation',
        readTime: '8 min read',
        summary: 'Ecosystem structures, food chains and webs, the 10% energy transfer rule, the chemical equation of photosynthesis, greenhouse gases, global warming, and environmental protection in Sindh.',
        highYieldAlert: 'STEDA Ecology Essentials: Photosynthesis Equation: 6CO2 + 6H2O + Sunlight → C6H12O6 + 6O2 (converts radiant light energy into chemical potential energy). Gas exchange in leaves occurs through STOMATA controlled by guard cells. Primary Greenhouse Gas = Carbon Dioxide (CO2) & Methane (CH4). Lindeman’s 10% Rule: Only 10% of energy transfers from one trophic level to the next!',
        concepts: [
          {
            conceptTitle: 'Ecosystem Dynamics & Food Webs',
            explanation: 'An ecosystem consists of biotic (living: plants, animals, bacteria) and abiotic (non-living: sunlight, air, water, soil) components interacting within a defined geographic habitat.',
            bulletPoints: [
              'Trophic Levels: Producers / Autotrophs (green plants synthesizing glucose via photosynthesis) → Primary Consumers / Herbivores (cattle, deer, insects) → Secondary Consumers / Carnivores (frogs, foxes) → Tertiary / Apex Predators (hawks, lions) → Decomposers / Saprophytes (bacteria, fungi recycling nutrients).',
              'The 10% Energy Rule (Lindeman’s Law): Only approximately 10% of the energy stored as biomass in one trophic level is transferred to the next level. The remaining 90% is lost as metabolic heat or cellular work.',
              'Food Chain vs. Food Web: A food chain is a single linear pathway of energy flow; a food web is an interconnected network of multiple overlapping food chains ensuring ecological resilience.',
            ],
          },
          {
            conceptTitle: 'Photosynthesis & Cellular Respiration',
            explanation: 'Photosynthesis and respiration form a complementary biological carbon-oxygen cycle.',
            bulletPoints: [
              'Photosynthesis Formula: 6CO2 + 6H2O + Sunlight (in Chloroplasts) → C6H12O6 (Glucose) + 6O2 (Oxygen released).',
              'Role of Chlorophyll: Green pigment inside plant chloroplasts that absorbs blue and red wavelengths while reflecting green light.',
              'Cellular Respiration Formula: C6H12O6 + 6O2 → 6CO2 + 6H2O + 36–38 ATP (Adenosine Triphosphate energy).',
              'Greenhouse Effect & Climate Change: Burning fossil fuels elevates atmospheric CO2, trapping infrared thermal radiation and accelerating global warming, glacier retreat in the Karakoram/Himalayas, and catastrophic flooding along the Indus River basin.',
              'Ozone Layer (O3): Located in the Stratosphere, it absorbs harmful ultraviolet (UV-B) solar radiation. Chlorofluorocarbons (CFCs) deplete stratospheric ozone.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Photosynthesis vs. Cellular Respiration Comparison',
          headers: ['Parameter', 'Photosynthesis', 'Cellular Respiration'],
          rows: [
            ['Primary Purpose', 'Stores energy in organic glucose molecules', 'Releases chemical energy (ATP) from glucose for cellular work'],
            ['Cellular Organelle', 'Chloroplasts', 'Mitochondria'],
            ['Raw Materials (Reactants)', 'Carbon Dioxide (CO2) and Water (H2O) with Sunlight', 'Glucose (C6H12O6) and Oxygen (O2)'],
            ['End Products', 'Glucose (C6H12O6) and Oxygen (O2)', 'Carbon Dioxide (CO2), Water (H2O), and ATP energy'],
            ['Occurs In', 'Only autotrophic organisms (plants, algae, cyanobacteria)', 'All living aerobic organisms (plants and animals)'],
          ],
        },
        classroomApplication: 'Take students to the school garden to observe leaf stomata by painting clear nail polish on the underside of a leaf, peeling it off, and viewing the guard cells under a microscope.',
        frequentExamQuestions: [
          { question: 'What gas is released as a byproduct into the atmosphere during photosynthesis?', answer: 'Oxygen (O2).' },
          { question: 'Approximately what percentage of energy is transferred from one trophic level to the next in a food chain?', answer: '10% (Lindeman’s 10% Ecological Efficiency Rule).' },
          { question: 'In which layer of the Earth’s atmosphere is the protective Ozone Layer located?', answer: 'Stratosphere (protects the biosphere against solar ultraviolet radiation).' },
        ],
        quickQuiz: [
          {
            id: 'qq-sci-4a',
            question: 'If green plants in an ecosystem produce 10,000 Joules of energy, how much energy is estimated to reach the secondary consumers?',
            options: ['1,000 Joules', '100 Joules', '10 Joules', '5,000 Joules'],
            correctIndex: 1,
            explanation: 'Following Lindeman’s 10% law: Producers (10,000 J) → Primary Consumers (1,000 J) → Secondary Consumers (100 J).',
          },
          {
            id: 'qq-sci-4b',
            question: 'Through which microscopic structures on the underside of plant leaves does atmospheric gas exchange take place?',
            options: ['Xylem vessels', 'Stomata', 'Phloem sieve tubes', 'Cambium ring'],
            correctIndex: 1,
            explanation: 'Stomata are microscopic pores flanked by specialized guard cells that regulate transpirational water loss and carbon dioxide intake.',
          },
        ],
      },
      {
        id: 'sci-topic-5',
        topicNumber: '3.5',
        title: 'Earth & Space Science: Solar System, Tides, Rock Cycle & Geological Formations of Sindh',
        readTime: '8 min read',
        summary: 'Solar system planet taxonomy, lunar phases, ocean tides (spring vs. neap tides), Earth crustal rock cycle (Igneous, Sedimentary, Metamorphic), and unique geological formations of Sindh (Kirthar Range, Karunjhar Hills, Thar Desert).',
        highYieldAlert: 'STEDA Geological Fact: Sedimentary rocks (limestone, sandstone, shale) contain fossils and cover over 75% of Sindh’s surface (e.g., Kirthar limestone). The Karunjhar Hills in Nagarparkar represent ancient Precambrian pink granite (igneous). Spring tides occur during New Moon and Full Moon when Sun, Earth, and Moon align (syzygy).',
        concepts: [
          {
            conceptTitle: 'Solar System & Planetary Taxonomy',
            explanation: 'The Sun holds 99.8% of the Solar System mass, governing eight planets classified into terrestrial and gas/ice giants.',
            bulletPoints: [
              'Inner Terrestrial Planets (Rocky): Mercury (closest, no atmosphere), Venus (hottest due to runaway CO₂ greenhouse effect, "Morning/Evening Star"), Earth (liquid water, 21% O₂), Mars ("Red Planet" due to iron oxide).',
              'Outer Jovian Planets: Jupiter (largest, Great Red Spot, 95+ moons), Saturn (prominent ring system made of ice and rock), Uranus (rotates on its side, ice giant), Neptune (windiest, farthest).',
              'Earth Movements: Rotation on its tilted axis (23.5°) causes Day and Night (24 hours). Revolution around the Sun along an elliptical orbit causes Seasons (365.25 days).',
              'Ocean Tides: Driven by the gravitational pull of the Moon and Sun. Spring Tides (maximum tidal range) occur at New Moon and Full Moon. Neap Tides (minimum tidal range) occur at First and Third Quarter moons when the Sun and Moon are at right angles (90°).',
            ],
            keyTerms: [
              { term: 'Syzygy', definition: 'The straight-line gravitational alignment of three celestial bodies (Sun, Earth, and Moon) producing maximum spring tides.' },
              { term: 'Fossiliferous Limestone', definition: 'Sedimentary rock composed of calcium carbonate derived from ancient marine organisms, abundant across Sindh’s Kirthar mountain range.' },
            ],
          },
          {
            conceptTitle: 'The Rock Cycle & Sindh’s Geological Heritage',
            explanation: 'Continuous cyclic transformation of rocks through heat, pressure, weathering, erosion, and sedimentation.',
            bulletPoints: [
              'Igneous Rocks: Formed by the cooling and solidification of molten magma/lava. Extrusive (basalt) cools quickly on surface with fine grains; Intrusive (granite) cools slowly underground with large crystals. The Karunjhar Hills in Tharparkar consist of pink granite.',
              'Sedimentary Rocks: Formed by deposition, compaction, and cementation of mineral sediments in layers (stratification). Examples: sandstone, shale, limestone. Almost all fossils are found in sedimentary rocks.',
              'Metamorphic Rocks: Formed when existing rocks undergo intense heat and pressure deep underground without melting. Examples: limestone transforms into marble, shale into slate, granite into gneiss.',
              'Geological Formations of Sindh: Kirthar Range (sedimentary limestone), Ranikot & Kot Diji hills, Lakhra coalfields (lignite coal in sedimentary strata), and Thar sand dunes.',
            ],
          },
        ],
        comparisonTable: {
          title: 'The Three Main Rock Classes',
          headers: ['Rock Class', 'Formation Process', 'Key Characteristics', 'Common Examples'],
          rows: [
            ['Igneous', 'Cooling & crystallization of magma/lava', 'Crystalline, hard, no fossils', 'Granite, Basalt, Pumice, Obsidian'],
            ['Sedimentary', 'Weathering, deposition, compaction in layers', 'Layered (strata), contains fossils', 'Limestone, Sandstone, Shale, Coal'],
            ['Metamorphic', 'Recrystallization under heat and pressure', 'Foliated or banded, very durable', 'Marble, Slate, Quartzite, Schist'],
          ],
        },
        classroomApplication: 'Take students outdoors or bring everyday local samples: chalk/limestone (sedimentary), granite pestle/floor chip (igneous), and marble tile (metamorphic) to allow tactile differentiation of grain texture and layered strata.',
        mnemonicAid: 'I-S-M = "In Sindh Mountains": Igneous (magma), Sedimentary (strata/fossils), Metamorphic (morphed by heat/pressure).',
        frequentExamQuestions: [
          { question: 'In which type of rock are fossils almost exclusively preserved?', answer: 'Sedimentary Rocks.' },
          { question: 'Which planet in the solar system is known as the "Morning Star" and is the hottest planet?', answer: 'Venus (due to extreme CO₂ greenhouse effect).' },
          { question: 'What astronomical alignment produces the highest tidal range (Spring Tides)?', answer: 'When the Sun, Earth, and Moon are aligned in a straight line (Full Moon and New Moon).' },
        ],
        quickQuiz: [
          {
            id: 'qq-sci-5a',
            question: 'The famous pink granite hills of Karunjhar in Nagarparkar (Sindh) belong to which primary rock class?',
            options: ['Sedimentary', 'Intrusive Igneous', 'Metamorphic', 'Volcanic Ash'],
            correctIndex: 1,
            explanation: 'Granite is an intrusive igneous rock formed by slow cooling of magma beneath Earth\'s crust, producing coarse interlocking mineral crystals.',
          },
          {
            id: 'qq-sci-5b',
            question: 'During which lunar phases do Spring Tides (highest ocean water rise) occur?',
            options: ['First Quarter and Third Quarter', 'New Moon and Full Moon', 'Crescent Moon only', 'Gibbous Moon only'],
            correctIndex: 1,
            explanation: 'At New Moon and Full Moon, the gravitational forces of the Sun and Moon act along the same line (syzygy), causing maximum water tidal bulge.',
          },
        ],
      },
      {
        id: 'sci-topic-6',
        topicNumber: '3.6',
        title: 'Forces, Pressure, Work, Energy, Simple Machines & Everyday Physics',
        readTime: '8 min read',
        summary: 'Newtonian forces (balanced vs. unbalanced), atmospheric and fluid pressure (Pascal’s principle, barometers), work (W = F × d), kinetic and potential energy, and the 3 classes of levers and mechanical advantage.',
        highYieldAlert: 'STEDA Physics Formulas: Work = Force × Distance (Joules = N × m). Pressure = Force / Area (Pascals = N/m²). Mechanical Advantage of Lever = Load / Effort = Effort Arm / Load Arm. First Class Lever has Fulcrum in middle (seesaw, scissors); Second Class has Load in middle (wheelbarrow, nutcracker); Third Class has Effort in middle (tongs, human arm, broom)!',
        concepts: [
          {
            conceptTitle: 'Forces, Friction & Atmospheric Pressure',
            explanation: 'A force is a push or pull that alters an object’s velocity, direction, or shape.',
            bulletPoints: [
              'Balanced vs. Unbalanced Forces: Balanced forces result in net force = 0 (constant velocity or rest). Unbalanced forces cause acceleration (Newton’s 2nd Law: F = ma).',
              'Friction: Resistance encountered when two surfaces slide against each other. Static friction > Kinetic (sliding) friction > Rolling friction. Ball bearings convert sliding into rolling friction.',
              'Pressure: P = Force / Area. Units: Pascal (1 Pa = 1 N/m²). Decreasing contact area increases pressure (why sharp knives cut easily and camels have broad feet to walk on Thar sand).',
              'Atmospheric Pressure: Measured using a Mercury Barometer (invented by Torricelli). Standard sea-level pressure = 760 mmHg = 101.3 kPa. Pressure decreases with increasing altitude.',
            ],
            keyTerms: [
              { term: 'Pascal (Pa)', definition: 'The SI unit of pressure, equivalent to one Newton of force applied uniformly over an area of one square meter.' },
              { term: 'Pascal’s Principle', definition: 'Pressure applied to an enclosed fluid is transmitted undiminished in all directions through the fluid (basis of hydraulic brakes and lifts).' },
            ],
          },
          {
            conceptTitle: 'Work, Energy & The Three Classes of Levers',
            explanation: 'Work is performed only when a force displaces an object in the direction of the force.',
            bulletPoints: [
              'Work Equation: W = F × d × cos(θ). If displacement is zero, work done is zero (e.g., pushing against a concrete wall). Unit: Joule (J).',
              'Kinetic Energy (KE): Energy of motion, KE = ½mv². If velocity doubles, kinetic energy quadruples!',
              'Gravitational Potential Energy (PE): Stored energy due to height, PE = mgh.',
              'Law of Conservation of Energy: Energy cannot be created or destroyed, only transformed from one form to another.',
              'The 3 Classes of Levers (FLE rule): Class 1: Fulcrum in middle (scissors, crowbar, seesaw). Class 2: Load in middle (wheelbarrow, nutcracker, bottle opener). Class 3: Effort in middle (tweezers, broom, fishing rod, human forearm).',
            ],
          },
        ],
        comparisonTable: {
          title: 'The Three Classes of Levers (FLE Rule)',
          headers: ['Class', 'Middle Element', 'Mechanical Advantage', 'Everyday Classroom Examples'],
          rows: [
            ['Class 1', 'Fulcrum (Pivot)', 'Can be >1, =1, or <1', 'Scissors, Pliers, Seesaw, Crowbar'],
            ['Class 2', 'Load (Resistance)', 'Always > 1 (Force Multiplier)', 'Wheelbarrow, Nutcracker, Paper Cutter'],
            ['Class 3', 'Effort (Input Force)', 'Always < 1 (Speed/Distance Multiplier)', 'Tweezers, Tongs, Fishing Rod, Human Bicep'],
          ],
        },
        classroomApplication: 'Demonstrate pressure: press the flat end of a pencil against a pupil\'s palm (no pain, large area), then gently touch the sharpened tip (concentrated pressure, small area). Explain why tractor tires in Sindh agricultural fields are wide to avoid sinking into wet Indus mud.',
        mnemonicAid: 'F-L-E = "1 - 2 - 3": 1 = Fulcrum in middle; 2 = Load in middle; 3 = Effort in middle.',
        frequentExamQuestions: [
          { question: 'A student applies 50 N force to hold a 10 kg bag stationary in his hands for 15 minutes. What is the work done?', answer: 'Zero Joules (W = F × d; because distance d = 0, no work is performed in physics).' },
          { question: 'Which class of lever does a wheelbarrow represent?', answer: 'Class 2 Lever (Load is located between the Fulcrum and Effort).' },
          { question: 'Why do camels comfortably walk on loose desert sand without sinking?', answer: 'Their wide, broad hooves distribute body weight over a larger surface area, greatly reducing pressure on the sand (P = F/A).' },
        ],
        quickQuiz: [
          {
            id: 'qq-sci-6a',
            question: 'In which class of lever is the Effort applied between the Fulcrum and the Load?',
            options: ['Class 1', 'Class 2', 'Class 3', 'Compound Lever only'],
            correctIndex: 2,
            explanation: 'In Class 3 levers, the Effort is located in the middle (between the Fulcrum and the Load), such as in tweezers, tongs, and the human forearm.',
          },
          {
            id: 'qq-sci-6b',
            question: 'If the velocity of an automobile increases from 20 m/s to 40 m/s (doubles), its kinetic energy will:',
            options: ['Double', 'Triple', 'Quadruple (increase 4 times)', 'Remain constant'],
            correctIndex: 2,
            explanation: 'Kinetic energy is proportional to the square of velocity (KE = ½mv²). If velocity is doubled (2²), kinetic energy increases by a factor of 4.',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // MODULE 4: SOCIAL STUDIES & PAKISTAN STUDIES (10 MARKS)
  // -------------------------------------------------------------------------
  {
    id: 'tl-part-4-pakstudies',
    partNumber: 4,
    partCategory: 'Part I: Content Knowledge (50%)',
    subjectName: 'Social Studies & Pakistan Studies',
    weightage: '10 Marks (10%)',
    marks: 10,
    targetLevel: 'Class 1 to 8 DCAR Sindh Textbook Curriculum',
    iconName: 'Globe',
    themeColor: 'from-green-600 to-emerald-700',
    badgeBg: 'bg-green-100 dark:bg-green-950/60',
    badgeText: 'text-green-800 dark:text-green-300',
    description: 'Historical milestones of the Pakistan Movement, archaeological heritage of Sindh (Mohenjo-daro, Makli, Kot Diji), physical geography and barrages, and the 1973 Constitution with Article 25-A.',
    topics: [
      {
        id: 'sst-topic-1',
        topicNumber: '4.1',
        title: 'Indus Valley Civilization & Cultural Heritage of Sindh',
        readTime: '6 min read',
        summary: 'Mohenjo-daro archaeology, Great Bath, drainage engineering, Samma and Talpur dynasties, Makli Necropolis, and Sufi shrines of Sindh.',
        highYieldAlert: 'STEDA Heritage Alert: Mohenjo-daro ("Mound of the Dead") was excavated in 1922 in Larkana District on the right bank of River Indus under Sir John Marshall and R.D. Banerjee. Makli Hill necropolis is situated in Thatta.',
        concepts: [
          {
            conceptTitle: 'Indus Valley Urban Architecture',
            explanation: 'Flourishing circa 2500–1700 BCE, Mohenjo-daro displayed baked brick masonry, grid street design, covered covered drainage lines, and granaries.',
            bulletPoints: [
              'The Great Bath: Waterproofed with bitumen (natural asphalt), used for public ritual bathing.',
              'Famous Artifacts: The bronze "Dancing Girl" figurine, the steatite "Priest-King" bust, and unicorn steatite seals.',
              'UNESCO World Heritage Sites in Sindh: Mohenjo-daro (1980) and Historical Monuments at Makli, Thatta (1981).',
            ],
          },
        ],
        frequentExamQuestions: [
          { question: 'In which modern district of Sindh is the prehistoric site of Mohenjo-daro located?', answer: 'Larkana District.' },
          { question: 'What famous bronze artifact was unearthed at Mohenjo-daro during archaeological excavations?', answer: 'The "Dancing Girl" figurine.' },
          { question: 'Which vast historical necropolis in Sindh is recognized as a UNESCO World Heritage site situated in Thatta?', answer: 'Makli Hill Necropolis.' },
        ],
        quickQuiz: [
          {
            id: 'qq-sst-1',
            question: 'Which is the oldest irrigation barrage built on the River Indus in Sindh, inaugurated in 1932?',
            options: ['Kotri Barrage', 'Sukkur Barrage (Lloyd Barrage)', 'Guddu Barrage', 'Taunsa Barrage'],
            correctIndex: 1,
            explanation: 'Sukkur Barrage, originally called Lloyd Barrage, was completed in 1932 and supports seven major canal networks across Sindh.',
          },
          {
            id: 'qq-sst-1b',
            question: 'What natural material was used to waterproof the Great Bath at Mohenjo-daro over 4,000 years ago?',
            options: ['Portland cement', 'Bitumen (natural asphalt/tar)', 'Plaster of Paris', 'Crushed marble powder'],
            correctIndex: 1,
            explanation: 'Indus Valley engineers coated the baked brick walls of the Great Bath with natural bitumen (asphalt) to prevent water leakage.',
          },
        ],
      },
      {
        id: 'sst-topic-2',
        topicNumber: '4.2',
        title: 'Pakistan Movement & Constitutional Framework (Article 25-A)',
        readTime: '8 min read',
        summary: 'Chronology from 1857 to 1947, Sir Syed Ahmad Khan’s Aligarh Movement, Lahore Resolution 1940, Quaid-e-Azam’s 14 Points, and the 1973 Constitution’s fundamental rights.',
        highYieldAlert: 'STEDA Constitutional Alert: Article 25-A was inserted via the 18th Constitutional Amendment (2010), mandating the State to provide free and compulsory education to all children aged 5 to 16 years. Quaid-e-Azam presented his 14 Points in 1929 in response to the Nehru Report (1928). Allama Iqbal delivered his historic Allahabad Address in 1930.',
        concepts: [
          {
            conceptTitle: 'Pakistan Movement Chronology & Key Milestones',
            bulletPoints: [
              '1857: War of Independence; end of Mughal Empire and direct British Crown rule.',
              '1875: Foundation of MAO High School (later MAO College 1877 and Aligarh Muslim University 1920) by Sir Syed Ahmad Khan.',
              '1906: Foundation of All India Muslim League at Dhaka on December 30 under Nawab Salimullah and Aga Khan III.',
              '1909: Minto-Morley Reforms granting Separate Electorates to Muslims.',
              '1916: Lucknow Pact signed between Muslim League and Congress (Quaid-e-Azam hailed as Ambassador of Hindu-Muslim Unity).',
              '1928: Nehru Report rejecting separate electorates; Quaid-e-Azam responded with his famous 14 Points in March 1929.',
              '1930: Allama Iqbal’s historic Allahabad Address proposing a consolidated Muslim state in Northwest India.',
              '1933: Choudhry Rahmat Ali coined the acronym "PAKSTAN" in his pamphlet "Now or Never".',
              'March 23, 1940: Lahore Resolution presented by A.K. Fazlul Huq, passed at Minto Park (presided by Quaid-e-Azam).',
              'June 3, 1947: Mountbatten 3rd June Plan announcing the partition of British India.',
              'August 14, 1947: Creation of sovereign independent Pakistan.',
            ],
          },
          {
            conceptTitle: '1973 Constitution Governance & Fundamental Rights',
            bulletPoints: [
              'Passed unanimously on April 10, 1973; promulgated on August 14, 1973 under Prime Minister Zulfikar Ali Bhutto.',
              'System: Federal Parliamentary democracy with bicameral legislature (National Assembly and Senate).',
              'Head of State: President (Article 41); Head of Government: Prime Minister (Article 90).',
              'Article 25: Equality of all citizens before law without discrimination on grounds of sex, race, or caste.',
              'Article 25-A: Fundamental right to free, compulsory education for children 5 to 16 years of age.',
              'Article 251: National language is Urdu; provincial languages (Sindhi) recognized for official provincial promotion.',
            ],
          },
        ],
        frequentExamQuestions: [
          { question: 'Who moved the historic Lahore Resolution on 23 March 1940?', answer: 'A.K. Fazlul Huq (The Sher-e-Bengal).' },
          { question: 'In which year did Quaid-e-Azam Muhammad Ali Jinnah present his famous Fourteen Points?', answer: '1929 (in response to the 1928 Nehru Report).' },
          { question: 'Which constitutional article guarantees free and compulsory education for children aged 5 to 16 in Pakistan?', answer: 'Article 25-A.' },
        ],
        quickQuiz: [
          {
            id: 'qq-sst-2',
            question: 'Which constitutional amendment inserted Article 25-A guaranteeing free and compulsory education in Pakistan?',
            options: ['17th Amendment', '18th Amendment (2010)', '19th Amendment', '21st Amendment'],
            correctIndex: 1,
            explanation: 'The 18th Amendment (April 2010) devolved education to provinces and created Article 25-A as a fundamental constitutional right.',
          },
          {
            id: 'qq-sst-2b',
            question: 'Where was the All India Muslim League officially founded on 30 December 1906?',
            options: ['Aligarh', 'Dhaka', 'Karachi', 'Lahore'],
            correctIndex: 1,
            explanation: 'The All India Muslim League was established during the annual session of the All India Muhammadan Educational Conference in Dhaka, hosted by Nawab Sir Khwaja Salimullah.',
          },
        ],
      },
      {
        id: 'sst-topic-3',
        topicNumber: '4.3',
        title: 'Physical Geography of Pakistan & Sindh: Relief, Rivers, Barrages, Thar & Climate',
        readTime: '8 min read',
        summary: 'Geographic landforms of Pakistan and Sindh: Mountains, plateaus, Indus River system, Sindh’s three barrages (Guddu, Sukkur, Kotri), Thar Desert, natural lakes (Manchhar, Keenjhar), and climatic zones.',
        highYieldAlert: 'STEDA Geography Essentials: River Indus originates at Lake Mansarowar in Tibet (length ≈ 3,180 km). The three barrages on River Indus in Sindh in downstream order are: 1. GUDDU Barrage (Kashmore, 1962), 2. SUKKUR Barrage (1932, 7 canals), 3. KOTRI Barrage (Jamshoro/Hyderabad, 1955). Largest freshwater lake in Pakistan/South Asia = MANCHHAR LAKE (Dadu/Jamshoro). Largest artificial lake = Keenjhar Lake (Thatta). K2 (Mount Godwin-Austen, 8,611m) is the 2nd highest peak in the world, situated in the Karakoram Range.',
        concepts: [
          {
            conceptTitle: 'Major Physical Relief Divisions of Pakistan',
            explanation: 'Pakistan displays diverse landforms ranging from glaciated 8,000-meter Himalayan/Karakoram peaks to fertile alluvial river plains and coastal mangroves.',
            bulletPoints: [
              'Northern Mountains: Karakoram (home to K2 at 8,611m and Siachen Glacier), Himalayas (home to Nanga Parbat at 8,126m), and Hindu Kush (Tirich Mir at 7,708m).',
              'Plateaus: Potohar Plateau (salt ranges at Khewra) and Balochistan Plateau (arid basin with salt lakes/Hamuns).',
              'Indus Plains: Upper Indus Plain (Punjab, land of five rivers: Jhelum, Chenab, Ravi, Sutlej, Beas converging at Panjnad) and Lower Indus Plain (Sindh, from Mithankot to Indus Delta).',
              'Deserts: Thar Desert (Sindh/Punjab - largest in Pakistan), Thal Desert (Punjab between Indus and Jhelum), and Kharan Cold Desert (Balochistan).',
            ],
          },
          {
            conceptTitle: 'Sindh Irrigation Networks, Lakes & Coastal Belt',
            explanation: 'Sindh is the gift of the Indus (Mehran). Agriculture is completely dependent on barrage-controlled canal irrigation.',
            bulletPoints: [
              'Guddu Barrage: Located near Kashmore, inaugurated in 1962. Commands Desert Canal, Begari Sindh Feeder, and Ghotki Feeder.',
              'Sukkur Barrage (Lloyd Barrage): Built 1923–1932, world’s largest single irrigation network when constructed with 66 spans and 7 major canals (e.g., Rohri Canal, Nara Canal, Rice Canal, Dadu Canal).',
              'Kotri Barrage (Ghulam Muhammad Barrage): Located between Jamshoro and Hyderabad, completed in 1955. Feeds Kalri Baghar Feeder (supplying water to Keenjhar Lake and Karachi city).',
              'Major Lakes of Sindh: Manchhar Lake (Jamshoro/Dadu - largest natural freshwater lake in South Asia), Keenjhar / Kalri Lake (Thatta - resting place of Noori and Jam Tamachi), and Haleji Lake (bird sanctuary in Thatta).',
              'Kirthar Mountain Range: Forms the natural western boundary separating Sindh from Balochistan (highest peak: Gorakh Hill at 1,734m).',
            ],
          },
        ],
        comparisonTable: {
          title: 'The Three Irrigation Barrages of Sindh',
          headers: ['Barrage Name', 'District Location', 'Year Completed', 'Major Canal Outlets'],
          rows: [
            ['Guddu Barrage', 'Kashmore (Northern entry of Indus into Sindh)', '1962', 'Begari Sindh Feeder, Desert Canal, Ghotki Feeder'],
            ['Sukkur Barrage', 'Sukkur (Central Sindh)', '1932 (Lloyd Barrage)', '7 Canals: Rohri, Nara, Rice, Dadu, Khairpur Feeders'],
            ['Kotri Barrage', 'Jamshoro / Hyderabad (Southern Sindh)', '1955 (Ghulam Muhammad)', 'Kalri Baghar Feeder, Fuleli, Pinyari, Akram Wah'],
          ],
        },
        classroomApplication: 'Use a physical relief map of Sindh in class to trace the path of the Indus River from Guddu through Sukkur and Kotri down to the Indus Delta mangroves at Keti Bandar.',
        mnemonicAid: 'G-S-K = "Go Southward to Karachi" -> Guddu (North), Sukkur (Middle), Kotri (South).',
        frequentExamQuestions: [
          { question: 'What is the highest hill station in Sindh located in the Kirthar mountain range?', answer: 'Gorakh Hill (elevation ≈ 1,734 meters in Dadu District).' },
          { question: 'Which is the largest natural freshwater lake in Pakistan and South Asia?', answer: 'Manchhar Lake (Jamshoro/Dadu District).' },
          { question: 'Which canal branching from Kotri Barrage supplies drinking water to Karachi via Keenjhar Lake?', answer: 'Kalri Baghar (KB) Feeder.' },
        ],
        quickQuiz: [
          {
            id: 'qq-sst-3a',
            question: 'What is the correct geographical sequence of River Indus barrages in Sindh from North to South?',
            options: [
              'Sukkur Barrage → Guddu Barrage → Kotri Barrage',
              'Guddu Barrage → Sukkur Barrage → Kotri Barrage',
              'Kotri Barrage → Sukkur Barrage → Guddu Barrage',
              'Guddu Barrage → Kotri Barrage → Sukkur Barrage',
            ],
            correctIndex: 1,
            explanation: 'Flowing downstream toward the Arabian Sea, River Indus reaches Guddu Barrage (Kashmore) first, then Sukkur Barrage, and finally Kotri Barrage (Jamshoro/Hyderabad).',
          },
          {
            id: 'qq-sst-3b',
            question: 'How many major irrigation canals originate directly from the Sukkur (Lloyd) Barrage?',
            options: ['3 Canals', '5 Canals', '7 Canals', '10 Canals'],
            correctIndex: 2,
            explanation: 'Sukkur Barrage commands exactly seven major canals: three on the right bank (Rice, Dadu, North Western) and four on the left bank (Eastern Nara, Rohri, Khairpur East, Khairpur West).',
          },
        ],
      },
      {
        id: 'sst-topic-4',
        topicNumber: '4.4',
        title: 'Civics, Local Government in Sindh, Human Rights & UN Charter',
        readTime: '7 min read',
        summary: 'Three organs of the State (Legislature, Executive, Judiciary), Sindh Local Government Act (SLGA), devolution of municipal powers, Fundamental Rights, Universal Declaration of Human Rights (UDHR 1948), and UN SDG-4.',
        highYieldAlert: 'STEDA Civics Essentials: Three Organs of State: 1. LEGISLATURE (makes laws), 2. EXECUTIVE (implements laws), 3. JUDICIARY (interprets laws). Sindh Local Government: Head of a Municipal Corporation is the MAYOR; Head of a District Council is the CHAIRMAN; Head of a Union Committee/Council is the NAZIM/CHAIRMAN. UN UDHR was adopted on 10 December 1948 (celebrated as International Human Rights Day). UN Sustainable Development Goal 4 (SDG-4) focuses on Quality, Inclusive Education for all.',
        concepts: [
          {
            conceptTitle: 'The Three Branches of Government',
            explanation: 'The doctrine of separation of powers prevents tyranny by distributing state sovereignty among three independent branches.',
            bulletPoints: [
              '1. Legislature: In Pakistan, the Federal Parliament (Majlis-e-Shoora) consists of the President, National Assembly (336 seats elected on population basis), and Senate (96 seats with equal provincial representation). In Sindh, the Provincial Assembly has 168 seats.',
              '2. Executive: Comprises the Prime Minister and Cabinet at the Federal level, and the Chief Minister and Provincial Cabinet at the Sindh provincial level, supported by civil services.',
              '3. Judiciary: Guardian and interpreter of the Constitution. Hierarchically: Supreme Court of Pakistan (apex appellate court) → Sindh High Court → District & Sessions Courts.',
            ],
          },
          {
            conceptTitle: 'Local Government System in Sindh & Universal Human Rights',
            explanation: 'Local governments bring governance and civic services directly to grassroots citizens.',
            bulletPoints: [
              'Sindh Local Government Act (SLGA 2013/2021): Urban administrative tiers consist of Karachi Metropolitan Corporation (KMC) divided into Town Municipal Corporations (TMCs) and Union Committees (UCs). Rural tiers consist of District Councils and Union Councils.',
              'Key Municipal Functions: Water supply, primary sanitation, local roads, parks, birth/death registration, and school facilities maintenance.',
              'Universal Declaration of Human Rights (UDHR): Adopted by the United Nations General Assembly on 10 December 1948 in Paris. Contains 30 articles guaranteeing inherent human dignity, freedom of thought, right to education (Article 26), and equality.',
              'Sustainable Development Goal 4 (SDG-4): "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all by 2030."',
            ],
          },
        ],
        comparisonTable: {
          title: 'Federal vs. Provincial Government Powers (Post-18th Amendment)',
          headers: ['Domain', 'Federal Government (Center)', 'Provincial Government (Sindh)'],
          rows: [
            ['Constitutional List', 'Federal Legislative List (Part I & II)', 'Residual & Provincial Subjects (Concurrent list abolished)'],
            ['Key Responsibilities', 'National defense, foreign affairs, currency, nuclear energy, ports', 'School education (curriculum/STEDA), public health, police, local govt'],
            ['Chief Executive', 'Prime Minister of Pakistan', 'Chief Minister of Sindh'],
            ['Representation', 'National Assembly & Senate', 'Provincial Assembly of Sindh'],
          ],
        },
        classroomApplication: 'Conduct a classroom mock election where students form small student parties, campaign on school improvement promises, and elect a "Class Mayor" to learn the democratic process firsthand.',
        frequentExamQuestions: [
          { question: 'On which date is International Human Rights Day observed globally each year?', answer: '10 December (commemorating the adoption of UDHR in 1948).' },
          { question: 'Which United Nations Sustainable Development Goal (SDG) specifically targets Quality Education?', answer: 'SDG Goal 4.' },
          { question: 'Which organ of the state is constitutionally responsible for interpreting laws and safeguarding fundamental rights?', answer: 'The Judiciary (Supreme Court and High Courts).' },
        ],
        quickQuiz: [
          {
            id: 'qq-sst-4a',
            question: 'Under the 1973 Constitution of Pakistan, which institution provides equal representation to all four federating provinces regardless of population?',
            options: ['National Assembly', 'The Senate', 'Council of Common Interests', 'Federal Cabinet'],
            correctIndex: 1,
            explanation: 'The Senate of Pakistan represents the principle of provincial parity, with each of the four provinces having equal representation regardless of population size.',
          },
          {
            id: 'qq-sst-4b',
            question: 'Which article of the Universal Declaration of Human Rights (UDHR) explicitly proclaims the Right to Education?',
            options: ['Article 1', 'Article 14', 'Article 26', 'Article 30'],
            correctIndex: 2,
            explanation: 'Article 26 of the UDHR proclaims that "Everyone has the right to education. Education shall be free, at least in the elementary and fundamental stages."',
          },
        ],
      },
      {
        id: 'sst-topic-5',
        topicNumber: '4.5',
        title: 'Major Historical Personalities, Muslim Reformers & Thinkers of Subcontinent & Sindh',
        readTime: '9 min read',
        summary: 'Pioneering reformist, intellectual, and political leaders: Shah Waliullah Dehlawi, Sir Syed Ahmad Khan & the Aligarh Movement, Allama Muhammad Iqbal, Quaid-e-Azam Muhammad Ali Jinnah, Hassan Ali Effendi (Sindh Madressatul Islam), and Mirza Qalich Baig.',
        highYieldAlert: 'STEDA Historical Milestones Alert: Sir Syed Ahmad Khan established the Scientific Society (Ghazipur, 1864) and MAO College (Aligarh, 1875; became university in 1920). Hassan Ali Effendi founded Sindh Madressatul Islam (SMI) in Karachi on 1 September 1885 — the alma mater of Quaid-e-Azam Muhammad Ali Jinnah! Allama Iqbal delivered his historic Allahabad Address in 1930 outlining the independent Muslim state framework.',
        concepts: [
          {
            conceptTitle: 'Muslim Reformers & Renaissance Leaders',
            explanation: 'Socio-religious and educational renaissance leaders who revitalized South Asian Muslim society.',
            bulletPoints: [
              'Shah Waliullah Dehlawi (1703–1762): Translated the Holy Quran into Persian (the lingua franca of intellectual India) to make divine scripture accessible; authored "Hujjatullah al-Baligha"; reconciled orthodox and sufi theological traditions.',
              'Sir Syed Ahmad Khan (1817–1898): Pioneered modern education for Muslims; founded the Scientific Society (1864) to translate European scientific treatises into Urdu; launched "Tahzib-ul-Akhlaq" journal; established Muhammadan Anglo-Oriental (MAO) College at Aligarh in 1875.',
              'Allama Muhammad Iqbal (1877–1938): Poet-philosopher of the East; conceptualized "Khudi" (Selfhood/Ego); presented the visionary presidential address at Allahabad (1930) demanding an autonomous consolidated Muslim state in Northwestern India; convinced Jinnah to return and lead the Muslim League.',
              'Quaid-e-Azam Muhammad Ali Jinnah (1876–1948): Born in Wazir Mansion, Karachi; educated at Sindh Madressah and Lincoln\'s Inn (London); initially termed the "Ambassador of Hindu-Muslim Unity"; formulated the 14 Points (1929); presided over the Lahore Resolution (1940); became the first Governor-General of Pakistan on 14 August 1947.',
            ],
            keyTerms: [
              { term: 'Aligarh Movement', definition: 'The modern educational, social, and literary renaissance among Indian Muslims initiated by Sir Syed Ahmad Khan post-1857.' },
              { term: 'Khudi', definition: 'Allama Iqbal’s core philosophical doctrine of dynamic self-affirmation, spiritual elevation, and active human agency.' },
            ],
          },
          {
            conceptTitle: 'Pioneering Intellectuals & Educational Reformers of Sindh',
            explanation: 'Sindhi leaders who spearheaded modern vernacular education, literature, and social reform.',
            bulletPoints: [
              'Khan Bahadur Hassan Ali Effendi (1830–1895): Renowned jurist and educational visionary from Hyderabad; founded the Sindh Muhammadan Association; established Sindh Madressatul Islam (SMI) in Karachi on 1 September 1885, modeled on Aligarh.',
              'Shams-ul-Ulama Mirza Qalich Baig (1853–1929): Prolific polymath known as the "Father of Modern Sindhi Prose"; authored over 450 books spanning Sindhi novels ("Zeenat" - first Sindhi novel, 1890), drama, poetry, history, and scientific translations.',
              'Allama I.I. Kazi (1886–1968) & Elsa Kazi: Philosophers, scholars, and founding Vice-Chancellor of the University of Sindh, Jamshoro; pioneered academic research on Shah Abdul Latif Bhittai.',
              'Syed Sibghatullah Shah Rashdi (Pir Pagaro VI - "Soreh Badshah"): Led the armed Hur freedom movement against British colonial rule in Sindh; martyred by hanging in Hyderabad Central Jail in 1943.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Educational Institutions & Visionary Founders',
          headers: ['Institution', 'Founder', 'Year Founded', 'City / Location'],
          rows: [
            ['Sindh Madressatul Islam (SMI)', 'Khan Bahadur Hassan Ali Effendi', '1885', 'Karachi, Sindh'],
            ['MAO College (now Aligarh Muslim Univ.)', 'Sir Syed Ahmad Khan', '1875', 'Aligarh, UP'],
            ['University of Sindh (Reorganization)', 'Allama I.I. Kazi (Founding VC)', '1951', 'Jamshoro, Sindh'],
            ['Darul Uloom Deoband', 'Maulana Muhammad Qasim Nanautawi', '1866', 'Deoband, India'],
            ['Nadwatul Ulama', 'Maulana Shibli Nomani & colleagues', '1894', 'Lucknow, India'],
          ],
        },
        classroomApplication: 'Inspire students by narrating how Quaid-e-Azam studied at Sindh Madressatul Islam Karachi and willed one-third of his personal estate to SMI in his final testament, demonstrating the supreme national value of investing in education.',
        mnemonicAid: 'S-M-I = "Sindh\'s Model Institution" founded by Effendi in 1885, where Quaid-e-Azam studied.',
        frequentExamQuestions: [
          { question: 'Who founded Sindh Madressatul Islam (SMI) in Karachi on 1 September 1885?', answer: 'Khan Bahadur Hassan Ali Effendi.' },
          { question: 'Who wrote the first social novel in the Sindhi language titled "Zeenat" (1890)?', answer: 'Mirza Qalich Baig (Shams-ul-Ulama).' },
          { question: 'In which year did Allama Iqbal deliver his historic Allahabad Address proposing a separate Muslim state?', answer: '1930.' },
        ],
        quickQuiz: [
          {
            id: 'qq-sst-5a',
            question: 'Which educational institution in Karachi is famous for being the alma mater of Quaid-e-Azam Muhammad Ali Jinnah?',
            options: ['DJ Science College', 'Sindh Madressatul Islam', 'N.E.D. Engineering College', 'St. Patrick’s High School'],
            correctIndex: 1,
            explanation: 'Quaid-e-Azam received his foundational schooling at Sindh Madressatul Islam, Karachi, founded by Hassan Ali Effendi in 1885.',
          },
          {
            id: 'qq-sst-5b',
            question: 'The influential journal "Tahzib-ul-Akhlaq" (Social Reformer) was launched in 1870 by which intellectual reformer?',
            options: ['Allama Shibli Nomani', 'Sir Syed Ahmad Khan', 'Altaf Hussain Hali', 'Maulana Zafar Ali Khan'],
            correctIndex: 1,
            explanation: 'Sir Syed Ahmad Khan launched "Tahzib-ul-Akhlaq" to modernize Muslim social attitudes, encourage Western scientific learning, and foster literary prose.',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // MODULE 5: MOTHER TONGUE — URDU & SINDHI (10 MARKS)
  // -------------------------------------------------------------------------
  {
    id: 'tl-part-5-language',
    partNumber: 5,
    partCategory: 'Part I: Content Knowledge (50%)',
    subjectName: 'Mother Tongue: Urdu & Sindhi',
    weightage: '10 Marks (10%)',
    marks: 10,
    targetLevel: 'Class 1 to 8 DCAR Sindh Textbook Curriculum',
    iconName: 'Languages',
    themeColor: 'from-rose-600 to-pink-600',
    badgeBg: 'bg-rose-100 dark:bg-rose-950/60',
    badgeText: 'text-rose-700 dark:text-rose-300',
    description: 'Urdu and Sindhi grammar, rhetorical figures (Tashbeeh, Istiara), classical poetic forms (Matla, Maqta, Radeef, Qafia), Shah Jo Risalo, Sachal Sarmast, Sindhi 52-letter orthography, and traditional proverbs (Pahaka).',
    topics: [
      {
        id: 'lang-topic-1',
        topicNumber: '5.1',
        title: 'Urdu Qawaid, Ilm-ul-Bayan & Poetic Devices',
        readTime: '6 min read',
        summary: 'Grammar fundamentals (Ism, Zameer, Sifat, Fail), poetic elements (Matla, Maqta, Takhallus, Qafia, Radeef), and rhetorical figures (Tashbeeh, Istiara).',
        highYieldAlert: 'STEDA Urdu Alert: Matla (مطلع) is the first rhyming couplet of a Ghazal. Maqta (مقطع) is the concluding couplet containing the poet’s pen name (تخلص Takhallus).',
        concepts: [
          {
            conceptTitle: 'Figures of Speech (علمِ بیان)',
            bulletPoints: [
              'Tashbeeh (تشبیہ - Simile): Comparing two things with explicit comparison words (جیسا, کی طرح, مانند). Example: "وہ شیر کی طرح بہادر ہے".',
              'Istiara (استعارہ - Metaphor): Directly borrowing a word for another without comparative words. Example: "میرا شیر آیا" (calling a brave boy a lion directly).',
              'Takhallus (تخلص): The literary pen name assumed by poets (e.g., اسد / غالب, اقبال, میر).',
              'Qafia (قافیہ) and Radeef (ردیف): Qafia are rhyming words; Radeef is the identical word repeated at the end of every line in a ghazal.',
            ],
          },
        ],
        frequentExamQuestions: [
          { question: 'What is the concluding couplet of a Ghazal called that contains the poet’s pseudonym?', answer: 'مقطع (Maqta).' },
          { question: 'What is the literary figure of speech called when a word is used metaphorically without comparative words like "like" or "as"?', answer: 'استعارہ (Istiara / Metaphor).' },
          { question: 'What is the repeated word or phrase occurring at the end of every rhyming line in a Ghazal called?', answer: 'ردیف (Radeef).' },
        ],
        quickQuiz: [
          {
            id: 'qq-lang-1',
            question: 'In Urdu grammar, what is a word that replaces a noun called?',
            options: ['اسم صفت (Adjective)', 'اسم ضمیر (Pronoun)', 'فعل متعدی (Transitive Verb)', 'حرف عطف (Conjunction)'],
            correctIndex: 1,
            explanation: 'اسم ضمیر (Pronoun) replaces an اسم to prevent repetitive phrasing.',
          },
          {
            id: 'qq-lang-1b',
            question: 'In the phrase "نازکی اُس کے لب کی کیا کہیئے، پنکھڑی اک گلاب کی سی ہے", which figure of speech (علمِ بیان) is employed?',
            options: ['تشبیہ (Tashbeeh / Simile)', 'استعارہ (Istiara / Metaphor)', 'کنایہ (Kinaya)', 'تضاد (Tazad / Antithesis)'],
            correctIndex: 0,
            explanation: 'The poet Mir Taqi Mir uses the comparative particle "سی ہے" (like a rose petal) to establish an explicit comparison, which defines Tashbeeh (Simile).',
          },
        ],
      },
      {
        id: 'lang-topic-2',
        topicNumber: '5.2',
        title: 'Sindhi Vyakaran, Shah Jo Risalo & Classical Literature',
        readTime: '8 min read',
        summary: 'Sindhi alphabet history (52 letters, 1853), Shah Abdul Latif Bhittai’s 30 Surs in Shah Jo Risalo, Sachal Sarmast (Haft Zaban), and traditional Sindhi proverbs.',
        highYieldAlert: 'STEDA Sindhi Alert: The standardized 52-letter Sindhi Perso-Arabic alphabet was formulated in 1853 under Sir Bartle Frere. Shah Jo Risalo is composed in 30 Surs. Sachal Sarmast is known as "Shair-e-Haft Zaban" (Poet of 7 Languages). Mirza Qalich Baig is honored as the "Father of Modern Sindhi Prose" with over 400 published books.',
        concepts: [
          {
            conceptTitle: 'Sindhi Orthography & Grammar Basics',
            bulletPoints: [
              'Standard 52 Letters: Contains unique implosive sounds (ٻ, ڄ, ڳ, ڊ) and retroflex/aspirated nasals (ڻ, ڱ, ڃ).',
              'Sindhi Parts of Speech: اسم (Ism - Noun), صفت (Sifat - Adjective), ضمير (Zameer - Pronoun), فعل (Fail - Verb), حرف جر (Harf-e-Jarr - Preposition).',
              'Gender (جنس) in Sindhi: مذڪر (Muzakkar - Masculine) and مونث (Monas - Feminine). Number (عدد): واحد (Wahid - Singular) and جمع (Jamma - Plural).',
            ],
          },
          {
            conceptTitle: 'Sindhi Sufi Masters & Pioneer Writers',
            bulletPoints: [
              'Shah Abdul Latif Bhittai (1689–1752): Shrine at Bhit Shah. His magnum opus "Shah Jo Risalo" features heroines (Sassui, Marui, Sohni, Noori, Momal) symbolizing the spiritual soul’s longing for the Divine.',
              'Sachal Sarmast (1739–1829): Shrine at Daraza Sharif near Ranipur, Khairpur. Master of Chashni, composed in Sindhi, Siraiki, Persian, Urdu, Punjabi, Arabic, and Balochi.',
              'Mirza Qalich Baig (1853–1929): Prolific scholar who wrote the first original Sindhi novel "Zeenat" (1890) and authored over 400 titles.',
              'Shaikh Ayaz (1923–1997): Modern revolutionary Sindhi poet who translated Shah Jo Risalo into Urdu poetic verse and served as Vice Chancellor of Sindh University.',
            ],
          },
        ],
        frequentExamQuestions: [
          { question: 'How many letters comprise the standardized modern Sindhi Perso-Arabic alphabet?', answer: '52 letters (standardized in 1853).' },
          { question: 'Where is the shrine of Hazrat Sachal Sarmast located?', answer: 'Daraza Sharif (Khairpur District).' },
          { question: 'Who authored "Zeenat" (1890), recognized as the first modern novel in Sindhi literature?', answer: 'Shams-ul-Ulama Mirza Qalich Baig.' },
        ],
        quickQuiz: [
          {
            id: 'qq-lang-2',
            question: 'What is the meaning of the Sindhi proverb "ڏُک سُک جو ڀاءُ آھي"?',
            options: [
              'Only wealthy people achieve happiness',
              'Pain and happiness are alternating, inseparable realities of human life',
              'Brothers must divide their inheritances equally',
              'Hard work guarantees instant relaxation',
            ],
            correctIndex: 1,
            explanation: 'This proverb expresses philosophical patience: joy and sorrow naturally accompany one another in life.',
          },
          {
            id: 'qq-lang-2b',
            question: 'Which classical Sindhi literary pioneer is honored as the "Father of Modern Sindhi Prose" and author of over 400 works?',
            options: ['Mirza Qalich Baig', 'Allama I.I. Kazi', 'Hassan Ali Effendi', 'Dr. Nabi Bakhsh Baloch'],
            correctIndex: 0,
            explanation: 'Shams-ul-Ulama Mirza Qalich Baig translated and wrote across drama, poetry, linguistics, and novels, establishing the foundations of modern Sindhi prose.',
          },
        ],
      },
      {
        id: 'lang-topic-3',
        topicNumber: '5.3',
        title: 'Language Arts Pedagogy: LSRW Framework, Early Grade Reading & Phonics in Sindhi/Urdu',
        readTime: '8 min read',
        summary: 'The natural four-strand sequence of language learning (Listening, Speaking, Reading, Writing), Receptive vs. Productive skills, the 5 essential components of reading literacy, phonemic awareness in mother tongues, and early grade reading assessment (EGRA).',
        highYieldAlert: 'STEDA Language Pedagogy Alert: The Natural Sequence of Language Acquisition is L-S-R-W (Listening → Speaking → Reading → Writing). RECEPTIVE / Passive Skills = Listening & Reading (input). PRODUCTIVE / Expressive Skills = Speaking & Writing (output). Phonemic awareness is ORAL auditory recognition of individual sounds; Phonics connects those sounds to written letters (graphemes).',
        concepts: [
          {
            conceptTitle: 'The LSRW Four-Skill Framework',
            explanation: 'A child naturally acquires native language through immersive oral listening and speaking before engaging with print symbols.',
            bulletPoints: [
              '1. Listening (سماعت / ٻڌڻ): The primary receptive foundation through which auditory phonological maps are established.',
              '2. Speaking (تکلم / ڳالهائڻ): The initial expressive skill where children vocalize thoughts, vocabulary, and phonetic sounds.',
              '3. Reading (قرأت / پڙهڻ): Decoding written print graphemes into speech sounds and constructing semantic meaning.',
              '4. Writing (تحریر / لکڻ): The highest-order fine motor and cognitive expressive skill representing ideas through standardized orthographic script.',
              'Skill Classification: Receptive (Input) = Listening and Reading. Productive (Output) = Speaking and Writing.',
            ],
          },
          {
            conceptTitle: 'The 5 Essential Components of Early Reading Instruction',
            explanation: 'Scientifically validated literacy instruction requires mastering five foundational pillars.',
            bulletPoints: [
              '1. Phonemic Awareness (صوتیاتی شعور / آوازي سڃاڻپ): Auditory ability to notice, identify, and manipulate individual sounds (phonemes) in spoken words without print.',
              '2. Phonics (صوتیات / اکر ۽ آواز جو لاڳاپو): Understanding the predictable relationship between spoken phonemes and written letter symbols (graphemes).',
              '3. Reading Fluency (روانی / ترت ۽ درست پڙهڻ): Ability to read connected text with accuracy, appropriate speed, and natural expression (prosody). Measured in Words Correct Per Minute (WCPM).',
              '4. Vocabulary (ذخیرہ الفاظ / لفظن جو خزانو): Understanding the definitions and contextual usage of spoken and written words.',
              '5. Reading Comprehension (تفہیم / سمجهڻ): The ultimate goal of reading—deriving and critically evaluating meaning from text.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Receptive Skills vs. Productive Skills in Language Teaching',
          headers: ['Feature', 'Receptive Skills (Input)', 'Productive Skills (Output)'],
          rows: [
            ['Language Modalities', 'Listening & Reading', 'Speaking & Writing'],
            ['Cognitive Focus', 'Receiving, decoding, and interpreting incoming messages', 'Generating, formulating, and producing expressive ideas'],
            ['Classroom Activities', 'Read-alouds, audio comprehension, silent text reading', 'Group presentations, storytelling, dialogue, creative essays'],
            ['Assessment Indicators', 'Comprehension questions, multiple-choice, retelling', 'Oral fluency, pronunciation, grammar usage, written coherence'],
          ],
        },
        classroomApplication: 'In primary Grade 1–2 classrooms, use big picture storybooks for interactive "Shared Reading", pointing finger-by-finger under each word from right-to-left to reinforce directionality and sound-letter association in Sindhi or Urdu.',
        mnemonicAid: 'L-S-R-W: "Little Students Read & Write" -> First Listen, then Speak, then Read, then Write.',
        frequentExamQuestions: [
          { question: 'What is the natural psychological sequence of acquiring language skills?', answer: 'Listening → Speaking → Reading → Writing (LSRW).' },
          { question: 'Which two language skills are classified as "Receptive" or passive skills?', answer: 'Listening and Reading.' },
          { question: 'What is the core difference between Phonemic Awareness and Phonics?', answer: 'Phonemic awareness is purely auditory/oral (sounds only); Phonics links sounds to written letters (graphemes).' },
        ],
        quickQuiz: [
          {
            id: 'qq-lang-3a',
            question: 'Which of the following pairings correctly identifies the two "Productive" (expressive) language skills?',
            options: [
              'Listening and Reading',
              'Speaking and Writing',
              'Reading and Speaking',
              'Listening and Writing',
            ],
            correctIndex: 1,
            explanation: 'Speaking and Writing require learners to actively construct and produce language outputs, making them Productive / Expressive skills.',
          },
          {
            id: 'qq-lang-3b',
            question: 'A primary teacher asks students: "Listen to the word /k-i-t-a-b/ and tell me what the first sound is." Which reading component is being practiced?',
            options: ['Phonics', 'Phonemic Awareness', 'Reading Fluency', 'Sight Words'],
            correctIndex: 1,
            explanation: 'Because this exercise is entirely oral without looking at written letters, it develops Phonemic Awareness (auditory sound segmentation).',
          },
        ],
      },
      {
        id: 'lang-topic-4',
        topicNumber: '5.4',
        title: 'Sindhi & Urdu Orthography, Punctuation (اعراب، رموزِ اوقاف) & Functional Composition (خط، درخواست)',
        readTime: '8 min read',
        summary: 'Punctuation marks in Urdu and Sindhi (رموزِ اوقاف: ختمہ، سکتہ، وقفہ، رابطہ، استفہامیہ، ندائیہ), diacritical marks (اعراب: زبر، زیر، پیش، تشدید، تنوین), official application structure (درخواست نویسی), formal and informal letter formats (خطوط نویسی), and essay organization.',
        highYieldAlert: 'STEDA Ramoze Auqaf Alert: Saktah (سکتہ - ،) is the shortest pause (Comma). Waqfah (وقفہ - ؛) is the Semi-colon. Raabta (رابطہ - :) is the Colon. Khatmah (ختمہ - ۔) is the Full Stop at sentence end. Istifhamia (استفہامیہ - ؟) is the Question Mark. Nidaia / Fajaiya (ندائیہ/فجائیہ - !) is the Exclamation mark.',
        concepts: [
          {
            conceptTitle: 'Ramoze Auqaf (رموزِ اوقاف) — Punctuation Rules in Urdu and Sindhi',
            explanation: 'Punctuation symbols that regulate pauses, clarify syntactic boundaries, and convey pragmatic meaning in written text.',
            bulletPoints: [
              'Khatmah (ختمہ / پورڻ وِرام - ۔): Placed at the completion of an affirmative, negative, or imperative sentence (equivalent to English Full Stop).',
              'Saktah (سکتہ / وقفِ خفیف - ،): Indicates the briefest pause between words, nouns in a series, or coordinate clauses (equivalent to English Comma).',
              'Waqfah (وقفہ / اڌ وِرام - ؛): Represents a pause longer than a comma but shorter than a full stop, linking two closely related independent clauses (Semi-colon).',
              'Raabta (رابطہ / بي نقطي وِرام - :): Used before an explanation, quotation, dialogue, or detailed listing (Colon).',
              'Kausain (قوسین / ڏنگيون - ( )): Used to enclose parenthetical remarks, explanatory commentary, or historical dates (Parentheses / Brackets).',
              'Vawain (واوین / ابتا چنڊ - " "): Used to enclose direct quotations or verbatim speech of an author or speaker (Inverted Commas / Quotation Marks).',
              'Istifhamia (استفہامیہ / پڇا نشاني - ؟): Placed at the conclusion of interrogative sentences (Question Mark).',
              'Fajaiya / Nidaia (فجائیہ یا ندائیہ / عجب يا سڏ نشاني - !): Expresses sudden emotional outbursts, surprise, joy, sorrow, or direct address.',
            ],
            keyTerms: [
              { term: 'Saktah (سکتہ)', definition: 'The shortest grammatical pause in reading, visually represented as ( ، ).' },
              { term: 'Khatmah (ختمہ)', definition: 'The terminal punctuation mark in Urdu/Sindhi script indicating the complete end of a sentence ( ۔ ).' },
              { term: 'Tashdeed (تشدید)', definition: 'A diacritical mark ( ّ ) indicating gemination or doubling of a consonant consonant.' },
              { term: 'Tanween (تنوین)', definition: 'Doubled vowel marks (-ً -ٍ -ٌ) representing an appended /n/ sound at the end of Arabic loanwords.' },
            ],
          },
          {
            conceptTitle: 'Functional Composition: Darkhwast & Khatوط نویسی',
            explanation: 'Structural standards for official applications and letters in primary and elementary school teaching.',
            bulletPoints: [
              'Official Application Structure (درخواست): 1. Address to authority (بخدمت جناب ہیڈ ماسٹر صاحب / پرنسپل صاحب); 2. Subject line (عنوان: رخصت بوجہ بیماری); 3. Salutation (جنابِ عالی / معزز جناب); 4. Main body (ادب سے گزارش ہے...); 5. Polite closing (العارض / العارضه / آپ کا فرمانبردار شاگرد); 6. Candidate Name, Roll Number, and Date (مورخہ).',
              'Official vs. Personal Letters: Personal letters begin with affectionate salutations (محترم ابا جان / پیارے دوست) and conclude with intimate sign-offs (والسلام، آپ کا مخلص / دعا گو). Official letters must remain strictly concise, formal, and objective.',
              'Essay Construction (مضمون نویسی): 1. Tamheed / Muqaddama (تمہید/تعارف - Introduction); 2. Nafs-e-Mazmoon (نفسِ مضمون - Central discussion with examples); 3. Ikhtitam / Nateeja (اختتام/نتیجہ - Conclusion and personal synthesis).',
            ],
          },
        ],
        comparisonTable: {
          title: 'Core Punctuation Marks in Urdu & Sindhi (رموزِ اوقاف)',
          headers: ['Name (اردو / سنڌي)', 'Symbol', 'English Equivalent', 'Primary Usage'],
          rows: [
            ['سکتہ / وقفِ خفیف', '،', 'Comma (,)', 'Shortest pause separating listed items'],
            ['وقفہ / اڌ وِرام', '؛', 'Semicolon (;)', 'Intermediate pause between related clauses'],
            ['رابطہ / بي نقطي', ':', 'Colon (:)', 'Introduces explanation, quotation or list'],
            ['ختمہ / پورو وِرام', '۔', 'Full Stop (.)', 'Marks completion of a declarative sentence'],
            ['استفہامیہ / پڇا نشاني', '؟', 'Question Mark (?)', 'Direct interrogation or query'],
            ['ندائیہ / عجب نشاني', '!', 'Exclamation (!)', 'Interjection, strong emotion, or address'],
          ],
        },
        classroomApplication: 'In Class 5 mother-tongue reading lessons, have students read a passage aloud with dramatic vocal pauses that correspond precisely to ( ، ) short breath, ( ؛ ) medium pause, and ( ۔ ) complete drop of pitch, reinforcing punctuation through acoustic prosody.',
        mnemonicAid: 'س-و-ر-خ: سکتہ (ننڍو وقفو)، وقفہ (وچولو)، رابطہ (تعارف)، ختمہ (پڄاڻي).',
        frequentExamQuestions: [
          { question: 'What is the shortest pause in Urdu/Sindhi punctuation called?', answer: 'Saktah (سکتہ - ،).' },
          { question: 'Which punctuation mark is placed at the end of a completed declarative sentence in Urdu?', answer: 'Khatmah (ختمہ - ۔).' },
          { question: 'In an official school application (Darkhwast), what comes immediately after the recipient\'s designation?', answer: 'The Subject Line (عنوان).' },
        ],
        quickQuiz: [
          {
            id: 'qq-lang-4a',
            question: 'Which punctuation mark (رموزِ اوقاف) represents the shortest pause between consecutive words in Urdu and Sindhi?',
            options: ['Waqfah (وقفہ)', 'Saktah (سکتہ)', 'Raabta (رابطہ)', 'Khatmah (ختمہ)'],
            correctIndex: 1,
            explanation: 'Saktah ( ، ) is the shortest pause, used to separate individual nouns, adjectives, or short phrases in a sentence.',
          },
          {
            id: 'qq-lang-4b',
            question: 'What is the correct symbol for "Khatmah" (ختمہ / full stop) in Urdu writing?',
            options: ['.', '۔', '،', '؛'],
            correctIndex: 1,
            explanation: 'In Urdu orthography, the terminal full stop mark is the horizontal dash ( ۔ ), known as Khatmah.',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // PART II: PEDAGOGICAL CONTENT KNOWLEDGE (50 MARKS / 50%) — HEC B.ED & NPSTP
  // =========================================================================

  // -------------------------------------------------------------------------
  // MODULE 6: METHODS OF TEACHING & FOUNDATIONS (10 MARKS)
  // -------------------------------------------------------------------------
  {
    id: 'tl-part-6-methods',
    partNumber: 6,
    partCategory: 'Part II: Pedagogical Content Knowledge (50%)',
    subjectName: 'Methods of Teaching & Foundations',
    weightage: '10 Marks (10%)',
    marks: 10,
    targetLevel: 'HEC B.Ed (Hons) / ADE & National Standards',
    iconName: 'Lightbulb',
    themeColor: 'from-violet-600 to-indigo-600',
    badgeBg: 'bg-violet-100 dark:bg-violet-950/60',
    badgeText: 'text-violet-700 dark:text-violet-300',
    description: 'Instructional design methodologies including the 5E Constructivist Model, inductive and deductive teaching sequences, Socratic questioning, inquiry-based learning, Froebel kindergarten philosophy, and cooperative Jigsaw methods.',
    topics: [
      {
        id: 'ped-topic-6-1',
        topicNumber: '6.1',
        title: 'The 5E Constructivist Instructional Model',
        readTime: '8 min read',
        summary: 'Developed by Roger Bybee and BSCS, the 5E model guides students through five sequential inquiry phases: Engage, Explore, Explain, Elaborate, and Evaluate.',
        highYieldAlert: 'STEDA Pedagogy Trap: In 5E, the teacher DOES NOT explain first! Students must EXPLORE hands-on first. The teacher introduces formal terminology ONLY in the "Explain" phase AFTER student exploration.',
        concepts: [
          {
            conceptTitle: 'The Five Sequential Phases of 5E',
            explanation: 'The 5E model operationalizes constructivism, ensuring that learners build upon prior mental schemas through scaffolded active inquiry.',
            bulletPoints: [
              '1. ENGAGE: Hook student interest, uncover misconceptions, and activate prior schema (e.g., provocative video, demonstration, driving question).',
              '2. EXPLORE: Students work hands-on with materials, test ideas, make observations, and record data without direct lecture from the teacher.',
              '3. EXPLAIN: Students articulate their findings in their own words; then the teacher clarifies concepts and introduces formal scientific/academic vocabulary.',
              '4. ELABORATE: Students apply their new understanding to novel real-world problems or cross-curricular projects to deepen conceptual transfer.',
              '5. EVALUATE: Both formative ongoing self-assessment and summative teacher evaluation of whether students mastered the target learning outcomes.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Traditional Lecture vs. 5E Constructivist Lesson',
          headers: ['Dimension', 'Traditional Lecture Method', '5E Constructivist Model'],
          rows: [
            ['Teacher Role', 'Sole source of authority, transmitting information', 'Facilitator, questioner, and cognitive coach'],
            ['Student Role', 'Passive receiver taking silent verbatim notes', 'Active investigator constructing meaning from evidence'],
            ['Timing of Explanation', 'Explained at the very beginning of the period', 'Introduced only AFTER students complete exploration'],
            ['Handling of Errors', 'Mistakes penalized as ignorance', 'Misconceptions analyzed as valuable learning springboards'],
          ],
        },
        classroomApplication: 'In a 7th-grade science class in Hyderabad teaching water filtration: First, let groups try filtering muddy water with cotton, sand, and pebbles (Explore). Then discuss which layers trapped particles (Explain).',
        mnemonicAid: 'E-E-E-E-E = Every Enthusiastic Educator Encourages Excellence (Engage -> Explore -> Explain -> Elaborate -> Evaluate).',
        frequentExamQuestions: [
          { question: 'In the 5E model, during which phase do students actively manipulate physical apparatus and test hypotheses without direct teacher lecture?', answer: 'The EXPLORE phase.' },
          { question: 'Who is recognized as the primary architect of the 5E Instructional Model?', answer: 'Roger Bybee (BSCS - Biological Sciences Curriculum Study).' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-6-1',
            question: 'During a lesson on electric circuits, the teacher begins by asking: "Why does the classroom bulb turn off when one wire is cut?" This instructional step exemplifies which 5E phase?',
            options: ['Explain', 'Engage', 'Elaborate', 'Evaluate'],
            correctIndex: 1,
            explanation: 'Posing an intriguing question to stimulate curiosity and assess prior conceptions is the hallmark of the ENGAGE phase.',
          },
        ],
      },
      {
        id: 'ped-topic-6-2',
        topicNumber: '6.2',
        title: 'Inductive vs. Deductive Teaching & Socratic Questioning',
        readTime: '7 min read',
        summary: 'Comparing rule-driven deductive pedagogy with inquiry-driven inductive teaching, combined with Socratic dialogue methods to foster higher-order critical thinking.',
        highYieldAlert: 'STEDA Exam Formula: Inductive = Specific Examples -> General Rule (Bottom-up). Deductive = General Rule -> Specific Examples (Top-down). Socratic Method uses disciplined questioning rather than lecture.',
        concepts: [
          {
            conceptTitle: 'Inductive vs. Deductive Strategies',
            bulletPoints: [
              'Inductive Method (Bottom-Up): The teacher presents multiple concrete examples (e.g., showed iron, copper, and aluminum conducting electricity) and guides students to induce the general rule ("All metals conduct electricity"). Promotes deep retention and analytical inquiry.',
              'Deductive Method (Top-Down): The teacher states the universal law or mathematical formula first, explains its components, and then has students apply it to practice drills (e.g., states (a+b)² = a² + 2ab + b² then assigns exercises). Efficient for complex abstract formulas when time is constrained.',
            ],
          },
          {
            conceptTitle: 'Socratic Questioning Categories',
            bulletPoints: [
              'Questions for Clarification: "What exactly do you mean by that?"',
              'Questions Probing Assumptions: "What are we assuming here?"',
              'Questions Probing Reasons and Evidence: "How do you know this evidence is reliable?"',
              'Questions Probing Implications and Consequences: "If that happened, what would follow next?"',
            ],
          },
        ],
        classroomApplication: 'When introducing Urdu grammar (اسم صفت), write sentences on the board: "احمد تیز دوڑتا ہے", "سرخ سیب میٹھا ہے". Ask pupils what "تیز" and "سرخ" are doing. Let them discover that these words describe qualities (Inductive approach).',
        frequentExamQuestions: [
          { question: 'Which teaching approach proceeds from specific concrete observations to universal generalizations?', answer: 'Inductive Method (Bottom-Up).' },
          { question: 'What is the key difference between Socratic questioning and didactic lecture?', answer: 'The Socratic method uses guided inquiry to help students discover truth from within, whereas lecture passively transmits facts.' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-6-2',
            question: 'A teacher writes a mathematical theorem on the chalkboard, proves it step-by-step, and instructs students to solve 10 textbook problems using that formula. Which method is being used?',
            options: ['Inductive Method', 'Deductive Method', 'Discovery Learning', 'Socratic Inquiry'],
            correctIndex: 1,
            explanation: 'Moving from the general rule/theorem to specific practice applications is the definition of the Deductive Method.',
          },
          {
            id: 'qq-ped-6-2b',
            question: 'A teacher observes that iron expands when heated, copper expands when heated, and aluminum expands when heated, then guides students to conclude: "All metals expand upon heating." This is an example of:',
            options: ['Deductive Reasoning', 'Inductive Reasoning', 'Didactic Instruction', 'Rote Memorization'],
            correctIndex: 1,
            explanation: 'Drawing a broad general conclusion from specific concrete observations defines Inductive Reasoning.',
          },
        ],
      },
      {
        id: 'ped-topic-6-3',
        topicNumber: '6.3',
        title: 'Cooperative Learning (Jigsaw) & Differentiated Instruction',
        readTime: '8 min read',
        summary: 'Elliot Aronson’s Jigsaw classroom technique, Think-Pair-Share, and Carol Ann Tomlinson’s framework for differentiating Content, Process, Product, and Environment.',
        highYieldAlert: 'STEDA Standard: Tomlinson establishes that differentiation occurs across three core curricular dimensions: CONTENT (what is learned), PROCESS (how it is learned), and PRODUCT (how learning is demonstrated), tailored to student Readiness, Interests, and Learning Profile. Cooperative learning requires POSITIVE INTERDEPENDENCE and INDIVIDUAL ACCOUNTABILITY (Johnson & Johnson).',
        concepts: [
          {
            conceptTitle: 'The Jigsaw Technique Steps',
            explanation: 'Designed to eliminate prejudice and build interdependence in classrooms.',
            bulletPoints: [
              '1. Students form home groups of 4–5 members.',
              '2. The lesson is divided into 4–5 distinct sub-topics.',
              '3. Each member leaves their home group to meet with peers assigned the same sub-topic in an "Expert Group" to master the content.',
              '4. Students return to their home groups and take turns teaching their segment to their teammates.',
              '5. Individual assessment ensures everyone is accountable for all sections.',
            ],
          },
          {
            conceptTitle: 'Five Essential Elements of Cooperative Learning (Johnson & Johnson)',
            explanation: 'Group work only becomes cooperative learning when structured with specific social interdependencies.',
            bulletPoints: [
              '1. Positive Interdependence: "We sink or swim together"—the success of each member is tied to the team.',
              '2. Individual and Group Accountability: Every individual must demonstrate mastery; no free-riders.',
              '3. Promotive (Face-to-Face) Interaction: Members help, support, applaud, and encourage each other’s learning.',
              '4. Interpersonal & Small Group Social Skills: Teaching active listening, conflict resolution, and leadership.',
              '5. Group Processing: Teams reflect on what worked well and what behaviors can be improved.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Traditional Group Work vs. True Cooperative Learning',
          headers: ['Dimension', 'Traditional Group Work', 'Cooperative Learning (STEDA Standards)'],
          rows: [
            ['Interdependence', 'No structured interdependence; one student does all the work', 'Positive interdependence structured into roles and resources'],
            ['Accountability', 'Single grade shared blindly; frequent free-riding', 'Individual accountability; each member tested individually'],
            ['Leadership', 'Usually dominated by one high-achieving student', 'Shared leadership roles rotated among all members'],
            ['Social Skills', 'Assumed or ignored; conflict left unresolved', 'Explicitly taught, practiced, and evaluated by the teacher'],
          ],
        },
        classroomApplication: 'Implement "Think-Pair-Share" during a lesson: Pose a critical question, give students 60 seconds of silent thinking time (Think), have them discuss with their bench partner for 2 minutes (Pair), and then call on random pairs to contribute to whole-class discussion (Share).',
        frequentExamQuestions: [
          { question: 'Who pioneered the "Kindergarten" educational concept rooted in gifts, occupations, and purposeful play?', answer: 'Friedrich Froebel (Germany, 1837).' },
          { question: 'What are the two most essential pillars that distinguish cooperative learning from casual group work?', answer: 'Positive Interdependence and Individual Accountability.' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-6-3',
            question: 'In the Jigsaw cooperative learning technique, what do students do immediately after meeting in their "Expert Groups"?',
            options: [
              'Take a final summative exam individually',
              'Return to their original home groups to teach their respective sub-topic',
              'Leave the classroom for independent library study',
              'Elect a single leader to write the group report',
            ],
            correctIndex: 1,
            explanation: 'In Jigsaw, expert group members master their subtopic and then return to their home teams to teach their peers.',
          },
          {
            id: 'qq-ped-6-3b',
            question: 'According to Carol Ann Tomlinson, modifying the complexity of reading materials or providing audio recordings addresses which dimension of differentiated instruction?',
            options: ['Product', 'Content', 'Environment', 'Standard'],
            correctIndex: 1,
            explanation: 'Differentiating Content involves altering the access points and resources through which students encounter the curriculum concepts.',
          },
        ],
      },
      {
        id: 'ped-topic-6-4',
        topicNumber: '6.4',
        title: 'Instructional Planning: Herbartian Steps, Gagné’s 9 Events & SMART Objectives',
        readTime: '9 min read',
        summary: 'Johann Friedrich Herbart’s classical 5-step lesson plan model, Robert Gagné’s 9 events of instruction, writing observable behavioral SMART objectives, and Robert Mager’s three-part objective criterion framework.',
        highYieldAlert: 'STEDA Lesson Planning Alert: Herbartian 5 Steps in correct order: 1. PREPARATION (Motivation/Previous knowledge), 2. PRESENTATION (New matter), 3. ASSOCIATION / Comparison (Linking), 4. GENERALIZATION (Rule/Law deduction), 5. APPLICATION (Practice). SMART Objectives must be Measurable using behavioral action verbs (List, Solve, Compare); NEVER use vague non-action verbs like "understand", "know", or "learn"!',
        concepts: [
          {
            conceptTitle: 'Herbartian 5 Formal Steps of Lesson Planning',
            explanation: 'German philosopher and pedagogue Johann Friedrich Herbart (1776–1841) developed the foundational systematic model for daily classroom instructional preparation.',
            bulletPoints: [
              '1. Preparation / Introduction: Activating prior knowledge, stimulating interest, and establishing mental readiness through questioning and visual cues.',
              '2. Presentation: Delivering the new core learning content using multi-sensory teaching aids, demonstrations, and structured explanations.',
              '3. Association / Comparison: Guiding students to compare the newly learned concepts with previously mastered knowledge to establish schema links.',
              '4. Generalization / Systematization: Synthesizing specific instances to derive general laws, mathematical formulas, or scientific principles.',
              '5. Application: Giving students authentic practice exercises and novel problems to verify that learning transfers to everyday situations.',
            ],
          },
          {
            conceptTitle: 'Robert Gagné’s 9 Events of Instruction',
            explanation: 'Educational psychologist Robert Gagné mapped internal cognitive processes to external teaching events.',
            bulletPoints: [
              '1. Gain Attention (Reception): Stimulate alertness via an unexpected question or media trigger.',
              '2. Inform Learners of Objectives (Expectancy): Clearly tell students what they will achieve by the end of class.',
              '3. Stimulate Recall of Prior Learning (Retrieval): Access long-term memory schemas related to the new topic.',
              '4. Present the Content / Stimulus (Selective Perception): Deliver organized instructional material.',
              '5. Provide Learning Guidance (Semantic Encoding): Scaffold learning with graphic organizers, mnemonics, or analogies.',
              '6. Elicit Performance (Responding): Have students practice, demonstrate, or solve problems independently.',
              '7. Provide Feedback (Reinforcement): Give specific, immediate corrective feedback.',
              '8. Assess Performance (Retrieval): Formal testing to confirm mastery without coaching.',
              '9. Enhance Retention & Transfer (Generalization): Provide practice opportunities in real-world contexts.',
            ],
          },
          {
            conceptTitle: 'Writing SMART Behavioral Objectives (Mager’s Framework)',
            explanation: 'Learning outcomes must state what the student will be able to DO after instruction in observable, measurable terms.',
            bulletPoints: [
              'S - Specific: Clear statement of the exact targeted skill or content.',
              'M - Measurable: Evaluated through observable action verbs (e.g., "calculate", "diagram", "recite", "categorize").',
              'A - Attainable / Achievable: Realistic within the 40-minute class period and developmental level.',
              'R - Relevant: Aligned with the DCAR Sindh textbook curriculum standards.',
              'T - Time-Bound: Achieved within the lesson duration.',
              'Robert Mager’s 3 Criterion Parts: 1. Condition (Under what circumstances: "Given a compass and ruler..."), 2. Behavior (Observable action: "...students will construct an equilateral triangle..."), 3. Degree/Criterion (Level of mastery: "...with 100% geometric accuracy").',
            ],
          },
        ],
        comparisonTable: {
          title: 'Herbartian 5 Steps vs. Gagné’s 9 Events of Instruction',
          headers: ['Phase', 'Herbartian Classical Steps (19th Century)', 'Gagné’s 9 Events of Instruction (Cognitive)'],
          rows: [
            ['Phase 1: Entry', '1. Preparation (Testing prior knowledge)', '1. Gain Attention, 2. Inform Objectives, 3. Stimulate Recall'],
            ['Phase 2: Delivery', '2. Presentation (Showing new materials)', '4. Present Content, 5. Provide Learning Guidance'],
            ['Phase 3: Integration', '3. Association (Comparing with past facts)', '6. Elicit Performance, 7. Provide Informative Feedback'],
            ['Phase 4: Synthesis', '4. Generalization (Formulating rules)', '8. Assess Performance'],
            ['Phase 5: Practice', '5. Application (Solving practice exercises)', '9. Enhance Retention & Transfer'],
          ],
        },
        classroomApplication: 'Before teaching a lesson on decimals in Grade 5, write the SMART objective on the board corner: "By the end of this 40-minute lesson, every student will be able to convert at least 4 out of 5 common fractions into decimal notation correctly without using a calculator."',
        mnemonicAid: 'H-E-R-B-A-R-T: P-P-A-G-A -> Preparation, Presentation, Association, Generalization, Application.',
        frequentExamQuestions: [
          { question: 'What is the correct sequential order of the 5 formal Herbartian lesson plan steps?', answer: 'Preparation → Presentation → Association → Generalization → Application.' },
          { question: 'Why is the verb "to understand" rejected when formulating behavioral learning objectives?', answer: 'Because "understanding" is an internal cognitive state that cannot be directly observed or objectively measured.' },
          { question: 'Who formulated the 9 Events of Instruction based on information processing cognitive theory?', answer: 'Robert Gagné.' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-6-4a',
            question: 'In the Herbartian method of lesson planning, during which step do students derive a universal scientific principle or rule after observing specific facts?',
            options: ['Preparation', 'Presentation', 'Association', 'Generalization'],
            correctIndex: 3,
            explanation: 'Generalization is the step where students synthesize comparative observations to formulate a general rule, formula, or law.',
          },
          {
            id: 'qq-ped-6-4b',
            question: 'Which of the following represents a well-constructed, measurable behavioral learning objective?',
            options: [
              'Students will truly understand the importance of photosynthesis.',
              'Students will appreciate the beauty of Sindhi poetry.',
              'Students will correctly identify and label all four chambers of the human heart on an unlabeled diagram.',
              'Students will internalize the laws of motion.',
            ],
            correctIndex: 2,
            explanation: '"Identify and label" is an observable, measurable behavioral action verb that permits objective assessment, unlike "understand", "appreciate", or "internalize".',
          },
        ],
      },
      {
        id: 'ped-topic-6-5',
        topicNumber: '6.5',
        title: 'Project-Based Learning (PBL), Inquiry-Based Science & Kolb’s Experiential Learning Cycle',
        readTime: '9 min read',
        summary: 'John Dewey’s experiential learning philosophy, William Kilpatrick’s Project Method, Inquiry-Based Learning levels (Confirmation, Structured, Guided, Open), and David Kolb’s 4-stage Experiential Cycle (Concrete Experience, Reflective Observation, Abstract Conceptualization, Active Experimentation).',
        highYieldAlert: 'STEDA Pedagogy Alert: William Heard Kilpatrick formulated the Project Method (1918) rooted in John Dewey’s progressive pragmatism ("learning by doing"). David Kolb’s Experiential Learning Cycle follows 4 recursive stages: Concrete Experience (DO) → Reflective Observation (OBSERVE) → Abstract Conceptualization (THINK) → Active Experimentation (PLAN/APPLY).',
        concepts: [
          {
            conceptTitle: 'The Project-Based Learning (PBL) Framework (Kilpatrick & Dewey)',
            explanation: 'A dynamic classroom approach in which students actively explore authentic real-world problems and create tangible public artifacts.',
            bulletPoints: [
              'Philosophical Foundation: Founded on John Dewey’s Pragmatism — knowledge is constructed through purposeful social interaction and practical human experience.',
              'Kilpatrick’s 4 Steps of a Project: 1. Purposing (defining a meaningful student-driven goal); 2. Planning (designing phases, allocating resources, dividing roles); 3. Executing (carrying out research, fabrication, and testing); 4. Judging / Evaluating (assessing the completed product against authentic criteria).',
              'Four Project Types (Kilpatrick): Producer Project (building a tangible model, e.g., a solar water heater), Consumer Project (enjoying an aesthetic experience, e.g., listening to Shah Latif’s Sur), Problem Project (solving an intellectual puzzle, e.g., reducing plastic waste), Drill Project (mastering a technical skill).',
              'Key Gold Standard PBL Elements: Challenging Problem or Question, Sustained Inquiry, Authenticity, Student Voice & Choice, Reflection, Critique & Revision, and Public Product.',
            ],
            keyTerms: [
              { term: 'Purposing', definition: 'The first stage of Kilpatrick\'s project method where students determine the project\'s objective, significance, and driving question.' },
              { term: 'Experiential Learning', definition: 'The process whereby knowledge is created through the transformation of direct lived experience (David Kolb).' },
            ],
          },
          {
            conceptTitle: 'David Kolb’s Experiential Learning Cycle',
            explanation: 'A holistic 4-stage cyclical model of adult and adolescent cognitive learning.',
            bulletPoints: [
              '1. Concrete Experience (CE - Feeling): Encountering a new hands-on experience or reinterpretation of existing experience (e.g., mixing vinegar and baking soda in a bottle).',
              '2. Reflective Observation (RO - Watching): Stepping back to reflect on what occurred, noting inconsistencies between expectation and observation (e.g., "Why did gas rapidly inflate the balloon?").',
              '3. Abstract Conceptualization (AC - Thinking): Distilling observations into generalizable concepts, theories, and chemical equations (e.g., learning that acid-carbonate reaction releases CO₂ gas).',
              '4. Active Experimentation (AE - Doing): Applying the conceptual theory to new situations, designing new tests, and predicting outcomes (e.g., engineering a small baking-soda-powered bottle rocket).',
            ],
          },
          {
            conceptTitle: 'The 4 Levels of Inquiry-Based Science (Schwab / Banchi & Bell)',
            bulletPoints: [
              'Level 1: Confirmation Inquiry: Question, procedure, and expected outcome are all provided; students confirm a known principle.',
              'Level 2: Structured Inquiry: Teacher poses the question and procedure; students analyze data to discover the relationship.',
              'Level 3: Guided Inquiry: Teacher provides the driving question; students design their own investigation procedure and draw conclusions.',
              'Level 4: Open Inquiry: Students formulate their own research questions, design procedures, collect data, and defend conclusions (highest student autonomy).',
            ],
          },
        ],
        comparisonTable: {
          title: 'Levels of Classroom Inquiry at a Glance',
          headers: ['Inquiry Level', 'Question Given?', 'Procedure Given?', 'Solution Given?'],
          rows: [
            ['Confirmation Inquiry', 'Yes (by Teacher)', 'Yes (by Teacher)', 'Yes (known in advance)'],
            ['Structured Inquiry', 'Yes (by Teacher)', 'Yes (by Teacher)', 'No (analyzed by Student)'],
            ['Guided Inquiry', 'Yes (by Teacher)', 'No (designed by Student)', 'No (discovered by Student)'],
            ['Open / True Inquiry', 'No (formulated by Student)', 'No (designed by Student)', 'No (defended by Student)'],
          ],
        },
        classroomApplication: 'In a rural Sindh school without modern lab chemicals, apply Kolb\'s cycle by having students test soil salinity (Kallar) across local farm plots using a homemade battery-bulb conductivity tester (CE), recording which plots glow brightest (RO), linking conductivity to dissolved sodium ions (AC), and recommending gypsum treatment (AE).',
        mnemonicAid: 'Kolb\'s Cycle: C-R-A-A = Concrete Experience → Reflective Observation → Abstract Conceptualization → Active Experimentation.',
        frequentExamQuestions: [
          { question: 'Who formulated the Project Method of teaching based on John Dewey’s educational philosophy?', answer: 'William Heard Kilpatrick (1918).' },
          { question: 'What is the first step in Kilpatrick’s Project Method?', answer: 'Purposing.' },
          { question: 'What are the 4 stages of David Kolb’s Experiential Learning Cycle in order?', answer: 'Concrete Experience → Reflective Observation → Abstract Conceptualization → Active Experimentation.' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-6-5a',
            question: 'In which level of inquiry do students formulate their own research questions and design their own investigative procedures without a prescribed teacher recipe?',
            options: ['Confirmation Inquiry', 'Structured Inquiry', 'Guided Inquiry', 'Open Inquiry'],
            correctIndex: 3,
            explanation: 'In Open Inquiry (Level 4), students exercise maximum scientific autonomy by determining the driving question, procedure, and analysis.',
          },
          {
            id: 'qq-ped-6-5b',
            question: 'In David Kolb\'s Experiential Learning Cycle, a student formulating a general scientific rule or theoretical equation from recorded observations is at which stage?',
            options: ['Concrete Experience', 'Reflective Observation', 'Abstract Conceptualization', 'Active Experimentation'],
            correctIndex: 2,
            explanation: 'Abstract Conceptualization is the stage where learners synthesize observations into abstract theoretical models, principles, and general rules.',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // MODULE 7: CHILD DEVELOPMENT & EDUCATIONAL PSYCHOLOGY (10 MARKS)
  // -------------------------------------------------------------------------
  {
    id: 'tl-part-7-psychology',
    partNumber: 7,
    partCategory: 'Part II: Pedagogical Content Knowledge (50%)',
    subjectName: 'Child Development & Psychology',
    weightage: '10 Marks (10%)',
    marks: 10,
    targetLevel: 'HEC B.Ed (Hons) / ADE & National Standards',
    iconName: 'Brain',
    themeColor: 'from-purple-600 to-fuchsia-600',
    badgeBg: 'bg-purple-100 dark:bg-purple-950/60',
    badgeText: 'text-purple-700 dark:text-purple-300',
    description: 'Developmental milestones and learning theories: Piaget’s cognitive stages, Vygotsky’s Zone of Proximal Development (ZPD), Erikson’s psychosocial crises, Gardner’s Multiple Intelligences, Skinner’s Operant Conditioning, and inclusive education.',
    topics: [
      {
        id: 'ped-topic-7-1',
        topicNumber: '7.1',
        title: 'Jean Piaget’s Cognitive Development Theory',
        readTime: '8 min read',
        summary: 'Piaget’s four invariant cognitive stages: Sensorimotor, Preoperational, Concrete Operational, and Formal Operational, featuring schemas, assimilation, accommodation, and conservation.',
        highYieldAlert: 'STEDA High-Yield Rule: Conservation (understanding that quantity remains unchanged despite physical shape change) develops during the CONCRETE OPERATIONAL stage (ages 7 to 11). Object Permanence develops in Sensorimotor (0-2y). Abstract hypothetical thought develops in Formal Operational (11+y).',
        concepts: [
          {
            conceptTitle: 'The Four Invariant Cognitive Stages',
            explanation: 'Children pass through four universal, qualitatively distinct stages of mental growth.',
            bulletPoints: [
              '1. SENSORIMOTOR (0 to 2 years): Learns through sensory experiences and motor manipulation. Milestone: Object Permanence (knowing an object exists even when hidden from view).',
              '2. PREOPERATIONAL (2 to 7 years): Rapid symbolic language development, dramatic pretend play. Characteristics: Egocentrism (inability to see another\'s perspective), Centration (focusing on one aspect only), and Lack of Conservation.',
              '3. CONCRETE OPERATIONAL (7 to 11 years): Elementary school age. Logical thinking applied to concrete, tangible objects. Milestones: Reversibility, Decentration, Seriation, and Conservation of mass, volume, and number.',
              '4. FORMAL OPERATIONAL (11 years to Adulthood): Secondary school. Abstract thinking, hypothetical-deductive reasoning, propositional logic, and systematic scientific problem solving.',
            ],
            keyTerms: [
              { term: 'Schema', definition: 'A mental building block or organized framework of knowledge about the world.' },
              { term: 'Assimilation', definition: 'Fitting new incoming information into an existing mental schema without altering it.' },
              { term: 'Accommodation', definition: 'Modifying an existing schema or building a new one when new information contradicts prior understanding.' },
              { term: 'Equilibration', definition: 'The cognitive balance achieved when mental schemas comfortably match external real-world observations.' },
            ],
          },
        ],
        comparisonTable: {
          title: 'Piaget\'s 4 Cognitive Stages Summary',
          headers: ['Stage', 'Typical Age', 'Key Cognitive Characteristics', 'Core Landmark Mastery'],
          rows: [
            ['Sensorimotor', '0 – 2 years', 'Motor reflexes, sensory exploration', 'Object Permanence (8-12 months)'],
            ['Preoperational', '2 – 7 years', 'Symbolic thinking, animism, egocentrism', 'Language acquisition, symbolic play'],
            ['Concrete Operational', '7 – 11 years', 'Logical thought on real objects, reversibility', 'Conservation (volume, mass, numbers)'],
            ['Formal Operational', '11+ years', 'Abstract hypotheses, deductive reasoning', 'Algebraic problem solving, moral logic'],
          ],
        },
        classroomApplication: 'Do not teach purely abstract algebraic formulas to a 7-year-old in Class 2; their brain is in the concrete operational stage and requires physical counters, abacus beads, and visual number lines.',
        mnemonicAid: 'S-P-C-F = Some People Can Fly (Sensorimotor -> Preoperational -> Concrete Operational -> Formal Operational).',
        frequentExamQuestions: [
          { question: 'At which stage does a child realize that pouring water from a wide glass into a tall thin glass does not change the amount of water?', answer: 'Concrete Operational Stage (Conservation concept).' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-7-1',
            question: 'A primary school child correctly identifies that 5 + 3 = 8 and immediately infers that 8 - 3 = 5. This mental ability to mentally reverse a sequence of operations is termed:',
            options: ['Centration', 'Reversibility', 'Egocentrism', 'Object Permanence'],
            correctIndex: 1,
            explanation: 'Reversibility is the capacity to mentally trace a process back to its starting point, characteristic of Concrete Operations.',
          },
        ],
      },
      {
        id: 'ped-topic-7-2',
        topicNumber: '7.2',
        title: 'Lev Vygotsky’s Sociocultural Theory: ZPD & Scaffolding',
        readTime: '7 min read',
        summary: 'Vygotsky’s concepts of the Zone of Proximal Development (ZPD), Scaffolding (Jerome Bruner), the More Knowledgeable Other (MKO), and the vital role of private speech in cognitive self-regulation.',
        highYieldAlert: 'STEDA Question Pattern: Vygotsky defined ZPD as the distance between what a learner can do independently and what they can achieve with supportive guidance from an adult or peer.',
        concepts: [
          {
            conceptTitle: 'Core Components of Sociocultural Theory',
            explanation: 'Vygotsky argued that cognitive learning is fundamentally social before it becomes internalized individually (interpsychological before intrapsychological).',
            bulletPoints: [
              'ZPD (Zone of Proximal Development): The sweet spot for instructional learning. Tasks too easy cause boredom; tasks too difficult cause anxiety; tasks in the ZPD promote cognitive growth with support.',
              'MKO (More Knowledgeable Other): Anyone who possesses higher understanding or ability than the learner regarding a specific task (can be a teacher, parent, software tutor, or peer).',
              'Scaffolding: Temporary instructional supports provided to a student in their ZPD, gradually withdrawn as the learner achieves independent mastery (concept popularized by Jerome Bruner).',
              'Private Speech: Self-talk used by young children to guide their thoughts and self-regulate behavior, which gradually internalizes into inner thought by age 7.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Piaget vs. Vygotsky Key Differences',
          headers: ['Dimension', 'Jean Piaget', 'Lev Vygotsky'],
          rows: [
            ['Role of Culture', 'Universal stages across all cultures', 'Culture strongly shapes specific cognitive tools'],
            ['Development vs. Learning', 'Development must precede learning', 'Social learning pulls and drives cognitive development forward'],
            ['Role of Language', 'Language reflects thought (secondary to action)', 'Language is the primary cultural tool for thought formation'],
            ['Ideal Instruction', 'Independent discovery through physical materials', 'Collaborative guided inquiry within the ZPD with scaffolding'],
          ],
        },
        classroomApplication: 'When teaching essay writing, provide an outline template and sentence starters (scaffolding). In the next assignment, reduce the prompts until the student writes independently.',
        frequentExamQuestions: [
          { question: 'What term describes temporary support given by a teacher to help a student master a concept within their ZPD?', answer: 'Scaffolding.' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-7-2',
            question: 'According to Vygotsky, what happens when a student is presented with academic tasks far above their Zone of Proximal Development (ZPD)?',
            options: [
              'Rapid accelerated learning occurs spontaneously',
              'The student experiences acute frustration, confusion, and failure to learn',
              'The student moves automatically into formal operations',
              'Private speech disappears completely',
            ],
            correctIndex: 1,
            explanation: 'Tasks beyond the ZPD cannot be mastered even with scaffolding, resulting in frustration and cognitive cognitive overload.',
          },
        ],
      },
      {
        id: 'ped-topic-7-3',
        topicNumber: '7.3',
        title: 'Erikson’s Psychosocial Theory & Gardner’s Multiple Intelligences',
        readTime: '7 min read',
        summary: 'Erikson’s elementary school stage (Industry vs. Inferiority), Howard Gardner’s 8 distinct intelligences, and B.F. Skinner’s reinforcement schedules.',
        highYieldAlert: 'STEDA Exam Alert: Elementary school children (6 to 12 years) face the psychosocial crisis of INDUSTRY vs. INFERIORITY. Encouragement builds a sense of competence; constant criticism breeds inferiority.',
        concepts: [
          {
            conceptTitle: 'Howard Gardner’s 8 Multiple Intelligences',
            bulletPoints: [
              '1. Linguistic-Verbal (Words, poetry, reading)',
              '2. Logical-Mathematical (Numbers, logic, proofs)',
              '3. Spatial-Visual (Art, diagrams, navigation)',
              '4. Bodily-Kinesthetic (Physical movement, sports, craft)',
              '5. Musical-Rhythmic (Pitch, rhythm, tone)',
              '6. Interpersonal (Understanding and working with other people)',
              '7. Intrapersonal (Self-awareness, personal reflection)',
              '8. Naturalistic (Flora, fauna, ecological systems)',
            ],
          },
          {
            conceptTitle: 'Operant Conditioning (B.F. Skinner)',
            bulletPoints: [
              'Positive Reinforcement: Adding a pleasant reward to INCREASE desired behavior (e.g., giving a star sticker for homework).',
              'Negative Reinforcement: Removing an unpleasant condition to INCREASE desired behavior (e.g., cancelling homework if students behave attentively). Note: Reinforcement always INCREASES behavior!',
              'Positive Punishment: Adding an unpleasant consequence to DECREASE unwanted behavior (e.g., extra chores).',
              'Negative Punishment: Removing a privileged stimulus to DECREASE unwanted behavior (e.g., taking away recess playtime).',
            ],
          },
        ],
        frequentExamQuestions: [
          { question: 'A teacher eliminates a loud distracting alarm when pupils sit in their designated seats. This is an example of:', answer: 'Negative Reinforcement (Strengthening behavior by removing an aversive stimulus).' },
          { question: 'Which psychosocial crisis must children successfully navigate during primary school years (ages 6 to 12) according to Erik Erikson?', answer: 'Industry vs. Inferiority.' },
          { question: 'How did B.F. Skinner define the difference between reinforcement and punishment?', answer: 'Reinforcement always increases the frequency of a behavior, whereas punishment always decreases it.' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-7-3',
            question: 'Which of Howard Gardner\'s intelligences is most prominently displayed by a student who excels in resolving peer disputes and organizing cooperative group projects?',
            options: ['Intrapersonal Intelligence', 'Interpersonal Intelligence', 'Linguistic Intelligence', 'Spatial Intelligence'],
            correctIndex: 1,
            explanation: 'Interpersonal intelligence involves sensitivity to others\' moods, feelings, motivations, and the capacity to facilitate social collaboration.',
          },
          {
            id: 'qq-ped-7-3b',
            question: 'A primary teacher praises a shy student with enthusiastic verbal acknowledgment every time she raises her hand to answer. This instructional intervention is an example of:',
            options: ['Negative Reinforcement', 'Positive Reinforcement', 'Extinction', 'Positive Punishment'],
            correctIndex: 1,
            explanation: 'Positive Reinforcement involves presenting a rewarding stimulus (praise) immediately following a desired behavior to increase its occurrence.',
          },
        ],
      },
      {
        id: 'ped-topic-7-4',
        topicNumber: '7.4',
        title: 'Lawrence Kohlberg’s Moral Development & Inclusive Education (IEP & UDL)',
        readTime: '9 min read',
        summary: 'Kohlberg’s 3 levels and 6 stages of moral reasoning, the Heinz dilemma, Carol Gilligan’s ethics of care critique, and inclusive education paradigms including Individualized Education Programs (IEP) and Universal Design for Learning (UDL).',
        highYieldAlert: 'STEDA Exam Essentials: Kohlberg evaluated the REASONING BEHIND moral choices, not the action itself! Pre-conventional = Self-interest & avoiding punishment. Conventional = Social rules & pleasing others (Law & Order). Post-conventional = Universal ethical principles. In Special Education: An ACCOMMODATION changes HOW a student learns (e.g., audiobooks, extra exam time) without altering standards; a MODIFICATION changes WHAT a student learns (simplified curriculum).',
        concepts: [
          {
            conceptTitle: 'Lawrence Kohlberg’s 3 Levels & 6 Stages of Moral Development',
            explanation: 'Moral reasoning evolves through sequential stages driven by cognitive maturation and socio-cognitive conflict.',
            bulletPoints: [
              'LEVEL 1: PRE-CONVENTIONAL (Typically young children): Moral logic is driven by external physical consequences to the self.',
              '  - Stage 1: Obedience and Punishment Orientation: "Rules are fixed; obey authority to avoid getting beaten or scolded."',
              '  - Stage 2: Individualism and Exchange (Marketplace/Hedonism): "What is in it for me? You scratch my back, I will scratch yours."',
              'LEVEL 2: CONVENTIONAL (Adolescents and most adults): Moral logic is driven by conformity to social conventions and societal expectations.',
              '  - Stage 3: Good Interpersonal Relationships ("Good Boy / Nice Girl"): Desire for social approval and pleasing family/peers.',
              '  - Stage 4: Maintaining Social Order ("Law and Order"): Duty, respect for lawful authority, and keeping society functioning smoothly.',
              'LEVEL 3: POST-CONVENTIONAL (Only a minority of adults reach this): Moral logic is anchored in abstract principles and human rights transcending unjust laws.',
              '  - Stage 5: Social Contract and Individual Rights: Laws are flexible democratic instruments that must serve the greatest good; if unjust, they can be changed.',
              '  - Stage 6: Universal Ethical Principles: Self-chosen universal principles of justice, human dignity, and equality (e.g., Gandhi, Nelson Mandela).',
              'Carol Gilligan’s Critique: Pointed out that Kohlberg studied only male subjects and overemphasized the male "Justice & Rights" perspective, neglecting women’s "Ethics of Care, Nurturance & Interpersonal Responsibility".',
            ],
          },
          {
            conceptTitle: 'Inclusive Education, IEP & Universal Design for Learning (UDL)',
            explanation: 'Inclusive education guarantees that children with diverse physical, sensory, cognitive, and linguistic needs learn alongside peers in general classrooms.',
            bulletPoints: [
              'Individualized Education Program (IEP): A legally binding, personalized educational roadmap developed collaboratively by teachers, special educators, and parents for a child with identified special needs.',
              'Accommodations vs. Modifications: Accommodations level the playing field without lowering academic rigor (e.g., large font size, frequent sensory breaks, oral exam options). Modifications adjust curricular expectations (e.g., assigning 5 spelling words instead of 20).',
              'Universal Design for Learning (UDL): Proactively designing curricula accessible to all learners through three principles: 1. Multiple Means of Representation (visual, auditory, tactile), 2. Multiple Means of Action and Expression (speaking, writing, drawing, building), and 3. Multiple Means of Engagement (choice, games, relevant projects).',
            ],
          },
        ],
        comparisonTable: {
          title: 'Accommodation vs. Modification in Inclusive Education',
          headers: ['Parameter', 'Instructional Accommodation', 'Curricular Modification'],
          rows: [
            ['Definition', 'Changes HOW a student learns or demonstrates knowledge', 'Changes WHAT a student is expected to learn or master'],
            ['Curriculum Standard', 'Standards remain identical to general peers', 'Standards and grade-level expectations are modified/reduced'],
            ['Grading System', 'Graded against standard grade-level rubric', 'Graded against tailored IEP goals and modified criteria'],
            ['Concrete Examples', 'Allowing 30 minutes extra time on a test; text-to-speech audio reader', 'Testing only single-digit addition when the class is learning double-digit multiplication'],
          ],
        },
        classroomApplication: 'In a mainstream public school classroom in Sukkur with a visually impaired student, provide seating in the front row, use high-contrast black ink on white paper, provide large-print text, and verbalize every word written on the chalkboard (Accommodation).',
        mnemonicAid: 'P-C-P: Pre-conventional (Punishment/Reward) -> Conventional (Conformity/Law) -> Post-conventional (Principles/Rights).',
        frequentExamQuestions: [
          { question: 'A child refrains from stealing a classmate’s pencil solely because she fears being reprimanded by the teacher. In which of Kohlberg’s stages is she operating?', answer: 'Stage 1: Obedience and Punishment Orientation (Pre-Conventional Level).' },
          { question: 'What is the fundamental difference between an Accommodation and a Modification in special needs education?', answer: 'An Accommodation alters instructional delivery without changing standards; a Modification changes the curriculum standards and content.' },
          { question: 'Who famously criticized Lawrence Kohlberg’s moral framework for its gender bias and neglect of the "Ethics of Care"?', answer: 'Carol Gilligan (author of "In a Different Voice").' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-7-4a',
            question: 'In Kohlberg\'s theory of moral development, individuals who uphold laws and social rules primarily to maintain order and fulfill their societal duty belong to:',
            options: ['Pre-conventional Level (Stage 2)', 'Conventional Level (Stage 4)', 'Post-conventional Level (Stage 6)', 'Sensorimotor Stage'],
            correctIndex: 1,
            explanation: 'Stage 4 (Law and Order) of the Conventional Level emphasizes that laws must be strictly obeyed to maintain the stability of society as a whole.',
          },
          {
            id: 'qq-ped-7-4b',
            question: 'Allowing a student with dysgraphia to answer an essay exam orally rather than in handwriting is an example of an educational:',
            options: ['Modification', 'Accommodation', 'Standardization', 'Segregation'],
            correctIndex: 1,
            explanation: 'This is an Accommodation: it alters the format of student response to overcome a physical writing barrier while maintaining the exact same academic grading criteria.',
          },
        ],
      },
      {
        id: 'ped-topic-7-5',
        topicNumber: '7.5',
        title: 'Motivation Theories (Maslow’s Hierarchy, Self-Determination) & Metacognitive Learning Strategies',
        readTime: '8 min read',
        summary: 'Abraham Maslow’s Hierarchy of Needs, Deci & Ryan’s Self-Determination Theory (Autonomy, Competence, Relatedness), Intrinsic vs. Extrinsic motivation (Overjustification effect), and John Flavell’s Metacognition (monitoring and evaluating one’s own thinking).',
        highYieldAlert: 'STEDA Educational Psychology Rule: According to Abraham Maslow, lower-level deficiency needs (Physiological safety, hunger, belongingness) MUST be satisfied before a child can focus on higher growth needs (intellectual curiosity, self-actualization). A hungry or terrified child cannot learn math! Metacognition is "thinking about one\'s own thinking" (John Flavell, 1979).',
        concepts: [
          {
            conceptTitle: 'Maslow’s Hierarchy of Needs in the Classroom',
            explanation: 'A tiered pyramid of human motivational drives divided into Deficiency Needs (D-needs) and Growth Needs (B-needs).',
            bulletPoints: [
              '1. Physiological Needs (Base): Food, clean water, adequate sleep, air, restroom access. A student who arrives at school on an empty stomach experiences impaired working memory.',
              '2. Safety & Security: Emotional and physical safety, freedom from fear, violence, or corporal punishment. A fearful child\'s brain triggers amygdala hijack, blocking prefrontal cortex learning.',
              '3. Love & Belongingness: Acceptance by peers and teacher, sense of inclusion and community in the school.',
              '4. Esteem Needs: Competence, recognition, respect, academic self-efficacy, and constructive teacher praise.',
              '5. Self-Actualization (Peak): Realizing full intellectual and creative human potential, intrinsic desire to learn and create.',
            ],
            keyTerms: [
              { term: 'Deficiency Needs', definition: 'The first four levels of Maslow’s hierarchy that arise due to deprivation and motivate individuals when unmet.' },
              { term: 'Overjustification Effect', definition: 'The phenomenon where offering an extrinsic reward for an already intrinsically rewarding task actually decreases intrinsic interest.' },
            ],
          },
          {
            conceptTitle: 'Intrinsic vs. Extrinsic Motivation & Self-Determination Theory (Deci & Ryan)',
            explanation: 'Differentiating internal drives from external incentives for sustainable student engagement.',
            bulletPoints: [
              'Intrinsic Motivation: Engaging in an activity purely for its inherent satisfaction, curiosity, challenge, and pleasure (e.g., reading a Sindhi folklore story out of personal joy).',
              'Extrinsic Motivation: Performing a behavior to attain a separable outcome, earn a tangible prize, grade, trophy, or avoid punishment.',
              'Self-Determination Theory (SDT): Proposes that human beings possess 3 innate psychological needs: 1. Autonomy (feeling in control of one\'s choices); 2. Competence (feeling capable and effective); 3. Relatedness (feeling socially connected and cared for).',
            ],
          },
          {
            conceptTitle: 'Metacognition: Self-Regulated Learning (John Flavell)',
            explanation: 'Higher-order executive regulation of one’s own cognitive cognitive processes.',
            bulletPoints: [
              'Metacognitive Knowledge: Understanding how one learns, recognizing personal strengths, task demands, and mnemonic strategies.',
              'Metacognitive Regulation: The active three-phase cycle: 1. Planning (deciding which strategy to use before starting); 2. Monitoring (checking comprehension while working, e.g., "Do I really understand this step?"); 3. Evaluating (reflecting on success and adjusting approaches post-task).',
              'Think-Aloud Protocols: Teachers model metacognitive thinking aloud to make invisible cognitive problem-solving visible to pupils.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Intrinsic vs. Extrinsic Motivation',
          headers: ['Dimension', 'Intrinsic Motivation', 'Extrinsic Motivation'],
          rows: [
            ['Source of Drive', 'Internal curiosity, passion, enjoyment', 'External rewards, marks, certificates, pressure'],
            ['Long-Term Persistence', 'High; sustained self-directed learning', 'Low; ceases when rewards or surveillance stop'],
            ['Risk of Burnout', 'Low; revitalizing and empowering', 'High; feels controlling and transactional'],
            ['Best Classroom Use', 'Fostering deep conceptual mastery', 'Jumpstarting initial engagement on tedious tasks'],
          ],
        },
        classroomApplication: 'Implement "Exit Tickets" with metacognitive reflection prompts: "What was the most confusing concept today?" and "What study strategy will you use to clarify it tonight?" Address Maslow’s needs by ensuring morning water availability and welcoming greetings before starting academic lectures.',
        mnemonicAid: 'SDT Needs = A-C-R: Autonomy, Competence, Relatedness. Maslow = P-S-B-E-S (Please Send Big Educational Success).',
        frequentExamQuestions: [
          { question: 'According to Maslow’s Hierarchy of Needs, which level must be satisfied before a student can effectively focus on academic learning?', answer: 'Deficiency Needs (Physiological and Safety Needs).' },
          { question: 'Who coined the psychological term "Metacognition" in 1979?', answer: 'John Flavell ("thinking about thinking").' },
          { question: 'What happens in the "overjustification effect"?', answer: 'Extrinsic rewards diminish a learner\'s pre-existing intrinsic motivation for a task.' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-7-5a',
            question: 'A student pauses while reading a textbook, realizes he did not understand the last paragraph, and decides to re-read it at a slower pace. This self-regulatory behavior is an example of:',
            options: ['Classical Conditioning', 'Metacognitive Monitoring', 'Vicarious Punishment', 'Sensory Memory Decay'],
            correctIndex: 1,
            explanation: 'Metacognitive monitoring involves actively tracking one\'s own comprehension in real time and implementing repair strategies when understanding breaks down.',
          },
          {
            id: 'qq-ped-7-5b',
            question: 'Under Self-Determination Theory (Deci & Ryan), which three innate psychological needs foster optimal intrinsic motivation?',
            options: [
              'Food, Water, and Sleep',
              'Autonomy, Competence, and Relatedness',
              'Power, Affiliation, and Achievement',
              'Id, Ego, and Superego',
            ],
            correctIndex: 1,
            explanation: 'Self-Determination Theory identifies Autonomy, Competence, and Relatedness as the three core psychological needs essential for intrinsic motivation.',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // MODULE 8: CLASSROOM MANAGEMENT & DISCIPLINE (10 MARKS)
  // -------------------------------------------------------------------------
  {
    id: 'tl-part-8-management',
    partNumber: 8,
    partCategory: 'Part II: Pedagogical Content Knowledge (50%)',
    subjectName: 'Classroom Management & Discipline',
    weightage: '10 Marks (10%)',
    marks: 10,
    targetLevel: 'HEC B.Ed (Hons) / ADE & National Standards',
    iconName: 'ShieldCheck',
    themeColor: 'from-amber-600 to-yellow-600',
    badgeBg: 'bg-amber-100 dark:bg-amber-950/60',
    badgeText: 'text-amber-800 dark:text-amber-300',
    description: 'Evidence-based classroom management strategies: Jacob Kounin’s principles of withitness and momentum, assertive discipline, positive behavior intervention, classroom space design, and the Sindh Prohibition of Corporal Punishment Act 2016.',
    topics: [
      {
        id: 'ped-topic-8-1',
        topicNumber: '8.1',
        title: 'Jacob Kounin’s Classroom Management Principles',
        readTime: '8 min read',
        summary: 'Kounin’s landmark empirical research proving that effective managers are distinguished by preventative instructional behaviors: Withitness, Smoothness, Momentum, Overlapping, and Group Alertness.',
        highYieldAlert: 'STEDA Top Question: "Withitness" is the teacher’s uncanny awareness of what is going on in all parts of the classroom at all times ("having eyes in the back of your head") and nipping misbehavior in the bud before it escalates.',
        concepts: [
          {
            conceptTitle: 'Kounin’s Core Management Behaviors',
            explanation: 'Kounin found that effective and ineffective teachers discipline misbehavior in similar ways; what differentiates effective teachers is how they PREVENT misbehavior through lesson flow.',
            bulletPoints: [
              '1. WITHITNESS: Remaining constantly alert to the entire room, scanning while teaching, and intervening with the correct culprit at the very earliest stage.',
              '2. OVERLAPPING: The capacity to handle two or more classroom events simultaneously without dropping lesson focus (e.g., helping a student at the board while gesturing non-verbally to quiet a whispering pupil in the back).',
              '3. SMOOTHNESS: Pacing the lesson smoothly without sudden jerky transitions, tangents, or getting sidetracked by irrelevant interruptions (avoiding "flip-flops" and "dangles").',
              '4. MOMENTUM: Keeping the lesson moving forward briskly without dragging pauses, excessive over-explaining of simple instructions, or slow distribution of materials.',
              '5. GROUP FOCUS & ALERTNESS: Keeping all students attentive and accountable (e.g., posing a question to the whole class first, pausing, and then calling on a student randomly).',
            ],
          },
        ],
        comparisonTable: {
          title: 'Kounin’s Lesson Transition Errors to Avoid',
          headers: ['Pitfall Name', 'What Happens', 'Teacher Correction'],
          rows: [
            ['Dangle', 'Teacher leaves a topic hanging in mid-air to do something else and never returns.', 'Finish the instructional thought before redirecting attention.'],
            ['Flip-Flop', 'Teacher terminates an activity, begins a new one, then suddenly reverts back to the first one.', 'Plan clear, deliberate boundaries between lesson phases.'],
            ['Thrust', 'Teacher bursts in with sudden new instructions while students are deeply engaged in another task.', 'Use a designated attention signal before giving transitions.'],
            ['Stimulus Bound', 'Teacher gets easily distracted by minor external trivia (e.g. bird outside window).', 'Ignore trivial stimuli and maintain instructional momentum.'],
          ],
        },
        classroomApplication: 'While writing key equations on the board, keep your body angled at 45 degrees so you maintain peripheral vision of all students, practicing Withitness.',
        frequentExamQuestions: [
          { question: 'What did Jacob Kounin call a teacher’s ability to attend to two separate classroom situations simultaneously?', answer: 'Overlapping.' },
          { question: 'A teacher’s awareness of everything transpiring across all corners of the classroom is known as:', answer: 'Withitness.' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-8-1',
            question: 'A teacher is lecturing on geography, suddenly stops mid-sentence to fix a crooked wall map, forgets what she was saying, and pauses for two minutes. This flow breakdown is called:',
            options: ['Withitness', 'Overlapping', 'Dangle / Loss of Momentum', 'Group Alertness'],
            correctIndex: 2,
            explanation: 'Dropping the instructional flow abruptly due to a trivial distraction is a loss of momentum and a dangle.',
          },
        ],
      },
      {
        id: 'ped-topic-8-2',
        topicNumber: '8.2',
        title: 'Sindh Prohibition of Corporal Punishment Act 2016',
        readTime: '6 min read',
        summary: 'Legal prohibition of physical punishment in educational institutions across Sindh, child safeguarding obligations, alternative positive reinforcement, and restorative discipline.',
        highYieldAlert: 'STEDA Legal Mandate: The Sindh Assembly passed the "Sindh Prohibition of Corporal Punishment Act, 2016" (Act VII of 2017), making physical beating, hitting, or cruel humiliation in schools a cognizable penal offence with strict legal penalties.',
        concepts: [
          {
            conceptTitle: 'Key Provisions of the 2016 Sindh Act',
            bulletPoints: [
              'Definition: Any punishment involving physical force intended to cause pain or discomfort, however light, including hitting, slapping, pinching, or forcing uncomfortable physical postures.',
              'Total Ban: Corporal punishment is completely prohibited in all public, private, and religious educational institutions in Sindh.',
              'Penalties: Teachers and administrators violating the law face disciplinary dismissal, suspension, and penal prosecution under the Pakistan Penal Code (PPC).',
              'Positive Discipline Alternatives: Clear behavioral expectations established collaboratively with students, privilege systems, reflective restorative conferences, and parental partnerships.',
            ],
          },
        ],
        frequentExamQuestions: [
          { question: 'Under the Sindh Prohibition of Corporal Punishment Act 2016, is a teacher allowed to slap a student for chronic indiscipline?', answer: 'Strictly No (It is an illegal and criminal offence under Sindh law).' },
          { question: 'What alternative to physical punishment is mandated for educational institutions across Sindh?', answer: 'Positive Behavior Interventions and Supports (PBIS) and restorative behavioral practices.' },
          { question: 'Who is legally liable under the Sindh Prohibition of Corporal Punishment Act if physical violence occurs in an educational institution?', answer: 'Both the perpetrator teacher and the institutional head who fails to report or prevent the abuse.' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-8-2',
            question: 'What is the modern pedagogical alternative recommended by STEDA to replace traditional punitive classroom practices?',
            options: [
              'Humiliating students publicly in morning assembly',
              'Positive Behavior Intervention and Support (PBIS) with restorative dialogue',
              'Locking disruptive students outside the classroom gate',
              'Assigning 100 pages of mechanical repetitive transcription',
            ],
            correctIndex: 1,
            explanation: 'PBIS and restorative justice focus on setting clear norms, recognizing positive actions, and teaching self-regulation.',
          },
          {
            id: 'qq-ped-8-2b',
            question: 'The Sindh Prohibition of Corporal Punishment Act 2016 classifies corporal punishment in schools as:',
            options: [
              'A standard disciplinary prerogative of the school principal',
              'A cognizable penal offence subject to legal prosecution',
              'Permissible only if prior parental consent is signed',
              'An internal matter outside the jurisdiction of courts',
            ],
            correctIndex: 1,
            explanation: 'Under Sindh Act VII of 2017, inflicting corporal punishment is a cognizable legal offence subject to criminal penalties and administrative dismissal.',
          },
        ],
      },
      {
        id: 'ped-topic-8-3',
        topicNumber: '8.3',
        title: 'Positive Behavior Interventions (PBIS), Classroom Seating Layouts & Restorative Justice',
        readTime: '8 min read',
        summary: 'The 3-tier PBIS support model, pedagogical seating arrangements (Rows, Horseshoe, Pods), co-creating positive class norms on Day 1, managing the 7-phase conflict de-escalation cycle, and restorative peace circles.',
        highYieldAlert: 'STEDA Management Alert: Seating arrangement must match pedagogical purpose: U-Shape / Horseshoe = Socratic whole-class discussions; Pods / Clusters = Cooperative learning & Jigsaw; Rows = Individual formal testing. PBIS Tier 1 = Universal (80–90% of students). Classroom rules must ALWAYS be stated POSITIVELY (e.g., "Walk quietly in hallways" instead of "Don’t run").',
        concepts: [
          {
            conceptTitle: 'The Multi-Tiered PBIS Triangle Framework',
            explanation: 'Positive Behavioral Interventions and Supports (PBIS) replaces reactive punishment with proactive behavioral systems.',
            bulletPoints: [
              'Tier 1 (Universal / Primary Prevention): High-quality classroom management, explicit teaching of school-wide values, predictable daily routines, and a 4:1 ratio of positive praise to corrective redirection. Successfully supports 80–90% of students.',
              'Tier 2 (Targeted / Secondary Prevention): Small group social skills coaching, adult mentoring, and daily Check-In/Check-Out (CICO) systems for the 10–15% of students needing extra behavioral scaffolding.',
              'Tier 3 (Intensive / Tertiary Prevention): Individualized crisis plans, Functional Behavior Assessments (FBA), and comprehensive wraparound behavioral support for the 1–5% of students with chronic behavioral crises.',
            ],
          },
          {
            conceptTitle: 'Strategic Classroom Seating Arrangements',
            explanation: 'Physical room geography directly controls student sightlines, communication dynamics, and movement patterns.',
            bulletPoints: [
              'Horseshoe / U-Shape: Desks form an open curve facing the center. Excellent for teacher-facilitated class discussions, student presentations, and equal visibility where everyone sees everyone.',
              'Pods / Small Group Clusters: 4 to 5 desks pushed together facing inward. Ideal for cooperative learning, group problem-solving, and science labs. Requires established quiet signals to curb off-task chatting.',
              'Traditional Rows and Columns: All desks facing front in straight lines. Best for independent seatwork, standardized testing, and minimizing peer distractions during direct didactic instruction.',
              'Stadium / Chevron: Desks angled in rows toward the center board. Blends whole-class teacher focus with easy peer turning for think-pair-share.',
            ],
          },
          {
            conceptTitle: 'Restorative Justice vs. Traditional Punitive Discipline',
            explanation: 'When misbehavior occurs, restorative practices focus on repairing the harm caused to the community rather than inflicting retribution.',
            bulletPoints: [
              'The 5 Restorative Questions: 1. What happened? 2. What were you thinking and feeling at the time? 3. Who has been affected by what you did? 4. In what way have they been affected? 5. What do you think you need to do to make things right?',
              'De-escalation Cycle: In the Agitation or Acceleration phase, lower your voice tone, maintain open body posture, give the student space, and offer two acceptable choices rather than issuing ultimatums.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Traditional Punitive Discipline vs. Restorative Justice',
          headers: ['Dimension', 'Traditional Punitive Model', 'Restorative Justice Model (STEDA Standards)'],
          rows: [
            ['Core Question Asked', 'What rule was broken and who did it?', 'What harm was caused and who was impacted?'],
            ['Primary Focus', 'Assigning blame and establishing punishment', 'Repairing harm, restoring relationships, and problem-solving'],
            ['Student Response', 'Passive compliance, resentment, or defiance', 'Active accountability, empathy, and behavioral self-correction'],
            ['Community Impact', 'Alienates the student from the school community', 'Reintegrates the student back into the classroom circle'],
          ],
        },
        classroomApplication: 'On the first day of school, spend 30 minutes developing a "Classroom Compact": have students brainstorm and agree upon 4 positive norms (e.g., "1. We speak with kindness. 2. We listen when others share. 3. We take care of our school materials. 4. We try our best every day."), then have every pupil sign the poster.',
        mnemonicAid: 'P-B-I-S = Positive Behavior Inspires Students. R-H-P: Rows = Research/Tests, Horseshoe = Hearing/Debate, Pods = Projects/Teams.',
        frequentExamQuestions: [
          { question: 'Which classroom seating arrangement is optimal for fostering active whole-class discussions and Socratic dialogue?', answer: 'Horseshoe / U-Shape Seating.' },
          { question: 'What is the recommended ratio of positive behavioral acknowledgments to corrective redirections in PBIS classrooms?', answer: '4 to 1 (Four positive praises for every one corrective feedback).' },
          { question: 'What is the primary goal of Restorative Justice practices in schools?', answer: 'To repair harm caused to individuals and restore relationships within the school community.' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-8-3a',
            question: 'A teacher wants to organize a collaborative STEM project where students build cardboard bridge structures in teams of four. Which seating layout is most appropriate?',
            options: ['Single Rows facing the chalkboard', 'Pods / Small Group Clusters', 'Horseshoe / U-Shape', 'Individual study carrels'],
            correctIndex: 1,
            explanation: 'Pods / Small group clusters face students toward each other, facilitating communication, resource sharing, and collaborative teamwork.',
          },
          {
            id: 'qq-ped-8-3b',
            question: 'Under the PBIS Multi-Tiered System of Support, what percentage of the student population is expected to respond successfully to Tier 1 universal preventative classroom management?',
            options: ['20% – 30%', '50% – 60%', '80% – 90%', '99% – 100%'],
            correctIndex: 2,
            explanation: 'Tier 1 universal interventions are designed to be effective for 80% to 90% of all students in a school.',
          },
        ],
      },
      {
        id: 'ped-topic-8-4',
        topicNumber: '8.4',
        title: 'Multi-Grade Teaching Strategies, Classroom Conflict Resolution & Well-being in Rural Sindh',
        readTime: '8 min read',
        summary: 'Instructional methodologies for multi-grade classrooms (where one teacher instructs multiple grade cohorts simultaneously in single/two-room rural Sindh schools), peer tutoring, activity corners, non-violent conflict resolution, and bullying prevention.',
        highYieldAlert: 'STEDA Multi-Grade Fact: Over 60% of primary schools in rural Sindh operate as multi-grade or single-teacher schools. Core multi-grade organizational strategies include: 1. Subject Staggering (direct instruction to Grade 2 while Grade 3 does independent seatwork); 2. Cross-Age Peer Tutoring; 3. Thematic Common Core Teaching (teaching a broad concept like "Water" across grades, differentiated by task complexity).',
        concepts: [
          {
            conceptTitle: 'Multi-Grade Teaching Models in Sindh Public Schools',
            explanation: 'Classroom organizational frameworks when one teacher is assigned to simultaneously teach students across multiple curriculum levels (e.g., Classes 1, 2, and 3 in one hall).',
            bulletPoints: [
              'Context in Sindh: Widespread in rural districts (Tharparkar, Badin, Jacobabad, Thatta) due to teacher shortages and low-enrollment primary feeder schools.',
              'Subject Staggering Strategy: The educator divides the class period into distinct 15-minute segments. While the teacher provides direct interactive instruction to Class 3 on multiplication, Classes 1 and 2 engage in pre-assigned independent drill or handwriting practice.',
              'Cross-Age Peer Tutoring: Pairing older/higher-grade competent students with younger peers. Research proves peer tutoring reinforces mastery for the tutor while providing individualized scaffolding for the tutee.',
              'Activity Corners / Learning Stations: Setting up designated physical classroom zones (Reading Corner with Sindhi/Urdu storybooks, Math Manipulatives Corner with counting beads/pebbles, Science Nature Table) for self-directed student exploration.',
            ],
            keyTerms: [
              { term: 'Multi-Grade Teaching', definition: 'The pedagogical situation where a single teacher is responsible for teaching pupils across two or more grade levels in the same room simultaneously.' },
              { term: 'Peer Tutoring', definition: 'An instructional strategy where one student provides learning assistance and feedback to another under teacher supervision.' },
            ],
          },
          {
            conceptTitle: 'Classroom Conflict Resolution & Anti-Bullying Protocol',
            explanation: 'Constructive mediation models to de-escalate peer aggression without relying on punitive exclusion.',
            bulletPoints: [
              'The "Peace Corner" / Conflict Table: A designated quiet spot where disputing students are guided to use "I-messages" ("I felt upset when you took my ruler without asking") rather than accusatory blame ("You are a thief!").',
              'Four-Step Peer Mediation: 1. Cool down and take deep breaths; 2. Each party speaks without interruption while the other actively listens; 3. Brainstorm mutually acceptable win-win solutions; 4. Formal handshake and agreed commitment.',
              'Bullying Dynamics: Bullying is repeated, intentional aggression characterized by an imbalance of physical, verbal, or social power. Teachers must address passive bystanders, as bystander intervention stops bullying in over 50% of instances.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Mono-Grade vs. Multi-Grade Classroom Management',
          headers: ['Dimension', 'Mono-Grade Classroom', 'Multi-Grade Classroom'],
          rows: [
            ['Teacher Focus', 'Single curriculum and grade standard', 'Differentiated multi-level curricula simultaneously'],
            ['Student Grouping', 'Homogeneous chronological age', 'Heterogeneous mixed ages and competencies'],
            ['Instructional Delivery', 'Predominantly whole-class direct teaching', 'Staggered direct teaching, peer tutoring & self-study stations'],
            ['Student Autonomy', 'Teacher-directed schedule', 'High reliance on student self-regulation and independence'],
          ],
        },
        classroomApplication: 'In a single-teacher school in rural Dadu, organize three physical seating clusters: Class 1 in the front left doing letter tracing on slates, Class 2 in the front right doing math flashcards with a Class 4 peer monitor, while the teacher directly teaches a science lesson to Class 3 at the chalkboard.',
        mnemonicAid: 'M-U-L-T-I = Mixed-age, Utmost organization, Learning stations, Tutoring peers, Independent work.',
        frequentExamQuestions: [
          { question: 'What is the primary instructional strategy when a single teacher manages two different grades in one classroom?', answer: 'Subject Staggering combined with Cross-Age Peer Tutoring and self-directed activity stations.' },
          { question: 'What defines bullying behavior compared to ordinary peer disagreement?', answer: 'Bullying involves repeated, intentional aggression characterized by an imbalance of power.' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-8-4a',
            question: 'In a multi-grade rural primary school, what is the pedagogical benefit of "Cross-Age Peer Tutoring"?',
            options: [
              'It frees the teacher to leave the school premises unattended',
              'It reinforces conceptual mastery for the student tutor while providing personalized scaffolding for the younger learner',
              'It eliminates the need for textbooks and government examinations',
              'It encourages physical competition between older and younger cohorts',
            ],
            correctIndex: 1,
            explanation: 'Cross-age peer tutoring provides individualized scaffolding for younger learners while reinforcing cognitive mastery and social responsibility in older tutors.',
          },
          {
            id: 'qq-ped-8-4b',
            question: 'A teacher introduces "I-messages" (e.g., "I feel frustrated when I am interrupted") during classroom conflict resolution. The primary goal of this technique is to:',
            options: [
              'Assign legal blame to the offending student',
              'Express personal feelings clearly without triggering defensiveness or hostility in the listener',
              'Ensure the teacher does not have to mediate disputes',
              'Impose immediate detention on both students',
            ],
            correctIndex: 1,
            explanation: '"I-messages" communicate personal emotional impact and needs objectively without using accusatory "you" statements that provoke defensive arguments.',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // MODULE 9: CLASSROOM ASSESSMENT & EVALUATION (10 MARKS)
  // -------------------------------------------------------------------------
  {
    id: 'tl-part-9-assessment',
    partNumber: 9,
    partCategory: 'Part II: Pedagogical Content Knowledge (50%)',
    subjectName: 'Classroom Assessment & Evaluation',
    weightage: '10 Marks (10%)',
    marks: 10,
    targetLevel: 'HEC B.Ed (Hons) / ADE & National Standards',
    iconName: 'Award',
    themeColor: 'from-teal-600 to-cyan-700',
    badgeBg: 'bg-teal-100 dark:bg-teal-950/60',
    badgeText: 'text-teal-800 dark:text-teal-300',
    description: 'Assessment science and psychometrics: Diagnostic, Formative, and Summative evaluation; Criterion-Referenced Tests (CRT) vs. Norm-Referenced Tests (NRT); Bloom’s Revised Taxonomy; test reliability and validity; item difficulty index (p) and discrimination index (D).',
    topics: [
      {
        id: 'ped-topic-9-1',
        topicNumber: '9.1',
        title: 'Assessment Paradigms: Diagnostic, Formative & Summative',
        readTime: '8 min read',
        summary: 'Comparing Assessment FOR Learning (Formative), Assessment OF Learning (Summative), and Assessment AS Learning (Metacognitive self-assessment).',
        highYieldAlert: 'STEDA Core Maxim: "When the cook tastes the soup, that is Formative; when the guests taste the soup, that is Summative." - Paul Black & Dylan Wiliam.',
        concepts: [
          {
            conceptTitle: 'The Three Main Assessment Types',
            bulletPoints: [
              '1. DIAGNOSTIC ASSESSMENT: Administered BEFORE instruction begins to identify prior knowledge, misconceptions, learning gaps, or specific strengths (e.g., pre-tests, KWL charts).',
              '2. FORMATIVE ASSESSMENT (Assessment FOR Learning): Conducted DURING the instructional process to provide real-time descriptive feedback and allow teachers to adjust lesson pacing (e.g., exit tickets, thumbs up/down, quizzes, oral questioning). Low stakes, no final grades.',
              '3. SUMMATIVE ASSESSMENT (Assessment OF Learning): Administered at the CONCLUSION of a unit or term to judge, certify, and grade overall student achievement against established benchmarks (e.g., final board exams, STS Teaching License Test). High stakes.',
              '4. ASSESSMENT AS LEARNING: Occurs when students actively self-assess, reflect on their own progress, and set personal learning targets.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Formative vs. Summative Assessment Matrix',
          headers: ['Feature', 'Formative Assessment', 'Summative Assessment'],
          rows: [
            ['Primary Purpose', 'To improve and adapt ongoing learning (Forming)', 'To evaluate, grade, and certify learning (Summing up)'],
            ['Timing', 'During the active instruction cycle', 'At the end of an instructional period/term'],
            ['Stakes', 'Low stakes (Non-threatening, feedback-oriented)', 'High stakes (Determines passing, rank, license, or diploma)'],
            ['Beneficiary', 'Teacher and student adjust immediate behavior', 'School, government, employer, and candidate'],
          ],
        },
        classroomApplication: 'Use a 2-minute "Exit Ticket" at the end of class: Each student writes one thing they learned and one question they still have on a paper slip before walking out the door.',
        frequentExamQuestions: [
          { question: 'Which assessment is conducted during the teaching process to provide ongoing feedback and improve learning?', answer: 'Formative Assessment.' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-9-1',
            question: 'At the end of the academic year, the Sindh Board of Intermediate and Secondary Education conducts the Matric examination to award secondary certificates. This is an example of:',
            options: ['Diagnostic Assessment', 'Formative Assessment', 'Summative Assessment', 'Informal Assessment'],
            correctIndex: 2,
            explanation: 'The annual Board examination certifies terminal student achievement for grading and credentialing, representing summative evaluation.',
          },
        ],
      },
      {
        id: 'ped-topic-9-2',
        topicNumber: '9.2',
        title: 'Criterion-Referenced (CRT) vs. Norm-Referenced Tests (NRT)',
        readTime: '7 min read',
        summary: 'Understanding performance comparison: Measuring against an absolute criterion benchmark (CRT, e.g. 60% STEDA threshold) vs. measuring relative percentile rank against peers (NRT).',
        highYieldAlert: 'STEDA Benchmark Alert: The Sindh Teaching License Test is a CRITERION-REFERENCED TEST (CRT). Candidates must score at least 60% (60 marks out of 100) to pass, regardless of how other examinees score!',
        concepts: [
          {
            conceptTitle: 'CRT vs. NRT In-Depth',
            bulletPoints: [
              'Criterion-Referenced Test (CRT): Measures performance against an absolute, pre-determined standard or objective criteria (e.g., "Student can solve two-digit multiplication with 80% accuracy" or "Candidate scored >= 60% on STEDA license"). The performance of other test-takers does not affect your result.',
              'Norm-Referenced Test (NRT): Measures and ranks a test-taker\'s performance relative to a defined norm group of peers (e.g., percentile rankings, grading on a bell curve, CSS top rankers). A score of 70% might be in the 95th percentile if the test was difficult for everyone.',
            ],
          },
        ],
        frequentExamQuestions: [
          { question: 'Is the Sindh Teaching License examination a norm-referenced or criterion-referenced test?', answer: 'Criterion-Referenced Test (Pass threshold is strictly fixed at 60%).' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-9-2',
            question: 'A test report indicates that Ahmad scored in the 88th percentile among all 8th-grade students in Sindh. This test is:',
            options: ['Criterion-Referenced', 'Norm-Referenced', 'Diagnostic Survey', 'Formative Check'],
            correctIndex: 1,
            explanation: 'Reporting performance as a percentile rank relative to a peer group is the defining characteristic of a Norm-Referenced Test (NRT).',
          },
        ],
      },
      {
        id: 'ped-topic-9-3',
        topicNumber: '9.3',
        title: 'Bloom’s Revised Taxonomy & Psychometric Item Analysis',
        readTime: '8 min read',
        summary: 'The 6 levels of Bloom’s Cognitive Domain (Anderson & Krathwohl 2001), psychometric formulas for Item Difficulty Index (p-value) and Item Discrimination Index (D-value), and Test Reliability vs. Validity.',
        highYieldAlert: 'STEDA Formula & Taxonomy Alert: Highest level of Bloom\'s Revised Cognitive Domain is CREATING (formerly Evaluation). Item Difficulty p = (Correct Responses) / (Total Examinees). If p = 0.85, the item is EASY; if p = 0.20, it is DIFFICULT. Ideal MCQ difficulty is between 0.40 and 0.60.',
        concepts: [
          {
            conceptTitle: 'Bloom\'s Revised Cognitive Taxonomy (2001)',
            bulletPoints: [
              '1. REMEMBERING: Retrieving relevant knowledge from long-term memory (Verbs: list, define, recall, identify).',
              '2. UNDERSTANDING: Constructing meaning from instructional messages (Verbs: explain, summarize, classify, infer).',
              '3. APPLYING: Carrying out or using a procedure in a given situation (Verbs: calculate, solve, demonstrate, use).',
              '4. ANALYZING: Breaking material into constituent parts and determining how parts relate (Verbs: compare, contrast, distinguish, differentiate).',
              '5. EVALUATING: Making judgments based on criteria and standards (Verbs: critique, judge, defend, justify).',
              '6. CREATING: Putting elements together to form a novel, coherent whole or original product (Verbs: design, construct, formulate, invent).',
            ],
          },
          {
            conceptTitle: 'Psychometric Formulas for Item Analysis',
            bulletPoints: [
              'Item Difficulty Index (p): p = R / N, where R is the number of examinees answering correctly and N is total examinees. Higher p-value = Easier question.',
              'Item Discrimination Index (D): D = (Upper Group Correct - Lower Group Correct) / Half of Total Examinees. Ranges from -1.00 to +1.00. Good items have D >= +0.30, meaning top performers answered correctly more often than struggling students.',
              'Reliability: Consistency and repeatability of test results over time.',
              'Validity: The degree to which a test accurately measures what it purports to measure (Content, Construct, Criterion). Validity is more crucial than reliability; a test can be reliable without being valid, but it cannot be valid without being reliable.',
            ],
          },
        ],
        frequentExamQuestions: [
          { question: 'What is the highest cognitive level in the Revised Bloom’s Taxonomy (Anderson & Krathwohl 2001)?', answer: 'Creating (generating new ideas or products).' },
          { question: 'If 80 out of 100 examinees answer a test question correctly, what is its item difficulty index (p)?', answer: 'p = 80 / 100 = 0.80 (A relatively easy item).' },
          { question: 'Can an educational test be reliable without being valid?', answer: 'Yes, a test can produce consistent results (reliable) while measuring the wrong construct (invalid); but it cannot be valid without first being reliable.' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-9-3',
            question: 'An item analysis shows that students in the bottom 27% score bracket answered Question 14 correctly more often than students in the top 27% bracket. What is the discrimination index (D)?',
            options: [
              'Highly positive (D > +0.50)',
              'Negative (D < 0.00)',
              'Zero (D = 0.00)',
              'Perfect (D = +1.00)',
            ],
            correctIndex: 1,
            explanation: 'When lower-performing examinees outperform higher-performing examinees on an item, the discrimination index is negative, indicating a flawed or ambiguous question that must be revised or discarded.',
          },
          {
            id: 'qq-ped-9-3b',
            question: 'A teacher asks students: "Compare and contrast the economic systems of the Mughal Empire and British India, citing three distinct historical factors." Under Bloom’s Revised Taxonomy, this task assesses:',
            options: ['Remembering', 'Understanding', 'Analyzing', 'Creating'],
            correctIndex: 2,
            explanation: 'Comparing and contrasting distinct structural components and breaking complex concepts into constituent parts is the essence of Analyzing (Level 4).',
          },
        ],
      },
      {
        id: 'ped-topic-9-4',
        topicNumber: '9.4',
        title: 'Assessment Rubrics, Table of Specifications (TOS) & Authentic Assessment',
        readTime: '9 min read',
        summary: 'Constructing a Table of Specifications (TOS) to guarantee content validity, designing Analytic vs. Holistic Rubrics, authentic portfolio assessment, and guidelines for writing high-quality MCQ stems and distractors.',
        highYieldAlert: 'STEDA Exam Standard: A Table of Specifications (TOS) is a two-way grid that aligns curricular topics with Bloom\'s cognitive levels to guarantee CONTENT VALIDITY before writing test items. In Rubrics: ANALYTIC rubrics assess each criterion separately (ideal for formative feedback); HOLISTIC rubrics provide a single unified rating (faster for summative grading).',
        concepts: [
          {
            conceptTitle: 'Table of Specifications (TOS) / Test Blueprint',
            explanation: 'A rigorous instructional planning tool used by test developers to ensure fair representation of syllabus content and cognitive depth.',
            bulletPoints: [
              'Structure: Rows list curriculum units/topics; columns represent cognitive domains (Remembering, Understanding, Applying, Higher-Order Thinking).',
              'Calculation: Allocates number of test items proportional to class instructional time spent on each topic.',
              'Primary Function: Protects test validity by preventing examiners from overloading tests with simple rote recall items or favoring their favorite sub-topics.',
            ],
          },
          {
            conceptTitle: 'Assessment Rubrics: Analytic vs. Holistic',
            explanation: 'Rubrics are explicit scoring guides that define levels of achievement across designated performance criteria.',
            bulletPoints: [
              'Analytic Rubric: Evaluates performance along multiple separate dimensions (e.g., Essay scored on 1. Thesis clarity, 2. Textual evidence, 3. Organization, 4. Grammar). Provides actionable diagnostic feedback to students on their specific weaknesses.',
              'Holistic Rubric: Evaluates the total product as a whole on a single rating scale (e.g., 4 = Excellent, 3 = Proficient, 2 = Developing, 1 = Novice). Faster for large-scale grading, but offers less diagnostic guidance.',
            ],
          },
          {
            conceptTitle: 'Authentic and Performance-Based Assessment Tools',
            explanation: 'Evaluating real-world application of skills beyond traditional pen-and-paper examinations.',
            bulletPoints: [
              'Portfolios: Purposeful, cumulative collections of student work demonstrating learning progress and reflection over time (e.g., drafts, finalized essays, art projects).',
              'Anecdotal Records: Objective, factual written notes by the teacher recording significant specific classroom behaviors or learning breakthroughs.',
              'MCQ Construction Best Practices: 1. State the central problem clearly in the stem. 2. Avoid negative phrasing ("Which is NOT...") whenever possible; if used, capitalize and bold it. 3. Ensure all distractors are plausible and grammatically parallel. 4. Avoid "All of the above" and "None of the above" as lazy default options.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Analytic Rubrics vs. Holistic Rubrics',
          headers: ['Feature', 'Analytic Rubric', 'Holistic Rubric'],
          rows: [
            ['Scoring Process', 'Each criterion scored independently on separate scales', 'Single overall score assigned to the entire performance'],
            ['Diagnostic Value', 'High — student sees exact strengths and weaknesses', 'Low — student only sees an aggregated score'],
            ['Time Required', 'Takes longer to score and mark', 'Fast and efficient for high-volume marking'],
            ['Best Used For', 'Formative classroom assignments and skill development', 'Summative exams, board essays, and portfolio capstones'],
          ],
        },
        classroomApplication: 'When assigning a Grade 8 science presentation on water conservation in Sindh: Distribute a 4-criteria Analytic Rubric on Day 1 (Content Accuracy 25%, Visual Aid Clarity 25%, Oral Delivery 25%, Q&A Defense 25%) so students know the exact expectations before presenting.',
        mnemonicAid: 'T-O-S = Blueprint of Success. A-N-A-L-Y-T-I-C = Assesses Nuanced Attributes Locally.',
        frequentExamQuestions: [
          { question: 'What is the primary instructional purpose of creating a Table of Specifications (TOS) before constructing an examination?', answer: 'To ensure Content Validity and balanced cognitive representation across all syllabus units.' },
          { question: 'Which type of rubric evaluates each component of a student performance independently to give targeted feedback?', answer: 'Analytic Rubric.' },
          { question: 'What is a cumulative collection of student work exhibiting effort, progress, and achievement over time called?', answer: 'A Student Portfolio.' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-9-4a',
            question: 'An examiner uses a two-way grid linking curriculum chapters to cognitive levels to determine the distribution of test items. What is this grid called?',
            options: ['Item Difficulty Curve', 'Table of Specifications (TOS)', 'Norm-Referenced Matrix', 'Formative Checklist'],
            correctIndex: 1,
            explanation: 'A Table of Specifications (TOS), or test blueprint, maps curriculum content against cognitive taxonomy levels to ensure balanced content validity.',
          },
          {
            id: 'qq-ped-9-4b',
            question: 'A teacher grading Urdu creative writing evaluates each student separately on: (1) vocabulary richness, (2) grammatical accuracy, (3) thematic creativity, and (4) structural flow. Which scoring tool is being used?',
            options: ['Holistic Rubric', 'Analytic Rubric', 'Normative Bell Curve', 'Anecdotal Scale'],
            correctIndex: 1,
            explanation: 'An Analytic Rubric breaks the overall task into distinct criteria and scores each criterion independently.',
          },
        ],
      },
      {
        id: 'ped-topic-9-5',
        topicNumber: '9.5',
        title: 'Continuous Assessment Scheme (CAS), Grading Systems & Test Administration Standards in Sindh',
        readTime: '8 min read',
        summary: 'Sindh School Education & Literacy Department (SELD) Continuous Assessment Scheme (CAS), formative weightage, grading scales (GPA / Percentile / Absolute Marks), standardized examination administration rules, reducing examination anxiety, and test security.',
        highYieldAlert: 'STEDA Assessment Policy Fact: Under the modern SELD Continuous Assessment Scheme (CAS), student evaluation is split into internal formative assessments (classwork, homework, monthly quizzes, projects - 40%) and summative term-end examinations (60%). In psychometrics, Standard Error of Measurement (SEM) quantifies the margin of error in a test score due to unreliability.',
        concepts: [
          {
            conceptTitle: 'The Continuous Assessment Scheme (CAS) Framework',
            explanation: 'A balanced assessment framework adopted across Sindh schools to replace the high-stakes single annual exam with ongoing diagnostic and formative monitoring.',
            bulletPoints: [
              'Rationale: Reduces end-of-year examination panic, prevents rote cramming ("Ratta system"), and provides teachers with real-time feedback to remediate learning gaps.',
              'Component Weightage: Continuous / Formative Components (40%): Classroom participation, monthly unit checks, homework logs, practical notebooks, and collaborative presentations; Summative Component (60%): Term examinations conducted at mid-year and year-end.',
              'Cumulative Record Card (CRC): A continuous documentary profile maintained for each pupil throughout elementary school recording academic growth, attendance, physical health, and social-emotional development.',
            ],
            keyTerms: [
              { term: 'Continuous Assessment', definition: 'A pedagogical approach that tracks and evaluates a student’s knowledge, skills, and attitudes over time through multiple periodic measures.' },
              { term: 'Standard Error of Measurement (SEM)', definition: 'A statistical estimate of the amount of random error inherent in an individual student’s observed test score.' },
            ],
          },
          {
            conceptTitle: 'Test Administration Ethics & Minimizing Test Anxiety',
            explanation: 'Standard protocols for fair, unbiased, and psychometrically sound examination administration.',
            bulletPoints: [
              'Standardized Conditions: Every candidate must receive identical test instructions, equal allocated time, equivalent seating, lighting, and ventilation.',
              'Mitigating Test Anxiety: Clarify test formats in advance; include a few accessible warm-up questions at the beginning of the question paper; maintain a calm, supportive invigilator demeanor.',
              'Item Neutrality: Test items must be free from cultural, regional, or gender stereotypes (e.g., questions in Sindh should not rely on unfamiliar winter skiing references).',
            ],
          },
        ],
        comparisonTable: {
          title: 'Assessment Paradigms in Sindh Schools',
          headers: ['Dimension', 'Traditional Annual Exam System', 'Continuous Assessment Scheme (CAS)'],
          rows: [
            ['Frequency', 'Single high-stakes exam at year-end', 'Ongoing frequent checkpoints throughout the term'],
            ['Learning Focus', 'Rote memorization and cramming ("Ratta")', 'Understanding, application, and skill progression'],
            ['Feedback Mechanism', 'Delayed report card with zero remediation opportunity', 'Immediate actionable feedback to correct student errors'],
            ['Stress Level', 'Extreme test anxiety and fear of failure', 'Low anxiety; multiple opportunities to demonstrate competence'],
          ],
        },
        classroomApplication: 'Implement CAS in a Grade 6 classroom by replacing single end-of-term surprise tests with weekly 5-question low-stakes exit quizzes. Record scores in a transparent classroom progress chart so pupils monitor their own learning trajectory.',
        mnemonicAid: 'C-A-S = Cumulative, Actionable, Systematic progress tracking.',
        frequentExamQuestions: [
          { question: 'What is the primary advantage of the Continuous Assessment Scheme (CAS) over traditional one-time annual examinations?', answer: 'It provides ongoing diagnostic feedback, reduces high-stakes test anxiety, and measures higher-order learning over time.' },
          { question: 'What statistical metric reflects the degree of variation expected in a test score due to measurement error?', answer: 'Standard Error of Measurement (SEM).' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-9-5a',
            question: 'What is the official document maintained by a primary school teacher to track a pupil’s multi-year academic, health, and behavioral progress called?',
            options: ['Stock Register', 'Cumulative Record Card (CRC)', 'Cash Book', 'Log Book'],
            correctIndex: 1,
            explanation: 'The Cumulative Record Card (CRC) provides a comprehensive longitudinal profile of a student\'s cognitive, physical, and socio-emotional development across school years.',
          },
          {
            id: 'qq-ped-9-5b',
            question: 'To help reduce test anxiety among young elementary school learners, test developers are advised to:',
            options: [
              'Place the most complex, difficult questions at the very beginning of the test',
              'Begin the test paper with several relatively easy, accessible items to build initial confidence',
              'Announce strict penalties for low scores before distributing the papers',
              'Shorten the allotted exam time without notice',
            ],
            correctIndex: 1,
            explanation: 'Positioning accessible items at the start of an examination helps calm autonomic nervousness, establish test-taking momentum, and build student confidence.',
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // MODULE 10: SCHOOL, COMMUNITY & STEDA POLICY (10 MARKS)
  // -------------------------------------------------------------------------
  {
    id: 'tl-part-10-policy',
    partNumber: 10,
    partCategory: 'Part II: Pedagogical Content Knowledge (50%)',
    subjectName: 'School, Community & STEDA Policy',
    weightage: '10 Marks (10%)',
    marks: 10,
    targetLevel: 'HEC B.Ed (Hons) / ADE & National Standards',
    iconName: 'School',
    themeColor: 'from-indigo-600 to-blue-700',
    badgeBg: 'bg-indigo-100 dark:bg-indigo-950/60',
    badgeText: 'text-indigo-800 dark:text-indigo-300',
    description: 'National Professional Standards for Teachers in Pakistan (NPSTP 10 standards), School Management Committees (SMCs), STEDA licensing framework, BPS-16 vs. BPS-17 eligibility, teacher professional ethics, and Continuous Professional Development (CPD).',
    topics: [
      {
        id: 'ped-topic-10-1',
        topicNumber: '10.1',
        title: 'National Professional Standards for Teachers in Pakistan (NPSTP)',
        readTime: '7 min read',
        summary: 'The 10 National Professional Standards launched by the Ministry of Education in 2009 defining knowledge, dispositions, and performance indicators for educators.',
        highYieldAlert: 'STEDA National Standards Alert: There are exactly 10 National Professional Standards for Teachers in Pakistan (NPSTP). Standard 1 is Subject Matter Knowledge; Standard 10 is Continuous Professional Development and Code of Conduct.',
        concepts: [
          {
            conceptTitle: 'The 10 NPSTP Standards Overview',
            explanation: 'Each standard articulates three dimensions: Knowledge (what a teacher must know), Dispositions (values and attitudes), and Performances (observable classroom skills).',
            bulletPoints: [
              '1. Subject Matter Knowledge: Deep understanding of curriculum concepts, structures, and inquiry methods.',
              '2. Human Growth and Development: Adapting instruction to diverse biological, cognitive, and social developmental stages.',
              '3. Knowledge of Islamic Ethical Values / Social Life Skills: Integrating ethics, tolerance, and civic virtues.',
              '4. Instructional Planning and Strategies: Developing standards-aligned unit plans, lesson objectives, and diverse pedagogies.',
              '5. Assessment: Designing valid formative, diagnostic, and summative assessments to inform instruction.',
              '6. Learning Environment: Fostering safe, welcoming, collaborative, and gender-inclusive physical and social spaces.',
              '7. Communication and Instructional Technology: Effective verbal/non-verbal communication and EdTech integration.',
              '8. Collaboration and Partnerships: Partnering with parents, families, School Management Committees (SMCs), and communities.',
              '9. Continuous Professional Development (CPD): Lifelong reflective practice and action research to enhance teaching.',
              '10. Code of Conduct: Professional integrity, ethical standards, student confidentiality, and equity.',
            ],
          },
        ],
        frequentExamQuestions: [
          { question: 'How many National Professional Standards for Teachers in Pakistan (NPSTP) were formulated in 2009?', answer: '10 Standards.' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-10-1',
            question: 'Under the NPSTP, a teacher routinely conducting classroom action research to evaluate and refine their pedagogical practices exemplifies which standard?',
            options: [
              'Standard 1: Subject Matter Knowledge',
              'Standard 6: Learning Environment',
              'Standard 9: Continuous Professional Development (CPD)',
              'Standard 3: Islamic Ethical Values',
            ],
            correctIndex: 2,
            explanation: 'Standard 9 explicitly requires educators to engage in ongoing reflective inquiry, action research, and continuous professional growth.',
          },
        ],
      },
      {
        id: 'ped-topic-10-2',
        topicNumber: '10.2',
        title: 'STEDA Sindh Teaching License Policy & Rules',
        readTime: '7 min read',
        summary: 'The landmark Sindh Teacher Education Development Authority (STEDA) policy, license categories (Elementary BPS-16 vs. Secondary BPS-17), the 60% passing benchmark, and career incentives.',
        highYieldAlert: 'STEDA Policy Rules: Minimum passing score is strictly 60% (60/100). Elementary License (BPS-16) requires ADE or 4-year B.Ed. Secondary License (BPS-17) requires B.Ed (1.5/2.5/4 year) or M.Ed. Licensed teachers receive professional allowances and preferential recruitment.',
        concepts: [
          {
            conceptTitle: 'STEDA Licensing Framework Overview',
            explanation: 'Sindh is the first province in Pakistan to pioneer and institutionalize a professional teaching license through STEDA (School Education & Literacy Department, Govt. of Sindh) in partnership with Sukkur IBA Testing Services (STS).',
            bulletPoints: [
              'Authority: Established under the STEDA Act 2012 to regulate, accredit, and elevate teacher education quality in Sindh.',
              'Elementary Teaching License (BPS-16): Eligible candidates hold an Associate Degree in Education (ADE) or B.Ed (Hons) 4-Year with at least 2nd Division / 2.5 CGPA.',
              'Secondary Teaching License (BPS-17): Eligible candidates hold a B.Ed (1.5, 2.5, or 4-Year) or M.Ed with at least 2nd Division / 2.5 CGPA.',
              'Passing Threshold: Exactly 60% marks (60 MCQs out of 100). No negative marking.',
              'License Validity: Valid for 5 years, renewable based on verified Continuous Professional Development (CPD) credit hours and professional appraisal.',
              'Incentives: Direct preference in SELD recruitment drives, accelerated promotion channels to BPS-17/BPS-18, and monthly Professional Teaching Allowance.',
            ],
          },
          {
            conceptTitle: 'School Management Committees (SMCs)',
            bulletPoints: [
              'Composition: Parents (majority representation), Head Teacher, community elders, and local social figures.',
              'Responsibilities: Overseeing school infrastructure improvement, managing annual SMC funds, tracking student attendance, reducing dropouts, and auditing teacher presence.',
            ],
          },
        ],
        comparisonTable: {
          title: 'STEDA Licensing Cadres at a Glance',
          headers: ['Dimension', 'Elementary Teaching License', 'Secondary Teaching License'],
          rows: [
            ['Government Pay Scale', 'BPS-16', 'BPS-17'],
            ['Minimum Qualification', 'Associate Degree in Education (ADE) or B.Ed (Hons) 4-Year', 'B.Ed (1.5/2.5/4-Year) or M.Ed from HEC recognized university'],
            ['Passing Threshold', '60% (60 marks out of 100 MCQs)', '60% (60 marks out of 100 MCQs)'],
            ['Testing Body', 'Sukkur IBA Testing Services (STS)', 'Sukkur IBA Testing Services (STS)'],
          ],
        },
        frequentExamQuestions: [
          { question: 'What is the minimum passing score required in the STS Sukkur IBA Sindh Teaching License Examination?', answer: '60% (60 out of 100 Marks).' },
          { question: 'What is the official validity period of the Sindh Teaching License issued by STEDA?', answer: '5 Years (renewable through CPD credits).' },
          { question: 'Which government department administers the STEDA licensing framework in Sindh?', answer: 'School Education & Literacy Department (SELD), Government of Sindh.' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-10-2',
            question: 'Which qualification is mandatory for a candidate applying for the STEDA Elementary School Teaching License (BPS-16)?',
            options: [
              'Matriculation with Certificate of Teaching (CT)',
              'Associate Degree in Education (ADE) or B.Ed (Hons) 4-Year',
              'B.A. without any professional education degree',
              'Master’s degree in general literature with zero pedagogy training',
            ],
            correctIndex: 1,
            explanation: 'STEDA licensing policy mandates professional education degrees: ADE (2-year) or B.Ed (Hons) 4-year is required for the Elementary (BPS-16) license.',
          },
          {
            id: 'qq-ped-10-2b',
            question: 'What is the official passing threshold percentage set by STEDA for the Sindh Teaching License test conducted by Sukkur IBA Testing Services (STS)?',
            options: ['40%', '50%', '60%', '75%'],
            correctIndex: 2,
            explanation: 'STEDA policy strictly fixes the criterion benchmark at 60% (60 correct answers out of 100 MCQs) with no negative marking.',
          },
        ],
      },
      {
        id: 'ped-topic-10-3',
        topicNumber: '10.3',
        title: 'Teacher Professional Ethics, Action Research & Community Engagement (SMCs)',
        readTime: '8 min read',
        summary: 'Professional ethics and teacher codes of conduct, Kurt Lewin’s cyclical Action Research spiral (Plan-Act-Observe-Reflect), and community mobilization through School Management Committees (SMCs).',
        highYieldAlert: 'STEDA High-Yield Rule: Action Research follows a four-step cyclical spiral: PLAN → ACT → OBSERVE → REFLECT (Kurt Lewin / Stephen Kemmis). Unlike theoretical academic research, Action Research is conducted BY the practicing teacher to solve an IMMEDIATE local classroom problem.',
        concepts: [
          {
            conceptTitle: 'The Action Research Cyclical Spiral (Kurt Lewin)',
            explanation: 'A reflective practitioner model enabling educators to empirically diagnose and solve classroom instructional challenges.',
            bulletPoints: [
              '1. PLAN: Identify an authentic classroom problem (e.g., "Why are 40% of my Class 6 pupils failing fraction division?"), review possible causes, and formulate an evidence-based intervention plan.',
              '2. ACT: Implement the planned instructional change systematically over a designated timeframe (e.g., using visual fraction circles and peer tutoring for 3 weeks).',
              '3. OBSERVE: Gather qualitative and quantitative data systematically (e.g., student quizzes, observational field notes, interview feedback, video recording).',
              '4. REFLECT: Analyze the collected data to evaluate whether the intervention succeeded, understand unexpected outcomes, and revise the instructional plan for the next cycle.',
            ],
          },
          {
            conceptTitle: 'Teacher Professional Ethics & Code of Conduct (NPSTP Standard 10)',
            explanation: 'Upholding moral integrity, equity, and professional stewardship in public and private education.',
            bulletPoints: [
              'Student Welfare & Equity: Treating every pupil with equal respect regardless of gender, socio-economic background, ethnicity, or mother tongue (Sindhi/Urdu/Balochi/Punjabi).',
              'Prohibition of Exploitation: Strictly avoiding commercialized private tutoring of one\'s own enrolled classroom students to eliminate conflicts of interest and academic extortion.',
              'Confidentiality: Safely guarding sensitive pupil personal data, family circumstances, and developmental evaluations.',
              'Punctuality & Modeling: Exemplifying integrity, lifelong reading, and non-violent civic behavior at all times.',
            ],
          },
          {
            conceptTitle: 'School Management Committees (SMCs) & Community Mobilization',
            explanation: 'Bridging the school with the local village or urban ward community to ensure democratic oversight and accountability.',
            bulletPoints: [
              'Democratic Governance: The committee comprises parents (50%+ majority to ensure family voice), the Head Teacher (General Secretary), and respected local community elders.',
              'Key Responsibilities: Transparent utilization and public audit of annual Non-Salary Budgets (NSB) / SMC funds for clean drinking water, boundary walls, student desks, and toilets.',
              'Enrollment & Retention: Mobilizing community elders to eliminate out-of-school children (OOSC), particularly encouraging female education across rural Sindh.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Classroom Action Research vs. Traditional Academic Research',
          headers: ['Dimension', 'Classroom Action Research', 'Fundamental Academic Research'],
          rows: [
            ['Primary Investigator', 'Practicing classroom teacher in their own school', 'University professor, academic scholar, or outside researcher'],
            ['Primary Goal', 'Immediate solution to a specific local classroom problem', 'Discovery of universal scientific truths or theoretical models'],
            ['Sample Size', 'A single classroom or grade-level cohort of students', 'Large, statistically representative randomized sample'],
            ['Application', 'Results applied immediately by the teacher', 'Published in academic journals for general scholarly dissemination'],
          ],
        },
        classroomApplication: 'Notice that Grade 7 students struggle with English spelling. Formulate an Action Research plan: implement daily 5-minute phonics flashcards for 4 weeks (Act), record weekly spelling test scores (Observe), and evaluate if error frequency dropped by at least 50% (Reflect).',
        mnemonicAid: 'P-A-O-R = Please Always Observe Results (Plan -> Act -> Observe -> Reflect).',
        frequentExamQuestions: [
          { question: 'What is the correct sequence of steps in the Action Research spiral?', answer: 'Plan → Act → Observe → Reflect.' },
          { question: 'Who is recognized as the father of Action Research?', answer: 'Kurt Lewin (1940s).' },
          { question: 'What is the primary role of parents in School Management Committees (SMCs) in Sindh?', answer: 'To hold majority representation, oversee school governance, and ensure transparent budget expenditure.' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-10-3a',
            question: 'A primary teacher notices that pupils lose focus during afternoon periods. She introduces 2-minute physical movement breaks, records student on-task time over two weeks, and analyzes the results. This teacher is engaging in:',
            options: ['Norm-Referenced Psychometrics', 'Classroom Action Research', 'Experimental Laboratory Physics', 'Summative Accreditation'],
            correctIndex: 1,
            explanation: 'Using systematic observation and intervention to solve an immediate local classroom instructional problem is the definition of Classroom Action Research.',
          },
          {
            id: 'qq-ped-10-3b',
            question: 'According to professional educator codes of conduct and STEDA standards, which practice is considered an unethical conflict of interest?',
            options: [
              'Attending evening professional development webinars on pedagogy',
              'Providing paid after-school commercial private tutoring to one\'s own enrolled classroom students',
              'Inviting parents to discuss student academic progress during open house',
              'Conducting formative diagnostic pre-tests without grading them',
            ],
            correctIndex: 1,
            explanation: 'Offering paid private tutoring to one\'s own registered students creates an unethical conflict of interest, incentive to withhold instruction in class, and academic extortion.',
          },
        ],
      },
      {
        id: 'ped-topic-10-4',
        topicNumber: '10.4',
        title: 'Sindh Free & Compulsory Education Act 2013, SDG-4 & Key SELD Organs (PITE, DCAR, STEDA, RSU, SEF)',
        readTime: '9 min read',
        summary: 'Legislative mandates under Article 25-A (Sindh Act 2013: free education for ages 5–16), United Nations Sustainable Development Goal 4 (SDG-4: Quality Education), and the organizational mandates of Sindh’s educational bodies: PITE Nawabshah, DCAR Jamshoro, STEDA, RSU, and SEF.',
        highYieldAlert: 'STEDA Institutional Acronyms Alert: PITE = Provincial Institute of Teacher Education (Nawabshah - in-service and pre-service teacher training). DCAR = Directorate of Curriculum, Assessment & Research (Jamshoro - syllabus and textbook standards). STEDA = Sindh Teacher Education Development Authority (Licensing & Teacher Quality). RSU = Reform Support Unit (donor coordination, data & policy). SEF = Sindh Education Foundation (Public-Private Partnerships). SDG-4 aims for inclusive, equitable quality education and lifelong learning for all by 2030.',
        concepts: [
          {
            conceptTitle: 'Sindh Right of Children to Free and Compulsory Education Act 2013',
            explanation: 'Provincial statutory legislation enacted pursuant to the 18th Constitutional Amendment (Article 25-A).',
            bulletPoints: [
              'Target Age Bracket: Mandates free and compulsory education for every child between the ages of five (5) and sixteen (16) years residing in Sindh.',
              'Zero Tuition & Indirect Fees: Forbids schools from charging tuition fees, admission fees, examination fees, or mandating purchased uniforms/books that create an economic barrier to entry.',
              'Ban on Screening Tests for Admission: Prohibits screening tests or parental interviews for child admission into primary grades.',
              '10% Private School Free Seats: Requires registered private schools to provide free education to at least 10% disadvantaged and underprivileged children of their total class strength.',
            ],
            keyTerms: [
              { term: 'Article 25-A', definition: 'The fundamental constitutional right inserted in 2010 obligating the State to provide free and compulsory education to all children aged 5 to 16.' },
              { term: 'SDG-4', definition: 'United Nations Sustainable Development Goal 4: Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all by 2030.' },
            ],
          },
          {
            conceptTitle: 'Institutional Organs of SELD (Govt. of Sindh)',
            explanation: 'The specialized executive agencies governing curriculum, licensing, continuous training, and funding in Sindh education.',
            bulletPoints: [
              'DCAR Jamshoro (Directorate of Curriculum, Assessment & Research): Formulates, reviews, and notifies provincial curriculum schemes; oversees textbook development in Sindhi, Urdu, and English in collaboration with Sindh Textbook Board (STB).',
              'PITE Nawabshah (Provincial Institute of Teacher Education): The apex provincial institution responsible for CPD (Continuous Professional Development), in-service teacher capacity building, and pedagogical research training.',
              'STEDA (Sindh Teacher Education Development Authority): Established under STEDA Act 2012; accredits teacher training programs, oversees teacher certification, and administers the pioneering Sindh Teaching License.',
              'RSU (Reform Support Unit): Coordinates development partner initiatives (World Bank, UNICEF, JICA), manages the annual SEMIS (Sindh Education Management Information System) school census data, and implements SELD reforms.',
              'SEF (Sindh Education Foundation): Semi-autonomous statutory body that finances and manages public-private partnership (PPP) schools in marginalized rural and underprivileged communities.',
            ],
          },
        ],
        comparisonTable: {
          title: 'Sindh Education Department Apex Institutional Bodies',
          headers: ['Institution', 'Headquarters', 'Primary Regulatory Mandate'],
          rows: [
            ['DCAR', 'Jamshoro', 'Curriculum formulation, student learning outcomes (SLOs) & assessment research'],
            ['PITE', 'Shaheed Benazirabad (Nawabshah)', 'In-service teacher training, continuous professional development (CPD) & modules'],
            ['STEDA', 'Karachi', 'Teacher education accreditation, teaching licenses, and professional standards'],
            ['RSU', 'Karachi', 'Policy coordination, SEMIS school census data & donor development funds'],
            ['SEF', 'Karachi', 'Public-Private Partnership (PPP) schools for disadvantaged & rural children'],
          ],
        },
        classroomApplication: 'Every public school teacher in Sindh must ensure zero out-of-pocket costs are requested from parents for enrollment, uphold the admission of any neighborhood child aged 5–16 without academic screening tests, and liaise with the SMC to submit accurate school data for the annual SEMIS census.',
        mnemonicAid: 'D-P-S-R = DCAR develops Curriculum; PITE prepares Teachers; STEDA licenses Educators; RSU regulates Reform & Data.',
        frequentExamQuestions: [
          { question: 'Under the Sindh Right of Children to Free and Compulsory Education Act 2013, what is the mandatory age bracket for free education?', answer: '5 to 16 years.' },
          { question: 'What percentage of total student enrollment must private schools in Sindh educate free of cost for disadvantaged children?', answer: 'At least 10% of their total enrollment.' },
          { question: 'Where is the apex teacher training institution PITE located in Sindh?', answer: 'Shaheed Benazirabad (Nawabshah).' },
        ],
        quickQuiz: [
          {
            id: 'qq-ped-10-4a',
            question: 'Under the Sindh Right of Children to Free and Compulsory Education Act 2013, private registered schools in Sindh are legally required to reserve what percentage of free admissions for disadvantaged children?',
            options: ['5%', '10%', '20%', '25%'],
            correctIndex: 1,
            explanation: 'The Sindh 2013 Act legally mandates private educational institutions to provide free education to at least 10% of their total student capacity for underprivileged children.',
          },
          {
            id: 'qq-ped-10-4b',
            question: 'Which apex body of the School Education & Literacy Department (SELD) Sindh is headquartered in Jamshoro and responsible for provincial curriculum and assessment frameworks?',
            options: ['PITE', 'DCAR', 'STEDA', 'SEF'],
            correctIndex: 1,
            explanation: 'DCAR (Directorate of Curriculum, Assessment & Research), located in Jamshoro, is responsible for curriculum standards, SLOs, and textbook reviews.',
          },
        ],
      },
    ],
  },
];
