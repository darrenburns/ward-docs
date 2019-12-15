import React from "react"
import tw from "tailwind.macro"

export const TerminalExample = tw.div`
  bg-black rounded text-left font-mono p-4 mb-4
`

export const PassMarker = tw.span`
  bg-green-600 text-black p-1 font-mono
`

export const FailMarker = tw.span`
  bg-red-600 text-black p-1 font-mono
`

export const TerminalText = tw.div`
  font-mono
  my-1
  text-xs sm:text-sm md:text-sm whitespace-pre-wrap
`

export const Red = tw.span`
  text-red-600
`

export const Green = tw.span`
  text-green-600
`

export const Blue = tw.span`
  text-blue-600
`

export const GreenHighlight = tw.span`
  text-green-200 bg-green-600 font-semibold
`
export const RedHighlight = tw.span`
  text-red-100 bg-red-600 font-semibold
`

export const ModuleName = tw.span`
  text-gray-700
`

export const Flex = tw.div`flex`

export const OutputLineLeftCol = tw.div`whitespace-no-wrap mr-2`
export const OutputLineRightCol = tw.div``

export const TerminalCommand = ({children}) => (
    <TerminalExample>
      <TerminalText>
        <Flex>
          <OutputLineLeftCol>
            <Green>$</Green>
          </OutputLineLeftCol>
          <OutputLineRightCol>
            {children}
          </OutputLineRightCol>

        </Flex>
      </TerminalText>
    </TerminalExample>
)

export const TestOutputLine = ({marker, moduleName, lineNumber, description}) => {
  const Marker = marker === "PASS" ? PassMarker : FailMarker
  return (
      <TerminalText>
        <Flex>
          <OutputLineLeftCol>
            <Marker>{marker}</Marker>
            <ModuleName> {moduleName}:{lineNumber}: </ModuleName>
          </OutputLineLeftCol>
          <OutputLineRightCol>
            {description}
          </OutputLineRightCol>

        </Flex>
      </TerminalText>
  )
}
