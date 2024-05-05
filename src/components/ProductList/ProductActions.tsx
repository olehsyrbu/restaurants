import PlusIcon from '@assets/PlusIcon.svg';
import MinusIcon from '@assets/MinusIcon.svg';
import IconButton from '@components/IconButton';

interface ProductActionsProps {
  count: number;
  remove: () => void;
  add: () => void;
}
const ProductActions = ({ count, remove, add }: ProductActionsProps) => {
  return (
    <span className="float-right justify-between flex lg:flex-row lg:justify-between lg:gap-0 flex items-center justify-around max-h-6">
      {count > 0 && (
        <>
          <IconButton
            src={MinusIcon}
            onClick={remove}
            small
            className="border-[1px] border-[#262638] bg-white"
          />
          <span className="font-poppins text-md min-w-5 mx-2 text-center">
            {count}
          </span>
        </>
      )}
      <IconButton src={PlusIcon} onClick={add} small className="bg-[#262638]" />
    </span>
  );
};

export default ProductActions;
