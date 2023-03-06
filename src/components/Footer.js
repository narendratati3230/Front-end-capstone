import React from 'react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="fixed row col align-middle">
      <div className="col-6">
        <img
          src={logo}
          width="50"
          height="50"
          aria-describedby="Copyright by Sam Ayoub - Little Lemon Restaurant"
          alt="Copyright by Sam Ayoub - Little Lemon Restaurant"
        />
      </div>
      <div className="col-6">
        <p>Copyright by Sam Ayoub - Little Lemon Restaurant</p>
      </div>
    </footer>
  );
}
