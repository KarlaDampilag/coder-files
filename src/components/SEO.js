import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyIcon } from "../assets/icons"

export function SEO({ title }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  )

  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      title={title}
      titleTemplate={`%s ― ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: data.site.siteMetadata.description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: data.site.siteMetadata.description,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: data.site.siteMetadata.description,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `google-site-verification`,
          content: `qicJyW2cTTpGy-t8-FP9-wmytZ3wpZKIj7Y0ZrhoKos`
        }
      ]}
      link={[{ rel: "icon", type: "image/png", href: `${GatsbyIcon}` }]}
    />
  )
}
