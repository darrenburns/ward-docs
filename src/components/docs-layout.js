import React from "react"
import PropTypes from "prop-types"
import {graphql, useStaticQuery} from "gatsby"
import "./layout.css"

import Sidebar from "./sidebar"
import tw from "tailwind.macro"
import Navigation, {NavigationLink, NavigationLinkWrapper, NavigationSectionHeader} from "./navigation"
import {MainContent} from "./layout"
import {Location} from "@reach/router"
import githubLogo from "../images/gh-logo.svg"

const NavigationSection = tw.div``
const NavigationSectionPages = tw.div`mb-4`
const NavigationTag = tw.span`ml-1 p-1 text-xs bg-orange-800 text-orange-300 font-semibold rounded`

const CommitExampleWrapper = tw.div`p-2 mb-4 flex border-0 border-l-2 border-green-500 border-solid`
const CommitInfo = tw.div`flex-col`

export const CommitExample = ({hash, url, description, title, repo}) => {
  return (
      <CommitExampleWrapper>
        <img style={tw`m-2 mr-4`} height="40px" width="40px" src={githubLogo} alt="GitHub logo"/>
        <CommitInfo>
          <a href={url}>
            <strong>{title}</strong>
          </a>
          <br/>
          <span style={tw`text-sm`}>
            {description}
            <br/>
            <em style={tw`text-gray-500`}>
              Example from <code>{hash.substring(0, 8)}</code> in {repo}
            </em>
          </span>
        </CommitInfo>
      </CommitExampleWrapper>
  )
}

const DocsLayout = ({children}) => {
  const data = useStaticQuery(graphql`
    query {
      mdxPages: allMdx {
          edges {
            node {
              id
              frontmatter {
                path
                title
                section
                sortKey
                tag
              }
            }
          }
        }
    }
  `)

  const mdxPages = data.mdxPages.edges.map(edge => edge.node)

  const sections = mdxPages.reduce((accumulated, page) => {
    const key = page.frontmatter.section || "user guide"
    const current = accumulated[key]
    if (!current) {
      accumulated[key] = [page]
    } else {
      accumulated[key].push(page)
    }
    return accumulated
  }, {})

  const sectionsDom = Object.keys(sections).map(sectionName => {
        let pagesInSection = sections[sectionName].sort((a, b) => a.frontmatter.sortKey - b.frontmatter.sortKey)
        pagesInSection = pagesInSection.map(page => {
          let tag = page.frontmatter.tag ? <NavigationTag>{page.frontmatter.tag}</NavigationTag> : ""
          return (
              <Location key={page.id}>
                {({location}) => {
                  const isActive = location.pathname === `${page.frontmatter.path}/`
                      || location.pathname === page.frontmatter.path
                  return (<NavigationLink key={page.id} to={page.frontmatter.path} isActive={isActive}>
                        {page.frontmatter.title} {tag}
                      </NavigationLink>
                  )
                }}
              </Location>
          )
        })


        return (
            <NavigationSection key={sectionName}>
              <NavigationSectionHeader>
                {sectionName}
              </NavigationSectionHeader>
              <NavigationSectionPages>
                {pagesInSection}
              </NavigationSectionPages>
            </NavigationSection>
        )
      }
  )

  sectionsDom.push(
      <NavigationSection key="useful links">
        <NavigationSectionHeader>
          Useful Links
        </NavigationSectionHeader>
        <NavigationSectionPages>
          <a key="ward on pypi" href="https://pypi.org/project/ward">
            <NavigationLinkWrapper>
              Ward on PyPI
            </NavigationLinkWrapper>
          </a>
          <a key="ward on github" href="https://github.com/darrenburns/ward">
            <NavigationLinkWrapper>
              Ward on GitHub
            </NavigationLinkWrapper>
          </a>
          <a key="ward-docs on github" href="https://github.com/darrenburns/ward-docs/tree/master/src/pages/docs">
            <NavigationLinkWrapper>
              Help improve these docs!
            </NavigationLinkWrapper>
          </a>
          <a key="issue tracker" href="https://github.com/darrenburns/ward/issues">
            <NavigationLinkWrapper>
              Issues and ideas
            </NavigationLinkWrapper>
          </a>
          <a key="changelog" href="https://github.com/darrenburns/ward/releases">
            <NavigationLinkWrapper>
              Changelog
            </NavigationLinkWrapper>
          </a>
        </NavigationSectionPages>
      </NavigationSection>
  )

  return (
      <div style={{...tw`flex text-gray-400`}}>
        <Sidebar>
          <Navigation>
            {sectionsDom}
          </Navigation>
        </Sidebar>
        <MainContent>
          {children}
        </MainContent>
      </div>
  )
}

DocsLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DocsLayout