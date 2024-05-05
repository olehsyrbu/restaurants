import { useNavigate } from 'react-router-dom';
import { Restaurant, RestaurantId } from '@src/types';
import { RestaurantCard } from '@components/Restaurant';

const RestaurantList = ({ restaurants }: { restaurants: Restaurant[] }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 gap-8">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          compact
          restaurant={restaurant}
          onClick={(id: RestaurantId) => navigate(`/restaurants/${id}`)}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
