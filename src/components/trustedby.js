import React from "react"
import intel from "../../content/assets/trustedby/intel.png"

export default function TrustedBy() {
  return ( 
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 lg:text-center pt-10">
      <div class="flex flex-col text-center w-full mb-6">
        <h2 class="text-nn-tgray1 mb-1 font-light">Quotes</h2>
        <h1 class="sm:text-2xl text-2xl text-nn-t1">Web Machine Learning Working Group Launch</h1>
      </div>
      <div class="flex flex-wrap">
        <div class="p-4 md:w-1/3">
          <div class="flex rounded-sm h-full bg-nn-bgg1 px-6 py-4 flex-col">
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-nn-t1 text-white flex-shrink-0">
                <svg className="w-5 h-5" role="img" viewBox="0 0 488 512">
                  <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
              </div>
              <h2 class="text-md text-left text-nn-tgray1">Ping Yu<span className="text-sm xsm">TLM for TensorFlow.js at Google</span></h2>
            </div>
            <div class="flex-grow text-left">
              <p class="leading-relaxed text-nn-tgray1 font-light">Having access to the native ML accelerators, machine learning frameworks such as TensorFlow.js can greatly improve model execution efficiency and truly democratize ML for web developers.</p>
              <a class="mt-3 text-nn-t1 inline-flex items-center text-sm">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div class="flex rounded-sm h-full bg-nn-bgg1 px-6 py-4 flex-col">
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-nn-t1 text-white flex-shrink-0">
              <img alt="Intel" className="w-7 h-7" src={intel} />
              </div>
              <h2 class="text-md text-left text-nn-tgray1">Ningxin Hu<span className="text-sm xsm" title="Web Platform Engineering">Principal Engineer, WPE at Intel</span></h2>
            </div>
            <div class="flex-grow text-left">
              <p class="leading-relaxed text-nn-tgray1 font-light">The early empirical results from the Web Neural Network API implementations demonstrate tremendous power &amp; performance improvements of the Web AI workloads. Through access to the full native AI capabilities of the modern heterogeneous hardware, the Web Neural Network API enables a whole new transformative class of intelligent user experiences on the Open Web Platform across avariety of hardware, software, and device types.</p>
              <a class="mt-3 text-nn-t1 inline-flex items-center text-sm">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div class="flex rounded-sm h-full bg-nn-bgg1 px-6 py-4 flex-col">
            <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-nn-t1 text-white flex-shrink-0">
              <svg className="w-5 h-5" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"></path></svg>
              </div>
              <h2 class="text-md text-left text-nn-tgray1">Chai Chaoweeraprasit<span className="text-sm xsm" title="Machine Learning and Compute Platform">Principal Engineering Lead, MLCP at Microsoft</span></h2>
            </div>
            <div class="flex-grow text-left">
              <p class="leading-relaxed text-nn-tgray1 font-light">The Web Neural Network API is a very important step toward the future of the Intelligent Web where AI is infused into the user's daily web experiences. With the current advances and the pace of innovations in the AI hardware landscape, it'll help connect those experiences from the clouds and make them personal to theusers through seamless native hardware performance on the edge devices across the entire web. That's the future worth dreaming about!</p>
              <a class="mt-3 text-nn-t1 inline-flex items-center text-sm">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}