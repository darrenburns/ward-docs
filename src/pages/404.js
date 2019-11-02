import React from "react"
import SEO from "../components/seo"
import DocsLayout from "../components/docs-layout"

const NotFoundPage = () => {
  return (
      <DocsLayout>
        <SEO title="404: Not found"/>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist.</p>
      </DocsLayout>
  )
}

export default NotFoundPage
