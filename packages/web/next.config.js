/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  '@react-boilerplate/components',
  '@react-boilerplate/store'
]);

module.exports = withTM({
  reactStrictMode: true,
})
