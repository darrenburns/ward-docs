import React from "react"
import Footer from "./footer"
import tw from "tailwind.macro"
import {graphql, useStaticQuery} from "gatsby"
import Header from "./header"

const Layout = ({children}) => {
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
        <Header siteTitle={data.site.siteMetadata.title}>
          Non-documentation navigation.
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

export default Layout

