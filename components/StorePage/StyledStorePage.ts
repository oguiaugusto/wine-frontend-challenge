import styled from 'styled-components';

const StyledStorePage = styled.div`
  .found-products-amount {
    color: #888888;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin: 32px 18px 0;
    padding-bottom: 20px;
    border-bottom: 0.5px solid #d5d5d5;
  }

  .found-products-amount .amount {
    color: #1d1d1b;
    font-weight: 700;
  }

  .products {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 12px 4.5px;
  }

  .products .product {
    margin: 12px 13.5px 24px;
  }

  .products .add-to-cart {
    width: 156px;
    margin: 8px 0 24px;
  }

  @media screen and (min-width: 992px) {
    padding: 39px;

    .found-products-amount {
      color: #262626;
      border: none;
      padding: 0;
      margin: 0 0 32px;
    }

    .products {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 1fr;
      grid-column-gap: 32px;
      width: 832px;
      margin: auto;
    }
  
    .products .product {
      margin: 0;
    }
    
    .products .add-to-cart {
      width: 256px;
    }
  }
`;

export default StyledStorePage;
