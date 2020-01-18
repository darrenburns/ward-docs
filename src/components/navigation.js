import React from "react"
import tw from "tailwind.macro"
import {Link} from "gatsby"


const NavigationLinkWrapper = tw.div`
   p-2 font-sans text-left text-sm text-gray-400 hover:bg-gray-800 hover:text-green-400 rounded-l hover:font-semibold
`
export const ActiveNavigationLinkWrapper = tw.div`p-2 font-sans text-left text-sm text-green-400 border-0 border-l-2 border-solid border-green-500`

export const NavigationLink = ({children, to, isActive}) => {
  const NavLinkWrapper = isActive ? ActiveNavigationLinkWrapper : NavigationLinkWrapper
  return (
      <Link to={to}>
        <NavLinkWrapper>
          {children}
        </NavLinkWrapper>
      </Link>
  )
}

export const sectionHeaderStyle = tw`ml-2 mt-2 mb-2 uppercase text-sm text-green-600`
export const NavigationSectionHeader = ({children}) => (
    <section style={sectionHeaderStyle}>
      {children}
    </section>
)

const NavigationContainer = tw.div`
  w-64 p-8 pl-4 pr-0 pt-0 bg-gray-900
`
export default function Navigation({children}) {
  return (
      <NavigationContainer>
        {children}
      </NavigationContainer>
  )
}
