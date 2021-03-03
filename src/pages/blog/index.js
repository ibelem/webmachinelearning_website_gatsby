import React from "react"
import { graphql } from "gatsby"

import Header from "../../components/header"
import Footer from "../../components/footer"

export default function BlogIndex({
    data, // this prop will be injected by the GraphQL query below.
}) {
    return (
        <div>
            <Header />
            <div className="py-10 bg-nn-bgg1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 blog-index">
                    {
                        data.allMdx.nodes.map(({ excerpt, frontmatter }) => (
                            <>
                                <h1>{ frontmatter.title }</h1>
                                <p> { frontmatter.date } </p>
                                <p> { excerpt } </p>
                            </>
                        ))
                    }
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export const query = graphql`
  query BLOG_INDEX {
    allMdx (
        sort: { order: DESC, fields: [frontmatter___date] }
    ){
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
        }
        id
        excerpt(pruneLength: 250)
      }
    }
  }
`