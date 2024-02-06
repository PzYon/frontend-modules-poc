import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/utils-library.js',
        format: 'cjs'
    },
    plugins: [typescript()]
};
