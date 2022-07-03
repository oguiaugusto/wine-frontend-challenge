import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #7ebc43;
  color: #fff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;
  font-family: 'Lato';
  font-style: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  padding: 12px 24px;

  :hover {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    background-color: #74ac3f;
  }

  :active {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
    background-color: #619234;
  }
`;

const AddToCart: React.FC = () => (
  <StyledButton className="add-to-cart">Adicionar</StyledButton>
);

export default AddToCart;
