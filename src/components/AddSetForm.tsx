"use client";

import { useState } from "react";

export default function AddSetForm() {
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [rpe, setRpe] = useState("");

  function handleAdd() {
    console.log({
      reps: Number(reps),
      displayedWeight: Number(weight),
      rpe: Number(rpe),
    });
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
        placeholder="kg"
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