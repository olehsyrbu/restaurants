import { create } from 'zustand';
import { Point } from '@src/types';

interface GeolocationState {
  loading: boolean;
  error: boolean;
  userLocation: Point | null;
  fetchUserLocation: () => void;
}

const useGeolocationStore = create<GeolocationState>((set) => ({
  loading: false,
  error: false,
  userLocation: null,
  fetchUserLocation: () => {
    set({ loading: true });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) =>
          set({ userLocation: { latitude, longitude }, loading: false }),
        () => set({ error: true, loading: false })
      );
    } else {
      set({ error: true, loading: false });
    }
  },
}));
export default useGeolocationStore;
