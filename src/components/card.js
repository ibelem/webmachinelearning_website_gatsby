import React from "react"
export default function Card() {
  return ( 
    <div className="pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="">    
                <div className="page-content grid-cols-3 grid justify-items-center">
                    <div className="card p-4 overflow-hidden">
                        <div className="content flex flex-col items-center">
                        <h2 className="title">
                            <img alt="TensorFlow.js" className="h-10 filter-grayscale hover:filter-none" src={'/img/trustedby/tensorflowjs.png'} />
                        </h2>
                        <p className="text-sm text-nn-tgray1 italic my-4">Google TensorFlow.js Team: Our goal is to utilize web technologies to provide our users the best performance, that includes WASM, WebGPU, and the <span className="text-nn-t1 font-bold">future WebNN standard</span>.</p>
                        <a className="w-1/2 flex items-center justify-center text-xs text-white bg-nn-t2 hover:text-white hover:bg-nn-t1 py-2 uppercase" href="https://github.com/tensorflow/tfjs">
                            TensorFlow.js Website
                        </a>
                        </div>
                    </div>
                    <div className="card p-4 overflow-hidden">
                        <div className="content flex flex-col items-center">
                        <h2 className="title">
                            <img alt="TensorFlow.js" className="h-10 filter-grayscale hover:filter-none" src={'/img/trustedby/onnx.png'} />
                        </h2>
                        <p className="text-sm text-nn-tgray1 italic my-4">Microsoft DirectML Team: The <span className="text-nn-t1 font-bold">WebNN API</span> allows JavaScript frameworks to tap into cutting-edge machine learning innovations in the OS and the hardware platform.</p>
                        <a className="w-1/2 flex items-center justify-center text-xs text-white bg-nn-t2 hover:text-white hover:bg-nn-t1 py-2 uppercase" href="https://onnx.ai">
                            ONNX Website
                        </a>
                        </div>
                    </div>
                    <div className="card p-4 overflow-hidden">
                        <div className="content flex flex-col items-center">
                        <h2 className="title">
                            <img alt="TensorFlow.js" className="h-10 filter-grayscale hover:filter-none" src={'/img/trustedby/openvino.png'} />
                        </h2>
                        <p className="text-sm text-nn-tgray1 italic my-4">Intel Web Team: The client side AI and deep learning applications could be accelerated with near native OpenVINO high-performance to the web by <span className="text-nn-t1 font-bold">WebNN API</span>.</p>
                        <a className="w-1/2 flex items-center justify-center text-xs text-white bg-nn-t2 hover:text-white hover:bg-nn-t1 py-2 uppercase" href="https://docs.openvinotoolkit.org/latest/index.html">
                            OpenVINO Website
                        </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}