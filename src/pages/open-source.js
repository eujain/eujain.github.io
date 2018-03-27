import React from 'react'
import PostLink from "../components/post-link";

// TODO: replace this page with a single markdown document.

const OpenSourcePage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return (
  <div>
    <h1>Open Source Contributions</h1>
    <div>{Posts}</div>
  </div>
  )
}
/*  */
export default OpenSourcePage

export const pageQuery = graphql`
  query OpenSourceQuery {
    allMarkdownRemark(
      filter: {frontmatter: { path: { glob: "/open-source/*" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
