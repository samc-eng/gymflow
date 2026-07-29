import type { Machine } from "@/types/workout";

export function getRealWeight(
  displayedWeight: number,
  machine: Machine | null
): number {
  return displayedWeight * (machine?.pulleyFactor ?? 1);
}