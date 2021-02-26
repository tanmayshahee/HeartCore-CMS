import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideMenu = () => {
  return (
    <>
      <div className='app-sidebar__overlay' data-toggle='sidebar'></div>
      <aside className='app-sidebar'>
        <ul className='app-menu'>
          <li>
            <a className='app-menu__item app-menu__caption' href='/#'>
              <img
                src='images/dashboard.svg'
                className='app-menu__icon log-i log-icon-dashboard'
                alt=''
              />
              <span className='app-menu__label'>Dashboard</span>
            </a>
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
            <Link to='/content'>
              <div className='app-menu__item app-menu__caption'>
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
