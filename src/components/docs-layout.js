import React from "react"
import PropTypes from "prop-types"
import {graphql, useStaticQuery} from "gatsby"

import Header from "./header"
import "./layout.css"
import tw from "tailwind.macro"
import Footer from "./footer"
import DocNavigation from "./doc-navigation"

const DocsLayout = ({children, allDocPages}) => {
  const data = useStaticQuery(graphql`
    query DocsSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <div style={tw`flex`}>
        <Header siteTitle={data.site.siteMetadata.title}>
          <DocNavigation allDocPages={allDocPages}/>
        </Header>
        <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
        >
          <main>{children}</main>
          <Footer/>
        </div>
      </div>
  )
}

DocsLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DocsLayout
