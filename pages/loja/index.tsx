import React, { useContext, useEffect } from 'react';
import { GetServerSidePropsContext, GetServerSideProps, NextPage } from 'next';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IProductsResponse } from '../../interfaces/IProduct';
import { ProductsContext } from '../../context/ProductsContext';
import getProducts from '../../utils/getProducts';
import getPages from '../../utils/getPages';
import ProductCard from '../../components/ProductCard/ProductCard';
import StyledStorePage from '../../components/StorePage/StyledStorePage';
import AddToCart from '../../components/AddToCart';

type PageProps = AppProps & { productsResponse: IProductsResponse | null };

const index: NextPage<PageProps> = ({ productsResponse }) => {
  const c = useContext(ProductsContext);
  const router = useRouter();
  const [
    previousPage,
    nextPage,
    previousPageDisabled,
    nextPageDisabled,
  ] = getPages(productsResponse?.page || 1, productsResponse?.totalPages || 1);

  useEffect(() => {
    if (productsResponse) {
      c?.setProducts(productsResponse?.items);
    } else {
      router.push('/loja?page=1');
    }
  }, [productsResponse]);

  return (
    <StyledStorePage>
      <p className="found-products-amount">
        <span className="amount">{productsResponse?.totalItems}</span>
        <span>{ ' produtos encontrados' }</span>
      </p>
      <div className="products">
        {
          c?.products.map((product) => (
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
        onClick={ () => router.push(`/loja?page=${previousPage}`) }
      >
        Previous
      </button>
      <button
        type="button"
        disabled={ nextPageDisabled }
        onClick={ () => router.push(`/loja?page=${nextPage}`) }
      >
        Next
      </button>
    </StyledStorePage>
  );
};

const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { page = 1 } = context.query;

  const productsResponse = await getProducts(page);
  return {
    props: { productsResponse },
  };
};

export default index;
export { getServerSideProps };
