const DateTime = require("luxon");

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    siteUrl: `https://www.ecosseglobaluk.com`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-react-i18next`,
    //   options: {
    //     path: `${__dirname}/locales`,
    //     languages: [`en`],
    //     defaultLanguage: `en`,

    //     // you can pass any i18next options
    //     // pass following options to allow message content as a key
    //     i18nextOptions: {
    //       interpolation: {
    //         escapeValue: false, // not needed for react as it escapes by default
    //         format: function (value, format) {
    //           if (value instanceof Date)
    //             return DateTime.fromJSDate(value).toFormat(format);
    //           return value;
    //         },
    //       },
    //     },
    //   },
    // },
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
            format: function (value, format) {
              console.log(value, format);
              if (value instanceof Date)
                return DateTime.fromJSDate(value).toFormat(format);
              return value;
            },
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
