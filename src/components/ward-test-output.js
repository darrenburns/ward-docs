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

export const SkipMarker = tw.span`
  bg-blue-600 text-black p-1 font-mono
`

export const XfailMarker = tw.span`
  bg-yellow-500 text-black p-1 font-mono
`

export const XpassMarker = tw.span`
  bg-purple-600 text-black p-1 font-mono
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

export const Cyan = tw.span`
  text-teal-500
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

export const Grey = tw.span`
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

export const TestOutputLine = ({marker, moduleName, lineNumber, description, note}) => {
  let Marker = PassMarker
  if (marker === "FAIL") {
    Marker = FailMarker
  } else if (marker === "SKIP") {
    Marker = SkipMarker
  } else if (marker === "XFAI") {
    Marker = XfailMarker
  } else if (marker === "XPAS") {
    Marker = XpassMarker
  }
  return (
      <TerminalText>
        <Flex>
          <OutputLineLeftCol>
            <Marker>{marker}</Marker>
            <Grey> {moduleName}:{lineNumber}: </Grey>
          </OutputLineLeftCol>
          <OutputLineRightCol>
            {description}  <Grey>{note}</Grey>
          </OutputLineRightCol>
        </Flex>
      </TerminalText>
  )
}
