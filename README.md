## 🚀 Quick start

1.  **Start developing.**

    ```shell
    gatsby develop --host=0.0.0.0 --port=8000
    npm run deploy
    ```
 
## 🧐 What's inside?

http://127.0.0.1:8000/___graphql

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md
 
 ## Bug Fix

 ### node_modules/mdx-utils/index.js

 WebpackError: TypeError: codeString.trim is not a function
 
``` 
    let t = codeString

    try {
      t = t.trim()
    } catch (ex) {
      console.log(ex)
    }

    return {
      codeString: t,
```

### node_modules/prism-react-renderer/dist/index.js

``` 
    try {
        tokenArrSizeStack.push(content.length);
    } catch (ex) {
        console.log(ex);
    }
``` 