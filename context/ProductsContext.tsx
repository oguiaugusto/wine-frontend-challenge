import React, { createContext, PropsWithChildren, useMemo, useState } from 'react';
import { IProduct } from '../interfaces/IProduct';

interface IProductsContext {
  products: IProduct[],
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  currentPageProducts: IProduct[],
  setCurrentPageProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  filterProducts: (fullProductsArray: IProduct[], from: number, to?: number) => void;
}

export const perPriceFilters = [
  { id: 'unitl-40', from: 0, to: 40, label: 'Até R$40' },
  { id: '40-to-60', from: 41, to: 60, label: 'R$40 A R$60' },
  { id: '100-to-200', from: 61, to: 200, label: 'R$100 A R$200' },
  { id: '200-to-500', from: 201, to: 500, label: 'R$200 A R$500' },
  { id: 'over-500', from: 501, label: 'Acima de R$500' },
];

const ProductsContext = createContext<IProductsContext | null>(null);

const ProductsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [currentPageProducts, setCurrentPageProducts] = useState<IProduct[]>([]);

  const filterProducts = (fullProductsArray: IProduct[], from: number, to?: number) => {
    const filteredProducts = fullProductsArray.filter((p) => {
      if (!to) {
        return p.priceNonMember >= from;
      }
      return p.priceNonMember >= from && p.priceNonMember <= to;
    });

    setProducts(filteredProducts);
  };

  const providerValue = useMemo(
    () => ({ products, setProducts, currentPageProducts, setCurrentPageProducts, filterProducts }),
    [products, setProducts, currentPageProducts, setCurrentPageProducts, filterProducts],
  );

  return (
    <ProductsContext.Provider value={ providerValue }>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
export { ProductsContext };
