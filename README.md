# react-starter
A proof of concept React app that does not use create-react-app.

## Steps
1. Create Github repository, and clone to local computer
2. `npm init` to create `package.json`
3. Create folders `public` and `src`, add a `.gitignore` file
4. Create `public/index.html` and add copied content
    - root div element
    - special script tag
    - TODO: favicon, manifest.json
5. Add Babel (can use JavaScript syntax proposals >= Stage 3)
    1. Run command
    ```
    npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime @babel/plugin-syntax-dynamic-import

    npm install --save @babel/runtime
    ```
    2. Add `babel.config.js`
        - cache when environment is development or test, otherwise do not cache. TODO: test when webpack is setup
    3. Can now build with (powershell)
    ```
    $env:NODE_ENV = "development"; npx babel src --out-dir build --extensions '.js,.jsx,.ts,.tsx'
    ```
6. Add `tsconfig.json`
    - install typescript
    ```
    npm install -g typescript
    ```
    - Execute Run Build Task (Ctrl+Shift+B) from the global Terminal menu.
7. Use Webpack
    - install webpack
    ```
    npm install --save-dev webpack webpack-cli
    ```
    - Add `build` script to `package.json`
    - Add `webpack.config.js`
    - install loaders for css
    ```
    npm install --save-dev style-loader css-loader
    ```
    - install HtmlWebpackPlugin
    ```
    npm install --save-dev html-webpack-plugin
    ```
    - Setup webpack-dev-server
    ```
    npm install --save-dev webpack-dev-server
    ```
    - install babel loader
    ```
    npm install --save-dev babel-loader
    ```
    - webpack-bundle-analyzer
    ```
    npm install --save-dev webpack-bundle-analyzer

    // generate bundle profile
    npx webpack --profile --json --config webpack.prod.js| Out-file 'stats.json' -Encoding OEM

    // view the diagram
    npx webpack-bundle-analyzer stats.json
    ```
    - Separate development and production configurations
    ```
    npm install --save-dev webpack-merge
    ```
8. Production-ready server for testing
```
npm install http-server --save-dev
```