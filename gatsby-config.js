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
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#ffffff`,
    //     display: `minimal-ui`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
