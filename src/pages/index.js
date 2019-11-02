import React from "react"
import SEO from "../components/seo"
import {graphql, useStaticQuery} from "gatsby"
import DocsLayout from "../components/docs-layout"
import tw from "tailwind.macro"

const GiantLogo = tw.h1`
  text-green-600
`

const IndexContentWrapper = tw.section`
  text-center mt-16 lg:px-12 xl:px-32
`

const IndexTextIntro = tw.h3`
  p-4 font-semibold
`

const IndexTextExample = tw.div`
  p-4
`

const TerminalExample = tw.div`
  bg-black rounded text-left font-mono my-2 p-4 
`

const PassMarker = tw.span`
  bg-green-600 text-black p-1 font-mono
`

const ModuleName = tw.span`
  text-gray-700
`

const TerminalText = tw.div`
  font-mono
  text-xs md:text-sm lg:text-md xl:text-lg whitespace-pre-wrap

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

const FeaturePaneList = tw.div`
  block lg:flex border-green-600 p-1 my-4 border-solid border-2 border-l-0 border-r-0
`

const FeaturePane = tw.div`
  p-4 bg-black text-left rounded m-2
`


const IndexPage = () => {
  const data = useStaticQuery(graphql`
      query GetExamples {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "example"}}}) {
        edges {
          node {
            id
            html
            frontmatter {
              description
            }
          }
        }
      }
    }
  `)

  const examplesFromMarkdown = data.allMarkdownRemark.edges.map(example => (
      <IndexTextExample key={example.node.id}>
        {example.node.frontmatter.description}
        <div dangerouslySetInnerHTML={{__html: example.node.html}}/>
      </IndexTextExample>
  ))

  return (
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
              <TerminalText>
                Showing diff of <Green>expected value</Green> vs <Red>actual value</Red>:<br/><br/>
                <Green css={{marginLeft: 40}}>['apples', 'bananas', <GreenHighlight>'kiwi</GreenHighlight>s']</Green><br/>
                <Red css={{marginLeft: 40}}>['apples', 'bananas', <RedHighlight>'orange</RedHighlight>s']</Red>
              </TerminalText>
            </TerminalExample>
          </IndexTextExample>

          <IndexTextExample>
            Describe your tests with strings, not function names.
            <TerminalExample>
              <TerminalText>
                <PassMarker>PASS</PassMarker>
                <ModuleName> test_util:12: </ModuleName>
                palindrome("noon") is True
              </TerminalText>
            </TerminalExample>
          </IndexTextExample>

          <FeaturePaneList>
            <FeaturePane>
              <PassMarker css={tw`font-semibold px-2`}>CROSS PLATFORM</PassMarker>
              <TerminalText css={tw`mt-2`}>Tested on Windows, Mac OS, and Linux systems.</TerminalText>
            </FeaturePane>
            <FeaturePane>
              <PassMarker css={tw`font-semibold px-2`}>ZERO CONFIG</PassMarker>
              <TerminalText css={tw`mt-2`}>Sensible defaults make configuration optional.</TerminalText>
            </FeaturePane>
            <FeaturePane>
              <PassMarker css={tw`font-semibold px-2`}>TEST SEARCH</PassMarker>
              <TerminalText css={tw`mt-2`}>Loose querying of test code for quick development.</TerminalText>
            </FeaturePane>
          </FeaturePaneList>

          {examplesFromMarkdown}

        </IndexContentWrapper>
      </DocsLayout>
  )
}


export default IndexPage
