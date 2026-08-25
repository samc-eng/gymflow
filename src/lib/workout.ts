import type { Workout } from "@/types/workout";

export function createWorkout(
  name: string,
  energyBefore: number,
  sleep: number
): Workout {
  return {
    id: crypto.randomUUID(),
    name,
    startedAt: new Date(),
    energyBefore,
    sleep,
    energyAfter: null,
    exercises: [],
  };
}
