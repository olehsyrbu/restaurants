import { Catalog } from '@src/types';
import useCatalogsStore from '@store/useCatalogsStore';
import Warning from '@components/Warning';

const RestaurantCatalogs = ({ catalogs }: { catalogs: Catalog[] }) => {
  const selectedCatalog = useCatalogsStore((state) => state.selectedCatalog);
  const setSelectedCatalog = useCatalogsStore(
    (state) => state.setSelectedCatalog
  );

  if (catalogs.length === 0) return <Warning>Catalogs is empty</Warning>;
  return (
    <>
      <div className="flex flex-row overflow-x-auto overflow-y-hidden font-poppins text-sm">
        {catalogs.map((catalog) => (
          <button
            key={catalog.name}
            onClick={() => setSelectedCatalog(catalog)}
            className={`mr-3 rounded-3xl border-none bg-white px-3 py-2 shadow-none ${
              selectedCatalog?.name === catalog.name &&
              '!bg-[#262638] text-white'
            }`}
          >
            {catalog.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default RestaurantCatalogs;
