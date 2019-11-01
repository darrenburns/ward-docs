import React from "react"
import PropTypes from "prop-types"
import {graphql, useStaticQuery} from "gatsby"
import "./layout.css"

import Sidebar from "./sidebar"
import tw from "tailwind.macro"
import Footer from "./footer"
import Navigation, {NavigationLink, NavigationSectionHeader} from "./navigation"
import {MainContent} from "./layout"

const NavigationSection = tw.div`border-b-2 border-green-500`
const NavigationSectionPages = tw.div``

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
        <NavigationLink key={page.id} to={page.frontmatter.path}>
          {page.frontmatter.title}
        </NavigationLink>
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
      <div style={{...tw`flex text-gray-500`, ...{backgroundColor: '#272125'}}}>
        <Sidebar siteTitle={data.site.siteMetadata.title}>
          <Navigation>
            {sectionsDom}
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
