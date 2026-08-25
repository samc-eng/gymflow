"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { saveDraft, loadDraft, archiveWorkout } from "@/lib/workout-storage";
import ExerciseBlock from "@/components/ExerciseBlock";
import WorkoutFeeling from "@/components/WorkoutFeeling";
import AddExerciseForm from "@/components/AddExerciseForm";
import FinishWorkoutDialog from "@/components/FinishWorkoutDialog";
import type { Exercise, Workout, WorkoutSet } from "@/types/workout";

export default function NewWorkoutPage() {
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [isFinishing, setIsFinishing] = useState(false);

  useEffect(() => {
    const draft = loadDraft();
    if (draft) setWorkout(draft);
  }, []);

  useEffect(() => {
    if (workout) saveDraft(workout);
  }, [workout]);

  function addSet(exerciseId: string, newSet: WorkoutSet) {
    if (!workout) return;
    setWorkout({
      ...workout,
      exercises: workout.exercises.map((exercise) =>
        exercise.id === exerciseId
          ? { ...exercise, sets: [...exercise.sets, newSet] }
          : exercise
      ),
    });
  }

  function addExercise(exerciseName: string) {
    if (!workout) return;
    const newExercise: Exercise = {
      id: crypto.randomUUID(),
      name: exerciseName,
      machine: null,
      sets: [],
    };
    setWorkout({
      ...workout,
      exercises: [...workout.exercises, newExercise],
    });
  }

  function finishWorkout(energyAfter: number) {
    if (!workout) return;
    archiveWorkout({ ...workout, energyAfter });
    setIsFinishing(false);
    setWorkout(null);
  }

  if (!workout) {
    return (
      <main>
        <p>Aucune séance en cours.</p>
        <p>Utilise le bouton + pour en démarrer une.</p>
        <Link href="/workouts">Voir l&apos;historique</Link>
      </main>
    );
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
