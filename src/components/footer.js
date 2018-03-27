import React from 'react'
import {HeaderCSS, FooterCSS} from '../layouts/layout'
import {css} from 'glamor'
import Link from 'gatsby-link'

const styles = {
  item: {
    color: 'white',
    display: 'inline-block',
    listStyleType: 'none',
    margin: '0 1rem 0 0'
  },
  ul: {
    margin: 0,
    padding: 0
  },
  footer: {
    background: 'black',
    flexShrink: 0
  }
}

const FooterLink = ({children, to}) => (
  <li css={styles.item}>
    <h4>
      <a href={to}
        className={`${FooterCSS.Link}`}
      >
        {children}
      </a>
    </h4>
  </li>
)

const Footer = () => (
  <div {...css(styles.footer)}
  >
    <div {...HeaderCSS.Container}
    >
      <ul css={styles.ul}>
        <li css={styles.item}>
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

export default Footer
