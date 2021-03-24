import React from "react"
import tensorflowjs from "../../content/assets/trustedby/tensorflowjs.png"
import onnx from "../../content/assets/trustedby/onnx.png"
import openvino from "../../content/assets/trustedby/openvino.png"
export default function TrustedBy() {
  return ( 
    <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:text-center">
            <div className="mt-0 grid-cols-3 grid justify-items-center">
            <img alt="TensorFlow.js" className="h-10 filter-grayscale hover:filter-none" src={tensorflowjs} />
            <img alt="ONNX" className="h-10 filter-grayscale hover:filter-none" src={onnx} />
            <img alt="OpenVINO" className="h-10 filter-grayscale hover:filter-none" src={openvino} />
            </div>
        </div>
    </div>
  )
}
