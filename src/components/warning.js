import React from "react"
import tw from "tailwind.macro"
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import Children from 'react-children-utilities'

const WarningStyle = tw.div`
  border-0 border-l-4 border-solid border-orange-500 p-4 pb-1 m-0 
`
export default ({children}) => (
    <WarningStyle css={{marginBottom: -5}}>
      {
        unified()
            .use(parse)
            .use(remark2react)
            .processSync(Children.onlyText(children)).contents
      }
    </WarningStyle>
)
