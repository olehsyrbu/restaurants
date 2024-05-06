import { useEffect, useMemo } from 'react';
import useRestaurantsStore from '@store/useRestaurantsStore';
import useGeolocationStore from '@store/useGeolocationStore';
import calculateAndSortByDistance from '@src/utils/calculateAndSortByDistance';

function useFetchData() {
  const { fetchUserLocation, userLocation } = useGeolocationStore(
    (state) => state
  );
  const { fetchRestaurants, setRestaurants, restaurants } = useRestaurantsStore(
    (state) => state
  );

  useEffect(() => {
    fetchRestaurants();
    fetchUserLocation();
  }, [fetchRestaurants, fetchUserLocation]);

  const sortedRestaurants = useMemo(() => {
    return userLocation && restaurants
      ? calculateAndSortByDistance(restaurants, userLocation)
      : restaurants;
  }, [userLocation, restaurants]);

  useEffect(() => {
    const sortedRestaurantsHaveDistance = sortedRestaurants?.some(
      (restaurant) => restaurant.distance !== undefined
    );
    const restaurantsMissingDistance = restaurants?.some(
      (restaurant) => restaurant.distance === undefined
    );

    if (
      sortedRestaurants &&
      sortedRestaurantsHaveDistance &&
      restaurantsMissingDistance
    ) {
      setRestaurants(sortedRestaurants);
    }
  }, [sortedRestaurants, restaurants, setRestaurants]);
}
export default useFetchData;
