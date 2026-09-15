export type RecallGrade = 0 | 1 | 2 | 3 | 4 | 5;

export interface SrsCard {
  questionId: string;
  topic: string;
  repetitions: number;
  intervalDays: number;
  easeFactor: number;
  dueAt: string;
  lastGrade: RecallGrade;
}

export interface AnswerEvent {
  questionId: string;
  topic: string;
  firstAnswer: number;
  finalAnswer: number;
  correctAnswer: number;
  timeSpentSeconds: number;
  changedAnswer: boolean;
}

export interface CognitiveInsight {
  id: 'second-guessing' | 'rushing' | 'time-drain' | 'steady';
  title: string;
  detail: string;
  severity: 'good' | 'watch' | 'risk';
}

export const scheduleReview = (card: SrsCard, grade: RecallGrade, now = new Date()): SrsCard => {
  const passed = grade >= 3;
  const repetitions = passed ? card.repetitions + 1 : 0;
  const intervalDays = !passed
    ? 1
    : repetitions === 1
      ? 1
      : repetitions === 2
        ? 6
        : Math.max(1, Math.round(card.intervalDays * card.easeFactor));
  const easeFactor = Math.max(1.3, card.easeFactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02)));
  const due = new Date(now);
  due.setDate(due.getDate() + intervalDays);
  return { ...card, repetitions, intervalDays, easeFactor, dueAt: due.toISOString(), lastGrade: grade };
};

export const analyseAnswerHabits = (events: AnswerEvent[]): CognitiveInsight[] => {
  if (!events.length) return [{ id: 'steady', title: 'Complete a quiz to unlock insights', detail: 'Timing and answer-change patterns will appear here.', severity: 'good' }];
  const changedCorrectToWrong = events.filter((event) => event.changedAnswer && event.firstAnswer === event.correctAnswer && event.finalAnswer !== event.correctAnswer).length;
  const rushed = events.filter((event) => event.timeSpentSeconds < 12).length;
  const timeDrains = events.filter((event) => event.timeSpentSeconds > 72).length;
  const insights: CognitiveInsight[] = [];
  if (changedCorrectToWrong) insights.push({ id: 'second-guessing', title: 'Second-guessing detected', detail: `${changedCorrectToWrong} initially correct answer${changedCorrectToWrong > 1 ? 's were' : ' was'} changed to a distractor. Recheck only when you can name a clear rule.`, severity: 'risk' });
  if (rushed) insights.push({ id: 'rushing', title: 'Fast-reading risk', detail: `${rushed} question${rushed > 1 ? 's were' : ' was'} answered in under 12 seconds. Slow down for qualifiers such as “not” and “except”.`, severity: rushed / events.length > 0.3 ? 'risk' : 'watch' });
  if (timeDrains) insights.push({ id: 'time-drain', title: 'Time-drain questions', detail: `${timeDrains} question${timeDrains > 1 ? 's took' : ' took'} over 1.2 minutes. Mark, move on, and return after securing quick marks.`, severity: 'watch' });
  if (!insights.length) insights.push({ id: 'steady', title: 'Decision pattern is steady', detail: 'No major rushing, time-drain, or second-guessing pattern was detected.', severity: 'good' });
  return insights;
};

export const dueCards = (cards: SrsCard[], now = new Date()) => cards
  .filter((card) => new Date(card.dueAt).getTime() <= now.getTime())
  .sort((a, b) => new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime());

