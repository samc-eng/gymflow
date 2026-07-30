import { mockWorkout } from "@/lib/mock-workout";
import ExerciseBlock from "@/components/ExerciseBlock";
import WorkoutFeeling from "@/components/WorkoutFeeling";


export default function NewWorkoutPage() {
  const workout = mockWorkout;

  return (
    <main>
      <h1>{workout.name}</h1>

      <WorkoutFeeling energy={workout.energy} sleep={workout.sleep} />

      {workout.exercises.map((exercise) => (
        <ExerciseBlock key={exercise.id} exercise={exercise} />
      ))}

      <button>Terminer la séance</button>
    </main>
  );
}