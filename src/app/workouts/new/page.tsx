import { mockWorkout } from "@/lib/mock-workout";
import ExerciseBlock from "@/components/ExerciseBlock";

export default function NewWorkoutPage() {
  const workout = mockWorkout;

  return (
    <main>
      <h1>{workout.name}</h1>

      <section>
        <p>Énergie : {workout.energy} / 5</p>
        <p>Sommeil : {workout.sleep} / 5</p>
      </section>

      {workout.exercises.map((exercise) => (
        <ExerciseBlock key={exercise.id} exercise={exercise} />
      ))}

      <button>Terminer la séance</button>
    </main>
  );
}