import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function Demo() {
  return (
    <div>
      <Header />
        <div className="py-10 my-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mx-auto">
           <h1>Demo</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}