import type { Workout } from "@/types/workout";

const DRAFT_KEY = "gymflow:draft";
const HISTORY_KEY = "gymflow:history";

type StoredWorkout = Omit<Workout, "startedAt"> & { startedAt: string };

function reviveWorkout(stored: StoredWorkout): Workout {
  return { ...stored, startedAt: new Date(stored.startedAt) };
}

export function saveDraft(workout: Workout): void {
  localStorage.setItem(DRAFT_KEY, JSON.stringify(workout));
}

export function loadDraft(): Workout | null {
  const raw = localStorage.getItem(DRAFT_KEY);
  return raw ? reviveWorkout(JSON.parse(raw)) : null;
}

export function clearDraft(): void {
  localStorage.removeItem(DRAFT_KEY);
}

export function loadHistory(): Workout[] {
  const raw = localStorage.getItem(HISTORY_KEY);
  return raw ? JSON.parse(raw).map(reviveWorkout) : [];
}

export function archiveWorkout(workout: Workout): void {
  const history = loadHistory();
  localStorage.setItem(HISTORY_KEY, JSON.stringify([...history, workout]));
  clearDraft();
}