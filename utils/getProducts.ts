import { IProductsResponse } from '../interfaces/IProduct';

// O parâmetro "page" pode também ser um array de strings
// pois é possível adicionar esse valor em uma query na URL.
// Nesse caso, a products.items estaria vazio, caindo no if da função.
const getProducts = async (page: string | number | string[] = 1) => {
  try {
    const url = `https://wine-back-test.herokuapp.com/products?page=${page}&limit=9`;

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
