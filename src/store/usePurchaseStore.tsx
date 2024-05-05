import { create } from 'zustand';

interface PurchaseState {
  purchases: { [itemName: string]: number };
  total: number;
  addPurchase: (itemName: string, price: number) => void;
  removePurchase: (itemName: string, price: number) => void;
  removeAllPurchase: () => void;
}

const usePurchaseStore = create<PurchaseState>((set) => ({
  purchases: {},
  total: 0,
  addPurchase: (itemName: string, price: number) =>
    set((state) => ({
      purchases: {
        ...state.purchases,
        [itemName]: (state.purchases[itemName] || 0) + 1,
      },
      total: state.total + price,
    })),
  removePurchase: (itemName: string, price: number) =>
    set((state) => {
      const newPurchases = { ...state.purchases };
      if (newPurchases[itemName]) {
        newPurchases[itemName] -= 1;
        if (newPurchases[itemName] === 0) {
          delete newPurchases[itemName];
        }
      }
      return { purchases: newPurchases, total: state.total - price };
    }),
  removeAllPurchase: () => set(() => ({ purchases: {}, total: 0 })),
}));

export default usePurchaseStore;
