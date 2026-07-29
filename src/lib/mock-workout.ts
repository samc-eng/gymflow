import type { Workout } from "@/types/workout";

export const mockWorkout: Workout = {
  id: "w1",
  name: "Push A",
  startedAt: new Date("2026-07-29T18:30:00"),
  energy: 3,
  sleep: 4,
  exercises: [
    {
      id: "e1",
      name: "Développé couché",
      machine: { id: "m1", name: "Chest Press Basic Fit", pulleyFactor: 2 },
      sets: [
        { id: "s1", reps: 8, displayedWeight: 30, rpe: 7 },
        { id: "s2", reps: 8, displayedWeight: 30, rpe: 8 },
      ],
    },
    {
      id: "e2",
      name: "Tractions",
      machine: null,
      sets: [{ id: "s3", reps: 10, displayedWeight: 0, rpe: 9 }],
    },
  ],
};