import React from "react"
import tw from "tailwind.macro"

const FooterWrapper = tw.footer`
  text-sm p-8
`


const Footer = () => (
    <FooterWrapper>
      © {new Date().getFullYear()} <a href="https://twitter.com/_darrenburns">Darren Burns</a>
    </FooterWrapper>
)

export default Footer