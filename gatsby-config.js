module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [ // Order matters!
    'gatsby-plugin-react-helmet',

    // Filesystem source plugin
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/img`,
        name: "img",
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-image',
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
