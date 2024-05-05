import { Catalog } from '@src/types';
import { useMemo } from 'react';

function useFilteredProducts(catalogs: Catalog[] | null, searchTerm: string) {
  const allProducts = useMemo(() => {
    return catalogs ? catalogs.flatMap((category) => category.products) : [];
  }, [catalogs]);

  const filteredProducts = useMemo(() => {
    return searchTerm
      ? allProducts.filter((product) =>
          product.name?.toLowerCase().includes(searchTerm?.toLowerCase())
        )
      : allProducts;
  }, [allProducts, searchTerm]);

  return filteredProducts;
}

export default useFilteredProducts;
