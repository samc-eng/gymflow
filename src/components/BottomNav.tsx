"use client";

import { useState } from "react";
import Link from "next/link";
import StartWorkoutDialog from "@/components/StartWorkoutDialog";
import styles from "./BottomNav.module.css";

export default function BottomNav() {
  const [isStarting, setIsStarting] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <Link className={styles.link} href="/">Accueil</Link>
        <Link className={styles.link} href="/workouts">Historique</Link>

        <button className={styles.link} onClick={() => setIsStarting(true)}>
          +
        </button>

        <Link className={styles.link} href="/progress">Progression</Link>
        <Link className={styles.link} href="/profile">Profil</Link>
      </nav>

      {isStarting && (
        <StartWorkoutDialog onClose={() => setIsStarting(false)} />
      )}
    </>
  );
}
