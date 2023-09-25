import React from 'react';
import { Typography } from '@material-tailwind/react';

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"]
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"]
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"]
  }
]

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
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="white" className="text-center font-normal">
        &copy; {currentYear} Alfafood GmbH
      </Typography>
    </footer>
  )
}
