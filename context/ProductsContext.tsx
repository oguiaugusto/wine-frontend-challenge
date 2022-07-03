import React, { createContext, PropsWithChildren, useMemo, useState } from 'react';
import { IProduct } from '../interfaces/IProduct';

interface IProductsContext {
  products: IProduct[],
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  currentPageProducts: IProduct[],
  setCurrentPageProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

const ProductsContext = createContext<IProductsContext | null>(null);

const ProductsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [currentPageProducts, setCurrentPageProducts] = useState<IProduct[]>([]);

  const providerValue = useMemo(
    () => ({ products, setProducts, currentPageProducts, setCurrentPageProducts }),
    [products, setProducts, currentPageProducts, setCurrentPageProducts],
  );

  return (
    <ProductsContext.Provider value={ providerValue }>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
export { ProductsContext };
