import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const LeftSideMenu = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('');
  const history = useHistory();

  useEffect(() => {
    console.log(history);
    if (history.location.pathname === '/content') {
      setSelectedMenuItem('content');
    } else if (history.location.pathname === '/') {
      setSelectedMenuItem('dashboard');
    }
  }, []);
  const onMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };
  return (
    <>
      <div className='app-sidebar__overlay' data-toggle='sidebar'></div>
      <aside className='app-sidebar'>
        <ul className='app-menu'>
          <li>
            <Link to='/' onClick={() => onMenuItemClick('dashboard')}>
              <div
                className={`app-menu__item app-menu__caption ${
                  selectedMenuItem === 'dashboard' ? 'active' : ''
                }`}
              >
                <img
                  src='images/dashboard.svg'
                  className='app-menu__icon log-i log-icon-dashboard'
                  alt=''
                />
                <span className='app-menu__label'>Dashboard</span>
              </div>
            </Link>
          </li>
          <li>
            <a className='app-menu__item app-menu__caption' href='/#'>
              <img
                src='images/structure.svg'
                className='app-menu__icon log-i log-icon-dashboard'
                alt=''
              />
              <span className='app-menu__label'>Website Settings</span>
            </a>
          </li>
          <li>
            <Link to='/content' onClick={() => onMenuItemClick('content')}>
              <div
                className={`app-menu__item app-menu__caption ${
                  selectedMenuItem === 'content' ? 'active' : ''
                }`}
              >
                <img
                  src='images/blog.svg'
                  className='app-menu__icon log-i log-icon-dashboard'
                  alt=''
                />
                <span className='app-menu__label'>Content</span>
              </div>
            </Link>
          </li>
          <li>
            <a className='app-menu__item app-menu__caption' href='/#'>
              <img
                src='images/photo.svg'
                className='app-menu__icon log-i log-icon-dashboard'
                alt=''
              />
              <span className='app-menu__label'>Media</span>
            </a>
          </li>
          <li>
            <a className='app-menu__item app-menu__caption' href='/#'>
              <img
                src='images/cart.svg'
                className='app-menu__icon log-i log-icon-dashboard'
                alt=''
              />
              <span className='app-menu__label'>Ecommerce</span>
            </a>
          </li>
          <li>
            <a className='app-menu__item app-menu__caption' href='/#'>
              <img
                src='images/pie_chart.svg'
                className='app-menu__icon log-i log-icon-dashboard'
                alt=''
              />
              <span className='app-menu__label'>Experience</span>
            </a>
          </li>
          <li>
            <a className='app-menu__item app-menu__caption' href='/#'>
              <img
                src='images/database.svg'
                className='app-menu__icon log-i log-icon-dashboard'
                alt=''
              />
              <span className='app-menu__label'>Database</span>
            </a>
          </li>
          <li>
            <a className='app-menu__item app-menu__caption' href='/#'>
              <img
                src='images/analytics.svg'
                className='app-menu__icon log-i log-icon-dashboard'
                alt=''
              />
              <span className='app-menu__label'>Analytics</span>
            </a>
          </li>
          <li>
            <a className='app-menu__item app-menu__caption' href='/#'>
              <img
                src='images/groups.svg'
                className='app-menu__icon log-i log-icon-dashboard'
                alt=''
              />
              <span className='app-menu__label'>Users</span>
            </a>
          </li>
          <li>
            <a className='app-menu__item app-menu__caption' href='/#'>
              <img
                src='images/cog.svg'
                className='app-menu__icon log-i log-icon-dashboard'
                alt=''
              />
              <span className='app-menu__label'>Configurations</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default LeftSideMenu;
