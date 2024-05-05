import StartIcon from '@assets/StartIcon.svg';
import PinIcon from '@assets/PinIcon.svg';
import { Restaurant } from '@src/types';
import getFormattedDistance from '@src/utils/getFormattedDistance';

const RestaurantInfo = ({ restaurant }: { restaurant: Restaurant }) => {
  const { name, distance, category, ratings } = restaurant;

  return (
    <div className="my-3 basis-full space-y-1 font-poppins font-medium">
      {name && <p className="uppercase">{name}</p>}
      {category && <p>{category}</p>}
      <p className="space-x-3 text-sm text-slate-500 font-normal">
        {(ratings.average || ratings.total) && (
          <span className="inline-flex items-center">
            <img
              src={StartIcon}
              className="info-icon mr-2"
              alt={`Start icon`}
            />
            {`${ratings.average} (${ratings.total})`}
          </span>
        )}

        {distance && (
          <span className="mx-3 inline-flex items-center">
            <img src={PinIcon} className="info-icon mr-2" alt="Pin map icon" />
            {getFormattedDistance(distance)}
          </span>
        )}
      </p>
    </div>
  );
};

export default RestaurantInfo;
