import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from "react-helmet"
import HeaderHome from "../components/headerhome"
import Feature from "../components/feature"
import Arch from "../components/arch"
import Card from "../components/card"
import SupportedPlatforms from "../components/platform"
import Footer from "../components/footer"

class Home extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMdx.edges

    return (
      <div>
        <Helmet title="Web Neural Network API" defer={false}>
          {/* <script type="text/javascript" src="/belem.js"></script> */}
        </Helmet>
        <HeaderHome />
        <Feature />
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 blog-index">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div key={node.fields.slug} className="overflow-hidden w-full cursor-pointer m-auto">
                    <Link to={node.fields.slug} className="w-full block h-full">
                      <div className="bg-white w-full p-4">
                        <p className="text-nn-t1 text-xl font-medium mb-2 h-6 overflow-hidden overflow-ellipsis">
                          {title}
                        </p>
                        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} className="text-nn-tgray1 font-light text-md">
                        </p>
                        <div className="flex items-center mt-4">
                          <span className="block relative">
                            <img alt="profil" src={node.frontmatter.avatar} className="mx-auto object-cover rounded-full h-10 w-10 " />
                          </span>
                          <div className="flex flex-col justify-between ml-4 text-sm">
                            <p className="text-gray-800">
                              {node.frontmatter.author}
                            </p>
                            <p className="text-gray-400">
                              {node.frontmatter.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <Arch />
        <Card />
        <SupportedPlatforms />
        <Footer />
      </div>
    )
  }
}

export default Home

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 2) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            avatar
            author
          }
        }
      }
    }
  }
`

