import { create } from 'zustand';
import { RestaurantApi } from '../api/RestaurantApi';
import { Catalog } from '@src/types';

interface CatalogsState {
  catalogs: Catalog[] | null;
  loading: boolean;
  error: boolean;
  fetchCatalogs: (id: string) => Promise<void>;
  selectedCatalog: Catalog | null;
  setSelectedCatalog: (catalog: Catalog | null) => void;
}

const useCatalogsStore = create<CatalogsState>((set) => ({
  catalogs: null,
  loading: false,
  error: false,
  selectedCatalog: null,
  setSelectedCatalog: (catalog: Catalog | null) =>
    set(() => ({ selectedCatalog: catalog })),
  fetchCatalogs: async (id: string) => {
    try {
      set({ loading: true });
      const catalogs = await RestaurantApi.getCatalogById(id);
      set({
        catalogs,
        selectedCatalog: catalogs.length > 0 ? catalogs[0] : null,
        loading: false,
        error: false,
      });
    } catch (error) {
      set({ error: true, loading: false });
    }
  },
}));

export default useCatalogsStore;
