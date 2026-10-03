"use client";

import { useState, useEffect } from "react";
import { loadSettings, saveSettings, DEFAULT_SETTINGS } from "@/lib/settings-storage";
import type { Settings, Language, WeightUnit } from "@/types/settings";

export default function ProfilePage() {
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);

  useEffect(() => {
    setSettings(loadSettings());
  }, []);

  function updateSettings(changes: Partial<Settings>) {
    const next = { ...settings, ...changes };
    setSettings(next);
    saveSettings(next);
  }

  return (
    <main>
      <h1>Profil</h1>

      <label>
        Langue
        <select
            value={settings.language}
            onChange={(e) => updateSettings({ language: e.target.value as Language })}
        >
            <option value="fr">Français</option>
            <option value="en">English</option>
        </select>
        </label>

        <label>
        Unité de poids
        <select
            value={settings.weightUnit}
            onChange={(e) => updateSettings({ weightUnit: e.target.value as WeightUnit })}
        >
            <option value="kg">kg</option>
            <option value="lbs">lbs</option>
        </select>
        </label>
    </main>
  );
}
