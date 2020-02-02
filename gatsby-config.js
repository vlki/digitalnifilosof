module.exports = {
  siteMetadata: {
    title: `Digitální filosof`,
    description: `Z anglických textů vybraných filosofů jsme složili korpusy, které jsme použili pro natrénování neuronové sítě specializované na pochopení a generování textu. Zkusili jsme tak stvořit virtuální osobnosti, „digitální filosofy,“ jejichž generované texty jsme analyzovali. Na tomto webu natrénované sítě zpřístupňujeme, abyste si mohli generování vyzkoušet sami.`,
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
  ],
}
