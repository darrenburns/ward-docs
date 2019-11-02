import React from "react"
import {graphql} from "gatsby"
import DocsLayout from "../components/docs-layout"
import tw from "tailwind.macro"
import css from "@emotion/styled"

const PageTitle = tw.h1`text-green-600`

export default function DocsPageTemplate({data}) {
  const {markdownRemark} = data
  const {html} = markdownRemark

  return (
      <DocsLayout>
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
  }`
