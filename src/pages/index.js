import React from 'react'
import { navigateTo } from "gatsby-link"

class IndexPage extends React.Component {
  componentWillMount(){
    // Redirect to Projects
    navigateTo("/project")
  }
  render(){
    return (
    <div>
      <p>TODO: redirect to projects</p>
    </div>
    )
  }
}

export default IndexPage
