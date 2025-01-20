/** @type {import('next').NextConfig} */
const path = require('path')

const nextReactSvgConfig = {
  include: path.resolve(__dirname, 'assets/icons'),
}

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'dev.s3.medicalrecord.maorthonet.com',
      'localhost:3000',
      'orthonovas3-stag.s3.ap-northeast-1.amazonaws.com',
      'orthonovas3-prod.s3.ap-northeast-1.amazonaws.com',
      'orthonovas3-dev.s3.ap-northeast-1.amazonaws.com',
      'orthonovas3-devv.s3.ap-northeast-1.amazonaws.com',
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: `${process.env.BE_URL}/:path*`,
  //       basePath: false,
  //     },
  //   ]
  // },
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/{{member}}',
      skipDefaultConversion: true,
      preventFullImport: true,
    },
  },
  basePath: `${
    process.env.NEXT_PUBLIC_BASEPATH ? process.env.NEXT_PUBLIC_BASEPATH : ''
  }`,
}
const withReactSvg = require('next-react-svg')(nextReactSvgConfig)
const withFonts = require('next-fonts')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(
  withFonts(
    withReactSvg(
      process.env.NEXT_PUBLIC_BASEPATH
        ? { ...nextConfig, assetPrefix: process.env.NEXT_PUBLIC_BASEPATH }
        : nextConfig
    )
  )
)
