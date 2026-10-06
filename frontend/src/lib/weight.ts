import type { Machine } from "@/types/workout";
import type { WeightUnit } from "@/types/settings";

export function getRealWeight(
  displayedWeight: number,
  machine: Machine | null
): number {
  return displayedWeight * (machine?.pulleyFactor ?? 1);
}

const LBS_PER_KG = 2.20462;

export function toKg(value: number, unit: WeightUnit): number {
  return unit === "lbs" ? value / LBS_PER_KG : value;
}

export function fromKg(kg: number, unit: WeightUnit): number {
  return unit === "lbs" ? kg * LBS_PER_KG : kg;
}
