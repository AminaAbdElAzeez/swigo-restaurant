import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import './Navbars.css'
import { useContext } from 'react';
import CartContext from '../../Context/CartContext';

const Navbars = () => {
  const {cartItemsLength} = useContext(CartContext);

  return (
    <Navbar expand="lg" fixed="top" className="navbar">
      <Container>
      <NavLink to='/' className='logo'>
        <img src={logo} alt='logo'/>
      </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <NavLink to='home' className='link'>home</NavLink>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavLink to="about" className='dropdown-link'>about</NavLink>
              <NavLink to="faq" className='dropdown-link'>faq</NavLink>
              <NavLink to="team" className='dropdown-link'>team</NavLink>
              <NavLink to="testimonial" className='dropdown-link'>testimonial</NavLink>
              <NavLink to="coming-soon" className='dropdown-link'>coming-soon</NavLink>
              <NavLink to="error-page" className='dropdown-link'>error-404</NavLink>
              <NavLink to="login" className='dropdown-link'>login</NavLink>
              <NavLink to="register" className='dropdown-link'>register</NavLink>
            </NavDropdown>
            <NavLink to='menu' className='link'>menu</NavLink>
            <NavLink to='blog' className='link'>blog</NavLink>
            <NavLink to='contact' className='link'>contact</NavLink>
          </Nav>
        </Navbar.Collapse>
        <div className='cart-icons'>
          <Link to='/login' className='nav-cart-wrapper'>
            <i className="bi bi-person-fill"></i>
          </Link>
          <Link to='/cart' className='nav-cart-wrapper'>
            {
              cartItemsLength > 0 && (
                <b className='cart-notifications'>{cartItemsLength}</b>
              )
            }
            <i className="bi bi-bag-check-fill"></i>
          </Link>
        </div>
      </Container>
    </Navbar>
  )
}

export default Navbars
