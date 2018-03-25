import React from 'react'
import Link from 'gatsby-link'

const link_style = {
  color: 'white',
  textDecoration: 'none',
}
const link_active = { color: 'yellow' }

const Header = () => (
  <div
    style={{
      background: 'black',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, color: "white"}}>
        Portfolio
      </h1>
      <Link
        exact to="/"
        style={link_style}
        activeStyle={link_active}
      >
        Projects
      </Link>
      <Link
        to="/demos"
        style={link_style}
        activeStyle={link_active}
      >
        Demos
      </Link>
      <Link
        to="/open-source"
        style={link_style}
        activeStyle={link_active}
      >
        Open Source
      </Link>
    </div>
  </div>
)

export default Header
