import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import usePurchaseStore from '@store/usePurchaseStore';
import useCatalogsStore from '@store/useCatalogsStore';
import useRestaurantsStore from '@store/useRestaurantsStore';

import FallbackLoading from '@components/FallbackLoading';
import {
  RestaurantCatalogs,
  RestaurantActions,
  RestaurantCard,
} from '@components/Restaurant';
import ProductList from '@src/components/ProductList';
import Warning from '@components/Warning';
import SearchProducts from '@components/SearchProducts/SearchProducts';
import TotalButton from '@components/TotalButton';

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isShowSearch, setIsShowSearch] = useState(false);
  const restaurants = useRestaurantsStore((state) => state.restaurants);
  const restaurant = restaurants?.find((restaurant) => restaurant?.id === id);

  const {
    catalogs,
    error,
    loading,
    fetchCatalogs,
    selectedCatalog,
    setSelectedCatalog,
  } = useCatalogsStore((state) => state);
  const { removeAllPurchase, total: totalSum } = usePurchaseStore(
    (state) => state
  );
  const toggleSearch = () => setIsShowSearch(!isShowSearch);

  useEffect(() => {
    if (id) {
      fetchCatalogs(id);
    }
  }, [id, fetchCatalogs]);

  useEffect(() => {
    return setSelectedCatalog(null);
  }, [setSelectedCatalog]);

  return (
    <>
      {restaurant && (
        <div className="relative">
          <RestaurantCard restaurant={restaurant} />
          <div className="absolute top-0 w-full">
            <RestaurantActions
              onBack={() => navigate(-1)}
              onSearch={toggleSearch}
              isShowStarIcon={totalSum > 0}
            />
          </div>
        </div>
      )}

      {loading ? (
        <FallbackLoading />
      ) : error ? (
        <Warning>Error with loading data, please check url</Warning>
      ) : (
        <>
          {isShowSearch ? (
            <SearchProducts onCloseSearch={() => setIsShowSearch(false)} />
          ) : (
            <div className="px-6 pb-24">
              {catalogs && <RestaurantCatalogs catalogs={catalogs} />}
              {selectedCatalog && (
                <ProductList products={selectedCatalog.products} />
              )}
            </div>
          )}

          {!isShowSearch && totalSum > 0 && (
            <TotalButton
              total={totalSum}
              onClick={() => {
                removeAllPurchase();
                alert('Thank you for your purchase!');
              }}
            />
          )}
        </>
      )}
    </>
  );
};
export default RestaurantDetailPage;
