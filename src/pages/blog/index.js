import React from "react"
import { Link } from "gatsby"
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
                    <div class="header flex items-end justify-between mb-12">
                        <div class="title">
                            <p class="text-3xl font-bold text-gray-800 mb-4">
                                Blog
                        </p>
                            <p class="text-xl font-light text-gray-400">
                                Get latest articles about WebNN API.
                        </p>
                        </div>
                        {/* <div class="text-end">
                        <form class="flex w-full max-w-sm space-x-3">
                            <div class=" relative ">
                                <input type="text" id="&quot;form-subscribe-Search" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter a title"/>
                                </div>
                                <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                    Search
                                </button>
                            </form>
                        </div> */}
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                        {
                            data.allMdx.nodes.map(({ excerpt, frontmatter }) => (
                                <div class="overflow-hidden shadow-lg rounded-sm w-full cursor-pointer m-auto">
                                    <Link to={ frontmatter.path } class="w-full block h-full">
                                        <div class="bg-white dark:bg-gray-800 w-full p-4">
                                            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                                {frontmatter.title}
                                            </p>
                                            <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                                                {excerpt}
                                            </p>
                                            <div class="flex items-center mt-4">
                                                <a href="#" class="block relative">
                                                    <img alt="profil" src={frontmatter.avatar} class="mx-auto object-cover rounded-full h-10 w-10 " />
                                                </a>
                                                <div class="flex flex-col justify-between ml-4 text-sm">
                                                    <p class="text-gray-800 dark:text-white">
                                                        {frontmatter.author}
                                                    </p>
                                                    <p class="text-gray-400 dark:text-gray-300">
                                                        {frontmatter.date}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
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
          path
          title
          author
          avatar
        }
        id
        excerpt(pruneLength: 250)
      }
    }
  }
`