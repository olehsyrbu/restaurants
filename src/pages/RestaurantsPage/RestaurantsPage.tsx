import useGeolocationStore from '@src/store/useGeolocationStore';
import useRestaurantsStore from '@store/useRestaurantsStore';
import FallbackLoading from '@components/FallbackLoading';

import Warning from '@components/Warning';
import RestaurantList from '@components/Restaurant/RestaurantList';
import calculateAndSortByDistance from '@src/utils/calculateAndSortByDistance';

const RestaurantsPage = () => {
  const {
    loading: restaurantLoading,
    restaurants,
    error,
  } = useRestaurantsStore((state) => state);
  const { userLocation, loading: geoLocationLoading } = useGeolocationStore(
    (state) => state
  );

  const sortedRestaurants =
    userLocation && restaurants
      ? calculateAndSortByDistance(restaurants, userLocation)
      : restaurants;

  if (error) {
    return <Warning>Error with loading Restaurants data...</Warning>;
  }

  return (
    <div className="px-6 font-poppins">
      <h1 className="py-6 text-lg">Restaurantes</h1>
      {geoLocationLoading || restaurantLoading ? (
        <FallbackLoading />
      ) : sortedRestaurants && sortedRestaurants.length > 0 ? (
        <RestaurantList restaurants={sortedRestaurants} />
      ) : (
        <Warning>No restaurants found...</Warning>
      )}
    </div>
  );
};

export default RestaurantsPage;
