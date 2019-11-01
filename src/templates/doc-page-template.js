import React from "react"
import {graphql} from "gatsby"
import DocsLayout from "../components/docs-layout"
import tw from "tailwind.macro"

export default function Template({data}) {
  const {markdownRemark} = data
  const {allMarkdownRemark} = data
  const {html} = markdownRemark

  const allDocPages = allMarkdownRemark.edges.map(edge => edge.node)

  return (
      <DocsLayout allDocPages={allDocPages}>
        <div>
          <div style={tw`w-auto`}
               dangerouslySetInnerHTML={{__html: html}}/>
        </div>
      </DocsLayout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            section
          }
        }
      }
    }
  }`
