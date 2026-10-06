import type { Exercise, WorkoutSet } from "@/types/workout";
import type { WeightUnit } from "@/types/settings";
import ExerciseView from "@/components/ExerciseView";
import AddSetForm from "@/components/AddSetForm";

type ExerciseBlockProps = {
  exercise: Exercise;
  weightUnit: WeightUnit;
  onAddSet: (exerciseId: string, newSet: WorkoutSet) => void;
};

export default function ExerciseBlock({ exercise, weightUnit, onAddSet }: ExerciseBlockProps) {
  return (
    <article>
      <ExerciseView exercise={exercise} weightUnit={weightUnit} />
      <AddSetForm weightUnit={weightUnit} onAdd={(newSet) => onAddSet(exercise.id, newSet)} />    </article>
  );
}
