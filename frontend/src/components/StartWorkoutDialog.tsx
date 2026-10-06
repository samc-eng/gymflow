"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createWorkout } from "@/lib/workout";
import { saveDraft, loadDraft } from "@/lib/workout-storage";
import styles from "./StartWorkoutDialog.module.css";
import type { Workout } from "@/types/workout";

type StartWorkoutDialogProps = {
  onClose: () => void;
};

export default function StartWorkoutDialog({ onClose }: StartWorkoutDialogProps) {
  const router = useRouter();
  const [draft, setDraft] = useState<Workout | null>(null);
  const [forceNew, setForceNew] = useState(false);
  const [name, setName] = useState("");
  const [energy, setEnergy] = useState("3");
  const [sleep, setSleep] = useState("3");

  useEffect(() => {
    setDraft(loadDraft());
  }, []);

  function resume() {
    onClose();
    router.push("/workouts/new");
  }

  function handleStart() {
    if (name.trim() === "") return;
    saveDraft(createWorkout(name, Number(energy), Number(sleep)));
    onClose();
    router.push("/workouts/new");
  }

  if (draft && !forceNew) {
    return (
      <div className={styles.overlay}>
        <div className={styles.dialog}>
          <h2>Séance en cours</h2>
          <p>
            La séance « {draft.name} » n&apos;est pas terminée.
          </p>

          <button onClick={resume}>Reprendre</button>
          <button onClick={() => setForceNew(true)}>
            Démarrer une nouvelle séance
          </button>
          <button onClick={onClose}>Annuler</button>

          <small>Démarrer une nouvelle séance effacera celle en cours.</small>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <h2>Nouvelle séance</h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="nom de la séance"
        />

        <label>
          Énergie
          <input
            type="number"
            min="1"
            max="5"
            value={energy}
            onChange={(e) => setEnergy(e.target.value)}
          />
        </label>

        <label>
          Sommeil
          <input
            type="number"
            min="1"
            max="5"
            value={sleep}
            onChange={(e) => setSleep(e.target.value)}
          />
        </label>

        <button onClick={handleStart}>Commencer</button>
        <button onClick={onClose}>Annuler</button>
      </div>
    </div>
  );
}
