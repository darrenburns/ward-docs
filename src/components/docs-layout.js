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
      allMarkdownRemark(filter: {frontmatter: {type: {nin: ["example", "example-tab"]}}}) {
        edges {
          node {
            id
            frontmatter {
              title
              path
              section
            }
          }
        }
      }
    }
  `)

  const allDocPages = data.allMarkdownRemark.edges.map(edge => edge.node)

  const sections = allDocPages.reduce((accumulated, page) => {
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
    const pagesInSection = sections[sectionName].map(page => (
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
      <div style={{...tw`flex text-gray-500`}}>
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