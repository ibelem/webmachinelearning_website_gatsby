import React from "react"
export default function TrustedBy() {
  return ( 
    <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:text-center">
            <div className="mt-0 grid-cols-3 grid justify-items-center">
            <img alt="TensorFlow.js" className="h-10 filter-grayscale hover:filter-none" src={'/img/trustedby/tensorflowjs.png'} />
            <img alt="ONNX" className="h-10 filter-grayscale hover:filter-none" src={'/img/trustedby/onnx.png'} />
            <img alt="OpenVINO" className="h-10 filter-grayscale hover:filter-none" src={'/img/trustedby/openvino.png'} />
            </div>
        </div>
    </div>
  )
}
