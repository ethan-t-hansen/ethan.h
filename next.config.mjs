import createMDX from '@next/mdx'
 
const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}
 
export default withMDX(nextConfig)
