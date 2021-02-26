import React from 'react';

const Header = () => {
  return (
    <header className='app-header'>
      <a className='app-header__logo' href='/#'>
        <img src='images/logo.png' alt='log Manager' />
      </a>

      <a className='header_tab_link active' href='/#'>
        Home
      </a>
      <a className='header_tab_link' href='/#'>
        Browse & Edit
      </a>

      <ul className='app-nav'>
        <li>
          <div className='form-group mb-0 mr-2'>
            <input type='text' className='form-control' placeholder='Search' />
          </div>
        </li>
        <li className='dropdown'>
          <a
            className='app-nav__item aap-user'
            href='/#'
            data-toggle='dropdown'
            aria-label='Oeye Profile Menu'
          >
            <span>Beckie Valentine</span>
            <i className='log-i log-icon-angle-down-solid'></i>
          </a>
          <ul className='dropdown-menu settings-menu'>
            <li>
              <a
                className='dropdown-item'
                href='/#'
                data-toggle='modal'
                data-target='/#changepwdModal'
              >
                Change Password
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='/#'>
                Logout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export default Header;
