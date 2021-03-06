import React from "react"
import tw from "tailwind.macro"
import {graphql, useStaticQuery} from "gatsby"
import Sidebar from "./sidebar"
import Navigation, {NavigationLink} from "./navigation"

export const MainContent = tw.main`
  w-full
`

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
        <Sidebar siteTitle={data.site.siteMetadata.title}>
          <Navigation>
            <NavigationLink to="/">Home</NavigationLink>
            <NavigationLink to="/docs">Documentation</NavigationLink>
            <NavigationLink to="/tutorials">Tutorials</NavigationLink>
          </Navigation>
        </Sidebar>
        <MainContent>
          {children}
        </MainContent>
      </div>
  )

}

export default Layout

