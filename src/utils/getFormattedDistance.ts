import { getDistance } from 'geolib';
import { Point } from '@src/types';

export default function getFormattedDistance(
  userLocation: Point | null,
  coordinates: Point
) {
  const distance = userLocation ? getDistance(userLocation, coordinates) : 0;

  return distance >= 1000
    ? `${(distance / 1000).toFixed(1)} Km`
    : `${distance} m`;
}
