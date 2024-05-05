import { Restaurant, Catalog } from '@src/types';

export const RestaurantApi = {
  getAll: async (): Promise<Restaurant[]> => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/restaurants`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching restaurants', error);
      throw error;
    }
  },
  getCatalogById: async (id: string): Promise<Catalog[]> => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/restaurants/${id}/catalog`
      );
      return await response.json();
    } catch (error) {
      console.error(`Error fetching catalog with id ${id}`, error);
      throw error;
    }
  },
};
