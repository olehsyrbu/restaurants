import { create } from 'zustand';
import { Point } from '@src/types';

interface GeolocationState {
  userLocation: Point | null;
  fetchUserLocation: () => void;
}

const useGeolocationStore = create<GeolocationState>((set) => ({
  userLocation: null,
  fetchUserLocation: () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          set({ userLocation: { latitude, longitude } });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  },
}));
export default useGeolocationStore;
