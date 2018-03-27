import React from 'react'
import Link from 'gatsby-link'
import CSS from '../../layouts/layout'

const NavLink = (props) => (
  <li {...CSS.Nav.Item}>
    <h4>
      <Link {...CSS.Nav.Link}
        to={props.to}
        activeStyle={CSS.Nav.Active}
      >
          {props.children}
      </Link>
    </h4>
  </li>
)

const HeaderComponent = () => (
  <div {...CSS.Header.Background}
  >
    <nav {...CSS.Nav.Container}
    >
      <ul {...CSS.Nav.List}>
        <li {...CSS.Nav.Item}>
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

export default HeaderComponent
