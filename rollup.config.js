import {terser} from "rollup-plugin-terser";
import copy from 'rollup-plugin-copy';

export default {
    input: "index.js",
    output: {
        file: "dist/index.js",
    },
    external: [
        'public/*',
        'upload/*',
        'db/*',
        'test/*'
    ],
    plugins: [
        copy({
            targets: [
                {
                    src: 'public/*',
                    dest: 'dist/public'
                },
                {
                    src: 'upload/*',
                    dest: 'dist/upload'
                },
                {
                    src: 'db/*',
                    dest: 'dist/db'
                }
            ]
        }),
        terser()
    ],
};
