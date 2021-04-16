import React from "react"
import SEO from '../../components/seo'
import Layout from '../../components/layout'

export default function Spec() {
  return (
    <div>
      <SEO
        title="Spec"
        keywords={[`Spec`, `WebNN`, `WebNN API`, `Web Neural Networks`, `Web Machine Learning`]}
      />
      <Layout>
        <div className="py-6 bg-nn-bgg1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="header flex items-end justify-between">
              <div className="title">
                <p className="text-2xl text-gray-600">
                  Spec Incubations
                        </p>
                <p className="font-light text-gray-400">
                  The W3C Machine Learning for the Web Community Group (WebML CG) and Working Group (WebML WG) are incubating and working for following two machine learning relevant specifications.
                        </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="mb-6 md:mb-0 bg-white">

              <div className="flex flex-wrap justify-between lg:flex-no-wrap px-4 sm:px-6 py-8 text-nn-tgray1 text-sm text-white bg-nn-t1 specnn">
                <div className="mb-6 lg:w-9/12 lg:mb-0">
                  <h3 className="mb-3 text-white text-2xl">Web Neural Network API</h3>
                  <p className="text-white">A dedicated low-level API for neural network inference hardware acceleration.
    </p>
                </div>
                <div className="lg:flex-no-shrink text-white mt-4">
                  Actively updated
    <strong className="text-xl block">Weekly</strong>
                </div>
              </div>
              <div className="px-4 sm:px-6 py-8 text-sm">
                <ul className="list-reset text-nn-tgray1 mb-8">
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
                <a href="https://webmachinelearning.github.io/webnn/" className="mt-3 text-sm text-nn-t1 inline-flex items-center no-underline uppercase">Learn it Now!
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="mb-6 md:mb-0 bg-grey-darkest">

              <div className="flex flex-wrap justify-between lg:flex-no-wrap px-4 sm:px-6 py-8 text-sm">
                <div className="mb-6 lg:w-9/12 lg:mb-0">
                  <h3 className="mb-3 text-nn-t1 text-2xl">Model Loader API</h3>
                  <p className="text-nn-tgray1">An API to load a custom pre-trained machine learning model.
    </p>
                </div>
              </div>
              <div className="px-4 sm:px-6 py-8 text-nn-tgray1 text-sm mt-5">
                <ul className="list-reset mb-8 leading-normal">
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
                <a href="https://webmachinelearning.github.io/model-loader/" className="mt-3 text-sm text-nn-t1 inline-flex items-center no-underline uppercase">Learn it Now!
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

          </div>

        </div>
      </Layout>
    </div>
  )
}