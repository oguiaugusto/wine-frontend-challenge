import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import StyledHeader from './StyledHeader';
import StyledNavBar from './StyledNavBar';
import StyledSearchBar from './StyledSearchBar';
import StyledCartIcon from './StyledCartIcon';

type SearchBarState = 'opened' | 'closed' | 'closing';

const Header: React.FC = () => {
  const router = useRouter();
  const navLinks = ['Clube', 'Loja', 'Produtores', 'Ofertas', 'Eventos'];
  const [searchBarState, setSearchBarState] = useState<SearchBarState>('closed');

  useEffect(() => {
    if (searchBarState === 'closing') {
      setTimeout(() => {
        setSearchBarState('closed');
      }, 250);
    }
  }, [searchBarState]);

  return (
    <StyledHeader>
      <button type="button" className="burger-icon">
        <img src="/images/burger-menu-icon.svg" alt="Ícone de menu hambúrguer" />
      </button>
      <div className={ `wine-logo ${searchBarState === 'opened' ? 'wine-logo-off' : 'wine-logo-on'}` }>
        <img src="/images/wine-logo-small.svg" alt="Logo Wine Pequena" className="wine-logo-small" />
        <img src="/images/wine-logo.svg" alt="Logo Wine" className="wine-logo-standart" />
      </div>
      <StyledNavBar className="nav-bar">
        {
          navLinks.map((link, index) => (
            <p
              key={ `nav-bar-${index + 1}-link` }
              className={ router.pathname.match(new RegExp(`${link}`, 'gi')) ? 'selected-link' : '' }
            >
              {link}
            </p>
          ))
        }
      </StyledNavBar>
      <button type="button" className="search-icon" onClick={ () => setSearchBarState('opened') }>
        <img src="/images/search-icon-small.svg" alt="Ícone de pesquisa" className="search-icon-small" />
        <img src="/images/search-icon.svg" alt="Ícone de pesquisa com borda arredondada" className="search-icon-standart" />
      </button>
      <img src="/images/profile.svg" alt="Ícone da conta" className="profile-icon" />
      <StyledCartIcon>
        <button type="button" className="cart">
          <img src="/images/wine-box.svg" alt="Ícone de carrinho Wine" className="wine-cart-icon" />
          <div className="cart-items">
            <p>0</p>
          </div>
        </button>
      </StyledCartIcon>
      <StyledSearchBar className={ `${searchBarState}` }>
        <button type="button" className="x-close-icon" onClick={ () => setSearchBarState('closing') }>
          <img src="/images/x-close-icon.svg" alt="X para fechar a barra de pesquisa" />
        </button>
        <input
          type="text"
          placeholder="O que você está procurando?"
        />
        <button type="button" className="search-button">
          <img src="/images/search-icon-small.svg" alt="Ícone de pesquisa dentro da barra" />
        </button>
      </StyledSearchBar>
    </StyledHeader>
  );
};

export default Header;
