import React from "react"
export default function HeroIntro() {
  return ( 
    <div>
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
  )
}