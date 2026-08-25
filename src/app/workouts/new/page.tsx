"use client";

import { useState, useEffect } from "react";
import { createWorkout } from "@/lib/workout";
import { saveDraft, loadDraft, archiveWorkout } from "@/lib/workout-storage";
import ExerciseBlock from "@/components/ExerciseBlock";
import WorkoutFeeling from "@/components/WorkoutFeeling";
import AddExerciseForm from "@/components/AddExerciseForm";
import FinishWorkoutDialog from "@/components/FinishWorkoutDialog";
import type { Exercise, Workout, WorkoutSet } from "@/types/workout";

export default function NewWorkoutPage() {
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [isFinishing, setIsFinishing] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const draft = loadDraft();
    if (draft) setWorkout(draft);
  }, []);

  useEffect(() => {
    if (workout) saveDraft(workout);
  }, [workout]);

  function startWorkout() {
    if (name.trim() === "") return;
    setWorkout(createWorkout(name));
  }

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
    setName("");
  }

  if (!workout) {
    return (
      <main>
        <h1>Nouvelle séance</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="nom de la séance"
        />
        <button onClick={startWorkout}>Commencer</button>
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