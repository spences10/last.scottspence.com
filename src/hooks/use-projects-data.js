import { graphql, useStaticQuery } from 'gatsby'

export const useProjectsData = () => {
  const {
    allProjectsJson: { nodes },
  } = useStaticQuery(
    graphql`
      query PROJECTS_DATA_QUERY {
        allProjectsJson {
          nodes {
            copy
            demo
            id
            image
            repo
            tags
            title
          }
        }
      }
    `
  )
  return nodes
}
