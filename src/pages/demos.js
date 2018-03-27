import React from 'react'
import Link from "gatsby-link";
import CSS from "../layouts/layout"

const DemoLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      <h3 {...CSS.Collection.Title}>
        {post.frontmatter.title}
      </h3>
    </Link>
    <p {...CSS.Collection.Excerpt}>
      {post.excerpt}
    </p>
  </div>
);

const DemosPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <DemoLink key={edge.node.id} post={edge.node} />);

  return (
  <div>
    <h1>Demos</h1>
    <div>{Posts}</div>
  </div>
  )
}

export default DemosPage

export const pageQuery = graphql`
  query DemosQuery {
    allMarkdownRemark(
      filter: {frontmatter: { path: { glob: "/demos/*" } } }
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
