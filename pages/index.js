import Link from 'next/link'
import { getPostSlugs } from '../lib/posts'

const Dump = props => (
  <div
    style={{
      fontSize: 20,
      border: '1px solid #efefef',
      padding: 10,
      background: 'white',
    }}
  >
    {Object.entries(props).map(([key, val]) => (
      <pre key={key}>
        <strong style={{ color: 'white', background: 'red' }}>
          {key} 💩
        </strong>
        {JSON.stringify(val, '', ' ')}
      </pre>
    ))}
  </div>
)

export default function Index({ postSlugs }) {
  const { paths } = postSlugs
  return (
    <>
      <h1>Yo</h1>
      <ul>
        {paths.map(({ params: { slug } }) => {
          const path = slug.join(`/`)
          {
            return (
              <li key={path}>
                <Link href="/[slug]" as={`/${path}`}>
                  <a>{path}</a>
                </Link>
              </li>
            )
          }
        })}
      </ul>
    </>
  )
}

export const getStaticProps = async () => {
  const postSlugs = await getPostSlugs()
  return {
    props: {
      postSlugs,
    },
  }
}
