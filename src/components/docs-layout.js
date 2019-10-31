import React from "react"
import PropTypes from "prop-types"
import {graphql, useStaticQuery} from "gatsby"

import Header from "./header"
import "./layout.css"
import tw from "tailwind.macro"

const DocsLayout = ({children, allDocPages}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <div style={tw`flex`}>
        <Header siteTitle={data.site.siteMetadata.title}
                allDocPages={allDocPages}/>
        <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
  )
}

DocsLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DocsLayout
