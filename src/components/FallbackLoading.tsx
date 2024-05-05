import { PulseLoader } from 'react-spinners';

const FallbackLoading = () => {
  return (
    <div className="flex min-h-24 items-center justify-center">
      <PulseLoader color="#008cff" />
    </div>
  );
};

export default FallbackLoading;
