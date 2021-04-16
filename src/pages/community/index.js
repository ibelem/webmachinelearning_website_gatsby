import React from "react"
import SEO from '../../components/seo'
import Layout from '../../components/layout'

export default function Community() {
  return (
    <div>
      <SEO
        title="Community"
        keywords={[`Community`, `WebNN`, `WebNN API`, `Web Neural Networks`, `Web Machine Learning`]}
      />
      <Layout>
        <div className="py-6 bg-nn-bgg1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="header flex items-end justify-between">
              <div className="title">
                <p className="text-2xl text-gray-600">
                  Community
                        </p>
                <p className="font-light text-gray-400">
                  The mission of the Machine Learning for the Web Community Group (WebML CG) is to make Machine Learning a first-class web citizen by incubating and developing a dedicated low-level Web API for machine learning inference in the browser.
                        </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-center w-full pt-10">
          <h2 className="text-nn-tgray1 mb-1 font-light">Interested in helping with this mission?</h2>
          <h1 className="sm:text-2xl text-2xl text-nn-t1">Join the Community</h1>
        </div>

        <div className="flex flex-wrap mt-6 max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 community">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4">
              <svg className="w-6 h-4 text-nn-t1 mr-4" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
              <div className="flex-grow">
                <p className="text-nn-t1"><a href="https://www.w3.org/accounts/request">Create a W3C Account</a></p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full community">
            <div className="h-full flex items-center border-gray-200 border p-4">
              <svg className="w-6 h-4 text-nn-t1 mr-4" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
              <div className="flex-grow">
                <p className="text-nn-t1"><a href="https://www.w3.org/community/webmachinelearning/join">Join the Community Group</a></p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full community">
            <div className="h-full flex items-center border-gray-200 border p-4">
              <svg className="w-10 h-4 text-nn-t1 mr-4" viewBox="0 0 320 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
              <div className="flex-grow">
                <p className="text-nn-tgray1">You're all set to <a href="https://github.com/webmachinelearning" className="text-nn-t1">contribute on GitHub</a> and <a href="https://github.com/webmachinelearning/meetings/" className="text-nn-t1">join meetings</a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-center w-full pt-6">
          <h1 className="sm:text-2xl text-2xl text-nn-t1">Spec Incubations</h1>
          <h2 className="text-nn-tgray1 mb-1 font-light">by W3C Machine Learning for the Web Community Group and Working Group</h2>
        </div>

        <div className="pt-6 mb-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 community">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="mb-6 md:mb-0 bg-white">

              <div className="flex flex-wrap justify-between lg:flex-no-wrap px-4 sm:px-4 py-6 text-nn-tgray1 text-sm text-white bg-nn-t1 specnn">
                <div className="mb-6 lg:w-9/12 lg:mb-0">
                  <h3 className="mb-3 text-white text-xl">Web Neural Network API</h3>
                  <p className="text-white">A dedicated low-level API for neural network inference hardware acceleration.
    </p>
                </div>
                <div className="lg:flex-no-shrink text-white mt-4">
                  Actively updated
    <strong className="text-xl block">Weekly</strong>
                </div>
              </div>
              <div className="px-4 sm:px-6 py-6 text-sm">
                <ul className="list-reset text-nn-tgray1 mb-4">
                  <li className="flex items-center mb-2">
                    <svg className="w-4 mr-2 text-nn-t1" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>
                    Application-level and Framework-level Use Cases
    </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-4 mr-2 text-nn-t1" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>
                    Programming Model
    </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-4 mr-2 text-nn-t1" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>
                    WebNN API
    </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-4 mr-2 text-nn-t1" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>
                    Code Examples
    </li>
                </ul>
                <a href="https://webmachinelearning.github.io/webnn/" className="text-sm text-nn-t1 inline-flex items-center no-underline uppercase">Learn it Now!
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="mb-6 md:mb-0">

              <div className="flex flex-wrap justify-between lg:flex-no-wrap px-4 sm:px-4 py-6 text-sm">
                <div className="mb-6 lg:w-9/12 lg:mb-0">
                  <h3 className="mb-3 text-nn-t1 text-xl">Model Loader API</h3>
                  <p className="text-nn-tgray1">An API to load a custom pre-trained machine learning model.
                  </p>
                </div>
              </div>
              <div className="px-4 sm:px-6 py-6 text-nn-tgray1 text-sm mt-5">
                <ul className="list-reset mb-4 leading-normal">
                  <li className="flex items-center mb-2">
                    <svg className="w-4 mr-2 text-nn-t1" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>
                    <span>Introduction</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-4 mr-2 text-nn-t1" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>
                    <span>Does not Support Training/Modifying a Model Federated learning</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-4 mr-2 text-nn-t1" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>

                    <span>Model Loader API</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-4 mr-2 text-nn-t1" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>
                    <span>Sample Code</span>
                  </li>
                </ul>
                <a href="https://webmachinelearning.github.io/model-loader/" className="text-sm text-nn-t1 inline-flex items-center no-underline uppercase">Learn it Now!
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

          </div>

        </div>

        <div className="flex flex-col text-center w-full mb-2">
          <h2 className="text-nn-tgray1 mb-1 font-light">Community</h2>
          <h1 className="sm:text-2xl text-2xl text-nn-t1">Web Machine Learning Community Group and Working Group</h1>
        </div>
        <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 mb-6 community">
          <div className="p-4 md:w-1/2">
            <div className="flex rounded-sm h-full bg-nn-bgg1 px-6 py-4 flex-col">
              <div className="flex-grow text-left">

                <h3 className="font-light my-2">Related Projects</h3>
                <ul className="text-sm ml-2">
                  <li className="mb-1"><a href="https://github.com/webmachinelearning/webnn-polyfill">webnn-polyfill</a></li>
                  <li className="mb-1"><a href="https://github.com/webmachinelearning/webnn-samples">webnn-samples</a></li>
                  <li className="mb-1"><a href="https://github.com/webmachinelearning/webnn-native">webnn-native</a></li>
                </ul>

              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2">
            <div className="flex rounded-sm h-full bg-nn-bgg1 px-6 py-4 flex-col">

              <div className="flex-grow text-left">
                <h3 className="font-light my-2">Community Group</h3>
                <ul className="text-sm ml-2">
                  <li className="mb-1"><a href="https://www.w3.org/community/webmachinelearning/participants">Participants</a></li>
                  <li className="mb-1"><a href="https://github.com/webmachinelearning/meetings/">Meetings</a></li>
                  <li className="mb-1"><a href="https://webmachinelearning.github.io/charter/">Charter</a></li>
                  <li className="mb-1"><a href="https://github.com/webmachinelearning">GitHub</a></li>
                  <li className="mb-1"><a href="https://lists.w3.org/Archives/Public/public-webmachinelearning/">Mailing list</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}