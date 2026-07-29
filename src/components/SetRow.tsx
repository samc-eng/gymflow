import type { Machine, WorkoutSet } from "@/types/workout";
import { getRealWeight } from "@/lib/weight";

type SetRowProps = {
  index: number;
  set: WorkoutSet;
  machine: Machine | null;
};

export default function SetRow({ index, set, machine }: SetRowProps) {
  const realWeight = getRealWeight(set.displayedWeight, machine);
  const hasPulley = realWeight !== set.displayedWeight;

  return (
    <li>
      {index + 1}. {set.reps} reps × {set.displayedWeight} kg
      {hasPulley && <em> (soit {realWeight} kg réels)</em>} — RPE {set.rpe}
    </li>
  );
}