import { QuizAttempt } from '../types';

export interface QuizScoreValidationResult {
  isValid: boolean;
  sanitizedScore: number;
  error?: string;
}

/**
 * Validates a quiz attempt to ensure impossible scores are strictly prevented.
 * Prevents:
 * 1. Score > Total questions (e.g. 15 / 10)
 * 2. Negative scores (e.g. -5 / 10)
 * 3. Total questions <= 0
 * 4. NaN / non-numeric inputs
 * 5. Negative time spent
 * 6. Percentage exceeding 100% or below 0%
 */
export function validateQuizAttempt(
  attempt: Partial<QuizAttempt>,
  actualTotalQuestions: number
): QuizScoreValidationResult {
  if (!attempt) {
    return {
      isValid: false,
      sanitizedScore: 0,
      error: 'Submission payload is empty.',
    };
  }

  const rawScore = Number(attempt.score);
  const total = Number(attempt.totalQuestions || actualTotalQuestions);

  if (isNaN(rawScore) || isNaN(total)) {
    return {
      isValid: false,
      sanitizedScore: 0,
      error: 'Score and total questions must be valid numbers.',
    };
  }

  if (total <= 0) {
    return {
      isValid: false,
      sanitizedScore: 0,
      error: 'Total questions must be greater than zero.',
    };
  }

  if (rawScore < 0) {
    return {
      isValid: false,
      sanitizedScore: 0,
      error: 'Quiz score cannot be negative.',
    };
  }

  if (rawScore > total) {
    return {
      isValid: false,
      sanitizedScore: 0,
      error: `Impossible quiz score: ${rawScore} exceeds total questions (${total}).`,
    };
  }

  if (
    attempt.timeSpentSeconds !== undefined &&
    (isNaN(Number(attempt.timeSpentSeconds)) || Number(attempt.timeSpentSeconds) < 0)
  ) {
    return {
      isValid: false,
      sanitizedScore: 0,
      error: 'Elapsed test duration cannot be negative.',
    };
  }

  return {
    isValid: true,
    sanitizedScore: Math.round(rawScore * 100) / 100,
  };
}
