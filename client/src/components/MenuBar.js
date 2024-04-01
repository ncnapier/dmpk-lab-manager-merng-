import React, { useState } from 'react'
import { MenuMenu, MenuItem, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function MenuBar() {
  
  const pathname = window.location.pathname;

  const path = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);
  const logColor = localStorage.getItem('color') || '000000';
    return (
        <Menu pointing secondary size='massive' color='teal'>
          <MenuItem
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
            as={Link}
            to="/"
          />
          <MenuItem
            name='instruments'
            active={activeItem === 'instruments'}
            onClick={handleItemClick}
            as={Link}
            to="/instruments"
          />
          <MenuItem
            name='maintenance'
            active={activeItem === 'maintenance'}
            onClick={handleItemClick}
            as={Link}
            to="/maintenance"
          />
          <MenuMenu position='right'>
            <div style={{
              borderRadius: '50%',
              backgroundColor: logColor,
              alignSelf: 'center',
              width: '20px',
              height: '20px',
            }}>

            </div>
            <MenuItem
                name='login'
                active={activeItem === 'login'}
                onClick={handleItemClick}
                as={Link}
                to="/login"
            />
            <MenuItem
              name='register'
              active={activeItem === 'register'}
              onClick={handleItemClick}
              as={Link}
              to="/register"
            />
          </MenuMenu>
        </Menu>
    )
  }


export default MenuBar;