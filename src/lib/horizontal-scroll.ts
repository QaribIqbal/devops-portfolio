const SNAP_PRECISION = 4;

export function getHorizontalTravel(scrollWidth: number, clientWidth: number) {
  return Math.max(0, Math.round(scrollWidth - clientWidth));
}

export function buildHorizontalSnapPoints(offsets: number[], totalTravel: number) {
  if (totalTravel <= 0) {
    return [0, 1];
  }

  const normalizedOffsets = offsets.map((offset) => {
    const progress = offset / totalTravel;
    const clamped = Math.min(1, Math.max(0, progress));
    return Number(clamped.toFixed(SNAP_PRECISION));
  });

  return Array.from(new Set([0, ...normalizedOffsets, 1])).sort((left, right) => left - right);
}
