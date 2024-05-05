import { formatAsEuro } from '@src/utils/formatAsEuro';

const TotalButton = ({
  total,
  onClick,
}: {
  total: number;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="w-3/4 md:w-1/3 bg-[#262638] rounded-[0.625rem] p-3 text-white text-lg uppercase border-none fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-8 flex w-3/4 md:w-1/3 justify-center"
    >
      TOTAL ({formatAsEuro(total)})
    </button>
  );
};

export default TotalButton;
