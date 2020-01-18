import React from "react"
import PropTypes from "prop-types"
import {graphql, useStaticQuery} from "gatsby"
import "./layout.css"

import Sidebar from "./sidebar"
import tw from "tailwind.macro"
import Navigation, {NavigationLink, NavigationSectionHeader} from "./navigation"
import {MainContent} from "./layout"
import {Location} from "@reach/router"

const NavigationSection = tw.div``
const NavigationSectionPages = tw.div`mb-4`

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
    pagesInSection = pagesInSection.map(page => (
        <Location key={page.id}>
          {({location}) => {
            const isActive = location.pathname === `${page.frontmatter.path}/`
                || location.pathname === page.frontmatter.path
            return (<NavigationLink key={page.id} to={page.frontmatter.path} isActive={isActive}>
                  {page.frontmatter.title}
                </NavigationLink>
            )
          }}
        </Location>
    ))


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
  })

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