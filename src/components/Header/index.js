import React from 'react'
import Link from 'gatsby-link'

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
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Portfolio
        </Link>
      </h1>
      <Link
        to="/demos"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        Demos
      </Link>
      <Link
        to="/open-source"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        Open Source
      </Link>
    </div>
  </div>
)

export default Header
