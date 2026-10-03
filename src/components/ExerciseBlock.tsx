import type { Exercise, WorkoutSet } from "@/types/workout";
import ExerciseView from "@/components/ExerciseView";
import AddSetForm from "@/components/AddSetForm";

type ExerciseBlockProps = {
  exercise: Exercise;
  onAddSet: (exerciseId: string, newSet: WorkoutSet) => void;
};

export default function ExerciseBlock({ exercise, onAddSet }: ExerciseBlockProps) {
  return (
    <article>
      <ExerciseView exercise={exercise} />
      <AddSetForm onAdd={(newSet) => onAddSet(exercise.id, newSet)} />
    </article>
  );
}
