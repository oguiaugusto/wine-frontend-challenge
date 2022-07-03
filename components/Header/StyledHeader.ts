import styled from 'styled-components';

const StyledHeader = styled.header`
  display: grid;
  align-items: center;
  position: relative;
  grid-template-columns: 27px 1fr  51px 68.5px;
  padding: 7px 14px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  .wine-logo-standart, .search-icon-standart, .profile-icon {
    display: none;
  }

  button {
    background: none;
    border: none;
    outline: none;
  }

  .burger-icon:hover, .cart:hover {
    filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.15));
  }

  .search-icon img:hover, .search-bar.search-button img:hover {
    filter: drop-shadow(0 2px 1px rgba(0, 0, 0, 0.2))
  }

  .burger-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wine-logo {
    display: flex;
    align-items: center;
    margin: 0 20px;
  }

  .wine-logo-on {
    opacity: 1;
    animation: fadeIn 250ms;
  }

  .wine-logo-off {
    opacity: 0;
    animation: fadeOut 250ms;
  }

  .search-icon {
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 590px) {
  
    .wine-logo-on {
      opacity: 1;
      animation: none;
    }

    .wine-logo-off {
      opacity: 1;
      animation: none;
    }
  }
`;

export default StyledHeader;
