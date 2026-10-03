import type { Settings } from "@/types/settings.ts";

const SETTINGS_KEY = "gymflow:settings";

export const DEFAULT_SETTINGS: Settings = {
  language: "fr",
  weightUnit: "kg",
};

export function loadSettings(): Settings {
  const raw = localStorage.getItem(SETTINGS_KEY);
  return raw ? { ...DEFAULT_SETTINGS, ...JSON.parse(raw) } : DEFAULT_SETTINGS;
}

export function saveSettings(settings: Settings): void {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}
