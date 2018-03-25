import React from 'react'
import Link from 'gatsby-link'

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
  <div
    style={{
      background: 'black',
      marginBottom: '1.45rem',
    }}
  >
    <nav
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1rem 1.0875rem',
      }}
    >
      <ul css={styles.ul}>
        <li css={styles.nav_li}>
          <h2 style={{ margin: 0, color: "white"}}>
            Portfolio
          </h2>
        </li>
        <NavLink to='/project'>
          Projects
        </NavLink>
        <NavLink to='/demo'>
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
