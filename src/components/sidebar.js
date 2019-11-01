import tw from "tailwind.macro"
import {css} from "@emotion/core"
import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navbar = tw.header`
  p-3 m-0
`

const SiteTitle = tw.h1`
  p-1 m-0 mb-2 text-blue-800
`
const unstyledLink = css`
  text-decoration: none; 
  color: inherit;
`

const Sidebar = ({children, siteTitle}) => (
    <Navbar>
      <SiteTitle>
        <Link
            to="/"
            css={unstyledLink}
        >
          {siteTitle}
        </Link>
      </SiteTitle>
      {children}
    </Navbar>
)

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar
