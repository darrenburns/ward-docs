import React from "react"

import DocsLayout from "../components/docs-layout"
import SEO from "../components/seo"
import {graphql} from "gatsby"

const NotFoundPage = ({data}) => {
  const {allMarkdownRemark} = data
  const docPages = allMarkdownRemark.edges.map(edge => edge.node.frontmatter)
  return (
      <DocsLayout allDocPages={docPages}>
        <SEO title="404: Not found"/>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </DocsLayout>
  )
}

export const query = graphql`
query LinksQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          section
          path
        }
      }
    }
  }
}
`

export default NotFoundPage
