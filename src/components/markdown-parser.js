import Markdown from 'markdown-to-jsx'
import React from 'react'
import styled, { css } from 'styled-components'
import 'victormono'
import { linkHover, linkStyle, negMargin } from './shared-styles'

const sharedCss = css`
  flex: 0 0 50%;
  padding: 1em;
`

const Wrapper = styled.section`
  display: flex;
  flex-grow: 1;
  margin: 2rem 0;
  ${negMargin};
  a {
    ${linkStyle};
    ${linkHover};
  }
  h1 {
    font-size: 2.5rem;
    line-height: ${({ theme }) => theme.lineHeight.tight};
  }
  h2 {
    font-size: 2rem;
    margin-top: ${({ theme }) => theme.spacing[8]};
    line-height: ${({ theme }) => theme.lineHeight.none};
  }
  h3 {
    font-size: 1.75rem;
    margin-top: ${({ theme }) => theme.spacing[6]};
    line-height: ${({ theme }) => theme.lineHeight.none};
  }
  h4 {
    font-size: 1.5rem;
    margin-top: ${({ theme }) => theme.spacing[5]};
    line-height: ${({ theme }) => theme.lineHeight.none};
  }
  h5 {
    font-size: 1.25rem;
    margin-top: ${({ theme }) => theme.spacing[4]};
    line-height: ${({ theme }) => theme.lineHeight.none};
  }
  h6 {
    font-size: 1.2rem;
    margin-top: ${({ theme }) => theme.spacing[3]};
    line-height: ${({ theme }) => theme.lineHeight.none};
  }
  p,
  span {
    font-size: ${({ theme }) => theme.fontSize.lg};
    margin-top: ${({ theme }) => theme.spacing[3]};
    em {
      font-style: italic;
    }
    strong {
      font-weight: bold;
    }
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
  blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }
  pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 6px;
    font-family: 'Victor Mono', 'Source Code Pro', Consolas, Monaco;
    background-color: #6a737d;
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
  font-family: 'Victor Mono', 'Source Code Pro', Consolas, Monaco,
    monospace;
  font-size: ${({ theme }) => theme.fontSize.base};
  max-height: 100vh;
`

const markdownExample = `# Heading 1\n
## Heading 2\n
### Heading 3\n
#### Heading 4\n
##### Heading 5\n
###### Heading 6\n
This is a paragraph\n
**bold lettering**\n
_italic lettering_\n
~~Strikethrough~~
`

export const MarkdownParser = ({ markdownContent, style }) => {
  const [markdown, setMarkdown] = React.useState(
    !markdownContent ? markdownExample : markdownContent
  )

  const handleInput = React.useCallback(
    e => setMarkdown(e.target.value),
    []
  )
  const mdStyle = {
    ...style,
    marginTop: '-0.5rem',
  }
  return (
    <Wrapper>
      <Textarea onInput={handleInput} value={markdown} />
      <Compiled>
        <Markdown style={mdStyle}>{markdown}</Markdown>
      </Compiled>
    </Wrapper>
  )
}
