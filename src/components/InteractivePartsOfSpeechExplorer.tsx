import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Tag,
  BookOpen,
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
  ShieldCheck,
  AlertTriangle,
  Flame,
  Check,
} from 'lucide-react';

export interface PartOfSpeechItem {
  id: string;
  name: string;
  urduSindhi: string;
  tagline: string;
  color: string;
  gradient: string;
  badgeBg: string;
  badgeText: string;
  borderColor: string;
  definition: string;
  questionAnswered: string;
  positionFormula: string;
  subtypes: {
    name: string;
    description: string;
    examples: string[];
  }[];
  pitfalls?: {
    rule: string;
    detail: string;
  }[];
  stsExamTrap: string;
  sampleSentence: {
    sentence: string;
    targetWord: string;
    explanation: string;
  };
  pedagogyTip: string;
}

export const ALL_PARTS_OF_SPEECH: PartOfSpeechItem[] = [
  {
    id: 'noun',
    name: '1. Noun',
    urduSindhi: 'اسم / نالو (Name)',
    tagline: 'The Naming Word: Person, Place, Thing, Idea, or Quality',
    color: 'sky',
    gradient: 'from-sky-500 to-blue-600',
    badgeBg: 'bg-sky-100 dark:bg-sky-950/60',
    badgeText: 'text-sky-700 dark:text-sky-300',
    borderColor: 'border-sky-500',
    definition: 'A noun names a person (Dr. Ruth Pfau), place (Mohenjo-daro), thing (slate, computer), concept (democracy, freedom), or psychological state (anxiety, wisdom).',
    questionAnswered: 'Answers "Who?" or "What?" (Subject or Object)',
    positionFormula: '[Article/Determiner] + (Adjective) + NOUN',
    subtypes: [
      {
        name: 'Proper Noun',
        description: 'Specific name of an individual person, place, or entity. Always capitalized.',
        examples: ['Shah Abdul Latif Bhittai', 'Karachi', 'Indus River', 'October'],
      },
      {
        name: 'Common Noun',
        description: 'General, non-specific name for any member of a class or category.',
        examples: ['teacher', 'classroom', 'river', 'school', 'candidate'],
      },
      {
        name: 'Collective Noun',
        description: 'Names a group or collection of persons/things considered as one single whole.',
        examples: ['jury', 'committee', 'flock', 'army', 'faculty', 'herd'],
      },
      {
        name: 'Abstract Noun',
        description: 'Denotes an intangible quality, idea, concept, or state that cannot be touched or seen.',
        examples: ['honesty', 'courage', 'pedagogy', 'poverty', 'childhood', 'intelligence'],
      },
      {
        name: 'Material Noun',
        description: 'Denotes the substance or matter from which tangible articles are manufactured.',
        examples: ['gold', 'cotton', 'iron', 'water', 'wood', 'clay'],
      },
      {
        name: 'Countable vs. Uncountable',
        description: 'Countable nouns take plurals (pens, books); Uncountable nouns have no plural forms (furniture, advice, information, luggage).',
        examples: ['Luggage (NOT luggages)', 'Advice (NOT advices)', 'Information (NOT informations)'],
      },
    ],
    pitfalls: [
      { rule: 'Uncountable Nouns Pluralization', detail: 'Nouns like advice, furniture, luggage, information, and scenery NEVER take a plural -s. Say "pieces of advice", not "advices".' },
      { rule: 'Collective Noun Agreement', detail: 'Singular when the group acts in unison ("The committee has reached its decision"); plural when individuals act independently ("The committee are divided in their opinions").' },
    ],
    stsExamTrap: 'STS Trap: Pluralization of abstract/uncountable nouns. STS often tests sentences like: "He gave me many advices" (Incorrect ❌) -> "He gave me many pieces of advice" (Correct ✅). Also watch for Gerunds (-ing words) acting as subject nouns ("Teaching is a noble profession").',
    sampleSentence: {
      sentence: 'The dedicated educator received sincere gratitude from her students.',
      targetWord: 'educator, gratitude, students',
      explanation: '"Educator" (Common Noun - subject), "gratitude" (Abstract Noun - direct object), "students" (Common Noun - object of preposition).',
    },
    pedagogyTip: 'For Sindh primary classrooms, distinguish concrete nouns using physical classroom realia (chalk, duster) and abstract nouns using emotion cards (joy, curiosity).',
  },
  {
    id: 'pronoun',
    name: '2. Pronoun',
    urduSindhi: 'اسم ضمیر / ضمير (Substitute)',
    tagline: 'The Stand-in Word: Replaces a Noun to Prevent Redundancy',
    color: 'indigo',
    gradient: 'from-indigo-500 to-purple-600',
    badgeBg: 'bg-indigo-100 dark:bg-indigo-950/60',
    badgeText: 'text-indigo-700 dark:text-indigo-300',
    borderColor: 'border-indigo-500',
    definition: 'A pronoun takes the place of one or more nouns (its antecedent). It must agree with its antecedent in number, person, and gender.',
    questionAnswered: 'Replaces "Who?" or "What?" without repeating the noun',
    positionFormula: 'Functions wherever a noun can appear: Subject, Object, or Complement',
    subtypes: [
      {
        name: 'Personal Pronouns',
        description: 'Subjective case (I, you, he, she, it, we, they) vs. Objective case (me, you, him, her, it, us, them).',
        examples: ['Subject: "She scored 85%."', 'Object: "The headmaster praised her."'],
      },
      {
        name: 'Demonstrative Pronouns',
        description: 'Points specifically to things near or far in space/time.',
        examples: ['This (singular near)', 'That (singular far)', 'These (plural near)', 'Those (plural far)'],
      },
      {
        name: 'Relative Pronouns',
        description: 'Connects a dependent relative clause to an antecedent noun.',
        examples: ['Who (subject - people)', 'Whom (object - people)', 'Which (things/animals)', 'That (defining clauses)', 'Whose (possession)'],
      },
      {
        name: 'Reflexive & Emphatic Pronouns',
        description: 'End in -self / -selves. Reflexive reflects back to subject; Emphatic adds emphasis.',
        examples: ['Reflexive: "He hurt himself."', 'Emphatic: "The minister himself attended the assembly."'],
      },
      {
        name: 'Indefinite Pronouns',
        description: 'Refers to non-specific people or things. Most singular indefinite pronouns take singular verbs.',
        examples: ['Everyone, someone, nobody, anyone, each, either, neither, one'],
      },
      {
        name: 'Distributive & Reciprocal',
        description: 'Distributive considers members one by one (each, either). Reciprocal expresses mutual actions (each other for two; one another for more than two).',
        examples: ['"The two sisters help each other."', '"The five teammates trust one another."'],
      },
    ],
    pitfalls: [
      { rule: 'Case After Prepositions', detail: 'Prepositions strictly require objective pronouns: Say "Between you and me" (NOT "between you and I").' },
      { rule: 'The Who vs. Whom Test', detail: 'Substitute "he/him": If "he" works, use "who" (subject). If "him" works, use "whom" (object) — "Whom did you invite?" (Invited him).' },
    ],
    stsExamTrap: 'STS Trap: Case errors after prepositions and "than". Remember: Prepositions always take OBJECT pronouns! "Between you and ME" (NOT "between you and I"). Also: "Who vs. Whom" — test by replacing with "he/him": if "him" fits, use "whom" ("Whom did you invite?").',
    sampleSentence: {
      sentence: 'Neither of the candidates believed that she herself could fail the examination.',
      targetWord: 'Neither (Indefinite), that (Relative/Conjunction), she (Personal), herself (Emphatic)',
      explanation: '"Neither" takes a singular personal pronoun ("she", not "they"). "Herself" emphasizes her personal belief.',
    },
    pedagogyTip: 'Teach the "Antecedent Tether" concept: Draw an arrow from the pronoun back to the noun it replaces so students see why plural vs singular pronouns matter.',
  },
  {
    id: 'verb',
    name: '3. Verb',
    urduSindhi: 'فعل / ڪم (Action & State)',
    tagline: 'The Heart of the Sentence: Expresses Physical Action, Mental Process, or State of Being',
    color: 'rose',
    gradient: 'from-rose-500 to-red-600',
    badgeBg: 'bg-rose-100 dark:bg-rose-950/60',
    badgeText: 'text-rose-700 dark:text-rose-300',
    borderColor: 'border-rose-500',
    definition: 'A verb asserts something about the subject. Without a finite verb, an independent clause cannot exist.',
    questionAnswered: 'Answers "What is the subject doing?" or "What state is the subject in?"',
    positionFormula: 'Subject + (Auxiliary Verb) + MAIN VERB + (Object/Complement)',
    subtypes: [
      {
        name: 'Transitive vs. Intransitive',
        description: 'Transitive verbs transfer action to a direct object ("She wrote an essay"). Intransitive verbs require no object ("The infant wept bitterly").',
        examples: ['Transitive: Read, open, build, strike', 'Intransitive: Sleep, laugh, arrive, fall'],
      },
      {
        name: 'Linking / Copular Verbs',
        description: 'Connect the subject to a subject complement (noun or adjective). Does NOT express physical action.',
        examples: ['is/am/are/was/were', 'seem', 'appear', 'become', 'taste', 'smell', 'look ("He looks tired" - tired is adjective)'],
      },
      {
        name: 'Auxiliary (Helping) Verbs',
        description: 'Primary auxiliaries (be, do, have) form tenses and questions. Modal auxiliaries (can, could, may, might, must, should, will, would) express mood/ability.',
        examples: ['"She HAS completed the assignment."', '"Teachers MUST adhere to ethical standards."'],
      },
      {
        name: 'Finite vs. Non-Finite Verbs',
        description: 'Finite verbs have a tense and agree with subject. Non-finite verbs have no tense: Gerund (-ing as noun), Infinitive (to + verb), Participle (verbal adjective).',
        examples: ['Finite: "He speaks."', 'Infinitive: "to teach"', 'Gerund: "Swimming is healthy"', 'Participle: "The barking dog"'],
      },
    ],
    pitfalls: [
      { rule: 'Linking Verbs Take Adjectives', detail: 'Copular/linking verbs take subject complement adjectives, not adverbs. Say "I feel bad" (emotional state), never "I feel badly" (malfunctioning sense of touch).' },
      { rule: 'Gerund vs. Present Participle', detail: 'Gerunds act as nominal subjects/objects ("Reading enriches the mind"); Participles act as modifiers or active aspects ("The reading girl").' },
    ],
    stsExamTrap: 'STS Trap: Confusing Linking Verbs with Action Verbs! In "The soup tastes delicious", "tastes" is a linking verb, so it must take an ADJECTIVE ("delicious"), NOT an adverb ("deliciously"). Also: Gerund vs. Present Participle distinction in Sukkur IBA questions.',
    sampleSentence: {
      sentence: 'The enthusiastic headmistress has been guiding novice teachers with profound empathy.',
      targetWord: 'has been guiding',
      explanation: '"has" (Primary auxiliary showing aspect), "been" (Aspect marker), "guiding" (Present participle main verb forming Present Perfect Continuous).',
    },
    pedagogyTip: 'Use total physical response (TPR) in primary classrooms: Have students stand up and act out action verbs, but freeze silently for state/linking verbs (is, seem, think).',
  },
  {
    id: 'adjective',
    name: '4. Adjective',
    urduSindhi: 'صفت / خاصيت (Describer & Qualifier)',
    tagline: 'The Modifier of Nouns: Describes Quality, Quantity, Size, Color, or Origin',
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-600',
    badgeBg: 'bg-emerald-100 dark:bg-emerald-950/60',
    badgeText: 'text-emerald-700 dark:text-emerald-300',
    borderColor: 'border-emerald-500',
    definition: 'An adjective qualifies, modifies, or limits a noun or pronoun by providing descriptive detail or quantifying it.',
    questionAnswered: 'Answers "Which one?", "What kind?", "How many?", or "How much?"',
    positionFormula: 'Attributive: ADJECTIVE + Noun ("brave soldier") | Predicative: Subject + Linking Verb + ADJECTIVE ("The soldier was brave")',
    subtypes: [
      {
        name: 'Adjectives of Quality (Descriptive)',
        description: 'Describes the nature, character, appearance, or intrinsic trait of a noun.',
        examples: ['diligent', 'ancient', 'fragile', 'Sindhi architecture', 'equitable'],
      },
      {
        name: 'Adjectives of Quantity & Number',
        description: 'Quantity = Uncountable (some water, little milk, much patience). Number = Countable (many books, few pens, several students, five desks).',
        examples: ['"Little" = almost none', '"A little" = some', '"Few" = negative scarcity', '"A few" = positive quantity'],
      },
      {
        name: 'Demonstrative & Possessive Adjectives',
        description: 'Precede nouns to point out or show ownership (differs from pronouns because they sit immediately before nouns).',
        examples: ['Demonstrative Adj: "THIS classroom is airy."', 'Possessive Adj: "MY notes are comprehensive."'],
      },
      {
        name: 'Degrees of Comparison',
        description: 'Positive (tall), Comparative (taller / more diligent — compares 2), Superlative (tallest / most diligent — compares 3 or more, requires "the").',
        examples: ['Good -> Better -> Best', 'Bad -> Worse -> Worst', 'Far -> Farther (distance) / Further (additional)'],
      },
    ],
    pitfalls: [
      { rule: 'The Royal Order of Adjectives (DOSASCOMP)', detail: 'Adjectives must precede nouns in strict sequence: Determiner -> Opinion -> Size -> Shape -> Age -> Color -> Origin -> Material -> Purpose -> Noun.' },
      { rule: 'Latin Comparatives Take "To"', detail: 'Latin comparatives ending in -ior (senior, junior, superior, inferior, prior) are followed by "to", NEVER "than" ("He is senior to me").' },
    ],
    stsExamTrap: 'STS Trap: Double Comparatives/Superlatives (e.g., "more taller" ❌ -> "taller" ✅). Also: Adjectives ending in -ior (superior, inferior, senior, junior, prior) take "TO", NEVER "than"! Example: "He is senior TO me" (NOT "than me").',
    sampleSentence: {
      sentence: 'The senior pedagogical inspector commended the five most diligent instructors.',
      targetWord: 'senior (Adj), pedagogical (Adj), five (Numeral Adj), most diligent (Superlative Adj)',
      explanation: 'Notice how multiple adjectives stack logically: opinion -> size -> age -> purpose -> noun.',
    },
    pedagogyTip: 'Teach the Royal Order of Adjectives (DOSASCOMP: Determiner, Opinion, Size, Age, Shape, Color, Origin, Material, Purpose) with colorful cards.',
  },
  {
    id: 'adverb',
    name: '5. Adverb',
    urduSindhi: 'ظرف / فعل صفت (Modifier)',
    tagline: 'The Multi-Modifier: Modifies a Verb, an Adjective, or Another Adverb',
    color: 'amber',
    gradient: 'from-amber-500 to-orange-600',
    badgeBg: 'bg-amber-100 dark:bg-amber-950/60',
    badgeText: 'text-amber-800 dark:text-amber-200',
    borderColor: 'border-amber-500',
    definition: 'An adverb modifies or describes a verb ("ran swiftly"), an adjective ("exceptionally clever"), another adverb ("quite easily"), or an entire clause.',
    questionAnswered: 'Answers "How?", "When?", "Where?", "How often?", or "To what degree/extent?"',
    positionFormula: 'Subject + ADVERB OF FREQUENCY + Verb OR Verb + Object + ADVERB OF MANNER/PLACE/TIME',
    subtypes: [
      {
        name: 'Adverb of Manner',
        description: 'Describes HOW an action is performed. Mostly ends in -ly, but not always.',
        examples: ['fluently', 'gracefully', 'hard (works hard)', 'fast (runs fast)', 'well'],
      },
      {
        name: 'Adverb of Time & Frequency',
        description: 'Time = When (yesterday, now, soon, already). Frequency = How often (always, seldom, never, rarely, frequently).',
        examples: ['"The test begins TOMORROW."', '"She SELDOM arrives late."'],
      },
      {
        name: 'Adverb of Place',
        description: 'Describes WHERE an action takes place.',
        examples: ['here', 'there', 'everywhere', 'upstairs', 'indoors', 'abroad'],
      },
      {
        name: 'Adverb of Degree / Extent',
        description: 'Quantifies the intensity or degree of an adjective, verb, or adverb.',
        examples: ['very', 'extremely', 'quite', 'too', 'almost', 'hardly', 'scarcely'],
      },
    ],
    pitfalls: [
      { rule: '-ly Adjectives Mistaken as Adverbs', detail: 'Words like friendly, lovely, lively, costly, and cowardly are ADJECTIVES, not adverbs! Say "in a friendly manner", never "spoke friendly".' },
      { rule: 'Hard vs. Hardly', detail: '"Hard" means with great energetic effort ("She works hard"); "Hardly" is a negative adverb meaning almost not at all ("She hardly works").' },
    ],
    stsExamTrap: 'STS Trap: Words ending in "-ly" that are actually ADJECTIVES (friendly, lovely, lonely, cowardly, brotherly, costly)! You cannot say "He spoke friendly" ❌; you must say "He spoke in a friendly manner" ✅. Also: "hard" (with effort) vs. "hardly" (almost not at all)!',
    sampleSentence: {
      sentence: 'The candidate worked very hard and solved the extremely complex equation quite easily.',
      targetWord: 'very (deg), hard (manner), extremely (deg), quite (deg), easily (manner)',
      explanation: '"very" modifies adverb "hard"; "hard" modifies verb "worked"; "extremely" modifies adjective "complex"; "quite" modifies adverb "easily".',
    },
    pedagogyTip: 'Help candidates remember the MPT order: When multiple adverbs follow a verb, put them in order of Manner -> Place -> Time (e.g., "She sang sweetly [M] in the hall [P] yesterday [T]").',
  },
  {
    id: 'preposition',
    name: '6. Preposition',
    urduSindhi: 'حرف جر (Position & Relation Linker)',
    tagline: 'The Bridge of Relationship: Connects a Noun/Pronoun to Other Words',
    color: 'orange',
    gradient: 'from-orange-500 to-amber-600',
    badgeBg: 'bg-orange-100 dark:bg-orange-950/60',
    badgeText: 'text-orange-800 dark:text-orange-200',
    borderColor: 'border-orange-500',
    definition: 'A preposition is placed before a noun or pronoun (its object) to show relationship in space, time, direction, cause, possession, or agency.',
    questionAnswered: 'Shows "Where?", "When?", "In what direction?", or "In what relation?"',
    positionFormula: 'PREPOSITION + Noun Phrase (Prepositional Phrase: "on the table", "by bus")',
    subtypes: [
      {
        name: 'Prepositions of Time',
        description: 'At (specific clock time), On (days & dates), In (months, years, centuries, long periods).',
        examples: ['at 9:00 AM', 'on Monday', 'in 1947', 'since (specific start point)', 'for (duration of time)'],
      },
      {
        name: 'Prepositions of Place & Position',
        description: 'At (specific point), In (enclosed 3D space/city), On (surface). Between (two entities), Among (three or more).',
        examples: ['at Sukkur IBA', 'in Hyderabad', 'on the desk', 'between Ali and Ahmed', 'among all five candidates'],
      },
      {
        name: 'Prepositions of Direction & Movement',
        description: 'Shows dynamic movement towards, into, through, or across.',
        examples: ['into (movement to inside)', 'onto (movement to surface)', 'through the tunnel', 'across the Indus'],
      },
      {
        name: 'Dependent & Compound Prepositions',
        description: 'Verbs, nouns, and adjectives that strictly take fixed prepositions.',
        examples: ['Abide BY', 'Accused OF', 'Congratulate ON', 'Prevent FROM', 'Different FROM (not than)', 'Superior TO'],
      },
    ],
    pitfalls: [
      { rule: 'Between vs. Among Distinction', detail: '"Between" is used for two distinct individual items or pairwise relations; "Among" is used for three or more entities considered collectively.' },
      { rule: 'No Prepositions After Certain Verbs', detail: 'Do not use redundant prepositions after transitive verbs like discuss ("discuss the topic", NOT "discuss about"), enter ("entered the room", NOT "entered into"), and resemble.' },
    ],
    stsExamTrap: 'STS Trap: "Between" is for TWO items; "Among" is for THREE or more. "Since" marks a starting timestamp ("since 2018"); "For" marks a time span ("for six years"). Also: No preposition after verbs like "discuss", "enter", "resemble", or "reach" (Do NOT say "discuss about the matter" ❌).',
    sampleSentence: {
      sentence: 'The syllabus was distributed among the educators who arrived at the auditorium in the morning.',
      targetWord: 'among, at, in',
      explanation: '"among" (for multiple educators), "at" (specific venue: auditorium), "in" (time of day: the morning).',
    },
    pedagogyTip: 'Use classroom physical orientation: Put a book "on" the desk, "under" the chair, walk "into" the room, and stand "between" two students to anchor spatial memory.',
  },
  {
    id: 'conjunction',
    name: '7. Conjunction',
    urduSindhi: 'حرف جملو / حرف عطف (Joiner & Connector)',
    tagline: 'The Sentence Welder: Connects Words, Phrases, or Clauses Together',
    color: 'violet',
    gradient: 'from-violet-500 to-purple-600',
    badgeBg: 'bg-violet-100 dark:bg-violet-950/60',
    badgeText: 'text-violet-700 dark:text-violet-300',
    borderColor: 'border-violet-500',
    definition: 'A conjunction links words, phrases, or independent and dependent clauses, establishing logical relations like addition, contrast, cause, or condition.',
    questionAnswered: 'Establishes "Why?", "Under what condition?", "Despite what?", or "How connected?"',
    positionFormula: 'Clause 1 + [Coordinating Conjunction] + Clause 2 OR [Subordinating Conjunction] + Dependent Clause, Main Clause',
    subtypes: [
      {
        name: 'Coordinating Conjunctions (FANBOYS)',
        description: 'Join grammatically equal elements (words with words, independent clause with independent clause).',
        examples: ['F = For', 'A = And', 'N = Nor', 'B = But', 'O = Or', 'Y = Yet', 'S = So'],
      },
      {
        name: 'Subordinating Conjunctions',
        description: 'Join a dependent adverbial clause to an independent main clause.',
        examples: ['Cause: because, since, as', 'Time: when, while, after, before, until', 'Condition: if, unless, provided that', 'Contrast: although, though, whereas'],
      },
      {
        name: 'Correlative Conjunctions',
        description: 'Pairs of conjunctions that work together. Require parallel grammatical structures after both elements.',
        examples: ['Either... or', 'Neither... nor', 'Not only... but also', 'Both... and', 'Scarcely / Hardly... when', 'No sooner... than'],
      },
    ],
    pitfalls: [
      { rule: 'FANBOYS Comma Rule', detail: 'Use a comma before a coordinating conjunction ONLY when joining two complete independent clauses each containing its own subject and verb.' },
      { rule: 'Correlative Conjunction Matching', detail: '"No sooner" must pair with "than" (NOT "when"); "Hardly/Scarcely" must pair with "when" (NOT "than"). Both elements require parallel syntactic structures.' },
    ],
    stsExamTrap: 'STS Trap: Correlative pairs MUST match exactly! "No sooner had he entered THAN (not when) it started to rain." "Scarcely had she spoken WHEN (not than) the bell rang." Also: Parallel structure after "not only... but also".',
    sampleSentence: {
      sentence: 'Although the curriculum was demanding, not only the teachers but also the students excelled.',
      targetWord: 'Although (Subordinating), not only... but also (Correlative)',
      explanation: '"Although" introduces a concession clause. "Not only... but also" joins two noun phrases with strict parallelism.',
    },
    pedagogyTip: 'Teach the FANBOYS mnemonic with a 7-finger hand gesture so students can instantly list the only seven coordinating conjunctions in English.',
  },
  {
    id: 'interjection',
    name: '8. Interjection',
    urduSindhi: 'حرف ندا / فجائيه (Sudden Emotion)',
    tagline: 'The Emotional Outburst: Expresses Sudden Feeling, Reaction, or Pain',
    color: 'pink',
    gradient: 'from-pink-500 to-rose-600',
    badgeBg: 'bg-pink-100 dark:bg-pink-950/60',
    badgeText: 'text-pink-700 dark:text-pink-300',
    borderColor: 'border-pink-500',
    definition: 'An interjection is a grammatically autonomous word or phrase uttered to convey spontaneous emotion such as surprise, delight, sorrow, disgust, or caution.',
    questionAnswered: 'Conveys "What feeling or tone does the speaker immediately express?"',
    positionFormula: 'INTERJECTION! + Complete Sentence OR Interjection, mild statement.',
    subtypes: [
      {
        name: 'Interjections of Joy & Delight',
        description: 'Used when celebrating victory, good news, or great accomplishment.',
        examples: ['Hurrah!', 'Bravo!', 'Yay!', 'Yippee!'],
      },
      {
        name: 'Interjections of Sorrow & Grief',
        description: 'Used when lamenting tragedy, loss, or sudden disappointment.',
        examples: ['Alas!', 'Ah!', 'Oh no!'],
      },
      {
        name: 'Interjections of Surprise & Wonder',
        description: 'Used when encountering something unexpected or astonishing.',
        examples: ['Wow!', 'What!', 'Oh!', 'Gosh!'],
      },
      {
        name: 'Interjections of Attention & Caution',
        description: 'Used to draw attention, command silence, or summon a listener.',
        examples: ['Hush!', 'Hark!', 'Look!', 'Behold!', 'Ahem!'],
      },
    ],
    pitfalls: [
      { rule: 'Indirect Speech Conversion', detail: 'Interjection exclamations (Alas, Hurrah, Bravo) are removed in indirect narration and substituted with descriptive adverbial phrases ("exclaimed with grief that...").' },
      { rule: 'Autonomous Syntactic Status', detail: 'Interjections do not modify, govern, or link to any other word in the clause; they are isolated by an exclamation point (!) or comma.' },
    ],
    stsExamTrap: 'STS Trap: Indirect Speech transformation of interjections! In indirect narration, the interjection is REMOVED and replaced with an adverbial phrase: "He said, \'Alas! I am ruined\'" -> "He exclaimed with sorrow that he was ruined." (Alas is NEVER retained in indirect speech).',
    sampleSentence: {
      sentence: 'Bravo! You have scored 92% in the Sukkur IBA screening test!',
      targetWord: 'Bravo!',
      explanation: '"Bravo!" expresses enthusiastic commendation and approval. It has no syntactic connection to the rest of the sentence.',
    },
    pedagogyTip: 'Connect interjections to voice modulation and punctuation lessons. Show how an exclamation mark (!) signals dramatic tone shift in classroom storytelling.',
  },
  {
    id: 'determiner',
    name: '9. Determiners & Articles',
    urduSindhi: 'حرف تخصيص (Noun Specifiers)',
    tagline: 'The Noun Introducers: Specifies Definiteness, Quantity, or Possession',
    color: 'teal',
    gradient: 'from-teal-500 to-emerald-600',
    badgeBg: 'bg-teal-100 dark:bg-teal-950/60',
    badgeText: 'text-teal-700 dark:text-teal-300',
    borderColor: 'border-teal-500',
    definition: 'Determiners precede nouns to clarify whether the noun is specific (the, this), general (a, an, any), quantified (many, much), or owned (my, their). Modern linguistics classifies them alongside the 8 traditional parts of speech.',
    questionAnswered: 'Answers "Which specific one?" or "How much/many are we referring to?"',
    positionFormula: 'DETERMINER + (Adjective) + Noun (Always precedes the noun or adjective)',
    subtypes: [
      {
        name: 'Articles (Indefinite: A / An; Definite: The)',
        description: '"A" before consonant sounds ("a university"); "An" before vowel sounds ("an honest man", "an M.A."); "The" for unique, specified entities, rivers, or mountain ranges.',
        examples: ['a European country', 'an hour', 'the Indus River', 'the Holy Quran'],
      },
      {
        name: 'Demonstrative Determiners',
        description: 'Precedes a noun to point it out (this book, that village, these pens, those mountains).',
        examples: ['"This school was founded in 1920."', '"Those guidelines are mandatory."'],
      },
      {
        name: 'Quantifiers',
        description: 'Precede nouns to indicate exact or approximate amounts.',
        examples: ['much / little (uncountable)', 'many / few (countable)', 'some / any (both)', 'every / each'],
      },
      {
        name: 'Possessive Determiners',
        description: 'Placed before a noun to denote ownership (my, your, his, her, its, our, their). Note: "its" has no apostrophe!',
        examples: ['"Our school"', '"Its branches" (NOT "it\'s branches")'],
      },
    ],
    pitfalls: [
      { rule: 'Sound-First Article Rule', detail: 'Use "an" before vowel sounds (/ɒ/ in "an honest man", /aʊ/ in "an hour", /ɛm/ in "an M.A. graduate"). Use "a" before consonant sounds (/j/ in "a university", /w/ in "a one-way road").' },
      { rule: 'Determiner vs. Demonstrative Pronoun', detail: 'Determiners precede and specify an immediate noun ("This book is mine"); Demonstrative pronouns stand independently as grammatical subjects ("This is my book").' },
    ],
    stsExamTrap: 'STS Trap: Vowel letters vs. Vowel SOUNDS! We say "AN honest officer" (silent h = vowel sound /ɒ/), but "A university" (/j/ consonant glide), "A one-rupee coin" (/w/ consonant glide), and "AN M.Sc. candidate" (letter M starts with vowel sound /ɛm/).',
    sampleSentence: {
      sentence: 'An honest candidate always respects the dignity of every fellow teacher.',
      targetWord: 'An (Indefinite Article), the (Definite Article), every (Distributive Determiner)',
      explanation: '"An" is used before "honest" because "h" is silent. "The" specifies dignity, and "every" specifies each individual teacher.',
    },
    pedagogyTip: 'Teach the "Sound-First Test": Have students close their eyes, say the first syllable aloud, and ask whether their vocal cords emit an unobstructed vowel sound or a consonant obstruction.',
  },
];

export interface DissectWord {
  text: string;
  pos: string;
  category: string;
  explanation: string;
  color: string;
}

export interface SentenceScenario {
  id: string;
  title: string;
  sentenceText: string;
  words: DissectWord[];
}

export const SENTENCE_SCENARIOS: SentenceScenario[] = [
  {
    id: 's1',
    title: 'Sentence 1: Sindh Classroom Narrative (All 8 Parts of Speech)',
    sentenceText: 'Hurrah! The dedicated teacher quickly explained the difficult lesson to her students, but they were still curious.',
    words: [
      { text: 'Hurrah!', pos: 'Interjection', category: 'Emotion of Joy', explanation: 'Expresses spontaneous joy/celebration.', color: 'pink' },
      { text: 'The', pos: 'Determiner / Article', category: 'Definite Article', explanation: 'Specifies the particular teacher.', color: 'teal' },
      { text: 'dedicated', pos: 'Adjective', category: 'Adjective of Quality', explanation: 'Describes the character of the teacher.', color: 'emerald' },
      { text: 'teacher', pos: 'Noun', category: 'Common Noun (Subject)', explanation: 'The person performing the action.', color: 'sky' },
      { text: 'quickly', pos: 'Adverb', category: 'Adverb of Manner', explanation: 'Modifies the verb "explained", telling HOW.', color: 'amber' },
      { text: 'explained', pos: 'Verb', category: 'Transitive Past Simple Verb', explanation: 'The main physical/mental action of the subject.', color: 'rose' },
      { text: 'the', pos: 'Determiner / Article', category: 'Definite Article', explanation: 'Points out the specific lesson.', color: 'teal' },
      { text: 'difficult', pos: 'Adjective', category: 'Adjective of Quality', explanation: 'Modifies the noun "lesson".', color: 'emerald' },
      { text: 'lesson', pos: 'Noun', category: 'Common Noun (Direct Object)', explanation: 'The thing being explained.', color: 'sky' },
      { text: 'to', pos: 'Preposition', category: 'Preposition of Direction', explanation: 'Connects the verb to the indirect receiver.', color: 'orange' },
      { text: 'her', pos: 'Pronoun / Determiner', category: 'Possessive Determiner', explanation: 'Shows ownership of the students.', color: 'indigo' },
      { text: 'students,', pos: 'Noun', category: 'Common Noun (Object of Preposition)', explanation: 'The receivers of the lesson.', color: 'sky' },
      { text: 'but', pos: 'Conjunction', category: 'Coordinating Conjunction (Contrast)', explanation: 'FANBOYS conjunction joining two independent clauses.', color: 'violet' },
      { text: 'they', pos: 'Pronoun', category: 'Personal Subject Pronoun', explanation: 'Replaces the antecedent noun "students".', color: 'indigo' },
      { text: 'were', pos: 'Verb', category: 'Linking / Copular Verb', explanation: 'Past tense of "to be", connects subject to adjective.', color: 'rose' },
      { text: 'still', pos: 'Adverb', category: 'Adverb of Time/Continuance', explanation: 'Modifies the state of being curious.', color: 'amber' },
      { text: 'curious.', pos: 'Adjective', category: 'Predicative Adjective', explanation: 'Describes the subject "they" after linking verb "were".', color: 'emerald' },
    ],
  },
  {
    id: 's2',
    title: 'Sentence 2: Tricky Sukkur IBA Chameleon Words ("After", "Fast", "Hard")',
    sentenceText: 'He arrived shortly after the fast train departed because hard work brings success.',
    words: [
      { text: 'He', pos: 'Pronoun', category: 'Personal Pronoun (Subject)', explanation: 'Third person singular masculine pronoun.', color: 'indigo' },
      { text: 'arrived', pos: 'Verb', category: 'Intransitive Verb', explanation: 'Main action in the first clause.', color: 'rose' },
      { text: 'shortly', pos: 'Adverb', category: 'Adverb of Degree/Time', explanation: 'Modifies the preposition "after".', color: 'amber' },
      { text: 'after', pos: 'Preposition', category: 'Preposition of Time', explanation: 'Placed before noun phrase "the fast train".', color: 'orange' },
      { text: 'the', pos: 'Determiner / Article', category: 'Definite Article', explanation: 'Defines the train.', color: 'teal' },
      { text: 'fast', pos: 'Adjective', category: 'Adjective of Quality', explanation: 'Modifies noun "train" (Note: "runs fast" would be an adverb!).', color: 'emerald' },
      { text: 'train', pos: 'Noun', category: 'Common Noun', explanation: 'Subject of the subordinate clause.', color: 'sky' },
      { text: 'departed', pos: 'Verb', category: 'Intransitive Verb', explanation: 'Past action of the train.', color: 'rose' },
      { text: 'because', pos: 'Conjunction', category: 'Subordinating Conjunction of Reason', explanation: 'Introduces a clause of cause/reason.', color: 'violet' },
      { text: 'hard', pos: 'Adjective', category: 'Adjective of Quality', explanation: 'Modifies "work" (Note: "works hard" would be an adverb!).', color: 'emerald' },
      { text: 'work', pos: 'Noun', category: 'Uncountable Abstract Noun', explanation: 'Subject of the reason clause.', color: 'sky' },
      { text: 'brings', pos: 'Verb', category: 'Transitive Verb (Singular)', explanation: 'Singular verb agreeing with singular subject "work".', color: 'rose' },
      { text: 'success.', pos: 'Noun', category: 'Abstract Noun (Object)', explanation: 'Direct object of "brings".', color: 'sky' },
    ],
  },
  {
    id: 's3',
    title: 'Sentence 3: Academic / Pedagogy Context (Gerunds & Relatives)',
    sentenceText: 'Teaching requires immense patience which motivates every child toward excellence.',
    words: [
      { text: 'Teaching', pos: 'Noun (Gerund)', category: 'Verbal Noun', explanation: '-ing verb acting as the subject of the sentence.', color: 'sky' },
      { text: 'requires', pos: 'Verb', category: 'Transitive Verb', explanation: 'Third person singular verb agreeing with singular gerund.', color: 'rose' },
      { text: 'immense', pos: 'Adjective', category: 'Adjective of Degree/Quality', explanation: 'Modifies the noun "patience".', color: 'emerald' },
      { text: 'patience', pos: 'Noun', category: 'Uncountable Abstract Noun', explanation: 'Direct object of "requires".', color: 'sky' },
      { text: 'which', pos: 'Pronoun', category: 'Relative Pronoun', explanation: 'Refers back to antecedent noun "patience".', color: 'indigo' },
      { text: 'motivates', pos: 'Verb', category: 'Transitive Verb', explanation: 'Singular verb agreeing with relative pronoun "which".', color: 'rose' },
      { text: 'every', pos: 'Determiner', category: 'Distributive Determiner', explanation: 'Specifies individual members of the noun "child".', color: 'teal' },
      { text: 'child', pos: 'Noun', category: 'Common Noun (Object)', explanation: 'Direct object of "motivates".', color: 'sky' },
      { text: 'toward', pos: 'Preposition', category: 'Preposition of Direction/Goal', explanation: 'Connects to destination/goal.', color: 'orange' },
      { text: 'excellence.', pos: 'Noun', category: 'Abstract Noun', explanation: 'Object of the preposition "toward".', color: 'sky' },
    ],
  },
];

export interface IdentificationChallenge {
  id: number;
  sentence: string;
  highlightedWord: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const IDENTIFICATION_CHALLENGES: IdentificationChallenge[] = [
  {
    id: 1,
    sentence: 'The candidate worked hard throughout the screening test.',
    highlightedWord: 'hard',
    question: 'What part of speech is the word "hard" in this sentence?',
    options: ['Adjective', 'Adverb of Manner', 'Abstract Noun', 'Transitive Verb'],
    correctIndex: 1,
    explanation: '"hard" answers the question "HOW did he work?" It modifies the verb "worked", making it an Adverb of Manner. (If it were "a hard exam", it would be an adjective modifying "exam").',
  },
  {
    id: 2,
    sentence: 'All the applicants attended the orientation but one.',
    highlightedWord: 'but',
    question: 'What part of speech is the word "but" in this sentence?',
    options: ['Coordinating Conjunction', 'Preposition (meaning "except")', 'Adverb of Degree', 'Relative Pronoun'],
    correctIndex: 1,
    explanation: 'Here, "but" does not connect two clauses; it means "except". When "but" means "except" and is followed by an object, it functions as a Preposition.',
  },
  {
    id: 3,
    sentence: 'Swimming across the river is his daily morning habit.',
    highlightedWord: 'Swimming',
    question: 'What is the grammatical classification of "Swimming" here?',
    options: ['Present Participle', 'Gerund (Verbal Noun)', 'Finite Main Verb', 'Attributive Adjective'],
    correctIndex: 1,
    explanation: '"Swimming" is the Subject of the sentence ("Swimming is..."). An -ing verb that functions as a noun subject or object is a Gerund (Verbal Noun).',
  },
  {
    id: 4,
    sentence: 'He walked past the old high school building yesterday.',
    highlightedWord: 'past',
    question: 'What part of speech is "past" in this sentence?',
    options: ['Noun', 'Past Tense Verb', 'Preposition', 'Adjective'],
    correctIndex: 2,
    explanation: '"past" takes an object ("the old high school building") and indicates movement/location relative to it, functioning as a Preposition.',
  },
  {
    id: 5,
    sentence: 'She is a friendly and courteous headmistress.',
    highlightedWord: 'friendly',
    question: 'What part of speech is "friendly" here?',
    options: ['Adverb of Manner', 'Adjective of Quality', 'Abstract Noun', 'Conjunction'],
    correctIndex: 1,
    explanation: 'Although it ends in "-ly", "friendly" describes the noun "headmistress". Words like friendly, lovely, lively, and cowardly are ADJECTIVES, not adverbs!',
  },
  {
    id: 6,
    sentence: 'Neither candidate was found eligible for the BPS-17 post.',
    highlightedWord: 'Neither',
    question: 'What part of speech is "Neither" in this sentence?',
    options: ['Correlative Conjunction', 'Distributive Determiner / Adjective', 'Personal Pronoun', 'Adverb of Degree'],
    correctIndex: 1,
    explanation: '"Neither" sits immediately before the noun "candidate" to limit/distribute it, functioning as a Distributive Determiner/Adjective. (If it were "Neither of them was", it would be an Indefinite Pronoun).',
  },
];

export const InteractivePartsOfSpeechExplorer: React.FC = () => {
  // Active Tab: 'one-by-one' | 'sentence-dissector' | 'challenge' | 'matrix'
  const [activeTab, setActiveTab] = useState<'one-by-one' | 'sentence-dissector' | 'challenge' | 'matrix'>('one-by-one');

  // Mastery tracking for parts of speech
  const [masteredParts, setMasteredParts] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('sts_mastered_pos');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleMastered = (posId: string) => {
    setMasteredParts((prev) => {
      const nextState = !prev[posId];
      const updated = { ...prev, [posId]: nextState };
      try {
        localStorage.setItem('sts_mastered_pos', JSON.stringify(updated));
      } catch {
        // Ignore local storage error
      }
      if (nextState) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
        });
      }
      return updated;
    });
  };

  // One by one index
  const [currentPosIndex, setCurrentPosIndex] = useState(0);
  const currentPos = ALL_PARTS_OF_SPEECH[currentPosIndex];

  // Sentence Dissector state
  const [selectedSentenceId, setSelectedSentenceId] = useState<string>('s1');
  const [activePosFilter, setActivePosFilter] = useState<string | null>(null);
  const [inspectedWord, setInspectedWord] = useState<DissectWord | null>(null);

  // Challenge state
  const [challengeAnswers, setChallengeAnswers] = useState<Record<number, number>>({});
  const [showChallengeResults, setShowChallengeResults] = useState<Record<number, boolean>>({});

  const currentSentence = SENTENCE_SCENARIOS.find((s) => s.id === selectedSentenceId) || SENTENCE_SCENARIOS[0];

  const handleSelectChallenge = (qId: number, optIdx: number) => {
    const challenge = IDENTIFICATION_CHALLENGES.find((c) => c.id === qId);
    const isCorrect = challenge && optIdx === challenge.correctIndex;

    setChallengeAnswers((prev) => {
      const nextAnswers = { ...prev, [qId]: optIdx };
      const answeredCount = Object.keys(nextAnswers).length;

      if (isCorrect) {
        const correctCount = IDENTIFICATION_CHALLENGES.filter(
          (c) => nextAnswers[c.id] === c.correctIndex
        ).length;

        if (answeredCount === IDENTIFICATION_CHALLENGES.length && correctCount >= 5) {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.6 },
          });
        } else {
          confetti({
            particleCount: 35,
            spread: 45,
            origin: { y: 0.7 },
          });
        }
      }
      return nextAnswers;
    });
    setShowChallengeResults((prev) => ({ ...prev, [qId]: true }));
  };

  const handleResetChallenge = () => {
    setChallengeAnswers({});
    setShowChallengeResults({});
  };

  const nextPos = () => {
    setCurrentPosIndex((prev) => (prev + 1) % ALL_PARTS_OF_SPEECH.length);
  };

  const prevPos = () => {
    setCurrentPosIndex((prev) => (prev - 1 + ALL_PARTS_OF_SPEECH.length) % ALL_PARTS_OF_SPEECH.length);
  };

  // Color mapper helper for tags
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'sky':
        return 'bg-sky-100 dark:bg-sky-950/70 text-sky-800 dark:text-sky-200 border-sky-300 dark:border-sky-800';
      case 'indigo':
        return 'bg-indigo-100 dark:bg-indigo-950/70 text-indigo-800 dark:text-indigo-200 border-indigo-300 dark:border-indigo-800';
      case 'rose':
        return 'bg-rose-100 dark:bg-rose-950/70 text-rose-800 dark:text-rose-200 border-rose-300 dark:border-rose-800';
      case 'emerald':
        return 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800';
      case 'amber':
        return 'bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-200 border-amber-300 dark:border-amber-800';
      case 'orange':
        return 'bg-orange-100 dark:bg-orange-950/70 text-orange-800 dark:text-orange-200 border-orange-300 dark:border-orange-800';
      case 'violet':
        return 'bg-violet-100 dark:bg-violet-950/70 text-violet-800 dark:text-violet-200 border-violet-300 dark:border-violet-800';
      case 'pink':
        return 'bg-pink-100 dark:bg-pink-950/70 text-pink-800 dark:text-pink-200 border-pink-300 dark:border-pink-800';
      case 'teal':
        return 'bg-teal-100 dark:bg-teal-950/70 text-teal-800 dark:text-teal-200 border-teal-300 dark:border-teal-800';
      default:
        return 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300';
    }
  };

  return (
    <div className="rounded-3xl border-2 border-indigo-500/30 bg-gradient-to-b from-indigo-50/40 via-white to-purple-50/30 dark:from-slate-900 dark:via-slate-900/90 dark:to-indigo-950/30 p-4 sm:p-7 space-y-6 shadow-md my-4">
      {/* Studio Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-100 dark:border-slate-800 pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>INTERACTIVE VISUAL STUDIO · ALL 9 PARTS OF SPEECH</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight font-display">
            Parts of Speech Master Explorer (One by One)
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Learn, dissect, and identify all 8 core English parts of speech plus determiners with classroom examples, Urdu/Sindhi links, and Sukkur IBA test traps.
          </p>
        </div>

        {/* Studio View Mode Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl self-start md:self-auto border border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setActiveTab('one-by-one')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'one-by-one'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>One by One (1–9)</span>
          </button>

          <button
            onClick={() => setActiveTab('sentence-dissector')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'sentence-dissector'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Sentence Dissector</span>
          </button>

          <button
            onClick={() => setActiveTab('challenge')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'challenge'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Identify Challenge</span>
          </button>

          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'matrix'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Tag className="w-3.5 h-3.5" />
            <span>Master Matrix</span>
          </button>
        </div>
      </div>

      {/* MODE 1: ONE BY ONE DEEP DIVE */}
      {activeTab === 'one-by-one' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Top Quick Navigation Pills (All 9 items) */}
          <div className="flex flex-wrap gap-2 items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <div className="flex flex-wrap gap-1.5">
              {ALL_PARTS_OF_SPEECH.map((pos, idx) => {
                const isActive = idx === currentPosIndex;
                const isMastered = !!masteredParts[pos.id];
                return (
                  <button
                    key={pos.id}
                    onClick={() => setCurrentPosIndex(idx)}
                    className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer border ${
                      isActive
                        ? `${pos.badgeBg} ${pos.badgeText} border-current ring-2 ring-indigo-500/20 shadow-xs font-black`
                        : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{pos.name}</span>
                    {isMastered && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Mastered" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Prev / Next controls and Mastered tally */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                Mastered: {Object.values(masteredParts).filter(Boolean).length}/{ALL_PARTS_OF_SPEECH.length}
              </span>
              <button
                onClick={prevPos}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 cursor-pointer"
                title="Previous Part of Speech"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold text-slate-500 px-1">
                {currentPosIndex + 1} of {ALL_PARTS_OF_SPEECH.length}
              </span>
              <button
                onClick={nextPos}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 cursor-pointer"
                title="Next Part of Speech"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Part of Speech Hero Card */}
          <div className="bg-white dark:bg-slate-900 border-2 rounded-3xl p-5 sm:p-7 shadow-xs space-y-6 relative overflow-hidden transition-all duration-300">
            {/* Top Accent Bar */}
            <div className={`h-2 w-full absolute top-0 left-0 bg-gradient-to-r ${currentPos.gradient}`} />

            {/* Header with Title & Urdu/Sindhi Meaning */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pt-1">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-3 py-1 rounded-xl text-xs font-extrabold ${currentPos.badgeBg} ${currentPos.badgeText}`}>
                    {currentPos.name}
                  </span>
                  <span className="px-3 py-1 rounded-xl text-xs font-bold bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                    {currentPos.urduSindhi}
                  </span>
                  <button
                    onClick={() => toggleMastered(currentPos.id)}
                    className={`px-2.5 py-1 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer border ${
                      masteredParts[currentPos.id]
                        ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-700 hover:border-emerald-300'
                    }`}
                  >
                    {masteredParts[currentPos.id] ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        <span>Mastered ✓</span>
                      </>
                    ) : (
                      <>
                        <Award className="w-3.5 h-3.5 text-indigo-500" />
                        <span>Mark Mastered</span>
                      </>
                    )}
                  </button>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-display">
                  {currentPos.tagline}
                </h4>
              </div>

              {/* Position & Formula Pill */}
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs space-y-1 sm:max-w-xs shrink-0">
                <div className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">
                  Sentence Position / Formula
                </div>
                <div className="font-mono font-semibold text-indigo-600 dark:text-indigo-400 text-[11px]">
                  {currentPos.positionFormula}
                </div>
              </div>
            </div>

            {/* Core Plain-English Definition */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <Info className="w-3.5 h-3.5 text-indigo-500" />
                <span>Definition &amp; Grammatical Purpose</span>
              </div>
              <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                {currentPos.definition}
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300 pt-1">
                <HelpCircle className="w-3.5 h-3.5" />
                <span><strong>Key Question Answered:</strong> {currentPos.questionAnswered}</span>
              </div>
            </div>

            {/* Sub-types & Taxonomy Grid */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Key Subtypes &amp; Classifications ({currentPos.subtypes.length})</span>
                </h5>
                <span className="text-[11px] text-slate-500">Essential for Sukkur IBA questions</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentPos.subtypes.map((st, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 hover:border-indigo-300 dark:hover:border-indigo-600 transition space-y-2 shadow-2xs"
                  >
                    <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-indigo-500" />
                      <span>{st.name}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {st.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {st.examples.map((ex, eIdx) => (
                        <span
                          key={eIdx}
                          className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-800 dark:text-slate-200 text-[11px] font-medium font-mono"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Essential Rules & High-Yield Pitfalls */}
            {currentPos.pitfalls && currentPos.pitfalls.length > 0 && (
              <div className="p-4 sm:p-5 rounded-2xl bg-rose-500/10 border-2 border-rose-500/30 space-y-2.5">
                <div className="flex items-center gap-2 text-rose-800 dark:text-rose-200 font-extrabold text-xs uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>Essential Rules &amp; Common Pitfalls ({currentPos.pitfalls.length})</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  {currentPos.pitfalls.map((pf, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-rose-200/80 dark:border-rose-900/50 space-y-1.5 shadow-2xs"
                    >
                      <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                        <span>{pf.rule}</span>
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pl-3.5">
                        {pf.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEDA / Sukkur IBA Exam Trap Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-200 font-extrabold text-xs uppercase tracking-wider">
                <Zap className="w-4 h-4 text-amber-600 fill-amber-500" />
                <span>STEDA / Sukkur IBA High-Frequency Exam Trap</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
                {currentPos.stsExamTrap}
              </p>
            </div>

            {/* Illustrative Sentence & Breakdown */}
            <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/70 dark:border-indigo-900/50 space-y-2">
              <div className="text-xs font-extrabold text-indigo-900 dark:text-indigo-200 uppercase tracking-wider">
                Illustrative Classroom Example
              </div>
              <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white italic">
                &ldquo;{currentPos.sampleSentence.sentence}&rdquo;
              </p>
              <div className="text-xs text-indigo-700 dark:text-indigo-300 font-medium">
                <strong>Analysis:</strong> {currentPos.sampleSentence.explanation}
              </div>
            </div>

            {/* Sindh Classroom Pedagogy Tip */}
            <div className="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 flex items-start gap-2.5 text-xs text-emerald-900 dark:text-emerald-200">
              <Lightbulb className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Sindh BPS-16/17 Classroom Tip:</strong> {currentPos.pedagogyTip}
              </div>
            </div>

            {/* Bottom Next/Previous Jump Buttons */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={prevPos}
                className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Previous Part of Speech</span>
              </button>

              <button
                onClick={nextPos}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>Next Part of Speech ({ALL_PARTS_OF_SPEECH[(currentPosIndex + 1) % ALL_PARTS_OF_SPEECH.length].name.split('.')[1]})</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: SENTENCE DISSECTOR (LIVE SENTENCE PARSER) */}
      {activeTab === 'sentence-dissector' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-500" />
                  <span>Interactive Sentence Anatomy Scanner</span>
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Click any word in the sentence below to reveal its exact Part of Speech, grammatical classification, and syntactic role.
                </p>
              </div>

              {/* Scenario Preset Selector */}
              <div className="flex items-center gap-1.5">
                {SENTENCE_SCENARIOS.map((sc, sIdx) => (
                  <button
                    key={sc.id}
                    onClick={() => {
                      setSelectedSentenceId(sc.id);
                      setInspectedWord(null);
                    }}
                    className={`px-2.5 py-1 rounded-xl text-xs font-bold transition cursor-pointer border ${
                      selectedSentenceId === sc.id
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    Sentence {sIdx + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-xs font-bold text-indigo-700 dark:text-indigo-300">
              {currentSentence.title}
            </div>

            {/* Filter by Part of Speech Pills */}
            <div className="flex flex-wrap items-center gap-1 pt-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                Highlight Filter:
              </span>
              <button
                onClick={() => setActivePosFilter(null)}
                className={`px-2 py-0.5 rounded-lg text-[11px] font-bold cursor-pointer transition ${
                  activePosFilter === null
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                All Words
              </button>
              {['Noun', 'Pronoun', 'Verb', 'Adjective', 'Adverb', 'Preposition', 'Conjunction', 'Interjection', 'Determiner'].map((cat) => {
                const isSelected = activePosFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActivePosFilter(isSelected ? null : cat)}
                    className={`px-2 py-0.5 rounded-lg text-[11px] font-bold cursor-pointer transition ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-2xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Live Sentence Display with Clickable Words */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-900/50 shadow-sm space-y-4">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Click any word below to inspect:
            </div>

            <div className="flex flex-wrap items-center gap-2 text-base sm:text-xl font-medium leading-loose">
              {currentSentence.words.map((w, wIdx) => {
                const isMatchFilter = activePosFilter ? w.pos.toLowerCase().includes(activePosFilter.toLowerCase()) : false;
                const isInspected = inspectedWord?.text === w.text;
                const tagColorClass = getColorClasses(w.color);

                return (
                  <button
                    key={wIdx}
                    onClick={() => setInspectedWord(w)}
                    className={`px-2.5 py-1 rounded-xl transition-all duration-150 cursor-pointer text-left border relative group ${
                      isInspected
                        ? 'ring-3 ring-indigo-500 shadow-md font-bold scale-105 ' + tagColorClass
                        : isMatchFilter
                        ? 'ring-2 ring-amber-400 font-bold ' + tagColorClass
                        : 'bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-slate-900 dark:text-white border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <span>{w.text}</span>
                    <span className="block text-[9px] font-mono uppercase tracking-tighter opacity-75">
                      {w.pos.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Word Inspector Card */}
            {inspectedWord ? (
              <div className="mt-4 p-5 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border-2 border-indigo-300 dark:border-indigo-800 space-y-2 animate-in slide-in-from-top-2 duration-200">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-200/60 dark:border-indigo-800/60 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-black text-slate-900 dark:text-white font-mono">
                      &ldquo;{inspectedWord.text}&rdquo;
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-lg text-xs font-extrabold border ${getColorClasses(inspectedWord.color)}`}>
                      {inspectedWord.pos}
                    </span>
                    <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                      ({inspectedWord.category})
                    </span>
                  </div>
                  <button
                    onClick={() => setInspectedWord(null)}
                    className="text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                  >
                    Close ×
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                  <strong>Syntactic Function in this sentence:</strong> {inspectedWord.explanation}
                </p>
              </div>
            ) : (
              <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl text-center text-xs text-slate-500">
                💡 Tip: Click on words like <em>&quot;quickly&quot;</em>, <em>&quot;difficult&quot;</em>, <em>&quot;Hurrah!&quot;</em>, or <em>&quot;but&quot;</em> to see how each functions in real time.
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODE 3: IDENTIFY CHALLENGE (SUKKUR IBA EXAM FORMAT) */}
      {activeTab === 'challenge' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div>
              <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Sukkur IBA &quot;Spot the Part of Speech&quot; Exam Drill</span>
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Test your mastery on high-yield chameleon words that change parts of speech based on sentence context.
              </p>
            </div>
            <button
              onClick={handleResetChallenge}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset Quiz</span>
            </button>
          </div>

          <div className="space-y-4">
            {IDENTIFICATION_CHALLENGES.map((ch, idx) => {
              const selectedOpt = challengeAnswers[ch.id];
              const isSubmitted = showChallengeResults[ch.id];
              const isCorrect = selectedOpt === ch.correctIndex;

              return (
                <div
                  key={ch.id}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="px-2 py-0.5 rounded-lg text-[10px] font-extrabold bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300">
                      Question {idx + 1} of {IDENTIFICATION_CHALLENGES.length}
                    </span>
                    {isSubmitted && (
                      <span
                        className={`text-xs font-extrabold flex items-center gap-1 ${
                          isCorrect ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
                        }`}
                      >
                        {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                        {isCorrect ? 'Correct!' : 'Incorrect'}
                      </span>
                    )}
                  </div>

                  {/* Sentence Context */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                    &ldquo;{ch.sentence}&rdquo;
                  </div>

                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {ch.question}
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {ch.options.map((opt, oIdx) => {
                      const isThisSelected = selectedOpt === oIdx;
                      let btnStyle =
                        'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200';

                      if (isSubmitted) {
                        if (oIdx === ch.correctIndex) {
                          btnStyle =
                            'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 font-bold ring-1 ring-emerald-500';
                        } else if (isThisSelected) {
                          btnStyle =
                            'border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200 font-bold';
                        }
                      } else if (isThisSelected) {
                        btnStyle = 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 font-bold';
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleSelectChallenge(ch.id, oIdx)}
                          className={`p-2.5 rounded-xl border text-xs text-left transition flex items-center justify-between cursor-pointer ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {isSubmitted && oIdx === ch.correctIndex && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation after answering */}
                  {isSubmitted && (
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 space-y-1 animate-in fade-in duration-200">
                      <div className="font-bold text-indigo-600 dark:text-indigo-400">
                        Exam Explanation:
                      </div>
                      <div>{ch.explanation}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* MODE 4: MASTER MATRIX (ALL 9 PARTS COMPARISON TABLE) */}
      {activeTab === 'matrix' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Tag className="w-4 h-4 text-indigo-500" />
              <span>Comprehensive 9 Parts of Speech Comparison Matrix</span>
            </h4>
            <span className="text-xs text-slate-500">Quick Exam Reference Sheet</span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 font-extrabold">
                <tr>
                  <th className="p-3">Part of Speech</th>
                  <th className="p-3">Urdu / Sindhi</th>
                  <th className="p-3">Core Function</th>
                  <th className="p-3">Question Answered</th>
                  <th className="p-3">Clear Example</th>
                  <th className="p-3">Sukkur IBA Trap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {ALL_PARTS_OF_SPEECH.map((pos) => (
                  <tr key={pos.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400 whitespace-nowrap">
                      {pos.name}
                    </td>
                    <td className="p-3 text-slate-600 dark:text-slate-300 font-semibold whitespace-nowrap">
                      {pos.urduSindhi}
                    </td>
                    <td className="p-3 text-slate-700 dark:text-slate-300 min-w-[200px]">
                      {pos.definition.slice(0, 85)}...
                    </td>
                    <td className="p-3 font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap">
                      {pos.questionAnswered.split('(')[0]}
                    </td>
                    <td className="p-3 font-mono text-emerald-700 dark:text-emerald-400 whitespace-nowrap">
                      {pos.sampleSentence.targetWord.split(',')[0]}
                    </td>
                    <td className="p-3 text-[11px] text-amber-800 dark:text-amber-200 min-w-[220px]">
                      {pos.stsExamTrap.slice(0, 90)}...
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
