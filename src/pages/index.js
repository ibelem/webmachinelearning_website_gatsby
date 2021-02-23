import React from "react"
import Helmet from "react-helmet"
import Header from "../components/header"
import Feature from "../components/feature"
import Card from "../components/card"
import SupportedPlatforms from "../components/platform"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div>
      <Helmet title="Web Neural Network API" defer={false}>
        <script type="text/javascript" src="/belem.js"></script>
      </Helmet>
      <Header />
      <Feature />
      <Card />
      <SupportedPlatforms />
      <Footer />
    </div>
  )
}
