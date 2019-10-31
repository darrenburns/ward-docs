import React from "react"
import tw from "tailwind.macro"
import {Link} from "gatsby"

const DocNavigationContainer = tw.div`
  w-1/8 border-r-1 border-gray-800
`

const DocLink = tw.div`
   p-4 font-sans text-lg text-left
`

const linkStyle = tw`no-underline text-gray-800`

export default function DocNavigation({allDocPages}) {
  return (
      <DocNavigationContainer>
        {allDocPages.map(p =>
            <DocLink>
              <Link to={p.path}
                    css={linkStyle}>
                {p.title}
              </Link>
            </DocLink>)
        }
      </DocNavigationContainer>
  )
}