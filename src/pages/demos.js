import React from 'react'
import Link from "gatsby-link";

const styles = {
  demo: {
    title: {
      margin: '0.4em 0'
    },
    image: {
      margin: '0 0 0 0'
    },
    excerpt: {
      margin: '0 0 2em 0'
    }
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    columnGap: 10,
    margin: '-10px',
  },
  flex_item: {
    flex: "1 1 500px",
    maxWidth: 700,
    minWidth: 400,
    margin: '10px'
  }
}

const DemoLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      <h3 css={styles.demo.title}>
        {post.frontmatter.title}
      </h3>
    </Link>
    <p css={styles.demo.excerpt}>
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
