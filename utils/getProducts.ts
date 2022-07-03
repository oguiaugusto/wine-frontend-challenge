import { IProductsResponse } from '../interfaces/IProduct';

const getProducts = async () => {
  try {
    const url = 'https://wine-back-test.herokuapp.com/products';

    const response = await fetch(url);
    const products: IProductsResponse = await response.json();

    if (products.items.length === 0) {
      throw new Error();
    }
    return products;
  } catch (error) {
    return null;
  }
};

export default getProducts;
