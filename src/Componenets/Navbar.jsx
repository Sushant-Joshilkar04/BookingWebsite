import { Button, MegaMenu, Navbar } from 'flowbite-react';
import React from 'react'
import Logo from '../Assets/logo.png'
const Navibar = () => {
  return (
    <div>
      <MegaMenu>
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 md:space-x-8">
        <Navbar.Brand href="/">
          <img src={Logo} alt="logo" className="mr-3 h-6 sm:h-9" />
          <span className="self-center whitespace-nowrap text-xl font-medium text-red-600">BookNow</span>
        </Navbar.Brand>
        <div className="order-2 hidden items-center md:flex">
          <a
            href="#"
            className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
          >
            Login
          </a>
          <Button href="#" className='text-white-600'>Sign up</Button>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" className='text-red-600'>Home</Navbar.Link>
          <Navbar.Link>
            <MegaMenu.Dropdown toggle={<div className='text-red-600'>Company</div>}>
              <ul className="grid grid-cols-3">
                <div className="space-y-4 p-4">
                  <li>
                    <a href="#" className="text-red-600 hover:text-primary-600 dark:hover:text-primary-500">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-red-600 hover:text-primary-600 dark:hover:text-primary-500">
                      Library
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-red-600 hover:text-primary-600 dark:hover:text-primary-500">
                      Resources
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-red-600 hover:text-primary-600 dark:hover:text-primary-500">
                      Pro Version
                    </a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                  <li>
                    <a href="#" className=" text-red-600 hover:text-primary-600 dark:hover:text-primary-500">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-red-600 hover:text-primary-600 dark:hover:text-primary-500">
                      Support Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-red-600 hover:text-primary-600 dark:hover:text-primary-500">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-red-600 hover:text-primary-600 dark:hover:text-primary-500">
                      Blog
                    </a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                  <li>
                    <a href="#" className="text-red-600 hover:text-primary-600 dark:hover:text-primary-500">
                      Newsletter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-red-600 hover:text-primary-600 dark:hover:text-primary-500">
                      Playground
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" className="text-red-600 hover:text-primary-600 dark:hover:text-primary-500">
                      License
                    </a>
                  </li> */}
                </div>
              </ul>
            </MegaMenu.Dropdown>
          </Navbar.Link>
          <Navbar.Link href="#"className='text-red-600'>Team</Navbar.Link>
          <Navbar.Link href="#" className='text-red-600'>Contact</Navbar.Link>
        </Navbar.Collapse>
      </div>
    </MegaMenu>
    </div>
  )
}

export default Navibar
