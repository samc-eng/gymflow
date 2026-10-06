"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { loadHistory, loadDraft } from "@/lib/workout-storage";
import WorkoutCard from "@/components/WorkoutCard";
import type { Workout } from "@/types/workout";

export default function Home() {
  const [draft, setDraft] = useState<Workout | null>(null);
  const [history, setHistory] = useState<Workout[]>([]);

  useEffect(() => {
    setDraft(loadDraft());
    setHistory(loadHistory());
  }, []);

    return (
    <main>
      <h1>Accueil</h1>

      {draft && (
        <section>
          <h2>Séance en cours</h2>
          <p>{draft.name}</p>
          <Link href="/workouts/new">Reprendre</Link>
        </section>
      )}

      <h2>Dernières séances</h2>

      {history.length === 0 ? (
        <p>Aucune séance enregistrée pour le moment.</p>
      ) : (
        history
          .slice(-3)
          .reverse()
          .map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))
      )}
    </main>
  );
}
