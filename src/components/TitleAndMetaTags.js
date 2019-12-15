import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function TitleAndMetaTags(props) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const title = props.title
    ? `${props.title} – ${siteMetadata.title}`
    : siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang: props.lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: siteMetadata.description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: siteMetadata.description,
        },
      ]}
    />
  )
}

TitleAndMetaTags.propTypes = {
  title: PropTypes.string,
}

export default TitleAndMetaTags
