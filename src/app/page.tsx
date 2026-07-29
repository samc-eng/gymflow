import ExerciseCard from "@/components/ExerciseCard";

const exercises = [
  { id: 1, name: "Développé couché", sets: 4, reps: 8, weight: 60 },
  { id: 2, name: "Tractions", sets: 3, reps: 10, weight: 0 },
  { id: 3, name: "Squat", sets: 5, reps: 5, weight: 80 },
];

export default function Home() {
  return (
    <main>
      <h1>Ma séance</h1>
      {exercises.map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          name={exercise.name}
          sets={exercise.sets}
          reps={exercise.reps}
          weight={exercise.weight}
        />
      ))}
    </main>
  );
}
