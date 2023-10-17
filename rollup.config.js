module.exports = {
  input: 'src/flakeid.js',
  output: [
    {
      file: 'dist/flakeid.js',
      format: 'cjs'
    },
    {
      file: 'dist/flakeid.mjs',
      format: 'esm'
    }
  ]
};