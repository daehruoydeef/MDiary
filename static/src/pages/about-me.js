import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profil.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="about me" />
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{ width: "250px" }}
      />
      <div style={{ paddingTop: "5rem" }}>
        <p>building low tech solutions, generating art and making music</p>
      </div>
    </Layout>
  )
}

export default AboutMe
