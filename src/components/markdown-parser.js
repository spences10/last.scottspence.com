import Markdown from 'markdown-to-jsx'
import React from 'react'
import styled, { css } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import { negMargin } from './shared-styles'

const sharedCss = css`
  flex: 0 0 50%;
  padding: 1em;
`

const Wrapper = styled.section`
  display: flex;
  flex-grow: 1;
  margin: 2rem 0;
  ${negMargin};
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1.25rem;
  }
  h6 {
    font-size: 1.2rem;
  }
  p {
    em {
      font-weight: bold;
    }
    font-size: 1rem;
  }
  ul {
    list-style-type: disc;
    li {
      font-size: 1rem;
    }
  }
  ol {
    list-style-type: decimal;
    li {
      font-size: 1rem;
    }
  }
`

const Compiled = styled.div`
  ${sharedCss};
  padding-left: 2rem;
  padding-right: 1rem;
  overflow: auto;
  overflow-x: hidden;
  background-color: var(
    --colour-background-two,
    ${({ theme }) => theme.colors.gray[200]}
  );
`

const Textarea = styled.textarea`
  ${sharedCss};
  border: 0;
  color: inherit;
  position: sticky;
  background-color: var(
    --colour-background-two,
    ${({ theme }) => theme.colors.gray[200]}
  );
  top: 0;
  font-family: 'Source Code Pro', Consolas, Monaco, monospace;
  font-size: inherit;
  max-height: 100vh;
`

const markdownExample = `
# This is a heading

This is a paragraph

_bold lettering_

~~Strikethrough~~
`

export const MarkdownParser = ({ markdownContent }) => {
  const [markdown, setMarkdown] = React.useState(
    !markdownContent ? markdownExample : markdownContent
  )

  const handleInput = React.useCallback(
    e => setMarkdown(e.target.value),
    []
  )
  const { value } = useDarkMode()
  return (
    <Wrapper>
      <Textarea onInput={handleInput} value={markdown} />
      <Compiled>
        <Markdown>{markdown}</Markdown>
      </Compiled>
    </Wrapper>
  )
}
