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
        <li css={styles.nav_li}><Link
          exact to="/"
          css={styles.link}
          activeStyle={styles.active}
        >
          Projects
        </Link></li>
        <li css={styles.nav_li}><Link
          to="/demos"
          css={styles.link}
          activeStyle={styles.active}
        >
          Demos
        </Link></li>
        <li css={styles.nav_li}><Link
          to="/open-source"
          css={styles.link}
          activeStyle={styles.active}
        >
          Open Source
        </Link></li>
      </ul>
    </nav>
  </div>
)

export default Header
