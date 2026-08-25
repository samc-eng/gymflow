import type { Workout } from "@/types/workout";

export function createWorkout(name: string): Workout {
  return {
    id: crypto.randomUUID(),
    name,
    startedAt: new Date(),
    energyBefore: 3,
    sleep: 3,
    energyAfter: null,
    exercises: [],
  };
}