import React from "react"
import PropTypes from "prop-types"
import {graphql, useStaticQuery} from "gatsby"

import Sidebar from "./sidebar"
import "./layout.css"
import tw from "tailwind.macro"
import Footer from "./footer"
import Navigation, {NavigationLink, NavigationSectionHeader} from "./navigation"
import {MainContent} from "./layout"



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
        <Sidebar siteTitle={data.site.siteMetadata.title}>
          <Navigation>
            <NavigationSectionHeader>
              Documentation
            </NavigationSectionHeader>
            {allDocPages.map(p =>
                <NavigationLink key={p.id} to={p.frontmatter.path || p.id}>
                  {p.frontmatter.title || p.id}
                </NavigationLink>
            )}
          </Navigation>
        </Sidebar>
        <MainContent>
          {children}
          <Footer/>
        </MainContent>
      </div>
  )
}

DocsLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DocsLayout
