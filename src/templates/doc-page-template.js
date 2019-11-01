import React from "react"
import {graphql} from "gatsby"
import DocsLayout from "../components/docs-layout"
import tw from "tailwind.macro"
import css from "@emotion/styled"

const PageTitle = tw.h1`text-green-600`

export default function Template({data}) {
  const {markdownRemark} = data
  const {allMarkdownRemark} = data
  const {html} = markdownRemark

  const allDocPages = allMarkdownRemark.edges.map(edge => edge.node)

  return (
      <DocsLayout allDocPages={allDocPages}>
        <PageTitle>{markdownRemark.frontmatter.title}</PageTitle>
        <div style={{...tw`w-auto`, ...css``}}
             dangerouslySetInnerHTML={{__html: html}}/>
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
