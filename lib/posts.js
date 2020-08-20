import globby from 'globby'

export const postsDirectory = 'content/posts'

export async function getPostPaths() {
  const files = await globby(postsDirectory, {
    expandDirectories: { extensions: ['md*'] },
  })

  return await files
}

export async function getPostSlugs() {
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

  // const files = await globby(postsDirectory, {
  //   expandDirectories: { extensions: ['md*'] },
  // })

  // let slugs = []

  // files.map(async file => {
  //   slugs.push({
  //     params: {
  //       slug: file
  //         .substring(postsDirectory.length - 2, file.length)
  //         .replace(`/index.mdx`, ``)
  //         .replace(`/index.md`, ``),
  //     },
  //   })
  // })

  // console.log('=====================')
  // console.log(`LIB:: ${slugs}`)
  // console.log('=====================')

  // return {
  //   slugs,
  //   fallback: false,
  // }
}
