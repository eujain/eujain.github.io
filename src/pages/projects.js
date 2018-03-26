import React from 'react'
import Link from "gatsby-link";
import Img from "gatsby-image"

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

const PostLink = ({ post }) => (
  <div css={styles.flex_item}>
    <Link to={post.frontmatter.path}>
      <h3 css={styles.project.title}>
        {post.frontmatter.title}
      </h3>
      <Img css={styles.project.image}
        sizes={post.frontmatter.image.childImageSharp.sizes}

        alt={post.frontmatter.title}
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
    <div css={styles.container}>
      {Posts}
    </div>
  </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query ProjectQuery {
    allMarkdownRemark(
      filter: {frontmatter: { path: { glob: "/projects/*" } } }
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
            image {
              childImageSharp {
                sizes(maxWidth: 700) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
