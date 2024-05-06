import useGeolocationStore from '@src/store/useGeolocationStore';
import useRestaurantsStore from '@store/useRestaurantsStore';
import FallbackLoading from '@components/FallbackLoading';

import Warning from '@components/Warning';
import RestaurantList from '@components/Restaurant/RestaurantList';

const RestaurantsPage = () => {
  const {
    loading: restaurantLoading,
    restaurants,
    error,
  } = useRestaurantsStore((state) => state);
  const { loading: geoLocationLoading } = useGeolocationStore((state) => state);

  if (error) {
    return <Warning>Error with loading Restaurants data...</Warning>;
  }

  return (
    <div className="px-6 font-poppins">
      <h1 className="py-6 text-lg">Restaurantes</h1>
      {geoLocationLoading || restaurantLoading ? (
        <FallbackLoading />
      ) : restaurants && restaurants.length > 0 ? (
        <RestaurantList restaurants={restaurants} />
      ) : (
        <Warning>No restaurants found...</Warning>
      )}
    </div>
  );
};

export default RestaurantsPage;
