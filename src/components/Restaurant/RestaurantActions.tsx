import BackIcon from '@assets/BackIcon.svg';
import StarIcon from '@assets/StarIcon.svg';
import SearchIcon from '@assets/SearchIcon.svg';
import IconButton from '@components/IconButton';

interface RestaurantActionsProps {
  onSearch: () => void;
  onBack: () => void;
  isShowStarIcon: boolean;
}

const RestaurantActions = ({
  isShowStarIcon,
  onSearch,
  onBack,
}: RestaurantActionsProps) => {
  return (
    <div className="flex justify-between p-8">
      <IconButton src={BackIcon} alt="back" onClick={onBack} />
      <div className="flex gap-5">
        <IconButton src={SearchIcon} alt="search" onClick={onSearch} />
        {isShowStarIcon && <IconButton src={StarIcon} alt="star" />}
      </div>
    </div>
  );
};

export default RestaurantActions;
