import React, { useContext, useEffect, useState } from 'react';
import { NextPage, GetStaticProps } from 'next';
import { AppProps } from 'next/app';
import { IProductsResponse } from '../../interfaces/IProduct';
import { ProductsContext } from '../../context/ProductsContext';
import getProducts from '../../utils/getProducts';
import getPages from '../../utils/getPages';
import ProductCard from '../../components/ProductCard/ProductCard';
import StyledStorePage from '../../components/StorePage/StyledStorePage';
import AddToCart from '../../components/AddToCart';
import getProductsFromPage from '../../utils/getProductsFromPage';

const PRODUCTS_LIMIT = 9;
type PageProps = AppProps & { productsResponse: IProductsResponse | null };

const index: NextPage<PageProps> = ({ productsResponse }) => {
  const c = useContext(ProductsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [previousPage, nextPage, previousPageDisabled, nextPageDisabled] = getPages(
    currentPage,
    Math.ceil((productsResponse?.totalItems || PRODUCTS_LIMIT) / PRODUCTS_LIMIT),
  );

  useEffect(() => {
    if (c) {
      const productsFromPage = getProductsFromPage(c.products, currentPage, PRODUCTS_LIMIT);
      c?.setCurrentPageProducts(productsFromPage);
    }
  }, [currentPage]);

  useEffect(() => {
    if (productsResponse) {
      c?.setProducts(productsResponse.items);

      const productsFromPage = getProductsFromPage(
        productsResponse.items,
        currentPage,
        PRODUCTS_LIMIT,
      );
      c?.setCurrentPageProducts(productsFromPage);
    }
  }, []);

  const perPriceFilters = [
    { id: 'unitl-40', from: 0, to: 40, label: 'Até R$40' },
    { id: '40-to-60', from: 41, to: 60, label: 'R$40 A R$60' },
    { id: '100-to-200', from: 61, to: 200, label: 'R$100 A R$200' },
    { id: '200-to-500', from: 201, to: 500, label: 'R$ A R$500' },
    { id: 'over-500', from: 501, label: 'Acima de R$500' },
  ];

  return (
    <StyledStorePage>
      <section className="filters">
        <p className="title">Refine sua busca</p>
        <div className="per-price">
          <p>Por preço</p>
          {
            perPriceFilters.map(({ id, label, from, to }) => (
              <label key={ `price-filter-${id}` } htmlFor={ id }>
                <input type="radio" name="per-price-filter" id={ id } onClick={ () => { ''; } } />
                {label}
              </label>
            ))
          }
        </div>
      </section>
      <section className="products-section">
        <p className="found-products-amount">
          <span className="amount">{productsResponse?.totalItems}</span>
          <span>{ ' produtos encontrados' }</span>
        </p>
        <div className="products">
          {
            c?.currentPageProducts.map((product) => (
              <div key={ `product-${product.id}` } className="product">
                <ProductCard product={ product } />
                <AddToCart />
              </div>
            ))
          }
        </div>
        <button
          type="button"
          disabled={ previousPageDisabled }
          onClick={ () => setCurrentPage(previousPage) }
        >
          Previous
        </button>
        <button
          type="button"
          disabled={ nextPageDisabled }
          onClick={ () => setCurrentPage(nextPage) }
        >
          Next
        </button>
      </section>
    </StyledStorePage>
  );
};

const getStaticProps: GetStaticProps = async () => {
  const productsResponse = await getProducts();
  return {
    props: { productsResponse },
    revalidate: 60 * 10, // 10 min
  };
};

export default index;
export { getStaticProps };
