import React from "react"
import tw from "tailwind.macro"

const FooterWrapper = tw.footer`
  text-xs p-6 text-gray-500
`


const Footer = () => (
    <FooterWrapper>
      © {new Date().getFullYear()} <a href="https://twitter.com/_darrenburns">Darren Burns</a>
    </FooterWrapper>
)

export default Footer