import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../../components/seo'
import Layout from '../../components/blogindexlayout'
import weixin_white from "../../../content/assets/supported/weixin_white.png"

class GetStarted extends React.Component {
    render() {
        const { data } = this.props
        const posts = data.allMdx.edges

        return (
            <div>
                <SEO
                    title="Get Started"
                    keywords={[`Get Started`, `WebNN`, `WebNN API`, `Web Neural Networks`, `Web Machine Learning`]}
                />
                <Layout>
                    <div className="py-6 bg-nn-bgg1">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="header flex items-end justify-between">
                                <div className="title">
                                    <p className="text-2xl text-gray-600">
                                        Get Started
                                    </p>
                                    <p className="font-light text-gray-400">
                                        Web Neural Network API can be used in both browser and Node.js environments, as backend of TenforFlow.js and other ML js frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="flex justify-center items-center">
                            <div className="mx-2 flex flex-col justify-between w-72 sm:w-96 h-36 overflow-hidden cursor-pointer gs-browser-web">
                                <div className="flex justify-between items-center ml-4">
                                    <div className="border text-white px-2 py-1 mt-2 flex items-center font-bold text-sm">Website and Web Apps</div>
                                    <div className="w-14 h-14 flex flex-col-reverse">
                                        <svg className="w-10 h-10 text-white" viewBox="0 0 496 512"><path fill="white" d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z"></path></svg></div>
                                </div>
                                <div className="px-4 flex flex-col mr-4 mb-2">
                                    <p className="text-white">
                                        Ready to dive in?
                                    </p>
                                </div>
                            </div>

                            <div className="mx-2 flex flex-col justify-between w-72 sm:w-96 h-36 overflow-hidden cursor-pointer gs-browser-node">
                                <div className="flex justify-between items-center ml-4">
                                    <div className="border text-white px-2 py-1 mt-2 flex items-center font-bold text-sm">Node.js Apps</div>
                                    <div className="w-14 h-14 flex flex-col-reverse">
                                        <svg className="w-10 h-10 text-white" viewBox="0 0 448 512"><path fill="white" d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"></path></svg>
                                    </div>
                                </div>
                                <div className="px-4 flex flex-col mr-4 mb-2">
                                    <p className="text-white">I am a Node.js developer</p>
                                </div>
                            </div>

                            <div className="mx-2 flex flex-col justify-between w-72 sm:w-96 h-36 overflow-hidden cursor-pointer gs-browser-wechat">
                                <div className="flex justify-between items-center ml-4">
                                    <div className="border text-white px-2 py-1 mt-2 flex items-center font-bold text-sm">MiniApps</div>
                                    <div className="w-14 h-14 flex flex-col-reverse">
                                        <img className="w-12 h-12" src={weixin_white} />
                                    </div>
                                </div>
                                <div className="px-4 flex flex-col mr-4 mb-2">
                                    <p className="text-white">For Tencent and other small programs</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="mx-2 flex flex-col pt-4 justify-start w-72 sm:w-96 h-48 overflow-hidden cursor-pointer gs-l">
                                <div className="gs-ul ml-4 text-sm text-nn-tgray1 mb-2">Practical step-by-step guides to help you run machine learning models on browser.</div>
                                <ul className="gs-ul ml-4 text-sm">
                                    {posts.map(({ node }, index) => {
                                        const title = node.frontmatter.title || node.fields.slug
                                        return (
                                            <li key={index} className="gs-li overflow-ellipsis">
                                                <svg className="text-nn-t1 w-3 h-4 mb-1 inline-block mr-2" viewBox="0 0 384 512">
                                                    <path fill="currentColor" d="M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-60V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z">
                                                    </path></svg>
                                                <Link to={node.fields.slug} className="gs-link">
                                                    {title}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                            <div className="mx-2 flex flex-col pt-4 justify-start w-72 sm:w-96 h-48 overflow-hidden cursor-pointer gs-l">
                                <ul className="gs-ul ml-4 text-sm">
                                    {posts.map(({ node }, index) => {
                                        const title = node.frontmatter.title || node.fields.slug
                                        return (
                                            <li key={index} className="gs-li overflow-ellipsis">
                                                <svg className="text-nn-t1 w-3 h-4 mb-1 inline-block mr-2" viewBox="0 0 384 512">
                                                    <path fill="currentColor" d="M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-60V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z">
                                                    </path></svg>
                                                <Link to={node.fields.slug} className="gs-link">
                                                    {title}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                            <div className="mx-2 flex flex-col pt-4 justify-start w-72 sm:w-96 h-48 overflow-hidden cursor-pointer gs-l">
                                <ul className="gs-ul ml-4 text-sm">
                                    {posts.map(({ node }, index) => {
                                        const title = node.frontmatter.title || node.fields.slug
                                        return (
                                            <li key={index} className="gs-li overflow-ellipsis">
                                                <svg className="text-nn-t1 w-3 h-4 mb-1 inline-block mr-2" viewBox="0 0 384 512">
                                                    <path fill="currentColor" d="M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-60V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z">
                                                    </path></svg>
                                                <Link to={node.fields.slug} className="gs-link">
                                                    {title}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                        </div>
                    </div>
                </Layout>
            </div>
        )
    }
}
export default GetStarted

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: "getstarted" } } } ) {
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
