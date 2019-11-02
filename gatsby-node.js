/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions
  const result = await graphql(
      `
      query {
        allMarkdownRemark(filter: {frontmatter: {type: {nin: ["example", "example-tab"]}}}) {
          edges {
            node {
              id
              html
              frontmatter {
                title
                path
              }
            }
          }
        }
      }
      `
  )
  if (result.errors) {
    reporter.panicOnBuild("Error while fetching pages.")
    return
  }

  // Create pages for each of the Markdown files based on their name
  const pageTemplate = path.resolve(`src/templates/doc-page-template.js`)
  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    const path = node.frontmatter.path
    createPage({
      path: path || node.id,
      component: pageTemplate,
    })
  })


}
