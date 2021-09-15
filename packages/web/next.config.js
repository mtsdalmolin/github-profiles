/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')([
  '@github-profiles/components',
  '@github-profiles/store'
])

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['cdn.fakercloud.com', 'avatars.githubusercontent.com']
  }
})
