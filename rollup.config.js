import typescript from 'rollup-plugin-typescript2'
import css from "rollup-plugin-import-css";

import pkg from './package.json'

export default {
    input: 'src/index.tsx',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        strict: false
      }
    ],
    plugins: [
        css(),
        typescript({ objectHashIgnoreUnknownHack: true })
    ],
    external: ['react', 'react-dom']
  }