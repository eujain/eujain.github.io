import React from 'react'
import CSS from '../layouts/layout'
import {css} from 'glamor'
import Link from 'gatsby-link'

const FooterLink = ({children, to}) => (
  <li {...CSS.Nav.Item}>
    <h4>
      <a {...CSS.Nav.Link}
        href={to}
      >
        {children}
      </a>
    </h4>
  </li>
)

const FooterComponent = () => (
  <div {...CSS.Nav.Background}
  >
    <div {...CSS.Nav.Container}
    >
      <ul {...CSS.Nav.List}>
        <li {...CSS.Nav.Item}>
          Copyright © 2018 - Eujain Ting
        </li>
        <FooterLink to="mailto:eujain@gmail.com">
          eujain@gmail.com
        </FooterLink>
        <FooterLink to="https://github.com/ratiotile/">
          github.com/ratiotile
        </FooterLink>
        <FooterLink to="https://bitbucket.org/ratiotile/">
          bitbucket.org/ratiotile
        </FooterLink>
      </ul>
    </div>
  </div>
)

export default FooterComponent
