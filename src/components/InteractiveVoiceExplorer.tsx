import React, { useState } from 'react';
import {
  Volume2,
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
  FileSpreadsheet,
  AlertTriangle,
  RotateCcw,
  SlidersHorizontal,
  ArrowLeftRight,
  ShieldAlert,
} from 'lucide-react';

export type VoiceCategory = 'tenses' | 'imperatives' | 'interrogatives' | 'special';

export interface VoiceRuleItem {
  id: string;
  order: number;
  category: VoiceCategory;
  categoryLabel: string;
  title: string;
  urduSindhi: string;
  activeFormula: string;
  passiveFormula: string;
  beAuxiliary: string;
  activeExample: string;
  passiveExample: string;
  hasNoPassive?: boolean;
  explanation: string;
  stsTrap: string;
  pedagogyTip: string;
}

export const ALL_VOICE_RULES: VoiceRuleItem[] = [
  // TENSES GROUP
  {
    id: 'v-pres-simple',
    order: 1,
    category: 'tenses',
    categoryLabel: 'Tense Conjugation',
    title: '1. Present Simple (Indefinite)',
    urduSindhi: 'زمان حال سادو (معروف ڏانهن مجہول)',
    activeFormula: 'Subject + V1 (or V1+s/es) + Object',
    passiveFormula: 'Object (New Subject) + is / am / are + V3 (Past Participle) + by + Subject (Objective Case)',
    beAuxiliary: 'is / am / are',
    activeExample: 'The headmaster inspects the science laboratory every morning.',
    passiveExample: 'The science laboratory is inspected by the headmaster every morning.',
    explanation: 'Object becomes the new subject. Use "is" (singular), "am" (with I), or "are" (plural) + V3.',
    stsTrap: 'Subject-Verb Agreement Trap: If the active object is plural, the passive verb MUST be plural. Active: "He checks the papers." -> Passive: "The papers ARE checked by him" (NOT "is checked").',
    pedagogyTip: 'Sindh Classroom Tip: Use physical color-coded cards. Hand a blue card (Subject) to Student A, a green card (Verb) to Student B, and a yellow card (Object) to Student C. Have students physically swap places to demonstrate the subject-object inversion.',
  },
  {
    id: 'v-pres-cont',
    order: 2,
    category: 'tenses',
    categoryLabel: 'Tense Conjugation',
    title: '2. Present Continuous (Progressive)',
    urduSindhi: 'زمان حال هلندڙ (استمراري مجہول)',
    activeFormula: 'Subject + is / am / are + V1-ing + Object',
    passiveFormula: 'Object + is / am / are + BEING + V3 + by + Subject',
    beAuxiliary: 'is / am / are + BEING',
    activeExample: 'The educator is demonstrating the solar eclipse model.',
    passiveExample: 'The solar eclipse model is being demonstrated by the educator.',
    explanation: 'Continuous tenses preserve their ongoing progressive aspect by inserting the word "BEING" before the V3 past participle.',
    stsTrap: 'THE "BEING" OMISSION TRAP: STS tests this relentlessly. Never drop "being"! INCORRECT: "The lesson is explained by her." (This is simple present). CORRECT: "The lesson is BEING explained by her."',
    pedagogyTip: 'Sindh Classroom Tip: Emphasize that "-ing" in active always transforms into "-ing" on "be" -> "being". Mnemonic: "Active ING gives birth to Passive BEING".',
  },
  {
    id: 'v-pres-perf',
    order: 3,
    category: 'tenses',
    categoryLabel: 'Tense Conjugation',
    title: '3. Present Perfect',
    urduSindhi: 'زمان حال مڪمل (مجہول صفت)',
    activeFormula: 'Subject + have / has + V3 + Object',
    passiveFormula: 'Object + have / has + BEEN + V3 + by + Subject',
    beAuxiliary: 'have / has + BEEN',
    activeExample: 'The Sukkur IBA testing agency has announced the merit list.',
    passiveExample: 'The merit list has been announced by the Sukkur IBA testing agency.',
    explanation: 'Perfect tenses preserve completion by inserting "BEEN" between the auxiliary (have/has) and the main verb (V3).',
    stsTrap: 'Subject switch trap: If active subject is singular but object is plural, switch from "has" to "have"! Active: "The teacher has checked the copies." -> Passive: "The copies HAVE been checked by the teacher" (NOT has been).',
    pedagogyTip: 'Sindh Classroom Tip: Highlight that the main verb is ALREADY in V3 in perfect tenses (announced -> announced), so students only need to insert "been" in the middle.',
  },
  {
    id: 'v-pres-perf-cont',
    order: 4,
    category: 'tenses',
    categoryLabel: 'Tense Conjugation',
    title: '4. Present Perfect Continuous',
    urduSindhi: 'زمان حال مڪمل هلندڙ (مجہول نه ٺهندو آهي)',
    activeFormula: 'Subject + have / has + been + V1-ing + Object + since/for',
    passiveFormula: 'NO PASSIVE VOICE IN STANDARD ENGLISH',
    beAuxiliary: 'None (Unnatural / Non-Standard)',
    activeExample: 'He has been teaching mathematics in Larkana for ten years.',
    passiveExample: 'No Passive Voice (Option "D" in Sukkur IBA exams)',
    hasNoPassive: true,
    explanation: 'Standard English does not transform perfect continuous tenses into passive voice because doubling "been being" is considered clumsy and non-idiomatic.',
    stsTrap: 'SUKKUR IBA FAVORITE TRICK QUESTION: "Change to passive: She has been singing songs since morning." Options will offer "Songs have been being sung...". The correct answer is always "No passive form exists".',
    pedagogyTip: 'Sindh Classroom Tip: Draw a red traffic stop sign on the board for the 4 non-transformable tenses: 3 Perfect Continuous tenses + 1 Future Continuous.',
  },
  {
    id: 'v-past-simple',
    order: 5,
    category: 'tenses',
    categoryLabel: 'Tense Conjugation',
    title: '5. Past Simple (Indefinite)',
    urduSindhi: 'زمان ماضي سادو (مجہول)',
    activeFormula: 'Subject + V2 + Object (or did not + V1)',
    passiveFormula: 'Object + was / were + V3 + by + Subject',
    beAuxiliary: 'was / were',
    activeExample: 'Sir Syed Ahmed Khan established the MAO College in 1875.',
    passiveExample: 'The MAO College was established by Sir Syed Ahmed Khan in 1875.',
    explanation: 'In Past Simple, the helping verbs "was" (singular) and "were" (plural) are introduced followed by V3.',
    stsTrap: 'Active with "did not": "He did not write the letter" -> Passive: "The letter was not written by him" (NOT "did not written").',
    pedagogyTip: 'Sindh Classroom Tip: Practice historical facts about Pakistan and Sindh: "Shah Latif compiled the Risalo" -> "The Risalo was compiled by Shah Latif".',
  },
  {
    id: 'v-past-cont',
    order: 6,
    category: 'tenses',
    categoryLabel: 'Tense Conjugation',
    title: '6. Past Continuous (Progressive)',
    urduSindhi: 'زمان ماضي هلندڙ (استمراري مجہول)',
    activeFormula: 'Subject + was / were + V1-ing + Object',
    passiveFormula: 'Object + was / were + BEING + V3 + by + Subject',
    beAuxiliary: 'was / were + BEING',
    activeExample: 'The students were reciting the national anthem when the inspector entered.',
    passiveExample: 'The national anthem was being recited by the students when the inspector entered.',
    explanation: 'Preserves past ongoing action using "was/were + BEING + V3".',
    stsTrap: 'Leaving out "being" mistakenly turns the sentence into Past Simple passive! Always verify that "being" is present for continuous sentences.',
    pedagogyTip: 'Sindh Classroom Tip: Contrast: "The car was repaired" (Simple Past - completed) vs. "The car was being repaired" (Past Continuous - was in progress).',
  },
  {
    id: 'v-past-perf',
    order: 7,
    category: 'tenses',
    categoryLabel: 'Tense Conjugation',
    title: '7. Past Perfect',
    urduSindhi: 'زمان ماضي مڪمل (ٻن ماضي ڪمن مان پهريون مجہول)',
    activeFormula: 'Subject + had + V3 + Object',
    passiveFormula: 'Object + had + BEEN + V3 + by + Subject',
    beAuxiliary: 'had + BEEN',
    activeExample: 'The doctors had treated the cholera epidemic before the relief team arrived.',
    passiveExample: 'The cholera epidemic had been treated by the doctors before the relief team arrived.',
    explanation: 'Past perfect passive simply inserts "been" after "had" for all singular and plural subjects.',
    stsTrap: 'Sequence clauses: Do not change the second clause if it has no object or is intransitive. Only the clause with the transitive verb changes.',
    pedagogyTip: 'Sindh Classroom Tip: Show that "had" does not change whether the new subject is singular or plural: "had been written". Very easy for students once recognized.',
  },
  {
    id: 'v-past-perf-cont',
    order: 8,
    category: 'tenses',
    categoryLabel: 'Tense Conjugation',
    title: '8. Past Perfect Continuous',
    urduSindhi: 'زمان ماضي مڪمل هلندڙ (مجہول نه ٿيندو)',
    activeFormula: 'Subject + had been + V1-ing + Object',
    passiveFormula: 'NO PASSIVE VOICE IN STANDARD ENGLISH',
    beAuxiliary: 'None',
    activeExample: 'They had been constructing the Indus highway for two years.',
    passiveExample: 'No Passive Voice Form',
    hasNoPassive: true,
    explanation: 'No passive transformation in standard English grammar.',
    stsTrap: 'Look out for multiple choice distractors using "had been being constructed". That option is grammatically invalid.',
    pedagogyTip: 'Sindh Classroom Tip: Reinforce that all three "...Perfect Continuous" tenses have NO passive form.',
  },
  {
    id: 'v-fut-simple',
    order: 9,
    category: 'tenses',
    categoryLabel: 'Tense Conjugation',
    title: '9. Future Simple (Indefinite)',
    urduSindhi: 'زمان مستقبل سادو (مجہول)',
    activeFormula: 'Subject + will / shall + V1 + Object',
    passiveFormula: 'Object + will / shall + BE + V3 + by + Subject',
    beAuxiliary: 'will / shall + BE',
    activeExample: 'The Sindh Government will conduct the licensing test next month.',
    passiveExample: 'The licensing test will be conducted by the Sindh Government next month.',
    explanation: 'Future Simple passive inserts "BE" after "will/shall" followed by V3.',
    stsTrap: 'Shall vs. Will: When "I / We" is the object moving to subject position, formal British syntax permits "shall be", but modern English accepts "will be" universally.',
    pedagogyTip: 'Sindh Classroom Tip: Compare active promises with official administrative notifications: "We will recruit teachers" (Political/Active) -> "Teachers will be recruited" (Administrative/Passive).',
  },
  {
    id: 'v-fut-cont',
    order: 10,
    category: 'tenses',
    categoryLabel: 'Tense Conjugation',
    title: '10. Future Continuous',
    urduSindhi: 'زمان مستقبل هلندڙ (مجہول نه ٿيندو)',
    activeFormula: 'Subject + will be + V1-ing + Object',
    passiveFormula: 'NO PASSIVE VOICE IN STANDARD ENGLISH',
    beAuxiliary: 'None',
    activeExample: 'The candidates will be solving the question paper at this time tomorrow.',
    passiveExample: 'No Passive Voice Form',
    hasNoPassive: true,
    explanation: 'Future Continuous does not have a standard passive voice form in English.',
    stsTrap: 'STS IBA frequently tests: "Active: At 10 AM tomorrow, she will be delivering a lecture." Option A: "A lecture will be being delivered..." (Wrong). Option D: "No passive voice" (Correct).',
    pedagogyTip: 'Sindh Classroom Tip: The "Rule of 4": Count the 4 non-passive tenses on 4 fingers: Present Perf. Cont., Past Perf. Cont., Future Cont., Future Perf. Cont.',
  },
  {
    id: 'v-fut-perf',
    order: 11,
    category: 'tenses',
    categoryLabel: 'Tense Conjugation',
    title: '11. Future Perfect',
    urduSindhi: 'زمان مستقبل مڪمل (مجہول)',
    activeFormula: 'Subject + will have + V3 + Object',
    passiveFormula: 'Object + will have + BEEN + V3 + by + Subject',
    beAuxiliary: 'will have + BEEN',
    activeExample: 'The education department will have upgraded all high schools by 2028.',
    passiveExample: 'All high schools will have been upgraded by the education department by 2028.',
    explanation: 'Future Perfect passive inserts "BEEN" after "will have" + V3.',
    stsTrap: 'Do not confuse with Future Perfect Continuous! Future Perfect DOES have a passive voice: "will have BEEN upgraded".',
    pedagogyTip: 'Sindh Classroom Tip: Connect with deadline milestones: "By the time the test begins, the roll number slips will have been verified by the staff."',
  },
  {
    id: 'v-fut-perf-cont',
    order: 12,
    category: 'tenses',
    categoryLabel: 'Tense Conjugation',
    title: '12. Future Perfect Continuous',
    urduSindhi: 'زمان مستقبل مڪمل هلندڙ (مجہول نه ٿيندو)',
    activeFormula: 'Subject + will have been + V1-ing + Object',
    passiveFormula: 'NO PASSIVE VOICE IN STANDARD ENGLISH',
    beAuxiliary: 'None',
    activeExample: 'By next year, he will have been teaching physics for twenty years.',
    passiveExample: 'No Passive Voice Form',
    hasNoPassive: true,
    explanation: 'No passive voice exists in standard English.',
    stsTrap: 'Always select "None of these / No passive voice" when presented with this tense.',
    pedagogyTip: 'Sindh Classroom Tip: Conclude the 12-tense voice audit: Out of 12 tenses, exactly 8 have passive voice, and exactly 4 do not.',
  },

  // IMPERATIVES GROUP
  {
    id: 'v-imp-order',
    order: 13,
    category: 'imperatives',
    categoryLabel: 'Imperatives',
    title: '13. Imperative Orders & Commands (Let + Object + be + V3)',
    urduSindhi: 'امريه جملو / حڪم (Let سان مجہول ٺاهڻ)',
    activeFormula: 'V1 (Base Verb) + Object',
    passiveFormula: 'Let + Object + BE + V3 (or "You are ordered/commanded to + V1 + Object")',
    beAuxiliary: 'Let + ... + BE',
    activeExample: 'Shut the classroom window immediately.',
    passiveExample: 'Let the classroom window be shut immediately.',
    explanation: 'Direct orders with an explicit transitive object use the classic formula "Let + Object + be + V3".',
    stsTrap: 'Irregular verbs in V3: "Shut" remains "shut", "cut" remains "cut", "put" remains "put", "spread" remains "spread". INCORRECT: "Let the window be shutted." CORRECT: "Let the window be shut."',
    pedagogyTip: 'Sindh Classroom Tip: Practice common school commands: "Open your books" -> "Let your books be opened". "Ring the bell" -> "Let the bell be rung".',
  },
  {
    id: 'v-imp-moral',
    order: 14,
    category: 'imperatives',
    categoryLabel: 'Imperatives',
    title: '14. Imperative Moral Duty & Advice (Should be + V3)',
    urduSindhi: 'نصيحت ۽ اخلاقي فرض (Should be وارو مجہول)',
    activeFormula: 'V1 (Advice verb) + Object (e.g., Help the needy, Respect teachers)',
    passiveFormula: 'Object + SHOULD BE + V3 (or "You are advised to + V1")',
    beAuxiliary: 'SHOULD BE',
    activeExample: 'Help the poor flood victims of Sindh.',
    passiveExample: 'The poor flood victims of Sindh should be helped.',
    explanation: 'When an imperative sentence expresses moral advice, duty, or humanitarian recommendation, English prefers "Object + should be + V3" over "Let".',
    stsTrap: 'Sukkur IBA tests distinguishing between an authoritative command ("Call the police" -> "Let the police be called") vs. moral advice ("Respect your elders" -> "Your elders should be respected").',
    pedagogyTip: 'Sindh Classroom Tip: Have students classify imperative cards into two columns: "Command/Order" (uses Let) vs. "Moral Duty/Advice" (uses Should be).',
  },
  {
    id: 'v-imp-negative',
    order: 15,
    category: 'imperatives',
    categoryLabel: 'Imperatives',
    title: '15. Negative Imperatives (Prohibition)',
    urduSindhi: 'نهي وارو حڪم / منع ڪرڻ (Do not وارو مجہول)',
    activeFormula: 'Do not + V1 + Object',
    passiveFormula: 'Let + Object + NOT BE + V3 (or "You are forbidden to + V1 + Object")',
    beAuxiliary: 'Let + ... + NOT BE',
    activeExample: 'Do not pluck fresh flowers from the botanical garden.',
    passiveExample: 'Let fresh flowers not be plucked from the botanical garden.',
    explanation: '"Do not" transforms into "Let + Object + NOT be + V3". Alternatively: "You are forbidden to pluck fresh flowers...".',
    stsTrap: 'Placement of "not": "not" comes BEFORE "be", not after! INCORRECT: "Let fresh flowers be not plucked." CORRECT: "Let fresh flowers NOT be plucked."',
    pedagogyTip: 'Sindh Classroom Tip: Contrast the two options: If "forbidden" is used, do NOT use "not" again (double negative error: "You are forbidden NOT to pluck" is wrong!).',
  },
  {
    id: 'v-imp-request',
    order: 16,
    category: 'imperatives',
    categoryLabel: 'Imperatives',
    title: '16. Polite Requests with "Please / Kindly"',
    urduSindhi: 'نماڻي گذارش (You are requested to...)',
    activeFormula: 'Please / Kindly + V1 + Object',
    passiveFormula: 'You are requested to + V1 + Object',
    beAuxiliary: 'You are requested to',
    activeExample: 'Please grant me leave for three days.',
    passiveExample: 'You are requested to grant me leave for three days.',
    explanation: 'Remove "Please / Kindly" and replace with "You are requested to + base verb".',
    stsTrap: 'Keep the verb in base form V1 after "to": "You are requested to grant (NOT granted) me leave."',
    pedagogyTip: 'Sindh Classroom Tip: Great for official application writing taught in 9th & 10th grade English curriculum across Sindh.',
  },

  // INTERROGATIVES GROUP
  {
    id: 'v-int-who',
    order: 17,
    category: 'interrogatives',
    categoryLabel: 'Interrogatives',
    title: '17. "Who" Questions (By whom was/were...?)',
    urduSindhi: 'سواليه "ڪنهن" وارو جملو (By whom وارو قائدو)',
    activeFormula: 'Who + V2 + Object? (or Who + has/have + V3 + Object?)',
    passiveFormula: 'By whom + auxiliary verb (was/were/is/has) + Object + V3?',
    beAuxiliary: 'By whom + Aux',
    activeExample: 'Who wrote the immortal philosophical poetry of Shah Jo Risalo?',
    passiveExample: 'By whom was the immortal philosophical poetry of Shah Jo Risalo written?',
    explanation: '"Who" transforms into "By whom". Invert the auxiliary verb BEFORE the subject to preserve interrogative syntax!',
    stsTrap: 'THE #1 TESTED ACTIVE/PASSIVE RULE IN SINDH: Word order error! In interrogatives, the helping verb MUST precede the subject! INCORRECT: "By whom Shah Jo Risalo was written?" CORRECT: "By whom WAS Shah Jo Risalo written?"',
    pedagogyTip: 'Sindh Classroom Tip: The Inversion Drill: Always remind students that in any English question, the auxiliary verb jumps in front of the subject: "By whom [AUX] [SUBJECT] [V3]?"',
  },
  {
    id: 'v-int-whom',
    order: 18,
    category: 'interrogatives',
    categoryLabel: 'Interrogatives',
    title: '18. "Whom" Questions (Who was... by you?)',
    urduSindhi: 'سواليه "ڪنهن کي" وارو جملو (Who سان مجہول)',
    activeFormula: 'Whom + did / do / have + Subject + V1/V3?',
    passiveFormula: 'Who + auxiliary verb + V3 + by + Subject?',
    beAuxiliary: 'Who + Aux + V3',
    activeExample: 'Whom did the selection board appoint as the headmaster?',
    passiveExample: 'Who was appointed as the headmaster by the selection board?',
    explanation: '"Whom" (objective pronoun) in active transforms to "Who" (subjective pronoun) in passive voice.',
    stsTrap: 'Do not use "By whom" when the active question already starts with "Whom"! Active: "Whom did you see?" -> Passive: "Who was seen by you?" (NOT By whom).',
    pedagogyTip: 'Sindh Classroom Tip: Memorize the reciprocal arrow: Who <--> By whom, and Whom <--> Who.',
  },
  {
    id: 'v-int-aux',
    order: 19,
    category: 'interrogatives',
    categoryLabel: 'Interrogatives',
    title: '19. Auxiliary Yes/No Questions (Did/Does/Have...?)',
    urduSindhi: 'امداي فعل سان شروع ٿيندڙ سواليه مجہول',
    activeFormula: 'Did / Does / Have + Subject + Verb + Object?',
    passiveFormula: 'Was/Were (or Is/Are, Has/Have) + Object + V3 + by + Subject?',
    beAuxiliary: 'Was/Were/Is/Are',
    activeExample: 'Did the invigilator collect the examination papers on time?',
    passiveExample: 'Were the examination papers collected by the invigilator on time?',
    explanation: 'Active "Did" becomes "Was" or "Were" depending on whether the new subject is singular or plural.',
    stsTrap: 'Agreement trap: Active has singular subject ("invigilator"), but object is plural ("examination papers"). The passive must begin with "Were", NOT "Was"!',
    pedagogyTip: 'Sindh Classroom Tip: Two-step mental trick: First convert to statement ("The invigilator collected the papers" -> "The papers were collected"), then flip the auxiliary to the front ("Were the papers collected...?").',
  },

  // SPECIAL EXCEPTIONS GROUP
  {
    id: 'v-spec-preps',
    order: 20,
    category: 'special',
    categoryLabel: 'Special Exceptions',
    title: '20. Verbs with Non-"By" Prepositions (Known to, Pleased with, Surprised at)',
    urduSindhi: 'خاص حرف جر (By بجاءِ To, With, At لڳڻ)',
    activeFormula: 'Subject + Verb (know, surprise, satisfy, contain) + Object',
    passiveFormula: 'Object + Be + V3 + TO / AT / WITH / IN + Subject (NEVER "BY")',
    beAuxiliary: 'Be + V3 + [Fixed Preposition]',
    activeExample: 'Everyone in Sindh knows the historical fame of Mohenjo-daro.',
    passiveExample: 'The historical fame of Mohenjo-daro is known TO everyone in Sindh (NOT by).',
    explanation: 'Certain English verbs strictly take non-"by" prepositions in the passive: Known TO, Surprised AT, Pleased WITH, Satisfied WITH, Contained IN, Married TO.',
    stsTrap: 'FATAL STS TRAP: "He knows me" -> Passive options: (a) I am known by him (b) I am known to him. CORRECT ANSWER IS (b) "known to him"! Never write "known by him". Similarly: "His behavior surprised me" -> "I was surprised AT his behavior."',
    pedagogyTip: 'Sindh Classroom Tip: The "Special Preposition Chart": Have students memorize the 5 key pairs: Know -> TO | Surprise -> AT | Satisfy -> WITH | Contain -> IN | Alarm -> AT.',
  },
  {
    id: 'v-spec-phrasal',
    order: 21,
    category: 'special',
    categoryLabel: 'Special Exceptions',
    title: '21. Phrasal & Prepositional Verbs (Retaining the Preposition)',
    urduSindhi: 'مرڪب فعل جن جو حرف جر گڏ رهندو (Laughed at, Look after)',
    activeFormula: 'Subject + Verb + Preposition (e.g., laugh at, look after, break into) + Object',
    passiveFormula: 'Object + Be + V3 + PREPOSITION + by + Subject (Do NOT drop the preposition!)',
    beAuxiliary: 'Be + V3 + [Retained Preposition] + by',
    activeExample: 'The arrogant boys laughed at the poor lame beggar.',
    passiveExample: 'The poor lame beggar was laughed AT by the arrogant boys.',
    explanation: 'When a preposition is part of a phrasal verb, it MUST remain attached to the verb in the passive voice, followed immediately by "by".',
    stsTrap: 'Candidates often feel uncomfortable having two prepositions next to each other ("laughed at by them") and mistakenly drop "at". Dropping "at" is marked completely incorrect by STS IBA!',
    pedagogyTip: 'Sindh Classroom Tip: Highlight "at by" together. Explain that "at" belongs to the verb ("laughed at"), while "by" belongs to the doer ("by them"). They do two different grammatical jobs!',
  },
  {
    id: 'v-spec-quasi',
    order: 22,
    category: 'special',
    categoryLabel: 'Special Exceptions',
    title: '22. Quasi-Passive / Middle Voice (Sensory Verbs)',
    urduSindhi: 'نيم مجہول / ذائقو ۽ بوءِ ظاهر ڪندڙ فعل',
    activeFormula: 'Subject + Sensory Verb (taste, smell, feel) + Adjective',
    passiveFormula: 'Subject + is/are + Adjective + WHEN IT IS + V3',
    beAuxiliary: 'is + Adj + when it is + V3',
    activeExample: 'Quinine tastes bitter.',
    passiveExample: 'Quinine is bitter when it is tasted.',
    explanation: 'Quasi-passive verbs appear active in form but passive in sense. They transform into: "Subject + is [adjective] + when it is [V3]".',
    stsTrap: 'Active: "The rose smells sweet." -> Passive: "The rose is sweet when it is smelled" (NOT "The rose is smelled sweetly").',
    pedagogyTip: 'Sindh Classroom Tip: Classic British and matric syllabus question. Give students: "Lemon tastes sour" -> "Lemon is sour when it is tasted."',
  },
  {
    id: 'v-spec-double-obj',
    order: 23,
    category: 'special',
    categoryLabel: 'Special Exceptions',
    title: '23. Double Object Verbs (Direct vs. Indirect Object)',
    urduSindhi: 'ٻه مفعول رکندڙ فعل (Direct ۽ Indirect Object)',
    activeFormula: 'Subject + Verb + Indirect Object (Person) + Direct Object (Thing)',
    passiveFormula: 'Pattern 1: Person + Be + V3 + Thing + by Subject (Preferred)\nPattern 2: Thing + Be + V3 + TO Person + by Subject',
    beAuxiliary: 'Be + V3',
    activeExample: 'The senior teacher taught us English grammar.',
    passiveExample: 'We were taught English grammar by the senior teacher (or: English grammar was taught to us by the senior teacher).',
    explanation: 'When a verb has two objects, either can become the passive subject, but choosing the person (Indirect Object) is more natural and idiomatic.',
    stsTrap: 'If the direct object (thing) is made the subject, do not forget the preposition "to" before the person: "English grammar was taught TO us" (NOT "taught us").',
    pedagogyTip: 'Sindh Classroom Tip: Point out the two passive pathways on a diagram. Show that converting "us" -> "We were taught..." sounds smoother and is tested as option A in most exams.',
  },
  {
    id: 'v-spec-omission',
    order: 24,
    category: 'special',
    categoryLabel: 'Special Exceptions',
    title: '24. Omission of Agent ("By someone / By people" Dropped)',
    urduSindhi: 'فاعل جو لڪائڻ / حذف ڪرڻ (جڏهن فاعل اڻڄاتل يا عام هجي)',
    activeFormula: 'Someone / People / They / Police + Verb + Object',
    passiveFormula: 'Object + Be + V3 (omit "by someone / by people")',
    beAuxiliary: 'Be + V3',
    activeExample: 'Someone stole my examination roll number slip from the desk.',
    passiveExample: 'My examination roll number slip was stolen (omitting "by someone").',
    explanation: 'When the agent is unknown, vague (someone, somebody, people, they), or completely obvious (police caught the thief -> the thief was caught), the "by + agent" phrase is usually omitted.',
    stsTrap: 'In STS tests, the best answer often does NOT contain "by someone" or "by people". Active: "People speak Sindhi in Sindh." -> Best Passive: "Sindhi is spoken in Sindh" (NOT "by people").',
    pedagogyTip: 'Sindh Classroom Tip: Show scientific and journalistic writing: "The vaccine was discovered in 1955." Point out that passive voice allows us to highlight the scientific discovery, not the anonymous technicians.',
  },
];

export interface VoicePreset {
  id: string;
  label: string;
  categoryTag: string;
  activeSentence: string;
  passiveSentence: string;
  subject: string;
  verb: string;
  object: string;
  ruleExplanation: string;
  stepByStep: {
    stepNumber: number;
    title: string;
    description: string;
    highlightWord: string;
  }[];
}

export const VOICE_CONVERTER_PRESETS: VoicePreset[] = [
  {
    id: 'preset-pres-simple',
    label: 'Present Simple: Classroom Checking',
    categoryTag: 'Tense Transformation',
    activeSentence: 'The teacher inspects the student registers every morning.',
    passiveSentence: 'The student registers are inspected by the teacher every morning.',
    subject: 'The teacher',
    verb: 'inspects',
    object: 'the student registers',
    ruleExplanation: 'In Present Simple, Object becomes subject. Since "registers" is plural, insert "are" + V3 ("inspected") + by + original subject.',
    stepByStep: [
      { stepNumber: 1, title: 'Locate S-V-O', description: 'Subject: "The teacher", Verb: "inspects", Object: "the student registers".', highlightWord: 'S-V-O' },
      { stepNumber: 2, title: 'Move Object to Front', description: '"The student registers" becomes the new sentence subject.', highlightWord: 'The student registers' },
      { stepNumber: 3, title: 'Insert Matching Be-Auxiliary', description: 'Present Simple + Plural Object requires the helping verb "ARE".', highlightWord: 'are' },
      { stepNumber: 4, title: 'Convert Verb to V3', description: '"inspects" (V1) transforms to past participle "inspected" (V3).', highlightWord: 'inspected' },
      { stepNumber: 5, title: 'Add "by" + Agent', description: 'Add "by the teacher" and append the remaining time adverbial "every morning".', highlightWord: 'by the teacher every morning' },
    ],
  },
  {
    id: 'preset-who-question',
    label: 'Who Question: Shah Jo Risalo',
    categoryTag: 'Interrogative Transformation',
    activeSentence: 'Who wrote Shah Jo Risalo?',
    passiveSentence: 'By whom was Shah Jo Risalo written?',
    subject: 'Who',
    verb: 'wrote',
    object: 'Shah Jo Risalo',
    ruleExplanation: '"Who" transforms into "By whom". Invert the auxiliary "was" before the singular subject "Shah Jo Risalo", followed by V3 "written".',
    stepByStep: [
      { stepNumber: 1, title: 'Change "Who" to "By whom"', description: 'The interrogative pronoun "Who" converts to objective "By whom".', highlightWord: 'By whom' },
      { stepNumber: 2, title: 'Identify Tense & Be-Verb', description: '"wrote" is Past Simple, so Be-form is "was" (for singular subject).', highlightWord: 'was' },
      { stepNumber: 3, title: 'Apply Inversion (Aux Before Subject)', description: 'Place "was" BEFORE "Shah Jo Risalo" to keep it a valid question.', highlightWord: 'was Shah Jo Risalo' },
      { stepNumber: 4, title: 'Attach V3 Main Verb', description: '"wrote" (V2) transforms into "written" (V3) at the end.', highlightWord: 'written?' },
    ],
  },
  {
    id: 'preset-known-to',
    label: 'Non-"By" Preposition: Know -> Known to',
    categoryTag: 'Special Exception',
    activeSentence: 'All educators in Sindh know Sir Mehtab.',
    passiveSentence: 'Sir Mehtab is known TO all educators in Sindh.',
    subject: 'All educators in Sindh',
    verb: 'know',
    object: 'Sir Mehtab',
    ruleExplanation: 'The verb "know" NEVER takes "by" in passive voice; it strictly demands the preposition "TO".',
    stepByStep: [
      { stepNumber: 1, title: 'Move Object to Front', description: '"Sir Mehtab" becomes the new subject.', highlightWord: 'Sir Mehtab' },
      { stepNumber: 2, title: 'Insert Be-Auxiliary', description: 'Present Simple + Singular subject requires "is".', highlightWord: 'is' },
      { stepNumber: 3, title: 'Convert Verb to V3', description: '"know" transforms into "known".', highlightWord: 'known' },
      { stepNumber: 4, title: 'Apply Fixed Preposition "TO"', description: 'Replace "by" with "TO". Write "known TO all educators", never "known by".', highlightWord: 'TO all educators in Sindh' },
    ],
  },
  {
    id: 'preset-imperative-command',
    label: 'Imperative Command: Shut the door',
    categoryTag: 'Imperative Transformation',
    activeSentence: 'Switch off the electric generator immediately.',
    passiveSentence: 'Let the electric generator be switched off immediately.',
    subject: 'You (understood)',
    verb: 'Switch off',
    object: 'the electric generator',
    ruleExplanation: 'Imperative orders follow the formula: Let + Object + be + V3.',
    stepByStep: [
      { stepNumber: 1, title: 'Begin with "Let"', description: 'Commands without stated subject start with "Let".', highlightWord: 'Let' },
      { stepNumber: 2, title: 'Insert the Object', description: 'Place "the electric generator" directly after "Let".', highlightWord: 'the electric generator' },
      { stepNumber: 3, title: 'Add "be"', description: 'Insert the base be-verb "be".', highlightWord: 'be' },
      { stepNumber: 4, title: 'Convert to V3', description: '"switch off" transforms to "switched off".', highlightWord: 'switched off immediately' },
    ],
  },
  {
    id: 'preset-prepositional-verb',
    label: 'Prepositional Verb: Retaining "at"',
    categoryTag: 'Phrasal Verb Rule',
    activeSentence: 'The careless boys laughed at the poor pedestrian.',
    passiveSentence: 'The poor pedestrian was laughed AT by the careless boys.',
    subject: 'The careless boys',
    verb: 'laughed at',
    object: 'the poor pedestrian',
    ruleExplanation: 'The preposition "at" must not be dropped. It stays immediately attached to "laughed", followed by "by".',
    stepByStep: [
      { stepNumber: 1, title: 'Front the Object', description: '"The poor pedestrian" becomes the subject.', highlightWord: 'The poor pedestrian' },
      { stepNumber: 2, title: 'Insert Past Be-Verb', description: 'Past Simple singular takes "was".', highlightWord: 'was' },
      { stepNumber: 3, title: 'Retain the Preposition', description: 'Keep "laughed at" intact. Do NOT omit "at"!', highlightWord: 'laughed AT' },
      { stepNumber: 4, title: 'Add Agent with "by"', description: 'Attach "by the careless boys" directly following "at".', highlightWord: 'by the careless boys' },
    ],
  },
];

export interface VoiceQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  testedTopic: string;
  ruleExplanation: string;
}

export const STS_VOICE_DRILL: VoiceQuizQuestion[] = [
  {
    id: 'v-drill-1',
    question: 'What is the correct passive form of: "Who broke the laboratory thermometer?"',
    options: [
      'Who was broken the laboratory thermometer by?',
      'By whom was the laboratory thermometer broken?',
      'By whom the laboratory thermometer was broken?',
      'By who was the laboratory thermometer broken?',
    ],
    correctIndex: 1,
    testedTopic: 'Who-Interrogative Inversion Rule',
    ruleExplanation: '"Who" becomes "By whom", followed immediately by the auxiliary "was", subject "the laboratory thermometer", and V3 "broken". Option C is wrong because the auxiliary does not precede the subject.',
  },
  {
    id: 'v-drill-2',
    question: 'Transform to passive: "The headmistress is distributing the merit certificates."',
    options: [
      'The merit certificates are distributed by the headmistress.',
      'The merit certificates are being distributed by the headmistress.',
      'The merit certificates have been distributed by the headmistress.',
      'The merit certificates were being distributed by the headmistress.',
    ],
    correctIndex: 1,
    testedTopic: 'Present Continuous with "BEING"',
    ruleExplanation: 'Continuous tenses require "is/am/are + BEING + V3". Since "certificates" is plural, the correct form is "are being distributed".',
  },
  {
    id: 'v-drill-3',
    question: 'Convert into passive: "I know him very well."',
    options: [
      'He is known by me very well.',
      'He is known to me very well.',
      'He was known with me very well.',
      'He has been known by me very well.',
    ],
    correctIndex: 1,
    testedTopic: 'Non-"By" Preposition (Known TO)',
    ruleExplanation: 'The verb "know" takes the fixed preposition "TO", not "by". "He is known TO me very well" is the only correct answer.',
  },
  {
    id: 'v-drill-4',
    question: 'Change to passive: "Do not pluck flowers from the public park."',
    options: [
      'Let flowers not be plucked from the public park.',
      'Let flowers be not plucked from the public park.',
      'You are ordered to not pluck flowers from the public park.',
      'Flowers should not plucked from the public park.',
    ],
    correctIndex: 0,
    testedTopic: 'Negative Imperative (Let + Obj + NOT be + V3)',
    ruleExplanation: 'In negative imperatives, "not" sits before "be": "Let + Object + NOT be + V3" ("Let flowers not be plucked").',
  },
  {
    id: 'v-drill-5',
    question: 'Change into passive: "The audience listened to the speech attentively."',
    options: [
      'The speech was listened by the audience attentively.',
      'The speech was listened to by the audience attentively.',
      'The speech had been listened to by the audience.',
      'The speech was being listened to by the audience.',
    ],
    correctIndex: 1,
    testedTopic: 'Phrasal Verb Preposition Retention ("listened to by")',
    ruleExplanation: 'The preposition "to" belongs to the phrasal verb "listened to" and cannot be omitted. Both "to" and "by" must appear side-by-side ("listened to by").',
  },
  {
    id: 'v-drill-6',
    question: 'Convert to passive: "Quinine tastes bitter."',
    options: [
      'Quinine is tasted bitterly.',
      'Quinine is bitter when it is tasted.',
      'Quinine was tasted bitter.',
      'Bitter is tasted by quinine.',
    ],
    correctIndex: 1,
    testedTopic: 'Quasi-Passive / Sensory Verbs',
    ruleExplanation: 'Quasi-passive sensory verbs take the formula: "Subject + is [adjective] + when it is [V3]". Hence, "Quinine is bitter when it is tasted."',
  },
  {
    id: 'v-drill-7',
    question: 'Change to passive: "She has been writing a research paper since morning."',
    options: [
      'A research paper has been being written by her since morning.',
      'A research paper has been written by her since morning.',
      'A research paper is being written by her since morning.',
      'No passive voice form exists.',
    ],
    correctIndex: 3,
    testedTopic: 'Present Perfect Continuous Non-Transformability',
    ruleExplanation: 'Standard English does NOT convert Present Perfect Continuous, Past Perfect Continuous, Future Continuous, or Future Perfect Continuous into passive voice.',
  },
  {
    id: 'v-drill-8',
    question: 'Convert to passive: "We ought to obey our teachers."',
    options: [
      'Our teachers ought to obeyed by us.',
      'Our teachers ought to be obeyed by us.',
      'Our teachers should have obeyed by us.',
      'Our teachers must be obeyed to us.',
    ],
    correctIndex: 1,
    testedTopic: 'Modal Auxiliary Passive (Ought to be + V3)',
    ruleExplanation: 'Modals like can, could, may, might, must, should, ought to take "modal + be + V3" ("ought to be obeyed").',
  },
];

export const InteractiveVoiceExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vault' | 'converter' | 'matrix' | 'drill'>('vault');
  const [selectedRuleId, setSelectedRuleId] = useState<string>('v-pres-simple');
  const [categoryFilter, setCategoryFilter] = useState<'all' | VoiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Converter Preset State
  const [selectedPresetId, setSelectedPresetId] = useState<string>('preset-pres-simple');
  const [currentStep, setCurrentStep] = useState<number>(0);

  // Drill State
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showExplanations, setShowExplanations] = useState<Record<string, boolean>>({});

  const filteredRules = ALL_VOICE_RULES.filter((rule) => {
    const matchesCat = categoryFilter === 'all' || rule.category === categoryFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      rule.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.activeFormula.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.passiveFormula.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.activeExample.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.stsTrap.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesSearch;
  });

  const currentRule =
    ALL_VOICE_RULES.find((r) => r.id === selectedRuleId) || ALL_VOICE_RULES[0];
  const currentRuleIdx = ALL_VOICE_RULES.findIndex((r) => r.id === currentRule.id);

  const handleNextRule = () => {
    const nextIdx = (currentRuleIdx + 1) % ALL_VOICE_RULES.length;
    setSelectedRuleId(ALL_VOICE_RULES[nextIdx].id);
  };

  const handlePrevRule = () => {
    const prevIdx = (currentRuleIdx - 1 + ALL_VOICE_RULES.length) % ALL_VOICE_RULES.length;
    setSelectedRuleId(ALL_VOICE_RULES[prevIdx].id);
  };

  const selectedPreset =
    VOICE_CONVERTER_PRESETS.find((p) => p.id === selectedPresetId) ||
    VOICE_CONVERTER_PRESETS[0];

  const handleQuizAnswer = (qId: string, optIdx: number) => {
    setQuizAnswers((prev) => ({ ...prev, [qId]: optIdx }));
    setShowExplanations((prev) => ({ ...prev, [qId]: true }));
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setShowExplanations({});
  };

  const score = Object.entries(quizAnswers).filter(([qId, ans]) => {
    const q = STS_VOICE_DRILL.find((item) => item.id === qId);
    return q && q.correctIndex === ans;
  }).length;

  return (
    <div
      id="interactive-voice-studio"
      className="p-4 sm:p-6 rounded-3xl bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border border-indigo-800/60 shadow-2xl space-y-6 my-6 overflow-hidden relative"
    >
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-800/60 pb-5">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-black uppercase tracking-wider border border-indigo-400/30 flex items-center gap-1.5 shadow-xs">
              <Volume2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Module Notes 1.3 Interactive Studio</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[11px] font-bold border border-amber-400/30">
              STEDA &amp; Sukkur IBA Voice Mastery
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
            <span>Active &amp; Passive Voice Transformation Vault</span>
            <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
          </h3>
          <p className="text-xs sm:text-sm text-indigo-200/90 max-w-3xl leading-relaxed">
            Master the shift from <span className="text-emerald-300 font-bold">معروف (Active Voice)</span> to{' '}
            <span className="text-amber-300 font-bold">مجہول (Passive Voice)</span> across all 8 conjugable tenses,
            imperative commands, interrogatives with <em>&ldquo;Who / By whom&rdquo;</em>, and non-&ldquo;by&rdquo; prepositions
            (<em>known to, surprised at</em>).
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-950/80 p-1.5 rounded-2xl border border-indigo-800/60 self-start md:self-auto shrink-0 shadow-inner">
          <button
            onClick={() => setActiveTab('vault')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'vault'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-indigo-200 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Voice Vault ({ALL_VOICE_RULES.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('converter')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'converter'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-indigo-200 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>Step-by-Step Morph</span>
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
            <span>8-Tense Matrix</span>
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
            <span>STS Voice Drill</span>
          </button>
        </div>
      </div>

      {/* TAB 1: TRANSFORMATION VAULT (RULE-BY-RULE) */}
      {activeTab === 'vault' && (
        <div className="space-y-6">
          {/* Filters and Search Bar */}
          <div className="space-y-3 bg-slate-950/60 p-3.5 sm:p-4 rounded-2xl border border-indigo-900/60">
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
              {/* Category Pill Filters */}
              <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
                  <SlidersHorizontal className="w-3 h-3 text-indigo-400" /> Category:
                </span>
                {(['all', 'tenses', 'imperatives', 'interrogatives', 'special'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-3 py-1 rounded-xl text-xs font-extrabold capitalize transition cursor-pointer shrink-0 ${
                      categoryFilter === cat
                        ? 'bg-indigo-500 text-white shadow-xs'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {cat === 'all'
                      ? 'All Rules (24)'
                      : cat === 'tenses'
                      ? 'Tenses (12)'
                      : cat === 'imperatives'
                      ? 'Imperatives (4)'
                      : cat === 'interrogatives'
                      ? 'Questions (3)'
                      : 'Special (5)'}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search rule, verb, or trap..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-hidden focus:border-indigo-500 transition"
                />
              </div>
            </div>

            {/* Quick Rule Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 pt-2 border-t border-slate-800/80 max-h-48 overflow-y-auto pr-1">
              {filteredRules.map((rule) => {
                const isSelected = rule.id === currentRule.id;
                return (
                  <button
                    key={rule.id}
                    onClick={() => setSelectedRuleId(rule.id)}
                    className={`p-2 rounded-xl text-left transition cursor-pointer border flex flex-col gap-0.5 ${
                      isSelected
                        ? 'bg-indigo-900/80 border-indigo-400 text-white shadow-md'
                        : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-bold">
                      <span className="truncate">{rule.title.replace(/^\d+\.\s*/, '')}</span>
                      {rule.hasNoPassive ? (
                        <span className="text-[9px] uppercase px-1.5 py-0.2 rounded font-black tracking-wider bg-rose-500/20 text-rose-300">
                          NO PASSIVE
                        </span>
                      ) : (
                        <span className="text-[9px] uppercase px-1.5 py-0.2 rounded font-black tracking-wider bg-emerald-500/20 text-emerald-300">
                          {rule.category}
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate font-mono">
                      {rule.urduSindhi}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE RULE CARD */}
          <div className="bg-slate-900/90 rounded-3xl border border-indigo-800/70 p-5 sm:p-7 space-y-6 shadow-xl relative">
            {/* Header with Navigation */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-xl bg-indigo-500/20 text-indigo-300 text-xs font-black uppercase tracking-wider border border-indigo-400/30">
                    Rule {currentRule.order} of {ALL_VOICE_RULES.length}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold capitalize border border-slate-700">
                    Category: {currentRule.categoryLabel}
                  </span>
                  {currentRule.hasNoPassive && (
                    <span className="px-2.5 py-0.5 rounded-xl bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-500/30 flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3" />
                      <span>Zero Passive Voice Form</span>
                    </span>
                  )}
                </div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                  {currentRule.title}
                </h4>
                <div className="text-xs sm:text-sm font-semibold text-amber-300 font-mono">
                  سنڌي ۽ اردو اصطلاح: <span className="text-amber-200">{currentRule.urduSindhi}</span>
                </div>
              </div>

              {/* Prev / Next buttons */}
              <div className="flex items-center gap-2 self-end lg:self-center shrink-0">
                <button
                  onClick={handlePrevRule}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-indigo-600 text-white transition cursor-pointer border border-slate-700 flex items-center gap-1 text-xs font-bold"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Prev Rule</span>
                </button>
                <button
                  onClick={handleNextRule}
                  className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition cursor-pointer border border-indigo-400 flex items-center gap-1 text-xs font-bold shadow-md"
                >
                  <span className="hidden sm:inline">Next Rule</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Formula Juxtaposition Box */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
                <span>Active vs. Passive Syntactic Blueprint</span>
                <span className="text-amber-300 font-mono font-bold">Be-Auxiliary: {currentRule.beAuxiliary}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* ACTIVE VOICE FORMULA */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span>ACTIVE VOICE (معروف - Doer in Focus)</span>
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase font-mono">Original</span>
                  </div>
                  <div className="text-xs font-mono text-white bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    {currentRule.activeFormula}
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-xs text-emerald-200">
                    <span className="font-bold text-emerald-400">Active Example: </span>
                    &ldquo;{currentRule.activeExample}&rdquo;
                  </div>
                </div>

                {/* PASSIVE VOICE FORMULA */}
                <div className={`p-4 rounded-2xl border space-y-2 ${
                  currentRule.hasNoPassive
                    ? 'bg-rose-950/30 border-rose-800/60'
                    : 'bg-slate-950/70 border-slate-800'
                }`}>
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className={`flex items-center gap-1.5 ${currentRule.hasNoPassive ? 'text-rose-400' : 'text-indigo-400'}`}>
                      <span className={`w-2.5 h-2.5 rounded-full ${currentRule.hasNoPassive ? 'bg-rose-500' : 'bg-indigo-500'}`} />
                      <span>PASSIVE VOICE (مجہول - Receiver in Focus)</span>
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase font-mono">Transformed</span>
                  </div>
                  <div className={`text-xs font-mono p-3 rounded-xl border ${
                    currentRule.hasNoPassive
                      ? 'bg-rose-950/70 border-rose-700 text-rose-200 font-bold'
                      : 'bg-slate-900/80 border-slate-800 text-white'
                  }`}>
                    {currentRule.passiveFormula}
                  </div>
                  <div className={`p-2.5 rounded-xl text-xs border ${
                    currentRule.hasNoPassive
                      ? 'bg-rose-900/20 border-rose-800/50 text-rose-300 font-bold'
                      : 'bg-indigo-950/30 border-indigo-800/40 text-indigo-200'
                  }`}>
                    <span className="font-bold text-indigo-300">Passive Example: </span>
                    &ldquo;{currentRule.passiveExample}&rdquo;
                  </div>
                </div>
              </div>
            </div>

            {/* Explanation Note */}
            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1 text-xs">
              <span className="font-bold text-indigo-300 uppercase tracking-wider text-[10px]">Grammatical Rationale:</span>
              <p className="text-slate-300 leading-relaxed">{currentRule.explanation}</p>
            </div>

            {/* Sukkur IBA Exam Alert / Pitfall */}
            <div className="p-4 sm:p-5 rounded-2xl bg-rose-950/40 border border-rose-800/80 space-y-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-rose-300 uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>Sukkur IBA STS Exam Trap &amp; Distinction</span>
              </div>
              <p className="text-xs sm:text-sm text-rose-100 leading-relaxed font-medium">
                {currentRule.stsTrap}
              </p>
            </div>

            {/* Classroom Pedagogy Tip */}
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/40 border border-emerald-800/80 space-y-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-300 uppercase tracking-wider">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Sindh Secondary School (BPS-16/17) Teaching Methodology</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                {currentRule.pedagogyTip}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: STEP-BY-STEP MORPHING CONVERTER */}
      {activeTab === 'converter' && (
        <div className="space-y-6">
          {/* Preset Selector */}
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-indigo-900/60 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
                <ArrowLeftRight className="w-3.5 h-3.5" />
                <span>Select a Target Sentence to Dissect Step-by-Step:</span>
              </span>
              <span className="text-[11px] text-slate-400 font-semibold">Live Syntax Engine</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {VOICE_CONVERTER_PRESETS.map((p) => {
                const isSelected = p.id === selectedPreset.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      setSelectedPresetId(p.id);
                      setCurrentStep(0);
                    }}
                    className={`p-3 rounded-xl text-left border transition cursor-pointer space-y-1 ${
                      isSelected
                        ? 'bg-indigo-900/80 border-indigo-400 text-white shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800/80'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="truncate">{p.label}</span>
                    </div>
                    <div className="text-[10px] text-amber-400 uppercase font-mono">{p.categoryTag}</div>
                    <div className="text-[11px] text-slate-400 truncate italic pt-0.5">
                      &ldquo;{p.activeSentence}&rdquo;
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Preset Morphing Arena */}
          <div className="bg-slate-900/90 rounded-3xl border border-indigo-800/60 p-5 sm:p-7 space-y-6">
            {/* Top Side-by-Side Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-slate-800 pb-5">
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-emerald-800/60 space-y-2">
                <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-emerald-400">
                  <span>ACTIVE SENTENCE (معروف)</span>
                  <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded">INPUT</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-white leading-relaxed">
                  &ldquo;{selectedPreset.activeSentence}&rdquo;
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] font-mono pt-1">
                  <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    S: {selectedPreset.subject}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    V: {selectedPreset.verb}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    O: {selectedPreset.object}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/70 border border-indigo-800/60 space-y-2">
                <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-indigo-400">
                  <span>PASSIVE SENTENCE (مجہول)</span>
                  <span className="text-[10px] bg-indigo-500/20 px-2 py-0.5 rounded">OUTPUT</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-amber-300 leading-relaxed">
                  &ldquo;{selectedPreset.passiveSentence}&rdquo;
                </p>
                <div className="text-xs text-slate-300 pt-1 font-semibold leading-relaxed">
                  {selectedPreset.ruleExplanation}
                </div>
              </div>
            </div>

            {/* Step-by-Step Interactive Workflow */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>The 5-Phase Conversion Algorithm (Step {currentStep + 1} of {selectedPreset.stepByStep.length})</span>
                </h5>

                <div className="flex items-center gap-1.5">
                  {selectedPreset.stepByStep.map((_, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => setCurrentStep(sIdx)}
                      className={`w-6 h-6 rounded-full text-xs font-bold transition cursor-pointer flex items-center justify-center ${
                        currentStep === sIdx
                          ? 'bg-indigo-600 text-white shadow-md'
                          : sIdx < currentStep
                          ? 'bg-emerald-600/60 text-white'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {sIdx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Step Card */}
              {selectedPreset.stepByStep[currentStep] && (
                <div className="p-5 rounded-2xl bg-slate-950 border border-indigo-700/80 space-y-3 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                      <span>Step {selectedPreset.stepByStep[currentStep].stepNumber}: {selectedPreset.stepByStep[currentStep].title}</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[11px] font-mono">
                      Key Token: {selectedPreset.stepByStep[currentStep].highlightWord}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                    {selectedPreset.stepByStep[currentStep].description}
                  </p>

                  {/* Navigation within steps */}
                  <div className="flex justify-between items-center pt-2 border-t border-slate-800">
                    <button
                      disabled={currentStep === 0}
                      onClick={() => setCurrentStep((p) => Math.max(0, p - 1))}
                      className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
                    >
                      ◀ Previous Step
                    </button>

                    <button
                      disabled={currentStep === selectedPreset.stepByStep.length - 1}
                      onClick={() => setCurrentStep((p) => Math.min(selectedPreset.stepByStep.length - 1, p + 1))}
                      className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
                    >
                      Next Step ▶
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: 8-TENSE MASTER VOICE MATRIX */}
      {activeTab === 'matrix' && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-indigo-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h4 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-indigo-400" />
                <span>The 8-Tense Transformation Matrix vs. The 4 Non-Passive Tenses</span>
              </h4>
              <p className="text-xs text-slate-300">
                Only 8 of the 12 English tenses possess a legitimate passive voice. 4 tenses are strictly non-transformable.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30 shrink-0">
              Exam Benchmark Table
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-950 text-[11px] font-black uppercase tracking-wider text-indigo-300 border-b border-slate-800">
                  <th className="p-3 border-r border-slate-800 w-44">Tense Name</th>
                  <th className="p-3 border-r border-slate-800 text-emerald-400">Active Form (معروف)</th>
                  <th className="p-3 border-r border-slate-800 text-amber-400">Passive Be-Auxiliary + V3</th>
                  <th className="p-3 text-indigo-300">Sukkur IBA Exam Model</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-xs">
                {/* 1. Present Simple */}
                <tr className="hover:bg-slate-800/40 transition">
                  <td className="p-3 font-bold text-slate-200 border-r border-slate-800 bg-slate-950/40">
                    Present Simple
                  </td>
                  <td className="p-3 border-r border-slate-800 font-mono text-emerald-300">writes / write</td>
                  <td className="p-3 border-r border-slate-800 font-mono text-amber-300 font-bold">is / am / are + written</td>
                  <td className="p-3 text-slate-300 italic">&ldquo;A letter is written by him.&rdquo;</td>
                </tr>

                {/* 2. Present Continuous */}
                <tr className="hover:bg-slate-800/40 transition">
                  <td className="p-3 font-bold text-slate-200 border-r border-slate-800 bg-slate-950/40">
                    Present Continuous
                  </td>
                  <td className="p-3 border-r border-slate-800 font-mono text-emerald-300">is/am/are + writing</td>
                  <td className="p-3 border-r border-slate-800 font-mono text-amber-300 font-bold">is/am/are + BEING + written</td>
                  <td className="p-3 text-slate-300 italic">&ldquo;A letter is being written by him.&rdquo;</td>
                </tr>

                {/* 3. Present Perfect */}
                <tr className="hover:bg-slate-800/40 transition">
                  <td className="p-3 font-bold text-slate-200 border-r border-slate-800 bg-slate-950/40">
                    Present Perfect
                  </td>
                  <td className="p-3 border-r border-slate-800 font-mono text-emerald-300">has / have + written</td>
                  <td className="p-3 border-r border-slate-800 font-mono text-amber-300 font-bold">has/have + BEEN + written</td>
                  <td className="p-3 text-slate-300 italic">&ldquo;A letter has been written by him.&rdquo;</td>
                </tr>

                {/* 4. Present Perfect Continuous (RED) */}
                <tr className="bg-rose-950/30 text-rose-200 border-t border-b border-rose-900/60 font-semibold">
                  <td className="p-3 border-r border-slate-800 font-bold">
                    Present Perfect Continuous
                  </td>
                  <td className="p-3 border-r border-slate-800 font-mono">has/have been + writing</td>
                  <td className="p-3 border-r border-slate-800 font-black text-rose-400">NO PASSIVE VOICE</td>
                  <td className="p-3 italic text-rose-300">Option D: &ldquo;No passive voice&rdquo;</td>
                </tr>

                {/* 5. Past Simple */}
                <tr className="hover:bg-slate-800/40 transition">
                  <td className="p-3 font-bold text-slate-200 border-r border-slate-800 bg-slate-950/40">
                    Past Simple
                  </td>
                  <td className="p-3 border-r border-slate-800 font-mono text-emerald-300">wrote</td>
                  <td className="p-3 border-r border-slate-800 font-mono text-amber-300 font-bold">was / were + written</td>
                  <td className="p-3 text-slate-300 italic">&ldquo;A letter was written by him.&rdquo;</td>
                </tr>

                {/* 6. Past Continuous */}
                <tr className="hover:bg-slate-800/40 transition">
                  <td className="p-3 font-bold text-slate-200 border-r border-slate-800 bg-slate-950/40">
                    Past Continuous
                  </td>
                  <td className="p-3 border-r border-slate-800 font-mono text-emerald-300">was/were + writing</td>
                  <td className="p-3 border-r border-slate-800 font-mono text-amber-300 font-bold">was/were + BEING + written</td>
                  <td className="p-3 text-slate-300 italic">&ldquo;A letter was being written by him.&rdquo;</td>
                </tr>

                {/* 7. Past Perfect */}
                <tr className="hover:bg-slate-800/40 transition">
                  <td className="p-3 font-bold text-slate-200 border-r border-slate-800 bg-slate-950/40">
                    Past Perfect
                  </td>
                  <td className="p-3 border-r border-slate-800 font-mono text-emerald-300">had + written</td>
                  <td className="p-3 border-r border-slate-800 font-mono text-amber-300 font-bold">had + BEEN + written</td>
                  <td className="p-3 text-slate-300 italic">&ldquo;A letter had been written by him.&rdquo;</td>
                </tr>

                {/* 8. Past Perfect Continuous (RED) */}
                <tr className="bg-rose-950/30 text-rose-200 border-t border-b border-rose-900/60 font-semibold">
                  <td className="p-3 border-r border-slate-800 font-bold">
                    Past Perfect Continuous
                  </td>
                  <td className="p-3 border-r border-slate-800 font-mono">had been + writing</td>
                  <td className="p-3 border-r border-slate-800 font-black text-rose-400">NO PASSIVE VOICE</td>
                  <td className="p-3 italic text-rose-300">Cannot be transformed</td>
                </tr>

                {/* 9. Future Simple */}
                <tr className="hover:bg-slate-800/40 transition">
                  <td className="p-3 font-bold text-slate-200 border-r border-slate-800 bg-slate-950/40">
                    Future Simple
                  </td>
                  <td className="p-3 border-r border-slate-800 font-mono text-emerald-300">will / shall + write</td>
                  <td className="p-3 border-r border-slate-800 font-mono text-amber-300 font-bold">will/shall + BE + written</td>
                  <td className="p-3 text-slate-300 italic">&ldquo;A letter will be written by him.&rdquo;</td>
                </tr>

                {/* 10. Future Continuous (RED) */}
                <tr className="bg-rose-950/30 text-rose-200 border-t border-b border-rose-900/60 font-semibold">
                  <td className="p-3 border-r border-slate-800 font-bold">
                    Future Continuous
                  </td>
                  <td className="p-3 border-r border-slate-800 font-mono">will be + writing</td>
                  <td className="p-3 border-r border-slate-800 font-black text-rose-400">NO PASSIVE VOICE</td>
                  <td className="p-3 italic text-rose-300">Frequent STS trap question</td>
                </tr>

                {/* 11. Future Perfect */}
                <tr className="hover:bg-slate-800/40 transition">
                  <td className="p-3 font-bold text-slate-200 border-r border-slate-800 bg-slate-950/40">
                    Future Perfect
                  </td>
                  <td className="p-3 border-r border-slate-800 font-mono text-emerald-300">will have + written</td>
                  <td className="p-3 border-r border-slate-800 font-mono text-amber-300 font-bold">will have + BEEN + written</td>
                  <td className="p-3 text-slate-300 italic">&ldquo;A letter will have been written.&rdquo;</td>
                </tr>

                {/* 12. Future Perfect Continuous (RED) */}
                <tr className="bg-rose-950/30 text-rose-200 border-t border-b border-rose-900/60 font-semibold">
                  <td className="p-3 border-r border-slate-800 font-bold">
                    Future Perfect Continuous
                  </td>
                  <td className="p-3 border-r border-slate-800 font-mono">will have been + writing</td>
                  <td className="p-3 border-r border-slate-800 font-black text-rose-400">NO PASSIVE VOICE</td>
                  <td className="p-3 italic text-rose-300">No passive transformation exists</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: STS & STEDA EXAM VOICE DRILL */}
      {activeTab === 'drill' && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>STS &amp; STEDA Exam Simulator</span>
              </span>
              <h4 className="text-base sm:text-lg font-black text-white">
                Active &amp; Passive Voice Diagnostic Drill (8 Questions)
              </h4>
              <p className="text-xs text-amber-200/90">
                Exam questions extracted directly from past Sindh Teaching License (HST / JEST / PST) grammar papers.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-amber-500/40 text-center">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Your Score</div>
                <div className="text-base font-black text-amber-400">
                  {score} / {STS_VOICE_DRILL.length}
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
            {STS_VOICE_DRILL.map((q, idx) => {
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
                        {q.testedTopic}
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
                  <div className="space-y-1.5">
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
                          onClick={() => handleQuizAnswer(q.id, oIdx)}
                          className={`w-full p-2.5 rounded-xl text-xs text-left border transition cursor-pointer flex items-center gap-2.5 ${btnStyle}`}
                        >
                          <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px] font-bold shrink-0">
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span className="leading-snug">{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  {showExplanations[q.id] && (
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
