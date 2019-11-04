import React from "react"
import {graphql} from "gatsby"
import DocsLayout from "../components/docs-layout"
import tw from "tailwind.macro"
import css from "@emotion/styled"
import {MDXRenderer} from "gatsby-plugin-mdx"
import {MDXProvider} from "@mdx-js/react"
import Highlight from "../components/highlight"

const PageTitle = tw.h1`text-green-600`

const MarkdownPageWrapper = tw.section`
  p-8 md:py-8 md:pl-24 md:pr-64
`

export default function MdxDocsPageTemplate({data}) {
  const {mdx} = data
  const {body} = mdx
  const components = {
    code: Highlight,
    p: tw.p`text-sm md:text-base`,
  }

  return (
      <MDXProvider components={components}>
        <DocsLayout>
          <MarkdownPageWrapper>
            <PageTitle>{mdx.frontmatter.title}</PageTitle>
            <div style={{...tw`w-auto`, ...css``}}>
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          </MarkdownPageWrapper>
        </DocsLayout>
      </MDXProvider>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: {path: {eq: $path}}) {
      body
      frontmatter {
        path
        title
      }
    }
  }`
