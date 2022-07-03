import styled from 'styled-components';

const StyledSearchBar = styled.div`
  position: absolute;
  right: 82.5px;
  width: 60%;
  max-width: 400px;
  animation-duration: 250ms;

  &.opened {
    display: block;
    animation: openSearchBar 250ms;
  }

  &.opened input {
    animation: openSearchBarInput 250ms;
  }

  &.closing {
    animation: closeSearchBar 250ms;
  }

  &.closing input {
    animation: closeSearchBarInput 250ms;
  }

  &.closed {
    display: none;
  }

  .x-close-icon {
    transform: translateY(-50%);
    top: 50%;
    left: 10px;
    width: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
  }

  .search-button {
    transform: translateY(-50%);
    top: 50%;
    right: 12.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
  }

  .search-button img {
    width: 20px;
  }

  input {
    color: #555555;
    background-color: #eaeaea;
    border: 1px solid #dadada;
    font-family: Lato, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    padding: 8px 40px 8px 30px;
    width: 100%;
  }

  input:focus {
    outline: none;
    box-shadow: inset 0 0 12px 0 rgb(0, 0, 0, 0.05);
  }
`;

export default StyledSearchBar;