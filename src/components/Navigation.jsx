import React, { useEffect, useState } from 'react';
import { MobileNav, Typography, Button, IconButton } from '@material-tailwind/react';

export default function Navigation() {
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
        className="p-1 font-normal"
      >
        <a href="home" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="branches" className="flex items-center">
          Filialen
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="offers" className="flex items-center">
          Angebote
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="aboutus" className="flex items-center">
          Über uns
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="carrer" className="flex items-center">
          Karriere
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="franchise" className="flex items-center">
          Franchise
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="contact" className="flex items-center">
          Kontakt
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="mx-auto min-w-screen py-2 px-4 lg:px-8 lg:py-4 bg-black z-10 relative">
      <div className="container mx-auto flex items-center justify-between text-white">
        <img src={logo} alt="Alfafood Logo" className='h-10' />
        <div className="hidden lg:block">{navList}</div>
        <Button variant="gradient" size="sm" className="hidden lg:inline-block">
          <span>Login</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
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
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Login</span>
          </Button>
        </div>
      </MobileNav>
    </div>
  )
}
