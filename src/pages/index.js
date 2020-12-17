import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div>
      <Header headerText="home"/>
      <div>Hello Home</div>
      <Link to="/getting-started/">Getting Started</Link>
      <Link to="/community/">Community</Link>
      <button class="primary-button">Click me</button>
    </div>
  )
}
