import React from "react"
export default function Card() {
  return ( 
    <div className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10">    
            <div className="page-content">
                <div className="card rounded-md">
                    <div className="content">
                    <h2 className="title">Live Demos</h2>
                    <p className="copy text-sm italic font-thin mt-8 mb-8">Check out all of these live demos!</p>
                    <button className="w-full flex items-center justify-center text-xs text-white bg-blue-600 hover:text-white hover:bg-nn-bg py-2 uppercase">
                        Live Demos
                    </button>
                    </div>
                </div>
                <div className="card rounded-md">
                    <div className="content">
                    <h2 className="title">Performance</h2>
                    <p className="copy text-sm italic font-thin mt-8 mb-8">The performance</p>
                    <button className="w-full flex items-center justify-center text-xs text-white bg-blue-600 hover:text-white hover:bg-nn-bg py-2 uppercase">
                        Performance
                    </button>
                    </div>
                </div>
                <div className="card rounded-md">
                    <div className="content">
                    <h2 className="title">Benchmark</h2>
                    <p className="copy text-sm italic font-thin mt-8 mb-8">The MLPerf like Web Machine Learning benchmark.</p>
                    <button className="w-full flex items-center justify-center text-xs text-white bg-blue-600 hover:text-white hover:bg-nn-bg py-2 uppercase">
                        Benchmark
                    </button>
                    </div>
                </div>
                <div className="card rounded-md">
                    <div className="content">
                    <h2 className="title">Spec</h2>
                    <p className="copy text-sm italic font-thin mt-8 mb-8">Check the W3C Web Neural Network API right now!</p>
                    <button className="w-full flex items-center justify-center text-xs text-white bg-blue-600 hover:text-white hover:bg-nn-bg py-2 uppercase">
                        Spec
                    </button>
                    </div>
                </div>
            </div>
 
        </div>
    </div>
    </div>
  )
}