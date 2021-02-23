import React from "react"
export default function Card() {
  return ( 
    <div className="pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
            <div className="page-content grid-cols-3 grid justify-items-center">
                <div className="card p-6 overflow-hidden">
                    <div className="content flex flex-col items-center">
                    <h2 className="title">
                        <img alt="TensorFlow.js" className="h-10 filter-grayscale hover:filter-none" src={'/img/trustedby/tensorflowjs.png'} />
                    </h2>
                    <p className="text-xs text-nn-tgray1 italic font-light my-4">Google TF.js Team: Our goal is to utilize web technologies to provide our users the best performance, that includes WASM, WebGPU, and the <span className="text-nn-t1  font-medium">future WebNN standard</span>.</p>
                    <a className="w-1/2 flex items-center justify-center text-xs text-white bg-nn-t2 hover:text-white hover:bg-nn-t1 py-2 uppercase" href="https://www.tensorflow.org/js">
                        tensorflow.org/js
                    </a>
                    </div>
                </div>
                <div className="card p-6 overflow-hidden">
                    <div className="content flex flex-col items-center">
                    <h2 className="title">
                        <img alt="TensorFlow.js" className="h-10 filter-grayscale hover:filter-none" src={'/img/trustedby/onnx.png'} />
                    </h2>
                    <p className="text-xs text-nn-tgray1 italic font-light my-4">Microsoft DirectML Team: The <span className="text-nn-t1  font-medium">WebNN API</span> allows JavaScript frameworks to tap into cutting-edge machine learning innovations in the OS and the hardware platform.</p>
                    <a className="w-1/2 flex items-center justify-center text-xs text-white bg-nn-t2 hover:text-white hover:bg-nn-t1 py-2 uppercase" href="https://onnx.ai">
                        onnx.ai
                    </a>
                    </div>
                </div>
                <div className="card p-6 overflow-hidden">
                    <div className="content flex flex-col items-center">
                    <h2 className="title">
                        <img alt="TensorFlow.js" className="h-10 filter-grayscale hover:filter-none" src={'/img/trustedby/openvino.png'} />
                    </h2>
                    <p className="text-xs text-nn-tgray1 font-light italic my-4">Intel Web Team: The client side web AI and deep learning applications could be accelerated with near native high-performance by <span className="text-nn-t1  font-medium">WebNN API</span>.</p>
                    <a className="w-1/2 flex items-center justify-center text-xs text-white bg-nn-t2 hover:text-white hover:bg-nn-t1 py-2 uppercase" href="https://docs.openvinotoolkit.org/latest/index.html">
                        openvinotoolkit.org
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}