module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [ // Order matters!
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-image',
    // Filesystem source plugin
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: "markdown-pages",
      },
    },
    'gatsby-plugin-glamor',
    // Typography.js
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/layouts/typography`,
      },
    },
    // Markdown to HTML parser
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end excerpt -->`
      }
    },
  ],
};
