import { Restaurant, RestaurantId } from '@src/types';
import { RestaurantInfo } from '@components/Restaurant';
import Image from '@components/Image';
import DefaultRestaurantLogo from '@src/assets/DefaultRestaurantLogo.svg';

type ClassNames = {
  container: string;
  logo: string;
  image: string;
};

interface RestaurantCardProps {
  restaurant: Restaurant;
  rounded?: boolean;
  compact?: boolean;
  onClick?: (id: RestaurantId) => void;
}

const getClassNames = (compact?: boolean): ClassNames => ({
  container: compact ? 'rounded-2xl shadow-sm' : 'rounded-none',
  logo: compact ? 'max-h-[55px] max-w-[55px]' : 'max-w-[74px] max-h-[74px]',
  image: compact ? 'rounded-t-2xl' : '',
});

const RestaurantCard = ({
  restaurant,
  onClick,
  compact,
}: RestaurantCardProps) => {
  const { image, name, logo, id } = restaurant;
  const classNames = getClassNames(compact);

  return (
    <div
      className={`cursor-pointer bg-base-100 relative w-full font-poppins ${classNames.container}`}
      onClick={() => onClick && onClick(id)}
    >
      <Image
        defaultIcon={DefaultRestaurantLogo}
        className={classNames.image}
        src={image}
        name={name}
      />
      <div className="flex flex-row gap-8">
        <Image
          src={logo}
          name={name}
          containerClassName={classNames.logo}
          className="relative left-[1rem] top-[-1.5rem] h-full w-full rounded-2xl"
          defaultIcon={DefaultRestaurantLogo}
        />
        <RestaurantInfo restaurant={restaurant} />
      </div>
    </div>
  );
};

export default RestaurantCard;
