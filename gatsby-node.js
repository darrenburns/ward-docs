/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions
  const result = await graphql(`
      query {
        userGuide: allMdx(filter: {frontmatter: {section: {eq: "user guide"}}}) {
          edges {
            node {
              body
              frontmatter {
                path
                title
                section
              }
            }
          }
        }
        apiDocs: allMarkdownRemark(filter: {frontmatter: {type: {eq: "apidocs"}}}) {
          edges {
            node {
              html
              frontmatter {
                path
                title
                section
              }
            }
          }
        }
      }`)
  if (result.errors) {
    reporter.panicOnBuild("Error while fetching pages.")
    return
  }

  result.data.userGuide.edges.forEach(({node}) => {
    console.log("User guide path: ", node.frontmatter.path)
  })

  result.data.apiDocs.edges.forEach(({node}) => {
    console.log("API docs path: ", node.frontmatter.path)
  })

  // Create pages for the MDX files
  const mdxPageTemplate = path.resolve(`src/templates/mdx-doc-page-template.js`)
  result.data.userGuide.edges
      .forEach(({node}) => {
            const path = node.frontmatter.path
            createPage({
              path: path,
              component: mdxPageTemplate,
            })
          }
      )


  // Create pages for each of the Markdown files
  const pageTemplate = path.resolve(`src/templates/doc-page-template.js`)
  result.data.apiDocs.edges
      .forEach(({node}) => {
        const path = node.frontmatter.path
        createPage({
          path: path,
          component: pageTemplate,
        })
      })

}
