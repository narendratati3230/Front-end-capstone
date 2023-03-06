/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import lemon from '../assets/LemonImage.png';

function Header(props) {
  const { title, slogan, description, btnTxt, btnLink, noimage, image } = props;
  return (
    <>
      <div id="hero-section" className="container p-4">
        <div className="row align-baseline">
          <div className="left-hero col-6 align-baseline">
            <h1>{title}</h1>
            <h2>{slogan}</h2>
            <p>{description}</p>
            {btnTxt && (
              <Link className="btn btn-primary" to={btnLink}>
                {btnTxt}
              </Link>
            )}
          </div>
          {!noimage && (
            <div className="right-hero col-6 align-baseline">
              <img
                src={image ? '/' + image : lemon}
                width="100%"
                aria-describedby="Copyright by Sam Ayoub - Little Lemon Restaurant"
                alt="Copyright by Sam Ayoub - Little Lemon Restaurant"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

Header.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  slogan: propTypes.string,
  btnTxt: propTypes.string,
  btnLink: propTypes.string,
  noimage: propTypes.bool,
  image: propTypes.string
};

export default Header;
