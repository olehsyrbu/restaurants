import { Catalog } from '@src/types';
import { useMemo } from 'react';

function useFilteredProducts(catalogs: Catalog[] | null, searchTerm: string) {
  const allProducts = useMemo(
    () => (catalogs ? catalogs.flatMap((category) => category.products) : []),
    [catalogs]
  );

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return allProducts;

    const regex = new RegExp([...searchTerm].join('.*'), 'i');
    return allProducts.filter((product) => regex.test(product.name));
  }, [allProducts, searchTerm]);

  return filteredProducts;
}

export default useFilteredProducts;
