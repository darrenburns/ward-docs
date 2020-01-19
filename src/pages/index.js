import React from "react"
import SEO from "../components/seo"
import {graphql, useStaticQuery} from "gatsby"
import DocsLayout from "../components/docs-layout"
import tw from "tailwind.macro"
import {
  TestOutputLine,
  Flex,
  Green,
  GreenHighlight,
  OutputLineLeftCol,
  OutputLineRightCol,
  PassMarker,
  Red,
  RedHighlight,
  TerminalExample,
  TerminalText,
} from "../components/ward-test-output"
import {Link} from "@reach/router"

const GiantLogo = tw.h1`
  text-green-600
`

const IndexContentWrapper = tw.section`
  text-left mt-16 px-6 lg:px-12 xl:px-26 pb-12
`

const IndexTextIntro = tw.h3`
  font-semibold
`

const IndexTextExample = tw.div`
  p-0 mb-6
`

const IndexSectionHeading = tw.h2`
  mb-1 text-green-600
`

const IndexSectionIntroText = tw.p`
  mb-2 text-base
`

const FeaturePaneList = tw.div`
  block lg:flex
  my-4
  border-green-600 
`

const FeaturePane = tw.div`
  p-4 mr-2 mb-2 lg:mb-0
  bg-black text-left rounded 
`

const FixturesExample = tw.div`
  block lg:flex mb-2
`

const TextEditor = tw.div`
  p-4 mr-2 mb-2 w-full lg:w-1/2 lg:mb-0
  rounded bg-black
`
const TextEditorTab = tw.div`
  text-green-600 font-semibold bg-gray-900 rounded-t-lg w-3/5 p-2 text-center
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
  const parameteriseFile = inFileExamples.find(e => e.frontmatter.fakeTabName === "test_utils.py")

  return (
      <DocsLayout>
        <SEO title="Ward"/>
        <IndexContentWrapper>
          <GiantLogo css={{fontSize: 82}}>Ward</GiantLogo>
          <IndexTextIntro>
            A testing framework for Python 3.6 and beyond.
          </IndexTextIntro>

          <IndexSectionHeading>
            Descriptive testing
          </IndexSectionHeading>
          <IndexSectionIntroText>
            Describe your tests <Link to="/guide/writing-tests">with strings</Link>, not <code
              style={tw`text-lg bg-gray-900 p-1`}>long_and_unreadable_function_names</code>.
          </IndexSectionIntroText>
          <IndexTextExample>
            <TerminalExample>
              <TestOutputLine lineNumber="7" marker="PASS" moduleName="test_util"
                              description="palindrome('noon') is True"/>
              <TestOutputLine lineNumber="12" marker="FAIL" moduleName="test_users"
                              description="get_user(id=1) returns user 1"/>
              <TestOutputLine lineNumber="19" marker="SKIP" moduleName="test_todos"
                              description="mark_done(todo_id=3) returns todo 3" note="[WIP]"/>
            </TerminalExample>
          </IndexTextExample>

          <IndexSectionHeading>
            Readable output
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
            Modular test dependencies
          </IndexSectionHeading>
          <IndexSectionIntroText>
            Manage test setup and teardown using <Link to="/guide/fixtures">fixtures</Link> cached to suit your needs.
          </IndexSectionIntroText>
          <IndexTextExample>
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
          </IndexTextExample>


          <IndexSectionHeading>
            Expressive parameterised testing
          </IndexSectionHeading>
          <IndexSectionIntroText>
            <Link to="/guide/writing-tests">Parameterise tests</Link> to have Ward call your test multiple times with
            different arguments.
          </IndexSectionIntroText>
          <IndexTextExample>
            <div dangerouslySetInnerHTML={{__html: parameteriseFile.html}}/>
            <IndexSectionIntroText>Ward will expand this into 4 distinct tests, each with their own
              description:</IndexSectionIntroText>
            <TerminalExample>
              <TerminalText>
                <TestOutputLine lineNumber="47 [1/4]" marker="PASS" moduleName="test_util"
                                description="truncate('hello world', num_chars=20) returns 'hello world'"/>
                <TestOutputLine lineNumber="47 [2/4]" marker="FAIL" moduleName="test_util"
                                description="truncate('hello world', num_chars=11) returns 'hello world'"/>
                <TestOutputLine lineNumber="47 [3/4]" marker="PASS" moduleName="test_util"
                                description="truncate('hello world', num_chars=10) returns 'hello w...'"/>
                <TestOutputLine lineNumber="47 [4/4]" marker="PASS" moduleName="test_util"
                                description="truncate('hello world', num_chars=5) returns 'he...'"/>
              </TerminalText>
            </TerminalExample>

          </IndexTextExample>

          <IndexSectionHeading>
            More features
          </IndexSectionHeading>
          <IndexTextExample>
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
          </IndexTextExample>

          {examplesFromMarkdown}

          <IndexSectionHeading>
            Interested?
          </IndexSectionHeading>
          <IndexTextExample>
            <IndexSectionIntroText>
              Ward is currently in development on <a href="https://github.com/darrenburns/ward">GitHub</a>. <br/>
            </IndexSectionIntroText>
            <IndexSectionIntroText>
              It's available on <a href="https://pypi.org/project/ward/">PyPI</a>, and can be installed using pip:
            </IndexSectionIntroText>
            <IndexTextExample>
              <TerminalExample>
                <TerminalText>
                  <Flex>
                    <OutputLineLeftCol>
                      <Green>$</Green>
                    </OutputLineLeftCol>
                    <OutputLineRightCol>
                      pip install ward
                    </OutputLineRightCol>
                  </Flex>
                </TerminalText>
              </TerminalExample>
            </IndexTextExample>
          </IndexTextExample>

        </IndexContentWrapper>
      </DocsLayout>
  )
}


export default IndexPage
