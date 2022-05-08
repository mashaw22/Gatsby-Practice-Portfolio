import React from 'react'
import Layout from '../../components/Layout'
import {portfolio} from "../../styles/projects.module.css"

export default function Projects() {
  return (
      <Layout>
        <div className={portfolio}>
            <h2>Portfolio Projects</h2>
            <h3>Below is a list of my portfolio projects.</h3>
        </div>
      </Layout>
  )
}
