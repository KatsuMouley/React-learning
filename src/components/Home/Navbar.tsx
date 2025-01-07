import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-black text-white">
      <nav className='flex justify-center'>
        <ul className='flex space-x-4'>
          <li>
            <Link to="/" className="hover:underline hover:text-gray-300">Pages List</Link>
          </li>
          <li>
            <Link to="/About" className="hover:underline hover:text-gray-300">About this project</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
