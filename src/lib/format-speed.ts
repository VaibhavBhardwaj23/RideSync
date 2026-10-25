
export function formatSpeed(speedKmh?: number): string {
  if (speedKmh === undefined) {
    return "Speed unavailable";
  }

  return `${speedKmh} km/h`;
}
