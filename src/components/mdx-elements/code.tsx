// https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-minimal-blog/src/components/code.tsx
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import React, { FunctionComponent } from 'react'
import {
  LiveEditor,
  LiveError,
  LivePreview,
  LiveProvider,
} from 'react-live'
import { Box } from 'theme-ui'

function getParams(className = ``) {
  const [lang = ``, params = ``] = className.split(`:`)

  return [
    // @ts-ignore
    lang.split(`language-`).pop().split(`{`).shift(),
  ].concat(
    // @ts-ignore
    params.split(`&`).reduce((merged, param) => {
      const [key, value] = param.split(`=`)
      // @ts-ignore
      merged[key] = value
      return merged
    }, {})
  )
}

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = (meta: string) => {
  if (!RE.test(meta)) {
    return () => false
  }
  const lineNumbers = RE.exec(meta)![1]
    .split(`,`)
    .map(v => v.split(`-`).map(x => parseInt(x, 10)))
  return (index: number) => {
    const lineNumber = index + 1
    const inRange = lineNumbers.some(([start, end]) =>
      end
        ? lineNumber >= start && lineNumber <= end
        : lineNumber === start
    )
    return inRange
  }
}

interface CodeProps {
  codeString: string
  noLineNumbers: boolean
  className: string
  metastring: string
}

export const Code: FunctionComponent<CodeProps> = ({
  codeString,
  noLineNumbers = false,
  className: blockClassName,
  metastring = ``,
  ...props
}) => {
  const showLineNumbers = true

  const [language, { title = `` }]: any = getParams(blockClassName)
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  const hasLineNumbers =
    !noLineNumbers && language !== `noLineNumbers` && showLineNumbers

  // @ts-ignore
  if (props[`react-live`]) {
    return (
      <Box as="div" variant="styles.pre" role="code-block">
        <LiveProvider code={codeString} noInline theme={theme}>
          <LiveEditor data-name="live-editor" />
          <LiveError />
          <LivePreview data-name="live-preview" />
        </LiveProvider>
      </Box>
    )
  }
  return (
    <Box as="div">
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={theme}
      >
        {({
          className,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <>
            {title && (
              <div className="code-title">
                <div>{title}</div>
              </div>
            )}
            <div
              className="gatsby-highlight"
              data-language={language}
            >
              <Box
                as="pre"
                role="code-block"
                variant="styles.pre"
                className={className}
                style={style}
                data-linenumber={hasLineNumbers}
              >
                {tokens.map((line, i) => {
                  const lineProps = getLineProps({ line, key: i })

                  if (shouldHighlightLine(i)) {
                    lineProps.className = `${lineProps.className} highlight-line`
                  }

                  return (
                    <div {...lineProps}>
                      {hasLineNumbers && (
                        <span className="line-number-style">
                          {i + 1}
                        </span>
                      )}
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  )
                })}
              </Box>
            </div>
          </>
        )}
      </Highlight>
    </Box>
  )
}
