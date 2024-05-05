import { getDistance } from 'geolib';
import { Restaurant, Point } from '@src/types';

const calculateAndSortByDistance = (
  restaurants: Restaurant[],
  userLocation: Point
) => {
  return restaurants
    .map((restaurant) => ({
      ...restaurant,
      distance: getDistance(userLocation, restaurant.coordinates),
    }))
    .sort((a, b) => a.distance - b.distance);
};

export default calculateAndSortByDistance;
