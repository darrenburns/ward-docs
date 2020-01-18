import tw from "tailwind.macro"
import {css} from "@emotion/core"
import {graphql, Link, useStaticQuery} from "gatsby"
import React, {useEffect} from "react"
import Footer from "./footer"
import githubLogo from "../images/gh-logo.svg"

const Navbar = tw.header`
  p-0 m-0 border-solid border-green-700 border-0 border-r-2 bg-gray-900
`

const SiteLogo = tw.h1`
  pb-0 m-0 mt-1 text-green-600
`

const SiteTitle = tw.div`
  text-gray-400 font-semibold
`

const SiteHeader = tw.div`
  pt-4 pl-4 flex bg-gray-900
`

const SiteDescription = tw.div`
  text-xs font-mono
`

const SiteTitleAndDescription = tw.div`
  flex-col ml-2
`

const SearchWrapper = tw.div`
  m-4 mr-0
`

const GitHubWrapper = tw.div`
  p-4 pb-0 pl-6 flex bg-gray-900
`

const GitHubInfo = tw.div`
  text-xs pl-2 flex-column text-gray-500
`

const GitHubStarsAndForks = tw.div`
  text-xs
`

const Sidebar = ({children}) => {

  useEffect(() => {
    window.docsearch({
      apiKey: "6566bf9cc0d24e52dd892df1208f9c1b",
      indexName: "wardpy",
      inputSelector: "#doc-search",
    })
  }, [])

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
  return (<Navbar>
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
        <GitHubWrapper>
          <img style={tw`mt-1 mb-0`} height="30px" width="30px" src={githubLogo} alt="GitHub logo"/>
          <GitHubInfo>
            <div>
              <a href="https://github.com/darrenburns/ward">darrenburns/ward</a>
            </div>
            <GitHubStarsAndForks>
              60 stars, 5 forks
            </GitHubStarsAndForks>
          </GitHubInfo>
        </GitHubWrapper>
        <SearchWrapper>
          <input id="doc-search" type="search" placeholder="Search docs..."/>
        </SearchWrapper>
        {children}
        <Footer/>
      </Navbar>
  )
}

export default Sidebar
