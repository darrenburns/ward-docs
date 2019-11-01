import React from "react"
import tw from "tailwind.macro"
import {Link} from "gatsby"

const NavigationContainer = tw.div`
  w-64
`


const NavigationLinkWrapper = tw.div`
   p-2 font-sans text-left text-sm rounded hover:bg-blue-100
`

export const linkStyle = tw`no-underline text-blue-700`
export const NavigationLink = (props) => (
    <Link css={linkStyle} {...props}>
      <NavigationLinkWrapper>
        {props.children}
      </NavigationLinkWrapper>
    </Link>
)

export const sectionHeaderStyle = tw`ml-2 mb-1 uppercase font-sans font-thin text-gray-600`
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