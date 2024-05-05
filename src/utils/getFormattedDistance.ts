export default function getFormattedDistance(distance: number) {
  return distance >= 1000
    ? `${(distance / 1000).toFixed(1)} Km`
    : `${distance} m`;
}
