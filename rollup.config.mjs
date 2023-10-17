export default {
  input: 'src/flakeid.js',
  output: [
    {
      sourcemap: true,
      file: 'dist/flakeid.js',
      format: 'cjs'
    },
    {
      sourcemap: true,
      file: 'dist/flakeid.mjs',
      format: 'esm'
    }
  ]
};