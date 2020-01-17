import tw from "tailwind.macro"
import {css} from "@emotion/core"
import {graphql, Link, useStaticQuery} from "gatsby"
import React from "react"
import Footer from "./footer"

const Navbar = tw.header`
  p-0 m-0 border-solid border-green-700 border-0 border-r-2
`

const SiteLogo = tw.h1`
  pb-0 m-0 mt-1 text-green-600
`

const SiteTitle = tw.div`
  text-gray-400 font-semibold
`

const SiteHeader = tw.div`
  mt-8 ml-8 flex
`

const SiteDescription = tw.div`
  text-xs font-mono text-gray-600
`

const SiteTitleAndDescription = tw.div`
  flex-col ml-2
`

const Sidebar = ({children}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          latestVersion
          githubVersionUrl
        }
      }
    }
  `)
  const siteTitle = data.site.siteMetadata.title
  const latestVersion = data.site.siteMetadata.latestVersion
  const githubVersionUrl = data.site.siteMetadata.githubVersionUrl
  return (<Navbar css={css`background-color: #272a36;`}>
        <SiteHeader>
          <Link
              to="/"
              style={tw`text-green-600 no-underline`}
          >
            <SiteLogo css={css`font-size: 2.8rem`}>
              W
            </SiteLogo>
          </Link>
          <SiteTitleAndDescription>
            <SiteTitle>{siteTitle}</SiteTitle>
            <SiteDescription>
              <a href={githubVersionUrl}>{latestVersion}</a>
            </SiteDescription>
          </SiteTitleAndDescription>
        </SiteHeader>
        {children}
        <Footer/>
      </Navbar>
  )
}

export default Sidebar
