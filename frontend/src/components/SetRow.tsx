import type { Machine, WorkoutSet } from "@/types/workout";
import type { WeightUnit } from "@/types/settings";
import { getRealWeight, fromKg } from "@/lib/weight";

type SetRowProps = {
  index: number;
  set: WorkoutSet;
  machine: Machine | null;
  weightUnit: WeightUnit;
};

function formatWeight(kg: number, unit: WeightUnit): string {
  const value = Math.round(fromKg(kg, unit) * 10) / 10;
  return `${value} ${unit}`;
}

export default function SetRow({ index, set, machine, weightUnit }: SetRowProps) {
  const realWeight = getRealWeight(set.displayedWeight, machine);
  const hasPulley = realWeight !== set.displayedWeight;

  return (
    <li>
      {index + 1}. {set.reps} reps × {formatWeight(set.displayedWeight, weightUnit)}
      {hasPulley && <em> (soit {formatWeight(realWeight, weightUnit)} réels)</em>} — RPE {set.rpe}
    </li>
  );
}
