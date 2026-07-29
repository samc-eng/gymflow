"use client";

import { useState } from "react";
import styles from "./ExerciseCard.module.css";

type ExerciseCardProps = {
  name: string;
  sets: number;
  reps: number;
  weight: number;
};

export default function ExerciseCard({ name, sets, reps, weight }: ExerciseCardProps) {
  const [done, setDone] = useState(0);

  return (
    <article className={styles.card}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.details}>{sets} séries × {reps} reps — {weight} kg</p>
      <p>{done} / {sets} séries faites</p>
      <button onClick={() => setDone(done + 1)} disabled={done >= sets}>
        Série faite
      </button>
    </article>
  );
}