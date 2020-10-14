repro:

`npm install`

`npm run-script devserver`

open devtools in chrome

# Bug1 - Webpack

1. do some changes in `./src/components/a/index.ts`
2. observe what happens with `MYNAMESPACE` inside sources panel

# Bug 2 - Webpack-Dev-Server
1. add a `debugger` statement on line 5 inside `./src/components/a/index.ts`;
2. observe that breakpoint is not hit.
    - js.map file is updated: `http://localhost:56789/js/foo.chunk.js.map`
    - js file is not updated: `http://localhost:56789/js/foo.chunk.js`
