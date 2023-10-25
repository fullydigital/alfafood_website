import React, { useEffect, useState } from 'react';
import { Typography, Button, IconButton, Collapse } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

export default function Navigation({ data }) {
  const [openNav, setOpenNav] = useState(false);
  const logo = require('../assets/Alfafood_logo_white.png');

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-semibold"
      >
        <NavLink to="/" className="flex items-center">
          Home
        </NavLink>
      </Typography>



      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-semibold"
      >
        <NavLink className="items-center cursor-pointer text-left" to="/location">Standorte</NavLink>
      </Typography>





      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-semibold"
      >
        <NavLink to="about" className="flex items-center">
          Über uns
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-semibold"
      >
        <NavLink to="offers" className="flex items-center">
          Angebote
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-semibold"
      >
        <NavLink to="career" className="flex items-center">
          Karriere
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-semibold"
      >
        <NavLink to="franchise" className="flex items-center">
          Franchise
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-semibold"
      >
        <NavLink to="contact" className="flex items-center">
          Kontakt
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div className="mx-auto min-w-screen py-2 px-4 lg:px-8 lg:py-4 bg-black z-10 relative">
      <div className="container mx-auto flex items-center justify-between text-white">
        <NavLink to="/"><img src={logo} alt="Alfafood Logo" className='h-10' /></NavLink>
        <div className="hidden lg:block">{navList}</div>
        <NavLink to="/login">
          <Button variant="gradient" size="sm" className="hidden lg:inline-block">
            <span>Login</span>
          </Button>
        </NavLink>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => { setOpenNav(!openNav); }}

        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <NavLink to="/login">
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <span>Login</span>
            </Button>
          </NavLink>
        </div>
      </Collapse>
    </div>
  )
}
