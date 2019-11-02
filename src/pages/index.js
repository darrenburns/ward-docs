import React from "react"
import SEO from "../components/seo"
import DocsLayout from "../components/docs-layout"
import tw from "tailwind.macro"


const GiantLogo = tw.h1`
  text-green-600
`

const IndexContentWrapper = tw.section`
  text-center px-8 lg:px-12 xl:px-32
`

const IndexTextIntro = tw.h3`
  p-4 font-semibold
`

const IndexTextExample = tw.div`
  p-4
`

const TerminalExample = tw.div`
  bg-black rounded text-left font-mono my-2 p-4 text-xs lg:text-md xl:text-lg whitespace-pre-wrap
`

const PassMarker = tw.span`
  bg-green-600 text-black p-1
`

const ModuleName = tw.span`
  text-gray-700
`

const Red = tw.span`
  text-red-600
`

const Green = tw.span`
  text-green-600
`

const GreenHighlight = tw.span`
  text-green-300 bg-green-600 font-semibold
`
const RedHighlight = tw.span`
  text-red-300 bg-red-600 font-semibold
`


const IndexPage = () => (
    <DocsLayout>
      <SEO title="Ward"/>
      <IndexContentWrapper>
        <GiantLogo css={{fontSize: 82}}>W</GiantLogo>
        <IndexTextIntro>
          Ward is a modern testing framework for Python 3.6 and beyond.
        </IndexTextIntro>

        <IndexTextExample>
          Understand failures quickly with colourful unified diff output.
          <TerminalExample>

            Showing diff of <Green>expected value</Green> vs <Red>actual value</Red>:<br/><br/>
            <Green css={{marginLeft: 40}}>['apples', 'bananas', <GreenHighlight>'kiwi</GreenHighlight>s']</Green><br/>
            <Red css={{marginLeft: 40}}>['apples', 'bananas', <RedHighlight>'orange</RedHighlight>s']</Red>
          </TerminalExample>
        </IndexTextExample>

        <IndexTextExample>
          Describe your tests with strings, not function names.
          <TerminalExample>
            <PassMarker>PASS</PassMarker>
            <ModuleName> test_palindrome:12: </ModuleName>
            palindrome("noon") returns True
          </TerminalExample>
        </IndexTextExample>
      </IndexContentWrapper>
    </DocsLayout>
)

export default IndexPage
