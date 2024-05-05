import { Product } from '@src/types';
import Warning from '@components/Warning';
import ProductItem from '@components/ProductList/ProductItem';
import ProductActions from '@components/ProductList/ProductActions';
import usePurchaseStore from '@store/usePurchaseStore';

const ProductList = ({ products }: { products: Product[] }) => {
  const { purchases, addPurchase, removePurchase } = usePurchaseStore();

  if (products.length === 0) return <Warning>No products found</Warning>;
  return (
    <div className="my-6 grid grid-cols-2 gap-5">
      {products.map((product) => {
        const { name, price } = product;
        const count = purchases[name] || 0;

        return (
          <div key={product.name}>
            <ProductItem product={product}>
              <ProductActions
                count={count}
                add={() => addPurchase(name, price)}
                remove={() => removePurchase(name, price)}
              />
            </ProductItem>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
