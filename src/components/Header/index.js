import React from 'react'
import Link from 'gatsby-link'
import {HeaderCSS} from '../../layouts/layout'

var styles = {}
styles.link = {
  color: 'white',
  textDecoration: 'none',
}
styles.active = { color: 'yellow' }
styles.nav_li = {
  display: 'inline-block',
  listStyleType: 'none',
  margin: '0 1rem 0 0'
}
styles.ul = {
  margin: 0,
  padding: 0
}

const NavLink = (props) => (
  <li css={styles.nav_li}>
    <h4>
      <Link
        to={props.to}
        style={styles.link}
        activeStyle={styles.active}
      >
          {props.children}
      </Link>
    </h4>
  </li>
)

const Header = () => (
  <div {...HeaderCSS.Background}
  >
    <nav {...HeaderCSS.Container}
    >
      <ul css={styles.ul}>
        <li css={styles.nav_li}>
          <h2 style={{ margin: 0, color: "white"}}>
            Portfolio
          </h2>
        </li>
        <NavLink to='/projects'>
          Projects
        </NavLink>
        <NavLink to='/demos'>
          Demos
        </NavLink>
        <NavLink to='/open-source'>
          Open Source
        </NavLink>
      </ul>
    </nav>
  </div>
)

export default Header
