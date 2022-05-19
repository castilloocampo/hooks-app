import React from 'react';
import { NavLink } from 'react-router-dom';



const NavBar = () => {
  {/* <nav>
    <ul>
      <li>
        <Link to={`/`}> Home </Link>
      </li>
      <li>
        <Link to={`/about`}> About </Link>
      </li>
      <li>
        <Link to={`/login`}> Login </Link>
      </li>
    </ul>
</nav> */}

  const isActive = ({ isActive }) => {
    return `inline-block py-2 px-4 no-underline ${isActive ? 'text-gray-100' : 'text-gray-400'}`
  }

  return (
    <nav className="relative flex flex-wrap items-center content-between py-3 px-4  text-white bg-gray-800">
      <NavLink to={`/`} className="inline-block pt-1 pb-1 mr-4 text-lg whitespace-no-wrap"> useContext </NavLink>

      <div className="flex-grow items-center" id="navbarNavAltMarkup">
        <div className="flex flex-wrap list-reset pl-0 mb-0">
          <NavLink
            to={`/`}
            className={isActive}
          > Home </NavLink>
          <NavLink
            to={`/about`}
            className={isActive}
          > About </NavLink>
          <NavLink
            to={`/login`}
            className={isActive}
          > Login </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
