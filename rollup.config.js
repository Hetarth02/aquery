// this file will not affect the sandbox but will
// affect the deployment and dowload

import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
// import replace from "@rollup/plugin-replace"; // Enable this import and replace in plugins, this is important for Tippy.js Integration in Rollup.js see FAQ for more info.

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "index.js", // Change this src/index.js to build locally
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/bundle.js"
  },
  plugins: [
    // Tippy.js Integration in Rollup.js see FAQ for more info.
    // // Production config
    // replace({
    //   "process.env.NODE_ENV": JSON.stringify("production")
    // }),
    // // OR development config
    // replace({
    //   "process.env.NODE_ENV": JSON.stringify("development")
    // }),
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file — better for performance
      css: (css) => {
        css.write("public/bundle.css");
      }
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve(),
    commonjs(),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser()
  ]
};
