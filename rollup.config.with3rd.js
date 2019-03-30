import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import globals from "rollup-plugin-node-globals";
import builtins from "rollup-plugin-node-builtins";
import serve from "rollup-plugin-serve";
import buble from "rollup-plugin-buble";

export default [
    {
        input: "src/with3rd.js",
        output: {
            name: "bundle",
            file: "dist/bundle.js",
            format: "iife",
            sourcemap: true,
        },
        plugins: [
            json(),
            globals(),
            builtins(),
            resolve({ browser: true }),
            commonjs({
                namedExports: {
                    "node_modules/twilio-video/es5/index.js": ["version"],
                },
            }),
            buble(),
            serve({ contentBase: "dist", port: 3000 }),
        ],
    },
];
