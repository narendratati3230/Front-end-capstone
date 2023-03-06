import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import checkout from '../../assets/checkout.png';
/**
 * Menu Mav component
 * @returns Nav Menu component
 */
export default function MenuNav(props) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light m-2 mt-0 mb-2"
      style={{
        // eslint-disable-next-line react/prop-types
        backgroundColor: props.theme === 'dark' ? 'black' : 'white',
        // eslint-disable-next-line react/prop-types
        color: props.theme === 'dark' ? 'white' : 'black'
      }}>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navCol"
        aria-controls="navCol"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{
          // eslint-disable-next-line react/prop-types
          backgroundColor: props.theme === 'dark' ? 'black' : 'white',
          // eslint-disable-next-line react/prop-types
          color: props.theme === 'dark' ? 'white' : 'black'
        }}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="center col navbar-brand text-align-center justify-content-center">
        <img
          src={logo}
          className="App-logo"
          aria-describedby="Copyright by Sam Ayoub - Little Lemon Restaurant"
          alt="Logo icon - Copyright by Sam Ayoub - Little Lemon Restaurant"
        />
      </div>
      <div
        className="collapse navbar-collapse"
        id="navCol"
        style={{
          // eslint-disable-next-line react/prop-types
          backgroundColor: props.theme === 'dark' ? 'black' : 'white',
          // eslint-disable-next-line react/prop-types
          color: props.theme === 'dark' ? 'white' : 'black'
        }}>
        <ul
          className="navbar-nav m-auto mt-2 mt-lg-0"
          style={{
            // eslint-disable-next-line react/prop-types
            backgroundColor: props.theme === 'dark' ? 'black' : 'white',
            // eslint-disable-next-line react/prop-types
            color: props.theme === 'dark' ? 'white' : 'black'
          }}>
          <li
            className="nav-item active"
            style={{
              // eslint-disable-next-line react/prop-types
              backgroundColor: props.theme === 'dark' ? 'black' : 'white',
              // eslint-disable-next-line react/prop-types
              color: props.theme === 'dark' ? 'white' : 'black'
            }}>
            <Link
              className="nav-link"
              to="/"
              style={{
                // eslint-disable-next-line react/prop-types
                backgroundColor: props.theme === 'dark' ? 'black' : 'white',
                // eslint-disable-next-line react/prop-types
                color: props.theme === 'dark' ? 'white' : 'black'
              }}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            style={{
              // eslint-disable-next-line react/prop-types
              backgroundColor: props.theme === 'dark' ? 'black' : 'white',
              // eslint-disable-next-line react/prop-types
              color: props.theme === 'dark' ? 'white' : 'black'
            }}>
            <Link
              className="nav-link"
              to="/menu"
              style={{
                // eslint-disable-next-line react/prop-types
                backgroundColor: props.theme === 'dark' ? 'black' : 'white',
                // eslint-disable-next-line react/prop-types
                color: props.theme === 'dark' ? 'white' : 'black'
              }}>
              Menu
            </Link>
          </li>
          <li
            className="nav-item"
            style={{
              // eslint-disable-next-line react/prop-types
              backgroundColor: props.theme === 'dark' ? 'black' : 'white',
              // eslint-disable-next-line react/prop-types
              color: props.theme === 'dark' ? 'white' : 'black'
            }}>
            <Link
              className="nav-link"
              to="/book"
              style={{
                // eslint-disable-next-line react/prop-types
                backgroundColor: props.theme === 'dark' ? 'black' : 'white',
                // eslint-disable-next-line react/prop-types
                color: props.theme === 'dark' ? 'white' : 'black'
              }}>
              Book
            </Link>
          </li>
          <li
            className="nav-item"
            style={{
              // eslint-disable-next-line react/prop-types
              backgroundColor: props.theme === 'dark' ? 'black' : 'white',
              // eslint-disable-next-line react/prop-types
              color: props.theme === 'dark' ? 'white' : 'black'
            }}>
            <Link
              className="nav-link"
              to="/contact"
              style={{
                // eslint-disable-next-line react/prop-types
                backgroundColor: props.theme === 'dark' ? 'black' : 'white',
                // eslint-disable-next-line react/prop-types
                color: props.theme === 'dark' ? 'white' : 'black'
              }}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-1 pull-right txt-dark">
        <Link
          to="/cart"
          style={{
            // eslint-disable-next-line react/prop-types
            backgroundColor: props.theme === 'dark' ? 'black' : 'white',
            // eslint-disable-next-line react/prop-types
            color: props.theme === 'dark' ? 'white' : 'black'
          }}>
          <img
            src={checkout}
            aria-describedby="Copyright by Sam Ayoub - Little Lemon Restaurant"
            alt="Checkout Icon - Copyright by Sam Ayoub - Little Lemon Restaurant"
          />
        </Link>
      </div>
    </nav>
  );
}
