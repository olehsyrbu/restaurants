import { create } from 'zustand';
import { RestaurantApi } from '../api/RestaurantApi';
import { Restaurant } from '@src/types';

interface RestaurantsState {
  restaurants: Restaurant[] | null;
  loading: boolean;
  error: boolean;
  fetchRestaurants: () => Promise<void>;
}

const useRestaurantsStore = create<RestaurantsState>((set) => ({
  restaurants: null,
  loading: false,
  error: false,
  fetchRestaurants: async () => {
    try {
      set(() => ({
        loading: true,
      }));
      const restaurants = await RestaurantApi.getAll();
      set(() => ({
        restaurants,
        loading: false,
      }));
    } catch (e) {
      set({
        loading: false,
        error: true,
      });
    }
  },
}));

export default useRestaurantsStore;
