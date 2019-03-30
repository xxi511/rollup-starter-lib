import serve from "rollup-plugin-serve";
import buble from "rollup-plugin-buble";

export default [
    {
        input: "src/no3rd.js",
        output: {
            name: "bundle",
            file: "dist/bundle.js",
            format: "iife",
            sourcemap: true,
        },
        plugins: [buble(), serve({ contentBase: "dist", port: 3000 })],
    },
];
