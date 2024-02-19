import React, { useState, useEffect } from 'react';
import './TopBar.css';
import { Link } from 'react-router-dom';

const TopBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleLogout = () => {
    console.log("The logout button is pressed");
    setIsLoggedIn(false);
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="top">
      {windowWidth < 1000 && (
        <div className="topLeft">
          {showMenu ? (
            <div className="hamburger" onClick={handleMenuToggle}>
              X
            </div>
          ) : (
            <div className="hamburger" onClick={handleMenuToggle}>
              &#9776;
            </div>
          )}
        </div>
      )}

      {showMenu ? (
        <div className="menu">
          <ul className="menuList">
            <li className="menuItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="menuItem">
              <Link className="link" to="/blogs">
                BLOGS
              </Link>
            </li>
            <li className="menuItem">
              <Link className="link" to="/contact">
                CONTACT
              </Link>
            </li>
            <li className="menuItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            {isLoggedIn && (
              <li className="menuItem redhover" onClick={handleLogout}>
                LOGOUT
              </li>
            )}
            {!isLoggedIn && (
              <li className="menuItem greenhover">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
            )}
            {!isLoggedIn && (
              <li className="menuItem greenhover">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            )}
          </ul>
        </div>
      ) : (
        <>
          <div className="topCenter">
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/">
                  HOME
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/blogs">
                  BLOGS
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/contact">
                  CONTACT
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/write">
                  WRITE
                </Link>
              </li>
              {isLoggedIn && (
                <li className="topListItem redhover" onClick={handleLogout}>
                  LOGOUT
                </li>
              )}
            </ul>
          </div>

          <div className="topRight">
            {isLoggedIn ? (
              <Link className="link" to="/settings">
                <img
                  className="topImg"
                  src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
              </Link>
            ) : (
              <ul className="topList">
                <li className="topListItem greenhover">
                  <Link className="link" to="/login">
                    LOGIN
                  </Link>
                </li>
                <li className="topListItem greenhover">
                  <Link className="link" to="/register">
                    REGISTER
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TopBar;
