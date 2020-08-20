import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import Code from '../components/code'
import Layout from '../components/layout'
import { getPostPaths, getPostSlugs } from '../lib/posts'

const components = { code: Code }

export default function Post({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, components)
  return (
    <Layout>
      <h1>{frontMatter.title}</h1>
      {content}
    </Layout>
  )
}

export const getStaticPaths = async () => {
  return await getPostSlugs()
}

export const getStaticProps = async ({ params: { slug } }) => {
  // match the slug and the file path
  const files = getPostPaths(true)
  const matchedPath = (await files).filter(path => {
    return path.includes(slug.join(`/`))
  })
  const mdxSource = fs.readFileSync(matchedPath.toString())
  const { content, data } = matter(mdxSource)

  if (!matchedPath) {
    console.warn('No MDX file found for slug')
  }

  const mdx = await renderToString(content, components, null, data)

  return {
    props: {
      mdxSource: mdx,
      frontMatter: data,
    },
  }
}

// const postsDirectory = './content/posts'

// export const getStaticPaths = async () => {
//   const slugs = await getPostSlugs()
//   const paths = [
//     {
//       params: {
//         slug: '/private/convert-gatsby-starter-blog-to-mdx-part-two',
//       },
//     },
//   ]
//   return {
//     paths,
//     fallback: false,
//   }
// }

// export const getStaticProps = async ({ params: { slug } }) => {
//   console.log('=====================')
//   console.log(`Slllllllllllllllluuuggg:: ${slug}`)
//   console.log('=====================')
//   // const files = glob.sync(contentGlob)

//   // const fullPath = files.filter(item => {
//   //   const split = item.split('/')
//   //   const filename = split[split.length - 1]
//   //   return filename.replace('.mdx', '') === slug
//   // })[0]

//   // const mdxSource = fs.readFileSync(fullPath)
//   // const { content, data } = matter(mdxSource)

//   // if (!fullPath) {
//   //   console.warn('No MDX file found for slug')
//   // }

//   // const mdx = await renderToString(content, components, null, data)

//   return {
//     props: {
//       slug,
//       // mdxSource: mdx,
//       // frontMatter: data,
//     },
//   }
// }
