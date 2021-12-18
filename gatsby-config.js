module.exports = {
  siteMetadata: {
    siteUrl: "https://drew-j-smith.github.io/meal-planner/",
    title: "meal-planner",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    'gatsby-plugin-postcss',
  ],
};
