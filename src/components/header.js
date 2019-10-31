import tw from "tailwind.macro"
import {css} from "@emotion/core"
import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import DocNavigation from "./doc-navigation"

const Navbar = tw.header`
  w-1/6 p-2 m-0 bg-red-500
`

const SiteTitle = tw.h1`
  m-0 text-red-200
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
