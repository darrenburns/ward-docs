import React from "react"
import {graphql} from "gatsby"
import DocsLayout from "../components/docs-layout"
import tw from "tailwind.macro"
import DocNavigation from "../components/doc-navigation"

export default function Template({data}) {
  const {markdownRemark} = data
  const {allMarkdownRemark} = data
  const {frontmatter, html} = markdownRemark

  const allDocPages = allMarkdownRemark.edges.map(edge => edge.node.frontmatter)
  return (
      <DocsLayout allDocPages={allDocPages}>
        <div className="page-container">
          <h1>{frontmatter.title}</h1>
          <div className="page-content-container"
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
          frontmatter {
            title
            path
          }
        }
      }
    }
  }`