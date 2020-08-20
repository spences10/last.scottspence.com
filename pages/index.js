export default function Index(params) {
  return <h1>Yo</h1>
}

export const getServerSideProps = async () => {
  // console.log('=====================')
  // console.log(`SLUGS :::`, await getPostSlugs())
  // console.log('=====================')
  // console.log('=====================')
  // console.log(`PATHS :::`, await getPostPaths())
  // console.log('=====================')
  return { props: {} }
}
