import React from 'react';
import { Typography } from '@material-tailwind/react';

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
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Impressum
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              AGBs
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Kontaktiere uns
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <div className="flex flex-row justify-center align-middle">
      <Typography color="white" className="text-center font-normal mr-10">
        &copy; {currentYear} Alfafood GmbH
      </Typography>
        <a href="https://www.instagram.com/alfafood_gmbh/"><img className="h-10 w-10 mr-2 -mt-1" src={require('../assets/instagram.png')} /></a>
        <a href="https://www.tiktok.com/@alfafood_gmbh"><img className="h-10 w-10 -mt-1" src={require('../assets/tiktok.png')} /></a>
    </div>
    </footer>
  )
}
