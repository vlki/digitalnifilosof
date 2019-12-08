module.exports = {
  siteMetadata: {
    title: `Digitální filosof`,
    description: `Z textů vybraných filosofů jsme složili korpusy, které jsme použili pro natrénování neuronové sítě specializované na pochopení a generování textu. Zkusili jsme tak stvořit virtuální osobnosti, „digitální filosofy,“ jejichž výstupy lze díky této stránce generovat.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Merriweather`,
            subsets: [`latin-ext`],
            variants: [`400`, `400i`, `700`, `700i`, `900`, `900i`],
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
