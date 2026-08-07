import type { Workout } from "@/types/workout";

const DRAFT_KEY = "gymflow:draft";
const HISTORY_KEY = "gymflow:history";

function parseWorkout(raw: string): Workout {
  const workout = JSON.parse(raw);
  return { ...workout, startedAt: new Date(workout.startedAt) };
}

export function saveDraft(workout: Workout): void {
  localStorage.setItem(DRAFT_KEY, JSON.stringify(workout));
}

export function loadDraft(): Workout | null {
  const raw = localStorage.getItem(DRAFT_KEY);
  return raw ? parseWorkout(raw) : null;
}

export function clearDraft(): void {
  localStorage.removeItem(DRAFT_KEY);
}

export function loadHistory(): Workout[] {
  const raw = localStorage.getItem(HISTORY_KEY);
  return raw ? JSON.parse(raw).map(parseWorkout) : [];
}

export function archiveWorkout(workout: Workout): void {
  const history = loadHistory();
  localStorage.setItem(HISTORY_KEY, JSON.stringify([...history, workout]));
  clearDraft();
}