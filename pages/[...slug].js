// import hydrate from 'next-mdx-remote/hydrate'
import Layout from '../components/layout'
import { getPostPaths } from '../lib/posts'

export default function Post({ mdxSource, frontMatter, slug }) {
  console.log('=====================')
  // console.log(`source::: ${mdxSource}`)
  // console.log(`frontmatter::: ${frontMatter}`)
  console.log(`slug::: ${slug}`)
  console.log('=====================')
  return <Layout>yo</Layout>
}

export const getStaticPaths = async () => {
  const files = await getPostPaths()

  const paths = files.map(path => {
    const split = path.split(`/`)
    // remove `content/posts` and `index.md*`
    const removedIndexFile = split.splice(2, split.length - 3)

    return {
      params: {
        slug: removedIndexFile,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  return {
    props: { slug },
  }
}
