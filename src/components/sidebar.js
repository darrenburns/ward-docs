import tw from "tailwind.macro"
import {css} from "@emotion/core"
import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navbar = tw.header`
  p-3 m-0 mr-16
`

const SiteTitle = tw.h1`
  p-8 pb-0 m-0 mb-2 text-blue-800 font-sans
`
const unstyledLink = css`
  text-decoration: none; 
  color: inherit;
`

const Sidebar = ({children, siteTitle}) => (
    <Navbar css={css`background-color: #272a36;`}>
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
