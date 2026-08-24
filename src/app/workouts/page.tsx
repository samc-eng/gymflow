"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { loadHistory } from "@/lib/workout-storage";
import WorkoutCard from "@/components/WorkoutCard";
import type { Workout } from "@/types/workout";

export default function WorkoutsPage() {
  const [history, setHistory] = useState<Workout[]>([]);

  useEffect(() => {
    setHistory(loadHistory());
  }, []);

  return (
    <main>
      <h1>Historique</h1>

      {history.length === 0 ? (
        <p>
          Aucune séance enregistrée.{" "}
          <Link href="/workouts/new">Commencer une séance</Link>
        </p>
      ) : (
        history.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))
      )}
    </main>
  );
}