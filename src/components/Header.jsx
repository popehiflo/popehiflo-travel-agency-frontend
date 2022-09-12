import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import styledComponents from 'styled-components';
import logo from '../assets/imgs/logo-popehiflo-travel.png';

const HeaderWrapper = styledComponents.header`
  background: red;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 9%;
  z-index: 100;
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
`;

const BtnIcon = {
  fontSize: '2.5rem',
  color: 'var(--color-secondary)',
  padding: '0.5rem 1rem',
  cursor: 'pointer',
  alignItems: 'center',
  background: 'none',
};

const Header = () => (
  <HeaderWrapper>
    <NavLink to="/">
      <Logo src={logo} alt="logo popehiflo travel" />
    </NavLink>
    <NavWrapper>
      <Navbar>
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
    </NavWrapper>
  </HeaderWrapper>
);

export default Header;
