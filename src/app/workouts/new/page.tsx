"use client";

import { useState } from "react";
import { mockWorkout } from "@/lib/mock-workout";
import ExerciseBlock from "@/components/ExerciseBlock";
import WorkoutFeeling from "@/components/WorkoutFeeling";
import type { WorkoutSet } from "@/types/workout";

export default function NewWorkoutPage() {
  const [workout, setWorkout] = useState(mockWorkout);

  function addSet(exerciseId: string, newSet: WorkoutSet) {
    setWorkout({
      ...workout,
      exercises: workout.exercises.map((exercise) =>
        exercise.id === exerciseId
          ? { ...exercise, sets: [...exercise.sets, newSet] }
          : exercise
      ),
    });
  }

  return (
    <main>
      <h1>{workout.name}</h1>

      <WorkoutFeeling energy={workout.energy} sleep={workout.sleep} />

      {workout.exercises.map((exercise) => (
        <ExerciseBlock key={exercise.id} exercise={exercise} onAddSet={addSet} />
      ))}

      <button>Terminer la séance</button>
    </main>
  );
}