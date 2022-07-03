import styled from 'styled-components';

const StyledStorePage = styled.div`
  .filters {
    display: none;
  }

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

  @media screen and (max-width: 374px) {

    .products {
      justify-content: center;
    }

    .products .add-to-cart {
      width: 206px;
    }
  }

  @media screen and (min-width: 768px) {
  
    .products .add-to-cart {
      width: 206px;
    }
  }

  @media screen and (min-width: 992px) {
    padding: 39px;

    .products-section {
      margin: auto;
      width: 832px
    }

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
      width: 100%;
      margin: auto;
    }
  
    .products .product {
      margin: 0;
    }
    
    .products .add-to-cart {
      width: 256px;
    }
  }

  @media screen and (min-width: 1212px) {

    display: flex;
    justify-content: space-between;
    padding: 39px 50px;
  
    .filters {
      display: block;
      /* margin-right: 32px; */
    }

    .filters .title {
      font-family: Titillium Web, sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      margin: -6px 0 23px;
    }

    .filters .per-price {
      display: flex;
      flex-direction: column;
      user-select: none;
    }
    
    .filters .per-price p {
      color: #333333;
      font-style: normal;
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 25px;
    }

    .filters .per-price label {
      color: #1d1d1b;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    .filters .per-price label input {
      margin-right: 12px;
      accent-color: #888888;
    }

    .filters .per-price label input[type=radio] {
      transform: scale(1.5);
    }

    .filters .per-price label input[type=radio]:after {
      content: '';
      position: relative;
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      top: -1.8px;
      left: -2px;
      background-color: #f5f5f5;
      border: 2px solid #888888;
      cursor: pointer;
    }

    .filters .per-price label input[type=radio]:hover:after {
      border: 2px solid #707070;
    }

    .filters .per-price label input[type=radio]:checked:after {
      background-color: #888888;
    }

    .products-section {
      margin: 0;
    }
  }

  @media screen and (min-width: 1440px) {
  
    justify-content: center;
    gap: 125px;
    padding: 39px 160px;
  }
`;

export default StyledStorePage;
