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
      }`)
  if (result.errors) {
    reporter.panicOnBuild("Error while fetching pages.")
    return
  }

  result.data.userGuide.edges.forEach(({node}) => {
    console.log("User guide path: ", node.frontmatter.path)
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

}
