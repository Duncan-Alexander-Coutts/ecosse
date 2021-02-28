module.exports = {
  siteMetadata: {
    title: `Ecosse Global UK`,
    siteUrl: `https://www.ecosseglobaluk.com`,
    description: `Ecosse Global UK Customer Website`,
    author: `duncan-alexander-coutts`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ecosse Global UK`,
        short_name: `EGUK`,
        start_url: `/`,
        background_color: "#ffffff",
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en`,
        configPath: require.resolve(`./locales/config.json`),
      },
    },
    {
      resolve: `gatsby-theme-i18n-react-i18next`,
      options: {
        locales: `./locales`,
        defaultLocale: `./locales/en.json`,
        i18nextOptions: {
          fallbackLng: "en",
          interpolation: {
            escapeValue: false,
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
