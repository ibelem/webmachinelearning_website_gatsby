import React from "react"
import Helmet from "react-helmet"
import HeaderHome from "../components/headerhome"
import Feature from "../components/feature"
import Arch from "../components/arch"
import Card from "../components/card"
import SupportedPlatforms from "../components/platform"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div>
      <Helmet title="Web Neural Network API" defer={false}>
        {/* <script type="text/javascript" src="/belem.js"></script> */}
      </Helmet>
      <HeaderHome />
      <Feature />
      <Arch />
      <Card />
      <SupportedPlatforms />
      <Footer />
    </div>
  )
}
