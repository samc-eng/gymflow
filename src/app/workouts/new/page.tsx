"use client";

import { useState, useEffect } from "react";
import { mockWorkout } from "@/lib/mock-workout";
import { saveDraft, loadDraft, archiveWorkout } from "@/lib/workout-storage";
import ExerciseBlock from "@/components/ExerciseBlock";
import WorkoutFeeling from "@/components/WorkoutFeeling";
import AddExerciseForm from "@/components/AddExerciseForm";
import FinishWorkoutDialog from "@/components/FinishWorkoutDialog";
import type { Exercise, WorkoutSet } from "@/types/workout";

export default function NewWorkoutPage() {
  const [workout, setWorkout] = useState(mockWorkout);
  const [isFinishing, setIsFinishing] = useState(false);

  useEffect(() => {
    const draft = loadDraft();
    if (draft) setWorkout(draft);
  }, []);

  useEffect(() => {
    saveDraft(workout);
  }, [workout]);

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

  function addExercise(name: string) {
    const newExercise: Exercise = {
      id: crypto.randomUUID(),
      name: name,
      machine: null,
      sets: [],
    };

    setWorkout({
      ...workout,
      exercises: [...workout.exercises, newExercise],
    });
  }

  function finishWorkout(energyAfter: number) {
    archiveWorkout({ ...workout, energyAfter: energyAfter });
    setIsFinishing(false);
  }

  return (
    <main>
      <h1>{workout.name}</h1>

      <WorkoutFeeling energy={workout.energyBefore} sleep={workout.sleep} />

      {workout.exercises.map((exercise) => (
        <ExerciseBlock key={exercise.id} exercise={exercise} onAddSet={addSet} />
      ))}

      <AddExerciseForm onAdd={addExercise} />

      <button onClick={() => setIsFinishing(true)}>Terminer la séance</button>

      {isFinishing && (
        <FinishWorkoutDialog
          onConfirm={finishWorkout}
          onCancel={() => setIsFinishing(false)}
        />
      )}
    </main>
  );
}