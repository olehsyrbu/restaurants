import { useEffect } from 'react';

function useKeydown(keyCode: number,  callback: () => void) {
  useEffect(() => {
    const handleKeyPress = (event: { keyCode: number }) => {
      if (event.keyCode === keyCode) {
        callback();
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [keyCode, callback]);
}
export default useKeydown;
