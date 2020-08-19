import globby from 'globby'

const postsDirectory = './content/posts'

export async function getPostSlugs() {
  const files = await globby(postsDirectory, {
    expandDirectories: { extensions: ['md*'] },
  })

  let slugs = []

  files.map(async file => {
    slugs.push({
      params: {
        slug: file
          .substring(postsDirectory.length - 2, file.length)
          .replace(`/index.mdx`, ``)
          .replace(`/index.md`, ``),
      },
    })
  })

  return {
    slugs,
    fallback: false,
  }
}

export async function getPostPaths() {
  const files = await globby(postsDirectory, {
    expandDirectories: { extensions: ['md*'] },
  })

  return await files
}
