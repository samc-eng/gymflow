"use client";

import { useState } from "react";
import type { WorkoutSet } from "@/types/workout";
import type { WeightUnit } from "@/types/settings";
import { toKg } from "@/lib/weight";

type AddSetFormProps = {
  weightUnit: WeightUnit;
  onAdd: (newSet: WorkoutSet) => void;
};

export default function AddSetForm({ weightUnit, onAdd }: AddSetFormProps) {
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [rpe, setRpe] = useState("");

  function handleAdd() {
    onAdd({
      id: crypto.randomUUID(),
      reps: Number(reps),
      displayedWeight: toKg(Number(weight), weightUnit),     
      rpe: Number(rpe),
    });
    setReps("");
    setWeight("");
    setRpe("");
  }

  return (
    <div>
      <input
        type="number"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        placeholder="reps"
      />
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder={weightUnit}
      />
      <input
        type="number"
        value={rpe}
        onChange={(e) => setRpe(e.target.value)}
        placeholder="RPE"
      />
      <button onClick={handleAdd}>+ Ajouter la série</button>
    </div>
  );
}