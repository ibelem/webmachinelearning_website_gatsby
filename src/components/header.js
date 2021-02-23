import React from "react"
import { Link } from "gatsby"
export default function Header() {
  return ( 
    <div id="header" className="relative overflow-hidden">
      <div id="banner" className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-40">
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex lg:max-w-4xl items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <button>
                    <span className="sr-only">Workflow</span>
                    <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-blue.svg" alt="workflow" />
                  </button>
                  <div className="-mr-2 flex items-center md:hidden">
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
                <Link to="/getting-started/" className="link link--dia text-nn-tgray1 hover:text-nn-t1">Get Started</Link>
                <Link to="/specs/" className="link link--dia text-nn-tgray1 hover:text-nn-t1">Spec</Link>
                <Link to ="/specs/" className="link link--dia text-nn-tgray1 hover:text-nn-t1">Performance</Link>
                <Link to="/blog/mdx" className="link link--dia text-nn-tgray1 hover:text-nn-t1">Blog</Link>
                <Link to="/community/" className="link link--dia text-nn-tgray1 hover:text-nn-t1">Community</Link>
              </div>
            </nav>
          </div>
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-md bg-nn-t1 ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg" alt="workflow" />
                </div>
                <div className="mr-2">
                  <button type="button" className="bg-white p-2 inline-flex items-center justify-center text-white-400 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Close main menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                  <Link to="/getting-started/" className="block px-3 py-2 text-sm text-nn-tgray1 hover:text-white hover:bg-gray-50" role="menuitem">Getting Started</Link>
                  <Link to="/specs/" className="block px-3 py-2 text-sm text-nn-tgray1 hover:text-white hover:bg-gray-50" role="menuitem">Specs</Link>
                  <Link to="/community/" className="block px-3 py-2 text-sm text-nn-tgray1 hover:text-white hover:bg-gray-50" role="menuitem">Community</Link>
                </div>
                <div role="none">
                  <Link to="/blog/mdx" className="block w-full px-5 py-3 text-center text-nn bg-gray-50 hover:bg-gray-100" role="menuitem">
                    Blog
                  </Link>
                </div>
                <Link to="/faq/" className="block px-3 py-2 text-sm text-nn-tgray1 hover:text-white hover:bg-gray-50" role="menuitem">FAQ</Link>
              </div>
            </div>
          </div>

          <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-40">
            <div className="text-left sm:text-center lg:text-left">
              <h1 className="max-w-xl text-3xl tracking-tight text-nn-t1 sm:text-3xl md:text-3xl">
                <span className="block xl:inline">WebNN API: </span>
                <span className="block xl:inline">Accelerating </span>
                <span className="block xl:inline text-nn-t2">deep neural networks</span>
                <span className="block xl:inline"> on the web</span>
              </h1>
              <p className="mt-3 text-base text-nn-tgray1 sm:mt-5 sm:text-sm sm:max-w-xl sm:mx-auto md:mt-5 md:text-base lg:mx-0">
             A new web standard that allows web apps and frameworks to accelerate deep neural networks with on-device hardware such as GPUs, CPUs, or purpose-built AI accelerators. 
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="shadow">
                  <button className="button button--atlas getstarted w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-4 text-white md:py-3 md:text-sm md:px-10 md:leading-4">
                    <span>Get Started</span>
                    <div className="marquee" aria-hidden="true">
                      <div className="marquee__inner">
                        <span>Get Started</span>
                        <span>Get Started</span>
                        <span>Get Started</span>
                        <span>Get Started</span>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button className="button button--mimas w-full flex items-center justify-center px-8 py-3 border border-color-nn-tgray1 text-base leading-6 text-nn-tgray1 hover:text-nn-t1 hover:border-nn-t1 md:py-3 md:text-base md:px-10 md:leading-4">
                    Demo
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div id="bannerbg" className="lg:absolute lg:inset-y-0 lg:right-0">
        <img alt="WebNN" className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={'/img/00.jpg'} />
      </div>
      
    </div>
  )
}