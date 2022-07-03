import styled from 'styled-components';

/* Não achei a fonte Neo Sans Std para uso não comercial
mas achei outra parecida =) */
const StyledNavBar = styled.nav`
  display: none;
  padding: 0 22.5px;
  color: #555555;

  @media screen and (min-width: 1212px) {

    display: flex;
    gap: 48px;

    &.nav-bar-on {
      opacity: 1;
      animation: fadeIn 250ms;
    }

    &.nav-bar-off {
      opacity: 0;
      animation: fadeOut 250ms;
    }

    button {
      font-style: normal;
      font-family: Titillium Web, sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      padding: 29px 0;
    }

    button:hover {
      font-weight: 600;
    }

    .selected-link {
      color: #d14b8f;
      border-bottom: 2px solid #d14b8f;
    }
  }

  @media screen and (min-width: 1750px) {
  
    &.nav-bar-on {
      opacity: 1;
      animation: none;
    }

    &.nav-bar-off {
      opacity: 1;
      animation: none;
    }
  }
`;

export default StyledNavBar;
