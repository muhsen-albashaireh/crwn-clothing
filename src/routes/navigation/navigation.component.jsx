import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <header>
        <nav className='nav-main'>
          <div className='logo-container'>
            <Link to='/' className='logo'>
              <CrwnLogo />
            </Link>
          </div>
          <ul className='nav-main__links'>
            <li>
              <Link to='/shop' className='nav-main__link'>
                Shop
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
