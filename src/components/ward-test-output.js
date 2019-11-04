import React from "react"
import tw from "tailwind.macro"

export const TerminalExample = tw.div`
  bg-black rounded text-left font-mono p-4 
`

export const PassMarker = tw.span`
  bg-green-600 text-black p-1 font-mono
`

export const TerminalText = tw.div`
  font-mono
  text-xs sm:text-sm md:text-sm whitespace-pre-wrap
`

export const Red = tw.span`
  text-red-600
`

export const Green = tw.span`
  text-green-600
`

export const GreenHighlight = tw.span`
  text-green-300 bg-green-600 font-semibold
`
export const RedHighlight = tw.span`
  text-red-300 bg-red-600 font-semibold
`

export const ModuleName = tw.span`
  text-gray-700
`

const TestOutputLine = ({marker, moduleName, lineNumber, description}) => (
    <TerminalExample>
      <TerminalText>
        <PassMarker>{marker}</PassMarker>
        <ModuleName> {moduleName}:{lineNumber}: </ModuleName>
        {description}
      </TerminalText>
    </TerminalExample>
)

export default TestOutputLine
