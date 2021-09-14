/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  '@github-profiles/components',
  '@github-profiles/store'
]);

module.exports = withTM({
  reactStrictMode: true,
})
