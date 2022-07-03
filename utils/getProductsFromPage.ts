import { IProduct } from '../interfaces/IProduct';

const getProductsFromPage = (products: IProduct[], page: number, limit: number) => {
  const fromIndex = limit * (page - 1);
  const toIndex = (limit * page);

  return products.slice(fromIndex, toIndex);
};

export default getProductsFromPage;
