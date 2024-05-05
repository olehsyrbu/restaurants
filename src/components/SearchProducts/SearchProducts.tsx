import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { Product, KeyCode } from '@src/types';

import useCatalogsStore from '@store/useCatalogsStore';
import InputSearch from '@components/InputSearch';

import SearchProductsList from './SearchProductList';
import useFilteredProducts from '@src/hooks/useFilteredProducts';
import useKeydown from '@src/hooks/useKeydown';

interface SearchProductsProps {
  onCloseSearch: () => void;
}

const DEFAULT_DEBOUNCE_TIME = 50;

const SearchProducts = ({ onCloseSearch }: SearchProductsProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [debounceSearchValue] = useDebounce(searchValue, DEFAULT_DEBOUNCE_TIME);
  const { catalogs, setSelectedCatalog } = useCatalogsStore((state) => state);

  const filteredProducts = useFilteredProducts(catalogs, debounceSearchValue);

  useKeydown(KeyCode.Escape, onCloseSearch);

  const onSelectCatalog = (name: Product['name']) => {
    onCloseSearch();
    if (catalogs) {
      const foundedCatalog = catalogs.find((catalog) =>
        catalog.products.some((p) => p.name === name)
      );
      if (foundedCatalog) {
        setSelectedCatalog(foundedCatalog);
      }
    }
  };
  return (
    <div className="absolute h-full w-full z-50 top-0 bg-white p-6">
      <InputSearch
        value={debounceSearchValue}
        onChange={(value) => setSearchValue(value)}
      />
      <div className="space-y-4 my-6">
        <SearchProductsList
          items={filteredProducts}
          onSelect={onSelectCatalog}
        />
      </div>
    </div>
  );
};

export default SearchProducts;
