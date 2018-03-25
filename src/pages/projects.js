import React from 'react'
import Link from "gatsby-link";

const styles = {
  project: {
    title: {
      margin: '0.4em 0'
    },
    image: {
      margin: '0 0 0 0'
    },
    excerpt: {
      margin: '0 0 2em 0'
    }
  }
}

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      <h3 css={styles.project.title}>
        {post.frontmatter.title}
      </h3>
      <img css={styles.project.image}
        src={post.frontmatter.image}
      />
    </Link>
    <p css={styles.project.excerpt}>
      {post.excerpt}
    </p>
  </div>
);

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return (
  <div>
    <h1>Selected Projects</h1>
    <div>{Posts}</div>
  </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query ProjectQuery {
    allMarkdownRemark(filter: {frontmatter: { path: { glob: "/projects/*" } }}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            image
          }
        }
      }
    }
  }
`;
