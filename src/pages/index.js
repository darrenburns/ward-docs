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

const IndexSectionHeading = tw.h2`
  mb-1 text-green-600
`

const IndexSectionIntroText = tw.p`
  mb-0
`

const TerminalExample = tw.div`
  bg-black rounded text-left font-mono p-4 
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

const FixturesExample = tw.div`
  flex p-2
`

const TextEditor = tw.div`
  p-4 pb-0 m-2 rounded bg-black flex-grow w-1/2
`
const TextEditorTab = tw.div`
  text-green-600 font-semibold bg-gray-900 rounded-t-lg w-3/5 p-2
`

const TextEditorBody = tw.div`
`

const TextEditorDescription = tw.div`
  text-sm p-2 mb-2 pt-0
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      examples: allMarkdownRemark(filter: {frontmatter: {type: {eq: "example"}}}) {
        edges {
          node {
            id
            html
          }
        }
      }
      exampleTabs: allMarkdownRemark(filter: {frontmatter: {type: {eq: "example-tab"}}}) {
        edges {
          node {
            id
            html
            frontmatter {
              fakeTabName
              description
            }
          }
        }
      }
    }
  `)

  const examplesFromMarkdown = data.examples.edges.map(example => (
      <IndexTextExample key={example.node.id}>
        {example.node.frontmatter.description}
        <div dangerouslySetInnerHTML={{__html: example.node.html}}/>
      </IndexTextExample>
  ))

  const inFileExamples = data.exampleTabs.edges.map(e => e.node)

  const userTestFile = inFileExamples.find(e => e.frontmatter.fakeTabName === "user_fixtures.py")
  const fixturesFile = inFileExamples.find(e => e.frontmatter.fakeTabName === "test_users.py")

  return (
      <DocsLayout>
        <SEO title="Ward"/>
        <IndexContentWrapper>
          <GiantLogo css={{fontSize: 82}}>W</GiantLogo>
          <IndexTextIntro>
            Ward is a modern testing framework for Python 3.6 and beyond.
          </IndexTextIntro>

          <IndexSectionHeading>
            Descriptive
          </IndexSectionHeading>
          <IndexSectionIntroText>
            Describe your tests with strings, not <code style={tw`text-lg bg-gray-900 p-1`}>long_and_unreadable_function_names</code>.
          </IndexSectionIntroText>
          <IndexTextExample>
            <TerminalExample>
              <TerminalText>
                <PassMarker>PASS</PassMarker>
                <ModuleName> test_util:12: </ModuleName>
                palindrome("noon") is True
              </TerminalText>
            </TerminalExample>
          </IndexTextExample>

          <IndexSectionHeading>
            Readable
          </IndexSectionHeading>
          <IndexSectionIntroText>
            Understand failures quickly with colourful unified diff output.
          </IndexSectionIntroText>
          <IndexTextExample>
            <TerminalExample>
              <TerminalText>
                Showing diff of <Green>expected value</Green> vs <Red>actual value</Red>:<br/><br/>
                <Green css={{marginLeft: 40}}>['apples',
                  'bananas', <GreenHighlight>'kiwi</GreenHighlight>s']</Green><br/>
                <Red css={{marginLeft: 40}}>['apples', 'bananas', <RedHighlight>'orange</RedHighlight>s']</Red>
              </TerminalText>
            </TerminalExample>
          </IndexTextExample>


          <IndexSectionHeading>
            Modular
          </IndexSectionHeading>
          <IndexSectionIntroText>
            Manage test setup and teardown using fixtures that rely on Python's import system, not name matching.
          </IndexSectionIntroText>
          <FixturesExample>
            <TextEditor>
              <TextEditorDescription>
                {userTestFile.frontmatter.description}
              </TextEditorDescription>
              <TextEditorTab css={{marginBottom: -9}}>{userTestFile.frontmatter.fakeTabName}</TextEditorTab>
              <TextEditorBody>
                <div dangerouslySetInnerHTML={{__html: userTestFile.html}}/>
              </TextEditorBody>
            </TextEditor>
            <TextEditor>
              <TextEditorDescription>
                {fixturesFile.frontmatter.description}
              </TextEditorDescription>
              <TextEditorTab css={{marginBottom: -9}}>{fixturesFile.frontmatter.fakeTabName}</TextEditorTab>
              <TextEditorBody>
                <div dangerouslySetInnerHTML={{__html: fixturesFile.html}}/>
              </TextEditorBody>
            </TextEditor>
          </FixturesExample>

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
