import React from 'react'
import Header from "./header"
import Footer from "./footer"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    if (typeof window !== 'undefined') {
      // eslint-disable-next-line global-require
      require('smooth-scroll')('a[href*="#"]')
    }
    
    return (
      <div>
        <Header />
        { children }
        <Footer />
      </div>
    )
  }
}

export default Layout
