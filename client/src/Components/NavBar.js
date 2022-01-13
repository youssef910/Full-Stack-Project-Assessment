import React, { useState } from 'react';
import { Grommet, Anchor, Box, Header, Menu, ResponsiveContext } from 'grommet';
import { Link } from 'react-router-dom';
import { Youtube, Moon, Sun, Menu as MenuIcon } from 'grommet-icons';
import { grommet } from 'grommet/themes';
const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const setMode = () => {
    let bgColor = darkMode ? 'white' : 'black';
    let fColor = darkMode ? 'black' : 'White';
    document.documentElement.style.setProperty(`--bg--color`, bgColor);
    document.documentElement.style.setProperty('--font--color', fColor);
  };

  const handleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
    setMode();
  };
  return (
    <Grommet className=' sticky-top' theme={grommet}>
      <Header background='#72A2C0' pad='medium' height='xxsmall'>
        <Box direction='row' gap='medium'>
          <Anchor
            as={Link}
            to='/'
            color='#192E5B'
            justify='end'
            icon={<Youtube color='#192E5B' />}
            label='Video Recommendation'
          />
          <ResponsiveContext.Consumer>
            {(size) =>
              size === 'small' ? (
                <Box justify='start' direction='row'>
                  <Menu
                    dropBackground='#72A2C0'
                    a11yTitle='Navigation Menu'
                    dropProps={{
                      justifyContent: 'start',
                      align: { top: 'bottom', right: 'right' },
                    }}
                    icon={<MenuIcon color='#192E5B' />}
                    items={[
                      {
                        label: (
                          <Box background='#72A2C0' color='#192E5B'>
                            Home
                          </Box>
                        ),
                        href: '/',
                      },
                      {
                        label: (
                          <Box pad='small' background='#72A2C0' color='#192E5B'>
                            Add Video
                          </Box>
                        ),
                        href: '/Add-Video',
                      },
                    ]}
                  />
                </Box>
              ) : (
                <Box justify='start' direction='row' gap='medium'>
                  <Anchor as={Link} to='/' label='Home' color='#192E5B' />
                  <Anchor
                    as={Link}
                    to='/Add-Video'
                    label='Add Video'
                    color='#192E5B'
                  />
                </Box>
              )
            }
          </ResponsiveContext.Consumer>

          {darkMode ? (
            <Sun color='black' onClick={handleDarkMode} />
          ) : (
            <Moon color='black' label='Dark Mode' onClick={handleDarkMode} />
          )}
        </Box>
      </Header>
    </Grommet>
  );
};

export default NavBar;
