import React from 'react'
import { down, up } from 'styled-breakpoints'
import styled from 'styled-components'
import { inlineCode } from './page-elements'
import { linkHover, linkStyle } from './shared-styles'

const projects = [
  {
    title: `MDX Embed`,
    repo: `https://github.com/PaulieScanlon/mdx-embed/`,
    demo: `https://www.mdx-embed.com/`,
    tags: ['gatsby', 'mdx'],
    image: ``,
    copy: [
      `MDX Embed allows you to embed popular 3rd party media content such as YouTube videos, Tweets, Instagram posts and many more straight into your .mdx`,
    ],
  },
  {
    title: `React SEO Component`,
    repo: `https://github.com/spences10/react-seo-component/`,
    demo: `https://www.npmjs.com/package/react-seo-component`,
    tags: ['typescript', 'react'],
    image: `react-seo-component.png`,
    copy: [
      `A React component for adding Open Graph and SEO meta tags to your projects.`,
    ],
  },
  {
    title: `ASI Style Guide`,
    repo: ``,
    demo: `https://www.asi.style/`,
    tags: ['gatsby', 'styled-components'],
    image: `asi-style.png`,
    copy: [
      `Aberdeen Standard Investments style guide made with Gatsby using MDX`,
    ],
  },
  {
    title: `City 2 Sea`,
    repo: ``,
    demo: `https://beagoodasshole.com/`,
    tags: ['gatsby', 'styled-components'],
    image: `city-to-sea.png`,
    copy: [
      `A playful landing page to help raise awareness of the issues caused by flushing wet wipes down the toilet. Featuring the voice of (Gollum) Andy Serkis`,
    ],
  },
  {
    title: `Cheat Sheets`,
    repo: `https://github.com/spences10/cheat-sheets`,
    demo: `https://cheatsheets.xyz`,
    tags: ['gatsby', 'mdx', 'styled-components'],
    image: `cheat-sheets.png`,
    copy: [
      `Everyday commands, config, hints and tips used for modern web development.`,
    ],
  },
  {
    title: `hacker-nuxt`,
    repo: `https://github.com/spences10/hacker-nuxt`,
    demo: `https://hacker-nuxt.now.sh`,
    tags: ['vue', 'tailwid'],
    image: `hnc.png`,
    copy: [`A simple Hackernews clone made with Nuxt`],
  },
  {
    title: `cv / resume`,
    repo: `https://github.com/spences10/cv`,
    demo: `https://mecv.xyz`,
    tags: ['gatsby', 'styled-components'],
    image: `cv.png`,
    copy: [`My CV using Gatsby and the JSON Resume schema`],
  },
  {
    title: `c-counter`,
    repo: `https://github.com/spences10/c-counter`,
    demo: `https://c-counter.now.sh/`,
    tags: ['gatsby', 'styled-components', 'api'],
    image: `ccounter.png`,
    copy: [`Cryptocurrency ticker with react`],
  },
  {
    title: `Framework of the Day`,
    repo: `https://github.com/spences10/framework-of-the-day`,
    demo: `https://fotd.now.sh/`,
    tags: ['react'],
    image: `fotd.png`,
    copy: `Get your fresh JavaScript frameworks here!`,
  },
]

const ProjectsWrapper = styled.div`
  position: relative;
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing[5]};
  ${down('sm')} {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto;
  }
  ${up('lg')} {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 -20%;
  }
  ${up('xl')} {
    grid-template-columns: repeat(3, 1fr);
    margin: 0 -50%;
  }
  margin-top: ${({ theme }) => theme.spacing[8]} !important;

  h3 {
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    font-weight: 500;
    line-height: ${({ theme }) => theme.lineHeight.none};
  }
  small {
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin-right: ${({ theme }) => theme.spacing[2]};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray[500]};
  }
  a {
    display: inline-block;
    ${linkStyle};
    ${linkHover};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    text-transform: uppercase;
    margin-top: ${({ theme }) => theme.spacing[2]};
  }
  span {
    display: inline-block;
    font-family: ${({ theme }) => theme.fontFamily.mono};
    font-size: ${({ theme }) => theme.fontSize.sm};
    background-color: ${({ theme }) => theme.colors.gray[400]};
    margin-right: ${({ theme }) => theme.spacing[2]};
    padding: 0 ${({ theme }) => theme.spacing[1]};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    margin-top: ${({ theme }) => theme.spacing[1]};
    ${inlineCode}
  }
  p {
    margin-top: ${({ theme }) => theme.spacing[4]};
  }
  .tags {
    margin-top: ${({ theme }) => theme.spacing[1]};
  }
`

const ProjectCard = styled.article`
  height: 250px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray[500]};
  padding: ${({ theme }) => theme.spacing[4]};
  background-image: url('${({ url }) => url}');
`

const Tags = ({ tags }) => {
  return (
    <p className="tags">
      {tags.map(t => {
        return <span>{t}</span>
      })}
    </p>
  )
}

export const Projects = () => {
  return (
    <ProjectsWrapper>
      {projects.map(p => {
        return (
          <ProjectCard /*url={p.image}*/>
            <h3>{p.title}</h3>
            {p.repo ? (
              <small>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
              </small>
            ) : null}
            <small>
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </small>
            <Tags tags={p.tags} />
            <p>{p.copy}</p>
          </ProjectCard>
        )
      })}
    </ProjectsWrapper>
  )
}
