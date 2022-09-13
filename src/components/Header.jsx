import { faBars, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import styledComponents from 'styled-components';
import logo from '../assets/imgs/logo-popehiflo-travel.svg';

const HeaderWrapper = styledComponents.header`
  background: ${({ bg }) => (bg ? 'var(--color-bg-light)' : 'transparent')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 9%;
  z-index: 100;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  @media (max-width: 1200px) {
    padding: 1rem 2rem;
  }
  @media (max-width: 991px) {
    padding: 1rem 2rem;
  }
`;

const Logo = styledComponents.img`
  display: flex;
  min-height: 5rem;
  background-color: #FFF;
`;

const NavWrapper = styledComponents.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navbar = styledComponents.nav`
  a {
    font-size: 2rem;
    color: var(--color-secondary);
    margin-right: 1.8rem;
    font-weight: 500;
    line-height: 4rem;
    &:hover {
      color: var(--color-primary);
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 115%;
    right: 2rem;
    border-radius: 0.5rem;
    width: 30rem;
    background-color: var(--color-bg-white);
    border: var(--border-primary);
    box-shadow: var(--primary-box-shadow);

    transform: scale(0);
    opacity: 0;
    transform-origin: top right;
    transition: 0.3s ease-in-out;
    a {
      font-size: 2rem;
      text-align: center;
      display: block;
      margin: 2rem;
    }
    &.active {
      transform: scale(1);
      opacity: 1;
      transition: 0.3s ease-out;
    }
  }
`;

const BtnIcon = {
  fontSize: '2.5rem',
  color: 'var(--color-secondary)',
  padding: '0.5rem 1rem',
  cursor: 'pointer',
  alignItems: 'center',
  background: 'none',
};

const BtnMenu = styledComponents.button`
  display: none;
  @media (max-width: 768px) {
    display: initial;
  }
`;

const Header = () => {
  const [colorHeader, setColorHeader] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navMenu = useRef(null);
  const changeColorHeader = () => {
    if (window.scrollY > 100) {
      setColorHeader(true);
    } else {
      setColorHeader(false);
    }
  };
  const handleClickBtnMenu = () => {
    navMenu.current.classList.toggle('active');
    setIsMenuOpen(!isMenuOpen);
  };

  window.addEventListener('scroll', changeColorHeader);

  return (
    <HeaderWrapper bg={colorHeader}>
      <NavLink to="/">
        <Logo src={logo} alt="logo popehiflo travel" />
      </NavLink>
      <NavWrapper>
        <Navbar ref={navMenu}>
          <NavHashLink to="/#home">Home</NavHashLink>
          <NavHashLink to="/#home">About</NavHashLink>
          <NavHashLink to="/#home">Tours</NavHashLink>
          <NavHashLink to="/#home">SinUso</NavHashLink>
          <NavLink to="">Login</NavLink>
        </Navbar>
        <NavLink to="" className="btn-primary">Sign In</NavLink>
        <NavLink to="" style={BtnIcon} type="button" aria-label="Open Shopping Cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </NavLink>
        <BtnMenu style={BtnIcon} type="button" onClick={handleClickBtnMenu} id="menu-btn" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </BtnMenu>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
