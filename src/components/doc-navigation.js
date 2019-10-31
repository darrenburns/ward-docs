import React from "react"
import tw from "tailwind.macro"
import {Link} from "gatsby"

const DocNavigationContainer = tw.div`
  w-1/8 border-r-1 border-gray-800
`

const DocLink = tw.div`
   p-2 font-sans text-lg text-left
`

const linkStyle = tw`no-underline text-blue-100`

export default function DocNavigation({allDocPages}) {
  return (
      <DocNavigationContainer>
        {allDocPages.map(p =>
            <DocLink key={p.path}>
              <Link to={p.path}
                    css={linkStyle}>
                {p.title}
              </Link>
            </DocLink>)
        }
      </DocNavigationContainer>
  )
}