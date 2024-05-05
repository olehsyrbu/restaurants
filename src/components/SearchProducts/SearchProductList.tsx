import BackIcon from '@src/assets/BackIcon.svg';
import { Product } from '@src/types';
import Warning from '@components/Warning';
import ProductItem from '@src/components/ProductList/ProductItem';

interface SearchProductsListProps {
  items: Product[];
  onSelect: (categoryName: string) => void;
}

const SearchProductsList = ({ items, onSelect }: SearchProductsListProps) => {
  return (
    <>
      {items.length > 0 ? (
        items.map((product) => (
          <div
            className="grid grid-cols-[4rem,1fr,2rem] gap-4"
            key={product.name}
          >
            <ProductItem
              key={product.name}
              product={product}
              imageClassName="h-[60px] w-[60px]"
            >
              <button onClick={() => onSelect(product.name)}>
                <img
                  src={BackIcon}
                  alt="back icon"
                  className="rotate-180 rounded-full bg-[#262638] w-8 h-8 p-[8px]"
                />
              </button>
            </ProductItem>
          </div>
        ))
      ) : (
        <Warning>No products found</Warning>
      )}
    </>
  );
};

export default SearchProductsList;
