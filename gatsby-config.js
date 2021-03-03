module.exports = {
  siteMetadata: {
    title: `Digitální filosof`,
    description: `Natrénovali jsme neuronovou síť texty filosofů a ta je teď schopná generovat texty další. Projekt Studií nových médií na FF UK z podzimu 2019.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Merriweather\:400,400i,700,700i,900,900i`],
        display: "swap",
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
  ],
}
