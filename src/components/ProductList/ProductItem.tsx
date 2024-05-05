import { ReactNode } from 'react';
import { Product } from '@src/types';
import { formatAsEuro } from '@src/utils/formatAsEuro';
import Image from '@src/components/Image';
import FoodIcon from '@src/assets/FoodIcon.svg';

interface ProductItemProps {
  product: Product;
  imageClassName?: string;
  children?: ReactNode;
}

const ProductItem = ({
  product,
  children,
  imageClassName,
}: ProductItemProps) => {
  const { name, image, price } = product;
  return (
    <>
      <Image
        src={image}
        name={name}
        defaultIcon={FoodIcon}
        containerClassName={`overflow-hidden rounded-xl h-28 ${imageClassName}`}
        className="rounded-xl object-cover h-full m-auto"
      />
      <span>
        <span className="inline-block font-poppins text-sm w-full py-2">
          {name}
        </span>
        <span className="font-poppins font-bold text-sm">
          {formatAsEuro(price)}
        </span>
      </span>
      {children && children}
    </>
  );
};

export default ProductItem;
