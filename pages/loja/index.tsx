import React, { useContext, useEffect, useState } from 'react';
import { NextPage, GetStaticProps } from 'next';
import { AppProps } from 'next/app';
import { IProductsResponse } from '../../interfaces/IProduct';
import { perPriceFilters, ProductsContext } from '../../context/ProductsContext';
import getProducts from '../../utils/getProducts';
import getPages from '../../utils/getPages';
import ProductCard from '../../components/ProductCard/ProductCard';
import StyledStorePage from '../../components/StorePage/StyledStorePage';
import AddToCart from '../../components/AddToCart';
import getProductsFromPage from '../../utils/getProductsFromPage';

type PageProps = AppProps & { productsResponse: IProductsResponse | null };

const PRODUCTS_LIMIT = 9;

const index: NextPage<PageProps> = ({ productsResponse }) => {
  const c = useContext(ProductsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [previousPage, nextPage, previousPageDisabled, nextPageDisabled] = getPages(
    currentPage,
    Math.ceil((c?.products.length || PRODUCTS_LIMIT) / PRODUCTS_LIMIT),
  );

  useEffect(() => {
    if (c) {
      const productsFromPage = getProductsFromPage(c.products, currentPage, PRODUCTS_LIMIT);
      c?.setCurrentPageProducts(productsFromPage);
    }
  }, [currentPage, c?.products]);

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

  return (
    <StyledStorePage>
      <section className="filters">
        <p className="title">Refine sua busca</p>
        <div className="per-price">
          <p>Por preço</p>
          {
            perPriceFilters.map(({ id, label, from, to }) => (
              <label key={ `price-filter-${id}` } htmlFor={ id }>
                <input
                  type="radio"
                  name="per-price-filter"
                  id={ id }
                  onClick={ () => c?.filterProducts(productsResponse?.items || [], from, to) }
                />
                {label}
              </label>
            ))
          }
        </div>
      </section>
      <section className="products-section">
        <p className="found-products-amount">
          <span className="amount">{c?.products.length}</span>
          <span>{ ' produtos encontrados' }</span>
        </p>
        <div className="products">
          {
            c?.currentPageProducts.map((product) => (
              <div key={ `product-${product.id}` } className="product">
                <ProductCard product={ product } />
                <AddToCart product={ product } />
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
