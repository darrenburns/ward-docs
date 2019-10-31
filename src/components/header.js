import tw from "tailwind.macro"
import {css} from "@emotion/core"
import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import DocNavigation from "./doc-navigation"

const Navbar = tw.header`
  w-1/6 p-3 m-0 bg-blue-500
`

const SiteTitle = tw.h1`
  p-1 m-0 text-blue-200
`
const unstyledLink = css`
  text-decoration: none; 
  color: inherit;
`

const Header = ({siteTitle, allDocPages}) => (
    <Navbar>
      <SiteTitle>
        <Link
            to="/"
            css={unstyledLink}
        >
          {siteTitle}
        </Link>
      </SiteTitle>
      <DocNavigation allDocPages={allDocPages}/>
    </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
