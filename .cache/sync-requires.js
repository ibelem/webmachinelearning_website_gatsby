const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-community-js": hot(preferDefault(require("/home/belem/github/webnn-website/src/pages/community.js"))),
  "component---src-pages-getting-started-js": hot(preferDefault(require("/home/belem/github/webnn-website/src/pages/getting-started.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/belem/github/webnn-website/src/pages/index.js")))
}

