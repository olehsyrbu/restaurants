import InputSearchIcon from '@assets/InputSearchIcon.svg';
import InputClearIcon from '@assets/InputClearIcon.svg';

const InputSearch = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="bg-slate-100 grid grid-cols-[2rem,1fr,2rem] rounded-md px-4 py-2">
      <img
        src={InputSearchIcon}
        alt="InputSearchIcon"
        className="w-8 h-8 p-[0.3125rem]"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Products"
        className="w-full bg-slate-100 pl-2 focus:outline-none"
      />
      {value && (
        <button onClick={() => onChange('')}>
          <img
            src={InputClearIcon}
            alt="InputClearIcon"
            className="w-8 h-8 rounded-full bg-white p-[0.3125rem]"
          />
        </button>
      )}
    </div>
  );
};

export default InputSearch;
