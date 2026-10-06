"use client";

import { useState } from "react";

type FinishWorkoutDialogProps = {
  onCancel: () => void;
  onConfirm: (energyAfter: number) => void;
};

export default function FinishWorkoutDialog({
  onConfirm,
  onCancel,
}: FinishWorkoutDialogProps) {
  const [energyAfter, setEnergyAfter] = useState("");

  function handleConfirm() {
    if (energyAfter.trim() === "") return;
    onConfirm(Number(energyAfter));
  }

  return (
    <div>
      <h2>Bilan de la séance</h2>

      <input
        type="number"
        value={energyAfter}
        onChange={(e) => setEnergyAfter(e.target.value)}
        placeholder="énergie après (1-5)"
      />

      <button onClick={handleConfirm}>Terminer la séance</button>
      <button onClick={onCancel}>Annuler</button>
    </div>
  );
}