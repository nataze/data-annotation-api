/**
 * Shoelace formula for one polygon.
 * @param polygon Array of [x, y] points
 */
export default function polygonArea(polygon: number[][]): number {
  let area = 0;
  const n = polygon.length;
  for (let i = 0; i < n; i++) {
    const [x1, y1] = polygon[i];
    const [x2, y2] = polygon[(i + 1) % n];
    area += x1 * y2 - x2 * y1;
  }
  return Math.abs(area) / 2;
}
