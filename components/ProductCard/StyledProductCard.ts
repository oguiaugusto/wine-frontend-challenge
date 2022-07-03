import styled from 'styled-components';

const StyledProductCard = styled.div`
  background-color: #fff;
  font-style: normal;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  width: 156px;
  min-height: 350px;

  :hover {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
  }

  .picture {
    position: relative;
    display: flex;
    justify-content: center;
    height: 181px;
    margin: 16px 16px 0;
  }

  .picture .product-image {
    height: 100%;
  }

  .picture .label {
    position: absolute;
    bottom: 1px;
    left: -8px;
  }

  .title {
    margin: 12px 8px;
    font-weight: 700;
    font-size: 14px;
    text-align: center;
  }

  .price {
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-bottom: 4px;
  }

  .price .standart {
    color: #888888;
    text-decoration-line: line-through;
    text-transform: uppercase;
    font-size: 10px;
  }

  .price .off-percentage {
    background-color: #f79552;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    width: 65px;
    border-radius: 2px;
  }

  .price-member {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .price-member .member-wine {
    color: #555555;
    text-transform: uppercase;
    text-align: right;
    font-weight: 300;
    font-size: 10px;
    width: 32px;
  }

  .price-member .member-value {
    color: #c81a78;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }

  .price-member .member-value .sign {
    font-size: 10px;
  }

  .price-non-member {
    color: #888888;
    font-weight: 400;
    font-size: 10px;
    align-self: center;
    margin: 8px 0; 
  }

  @media screen and (min-width: 992px) {
  
    width: 256px;
    min-height: 333px;

    .picture {
      height: 178px;
      margin: 10px 29px 0;
    }

    .picture .label {
      bottom: 9px;
      left: unset;
      right: -10px;
    }
      
    .title {
      margin: 7px 10px;
      font-size: 16px;
    }

    .price .standart {
      font-size: 11px;
      width: initial;
    }

    .price-member .member-wine {
      color: #1d1d1b;
    }

    .price-member .member-value {
      font-size: 23px;
    }

    .price-non-member {
      font-size: 12px;
      margin: 4px 0 10px;
    }
  }
`;

export default StyledProductCard;
