const objectToQueryParams = (obj: Object) => {
  const params = Object.entries(obj).map(
    ([key, value]) => `${key}=${value}`
  )
  return '?' + params.join('&')
}

export const ogImageUrl = (
  author: string,
  website: string,
  title: string
) => {
  const params = {
    author,
    website: website || `scottspence.com`,
    title,
    image: `https://scottspence.com/favicon.png`,
  }
  return `https://image-og.now.sh/og.jpg${objectToQueryParams(
    params
  )}`
}
