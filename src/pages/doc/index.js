import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../../components/seo'
import Layout from '../../components/layout'

class DocIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMdx.edges

    return (
      <div>
        <SEO
          title="Documentation"
          keywords={[`Documentation`, `WebNN`, `WebNN API`, `Web Neural Networks`, `Web Machine Learning`]}
        />
        <Layout>
        <div className="py-6 bg-nn-bgg1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="header flex items-end justify-between mb-6">
                    <div className="title">
                        <p className="text-2xl text-gray-800">
                            Documentation
                    </p>
                        <p className="font-light text-gray-400">
                            Welcome to the Web Neural Network API documentation
                    </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mb-4">
                    {posts.map(({ node }) => {
                      const title = node.frontmatter.title || node.fields.slug
                      return (
                        <div key={node.fields.slug} className="overflow-hidden shadow-sm rounded-sm w-full cursor-pointer m-auto">
                          <Link to={node.fields.slug} className="w-full block h-full">
                              <div className="bg-white dark:bg-gray-800 w-full p-4">
                                  <p className="text-nn-t1 text-xl font-medium mb-2 h-6 overflow-hidden overflow-ellipsis">
                                    {title}
                                  </p>
                                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} className="text-gray-400 dark:text-gray-300 font-light text-md">
                                  </p>
                              </div>
                          </Link>
                        </div>
                      )
                    })}
                </div>
              </div>
            </div>
          </Layout>
        </div>
    )
  }
}
export default DocIndex

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: "doc" } } } ) {
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
