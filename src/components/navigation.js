import React from "react"
import tw from "tailwind.macro"
import {Link} from "gatsby"

const NavigationContainer = tw.div`
  w-64 p-8
`

const NavigationLinkWrapper = tw.div`
   p-2 font-sans text-left text-sm rounded hover:bg-blue-100 hover:text-blue-900 hover:font-semibold
`

export const linkStyle = tw`no-underline text-blue-700`
export const NavigationLink = (props) => (
    <Link css={linkStyle} {...props}>
      <NavigationLinkWrapper>
        {props.children}
      </NavigationLinkWrapper>
    </Link>
)

export const sectionHeaderStyle = tw`p-1 mt-2 uppercase font-sans text-sm subpixel-antialiased text-gray-600`
export const NavigationSectionHeader = ({children}) => (
    <section style={sectionHeaderStyle}>
      {children}
    </section>
)

export default function Navigation({children}) {
  return (
      <NavigationContainer>
        {children}
      </NavigationContainer>
  )
}
