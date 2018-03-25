module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [ // Order matters!
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: "markdown-pages",
      },
    },
    { // Typography.js
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/layouts/typography`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
