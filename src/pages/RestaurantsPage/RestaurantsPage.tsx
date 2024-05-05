import FallbackLoading from '@components/FallbackLoading';
import useRestaurantsStore from '@store/useRestaurantsStore';
import Warning from '@components/Warning';
import RestaurantList from './RestaurantList';

const RestaurantsPage = () => {
  const { loading, restaurants, error } = useRestaurantsStore((state) => state);

  return (
    <div className="px-6 font-poppins">
      <h1 className="py-6 text-lg">Restaurantes</h1>
      {loading && <FallbackLoading />}
      {error && <Warning>Error with loading Restaurants data...</Warning>}
      {restaurants && restaurants.length > 0 && (
        <RestaurantList restaurants={restaurants} />
      )}
    </div>
  );
};

export default RestaurantsPage;
