export type PulleyFactor = 1 | 2 | 4;

export type Machine = {
  id: string;
  name: string;
  pulleyFactor: PulleyFactor;
};

export type WorkoutSet = {
  id: string;
  reps: number;
  displayedWeight: number;
  rpe: number;
};

export type Exercise = {
  id: string;
  name: string;
  machine: Machine | null;
  sets: WorkoutSet[];
};

export type Workout = {
  id: string;
  name: string;
  startedAt: Date;
  energyBefore: number;
  energyAfter : number | null;
  sleep: number;
  exercises: Exercise[];
};