import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/blogindexlayout'
import SEO from '../components/seo'
import Toc from '../components/toc'

class BlogPost extends React.Component {
  render() {
    const post = this.props.data.mdx
    const { previous, next } = this.props.pageContext
    console.log(this.props.pageContext)

    return (
      <Layout>
        <SEO title={post.frontmatter.title} description={post.excerpt} />

        <div className="pb-6 blog text-nn-tgray1 grid grid-cols-1 md:grid-cols-4">
            <div className="mx-auto mt-8 col-span-1">doc list</div>
            <div className="col-span-1 md:col-span-2 mx-auto px-4 sm:px-6 lg:px-6">
                <div className="overflow-hidden w-full">
                  <div className="bg-white w-full p-4">
                      <div className="text-nn-t1 text-2xl font-medium mt-2 overflow-hidden overflow-ellipsis text-center">
                        {post.frontmatter.title}
                      </div>
                      <div className="text-nn-t2 text-center mb-4">
                                {post.frontmatter.date}
                      </div>
                      <div className="bp">
                        <MDXRenderer>{post.body}</MDXRenderer>
                      </div>
                      <div className="flex items-center mt-4 mb-2">
                          <span className="block relative">
                              <img alt="profil" src={post.frontmatter.avatar} className="mx-auto object-cover rounded-full h-10 w-10" />
                          </span>
                          <div className="flex flex-col justify-between ml-4 text-sm">
                              <p className="text-gray-800">
                                { post.frontmatter.author }
                              </p>
                              <p className="text-gray-400">
                                {post.frontmatter.date}
                              </p>
                          </div>
                      </div>
                  </div>
                  <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                        <li className="md:col-start-1 md:col-end-1">
                          {previous && (
                            <Link to={previous.fields.slug} className="text-nn-t1 hover:text-nn-t2" rel="prev">
                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" className="h-5 w-5 mb-1 inline-block svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>
                                {previous.frontmatter.title}
                            </Link>
                          )}
                        </li>
                        <li className="md:col-start-2 md:col-end-2 justify-self-end">
                          {next && (
                            <Link to={next.fields.slug} className="text-nn-t1 hover:text-nn-t2" rel="next">
                              {next.frontmatter.title} 
                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="h-5 w-5 mb-1 inline-block svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
                            </Link>
                          )}
                        </li>
                  </ul>
                </div>
            </div>
            <div className="mx-auto mt-8 col-span-1">
              {!!post.tableOfContents.items && <Toc post={post.tableOfContents} />}
            </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPost

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      tableOfContents
      frontmatter {
        date(formatString: "dddd, MMMM DD, YYYY")
        title
        avatar
        author
      }
      body
    }
  }
`
