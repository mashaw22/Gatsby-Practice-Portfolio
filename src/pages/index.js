import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import {header, btn} from "../styles/home.module.css"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function Home({data}) {
  console.log(data)
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Develop</h2>
          <h3>Design & Technology</h3>
          <p>UX designer based in Texas.</p>
          <Link to="/projects" className={btn}>My Portfolio</Link>
        </div>
        <GatsbyImage image={getImage(data.file.childImageSharp.gatsbyImageData)}/>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: AUTO)
      }
    }
  }
`