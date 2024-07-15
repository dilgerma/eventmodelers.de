/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    webpack: function (config) {
        config.module.rules.push({
          test: /\.md$/,
          use: 'raw-loader',
        })
        return config
      },
}

module.exports = nextConfig

