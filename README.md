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
    npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/preset-typescript
    ```
    2. Add `babel.config.js`
        - cache when environment is development or test, otherwise do not cache. TODO: test when webpack is setup
    3. Can now build with (powershell)
    ```
    $env:NODE_ENV = "development"; npx babel src --out-dir build --extensions '.js,.jsx,.ts,.tsx'
    ```