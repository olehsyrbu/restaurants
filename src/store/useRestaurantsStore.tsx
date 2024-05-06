import { create } from 'zustand';
import { RestaurantApi } from '../api/RestaurantApi';
import { Restaurant } from '@src/types';

interface RestaurantsState {
  restaurants: Restaurant[] | null;
  loading: boolean;
  error: boolean;
  setRestaurants: (restaurants: Restaurant[]) => void;
  fetchRestaurants: () => Promise<void>;
}

const useRestaurantsStore = create<RestaurantsState>((set) => ({
  restaurants: null,
  loading: false,
  error: false,
  setRestaurants: (restaurants: Restaurant[]) => set({ restaurants }),
  fetchRestaurants: async () => {
    try {
      set(() => ({ loading: true }));
      const restaurants = await RestaurantApi.getAll();
      set(() => ({ loading: false, restaurants }));
    } catch (e) {
      set({ loading: false, error: true });
    }
  },
}));

export default useRestaurantsStore;
