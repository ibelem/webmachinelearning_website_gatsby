import React, { useState } from "react"
import { Link } from "gatsby"

export default function Nav(n) {
    let [ dropdown, toggleDropdown ] = useState(false)
    return (
        <div>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative flex lg:max-w-4xl items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <Link to="/">
                                <span className="sr-only">WebNN</span>
                                <svg className="logo h-8 w-auto sm:h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 462.53 138.63">
                                    <text className="logo-1" transform="translate(0 102.66)">WebNN</text>
                                </svg>
                            </Link>
                            <div className="mr-2 flex items-center md:hidden">
                                <button type="button" className="bg-white p-2 inline-flex items-center justify-center text-white-400 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" id="main-menu" aria-haspopup="true">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        <Link to="/get-started/" className="link link--dia text-nn-tgray1 hover:text-nn-t1">Get Started</Link>
                        <Link to="/specs/" className="link link--dia text-nn-tgray1 hover:text-nn-t1">Spec</Link>
                        <Link to="/performance/" className="link link--dia text-nn-tgray1 hover:text-nn-t1">Performance</Link>
                        <Link to="/blog/" className="link link--dia text-nn-tgray1 hover:text-nn-t1">Blog</Link>
                        <Link to="/community/" className="link link--dia text-nn-tgray1 hover:text-nn-t1">Community</Link>
                        <Link to="/faq/" className="link link--dia bg-nn-t1a text-white py-1 rounded-sm px-4 hover:bg-nn-t2a">FAQ</Link>
                    </div>
                </nav>
            </div>

            {/* Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95" */}

            <div className={`dpmenu absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden transition ease-${ dropdown ? 'out' : 'in'} duration-${ dropdown ? '150' : '100'} transform opacity-${ dropdown ? '100' : '0'} scale-${ dropdown ? '100' : '95'}`}>
                <div className="shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                            <svg className="logo h-8 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 462.53 138.63">
                                <text className="logo-1" transform="translate(0 102.66)">WebNN</text>
                            </svg>
                        </div>
                        <div className="mr-2">
                            <button onClick={ () => { (dropdown) ? toggleDropdown(false) : toggleDropdown(true); dropdown = !dropdown; } } type="button" className="bg-white p-2 inline-flex items-center justify-center text-white-400 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                                <span className="sr-only">Close</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                            <Link to="/get-started/" className="block px-3 py-2 text-sm text-nn-tgray1 hover:text-white hover:bg-nn-t1" role="menuitem">Get Started</Link>
                            <Link to="/specs/" className="block px-3 py-2 text-sm text-nn-tgray1 hover:text-white hover:bg-nn-t1" role="menuitem">Specs</Link>
                            <Link to="/performance/" className="block px-3 py-2 text-sm text-nn-tgray1 hover:text-white hover:bg-nn-t1">Performance</Link>
                            <Link to="/blog/" className="block px-3 py-2 text-sm text-nn-tgray1 hover:text-white hover:bg-nn-t1">Blog</Link>
                            <Link to="/community/" className="block px-3 py-2 text-sm text-nn-tgray1 hover:text-white hover:bg-nn-t1" role="menuitem">Community</Link>
                            <Link to="/faq/" className="block px-3 py-2 text-sm text-nn-tgray1 hover:text-white hover:bg-nn-t1" role="menuitem">FAQ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}