import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'


export default ({children, className}) => {
  const language = className.replace(/language-/, ``)


  function removeTrailingEmptyLine(tokens) {
    const finalLineTokens = tokens[tokens.length - 1]
    if (finalLineTokens.length === 1 && finalLineTokens[0].empty) {
      tokens.pop()
    }
    return tokens
  }

  const lines = (tokens, getLineProps, getTokenProps) =>
      removeTrailingEmptyLine(tokens).map((line, i) => {
        return (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
        )
      })


  const prismRenderer = ({className, style, tokens, getLineProps, getTokenProps}) => (
      <pre className={className} style={{...style, padding: `16px`}}>
          {lines(tokens, getLineProps, getTokenProps)}
      </pre>
  )

  return (
      <Highlight {...defaultProps} code={children} language={language} theme={theme}>
        {prismRenderer}
      </Highlight>
  )
}