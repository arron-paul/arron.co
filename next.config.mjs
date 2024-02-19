import nextMdx from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter'

const withMdx = nextMdx({
  options: {
    remarkPlugins: [remarkFrontmatter],
    experimental: {
      mdxRs: true,
    },
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    mdxRs: false,
  },
}

export default withMdx(nextConfig)
