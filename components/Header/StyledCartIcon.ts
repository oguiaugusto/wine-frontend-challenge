import styled from 'styled-components';

const StyledCartIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cart {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .wine-cart-icon {
    width: 56px;
  }

  .cart-items {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    bottom: 0
  }

  .cart-items p {
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #00B495;
  }
`;

export default StyledCartIcon;
