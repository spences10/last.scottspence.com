import Markdown from 'markdown-to-jsx'
import React from 'react'
import styled, { css } from 'styled-components'

const sharedCss = css`
  flex: 0 0 50%;
  padding: 1em;
`

const Demo = styled.section`
  display: flex;
  flex-grow: 1;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  @media all and (min-width: 1024px) {
    margin-left: 0;
    margin-right: 0;
  }
  @media all and (max-width: 500px) {
    flex-direction: column;
  }
`

const Compiled = styled.div`
  ${sharedCss};
  padding-left: 2rem;
  padding-right: 1rem;
  overflow: auto;
  overflow-x: hidden;
  background-color: black;
`

const Textarea = styled.textarea`
  ${sharedCss};
  border: 0;
  color: inherit;
  position: sticky;
  top: 0;
  font-family: 'Source Code Pro', Consolas, Monaco, monospace;
  font-size: inherit;
  max-height: 100vh;
  @media all and (max-width: 500px) {
    height: 300px;
    position: relative;
  }
`

export const MarkdownParser = () => {
  const [markdown, setMarkdown] = React.useState(`# This is Markdown`)

  const handleInput = React.useCallback(
    e => setMarkdown(e.target.value),
    []
  )
  return (
    <Demo>
      <Textarea onInput={handleInput} value={markdown} />
      <Compiled>
        <Markdown>{markdown}</Markdown>
      </Compiled>
    </Demo>
  )
}
