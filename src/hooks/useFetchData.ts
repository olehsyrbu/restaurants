import { useEffect } from 'react';
import useRestaurantsStore from '@store/useRestaurantsStore';
import useGeolocationStore from '@store/useGeolocationStore';

const useFetchData = () => {
  const fetchUserLocation = useGeolocationStore(
    (state) => state.fetchUserLocation
  );
  const fetchRestaurants = useRestaurantsStore(
    (state) => state.fetchRestaurants
  );

  useEffect(() => {
    fetchRestaurants();
    fetchUserLocation();
  }, [fetchRestaurants, fetchUserLocation]);
};
export default useFetchData;
