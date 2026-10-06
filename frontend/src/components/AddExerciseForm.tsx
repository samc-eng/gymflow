"use client";

import { useState } from "react";

type AddExerciseFormProps = {
  onAdd: (name: string) => void;
};

export default function AddExerciseForm({ onAdd }: AddExerciseFormProps) {
  const [name, setName] = useState("");

  function handleAdd() {
    if (name.trim() === "") return;
    onAdd(name);
    setName("");
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="nom de l'exercice"
      />
      <button onClick={handleAdd}>+ Ajouter l'exercice</button>
    </div>
  );
}