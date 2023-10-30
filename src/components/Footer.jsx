import React from 'react';
import { Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full bg-black p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-black text-center md:justify-between">
        <img src={require('../assets/Alfafood_logo_white.png')} alt="logo-ct" className="w-56" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <NavLink to="about">Über uns</NavLink>
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <NavLink  to="impressum">Impressum</NavLink>
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <NavLink to="datenschutz">AGBs</NavLink>
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <NavLink to="contact">Kontaktiere uns</NavLink>
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <div className="flex flex-row justify-center align-middle">
      <Typography color="white" className="text-center font-normal mr-10">
        &copy; {currentYear} Alfafood GmbH
      </Typography>
        <a href="https://www.instagram.com/alfafood_gmbh/"><img className="h-10 w-10 mr-2 -mt-1" src={require('../assets/instagram.png')} alt="Instagram Logo" /></a>
        <a href="https://www.tiktok.com/@alfafood_gmbh"><img className="h-10 w-10 -mt-1" src={require('../assets/tiktok.png')} alt="TikTok Logo" /></a>
    </div>
    </footer>
  )
}
