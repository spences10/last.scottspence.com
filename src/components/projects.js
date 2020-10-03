import React from 'react'
import { down, up } from 'styled-breakpoints'
import styled from 'styled-components'
import { useProjectsData } from '../hooks/use-projects-data'
import { inlineCode } from './page-elements'
import { linkHover, linkStyle } from './shared-styles'

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
  position: relative;
  height: 250px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray[500]};
  padding: ${({ theme }) => theme.spacing[4]};
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
  const projects = useProjectsData()

  return (
    <ProjectsWrapper>
      {projects.map(p => {
        return (
          <ProjectCard url={p.image}>
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
