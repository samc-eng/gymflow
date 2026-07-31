import type { Exercise, WorkoutSet } from "@/types/workout";
import SetRow from "@/components/SetRow";
import AddSetForm from "@/components/AddSetForm";

type ExerciseBlockProps = {
  exercise: Exercise;
  onAddSet: (exerciseId: string, newSet: WorkoutSet) => void;
};

export default function ExerciseBlock({ exercise, onAddSet }: ExerciseBlockProps) {
  return (
    <article>
      <h2>{exercise.name}</h2>

      {exercise.machine && (
        <p>
          {exercise.machine.name} · poulie ×{exercise.machine.pulleyFactor}
        </p>
      )}

      <ol>
        {exercise.sets.map((set, index) => (
          <SetRow
            key={set.id}
            index={index}
            set={set}
            machine={exercise.machine}
          />
        ))}
      </ol>

      <AddSetForm onAdd={(newSet) => onAddSet(exercise.id, newSet)} />
    </article>
  );
}