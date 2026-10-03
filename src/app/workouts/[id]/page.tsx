"use client";

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import { loadWorkout } from "@/lib/workout-storage";
import type { Workout } from "@/types/workout";
import ExerciseView from "@/components/ExerciseView";

export default function WorkoutDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [workout, setWorkout] = useState<Workout | null | undefined>(undefined);

  useEffect(() => {
    setWorkout(loadWorkout(id));
  }, [id]);

  if (workout === undefined) {
    return (
      <main>
        <p>Chargement…</p>
      </main>
    );
  }

  if (workout === null) {
    notFound();
  }

  return (
    <main>
      <h1>{workout.name}</h1>
      <p>
        {workout.startedAt.toLocaleDateString("fr-FR", {
          weekday: "long",
          day: "numeric",
          month: "long",
        })}
      </p>

      <p>Sommeil : {workout.sleep}</p>
      <p>
        Énergie : {workout.energyBefore} → {workout.energyAfter ?? "—"}
      </p>

      {workout.exercises.map((exercise) => (
      <article key={exercise.id}>
        <ExerciseView exercise={exercise} />
      </article>
    ))}
    </main>
  );
}
